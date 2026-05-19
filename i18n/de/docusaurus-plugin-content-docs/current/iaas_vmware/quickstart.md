---
title: Schnellstartanleitung
---
import shivaVmHome from '@site/docs/iaas_vmware/images/shiva_vm_home.png'
import shivaVmHomeDesc from '@site/docs/iaas_vmware/images/shiva_vm_home_desc.png'
import shivaVmHomeAlarme from '@site/docs/iaas_vmware/images/shiva_vm_home_alarme.png'
import shivaVmActions from '@site/docs/iaas_vmware/images/shiva_vm_actions.png'
import shivaVmInformations from '@site/docs/iaas_vmware/images/shiva_vm_informations.png'
import shivaVmBandeauRapide from '@site/docs/iaas_vmware/images/shiva_vm_bandeau_rapide.png'
import shivaVmVueRapide from '@site/docs/iaas_vmware/images/shiva_vm_vue_rapide.png'
import shivaVmInfosGenerales from '@site/docs/iaas_vmware/images/shiva_vm_infos_generales.png'
import shivaVmInfosAvancees from '@site/docs/iaas_vmware/images/shiva_vm_infos_avancees.png'
import shivaEditCpuRam from '@site/docs/iaas_vmware/images/shiva_edit_cpu_ram.png'
import shivaVmDiskctrl_001 from '@site/docs/iaas_vmware/images/shiva_vm_diskctrl_001.png'
import shivaCpool_010 from '@site/docs/iaas_vmware/images/shiva_cpool_010.png'
import shivaCpool_011 from '@site/docs/iaas_vmware/images/shiva_cpool_011.png'
import shivaCpool_012 from '@site/docs/iaas_vmware/images/shiva_cpool_012.png'
import shivaCatalogs from '@site/docs/iaas_vmware/images/shiva_catalogs.png'
import shivaCatalogs_002 from '@site/docs/iaas_vmware/images/shiva_catalogs_002.png'
import shivaVmTemplate_002 from '@site/docs/iaas_vmware/images/shiva_vm_template_002.png'
import shivaVmTemplate_001 from '@site/docs/iaas_vmware/images/shiva_vm_template_001.png'
import shivaVmAdv_001 from '@site/docs/iaas_vmware/images/shiva_vm_adv_001.png'
import shivaVmAdv_002 from '@site/docs/iaas_vmware/images/shiva_vm_adv_002.png'
import shivaVmAdv_003 from '@site/docs/iaas_vmware/images/shiva_vm_adv_003.png'
import shivaVmAdv_004 from '@site/docs/iaas_vmware/images/shiva_vm_adv_004.png'
import shivaCpool_001 from '@site/docs/iaas_vmware/images/shiva_cpool_001.png'
import shivaEsx_001 from '@site/docs/iaas_vmware/images/shiva_esx_001.png'
import shivaEsx_002 from '@site/docs/iaas_vmware/images/shiva_esx_002.png'
import shivaCpool_003 from '@site/docs/iaas_vmware/images/shiva_cpool_003.png'
import shivaCpool_004 from '@site/docs/iaas_vmware/images/shiva_cpool_004.png'
import shivaCpool_005 from '@site/docs/iaas_vmware/images/shiva_cpool_005.png'
import shivaCpool_009 from '@site/docs/iaas_vmware/images/shiva_cpool_009.png'
import shivaCpool_007 from '@site/docs/iaas_vmware/images/shiva_cpool_007.png'
import shivaCpool_008Build from '@site/docs/iaas_vmware/images/shiva_cpool_008_build.png'
import shivaCpool_008Firm from '@site/docs/iaas_vmware/images/shiva_cpool_008_firm.png'
import shivaCpool_006 from '@site/docs/iaas_vmware/images/shiva_cpool_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaVmPolitiquesBackupAssignMandatory from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_assign_mandatory.png'
import shivaVmPolitiquesBackup from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup.png'
import shivaVmDisquesVirtuelsPolitiques from '@site/docs/iaas_vmware/images/shiva_vm_disques_virtuels_politiques.png'
import shivaVmPolitiquesBackupExecute from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_execute.png'
import shivaVmPolitiquesBackupExecute2 from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_execute2.png'
import shivaVmPolitiquesBackupRetirer from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_retirer.png'
import shivaVmPolitiquesBackupRetirerImpossible from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_retirer_impossible.png'
import shivaBackupHeld_001 from '@site/docs/iaas_vmware/images/shiva_backup_held_001.png'
import shivaBackupHeld_002 from '@site/docs/iaas_vmware/images/shiva_backup_held_002.png'
import shivaVmBackupRestaurer from '@site/docs/iaas_vmware/images/shiva_vm_backup_restaurer.png'
import shivaVmBackupTest from '@site/docs/iaas_vmware/images/shiva_vm_backup_test.png'
import shivaVmBackup_2prod from '@site/docs/iaas_vmware/images/shiva_vm_backup_2prod.png'
import iaasVmwareClusterProvisionedMemory from '@site/docs/iaas_vmware/images/iaas_vmware_cluster_provisioned_memory.png'
import iaasVmwareClusterUsedMemory from '@site/docs/iaas_vmware/images/iaas_vmware_cluster_used_memory.png'
import iaasVmwareClusterWorstCaseAllocationMemory from '@site/docs/iaas_vmware/images/iaas_vmware_cluster_worst_case_allocation_memory.png'
import iaasVmwareEsxMemory from '@site/docs/iaas_vmware/images/iaas_vmware_esx_memory.png'

