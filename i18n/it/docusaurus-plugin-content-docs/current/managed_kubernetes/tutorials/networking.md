---
title: la rete in Kubernetes Gestito
---
import cillium from '@site/docs/managed_kubernetes/tutorials/images/cillium.png'

---

## Obiettivi

Questo tutorial ha lo scopo di familiarizzarvi con i concetti di rete fondamentali dell'offerta **Managed Kubernetes**. Al termine di questa guida, sarete in grado di:

- Comprendere lo schema di indirizzamento IP del vostro cluster (nodi, pod, servizi).
- Conoscere i diversi meccanismi per esporre le vostre applicazioni (Ingress, LoadBalancer).
- Visualizzare i flussi di rete e le politiche di sicurezza con Hubble.

Prenderemo come **esempio** un cluster **"ctodev"**, il cui range assegnato è **10.20.0.0/22**

> ⚠[définition des ranges]
> Questo range di IP private X.Y.Z.0/22 (RFC 1918) viene definito con il cliente durante la configurazione del cluster. Non può essere modificato in seguito.

## Piano di indirizzamento IP

Il tuo cluster Kubernetes gestito dispone di un VLAN multi-zona con un range di indirizzi IPv4 in /22.

Il range del nostro **esempio** 10.20.0.0/22 è suddiviso logicamente in sotto-range.

    - 10.20.0.0/24 è assegnato ai nodi del cluster:

    - 10.20.0.10 : ctodev-gitrunner (la machine qui pilote l'infrastructure)

    - 10.20.0.20 : IP virtuale (load balancée) del servizio API Kubernetes
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

    - 10.20.1.1 : ingress`nginx-internal`

    - MetalLB esterno : 10.20.1.128 – 10.20.1.254

    - 10.20.1.128 : ingress`nginx-external`
      - 10.20.1.129 : ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16

    - Servizi: 10.95.0.0/12

> ⚠[Ranges Pods et Services]
> I range Pods e Servizi sono definiti con il cliente durante la configurazione del cluster. Non possono essere modificati in seguito.

## Utilizzo di MetalLB

MetalLB è il componente che consente di esporre servizi di livello 3 (non web / L7) direttamente su un indirizzo IP, sia interno che esterno, utilizzando il tipo di servizio `LoadBalancer`. È un'alternativa agli Ingress per le applicazioni non-HTTP o per casi d'uso specifici.

Per utilizzare MetalLB, è sufficiente creare un servizio di tipo `LoadBalancer`. MetalLB gli assegnerà automaticamente un indirizzo IP dagli intervalli preconfigurati. La distinzione tra gli intervalli `interni` ed `esterni` è una misura di sicurezza per garantire che un'applicazione destinata a un uso interno non venga esposta su una rete pubblica per errore.

**Esempio: esporre un servizio sulla rete interna**

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

Dopo aver applicato questo manifesto, al servizio verrà assegnato un indirizzo IP nell'intervallo `10.20.1.1 – 10.20.1.127` e sarà accessibile dalla rete interna connessa al cluster.

**Esempio: esporre un servizio sulla rete esterna**

Per richiedere un indirizzo IP dall'intervallo esterno (`10.20.1.128 – 10.20.1.254`), è necessario aggiungere l'etichetta `lb-type: external` al servizio.

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

> **Importante**: questo intervallo rimane **in uno spazio di indirizzamento privato**. Per un'**esposizione pubblica**, è necessario creare una **regola NAT (DNAT)** sul firewall della propria infrastruttura per reindirizzare il traffico da uno dei propri indirizzi IP pubblici esterni all'indirizzo IP privato assegnato da MetalLB.

## IP Pubbliche

Il vostro cluster Kubernetes gestito è stato fornito inizialmente con 2 indirizzi IPv4 pubblici.

Il primo indirizzo IP è utilizzato sulla porta 6443 per l'API Kubernetes (nel nostro esempio ctodev.mk.ms-cloud-temple.com:6443)

Lo stesso indirizzo IP è inoltre indirizzato tramite NAT sull'ingress controller *"nginx-external-secured"* per la porta 443. Ciò consente l'esposizione delle diverse console a vostra disposizione (vedere la guida quickstart). L'accesso a questo indirizzo IP pubblico è **filtrato** tramite una lista di IP autorizzati.

---

Il secondo indirizzo IP pubblico è indirizzato tramite NAT sull'ingress controller *"nginx-external"*, sulle porte 80 e 443.

Le applicazioni esposte con l'ingress class *"nginx-external"* saranno quindi direttamente accessibili da Internet tramite questo indirizzo IP.

*Se desiderate modificare le regole del firewall (aggiunta/rimozione di IP autorizzati), dovete presentare una richiesta di supporto.*

*È possibile aggiungere altri indirizzi IP pubblici se lo desiderate.*

## DNS

Per il DNS interno (CoreDNS), il cluster avrà questi parametri:

- Nome del cluster : `<identifiant du cluster>`
- Dominio interno : `<identifiant du cluster>-cluster.local` (nel nostro esempio: ctodev-cluster.local)

Questo dominio interno è cruciale per la comunicazione tra servizi all'interno del cluster. Consente a un'applicazione di contattare un'altra applicazione utilizzando semplicemente il suo nome di servizio Kubernetes, senza dover conoscere il suo indirizzo IP interno.

Ad esempio, un servizio denominato `api-backend` nel namespace `production` sarà automaticamente risolvibile all'indirizzo `api-backend.production.svc.ctodev-cluster.local`.

---

La zona DNS pubblica utilizzata per i cluster Kubernetes Managed è `.mk.ms-cloud-temple.com`

L'ingress *"nginx-external"* (mappato sull'IP pubblico n. 2) è accessibile su `"*.external.<votre identifiant de cluster>.mk.ms-cloud-temple.com"`.
Se pubblichi un'applicazione con questa ingress-class, potrai accedervi direttamente tramite questo nome di dominio. Vedi il tutorial: [Déployer votre première application](./firstdeploy)

