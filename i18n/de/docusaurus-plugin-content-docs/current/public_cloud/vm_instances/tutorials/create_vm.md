---
title: Erste VM Instance erstellen
---

Dieses Tutorial führt Sie Schritt für Schritt durch die Erstellung einer Debian 13 VM mit einer zusätzlichen Datenfestplatte, Cloud Init-Konfiguration und Verbindung zum privaten Backbone-Netzwerk.

## Ziel

Erstellen einer Linux-VM (Debian 13) in Zone `fr1-az01`, vorkonfiguriert mit einem SSH-Schlüssel und einer zusätzlichen 50-GB-Festplatte.

## Voraussetzungen

- Ein aktiver Cloud Temple Tenant mit Zugang zum VM Instances-Dienst
- Ein verfügbarer öffentlicher SSH-Schlüssel
- Ein privates Backbone- oder VPC-Netzwerk in Ihrem Tenant

## Schritt 1 — Erstellungsassistenten öffnen

Navigieren Sie in der Cloud Temple Console zu **Cloud Public > VM Instances**.

![VM Instances-Liste](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

Klicken Sie auf **+ Neue virtuelle Maschine**.

## Schritt 2 — Instanzfamilie auswählen

![Schritt 1: Instanzfamilie](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Wählen Sie **Development** für dieses Beispiel. Klicken Sie auf **Weiter**.

## Schritt 3 — Verfügbarkeitszone wählen

![Schritt 2: Verfügbarkeitszone](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Wählen Sie **fr1-az01**. Klicken Sie auf **Weiter**.

## Schritt 4 — Template auswählen

![Schritt 3: Template](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Wählen Sie im Tab **OS** die Option **Debian**, Version **13 (Trixie)**. Klicken Sie auf **Weiter**.

## Schritt 5 — Flavor konfigurieren

![Schritt 4: Flavor](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Wählen Sie **dev-2** (2 vCPU / 8 GB RAM). Klicken Sie auf **Weiter**.

## Schritt 6 — VM benennen

![Schritt 5: Name](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Geben Sie z.B. `web-server-01` ein. Klicken Sie auf **Weiter**.

## Schritt 7 — Cloud Init konfigurieren

![Schritt 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

```yaml
#cloud-config
hostname: web-server-01
users:
  - name: admin
    groups: sudo
    shell: /bin/bash
    ssh_authorized_keys:
      - ssh-rsa AAAA...ihr_ssh_public_key
package_update: true
packages:
  - curl
  - vim
  - htop
```

## Schritt 8 — Festplatten konfigurieren

![Schritt 7: Festplatten](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Fügen Sie eine Datenfestplatte hinzu: Name `data-disk-1`, Kapazität `50` GB, Typ Standard.

## Schritt 9 — Netzwerk konfigurieren

![Schritt 8: Netzwerkadapter](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Wählen Sie Ihr Netzwerk aus (z.B. **PACKFR**). Klicken Sie auf **Weiter**.

## Schritt 10 — Zusammenfassung prüfen und erstellen

![Schritt 9: Zusammenfassung](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Überprüfen Sie alle Angaben und klicken Sie auf **Erstellen**. Ihre VM erscheint innerhalb weniger Minuten in der Liste.
