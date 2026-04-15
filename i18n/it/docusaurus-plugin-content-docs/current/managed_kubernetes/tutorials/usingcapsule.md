---
title: Gestire le autorizzazioni con Capsule
---

## Obiettivi

Questo tutorial vi guiderà nell'utilizzo di **Capsule**, lo strumento di multi-tenancy integrato nel vostro cluster **Managed Kubernetes**. Al termine di questa guida, saprete:

- Cos'è un **Tenant Capsule** e come organizza le vostre autorizzazioni.
- Come **creare e gestire i Namespace** all'interno del vostro Tenant.
- Come vengono applicate le **politiche di sicurezza e le quote** ai vostri progetti.

## Cos'è Capsule?

Capsule è un controller Kubernetes che introduce il concetto di **Tenant** per raggruppare più Namespace. Nell'offerta Managed Kubernetes di Cloud Temple, Capsule viene utilizzato per delegarvi la gestione autonoma dei vostri Namespace, senza necessità dell'intervento di un amministratore del cluster.

Alla consegna del vostro cluster, i team di Cloud Temple hanno creato un primo Tenant per voi e vi hanno designato come suo **proprietario (Tenant Owner)**.

:::tip
Per impostazione predefinita, il vostro primo Tenant si chiama `default` e l'account di servizio proprietario è `defaultapp`.
:::

Per saperne di più sul progetto, potete consultare il [sito web ufficiale di Capsule](https://projectcapsule.dev/).

## Passo 1: Conoscere il nome del proprio Tenant

Come `Tenant Owner`, non avete i permessi per elencare direttamente la risorsa `Tenant`. Il nome del vostro Tenant vi viene comunicato dai team di Cloud Temple al momento della consegna del servizio.

Se avete dimenticato il nome del vostro Tenant, potete trovarlo ispezionando le etichette dei Namespace a cui avete accesso. Il seguente comando elenca tutti i namespace collegati a un tenant Capsule e ne visualizza le etichette:

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Cercate l'etichetta `capsule.clastix.io/tenant`. Il valore di questa etichetta è il nome del vostro Tenant. Potete quindi usare questo nome per filtrare e vedere solo i Namespace del vostro Tenant:

```bash
# Una volta che conoscete il nome del vostro tenant, ad esempio "my-tenant"
kubectl get ns -l capsule.clastix.io/tenant=my-tenant
```

## Passo 2: Creare un nuovo Namespace

Il vostro principale vantaggio come `Tenant Owner` è poter creare Namespace da soli. Potete farlo direttamente con un singolo comando `kubectl`.

Eseguite il seguente comando per creare un namespace chiamato `mon-projet-dev`:

```bash
kubectl create namespace mon-projet-dev
```

Capsule intercetterà questa richiesta. Poiché siete proprietari di un Tenant, autorizzerà la creazione del Namespace e lo associerà automaticamente al vostro Tenant.

## Passo 3: Verificare l'associazione del Namespace

Una volta creato il Namespace, potete verificare che sia stato correttamente collegato al vostro Tenant.

```bash
kubectl get ns mon-projet-dev --show-labels
```

Noterete che Capsule ha aggiunto un'etichetta al vostro Namespace, indicando a quale Tenant appartiene. Questo è il meccanismo che garantisce l'isolamento tra i diversi Tenant del cluster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Passo 4: Comprendere l'ereditarietà delle politiche

Uno dei maggiori vantaggi di Capsule è che tutte le politiche di sicurezza, le quote di risorse (`ResourceQuota`) e gli intervalli di risorse (`LimitRange`) definiti a livello di Tenant dagli amministratori vengono **automaticamente ereditati** da tutti i Namespace che create.

Questo garantisce che i vostri progetti rispettino i limiti di consumo (CPU, memoria, storage) e le regole di sicurezza (come le politiche di rete predefinite o i vincoli di sicurezza definiti da **Kyverno**) stabiliti per il vostro ambiente, senza che dobbiate riconfigurarli per ogni Namespace.

:::info
Quote specifiche sono state impostate sul vostro Tenant Capsule per limitare l'utilizzo dello storage persistente (Ceph-Block e Ceph-FileSystem) allo spazio totale disponibile nel cluster. Se avete bisogno di modificare queste quote per un progetto specifico, vi preghiamo di formulare una richiesta al supporto di Cloud Temple.
:::

## Conclusione

Grazie a Capsule, disponete di completa autonomia per gestire i Namespace dei vostri team, beneficiando al contempo di un framework sicuro e preconfigurato dagli amministratori del cluster. Potete creare, modificare ed eliminare Namespace a piacimento, sapendo che i necessari controlli vengono applicati automaticamente.

Se avete bisogno di creare un nuovo Tenant per isolare un altro insieme di progetti o team, potete farne richiesta al supporto di Cloud Temple.
