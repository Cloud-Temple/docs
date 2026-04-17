---
title: La rete in Kubernetes Managed
---

import cillium from '@site/docs/managed_kubernetes/tutorials/images/cillium.png'

---

## Obiettivi

Questo tutorial ha lo scopo di familiarizzarvi con i concetti di rete fondamentali dell'offerta **Managed Kubernetes**. Al termine di questa guida, sarete in grado di:

- Comprendere il piano di indirizzamento IP del vostro cluster (nodi, pod, servizi).
- Conoscere i diversi meccanismi per esporre le vostre applicazioni (Ingress, LoadBalancer).
- Visualizzare i flussi di rete e le politiche di sicurezza con Hubble.

Utilizzeremo come **esempio** un cluster **"ctodev"**, con il range assegnato **10.20.0.0/22**

:::warning[Definizione dei range]
 Questo range di IP private X.Y.Z.0/22 (RFC 1918) viene definito con il cliente durante la configurazione del cluster. Non può essere modificato successivamente.
:::

## Piano di indirizzamento IP

Il vostro cluster Kubernetes Managed dispone di una VLAN multi-zona con un range di indirizzi IPv4 in /22.

Il range del nostro **esempio** 10.20.0.0/22 è suddiviso logicamente in sotto-range.

    - 10.20.0.0/24 è assegnato ai Nodi del cluster:

        - 10.20.0.10 : ctodev-gitrunner (la macchina che gestisce l'infrastruttura)

        - 10.20.0.20 : IP virtuale (con load balancing) del servizio API Kubernetes
        - 10.20.0.21 : ctodev-cp-01 (control plane 01)
        - 10.20.0.22 : ctodev-cp-02 (control plane 02)
        - 10.20.0.23 : ctodev-cp-03 (control plane 03)

        - 10.20.0.41 : ctodev-ceph-01 (Ceph Storage 01)
        - 10.20.0.42 : ctodev-ceph-02 (Ceph Storage 02)
        - 10.20.0.43 : ctodev-ceph-03 (Ceph Storage 03)

        - 10.20.0.51 : ctodev-wrk-01 (Worker 01)
        - 10.20.0.52 : ctodev-wrk-02 (Worker 02)
        - 10.20.0.53 : ctodev-wrk-03 (Worker 03)
        - ...
        - 10.20.0.151 : ctodev-wrk-100 (Worker 100)

    - MetalLB interno : 10.20.1.1 – 10.20.1.127

      - 10.20.1.1 : ingress `nginx-internal`
    
    - MetalLB esterno : 10.20.1.128 – 10.20.1.254

      - 10.20.1.128 : ingress `nginx-external`
      - 10.20.1.129 : ingress `nginx-external-secure`

    - Pod: 10.241.0.0/16 

    - Servizi: 10.95.0.0/12 

:::warning[Range Pods e Services]
I range Pods e Services vengono definiti con il cliente durante la configurazione del cluster. Non possono essere modificati successivamente.
:::

## Utilizzo di MetalLB

MetalLB è il componente che consente di esporre servizi di layer 3 (non web / L7) direttamente su un indirizzo IP, sia interno che esterno, utilizzando il tipo di servizio `LoadBalancer`. È un'alternativa agli Ingress per applicazioni non HTTP o per casi d'uso specifici.

Per utilizzare MetalLB, è sufficiente creare un servizio di tipo `LoadBalancer`. MetalLB gli assegnerà automaticamente un indirizzo IP dai range preconfigurati. La distinzione tra i range `interno` ed `esterno` è una misura di sicurezza per garantire che un'applicazione destinata a uso interno non venga esposta accidentalmente su una rete pubblica.

**Esempio: Esporre un servizio sulla rete interna**

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

Dopo aver applicato questo manifest, al vostro servizio verrà assegnato un indirizzo IP nel range `10.20.1.1 – 10.20.1.127` e sarà accessibile dalla vostra rete interna connessa al cluster.

**Esempio: Esporre un servizio sulla rete esterna**

Per richiedere un indirizzo IP dal range esterno (`10.20.1.128 – 10.20.1.254`), dovete aggiungere l'etichetta `lb-type: external` al vostro servizio.

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

> **Importante**: Questo range rimane **in uno spazio di indirizzamento privato**. Per un'**esposizione pubblica**, è necessario creare una **regola NAT (DNAT)** sul firewall della vostra infrastruttura per reindirizzare il traffico da uno dei vostri IP pubblici esterni all'indirizzo IP privato assegnato da MetalLB.

## IP Pubblici

Il vostro cluster Kubernetes Managed è stato consegnato con 2 indirizzi IPv4 pubblici.

Il 1° IP viene utilizzato sulla porta 6443 per l'API Kubernetes (nel nostro esempio ctodev.mk.ms-cloud-temple.com:6443)

Questo stesso IP è anche NATato sull'ingress controller *"nginx-external-secured"* per la porta 443. Ciò consente l'esposizione delle varie console messe a vostra disposizione (vedere la guida introduttiva). L'accesso a questo IP pubblico è **filtrato** con un elenco di IP autorizzati.

---
Il 2° IP pubblico è NATato sull'ingress controller *"nginx-external"*, sulle porte 80 e 443.

Le applicazioni esposte con la ingress class *"nginx-external"* saranno quindi direttamente accessibili da Internet su questo IP.

*Se desiderate una modifica delle regole del firewall (aggiunta/rimozione di IP autorizzati), dovete fare una richiesta di supporto.*

*È possibile aggiungere altri IP pubblici se lo si desidera.*

## DNS

Per il DNS interno (CoreDNS), il cluster avrà questi parametri:

- Nome del cluster: `<identificatore del cluster>`
- Dominio interno: `<identificatore del cluster>-cluster.local` (nel nostro esempio: ctodev-cluster.local)

Questo dominio interno è fondamentale per la comunicazione inter-servizio all'interno del cluster. Permette a un'applicazione di contattare un'altra applicazione semplicemente usando il nome del servizio Kubernetes, senza dover conoscere il suo indirizzo IP interno.

Ad esempio, un servizio chiamato `api-backend` nel namespace `production` sarà automaticamente risolvibile all'indirizzo `api-backend.production.svc.ctodev-cluster.local`.

---

La zona DNS pubblica utilizzata per i cluster Kubernetes Managed è `.mk.ms-cloud-temple.com`

L'ingress *"nginx-external"* (mappato sull'IP pubblico n°2) è accessibile su `"*.external.<vostro identificatore di cluster>.mk.ms-cloud-temple.com"`.
Se pubblicate un'applicazione con questa ingress-class, potrete accedervi direttamente tramite questo nome di dominio. Vedere il tutorial: [Distribuire la prima applicazione](./firstdeploy)

