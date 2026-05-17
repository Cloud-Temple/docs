---
title: Panoramica delle offerte di containerizzazione
sidebar_position: 10 # Posizione immediatamente prima di IaaS
---

# La containerizzazione, acceleratore della vostra trasformazione digitale

In un contesto di trasformazione digitale accelerata, la capacità di sviluppare, distribuire ed evolvere rapidamente le applicazioni è diventata un vantaggio competitivo decisivo. La containerizzazione, orchestrata da piattaforme come Kubernetes e OpenShift, risponde a questa esigenza offrendo agilità, portabilità ed efficienza operativa senza pari.

Tuttavia, la complessità intrinseca di queste tecnologie può rappresentare un limite. È per questo che Cloud Temple ha sviluppato una gamma di soluzioni gestite e "as a Service" che vi permettono di sfruttare tutta la potenza dei container, liberandovi dalla complessità della loro gestione. Le nostre offerte sono progettate per consentirvi di concentrarvi sul vostro core business: l'innovazione applicativa, su una piattaforma sovrana e affidabile.

## Il nostro portafoglio di soluzioni: quale percorso per il vostro progetto?

Questa tabella evidenzia i punti di forza e il posizionamento di ciascuna soluzione per una decisione rapida.

| Criterio                      | PaaS OpenShift                                                                                                                | Kubernetes gestito                                                                                                   |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Posizionamento chiave**       | **Fiducia senza compromessi**<br/>_Piattaforma "as a Service", la via più rapida per modernizzare su una base certificata._ | **Flessibilità open source**<br/>_Un Kubernetes puro, portabile e senza strati aggiuntivi su un'infrastruttura sovrana._ |
| **Livello di servizio**        | as a Service                                                                                                                  | Gestito                                                                                                               |
| **Conformità e sicurezza**    | **100% SecNumCloud**                                                                                                          | Ospitato su infrastruttura SNC                                                                                       |
| **Target ideale**       | Team di sviluppo, DevOps                                                                                              | Team DevOps, Esperti Kubernetes                                                                                   |
| **Punto di differenziazione** | Semplicità e rapidità di deployment                                                                                         | Open-source, portabile e senza strati aggiuntivi                                                                              |

### Confronto dei componenti tecnici

Oltre al posizionamento, ogni prodotto si basa su scelte tecnologiche distinte che rispondono a esigenze specifiche. La tabella seguente dettaglia i blocchi software fondamentali che compongono ciascuna soluzione.

| Componente Tecnica             | PaaS OpenShift                     | Managed Kubernetes          |
| :--------------------------- | :--------------------------------- | :-------------------------- |
| **OS di Base**                 | Red Hat CoreOS (RHCOS)             | Talos OS (immutabile)         |
| **Orchestratore**            | Red Hat OpenShift                  | Kubernetes (CNCF)           |
| **Archiviazione persistente**      | OpenShift Data Foundation          | Rook-Ceph                   |
| **Rete (CNI)**             | OVN-Kubernetes                     | Cilium                      |
| **Ingress / Bilanciamento del carico** | HAProxy / MetalLB                  | NGINX Ingress / MetalLB     |
| **Sicurezza (Motore di Policy)** | Security Context Constraints (SCC) | PSA + Kyverno + Capsule     |
| **Backup**               | Veeam Kasten K10 (opzionale)          | Veeam Kasten K10 (incluso)   |
| **Automazione (GitOps)**  | OpenShift Pipelines                | ArgoCD                      |
| **Osservabilità**            | Prometheus / Grafana               | Prometheus / Grafana / Loki |

---

## Quale soluzione per il vostro progetto?

La scelta della piattaforma di containerizzazione è una decisione strutturante. Ecco alcuni punti di riferimento per orientarvi verso il prodotto più pertinente per il vostro contesto.

* **Se la conformità normativa è la vostra priorità assoluta...**
    ...e se dovete operare in un settore altamente regolamentato (pubblico, sanità, OIV) o qualificare la vostra soluzione, l'**Offerta PaaS OpenShift** è la soluzione di riferimento che vi garantisce il più alto livello di garanzia sul mercato.

* **Se privilegiate l'open source, la modernità e la sicurezza "zero-trust"...**
    e se la vostra cultura aziendale è fortemente orientata verso l'open source, l'assenza di dipendenza dall'editore e gli approcci di sicurezza di nuova generazione (sistemi immutabili, gestione tramite API), l'**Offerta Managed Kubernetes** è la più allineata con la vostra visione.

Il nostro ruolo di consulenza è accompagnarvi in questa decisione. I nostri architetti sono a vostra disposizione per analizzare il vostro contesto e definire insieme a voi il percorso migliore.

---

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
          Esplora il nostro prodotto Kubernetes puro, portatile e senza strati aggiuntivi, ospitato su un'infrastruttura sovrana.
        </p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">Scopri di più</a>
      </div>
    </div>
  </div>
</div>