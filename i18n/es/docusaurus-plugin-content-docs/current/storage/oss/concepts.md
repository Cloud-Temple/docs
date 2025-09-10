---
title: Conceptos
---

## Elastic Cloud Storage (ECS): una solución de referencia

La oferta de almacenamiento de objetos de Cloud Temple se basa en la tecnología __Elastic Cloud Storage (ECS)__ de Dell, reconocida por su alto rendimiento y su cumplimiento de los estándares de la industria. Con una compatibilidad del __97% con el protocolo AWS S3__, esta solución garantiza:

- Una integración fácil y estandarizada;
- Una mayor flexibilidad para los usuarios;
- Una transición fluida hacia una infraestructura de almacenamiento moderna.

---

## Compromisos de seguridad y certificaciones

Cloud Temple se compromete a garantizar la seguridad de los datos a través de certificaciones reconocidas:

- __SecNumCloud__: Calificación emitida por la ANSSI, que garantiza la soberanía y la seguridad de los datos en un marco francés y europeo.
- __HDS (Alojamiento de Datos de Salud)__: Cumplimiento de los estrictos requisitos para los datos médicos sensibles.
- __ISO 27001__: Adhesión a las mejores prácticas en materia de seguridad de la información.

## Cifrado avanzado para una protección óptima

El cifrado de los datos se aplica de forma sistemática, garantizando su seguridad en cada etapa:

- __En tránsito__: Protección mediante el protocolo __TLS 1.3__.
- __En reposo__: Tres opciones adaptadas a las necesidades de los usuarios:
  - __SSE-ECS__: Claves gestionadas por Cloud Temple para una gestión simplificada.
  - __SSE-C__: Claves proporcionadas por el cliente para un mayor control.
  - __CSE__: Cifrado realizado por el cliente para una seguridad máxima.

| Modelo de cifrado | Ventajas | Desventajas |
|---|---|---|
| __SSE-ECS__ | Gestión simplificada y transparente | Menos control sobre las claves |
| __SSE-C__ | Control total sobre las claves | Se requiere gestión de claves |
| __CSE__ | Máxima seguridad | Complejidad e impacto en el rendimiento |

---

## Arquitectura y despliegue

### Despliegue de tipo región

El almacenamiento S3 de Cloud Temple almacena los datos de forma nativa en [__tres zonas de disponibilidad distintas__](../../../../additional_content/concepts_az.md) dentro de una misma [región](../../../../additional_content/concepts_regional.md) de Cloud Temple. Esta arquitectura está diseñada para ofrecer una alta disponibilidad y una máxima resiliencia frente a fallos de hardware o software:

- Erasure Coding (EC): Por defecto, utilizamos un esquema EC 12+4, que divide los datos en 12 segmentos de datos y 4 segmentos de paridad. Esta técnica permite reconstruir los datos incluso en caso de pérdida de varios segmentos.
- Distribución de datos: Los segmentos EC se distribuyen en diferentes nodos y racks, garantizando la protección contra fallos de discos, nodos e incluso racks enteros.
- Replicación geográfica: Para una protección adicional, los datos se replican en 3 zonas de disponibilidad, ofreciendo resiliencia frente a desastres locales.

Esta replicación garantiza que, incluso en caso de fallo de una zona, los datos permanezcan accesibles e intactos, contribuyendo así a una infraestructura de almacenamiento altamente resiliente.

---

## Rendimiento y niveles de servicio

### Niveles de servicio garantizados

Cloud Temple ofrece una infraestructura de alta fiabilidad con compromisos claros:

| Compromiso | Objetivo |
|---|---|
| Disponibilidad | 99,99% (incluye mantenimiento) |
| Durabilidad de los datos | 99,999999999% |
| Ancho de banda de red garantizado | 1 Gbp/segundo |

### Limitaciones del almacenamiento de objetos

Cloud Temple ofrece una solución de almacenamiento de objetos con las siguientes características técnicas:

• __Número máximo de buckets por inquilino__: El número máximo de buckets por inquilino es de 999.

• __Límite de tamaño por bucket__: El tamaño máximo de un objeto es de 5 TB.

• __Número de conexiones simultáneas__: Sin límite específico.

• __Rendimiento__:

- Hasta 1 Gb/s de entrada
- Hasta 1 Gb/s de salida

---

## Conceptos y organización del almacenamiento

### La cuenta de almacenamiento

Una __Cuenta de Almacenamiento__ es una entidad lógica que posee una __Clave de Acceso__ y una __Clave Secreta__ utilizadas para autenticar y proteger las interacciones con un bucket.
En esta cuenta se establecen los roles y permisos asociados a los __buckets__, lo que permite controlar con precisión los accesos y las acciones autorizadas para cada usuario o servicio.

### Tipos de cuentas de almacenamiento

La plataforma de Almacenamiento de Objetos de Cloud Temple distingue dos tipos de cuentas de almacenamiento, cada una con un rol y un nivel de permisos específicos:

