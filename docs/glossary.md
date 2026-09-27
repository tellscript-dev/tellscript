# Glossary

The terms used in Tellscript, from binding and edition to ring, recipe and the rebuild test, in one sentence each.

| Term | Meaning |
|---|---|
| **Tellscript** | A folder `tell/` of Markdown files that records what software must do, how it looks and why; the source every edition is built from |
| **Statement** | One checkable sentence with a stable id, for example `C2`, and a reference line to its check |
| **Id** | The permanent name of a statement; checks point to the id, never to the wording |
| **Binding** | The link between a statement and the check that proves it: the arrow line and the test name |
| **Check** | A test, contract comparison, reference image or lineage note that fails when a statement stops holding |
| **Layer** | A section of a file answering one question: Intent, Behaviour, Contracts, Face, Why, Recipes |
| **Ring** | How much a section may change in the next edition: fixed, guided or free |
| **Edition** | One build of the app from the Tellscript by one model; replaceable |
| **Front matter** | The block at the top of a file that names it and points to its checks, references and decisions |
| **Contract** | What other systems rely on, byte-exact: routes, types, tables, events |
| **Face** | What people recognise: tokens, components, texts with ids, reference images |
| **Reference image** | A screenshot of a screen in one state that the next edition is compared with |
| **Decision** | A dated record of why a rule exists and which alternatives were rejected |
| **Recipe** | A Tellscript for generated content: brief, model, references, parameters |
| **Lineage** | The note next to a generated file that names the recipe and model it came from |
| **Open** | A marker for a statement whose reason nobody knows yet |
| **Proof level** | How far a file can be trusted: described, bound or proven |
| **Hidden bench** | Checks and screenshots the building model never sees during a rebuild |
| **Rebuild test** | Rebuilding from the Tellscript alone in an empty folder, to find what was never written down |
