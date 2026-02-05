# AGENTS.md (Project Instructions)

Last verified: 2026-02-05

`AGENTS.md` is how you teach Codex "how this repo works" so it can act like a good teammate instead of guessing.

## What To Put In AGENTS.md

Keep it short and concrete. Good content includes:

- How to install dependencies
- How to run tests and linters
- Branching and PR conventions
- Where configuration lives
- Safety constraints (for example do not run `terraform apply` or do not touch production)
- "Definition of done" for typical changes in this repo

Example skeleton:

```md
# Project Overview
<1-2 sentences>

# Commands
- Install: <command>
- Test: <command>
- Lint: <command>

# Conventions
- <rule 1>
- <rule 2>

# Safety
- Never run: <dangerous command>
- Always ask before: <destructive operation>
```

## How Codex Chooses Which Instructions To Apply

Codex looks for project instruction files in a deterministic order:

1. `AGENTS.override.md` in the current working directory (highest precedence, if present)
2. `AGENTS.md` in the current working directory
3. `AGENTS.md` in parent directories while walking upward
4. If none exist, it can fall back to other filenames (configurable)

The goal is:

- repo owners can commit stable instructions
- individual users can override locally without changing the repo (`AGENTS.override.md`)

## Config Knobs

If you want Codex to consult other files when `AGENTS.md` is missing (or cap how much it reads), there are config keys for:

- `project_doc_fallback_filenames`
- `project_doc_max_bytes`

See `docs/06-configuration.md` and the official AGENTS.md guide in `docs/references.md`.

