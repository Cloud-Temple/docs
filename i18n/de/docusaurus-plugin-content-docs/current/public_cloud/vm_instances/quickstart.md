---
title: Startanleitung
---

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Sie über Folgendes verfügen:

- Ein aktives **Cloud Temple Tenant**
- Mindestens ein **Standard-Support**-Abonnement
- Die erforderlichen Berechtigungen in Ihrer Cloud Temple-Organisation

## Zugriff auf den Dienst VM-Instanzen

Melden Sie sich bei der **Cloud Temple-Konsole** an und navigieren Sie im Hauptmenü zu **Öffentliche Cloud > VM-Instanzen**.

![Dashboard Console Cloud Temple](@site/docs/public_cloud/vm_instances/images/vm_instances_dashboard_overview.png)

Das Dashboard bietet Ihnen einen Überblick über die verbrauchten VM-Instanz-Ressourcen (Speicher, CPU, RAM) sowie die Anzahl der aktiven virtuellen Maschinen.

Klicken Sie in der linken Seitenleiste auf **Öffentliche Cloud**, um das Untermenü aufzuklappen, und wählen Sie dann **VM-Instanzen** aus.

![Navigation vers VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_navigation_cloud_public.png)

Sie gelangen zur Liste Ihrer VM-Instanzen:

