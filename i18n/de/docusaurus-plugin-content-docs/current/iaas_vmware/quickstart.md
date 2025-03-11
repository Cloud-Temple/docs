---
title: Guide de démarrage
---
import shivaVmHome from './images/shiva_vm_home.png'
import shivaVmHomeDesc from './images/shiva_vm_home_desc.png'
import shivaVmHomeAlarme from './images/shiva_vm_home_alarme.png'
import shivaVmActions from './images/shiva_vm_actions.png'
import shivaVmInformations from './images/shiva_vm_informations.png'
import shivaVmBandeauRapide from './images/shiva_vm_bandeau_rapide.png'
import shivaVmVueRapide from './images/shiva_vm_vue_rapide.png'
import shivaVmInfosGenerales from './images/shiva_vm_infos_generales.png'
import shivaVmInfosAvancees from './images/shiva_vm_infos_avancees.png'
import shivaEditCpuRam from './images/shiva_edit_cpu_ram.png'
import shivaVmDiskctrl_001 from './images/shiva_vm_diskctrl_001.png'
import shivaCpool_010 from './images/shiva_cpool_010.png'
import shivaCpool_011 from './images/shiva_cpool_011.jpg'
import shivaCatalogs from './images/shiva_catalogs.png'
import shivaCatalogs_002 from './images/shiva_catalogs_002.png'
import shivaVmTemplate_002 from './images/shiva_vm_template_002.png'
import shivaVmTemplate_001 from './images/shiva_vm_template_001.png'
import shivaVmAdv_001 from './images/shiva_vm_adv_001.png'
import shivaVmAdv_002 from './images/shiva_vm_adv_002.png'
import shivaVmAdv_003 from './images/shiva_vm_adv_003.png'
import shivaVmAdv_004 from './images/shiva_vm_adv_004.png'
import shivaCpool_001 from './images/shiva_cpool_001.png'
import shivaEsx_001 from './images/shiva_esx_001.png'
import shivaEsx_002 from './images/shiva_esx_002.png'
import shivaCpool_003 from './images/shiva_cpool_003.png'
import shivaCpool_004 from './images/shiva_cpool_004.png'
import shivaCpool_005 from './images/shiva_cpool_005.png'
import shivaCpool_009 from './images/shiva_cpool_009.png'
import shivaCpool_007 from './images/shiva_cpool_007.jpg'
import shivaCpool_008Build from './images/shiva_cpool_008_build.jpg'
import shivaCpool_008Firm from './images/shiva_cpool_008_firm.png'
import shivaCpool_006 from './images/shiva_cpool_006.png'
import shivaSupport from '../console/images/shiva_support.png'
import shivaVmPolitiquesBackupAssignMandatory from './images/shiva_vm_politiques_backup_assign_mandatory.png'
import shivaVmPolitiquesBackup from './images/shiva_vm_politiques_backup.png'
import shivaVmDisquesVirtuelsPolitiques from './images/shiva_vm_disques_virtuels_politiques.png'
import shivaVmPolitiquesBackupExecute from './images/shiva_vm_politiques_backup_execute.png'
import shivaVmPolitiquesBackupExecute2 from './images/shiva_vm_politiques_backup_execute2.png'
import shivaVmPolitiquesBackupRetirer from './images/shiva_vm_politiques_backup_retirer.png'
import shivaVmPolitiquesBackupRetirerImpossible from './images/shiva_vm_politiques_backup_retirer_impossible.png'
import shivaBackupHeld_001 from './images/shiva_backup_held_001.png'
import shivaBackupHeld_002 from './images/shiva_backup_held_002.png'
import shivaVmBackupRestaurer from './images/shiva_vm_backup_restaurer.png'
import shivaVmBackupTest from './images/shiva_vm_backup_test.png'
import shivaVmBackup_2prod from './images/shiva_vm_backup_2prod.png'


## Berechnung

### Management der Virtuellen Maschinen

Die Verwaltungsoberfläche Ihrer virtuellen Maschinen ist in der Shiva-Konsole im Menü __'IaaS'__ im grünen Balken auf der linken Seite des Bildschirms verfügbar.

### Liste der virtuellen Maschinen

Im Abschnitt __'Virtuelle Maschinen'__ haben Sie Zugriff auf die Liste Ihrer virtuellen Maschinen, die in Ihrer vertrauenswürdigen Cloud gehostet werden.

