# Team Config, Skills, And Rules

Last verified: 2026-02-05

Teams can standardize Codex behavior with a shared `.codex/` folder structure ("Team Config").

## Team Config: What It Is

Team Config groups:

- `config.toml`: defaults for model, sandbox, approvals, web search, etc.
- `rules/`: command execution policy rules
- `skills/`: reusable workflows

Codex loads Team Config from these locations (high to low precedence):

1. `$CWD/.codex/`
2. `$CWD/../.codex/` (parents while inside a repo)
3. `$REPO_ROOT/.codex/`
4. `$CODEX_HOME` (default `~/.codex/`)
5. `/etc/codex/`

## Requirements (Enterprise Guardrails)

Admins can enforce constraints with `requirements.toml` so users cannot select disallowed:

- `sandbox_mode`
- `approval_policy`
- MCP allowlists (optional)

## Skills

Skills are instruction bundles, defined by a `SKILL.md` file plus optional:

- `scripts/`
- `references/`
- `assets/`

Codex loads skill folders from Team Config locations. Skills can be invoked explicitly (type `$` to pick one) or implicitly when your task matches a skill description.

## Rules (Execution Policy)

Rules control which commands Codex can run outside the sandbox.

- Rules are `*.rules` files (Starlark) under `rules/` in Team Config locations.
- A common building block is `prefix_rule(...)`, which matches an argv prefix and decides: `allow`, `prompt`, or `forbidden`.

Example rule (prompt for `gh pr view`):

```python
prefix_rule(
  pattern = ["gh", "pr", "view"],
  decision = "prompt",
  justification = "Viewing PRs is allowed with approval",
)
```

Test rules without running commands:

```bash
codex execpolicy check --pretty \
  --rules ~/.codex/rules/default.rules \
  -- gh pr view 7888 --json title,body,comments
```

