---
title: Visión general de la Console
---

import { ConsoleMap } from '@site/src/components/ConsoleMap';

La Console de Cloud Temple es la interfaz de gestión de su plataforma cloud. En ella crea sus entornos, gestiona los accesos de sus equipos, activa sus productos, encarga recursos y sigue su consumo. Todo lo que hace en la Console también está disponible a través de su [API](./api.md), y el [proveedor de Terraform](../terraform/terraform.md) le permite gestionar su plataforma *as code*.

## Dónde se sitúa la Console

<ConsoleMap />

Hay que distinguir dos caminos:

- **La gestión.** Sus equipos se conectan a la Console desde un navegador, en [shiva.cloud-temple.com](https://shiva.cloud-temple.com). El acceso está limitado a las [direcciones IP públicas que usted ha autorizado](./onboarding.md#añadir-una-dirección-ip) y el [doble factor](./onboarding.md#el-doble-factor-es-obligatorio) es obligatorio. Sus scripts y Terraform pasan por la API, autenticados con una clave de API (*Personal Access Token*).
- **El uso.** Los usuarios de sus aplicaciones llegan a sus máquinas y servicios a través de las ofertas de [Red](../network/network_overview.md), como Internet o Private Network. Este tráfico no pasa por la Console: la Console sirve para gestionar su infraestructura, no para darle servicio.

Sus recursos se organizan en **tenants**, entornos aislados dentro de su organización, y se despliegan en [regiones y zonas de disponibilidad](../additional_content/concepts_regional.md). Los [conceptos](./concepts.md) describen este modelo.

## Qué hace en ella

<div class="card-grid">
  <div class="card">
    <h3>Preparar sus entornos</h3>
    <p>Crear su organización y sus tenants, y después activar sus productos.</p>
    <a href="./console/onboarding" class="card-link">Guía de inicio &rarr;</a>
  </div>

  <div class="card">
    <h3>Gestionar los accesos</h3>
    <p>Usuarios, permisos por tenant y federación de identidades.</p>
    <a href="./console/iam" class="card-link">Módulo IAM &rarr;</a>
  </div>

  <div class="card">
    <h3>Seguir sus costes</h3>
    <p>Consumo por producto, por servicio y por tenant.</p>
    <a href="./console/billing/concepts" class="card-link">Gestor de costes &rarr;</a>
  </div>

  <div class="card">
    <h3>Supervisar sus recursos</h3>
    <p>Métricas en formato Prometheus, consultables en la Console o en sus propias herramientas.</p>
    <a href="./console/metrics/concepts" class="card-link">Metrología &rarr;</a>
  </div>

  <div class="card">
    <h3>Seguir las operaciones y los incidentes</h3>
    <p>Intervenciones planificadas en la plataforma e incidentes en curso.</p>
    <a href="./console/status" class="card-link">Operaciones planificadas &rarr;</a>
  </div>

  <div class="card">
    <h3>Contactar con el soporte</h3>
    <p>Asesoramiento, asistencia sobre su cuenta, incidentes o servicios profesionales: todas sus solicitudes al soporte.</p>
    <a href="./console/console_quickstart#acceso-al-soporte-técnico" class="card-link">Soporte técnico &rarr;</a>
  </div>

  <div class="card">
    <h3>Encargar recursos</h3>
    <p>Zonas de disponibilidad, clústeres, almacenamiento y redes, con el seguimiento de los pedidos.</p>
    <a href="./console/orders" class="card-link">Desplegar recursos &rarr;</a>
  </div>

  <div class="card">
    <h3>Automatizar</h3>
    <p>Todas las funciones de la Console a través de la API, y su infraestructura as code con Terraform.</p>
    <a href="./console/api" class="card-link">Documentación de la API &rarr;</a>
  </div>
</div>

## Por dónde empezar

- **Descubre Cloud Temple**: siga la [guía de inicio](./onboarding.md), desde la creación de su organización hasta la activación de sus productos.
- **Quiere entender el modelo** de organización, tenants y permisos: lea los [conceptos](./concepts.md).
- **Busca una función en la interfaz**: haga la [visita de la Console](./console_quickstart.md).
