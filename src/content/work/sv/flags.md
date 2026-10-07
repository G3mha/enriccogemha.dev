---
title: Flags
summary: En app för iOS och watchOS som sätter en nationsflagga på urtavlan, låsskärmen eller en widget på hemskärmen.
role: Ensam upphovsman, 4 dagars utveckling.
links:
  - Källkod
---

Jag är brasilianare och studerar utomlands. Jag ville ha min flagga i hörnet av urtavlan, så att jag såg hemma varje gång jag kollade klockan. Det är hela idén.

## Mäta innan man bygger

watchOS renderar en komplikation från tredje part i ett av tre lägen. I `fullColor` får du det du ritade. I `accented` och `vibrant` plattar systemet till din vy till en enda färgton, och Apples dokumentation säger inte vilken urtavla som ger vilket.

En flagga i en enda platt färg är ingen flagga. Så innan jag skrev appen skrev jag en spike som satte testvyer i komplikationsplatserna och mätte mättnaden som kom tillbaka. På watchOS 26.5 ger urtavlan Meridians runda delurtavlor tredjepartskomplikationer `fullColor`, med en medelmättnad på 0,90 till 0,96, med alla tre nyanserna i den brasilianska flaggan.

Spiken var smalare än den först såg ut, och rapporten säger det: den mätte SwiftUI-former och emojier, och varianten med bild från asset-katalogen hamnade aldrig i en plats under körningen. Det spelade roll senare.

## Buggen som spiken inte fångade

En widget-extension för watchOS ritar ingenting för en bild som laddas från en asset-katalog. `UIImage(named:)` returnerar bilden, så inget ser fel ut, och SwiftUI renderar tomt. Flaggorna fick laddas på ett annat sätt.

Att hitta det tog längre tid än att rätta det, vilket är det vanliga förhållandet.

## Vad som finns

252 länder och territorier, 248 med medföljande grafik och 4 som faller tillbaka på emoji, grupperade i fem kontinenter utan att någon blir över. Ett enda arkiv bär fyra targets: iOS-appen, dess widget-extension, klockappen och dess komplikations-extension. 63 tester, alla gröna, som täcker registret och favoritlagret.

Den finns inte på App Store. Bygget är arkiverat och butikssidan uppladdad, och tills Apple godkänner den är det ärliga ordet inte släppt.
