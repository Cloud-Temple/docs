---
title: Erste Schritte
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

### Verwaltung virtueller Maschinen

Die Verwaltungsoberfläche für Ihre virtuellen Maschinen ist in der Shiva-Konsole im Menü __'IaaS'__ verfügbar, das sich in der grünen Seitenleiste auf der linken Seite des Bildschirms befindet.

### Liste der virtuellen Maschinen

Im Bereich __'Virtuelle Maschinen'__ haben Sie Zugriff auf die Liste Ihrer virtuellen Maschinen, die auf Ihrer vertrauenswürdigen Cloud gehostet werden.

<img src={shivaVmHome} />

Sie haben Zugriff auf die folgenden Informationen für jede virtuelle Maschine:

- Ihren Namen,
- Die ihr zugewiesenen Tags,
- Ihren Status (ausgeschaltet, eingeschaltet, in Bearbeitung, Host getrennt oder ungültig),
- Ihren Manager (in VMware-Umgebung, das zugehörige Vcenter),
- Ihr Betriebssystem,
- Die Anzahl der virtuellen CPUs (vCPU),
- Die Menge an virtuellem Speicher (vRAM).

### Aktionen für virtuelle Maschinen

Die folgenden Aktionen sind über diese Oberfläche möglich:

- Aktualisieren der Liste der virtuellen Maschinen;
- Exportieren der Liste im CSV-Format;
- Filtern der Liste;
- Suchen einer virtuellen Maschine nach ihrem Namen;
- Erstellen einer neuen virtuellen Maschine.

<img src={shivaVmHomeDesc} />

__Ein Alarmbanner kann oben in der Liste angezeigt werden__: Es zeigt an, dass kritische Alarme für eine oder mehrere Ihrer virtuellen Maschinen ausgelöst wurden.
Mit der Schaltfläche __'Anzeigen'__ können Sie die virtuellen Maschinen sehen, die von dieser Benachrichtigung betroffen sind.

<img src={shivaVmHomeAlarme} />

Wenn Sie auf den grünen Dropdown-Pfeil auf der rechten Seite der Liste für eine virtuelle Maschine klicken:

<img src={shivaVmActions} />

Erhalten Sie Zugriff auf alle Informationen darüber:

<img src={shivaVmInformations} />

Eine Schnellzugriffsleiste ermöglicht die folgenden Aktionen:

<img src={shivaVmBandeauRapide} />

- Einschalten der virtuellen Maschine;
- Ausschalten;
- Neustarten;
- Ändern der Stromversorgungsoptionen des Gast-Betriebssystems;
- Öffnen der Konsole;
- Mounten einer ISO;
- Unmounten einer ISO;
- Klonen der virtuellen Maschine;
- Verschieben (vMotion);
- Umbenennen;
- Löschen.

Eine Schnellansicht bietet eine Visualisierung des __Speichers__, der __CPU__ und des __RAM__ der virtuellen Maschine.

<img src={shivaVmVueRapide} />

Im Tab __'Allgemeine Informationen'__ finden Sie detaillierte Informationen zu Ihrer virtuellen Maschine, wie z.B. ihr Betriebssystem, ihren physischen Standort (Rechenzentrum, Datastore usw.), RAM, CPU, IP-Adressen, Logs und mehr.

<img src={shivaVmInfosGenerales} />

Von dieser Ansicht aus können Sie die folgenden Aktionen durchführen:

- Ändern des Betriebssystems (die virtuelle Maschine muss ausgeschaltet sein),
- Aktualisieren der Hardware-Version (die virtuelle Maschine muss ausgeschaltet sein),
- Ändern des RAM oder der CPU.

Ein Tab __'Erweitert'__ ermöglicht es Ihnen, spezifischere Informationen wie "VMware Tools"-Infos, Hardware-Version, Manager usw. anzuzeigen.

<img src={shivaVmInfosAvancees} />

### Bearbeiten des RAM oder der CPU einer virtuellen Maschine

