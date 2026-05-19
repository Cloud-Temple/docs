---
title: Visión general
---

# Kubernetes administrado

<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Descubra las bases y principios esenciales para dominar nuestra infraestructura.</p>
    <a href="./managed_kubernetes/concepts" class="card-link">Explorar los conceptos &rarr;</a>
  </div>
  <div class="card">
    <h3>Guía de inicio</h3>
    <p>Comience rápidamente siguiendo instrucciones claras y sencillas.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Iniciar el Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutoriales</h3>
    <p>Aprenda paso a paso a configurar y utilizar nuestros servicios con guías detalladas.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Descubrir los tutoriales &rarr;</a>
  </div>
</div>

Kubernetes administrado de Cloud Temple es una solución de orquestación de contenedores basada en productos de código abierto y diseñada para ofrecer un alto nivel de seguridad, resiliencia y automatización en las plataformas SecNumcloud de Cloud Temple. Cada clúster se implementa en un entorno IaaS de Cloud-Temple completamente dedicado al cliente.

Este producto está diseñado para equipos con un buen conocimiento de Kubernetes y para los entusiastas del código abierto que buscan una solución nativa, portátil, sin capa adicional del fabricante, sobre un sistema operativo minimalista e inmutable diseñado para la automatización y la seguridad.

### Beneficios Clave

- **Soberanía y Reversibilidad** : La solución se basa en estándares de código abierto (Kubernetes CNCF) para evitar cualquier dependencia tecnológica y garantizar la portabilidad de sus aplicaciones. La herramienta de copia de seguridad Veeam Kasten, incluida en el producto, está especialmente diseñada para facilitar las migraciones de una nube a otra.
- **Seguridad "Zero-Trust" y Gobernanza** : La arquitectura se basa en Talos OS, un sistema operativo inmutable sin acceso directo (ni shell, ni SSH), lo que reduce drásticamente la superficie de ataque. Este enfoque se complementa con herramientas de gobernanza como Kyverno para la gestión de políticas y Capsule para la gestión granular de permisos, constituyendo una base sólida para una estrategia de seguridad "Zero-Trust".
- **Control de Costes e Integración** : La solución integra nativamente herramientas de FinOps como OpenCost para un seguimiento preciso del consumo. El modelo económico es transparente, basado en los recursos IaaS consumidos, y el uso de componentes de código abierto reconocidos (Cilium, Ceph, ArgoCD) facilita la integración en sus ecosistemas existentes.

### Una plataforma completa y lista para usar

La solución incluye nativamente una stack completa y coherente de herramientas open source de última generación para cubrir todas las necesidades del ciclo de vida de la aplicación:

- **Red y Seguridad** : Cilium, Hubble, MetalLB, Ingress Nginx, Kyverno, Capsule
- **Almacenamiento** : Rook-Ceph
- **Despliegue Continuo (GitOps)** : ArgoCD
- **Observabilidad** : Prometheus, Grafana, Loki
- **Copia de seguridad y Migración** : Veeam Kasten
- **Gestión de Costos (FinOps)** : OpenCost

---

## Arquitecturas de Despliegue

Proponemos dos arquitecturas distintas para satisfacer sus necesidades, ya sea para entornos de desarrollo o de producción críticos.

### Arquitectura "Dev/Test"

Ideal para entornos de POC, esta arquitectura compacta despliega todos los recursos dentro de una única zona de disponibilidad (AZ).

- **Caso de uso** : Desarrollo, pruebas, proof-of-concept (POC).
- **Puntos clave** :
  - 1 nodo Control Plane.
  - 3 nodos Worker (o más).
  - El almacenamiento distribuido (Ceph) está co-localizado en los nodos Worker.
  - No cuenta con un SLA de alta disponibilidad.
  - Sin restricciones de seguridad

<img src={require('@site/docs/managed_kubernetes/images/archi_overview_1az.png').default} alt="Arquitectura Mono-AZ" />

### Arquitectura de Producción (Multi-AZ)

Diseñada para producción y aplicaciones críticas, esta arquitectura distribuye los recursos en tres zonas de disponibilidad (AZ) para garantizar una alta disponibilidad y una resiliencia máxima, conforme a los requisitos SecNumCloud.

- **Caso de uso** : Aplicaciones de producción, servicios críticos, plataformas que requieren un SLA.
- **Puntos clave** :
  - **Alta disponibilidad** : 3 nodos Control Plane distribuidos en 3 AZ.
  - **Almacenamiento dedicado** : 3 nodos de almacenamiento dedicados y distribuidos para el rendimiento y la resiliencia.
  - **Workers distribuidos** : Al menos 3 nodos workers, uno por AZ.
  - **Nodos Bare Metal (Opcional)** : Posibilidad de integrar nodos workers de tipo **"Bare Metal"** para necesidades de rendimiento específicas, especialmente el **soporte de GPU**.
  - **SLA del 99.90%**.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview.png').default} alt="Architecture Multi-AZ" />

---

### Componentes técnicos detallados

La oferta incluye en detalle los siguientes componentes:

- CNI Cillium, con interfaz de observabilidad (Hubble)
- Ingress internos y externos MetalLB y nginx
- Almacenamiento distribuido Rook-Ceph
- Cert-Manager
- ArgoCD
- Stack Prometheus (Prometheus, Grafana, Loki)
- Registro de contenedores Harbor
- Gestión de costos con OpenCost
- Políticas de seguridad avanzadas con Kyverno y Capsule
- Veeam Kasten (copias de seguridad, automatizaciones entre entornos y reversibilidad)
- Autenticación SSO con un Proveedor de Identidad Externo OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)