![Liste des VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

Die Tabelle zeigt für jede VM Folgendes an: ihren Namen, ihren Status (Eingeschaltet / Ausgeschaltet), die Verfügbarkeitszone, die Instanzfamilie, das Modell sowie die zugewiesenen Ressourcen (CPU, RAM, Festplattengröße).

## Eine virtuelle Maschine bereitstellen

Klicken Sie oben rechts auf die Schaltfläche **+ Neue virtuelle Maschine**, um den Erstellungswizard zu öffnen. Dieser Wizard umfasst **9 Schritte**.

### Schritt 1 — Instanzfamilie

![Étape 1 : Famille d'instance](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Wählen Sie die **Instanzfamilie**, die zu Ihrer Arbeitslast passt:

| Familie | Beschreibung | CPU |
|---------|-------------|-----|
| **Development** | Kostenoptimiert, für Test- und Staging-Umgebungen | Geteilt |
| **General Purpose** | Optimales vCPU/RAM-Verhältnis für Standard-Arbeitslasten | Geteilt |

:::info
Die Familie **Performance** (dedizierte vCPUs) ist über die benutzerdefinierte Vorlage verfügbar.
:::

### Schritt 2 — Verfügbarkeitszone

![Schritt 2: Verfügbarkeitszone](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Wählen Sie die **Verfügbarkeitszone (AZ)** aus, in der Ihre VM gehostet werden soll (z. B. `fr1-az01`).

### Schritt 3 — Eine Vorlage auswählen

![Schritt 3: Eine Vorlage auswählen](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Durchsuchen Sie den Katalog der verfügbaren Images über die Registerkarten **OS** und **Appliances**:

- **Debian 13** (Trixie)
- **Rocky Linux**
- Und weitere Systeme, die im Cloud Temple Marketplace verfügbar sind

Wählen Sie das gewünschte Betriebssystem aus und wählen Sie die Version im zugehörigen Dropdown-Menü.

### Schritt 4 — Vorlage

![Schritt 4: Vorlage](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Wählen Sie eine **vordefinierte Vorlage** oder erstellen Sie eine **benutzerdefinierte Vorlage** :

- `dev-1` : 1 vCPU
- `dev-2` : 2 vCPU / 8 GB RAM (standardmäßig ausgewählt)
- **Custom** : geben Sie die Anzahl der vCPU und die RAM-Größe frei ein

### Schritt 5 — Name und Sicherungsrichtlinie

![Schritt 5: Name und Sicherungsrichtlinie](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Geben Sie Folgendes ein:

| Parameter | Beschreibung |
|-----------|-------------|
| **Name** | Eindeutiger Name Ihrer VM im Tenant |
| **Sicherungsrichtlinie** | Standardmäßig `No Backup`, oder eine Aufbewahrungsrichtlinie, wenn die Sicherungsoption abonniert ist |

Dieser Schritt zeigt außerdem eine Zusammenfassung des ausgewählten Betriebssystems und der Größe der Systemfestplatte an.

### Schritt 6 — Cloud Init

![Schritt 6 : Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Dieser Schritt ist **optional**. Er ermöglicht die Vorabkonfiguration Ihrer VM beim ersten Start über zwei Editoren:

- **Cloud Config** : Injizieren von SSH-Schlüsseln, Konfiguration des Hostnamens, Installation von Paketen usw.
- **Network Config** : Statische Netzwerkkonfiguration (Netplan-Format)

Beispiel für eine minimale Cloud Config:

```yaml
#cloud-config
hostname: mon-serveur-01
ssh_authorized_keys:
  - ssh-rsa AAAA...votre_cle_publique
packages:
  - htop
```

Ein Kontrollkästchen ermöglicht das **Löschen des Cloud-Init-Konfigurationsdatenträgers** nach dem ersten Start (aus Sicherheitsgründen empfohlen).

### Schritt 7 — Festplatten

![Étape 7 : Disques](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Konfigurieren Sie die Festplatte(n) Ihrer VM:

- **Systemfestplatte** : wird automatisch erstellt (`system-disk-1`), Größe wird durch das Betriebssystem bestimmt
- **Zusätzliche Festplatten** : fügen Sie weitere Volumes mit dem gewünschten Namen, der Kapazität und dem Speichertyp hinzu

Zwei Speichertypen sind verfügbar:

| Typ | IOPS |
|------|------|
| **Standard** | ~1.500 IOPS/TB |
| **Enterprise** | ~7.500 IOPS/TB |

### Schritt 8 — Netzwerkadapter

![Étape 8 : Adaptateurs Réseaux](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Verbinden Sie Ihre VM über das Dropdown-Menü mit einem Netzwerk. Zwei Netzwerktypen stehen zur Verfügung:

- **Privates Backbone** (ex : PACKFR) : gemeinsam genutztes privates Netzwerk mit logischer Isolierung
- **VPC** : vollständig dediziertes privates Netzwerk mit erweiterter Segmentierung

### Schritt 9 — Zusammenfassung

![Schritt 9: Zusammenfassung](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Überprüfen Sie die vollständige Zusammenfassung, bevor Sie die Provisionierung starten:

- Allgemeine Informationen (Familie, AZ, Modell, Name, Sicherung)
- Konfiguration (CPU, RAM)
- Cloud-Init-Konfiguration
- Virtuelle Festplatten
- Netzwerk

Klicken Sie auf **Erstellen**, um die Bereitstellung zu starten. Die VM wird innerhalb weniger Minuten provisioniert.

## Verwalten Sie Ihre virtuellen Maschinen

Klicken Sie in der Liste auf eine VM, um die Detailansicht zu öffnen. Vier Registerkarten sind verfügbar:

### Registerkarte Informationen

![VM-Details - Informationen](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_informations.png)

Überprüfen und bearbeiten Sie die Einstellungen Ihrer VM:
- Name, UUID, Verfügbarkeitszone
- Instanzfamilie, Betriebssystemvorlage
- CPU, RAM (änderbar bei ausgeschalteter VM)
- Sicherungsrichtlinie

Mithilfe der Aktionsicons können Sie die VM **starten**, **stoppen**, **neustarten** oder die **Konsole öffnen**.

### Tab "Festplatten"

![Détail VM - Disques](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Überprüfen Sie die angehängten Festplatten und fügen Sie über die Schaltfläche **+ Festplatte hinzufügen** zusätzliche Volumes hinzu.

### Registerkarte Netzwerkadapter

![VM-Details - Netzwerk](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_reseau.png)

Überprüfen Sie die Netzwerkschnittstellen der VM (Netzwerkname, MAC-Adresse, IPv4-/IPv6-Adresse).

### Registerkarte Snapshots

![VM-Details - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

Erstellen und verwalten Sie Snapshots Ihrer VM über die Schaltfläche **+ Snapshot erstellen**.

## Automatisierung und Infrastruktur als Code

Der Dienst VM-Instanzen ist vollständig automatisierbar:

### Über die REST-API

Die Cloud Temple REST-API ermöglicht die vollständige programmatische Steuerung des Lebenszyklus virtueller Maschinen.

API-Referenz: [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### Über Terraform

Der Terraform-Provider Cloud Temple ermöglicht die Verwaltung Ihrer VM-Instanzen als Infrastructure as Code.

```hcl
# Exemple de ressource VM Instances avec Terraform
# Consultez la documentation du provider pour les attributs disponibles
resource "cloudtemple_compute_vm_instance" "example" {
  # ...
}
```

Siehe die [documentation Terraform](/terraform) für die Installation und Konfiguration des Providers.

## Nützliche Ressourcen

- [Documentation publique Cloud Temple](https://docs.cloud-temple.com/home)
- [Référence API](https://shiva.cloud-temple.com/api/)
- [Documentation Terraform](/terraform)
- [Concepts des zones de disponibilité](../../additional_content/concepts_az.md)