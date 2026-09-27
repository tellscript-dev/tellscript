# Files and folders

A Tellscript is a folder called tell/ in your repository, with one Markdown file per product, feature, contract and recipe, plus decisions and reference images.

A Tellscript is not one long document. It is a folder called `tell/` in your repository, with one file per thing that must survive a rebuild. Checks stay where your tests already live.

`your-repo/`

```text
tell/
  product.tell.md            purpose, users, principles
  features/
    product-page.tell.md     one flow: statements, states, texts
    cart.tell.md
  contracts/
    http.tell.md             routes and types, byte-exact
  decisions/
    one-voucher.md           why a rule exists, what was rejected
  recipes/
    product-photos.tell.md   how pictures are made
  reference/
    product.png              how a screen must look
checks/
  shop.spec.ts               one test per statement
```

## File names

- Tellscript files end in `.tell.md`, so every Markdown viewer renders them and tools can find them.
- The path mirrors the `tell` key in the front matter: `tell: feature/cart` lives in `tell/features/cart.tell.md`.
- Decisions are ordinary Markdown in `tell/decisions/`, one decision per file, named after the decision.
- Reference images live in `tell/reference/`, named after the screen and state they show, for example `cart-empty.png`.

## One file per feature, not per code file

Group by what the user experiences, not by how the code is split. A feature file describes one flow; the next edition may implement it in one file or in twenty. File-level Tellscripts exist, but only for files other code depends on directly; see [levels](proof.md#levels).

## Size

A good feature file is 30 to 80 lines. If it grows past 150, it usually holds two features. As a rule of thumb, a Tellscript is about a third as long as the code it describes.

> [!NOTE]
> Everything is plain text or an image. No service, no database, no lock-in: any agent that can read files can read a Tellscript.
