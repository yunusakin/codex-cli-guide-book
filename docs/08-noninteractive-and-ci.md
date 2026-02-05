# Non-Interactive Mode (codex exec)

Last verified: 2026-02-05

Use `codex exec` when you want Codex to run inside scripts or CI without opening the TUI.

## Basic Usage

```bash
codex exec "summarize the repository structure and list the top 5 risky areas"
```

Behavior:

- Progress streams to `stderr`
- The final agent message prints to `stdout` (easy to pipe/redirect)

Example:

```bash
codex exec "generate release notes for the last 10 commits" | tee release-notes.md
```

## Safety Flags You Should Set Explicitly In Automation

Prefer explicit sandbox and approval settings:

```bash
codex exec --sandbox read-only --ask-for-approval never \
  "scan the repo for secrets and report risky files"
```

Notes:

- In CI, there is usually no way to answer interactive approval prompts, so `--ask-for-approval never` is common.
- Use sandboxing and exec policy rules to keep the blast radius small.

Avoid `--yolo` in CI unless the runner is already isolated and disposable.

## Machine-Readable Output

`codex exec` can emit newline-delimited JSON events:

```bash
codex exec --json "fix the flaky unit test" > run.jsonl
```

Useful scripting flags:

- `--output-last-message <path>`: write final message to a file
- `--output-schema <path>`: validate the final response against a JSON Schema

## Resuming Exec Runs

You can resume a prior non-interactive run:

```bash
codex exec resume --last "continue from the last plan, but prioritize test stability"
```
