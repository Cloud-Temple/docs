---
title: Vista general
---

import archiOverview1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import archiOverview from '@site/docs/managed_kubernetes/images/archi_overview.png'

# Managed Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Descubra los fundamentos y principios esenciales para dominar nuestra infraestructura.</p>
    <a href="./managed_kubernetes/concepts" class="card-link">Explorar los conceptos &rarr;</a>
  </div>
  <div class="card">
    <h3>Guía de inicio rápido</h3>
    <p>Comience rápidamente siguiendo instrucciones claras y sencillas.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Iniciar el Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutoriales</h3>
    <p>Aprenda paso a paso a configurar y utilizar nuestros servicios con guías detalladas.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Descubrir los tutoriales &rarr;</a>
  </div>
</div>

**Managed Kubernetes** de Cloud Temple es una solución de orquestación de contenedores basada en estándares de código abierto (CNCF). Está diseñada para ofrecer un alto nivel de seguridad, resiliencia y automatización en las plataformas SecNumcloud de Cloud Temple. Cada clúster se despliega en un entorno IaaS Cloud-Temple completamente dedicado al cliente.

Para responder de la mejor manera a las necesidades de sus equipos, ofrecemos dos variantes de este producto: **Managed Core Kubernetes** (una base minimalista) y **Managed Kubernetes** (una plataforma completa "lista para usar").

---

## Dos enfoques para sus clústeres

### 1. Managed Core Kubernetes (La base minimalista)
Esta oferta está diseñada para equipos con un **excelente dominio de Kubernetes** y herramientas Cloud Native, que desean construir su propia plataforma sobre bases minimalistas y robustas. Se dirige a los entusiastas del código abierto que buscan una solución depurada, portátil, sin capas adicionales del proveedor, sobre un sistema operativo minimalista e inmutable diseñado para la automatización y la seguridad.

- **SO y Red incluidos**: Talos OS, Rook-Ceph (almacenamiento), Cilium (CNI), MetalLB (Balanceador de carga).
- **Filosofía**: A partir de esta base eficiente y estandarizada, tienes la libertad de integrar tus propias herramientas de despliegue continuo, observabilidad, copia de seguridad o seguridad.

### 2. Managed Kubernetes (La plataforma completa)
Esta oferta integral está diseñada para equipos que buscan una solución **nativa, lista para usar y todo en uno**, que integre los mejores estándares de código abierto para cubrir todas las necesidades del ciclo de vida de la aplicación sin tener que ensamblar y mantener los componentes por su cuenta.

Además de la base "Core" (Talos, Ceph, Cilium, MetalLB), integra de forma nativa:
- **Red y Seguridad** : Hubble, Ingress Nginx, Kyverno, Capsule, Cert-Manager.
- **Despliegue Continuo (GitOps)** : ArgoCD, Registro de contenedores Harbor, Keda
- **Observabilidad** : Stack completa (Prometheus, Grafana, Loki, Pyroscope).
- **Gestión de Costes (FinOps)** : OpenCost.
- **Copia de Seguridad y Reversibilidad** : Veeam Kasten.
- **Identidad** : Autenticación SSO con un Proveedor de Identidad Externo OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...).

---

## Beneficios Clave Comunes

Independientemente de la oferta elegida, nuestros clústeres de Kubernetes comparten estos beneficios fundamentales:

- **Soberanía y Reversibilidad** : La solución se basa en estándares de código abierto para evitar cualquier dependencia tecnológica (*vendor lock-in*) y garantizar la portabilidad total de sus aplicaciones. (Con Veeam Kasten incluido en la versión completa para facilitar las migraciones intercloud).
- **Seguridad "Zero-Trust" por diseño** : La arquitectura se basa en **Talos OS**, un sistema operativo Linux inmutable y efímero diseñado específicamente para Kubernetes. No cuenta con ningún acceso directo (ni shell, ni SSH), lo que reduce drásticamente la superficie de ataque.
- **Control de Costos** : El modelo económico es transparente, basado exclusivamente en los recursos subyacentes de IaaS consumidos, sin costo de licencia adicional para el orquestador.

---

## Arquitecturas de Despliegue

Proponemos dos arquitecturas distintas para satisfacer sus necesidades, ya sea para entornos de desarrollo o de producción críticos. Estas arquitecturas se aplican a las dos ofertas (Core et Full).

### Arquitectura "Dev/Test"

Ideal para entornos de POC, esta arquitectura compacta despliega todos los recursos dentro de una sola zona de disponibilidad (AZ).

- **Casos de uso** : Desarrollo, pruebas, prueba de concepto (POC).
- **Puntos clave** :
  - 1 nodo Control Plane.
  - 3 nodos Workers (o más).
  - El almacenamiento distribuido (Ceph) se co-localiza en los nodos workers.
  - No cuenta con un SLA de alta disponibilidad.
  - Ninguna restricción de seguridad específica para la arquitectura.

<img src={archiOverview1az} alt="Architecture Mono-AZ" />

### Arquitectura de Producción (Multi-AZ)

Diseñada para producción y aplicaciones críticas, esta arquitectura distribuye los recursos en tres zonas de disponibilidad (AZ) para garantizar alta disponibilidad y máxima resiliencia, de acuerdo con los requisitos de SecNumCloud.

- **Caso de uso** : Aplicaciones de producción, servicios críticos, plataformas que requieren un SLA.
- **Puntos clave** :
  - **Alta Disponibilidad** : 3 nodos Control Plane distribuidos en 3 AZ.
  - **Almacenamiento Dedicado** : 3 nodos de almacenamiento dedicados y distribuidos para el rendimiento y la resiliencia.
  - **Workers Distribuidos** : Al menos 3 nodos workers, uno por AZ.
  - **Nodos Bare Metal (Optionnel)** : Integración posible de nodos workers de tipo **"Bare Metal"** para necesidades de rendimiento específicas, especialmente el **soporte de GPU**.
  - **SLA del 99.95%**, medido mensualmente.

<img src={archiOverview} alt="Architecture Multi-AZ" />