<img src={shivaVmHome} />

Sie haben Zugriff auf folgende Informationen für jede virtuelle Maschine:
- ihren Namen,
- die zugewiesenen Tags,
- ihren Status (ausgeschaltet, eingeschaltet, in Bearbeitung, Host getrennt oder ungültig),
- ihren Manager (in einer VMware-Umgebung das zugehörige Vcenter),
- ihr Betriebssystem,
- Die Anzahl der virtuellen CPUs (vCPU),
- Die Menge an virtuellem Speicher (vRAM).

### Aktionen auf virtuellen Maschinen

Folgende Aktionen sind von dieser Schnittstelle aus möglich:

- Liste der virtuellen Maschinen aktualisieren;
- Liste im CSV-Format exportieren;
- Liste filtern;
- Virtuelle Maschine nach ihrem Namen suchen;
- Eine neue virtuelle Maschine erstellen.

<img src={shivaVmHomeDesc} />

__Ein Alarmbanner kann oben in der Liste angezeigt werden__: Es zeigt an, dass auf einer oder mehreren Ihrer virtuellen Maschinen kritische Alarme ausgelöst wurden.
Die Schaltfläche __'Ansehen'__ ermöglicht das Abrufen der virtuellen Maschinen, die von dieser Benachrichtigung betroffen sind.

<img src={shivaVmHomeAlarme} />

Wenn Sie auf den grünen Dropdown-Pfeil rechts in der Liste für eine virtuelle Maschine klicken:

<img src={shivaVmActions} />

Erhalten Sie Zugriff auf alle Informationen zu dieser Maschine:

<img src={shivaVmInformations} />

Ein Schnellzugriffsband ermöglicht folgende Aktionen:

<img src={shivaVmBandeauRapide} />

- Die virtuelle Maschine einschalten;
- Sie ausschalten;
- Sie neu starten;
- Die Energieoptionen des Gastbetriebssystems ändern;
- Die Konsole öffnen;
- Eine ISO laden;
- Eine ISO auswerfen;
- Die virtuelle Maschine klonen;
- Sie verschieben (vMotion);
- Sie umbenennen;
- Sie löschen.

Eine Schnellansicht bietet eine Visualisierung des __Speichers__, der __CPU__ und des __RAM__ der virtuellen Maschine.

<img src={shivaVmVueRapide} />

Im Tab __'Allgemeine Informationen'__ finden Sie detaillierte Informationen zu Ihrer virtuellen Maschine, wie z.B. ihr Betriebssystem, ihren physischen Standort (Rechenzentrum, Datenspeicher usw.), den RAM, die CPU, die IP-Adressen, die Protokolle und andere.

<img src={shivaVmInfosGenerales} />

Von dieser Ansicht aus können Sie folgende Aktionen durchführen:

- Das Betriebssystem ändern (die virtuelle Maschine muss ausgeschaltet sein),
- Die Hardwareversion aktualisieren (die virtuelle Maschine muss ausgeschaltet sein),
- RAM oder CPU ändern.

Ein __'Erweitert'__-Tab ermöglicht das Abrufen spezifischerer Informationen wie VMware-Tools-Infos, Hardwareversion, Manager usw.

<img src={shivaVmInfosAvancees} />

### Editieren von RAM oder CPU einer virtuellen Maschine
Gehen Sie zum Tab __'Virtuelle Maschinen'__, zeigen Sie die Details einer virtuellen Maschine an,
wählen Sie den Tab __'Allgemeine Informationen'__ und klicken Sie auf die Schaltfläche zum Editieren der Variable, die geändert werden soll:

<img src={shivaEditCpuRam} />

### Die Betriebsarten der Festplatten

Sie können verschiedene Betriebsarten für Festplatten hinzufügen:
  - __Persistent__: Änderungen werden sofort und dauerhaft auf die virtuelle Festplatte geschrieben. **Dies ist der empfohlene Modus.**
  - __Unabhängig nicht persistent__: Änderungen an der virtuellen Festplatte werden in einem neuen Log aufgezeichnet und beim Ausschalten gelöscht. Nicht von Snapshots betroffen. **Wird nicht von der Sicherung unterstützt.**
  - __Unabhängig persistent__: Änderungen werden sofort und dauerhaft auf die virtuelle Festplatte geschrieben. Nicht von Snapshots betroffen. **Wird nicht von der Sicherung unterstützt.**

