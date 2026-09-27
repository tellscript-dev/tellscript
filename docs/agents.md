# Teach your agent

Make Claude Code, Codex, Cursor, Gemini CLI, GitHub Copilot or any other coding agent read, write and respect your Tellscript, with one file or one prompt.

Every coding agent already reads instruction files from your repository. Tellscript needs only a few lines in the file your agent reads, and the agent keeps the Tellscript up to date as it works.

## One prompt, any agent

The fastest way: paste this into the agent you use. It teaches the agent the format from this site and writes the instructions into your repository, so the next session knows them too.

```text
Learn the Tellscript format from
https://tellscript.com/llms-full.txt

Then add a short "Tellscript" section to the instruction
file you read here (AGENTS.md, CLAUDE.md, GEMINI.md,
.cursor/rules or .github/copilot-instructions.md):

- tell/ is the source of truth for what this app must
  do and look like. Read the matching file before
  changing behaviour.
- Never break a fixed statement. Propose changes to
  guided sections; improve free sections freely.
- New or changed behaviour updates tell/ in the same
  change: a stable id and a check per statement.
```

## The lines to add

If you prefer to write it yourself, this is the section. It is the same for every agent; only the file differs.

`AGENTS.md`

```text
## Tellscript

tell/ is the source of truth for what this app must do, how it looks
and why. Format: https://tellscript.com/docs

- Before changing behaviour, read the matching file in tell/.
- Fixed sections are rebuilt exactly. Never change a fixed statement
  to make a test pass; propose a decision instead.
- Guided sections: propose improvements with a measurable gain.
- Free sections: improve them freely; only the checks decide.
- New or changed behaviour updates tell/ in the same change:
  a stable id, one checkable sentence, and a → line to its check.
```

## Where each agent reads it

| Agent | File | Notes |
|---|---|---|
| Codex | `AGENTS.md` | Read from the repository root and from folders on the way to the file being edited |
| Cursor | `AGENTS.md` or `.cursor/rules/tellscript.mdc` | A project rule can apply to `tell/**` only |
| GitHub Copilot | `AGENTS.md` or `.github/copilot-instructions.md` | Used by Copilot chat and the coding agent |
| Gemini CLI | `GEMINI.md`, or `AGENTS.md` | Add `AGENTS.md` to `context.fileName` in `.gemini/settings.json` to keep one source |
| Claude Code | `CLAUDE.md`, or `AGENTS.md` when there is no `CLAUDE.md` | A line `@AGENTS.md` in `CLAUDE.md` imports the shared file |
| OpenCode and others | `AGENTS.md` | The cross-agent convention; one file for all |

> [!TIP]
> Keep one source. Write the section into `AGENTS.md` and let the agent-specific files import or point to it, so every agent follows the same rules.

## For agents: the format as plain text

Agents do not need the website. Every docs page is also available as Markdown, and the whole format fits in one file:

- [llms.txt](https://tellscript.com/llms.txt): an index of all docs pages, for agents that browse.
- [llms-full.txt](https://tellscript.com/llms-full.txt): every docs page in one file, to paste into a context window.
- Any docs page with `.md` appended, for example [/docs/statements.md](https://tellscript.com/docs/statements.md).
