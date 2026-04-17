---
title: Snapshots erstellen und verwalten
---

Snapshots ermöglichen es, den Zustand einer VM zu einem bestimmten Zeitpunkt zu erfassen. Sie sind nützlich vor größeren Updates, Migrationen oder riskanten Operationen.

## Voraussetzungen

- Eine VM Instance in Ihrem Tenant

## Schritt 1 — Auf Snapshots zugreifen

Klicken Sie auf Ihre VM und navigieren Sie zum Tab **Snapshots**.

![VM-Detail - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

## Schritt 2 — Snapshot erstellen

Klicken Sie auf **+ Snapshot erstellen** und geben Sie einen aussagekräftigen Namen ein, z.B.:
- `vor-nginx-update`
- `prod-2026-04-17-vor-migration`

Klicken Sie auf **Erstellen**.

:::tip Benennungsempfehlungen
- Datum im Namen angeben
- Grund des Snapshots angeben
:::

## Schritt 3 — Aus einem Snapshot wiederherstellen

Klicken Sie auf das **Aktionen**-Menü (⋮) neben dem Snapshot und wählen Sie **Wiederherstellen**.

:::caution
Die Wiederherstellung **überschreibt den aktuellen Zustand** der VM. Alle nach dem Snapshot vorgenommenen Änderungen gehen verloren.
:::

## Schritt 4 — Veralteten Snapshot löschen

Klicken Sie auf das **Aktionen**-Menü (⋮) und wählen Sie **Löschen**.

## Unterschied zwischen Snapshot und Sicherung

| | Snapshot | Sicherung |
|--|----------|-----------|
| **Verwendung** | Schneller Wiederherstellungspunkt | Langfristiger Datenschutz |
| **Aufbewahrung** | Manuell | Konfigurierbar |
| **Kosten** | Pro verwendetem GB | Kostenpflichtige Option |
