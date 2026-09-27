# Castwell: a complete example

Castwell is a small shop for cast-concrete homeware. Its Tellscript has four files and one check. It is the example
used throughout the [docs](../../docs/example.md).

```text
tell/
  product.tell.md                 purpose, principles P1 and P2
  features/product-page.tell.md   statements C1 to C4, with the look
  features/cart.tell.md           the cart, proven in edition 4
  recipes/product-photos.tell.md  how every product photo is made
checks/
  shop.spec.ts                    the check behind C2 (excerpt)
```

The checks folder holds an excerpt: the test that proves `C2`, one voucher per order. A full project keeps one test
per statement, and the reference images named in `face:` next to the files that use them.

Everything in this folder is dedicated to the public domain under [CC0 1.0](../../LICENSES/CC0-1.0.txt): copy it into
your own repository and change it freely.
