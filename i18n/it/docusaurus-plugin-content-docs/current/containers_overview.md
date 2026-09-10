---
title: Panoramica delle offerte di containerizzazione
sidebar_position: 10 # Posizione subito prima di IaaS
---

# La containerizzazione, acceleratore della vostra trasformazione digitale

In un contesto di trasformazione digitale accelerata, la capacità di sviluppare, distribuire e scalare rapidamente le applicazioni è diventata un vantaggio competitivo decisivo. La containerizzazione, orchestrata da piattaforme come Kubernetes e OpenShift, risponde a questa esigenza offrendo agilità, portabilità ed efficienza operativa senza pari.

Tuttavia, la complessità intrinseca di queste tecnologie può rappresentare un ostacolo. È per questo che Cloud Temple ha sviluppato una gamma di soluzioni gestite e "as a Service" che vi permettono di sfruttare appieno la potenza dei container, liberandovi al contempo dalla complessità della loro gestione. Le nostre offerte sono progettate per consentirvi di concentrarvi sul vostro core business: l'innovazione applicativa, su un'infrastruttura sovrana e affidabile.

## Il nostro portafoglio di soluzioni: quale percorso per il vostro progetto ?

Questa tabella evidenzia i punti di forza e il posizionamento di ciascuna soluzione per una rapida presa di decisione.

| Criterio                      | PaaS OpenShift                                                                                                                | Managed Kubernetes                                                                                                   |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Posizionamento chiave**       | **Fiducia senza compromessi**<br/>_Piattaforma "as a Service", la via più rapida per modernizzare su una base certificata._ | **Flessibilità open source**<br/>_Un Kubernetes puro, portabile e senza sovrastrutture su un'infrastruttura sovrana._ |
| **Livello di servizio**        | as a Service                                                                                                                  | Gestito                                                                                                               |
| **Conformità e sicurezza**    | **100% SecNumCloud**                                                                                                          | Ospitato su infrastruttura SNC                                                                                       |
| **Pubblico ideale**       | Squadre di sviluppo, DevOps                                                                                              | Squadre DevOps, Esperti Kubernetes                                                                                   |
| **Punto di differenziazione** | Semplicità e rapidità di distribuzione                                                                                         | Open-source, portabile e senza sovrastrutture                                                                              |

### Confronto dei componenti tecnici

Oltre al posizionamento, ogni prodotto si basa su scelte tecnologiche distinte che rispondono a esigenze specifiche. La tabella seguente dettagli i componenti software fondamentali che compongono ciascuna soluzione.

| Componente Tecnico             | PaaS OpenShift                     | Managed Kubernetes          | Managed Core Kubernetes     |
| :--------------------------- | :--------------------------------- | :-------------------------- | :-------------------------- |
| **Sistema Operativo di Base**                 | Red Hat CoreOS (RHCOS)             | Talos OS (immutabile)         | Talos OS (immutabile)         |
| **Orchestratore**            | Red Hat OpenShift                  | Kubernetes (CNCF)           | Kubernetes (CNCF)           |
| **Archiviazione persistente**      | OpenShift Data Foundation          | Rook-Ceph                   | Rook-Ceph                   |
| **Rete (CNI)**             | OVN-Kubernetes                     | Cilium                      | Cilium                      |
| **Ingress / Load Balancing** | HAProxy / MetalLB                  | NGINX Ingress / MetalLB     | n/a                         |
| **Sicurezza (Policy Engine)** | Security Context Constraints (SCC) | PSA + Kyverno + Capsule     | n/a                         |
| **Backup**               | Veeam Kasten K10 (opzionale)          | Veeam Kasten K10 (incluso)   | n/a                         |
| **Automazione (GitOps)**  | OpenShift Pipelines                | ArgoCD                      | n/a                         |
| **Osservabilità**            | Prometheus / Grafana               | Prometheus / Grafana / Loki | n/a                         |

---

## Quale soluzione per il vostro progetto ?

La scelta della piattaforma di containerizzazione è una decisione strutturante. Ecco alcuni criteri per orientarvi verso il prodotto più adatto al vostro contesto.

* **Se la conformità normativa è la vostra priorità assoluta...**
    ...e che dobbiate operare in un settore altamente regolamentato (pubblico, sanità, OIV) o validare la vostra soluzione, l'**Offerta PaaS OpenShift** è la soluzione di riferimento che vi garantisce il più alto livello di garanzia sul mercato.

* **Se privilegiate l'open source, la modernità e la sicurezza "zero-trust"...**
    e che la vostra cultura aziendale sia fortemente orientata all'open source, all'assenza di dipendenza dal fornitore e agli approcci di sicurezza di nuova generazione (sistemi immutabili, gestione tramite API), l'**Offerta Managed Kubernetes** è la più in linea con la vostra visione.

Il nostro ruolo di consulenza è accompagnarvi in questa decisione. I nostri architetti sono a vostra disposizione per analizzare il vostro contesto e definire insieme a voi il percorso migliore.

---

## Esplorare le nostre soluzioni

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>PaaS OpenShift</h3>
      </div>
      <div className="card__body">
        <p>
          Scoprite la nostra piattaforma "as a Service" per modernizzare le vostre applicazioni su un'infrastruttura certificata SecNumCloud.
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
        <h3>Managed (core) Kubernetes</h3>
      </div>
      <div className="card__body">
        <p>
          Esplorate il nostro prodotto Kubernetes puro, portabile e senza sovrastrutture, ospitato su un'infrastruttura sovrana.
        </p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">Scopri di più</a>
      </div>
    </div>
  </div>
</div>