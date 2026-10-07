---
title: Trophy Rooms
summary: Una única plataforma para llevar el registro de todos los logros que has conquistado, y una única casa para catalogar toda tu colección de videojuegos.
role: Autor único de la API, de la app web y de la app de iOS.
links:
  - trophyrooms.org
  - App Store
  - Código de la API
  - Código de la web
  - Código de la app de iOS
---

Trophy Rooms te permite llevar el registro de los juegos a los que juegas, marcar logros a mano y catalogar tu colección física, en iOS y en la web. Completa los logros de un juego para añadir su trofeo a tu Trophy Room, lleva un diario de partidas y gestiona los juegos que quieres comprar o vender.

## Forma

138 campos raíz de GraphQL en 65 queries y 73 mutations, 19 modelos de Prisma, 12 enums, 13 migraciones. 1.284 commits en nueve meses, en los tres repositorios.

Ningún test automatizado, en ninguna parte. La CI se añadió tarde, solo en la API, y ejecuta lint, el build y una comprobación de que los archivos generados están al día. Para un esquema de este tamaño es lo más flojo del proyecto, y fingir lo contrario sería una tontería.
