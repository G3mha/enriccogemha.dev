---
title: OpenGiving
summary: En marknadsplats där säljare styr en del av varje försäljning till en insamlingskampanj, som körs som webbapp, iOS-app och Android-app på ett och samma API.
period: maj 2025 – juni 2026
links:
  - App Store
  - Google Play
  - opengiving.us
  - Publikt API-schema
---

En webbapp i Next.js, en iOS-app i SwiftUI, en Android-app i Kotlin och en backend i FastAPI.

## Problemet jag ägnade längst tid åt

Varje kodbas hade implementerat samma affärsregler på nytt. När en kampanj får ta emot pengar, hur stor andel en säljare får styra vidare, när en donation räknas som fullbordad: fyra kopior av samma logik, skrivna fyra gånger, som tyst gled isär. En regel som rättades i Swift förblev trasig i Kotlin tills någon märkte det.

Så reglerna flyttade in i en enda beslutstabell, `client_rules.json`, med 32 regler och 251 fall. Varje kodbas bär en kopia och låser SHA-256 för den version den kopierade. Varje kodbas testsvit kör de delade fallen mot sin egen implementation, så en regeländring som en kodbas inte har plockat upp fäller den kodbasens bygge i stället för att nå en användare.

## Pengar

Kortbetalningar hålls kvar i stället för att skickas vidare. Köparens pengar ligger i plattformens saldo tills köparen bekräftar leveransen med en kod, och då går säljarens andel och kampanjens andel ut var för sig som en Stripe Connect-överföring knuten till den ursprungliga debiteringen. Om en mottagare ännu inte har ett konto som kan ta emot utbetalningar hålls andelen kvar och betalas i samma stund som kontot kan det.

PayPal rör sig aldrig så, eftersom PayPals modell inte tillåter det, så den rälsen krediterar en intern plånboksreskontra och betalar ut separat. Två rälsar, ett gränssnitt, och skillnaden mellan dem är den sortens sak man bara hittar genom att bygga båda.

Vägran att frigöra medel returnerar stabila maskinkoder i stället för prosa, så att varje klient formulerar dem på läsarens eget språk.

## Tester

5 665 backend-tester i 539 filer, 2 177 webbfall, 1 561 iOS-tester, 1 968 Android-tester. CI kör gitleaks på varje pull request och fäller bygget om en migrering glider ifrån schemat.

Det finns ingen användar- eller intäktssiffra här, eftersom det inte finns någon värd att rapportera. Apparna är fortfarande i drift i båda butikerna. Jag är tjänstledig från projektet sedan jag började på Brown i juni 2026.
