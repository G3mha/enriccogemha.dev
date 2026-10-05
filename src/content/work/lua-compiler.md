---
title: Lua compiler, written in Swift
summary: Tokeniser, recursive-descent parser, symbol table and code generator, producing x86 assembly.
status: archived
period: "2024"
role: Sole author.
featured: false
logos: [lua, swift]
order: 8
stack:
  - Swift
  - x86 assembly
  - NASM
links:
  - label: Source
    href: https://github.com/G3mha/lua-compiler
---

Swift program taking Lua source to 32-bit x86 NASM. Contains a tokeniser, a recursive-descent parser with documented EBNF, a symbol table for stack offsets, and a code generator.

The generated assembly does real work rather than toy work. It allocates locals on the stack, resolves identifiers to offsets, and emits the control flow for conditionals and loops as labels and jumps.

Swift is an unusual choice and wasn't the sensible one. I picked it because I wanted to know how the language behaved away from application code. The tree is 14 node classes behind one `Node` protocol, each with its own `evaluate` method that the compiler calls recursively.
