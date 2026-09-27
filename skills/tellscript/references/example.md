<!-- Tellscript example: Castwell, a cast-concrete homeware shop. Four files, one after another. Riverlabs, 2026. -->

<!-- tell/product.tell.md -->
---
tell: product/shop
features: [product-page, cart, checkout]
tokens: tokens/brand.json
edition: 5
---
# Castwell, cast-concrete homeware

## Intent
Find the right piece and buy it in
three steps, on a phone as well.

## Principles · fixed
P1 Prices always show shipping.
   → checks/price.spec#shipping
P2 No page loads longer than 1 second.
   → checks/perf.spec#p95

## Why
decision/price-first: shipping questions
were the most common support case.

<!-- tell/features/product-page.tell.md -->
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

<!-- tell/features/cart.tell.md -->
---
tell: feature/cart
binds: [contract/http#POST /api/cart/voucher]
checks: [checks/cart.spec.ts]
face: [reference/cart.png, tokens/brand.json]
rationale: [decision/one-voucher]
proof: proven · edition 4
---
# Cart

## Intent
Buy without surprises: total and
shipping are settled before paying.

## Behaviour · fixed
C1 When the goods reach €50.00,
   shipping is free.
   → cart.spec#free-shipping
C2 When a second voucher arrives,
   it is declined with a notice.
   → cart.spec#one-voucher

## Face · fixed
C3 The total stays visible, top right.
   → reference/cart.png · text cart.total

## Build · guided
The server computes prices. Framework open.

## Why
decision/one-voucher: stacked discounts
were abused. Rejected: a limit per customer.

## Free
Speed, internal names, accessibility.

<!-- tell/recipes/product-photos.tell.md -->
---
tell: recipe/product-photos
model: gpt-image-2.5 · sunburst · 2K
refs: [brand/BRAND.md#photography]
lineage: every photo from this brief
---
# Product photos

## Style · fixed
Black-and-white studio photograph,
cast concrete on seamless pale grey.
Key light upper left, 45 degrees.
One colour only: signal green, one detail.

## Why
Green means one thing: what stays.

## Subject · free
One sentence per piece, e.g. shop-lamp.txt

<!-- checks/shop.spec.ts (excerpt) -->
```ts
// checks/shop.spec.ts
test("one-voucher", async ({ cart }) => {  // C2
  await cart.redeem("SUMMER10");
  const second = await cart.redeem("LOYAL5");
  expect(second.error).toBe("cart.voucher.used");
  await expect(cart.notice)
    .toHaveText(t("cart.voucher.used"));
});
```
