---
title: Leitfaden zum Einstieg
---

import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'
import openIaasVmConsoleBtn from './images/open_iaas_vm_console_btn.png'
import openIaasVmConsoleOpen from './images/open_iaas_vm_console_open.png'
import openIaasVmConsoleClipboard from './images/open_iaas_vm_console_clipboard.png'
import openIaasReplicationMenu from './images/open_iaas_replication_menu.png'
import openIaasReplicationPoliciesView from './images/open_iaas_replication_policies_view.png'
import openIaasReplicationPolicyForm1 from './images/open_iaas_replication_policy_form1.png'
import openIaasReplicationPolicyForm2 from './images/open_iaas_replication_policy_form2.png'
import openIaasVmReplicationSection from './images/open_iaas_vm_replication_section.png'
import openIaasReplicationPoliciesTable from './images/open_iaas_replication_policies_table.png'
import openIaasReplicationReplicasTable from './images/open_iaas_replication_replicas_table.png'

### Berechnung

### Management of Virtual Machines

The management interface for your virtual machines is accessible in the Shiva console, under the 'OpenIaaS' option located on the top left toolbar of the screen.

### Liste der virtuellen Maschinen

In der Abschnitt __'Virtuelle Maschinen'__ erhalten Sie Zugriff auf die Liste Ihrer virtuellen Maschinen, die bei Ihrem vertrauenswürdigen Cloud-Anbieter gehostet werden.

<img src={openIaasVirtualMachinesList} />

Für jede virtuelle Maschine stehen Ihnen folgende Informationen zur Verfügung:

- Den Namen der Maschine.
- Deren Status (ausgeschaltet, eingeschaltet).
- Die Verfügungszone (AZ).
- Das Betriebssystem.
- Die Anzahl der virtuellen Prozessoren (vCPU).
- Die Menge der virtuellen Speicher (vRAM).

### Actions sur les machines virtuelles

Les actions suivantes sont disponibles via cette interface :

- Rafraîchir la liste des machines virtuelles.
- Filtrer la liste.
- Rechercher une machine virtuelle par son nom.
- Créer une nouvelle machine virtuelle.

<img src={openIaasVirtualMachinesListActions} />

En cliquant sur le point d'extraction verticale à droite d'une machine virtuelle, vous accédez à toutes les informations détaillées concernant celle-ci.

<img src={openIaasVirtualMachineOverview} />

Un bandeau rapide permet de réaliser les actions suivantes :

<img src={openIaasVirtualMachineActions} />

- Allumer la machine virtuelle.
- Éteindre la machine virtuelle.
- Redémarrer la machine virtuelle.
- Ouvrir la console.
- Monter un ISO.
- Démonter un ISO.
- Convertir la machine virtuelle en template.
- La déplacer.
- La renommer.
- La supprimer.

Dans l'onglet d'information '__Générales__', vous trouvez des informations détaillées relatives à votre machine virtuelle, telles que son emplacement physique (AZ, Pool, Host), la RAM, le CPU, les adresses IP, et autres.

<img src={openIaasVirtualMachineOverviewInformations} />

Un onglet '__Avancé__' permet de consulter des informations plus spécifiques :

- UUID de la machine virtuelle
- Guest tools
- OS invité
- Lecteur DVD

Ainsi que modifier certaines options telles que :

