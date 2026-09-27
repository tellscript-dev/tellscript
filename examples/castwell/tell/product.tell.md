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
