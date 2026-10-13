---
title: Einstiegsleitfaden
---

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Sie über Folgendes verfügen:

- Ein aktiver **Cloud Temple Tenant**
- Mindestens ein Abonnement des **Standard-Supports** für einen Direktkunden; der **Basis-Support** ist für Kunden bestimmt, die von einem geschulten Partner begleitet werden (siehe [FAQ](./faq))
- Die erforderlichen Berechtigungen in Ihrer Cloud Temple-Organisation

## Zugriff auf den Dienst VM Instances

Melden Sie sich bei der **Console Cloud Temple** an und navigieren Sie über das Hauptmenü zu **Cloud Public > VM Instances**.

![Dashboard Console Cloud Temple](@site/docs/public_cloud/vm_instances/images/vm_instances_dashboard_overview.png)

Das Dashboard zeigt Ihnen einen Überblick über die verbrauchten VM-Instance-Ressourcen (Speicher, CPU, RAM) sowie die Anzahl der aktiven virtuellen Maschinen.

Klicken Sie in der linken Seitenleiste auf **Cloud Public**, um das Untermenü auszuklappen, und wählen Sie dann **VM Instances** aus.

![Navigation vers VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_navigation_cloud_public.png)

Sie gelangen zur Liste Ihrer VM Instances:

![Liste des VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

Die Tabelle zeigt für jede VM: ihren Namen, ihren Status (Eingeschaltet / Ausgeschaltet), die Verfügbarkeitszone, die Instanzfamilie, das Modell sowie die zugewiesenen Ressourcen (CPU, RAM, Festplattengröße).

## Eine virtuelle Maschine bereitstellen

Klicken Sie auf die Schaltfläche **+ Neue virtuelle Maschine** oben rechts, um den Assistenten zur Erstellung zu öffnen. Dieser Assistent verläuft in **9 Schritten**.

### Schritt 1 — Instanzfamilie

![Schritt 1: Instanzfamilie](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Wählen Sie die **Instanzfamilie**, die zu Ihrer Workload passt:

| Familie | Beschreibung | CPU |
|---------|-------------|-----|
| **Development** | Kostenoptimiert, für Test- und Staging-Umgebungen | Geteilt |
| **General Purpose** | Optimales vCPU/RAM-Verhältnis für Standard-Workloads | Geteilt |

:::info
Die Familie **Performance** (dedizierte vCPU) ist über die benutzerdefinierte Vorlage verfügbar.
:::

### Schritt 2 — Verfügbarkeitszone

![Schritt 2: Verfügbarkeitszone](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Wählen Sie die **Verfügbarkeitszone (AZ)**, in der Ihre VM gehostet werden soll (z. B. `fr1-az01`).

Diese Wahl erfordert nicht den Abschluss der kostenpflichtigen AZ-Aktivierung des IaaS-Angebots: Diese Aktivierung ist keine Voraussetzung für VM Instances.

### Schritt 3 — Ein Template auswählen

![Schritt 3: Ein Template auswählen](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Durchsuchen Sie den Katalog der verfügbaren Images über die Registerkarten **OS** und **Appliances** :

- **Debian 13** (Trixie)
- **Rocky Linux**
- Und weitere Systeme, die in der Cloud Temple Marketplace verfügbar sind

Wählen Sie das gewünschte Betriebssystem aus und die Version im zugehörigen Dropdown-Menü.

### Schritt 4 — Vorlage

![Schritt 4: Vorlage](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Wählen Sie eine **vordefinierte Vorlage** oder erstellen Sie eine **Custom-Vorlage** :

- `dev-1` : 1 vCPU
- `dev-2` : 2 vCPU / 8 GB RAM (sélectionné par défaut)
- **Custom** : geben Sie frei die Anzahl der vCPU und die RAM-Menge ein

### Schritt 5 — Name und Sicherungsrichtlinie

![Étape 5 : Nom et politique de sauvegarde](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Geben Sie Folgendes ein:

| Parameter | Beschreibung |
|-----------|-------------|
| **Name** | Eindeutiger Name Ihrer VM im Tenant |
| **Sicherungsrichtlinie** | `No Backup` standardmäßig, oder eine Aufbewahrungsrichtlinie, wenn die Sicherungsoption abonniert ist |

Dieser Schritt zeigt außerdem eine Zusammenfassung des ausgewählten Betriebssystems und der Größe der Systemplatte an.

### Schritt 6 — Cloud Init

![Étape 6 : Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Dieser Schritt ist **optional**. Er ermöglicht die Vorkonfiguration Ihrer VM beim ersten Start über zwei Editoren:

- **Cloud Config**: Injektion von SSH-Schlüsseln, Konfiguration des Hostnames, Installation von Paketen usw.
- **Network Config**: statische Netzwerkkonfiguration (Netplan-Format)

Beispiel für eine minimale Cloud Config:

```yaml
#cloud-config
hostname: mon-serveur-01
ssh_authorized_keys:
  - ssh-rsa AAAA...votre_cle_publique
packages:
  - htop
```

Ein Kontrollkästchen ermöglicht es, die **Cloud-Init-Konfigurationsscheibe** nach dem ersten Start zu löschen (aus Sicherheitsgründen empfohlen).

### Schritt 7 — Festplatten

![Schritt 7 : Festplatten](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Konfigurieren Sie die Festplatte(n) Ihrer VM:

- **Systemfestplatte** : wird automatisch erstellt (`system-disk-1`), Größe durch das Betriebssystem bestimmt
- **Zusätzliche Festplatten** : fügen Sie zusätzliche Volumes mit dem gewünschten Namen, der Kapazität und dem Speichertyp hinzu

Zwei Speichertypen sind verfügbar:

| Typ | IOPS |
|------|------|
| **Standard** | ~1 500 IOPS/TB |
| **Enterprise** | ~7 500 IOPS/TB |

### Schritt 8 — Netzwerkadapter

![Schritt 8: Netzwerkadapter](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Verbinden Sie Ihre VM über das Dropdown-Menü mit einem Netzwerk. Zwei Netzwerktypen sind verfügbar:

- **Privates Backbone** (z. B. PACKFR): gemeinsam genutztes privates Netzwerk mit logischer Isolation
- **VPC**: vollständig dediziertes privates Netzwerk mit fortgeschrittener Segmentierung

### Schritt 9 — Zusammenfassung

![Étape 9 : Sommaire](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Prüfen Sie die vollständige Zusammenfassung, bevor Sie das Provisioning starten:

- Allgemeine Informationen (Familie, AZ, Modell, Name, Sicherung)
- Vorlage (CPU, RAM)
- Cloud-Init-Konfiguration
- Virtuelle Datenträger
- Netzwerk

Klicken Sie auf **Erstellen**, um die Bereitstellung zu starten. Die VM wird innerhalb weniger Minuten provisioniert.

## Verwalten Sie Ihre virtuellen Maschinen

Klicken Sie in der Liste auf eine VM, um deren Detailansicht anzuzeigen. Vier Registerkarten sind verfügbar:

### Informations-Tab

![Détail VM - Informations](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_informations.png)

Rufen Sie die Parameter Ihrer VM ab und ändern Sie sie:
- Name, UUID, Verfügbarkeitszone
- Instanzfamilie, OS-Modell
- CPU, RAM (änderbar bei ausgeschalteter VM)
- Backup-Richtlinie

Aktionssymbole ermöglichen es, die VM zu **starten**, **anzuhalten**, **neu zu starten** oder die **Konsole zu öffnen**.

### Tab Disks

![VM-Details - Disks](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Rufen Sie die angehängten Disks ab und fügen Sie zusätzliche Volumes über die Schaltfläche **+ Disk hinzufügen** hinzu.

### Netzwerkadapter-Tab

![VM-Details - Netzwerk](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_reseau.png)

Rufen Sie die Netzwerkschnittstellen der VM ab (Netzwerkname, MAC-Adresse, IPv4-/IPv6-Adresse).

### Tab Snapshots

![VM-Details - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

Erstellen und verwalten Sie Snapshots Ihrer VM über den Button **+ Snapshot erstellen**.

## Automatisierung und Infrastructure as Code

Der Service VM Instances ist vollständig automatisierbar:

### Über die REST-API

Die REST-API von Cloud Temple ermöglicht die vollständige programmatische Steuerung des Lebenszyklus virtueller Maschinen.

API-Referenz : [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### Via Terraform

Der Terraform Provider Cloud Temple ermöglicht die Verwaltung Ihrer VM-Instanzen als Infrastructure as Code.

```hcl
# Exemple de ressource VM Instances avec Terraform
# Consultez la documentation du provider pour les attributs disponibles
resource "cloudtemple_compute_vm_instance" "example" {
  # ...
}
```

Bitte beachten Sie die [documentation Terraform](/terraform) für die Installation und Konfiguration des Providers.

## Nützliche Ressourcen

- [Öffentliche Dokumentation Cloud Temple](https://docs.cloud-temple.com/home)
- [API-Referenz](https://shiva.cloud-temple.com/api/)
- [Terraform-Dokumentation](/terraform)
- [Konzepte der Verfügbarkeitszonen](../../additional_content/concepts_az.md)