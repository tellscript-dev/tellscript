---
tell: feature/product-page
checks: [checks/shop.spec.ts]
face: [reference/product.png, tokens/brand.json]
recipe: recipes/product-photos.tell.md
rationale: [decision/one-voucher]
---
# Product page

## Intent
Buy a cast-concrete piece without
surprises: price, shipping and look
are settled before anyone pays.

## Behaviour · fixed
C1 Orders from €50.00 ship free.
   → shop.spec#free-shipping
C2 A second voucher is declined
   with a notice.
   → shop.spec#one-voucher

## Face · fixed
C3 Price and “Add to cart” stay in
   view without scrolling.
   → reference/product.png
C4 Every photo follows the recipe.
   → recipes/product-photos

## Why
decision/one-voucher: stacked
discounts were abused.

## Free
Layout, speed, stack, internal names.
