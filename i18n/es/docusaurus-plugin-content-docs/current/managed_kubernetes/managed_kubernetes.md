---
title: Visión general
---

# Kubernetes gestionado

<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Descubra las bases y principios esenciales para dominar nuestra infraestructura.</p>
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

Kubernetes gestionado por Cloud Temple es una solución de orquestación de contenedores basada en software de código abierto y diseñada para ofrecer un alto nivel de seguridad, resiliencia y automatización en las plataformas SecNumcloud de Cloud Temple. Cada clúster se despliega en un entorno IaaS Cloud-Temple (VMware u OpenIaaS) completamente dedicado al cliente.

Esta oferta está diseñada para expertos en Kubernetes y entusiastas del software de código abierto que buscan una solución nativa, portable, sin capas adicionales del fabricante, sobre un sistema operativo minimalista e inmutable, diseñado para la automatización y la seguridad.

### Beneficios Clave
- **Soberanía y reversibilidad**: La solución se basa en estándares de código abierto (Kubernetes CNCF) para evitar cualquier dependencia tecnológica y garantizar la portabilidad de sus aplicaciones. La herramienta de copia de seguridad Veeam Kasten, incluida en la oferta, está especialmente diseñada para facilitar las migraciones entre diferentes nubes.
- **Seguridad "Zero-Trust" y gobernanza**: La arquitectura se apoya en Talos OS, un sistema operativo inmutable sin acceso directo (ni shell, ni SSH), lo que reduce drásticamente la superficie de ataque. Este enfoque se combina con herramientas de gobernanza como Kyverno para la gestión de políticas y Capsule para la gestión detallada de permisos, constituyendo una base sólida para una estrategia de seguridad "Zero-Trust".
- **Control de costos e integración**: La solución incluye de forma nativa herramientas de FinOps como KubeCost para un seguimiento preciso del consumo. El modelo económico es transparente, basado en los recursos IaaS consumidos, y el uso de componentes de código abierto reconocidos (Cilium, Ceph, ArgoCD) facilita su integración en sus ecosistemas existentes.

### A complete and ready-to-use platform  
The solution natively includes a full, cohesive stack of cutting-edge open-source tools to cover all needs throughout the application lifecycle:

- **Networking and Security**: Cilium, Hubble, Kyverno, Capsule  
- **Storage**: Rook-Ceph  
- **Continuous Deployment (GitOps)**: ArgoCD  
- **Observability**: Prometheus, Grafana, Loki  
- **Backup and Migration**: Veeam Kasten  
- **Cost Management (FinOps)**: KubeCost

## Arquitecturas de Despliegue

Proponemos dos arquitecturas distintas para satisfacer sus necesidades, ya sea para entornos de desarrollo o de producción críticos.

### Mono-AZ Architecture (Development and Testing)

Ideal for non-production environments, this compact architecture deploys all resources within a single availability zone (AZ). It is designed for agility and cost control.

- **Use cases**: Development, testing, pre-production, proof-of-concept (POC).
- **Key features**:
    - 1 Control Plane node.
    - 3 Worker nodes (or more).
    - Distributed storage (Ceph) is co-located on the worker nodes.
    - Does not benefit from a high availability SLA.

<img src={require('./images/archi_overview_1az.png').default} alt="Mono-AZ Architecture" />

### Arquitectura Multi-AZ (Producción)

Diseñada para producción y aplicaciones críticas, esta arquitectura distribuye los recursos en tres zonas de disponibilidad (AZ) para garantizar una alta disponibilidad y una resiliencia máxima, conforme a los requisitos de SecNumCloud.

- **Casos de uso**: Aplicaciones de producción, servicios críticos, plataformas que requieren un SLA.
- **Puntos clave**:
    - **Alta disponibilidad**: 3 nodos de Control Plane distribuidos en 3 AZ.
    - **Almacenamiento dedicado**: 3 nodos de almacenamiento dedicados y distribuidos para rendimiento y resiliencia.
    - **Workers distribuidos**: Mínimo 3 nodos workers, uno por AZ.
    - **SLA del 99,95%**.

<img src={require('./images/archi_overview.png').default} alt="Arquitectura Multi-AZ" />

### Componentes técnicos detallados
La oferta incluye detalladamente los siguientes componentes:

- CNI Cillium, con interfaz de observabilidad (Hubble)
- Ingresses internas y externas con MetalLB y nginx
- Almacenamiento distribuido Rook-Ceph
- Cert-Manager
- ArgoCD
- Pila Prometheus (Prometheus, Grafana, Promtail, Loki)
- Registro de contenedores Harbor
- Gestión de costes con KubeCost
- Estrategias de seguridad avanzada con Kyverno y Capsule
- Veeam Kasten (copias de seguridad, automatizaciones entre entornos y reversibilidad)
- (opcional): Autenticación Entra con SSO