### Verwaltung der Festplattencontroller einer virtuellen Maschine

Sie können den Festplattencontrollertyp Ihrer virtuellen Maschine ändern.

<img src={shivaVmDiskctrl_001} />

Virtuelle Maschinen können mit SCSI- und NVME-Controllern ausgestattet werden, mit einem Limit von 4 Controllern pro Typ. Jeder Controller kann bis zu 15 Festplatten verwalten.

Ein SCSI-Controller kann mit unterschiedlichen Subtypen konfiguriert werden: Para Virtual, Bus Logic, LSI Logic oder LSI Logic SAS.

Der Para Virtual-Controller zeichnet sich durch seine erweiterte Kapazität aus. Er kann bis zu 64 Festplatten unterstützen, wenn die Hardwareversion der virtuellen Maschine mit einem ESXi-Version 6.7 oder höher kompatibel ist.

> **Wichtig**: Wenn Sie den Typ eines Para Virtual-Controllers ändern möchten, der mehr als 15 Festplatten besitzt, müssen Sie zunächst die Festplatten von den betroffenen Steckplätzen loslösen.

### Konsole einer virtuellen Maschine

Die Konsole einer virtuellen Maschine ist über die Liste der virtuellen Maschinen zugänglich, indem Sie auf das Symbol __'Konsole'__ klicken:

<img src={shivaCpool_010} />

Ein neuer Tab Ihres Browsers öffnet sich und die Konsole Ihrer Maschine wird angezeigt, basierend auf einem VNC-Client:

<img src={shivaCpool_011} />

Es ist im VNC-Menü möglich:

- spezielle Tasteneingaben zu senden,
- Kopieren/Einfügen aus der Zwischenablage Ihres Betriebssystems durchzuführen,
- in den Vollbildmodus zu wechseln,
- die Fenstergröße zu ändern (Skalierung).

Die Verwaltung der Tastatur mit der Konsole der virtuellen Maschinen funktioniert perfekt in einer vollständig *englischen* Umgebung.

Die in der Konsole durchgeführten Eingaben hängen von der Sprache der Tastatur Ihrer physischen Maschine, der Sprache der Tastatur der virtuellen Maschine und der Aktivierung oder Deaktivierung der Option 'Tastatur erzwingen' auf der linken Seite des Bildschirms ab.
Hier ist eine Zusammenfassung der möglichen Situationen mit der französischen Sprache:

| Sprache der Tastatur der physischen Maschine (Eingabe) | Sprache der Tastatur der virtuellen Maschine | 'Tastatur erzwingen' Option ausgewählt | Ergebnis (Ausgabe)                                  |
| ------------------------------------------------------ | --------------------------------------------- | ------------------------------------ | -------------------------------------------------- |
| Französisch                                             | Französisch                                    | Nein                                  | Nicht empfohlen (Problem mit Sonderzeichen)         |
| Französisch                                             | Französisch                                    | Ja                                    | < und > funktionieren nicht                        |
| Französisch                                             | Englisch                                       | Nein                                  | Nicht empfohlen (Problem mit Sonderzeichen)         |
| Französisch                                             | Englisch                                       | Ja                                    | Englisch                                           |
| Englisch                                           | Französisch                                  | Nein                                    | < und > funktionieren nicht                      |
| Englisch                                           | Französisch                                  | Ja                                    | < und > funktionieren nicht                      |
| Englisch                                           | Englisch                                   | Nein                                    | Englisch                                             |
| Englisch                                           | Englisch                                   | Ja                                    | Englisch                                             |
 
__Hinweis__ :

- Wenn die Kombination __'AltGr'__ und __'@'__ auf der Tastatur nicht funktioniert, aktivieren Sie die Schaltfläche __'enforce key'__ im __'VNC'__ Menü der Konsole und versuchen Sie es erneut.
- Wenn das immer noch nicht funktioniert und das Betriebssystem des physischen PCs __Windows__ ist, stellen Sie die Tastatur des physischen PCs auf englisch um
und versuchen Sie, das @-Zeichen auf die übliche Weise einzugeben __*(azerty: AltGr + 0-Taste oder qwerty: 2-Taste)*.