## Berechnung

### Verwaltung virtueller Maschinen

Die Verwaltungsoberfläche für Ihre virtuellen Maschinen ist in der Konsole im Menü __'IaaS'__ verfügbar, das sich auf dem grünen Banner links auf dem Bildschirm befindet.

### Liste der virtuellen Maschinen

Im Bereich __'Virtuelle Maschinen'__ haben Sie Zugriff auf die Liste Ihrer virtuellen Maschinen, die in Ihrer vertrauenswürdigen Cloud gehostet werden.

<img src={shivaVmHome} />

Für jede virtuelle Maschine haben Sie Zugriff auf die folgenden Informationen:

- ihr Name,
- die zugewiesenen Tags,
- ihr Status (éteinte, allumée, en traitement, host déconnecté ou invalid),
- ihr Manager (en environnement VMware, le Vcenter associé),
- ihr Betriebssystem,
- die Anzahl der virtuellen CPUs (vCPU),
- die Menge des virtuellen Arbeitsspeichers (vRAM).

### Aktionen für virtuelle Maschinen

Aus dieser Schnittstelle sind die folgenden Aktionen möglich:

- Die Liste der virtuellen Maschinen aktualisieren;
- Die Liste im CSV-Format exportieren;
- Die Liste filtern;
- Eine virtuelle Maschine nach ihrem Namen suchen;
- Eine neue virtuelle Maschine erstellen.

<img src={shivaVmHomeDesc} />

__Ein Warnbalken kann oben in der Liste angezeigt werden__: Er zeigt an, dass kritische Alarme für eine oder mehrere Ihrer virtuellen Maschinen ausgelöst wurden.
Die Schaltfläche __'Anzeigen'__ ermöglicht es, die virtuellen Maschinen einzusehen, die von dieser Benachrichtigung betroffen sind.

<img src={shivaVmHomeAlarme} />

Wenn Sie auf den grünen Dropdown-Pfeil rechts in der Liste für eine virtuelle Maschine klicken:

<img src={shivaVmActions} />

Sie erhalten Zugriff auf alle Informationen dazu:

<img src={shivaVmInformations} />

Ein Schnellmenü ermöglicht die folgenden Aktionen:

<img src={shivaVmBandeauRapide} />

- Die virtuelle Maschine einschalten;
- Sie ausschalten;
- Sie neu starten;
- Die Stromversorgungsoptionen des Gast-Betriebssystems ändern;
- Die Konsole öffnen;
- Ein ISO-Image einbinden;
- Ein ISO-Image aushängen;
- Die virtuelle Maschine klonen;
- Sie verschieben (vMotion);
- Sie umbenennen;
- Sie löschen.

Eine Schnellansicht bietet eine Visualisierung des __Speichers__, der __CPU__ und des __RAMs__ der virtuellen Maschine.

<img src={shivaVmVueRapide} />

Im Reiter __'Allgemeine Informationen'__ finden Sie detaillierte Informationen zu Ihrer virtuellen Maschine, wie z. B. das Betriebssystem, den physischen Standort (Rechenzentrum, Datastore usw.), den RAM, die CPU, die IP-Adressen, die Logs und weitere.

<img src={shivaVmInfosGenerales} />

Von dieser Ansicht aus können Sie die folgenden Aktionen durchführen:

- Das Betriebssystem ändern (die virtuelle Maschine muss ausgeschaltet sein),
- Die Hardware-Version aktualisieren (die virtuelle Maschine muss ausgeschaltet sein),
- Den RAM oder die CPU ändern.

Ein Reiter __'Erweitert'__ ermöglicht den Zugriff auf spezifischere Informationen wie „VMware Tools“, die Hardware-Version, den Manager usw.

<img src={shivaVmInfosAvancees} />

### Ändern des RAM oder der CPU einer virtuellen Maschine

