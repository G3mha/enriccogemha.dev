---
title: PacBag
summary: En iOS-app som håller koll på vad som ligger i varje väska och väger det mot flygbolagets gräns innan du går hemifrån.
role: Ensam upphovsman.
links:
  - App Store
  - pacbag.app
  - Källkod
---

Gratis, inget konto, ingen server. Du äger all din data.

## Bygga datamodellen i kod

`CoreDataManager` bygger hela Core Data-modellen vid körning, i 428 rader Swift, i stället för att ladda en `.xcdatamodeld`-fil: 5 entiteter, 38 attribut, 12 relationer, överlämnade till en `NSPersistentCloudKitContainer`.

CloudKit vägrar en modell som inte uppfyller dess krav, och den vägrar vid start snarare än vid kompilering. Varje attribut måste vara valfritt eller ha ett standardvärde, och varje relation måste ange en invers. Att göra det för hand betyder att 38 av 38 attribut sätter sin valfrihet uttryckligen, 29 har standardvärden och alla 12 relationer namnger sin invers. Att få ett fel är en krasch vid första körningen, på en främlings telefon.

## Vad den inte har

Nästan inga tester. Enhetstest-targeten är fortfarande Xcodes mall. UI-test-targeten har två tester av viktaritmetiken, plus skärmdumpstestet som tar fram App Store-bilderna.
