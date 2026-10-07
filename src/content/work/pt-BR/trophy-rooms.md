---
title: Trophy Rooms
summary: Uma única plataforma para acompanhar todas as conquistas que você desbloqueou, e uma única casa para catalogar sua coleção inteira de videogames.
role: Autor único da API, do app web e do app iOS.
links:
  - trophyrooms.org
  - App Store
  - Código da API
  - Código do site
  - Código do app iOS
---

O Trophy Rooms permite acompanhar os jogos que você joga, marcar conquistas manualmente e catalogar sua coleção física, no iOS e na web. Complete as conquistas de um jogo para adicionar o troféu dele à sua Trophy Room, mantenha um diário de jogo e gerencie os jogos que você quer comprar ou vender.

## Forma

138 campos raiz do GraphQL em 65 queries e 73 mutations, 19 modelos do Prisma, 12 enums, 13 migrações. 1.284 commits em nove meses, nos três repositórios.

Nenhum teste automatizado, em lugar nenhum. A CI foi adicionada tarde, só na API, e roda lint, o build e uma verificação de que os arquivos gerados estão atualizados. Para um esquema desse tamanho, essa é a maior fraqueza do projeto, e fingir o contrário seria bobagem.
