---
title: Concepts
---

## Elastic Cloud Storage (ECS) : una solución de referencia

La oferta de almacenamiento de objetos Cloud Temple se basa en la tecnología __Elastic Cloud Storage (ECS)__ de Dell, reconocida por su alto rendimiento y cumplimiento de los estándares industriales. Con una compatibilidad del **97% con el protocolo AWS S3**, esta solución asegura:

- Una integración fácil y estandarizada;
- Una flexibilidad aumentada para los usuarios;
- Una transición fluida hacia una infraestructura de almacenamiento moderna.

---

## Compromisos de seguridad y certificaciones

Cloud Temple se compromete a garantizar la seguridad de los datos gracias a certificaciones reconocidas:

- **SecNumCloud** : Certificación otorgada por la ANSSI, asegurando la soberanía y seguridad de los datos en un marco francés y europeo.
- **HDS (Hébergement de Données de Santé)** : Conformidad con los requisitos estrictos para los datos médicos sensibles.
- **ISO 27001** : Adhesión a las mejores prácticas en materia de seguridad de la información.

## Cifrado avanzado para una protección óptima

El cifrado de los datos se aplica de manera sistemática, asegurando su seguridad en cada etapa:

- **En tránsito** : Protección vía el protocolo __TLS 1.3__.
- **En almacenamiento**: Tres opciones adaptadas a las necesidades de los usuarios:
  - **SSE-ECS** : Claves gestionadas por Cloud Temple para una gestión simplificada.
  - **SSE-C** : Claves proporcionadas por el cliente para un control superior.
  - **CSE** : Cifrado realizado por el cliente para una seguridad máxima.

| Modelo de cifrado        | Ventajas                             | Desventajas                   |
| -------------------------| ------------------------------------ | ----------------------------- |
| **SSE-ECS**              | Gestión simplificada y transparente  | Menos control sobre las claves|
| **SSE-C**                | Control total sobre las claves       | Necesidad de gestionar las claves|
| **CSE**                  | Seguridad máxima                     | Complejidad e impacto en el rendimiento|

---

## Arquitectura y despliegue

### Despliegue de tipo región

El almacenamiento S3 Cloud Temple almacena los datos de manera nativa en __tres zonas de disponibilidad distintas__ dentro de una misma región Cloud Temple. Esta arquitectura está diseñada para ofrecer una alta disponibilidad y una resiliencia máxima ante fallos de hardware o software:
- Erasure Coding (EC) : Utilizamos por defecto un esquema EC 12+4, que divide los datos en 12 segmentos de datos y 4 segmentos de paridad. Esta técnica permite reconstruir los datos incluso en caso de pérdida de varios segmentos.
- Distribución de datos : Los segmentos EC se distribuyen sobre diferentes nodos y racks, asegurando una protección contra fallos de discos, nodos e incluso racks enteros.
- Replicación geográfica : Para una protección adicional, los datos se replican en 3 zonas de disponibilidad, ofreciendo resiliencia frente a desastres locales.

Esta replicación asegura que incluso en caso de fallo de una zona, los datos siguen siendo accesibles e intactos, contribuyendo así a una infraestructura de almacenamiento altamente resiliente.

---

## Rendimiento y niveles de servicio

### Niveles de servicio garantizados

Cloud Temple ofrece una infraestructura altamente confiable con compromisos claros:

| Compromiso                    | Objetivo                        |
| ----------------------------- | ------------------------------- |
| Disponibilidad               | 99.99% (incluye mantenimiento)  |
| Durabilidad de los datos     | 99,99999999%                    |
| Ancho de banda de red garantizado| 1 Gbp/segundo                |

### Limitaciones del almacenamiento de objetos

Cloud Temple ofrece una solución de almacenamiento de objetos con las siguientes características técnicas:

• **Número máximo de buckets por tenant** : El número máximo de buckets por tenant es de 999.

• **Tamaño límite por bucket** : El tamaño máximo de un objeto es de 5 TB.

• **Número de conexiones simultáneas** : Sin límite específico.

• **Rendimiento en la carga**:
  - Hasta 100Gb/s en entrada
  - Hasta 100Gb/s en salida

---

## Conceptos y organización del almacenamiento

### La cuenta de almacenamiento

Una **Storage Account** es una entidad lógica que posee una **Access Key** y una **Secret Key** utilizadas para autenticar y asegurar las interacciones con un bucket. Es en esta cuenta donde se asignan los roles y permisos asociados a los **buckets**, permitiendo controlar con precisión los accesos y las acciones autorizadas para cada usuario o servicio.

### El "bucket" en el ecosistema del almacenamiento de objetos

Un bucket S3, popularizado por el servicio Amazon Simple Storage Service (Amazon S3), es **un contenedor de almacenamiento público** en la nube diseñado para conservar una cantidad ilimitada de datos de manera segura, confiable y altamente disponible. Cada bucket S3 puede almacenar archivos (llamados "objetos" en S3), desde documentos e imágenes hasta grandes bases de datos o archivos de video. Los buckets se utilizan para organizar el espacio de almacenamiento de manera lógica dentro del almacenamiento de objetos Cloud Temple, y cada bucket es identificado por un nombre único proporcionado por el usuario. Los buckets S3 ofrecen funcionalidades avanzadas, como la gestión de versiones, la seguridad de los datos mediante políticas de control de acceso y la posibilidad de inmutabilidad.

### ¿La oferta S3 Cloud Temple usa el método 'PathStyle'?

Debido a las restricciones asociadas con la certificación SecNumCloud, en este momento, la oferta está prevista para usar el método '**PathStyle**'. Estamos trabajando para que el método '**UrlStyle**' esté disponible en el primer semestre de 2025.

### Solicitudes pre-firmadas

El almacenamiento de objetos Cloud Temple admite las **solicitudes pre-firmadas**, una funcionalidad esencial que permite generar URLs temporales que otorgan acceso a objetos específicos durante un tiempo limitado. Esta funcionalidad es particularmente útil para compartir archivos de manera segura con usuarios externos sin otorgarles derechos permanentes o credenciales de acceso al bucket. Las solicitudes pre-firmadas pueden configurarse con un periodo de validez preciso, ofreciendo así un control granular sobre el acceso a los datos.