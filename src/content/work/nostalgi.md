---
title: Nostalgi
summary: A marketplace for retro games and trading cards, with a quarter-million-item catalogue and an escrow model that holds a buyer's money until the item arrives.
status: paused
period: "2026"
role: Sole author of the Go API and the storefront.
featured: true
order: 4
stack:
  - Go
  - PostgreSQL
  - Astro
  - React
  - Stripe Connect
  - IGDB
links: []
---

Paused since August 2026. The API is still deployed and answering, and the catalogue it serves holds 253,912 canonical products.

## Holding money in a marketplace

A buyer paying for a used cartridge has no recourse if the seller never posts it, so the charge lands in the platform's own balance rather than the seller's, and releases only on confirmed delivery.

That creates a deadlock the obvious design walks straight into. Release requires `delivery_status = 'confirmed'`. A buyer who receives the item and never taps confirm leaves the seller's money stranded indefinitely, and a buyer who never receives it must not be able to release. Both cases look identical to the server. Resolving it meant a separate unconfirmed-delivery path with its own time bounds and its own refusal codes, covered by 16 subtests, because every branch of it moves real money in a direction that cannot be undone.

## Shape

25 HTTP routes, 13,624 lines of Go with 7,461 more in tests, 133 test functions containing 210 subtests. 15 migrations, 8 tables, 18 row-level security policies.

No CI. The gate is `make check` run by hand, and 41 of the tests need a local Postgres, which means they do not run anywhere automatic. That is the first thing I would fix if I picked it back up.
