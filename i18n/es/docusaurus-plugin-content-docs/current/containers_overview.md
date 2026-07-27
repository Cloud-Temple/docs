---
title: Descripción general de las ofertas de contenedorización
sidebar_position: 10 # Posición justo antes de IaaS
---

# La contenedorización, acelerador de su transformación digital

En un contexto de transformación digital acelerada, la capacidad de desarrollar, desplegar y evolucionar rápidamente las aplicaciones se ha convertido en una ventaja competitiva decisiva. La contenedorización, orquestada por plataformas como Kubernetes y OpenShift, responde a este desafío ofreciendo una agilidad, portabilidad y eficiencia operativa inigualables.

Sin embargo, la complejidad inherente a estas tecnologías puede representar un obstáculo. Por ello, Cloud Temple ha desarrollado una gama de soluciones gestionadas y "as a Service" que le permiten aprovechar todo el potencial de los contenedores, mientras se libera de la complejidad de su gestión. Nuestras ofertas están diseñadas para permitirle centrarse en su núcleo de negocio: la innovación de aplicaciones, sobre una base soberana y confiable.

## Nuestro portafolio de soluciones: ¿qué ruta para su proyecto?

Esta tabla destaca las fortalezas y el posicionamiento de cada solución para una toma de decisiones rápida.

| Criterio                      | PaaS OpenShift                                                                                                                | Kubernetes Administrado                                                                                                   |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Posicionamiento clave**       | **La confianza sin compromisos**<br/>_Plataforma "as a Service", la vía más rápida para modernizar sobre una base certificada._ | **La flexibilidad open source**<br/>_Un Kubernetes puro, portátil y sin capas adicionales sobre una infraestructura soberana._ |
| **Nivel de servicio**        | as a Service                                                                                                                  | Administrado                                                                                                               |
| **Cumplimiento y seguridad**    | **100% SecNumCloud**                                                                                                          | Alojado en infraestructura SNC                                                                                       |
| **Público objetivo ideal**       | Equipos de desarrollo, DevOps                                                                                              | Equipos DevOps, Expertos en Kubernetes                                                                                   |
| **Punto de diferenciación** | Simplicidad y rapidez de despliegue                                                                                         | Open-source, portátil y sin capas adicionales                                                                              |

### Comparación de los componentes técnicos

Más allá del posicionamiento, cada producto se basa en elecciones tecnológicas distintas que responden a necesidades específicas. La siguiente tabla detalla los bloques de software fundamentales que componen cada solución.

| Componente Técnico             | PaaS OpenShift                     | Managed Kubernetes          | Managed Core Kubernetes     |
| :--------------------------- | :--------------------------------- | :-------------------------- | :-------------------------- |
| **Sistema Operativo Base**                 | Red Hat CoreOS (RHCOS)             | Talos OS (inmutable)         | Talos OS (inmutable)         |
| **Orquestador**            | Red Hat OpenShift                  | Kubernetes (CNCF)           | Kubernetes (CNCF)           |
| **Almacenamiento persistente**      | OpenShift Data Foundation          | Rook-Ceph                   | Rook-Ceph                   |
| **Red (CNI)**             | OVN-Kubernetes                     | Cilium                      | Cilium                      |
| **Ingress / Balanceo de carga** | HAProxy / MetalLB                  | NGINX Ingress / MetalLB     | n/a                         |
| **Seguridad (Motor de políticas)** | Security Context Constraints (SCC) | PSA + Kyverno + Capsule     | n/a                         |
| **Copia de seguridad**               | Veeam Kasten K10 (opcional)          | Veeam Kasten K10 (incluido)   | n/a                         |
| **Automatización (GitOps)**  | OpenShift Pipelines                | ArgoCD                      | n/a                         |
| **Observabilidad**            | Prometheus / Grafana               | Prometheus / Grafana / Loki | n/a                         |

---

## ¿Qué solución para su proyecto?

La elección de la plataforma de contenedores es una decisión estratégica. Aquí tiene algunas claves para orientarse hacia el producto más pertinente para su contexto.

* **Si el cumplimiento normativo es su prioridad absoluta...**
    ...y debe operar en un sector altamente regulado (público, salud, OIV) o certificar su propia solución, la **Oferta PaaS OpenShift** es la solución de referencia que le ofrece el más alto nivel de garantía del mercado.

* **Si prioriza el código abierto, la modernidad y la seguridad "zero-trust"...**
    y su cultura empresarial está fuertemente orientada hacia el código abierto, la independencia del proveedor y los enfoques de seguridad de nueva generación (sistemas inmutables, gestión mediante API), la **Oferta Kubernetes Administrado** es la más alineada con su visión.

Nuestro rol de asesoramiento es acompañarle en esta decisión. Nuestros arquitectos están a su disposición para analizar su contexto y definir con usted la mejor trayectoria.

---

## Explorar nuestras soluciones

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>PaaS OpenShift</h3>
      </div>
      <div className="card__body">
        <p>
          Descubra nuestra plataforma "como servicio" para modernizar sus aplicaciones sobre una base certificada SecNumCloud.
        </p>
      </div>
      <div className="card__footer">
        <a href="./paas_openshift" className="button button--primary button--block">Más información</a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>Managed (core) Kubernetes</h3>
      </div>
      <div className="card__body">
        <p>
          Explore nuestro producto Kubernetes puro, portátil y sin sobrecapa, alojado en una infraestructura soberana.
        </p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">Más información</a>
      </div>
    </div>
  </div>
</div>