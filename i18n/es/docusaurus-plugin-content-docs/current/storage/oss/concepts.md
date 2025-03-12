---
title: Conceptos
---

## Elastic Cloud Storage (ECS): una solución de referencia

La oferta de almacenamiento de objetos de Cloud Temple se basa en la tecnología __Elastic Cloud Storage (ECS)__ de Dell, reconocida por su alto rendimiento y respeto a los estándares industriales. Con una __compatibilidad del 97% con el protocolo AWS S3__, esta solución garantiza:

- Una integración fácil y estandarizada;
- Una mayor flexibilidad para los usuarios;
- Una transición fluida hacia una infraestructura de almacenamiento moderna.

---

## Compromisos de seguridad y certificaciones

Cloud Temple se compromete a garantizar la seguridad de los datos gracias a certificaciones reconocidas:

- __SecNumCloud__: Calificación otorgada por la ANSSI, asegurando soberanía y seguridad de los datos en un marco francés y europeo.
- __HDS (Alojamiento de Datos de Salud)__: Conformidad con los requisitos estrictos para datos médicos sensibles.
- __ISO 27001__: Adhesión a las mejores prácticas en materia de seguridad de la información.

## Cifrado avanzado para una protección óptima

El cifrado de datos se aplica de manera sistemática, asegurando su seguridad en cada etapa:

- __En tránsito__: Protección mediante el protocolo __TLS 1.3__.
- __En almacenamiento__: Tres opciones adaptadas a las necesidades de los usuarios:
  - __SSE-ECS__: Claves gestionadas por Cloud Temple para una gestión simplificada.
  - __SSE-C__: Claves proporcionadas por el cliente para un mayor control.
  - __CSE__: Cifrado realizado por el cliente para una seguridad máxima.

| Modelo de cifrado         | Ventajas                              | Inconvenientes                     |
| ----------------------------- | -------------------------------------- | --------------------------------- |
| __SSE-ECS__                  | Gestión simplificada y transparente     | Menos control sobre las claves   |
| __SSE-C__                    | Control total sobre las claves            | Gestión de claves necesaria       |
| __CSE__                      | Seguridad máxima                      | Complejidad e impacto en el rendimiento |

---

## Arquitectura y despliegue

### Despliegue de tipo región

El almacenamiento S3 de Cloud Temple almacena los datos de manera nativa en [__tres zonas de disponibilidad distintas__](../../additional_content/concepts_az.md) dentro de una misma [región](../../additional_content/concepts_regional.md) de Cloud Temple. Esta arquitectura está diseñada para ofrecer alta disponibilidad y máxima resiliencia frente a fallos de hardware o software:

- Erasure Coding (EC): Utilizamos por defecto un esquema EC 12+4, que divide los datos en 12 segmentos de datos y 4 segmentos de paridad. Esta técnica permite reconstruir los datos incluso en caso de pérdida de varios segmentos.
- Distribución de datos: Los segmentos EC se distribuyen en diferentes nodos y racks, asegurando protección contra fallos de discos, nodos e incluso racks enteros.
- Replicación geográfica: Para una protección adicional, los datos se replican en 3 zonas de disponibilidad, ofreciendo resiliencia frente a desastres locales.

Esta replicación asegura que incluso en caso de fallo de una zona, los datos permanecen accesibles e intactos,
contribuyendo así a una infraestructura de almacenamiento altamente resiliente.

---

## Rendimiento y niveles de servicio

### Niveles de servicio garantizados

Cloud Temple propone una infraestructura altamente fiable con compromisos claros:

| Compromiso                      | Objetivo                         |
| ------------------------------- | ----------------------------- |
| Disponibilidad                   | 99,99% (incluye mantenimiento)|
| Durabilidad de los datos          | 99,99999999%                  |
| Ancho de banda de red garantizado  | 1 Gbp/segundo                 |

### Limitaciones del almacenamiento de objetos

Cloud Temple propone una solución de almacenamiento de objetos con las siguientes características técnicas:

• __Número máximo de buckets por tenant__: El número máximo de buckets por tenant es de 999.

• __Límite de tamaño por bucket__: El tamaño máximo de un objeto es de 5 TB.

• __Número de conexiones simultáneas__: Sin límite específico.

• __Rendimiento de carga__:

- Hasta 100Gb/s de entrada
- Hasta 100Gb/s de salida

---

## Conceptos y organización del almacenamiento

### La cuenta de almacenamiento

Un __Storage Account__ es una entidad lógica que posee una __Access Key__ y una __Secret Key__ utilizadas para autenticar y asegurar las interacciones con un bucket.
Es en esta cuenta donde se posicionan los roles y permisos asociados a los __buckets__, permitiendo controlar con precisión los accesos y las acciones autorizadas para cada usuario o servicio.

### El "bucket" en el ecosistema del almacenamiento de objetos

Un bucket S3, popularizado por el servicio Amazon Simple Storage Service (Amazon S3), es __un contenedor de almacenamiento público__ en la nube diseñado para conservar una cantidad ilimitada de datos de manera segura, fiable y altamente disponible. Cada bucket S3 puede almacenar archivos (llamados "objetos" en S3), desde documentos e imágenes hasta grandes bases de datos o archivos de vídeo. Los buckets se utilizan para organizar el espacio de almacenamiento de manera lógica dentro del almacenamiento de objetos de Cloud Temple, y cada bucket se identifica por un nombre único proporcionado por el usuario. Los buckets S3 ofrecen funcionalidades avanzadas, como la gestión de versiones, la seguridad de los datos mediante políticas de control de acceso y la posibilidad de inmutabilidad.

### ¿La oferta S3 de Cloud Temple utiliza el método 'PathStyle'?

Debido a las restricciones asociadas a la calificación SecNumCloud, en este momento, la oferta está prevista para utilizar el método '__PathStyle__'. Estamos trabajando para que el método '__UrlStyle__' esté disponible en el primer trimestre de 2025.

### Solicitudes prefirmadas

El almacenamiento de objetos de Cloud Temple admite __solicitudes prefirmadas__, una funcionalidad esencial que permite generar URLs temporales que dan acceso a objetos específicos durante un tiempo limitado. Esta funcionalidad es particularmente útil para compartir archivos de manera segura con usuarios externos sin asignarles derechos permanentes o credenciales de acceso al bucket. Las solicitudes prefirmadas pueden configurarse con una duración de validez precisa, ofreciendo así un control granular sobre el acceso a los datos.
