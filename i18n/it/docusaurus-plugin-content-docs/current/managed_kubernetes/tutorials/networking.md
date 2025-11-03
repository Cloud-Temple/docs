---
title: Il networking in Kubernetes Gestito
---

import cillium from './images/cillium.png'

---

## Obiettivi

Questo tutorial ha lo scopo di familiarizzare con i concetti fondamentali di rete offerti dal servizio **Managed Kubernetes**. Al termine di questa guida sarai in grado di:

- Comprendere il piano di indirizzamento IP del tuo cluster (nodi, pod, servizi).
- Conoscere i diversi meccanismi per esporre le tue applicazioni (Ingress, LoadBalancer).
- Visualizzare i flussi di rete e le politiche di sicurezza tramite Hubble.

Utilizzeremo come **esempio** un cluster **"ctodev"**, il cui range assegnato è **10.20.0.0/22**.

*Nota: Questo range di indirizzi IP privati X.Y.Z.0/22 (RFC 1918) viene definito con il cliente durante la configurazione del cluster. Non può essere modificato in un secondo momento.*

## Piano di indirizzamento IP

Il tuo cluster Kubernetes gestito dispone di un VLAN multi-zona con un range di indirizzi IPv4 in /22.

L'intervallo del nostro **esempio** 10.20.0.0/22 è suddiviso logicamente in sottoregni.

    - 10.20.0.0/24 è assegnato ai nodi del cluster:

        - 10.20.0.10 : ctodev-gitrunner (la macchina che gestisce l'infrastruttura)

        - 10.20.0.20 : indirizzo virtuale (load balancer) del servizio API Kubernetes
        - 10.20.0.21 : ctodev-cp-01 (control plane 01)
        - 10.20.0.22 : ctodev-cp-02 (control plane 02)
        - 10.20.0.23 : ctodev-cp-03 (control plane 03)

        - 10.20.0.41 : ctodev-ceph-01 (Storage Ceph 01)
        - 10.20.0.42 : ctodev-ceph-02 (Storage Ceph 02)
        - 10.20.0.43 : ctodev-ceph-03 (Storage Ceph 03)

        - 10.20.0.51 : ctodev-wrk-01 (Worker 01)
        - 10.20.0.52 : ctodev-wrk-02 (Worker 02)
        - 10.20.0.53 : ctodev-wrk-03 (Worker 03)
        - ...
        - 10.20.0.151 : ctodev-wrk-100 (Worker 100)

    - MetalLB interno: 10.20.1.1 – 10.20.1.127

      - 10.20.1.1 : ingress `nginx-internal`
    
    - MetalLB esterno: 10.20.1.128 – 10.20.1.254

      - 10.20.1.128 : ingress `nginx-external`
      - 10.20.1.129 : ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16 

    - Servizi: 10.95.0.0/12 

*Nota: I range per Pods e Servizi vengono definiti con il cliente al momento della creazione del cluster. Non possono essere modificati in seguito.*

## Utilizzo di MetalLB

MetalLB è il componente che permette di esporre servizi a livello 3 (non web / L7) direttamente su un indirizzo IP, sia interno che esterno, utilizzando il tipo di servizio `LoadBalancer`. È un'alternativa agli Ingress per applicazioni non HTTP o per casi d'uso specifici.

Per utilizzare MetalLB, è sufficiente creare un servizio del tipo `LoadBalancer`. MetalLB assegnerà automaticamente un indirizzo IP proveniente dalle fasce preconfigurate. La distinzione tra le fasce `interna` ed `esterna` è una misura di sicurezza per garantire che un'applicazione destinata a un uso interno non venga esposta accidentalmente su una rete pubblica.

**Esempio: Esposizione di un servizio sulla rete interna**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mon-service-interne
  namespace: mon-namespace
spec:
  selector:
    app: mon-app
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 80
  type: LoadBalancer
```

Dopo aver applicato questo manifesto, il servizio riceverà un indirizzo IP nella fascia `10.20.1.1 – 10.20.1.127` e sarà accessibile dal tuo network interno collegato al cluster.

**Esempio: Esposizione di un servizio sulla rete esterna**

Per richiedere un indirizzo IP dalla fascia esterna (`10.20.1.128 – 10.20.1.254`), è necessario aggiungere il label `lb-type: external` al tuo servizio.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mon-service-externe
  namespace: mon-namespace
  labels:
    lb-type: external
spec:
  selector:
    app: mon-app
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 80
  type: LoadBalancer
```

> **Importante**: Questa fascia rimane **all'interno di uno spazio di indirizzamento privato**. Per un'esposizione pubblica, è necessario creare una **regola NAT (DNAT)** sul firewall della tua infrastruttura per reindirizzare il traffico da una delle tue IP pubbliche esterne all'indirizzo IP privato assegnato da MetalLB.

## Indirizzi IP Pubblici

Il tuo cluster Kubernetes Gestito è stato consegnato con due indirizzi IPv4 pubblici.

La prima IP viene utilizzata sulla porta 6443 per l'API Kubernetes (nel nostro esempio: ctodev.mk.ms-cloud-temple.com:6443).

Questa stessa IP viene inoltre mappata (NAT) sull'ingress controller *"nginx-external-secured"* sulla porta 443. Ciò permette l'esposizione delle diverse console messe a tua disposizione (vedi la guida quickstart). L'accesso a questa IP pubblica è **filtrato** tramite un elenco di IP autorizzati.

---
La seconda IP pubblica viene mappata (NAT) sull'ingress controller *"nginx-external"* sulle porte 80 e 443.

Le applicazioni esposte tramite la classe di ingress *"nginx-external"* saranno quindi direttamente accessibili da Internet tramite questa IP.

*Se desideri modificare le regole del firewall (aggiunta/rimozione di IP autorizzati), devi inviare una richiesta di supporto.*

*È possibile aggiungere ulteriori indirizzi IP pubblici se lo desideri.*

## DNS

Per il DNS interno (CoreDNS), il cluster avrà questi parametri:

- Nome del cluster: ` <identificativo del cluster>`
- Dominio interno: `<identificativo del cluster>-cluster.local` (nel nostro esempio: ctodev-cluster.local)

Questo dominio interno è fondamentale per la comunicazione tra servizi all'interno del cluster. Permette a un'applicazione di contattare un'altra applicazione utilizzando semplicemente il nome del servizio Kubernetes, senza dover conoscere l'indirizzo IP interno.

Ad esempio, un servizio denominato `api-backend` nel namespace `production` sarà automaticamente risolvibile all'indirizzo `api-backend.production.svc.ctodev-cluster.local`.

---

La zona DNS pubblica utilizzata per i cluster Kubernetes gestiti è `.mk.ms-cloud-temple.com`.

L'ingress *"nginx-external"* (mappato sull'IP pubblico n. 2) è accessibile tramite `"*.external.<il vostro identificativo del cluster>.mk.ms-cloud-temple.com"`.  
Se pubblicate un'applicazione con questa ingress-class, potrete accedervi direttamente tramite questo nome di dominio. Vedi il tutorial: [Distribuire la vostra prima applicazione](./firstdeploy)

