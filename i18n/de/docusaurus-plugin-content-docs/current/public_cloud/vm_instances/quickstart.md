---
title: Erste Schritte
---

## Voraussetzungen

Stellen Sie sicher, dass Sie Folgendes haben:

- Ein aktiver **Cloud Temple Tenant**
- Mindestens ein **Standard Support**-Abonnement
- Die erforderlichen Berechtigungen in Ihrer Cloud Temple Organisation

## Zugriff auf den VM Instances-Dienst

Melden Sie sich bei der **Cloud Temple Console** an und navigieren Sie zu **Cloud Public > VM Instances**.

![Cloud Temple Console Dashboard](@site/docs/public_cloud/vm_instances/images/vm_instances_dashboard_overview.png)

Das Dashboard zeigt Ihnen eine Übersicht der verbrauchten VM Instances-Ressourcen (Speicher, CPU, RAM) sowie die Anzahl der aktiven virtuellen Maschinen.

Klicken Sie in der linken Seitenleiste auf **Cloud Public** und wählen Sie **VM Instances**.

![Navigation zu VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_navigation_cloud_public.png)

Sie gelangen zur Liste Ihrer VM Instances:

![VM Instances-Liste](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

Die Tabelle zeigt für jede VM: Name, Status (Ein / Aus), Verfügbarkeitszone, Instanzfamilie, Modell und zugewiesene Ressourcen (CPU, RAM, Festplattengröße).

## Virtuelle Maschine bereitstellen

Klicken Sie auf **+ Neue virtuelle Maschine**, um den Erstellungsassistenten zu öffnen. Dieser läuft in **9 Schritten** ab.

### Schritt 1 — Instanzfamilie

![Schritt 1: Instanzfamilie](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Wählen Sie die passende **Instanzfamilie** für Ihre Arbeitslast:

| Familie | Beschreibung | CPU |
|---------|-------------|-----|
| **Development** | Kostenoptimiert, für Test- und Staging-Umgebungen | Geteilt |
| **General Purpose** | Optimales vCPU/RAM-Verhältnis für Standardlasten | Geteilt |

:::info
Die **Performance**-Familie (dedizierte vCPUs) ist über das benutzerdefinierte Flavor-Profil verfügbar.
:::

### Schritt 2 — Verfügbarkeitszone

![Schritt 2: Verfügbarkeitszone](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Wählen Sie die **Verfügbarkeitszone (AZ)**, in der Ihre VM gehostet wird (z.B. `fr1-az01`).

### Schritt 3 — Template auswählen

![Schritt 3: Template auswählen](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Durchsuchen Sie den Katalog verfügbarer Images über die Tabs **OS** und **Appliances**.

### Schritt 4 — Flavor

![Schritt 4: Flavor](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Wählen Sie ein **vordefiniertes Flavor** oder erstellen Sie ein **benutzerdefiniertes Flavor** (vCPU + RAM).

### Schritt 5 — Name und Sicherungsrichtlinie

![Schritt 5: Name und Sicherungsrichtlinie](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Geben Sie einen eindeutigen **Namen** ein und wählen Sie die **Sicherungsrichtlinie** (`No Backup` standardmäßig).

### Schritt 6 — Cloud Init

![Schritt 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Optionaler Schritt. Vorkonfigurieren Sie Ihre VM beim ersten Start via **Cloud Config** (SSH-Schlüssel, Pakete) und **Network Config** (Netplan).

### Schritt 7 — Festplatten

![Schritt 7: Festplatten](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Die Systemfestplatte wird automatisch erstellt. Fügen Sie weitere Volumes hinzu (Standard ~1.500 IOPS/TB oder Enterprise ~7.500 IOPS/TB).

### Schritt 8 — Netzwerkadapter

![Schritt 8: Netzwerkadapter](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Wählen Sie das Netzwerk: **Privates Backbone** oder **VPC**.

### Schritt 9 — Zusammenfassung

![Schritt 9: Zusammenfassung](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Überprüfen Sie die Zusammenfassung und klicken Sie auf **Erstellen**.

## Virtuelle Maschinen verwalten

Klicken Sie auf eine VM, um auf die 4 Tabs zuzugreifen:

### Tab Informationen
![VM-Detail - Informationen](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_informations.png)

### Tab Festplatten
![VM-Detail - Festplatten](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

### Tab Netzwerkadapter
![VM-Detail - Netzwerk](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_reseau.png)

### Tab Snapshots
![VM-Detail - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)
