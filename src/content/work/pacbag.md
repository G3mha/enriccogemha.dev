---
title: PacBag
summary: An iOS app that tracks what’s in each bag and weighs it against the airline limit before you leave the house.
status: live
period: "2025"
role: Sole author.
featured: false
icon: /assets/app-icon-pacbag.jpg
order: 5
stack:
  - Swift
  - SwiftUI
  - Core Data
  - CloudKit
links:
  - label: App Store
    href: https://apps.apple.com/us/app/pacbag-digital-luggage/id6749021887
  - label: pacbag.app
    href: https://pacbag.app
  - label: Source
    href: https://github.com/G3mha/pacbag-ios
---

Free, no account, no server. 14,063 lines of Swift across 42 files.

## Building the data model in code

`CoreDataManager` constructs the entire Core Data model at runtime in 428 lines of Swift rather than loading a `.xcdatamodeld` file: 5 entities, 38 attributes, 12 relationships, handed to an `NSPersistentCloudKitContainer`.

CloudKit refuses a model that doesn't meet its constraints, and it refuses at launch rather than at compile time. Every attribute must be optional or carry a default, and every relationship must declare an inverse. Doing that by hand means 38 of 38 attributes set optionality explicitly, 29 carry defaults, and all 12 relationships name their inverse. Getting one wrong is a crash on first run, on a stranger's phone.

## What it doesn't have

Almost no tests. The unit-test target is still the Xcode template. The UI-test target has two tests of the weight arithmetic, plus the screenshot test that produces the App Store images.