## Hubble: Network observability within reach

Hubble is a graphical and command-line interface to visualize and understand network traffic flows in your cluster. Built on Cilium, it provides real-time, detailed mapping of services, dependencies, and network policies.

With Hubble, you can:
- **Visualize traffic flows** between your pods and services.
- **Identify connectivity issues** and network errors.
- **Verify the enforcement of your security policies** (Network Policies).
- **Explore dependencies** between your various applications.

### Accedere all'interfaccia Hubble

L'interfaccia grafica di Hubble è esposta tramite un URL interno del tuo cluster. L'accesso non è possibile tramite `kubectl port-forward` poiché gli utenti non dispongono dei permessi sufficienti sul namespace `kube-system`.

Per accedervi, devi essere connesso alla rete interna del cluster (ad esempio, tramite un bastion o un VPN). L'URL da utilizzare è il seguente:

`http://hubble.internal.<tuo-identificativo-di-cluster>.mk.ms-cloud-temple.com`

Per rendere risolvibile questa URL dal tuo computer, probabilmente dovrai aggiungere una voce nel file `hosts` o nel tuo DNS interno. Puoi ottenere l'indirizzo IP interno dell'Ingress Hubble con il seguente comando:

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Creazione di zone DNS interne (cluster privato)

Per rafforzare la sicurezza e semplificare l'accesso ai tuoi servizi e all'API Kubernetes dal tuo rete interna, si raccomanda di creare una zona DNS interna. Questa zona consentirà di risolvere i nomi di dominio dei tuoi Ingress e dell'API Kubernetes alle rispettive indirizzi IP privati, evitando così il transito attraverso reti pubbliche.

**Esempio di configurazione con il tuo cluster "ctodev", il cui range assegnato è** **10.20.0.0/22 :**

Basandoti sulle URL fornite nella guida di avvio, puoi configurare il tuo DNS interno come segue:

1.  **Crea la zona DNS privata** sui tuoi server DNS interni per `.<identificativo del cluster>.mk.ms-cloud-temple.com`

2.  **Aggiungi i seguenti record di tipo A**:

    -   **Per l'API Kubernetes:**
        -   `. -> 10.20.0.20` (IP virtuale dell'API)

    -   **Per i servizi interni (attraverso l'Ingress `nginx-internal`):**
        -   `hubble.internal -> 10.20.1.1`
        -   `argocd.internal -> 10.20.1.1`
        -   `ceph.internal -> 10.20.1.1`

    -   **Per i servizi protetti (attraverso l'Ingress `nginx-external-secure`):**
        -   `k10.external-secured -> 10.20.1.129`
        -   `grafana.external-secured -> 10.20.1.129`
        -   `harbor.external-secured -> 10.20.1.129`
        -   `kubecost.external-secured -> 10.20.1.129`

Questa configurazione garantisce che il traffico verso l'API e i servizi interni rimanga confinato alla tua rete privata, in linea con le migliori pratiche di sicurezza.

<div class="card">
  <div class="card__header">
    <h3>Tutorial: Distribuire la tua prima applicazione</h3>
  </div>
  <div class="card__body">
    <p>
      Segui la nostra guida dettagliata per imparare a esporre un'applicazione utilizzando un Ingress.
    </p>
  </div>
  <div class="card__footer">
    <a href="./firstdeploy" class="button button--primary button--block">Visualizza il tutorial &rarr;</a>
  </div>
</div>

:::warning Per approfondire: sicurezza in produzione
Questo documento spiega i concetti fondamentali di rete. Per un deployment in produzione, è fondamentale applicare misure di sicurezza aggiuntive:

-   **Utilizza immagini sicure**: privilegia immagini provenienti dal tuo registro aziendale sicuro come **Harbor**, piuttosto che immagini pubbliche.
-   **Controlla i flussi di rete**: implementa `NetworkPolicies` per controllare le comunicazioni ai soli flussi necessari tra le tue applicazioni.
-   **Applica politiche di governance**: utilizza strumenti come **Kyverno** per imporre regole di sicurezza (es. vietare i container "root", richiedere `requests` e `limits` per le risorse, ecc.).
:::