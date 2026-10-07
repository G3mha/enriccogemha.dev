---
title: Lua-kompilator, skriven i Swift
summary: Tokeniserare, rekursiv nedstigningsparser, symboltabell och kodgenerator som producerar x86-assembler.
role: Ensam upphovsman.
links:
  - Källkod
---

Ett Swift-program som tar Lua-källkod till 32-bitars x86 NASM. Innehåller en tokeniserare, en rekursiv nedstigningsparser med dokumenterad EBNF, en symboltabell för stackoffsets och en kodgenerator.

Den genererade assemblern gör riktigt arbete snarare än leksaksarbete. Den allokerar lokala variabler på stacken, löser upp identifierare till offsets och skriver ut kontrollflödet för villkor och loopar som etiketter och hopp.

Swift är ett ovanligt val och var inte det förnuftiga. Jag valde det för att jag ville veta hur språket beter sig bortom applikationskod. Trädet är 14 nodklasser bakom ett enda protokoll, `Node`, var och en med sin egen `evaluate`-metod som kompilatorn anropar rekursivt.
