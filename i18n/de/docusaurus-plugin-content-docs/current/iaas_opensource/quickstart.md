---
title: Schnellstartanleitung
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'
import openIaasReplicationMenu from './images/open_iaas_replication_menu.png'
import openIaasReplicationPoliciesView from './images/open_iaas_replication_policies_view.png'
import openIaasReplicationPolicyForm1 from './images/open_iaas_replication_policy_form1.png'
import openIaasReplicationPolicyForm2 from './images/open_iaas_replication_policy_form2.png'
import openIaasVmReplicationSection from './images/open_iaas_vm_replication_section.png'
import openIaasReplicationPoliciesTable from './images/open_iaas_replication_policies_table.png'
import openIaasReplicationReplicasTable from './images/open_iaas_replication_replicas_table.png'

## Berechnung

### Verwaltung virtueller Maschinen

Die Verwaltungsoberfläche für Ihre virtuellen Maschinen ist in der Shiva-Konsole im Menü __'OpenIaaS'__ verfügbar, das sich in der grünen Seitenleiste auf der linken Seite des Bildschirms befindet.

### Liste der virtuellen Maschinen

Im Bereich __'Virtuelle Maschinen'__ haben Sie Zugriff auf die Liste Ihrer virtuellen Maschinen, die auf Ihrer vertrauenswürdigen Cloud gehostet werden.

<img src={openIaasVirtualMachinesList} />

Sie haben Zugriff auf die folgenden Informationen für jede virtuelle Maschine:

- Ihren Namen.
- Ihren Status (ausgeschaltet, eingeschaltet).
- Ihre Verfügbarkeitszone (AZ).
- Ihr Betriebssystem.
- Die Anzahl der virtuellen CPUs (vCPU).
- Die Menge an virtuellem Speicher (vRAM).

### Aktionen für virtuelle Maschinen

Die folgenden Aktionen sind über diese Oberfläche möglich:

- Aktualisieren der Liste der virtuellen Maschinen.
- Filtern der Liste.
- Suchen einer virtuellen Maschine nach Namen.
- Erstellen einer neuen virtuellen Maschine.

<img src={openIaasVirtualMachinesListActions} />

Wenn Sie auf den grünen Dropdown-Pfeil auf der rechten Seite der Liste für eine virtuelle Maschine klicken, erhalten Sie Zugriff auf alle Informationen darüber.

<img src={openIaasVirtualMachineOverview} />

Eine Schnellzugriffsleiste ermöglicht es Ihnen, die folgenden Aktionen durchzuführen:

<img src={openIaasVirtualMachineActions} />

- Einschalten der virtuellen Maschine.
- Ausschalten der virtuellen Maschine.
- Neustarten der virtuellen Maschine.
- Öffnen der Konsole.
- Mounten einer ISO-Datei.
- Unmounten einer ISO-Datei.
- Konvertieren der virtuellen Maschine in eine Vorlage.
- Verschieben der virtuellen Maschine.
- Umbenennen der virtuellen Maschine.
- Löschen der virtuellen Maschine.

Im Reiter '__Allgemein__' finden Sie detaillierte Informationen zu Ihrer virtuellen Maschine, wie ihren physischen Standort (AZ, Pool, Host), RAM, CPU, IP-Adressen und mehr.

<img src={openIaasVirtualMachineOverviewInformations} />

Ein Reiter '__Erweitert__' ermöglicht es Ihnen, spezifischere Informationen anzuzeigen:

- UUID der virtuellen Maschine
- Gast-Tools
- Gast-Betriebssystem
- DVD-Laufwerk

Sowie bestimmte Optionen zu ändern, wie:

- Startreihenfolge
- Secure Boot
- Automatischer Start (nicht möglich, wenn keine Sicherungsrichtlinie mit der VM verknüpft ist)

<img src={openIaasVirtualMachineAdvancedOverview} />

## Replikation

### Zugriff auf die Replikationsverwaltung

Die Replikationsverwaltungsoberfläche ist in der Shiva-Konsole im Menü __'OpenIaaS'__ > __'Replikation'__ verfügbar, das sich in der grünen Seitenleiste auf der linken Seite des Bildschirms befindet.

<img src={openIaasReplicationMenu} />

### Erstellung einer Replikationsrichtlinie

Im Bereich __'Replikation'__ können Sie Richtlinien erstellen, die die Schutzparameter Ihrer virtuellen Maschinen definieren.

<img src={openIaasReplicationPoliciesView} />

Um eine neue Richtlinie zu erstellen, klicken Sie auf die Schaltfläche __'Richtlinie hinzufügen'__. Ein Formular öffnet sich mit den folgenden Schritten:

#### Schritt 1: Allgemeine Informationen

- __Name__: Geben Sie Ihrer Richtlinie einen aussagekräftigen Namen
- __Häufigkeit__: Wählen Sie das Replikationsintervall (1-59 Minuten oder 1-24 Stunden)

<img src={openIaasReplicationPolicyForm1} />

#### Schritt 2: Speicherauswahl

- __Verfügbarkeitszone__: Wählen Sie die Zielzone aus
- __Pool__: Wählen Sie den Ressourcenpool aus
- __Block Storage__: Wählen Sie den Zielspeicher aus

<img src={openIaasReplicationPolicyForm2} />

#### Schritt 3: Validierung

Überprüfen Sie die Parameter und klicken Sie auf __'Hinzufügen'__, um die Richtlinie zu erstellen.

### Zuordnung einer VM zur Replikation

Um eine virtuelle Maschine zu schützen, greifen Sie auf die Details Ihrer VM über die Liste der virtuellen Maschinen zu.

In der detaillierten Ansicht der VM finden Sie einen Bereich __'Replikation'__:

<img src={openIaasVmReplicationSection} />

Die Schritte zur Zuordnung einer VM zur Replikation:

1. Klicken Sie auf __'Richtlinie konfigurieren'__
2. Wählen Sie die gewünschte Replikationsrichtlinie aus der Dropdown-Liste aus
3. Bestätigen Sie Ihre Auswahl

Die Replikation startet automatisch nach der Validierung.

### Verwaltung von Richtlinien und Replikas

#### Ansicht der Richtlinien

Der Reiter __'Richtlinien'__ ermöglicht es Ihnen, alle Ihre Replikationsrichtlinien zu visualisieren:

<img src={openIaasReplicationPoliciesTable} />

Sie haben Zugriff auf die folgenden Informationen für jede Richtlinie:

- Ihren Namen
- Ihre Replikationshäufigkeit
- Die Ziel-Verfügbarkeitszone
- Den zugeordneten Pool
- Den verwendeten Block Storage

Die verfügbaren Aktionen umfassen:

- Einsehen der Details jeder Richtlinie
- Ändern der Parameter
- Löschen einer nicht verwendeten Richtlinie

#### Ansicht der Replikas

Der Reiter __'Replikas'__ zeigt alle virtuellen Maschinen an, die derzeit repliziert werden:

<img src={openIaasReplicationReplicasTable} />

Sie können visualisieren:

- Den Namen der replizierten virtuellen Maschinen
- Quell- und Zielstandort
- Die zugeordnete Replikationsrichtlinie

Die verfügbaren Aktionen umfassen:

- Export der Daten im CSV-Format
- Einsehen der Replikationsdetails
- Verwaltung der Replikas nach Richtlinie
