---
title: Flags
summary: Una app para iOS y watchOS que pone la bandera de un país en la esfera del reloj, en la pantalla de bloqueo o en un widget de la pantalla de inicio.
role: Autor único, 4 días de desarrollo.
links:
  - Código fuente
---

Soy brasileño y estudio fuera. Quería mi bandera en una esquina de la esfera del reloj, para ver un trozo de casa cada vez que mirase la hora. La idea es solo esa.

## Medir antes de construir

watchOS renderiza una complicación de terceros en uno de tres modos. En `fullColor` obtienes lo que dibujaste. En `accented` y `vibrant` el sistema aplana tu vista a un único tono, y la documentación de Apple no dice qué esfera te da cuál.

Una bandera en un solo color plano no es una bandera. Así que, antes de escribir la app, escribí un spike que colocaba vistas de prueba en los huecos de complicación y medía la saturación que volvía. En watchOS 26.5, las subesferas circulares de la esfera Meridian entregan `fullColor` a las complicaciones de terceros, con una saturación media de 0,90 a 0,96, con los tres tonos de la bandera brasileña.

El spike era más estrecho de lo que parecía a primera vista, y el informe lo dice: midió formas de SwiftUI y emojis, y la variante con imagen de asset nunca llegó a un hueco durante la ejecución. Eso importó después.

## El bug que el spike no cazó

Una extensión de widget de watchOS no dibuja nada para una imagen cargada desde un catálogo de assets. `UIImage(named:)` devuelve la imagen, así que nada parece mal, y SwiftUI renderiza vacío. Las banderas tuvieron que cargarse de otra forma.

Encontrarlo llevó más tiempo que arreglarlo, que es la proporción habitual.

## Lo que hay

252 países y territorios, 248 con arte incluido y 4 que caen a emoji, agrupados en cinco continentes sin ninguno fuera. Un solo archive lleva cuatro targets: la app de iOS, su extensión de widget, la app de reloj y su extensión de complicación. 63 tests, todos en verde, que cubren el registro y la capa de favoritos.

No está en la App Store. El build está archivado y la ficha subida, y hasta que Apple la apruebe la palabra honesta es sin publicar.