Gehen Sie zum Reiter __'Virtuelle Maschinen'__, zeigen Sie die Details einer virtuellen Maschine an,
wählen Sie den Reiter __'Allgemeine Informationen'__ und klicken Sie auf die Schaltfläche zum Bearbeiten der zu ändernden Variable :

<img src={shivaEditCpuRam} />

### Festplattenmodi

Sie können verschiedene Festplattenmodi hinzufügen:

- __Persistent__ : Änderungen werden sofort und dauerhaft auf der virtuellen Festplatte gespeichert. __Dies ist der empfohlene Modus.__
- __Unabhängig, nicht persistent__ : Änderungen an der virtuellen Festplatte werden in einem neuen Protokoll gespeichert und beim Herunterfahren gelöscht. Nicht von Snapshots betroffen. __Wird nicht von der Sicherung unterstützt.__
- __Unabhängig, persistent__ : Änderungen werden sofort und dauerhaft auf der virtuellen Festplatte gespeichert. Nicht von Snapshots betroffen. __Wird nicht von der Sicherung unterstützt.__

### Verwaltung von Controllern virtueller Maschinen

Sie können den Typ des Festplatten-Controllers für Ihre virtuelle Maschine ändern.

<img src={shivaVmDiskctrl_001} />

Virtuelle Maschinen können mit SCSI- und NVME-Controllern ausgestattet werden, wobei maximal 4 Controller jedes Typs zulässig sind. Jeder Controller kann bis zu 15 Festplatten verwalten.

Ein SCSI-Controller kann mit verschiedenen Untertypen konfiguriert werden: Para Virtual, Bus Logic, LSI Logic oder LSI Logic SAS.

Der Para Virtual-Controller zeichnet sich durch seine erweiterte Kapazität aus. Er kann bis zu 64 Festplatten unterstützen, wenn die Hardware-Version der virtuellen Maschine mit ESXi in Version 6.7 oder höher kompatibel ist.

> __Wichtig__ : Wenn Sie den Typ eines Para Virtual-Controllers ändern möchten, der mehr als 15 Festplatten besitzt, müssen Sie zunächst die Festplatten an den betreffenden Slots abtrennen.

### Konsole einer virtuellen Maschine

Die Konsole einer virtuellen Maschine ist über die Liste der virtuellen Maschinen aufrufbar, indem Sie auf das Symbol __'Konsole'__ :

<img src={shivaCpool_010} />

Es öffnet sich ein neuer Tab in Ihrem Browser, und die Konsole Ihrer Maschine, die auf einem __VNC__ :

<img src={shivaCpool_011} />

Im Menü __VNC__ :

- das Senden bestimmter Tasten anzufordern,
- eine Tastaturzuordnung zu erzwingen (falls Ihre Tastatur nicht korrekt erkannt wurde),
- ein Textfeld zu öffnen, das an die Maschine gesendet werden kann. Diese Methode ersetzt den alten, nicht funktionierenden Zwischenablage-Modus,
- in den Vollbildmodus zu wechseln.

__Hinweis__ :
Die Skalierung des Fensters erfolgt automatisch.

#### Unterstützung von Tastatursprachen

Die in der Konsole vorgenommene Eingabe hängt von der Tastatursprache Ihres Webbrowsers, der Tastatursprache der virtuellen Maschine sowie von der Aktivierung oder Deaktivierung der Option 'enforce keyboard' links auf dem Bildschirm ab. Nachfolgend eine Übersicht der möglichen Szenarien:

| Tastatursprache des physischen Computers (Eingabe) | Tastatursprache der virtuellen Maschine | Option 'enforce keyboard' ausgewählt | Ergebnis (Ausgabe)        |
| ------------------------------------------------- | ----------------------------------------- | -------------------------------------- | ------------------------ |
| Französisch                                         | Französisch                                  | Nein                                    | ✅                       |
| Französisch                                         | Französisch                                  | Ja                                      | Nicht empfohlen            |
| Französisch                                         | Englisch                                   | Nein                                    | Englisch                  |
| Französisch                                         | Englisch                                   | Ja                                      | ✅                       |
| Englisch                                            | Französisch                                  | Nein                                    | Französisch                 |
| Englisch                                            | Französisch                                  | Ja                                      | ✅                       |
| Englisch                                            | Englisch                                   | Nein                                    | ✅                       |
| Englisch                                            | Englisch                                   | Ja                                      | Nicht empfohlen            |

__Hinweis__ :

- Falls einige Zeichen bei der manuellen Eingabe nicht übernommen werden, können Sie es über die Zwischenablage versuchen.

#### Funktionsweise der Zwischenablage

