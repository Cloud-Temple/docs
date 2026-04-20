---
title: Descripción general de Managed Core Kubernetes
---

# Managed Core Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Descubra las bases y los principios esenciales para dominar nuestra infraestructura.</p>
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

Managed **Core** Kubernetes by Cloud Temple es una solución de orquestación de contenedores basada en una selección de productos Open Source, diseñada para ofrecer una capa base segura, resiliente y automatizada en las plataformas SecNumCloud de Cloud Temple. Cada clúster se despliega en un entorno IaaS de Cloud Temple completamente dedicado al cliente.

Esta oferta está diseñada para equipos con un excelente dominio de Kubernetes y las herramientas Cloud Native, que desean construir su propia plataforma sobre fundamentos minimalistas y robustos. Se dirige a los entusiastas del código abierto que buscan una solución depurada, portable, sin capa adicional del fabricante, en un OS minimalista e inmutable diseñado para la automatización y la seguridad.

### Beneficios Clave

- **Soberanía y Reversibilidad**: La solución se apoya exclusivamente en estándares open source (Kubernetes CNCF) para evitar cualquier dependencia tecnológica y garantizar la portabilidad de sus aplicaciones.
- **Seguridad "Zero-Trust" by design**: La arquitectura se basa en Talos OS, un sistema operativo inmutable sin acceso directo (sin shell, sin SSH), lo que reduce drásticamente la superficie de ataque y constituye una base sólida para una estrategia de seguridad "Zero-Trust".
- **Fundamentos de red modernos**: La integración de Cilium para el CNI y MetalLB para la exposición de servicios proporciona una base de red eficiente y estándar, lista para acoger sus propios componentes de seguridad y filtrado.

### Una plataforma base lista para ser extendida

La oferta "Managed Core" incluye nativamente una stack mínima y coherente de herramientas open source de vanguardia para proporcionarle los fundamentos de un clúster Kubernetes:

- **OS y Red**: Talos, Cilium, MetalLB

A partir de esta base, es libre de integrar sus propias herramientas para el despliegue continuo, la observabilidad, el respaldo y la gestión de costes.

---

## Arquitecturas de Despliegue

Ofrecemos dos arquitecturas distintas para satisfacer sus necesidades, ya sea para entornos de desarrollo o de producción crítica.

### Arquitectura "Dev/Test"

Ideal para entornos de POC, esta arquitectura compacta despliega todos los recursos dentro de una única zona de disponibilidad (AZ).

- **Casos de uso**: Desarrollo, pruebas, proof-of-concept (POC).
- **Puntos clave**:
  - 1 nodo Control Plane.
  - 3 nodos Workers (o más).
  - Sin SLA de alta disponibilidad.
  - Sin restricciones de seguridad.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview_1az.png').default} alt="Arquitectura Mono-AZ" />

### Arquitectura de Producción (Multi-AZ)

Diseñada para producción y aplicaciones críticas, esta arquitectura distribuye los recursos en tres zonas de disponibilidad (AZ) para garantizar alta disponibilidad y máxima resiliencia, conforme a los requisitos de SecNumCloud.

- **Casos de uso**: Aplicaciones de producción, servicios críticos, plataformas que requieren un SLA.
- **Puntos clave**:
  - **Alta Disponibilidad**: 3 nodos Control Plane distribuidos en 3 AZs.
  - **Workers Distribuidos**: Al menos 3 nodos workers, uno por AZ.
  - **Nodos Bare Metal (Opcional)**: Posible integración de nodos workers de tipo **"Bare Metal"** para necesidades de rendimiento específicas, en particular el **soporte de GPU**.
  - **SLA del 99,90%**.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview.png').default} alt="Arquitectura Multi-AZ" />

---

### Componentes técnicos incluidos

La oferta "Managed Core" incluye los siguientes componentes:

- **Sistema operativo**: Talos OS
- **Almacenamiento**: Rook-Ceph
- **CNI (Container Network Interface)**: Cilium
- **Load Balancer**: MetalLB
