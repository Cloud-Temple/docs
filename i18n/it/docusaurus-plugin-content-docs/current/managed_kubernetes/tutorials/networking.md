---
title: la rete in Kubernetes Managé
---
import cillium from '@site/docs/managed_kubernetes/tutorials/images/cillium.png'

---

## Obiettivi

Questo tutorial ha l'obiettivo di familiarizzarvi con i concetti fondamentali di rete dell'offerta **Managed Kubernetes**. Al termine di questa guida, sarete in grado di:

- Comprendere il piano di indirizzamento IP del vostro cluster (nodi, pod, servizi).
- Conoscere i diversi meccanismi per esporre le vostre applicazioni (Ingress, LoadBalancer).
- Visualizzare i flussi di rete e le politiche di sicurezza con Hubble.

Prenderemo come **esempio** un cluster **"ctodev"**, il cui range assegnato è **10.20.0.0/22**

> ⚠[definizione dei range]
> Questo range di IP privati X.Y.Z.0/22 (RFC 1918) è definito con il cliente durante la messa in servizio del cluster. Non può essere modificato in seguito.

## Piano di indirizzamento IP

Il vostro cluster Kubernetes Managé dispone di un VLAN multi-zonale con un range di indirizzi IPv4 in /22.

Il range del nostro **esempio** 10.20.0.0/22 è suddiviso in modo logico in sotto-range.

    - 10.20.0.0/24 è assegnato ai nodi del cluster:

    - 10.20.0.10 : ctodev-gitrunner (la macchina che pilota l'infrastruttura)

    - 10.20.0.20 : IP virtuale (load bilanciata) del servizio API Kubernetes
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

    - Pod: 10.241.0.0/16

    - Servizi: 10.95.0.0/12

> ⚠[Range Pod e Servizi]
> I range Pod e Servizi sono definiti con il cliente durante la messa in servizio del cluster. Non possono essere modificati in seguito.

## Utilizzo di MetalLB

MetalLB è il componente che consente di esporre servizi di livello 3 (non web / L7) direttamente su un indirizzo IP, sia interno che esterno, utilizzando il tipo di servizio `LoadBalancer`. È un'alternativa agli Ingress per le applicazioni non-HTTP o per casi d'uso specifici.

Per utilizzare MetalLB, è sufficiente creare un servizio di tipo `LoadBalancer`. MetalLB gli assegnerà automaticamente un indirizzo IP dalle plage preconfigurate. La distinzione tra le plage `interne` ed `esterna` è una misura di sicurezza per garantire che un'applicazione destinata a un uso interno non venga esposta su una rete pubblica per errore.

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

Dopo aver applicato questo manifest, al vostro servizio verrà assegnato un indirizzo IP nella plage `10.20.1.1 – 10.20.1.127` e sarà accessibile dalla vostra rete interna connessa al cluster.

**Esempio: Esporre un servizio sulla rete esterna**

Per richiedere un indirizzo IP dalla plage esterna (`10.20.1.128 – 10.20.1.254`), è necessario aggiungere il label `lb-type: external` al vostro servizio.

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

> **Importante** : Questa plage rimane **in uno spazio di indirizzamento privato**. Per un'**esposizione pubblica**, è necessario creare una **regola NAT (DNAT)** sul firewall della vostra infrastruttura per reindirizzare il traffico da uno dei vostri IP pubblici esterni all'indirizzo IP privato assegnato da MetalLB.

## IP Pubbliche

Il vostro cluster Kubernetes Managé è stato consegnato di default con 2 indirizzi IPv4 pubblici.

Il 1° IP è utilizzato sulla porta 6443 per l'API Kubernetes (nel nostro esempio ctodev.mk.ms-cloud-temple.com:6443)

Questo stesso IP è anche NATato sull'ingress controller *"nginx-external-secured"* per la porta 443. Ciò consente l'esposizione delle diverse console a vostra disposizione (vedere la guida quickstart). Gli accessi a questo IP pubblico sono **filtrati** con un elenco di IP autorizzati.

---

Il 2° IP pubblico è NATato sull'ingress controller *"nginx-external"*, sulle porte 80 e 443.

Le applicazioni esposte con l'ingress class *"nginx-external"* saranno quindi direttamente accessibili da Internet su questo IP.

*Se desiderate una modifica delle regole di firewall (aggiunta/rimozione di IP autorizzati), è necessario presentare una richiesta di supporto.*

*È possibile aggiungere altri IP pubblici se lo si desidera.*

## DNS

Per il DNS interno (CoreDNS), il cluster avrà i seguenti parametri:

- Nome del cluster : `<identifiant du cluster>`
- Dominio interno : `<identifiant du cluster>-cluster.local` (nel nostro esempio : ctodev-cluster.local)

Questo dominio interno è cruciale per la comunicazione inter-servizi all'interno del cluster. Consente a un'applicazione di contattare un'altra applicazione utilizzando semplicemente il suo nome di servizio Kubernetes, senza dover conoscere il suo indirizzo IP interno.

Ad esempio, un servizio denominato `api-backend` nel namespace `production` sarà automaticamente risolvibile all'indirizzo `api-backend.production.svc.ctodev-cluster.local`.

---

La zona DNS pubblica utilizzata per i cluster Kubernetes Managé è `.mk.ms-cloud-temple.com`

L'ingress *"nginx-external"* (mappato sull'IP pubblico n°2) è accessibile su `"*.external.<votre identifiant de cluster>.mk.ms-cloud-temple.com"`.
Se pubblicate un'applicazione con questo ingress-class, potrete accedervi direttamente tramite questo nome di dominio. Vedere il tutorial : [Deployer votre première application](./firstdeploy)

