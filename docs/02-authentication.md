# Authentication

Last verified: 2026-02-05

Codex supports two sign-in modes when using OpenAI models:

- ChatGPT auth: subscription access (recommended for most CLI users)
- API key auth: usage-based access billed through your OpenAI Platform account

Codex Cloud requires signing in with ChatGPT. Codex CLI supports both.

## Login And Logout

Interactive login:

```bash
codex login
```

API key login (reads from stdin):

```bash
printenv OPENAI_API_KEY | codex login --with-api-key
```

Device auth for headless/remote environments:

```bash
codex login --device-auth
```

Logout:

```bash
codex logout
```

## Credential Caching

Codex caches credentials and reuses them across runs. Depending on configuration, it stores credentials in:

- `~/.codex/auth.json` (plaintext file), or
- your OS credential store (keychain/keyring)

CLI and IDE extensions share the same cached login.

## Switching Preferred Auth Mode

If you use both ChatGPT auth and API keys, you can steer the default with config:

```toml
# ~/.codex/config.toml
preferred_auth_method = "apikey"   # or "chatgpt"
```

Ad-hoc override for a single run:

```bash
codex --config preferred_auth_method='"apikey"'
```

## Alternative Model Providers

If you configure custom model providers, authentication can be:

- OpenAI auth (`requires_openai_auth = true`)
- Provider key from an environment variable (`env_key = "SOME_ENV_VAR"`)
- No auth (common for local models)