## Hubble: l'osservabilità di rete a portata di mano

Hubble è un'interfaccia grafica e a riga di comando per visualizzare e comprendere i flussi di rete del vostro cluster. Basato su Cilium, vi offre una mappatura dettagliata dei servizi, delle dipendenze e delle politiche di rete in tempo reale.

Con Hubble, potete:

- **Visualizzare i flussi di traffico** tra i vostri pod e servizi.
- **Identificare i problemi di connettività** e gli errori di rete.
- **Verificare l'applicazione delle vostre politiche di sicurezza** (Network Policies).
- **Esplorare le dipendenze** tra le vostre diverse applicazioni.

### Accedere all'interfaccia Hubble

L'interfaccia grafica di Hubble è esposta su un URL interno del cluster. L'accesso non è possibile tramite un port-forwarding `kubectl` poiché gli utenti non dispongono dei privilegi sufficienti sul namespace `kube-system`.

Per accedervi, è necessario essere connessi alla rete interna del cluster (ad esempio, tramite un server di salto o una VPN). L'URL da utilizzare è il seguente:

`http://hubble.internal.<votre-identifiant-de-cluster>.mk.ms-cloud-temple.com`

Affinché questo URL sia risolvibile dalla tua postazione di lavoro, dovrai probabilmente aggiungere una voce nel file `hosts` o nel DNS interno. È possibile ottenere l'indirizzo IP interno dell'Ingress Hubble con il seguente comando:

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Creazione di zone DNS interne (cluster privé)

Per rafforzare la sicurezza e semplificare l'accesso ai vostri servizi e all'API Kubernetes dalla vostra rete interna, si consiglia di creare una zona DNS interna. Questa zona consentirà di risolvere i nomi di dominio dei vostri Ingress e dell'API Kubernetes verso i rispettivi indirizzi IP privati, evitando così di transitare attraverso reti pubbliche.

**Esempio di configurazione con il nostro cluster "ctodev", il cui range assegnato è** **10.20.0.0/22 :**

Basandovi sugli URL forniti nella guida di avvio, potete configurare il vostro DNS interno come segue :

1. **Create la zona DNS privata** sui vostri server DNS interni per `.<identifiant du cluster>.mk.ms-cloud-temple.com`
2. **Aggiungete i record di tipo A** seguenti :

   - **Per l'API Kubernetes :**

     - `. -> 10.20.0.20` (IP virtuelle de l'API)
   - **Per i servizi interni (via l'Ingress `nginx-internal`) :**

     - `hubble.internal -> 10.20.1.1`
     - `argocd.internal -> 10.20.1.1`
     - `ceph.internal -> 10.20.1.1`
   - **Per i servizi sicuri (via l'Ingress `nginx-external-secure`) :**

     - `k10.external-secured -> 10.20.1.129`
     - `grafana.external-secured -> 10.20.1.129`
     - `harbor.external-secured -> 10.20.1.129`
     - `opencost.external-secured -> 10.20.1.129`
     - `opencost-mcp.external-secured -> 10.20.1.129`

Questa configurazione garantisce che il traffico verso l'API e i servizi interni rimanga confinato alla vostra rete privata, in conformità con le migliori pratiche di sicurezza.

<div class="card">
  <div class="card__header">
    <h3>Tutorial : Distribuire la vostra prima applicazione</h3>
  </div>
  <div class="card__body">
    <p>
      Seguite la nostra guida dettagliata per imparare a esporre un'applicazione utilizzando un Ingress.
    </p>
  </div>
  <div class="card__footer">
    <a href="./firstdeploy" class="button button--primary button--block">Vedi il tutorial →</a>
  </div>
</div>