### Kataloge für virtuelle Maschinen bei Cloud Temple

Cloud Temple stellt Ihnen einen Katalog von `Templates` zur Verfügung, der regelmäßig von unseren Teams erweitert und aktualisiert wird.
Er umfasst aktuell mehrere Dutzend `Templates` und Images, die auf Ihren virtuellen Maschinen installiert werden können.

<img src={shivaCatalogs} />

Um eine ISO/OVF zu veröffentlichen, müssen Sie zur Ansicht __'Catalogue'__ gehen und oben auf der Seite auf die Schaltfläche __'publier des fichiers'__ klicken:

<img src={shivaCatalogs_002} />

Es ist möglich, eine VM in ein Template zu verwandeln und in den Katalog zu exportieren. Wählen Sie dazu eine virtuelle Maschine aus und verwenden Sie die Aktionstaste __'clone'__:

<img src={shivaVmTemplate_002} />

Wählen Sie __'Exporter en vm-template'__:

<img src={shivaVmTemplate_001} />

Geben Sie dann die erforderlichen Informationen ein. Es ist dann möglich, eine neue VM aus dem Template über die Schaltfläche __'Nouvelle machine virtuelle'__ oder von der Seite __'Catalogues'__ zu erstellen. Es ist auch möglich, die VM im OVF-Format zu exportieren.

**Wissenswertes:** Es ist möglich, eine Datei von OVA zu OVF und umgekehrt zu konvertieren.
Die gebräuchlichste Methode ist Vmware Converter, aber es gibt auch eine einfache Methode mit ```tar```

Extraktion der ova-Datei:
```
$ tar -xvf vmName.ova
```

