# API-REFERENCE.md — Shopify API Patterns for Qor Labs

> Reference for when Claude Code needs to interact with Shopify APIs directly.

---

## When to Use Which API

| Task | Use This |
|------|----------|
| Display products on frontend | **Liquid objects** (preferred) or Storefront API |
| Display collections on frontend | **Liquid objects** (preferred) or Storefront API |
| Build theme templates/sections | **Liquid objects** — always |
| Bulk update products/metafields | **Admin API (GraphQL)** |
| Manage inventory data | **Admin API (GraphQL)** |
| Create/update pages | **Admin API (GraphQL)** |
| Read order data | **Admin API (GraphQL)** |
| Cart / checkout interactions | **Shopify AJAX Cart API** (frontend JS) |

**Rule: If it's a theme template, use Liquid. If it's a data management task, use Admin API.**

---

## Shopify Admin API (GraphQL)

### Authentication

```bash
# Store URL
https://qor-labs.myshopify.com/admin/api/2026-01/graphql.json

# Headers
X-Shopify-Access-Token: [from .env.shopify — NEVER hardcode]
Content-Type: application/json
```

**Credentials are stored in `/Users/laurenadmin/_Projects/qor-labs/.env.shopify`**
**NEVER print, log, or commit the token. Load it from the env file.**

```bash
# Quick test from terminal (reads token from .env.shopify)
source .env.shopify
curl -X POST "https://qor-labs.myshopify.com/admin/api/2026-01/graphql.json" \
  -H "Content-Type: application/json" \
  -H "X-Shopify-Access-Token: $SHOPIFY_CLI_THEME_TOKEN" \
  -d '{"query": "{ shop { name } }"}'
```

### Common Queries

#### Get All Products
```graphql
query {
  products(first: 50) {
    edges {
      node {
        id
        title
        handle
        description
        productType
        vendor
        status
        images(first: 5) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price
              compareAtPrice
              sku
              inventoryQuantity
            }
          }
        }
      }
    }
  }
}
```

#### Get All Collections
```graphql
query {
  collections(first: 20) {
    edges {
      node {
        id
        title
        handle
        description
        image {
          url
          altText
        }
        productsCount
      }
    }
  }
}
```

#### Get Single Product by Handle
```graphql
query getProduct($handle: String!) {
  productByHandle(handle: $handle) {
    id
    title
    descriptionHtml
    images(first: 10) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 20) {
      edges {
        node {
          id
          title
          price
          compareAtPrice
          availableForSale
          sku
        }
      }
    }
    metafields(first: 10) {
      edges {
        node {
          namespace
          key
          value
          type
        }
      }
    }
  }
}
```

#### Update Product Metafield
```graphql
mutation updateProductMetafield($input: ProductInput!) {
  productUpdate(input: $input) {
    product {
      id
      metafields(first: 10) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}
```

---

## Shopify AJAX Cart API (Frontend)

Use this for add-to-cart, update cart, and cart drawer functionality.

```javascript
// Add to cart
fetch('/cart/add.js', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    id: variantId,       // Shopify variant ID (number)
    quantity: 1
  })
})
.then(res => res.json())
.then(data => {
  // Update cart drawer / cart count
});

// Get cart
fetch('/cart.js')
  .then(res => res.json())
  .then(cart => {
    // cart.items, cart.total_price, cart.item_count
  });

// Update cart item quantity
fetch('/cart/change.js', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    id: lineItemKey,    // Line item key (string)
    quantity: newQty     // 0 to remove
  })
})
.then(res => res.json());
```

---

## Liquid Objects Quick Reference

### Global Objects (Available Everywhere)

```liquid
{{ shop.name }}
{{ shop.url }}
{{ shop.currency }}
{{ cart.item_count }}
{{ cart.total_price | money }}
{{ customer.first_name }}    {%- comment -%} if logged in {%- endcomment -%}
```

### Product Object

```liquid
{{ product.title }}
{{ product.handle }}
{{ product.url }}
{{ product.description }}
{{ product.price | money }}
{{ product.compare_at_price | money }}
{{ product.featured_image | image_url: width: 800 }}
{{ product.available }}           {%- comment -%} true/false {%- endcomment -%}
{{ product.type }}
{{ product.vendor }}
{{ product.tags }}
{{ product.metafields.custom.field_name }}

{% for image in product.images %}
  {{ image | image_url: width: 800 }}
  {{ image.alt }}
{% endfor %}

{% for variant in product.variants %}
  {{ variant.id }}
  {{ variant.title }}
  {{ variant.price | money }}
  {{ variant.available }}
  {{ variant.sku }}
{% endfor %}
```

### Collection Object

```liquid
{{ collection.title }}
{{ collection.handle }}
{{ collection.url }}
{{ collection.description }}
{{ collection.image | image_url: width: 1200 }}
{{ collection.products_count }}
{{ collection.all_tags }}

{% for product in collection.products %}
  {% render 'product-card', product: product %}
{% endfor %}

{%- comment -%} Pagination {%- endcomment -%}
{% paginate collection.products by 12 %}
  {% for product in collection.products %}
    {% render 'product-card', product: product %}
  {% endfor %}
  {{ paginate | default_pagination }}
{% endpaginate %}
```

### Money Formatting

```liquid
{{ product.price | money }}                    → $29.99
{{ product.price | money_with_currency }}      → $29.99 USD
{{ product.price | money_without_currency }}   → 29.99
```

---

## Metafield Patterns

Use metafields for extended product data (specs, features, etc.)

### Accessing in Liquid
```liquid
{{ product.metafields.custom.specifications }}
{{ product.metafields.custom.warranty_info }}
{{ product.metafields.custom.weight }}
{{ product.metafields.custom.dimensions }}
```

### Setting via Admin API
```graphql
mutation {
  productUpdate(input: {
    id: "gid://shopify/Product/PRODUCT_ID",
    metafields: [
      {
        namespace: "custom",
        key: "specifications",
        value: "RPM: 10,000 | Capacity: 6 x 1.5ml | Noise: <60dB",
        type: "single_line_text_field"
      }
    ]
  }) {
    product { id }
    userErrors { field message }
  }
}
```

---

## ⚠️ API Guardrails

1. **Rate limits**: Admin API = 2 requests/second (leaky bucket). Don't bulk-fire requests.
2. **Never expose Admin API tokens in frontend code.** Admin API is server-side / CLI only.
3. **Storefront API is public-safe** and can be used in frontend JS if needed.
4. **Always check `userErrors`** in mutation responses before assuming success.
5. **Use cursor-based pagination** (`first`/`after`) for large datasets, not offset.
6. **API version**: Use `2026-01` (current). Check Shopify's changelog for deprecations.
