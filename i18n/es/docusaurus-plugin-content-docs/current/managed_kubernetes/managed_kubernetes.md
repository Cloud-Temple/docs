---
title: Descripción general de Managed Kubernetes
---

# Managed Kubernetes

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

Managed Kubernetes by Cloud Temple es una solución de orquestación de contenedores basada en productos Open Source, diseñada para ofrecer un alto nivel de seguridad, resiliencia y automatización en las plataformas SecNumCloud de Cloud Temple. Cada clúster se despliega en un entorno IaaS de Cloud Temple completamente dedicado al cliente.

Esta oferta está diseñada para equipos con un buen conocimiento de Kubernetes y los entusiastas del código abierto que buscan una solución nativa, portable, sin capa adicional del fabricante, en un OS minimalista e inmutable diseñado para la automatización y la seguridad.

### Beneficios Clave

- **Soberanía y Reversibilidad**: La solución se apoya en estándares open source (Kubernetes CNCF) para evitar cualquier dependencia tecnológica y garantizar la portabilidad de sus aplicaciones. La herramienta de respaldo Veeam Kasten, incluida en la oferta, está específicamente diseñada para facilitar las migraciones de una nube a otra.
- **Seguridad "Zero-Trust" y Gobernanza**: La arquitectura se basa en Talos OS, un sistema operativo inmutable sin acceso directo (sin shell, sin SSH), lo que reduce drásticamente la superficie de ataque. Este enfoque se combina con herramientas de gobernanza como Kyverno para la gestión de políticas y Capsule para la gestión detallada de derechos, constituyendo una base sólida para una estrategia de seguridad "Zero-Trust".
- **Control de Costes e Integración**: La solución integra nativamente herramientas FinOps como OpenCost para un seguimiento preciso del consumo. El modelo económico es transparente, basado en los recursos IaaS consumidos, y el uso de componentes open source reconocidos (Cilium, Ceph, ArgoCD) facilita la integración en sus ecosistemas existentes.

### Una plataforma completa y lista para usar

La solución incluye nativamente una stack completa y coherente de herramientas open source de vanguardia para cubrir todas las necesidades del ciclo de vida de las aplicaciones:

- **Red y Seguridad**: Cilium, Hubble, MetalLB, Ingress Nginx, Kyverno, Capsule
- **Almacenamiento**: Rook-Ceph
- **Despliegue Continuo (GitOps)**: ArgoCD
- **Observabilidad**: Prometheus, Grafana, Loki
- **Respaldo y Migración**: Veeam Kasten
- **Gestión de Costes (FinOps)**: OpenCost

---

## Arquitecturas de Despliegue

Ofrecemos dos arquitecturas distintas para satisfacer sus necesidades, ya sea para entornos de desarrollo o de producción crítica.

### Arquitectura "Dev/Test"

Ideal para entornos de POC, esta arquitectura compacta despliega todos los recursos dentro de una única zona de disponibilidad (AZ).

- **Casos de uso**: Desarrollo, pruebas, proof-of-concept (POC).
- **Puntos clave**:
  - 1 nodo Control Plane.
  - 3 nodos Workers (o más).
  - El almacenamiento distribuido (Ceph) está co-localizado en los nodos workers.
  - Sin SLA de alta disponibilidad.
  - Sin restricciones de seguridad.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview_1az.png').default} alt="Arquitectura Mono-AZ" />

### Arquitectura de Producción (Multi-AZ)

Diseñada para producción y aplicaciones críticas, esta arquitectura distribuye los recursos en tres zonas de disponibilidad (AZ) para garantizar alta disponibilidad y máxima resiliencia, conforme a los requisitos de SecNumCloud.

- **Casos de uso**: Aplicaciones de producción, servicios críticos, plataformas que requieren un SLA.
- **Puntos clave**:
  - **Alta Disponibilidad**: 3 nodos Control Plane distribuidos en 3 AZs.
  - **Almacenamiento Dedicado**: 3 nodos de almacenamiento dedicados y distribuidos para el rendimiento y la resiliencia.
  - **Workers Distribuidos**: Al menos 3 nodos workers, uno por AZ.
  - **Nodos Bare Metal (Opcional)**: Posible integración de nodos workers de tipo **"Bare Metal"** para necesidades de rendimiento específicas, en particular el **soporte de GPU**.
  - **SLA del 99,90%**.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview.png').default} alt="Arquitectura Multi-AZ" />

---

### Componentes técnicos detallados

La oferta incluye en detalle los siguientes componentes:

- CNI Cilium, con interfaz de observabilidad (Hubble)
- Ingresses internos y externos MetalLB y nginx
- Almacenamiento distribuido Rook-Ceph
- Cert-Manager
- ArgoCD
- Stack de Prometheus (Prometheus, Grafana, Loki)
- Registro de contenedores Harbor
- Gestión de costes con OpenCost
- Políticas de seguridad avanzadas con Kyverno y Capsule
- Veeam Kasten (respaldo, automatizaciones entre entornos y reversibilidad)
- Autenticación SSO con un proveedor de identidad externo OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)
