---
title: Trophy Rooms
summary: A cross-platform game collection tracker over a reconciled catalogue of 28,784 titles spanning 42 platforms.
status: live
period: 2025 – 2026
role: Sole author of the API, the web app and the iOS app.
featured: true
icon: /assets/app-icon-trophy-rooms.jpg
order: 6
stack:
  - TypeScript
  - GraphQL
  - Prisma
  - PostgreSQL
  - Next.js
  - SwiftUI
links:
  - label: Web app
    href: https://trophyrooms.org
  - label: App Store
    href: https://apps.apple.com/us/app/trophy-rooms/id6799829599
---

## Giving a game a stable identity

IGDB returns one row per title-and-platform pair, named inconsistently, mixed in with a long tail of shovelware. A collector who owns Chrono Trigger doesn't care that it appears four times under three spellings.

The fix is a four-level model. A `GameFamily` holds the canonical title, a unique slug and a normalised search title. A `Game` is one platform's edition of that family. Releases hang below that. Matching new upstream rows against existing families is done on the normalised title rather than the display title, so punctuation and regional subtitle differences collapse instead of creating duplicates.

That produces 28,784 distinct titles across 47,616 platform entries. Those two numbers are different things and it's worth keeping them apart: the larger one counts editions, not games.

## Shape

138 GraphQL root fields across 65 queries and 73 mutations, 19 Prisma models, 12 enums, 13 migrations. 1,284 commits over nine months.

No automated tests, anywhere. CI was added late and runs lint and build only. For a schema this size that's the weakest thing about the project, and pretending otherwise would be silly.
