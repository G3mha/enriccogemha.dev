---
title: Compilador de Lua, escrito en Swift
summary: Tokenizador, parser de descenso recursivo, tabla de símbolos y generador de código, que produce ensamblador x86.
role: Autor único.
links:
  - Código fuente
---

Programa en Swift que lleva código fuente Lua a NASM x86 de 32 bits. Contiene un tokenizador, un parser de descenso recursivo con EBNF documentada, una tabla de símbolos para offsets de pila y un generador de código.

El ensamblador generado hace trabajo real y no de juguete. Reserva variables locales en la pila, resuelve identificadores a offsets y emite el flujo de control de condicionales y bucles como etiquetas y saltos.

Swift es una elección poco común y no era la sensata. Lo elegí porque quería saber cómo se comporta el lenguaje lejos del código de aplicación. El árbol son 14 clases de nodo detrás de un único protocolo `Node`, cada una con su propio método `evaluate`, que el compilador llama de forma recursiva.