Gehen Sie zum Tab __'Virtuelle Maschinen'__, zeigen Sie die Details einer virtuellen Maschine an,
wählen Sie den Tab __'Allgemeine Informationen'__ und klicken Sie auf die Bearbeitungsschaltfläche der zu ändernden Variable:

<img src={shivaEditCpuRam} />

### Festplattenmodi

Sie können verschiedene Festplattenmodi hinzufügen:

- __Persistent__: Änderungen werden sofort und dauerhaft auf die virtuelle Festplatte geschrieben. __Dies ist der empfohlene Modus.__
- __Unabhängig nicht-persistent__: Änderungen an der virtuellen Festplatte werden in einem neuen Log protokolliert und beim Ausschalten gelöscht. Nicht von Snapshots betroffen. __Wird vom Backup nicht unterstützt.__
- __Unabhängig persistent__: Änderungen werden sofort und dauerhaft auf die virtuelle Festplatte geschrieben. Nicht von Snapshots betroffen. __Wird vom Backup nicht unterstützt.__

### Verwaltung von Controllern virtueller Maschinen

Sie können den Festplatten-Controller-Typ für Ihre virtuelle Maschine ändern.

<img src={shivaVmDiskctrl_001} />

Virtuelle Maschinen können mit SCSI- und NVME-Controllern ausgestattet werden, mit einer Begrenzung von 4 Controllern jedes Typs. Jeder Controller kann bis zu 15 Festplatten verwalten.

Ein SCSI-Controller kann mit verschiedenen Untertypen konfiguriert werden: Para Virtual, Bus Logic, LSI Logic oder LSI Logic SAS.

Der Para Virtual-Controller zeichnet sich durch seine erweiterte Kapazität aus. Er kann bis zu 64 Festplatten unterstützen, wenn die Hardware-Version der virtuellen Maschine mit einer ESXi-Version 6.7 oder höher kompatibel ist.

> __Wichtig__: Wenn Sie den Typ eines Para Virtual-Controllers ändern möchten, der mehr als 15 Festplatten hat, müssen Sie zuerst die Festplatten an den betroffenen Slots trennen.

### Konsole einer virtuellen Maschine

Die Konsole einer virtuellen Maschine ist über die Liste der virtuellen Maschinen zugänglich, indem Sie auf das Symbol __'Konsole'__ klicken:

<img src={shivaCpool_010} />

Ein neuer Tab in Ihrem Browser öffnet sich und zeigt die Konsole Ihrer Maschine an, basierend auf einem VNC-Client:

<img src={shivaCpool_011} />

Im VNC-Menü ist es möglich:

- Das Senden einer bestimmten Taste anzufordern,
- Kopieren/Einfügen aus der Zwischenablage Ihres Betriebssystems durchzuführen,
- In den Vollbildmodus zu wechseln,
- Die Fenstergröße zu ändern (Skalierung).

Die Tastaturverwaltung mit der Konsole der virtuellen Maschinen funktioniert perfekt in einer vollständig *englischen* Umgebung.

Die in der Konsole getätigte Eingabe hängt von der Sprache der Tastatur Ihrer physischen Maschine, der Sprache der Tastatur
der virtuellen Maschine und davon ab, ob die Option 'enforce keyboard' auf der linken Seite des Bildschirms aktiviert ist oder nicht.
Hier ist eine Zusammenfassung der möglichen Situationen mit der französischen Sprache:

| Tastatursprache der physischen Maschine (Eingabe) | Tastatursprache der virtuellen Maschine | Option 'enforce keyboard' ausgewählt | Ergebnis (Ausgabe)                                   |
| ------------------------------------------------- | --------------------------------------- | ------------------------------------ | ---------------------------------------------------- |
| Französisch                                       | Französisch                             | Nein                                 | Nicht empfohlen (Problem mit Sonderzeichen)          |
| Französisch                                       | Französisch                             | Ja                                   | < und > funktionieren nicht                          |
| Französisch                                       | Englisch                                | Nein                                 | Nicht empfohlen (Problem mit Sonderzeichen)          |
| Französisch                                       | Englisch                                | Ja                                   | Englisch                                             |
| Englisch                                          | Französisch                             | Nein                                 | < und > funktionieren nicht                          |
| Englisch                                          | Französisch                             | Ja                                   | < und > funktionieren nicht                          |
| Englisch                                          | Englisch                                | Nein                                 | Englisch                                             |
| Englisch                                          | Englisch                                | Ja                                   | Englisch                                             |

