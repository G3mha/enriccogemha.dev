---
title: PacBag
summary: An iOS app that tracks what’s in each bag and weighs it against the airline limit before you leave the house.
status: live
period: "2025"
role: Sole author.
featured: false
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
---

Free, no account, no server. 14,063 lines of Swift across 23 screens.

## Building the data model in code

`CoreDataManager` constructs the entire Core Data model at runtime in 407 lines of Swift rather than loading a `.xcdatamodeld` file: 5 entities, 38 attributes, 12 relationships, handed to an `NSPersistentCloudKitContainer`.

CloudKit refuses a model that doesn't meet its constraints, and it refuses at launch rather than at compile time. Every attribute must be optional or carry a default, and every relationship must declare an inverse. Doing that by hand means 38 of 38 attributes set optionality explicitly, 29 carry defaults, and all 12 relationships name their inverse. Getting one wrong is a crash on first run, on a stranger's phone.

## What it doesn't have

No tests. The two test targets are unmodified Xcode templates, which is the honest state of it.
