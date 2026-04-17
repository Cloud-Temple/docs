---
title: Documentación de la API
---
import ShivaProfil001 from '@site/docs/console/images/shiva_profil_001.png'
import ShivaProfil002 from '@site/docs/console/images/shiva_profil_002.png'
import ShivaProfil003 from '@site/docs/console/images/shiva_profil_003.png'
import ShivaProfil004 from '@site/docs/console/images/shiva_profil_004.png'
import ShivaProfil005 from '@site/docs/console/images/shiva_profil_005.png'
import ShivaApi001 from '@site/docs/console/images/shiva_api_001.png'
import ShivaApi002 from '@site/docs/console/images/shiva_api_002.png'
import ShivaApi003 from '@site/docs/console/images/shiva_api_003.png'
import ShivaApi004 from '@site/docs/console/images/shiva_api_004.png'

## Introducción

La API de Cloud Temple le permite crear y gestionar todos sus recursos en la nube de forma programática. Todo lo que puede hacer a través de la consola de Cloud Temple también se puede realizar a través de la API, desde la creación de máquinas virtuales hasta la configuración de la gestión de identidades y accesos.

Esta documentación le guía en el uso de la API de Cloud Temple, desde la autenticación hasta las mejores prácticas, incluyendo la gestión del ciclo de vida de los endpoints.

## Inicio rápido: Su primera solicitud de API

:::info[Resumen - 3 pasos para empezar]
1. 🔑 **Generar su PAT** desde la consola
2. 🚀 **Probar con curl** en `/iam/v2/roles`
3. ✅ **Analizar la respuesta** JSON
:::

### Requisitos previos

Antes de comenzar, debe tener una cuenta de Cloud Temple con los permisos apropiados para generar claves API.

### Pasos

