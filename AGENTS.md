# Agent instructions

This repository is the Tellscript format itself: spec, schema, docs, example and agent skill.

## Layout

- `spec/draft.md` is normative. `docs/` explains it for readers; `skills/tellscript/` teaches it to agents.
- `docs/`, `examples/castwell/`, `skills/tellscript/references/` and `.github/assets/` are generated from the
  Tellscript source folder at Riverlabs (`build_repo.py`). Change them there, or say in the pull request that the
  source needs the same change.
- `schema/front-matter.schema.json` and `scripts/check.mjs` must agree with section 3 and 9 of the spec.

## Checks

```sh
npm ci
npm run check            # validates every .tell.md file in examples/
```

CI also runs markdownlint, a link check and a spelling check.

## Rules

- Keep spec, schema, checker, skill and docs consistent in the same change. A spec change without the matching
  schema or docs change is incomplete.
- Use MUST, SHOULD and MAY in capitals only in `spec/`.
- American English, short sentences, no marketing words in the spec.
- Pull request titles follow Conventional Commits, for example `feat(spec): allow text ids in Face` or
  `docs: explain guided rings`. The title becomes the squash commit and the changelog entry.
