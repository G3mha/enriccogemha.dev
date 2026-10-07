---
title: OpenGiving
summary: Um marketplace em que vendedores destinam parte de cada venda a uma campanha de arrecadação, rodando como app web, app iOS e app Android sobre uma única API.
period: mai. 2025 – jun. 2026
links:
  - App Store
  - Google Play
  - opengiving.us
  - Esquema público da API
---

Um app web em Next.js, um app iOS em SwiftUI, um app Android em Kotlin e um backend em FastAPI.

## O problema em que passei mais tempo

Cada base de código tinha reimplementado as mesmas regras de negócio. Quando uma campanha pode receber dinheiro, que parcela um vendedor pode destinar, quando uma doação conta como concluída: quatro cópias da mesma lógica, escritas quatro vezes, se afastando em silêncio. Uma regra corrigida em Swift continuava quebrada em Kotlin até alguém notar.

Então as regras foram para uma única tabela de decisão, `client_rules.json`, com 32 regras e 251 casos. Cada base de código carrega uma cópia e fixa o SHA-256 da versão que copiou. A suíte de testes de cada uma roda os casos compartilhados contra a própria implementação, então uma mudança de regra que uma base ainda não incorporou quebra o build dela em vez de chegar a um usuário.

## Dinheiro

Pagamentos com cartão ficam retidos em vez de repassados. O dinheiro do comprador fica no saldo da plataforma até ele confirmar a entrega com um código, e nesse momento a parte do vendedor e a parte da campanha saem, cada uma, como uma transferência do Stripe Connect vinculada à cobrança original. Se um destinatário ainda não tem uma conta apta a receber, a parte dele fica retida e é paga no instante em que a conta passa a estar apta.

O PayPal nunca se move desse jeito, porque o modelo do PayPal não permite, então esse trilho credita um livro-razão de carteira interna e paga separadamente. Dois trilhos, uma interface, e a diferença entre eles é o tipo de coisa que só se descobre construindo os dois.

Recusas em liberar fundos devolvem códigos de máquina estáveis em vez de texto, para que cada cliente as escreva na língua de quem está lendo.

## Testes

5.665 testes de backend em 539 arquivos, 2.177 casos web, 1.561 testes iOS, 1.968 testes Android. A CI roda o gitleaks em todo pull request e quebra o build se uma migração se afastar do esquema.

Não há número de usuários nem de receita aqui, porque não há um que valha a pena reportar. Os apps continuam no ar nas duas lojas. Estou afastado do projeto desde que comecei na Brown, em junho de 2026.
