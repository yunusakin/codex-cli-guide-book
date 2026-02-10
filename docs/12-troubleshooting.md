# Troubleshooting

Last verified: 2026-02-10

## Auth Issues

- Browser login fails in headless/remote terminals: use `codex login --device-auth`.
- You used API key auth before and want subscription auth again: run `codex logout`, then `codex` and choose ChatGPT sign-in.

## "Project Config Not Taking Effect"

Project overrides in `.codex/config.toml` load only for trusted projects. If settings are not applying:

- confirm the project is trusted in Codex UI
- check `/status` (interactive) for effective config
- check precedence: flags and profiles override project config

## "Codex Can't Access The Network"

There are two separate controls:

- Web search tool: start Codex with `--search` to enable live web search for that run
- Spawned command network: `[sandbox_workspace_write].network_access = true`

If you only need web search, do not enable command network access.

## "I Need To Undo What Codex Just Did"

- `/undo` reverts the most recent turn (if enabled)
- `git restore` / `git checkout` / `git reset` are still available, but keep them for when you are sure you want to throw away local changes

If `/undo` is not available, check `codex features list` and enable it with `codex --enable undo`.

## "Completions Not Working"

Regenerate completions and ensure your shell is sourcing them:

```bash
codex completion zsh
```

## "My Sessions Are Gone"

Codex saves sessions under `CODEX_HOME` (defaults to `~/.codex`). If you set `CODEX_HOME` in one terminal but not another, you may be looking at two different homes.
