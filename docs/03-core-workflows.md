# Core Workflows (Interactive)

Last verified: 2026-02-05

This page focuses on the interactive terminal UI, which is the fastest way to work through multi-step changes.

## Start Sessions Where You Mean To Work

Run from the repo root (recommended):

```bash
cd /path/to/repo
codex
```

Or force the working directory without `cd`:

```bash
codex --cd /path/to/repo
```

If you need Codex to coordinate across multiple directories, grant extra writable roots:

```bash
codex --cd apps/frontend --add-dir ../backend --add-dir ../shared
```

## Model And Reasoning

- Use `/model` in-session to switch model and reasoning effort (when available).
- Use `--model <name>` at startup for a one-off override.

## Tight Feedback Loop: The "Diff, Test, Commit" Rhythm

When Codex edits files, keep the loop short:

1. `/diff` to inspect exactly what changed.
2. Run the fastest relevant tests (you can type a command, or prefix with `!`).
3. If it looks good, commit with your normal workflow.

## Common In-Session Shortcuts

From the Codex CLI features guide:

- Type `@` to fuzzy-search files and insert a path into your prompt.
- Prefix a line with `!` to run a local shell command and include the output as context.
- Use `--cd` to start in a different folder.
- Use `--add-dir` to safely extend writable roots.

## Resume And Fork

Codex saves transcripts locally so you can continue later:

```bash
codex resume
codex resume --last
codex resume --all
codex resume <SESSION_ID>
```

You can also fork a prior session into a new thread:

```bash
codex fork
codex fork --last
codex fork <SESSION_ID>
```

Sessions live under `~/.codex/sessions/` by default.

