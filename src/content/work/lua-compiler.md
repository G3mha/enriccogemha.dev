---
title: A Lua compiler that emits x86
summary: Tokeniser, recursive-descent parser, symbol table and code generator, written in Swift, producing assembly that runs.
status: archived
period: "2024"
role: Sole author.
featured: false
order: 8
stack:
  - Swift
  - x86 assembly
  - NASM
links:
  - label: Source
    href: https://github.com/G3mha/lua-compiler
---

866 lines of Swift taking Lua source to 32-bit x86 NASM: a tokeniser, a recursive-descent parser written against a documented EBNF, a symbol table tracking stack offsets, and a code generator.

The generated assembly does real work rather than toy work. It allocates locals on the stack, resolves identifiers to offsets, and emits the control flow for conditionals and loops as labels and jumps.

Swift is an unusual choice and wasn't the sensible one. I picked it because I wanted to know how the language behaved away from application code, and a compiler is a good way to find out: it's all value types, recursion and exhaustive switches over an enum, which is the part of Swift that either holds up or doesn't.
