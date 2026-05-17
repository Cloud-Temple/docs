---
title: la rete in Kubernetes gestito
---

import cillium from '@site/docs/managed_kubernetes/tutorials/images/cillium.png'

---

## Obiettivi

Questo tutorial ha l'obiettivo di familiarizzarvi con i concetti di rete fondamentali dell'offerta **Managed Kubernetes**. Alla fine di questa guida, sarete in grado di:

- Comprendere il piano di indirizzamento IP del vostro cluster (nœuds, pods, services).
- Conoscere i diversi meccanismi per esporre le vostre applicazioni (Ingress, LoadBalancer).
- Visualizzare i flussi di rete e le policy di sicurezza con Hubble.

Prenderemo come **esempio** un cluster **"ctodev"**, il cui intervallo assegnato è **10.20.0.0/22**

:::warning[définition des ranges
]
 Questo intervallo di IP private X.Y.Z.0/22 (RFC 1918) viene definito con il cliente durante la configurazione del cluster. Non può essere modificato successivamente.
:::

## Piano di indirizzamento IP

Il cluster Kubernetes gestito dispone di un VLAN multi-zonale con un intervallo di indirizzi IPv4 in /22.

L'intervallo del nostro **esempio** 10.20.0.0/22 è suddiviso logicamente in sotto-intervalli.

    - 10.20.0.0/24 è assegnato ai Nodi del cluster:

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

      - 10.20.1.1 : ingress `nginx-internal`
    
    - MetalLB esterno : 10.20.1.128 – 10.20.1.254

      - 10.20.1.128 : ingress `nginx-external`
      - 10.20.1.129 : ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16 

    - Services: 10.95.0.0/12 

:::warning[Ranges Pods et Services
]
Gli intervalli Pods e Services sono definiti con il cliente durante la configurazione del cluster. Non possono essere modificati successivamente.
:::

## Utilizzo di MetalLB

MetalLB è il componente che consente di esporre servizi di livello 3 (non web / L7) direttamente su un indirizzo IP, interno o esterno, utilizzando il tipo di servizio `LoadBalancer`. Rappresenta un'alternativa agli Ingress per applicazioni non HTTP o per casi d'uso specifici.

Per utilizzare MetalLB, è sufficiente creare un servizio di tipo `LoadBalancer`. MetalLB gli assegnerà automaticamente un indirizzo IP dagli intervalli preconfigurati. La distinzione tra gli intervalli `interni` ed `esterni` è una misura di sicurezza per garantire che un'applicazione destinata all'uso interno non venga esposta per errore su una rete pubblica.

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

Dopo aver applicato questo manifesto, al tuo servizio verrà assegnato un indirizzo IP nell'intervallo `10.20.1.1 – 10.20.1.127` e sarà accessibile dalla tua rete interna connessa al cluster.

**Esempio: Esporre un servizio sulla rete esterna**

Per richiedere un indirizzo IP dall'intervallo esterno (`10.20.1.128 – 10.20.1.254`), è necessario aggiungere l'etichetta `lb-type: external` al tuo servizio.

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

> **Importante**: Questo intervallo rimane **in uno spazio di indirizzamento privato**. Per un'**esposizione pubblica**, è necessario creare una **regola NAT (DNAT)** sul firewall della tua infrastruttura per reindirizzare il traffico da uno dei tuoi IP pubblici esterni verso l'indirizzo IP privato assegnato da MetalLB.

## IP Pubbliche

Il cluster Kubernetes gestito è stato fornito con 2 indirizzi IPv4 pubblici.

La 1ª IP è utilizzata sulla porta 6443 per l'API Kubernetes (nel nostro esempio ctodev.mk.ms-cloud-temple.com:6443)

Questa stessa IP è inoltre sottoposta a NAT sul controller ingress *"nginx-external-secured"* per la porta 443. Ciò consente l'esposizione delle diverse console messe a disposizione (vedere la guida quickstart). L'accesso a questa IP pubblica è **filtrato** tramite un elenco di IP autorizzati.

---
La 2ª IP pubblica è sottoposta a NAT sul controller ingress *"nginx-external"*, sulle porte 80 e 443.

Le applicazioni esposte con la classe ingress *"nginx-external"* saranno quindi direttamente accessibili da Internet su questo IP.

*Se desideri modificare le regole del firewall (aggiunta/rimozione di IP autorizzati), devi presentare una richiesta di supporto.*

*È possibile aggiungere altre IP pubbliche se lo desideri.*

## DNS

