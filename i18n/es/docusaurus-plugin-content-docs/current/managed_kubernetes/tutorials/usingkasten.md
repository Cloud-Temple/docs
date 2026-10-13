---
title: Respalda tus aplicaciones con Veeam Kasten
---


import k10dashboard from '@site/docs/managed_kubernetes/tutorials/images/k10dashboard.png'
import k10s3location from '@site/docs/managed_kubernetes/tutorials/images/k10s3location.png'
import k10infrabackups from '@site/docs/managed_kubernetes/tutorials/images/k10infrabackups.png'
import k10policies from '@site/docs/managed_kubernetes/tutorials/images/k10policies.png'

## Introducción

Veeam Kasten K10 es una solución de copia de seguridad y restauración diseñada específicamente para entornos Kubernetes. En el producto Managed Kubernetes de Cloud Temple, Kasten está integrado para permitirte proteger tus aplicaciones, restaurar datos cuando sea necesario y garantizar la continuidad de tu negocio.

Este tutorial te guiará a través de los pasos básicos para realizar copias de seguridad y restaurar una aplicación utilizando Kasten.

## Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente:

- Un clúster Managed Kubernetes activo.
- El identificador de tu clúster (por ejemplo, `ctodev`).
- Una aplicación implementada en tu clúster que deseas respaldar.

## 1. Acceder al panel de control de Kasten

El panel de control de Kasten es accesible a través de una URL segura, construida a partir del identificador de tu clúster.

1. **Construye la URL de acceso**:
   La URL se basa en el siguiente modelo: `https://k10.external-secured.<identificador>.mk.ms-cloud-temple.com/k10/`
   Reemplaza `<identificador>` por el identificador de tu clúster. Por ejemplo, si tu identificador es `ctodev`, la URL será: `https://k10.external-secured.ctodev.mk.ms-cloud-temple.com/k10/`.
2. **Accede a la URL** en tu navegador.

   > ℹ️Nota sobre la seguridad
   > El acceso a esta URL está restringido a las direcciones IP públicas que has declarado. Si no puedes iniciar sesión, asegúrate de que tu dirección IP esté autorizada contactando al soporte de Cloud Temple.
   >

<img src={k10dashboard} alt="Kasten dahsboard"/>

> ℹ️[Guía de inicio rápido integrada] La consola de Kasten incluye una guía de inicio rápido interactiva en su página de inicio. No dudes en seguirla para una primera toma de contacto directamente desde la interfaz.

## 2. Comprender el almacenamiento de las copias de seguridad

Por defecto, Kasten está preconfigurado para utilizar el servicio de almacenamiento de objetos (S3) de Cloud Temple para almacenar tus copias de seguridad de manera segura y duradera.

No tienes ninguna configuración que realizar. La ubicación de almacenamiento ya está definida en el panel de control de Kasten, bajo **Settings > Locations**. Esta configuración garantiza que tus datos se almacenan en una infraestructura soberana.

<img src={k10s3location} alt="Kasten S3 configuration"/>

> ℹ️[Modelo de costes] El servicio Veeam Kasten está incluido en el producto Managed Kubernetes. El almacenamiento de las copias de seguridad en nuestro S3 soberano se factura según el uso. Consulta las [tarifas públicas en el sitio web de Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/) para más detalles.

## 3. Crear una política de copia de seguridad

Una política de copia de seguridad (`Policy`) es un conjunto de reglas que definen cuándo y cómo realizar copias de seguridad de tus aplicaciones.

⚠[Política de copia de seguridad existente] Una política de copia de seguridad llamada `infra-backups` ya está configurada en tu instancia de Kasten. Esta política asegura la copia de seguridad de los componentes esenciales entregados con el clúster.

<img src={k10infrabackups} alt="Kasten infra backups"/>

**No modifiques ni elimines esta política.**

Debes crear tus propias políticas para realizar copias de seguridad de las aplicaciones que implementes.

1. En el panel de control de Kasten, accede a la sección **Policies** y haz clic en **Create New Policy**.
2. **Nombra tu política**: Asigna un nombre descriptivo, por ejemplo `backup-my-app-daily`.
3. **Define la frecuencia (Action)**:

   - **Action**: `Snapshot` (instantánea).
   - **Frequency**: Elige la frecuencia que te convenga (por ejemplo, `Daily` a las `02:00`).
4. **Selecciona los recursos a respaldar**:

   - **Select resources by**: Puedes seleccionar aplicaciones por nombre (`Application Name`), por namespace (`Namespace`) o por etiquetas.
   - Para respaldar todas las aplicaciones de un namespace, elige `Namespace` y selecciona el namespace deseado.
5. **Haz clic en `Create Policy`** para guardar.

La política se ejecutará automáticamente a la frecuencia definida. También puedes iniciar una ejecución manual haciendo clic en el botón "Play" (▶️) junto a la política.


### Políticas de copia de seguridad rápidas

Para facilitar el uso inicial de Kasten, Cloud-Temple ha entregado *24 políticas de copia de seguridad*, que realizan una copia de seguridad a una hora fija, con una retención de 7 días en S3.

<img src={k10policies} alt="Kasten policies"/>

Estas políticas se aplican a los **namespaces que disponen de una etiqueta que indica qué política(s) aplicar.**

Por ejemplo, un namespace con la etiqueta **kasten-daily05-r7d = true** se respaldará en S3 todos los días a las 05:00 UTC, con 7 días de retención.


## 4. Restaurar una aplicación

Kasten facilita la restauración de una aplicación a su estado anterior a partir de un punto de restauración.

1. En el panel de control, ve a la sección **Applications**. Allí verás la lista de tus aplicaciones y su estado de conformidad con respecto a las políticas de copia de seguridad.
2. **Selecciona la aplicación** que deseas restaurar.
3. **Elige un punto de restauración**:
   La página de la aplicación muestra una lista de los puntos de restauración disponibles. Elige el que deseas utilizar y haz clic en **Restore**.
4. **Configura la restauración**:

   - Puedes elegir restaurar en un nuevo namespace o reemplazar la aplicación existente. Para este tutorial, reemplazaremos la aplicación existente.
   - Haz clic en **Restore** para iniciar el proceso.

Kasten ahora restaurará la aplicación al estado capturado en la instantánea. Puedes seguir el progreso en el panel de control.

## 5. Seguridad de las copias de seguridad

La protección de tus datos de copia de seguridad es una prioridad. La integración de Kasten en el producto Managed Kubernetes cumple con los más altos estándares de seguridad.

- **Cifrado**: De conformidad con los requisitos SecNumCloud, todas tus copias de seguridad están cifradas. Los datos se cifran en tránsito hacia el almacenamiento S3 con el protocolo **TLS 1.3** y en reposo en los buckets de almacenamiento con el algoritmo **AES-256**.
- **Gestión de permisos**: El acceso a la interfaz de Kasten y a sus funcionalidades está controlado por un sistema de permisos basado en el RBAC de Kubernetes. Solo los usuarios autorizados pueden crear, modificar o ejecutar políticas de copia de seguridad y restauración, garantizando así una gobernanza estricta de tus operaciones de copia de seguridad.

## Conclusión

Has aprendido a utilizar Veeam Kasten para realizar operaciones básicas de copia de seguridad y restauración en tu clúster Managed Kubernetes. Kasten ofrece muchas funcionalidades avanzadas, como la migración de aplicaciones entre clústeres y políticas de retención granulares, que puedes explorar para reforzar tu estrategia de protección de datos.

Para más información, consulta la [documentación oficial de Kasten K10](https://docs.kasten.io/latest/).
