---
title: Panoramica delle offerte di containerizzazione
sidebar_position: 10 # Posizione immediatamente prima di IaaS
---

# Containerization, accelerator of your digital transformation

In the context of accelerated digital transformation, the ability to rapidly develop, deploy, and evolve applications has become a decisive competitive advantage. Containerization, orchestrated by platforms such as Kubernetes and OpenShift, addresses this challenge by delivering unmatched agility, portability, and operational efficiency.

However, the inherent complexity of these technologies can represent a barrier. That's why Cloud Temple has developed a range of managed, "as a Service" solutions that allow you to leverage the full power of containers while relieving you of the complexity of their management. Our offerings are designed to enable you to focus on your core business: application innovation, on a sovereign and trustworthy foundation.

## Il nostro portafoglio di soluzioni: quale percorso per il tuo progetto?

Questo tabella mette in evidenza i punti di forza e il posizionamento di ciascuna soluzione per una decisione rapida.

| Criterio                      | PaaS OpenShift                                                                                                                | Managed Kubernetes                                                                                                   |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Posizionamento chiave**     | **La fiducia senza compromessi**<br/>_Piattaforma "as a Service", il percorso più veloce per modernizzare su una base certificata._ | **La flessibilità open source**<br/>_Un Kubernetes puro, portabile e privo di sovrapposizioni su un'infrastruttura sovrana._ |
| **Livello di servizio**       | as a Service                                                                                                                  | Gestito                                                                                                              |
| **Conformità e sicurezza**    | **100% SecNumCloud**                                                                                                          | Ospitato su infrastruttura SNC                                                                                       |
| **Pubblico target ideale**    | Team di sviluppo, DevOps                                                                                                      | Team DevOps, Esperti Kubernetes                                                                                      |
| **Punto di differenziazione** | Semplificazione e velocità di implementazione                                                                                 | Open source, portabile e priva di sovrapposizioni                                                                    |

### Confronto dei componenti tecnologici

Oltre al posizionamento, ogni offerta si basa su scelte tecnologiche distinte che rispondono a esigenze specifiche. La tabella seguente dettaglia i componenti software fondamentali che compongono ciascuna soluzione.

| Componente Tecnologico       | PaaS OpenShift                     | Kubernetes Gestito          |
| :--------------------------- | :--------------------------------- | :-------------------------- |
| **Sistema Operativo di base** | Red Hat CoreOS (RHCOS)             | Talos OS (immutabile)       |
| **Orchestratore**            | Red Hat OpenShift                  | Kubernetes (CNCF)           |
| **Archiviazione persistente** | OpenShift Data Foundation          | Rook-Ceph                   |
| **Rete (CNI)**               | OVN-Kubernetes                     | Cilium                      |
| **Ingress / Bilanciamento del carico** | HAProxy / MetalLB                  | NGINX Ingress / MetalLB     |
| **Sicurezza (Motore delle policy)** | Security Context Constraints (SCC) | PSA + Kyverno + Capsule     |
| **Backup**                   | Veeam Kasten K10 (opzionale)       | Veeam Kasten K10 (incluso)  |
| **Automazione (GitOps)**     | OpenShift Pipelines                | ArgoCD                      |
| **Osservabilità**            | Prometheus / Grafana               | Prometheus / Grafana / Loki |

## Quale soluzione per il vostro progetto?

La scelta della piattaforma di containerizzazione è una decisione strategica. Ecco alcuni elementi chiave per orientarvi verso l'offerta più adatta al vostro contesto.

*   **Se la conformità normativa è la vostra priorità assoluta...**
    ...e dovete operare in un settore altamente regolamentato (pubblico, sanitario, OIV) o qualificare la vostra stessa soluzione, l'**Offerta PaaS OpenShift** è la soluzione di riferimento che vi garantisce il massimo livello di affidabilità sul mercato.

*   **Se privilegiate l'open source, la modernità e la sicurezza "zero-trust"...**
    ...e la vostra cultura aziendale è fortemente orientata verso l'open source, l'assenza di dipendenza da un fornitore e le metodologie di sicurezza di nuova generazione (sistemi immutabili, gestione tramite API), l'**Offerta Managed Kubernetes** è quella più allineata alla vostra visione.

Il nostro ruolo di consulenza è quello di accompagnarvi in questa scelta. I nostri architetti sono a vostra disposizione per analizzare il vostro contesto e definire con voi la traiettoria ottimale.

## Esplora le nostre soluzioni

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>PaaS OpenShift</h3>
      </div>
      <div className="card__body">
        <p>
          Scopri la nostra piattaforma "as a Service" per modernizzare le tue applicazioni su una base certificata SecNumCloud.
        </p>
      </div>
      <div className="card__footer">
        <a href="./paas_openshift" className="button button--primary button--block">Scopri di più</a>
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
          Esplora la nostra offerta Kubernetes pura, portabile e priva di sovrapposizioni, ospitata su un'infrastruttura sovrana.
        </p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">Scopri di più</a>
      </div>
    </div>
  </div>
</div>