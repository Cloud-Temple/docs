---
title: Gestire i permessi con Capsule
---

## Obiettivi

Questo tutorial ti guiderà nell'utilizzo di **Capsule**, lo strumento di multi-tenancy integrato nel tuo cluster **Managed Kubernetes**. Alla fine di questa guida, saprai:

- Cos'è un **Tenant Capsule** e come organizza i tuoi permessi.
- Come **creare e gestire i Namespaces** all'interno del tuo Tenant.
- Come vengono applicate le **politiche di sicurezza e le quote** ai tuoi progetti.

## Cos'è Capsule?

Capsule è un controller Kubernetes che introduce il concetto di **Tenant** per raggruppare più Namespace. Nel prodotto Managed Kubernetes di Cloud Temple, Capsule viene utilizzato per delegare a voi la gestione dei vostri Namespace in piena autonomia, senza la necessità dell'intervento di un amministratore del cluster.

Alla consegna del vostro cluster, i team di Cloud Temple hanno creato un primo Tenant per voi e vi hanno designato come **proprietario (Tenant Owner)**.

:::tip
Per impostazione predefinita, il vostro primo Tenant si chiama `default` e l'account di servizio proprietario è `defaultapp`.
:::

Per saperne di più sul progetto, potete consultare il [sito web ufficiale di Capsule](https://projectcapsule.dev/).

## Fase 1: Conoscere il nome del proprio Tenant

In qualità di `Tenant Owner`, non disponi delle autorizzazioni per elencare direttamente la risorsa `Tenant`. Il nome del tuo Tenant ti viene fornito dai team Cloud Temple durante la consegna del servizio.

Se hai dimenticato il nome del tuo Tenant, puoi recuperarlo ispezionando le etichette dei Namespaces a cui hai accesso. Il comando seguente elenca tutti i namespace associati a un tenant Capsule e ne visualizza le etichette:

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Cerca l'etichetta `capsule.clastix.io/tenant`. Il valore di questa etichetta corrisponde al nome del tuo Tenant. Puoi quindi utilizzare questo nome per filtrare e visualizzare solo i Namespaces del tuo Tenant :

```bash
# Una volta noto il nome del tuo tenant, ad esempio "my-tenant"
kubectl get ns -l capsule.clastix.io/tenant=my-tenant
```

## Passo 2 : Creare un nuovo Namespace

Il tuo vantaggio principale in qualità de `Tenant Owner` è poter creare autonomamente i Namespace. Puoi farlo direttamente con un singolo comando `kubectl`.

Esegui il comando seguente per creare un namespace denominato `mon-projet-dev` :

```bash
kubectl create namespace mon-projet-dev
```

Capsule intercetterà questa richiesta. Poiché sei il proprietario di un Tenant, autorizzerà la creazione del Namespace e lo associerà automaticamente al tuo Tenant.

## Passo 3: Verificare l'associazione del Namespace

Una volta creato il Namespace, puoi verificare che sia stato correttamente associato al tuo Tenant.

```bash
kubectl get ns mon-projet-dev --show-labels
```

Noterai che Capsule ha aggiunto una label al tuo Namespace, indicando a quale Tenant appartiene. È questo meccanismo a garantire l'isolamento tra i diversi Tenant del cluster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Passo 4: Comprendere l'ereditarietà delle politiche

Uno dei maggiori vantaggi di Capsule è che tutte le politiche di sicurezza, le quote di risorse (`ResourceQuota`) e gli intervalli di risorse (`LimitRange`) definiti a livello di Tenant dagli amministratori vengono **ereditati automaticamente** da tutti i Namespace che crei.

Ciò garantisce che i tuoi progetti rispettino i limiti di consumo (CPU, mémoire, stockage) e le regole di sicurezza (come le politiche di rete predefinite o i vincoli di sicurezza definiti da **Kyverno**) impostati per il tuo ambiente, senza che tu debba riconfigurarli per ogni Namespace.

:::info
Sono state impostate quote specifiche sul tuo Tenant Capsule per limitare l'utilizzo dell'archiviazione persistente (Ceph-Block et Ceph-FileSystem) allo spazio totale disponibile nel cluster. Se hai bisogno di modificare queste quote per un progetto specifico, invia una richiesta al supporto Cloud Temple.
:::

## Conclusione

Grazie a Capsule, disponi di piena autonomia per gestire i Namespace dei tuoi team, beneficiando al contempo di un framework sicuro e preconfigurato dagli amministratori del cluster. Puoi creare, modificare ed eliminare Namespace a piacimento, sapendo che i necessari controlli vengono applicati automaticamente.

Se hai bisogno di creare un nuovo Tenant per isolare un altro insieme di progetti o team, puoi inoltrare la richiesta al supporto Cloud Temple.