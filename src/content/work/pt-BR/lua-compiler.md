---
title: Compilador de Lua, escrito em Swift
summary: Tokenizador, parser de descida recursiva, tabela de símbolos e gerador de código, produzindo assembly x86.
role: Autor único.
links:
  - Código-fonte
---

Programa em Swift que leva código-fonte Lua a NASM x86 de 32 bits. Contém um tokenizador, um parser de descida recursiva com EBNF documentada, uma tabela de símbolos para offsets de pilha e um gerador de código.

O assembly gerado faz trabalho de verdade, não de brinquedo. Aloca variáveis locais na pilha, resolve identificadores para offsets e emite o fluxo de controle de condicionais e laços como rótulos e saltos.

Swift é uma escolha incomum e não era a mais sensata. Escolhi porque queria saber como a linguagem se comporta longe do código de aplicativo. A árvore são 14 classes de nó atrás de um único protocolo `Node`, cada uma com seu próprio método `evaluate`, que o compilador chama recursivamente.
