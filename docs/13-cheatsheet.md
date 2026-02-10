# Cheat Sheet

Last verified: 2026-02-10

## Install / Upgrade

```bash
npm i -g @openai/codex
npm i -g @openai/codex@latest
```

## Core Commands

```bash
codex                         # interactive TUI
codex exec "..."              # non-interactive
codex resume                  # resume interactive session
codex fork                    # fork session into a new thread
codex login                   # authenticate
codex logout                  # clear credentials
codex completion zsh          # emit shell completion script
codex mcp list                # list MCP servers
codex cloud                   # cloud task picker
codex cloud apply <TASK_ID>   # apply a Codex Cloud task diff
codex apply <TASK_ID>         # apply a Codex task diff (git apply)
```

## High-Value Flags (Interactive And Exec)

```bash
--model <name>
--cd <path>
--add-dir <path>
--sandbox read-only|workspace-write|danger-full-access
--ask-for-approval untrusted|on-failure|on-request|never
--full-auto
--dangerously-bypass-approvals-and-sandbox
--search
```

## In-Session Slash Commands

```text
/status   /model   /approvals   /diff   /review   /compact   /mcp   /init   /undo (if enabled)
```
