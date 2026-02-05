# Slash Commands

Last verified: 2026-02-05

Slash commands are the keyboard-first way to steer an active Codex session.

## Built-In Commands You Should Memorize

Type `/` in the composer to open the picker.

- `/status`: show current session configuration and token usage
- `/model`: switch model (and reasoning effort if supported)
- `/approvals` (and sometimes `/permissions`): change approval preset mid-session
- `/diff`: show git diff (including untracked files)
- `/review`: run a working tree review
- `/undo`: revert Codex's most recent turn
- `/compact`: summarize long transcripts to free context
- `/mention`: attach a file to the conversation
- `/mcp`: view active MCP tools/servers
- `/init`: generate an `AGENTS.md` scaffold in the current directory
- `/new`: start a new conversation in the same session
- `/resume` and `/fork` may exist depending on your version and surface

## Custom Prompts (Status: Deprecated)

Codex historically supported Markdown files under `~/.codex/prompts/` that appear as `/prompts:<name>`.

As of 2026-01-22, OpenAI announced that custom prompts are deprecated. Prefer skills for reusable workflows.

If your version still supports prompt files, they use YAML front matter for metadata and support placeholders like `$1`..`$9`, `$ARGUMENTS`, and `KEY=value` style named parameters.

## Skills (Preferred Replacement)

Skills are shareable instruction bundles (`SKILL.md` plus optional scripts/resources) that Codex can:

- Invoke explicitly (type `$` to pick a skill, or use `/skills` if available)
- Invoke implicitly when your task matches a skill description

See `docs/11-team-config-skills-and-rules.md` for how skills are discovered and shared.

