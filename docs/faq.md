# Questions

What people ask first about Tellscript: editions, existing code, models that ignore it, who changes it, which agents it works with, and how long it gets.

## What is an edition?

A code output built from the Tellscript by one particular model. It is replaceable. Data, migrations, shipped files and check results are not part of it; they stay when the next edition arrives. See [editions](editions.md).

## Do I have to throw away my code?

No. Your code keeps running, and the Tellscript grows next to it. You rebuild when you want: with the next model, for a redesign, when you switch platforms.

## What if the model ignores it?

Then the checks fail. Every fixed statement is bound to a test or a reference image. An edition that breaks one is not accepted. See [checks](checks.md).

## Are two editions the same?

In the fixed ring, yes, and that is checked. In the free ring they may differ. That is exactly where every model generation gets better.

## Who changes the Tellscript?

People through a pull request, or the agent with approval. A fixed statement only changes together with a [decision](decisions.md) and its reason.

## Which agents does it work with?

Any agent that can read files: Claude Code, Codex, Cursor, Gemini CLI, GitHub Copilot, OpenCode and open models. A Tellscript is readable Markdown in your repository, with no service and no lock-in. See [teach your agent](agents.md).

## How long is a Tellscript?

About a third as long as the code it describes, split into one file per feature of 30 to 80 lines. Readable for everyone on the team, not only developers.

## How is this different from a spec or a PRD?

A PRD says what to build, once, at the start. A Tellscript is checked against every edition, so it cannot go quietly stale, and its rings say how much freedom each part leaves to the model.

## How is it different from AGENTS.md or Cursor rules?

Those files tell an agent how to work in your project. A Tellscript tells it what the product must be in the end. They work well together: your AGENTS.md can point the agent to `tell/`.

## Is Tellscript open?

Yes. The format is plain Markdown and free to use. The specification and the example files are published openly by Riverlabs.
