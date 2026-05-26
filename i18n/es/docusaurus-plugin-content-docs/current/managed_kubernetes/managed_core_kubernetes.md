---
title: Vista general
---
import archiOverview1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import archiOverview from '@site/docs/managed_kubernetes/images/archi_overview.png'

# Managed Core Kubernetes

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

Managed **Core** Kubernetes by Cloud Temple es una solución de orquestación de contenedores basada en una selección de productos de código abierto, diseñada para ofrecer una base segura, resiliente y automatizada en las plataformas SecNumCloud de Cloud Temple. Cada clúster se despliega en un entorno IaaS Cloud-Temple completamente dedicado al cliente.

Este producto está diseñado para equipos con un dominio excelente de Kubernetes y las herramientas Cloud Native, que desean construir su propia plataforma sobre cimientos minimalistas y robustos. Se dirige a los partidarios del código abierto que buscan una solución depurada, portátil, sin capas adicionales del fabricante, sobre un sistema operativo minimalista e inmutable diseñado para la automatización y la seguridad.

### Beneficios Clave

- **Soberanía y Reversibilidad** : La solución se basa exclusivamente en estándares de código abierto (Kubernetes CNCF) para evitar cualquier dependencia tecnológica y garantizar la portabilidad de sus aplicaciones.
- **Seguridad "Zero-Trust" por diseño** : La arquitectura se basa en Talos OS, un sistema operativo inmutable sin acceso directo (ni shell, ni SSH), lo que reduce drásticamente la superficie de ataque y constituye una base sólida para una estrategia de seguridad "Zero-Trust".
- **Fundamentos de red modernos** : La integración de Cilium para el CNI y MetalLB para la exposición de servicios proporciona una base de red de alto rendimiento y estándar, lista para acoger sus propios componentes de seguridad y filtrado.

### Una plataforma base lista para ser ampliada

La oferta "Managed Core" incluye de forma nativa una stack mínima y coherente de herramientas open source de vanguardia para proporcionarle los fundamentos de un clúster de Kubernetes:

- **SO y Red** : Talos, Cilium, MetalLB

A partir de esta base, tiene la libertad de integrar sus propias herramientas para el despliegue continuo, la observabilidad, la copia de seguridad y la gestión de costos.

---

## Arquitecturas de Despliegue

Proponemos dos arquitecturas distintas para satisfacer sus necesidades, ya sea para entornos de desarrollo o de producción críticos.

### Arquitectura "Dev/Test"

Ideal para entornos de POC, esta arquitectura compacta despliega todos los recursos dentro de una sola zona de disponibilidad (AZ).

- **Casos de uso** : Desarrollo, pruebas, proof-of-concept (POC).
- **Puntos clave** :
  - 1 nodo Control Plane.
  - 3 nodos Workers (ou plus).
  - No cuenta con un SLA de alta disponibilidad.
  - ninguna restricción de seguridad

<img src={archiOverview1az} alt="Arquitectura Mono-AZ" />

### Arquitectura de Producción (Multi-AZ)

Diseñada para producción y aplicaciones críticas, esta arquitectura distribuye los recursos en tres zonas de disponibilidad (AZ) para garantizar alta disponibilidad y máxima resiliencia, de conformidad con los requisitos de SecNumCloud.

- **Caso de uso** : Aplicaciones de producción, servicios críticos, plataformas que requieren un SLA.
- **Puntos clave** :
  - **Alta Disponibilidad** : 3 nodos Control Plane distribuidos en 3 AZ.
  - **Almacenamiento Dedicado** : 3 nodos de almacenamiento dedicados y distribuidos para el rendimiento y la resiliencia.
  - **Workers Distribuidos** : Al menos 3 nodos workers, uno por AZ.
  - **Nodos Bare Metal (Opcional)** : Integración posible de nodos workers de tipo **"Bare Metal"** para necesidades de rendimiento específicas, especialmente el **soporte de GPU**.
  - **SLA del 99.95%**, medido mensualmente.


<img src={archiOverview} alt="Architecture Multi-AZ" />

---

### Componentes técnicos incluidos

La oferta "Managed Core" incluye los siguientes componentes:

- **Sistema operativo** : Talos OS
- **Almacenamiento** : Rook-Ceph
- **CNI (Container Network Interface)** : Cilium
- **Balanceador de carga** : MetalLB