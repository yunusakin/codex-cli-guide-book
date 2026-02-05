# Codex CLI Rehber Kitabi (TR)

Not: Bu dosya ASCII karakterlerle yazildi (Turkce karakter kullanmadan) ki farkli ortamlarda sorun cikarmasin.

Son dogrulama: 2026-02-05

## Bu Repo Nedir?

Bu repo, OpenAI Codex CLI icin pratik bir "guide book"tur. Codex CLI, terminalden calisan bir coding agent olarak:

- Bulundugunuz klasorde kodu okuyabilir, degistirebilir ve komut calistirabilir.
- Sandbox ve onay (approval) ayarlariyla guvenli calisma saglar.

Resmi dokuman degildir. Komut/flag farkliligi gorurseniz `docs/references.md` altindaki resmi referanslari esas alin.

## Hizli Baslangic

```bash
npm i -g @openai/codex
codex
```

Daha guvenli baslamak icin:

```bash
codex --sandbox read-only --ask-for-approval on-request
```

## Okuma Onerisi

1. `docs/00-quickstart.md`
2. `docs/01-installation.md`
3. `docs/02-authentication.md`
4. `docs/07-security-and-control.md`
5. `docs/06-configuration.md`
6. `docs/04-agents-md.md`
7. `docs/13-cheatsheet.md`

