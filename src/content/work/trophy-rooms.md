---
title: Trophy Rooms
summary: A single platform to track all the achievements you conquered, and a single house for tracking your entire video game collection.
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
  - label: trophyrooms.org
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

Trophy Rooms lets you track the games you play, manually earn achievements, and catalogue your physical collection on iOS and web. Complete a game's achievements to add its trophy to your Trophy Room, keep a play journal, and manage games you want to buy or sell.

## Shape

138 GraphQL root fields across 65 queries and 73 mutations, 19 Prisma models, 12 enums, 13 migrations. 1,284 commits over nine months, across the three repositories.

No automated tests, anywhere. CI was added late, to the API only, and runs lint, the build and a check that generated files are up to date. For a schema this size that's the weakest thing about the project, and pretending otherwise would be silly.
