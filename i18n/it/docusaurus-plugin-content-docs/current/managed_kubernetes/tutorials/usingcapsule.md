---
title: Gestire le autorizzazioni con Capsule
---

## Obiettivi

Questo tutorial vi guiderà nell'utilizzo di **Capsule**, lo strumento di multi-tenancy integrato nel vostro cluster **Managed Kubernetes**. Al termine di questa guida, saprete:

- Cos'è un **Tenant Capsule** e come organizza le vostre autorizzazioni.
- Come **creare e gestire i Namespaces** all'interno del vostro Tenant.
- Come le **policy di sicurezza e le quote** vengono applicate ai vostri progetti.

## Cos'è Capsule ?

Capsule è un controller Kubernetes che introduce il concetto di **Tenant** per raggruppare più Namespaces. Nel prodotto Managed Kubernetes di Cloud Temple, Capsule viene utilizzato per delegarvi la gestione dei vostri Namespaces in piena autonomia, senza bisogno dell'intervento di un amministratore del cluster.

Al momento della consegna del vostro cluster, i team di Cloud Temple hanno creato un primo Tenant per voi e vi hanno designato come **proprietario (Tenant Owner)**.

> ℹ️Per impostazione predefinita, il vostro primo Tenant si chiama `default` e l'account di servizio proprietario è `defaultapp`.

Per ulteriori informazioni sul progetto, potete consultare il [sito web ufficiale di Capsule](https://projectcapsule.dev/).

## Passo 1: Conoscere il nome del tuo Tenant

In qualità di `Tenant Owner`, non disponi delle autorizzazioni per elencare direttamente la risorsa `Tenant`. Il nome del tuo Tenant ti viene comunicato dai team Cloud Temple durante la consegna del servizio.

Se hai dimenticato il nome del tuo Tenant, puoi recuperarlo ispezionando i label dei Namespaces a cui hai accesso. Il seguente comando elenca tutti i namespace associati a un tenant Capsule e ne mostra i label:

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Cerca il label `capsule.clastix.io/tenant`. Il valore di questo label corrisponde al nome del tuo Tenant. Puoi quindi utilizzare questo nome per filtrare e visualizzare solo i Namespaces del tuo Tenant:

```bash
# Una volta che conosci il nome del tuo tenant, ad esempio "my-tenant"
kubectl get ns -l capsule.clastix.io/tenant=my-tenant
```

## Passo 2: Creare un nuovo Namespace

Il tuo principale vantaggio come `Tenant Owner` è la possibilità di creare i Namespace autonomamente. Puoi farlo direttamente con un singolo comando `kubectl`.

Esegui il seguente comando per creare un namespace denominato `mon-projet-dev` :

```bash
kubectl create namespace mon-projet-dev
```

Capsule intercetterà questa richiesta. Poiché sei proprietario di un Tenant, autorizzerà la creazione del Namespace e lo assocerà automaticamente al tuo Tenant.

## Passo 3: Verificare l'associazione del Namespace

Una volta creato il Namespace, puoi verificare che sia stato correttamente associato al tuo Tenant.

```bash
kubectl get ns mon-projet-dev --show-labels
```

Noterai che Capsule ha aggiunto un label al tuo Namespace, indicando a quale Tenant appartiene. È questo meccanismo che garantisce l'isolamento tra i diversi Tenant del cluster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Fase 4 : Comprendere l'ereditarietà delle politiche

Uno dei maggiori vantaggi di Capsule è che tutte le politiche di sicurezza, le quote di risorse (`ResourceQuota`) e i limiti di risorse (`LimitRange`) definiti a livello di Tenant dagli amministratori sono **automaticamente ereditati** da tutti i Namespaces che crei.

Ciò garantisce che i tuoi progetti rispettino i limiti di consumo (CPU, memoria, archiviazione) e le regole di sicurezza (come le policy di rete predefinite o i vincoli di sicurezza definiti da **Kyverno**) impostati per il tuo ambiente, senza che tu debba riconfigurarli per ogni Namespace.

> ℹ️ Sono stati impostati quote specifici sul tuo Tenant Capsule per limitare l'utilizzo dello storage persistente (Ceph-Block, Ceph-Block-norepl e Ceph-FileSystem) allo spazio totale disponibile nel cluster. Se hai bisogno di modificare queste quote per un progetto specifico, ti preghiamo di inviare una richiesta al supporto Cloud Temple.

## Conclusion

Grazie a Capsule, disponete di piena autonomia per gestire i Namespaces dei vostri team, beneficiando al contempo di un ambiente sicuro e preconfigurato dagli amministratori del cluster. Potete creare, modificare ed eliminare Namespaces a vostro piacimento, sapendo che i necessari controlli di sicurezza vengono applicati automaticamente.

Se avete bisogno di creare un nuovo Tenant per isolare un altro insieme di progetti o team, potete avanzare la richiesta al supporto Cloud Temple.