Diese Funktion ermöglicht es Ihnen, eine gesamte Zeichenkette an Ihre virtuelle Maschine zu senden. Es ist wichtig zu beachten, dass die Taste "enforce keyboard" beeinflusst, wie diese Zeichenkette
an Ihre virtuelle Maschine übermittelt wird. Wenn Sie bei der Eingabe in der Konsole feststellen, dass die Option "enforce keyboard" erforderlich ist, denken Sie daran, sie zu aktivieren, bevor Sie die Zwischenablage verwenden.  
Diese Funktion kann beispielsweise zum Senden eines Passworts, eines Befehls oder des Inhalts einer Konfigurationsdatei verwendet werden:

<img src={shivaCpool_012} />

Nach einem Klick auf die Schaltfläche "Paste" wird der Inhalt Ihres Textfelds an Ihre virtuelle Maschine gesendet.

### Cloud Temple Kataloge für virtuelle Maschinen

Cloud Temple stellt Ihnen einen Katalog mit `Templates` zur Verfügung, der regelmäßig von unseren Teams erweitert und aktualisiert wird.
Er umfasst derzeit mehrere Dutzend `Templates` und Images, die auf Ihren virtuellen Maschinen bereitgestellt werden können.

<img src={shivaCatalogs} />

Um ein ISO/OVF zu veröffentlichen, wechseln Sie zur Ansicht __'Katalog'__ und klicken Sie oben auf der Seite auf die Schaltfläche __'Dateien veröffentlichen'__ :

<img src={shivaCatalogs_002} />

Es ist möglich, eine VM in eine Vorlage umzuwandeln und in den Katalog zu exportieren. Wählen Sie dazu eine virtuelle Maschine aus und verwenden Sie die Aktionsschaltfläche __'Klonen'__ :

<img src={shivaVmTemplate_002} />

Wählen Sie __'Als vm-template exportieren'__ :

<img src={shivaVmTemplate_001} />

Geben Sie anschließend die erforderlichen Informationen ein. Anschließend können Sie eine neue VM basierend auf der Vorlage über die Schaltfläche __'Neue virtuelle Maschine'__ oder über die Seite __'Kataloge'__ bereitstellen. Es ist auch möglich, die VM im OVF-Format zu exportieren.

__Gut zu wissen__: Es ist möglich, eine OVA-Datei in OVF und umgekehrt zu konvertieren.
Die am häufigsten verwendete Methode ist der VMware Converter, aber es gibt auch eine einfache Methode mit ```tar```

Extrahieren der OVA-Datei:

```
tar -xvf vmName.ova
```

Erstellen einer OVA-Datei aus einer OVF-Datei:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Erweiterte Einstellungen für virtuelle Maschinen: Extra Config

Extra Config bietet eine flexible Möglichkeit, Schlüssel-Wert-Paare in die Konfiguration einer virtuellen Maschine aufzunehmen. Schlüssel und Werte werden vom System interpretiert, wenn die virtuelle Maschine bereitgestellt wird.

Ab jetzt können Sie direkt die Eigenschaften vom Typ __Extra Config__ in den erweiterten Optionen einer virtuellen Maschine ändern:

<img src={shivaVmAdv_001} />

Sie können eine Eigenschaft aus einer Liste von Schlüsseln hinzufügen. Darüber hinaus können Sie den Wert eines Schlüssels ändern, den Sie selbst hinzugefügt haben. Bereits vorhandene Schlüssel-Wert-Paare können nicht geändert werden.

Bitte wenden Sie sich an den Support, wenn Sie neue Schlüssel hinzufügen möchten.

<img src={shivaVmAdv_002} />

__Hinweis__: *Für die Nutzung einer GPU durch die virtuelle Maschine ist es zwingend erforderlich, den Schlüssel 'pciPassthru.use64bitMMIO' zu aktivieren und den erforderlichen MMIO-Speicherplatz (Memory-mapped I/O) über 'pciPassthru.64bitMMIOSizeGB' zuzuweisen. Es wird dringend empfohlen, die [offizielle Nvidia-Dokumentation](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms) zu konsultieren.*

### Erweiterte Einstellungen für virtuelle Maschinen: vApp

Sie können außerdem die Eigenschaften vom Typ __vApp__ in den erweiterten Optionen einer virtuellen Maschine ändern:

<img src={shivaVmAdv_003} />

Sie können eine Eigenschaft hinzufügen, ändern oder löschen. Es werden vier Eigenschaftstypen angeboten: String, Zahl, Boolesch, Passwort:

<img src={shivaVmAdv_004} />

__Hinweis__: *Die virtuelle Maschine muss gestoppt sein, um ihre vApp-Eigenschaften zu ändern.*

### Verwaltung der __'Hypervisor'__ und __'Cpool'__ (Hypervisor-Cluster)

