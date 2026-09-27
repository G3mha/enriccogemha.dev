---
title: Flags
summary: An iOS and watchOS app that puts a country flag on your watch face, built after a measurement spike proved the watch would actually render it in colour.
status: unreleased
period: "2026"
role: Sole author. 77 commits over four days.
featured: true
order: 2
stack:
  - Swift
  - SwiftUI
  - WidgetKit
  - watchOS
  - Fastlane
  - GitHub Actions
links:
  - label: Source
    href: https://github.com/G3mha/flags-ios
---

I am Brazilian and I study abroad. I wanted my flag in the corner of my watch face, so I would see home every time I checked the time. That is the whole idea.

## Measuring before building

watchOS renders a third-party complication in one of three modes. In `fullColor` you get what you drew. In `accented` and `vibrant` the system flattens your view to a single tint, and Apple's documentation does not say which face gives you which.

A flag rendered in one flat colour is not a flag. So before writing the app I wrote a spike that put test views into complication slots and measured the saturation that came back. On watchOS 26.5 the Meridian face's circular sub-dials hand third-party complications `fullColor`, at 0.90 to 0.96 mean saturation, carrying all three hues of the Brazilian flag.

The spike was narrower than it first looked, and the write-up says so: it measured SwiftUI shapes and emoji, and the asset-image variant never landed in a slot during the run. That mattered later.

## The bug the spike did not catch

A watchOS widget extension draws nothing for an image loaded from an asset catalogue. `UIImage(named:)` returns the image, so nothing looks wrong, and SwiftUI renders empty. The flags had to be loaded another way.

Finding that took longer than fixing it, which is the usual ratio.

## What ships

252 countries and territories, 248 with bundled artwork and 4 falling back to emoji, grouped into five continents with none left ungrouped. One archive carries four targets: the iOS app, its widget extension, the watch app and its complication extension. 63 tests, all passing, covering the registry and favourites layer.

It is not on the App Store. The build is archived and the listing is uploaded, and until Apple approves it the honest word is unreleased.
