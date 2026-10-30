---
title: Erste VM-Instanz erstellen
---

Dieses Tutorial führt Sie Schritt für Schritt durch die Erstellung einer Debian-13-VM mit einer zusätzlichen Datendisk, einer Cloud-Init-Konfiguration und einer Verbindung zum privaten Backbone-Netzwerk.

## Ziel

Eine Linux-VM (Debian 13) in der Zone `fr1-az01` erstellen, vorkonfiguriert mit einem SSH-Schlüssel und einer zusätzlichen Disk mit 50 GB.

## Voraussetzungen

- Ein aktiver Cloud Temple-Tenant mit Zugriff auf den Dienst VM Instances
- Ein verfügbarer öffentlicher SSH-Schlüssel
- Ein konfiguriertes privates Backbone-Netzwerk oder VPC in Ihrem Tenant

## Schritt 1 — Auf die Konsole zugreifen und den Wizard öffnen

Navigieren Sie in der Cloud Temple-Konsole zu **VM Instances**.

![Liste der VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

Klicken Sie auf **+ Neue virtuelle Maschine**, um den Erstellungs-Wizard zu starten.

## Schritt 2 — Instanzfamilie auswählen

![Schritt 1: Instanzfamilie](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Wählen Sie für dieses Beispiel **Development** — ideal für Entwicklungs- und Testumgebungen mit kontrollierten Kosten.

Klicken Sie auf **Weiter**.

## Schritt 3 — Verfügbarkeitszone auswählen

![Schritt 2: Verfügbarkeitszone](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Wählen Sie **fr1-az01**. Diese Zone ist in der Region FR1 (Frankreich) verfügbar.

:::tip
Um die Resilienz zu maximieren, können Sie mehrere VMs in verschiedenen Verfügbarkeitszonen (fr1-az01 und fr1-az02) bereitstellen.
:::

Klicken Sie auf **Weiter**.

## Schritt 4 — Image auswählen

![Schritt 3: Image auswählen](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Wählen Sie im Tab **OS** **Debian** und wählen Sie die Version **13 (Trixie)** im Dropdown-Menü aus.

Klicken Sie auf **Weiter**.

## Schritt 5 — Vorlage konfigurieren

![Schritt 4: Vorlage](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Wählen Sie für dieses Tutorial die Vorlage **dev-2** (2 vCPU / 8 GB RAM).

Falls Ihr Bedarf abweicht, verwenden Sie die Option **Custom**, um die Anzahl der vCPUs und die RAM-Menge frei festzulegen.

Klicken Sie auf **Weiter**.

## Schritt 6 — VM benennen und Backup konfigurieren

![Schritt 5: Name und Backup-Richtlinie](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Geben Sie einen aussagekräftigen Namen für Ihre VM ein, z. B. `web-server-01`.

Für die Backup-Richtlinie lassen Sie **No Backup** für dieses Tutorial (Sie können sie später über den Tab Informationen aktivieren).

Klicken Sie auf **Weiter**.

## Schritt 7 — Cloud Init konfigurieren

![Schritt 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Cloud Init ermöglicht die Vorkonfiguration Ihrer VM beim ersten Start. Geben Sie die folgende Konfiguration in den **Cloud Config**-Editor ein:

```yaml
#cloud-config
hostname: web-server-01
users:
  - name: admin
    groups: sudo
    shell: /bin/bash
    ssh_authorized_keys:
      - ssh-rsa AAAA...votre_cle_publique_ssh
package_update: true
packages:
  - curl
  - vim
  - htop
```

Lassen Sie das Feld **Network Config** leer, wenn Sie DHCP verwenden. Für eine statische IP-Konfiguration füllen Sie es im Netplan-Format aus:

```yaml
version: 2
ethernets:
  ens3:
    dhcp4: false
    addresses:
      - 192.168.1.10/24
    routes:
      - to: default
        via: 192.168.1.1
    nameservers:
      addresses:
        - 8.8.8.8
        - 1.1.1.1
```

Aktivieren Sie das Kontrollkästchen **Cloud-Init-Konfigurationsdisk nach dem ersten Start löschen**, um die Sicherheit zu verbessern.

Klicken Sie auf **Weiter**.

## Schritt 8 — Disks konfigurieren

![Schritt 7: Disks](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Sie sehen, dass **Disk 1** (die Systemdisk `system-disk-1`) automatisch mit der Größe erstellt wurde, die dem Debian-13-OS entspricht.

Um eine Datendisk hinzuzufügen, konfigurieren Sie eine zweite Disk im Wizard:
- **Name**: `data-disk-1`
- **Kapazität**: `50` GB
- **Speichertyp**: Standard (~1 500 IOPS/TB)

Klicken Sie auf **Weiter**.

## Schritt 9 — Netzwerk konfigurieren

![Schritt 8: Netzwerkadapter](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Wählen Sie im Dropdown-Menü **Netzwerk** Ihr Netzwerk aus. In diesem Beispiel ist das Netzwerk **PACKFR** (privates Backbone) verfügbar.

:::info
Wenn Sie ein **VPC** verwenden, können Sie Ihrer VM nach der Erstellung eine **schwimmende IP** (öffentliche IP) zuordnen.
:::

Klicken Sie auf **Weiter**.

## Schritt 10 — Zusammenfassung prüfen und erstellen

![Schritt 9: Zusammenfassung](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Prüfen Sie die Zusammenfassung sorgfältig:

| Parameter | Wert |
|-----------|--------|
| Instanzfamilie | Development |
| Verfügbarkeitszone | fr1-az01 |
| Modell | Debian 13 |
| Vorlage | 2 vCPU / 8 GB RAM |
| Backup-Richtlinie | No Backup |
| Disks | system-disk-1 + data-disk-1 (50 GB) |
| Netzwerk | PACKFR (privates Backbone) |

Wenn alles korrekt ist, klicken Sie auf **Erstellen**. Die Bereitstellung dauert einige Minuten. Ihre VM erscheint anschließend in der Liste mit dem Status **Eingeschaltet**.
