# Quickstart

Last verified: 2026-02-05

This is the shortest path to "productive and safe" with Codex CLI.

## 1. Install And Run

Install:

```bash
npm i -g @openai/codex
```

Run:

```bash
codex
```

First run will prompt you to sign in (ChatGPT subscription or API key).

## 2. Use A Safe Default Posture

For a new repo you do not fully trust yet, start read-only:

```bash
codex --sandbox read-only --ask-for-approval on-request
```

When you are ready to let Codex edit within the workspace:

```bash
codex --sandbox workspace-write --ask-for-approval on-request
```

If you want a quick preset for local work, `--full-auto` sets `workspace-write` plus `on-request` approvals:

```bash
codex --full-auto
```

## 3. In-Session Basics (You Will Use These Constantly)

Inside the interactive UI:

- `/status`: show current session configuration (model, approvals, writable roots, token usage).
- `/approvals` (or `/permissions` on newer versions): change how often Codex asks.
- `/diff`: inspect changes (including untracked files).
- `/review`: ask Codex to review the working tree.
- `/undo`: roll back the most recent turn.
- `/init`: scaffold an `AGENTS.md` to capture repo-specific instructions.

## 4. A Good First Prompt Template

Paste a prompt like this:

```text
Goal: <one sentence>

Constraints:
- Keep changes minimal and high-confidence
- No new dependencies unless I approve
- Run the fastest relevant tests

Definition of done:
- Tests pass
- Explain what changed and why
- Show the diff and any commands run
```

## 5. One-Shot Automation (Non-Interactive)

When you want Codex to run from scripts:

```bash
codex exec "summarize the repo structure and list the top 5 risky areas"
```

By default, `codex exec` streams progress to stderr and prints the final message to stdout, so you can pipe it into other tools.