Die Verwaltung Ihrer Hypervisor erfolgt im Untermenü __'Compute'__ des Menüs __'IaaS'__, das sich im grünen Bereich links auf Ihrem Bildschirm befindet.

<img src={shivaCpool_001} />

In diesem Untermenü haben Sie einen Überblick über:

- den Software-Stack der Hypervisor, deren AZ und deren Ressourcen,
- den Software-Stack für die Sicherung.

Im Januar 2024 basiert die verfügbare Hypervisor-Plattform auf der qualifizierten Cloud-Temple-Infrastruktur auf VMware. Die verwendete Sicherungssoftware ist IBM Spectrum Protect Plus.

### Verwaltung der VMware-Cluster

Um auf die Verwaltung der VMware-Cluster zuzugreifen, klicken Sie im Untermenü __'Compute'__ des Menüs __'IaaS'__ :

Standardmäßig listet die erste Registerkarte alle Hypervisor (tous cluster confondus):

<img src={shivaEsx_001} />

Die Details eines Hypervisors können durch Klicken auf seinen Namen angezeigt werden:

<img src={shivaEsx_002} />

Für jeden Hypervisor-Cluster steht eine eigene Registerkarte zur Verfügung, um die Details einzeln einzusehen:

<img src={shivaCpool_003} />

Wenn Sie auf einen Cluster klicken, wird eine Zusammenfassung seiner Zusammensetzung angezeigt :

- Die gesamte Rechenleistung in GHz,
- Der gesamte verfügbare Arbeitsspeicher und der Nutzungsgrad,
- Der gesamte Speicherplatz (tous types confondus) sowie der genutzte Anteil,
- Automatisierungsmechanismen bei Ausfall einer Rechenlame (__'Vsphere DRS'__),
- Die Anzahl der virtuellen Maschinen,
- Die Anzahl der Hypervisor.

#### Angezeigte Verbrauchsdaten interpretieren

<img src={iaasVmwareClusterProvisionedMemory} />

__Zugewiesener Speicher (Cluster) :__ Dieses Diagramm zeigt die dem Cluster insgesamt zugewiesene Speichermenge.

<img src={iaasVmwareClusterUsedMemory} />

__Verbrauchter Speicher (Cluster) :__ Diese Ansicht zeigt den Speicher, der aktiv ausschließlich von den virtuellen Maschinen des Clusters verbraucht wird. Dies entspricht dem physischen Speicher, der von den VMs tatsächlich für ihre Operationen genutzt wird, und ist ein Schlüsselindikator für die aktuelle Arbeitslast.

<img src={iaasVmwareClusterWorstCaseAllocationMemory} />

