# Statements

A statement is one checkable sentence with a stable id and a reference line to the check that proves it. How to write, number and retire them.

Statements are the heart of a Tellscript. Each has an id that never changes, one sentence that a test can prove wrong, and a reference line that names the check.

`tell/features/cart.tell.md`

```markdown
## Behaviour · fixed
C2 When a second voucher arrives,
   it is declined with a notice.
   → cart.spec#one-voucher
```

## Anatomy

| Part | Example | Rule |
|---|---|---|
| Id | `C2` | A letter and a number, unique within the file. `P` for product principles, `C` for feature statements. |
| Sentence | When a second voucher arrives, it is declined with a notice. | One rule, in when-then form, with numbers where numbers matter. |
| Reference | `→ cart.spec#one-voucher` | The check that fails when the sentence stops being true. |

## Write it so a test can fail

| Vague | Checkable |
|---|---|
| The cart is fast. | `C4` The total updates within 200 ms of a change. |
| Vouchers work sensibly. | `C2` When a second voucher arrives, it is declined with a notice. |
| It looks like our brand. | `C3` The total stays visible, top right. → `reference/cart.png` |

- **One statement, one rule.** If the sentence needs “and”, it probably needs two ids.
- **Amounts, times and sizes are exact.** €50.00, not “around fifty”; 200 ms, not “fast”.
- **Texts users see are quoted and have ids** in the Face layer, so a rebuild cannot paraphrase them.
- **Describe the outcome, not the code.** “Declined with a notice”, not “throws a VoucherError”.

## Ids are forever

- Checks point to the id, never to the wording. You can rephrase a statement without touching its test.
- A removed statement retires its id. It is never reused for something else, so old test results stay meaningful.
- A statement whose reason nobody knows is marked `open`. It stays until someone finds the reason or decides to drop it.

`tell/features/checkout.tell.md`

```markdown
## Behaviour · fixed
C7 Orders to Switzerland show duties
   before payment. open: reason unknown
   → checkout.spec#duties
```
