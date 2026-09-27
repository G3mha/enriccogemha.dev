---
title: ZeroPunch
summary: A field app for construction crews, built at DAERO Group where I was the first engineering hire.
status: live
period: Sep 2025 – Jul 2026
role: Founding iOS engineer. I owned the observability and design-system layers and about half the feature layer.
featured: true
order: 3
stack:
  - Swift
  - SwiftUI
  - GRDB
  - Go
  - OpenTelemetry
  - Grafana
  - AWS Lambda
links:
  - label: App Store
    href: https://apps.apple.com/us/app/id6753096907
---

I joined DAERO as its first engineer, shortly after the pre-seed, and left in July 2026 to start my masters. The product ships and the team continues without me, so what follows is only the part I can account for.

## What I owned

The client observability stack, end to end. The analytics contract lives in a separate repository that code-generates typed Swift; I wrote the consumer side, 88% of the iOS Observability package, covering the event client, the session model, and the dashboards behind it.

The design system, 68% of that package. Three interface redesigns went through it.

The feature layer, about half.

## On the numbers

I made 1,963 of the 2,375 commits to the iOS app, which is 82.7%. My share of the surviving lines is 34.1%. Both are true and the gap is mine: I commit in small pieces, and a lot of what I wrote early was later replaced. I mention both because the commit figure on its own reads as a claim about code volume, and `git blame` would refute it in about a minute.

The string catalogue at my departure carried 748 keys across English, Spanish and Portuguese. Two more languages were added after I left; they are not mine.

I have no user or project counts to give. The dashboards I built define the panels that would show them, and I no longer have access to the data behind them.
