---
title: Schnellstartanleitung
---
import openIaasVirtualMachinesList from '@site/docs/iaas_opensource/images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from '@site/docs/iaas_opensource/images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from '@site/docs/iaas_opensource/images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from '@site/docs/iaas_opensource/images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from '@site/docs/iaas_opensource/images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from '@site/docs/iaas_opensource/images/open_iaas_virtual_machine_advanced_overview.png'
import openIaasReplicationMenu from '@site/docs/iaas_opensource/images/open_iaas_replication_menu.png'
import openIaasReplicationPoliciesView from '@site/docs/iaas_opensource/images/open_iaas_replication_policies_view.png'
import openIaasReplicationPolicyForm1 from '@site/docs/iaas_opensource/images/open_iaas_replication_policy_form1.png'
import openIaasReplicationPolicyForm2 from '@site/docs/iaas_opensource/images/open_iaas_replication_policy_form2.png'
import openIaasVmReplicationSection from '@site/docs/iaas_opensource/images/open_iaas_vm_replication_section.png'
import openIaasReplicationPoliciesTable from '@site/docs/iaas_opensource/images/open_iaas_replication_policies_table.png'
import openIaasReplicationReplicasTable from '@site/docs/iaas_opensource/images/open_iaas_replication_replicas_table.png'
import openIaasVmConsoleBtn from '@site/docs/iaas_opensource/images/open_iaas_vm_console_btn.png'
import openIaasVmConsoleOpen from '@site/docs/iaas_opensource/images/open_iaas_vm_console_open.png'
import openIaasVmConsoleClipboard from '@site/docs/iaas_opensource/images/open_iaas_vm_console_clipboard.png'

## Berechnung

### Verwaltung virtueller Maschinen

Die Verwaltungsoberfläche Ihrer virtuellen Maschinen ist in der Konsole im Menü __'OpenIaaS'__ verfügbar, das sich auf der grünen Leiste links auf dem Bildschirm befindet.

### Liste der virtuellen Maschinen

Im Bereich __'Virtuelle Maschinen'__ haben Sie Zugriff auf die Liste Ihrer virtuellen Maschinen, die in Ihrer vertrauenswürdigen Cloud gehostet werden.

<img src={openIaasVirtualMachinesList} />

Für jede virtuelle Maschine stehen Ihnen die folgenden Informationen zur Verfügung:

- Der Name.
- Der Status (ausgeschaltet, eingeschaltet).
- Die Verfügbarkeitszone (AZ).
- Das Betriebssystem.
- Die Anzahl der virtuellen CPUs (vCPU).
- Die Größe des virtuellen Arbeitsspeichers (vRAM).

### Aktionen für virtuelle Maschinen

Die folgenden Aktionen sind über diese Schnittstelle möglich:

- Liste der virtuellen Maschinen aktualisieren.
- Liste filtern.
- Eine virtuelle Maschine nach ihrem Namen suchen.
- Eine neue virtuelle Maschine erstellen.

<img src={openIaasVirtualMachinesListActions} />

Wenn Sie auf den grünen Dropdown-Pfeil rechts der Liste für eine virtuelle Maschine klicken, erhalten Sie Zugriff auf alle Informationen zu dieser Maschine.

<img src={openIaasVirtualMachineOverview} />

Eine Schnellleiste ermöglicht die folgenden Aktionen:

<img src={openIaasVirtualMachineActions} />

- Virtuelle Maschine einschalten.
- Sie ausschalten.
- Sie neu starten.
- Konsole öffnen.
- ISO-Image einbinden.
- ISO-Image aushängen.
- Virtuelle Maschine in eine Vorlage konvertieren.
- Sie verschieben.
- Sie umbenennen.
- Sie löschen.

Im Reiter '__Allgemein__' finden Sie detaillierte Informationen zu Ihrer virtuellen Maschine, wie z. B. den physischen Standort (AZ, Pool, Host), den RAM, den CPU, die IP-Adressen und weitere.

<img src={openIaasVirtualMachineOverviewInformations} />

Ein Reiter '__Erweitert__' ermöglicht den Zugriff auf spezifischere Informationen:

- UUID der virtuellen Maschine
- Guest Tools
- Gast-Betriebssystem
- DVD-Laufwerk

Sowie das Ändern bestimmter Optionen, wie z. B.:

- Die Startreihenfolge
- Secure Boot
- Der automatische Start (nicht möglich, wenn keine Sicherungsrichtlinie mit der VM verknüpft ist)

<img src={openIaasVirtualMachineAdvancedOverview} />

### Konsole einer virtuellen Maschine

Die Konsole einer virtuellen Maschine ist über die Liste der virtuellen Maschinen zugänglich, indem Sie auf das Symbol __'Konsole'__ klicken:

<img src={openIaasVmConsoleBtn} />

Ein neuer Browser-Tab öffnet sich und zeigt die Konsole Ihrer Maschine, die auf einem VNC-Client basiert:

<img src={openIaasVmConsoleOpen} />

Im VNC-Menü ist es möglich:

- bestimmte Tasten zu senden,
- ein Tastaturlayout zu erzwingen (falls Ihre virtuelle Maschine nicht über dasselbe Tastaturlayout wie Ihr Webbrowser verfügt),
- ein Textfeld zu öffnen, das an die Maschine gesendet werden kann. Diese Methode ersetzt den alten, nicht funktionierenden Zwischenablage-Modus,
- in den Vollbildmodus zu wechseln,
- die Fenstergröße zu ändern (Skalierung).

#### Unterstützung von Tastaturlayouts

