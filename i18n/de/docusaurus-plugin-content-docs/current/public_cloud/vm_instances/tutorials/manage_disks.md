---
title: Festplatten einer VM verwalten
---

Dieses Tutorial erläutert, wie Sie einer bereits bereitgestellten VM eine zusätzliche Festplatte hinzufügen und diese im Betriebssystem vorbereiten.

## Voraussetzungen

- Eine aktive VM-Instanz in Ihrem Tenant

## Schritt 1 — Auf die Festplatten der VM zugreifen

Klicken Sie in der Liste der VM-Instanzen auf die Zeile Ihrer VM, um die Detailansicht zu öffnen.

![Détail VM - Disques](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Navigieren Sie zum Tab **Festplatten** (Festplattensymbol in der linken Seitenleiste der Detailansicht). Sie sehen die Liste der aktuell an die VM angehängten Festplatten, wobei für jede Festplatte der Name, die Größe und der Speichertyp angezeigt werden.

## Schritt 2 — Formular zum Hinzufügen öffnen

Klicken Sie oben rechts in der Disk-Tabelle auf die Schaltfläche **+ Disk hinzufügen**.

![Modal ajout de disque](@site/docs/public_cloud/vm_instances/images/vm_instances_ajout_disque_modal.png)

Das Formular **Disk hinzufügen** wird mit den folgenden Feldern geöffnet:

| Feld | Beschreibung |
|-------|-------------|
| **Name** | Bezeichner der Disk in der Konsole |
| **Speichertyp** | Standard (~1 500 IOPS/To) oder Enterprise (~7 500 IOPS/To) |

## Schritt 3 — Datenträger konfigurieren und hinzufügen

Geben Sie die Parameter ein:

1. **Name** : geben Sie einen beschreibenden Namen ein, z. B. `data-postgresql`
2. **Speichertyp** :
   - Wählen Sie **Standard** für allgemeine Daten (Logs, Dateien, Backups)
   - Wählen Sie **Enterprise** für Datenbanken oder I/O-intensive Workloads

Klicken Sie auf **Hinzufügen**. Der Datenträger wird der VM in Echtzeit angehängt, ohne dass ein Neustart erforderlich ist.

## Schritt 4 — Festplatte partitionieren und mounten (in der VM)

Nach dem Hinzufügen über die Konsole verbinden Sie sich mit Ihrer VM und initialisieren die Festplatte:

```bash
# Lister les disques disponibles
lsblk

# Créer une partition (remplacez /dev/vdb par le bon device)
sudo fdisk /dev/vdb
# Dans fdisk, tapez : n → p → 1 → Entrée → Entrée → w

# Formater la partition
sudo mkfs.ext4 /dev/vdb1

# Créer le point de montage
sudo mkdir -p /data

# Monter le disque
sudo mount /dev/vdb1 /data

# Vérifier le montage
df -h /data

# Rendre le montage persistant au redémarrage
echo '/dev/vdb1 /data ext4 defaults 0 2' | sudo tee -a /etc/fstab
```

:::caution
Passen Sie den Gerätenamen (`/dev/vdb`, `/dev/vdc`, usw.) entsprechend dem Ergebnis des Befehls `lsblk` an. Die erste zusätzliche Festplatte ist in der Regel `/dev/vdb`.
:::

## Weiterführende Informationen

- Für einen High-Performance-Datenträger verwenden Sie den Typ **Enterprise** (~7.500 IOPS/TB) — ideal für PostgreSQL, MySQL oder jeden I/O-lastigen Workload.
- Sie können bis zu **16 Volumes** pro VM anhängen, mit einer maximalen Größe von **2 TB** pro Volume.
- Die Abrechnung erfolgt nach **alloziertem GB**, unabhängig von der tatsächlichen Nutzung.