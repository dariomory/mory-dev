---
layout: ../../layouts/MarkdownAppLayout.astro
title: 'sudonotes'
seoTitle: 'sudonotes — a local-first notebook for AI prompts and ideas'
description: 'A local-first Markdown notebook for the AI prompts you keep rewriting and the ideas behind them. Plain files in a folder you own. Free and MIT licensed.'
tagline: 'Organize your prompts and ideas.'
order: 3
status: 'Shipped — v0.4.0, early'
image: { url: '/apps/sudonotes.png', alt: 'sudonotes logo' }
appImage1: { url: '/apps/sudonotes-1.webp', alt: 'sudonotes editor' }
website: https://sudonotes.com
github: https://github.com/mory-dev/sudonotes
pricing: 'Free · MIT'
platform: 'Windows, macOS, Linux'
stack: 'Tauri 2, React 19, Rust, SQLite FTS5'
install: 'winget install sudonotes'
appCategory: 'DeveloperApplication'
operatingSystem: 'Windows, macOS, Linux'
version: '0.4.0'
license: 'https://opensource.org/licenses/MIT'
price: 0
priceCurrency: 'USD'
sameAs:
  - https://github.com/mory-dev/sudonotes
  - https://snapcraft.io/sudonotes
---

LLM prompts scatter — across chat histories, scratch files and half-abandoned Notion pages.
They get rewritten from scratch instead of refined. sudonotes keeps prompt drafts, model
assignments and the ideas behind them in one local folder of plain Markdown.

Your notes are files in a directory you choose. No account, no sync, no cloud lock-in. The
installer is around 20 MB because Tauri uses your system's webview instead of shipping a
browser, and search is SQLite FTS5 over every note, reachable with `Ctrl+K` from anywhere.

Wiki-style `[[links]]` with backlinks keep a prompt attached to the idea that produced it.
`{{placeholders}}` turn a prompt into a fill-and-copy template without ever rewriting the note
itself, so the template stays a template. An idea bubble can become a GitHub issue and retire
itself when that issue closes. Link a note to a project folder and it mirrors into that repo's
`IDEAS.md`, where both people and local coding agents will find it next to the code.

Backups are automatic, compressed, kept outside the vault, and restore only into an empty
folder — so a restore can never quietly overwrite work.

Distributed through the Microsoft Store, `winget`, the Snap Store, a signed APT repository,
and a standalone installer.
