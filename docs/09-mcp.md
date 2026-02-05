# Model Context Protocol (MCP)

Last verified: 2026-02-05

MCP connects models to tools and context. In Codex CLI, MCP is how you add third-party tool servers (docs search, GitHub, browser automation, design tools, and more).

Codex supports:

- STDIO servers (started as local processes)
- Streamable HTTP servers (remote or local URLs)
- Bearer token auth and OAuth for HTTP servers

## Configure MCP Servers

You can configure MCP via:

- CLI (`codex mcp ...`)
- `config.toml` (`~/.codex/config.toml` or `.codex/config.toml` in trusted projects)

Add a stdio server:

```bash
codex mcp add context7 -- npx -y @upstash/context7-mcp
```

List servers:

```bash
codex mcp list
```

In the TUI, use `/mcp` to see what is active.

## OpenAI Docs MCP (Very Useful)

OpenAI hosts a public docs MCP server:

- URL: `https://developers.openai.com/mcp`

Add it:

```bash
codex mcp add openaiDeveloperDocs --url https://developers.openai.com/mcp
```

## OAuth Logins For MCP

Some MCP servers support OAuth. The CLI exposes:

```bash
codex mcp login <server-name>
```

Depending on your version, you may need to enable the `rmcp_client` feature flag first (see the CLI reference).

