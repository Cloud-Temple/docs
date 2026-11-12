---
title: Visión general de las ofertas de contenerización
sidebar_position: 10 # Position juste avant IaaS
---

# La contenerización, acelerador de su transformación digital

En un contexto de transformación digital acelerada, la capacidad de desarrollar, desplegar y escalar rápidamente las aplicaciones se ha convertido en una ventaja competitiva decisiva. La contenerización, orquestada por plataformas como Kubernetes y OpenShift, responde a este desafío ofreciendo una agilidad, portabilidad y eficiencia operativa sin precedentes.

Sin embargo, la complejidad inherente a estas tecnologías puede representar un obstáculo. Es por ello que Cloud Temple ha desarrollado una gama de soluciones gestionadas y "as a Service" que le permiten beneficiarse de todo el poder de los contenedores, al tiempo que le liberan de la complejidad de su gestión. Nuestras ofertas están diseñadas para permitirle centrarse en su núcleo de negocio: la innovación aplicativa, sobre una base soberana y de confianza.

## Nuestro portafolio de soluciones: ¿qué trayectoria para su proyecto?

Esta tabla destaca los puntos fuertes y el posicionamiento de cada solución para una toma de decisión rápida.

| Criterio                      | PaaS OpenShift                                                                                                                | Managed Kubernetes                                                                                                   |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Posicionamiento clave**    | **La confianza sin compromiso**<br/>_Plataforma "as a Service", la vía más rápida para modernizar sobre una base certificada._ | **La flexibilidad open source**<br/>_Un Kubernetes puro, portable y sin capa adicional sobre una infraestructura soberana._ |
| **Nivel de servicio**        | as a Service                                                                                                                  | Gestionado                                                                                                           |
| **Conformidad y seguridad**  | **100% SecNumCloud**                                                                                                          | Alojado en infraestructura SNC                                                                                       |
| **Público objetivo ideal**   | Equipos de desarrollo, DevOps                                                                                                 | Equipos DevOps, Expertos en Kubernetes                                                                               |
| **Punto de diferenciación**  | Simplicidad y rapidez de despliegue                                                                                           | Open source, portable y sin capa adicional                                                                           |

### Comparación de los componentes técnicos

Más allá del posicionamiento, cada producto se apoya en elecciones tecnológicas distintas que responden a necesidades específicas. La siguiente tabla detalla los bloques de software fundamentales que componen cada solución.

| Bloque Técnico               | PaaS OpenShift                     | Managed Kubernetes          | Managed Core Kubernetes     |
| :--------------------------- | :--------------------------------- | :-------------------------- | :-------------------------- |
| **Base OS**                  | Red Hat CoreOS (RHCOS)             | Talos OS (inmutable)        | Talos OS (inmutable)        |
| **Orquestador**              | Red Hat OpenShift                  | Kubernetes (CNCF)           | Kubernetes (CNCF)           |
| **Almacenamiento persistente** | OpenShift Data Foundation          | Rook-Ceph                   | Rook-Ceph                   |
| **Red (CNI)**                | OVN-Kubernetes                     | Cilium                      | Cilium                      |
| **Ingress / Load Balancing** | HAProxy / MetalLB                  | NGINX Ingress / MetalLB     | n/a                         |
| **Seguridad (Policy Engine)** | Security Context Constraints (SCC) | PSA + Kyverno + Capsule     | n/a                         |
| **Copia de seguridad**       | Veeam Kasten K10 (opción)          | Veeam Kasten K10 (incluido) | n/a                         |
| **Automatización (GitOps)**  | OpenShift Pipelines                | ArgoCD                      | n/a                         |
| **Observabilidad**           | Prometheus / Grafana               | Prometheus / Grafana / Loki | n/a                         |

---

## ¿Qué solución para su proyecto?

La elección de la plataforma de contenerización es una decisión estructurante. A continuación, algunas claves para orientarle hacia el producto más pertinente para su contexto.

* **Si la conformidad regulatoria es su prioridad absoluta...**
    ...y debe operar en un sector altamente regulado (público, salud, OIV) o calificar su propia solución, la **Oferta PaaS OpenShift** es la solución de referencia que le ofrece el más alto nivel de garantía del mercado.

* **Si prioriza el open source, la modernidad y la seguridad "zero-trust"...**
    y su cultura empresarial está fuertemente orientada hacia el open source, la ausencia de dependencia del editor y los enfoques de seguridad de nueva generación (sistemas inmutables, gestión por API), la **Oferta Managed Kubernetes** es la más alineada con su visión.

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
        <p>Descubra nuestra plataforma "as a Service" para modernizar sus aplicaciones sobre una base certificada SecNumCloud.</p>
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
        <p>Explore nuestro producto Kubernetes puro, portable y sin capa adicional, alojado en una infraestructura soberana.</p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">Más información</a>
      </div>
    </div>
  </div>
</div>
