# The rebuild test

Once a week, let an agent rebuild the app from the Tellscript in an empty folder. Whatever goes missing was never written down.

You do not have to wait for a new model to find out whether your Tellscript is complete. Rebuild on purpose, regularly, and write down what goes missing.

## How to run it

1. Create an empty folder or a fresh worktree.
2. Give the agent only `tell/`, the reference images and recipes, and the contract files. No old code.
3. Ask it to build the feature, or the app, from the Tellscript.
4. Run the checks against the result, including the hidden bench.
5. For every failure, add the missing statement or the missing check to the Tellscript. Run again.

```text
Build this app from tell/ alone, in the empty folder
edition-next/. Do not read any existing source code.
Follow every fixed statement exactly, propose changes
to guided sections, and improve free sections freely.
When done, run the checks in checks/ against
edition-next/ and list every failing statement id.
```

## What it tells you

- **A failing fixed statement** means the edition is wrong. The agent fixes the code.
- **A failing check without a statement** means the Tellscript is incomplete. Write the statement.
- **A difference nobody minds** belongs to the free ring. Leave it.
- **A difference somebody minds** is a rule nobody wrote down. Write it, with its reason.

Teams that do this weekly find that their Tellscript stops growing after a few weeks. From then on it changes when the product changes, not when the code does.
