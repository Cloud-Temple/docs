---
title: Visión general de las ofertas de contenedores
sidebar_position: 10 # Posición justo antes de IaaS
---

# La contenedorización, acelerador de su transformación digital

En un contexto de transformación digital acelerada, la capacidad de desarrollar, desplegar y evolucionar rápidamente las aplicaciones se ha convertido en una ventaja competitiva decisiva. La contenedorización, orquestada por plataformas como Kubernetes y OpenShift, responde a este desafío ofreciendo una agilidad, una portabilidad y una eficiencia operativa inigualables.

Sin embargo, la complejidad inherente a estas tecnologías puede representar un obstáculo. Por ello, Cloud Temple ha desarrollado una gama de soluciones gestionadas y "as a Service" que le permiten aprovechar toda la potencia de los contenedores, al tiempo que le liberan de la complejidad de su gestión. Nuestras ofertas están diseñadas para permitirle centrarse en el núcleo de su negocio: la innovación en aplicaciones, sobre una plataforma soberana y de confianza.

## Nuestro portafolio de soluciones: ¿qué trayectoria seguir para su proyecto?

Este cuadro destaca los puntos fuertes y el posicionamiento de cada solución para una toma de decisiones rápida.

| Criterio                      | PaaS OpenShift                                                                                                                | Kubernetes gestionado                                                                                                   |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Posicionamiento clave**       | **Confianza sin compromisos**<br/>_Plataforma "as a Service", la vía más rápida para modernizar sobre una base certificada._ | **La flexibilidad de código abierto**<br/>_Un Kubernetes puro, portátil y sin capas adicionales sobre una infraestructura soberana._ |
| **Nivel de servicio**        | as a Service                                                                                                                  | Gestionado                                                                                                               |
| **Conformidad y seguridad**    | **100% SecNumCloud**                                                                                                          | Alojado en infraestructura SNC                                                                                       |
| **Público objetivo ideal**       | Equipos de desarrollo, DevOps                                                                                              | Equipos DevOps, Expertos en Kubernetes                                                                                   |
| **Punto de diferenciación** | Simplicidad y rapidez de despliegue                                                                                         | Open-source, portátil y sin capas adicionales                                                                              |

### Comparación de los componentes técnicos

Más allá del posicionamiento, cada producto se basa en elecciones tecnológicas distintas que responden a necesidades específicas. La siguiente tabla detalla los componentes de software fundamentales que componen cada solución.

| Componente Técnico             | PaaS OpenShift                     | Kubernetes Gestionado          |
| :--------------------------- | :--------------------------------- | :-------------------------- |
| **Sistema Operativo Base**                 | Red Hat CoreOS (RHCOS)             | Talos OS (inmutable)         |
| **Orquestador**            | Red Hat OpenShift                  | Kubernetes (CNCF)           |
| **Almacenamiento persistente**      | OpenShift Data Foundation          | Rook-Ceph                   |
| **Red (CNI)**             | OVN-Kubernetes                     | Cilium                      |
| **Ingress / Balanceo de Carga** | HAProxy / MetalLB                  | NGINX Ingress / MetalLB     |
| **Seguridad (Motor de Políticas)** | Security Context Constraints (SCC) | PSA + Kyverno + Capsule     |
| **Copia de Seguridad**               | Veeam Kasten K10 (opcional)          | Veeam Kasten K10 (incluido)   |
| **Automatización (GitOps)**  | OpenShift Pipelines                | ArgoCD                      |
| **Observabilidad**            | Prometheus / Grafana               | Prometheus / Grafana / Loki |

---

## ¿Qué solución para su proyecto?

La elección de la plataforma de contenedorización es una decisión estructurante. A continuación, algunas claves para orientarse hacia el producto más pertinente para su contexto.

* **Si el cumplimiento normativo es su prioridad absoluta...**
    ...y debe operar en un sector altamente regulado (público, salud, OIV) o validar su propia solución, la **Oferta PaaS OpenShift** es la solución de referencia que le ofrece el más alto nivel de garantía del mercado.

* **Si prioriza el open source, la modernidad y la seguridad "zero-trust"...**
    y su cultura empresarial está fuertemente orientada hacia el open source, la ausencia de dependencia del proveedor y los enfoques de seguridad de nueva generación (sistemas inmutables, gestión por API), la **Oferta Managed Kubernetes** es la más alineada con su visión.

Nuestro rol de consultoría es acompañarle en esta decisión. Nuestros arquitectos están a su disposición para analizar su contexto y definir con usted la mejor trayectoria.

---

## Explore nuestras soluciones

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>PaaS OpenShift</h3>
      </div>
      <div className="card__body">
        <p>
          Descubra nuestra plataforma "as a Service" para modernizar sus aplicaciones sobre una base certificada SecNumCloud.
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
        <h3>Managed Kubernetes</h3>
      </div>
      <div className="card__body">
        <p>
          Explore nuestro producto Kubernetes puro, portátil y sin sobrecarga, alojado en una infraestructura soberana.
        </p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">Más información</a>
      </div>
    </div>
  </div>
</div>