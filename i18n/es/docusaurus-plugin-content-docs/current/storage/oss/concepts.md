---
title: Concepts
---

## Elastic Cloud Storage (ECS) : una solución de referencia

La oferta de almacenamiento de objetos de Cloud Temple se basa en la tecnología __Elastic Cloud Storage (ECS)__ de Dell, reconocida por su alto rendimiento y cumplimiento de los estándares industriales. Con una compatibilidad del **97% con el protocolo AWS S3**, esta solución asegura:

- Una integración fácil y estandarizada;
- Una mayor flexibilidad para los usuarios;
- Una transición fluida hacia una infraestructura de almacenamiento moderna.

---

## Compromisos de seguridad y certificaciones

Cloud Temple se compromete a garantizar la seguridad de los datos mediante certificaciones reconocidas:

- **SecNumCloud**: Calificación otorgada por la ANSSI, asegurando la soberanía y seguridad de los datos en un marco francés y europeo.
- **HDS (Hosting de Datos de Salud)**: Cumplimiento de requisitos estrictos para datos médicos sensibles.
- **ISO 27001**: Adhesión a las mejores prácticas en materia de seguridad de la información.

---

## Cifrado avanzado para una protección óptima

El cifrado de datos se aplica de manera sistemática, asegurando su seguridad en cada etapa:

- **En tránsito**: Protección mediante el protocolo __TLS 1.3__.
- **En almacenamiento**: Tres opciones adaptadas a las necesidades de los usuarios:
  - **SSE-ECS**: Claves gestionadas por Cloud Temple para una administración simplificada.
  - **SSE-C**: Claves proporcionadas por el cliente para un mayor control.
  - **CSE**: Cifrado realizado por el cliente para una seguridad máxima.

| Modelo de cifrado          | Ventajas                                 | Inconvenientes                   |
| -------------------------- | ---------------------------------------- | -------------------------------- |
| **SSE-ECS**                | Gestión simplificada y transparente      | Menos control sobre las claves   |
| **SSE-C**                  | Control total sobre las claves           | Necesidad de gestionar las claves |
| **CSE**                    | Seguridad máxima                         | Complejidad e impacto en el rendimiento |

---

## Niveles de servicio garantizados

Cloud Temple ofrece una infraestructura altamente confiable con compromisos claros:

| Compromiso                    | Objetivo                      |
| ----------------------------- | ----------------------------- |
| Disponibilidad                | 99.99% (incluye mantenimiento)|
| Durabilidad de los datos      | 99,99999999%                  |
| Ancho de banda de red garantizado | 1 Gbp/segundo             |

## La cuenta de almacenamiento

Una **Storage Account** es una entidad lógica que posee una **Access Key** y una **Secret Key** utilizadas para autenticar y asegurar las interacciones con un bucket.
Es en esta cuenta donde se asignan los roles y permisos asociados a los **buckets**, permitiendo controlar precisamente los accesos y las acciones autorizadas para cada usuario o servicio.


## El "bucket" en el ecosistema del almacenamiento de objetos

Un bucket S3, popularizado por el servicio Amazon Simple Storage Service (Amazon S3), es **un contenedor de almacenamiento público** en la nube diseñado para conservar una cantidad ilimitada de datos de manera segura, confiable y altamente disponible. Cada bucket S3 puede almacenar archivos (denominados "objetos" en S3), que van desde documentos e imágenes hasta grandes bases de datos o archivos de video. Los buckets se utilizan para organizar el espacio de almacenamiento de manera lógica dentro del almacenamiento de objetos de Cloud Temple, y cada bucket se identifica mediante un nombre único proporcionado por el usuario. Los buckets S3 ofrecen funcionalidades avanzadas, como la gestión de versiones, la protección de datos mediante políticas de control de acceso, y la posibilidad de inmutabilidad.


## Despliegue de tipo regional

El almacenamiento S3 de Cloud Temple almacena los datos de forma nativa en __tres zonas de disponibilidad distintas__ dentro de una misma región de Cloud Temple. Esta arquitectura está diseñada para ofrecer una alta disponibilidad y una máxima resiliencia frente a fallos de hardware o software:
- Erasure Coding (EC): Usamos por defecto un esquema EC 12+4, que divide los datos en 12 segmentos de datos y 4 segmentos de paridad. Esta técnica permite reconstruir los datos incluso en caso de pérdida de varios segmentos.
- Distribución de los datos: Los segmentos EC se distribuyen en diferentes nodos y racks, asegurando protección contra fallos de discos, nodos e incluso racks enteros.
- Replicación geográfica: Para una protección adicional, los datos se replican en 3 zonas de disponibilidad, ofreciendo resiliencia ante desastres locales.

Esta replicación asegura que incluso en caso de fallo de una zona, los datos permanezcan accesibles e intactos,
contribuyendo así a una infraestructura de almacenamiento altamente resistente.


## Tamaño máximo de archivo que se puede manipular con la consola web
El límite en web es de 40MB por archivo. Más allá, se debe utilizar un cliente nativo S3 con la API.


## ¿La oferta S3 de Cloud Temple utiliza el método 'PathStyle'?

Debido a las restricciones asociadas a la calificación SecNumCloud, por el momento, la oferta está prevista para usar el método '**PathStyle**'. Estamos trabajando para que el método '**UrlStyle**' esté disponible el primer semestre de 2025.

## Número máximo de buckets por arrendatario
El número máximo de buckets por arrendatario es de 999.