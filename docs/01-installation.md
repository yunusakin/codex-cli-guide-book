# Installation And Updates

Last verified: 2026-02-10

## Supported Platforms (In Practice)

- macOS and Linux are supported.
- Windows support is experimental. For a smoother and safer setup, use WSL for local work.

## Install (npm)

```bash
npm i -g @openai/codex
```

Verify:

```bash
codex --version
```

## Upgrade (npm)

```bash
npm i -g @openai/codex@latest
```

Tip: if you manage upgrades centrally (enterprise images, golden laptops), consider disabling update checks in `config.toml` (see `docs/06-configuration.md`).

## Shell Completions

Codex can emit completion scripts to stdout:

```bash
codex completion bash
codex completion zsh
codex completion fish
codex completion powershell
codex completion elvish
```

Example (zsh):

```bash
codex completion zsh > "${fpath[1]}/_codex"
```

To see supported shells on your version:

```bash
codex completion --help
```

## Local State Locations

Codex stores per-user state under `CODEX_HOME` (defaults to `~/.codex`). This includes:

- `config.toml` (configuration)
- `auth.json` if using file-based auth storage, otherwise your OS keychain/keyring
- `history.jsonl` if history persistence is enabled