## Hubble : L'osservabilità di rete a portata di mano

Hubble è un'interfaccia grafica e da riga di comando per visualizzare e comprendere i flussi di rete del vostro cluster. Basato su Cilium, offre una mappatura dettagliata dei servizi, delle dipendenze e delle politiche di rete in tempo reale.

Con Hubble è possibile:

- **Visualizzare i flussi di traffico** tra i vostri pod e servizi.
- **Identificare i problemi di connettività** e gli errori di rete.
- **Verificare l'applicazione delle vostre politiche di sicurezza** (Network Policies).
- **Esplorare le dipendenze** tra le vostre diverse applicazioni.

### Accedere all'interfaccia Hubble

L'interfaccia grafica di Hubble è esposta su un URL interno del vostro cluster. L'accesso non è possibile tramite port-forwarding `kubectl` perché gli utenti non dispongono dei diritti sufficienti sul namespace `kube-system`.

Per accedervi, è necessario essere connessi alla rete interna del cluster (ad esempio, tramite un bastion o un VPN). L'URL da utilizzare è il seguente:

`http://hubble.internal.<votre-identifiant-de-cluster>.mk.ms-cloud-temple.com`

Perché questo URL sia risolvibile dal vostro postazione di lavoro, sarà probabilmente necessario aggiungere un'entry nel file `hosts` o nel vostro DNS interno. È possibile ottenere l'indirizzo IP interno dell'Ingress Hubble con il seguente comando:

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Creazione di zone DNS interne (cluster privato)

Per rafforzare la sicurezza e semplificare l'accesso ai vostri servizi e all'API Kubernetes dalla vostra rete interna, è raccomandato creare una zona DNS interna. Questa zona consentirà di risolvere i nomi di dominio dei vostri Ingress e dell'API Kubernetes verso i rispettivi indirizzi IP privati, evitando così di transitare attraverso reti pubbliche.

**Esempio di configurazione con il nostro cluster "ctodev", il cui range assegnato è** **10.20.0.0/22 :**

Basandovi sugli URL forniti nella guida di avvio, è possibile configurare il vostro DNS interno come segue:

1. **Create la zona DNS privata** sui vostri server DNS interni per `.<identifiant du cluster>.mk.ms-cloud-temple.com`
2. **Aggiungete i record di tipo A** seguenti:

   - **Per l'API Kubernetes :**

     - `. -> 10.20.0.20` (IP virtuale dell'API)
   - **Per i servizi interni (tramite l'Ingress `nginx-internal`) :**

     - `hubble.internal -> 10.20.1.1`
     - `argocd.internal -> 10.20.1.1`
     - `ceph.internal -> 10.20.1.1`
   - **Per i servizi sicuri (tramite l'Ingress `nginx-external-secure`) :**

     - `k10.external-secured -> 10.20.1.129`
     - `grafana.external-secured -> 10.20.1.129`
     - `harbor.external-secured -> 10.20.1.129`
     - `opencost.external-secured -> 10.20.1.129`
     - `opencost-mcp.external-secured -> 10.20.1.129`

Questa configurazione garantisce che il traffico verso l'API e i servizi interni rimanga confinato alla vostra rete privata, in conformità con le migliori pratiche di sicurezza.

<div class="card">
  <div class="card__header">
    <h3>Tutorial: Deployer votre première application</h3>
  </div>
  <div class="card__body">
    <p>Seguite la nostra guida dettagliata per imparare a esporre un'applicazione utilizzando un Ingress.</p>
  </div>
  <div class="card__footer">
    <a href="./firstdeploy" class="button button--primary button--block">Voir le tutoriel →</a>
  </div>
</div>