__Worst-Case-Zuweisung (Cluster) :__ Dieses Diagramm veranschaulicht den Speicherbedarf, falls alle virtuellen Maschinen des Clusters gleichzeitig den ihnen zugewiesenen Gesamtspeicher verbrauchen würden (le scénario de consommation maximale). Das Ergebnis berücksichtigt auch den für den Clusterbetrieb erforderlichen Speicher sowie verschiedene VMware-spezifische Parameter (le calcul n'est pas simplement égal à la somme de la RAM de toutes les machines virtuelles). Dies ermöglicht die Vorhersage kritischer Ressourcenbedarfe und verhindert ein Aufbrauchen des Speichers.

<img src={iaasVmwareEsxMemory} />

__Verbrauchter Speicher (ESX) :__ Im Gegensatz zu den Cluster-Diagrammen zeigt dieses den gesamten auf einem bestimmten ESX-Host verbrauchten Speicher. Dies umfasst nicht nur den von den auf diesem Host gehosteten virtuellen Maschinen genutzten Speicher, sondern auch den vom Hypervisor-System selbst verbrauchten Speicher (overhead de l'ESXi).

<img src={shivaCpool_004} />

Für jeden Hypervisor im Reiter __'Hosts'__ werden folgende Informationen angezeigt:

- Die __CPU__- und __Speicher__auslastung,
- Die Anzahl der zugewiesenen virtuellen Maschinen,
- Die Verfügbarkeit eines neuen Builds für das Hypervisor-Betriebssystem, falls vorhanden,
- Der Status des Hypervisors (connecté en production, en maintenance, éteint, ...),
- Ein Aktionsmenü.

<img src={shivaCpool_005} />

Mehrere Aktionen sind über den Reiter __'Hosts'__ möglich :

- Neue Hypervisor über die Schaltfläche __'Host hinzufügen'__ bestellen :

<img src={shivaCpool_009} />

- Möglichkeit, __die Details eines Hypervisors__ einzusehen :

<img src={shivaCpool_007} />

- einen Hypervisor in den __Wartungsmodus__ zu versetzen oder diesen zu verlassen,
- diesen Hypervisor gegebenenfalls zu __aktualisieren__ ; dazu __muss er sich zwingend im Wartungsmodus befinden__. Es gibt zwei Arten von Updates :

1. VMware-Builds (les nouvelles versions de l'hyperviseur):

<img src={shivaCpool_008Build} />

1. Das Aktualisieren der Firmware Ihrer Compute-Blade (bios et firmware cartes filles):

<img src={shivaCpool_008Firm} />

*__Hinweis__* :

- *Cloud Temple stellt regelmäßig Builds für Hypervisor zur Verfügung.
Es ist wichtig, Ihre Hypervisor regelmäßig zu aktualisieren, insbesondere um die Anwendung von Sicherheitspatches zu ermöglichen.
Allerdings __aktualisieren wir Ihre Hypervisor nicht eigenständig__. Cloud Temple hat keinen Einblick in die Verfügbarkeitsvereinbarungen Ihrer Workloads.
Wir überlassen es Ihnen daher, Ihr Change-Management durchzuführen und die neuen Builds zum optimalen Zeitpunkt anzuwenden.*
- *Der Aktualisierungsprozess ist vollständig automatisiert. Sie müssen mindestens zwei Hypervisor in Ihrem Cluster vorhalten, um ein Update ohne Dienstunterbrechung zu ermöglichen.*

{/*TODO: Add missing page. */}
{/* -*Il est nécessaire d'avoir les permissions adéquates pour effectuer les différentes actions.**/}

Sie sehen außerdem alle Affinitäts-/Anti-Affinitätsregeln für Ihren Hypervisor-Cluster im Bereich __'Regeln'__.

### Verwaltung der Affinität Ihrer virtuellen Maschinen

Die __Affinitäts- und Anti-Affinitätsregeln__ ermöglichen die Steuerung des Standorts Ihrer virtuellen Maschinen auf Ihren Hypervisoren.
Sie können zur Verwaltung der Ressourcennutzung Ihres __'Cpool'__ eingesetzt werden.
Beispielsweise können sie dabei helfen, die Workloads zwischen den Servern zu verteilen oder ressourcenintensive Workloads zu isolieren.
In einem __'Cpool'__ VMware werden diese Regeln häufig verwendet, um das Verhalten der virtuellen Maschinen im Zusammenhang mit vMotion zu steuern.
vMotion ermöglicht das Verschieben virtueller Maschinen von einem Host auf einen anderen ohne Dienstunterbrechung.

Über die Regelverwaltung können Sie Folgendes konfigurieren:

- __Affinitätsregeln__: Diese Regeln stellen sicher, dass bestimmte virtuelle Maschinen auf demselben physischen Host ausgeführt werden.
Sie werden zur Leistungsverbesserung eingesetzt, indem häufig kommunizierende virtuelle Maschinen auf demselben Server gehalten werden, um die Netzwerklatenz zu reduzieren. Affinitätsregeln sind in Szenarien nützlich, in denen die Leistung kritisch ist, wie beispielsweise bei Datenbanken oder Anwendungen, die eine schnelle Kommunikation zwischen den Servern erfordern.

- __Anti-Affinitätsregeln__: Im Gegensatz dazu stellen diese Regeln sicher, dass bestimmte virtuelle Maschinen nicht auf demselben physischen Host ausgeführt werden. Sie sind wichtig für Verfügbarkeit und Resilienz, beispielsweise um zu verhindern, dass kritische Maschinen bei einem einzelnen Serverausfall alle betroffen sind. Anti-Affinitätsregeln sind entscheidend für Anwendungen, die eine hohe Verfügbarkeit erfordern, wie in Produktionsumgebungen, in denen Ausfalltoleranz Priorität hat.
Beispielsweise möchten Sie nicht, dass sich Ihre beiden Active Directory-Instanzen auf demselben Hypervisor befinden.

Bei der Erstellung einer Regel definieren Sie den Regeltyp (affinité / anti-affinité), den Namen der Regel, ihren Aktivierungszustand (__'Status'__) und die betroffenen Maschinen Ihres Hypervisor-Clusters.

<img src={shivaCpool_006} />

*Hinweis: Die in der Konsole angebotenen Affinitäts-/Anti-Affinitätsregeln gelten für die Kommunikation zwischen den virtuellen Maschinen untereinander (keine Regeln zwischen Hypervisoren und virtuellen Maschinen).*

## Backup

### Eine Sicherungsrichtlinie erstellen

Um eine neue Sicherungsrichtlinie hinzuzufügen, muss eine Anfrage an den Support gestellt werden. Der Support ist über das Rettungsring-Symbol oben rechts im Fenster erreichbar.

Die Erstellung einer neuen Sicherungsrichtlinie erfolgt über __eine Serviceanfrage__ mit folgenden Angaben:

    Der Name Ihrer Organisation
    Der Name eines Ansprechpartners mit E-Mail-Adresse und Telefonnummer zur Fertigstellung der Konfiguration
    Der Name des Tenants
    Der Name der Sicherungsrichtlinie
    Die Eigenschaften (x Tage, y Wochen, z Monate, ...)

<img src={shivaSupport} />

### Sicherungsrichtlinie einer virtuellen Maschine zuweisen

Wenn einer virtuellen Maschine (VM) eine SLA zugewiesen wird, übernehmen alle mit dieser VM zugeordneten Festplatten automatisch dieselbe SLA. Anschließend kann die Sicherung manuell über die Registerkarte "Sicherungsrichtlinien" gestartet werden. Falls keine manuelle Ausführung erfolgt, wird die Sicherung automatisch gemäß dem von der SLA konfigurierten Zeitplan ausgeführt.

SecNumCloud macht die Zuweisung einer Sicherungsrichtlinie an eine virtuelle Maschine vor deren Start obligatorisch. Andernfalls erhalten Sie die folgende Meldung:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Klicken Sie auf die Registerkarte __'Sicherungsrichtlinien'__ im Menü Ihrer virtuellen Maschine. Dort können Sie die dieser Maschine zugewiesenen Sicherungsrichtlinien einsehen.

Um der virtuellen Maschine eine neue Sicherungsrichtlinie zuzuweisen, klicken Sie auf die Schaltfläche __'Richtlinie hinzufügen'__ und wählen Sie die gewünschte Sicherungsrichtlinie aus.

<img src={shivaVmPolitiquesBackup} />

### Zuweisen einer Sicherungsrichtlinie an eine virtuelle Festplatte

Es ist auch möglich, eine SLA direkt einer bestimmten virtuellen Festplatte einer Maschine zuzuweisen. In diesem Fall erbt die virtuelle Maschine diese SLA nicht, die individuell der Festplatte zugewiesen wurde. Allerdings ist es nicht möglich, die Sicherung auf Festplattenebene manuell auszuführen, da diese Funktion in Spectrum Protect Plus nicht unterstützt wird.

Umgekehrt ist es möglich, bestimmte Festplatten von einer oder mehreren Sicherungsrichtlinien (SLA) der VM auszuschließen, wodurch die Zuweisung einer oder mehrerer SLA(s) festplattenweise aufgehoben werden kann. Dieser Ansatz bietet die Flexibilität, die Sicherung einer SLA manuell auszuführen, ohne alle Festplatten der virtuellen Maschine zu beeinflussen, und ermöglicht so ein feineres Backup-Management.

Klicken Sie auf die Aktionsleiste der Festplatte, der Sie eine Sicherungsrichtlinie zuweisen möchten. Klicken Sie anschließend auf __'Richtlinien'__ und wählen Sie die gewünschte Sicherungsrichtlinie aus.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Hinweis*: Die hinzuzufügende Richtlinie muss sich in einer anderen Verfügbarkeitszone als die virtuelle Maschine befinden.

### Backup-Richtlinie ausführen

Im Menü __'Backup-Richtlinien'__ Ihrer virtuellen Maschine klicken Sie auf die Schaltfläche __'Ausführen'__ in der Spalte __'Aktionen'__ der Backup-Richtlinie, die Sie ausführen möchten.

<img src={shivaVmPolitiquesBackupExecute} />

Um eine Backup-Richtlinie auszuführen, können Sie auch im Menü Ihrer virtuellen Maschine in den Bereich __'Backups'__ wechseln. Klicken Sie auf die Schaltfläche __'Backup ausführen'__ und wählen Sie dann das Backup aus der Dropdown-Liste aus, das Sie ausführen möchten.

<img src={shivaVmPolitiquesBackupExecute2} />

### Backup-Richtlinie entfernen

Im Menü __'Backup-Richtlinien'__ Ihrer virtuellen Maschine klicken Sie auf die Schaltfläche __'Entfernen'__ in der Spalte __'Aktionen'__ der Backup-Richtlinie, die Sie entfernen möchten.

<img src={shivaVmPolitiquesBackupRetirer} />

__Achtung: Es ist nicht möglich, die letzte SLA auf einer gestarteten virtuellen Maschine zu entfernen:__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Löschen einer Sicherungsrichtlinie: Fall einer angehaltenen ("held") Sicherungsrichtlinie

Wenn die letzte Ressource von einer SLA-Richtlinie getrennt wird, erkennt das System diesen Zustand automatisch. Infolgedessen wechseln alle mit dieser SLA-Richtlinie verknüpften Jobs automatisch in den Status "Angehalten" ("Held"). Es ist wichtig zu beachten, dass das direkte Löschen der SLA-Richtlinie zu diesem Zeitpunkt aufgrund vorhandener abhängiger Jobs nicht möglich ist. Um die Richtlinie zu löschen, muss eine Reihe von Schritten befolgt werden.

Es muss überprüft werden, ob die betreffenden Jobs tatsächlich den Status "Angehalten" aufweisen. Nach Abschluss dieser Überprüfung können diese Jobs gelöscht werden. Erst nach dem Löschen dieser abhängigen Jobs kann die SLA-Richtlinie endgültig aus dem System entfernt werden.

Ein Sonderfall erfordert besondere Aufmerksamkeit: das Hinzufügen einer neuen Ressource zu einer SLA-Richtlinie, deren abhängige Jobs nicht gelöscht wurden. In diesem Fall werden die Job-IDs beibehalten. Es ist jedoch entscheidend zu beachten, dass Jobs im Status "Angehalten" nicht automatisch fortgesetzt werden. Es ist ein manueller Eingriff erforderlich, um sie wieder zu aktivieren und ihre Ausführung zu ermöglichen.

Hinweis: Für weitere Informationen zu dieser Situation wenden Sie sich an den Cloud Temple Support.

Die Cloud Temple-Konsole verhindert die Zuweisung einer virtuellen Maschine an eine angehaltene Richtlinie:

<img src={shivaBackupHeld_001} />

Ebenso ist es nicht möglich, eine virtuelle Maschine zu starten, die einer angehaltenen Sicherungsrichtlinie zugeordnet ist:

<img src={shivaBackupHeld_002} />

### Backup wiederherstellen

Über die Registerkarte __'Backups'__ im Menü Ihrer virtuellen Maschinen können Sie auf die Liste der Backups dieser Maschinen zugreifen.
Um ein Backup wiederherzustellen, klicken Sie auf die Schaltfläche __'Wiederherstellen'__ in der Zeile, die dem wiederherzustellenden Backup entspricht.

<img src={shivaVmBackupRestaurer} />

1. __Produktionsmodus__: Der Produktionsmodus ermöglicht die Wiederherstellung nach einem Ausfall am lokalen Standort vom primären Speicher oder einem entfernten Disaster-Recovery-Standort aus, indem die ursprünglichen Maschinen-Images durch Wiederherstellungs-Images ersetzt werden. Alle Konfigurationen werden im Rahmen der Wiederherstellung übertragen, einschließlich der Namen und Kennungen, und alle mit der virtuellen Maschine verbundenen Datenkopierjobs werden weiterhin ausgeführt. Im Rahmen einer Wiederherstellung im Produktionsmodus können Sie wählen, ob der Speicher in der virtuellen Maschine durch eine virtuelle Festplatte aus einem vorherigen virtuellen Maschinen-Backup ersetzt werden soll.

2. __Testmodus__: Der Testmodus erstellt temporäre virtuelle Maschinen für Entwicklung, Tests, Snapshot-Überprüfungen und Disaster-Recovery-Tests gemäß einem wiederholbaren Zeitplan, ohne Auswirkungen auf Produktionsumgebungen. Die Testmaschinen werden so lange ausgeführt, wie für den Test und die Überprüfung erforderlich, und anschließend bereinigt. Über ein isoliertes Netzwerk können Sie eine sichere Umgebung einrichten, um Ihre Jobs zu testen, ohne die für die Produktion verwendeten virtuellen Maschinen zu beeinträchtigen. Die im Testmodus erstellten virtuellen Maschinen verfügen über eindeutige Namen und Kennungen, um Konflikte in Ihrer Produktionsumgebung zu vermeiden.

3. __Klonmodus__: Der Klonmodus erstellt Kopien der virtuellen Maschinen für Anwendungsfälle, die permanente oder langlaufende Kopien zur Datenerkundung oder zur Duplizierung einer Testumgebung in einem isolierten Netzwerk erfordern. Die im Klonmodus erstellten virtuellen Maschinen verfügen über eindeutige Namen und Kennungen, um Konflikte in Ihrer Produktionsumgebung zu vermeiden. Im Klonmodus müssen Sie auf den Ressourcenverbrauch achten, da der Klonmodus permanente oder langlaufende Maschinen erstellt.

__Die Wiederherstellung erfolgt standardmäßig im "TEST"-Modus, um die Produktion zu schützen__ und Sie können den Namen der wiederhergestellten VM wählen:

<img src={shivaVmBackupTest} />

Beachten Sie, dass es möglich ist, eine virtuelle Maschine vom Testmodus in den Produktionsmodus zu überführen, wenn die Tests erfolgreich waren:

<img src={shivaVmBackup_2prod} />