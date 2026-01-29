---
title: Visión general
---

# Kubernetes gestionné

<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Descubra los fundamentos y principios esenciales para dominar nuestra infraestructura.</p>
    <a href="managed_kubernetes/concepts" class="card-link">Explorar conceptos &rarr;</a>
  </div>
  <div class="card">
    <h3>Guía de inicio</h3>
    <p>Comience rápidamente siguiendo instrucciones claras y sencillas.</p>
    <a href="managed_kubernetes/quickstart" class="card-link">Iniciar el Quickstart &rarr;</a>
  </div>
  <div class="card">
    <h3>Tutoriales</h3>
    <p>Aprenda paso a paso a configurar y utilizar nuestros servicios con guías detalladas.</p>
    <a href="managed_kubernetes/tutorials" class="card-link">Descubrir tutoriales &rarr;</a>
  </div>
</div>

Kubernetes gestionado por Cloud Temple es una solución de orquestación de contenedores basada en productos de código abierto y diseñada para ofrecer un alto nivel de seguridad, resiliencia y automatización en las plataformas SecNumcloud de Cloud Temple. Cada clúster se despliega en un entorno IaaS Cloud-Temple OpenIaaS completamente dedicado al cliente.

Esta oferta está diseñada para equipos con un buen conocimiento de Kubernetes y los entusiastas del código abierto que buscan una solución nativa, portable, sin capas adicionales del fabricante, sobre un sistema operativo minimalista e inmutable, diseñado para la automatización y la seguridad.

### Beneficios Clave

- **Soberanía y reversibilidad**: La solución se basa en estándares de código abierto (Kubernetes CNCF) para evitar cualquier dependencia tecnológica y garantizar la portabilidad de sus aplicaciones. La herramienta de copia de seguridad Veeam Kasten, incluida en la oferta, está especialmente diseñada para facilitar las migraciones entre nubes.
- **Seguridad "Zero-Trust" y gobernanza**: La arquitectura se apoya en Talos OS, un sistema operativo inmutable sin acceso directo (ni shell, ni SSH), lo que reduce drásticamente la superficie de ataque. Este enfoque se combina con herramientas de gobernanza como Kyverno para la gestión de políticas y Capsule para el control detallado de permisos, constituyendo una base sólida para una estrategia de seguridad "Zero-Trust".
- **Control de costos e integración**: La solución incluye de forma nativa herramientas de FinOps como OpenCost para un seguimiento preciso del consumo. El modelo económico es transparente, basado en los recursos IaaS consumidos, y el uso de componentes de código abierto reconocidos (Cilium, Ceph, ArgoCD) facilita su integración en sus ecosistemas existentes.

### A complete and ready-to-use platform

The solution natively includes a full and coherent stack of cutting-edge open source tools to cover all needs throughout the application lifecycle:

- **Networking and Security**: Cilium, Hubble, MetalLB, Ingress Nginx, Kyverno, Capsule
- **Storage**: Rook-Ceph
- **Continuous Deployment (GitOps)**: ArgoCD
- **Observability**: Prometheus, Grafana, Loki
- **Backup and Migration**: Veeam Kasten
- **Cost Management (FinOps)**: OpenCost

## Arquitecturas de Despliegue

Ofrecemos dos arquitecturas distintas para satisfacer sus necesidades, ya sea para entornos de desarrollo o de producción críticos.

### Dev/Test Architecture

Ideal for non-production environments, this compact architecture deploys all resources within a single availability zone (AZ). It is designed for agility and cost control.

- **Use cases**: Development, testing, proof-of-concept (POC).
- **Key features**:
    - 1 Control Plane node.
    - 3 Worker nodes (or more).
    - Distributed storage (Ceph) is co-located on the Worker nodes.
    - Does not benefit from high availability SLA.
    - No security restrictions.

<img src={require('./images/archi_overview_1az.png').default} alt="Mono-AZ Architecture" />

### Arquitectura de Producción (Multi-AZ)

Diseñada para producción y aplicaciones críticas, esta arquitectura distribuye los recursos en tres zonas de disponibilidad (AZ) para garantizar una alta disponibilidad y una resiliencia máxima, conforme a los requisitos de SecNumCloud.

- **Casos de uso**: Aplicaciones de producción, servicios críticos, plataformas que requieren un SLA.
- **Puntos clave**:
    - **Alta disponibilidad**: 3 nodos de Control Plane distribuidos en 3 AZ.
    - **Almacenamiento dedicado**: 3 nodos de almacenamiento dedicados y distribuidos para rendimiento y resiliencia.
    - **Workers distribuidos**: Mínimo 3 nodos workers, uno por AZ.
    - **Nodos Bare Metal (Opcional)**: Posible integración de nodos workers tipo **"Bare Metal"** para necesidades específicas de rendimiento, especialmente el **soporte de GPU**.
    - **SLA del 99,90%**.

<img src={require('./images/archi_overview.png').default} alt="Arquitectura Multi-AZ" />

### Componentes técnicos detallados

La oferta incluye detalladamente los siguientes componentes:

- CNI Cillium, con interfaz de observabilidad (Hubble)
- Ingresses internas y externas con MetalLB y nginx
- Almacenamiento distribuido Rook-Ceph
- Cert-Manager
- ArgoCD
- Pila Prometheus (Prometheus, Grafana, Loki)
- Registro de contenedores Harbor
- Gestión de costes con OpenCost
- Estrategias de seguridad avanzada con Kyverno y Capsule
- Veeam Kasten (copias de seguridad, automatizaciones entre entornos y reversibilidad)
- Autenticación SSO con un Identity Provider externo OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)