__Hinweis__:

- Wenn die Kombination __'AltGr'__ und __'@'__ auf der Tastatur nicht funktioniert, aktivieren Sie die Schaltfläche __'enforce key'__ im Menü __'VNC'__ der Konsole und versuchen Sie es erneut.
- Wenn es immer noch nicht funktioniert und das Betriebssystem der physischen Maschine __Windows ist, stellen Sie die Tastatur der physischen Maschine auf Englisch
und versuchen Sie, das @ auf klassische Weise einzugeben__ *(Azerty-Ausgabe: AltGr + 0-Taste oder Qwerty-Ausgabe: 2-Taste)*.

### Cloud Temple Kataloge für virtuelle Maschinen

Cloud Temple stellt Ihnen einen Katalog von `Templates` zur Verfügung, der regelmäßig von unseren Teams erweitert und aktualisiert wird.
Er umfasst derzeit mehrere Dutzend `Templates` und Images, die auf Ihren virtuellen Maschinen montiert werden können.

<img src={shivaCatalogs} />

Um eine ISO/OVF zu veröffentlichen, gehen Sie zur Ansicht __'Katalog'__ und klicken Sie auf die Schaltfläche __'Dateien veröffentlichen'__ oben auf der Seite:

<img src={shivaCatalogs_002} />

Es ist möglich, eine VM in eine Vorlage umzuwandeln und sie in den Katalog zu exportieren. Wählen Sie dazu eine virtuelle Maschine aus und verwenden Sie die Aktionsschaltfläche __'Klonen'__:

<img src={shivaVmTemplate_002} />

Wählen Sie __'Als vm-template exportieren'__:

<img src={shivaVmTemplate_001} />

Füllen Sie dann die erforderlichen Informationen aus. Es wird dann möglich sein, eine neue VM aus der Vorlage mit der Schaltfläche __'Neue virtuelle Maschine'__ oder von der Seite __'Kataloge'__ aus zu deployen. Es ist auch möglich, die VM im OVF-Format zu exportieren.

__Gut zu wissen__: Es ist möglich, eine OVA-Datei in OVF und umgekehrt zu konvertieren.
Die am häufigsten verwendete Methode ist VMware Converter, aber es gibt auch eine einfache Methode mit ```tar```

Extrahieren der ova-Datei:

```
tar -xvf vmName.ova
```

Erstellen einer OVA-Datei aus einer OVF-Datei:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Erweiterte Einstellungen für virtuelle Maschinen: Extra Config

Extra Config bietet eine flexible Möglichkeit, Schlüssel=Wert-Paare in die Konfiguration einer virtuellen Maschine einzubeziehen. Die Schlüssel und Werte werden vom System interpretiert, wenn die virtuelle Maschine bereitgestellt wird.

Jetzt können Sie selbst Eigenschaften vom Typ __Extra Config__ in den erweiterten Optionen einer virtuellen Maschine ändern:

<img src={shivaVmAdv_001} />

Sie können eine Eigenschaft aus einer Liste von Schlüsseln hinzufügen. Darüber hinaus können Sie den Wert eines Schlüssels ändern, den Sie selbst hinzugefügt haben. Bestehende Schlüssel=Wert-Paare sind nicht änderbar.

Bitte kontaktieren Sie den Support für jede Anfrage zum Hinzufügen neuer Schlüssel.

<img src={shivaVmAdv_002} />

__Hinweis__: *Für die Verwendung von GPU durch die virtuelle Maschine ist es obligatorisch, den Schlüssel 'pciPassthru.use64bitMMIO' zu aktivieren und den notwendigen MMIO-Speicherplatz (Memory-mapped I/O) über 'pciPassthru.64bitMMIOSizeGB' zuzuweisen. Es wird dringend empfohlen, sich auf die [offizielle Nvidia-Dokumentation](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms) zu beziehen.*

