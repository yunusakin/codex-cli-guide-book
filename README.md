# Codex CLI Guide Book

A documentation-only guidebook for the OpenAI Codex CLI (terminal coding agent).

Last verified: 2026-02-11

Turkce ozet: `README.tr.md`

Docs:

- Full guide: [`docs/`](docs/)
- Start here: [`docs/00-quickstart.md`](docs/00-quickstart.md)

Website:

- Framework: Docusaurus
- Local preview (Scribbler theme): `npm run start`
- Legacy compatibility alias: `npm run start:sleek`
- Production build (Scribbler theme): `npm run build`
- Legacy compatibility alias: `npm run build:sleek`
- Expected public URL: `https://yunusakin.github.io/codex-cli-guide-book/`

## What This Repo Is

Codex CLI is OpenAI's coding agent you run locally from your terminal. It can read, change, and run code in the directory you give it, with sandboxing and approvals to keep you in control.

This repo turns the official documentation into a practical field guide you can skim, search, and use as a day-to-day reference.

Important: This is not an official manual. Docs change quickly, so when commands/flags differ (or you need the latest behavior), trust the official Codex CLI reference and changelog on developers.openai.com (links in `docs/references.md`).

## How To Use This Repo

1. Read `docs/00-quickstart.md` once, end-to-end.
2. Use GitHub search (or `rg`) to jump to the relevant topic when you get stuck.
3. When a command matters, cross-check the official reference links in `docs/references.md`.
4. Keep "Last verified" dates fresh when you update any page.

## Fancy Docs Website (Docusaurus)

1. Install dependencies:

```bash
npm install
```

2. Start local site:

```bash
npm run start
```

3. Build static site:

```bash
npm run build
```

4. Legacy alias commands (same behavior as default):

```bash
npm run start:sleek
npm run build:sleek
```

5. Optional CLI deploy command:

```bash
npm run deploy
```

CI deploy is configured in `.github/workflows/deploy-docs.yml` for pushes to `main`.
For GitHub Pages, set Build and deployment source to `GitHub Actions` in repository settings.

## Theme Attribution

- Website visuals are adapted from the Scribbler template by Codrops.
- Original showcase: https://tympanus.net/codrops/2018/01/12/freebie-scribbler-website-template-html-sketch/
- Template repo: https://github.com/amiechen/codrops-scribbler
- Licensing notes: https://tympanus.net/codrops/licensing/
- This repo uses an adapted Docusaurus implementation, not a republished as-is template bundle.

## Quick Start (2 Commands)

```bash
npm i -g @openai/codex
codex
```

For safety-first exploration:

```bash
codex --sandbox read-only --ask-for-approval on-request
```

## Reading Map

1. `docs/00-quickstart.md`: fastest path to a safe, productive setup
2. `docs/01-installation.md`: install, upgrade, completions, local state
3. `docs/02-authentication.md`: ChatGPT auth vs API key auth, headless login
4. `docs/07-security-and-control.md`: sandboxing, approvals, network controls, telemetry
5. `docs/06-configuration.md`: `config.toml`, precedence, profiles, overrides
6. `docs/04-agents-md.md`: project instructions (`AGENTS.md`) and best practices
7. `docs/03-core-workflows.md`: interactive flows, resume/fork, multi-dir work
8. `docs/05-slash-commands.md`: in-session controls and shortcuts
9. `docs/08-noninteractive-and-ci.md`: `codex exec`, JSON output, CI usage
10. `docs/09-mcp.md`: MCP servers and the OpenAI docs MCP
11. `docs/10-cloud-tasks.md`: cloud runs and applying diffs locally
12. `docs/11-team-config-skills-and-rules.md`: shared `.codex/`, skills, exec policy rules
13. `docs/12-troubleshooting.md`: common failure modes and recovery
14. `docs/13-cheatsheet.md`: compact list of commands and flags

## Sources (Official)

Start here: `docs/references.md`
