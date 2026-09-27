# Decisions

A decision records why a rule exists and which alternatives were rejected, so no future rebuild tidies away the reason.

Odd rules have reasons. Without the reason, the next agent tidies the rule away and brings back the bug that caused it. A decision keeps the reason next to the rule.

`tell/decisions/one-voucher.md`

```text
# One voucher per order

Decided: 12 March 2026, Cedric May
Applies to: feature/cart C2, feature/product-page C2

## Why
Stacked discounts were abused: codes from newsletter,
partner and loyalty programmes combined to more than
40 % off. Support spent two days a month on refunds.

## Rejected
- A limit per customer: needs accounts; most orders are guests.
- A maximum discount: customers found it confusing.

## Check
→ cart.spec#one-voucher
```

## When to write one

- A fixed statement would look wrong to a newcomer.
- You rejected an obvious alternative.
- A bug or an incident led to the rule. These are the scars worth keeping; each gets a regression check.
- A guided proposal from a model is accepted. The decision records the measured gain.

## Changing a fixed statement

Fixed statements change only together with a decision: a new file, or a new dated entry in the existing one, that names the reason and what it replaces. The statement keeps its id if the rule is the same rule, refined; it gets a new id if it is a different rule.