Per il DNS interno (CoreDNS), il cluster avrà questi parametri:

- Nome del cluster : `<identifiant du cluster>`
- Dominio interno : `<identifiant du cluster>-cluster.local` (dans notre exemple : ctodev-cluster.local)

Questo dominio interno è cruciale per la comunicazione inter-service all'interno del cluster. Consente a un'applicazione di contattare un'altra applicazione utilizzando semplicemente il nome del servizio Kubernetes, senza doverne conoscere l'indirizzo IP interno.

Ad esempio, un servizio denominato `api-backend` nel namespace `production` sarà automaticamente risolvibile all'indirizzo `api-backend.production.svc.ctodev-cluster.local`.

---

La zona DNS pubblica utilizzata per i cluster Kubernetes gestiti è `.mk.ms-cloud-temple.com`

L'ingress *"nginx-external"* (mappé sur l'IP publique n°2) è accessibile su `"*.external.<votre identifiant de cluster>.mk.ms-cloud-temple.com"`.
Se si pubblica un'applicazione con questa ingress-class, sarà possibile accedervi direttamente tramite questo nome di dominio. Vedi la guida : [Deploy della tua prima applicazione](./firstdeploy)

## Hubble: l'osservabilità di rete a portata di mano

Hubble è un'interfaccia grafica e da riga di comando per visualizzare e comprendere i flussi di rete del tuo cluster. Basato su Cilium, ti offre una mappatura dettagliata di servizi, dipendenze e politiche di rete in tempo reale.

Con Hubble, puoi:

- **Visualizzare i flussi di traffico** tra i tuoi pod e servizi.
- **Identificare i problemi di connettività** e gli errori di rete.
- **Verificare l'applicazione delle tue politiche di sicurezza** (Network Policies).
- **Esplorare le dipendenze** tra le tue diverse applicazioni.

### Accedere all'interfaccia Hubble

L'interfaccia grafica di Hubble è esposta su un URL interno del tuo cluster. L'accesso non è possibile tramite un port-forwarding `kubectl` poiché gli utenti non dispongono dei privilegi sufficienti sul namespace `kube-system`.

Per accedervi, è necessario essere connessi alla rete interna del cluster (ad esempio, tramite un bastion o un VPN). L'URL da utilizzare è la seguente :

`http://hubble.internal.<votre-identifiant-de-cluster>.mk.ms-cloud-temple.com`

Affinché questo URL sia risolubile dalla tua postazione di lavoro, probabilmente dovrai aggiungere una voce nel tuo file `hosts` o nel tuo DNS interno. Puoi ottenere l'indirizzo IP interno dell'Ingress Hubble con il comando seguente :

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Creazione di zone DNS interne (cluster privato)

Per rafforzare la sicurezza e semplificare l'accesso ai tuoi servizi e all'API Kubernetes dalla tua rete interna, si consiglia di creare una zona DNS interna. Questa zona consentirà di risolvere i nomi di dominio dei tuoi Ingress e dell'API Kubernetes verso i rispettivi indirizzi IP privati, evitando così il transito attraverso reti pubbliche.

**Esempio di configurazione con il nostro cluster "ctodev", il cui range assegnato è** **10.20.0.0/22 :**

Basandosi sugli URL forniti nella guida di avvio, è possibile configurare il proprio DNS interno come segue :

1. **Crea la zona DNS privata** sui tuoi server DNS interni per `.<identificativo del cluster>.mk.ms-cloud-temple.com`

2. **Aggiungi i seguenti record di tipo A** :

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

Questa configurazione garantisce che il traffico verso l'API e i servizi interni rimanga confinato alla tua rete privata, in conformità con le migliori pratiche di sicurezza.

<div class="card">
  <div class="card__header">
    <h3>Tutorial : Distribuire la tua prima applicazione</h3>
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

:::warning[Per approfondire: la sicurezza in produzione
]
Questo documento spiega i concetti di rete fondamentali. Per una distribuzione in produzione, è fondamentale applicare ulteriori misure di sicurezza :

- **Utilizza immagini sicure** : Privilegia immagini provenienti dal tuo registro aziendale sicuro come **Harbor** piuttosto che immagini pubbliche.
- **Controlla i flussi di rete** : Implementa `NetworkPolicies` per limitare le comunicazioni ai soli flussi necessari tra le tue applicazioni.
- **Applica politiche di governance** : Utilizza strumenti come **Kyverno** per imporre regole di sicurezza (es: vietare i container "root", richiedere `requests` e `limits` di risorse, ecc.).
:::