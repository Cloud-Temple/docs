---
title: Creare e gestire gli snapshot
---

Gli snapshot consentono di acquisire lo stato di una VM in un dato momento. Sono utili prima di aggiornamenti importanti, migrazioni o operazioni rischiose.

## Prerequisiti

- Una VM Instance nel proprio tenant

## Passaggio 1 — Accedere agli snapshot

Fare clic sulla propria VM e navigare alla scheda **Snapshot**.

![Dettaglio VM - Snapshot](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

## Passaggio 2 — Creare uno snapshot

Fare clic su **+ Crea uno snapshot** e inserire un nome descrittivo, ad esempio:
- `prima-aggiornamento-nginx`
- `prod-2026-04-17-prima-migrazione`

Fare clic su **Crea**.

:::tip Buone pratiche di denominazione
- Includere la **data** nel nome
- Specificare il **motivo** dello snapshot
:::

## Passaggio 3 — Ripristinare da uno snapshot

Fare clic sul menu **Azioni** (⋮) accanto allo snapshot e selezionare **Ripristina**.

:::caution
Il ripristino **sovrascrive lo stato attuale** della VM. Tutte le modifiche apportate dopo lo snapshot verranno perse.
:::

## Passaggio 4 — Eliminare uno snapshot obsoleto

Fare clic sul menu **Azioni** (⋮) e selezionare **Elimina**.

## Differenza tra snapshot e backup

| | Snapshot | Backup |
|--|----------|--------|
| **Utilizzo** | Punto di ripristino rapido | Protezione dati a lungo termine |
| **Conservazione** | Manuale | Configurabile |
| **Costo** | Per GB utilizzato | Opzione a pagamento aggiuntiva |
