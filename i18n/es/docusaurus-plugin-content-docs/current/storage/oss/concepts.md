---
title: Conceptos
---

## Elastic Cloud Storage (ECS): una solución de referencia

La oferta de almacenamiento objeto Cloud Temple se basa en la tecnología __Elastic Cloud Storage (ECS)__ de Dell, reconocida por su alta performance y cumplimiento de las normas industriales. Con una compatibilidad del __97% con el protocolo AWS S3__, esta solución asegura:

- Una integración fácil y estandarizada;
- Una mayor flexibilidad para los usuarios;
- Una transición fluida hacia una infraestructura de almacenamiento moderna.

---

## Compromisos de seguridad y certificaciones

Cloud Temple se compromete a garantizar la seguridad de los datos mediante certificaciones reconocidas:

- __SecNumCloud__ : Calificación otorgada por la ANSSI, garantizando la soberanía y seguridad de los datos en un marco francés y europeo.
- __HDS (Almacenamiento de Datos de Salud)__ : Conformidad con los requisitos estrictos para datos médicos sensibles.
- __ISO 27001__ : Adhesión a las mejores prácticas en materia de seguridad de la información.

## Cifrado avanzado para una protección óptima

El cifrado de datos se aplica de manera sistemática, asegurando su seguridad en cada etapa:

- __En tránsito__: Protección mediante el protocolo __TLS 1.3__.
- __En almacenamiento__: Tres opciones adaptadas a las necesidades de los usuarios:
  - __SSE-ECS__: Claves gestionadas por Cloud Temple para una gestión simplificada.
  - __SSE-C__: Claves proporcionadas por el cliente para un mayor control.
  - __CSE__: Cifrado realizado por el cliente para una seguridad máxima.

| Modelo de cifrado         | Ventajas                              | Desventajas                     |
| ------------------------- | -------------------------------------- | ------------------------------- |
| __SSE-ECS__              | Gestión simplificada y transparente     | Menos control sobre las claves   |
| __SSE-C__                | Control total sobre las claves          | Gestión de claves necesaria       |
| __CSE__                  | Seguridad máxima                        | Complejidad e impacto en el rendimiento |

## Arquitectura y despliegue

### Despliegue de tipo región

El almacenamiento S3 Cloud Temple almacena los datos de forma nativa en [__tres zonas de disponibilidad distintas__](../../additional_content/concepts_az.md) dentro de la misma [región](../../additional_content/concepts_regional.md) de Cloud Temple. Esta arquitectura está diseñada para ofrecer alta disponibilidad y resiliencia máxima frente a fallos de hardware o software:

- Codificación por Erasure (EC): Utilizamos por defecto un esquema EC 12+4, que divide los datos en 12 segmentos de datos y 4 segmentos de paridad. Esta técnica permite reconstruir los datos incluso en caso de pérdida de varios segmentos.
- Distribución de los datos: Los segmentos EC se distribuyen en diferentes nodos y racks, garantizando protección contra fallos de discos, nodos e incluso racks completos.
- Replicación geográfica: Para una protección adicional, los datos se replican en 3 zonas de disponibilidad, ofreciendo resiliencia frente a desastres locales.

Esta replicación asegura que incluso en caso de fallo de una zona, los datos permanezcan accesibles e integros, contribuyendo así a una infraestructura de almacenamiento altamente resiliente.

## Rendimiento y niveles de servicio

### Niveles de servicio garantizados

Cloud Temple proporciona una infraestructura altamente confiable con compromisos claros:

| Compromiso                      | Objetivo                         |
| ------------------------------- | --------------------------------- |
| Disponibilidad                   | 99.99% (incluye el mantenimiento)|
| Durabilidad de los datos          | 99,99999999%                  |
| Ancho de banda de red garantizado  | 1 Gbps/segundo                 |

### Limitaciones del almacenamiento objeto

Cloud Temple ofrece una solución de almacenamiento objeto con las siguientes características técnicas:

• __Número máximo de buckets por tenant__ : El número máximo de buckets por tenant es de 999.

• __Tamaño límite por bucket__ : El tamaño máximo de un objeto es de 5 TB.

• __Número de conexiones simultáneas__ : Ningún límite específico.

• __Rendimiento de subida__ :

- Hasta 100 Gb/s en entrada
- Hasta 100 Gb/s en salida

## Conceptos y organización del almacenamiento

### La cuenta de almacenamiento

Un __Cuenta de Almacenamiento__ es una entidad lógica que posee una __Clave de Acceso__ y una __Clave Secreta__ utilizadas para autenticar y proteger las interacciones con un bucket.  
Es en esta cuenta donde se ubican los roles y permisos asociados a los __baldes__, permitiendo controlar con precisión los accesos y las acciones autorizadas para cada usuario o servicio.

### Tipos de cuentas de almacenamiento

La plataforma de Almacenamiento de Objetos Cloud Temple distingue dos tipos de cuentas de almacenamiento, cada uno con un rol y un nivel de permisos específico :