### Erweiterte Einstellungen für virtuelle Maschinen: vAPP

Sie können auch Eigenschaften vom Typ __vAPP__ in den erweiterten Optionen einer virtuellen Maschine ändern:

<img src={shivaVmAdv_003} />

Sie können eine Eigenschaft hinzufügen, sie ändern oder löschen. Es werden vier Arten von Eigenschaften angeboten: String, Zahl, Boolean, Passwort:

<img src={shivaVmAdv_004} />

__Hinweis__: *Die virtuelle Maschine muss gestoppt sein, um ihre vAPP-Eigenschaften zu ändern.*

### Verwaltung von __'Hypervisoren'__ und __'Cpool'__ (Hypervisor-Clustern)

Die Verwaltung Ihrer Hypervisoren erfolgt im Untermenü __'Berechnung'__ des Menüs __'IaaS'__, das sich in der grünen Seitenleiste auf der linken Seite Ihres Bildschirms befindet.

<img src={shivaCpool_001} />

In diesem Untermenü haben Sie eine Ansicht von:

- Dem Hypervisor-Software-Stack, ihren AZ und ihren Ressourcen,
- Dem Backup-Software-Stack.

Im Januar 2024 basiert das auf der qualifizierten Cloud Temple-Infrastruktur verfügbare Hypervisor-Angebot auf VMware. Die verwendete Backup-Software ist IBM Spectrum Protect Plus.

### Verwaltung von VMware-Clustern

Um auf die Verwaltung von VMware-Clustern zuzugreifen, klicken Sie im Untermenü __'Berechnung'__ des Menüs __'IaaS'__:

Standardmäßig listet der erste Tab alle Hypervisoren auf (über alle Cluster hinweg):

<img src={shivaEsx_001} />

Es ist möglich, die Details eines Hypervisors anzuzeigen, indem Sie auf seinen Namen klicken:

<img src={shivaEsx_002} />

Es gibt einen Tab für jeden Hypervisor-Cluster, um die Details jedes einzelnen anzuzeigen:

<img src={shivaCpool_003} />

Wenn Sie auf einen Cluster klicken, sehen Sie eine Zusammenfassung seiner Zusammensetzung:

- Die gesamte Rechenleistung, ausgedrückt in GHz,
- Der gesamte verfügbare Speicher und das verwendete Verhältnis,
- Der gesamte Speicherplatz (alle Typen zusammen) sowie der verwendete Anteil,
- Die Automatisierungsmechanismen für die Nichtverfügbarkeit einer Rechenklinge (__'Vsphere DRS'__),
- Die Anzahl der virtuellen Maschinen,
- Die Anzahl der Hypervisoren.

