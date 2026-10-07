---
title: Seguridad en la nube en PinPag
summary: "Mi proyecto final de ingeniería: monitorización de seguridad para una empresa brasileña de pagos que opera bajo PCI-DSS e ISO 27001."
period: jul. – dic. 2024
role: Uno de cuatro estudiantes. Trabajé en las herramientas de seguridad y en la ruta de datos en AWS que hay detrás.
links:
  - Memoria final en portugués, en el repositorio del Insper
  - Traducción al inglés, con partes eliminadas (PDF)
---

Un proyecto final, defendido en noviembre de 2024, realizado sobre una plataforma de pagos en producción, dentro de un entorno PCI-DSS e ISO 27001. Nada se desplegó sin pasar por auditoría.

## Dos nubes

PinPag funciona tanto en AWS como en Azure. Esta fue la segunda fase de un proyecto que un equipo anterior del Insper empezó en 2023, y [su memoria pública](https://repositorio.insper.edu.br/handle/11224/6789) describe la monitorización de costes que construyeron en ambas nubes. Cuando empezamos, partes de ella habían dejado de funcionar en cada lado, así que el primer trabajo fue recuperarla. En AWS eso supuso reconstruir el pipeline desde el informe de coste y uso, pasando por Glue y Athena, hasta Grafana. En Azure supuso restaurar la exportación diaria de costes y los pasos de Data Factory y Data Explorer que hay detrás del panel de costes de Azure. Después añadimos una cifra semanal de coste que muestra las dos nubes lado a lado, y alertas que cubren ambas.

## Mapear qué puede alcanzar qué

La pieza que enseñaría primero es una herramienta en Python que recorre una cuenta de AWS en producción con boto3, lee instancias EC2, security groups, subredes e instancias RDS, y construye un grafo de qué puede alcanzar qué.

Dibuja cada recurso como un nodo y cada ruta permitida como una arista, y luego marca las aristas que no deberían existir. Un security group que admite `0.0.0.0/0` en cualquier puerto que no sea el 80 o el 443 vuelve grueso y rojo. La salida aterriza en S3 como Parquet, se cataloga con un crawler y se renderiza como un grafo de nodos.

Lo importante no era el dibujo. Era que antes nadie podía responder «qué está abierto a internet ahora mismo» sin leer las reglas una a una.

## El resto

Semgrep conectado a la CI de GitLab para que cada build se escanee, con los hallazgos catalogados por CWE y llevados a paneles y alertas. Un panel construido sobre los logs de AWS WAF. Un WAF ModSecurity con el conjunto de reglas de OWASP, validado en un servidor de pruebas. Un SIEM Wazuh reparado y puesto de nuevo en servicio. Alertas por varios canales.

Las cifras de escala de la plataforma de PinPag son suyas y no mías, así que no se reproducen aquí.

Traduje la memoria al inglés. La versión en inglés omite las capturas de pantalla y los pasajes que mostraban detalles de los sistemas de producción de PinPag, y marca cada lugar donde se eliminó algo.