1. **Generar su clave API**: Inicie sesión en la [consola de Cloud Temple](https://shiva.cloud-temple.com/login) y genere su Personal Access Token (consulte la sección [Claves API](#claves-api-personal-access-token) a continuación).

2. **Probar su primera solicitud**: Ejecute el siguiente comando curl, reemplazando `<your-personal-access-token>` con su token:

```bash
curl -X GET \
  -H "Authorization: Bearer <your-personal-access-token>" \
  -H "Content-Type: application/json" \
  "https://shiva.cloud-temple.com/api/iam/v2/roles"
```

3. **Analizar la respuesta**: Recibirá la lista de roles IAM disponibles en su tenant, lo que le permitirá comprender los permisos existentes.

## Autenticación

### Claves API (Personal Access Token)

La __clave API__ le permite autenticarse al realizar solicitudes a la API. La generación de una clave API, también conocida como __Personal Access Token (PAT)__, es una forma segura de conectarse a las API de la consola sin usar una interfaz gráfica. Cada uno de estos tokens está vinculado a un tenant y al usuario que lo creó.

La creación de este token se realiza desde su cuenta. Puede generar varias claves y configurar los permisos para cada una dentro de los límites de sus derechos.

#### Crear una clave API

Para crear una clave API, simplemente __haga clic en su perfil__:

<img src={ShivaProfil001} style={{maxWidth: '300px', width: '100%'}} />

En el menú del perfil, haga clic en __'Personal Access Token'__

<img src={ShivaProfil003} />

Verá entonces todas las claves API creadas para este usuario en este tenant. Haga clic en __'Nuevo token de acceso personal'__

<img src={ShivaProfil002} />

Debe entonces:

- Especificar el nombre de este nuevo token,
- Establecer una fecha de vencimiento (validez máxima de 12 meses),
- Elegir los permisos asociados con el token.

Los detalles de su token se mostrarán entonces. __Advertencia: no podrá acceder a estos detalles más adelante.__

Si no registra esta información, deberá eliminar y recrear el token.

<img src={ShivaProfil004} style={{maxWidth: '600px', width: '100%'}} />

Por razones de seguridad, se recomienda crear varios tokens, cada uno con un propósito específico (un token por aplicación o proceso de negocio) en lugar de crear un token con todos los permisos.

Verá entonces el token recién creado y su fecha de vencimiento futura.

<img src={ShivaProfil005} />

:::info[Ciclo de vida del token de autenticación]
Cuando usa su __Personal Access Token (PAT)__ para autenticarse con la API, recibe a cambio un token de acceso. Es importante tener en cuenta que este token de acceso es un __JSON Web Token (JWT)__ con una vida útil limitada.

- __Vida útil__: Cada token JWT es válido durante __5 minutos__.
- __Verificación__: Puede verificar la fecha de emisión (`iat`) y la fecha de vencimiento (`exp`) de su token decodificándolo. Herramientas en línea como [jwt.io](https://jwt.io) hacen esto fácil.

Una vez que el token expire, deberá volver a autenticarse con su PAT para obtener uno nuevo. Por lo tanto, se recomienda gestionar este ciclo de vida en sus scripts y aplicaciones planificando la renovación automática del token.
:::

## Acceso al portal API

La documentación OpenAPI 3.0 (Swagger) para las API de la consola de Cloud Temple está disponible directamente en la aplicación:

<img src={ShivaApi001} />

El acceso a la API requiere autenticación. Una vez autenticado, todas las operaciones deben incluir el encabezado __'Authorization'__ con el token de acceso bearer obtenido durante la fase de autenticación.

Las URL de los endpoints se proporcionan directamente en __Swagger__ (en el objeto "Servers" de cada página de API).

### Explorar la documentación interactiva

El portal API le permite:

- Ver todos los endpoints disponibles por módulo
- Probar solicitudes directamente desde la interfaz
- Ver modelos de datos (esquemas) para cada recurso
- Ver códigos de respuesta posibles para cada endpoint

## Estructura de endpoints

### Formato de URL

Las URL de la API de Cloud Temple siguen una estructura consistente:

```
https://shiva.cloud-temple.com/api/{module}/v{version}/{resource}
```

Donde:
- `{module}`: El módulo en cuestión (compute, iam, network, backup, etc.)
- `{version}`: La versión de la API (v1, v2, etc.)
- `{resource}`: El recurso a manipular (virtual-machines, users, networks, etc.)

### Ejemplos de endpoints

```
# Máquinas virtuales (Compute)
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
POST   https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
PATCH  https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
DELETE https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}

# Identidad y acceso (IAM)
GET    https://shiva.cloud-temple.com/api/iam/v1/users
POST   https://shiva.cloud-temple.com/api/iam/v1/users
GET    https://shiva.cloud-temple.com/api/iam/v1/users/{id}

# Redes
GET    https://shiva.cloud-temple.com/api/network/v1/virtual-networks
POST   https://shiva.cloud-temple.com/api/network/v1/virtual-networks
```

### Organización por módulos

La API de Cloud Temple está organizada en módulos funcionales:

| Módulo | Descripción | URL base |
|--------|-------------|----------|
| Consola Cloud Temple | Características generales | `/api/v1/` |
| Identidad (IAM) | Gestión de usuarios y accesos | `/iam/v1/` |
| VMware IaaS | Recursos de virtualización VMware | `/compute/v1/` |
| OpenIaaS | Recursos Xen Orchestra | `/openiaas/v1/` |
| S3 | Almacenamiento de objetos | `/s3/v1/` |
| OpenShift | Plataforma PaaS | `/openshift/v1/` |
| Bastion | Dispositivos bastion SSH/RDP | `/bastion/v1/` |
| Red | Gestión de red nivel 2 y 3 | `/network/v1/` |
| Housing | Colocation y housing | `/housing/v1/` |
| Marketplace | Catálogo de soluciones | `/marketplace/v1/` |
| Soporte | Tickets y soporte | `/support/v1/` |
| Notificación | Sistema de notificaciones | `/notification/v1/` |
| LLMaaS | Inteligencia artificial | `/llmaas/v1/` |

## Actividades

El seguimiento de solicitudes de tipo escritura (POST, PUT, PATCH, DELETE) se gestiona a través de la gestión de actividades. Cada una de estas solicitudes genera automáticamente una actividad asociada. Un código de estado HTTP 201 confirma la creación exitosa de la actividad. El identificador único de esta actividad se devuelve en los encabezados de respuesta bajo la clave 'Location'.

<img src={ShivaApi002} />

Una vez que se recupera el identificador, es posible acceder a los detalles de la actividad utilizando la API del módulo Activity:

<img src={ShivaApi003} />

El contenido de la actividad incluye toda la información esencial para identificar la operación, su fecha de ejecución y su estado de progreso. Aquí está el modelo de actividad:

```json
{
  "id": "UUIDV4",
  "tenantId": "UUIDV4",
  "description": "STRING",
  "type": "ComputeActivity" | "BackupActivity" | "IAMActivity" | "TagActivity" | "RTMSActivity" | "BastionActivity" | "SupportActivity",
  "tags": "STRING[]",
  "initiator": "UUIDV4",
  "creationDate": "DATE",
  "concernedItems": [
    {
      "type": "string",
      "id": "string"
    }
  ],
  "state": "CompletedState | RunningState | WaitingState | FailedState",
  "operationType": "read" | "write"
}
```

### Estados de actividad

El objeto __state__ puede tomar diferentes formas según el estado de la actividad:

#### waiting

Estado antes de que la operación haya comenzado:

```json
waiting: {}
```

#### running

Estado cuando la operación está en curso:

```json
running: {
  "status": "string",
  "startDate": "Date",
  "progression": "number"
}
```

#### failed

Estado si la operación falló:

```json
failed: {
  "startDate": "Date",
  "stopDate": "Date",
  "reason": "string"
}
```

#### completed

Estado si la operación está completada:

```json
completed: {
  "startDate": "Date",
  "stopDate": "Date",
  "result": "string"
}
```

:::info[Identificador de recurso creado]
El identificador (UUIDv4) del recurso creado está disponible en el resultado de la actividad una vez que se completa.
:::

## Límites de API

### ¿Por qué límites?

La consola de Cloud Temple define __límites en el volumen de solicitudes__ que un usuario puede hacer a la API durante un período especificado. La implementación de estos límites de tasa es una medida común en la gestión de API, adoptada por varias razones esenciales:

- __Prevención de abusos__: Estos límites ayudan a salvaguardar la integridad de la API al prevenir el uso abusivo o descuidado que podría comprometer su operación.
- __Aseguramiento de la calidad del servicio__: Al regular el acceso a la API, aseguramos una distribución justa de recursos, permitiendo a todos los usuarios beneficiarse de una experiencia estable y de alto rendimiento.

Tome por ejemplo un script mal diseñado o ineficiente que intenta llamadas API repetidas, arriesgando la saturación de recursos y la degradación del rendimiento. Al establecer umbrales de solicitud, prevenimos estas situaciones y mantenemos __un servicio fluido e ininterrumpido__ para todos nuestros clientes.

### ¿Cuáles son los límites de tasa para la API de la consola de Cloud Temple?

Aplicamos restricciones cuantitativas en las interacciones de los usuarios con la consola para cada producto.

Los límites se definen en __solicitudes por segundo (r/s) y por IP de origen__. Más allá del umbral límite, el sistema responderá con un código de error HTTP 429, indicando que se ha excedido el límite de solicitudes autorizadas.

Aquí están los límites definidos:

| Producto | Umbral límite |
|---|---|
| Consola Cloud Temple | 25 r/s |
| Identidad (IAM) | 25 r/s |
| VMware IaaS | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| OpenShift | 25 r/s |
| Bastion | 25 r/s |
| Red | 25 r/s |
| Housing | 25 r/s |
| Marketplace | 25 r/s |
| Soporte | 25 r/s |
| Notificación | 25 r/s |
| LLMaaS | 25 r/s |

### Rutas específicas

Ciertos endpoints de API específicos, particularmente aquellos relacionados con la autenticación o acciones sensibles, tienen límites más restrictivos para mejorar la seguridad y garantizar la estabilidad.

| Ruta | Umbral límite |
|---|---|
| Autenticación (IAM) | 5 r/s |
| IaaS - Almacenamiento (Datastores) | 20 r/s |
| Marketplace (Contacto) | 1 r/min - 5 r/h |

### ¿Cómo funcionan los límites de tasa?

Si el número de solicitudes enviadas a un endpoint de API excede el límite autorizado, el endpoint responderá con __un código de respuesta HTTP 429__. Este código indica que el usuario ha excedido el número permitido de solicitudes. Cuando esto ocurre, el endpoint de API también proporcionará un objeto JSON como respuesta, que contiene información detallada sobre la limitación aplicada:

```json
{
  "error": {
    "status": "429 Too Many Requests",
    "message": "Too Many Requests"
  }
}
```

### ¿Cómo evitar hacer demasiadas solicitudes?

Se recomienda limitar el número de llamadas API realizadas por su automatización para permanecer por debajo del límite de tasa establecido para el endpoint.

Esta situación ocurre a menudo cuando se ejecutan múltiples solicitudes en paralelo utilizando múltiples procesos o hilos.

Hay varias formas de mejorar la eficiencia de su automatización, incluyendo el uso de mecanismos de __almacenamiento en caché__ y la implementación __de un sistema de reintento con backoff exponencial__. Este método implica tomar una breve pausa cuando se encuentra un error de límite de tasa, luego reintentar la solicitud. Si la solicitud falla nuevamente, la duración de la pausa se aumenta gradualmente hasta que la solicitud tenga éxito o hasta que se alcance un número máximo de reintentos.

Este enfoque tiene muchas ventajas:

- __El backoff exponencial__ asegura que los intentos iniciales se realicen rápidamente mientras proporciona retrasos más largos en caso de fallos repetidos.
- Agregar __variación aleatoria__ a la pausa ayuda a prevenir que todos los intentos ocurran simultáneamente.

Es importante tener en cuenta que __las solicitudes fallidas no afectan su límite de tasa__. Sin embargo, reenviar continuamente una solicitud podría no ser una solución viable a largo plazo, ya que este comportamiento podría cambiar en el futuro. Por lo tanto, recomendamos no depender exclusivamente de este mecanismo.

Las bibliotecas de Python __[Backoff](https://pypi.org/project/backoff/)__ y __[Tenacity](https://pypi.org/project/tenacity/)__ son buenos puntos de partida para implementar estrategias de mitigación.

## Ciclo de vida y obsolescencia de endpoints

### Política de obsolescencia

Cloud Temple se compromete a mantener la compatibilidad de la API a lo largo del tiempo. Sin embargo, cuando es necesario evolucionar la API (nuevas características, optimizaciones, correcciones de seguridad), algunos endpoints pueden quedar obsoletos y luego eliminarse.

#### Regla mínima de 3 meses

Cuando un endpoint se marca como obsoleto:

1. **Anuncio oficial**: La obsolescencia se anuncia en las notas de lanzamiento de la consola
2. **Período de transición**: El endpoint permanece **accesible y funcional durante al menos 3 meses** después del anuncio
3. **Fecha de eliminación**: Se comunica una fecha específica de eliminación final en el momento del anuncio
4. **Alternativa documentada**: El nuevo endpoint de reemplazo está documentado y disponible

Esta regla de 3 meses le da el tiempo necesario para adaptar su código y migrar a los nuevos endpoints.

### ¿Cómo identificar un endpoint obsoleto?

#### En el portal API (Swagger)

Los endpoints obsoletos aparecen tachados en la documentación de Swagger:


~~POST /v1/antiguo/endpoint~~

La descripción del endpoint incluye:
- La fecha de anuncio de obsolescencia
- La fecha de eliminación planificada
- El endpoint de reemplazo recomendado

<img src={ShivaApi004} />

### Mejores prácticas para gestionar obsolescencias

1. **Monitorear funciones obsoletas**: Consulte regularmente las funciones obsoletas en la consola para estar informado de las obsolescencias próximas.

2. **Planificar sus migraciones**: Tan pronto como se anuncie una obsolescencia, planifique la migración de su código al nuevo endpoint dentro de 3 meses.

3. **Probar nuevos endpoints**: Pruebe los nuevos endpoints tan pronto como estén disponibles, incluso durante el período de transición.

4. **Documentar sus dependencias**: Mantenga una lista de endpoints que usa su aplicación para facilitar las migraciones futuras.

## Mejores prácticas

### Seguridad de tokens

:::danger[Reglas de seguridad esenciales]
- 🚫 Nunca exponga sus tokens en código versionado (Git, etc.)
- 🔐 Use variables de entorno para almacenar tokens
- 🎯 Cree tokens con permisos mínimos (principio de privilegio mínimo)
- 🔄 Renueve sus tokens regularmente (máximo 12 meses)
- ⚠️ Revoque inmediatamente cualquier token comprometido
:::

### Manejo de errores

Siempre maneje los errores HTTP en su código. Preste especial atención a los siguientes códigos:

| Código | Descripción | Acción recomendada |
|------|-------------|-------------------|
| **401** Unauthorized | Token expirado o inválido | Re-autenticarse con su PAT |
| **403** Forbidden | Permisos insuficientes | Verificar los derechos del token |
| **429** Too Many Requests | Límite de tasa alcanzado | Esperar antes de reintentar (backoff) |
| **500/503** Server Error | Error temporal del servidor | Reintentar más tarde |

### Optimización de llamadas API

- Usar paginación para listas grandes
- Almacenar en caché datos que cambian raramente
- Usar filtros para limitar los datos devueltos
- Agrupar operaciones cuando sea posible
- Seguir el estado de actividad asíncrono en lugar de sondeo intensivo

### Reintento con backoff exponencial

Para manejar errores temporales o limitación de tasa (HTTP 429), implemente una estrategia de reintento con backoff exponencial:

:::tip[Estrategia de reintento recomendada]
- ⏱️ **Espera progresiva**: 1s, 2s, 4s, 8s...
- 🎲 **Variación aleatoria**: Evita que todos los clientes reintenten simultáneamente
- 🔄 **Límite de reintentos**: Máximo 3-5 intentos
- 📚 **Bibliotecas Python**: [Backoff](https://pypi.org/project/backoff/) o [Tenacity](https://pypi.org/project/tenacity/)
:::
