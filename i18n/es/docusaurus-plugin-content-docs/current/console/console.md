---
title: Visión general de la Console
---

import { ConsoleMap } from '@site/src/components/ConsoleMap';

La Console de Cloud Temple es la interfaz de gestión de su plataforma cloud. En ella crea sus entornos, gestiona los accesos de sus equipos, activa sus productos, encarga recursos y sigue su consumo. Todo lo que hace en la Console también está disponible a través de su [API](./api.md), y el [proveedor de Terraform](../terraform/terraform.md) le permite gestionar su plataforma *as code*.

<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Descubra las bases y principios esenciales para comprender y dominar nuestra infraestructura.</p>
    <a href="./console/concepts" class="card-link">Explorar los conceptos &rarr;</a>
  </div>
  <div class="card">
    <h3>Guía de inicio</h3>
    <p>Comience rápidamente con nuestros recursos siguiendo instrucciones claras y sencillas.</p>
    <a href="./console/onboarding" class="card-link">Abrir la guía de inicio &rarr;</a>
  </div>
  <div class="card">
    <h3>Tutoriales</h3>
    <p>Aprenda paso a paso a configurar y utilizar nuestros servicios con guías detalladas.</p>
    <a href="./console/tutorials" class="card-link">Descubrir los tutoriales &rarr;</a>
  </div>
  <div class="card">
    <h3>Preguntas frecuentes</h3>
    <p>Encuentre las respuestas a las preguntas más habituales sobre este producto.</p>
    <a href="./console/faq" class="card-link">Consultar las preguntas frecuentes &rarr;</a>
  </div>
</div>

## Dónde se sitúa la Console

<ConsoleMap />

Hay que distinguir dos caminos:

- **La gestión.** Sus equipos se conectan a la Console desde un navegador, en [shiva.cloud-temple.com](https://shiva.cloud-temple.com). El acceso está limitado a las [direcciones IP públicas que usted ha autorizado](./onboarding.md#añadir-una-dirección-ip) y el [doble factor](./onboarding.md#el-doble-factor-es-obligatorio) es obligatorio. Sus scripts y Terraform pasan por la API, autenticados con una clave de API (*Personal Access Token*).
- **El uso.** Los usuarios de sus aplicaciones llegan a sus máquinas y servicios a través de las ofertas de [Red](../network/network_overview.md), como Internet o Private Network. Este tráfico no pasa por la Console: la Console sirve para gestionar su infraestructura, no para darle servicio.

Sus recursos se organizan en **tenants**, entornos aislados dentro de su organización, y se despliegan en [regiones y zonas de disponibilidad](../additional_content/concepts_regional.md). Los [conceptos](./concepts.md) describen este modelo.

## Qué hace en ella

- **[Preparar sus entornos](./console/onboarding)**: Crear su organización y sus tenants, y después activar sus productos.
- **[Gestionar los accesos](./console/iam)**: Usuarios, permisos por tenant y federación de identidades.
- **[Seguir sus costes](./console/billing/concepts)**: Consumo por producto, por servicio y por tenant.
- **[Supervisar sus recursos](./console/metrics/concepts)**: Métricas en formato Prometheus, consultables en la Console o en sus propias herramientas.
- **[Seguir las operaciones y los incidentes](./console/status)**: Intervenciones planificadas en la plataforma e incidentes en curso.
- **[Contactar con el soporte](./console/console_quickstart#acceso-al-soporte-técnico)**: Asesoramiento, asistencia sobre su cuenta, incidentes o servicios profesionales: todas sus solicitudes al soporte.
- **[Encargar recursos](./console/orders)**: Zonas de disponibilidad, clústeres, almacenamiento y redes, con el seguimiento de los pedidos.
- **[Automatizar](./console/api)**: Todas las funciones de la Console a través de la API, y su infraestructura as code con Terraform.

## Por dónde empezar

- **Descubre Cloud Temple**: siga la [guía de inicio](./onboarding.md), desde la creación de su organización hasta la activación de sus productos.
- **Quiere entender el modelo** de organización, tenants y permisos: lea los [conceptos](./concepts.md).
- **Busca una función en la interfaz**: haga la [visita de la Console](./console_quickstart.md).
