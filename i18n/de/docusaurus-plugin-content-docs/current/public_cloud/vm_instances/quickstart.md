---
title: Einstiegsguide
---

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Sie über Folgendes verfügen:

- Ein aktives **Cloud Temple Tenant**
- Mindestens ein Abonnement für **Standard-Support** für Direktkunden; der **Basic-Support** ist für Kunden bestimmt, die von einem geschulten Partner begleitet werden (siehe [FAQ](./faq))
- Die erforderlichen Berechtigungen in Ihrer Cloud Temple-Organisation

## Zugriff auf den Dienst VM Instances

Melden Sie sich in der **Cloud Temple Konsole** an und navigieren Sie über das Hauptmenü zu **VM Instances**.

![Dashboard Console Cloud Temple](@site/docs/public_cloud/vm_instances/images/vm_instances_dashboard_overview.png)

Das Dashboard zeigt Ihnen einen Überblick über die verbrauchten VM Instances-Ressourcen (Speicher, CPU, RAM) sowie die Anzahl der aktiven virtuellen Maschinen.

Wählen Sie **VM Instances** in der Seitenleiste links aus.

![Navigation vers VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_navigation_cloud_public.png)

Sie gelangen zur Liste Ihrer VM Instances:

![Liste der VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

Die Tabelle zeigt für jede VM: ihren Namen, ihren Status (Eingeschaltet / Ausgeschaltet), die Verfügbarkeitszone, die Instanzfamilie, das Modell sowie die zugewiesenen Ressourcen (CPU, RAM, Datenträgergröße).

## Eine virtuelle Maschine bereitstellen

Klicken Sie oben rechts auf die Schaltfläche **+ Neue virtuelle Maschine**, um den Assistenten zur Erstellung zu öffnen. Dieser Assistent verläuft in **9 Schritten**.

### Schritt 1 — Instanzfamilie

![Schritt 1 : Instanzfamilie](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Wählen Sie die **Instanzfamilie**, die zu Ihrer Arbeitslast passt:

| Familie | Beschreibung | CPU |
|---------|-------------|-----|
| **Development** | Kostenoptimiert, für Test- und Staging-Umgebungen | Geteilt |
| **General Purpose** | Optimales vCPU/RAM-Verhältnis für Standard-Workloads | Geteilt |

:::info
Die Familie **Performance** (dedizierte vCPU) ist über die benutzerdefinierte Vorlage verfügbar.
:::

### Schritt 2 — Verfügbarkeitszone

![Schritt 2 : Verfügbarkeitszone](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Wählen Sie die **Verfügbarkeitszone (AZ)**, in der Ihre VM gehostet werden soll (z. B. `fr1-az01`).

Diese Wahl erfordert nicht das Abonnement der kostenpflichtigen AZ-Aktivierung des IaaS-Angebots: Dieses Abonnement ist keine Voraussetzung für VM Instances.

### Schritt 3 — Image auswählen

![Schritt 3 : Image auswählen](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Durchsuchen Sie das Katalog der verfügbaren Images über die Registerkarten **OS** und **Appliances**:

- **Debian 13** (Trixie)
- **Rocky Linux**
- Und weitere im Cloud Temple Marketplace verfügbare Systeme

Wählen Sie das gewünschte Betriebssystem aus und wählen Sie die Version im zugehörigen Dropdown-Menü.

### Schritt 4 — Vorlage

![Schritt 4 : Vorlage](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Wählen Sie eine **vordefinierte Vorlage** oder erstellen Sie eine **Custom-Vorlage**:

- `dev-1`: 1 vCPU
- `dev-2`: 2 vCPU / 8 Go RAM (standardmäßig ausgewählt)
- **Custom**: Geben Sie die Anzahl der vCPU und die RAM-Menge frei ein

### Schritt 5 — Name und Backup-Richtlinie

![Schritt 5 : Name und Backup-Richtlinie](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Geben Sie Folgendes ein:

| Parameter | Beschreibung |
|-----------|-------------|
| **Name** | Eindeutiger Name Ihrer VM im Tenant |
| **Backup-Richtlinie** | Standardmäßig `No Backup`, oder eine Aufbewahrungsrichtlinie, wenn die Backup-Option abonniert ist |

Dieser Schritt zeigt außerdem eine Zusammenfassung des ausgewählten Betriebssystems und der Systemdatenträgergröße an.

### Schritt 6 — Cloud Init

![Schritt 6 : Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Dieser Schritt ist **optional**. Er ermöglicht die Vorkonfiguration Ihrer VM beim ersten Start über zwei Editoren:

- **Cloud Config**: Einspeisung von SSH-Schlüsseln, Hostname-Konfiguration, Paketinstallation usw.
- **Network Config**: Statische Netzwerkkonfiguration (Netplan-Format)

Beispiel für ein minimales Cloud Config:

```yaml
#cloud-config
hostname: mon-serveur-01
ssh_authorized_keys:
  - ssh-rsa AAAA...votre_cle_publique
packages:
  - htop
```

Ein Kästchen ermöglicht es, die **Cloud Init-Konfigurationsdatenträger** nach dem ersten Start zu **löschen** (aus Sicherheitsgründen empfohlen).

### Schritt 7 — Datenträger

![Schritt 7 : Datenträger](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Konfigurieren Sie den oder die Datenträger Ihrer VM:

- **Systemdatenträger**: Wird automatisch erstellt (`system-disk-1`), Größe wird durch das OS bestimmt
- **Zusätzliche Datenträger**: Fügen Sie zusätzliche Volumes mit dem gewünschten Namen, der Kapazität und dem Speichertyp hinzu

Zwei Speichertypen sind verfügbar:

| Typ | IOPS |
|------|------|
| **Standard** | ~1 500 IOPS/To |
| **Enterprise** | ~7 500 IOPS/To |

### Schritt 8 — Netzwerkadapter

![Schritt 8 : Netzwerkadapter](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Verknüpfen Sie Ihre VM mit einem Netzwerk über das Dropdown-Menü. Zwei Netzwerktypen sind verfügbar:

- **Privater Backbone** (z. B. PACKFR): Geteiltes privates Netzwerk mit logischer Isolation
- **VPC**: Vollständig dediziertes privates Netzwerk mit fortgeschrittener Segmentierung

### Schritt 9 — Zusammenfassung

![Schritt 9 : Zusammenfassung](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Prüfen Sie die vollständige Zusammenfassung, bevor Sie die Provisionierung starten:

- Allgemeine Informationen (Familie, AZ, Modell, Name, Backup)
- Vorlage (CPU, RAM)
- Cloud Init-Konfiguration
- Virtuelle Datenträger
- Netzwerk

Klicken Sie auf **Erstellen**, um die Bereitstellung zu starten. Die VM wird innerhalb weniger Minuten provisioniert.

## Ihre virtuellen Maschinen verwalten

Klicken Sie in der Liste auf eine VM, um deren Detailansicht aufzurufen. Vier Registerkarten sind verfügbar:

### Registerkarte Informationen

![Detail VM - Informationen](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_informations.png)

Rufen Sie die Parameter Ihrer VM ab und ändern Sie diese:
- Name, UUID, Verfügbarkeitszone
- Instanzfamilie, OS-Modell
- CPU, RAM (bei ausgeschalteter VM änderbar)
- Backup-Richtlinie

Aktionssymbole ermöglichen es, die VM zu **starten**, zu **stoppen**, **neu zu starten** oder die **Konsole zu öffnen**.

### Registerkarte Datenträger

![Detail VM - Datenträger](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Rufen Sie die angehängten Datenträger ab und fügen Sie zusätzliche Volumes über die Schaltfläche **+ Datenträger hinzufügen** hinzu.

### Registerkarte Netzwerkadapter

![Detail VM - Netzwerk](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_reseau.png)

Rufen Sie die Netzwerkschnittstellen der VM ab (Netzwerkname, MAC-Adresse, IPv4/IPv6-Adresse).

### Registerkarte Snapshots

![Detail VM - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

Erstellen und verwalten Sie Snapshots Ihrer VM über die Schaltfläche **+ Snapshot erstellen**.

## Automatisierung und Infrastructure as Code

Der Dienst VM Instances ist vollständig automatisierbar:

### Über die REST API

Die Cloud Temple REST API ermöglicht die vollständige programmgesteuerte Steuerung des Lebenszyklus der virtuellen Maschinen.

API-Referenz: [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### Über Terraform

Der Terraform Provider Cloud Temple ermöglicht es, Ihre VM Instances als Infrastructure as Code zu verwalten.

```hcl
# Exemple de ressource VM Instances avec Terraform
# Consultez la documentation du provider pour les attributs disponibles
resource "cloudtemple_compute_vm_instance" "example" {
  # ...
}
```

Consultez die [Terraform-Dokumentation](/terraform) für die Installation und Konfiguration des Providers.

## Nützliche Ressourcen

- [Öffentliche Dokumentation Cloud Temple](https://docs.cloud-temple.com/home)
- [API-Referenz](https://shiva.cloud-temple.com/api/)
- [Terraform-Dokumentation](/terraform)
- [Konzepte der Verfügbarkeitszonen](../../additional_content/concepts_az.md)