## Hubble: L'osservabilità di rete a portata di mano

Hubble è un'interfaccia grafica e a riga di comando per visualizzare e comprendere i flussi di rete del vostro cluster. Basato su Cilium, offre una mappa dettagliata dei servizi, delle dipendenze e delle politiche di rete in tempo reale.

Con Hubble, potete:

- **Visualizzare i flussi di traffico** tra i vostri pod e servizi.
- **Identificare problemi di connettività** ed errori di rete.
- **Verificare l'applicazione delle vostre politiche di sicurezza** (Network Policies).
- **Esplorare le dipendenze** tra le vostre diverse applicazioni.

### Accedere all'interfaccia Hubble

L'interfaccia grafica di Hubble è esposta su un URL interno del vostro cluster. L'accesso non è possibile tramite port-forwarding `kubectl` poiché gli utenti non dispongono di diritti sufficienti sul namespace `kube-system`.

Per accedervi, dovete essere connessi alla rete interna del cluster (ad esempio, tramite un bastion o una VPN). L'URL da utilizzare è il seguente:

`http://hubble.internal.<vostro-identificatore-di-cluster>.mk.ms-cloud-temple.com`

Affinché questo URL sia risolvibile dalla vostra workstation, probabilmente dovrete aggiungere una voce nel file `hosts` o nel vostro DNS interno. Potete ottenere l'indirizzo IP interno dell'Ingress Hubble con il seguente comando:

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Creazione di zone DNS interne (cluster privato)

Per rafforzare la sicurezza e semplificare l'accesso ai vostri servizi e all'API Kubernetes dalla vostra rete interna, si raccomanda di creare una zona DNS interna. Questa zona consentirà di risolvere i nomi di dominio dei vostri Ingress e dell'API Kubernetes verso i rispettivi indirizzi IP privati, evitando così il transito attraverso reti pubbliche.

**Esempio di configurazione con il nostro cluster "ctodev", con il range assegnato** **10.20.0.0/22:**

Basandosi sugli URL forniti nella guida introduttiva, potete configurare il vostro DNS interno come segue:

1. **Create la zona DNS privata** sui vostri server DNS interni per `.<identificatore del cluster>.mk.ms-cloud-temple.com`

2. **Aggiungete i seguenti record di tipo A**:

    - **Per l'API Kubernetes:**
        - `. -> 10.20.0.20` (IP virtuale dell'API)

    - **Per i servizi interni (tramite l'Ingress `nginx-internal`):**
        - `hubble.internal -> 10.20.1.1`
        - `argocd.internal -> 10.20.1.1`
        - `ceph.internal -> 10.20.1.1`

    - **Per i servizi sicuri (tramite l'Ingress `nginx-external-secure`):**
        - `k10.external-secured -> 10.20.1.129`
        - `grafana.external-secured -> 10.20.1.129`
        - `harbor.external-secured -> 10.20.1.129`
        - `opencost.external-secured -> 10.20.1.129`
        - `opencost-mcp.external-secured -> 10.20.1.129`

Questa configurazione garantisce che il traffico verso l'API e i servizi interni rimanga confinato nella vostra rete privata, conformemente alle best practice di sicurezza.

<div class="card">
  <div class="card__header">
    <h3>Tutorial: Distribuire la prima applicazione</h3>
  </div>
  <div class="card__body">
    <p>
      Seguite la nostra guida dettagliata per imparare a esporre un'applicazione utilizzando un Ingress.
    </p>
  </div>
  <div class="card__footer">
    <a href="./firstdeploy" class="button button--primary button--block">Vedere il tutorial &rarr;</a>
  </div>
</div>

:::warning[Andare oltre: sicurezza in produzione]
Questo documento spiega i concetti di rete fondamentali. Per un deployment in produzione, è fondamentale applicare misure di sicurezza aggiuntive:

- **Utilizzate immagini sicure**: Preferite immagini provenienti dal vostro registro aziendale sicuro come **Harbor** piuttosto che immagini pubbliche.
- **Controllate i flussi di rete**: Implementate `NetworkPolicies` per controllare le comunicazioni ai soli flussi necessari tra le vostre applicazioni.
- **Applicate politiche di governance**: Utilizzate strumenti come **Kyverno** per imporre regole di sicurezza (es. vietare i container "root", richiedere `requests` e `limits` per le risorse, ecc.).
:::
