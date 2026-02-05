# Cloud Tasks (Codex Cloud)

Last verified: 2026-02-05

Codex can run work in isolated, OpenAI-managed cloud environments. Cloud tasks are useful when you want:

- parallel work streams
- longer-running jobs
- work from a lightweight machine while the heavy lifting happens remotely

## From The CLI: codex cloud

Open the interactive picker:

```bash
codex cloud
```

Submit a task directly:

```bash
codex cloud exec --env ENV_ID "Summarize open bugs"
```

Request best-of-N attempts (1 to 4):

```bash
codex cloud exec --env ENV_ID --attempts 3 "Summarize open bugs"
```

## Applying Results Locally

After a cloud task produces a diff, use:

```bash
codex apply
```

If `git apply` fails due to conflicts, Codex exits non-zero and prints which files could not be patched cleanly.

