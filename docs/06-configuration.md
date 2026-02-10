# Configuration (config.toml)

Last verified: 2026-02-10

Codex reads configuration from multiple layers. Most users only need user config, plus occasional per-project overrides.

## Where Config Lives

- User config: `~/.codex/config.toml`
- Project overrides: `.codex/config.toml` (loaded only if the project is trusted)
- System config (when present): `/etc/codex/config.toml`

Codex also stores per-user state under `CODEX_HOME` (defaults to `~/.codex`).

## Precedence (Highest To Lowest)

1. CLI flags and `--config` overrides
2. `--profile <name>` values
3. Project config files (`.codex/config.toml` from repo root down to CWD; closest wins; trusted projects only)
4. User config (`~/.codex/config.toml`)
5. System config (`/etc/codex/config.toml`)
6. Built-in defaults

## A Minimal, Sensible Starter Config

```toml
# ~/.codex/config.toml
model = "gpt-5.2-codex"
approval_policy = "on-request"
sandbox_mode = "workspace-write"
# Live web search is enabled per-run with `codex --search`.

[sandbox_workspace_write]
network_access = false

[shell_environment_policy]
inherit = "core"
```

Notes:

- `--search` enables live web search for that run.
- `sandbox_workspace_write.network_access` controls whether spawned commands can reach the network.

## One-Off Overrides From The CLI

Dedicated flags when available:

```bash
codex --model gpt-5.2-codex
```

Generic key overrides:

```bash
codex --config model='"gpt-5.2-codex"'
codex --config sandbox_workspace_write.network_access=true
codex --config 'shell_environment_policy.include_only=["PATH","HOME"]'
```

`--config` parses values as TOML. Quote values when in doubt.

## Profiles

Profiles let you save presets in `~/.codex/config.toml`:

```toml
[profiles.full_auto]
approval_policy = "on-request"
sandbox_mode    = "workspace-write"
```

Then select them:

```bash
codex --profile full_auto
```

## Project Instructions (AGENTS.md)

Codex reads `AGENTS.md` files at startup to build an instruction chain. See `docs/04-agents-md.md` for details and best practices.
