---
title: OpenGiving
summary: A marketplace where sellers route part of each sale to a fundraising campaign, running as a web app, an iOS app and an Android app on one API.
status: live
period: 2025 – 2026
role: I wrote all four codebases, the web, iOS and Android apps and the API they share. On leave since June 2026.
featured: true
order: 1
stack:
  - FastAPI
  - PostgreSQL
  - Prisma
  - Next.js
  - SwiftUI
  - Kotlin / Compose
  - Stripe Connect
  - PayPal
links:
  - label: App Store
    href: https://apps.apple.com/us/app/opengiving-donate-shop/id6756851957
  - label: Google Play
    href: https://play.google.com/store/apps/details?id=me.opengiving.android
  - label: opengiving.us
    href: https://opengiving.us
  - label: Public API schema
    href: https://api.opengiving.us/openapi.json
---

Four codebases in four languages, sharing no runtime: a Next.js web app, a SwiftUI iOS app, a Kotlin Compose Android app, and a FastAPI backend. The public API is 327 endpoints, which you can count yourself from the OpenAPI document linked above.

## The problem I spent longest on

Every codebase had reimplemented the same business rules. When a campaign can accept money, what share a seller may route, when a donation counts as complete: four copies of the same logic, written four times, drifting apart quietly. A rule fixed in Swift stayed broken in Kotlin until someone noticed.

So the rules moved into one decision table, `client_rules.json`, with 32 rules and 251 cases. Each codebase vendors a copy and pins the SHA-256 of the version it vendored. Every codebase's test suite runs the shared cases against its own implementation, so a rule change that a codebase hasn't picked up fails that codebase's build rather than reaching a user.

## Money

Card payments are held rather than forwarded. The buyer's money sits in the platform balance until the buyer confirms delivery with a code, at which point the seller's share and the campaign's share each go out as a Stripe Connect transfer tied back to the original charge. If a recipient has no payable account yet, their share is held and paid the moment the account becomes payable.

PayPal never moves this way, because PayPal's model doesn't allow it, so that rail credits an internal wallet ledger and pays out separately. Two rails, one interface, and the difference between them is the sort of thing you only find by building both.

Refusals to release funds return stable machine codes rather than prose, so each client words them in the reader's own language.

## Testing

5,665 backend tests across 539 files, 2,177 web cases, 1,561 iOS tests, 1,968 Android tests. CI runs gitleaks on every pull request and fails the build if a migration drifts from the schema.

There's no user or revenue figure here, because there isn't one worth reporting. The apps are still live on both stores. I've been on leave from the project since I started at Brown in June 2026.
