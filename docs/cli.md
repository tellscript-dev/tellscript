# CLI preview

The tell command line tool is in development. It extracts Tellscripts from existing code, checks code against them and rebuilds editions with any model.

> [!WARNING]
> `tell` is in development and not published yet. Everything on this page can already be done by asking your agent; the tool makes it repeatable. The commands and output below show the planned behaviour.

`tell`

```text
$ tell extract ./shop
  14 tells · 212 statements · 38 without a check yet
$ tell check
  ✓ code and Tellscript agree
$ tell regen --model latest --out edition-6
$ tell diff edition-5 edition-6
  ✓ same 209 · fixed 2 · proposal 1 (guided)
$ tell recipe product-photos --again
  ✓ new photo from recipe/product-photos
```

| Command | What it will do |
|---|---|
| `tell extract` | Reads code, tests and screenshots of an existing app and writes a Tellscript with its rings, marking what it cannot give a reason for as open |
| `tell check` | Checks on every commit whether code and Tellscript still agree: every statement bound, every check passing |
| `tell regen` | Rebuilds the app in an isolated folder, with the model and in the language you choose |
| `tell diff` | Compares two editions: what stayed, what got fixed, which guided proposals wait for a decision |
| `tell recipe` | Makes a picture, text or data set again from its recipe |

Planned around it: a hidden test bench for rebuilds, a drift guard for pull requests, a visual compare on phone and desktop, and an upgrade autopilot that rebuilds on every new model and opens a pull request.
