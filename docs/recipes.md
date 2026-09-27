# Recipes

A recipe records how a picture, text or data set was made, so the tenth image matches the first and any of them can be made again.

Wherever AI makes something, the same holds as for code: lose the prompt and you lose the series. A recipe is a Tellscript for generated content. It records the brief, the model, the references and the parameters, and which files came from it.

`tell/recipes/product-photos.tell.md`

```markdown
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
```

## Rules for recipes

- **The style is fixed, the subject is free.** One brief holds a series together; each picture adds one sentence.
- **References are originals.** Real photographs, product shots, logos, screenshots. Never a generated image as the reference for the next one; quality drops with every generation.
- **Every output keeps its lineage.** A small sidecar next to each file names the recipe, model, prompt and date, so any file can be traced and made again.
- **The same works for documents and design.** Structure, tone, sources and template for a quarterly report; colours, type, spacing and their reasons for a design system.
