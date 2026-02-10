# Security, Sandboxing, And Approvals

Last verified: 2026-02-10

Codex control comes from two layers:

- Sandbox mode: what the agent can do technically when executing commands
- Approval policy: when the agent must ask before acting

## Recommended Presets

Conservative browsing:

```bash
codex --sandbox read-only --ask-for-approval on-request
```

Typical local work inside a version-controlled repo:

```bash
codex --sandbox workspace-write --ask-for-approval on-request
```

Low-friction preset:

```bash
codex --full-auto
```

Dangerous (do not use on your laptop):

```bash
codex --dangerously-bypass-approvals-and-sandbox
```

`--dangerously-bypass-approvals-and-sandbox` disables both approvals and sandboxing. Use only inside an externally hardened environment.

## Network Access: Two Different Knobs

Web search tool availability:

- `--search` enables live web search for that run (the model gets the native `web_search` tool).
- Without `--search`, the model will not have live web search.

Spawned command network access (`sandbox_workspace_write.network_access`):

- `false` (default): commands Codex runs cannot access the network even if web search is enabled.
- `true`: commands Codex runs can make outbound network connections.

To allow outbound network in workspace-write mode:

```toml
[sandbox_workspace_write]
network_access = true
```

Use caution with live browsing and network access. Treat retrieved content as untrusted and watch for prompt injection.

## Telemetry (What To Know)

- Metrics: Codex may send a small amount of anonymous usage/health metrics by default (independent of OpenTelemetry).
- OpenTelemetry export: off by default; can be enabled for auditing/monitoring in enterprise setups.

If you enable OTel export, keep prompt logging off unless policy explicitly allows it:

```toml
[otel]
exporter = "otlp-http"  # or otlp-grpc
log_user_prompt = false
```

## Managed Configuration And Requirements (Enterprise)

Admins can enforce constraints with `requirements.toml` (for example allowed sandbox and approval modes). Users cannot override requirements via CLI flags, profiles, or local config.
