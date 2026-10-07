---
title: PacBag
summary: Una app de iOS que registra lo que llevas en cada maleta y compara el peso con el límite de la aerolínea antes de salir de casa.
role: Autor único.
links:
  - App Store
  - pacbag.app
  - Código fuente
---

Gratis, sin cuenta, sin servidor. Todos tus datos son tuyos.

## Construir el modelo de datos en código

`CoreDataManager` construye el modelo completo de Core Data en tiempo de ejecución, en 428 líneas de Swift, en lugar de cargar un archivo `.xcdatamodeld`: 5 entidades, 38 atributos, 12 relaciones, entregados a un `NSPersistentCloudKitContainer`.

CloudKit rechaza un modelo que no cumple sus restricciones, y lo rechaza al arrancar, no al compilar. Cada atributo debe ser opcional o tener un valor por defecto, y cada relación debe declarar una inversa. Hacerlo a mano significa que 38 de 38 atributos fijan su opcionalidad de forma explícita, 29 tienen valor por defecto y las 12 relaciones nombran su inversa. Equivocarse en una es un cierre inesperado en la primera ejecución, en el móvil de un desconocido.

## Lo que no tiene

Casi ningún test. El target de tests unitarios sigue siendo la plantilla de Xcode. El target de tests de interfaz tiene dos tests de la aritmética del peso, más el test de capturas que genera las imágenes de la App Store.
