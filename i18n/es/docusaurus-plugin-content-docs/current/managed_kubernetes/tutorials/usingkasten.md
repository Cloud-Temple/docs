---
title: Hacer copias de seguridad de sus aplicaciones con Veeam Kasten
---

import k10dashboard from '@site/docs/managed_kubernetes/tutorials/images/k10dashboard.png'
import k10s3location from '@site/docs/managed_kubernetes/tutorials/images/k10s3location.png'
import k10infrabackups from '@site/docs/managed_kubernetes/tutorials/images/k10infrabackups.png'

## Introducción

Veeam Kasten K10 es una solución de copia de seguridad y restauración diseñada específicamente para entornos Kubernetes. En el servicio Managed Kubernetes de Cloud Temple, Kasten está integrado para permitirle proteger sus aplicaciones, restaurar datos cuando sea necesario y garantizar la continuidad de su actividad.

Este tutorial le guiará a través de los pasos básicos para realizar copias de seguridad y restaurar una aplicación usando Kasten.

## Requisitos previos

Antes de comenzar, asegúrese de disponer de los siguientes elementos:

- Un clúster de Managed Kubernetes activo.
- El identificador de su clúster (por ejemplo, `ctodev`).
- Una aplicación desplegada en su clúster que desee respaldar.

## 1. Acceder al panel de control de Kasten

El panel de control de Kasten es accesible a través de una URL segura, construida a partir del identificador de su clúster.

1. **Construya la URL de acceso**:
    La URL se basa en la siguiente plantilla: `https://k10.external-secured.<identificador>.mk.ms-cloud-temple.com/k10/`
    Reemplace `<identificador>` por el identificador de su clúster. Por ejemplo, si su identificador es `ctodev`, la URL será: `https://k10.external-secured.ctodev.mk.ms-cloud-temple.com/k10/`.

2. **Acceda a la URL** en su navegador.

    :::info Nota de seguridad
    El acceso a esta URL está restringido a las direcciones IP públicas que usted ha declarado. Si no puede conectarse, asegúrese de que su dirección IP esté autorizada contactando con el soporte de Cloud Temple.
    :::

<img src={k10dashboard} />

:::tip Guía de inicio rápido integrada
La consola de Kasten incluye una guía de inicio rápido interactiva en su página de inicio. No dude en seguirla para una primera toma de contacto directamente desde la interfaz.
:::

## 2. Comprender el almacenamiento de copias de seguridad

Por defecto, Kasten está preconfigurado para usar el servicio de almacenamiento de objetos (S3) de Cloud Temple para almacenar sus copias de seguridad de forma segura y duradera.

No necesita realizar ninguna configuración. La ubicación de almacenamiento ya está definida en el panel de control de Kasten, en **Settings > Locations**. Esta configuración garantiza que sus datos se almacenen en una infraestructura soberana.

<img src={k10s3location} />

:::info Modelo de costos
El servicio Veeam Kasten está incluido en la oferta Managed Kubernetes. El almacenamiento de copias de seguridad en nuestro S3 soberano se factura por uso. Consulte nuestra tarifa para más detalles.
:::

## 3. Crear una política de copia de seguridad

Una política de copia de seguridad (`Policy`) es un conjunto de reglas que define cuándo y cómo respaldar sus aplicaciones.

:::warning Política de copia de seguridad existente
Una política de copia de seguridad llamada `infra-backups` ya está configurada en su instancia de Kasten. Esta política garantiza la copia de seguridad de los componentes esenciales entregados con el clúster.

<img src={k10infrabackups} />

**No modifique ni elimine esta política.**

Debe crear sus propias políticas para respaldar las aplicaciones que despliegue.
:::

1. En el panel de control de Kasten, vaya a la sección **Policies** y haga clic en **Create New Policy**.

2. **Asigne un nombre a su política**: Proporcione un nombre descriptivo, por ejemplo `backup-my-app-daily`.

3. **Defina la frecuencia (Action)**:
    - **Action**: `Snapshot`.
    - **Frequency**: Elija la frecuencia que más le convenga (por ejemplo, `Daily` a las `02:00`).

4. **Seleccione los recursos a respaldar**:
    - **Select resources by**: Puede seleccionar aplicaciones por nombre (`Application Name`), por namespace (`Namespace`), o por labels.
    - Para respaldar todas las aplicaciones de un namespace, elija `Namespace` y seleccione el namespace deseado.

5. **Haga clic en `Create Policy`** para guardar.

La política se ejecutará automáticamente en la frecuencia definida. También puede iniciar una ejecución manual haciendo clic en el botón "Play" (▶️) junto a la política.

## 4. Restaurar una aplicación

Kasten facilita la restauración de una aplicación a su estado anterior desde un punto de restauración.

1. En el panel de control, vaya a la sección **Applications**. Verá la lista de sus aplicaciones y su estado de conformidad con respecto a las políticas de copia de seguridad.

2. **Seleccione la aplicación** que desea restaurar.

3. **Elija un punto de restauración**:
    La página de la aplicación muestra una lista de los puntos de restauración disponibles. Elija el que desea usar y haga clic en **Restore**.

4. **Configure la restauración**:
    - Puede elegir restaurar en un nuevo namespace o reemplazar la aplicación existente. Para este tutorial, reemplazaremos la aplicación existente.
    - Haga clic en **Restore** para iniciar el proceso.

Kasten restaurará ahora la aplicación al estado capturado en el snapshot. Puede seguir el progreso en el panel de control.

## 5. Seguridad de las copias de seguridad

La protección de sus datos de copia de seguridad es una prioridad. La integración de Kasten en la oferta Managed Kubernetes cumple con los más altos estándares de seguridad.

- **Cifrado**: De conformidad con los requisitos SecNumCloud, todas sus copias de seguridad están cifradas. Los datos se cifran en tránsito hacia el almacenamiento S3 con el protocolo **TLS 1.3** y en reposo en los buckets de almacenamiento con el algoritmo **AES-256**.

- **Gestión de permisos**: El acceso a la interfaz de Kasten y sus funcionalidades está controlado por un sistema de permisos basado en el RBAC de Kubernetes. Solo los usuarios autorizados pueden crear, modificar o ejecutar políticas de copia de seguridad y restauración, garantizando así una gobernanza estricta de sus operaciones de copia de seguridad.

## Conclusión

Ha aprendido a usar Veeam Kasten para realizar operaciones básicas de copia de seguridad y restauración en su clúster de Managed Kubernetes. Kasten ofrece muchas funcionalidades avanzadas, como la migración de aplicaciones entre clústeres y políticas de retención granulares, que puede explorar para reforzar su estrategia de protección de datos.

Para más información, consulte la [documentación oficial de Kasten K10](https://docs.kasten.io/latest/).