#### 1. Cuenta de almacenamiento clásica

Este es el tipo de cuenta estándar que creará para la mayoría de sus usos.

*   **Gestión de claves**: Para cada cuenta clásica, puede generar un par de claves de acceso (`Clave de Acceso` y `Clave Secreta`).
*   **Permisos granulares**: Los derechos de acceso de esta cuenta se definen a nivel de cada bucket a través de listas de control de acceso (ACL). Debe otorgarle explícitamente permisos (lectura, escritura, etc.) en los buckets a los que necesita acceder.

#### 2. Cuenta de almacenamiento global (Root)

Cada *namespace* (inquilino) dispone de una única cuenta de almacenamiento global, a veces llamada "cuenta raíz". Esta cuenta tiene privilegios administrativos ampliados.

*   **Acceso total**: La cuenta global tiene acceso completo a todos los buckets dentro del namespace, sin que sea necesario asignarle permisos específicos. Puede realizar todas las operaciones posibles en todo el servicio de almacenamiento.
*   **Uso administrativo**: Está destinada principalmente a tareas de configuración y administración globales.
*   **Restablecimiento de claves**: Dada su importancia, si se pierden la clave de acceso y la clave secreta de esta cuenta, la plataforma le permite restablecerlas para generar otras nuevas.

### El "bucket" en el ecosistema del almacenamiento de objetos

Un bucket S3, popularizado por el servicio Amazon Simple Storage Service (Amazon S3), es __un contenedor de almacenamiento público__ en la nube diseñado para conservar una cantidad ilimitada de datos de forma segura, fiable y altamente disponible. Cada bucket S3 puede almacenar archivos (llamados "objetos" en S3), que van desde documentos e imágenes hasta grandes bases de datos o archivos de vídeo. Los buckets se utilizan para organizar el espacio de almacenamiento de forma lógica dentro del almacenamiento de objetos de Cloud Temple, y cada bucket se identifica con un nombre único proporcionado por el usuario. Los buckets S3 ofrecen funcionalidades avanzadas, como la gestión de versiones, la protección de datos mediante políticas de control de acceso y la posibilidad de inmutabilidad.

### ¿La oferta S3 de Cloud Temple utiliza el método 'PathStyle'?

Debido a las limitaciones asociadas a la calificación SecNumCloud, en este momento, la oferta está prevista para utilizar el método '__PathStyle__'. Estamos trabajando para que el método '__UrlStyle__' esté disponible en el segundo semestre de 2025.

### Solicitudes pre-firmadas

El almacenamiento de objetos de Cloud Temple admite __solicitudes pre-firmadas__, una funcionalidad esencial que permite generar URL temporales que dan acceso a objetos específicos durante un tiempo limitado. Esta funcionalidad es especialmente útil para compartir archivos de forma segura con usuarios externos sin asignarles derechos permanentes o credenciales de acceso al bucket. Las solicitudes pre-firmadas se pueden configurar con un período de validez preciso, lo que ofrece un control granular sobre el acceso a los datos.

### Inmutabilidad de los objetos (Object Lock)

El Almacenamiento de Objetos de Cloud Temple, basado en Dell ECS, admite la funcionalidad de inmutabilidad a través de **Object Lock**, de conformidad con el estándar S3. Esta opción permite configurar los objetos en modo **WORM (Write Once, Read Many)**, protegiéndolos así contra cualquier modificación o eliminación durante un período definido. Es una protección esencial para el cumplimiento normativo y la defensa contra el ransomware.

#### Funcionamiento

La inmutabilidad se aplica a las versiones de los objetos y se puede configurar de dos maneras:
*   **Período de retención fijo**: El objeto se bloquea durante un tiempo determinado (en días o años).
*   **Retención legal (Legal Hold)**: El objeto se bloquea indefinidamente, hasta que se levante explícitamente la retención.

#### Condiciones de implementación

*   **Versionado obligatorio**: Para activar el Object Lock, el versionado debe estar activado en el bucket. Una vez que el Object Lock está activo, el versionado ya no se puede desactivar.
*   **Activación en la creación**: La inmutabilidad debe activarse en el momento de la creación del bucket, a través de la API de S3 (por ejemplo, con el encabezado `x-amz-bucket-object-lock-enabled: true`).
*   **Dos modos de protección**:
    *   **Modo Gobernanza**: Los usuarios con permisos específicos pueden modificar o eliminar la configuración de retención.
    *   **Modo Cumplimiento**: Nadie, incluido el administrador raíz, puede modificar o eliminar la configuración de retención. Es el nivel más alto de protección.

#### Casos de uso principales

*   **Protección anti-ransomware**: Las copias de seguridad protegidas no pueden ser cifradas ni eliminadas por un ataque, lo que garantiza una restauración fiable de los datos.
*   **Cumplimiento normativo**: Cumple con los estrictos requisitos de conservación de datos en sectores como las finanzas (FINRA, SEC 17a-4) o la sanidad.