Die in der Konsole eingegebene Eingabe hängt von der Tastatursprache Ihres Webbrowsers, der Tastatursprache
der virtuellen Maschine sowie der Aktivierung oder Deaktivierung der Option 'enforce keyboard' links auf dem Bildschirm ab.
Nachfolgend eine Übersicht der möglichen Situationen:

| Tastatursprache der physischen Maschine (Eingabe) | Tastatursprache der virtuellen Maschine | Option 'enforce keyboard' ausgewählt | Ergebnis (Ausgabe)        |
| ------------------------------------------------- | ----------------------------------------- | -------------------------------------- | ------------------------ |
| Französisch                                       | Französisch                               | Nein                                   | ✅                       |
| Französisch                                       | Französisch                               | Ja                                     | Nicht empfohlen          |
| Französisch                                       | Englisch                                  | Nein                                   | Englisch                 |
| Französisch                                       | Englisch                                  | Ja                                     | ✅                       |
| Englisch                                          | Französisch                               | Nein                                   | Französisch              |
| Englisch                                          | Französisch                               | Ja                                     | ✅                       |
| Englisch                                          | Englisch                                  | Nein                                   | ✅                       |
| Englisch                                          | Englisch                                  | Ja                                     | Nicht empfohlen          |

__Hinweis__ :

- Falls bestimmte Zeichen bei der manuellen Eingabe nicht übernommen werden, können Sie es über die Zwischenablage versuchen.

#### Funktionsweise der Zwischenablage

Diese Funktion ermöglicht es Ihnen, eine gesamte Zeichenkette an Ihre virtuelle Maschine zu senden. Es ist wichtig zu beachten, dass die Schaltfläche "enforce keyboard" beeinflusst, wie diese Zeichenkette
an Ihre virtuelle Maschine übermittelt wird. Falls Sie bei der Eingabe in der Konsole feststellen, dass die Option "enforce keyboard" erforderlich ist, denken Sie daran, sie vor der Nutzung der Zwischenablage zu aktivieren.  
Diese Funktion kann beispielsweise zum Senden eines Passworts, eines Befehls oder des Inhalts einer Konfigurationsdatei verwendet werden:

<img src={openIaasVmConsoleClipboard} />

Nach einem Klick auf die Schaltfläche "Paste" wird der Inhalt Ihres Textfelds an Ihre virtuelle Maschine gesendet.

## Replikation

### Zugriff auf die Replikationsverwaltung

Die Verwaltungsoberfläche für die Replikation ist in der Konsole im Menü __'OpenIaaS'__ > __'Replikation'__ auf der grünen Leiste links auf dem Bildschirm verfügbar.

<img src={openIaasReplicationMenu} />

### Erstellen einer Replikationsrichtlinie

Im Bereich __'Replikation'__ können Sie Richtlinien erstellen, die die Schutzparameter Ihrer virtuellen Maschinen definieren.

<img src={openIaasReplicationPoliciesView} />

Um eine neue Richtlinie zu erstellen, klicken Sie auf die Schaltfläche __'Richtlinie hinzufügen'__. Es öffnet sich ein Formular mit den folgenden Schritten:

#### Schritt 1: Allgemeine Informationen

- __Name__ : Geben Sie Ihrer Richtlinie einen eindeutigen Namen
- __Häufigkeit__ : Wählen Sie das Replikationsintervall (1–59 Minuten oder 1–24 Stunden)

<img src={openIaasReplicationPolicyForm1} />

#### Schritt 2 : Speicherauswahl

- __Verfügbarkeitszone__ : Wählen Sie die Zielzone aus
- __Pool__ : Wählen Sie den Ressourcenpool aus
- __Block Storage__ : Wählen Sie den Zielspeicher aus

<img src={openIaasReplicationPolicyForm2} />

#### Schritt 3 : Validierung

Überprüfen Sie die Parameter und klicken Sie auf __'Hinzufügen'__, um die Richtlinie zu erstellen.

### Zuordnung einer VM zur Replikation

Um eine virtuelle Maschine zu schützen, rufen Sie die Details Ihrer VM aus der Liste der virtuellen Maschinen auf.

In der Detailansicht der VM finden Sie einen Abschnitt __'Replikation'__ :

<img src={openIaasVmReplicationSection} />

Die Schritte zum Zuordnen einer VM zur Replikation:

1. Klicken Sie auf __'Richtlinie konfigurieren'__
2. Wählen Sie die gewünschte Replikationsrichtlinie aus der Dropdown-Liste aus
3. Bestätigen Sie Ihre Auswahl

Die Replikation startet automatisch nach der Bestätigung.

### Verwaltung von Richtlinien und Replikaten

#### Ansicht der Richtlinien

Der Reiter __'Richtlinien'__ ermöglicht es Ihnen, alle Ihre Replikationsrichtlinien anzuzeigen:

<img src={openIaasReplicationPoliciesTable} />

Für jede Richtlinie stehen Ihnen die folgenden Informationen zur Verfügung:

- Der Name
- Die Replikationshäufigkeit
- Die Ziel-Verfügbarkeitszone
- Der zugeordnete Pool
- Der verwendete Block Storage

Verfügbare Aktionen umfassen:

- Details jeder Richtlinie anzeigen
- Einstellungen bearbeiten
- Nicht genutzte Richtlinien löschen

#### Replikate-Ansicht

Die Registerkarte __'Replikate'__ zeigt alle virtuellen Maschinen an, die gerade repliziert werden:

<img src={openIaasReplicationReplicasTable} />

Sie können einsehen:

- Der Name der replizierten virtuellen Maschinen
- Der Quell- und Zielstandort
- Die zugehörige Replikationsrichtlinie

Verfügbare Aktionen umfassen:

- Export der Daten im CSV-Format
- Anzeigen der Replikationsdetails
- Verwaltung der Replikate nach Richtlinie