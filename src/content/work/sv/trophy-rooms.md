---
title: Trophy Rooms
summary: En enda plattform för att hålla koll på alla prestationer du har erövrat, och ett enda hem för att hålla koll på hela din tv-spelssamling.
role: Ensam upphovsman till API:et, webbappen och iOS-appen.
links:
  - trophyrooms.org
  - App Store
  - API-källkod
  - Webbkällkod
  - iOS-källkod
---

Trophy Rooms låter dig hålla koll på spelen du spelar, bocka av prestationer för hand och katalogisera din fysiska samling på iOS och webben. Klara ett spels alla prestationer för att lägga dess trofé i ditt Trophy Room, för en speldagbok och hantera spel du vill köpa eller sälja.

## Form

138 GraphQL-rotfält över 65 queries och 73 mutations, 19 Prisma-modeller, 12 enums, 13 migreringar. 1 284 commits på nio månader, över de tre repositorierna.

Inga automatiserade tester, någonstans. CI lades till sent, bara för API:et, och kör lint, bygget och en kontroll av att genererade filer är uppdaterade. För ett schema av den här storleken är det projektets svagaste punkt, och att låtsas något annat vore dumt.