- Ordre de lancement
- Secure boot
- Démarrage automatique (impossible si aucune politique de sauvegarde n'est associée à la VM)

<img src={openIaasVirtualMachineAdvancedOverview} />

### Konsole einer virtuellen Maschine

Die Konsole einer virtuellen Maschine ist über die Liste der virtuellen Maschinen zugänglich, indem Sie auf das Symbol __'Console'__ klicken:

<img src={openIaasVmConsoleBtn} />

Ein neuer Tab öffnet sich in Ihrem Browser und zeigt die Konsole Ihrer Maschine an, basierend auf einem VNC-Client:

<img src={openIaasVmConsoleOpen} />

Im VNC-Menü können Sie:
- Das Senden bestimmter Tasten anfordern,
- Eine Tastaturzuordnung erzwingen (falls Ihre virtuelle Maschine nicht dasselbe Tastaturlayout wie Ihr Webbrowser hat),
- Ein Textfeld öffnen, das an die Maschine übertragen werden kann. Diese Methode ersetzt die alte nicht funktionierende Zwischenablage,
- In den Vollbildmodus wechseln,
- Die Fenstergröße ändern (Skalierung).

#### Unterstützung für Tastaturlayouts
Die in der Konsole eingegebenen Eingaben hängen von der Sprache der Tastatur Ihres Webbrowsers, der Sprache der Tastatur der virtuellen Maschine und davon ab, ob die Option 'Tastatur erzwingen' auf der linken Seite des Bildschirms aktiviert ist oder nicht. Hier ist eine Zusammenfassung der möglichen Situationen :

| Sprache der physischen Tastatur (Eingabe) | Sprache der Tastatur der virtuellen Maschine | Option 'Tastatur erzwingen' ausgewählt | Ergebnis (Ausgabe)        |
| ------------------------------------------ | -------------------------------------------- | -------------------------------------- | ------------------------ |
| Französisch                                | Französisch                                  | Nein                                   | ✅                       |
| Französisch                                | Französisch                                  | Ja                                     | Nicht empfohlen          |
| Französisch                                | Englisch                                     | Nein                                   | Englisch                 |
| Französisch                                | Englisch                                     | Ja                                     | ✅                       |
| Englisch                                   | Französisch                                  | Nein                                   | Französisch              |
| Englisch                                   | Französisch                                  | Ja                                     | ✅                       |
| Englisch                                   | Englisch                                     | Nein                                   | ✅                       |
| Englisch                                   | Englisch                                     | Ja                                     | Nicht empfohlen          |

__Hinweis__:
- Wenn bestimmte Zeichen bei der manuellen Eingabe nicht funktionieren, können Sie es über die Zwischenablage versuchen.

#### Funktionsweise der Zwischenablage
Diese Funktion ermöglicht es Ihnen, eine gesamte Zeichenkette an Ihre virtuelle Maschine zu senden. Es ist wichtig zu beachten, dass die Taste "Tastatur erzwingen" beeinflusst, wie diese Zeichenkette an Ihre virtuelle Maschine übertragen wird. Wenn Sie während der Eingabe in der Konsole feststellen, dass die Option "Tastatur erzwingen" erforderlich ist, denken Sie daran, sie vor der Verwendung der Zwischenablage zu aktivieren.  
Diese Funktion kann verwendet werden, um beispielsweise ein Passwort, einen Befehl oder den Inhalt einer Konfigurationsdatei zu senden:

<img src={openIaasVmConsoleClipboard} />

Durch Klicken auf die Schaltfläche "Einfügen" wird der Inhalt Ihres Textfelds an Ihre virtuelle Maschine gesendet.

### Wiederholung

### Zugrichtung zur Replikationsverwaltung

Die Verwaltungs-Schnittstelle für die Replikation befindet sich in der Shiva-Konsole unter dem Menüpunkt "OpenIaaS" > "Replikation", welcher sich auf der linken oberen Bandeimer befindet.

<img src={openIaasReplicationMenu} />

### Erstellung einer Replikationsrichtlinie

In der Abschnitt __'Replikation'__ können Sie Richtlinien erstellen, die die Parameter der Schutzmaßnahmen für Ihre virtuellen Maschinen definieren.

<img src={openIaasReplicationPoliciesView} />

Um eine neue Richtlinie zu erstellen, klicken Sie auf den Button __'Eine Richtlinie hinzufügen'__. Eine Formularseite öffnet sich mit den folgenden Schritten:

#### Schritt 1: Allgemeine Informationen

- __Name__ : Geben Sie Ihrem Replikationsrichtlinie einen Namen
- __Frequenz__ : Wählen Sie den Replikationintervall (1 bis 59 Minuten oder 1 bis 24 Stunden)

![Formular für die Erstellung einer Replikationsrichtlinie](https://source.unsplash.com/1600x900/?replikationsrichtlinie,formular)

### Schritt 2: Auswahl des Speicherspeichers

- **Verfügungszone**: Wählen Sie die Ziel-Lokalität aus
- **Pool**: Wählen Sie den Ressourcenpool aus
- **Block Storage**: Wählen Sie das Zielspeicherdestination aus

<img src={openIaasReplicationPolicyForm2} />

#### Schritt 3: Validierung

Überprüfen Sie die Parameter und klicken Sie auf __'Hinzufügen'__ zum Erstellen der Politik.

### Association einer VM zur Replikation

Um eine virtuelle Maschine zu schützen, gehen Sie auf die Details Ihrer VM aus der Liste der virtuellen Maschinen.

In der detaillierten Ansicht der VM finden Sie eine Abschnitt __'Replikation'__:

<img src={openIaasVmReplicationSection} />

Die Schritte zur Verknüpfung einer VM mit der Replikation:

1. Klicken Sie auf __'Einstellungen für die Replikationsrichtlinie__'
2. Wählen Sie die gewünschte Replikationsrichtlinie aus der Dropdown-Liste aus
3. Bestätigen Sie Ihre Auswahl

Die Replikation startet automatisch nach der Bestätigung.

### Verwaltung von Richtlinien und Replikate

---

#### Politikoversicht

Der Register "Politik" ermöglicht es Ihnen, alle Replikationsrichtlinien anzuzeigen:

<img src={openIaasReplicationPoliciesTable} />

Für jede Richtlinie stehen Ihnen die folgenden Informationen zur Verfügung:

- Den Namen
- Die Replikationsfrequenz
- Die Zielverfügbarkeitszone
- Der zugehörige Pool
- Das Blockspeicherprodukt, das verwendet wird

Die verfügbaren Aktionen sind:

- Die Details jeder Richtlinie anzeigen
- Die Parameter ändern
- Eine nicht genutzte Richtlinie löschen

#### Ansicht der Replikate

Der Register "Replikate" zeigt alle virtuellen Maschinen, die gerade repliziert werden:

<img src={openIaasReplicationReplicasTable} />

Sie können folgende Informationen anzeigen:

- Den Namen der replizierten virtuellen Maschinen
- Den Standort Quelle und Ziel
- Die mit der Replikation verbundene Politik

Verfügbare Aktionen sind:

- Ausgabe der Daten in CSV-Format
- Anzeige der Replikationsdetails
- Verwaltung der Replikate nach Politik