<!-- TODO: Add missing page. -->
<!-- Beim Betrachten einer Cluster-Seite sind mehrere Tabs verfügbar. Der Tab __'Regeln'__ ermöglicht es Ihnen, [Affinitäts-/Anti-Affinitätsregeln](compute.md#verwaltung-der-affinität-ihrer-virtuellen-maschinen) zu definieren -->

<img src={shivaCpool_004} />

Sie sehen für jeden Hypervisor im Tab __'Hosts'__:

- Die __CPU__- und __Speicher__-Nutzung,
- Die Anzahl der zugewiesenen virtuellen Maschinen,
- Die Verfügbarkeit eines neuen Builds für das Betriebssystem des Hypervisors, falls zutreffend,
- Den Status des Hypervisors (in Produktion verbunden, in Wartung, ausgeschaltet, ...),
- Ein Aktionsmenü.

<img src={shivaCpool_005} />

Mehrere Aktionen sind vom Tab __'Hosts'__ aus möglich:

- Bestellen neuer Hypervisoren über die Schaltfläche __'Host hinzufügen'__:

<img src={shivaCpool_009} />

- Möglichkeit, __die Details eines Hypervisors__ anzuzeigen:

<img src={shivaCpool_007} />

- Einen Hypervisor in den __Wartungszustand__ zu versetzen oder aus diesem herauszunehmen,
- Den Hypervisor gegebenenfalls __zu aktualisieren__; dazu __muss er unbedingt in Wartung sein__. Es gibt zwei Arten von Updates:

1. VMware-Builds (neue Versionen des Hypervisors):

<img src={shivaCpool_008Build} />

2. Aktualisierung der Firmware Ihrer Rechenklinge (BIOS und Tochterkarten-Firmware):

<img src={shivaCpool_008Firm} />

*__Hinweis__*:

- *Cloud Temple stellt in regelmäßigen Abständen Builds für Hypervisoren zur Verfügung.
Es ist wichtig, Ihre Hypervisoren regelmäßig zu aktualisieren, insbesondere um die Anwendung von Sicherheitspatches zu ermöglichen.
Jedoch __aktualisieren wir Ihre Hypervisoren nicht selbst__. Cloud Temple hat keine Einsicht in die Verfügbarkeitszusagen Ihrer Workloads.
Wir überlassen es Ihnen daher, Ihr Change Management zu implementieren und die neuen Builds zum besten Zeitpunkt anzuwenden.*
- *Der Aktualisierungsprozess ist vollständig automatisiert. Sie müssen mindestens zwei Hypervisoren in Ihrem Cluster haben, um eine Aktualisierung ohne Serviceunterbrechung zu ermöglichen.*

<!-- TODO: Add missing page. -->
<!-- - *Es ist notwendig, [die entsprechenden Berechtigungen](../console/permissions.md) zu haben, um die verschiedenen Aktionen durchzuführen.* -->

Sie sehen auch alle Affinitäts-/Anti-Affinitätsregeln für Ihren Hypervisor-Cluster im Bereich __'Regeln'__.

### Verwaltung der Affinität Ihrer virtuellen Maschinen

__Affinitäts- und Anti-Affinitätsregeln__ ermöglichen es Ihnen, die Platzierung virtueller Maschinen auf Ihren Hypervisoren zu kontrollieren.
Sie können verwendet werden, um die Ressourcennutzung Ihres __'Cpool'__ zu verwalten.
Zum Beispiel können sie helfen, die Arbeitslast zwischen Servern auszugleichen oder ressourcenintensive Arbeitslasten zu isolieren.
In einem VMware __'Cpool'__ werden diese Regeln oft verwendet, um das Verhalten virtueller Maschinen mit vMotion zu steuern.
vMotion ermöglicht das Verschieben virtueller Maschinen von einem Host zu einem anderen ohne Serviceunterbrechung.

Sie können über die Regelverwaltung konfigurieren:

- __Affinitätsregeln__: Diese Regeln stellen sicher, dass bestimmte virtuelle Maschinen auf demselben physischen Host ausgeführt werden.
Sie werden verwendet, um die Leistung zu verbessern, indem virtuelle Maschinen, die häufig kommunizieren,
zusammen auf demselben Server gehalten werden, um die Netzwerklatenz zu reduzieren. Affinitätsregeln sind nützlich in Szenarien,
in denen die Leistung kritisch ist, wie im Fall von Datenbanken oder Anwendungen, die eine schnelle Kommunikation zwischen Servern erfordern.

- __Anti-Affinitätsregeln__: Umgekehrt stellen diese Regeln sicher, dass bestimmte virtuelle Maschinen nicht
auf demselben physischen Host ausgeführt werden. Sie sind wichtig für die Verfügbarkeit und Resilienz, zum Beispiel,
um zu verhindern, dass kritische Maschinen alle von einem einzelnen Serverausfall betroffen sind.
Anti-Affinitätsregeln sind entscheidend für Anwendungen, die eine hohe Verfügbarkeit erfordern,
wie in Produktionsumgebungen, in denen Fehlertoleranz eine Priorität ist.
Zum Beispiel möchten Sie nicht, dass Ihre beiden Active Directory-Server auf demselben Hypervisor sind.

Bei der Erstellung einer Regel definieren Sie den Regeltyp (Affinität / Anti-Affinität), den Namen der Regel,
ihren Aktivierungsstatus (__'Status'__) und die betroffenen Maschinen Ihres Hypervisor-Clusters.

<img src={shivaCpool_006} />

*Hinweis: Die in der Konsole angebotenen Affinitäts-/Anti-Affinitätsregeln sind Regeln, die virtuelle Maschinen untereinander betreffen (keine Regeln zwischen Hypervisoren und virtuellen Maschinen).*

## Backup

### Erstellen einer Backup-Richtlinie

Um eine neue Backup-Richtlinie hinzuzufügen, müssen Sie eine Anfrage an den Support stellen. Der Support ist über das Rettungsring-Symbol oben rechts im Fenster zugänglich.

Die Erstellung einer neuen Backup-Richtlinie erfolgt durch __eine Serviceanfrage__ mit Angabe von:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit seiner E-Mail und Telefonnummer zur Finalisierung der Konfiguration
    Der Name des Tenants
    Der Name der Backup-Richtlinie
    Die Eigenschaften (x Tage, y Wochen, z Monate, ...)

<img src={shivaSupport} />

### Zuweisen einer Backup-Richtlinie zu einer virtuellen Maschine

Wenn einer virtuellen Maschine (VM) ein SLA zugewiesen wird, erben alle mit dieser VM verbundenen Festplatten automatisch dasselbe SLA. Anschließend ist es möglich, die Ausführung des Backups manuell über den Tab "Backup-Richtlinien" zu starten. Ohne manuellen Start wird das Backup automatisch gemäß dem vom SLA konfigurierten Zeitplan ausgeführt.

SecNumCloud macht es obligatorisch, einer virtuellen Maschine vor ihrem Start eine Backup-Richtlinie zuzuweisen. Andernfalls erhalten Sie die folgende Benachrichtigung:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Klicken Sie auf den Tab __'Backup-Richtlinien'__ im Menü Ihrer virtuellen Maschine. Sie können die der Maschine zugewiesene(n) Backup-Richtlinie(n) anzeigen.

Um der virtuellen Maschine eine neue Backup-Richtlinie zuzuweisen, klicken Sie auf die Schaltfläche __'Richtlinie hinzufügen'__ und wählen Sie die gewünschte Backup-Richtlinie aus.

<img src={shivaVmPolitiquesBackup} />

### Zuweisen einer Backup-Richtlinie zu einer virtuellen Festplatte

Es ist auch möglich, ein SLA direkt einer bestimmten virtuellen Festplatte einer Maschine zuzuweisen. In diesem Fall erbt die virtuelle Maschine nicht dieses SLA, das individuell auf die Festplatte angewendet wird. Es ist jedoch nicht möglich, die Ausführung des Backups auf Festplattenebene manuell zu starten, da diese Funktionalität in Spectrum Protect Plus nicht unterstützt wird.

Andererseits ist es möglich, bestimmte Festplatten von einer oder mehreren Backup-Richtlinien (SLAs) der VM auszuschließen, was das Aufheben der Zuweisung eines oder mehrerer SLA(s) auf Festplatte-für-Festplatte-Basis ermöglicht. Dieser Ansatz bietet die Flexibilität, die Ausführung eines Backups eines SLA manuell zu starten, ohne alle Festplatten der virtuellen Maschine zu beeinflussen, und ermöglicht so eine feinere Verwaltung von Backups.

Klicken Sie auf die Aktionsleiste der Festplatte, der Sie eine Backup-Richtlinie zuweisen möchten. Klicken Sie dann auf __'Richtlinien'__ und wählen Sie die gewünschte Backup-Richtlinie aus.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Hinweis*: Die hinzuzufügende Richtlinie muss sich in einer anderen Verfügbarkeitszone als die virtuelle Maschine befinden.

### Ausführen einer Backup-Richtlinie

Klicken Sie im Menü __'Backup-Richtlinien'__ Ihrer virtuellen Maschine auf die Schaltfläche __'Ausführen'__ in der Spalte __'Aktionen'__ der Backup-Richtlinie,
