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
