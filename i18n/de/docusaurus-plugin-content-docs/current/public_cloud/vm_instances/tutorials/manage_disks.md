---
title: VM-Festplatten verwalten
---

Dieses Tutorial erklärt, wie Sie einer bereits bereitgestellten VM eine zusätzliche Speicherfestplatte hinzufügen und diese vom Betriebssystem aus vorbereiten.

## Voraussetzungen

- Eine aktive VM Instance in Ihrem Tenant

## Schritt 1 — Auf die Festplatten der VM zugreifen

Klicken Sie in der VM Instances-Liste auf Ihre VM, um das Detailfenster zu öffnen.

![VM-Detail - Festplatten](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Navigieren Sie zum Tab **Festplatten**.

## Schritt 2 — Formular öffnen

Klicken Sie auf **+ Festplatte hinzufügen**.

![Festplatte hinzufügen - Modal](@site/docs/public_cloud/vm_instances/images/vm_instances_ajout_disque_modal.png)

| Feld | Beschreibung |
|------|-------------|
| **Name** | Festplattenkennung in der Console |
| **Speichertyp** | Standard (~1.500 IOPS/TB) oder Enterprise (~7.500 IOPS/TB) |

## Schritt 3 — Festplatte konfigurieren und hinzufügen

1. **Name**: z.B. `data-postgresql`
2. **Speichertyp**: Standard für allgemeine Daten, Enterprise für I/O-intensive Lasten

Klicken Sie auf **Hinzufügen**. Die Festplatte wird ohne Neustart angehängt.

## Schritt 4 — Festplatte partitionieren und einbinden (in der VM)

```bash
lsblk
sudo fdisk /dev/vdb
sudo mkfs.ext4 /dev/vdb1
sudo mkdir -p /data
sudo mount /dev/vdb1 /data
echo '/dev/vdb1 /data ext4 defaults 0 2' | sudo tee -a /etc/fstab
```

:::caution
Passen Sie den Gerätenamen (`/dev/vdb`, `/dev/vdc`, ...) entsprechend der Ausgabe von `lsblk` an.
:::