#### 1. Cuenta de almacenamiento clásica

Es el tipo de cuenta estándar que creará para la mayoría de sus usos.

*   **Gestión de claves** : Para cada cuenta clásica, puede generar un par de claves de acceso (`Access Key` y `Secret Key`).
*   **Permisos granulares** : Los derechos de acceso de esta cuenta están definidos a nivel de cada bucket mediante listas de control de acceso (ACL). Debe otorgar explícitamente permisos (lectura, escritura, etc.) a esta cuenta para los buckets a los que debe acceder.

#### 2. Cuenta de almacenamiento global (Root)

Cada *espacio de nombres* (inquilino) dispone de una única cuenta de almacenamiento global, a veces llamada "cuenta root". Esta cuenta tiene privilegios administrativos extendidos.

*   **Acceso total** : La cuenta global tiene acceso completo a todos los buckets dentro del espacio de nombres, sin necesidad de asignarle permisos específicos. Puede realizar todas las operaciones posibles en todo el servicio de almacenamiento.
*   **Uso administrativo** : Está principalmente destinado a tareas de configuración y administración globales.
*   **Reinicio de claves** : Dada su importancia, si las claves de acceso y secreta de esta cuenta se pierden, la plataforma le permite reiniciarlas para generar nuevas.

### El "bucket" en el ecosistema de almacenamiento objeto

Un bucket S3, popularizado por el servicio Amazon Simple Storage Service (Amazon S3), es __un contenedor de almacenamiento público__ en la nube diseñado para conservar una cantidad ilimitada de datos de manera segura, confiable y altamente disponible. Cada bucket S3 puede almacenar archivos (llamados "objetos" en S3), desde documentos e imágenes hasta grandes bases de datos o archivos de video. Los buckets se utilizan para organizar el espacio de almacenamiento de manera lógica dentro del almacenamiento objeto Cloud Temple, y cada bucket se identifica por un nombre único proporcionado por el usuario. Los buckets S3 ofrecen funcionalidades avanzadas, como la gestión de versiones, la seguridad de los datos mediante políticas de control de acceso, y la posibilidad de inmutabilidad.

### ¿La oferta S3 Cloud Temple utiliza el método 'PathStyle'?

Debido a las restricciones asociadas a la calificación SecNumCloud, actualmente la oferta está prevista para utilizar el método '__PathStyle__'. Estamos trabajando para que el método '__UrlStyle__' esté disponible en S2 2025.

### URLs prefirmadas

El almacenamiento de objetos Cloud Temple admite las __URLs prefirmadas__, una función esencial que permite generar URLs temporales que dan acceso a objetos específicos durante un período limitado. Esta función es especialmente útil para compartir archivos de manera segura con usuarios externos sin otorgarles derechos permanentes o identificadores de acceso al bucket. Las URLs prefirmadas se pueden configurar con una duración de validez precisa, ofreciendo así un control granular sobre el acceso a los datos.

### Inmutabilidad de los objetos (Object Lock)

El Almacenamiento de objetos de Cloud Temple, basado en Dell ECS, admite la funcionalidad de inmutabilidad mediante **Object Lock**, en conformidad con el estándar S3. Esta opción permite configurar los objetos en modo **WORM (Write Once, Read Many)**, protegiéndolos así contra cualquier modificación o eliminación durante un período definido. Es una protección esencial para la conformidad reguladora y la defensa contra los ransomwares.

#### Funcionamiento

La inmutabilidad se aplica a las versiones de los objetos y puede configurarse de dos maneras:
*   **Período de retención fijo**: El objeto está bloqueado durante un período determinado (en días o años).
*   **Conservación legal (Legal Hold)**: El objeto está bloqueado indefinidamente hasta que la conservación se levante explícitamente.

#### Condiciones de implementación

*   **Versionamiento obligatorio** : Para activar el Object Lock, el versionamiento debe estar activado en el bucket. Una vez activado el Object Lock, el versionamiento no se puede desactivar.
*   **Activación en la creación** : La inmutabilidad debe activarse en el momento de la creación del bucket, a través de la API S3 (por ejemplo, con el encabezado `x-amz-bucket-object-lock-enabled: true`).
*   **Dos modos de protección** :
    *   **Modo Gobernanza** : Los usuarios con permisos específicos pueden modificar o eliminar los parámetros de retención.
    *   **Modo Conformidad** : Nadie, incluso el administrador root, puede modificar o eliminar los parámetros de retención. Es el nivel más alto de protección.

#### Casos de uso principales

*   **Protección contra ransomware** : Las copias de seguridad protegidas no pueden ser cifradas ni eliminadas por un ataque, garantizando una restauración confiable de los datos.
*   **Conformidad normativa** : Cumple con los requisitos estrictos de conservación de datos en sectores como la finanza (FINRA, SEC 17a-4) o la salud.