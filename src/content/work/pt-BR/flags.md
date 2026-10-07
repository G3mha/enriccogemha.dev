---
title: Flags
summary: Um app para iOS e watchOS que coloca a bandeira de um país no mostrador do relógio, na tela de bloqueio ou num widget da tela inicial.
role: Autor único, 4 dias de desenvolvimento.
links:
  - Código-fonte
---

Sou brasileiro e estudo fora. Queria minha bandeira no canto do mostrador do relógio, para ver um pedaço de casa toda vez que olhasse as horas. A ideia é só essa.

## Medir antes de construir

O watchOS renderiza uma complicação de terceiros em um de três modos. Em `fullColor`, você recebe o que desenhou. Em `accented` e `vibrant`, o sistema achata sua view em um único tom, e a documentação da Apple não diz qual mostrador usa qual.

Uma bandeira em uma cor chapada não é uma bandeira. Então, antes de escrever o app, escrevi um spike que colocava views de teste nos espaços de complicação e media a saturação que voltava. No watchOS 26.5, os submostradores circulares do mostrador Meridian entregam `fullColor` às complicações de terceiros, com saturação média de 0,90 a 0,96, carregando os três matizes da bandeira brasileira.

O spike era mais estreito do que parecia à primeira vista, e o relatório diz isso: ele mediu formas do SwiftUI e emojis, e a variante com imagem de asset nunca chegou a um espaço durante a execução. Isso fez diferença depois.

## O bug que o spike não pegou

Uma extensão de widget do watchOS não desenha nada para uma imagem carregada de um catálogo de assets. `UIImage(named:)` devolve a imagem, então nada parece errado, e o SwiftUI renderiza vazio. As bandeiras tiveram que ser carregadas de outro jeito.

Descobrir isso levou mais tempo do que corrigir, que é a proporção de costume.

## O que está pronto

252 países e territórios, 248 com arte embutida e 4 caindo para emoji, agrupados em cinco continentes e nenhum de fora. Um único archive carrega quatro targets: o app iOS, sua extensão de widget, o app de relógio e sua extensão de complicação. 63 testes, todos passando, cobrindo o registro e a camada de favoritos.

Não está na App Store. O build está arquivado e a página da loja está enviada, e até a Apple aprovar, a palavra honesta é não lançado.
