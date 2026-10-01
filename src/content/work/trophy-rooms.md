---
title: Trophy Rooms
summary: A cross-platform game collection tracker over a reconciled catalogue of 28,784 titles spanning 38 platforms.
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
  - label: API source
    href: https://github.com/G3mha/trophy-rooms-backend
  - label: Web source
    href: https://github.com/G3mha/trophy-rooms-web
  - label: iOS source
    href: https://github.com/G3mha/trophy-rooms-ios
---

## Giving a game a stable identity

IGDB returns one row per title-and-platform pair, named inconsistently, mixed in with a long tail of shovelware. A collector who owns Chrono Trigger doesn't care that it appears four times under three spellings.

The fix is a four-level model. A `GameFamily` holds the canonical title, a unique slug and a normalised search title. A `Game` is one platform's edition of that family. Releases hang below that. Matching new upstream rows against existing families is done on the normalised title rather than the display title, so punctuation and regional subtitle differences collapse instead of creating duplicates.

As of October 2026, that produces 28,784 distinct titles across 47,616 platform entries on 38 platforms. The titles and the entries are different things, and it's worth keeping them apart: the larger number counts editions, not games.

## Shape

138 GraphQL root fields across 65 queries and 73 mutations, 19 Prisma models, 12 enums, 13 migrations. 1,284 commits over nine months, across the three repositories.

No automated tests, anywhere. CI was added late, to the API only, and runs lint, the build and a check that generated files are up to date. For a schema this size that's the weakest thing about the project, and pretending otherwise would be silly.
