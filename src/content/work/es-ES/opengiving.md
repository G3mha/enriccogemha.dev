---
title: OpenGiving
summary: Un marketplace en el que los vendedores destinan parte de cada venta a una campaña de recaudación, que funciona como app web, app de iOS y app de Android sobre una única API.
period: may. 2025 – jun. 2026
links:
  - App Store
  - Google Play
  - opengiving.us
  - Esquema público de la API
---

Una app web en Next.js, una app de iOS en SwiftUI, una app de Android en Kotlin y un backend en FastAPI.

## El problema en el que más tiempo pasé

Cada base de código había reimplementado las mismas reglas de negocio. Cuándo una campaña puede recibir dinero, qué parte puede destinar un vendedor, cuándo una donación cuenta como completada: cuatro copias de la misma lógica, escritas cuatro veces, separándose en silencio. Una regla corregida en Swift seguía rota en Kotlin hasta que alguien se daba cuenta.

Así que las reglas pasaron a una única tabla de decisión, `client_rules.json`, con 32 reglas y 251 casos. Cada base de código lleva una copia y fija el SHA-256 de la versión que copió. La suite de tests de cada una ejecuta los casos compartidos contra su propia implementación, de modo que un cambio de regla que una base de código aún no ha incorporado rompe el build de esa base en lugar de llegar a un usuario.

## Dinero

Los pagos con tarjeta se retienen en lugar de reenviarse. El dinero del comprador queda en el saldo de la plataforma hasta que el comprador confirma la entrega con un código, y en ese momento la parte del vendedor y la parte de la campaña salen, cada una, como una transferencia de Stripe Connect ligada al cargo original. Si un destinatario aún no tiene una cuenta apta para cobrar, su parte se retiene y se paga en cuanto la cuenta pasa a estarlo.

PayPal nunca se mueve así, porque el modelo de PayPal no lo permite, de modo que ese raíl acredita un libro mayor de monedero interno y paga por separado. Dos raíles, una interfaz, y la diferencia entre ambos es el tipo de cosa que solo se descubre construyendo los dos.

Las negativas a liberar fondos devuelven códigos de máquina estables en lugar de prosa, para que cada cliente las redacte en el idioma de quien lee.

## Tests

5.665 tests de backend en 539 archivos, 2.177 casos web, 1.561 tests de iOS, 1.968 tests de Android. La CI ejecuta gitleaks en cada pull request y rompe el build si una migración se desvía del esquema.

Aquí no hay cifra de usuarios ni de ingresos, porque no hay ninguna que merezca la pena contar. Las apps siguen en línea en ambas tiendas. Estoy de excedencia del proyecto desde que empecé en Brown, en junio de 2026.
