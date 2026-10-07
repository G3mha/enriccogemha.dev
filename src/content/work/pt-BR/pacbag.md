---
title: PacBag
summary: Um app iOS que registra o que vai em cada mala e compara o peso com o limite da companhia aérea antes de você sair de casa.
role: Autor único.
links:
  - App Store
  - pacbag.app
  - Código-fonte
---

Gratuito, sem conta, sem servidor. Todos os seus dados são seus.

## Construindo o modelo de dados em código

O `CoreDataManager` constrói o modelo inteiro do Core Data em tempo de execução, em 428 linhas de Swift, em vez de carregar um arquivo `.xcdatamodeld`: 5 entidades, 38 atributos, 12 relacionamentos, entregues a um `NSPersistentCloudKitContainer`.

O CloudKit recusa um modelo que não atende às suas restrições, e recusa na inicialização, não na compilação. Todo atributo precisa ser opcional ou ter um valor padrão, e todo relacionamento precisa declarar um inverso. Fazer isso à mão significa que 38 dos 38 atributos definem opcionalidade explicitamente, 29 têm valor padrão e todos os 12 relacionamentos nomeiam o inverso. Errar um deles é um crash na primeira execução, no celular de um desconhecido.

## O que ele não tem

Quase nenhum teste. O target de testes unitários ainda é o modelo do Xcode. O target de testes de interface tem dois testes da aritmética de peso, mais o teste de captura de tela que produz as imagens da App Store.