Erstellen einer OVA-Datei aus einer OVF-Datei:
```
$ tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Erweiterte Einstellungen für virtuelle Maschinen: Extra Config

Die Extra Config bietet eine flexible Möglichkeit, Schlüssel=Wert-Paare in die Konfiguration einer virtuellen Maschine aufzunehmen. Die Schlüssel und Werte werden vom System interpretiert, wenn die virtuelle Maschine bereitgestellt wird.

Ab sofort können Sie die Eigenschaften vom Typ __Extra Config__ in den erweiterten Optionen einer virtuellen Maschine selbst ändern:

<img src={shivaVmAdv_001} />

Sie können eine Eigenschaft aus einer Liste von Schlüsseln hinzufügen. Außerdem können Sie den Wert eines von Ihnen selbst hinzugefügten Schlüssels ändern. Bereits vorhandene Schlüssel=Wert-Paare sind nicht änderbar.

Bitte kontaktieren Sie den Support für Anfragen zur Hinzufügung neuer Schlüssel.

<img src={shivaVmAdv_002} />

__Hinweis__ : *Für die Verwendung von GPU durch die virtuelle Maschine muss der Schlüssel 'pciPassthru.use64bitMMIO' aktiviert und die erforderliche Menge an MMIO (Memory-mapped I/O) Speicherplatz über 'pciPassthru.64bitMMIOSizeGB' zugewiesen werden. Es wird dringend empfohlen, die [offizielle Nvidia-Dokumentation](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms) zu konsultieren.*

### Erweiterte Einstellungen für virtuelle Maschinen: vAPP

Sie können auch die Eigenschaften vom Typ __vAPP__ in den erweiterten Optionen einer virtuellen Maschine ändern:

<img src={shivaVmAdv_003} />

Sie können eine Eigenschaft hinzufügen, ändern oder löschen. Vier Arten von Eigenschaften werden angeboten: String, Nummer, Boolean, Passwort:

<img src={shivaVmAdv_004} />

__Hinweis__: *Die virtuelle Maschine muss gestoppt werden, um ihre vAPP-Eigenschaften zu ändern.*

### Steuerung der __'Hypervisoren'__ und __'Cpool'__ (Hypervisor-Cluster)

Die Steuerung Ihrer Hypervisoren erfolgt im Untermenü __'Calcul'__ des Menüs __'IaaS'__, das sich in der grünen Leiste links auf Ihrem Bildschirm befindet.

<img src={shivaCpool_001} />

In diesem Untermenü haben Sie eine Übersicht über:

- Die Software-Stack der Hypervisoren, ihre AZ und ihre Ressourcen,
- Die Backup-Software-Stack.

Im Januar 2024 basieren die verfügbaren Hypervisor-Dienstleistungen auf der qualifizierten Cloud Temple-Infrastruktur auf VMware. Die verwendete Backup-Software ist IBM Spectrum Protect Plus.

### Verwaltung von VMware-Clustern

Um auf die Steuerung der VMware-Cluster zuzugreifen, klicken Sie im Untermenü __'Calcul'__ des Menüs __'IaaS'__:

Standardmäßig listet der erste Tab alle Hypervisoren (alle Cluster kombiniert):

<img src={shivaEsx_001} />

Es ist möglich, die Details eines Hypervisors zu sehen, indem Sie auf dessen Namen klicken:

<img src={shivaEsx_002} />

Es gibt einen Tab für jeden Hypervisor-Cluster, um die Details jedes einzelnen zu konsultieren:

<img src={shivaCpool_003} />

Wenn Sie auf einen Cluster klicken, sehen Sie eine Zusammenfassung seiner Zusammensetzung:

- Die Gesamtrechenleistung in GHz,
- Der gesamte verfügbare Speicher und das verwendete Verhältnis,
- Der gesamte Speicherplatz (alle Typen zusammen) sowie der genutzte Anteil,
- Die Mechanismen für die Automatisierung beim Ausfall einer Recheneinheit (__'Vsphere DRS'__),
- Die Anzahl der virtuellen Maschinen,
- Die Anzahl der Hypervisoren.

<!-- TODO: Add missing page. -->
<!-- Beim Betrachten der Seite eines Clusters sind mehrere Registerkarten verfügbar. Die Registerkarte __'Règles'__ ermöglicht das Festlegen der [Affinitäts-/Anti-Affinitätsregeln](compute.md#gestion-de-laffinité-de-vos-machines-virtuelles) -->

<img src={shivaCpool_004} />

Auf der Registerkarte __'Hosts'__ sehen Sie für jeden Hypervisor:

- Die Nutzung von __CPU__ und __Memory__,
- Die Anzahl der zugewiesenen virtuellen Maschinen,
- Die Verfügbarkeit eines neuen Builds für das Betriebssystem des Hypervisors, falls zutreffend,
- Den Status des Hypervisors (verbunden in Produktion, Wartung, ausgeschaltet, ...),
- Ein Aktionsmenü.

<img src={shivaCpool_005} />

Mehrere Aktionen sind vom Tab __'Hosts'__ aus möglich:

- Neue Hypervisoren über die Schaltfläche __'Ajouter un host'__ bestellen:

<img src={shivaCpool_009} />

- Möglichkeit, den __Detail eines Hypervisors__ zu konsultieren:

<img src={shivaCpool_007} />

- Einen Hypervisor in den __Wartungsmodus__ versetzen oder daraus entfernen,
- Den Hypervisor aktualisieren, falls erforderlich; hierzu __muss er sich unbedingt im Wartungsmodus befinden__. Es gibt zwei Arten von Updates:

1. VMware-Builds (neue Versionen des Hypervisors):

<img src={shivaCpool_008Build} />

2. Die Aktualisierung der Firmware Ihrer Recheneinheit (BIOS und Firmware der Steckkarten):

<img src={shivaCpool_008Firm} />

*__Hinweis__* :

- *Cloud Temple stellt die Builds für die Hypervisoren in regelmäßigen Abständen zur Verfügung.
Es ist wichtig, Ihre Hypervisoren regelmäßig zu aktualisieren, insbesondere um Sicherheitsupdates zu ermöglichen.
Jedoch __aktualisieren wir Ihre Hypervisoren nicht automatisch__. Cloud Temple hat keinen Einblick in Ihre Verfügbarkeitsverpflichtungen.
Deshalb überlassen wir Ihnen die Verwaltung Ihrer Change-Management-Prozesse und die Anwendung neuer Builds zum bestmöglichen Zeitpunkt.*
- *Der Aktualisierungsprozess ist vollständig automatisiert. Sie müssen über mindestens zwei Hypervisoren in Ihrem Cluster verfügen, um eine Aktualisierung ohne Unterbrechung des Dienstes zu ermöglichen.*

<!-- TODO: Add missing page. -->
<!-- - *Es ist erforderlich, über die [entsprechenden Berechtigungen](../console/permissions.md) zu verfügen, um die verschiedenen Aktionen durchzuführen.* -->

Sie sehen auch alle Affinitäts-/Anti-Affinitätsregeln für Ihren Hypervisor-Cluster im Abschnitt __'Règles'__.

### Verwaltung der Affinität Ihrer virtuellen Maschinen

Die __Affinitäts- und Anti-Affinitätsregeln__ ermöglichen die Kontrolle der Platzierung virtueller Maschinen auf Ihren Hypervisoren.
Sie können verwendet werden, um die Ressourcennutzung Ihres __'Cpool'__ zu steuern.
Zum Beispiel können sie helfen, die Arbeitslast zwischen den Servern auszugleichen oder ressourcenintensive Arbeitslasten zu isolieren.
In einem __'Cpool'__ VMware werden diese Regeln oft verwendet, um das Verhalten virtueller Maschinen mit vMotion zu steuern.
vMotion ermöglicht das Verschieben virtueller Maschinen von einem Host auf einen anderen ohne Unterbrechung des Dienstes.

Sie können Regeln konfigurieren, um:

- __Affinitätsregeln__ : Diese Regeln stellen sicher, dass bestimmte virtuelle Maschinen auf demselben physischen Host ausgeführt werden.
Sie werden verwendet, um die Leistung zu verbessern, indem virtuelle Maschinen, die häufig miteinander kommunizieren,
auf demselben Server bleiben, um die Netzwerklatenz zu reduzieren. Affinitätsregeln sind in Szenarien nützlich,
in denen die Leistung kritisch ist, z. B. bei Datenbanken oder Anwendungen, die eine schnelle Kommunikation zwischen den Servern benötigen.

- __Anti-Affinitätsregeln__ : Im Gegensatz dazu stellen diese Regeln sicher, dass bestimmte virtuelle Maschinen nicht auf demselben physischen Host ausgeführt werden.
Sie sind wichtig für die Verfügbarkeit und Resilienz, z. B.
um zu verhindern, dass kritische Maschinen bei einem Ausfall eines einzelnen Servers alle betroffen sind.
Anti-Affinitätsregeln sind entscheidend für Anwendungen, die eine hohe Verfügbarkeit erfordern,
wie in Produktionsumgebungen, in denen Fehlertoleranz Priorität hat.

Par exemple, vous ne souhaitez pas que vos deux Actives Directory soient sur le même hyperviseur.

Lors de la création d'une règle, vous définissez le type de règle (affinité / anti-affinité), le nom de la règle,
son état d'activation (__'Statut'__) et les machines concernées de votre cluster d'hyperviseurs.

<img src={shivaCpool_006} />

*Remarque : les règles affinité/aint-affinité proposées dans la console sont des règles concernant les machines virtuelles entre elles (pas de règles entre hyperviseurs et machines virtuelles).*

## Sicherung

### Eine Sicherungsrichtlinie erstellen

Um eine neue Sicherungsrichtlinie hinzuzufügen, müssen Sie eine Anfrage beim Support stellen. Der Support ist über das Rettungsring-Symbol oben rechts im Fenster erreichbar.

Die Erstellung einer neuen Sicherungsrichtlinie erfolgt durch __einen Serviceantrag__, der folgendes angibt:

    Der Name Ihrer Organisation
    Name eines Kontakts mit E-Mail und Telefonnummer zur finalen Konfiguration
    Der Name des Tenants
    Der Name der Sicherungsrichtlinie
    Die Merkmale (x Tage, y Wochen, z Monate, ...)

<img src={shivaSupport} />

### Eine Sicherungsrichtlinie einer virtuellen Maschine zuweisen

Wenn eine SLA einer virtuellen Maschine (VM) zugewiesen wird, erben alle mit dieser VM verbundenen Festplatten automatisch die gleiche SLA. Anschließend ist es möglich, die Ausführung der Sicherung manuell über die Registerkarte "Sicherungsrichtlinien" zu starten. In Ermangelung eines manuellen Starts wird die Sicherung gemäß dem von der SLA festgelegten Plan automatisch ausgeführt.

SecNumCloud macht die Zuweisung einer Sicherungsrichtlinie an eine virtuelle Maschine vor deren Start obligatorisch. Andernfalls erhalten Sie die folgende Benachrichtigung:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Klicken Sie auf die Registerkarte __'Sicherungsrichtlinien'__ im Menü Ihrer virtuellen Maschine. Hier können Sie die der VM zugewiesenen Sicherungsrichtlinien anzeigen.

Um eine neue Sicherungsrichtlinie der virtuellen Maschine zuzuweisen, klicken Sie auf den Button __'Richtlinie hinzufügen'__ und wählen Sie die gewünschte Sicherungsrichtlinie aus.

<img src={shivaVmPolitiquesBackup} />

### Eine Sicherungsrichtlinie einer virtuellen Festplatte zuweisen

Es ist auch möglich, einer spezifischen virtuellen Festplatte einer Maschine direkt eine SLA zuzuweisen. In diesem Fall erbt die virtuelle Maschine nicht die individuell auf die Festplatte angewandte SLA. Es ist jedoch nicht möglich, die Ausführung der Sicherung auf Festplattenebene manuell zu starten, da diese Funktion in Spectrum Protect Plus nicht unterstützt wird.

Es ist jedoch möglich, bestimmte Festplatten von einer oder mehreren Sicherungsrichtlinien (SLA) der VM auszuschließen, wodurch eine oder mehrere SLA(s) auf Basis der Festplatte abgewiesen werden können. Dieser Ansatz bietet die Flexibilität, die Ausführung einer SLA-Sicherung manuell zu starten, ohne alle Festplatten der virtuellen Maschine zu beeinflussen, und ermöglicht so eine feinere Verwaltung der Sicherungen.

Klicken Sie auf die Aktionsleiste der Festplatte, der Sie eine Sicherungsrichtlinie zuweisen möchten. Klicken Sie dann auf __'Richtlinien'__ und wählen Sie die gewünschte Sicherungsrichtlinie aus.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Nota*: Die hinzuzufügende Richtlinie muss sich in einer anderen Verfügbarkeitszone als die virtuelle Maschine befinden.

### Eine Sicherungsrichtlinie ausführen

Im Menü __'Sicherungsrichtlinien'__ Ihrer virtuellen Maschine klicken Sie auf den Button __'Ausführen'__ in der Spalte __'Aktionen'__ der Sicherungsrichtlinie, die Sie ausführen möchten.

<img src={shivaVmPolitiquesBackupExecute} />

Um eine Sicherungsrichtlinie auszuführen, können Sie auch von der Sektion __'Sicherungen'__ im Menü Ihrer virtuellen Maschine aus starten. Klicken Sie auf den Button __'Sicherung ausführen'__, und wählen Sie dann die Sicherung, die Sie ausführen möchten, aus der Dropdown-Liste aus.

<img src={shivaVmPolitiquesBackupExecute2} />

### Eine Sicherungsrichtlinie entfernen

Im Menü __'Sicherungsrichtlinien'__ Ihrer virtuellen Maschine klicken Sie auf den Button __'Entfernen'__ in der Spalte __'Aktionen'__ der Sicherungsrichtlinie, die Sie entfernen möchten.

<img src={shivaVmPolitiquesBackupRetirer} />

__Achtung, es ist nicht möglich, die letzte SLA auf einer eingeschalteten virtuellen Maschine zu entfernen:__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Löschen einer Sicherungsrichtlinie: Fall einer "gehaltenen" ("held") Sicherungsrichtlinie

Wenn die letzte Ressource von einer SLA-Richtlinie getrennt wird, erkennt das System diese Situation automatisch. Infolgedessen wechseln alle mit dieser SLA-Richtlinie verbundenen Arbeiten automatisch in den Status "Suspendiert" ("Held"). Es ist wichtig zu beachten, dass zu diesem Zeitpunkt das direkte Löschen der SLA-Richtlinie aufgrund bestehender abhängiger Arbeiten nicht möglich ist. Um die Richtlinie zu löschen, muss eine Reihe von Schritten befolgt werden.

Hierbei ist zu überprüfen, dass die betreffenden Arbeiten tatsächlich im Zustand "Suspendiert" sind. Nach dieser Überprüfung können diese Arbeiten gelöscht werden. Erst nach dem Löschen dieser abhängigen Arbeiten kann die SLA-Richtlinie endgültig aus dem System gelöscht werden.

Ein besonderer Fall verdient besondere Aufmerksamkeit: das Hinzufügen einer neuen Ressource zu einer SLA-Richtlinie, deren abhängige Arbeiten nicht gelöscht wurden. In dieser Situation werden die Identifikatoren der Arbeiten beibehalten. Es ist jedoch wichtig zu beachten, dass die Arbeiten im Zustand "Suspendiert" nicht automatisch fortgesetzt werden. Ein manuelles Eingreifen ist erforderlich, um sie zu reaktivieren und ihre Ausführung zu ermöglichen.

Hinweis: Für weitere Informationen zu dieser Situation wenden Sie sich an den Cloud Temple Support.

Die Cloud Temple-Konsole verhindert die Zuweisung einer virtuellen Maschine an eine suspendierte Richtlinie:

<img src={shivaBackupHeld_001} />

Ebenso ist es nicht möglich, eine virtuelle Maschine zu starten, die einer suspendierten Sicherungsrichtlinie zugeordnet ist:

<img src={shivaBackupHeld_002} />

### Eine Sicherung wiederherstellen

Die Registerkarte __'Sicherungen'__ im Menü Ihrer virtuellen Maschinen ermöglicht Ihnen den Zugriff auf die Liste der Sicherungen dieser Maschine.
Um eine Sicherung wiederherzustellen, klicken Sie auf den Button __'Wiederherstellen'__ in der Zeile der Sicherung, die Sie wiederherstellen möchten.

<img src={shivaVmBackupRestaurer} />

1. __Produktionsmodus__: Der Produktionsmodus ermöglicht die Wiederaufnahme nach einem Vorfall vor Ort aus dem Primärspeicher oder einem entfernten Wiederaufnahmeort, indem die Originalmaschinenbilder durch Wiederherstellungsbilder ersetzt werden. Alle Konfigurationen werden im Zuge der Wiederherstellung übertragen, einschließlich Namen und Identifikatoren, und alle mit der virtuellen Maschine verbundenen Datenkopierarbeiten werden weiterhin ausgeführt. Im Rahmen einer Wiederherstellung im Produktionsmodus können Sie wählen, den Speicher in der virtuellen Maschine durch eine virtuelle Festplatte aus einer früheren virtuellen Maschinensicherung zu ersetzen.

2. __Testmodus__: Der Testmodus erstellt temporäre virtuelle Maschinen für Entwicklung, Test, Snapshot-Überprüfung und Wiederherstellungsverifizierung auf der Grundlage eines wiederholbaren Schedules, ohne die Produktionsumgebungen zu beeinträchtigen. Die Testmaschinen laufen so lange wie nötig, um den Test und die Verifizierung durchzuführen, und werden dann bereinigt. Über ein isoliertes Netzwerk können Sie eine sichere Umgebung schaffen, um Ihre Arbeiten zu testen, ohne die für die Produktion verwendeten virtuellen Maschinen zu stören. Die im Testmodus erstellten virtuellen Maschinen haben eindeutige Namen und Kennungen, um Konflikte in Ihrer Produktionsumgebung zu vermeiden.

3. __Klonmodus__: Der Klonmodus erstellt Kopien der virtuellen Maschinen für Anwendungsfälle, die dauerhafte oder langfristig laufende Kopien für die Datenexploration oder die Duplizierung einer Testumgebung in einem isolierten Netzwerk erfordern. Die im Klonmodus erstellten virtuellen Maschinen haben eindeutige Namen und Kennungen, um Konflikte in Ihrer Produktionsumgebung zu vermeiden. Im Klonmodus müssen Sie auf den Ressourcenverbrauch achten, da der Klonmodus dauerhafte oder langfristige Maschinen erstellt.

__Die Wiederherstellung erfolgt standardmäßig im "TEST"-Modus, um die Produktion zu schonen__, und Sie können den Namen der wiederhergestellten VM wählen:

<img src={shivaVmBackupTest} />

Beachten Sie, dass es möglich ist, eine virtuelle Maschine vom Testmodus in den Produktionsmodus zu überführen, wenn die Tests zufriedenstellend sind:

<img src={shivaVmBackup_2prod} />