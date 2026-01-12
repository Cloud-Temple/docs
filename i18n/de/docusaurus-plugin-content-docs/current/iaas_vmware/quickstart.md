---
title: Schnellstartanleitung
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
import shivaCpool_011 from './images/shiva_cpool_011.png'
import shivaCpool_012 from './images/shiva_cpool_012.png'
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
import shivaCpool_007 from './images/shiva_cpool_007.png'
import shivaCpool_008Build from './images/shiva_cpool_008_build.png'
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

## Calculation

### Virtual Machine Management

The interface for managing your virtual machines is available in the Console under the __'IaaS'__ menu located on the green bar on the left side of the screen.

### Liste der virtuellen Maschinen

In der Sektion __'Virtuelle Maschinen'__ haben Sie Zugriff auf die Liste Ihrer auf Ihrem vertrauenswürdigen Cloud-System gehosteten virtuellen Maschinen.

<img src={shivaVmHome} />

Für jede virtuelle Maschine stehen Ihnen folgende Informationen zur Verfügung:

- ihr Name,
- die ihr zugewiesenen Tags,
- ihr Status (aus, an, in Bearbeitung, Host getrennt oder ungültig),
- ihr Manager (im VMware-Umfeld der zugehörige Vcenter),
- ihr Betriebssystem,
- die Anzahl virtueller CPUs (vCPU),
- die Menge an virtuellem Arbeitsspeicher (vRAM).

### VM-Aktionen

Die folgenden Aktionen sind über diese Schnittstelle möglich:

- Aktualisieren der Liste der virtuellen Maschinen;
- Exportieren der Liste im CSV-Format;
- Filtern der Liste;
- Suchen einer virtuellen Maschine anhand ihres Namens;
- Erstellen einer neuen virtuellen Maschine.

<img src={shivaVmHomeDesc} />

__Ein Warnbanner kann oben in der Liste angezeigt werden__: Es weist darauf hin, dass auf einer oder mehreren Ihrer virtuellen Maschinen kritische Alarme ausgelöst wurden.  
Der Button __'Anzeigen'__ ermöglicht es, die betroffenen virtuellen Maschinen dieser Benachrichtigung zu prüfen.

<img src={shivaVmHomeAlarme} />

Wenn Sie auf den grünen Dropdown-Pfeil rechts neben einer virtuellen Maschine in der Liste klicken:

<img src={shivaVmActions} />

erhalten Sie Zugriff auf alle verfügbaren Informationen zu dieser Maschine:

<img src={shivaVmInformations} />

Ein Schnellbanner ermöglicht die Ausführung folgender Aktionen:

<img src={shivaVmBandeauRapide} />

- Starten der virtuellen Maschine;
- Herunterfahren der virtuellen Maschine;
- Neustarten der virtuellen Maschine;
- Ändern der Gast-System-Stromversorgungseinstellungen;
- Öffnen der Konsole;
- Einhängen einer ISO-Datei;
- Ausklinken einer ISO-Datei;
- Klonen der virtuellen Maschine;
- Verschieben (vMotion);
- Umbenennen der virtuellen Maschine;
- Löschen der virtuellen Maschine.

Eine Kurzübersicht bietet eine Visualisierung des __Speichers__, des __CPU-Verbrauchs__ und des __RAM-Gebrauchs__ der virtuellen Maschine.

<img src={shivaVmVueRapide} />

Im Tab __'Allgemeine Informationen'__ finden Sie detaillierte Angaben zu Ihrer virtuellen Maschine, wie z. B. das Betriebssystem, der physische Standort (Datacenter, Datastore usw.), RAM, CPU, IP-Adressen, Protokolle und weitere Details.

<img src={shivaVmInfosGenerales} />

Von dieser Ansicht aus können Sie folgende Aktionen durchführen:

- Ändern des Betriebssystems (die virtuelle Maschine muss ausgeschaltet sein),
- Aktualisieren der Hardwareversion (die virtuelle Maschine muss ausgeschaltet sein),
- Ändern von RAM oder CPU.

Ein Tab __'Erweitert'__ ermöglicht den Zugriff auf spezifischere Informationen wie z. B. „VMware Tools“, Hardwareversion, Manager usw.

<img src={shivaVmInfosAvancees} />

### Editing RAM or CPU of a virtual machine

Go to the __'Virtual Machines'__ tab, display the details of a virtual machine, select the __'General Information'__ tab, and click the edit button for the variable you want to modify:

<img src={shivaEditCpuRam} />

### Disk modes

You can add different disk modes:

- __Persistent__: Changes are immediately and permanently written to the virtual disk. __This is the recommended mode.__
- __Non-persistent independent__: Changes made to the virtual disk are recorded in a new log file and deleted when the virtual machine is powered off. Not affected by snapshots. __Not supported by backup.__
- __Persistent independent__: Changes are immediately and permanently written to the virtual disk. Not affected by snapshots. __Not supported by backup.__

### Virtual Machine Controller Management

You can modify the disk controller type for your virtual machine.

<img src={shivaVmDiskctrl_001} />

Virtual machines can be equipped with SCSI and NVMe controllers, with a limit of 4 controllers of each type. Each controller can manage up to 15 disks.

A SCSI controller can be configured with different subtypes: Para Virtual, Bus Logic, LSI Logic, or LSI Logic SAS.

The Para Virtual controller stands out due to its extended capabilities. It can support up to 64 disks when the virtual machine's hardware version is compatible with ESXi version 6.7 or higher.

> __Important__: If you want to change the type of a Para Virtual controller that has more than 15 disks, you must first detach the disks from the affected slots.

### Virtual Machine Console

The console of a virtual machine is accessible from the list of virtual machines by clicking the __'Console'__ icon:

<img src={shivaCpool_010} />

A new tab opens in your browser, displaying the console of your machine, based on a **VNC** client:

<img src={shivaCpool_011} />

In the **VNC** menu, you can:
- request the transmission of special keys,
- force a keyboard mapping (in case we were unable to correctly identify your keyboard),
- open a text field that can be transmitted to the machine. This method replaces the previous non-functional clipboard,
- switch to full-screen mode.

__Note__:
Window scaling is automatic.

#### Keyboard Layout Support

The input entered in the console depends on the keyboard language of your web browser, the keyboard language of the virtual machine, and whether the 'enforce keyboard' option on the left side of the screen is enabled. Below is a summary of the possible scenarios:

| Physical Machine Keyboard Language (Input) | Virtual Machine Keyboard Language | 'Enforce Keyboard' Option Selected | Result (Output)        |
|--------------------------------------------|-----------------------------------|------------------------------------|------------------------|
| French                                     | French                            | No                                 | ✅                       |
| French                                     | French                            | Yes                                | Not recommended        |
| French                                     | English                           | No                                 | English                |
| French                                     | English                           | Yes                                | ✅                       |
| English                                    | French                            | No                                 | French                 |
| English                                    | French                            | Yes                                | ✅                       |
| English                                    | English                           | No                                 | ✅                       |
| English                                    | English                           | Yes                                | Not recommended        |

__Note__:
- If certain characters do not appear during manual input, you may try copying them from the clipboard.

#### Clipboard Functionality  
This feature allows you to send an entire string of characters to your virtual machine. It is important to note that the "enforce keyboard" setting affects how this string of characters is transmitted to your virtual machine. If you notice during console input that the "enforce keyboard" option is required, make sure to enable it before using the clipboard.  

This functionality can be used to send a password, a command, or the content of a configuration file, for example:

<img src={shivaCpool_012} />

Upon clicking the "Paste" button, the content of your text field is sent to your virtual machine.

### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a regularly updated and enriched catalog of `Templates`. To date, this catalog includes dozens of `Templates` and images ready to be deployed on your virtual machines.

<img src={shivaCatalogs} />

To publish an ISO/OVF file, navigate to the __'Catalogue'__ view and click the __'Publish Files'__ button at the top of the page:

<img src={shivaCatalogs_002} />

You can also convert a virtual machine into a template and export it to the catalog. To do so, select a virtual machine and use the __'Clone'__ action button:

<img src={shivaVmTemplate_002} />

Select __'Export as vm-template'__:

<img src={shivaVmTemplate_001} />

Then fill in the required information. Once completed, you will be able to deploy a new virtual machine from the template using the __'New Virtual Machine'__ button or from the __'Catalogues'__ page. It is also possible to export the VM in OVF format.

__Tip__: It is possible to convert between OVA and OVF files.  
The most common method uses VMware Converter, but a simple alternative is available using the ```tar``` command.

Extracting an OVA file:

```
tar -xvf vmName.ova
```

Creating an OVA file from an OVF file:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Advanced Virtual Machine Configuration: Extra Config

Extra Config provides a flexible way to include key=value pairs in a virtual machine's configuration. The keys and values are interpreted by the system when the virtual machine is deployed.

You can now directly modify __Extra Config__ properties in the advanced options of a virtual machine:

<img src={shivaVmAdv_001} />

You can add a property from a predefined list of keys. Additionally, you can modify the value of a key you have added yourself. Pre-existing key=value pairs cannot be modified.

Please contact support for any request to add new keys.

<img src={shivaVmAdv_002} />

__Note__: *To enable GPU usage by the virtual machine, it is mandatory to activate the key 'pciPassthru.use64bitMMIO' and allocate the required amount of MMIO (Memory-mapped I/O) space via 'pciPassthru.64bitMMIOSizeGB'. It is strongly recommended to refer to the [official NVIDIA documentation](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Advanced VM Configuration: vAPP

You can also modify __vAPP__ properties in the advanced options of a virtual machine:

<img src={shivaVmAdv_003} />

You can add a property, modify an existing one, or remove it. Four types of properties are available: String, Number, Boolean, Password:

<img src={shivaVmAdv_004} />

__Note__: *The virtual machine must be stopped to modify its vAPP properties.*

### Management of __'Hypervisors'__ and __'Cpool'__ (Hypervisor Clusters)

The management of your hypervisors is performed in the __'Compute'__ submenu under __'IaaS'__, located in the green bar on the left side of your screen.

<img src={shivaCpool_001} />

In this submenu, you have visibility on:

- The hypervisor software stack, their AZs, and their resources,
- The backup software stack.

As of January 2024, the available hypervisor offering on the Cloud Temple qualified infrastructure is based on VMware. The backup software used is IBM Spectrum Protect Plus.

### Steuerung von VMware-Clustern

Um die Steuerung von VMware-Clustern zu aktivieren, klicken Sie im Untermenü __'Berechnung'__ des Menüs __'IaaS'__:

Standardmäßig listet der erste Tab alle Hypervisoren (alle Cluster zusammengefasst):

<img src={shivaEsx_001} />

Sie können die Details eines Hypervisors anzeigen, indem Sie auf dessen Namen klicken:

<img src={shivaEsx_002} />

Für jeden Hypervisor-Cluster steht ein separater Tab zur Verfügung, um die Details jedes einzelnen Clusters einzusehen:

<img src={shivaCpool_003} />

Wenn Sie auf einen Cluster klicken, sehen Sie eine Zusammenfassung seiner Zusammensetzung:

- Gesamtleistung der Berechnung in GHz,
- Gesamtspeicherplatz und Nutzungsratio,
- Gesamtspeicherplatz (alle Speichertypen zusammengefasst) sowie der Anteil der genutzten Kapazität,
- Automatisierungsmechanismen bei Ausfall eines Rechenknotens (__'vSphere DRS'__),
- Anzahl der virtuellen Maschinen,
- Anzahl der Hypervisoren.

<!-- TODO: Add missing page. -->
<!-- Bei der Betrachtung einer Cluster-Seite sind mehrere Tabs verfügbar. Der Tab __'Regeln'__ ermöglicht die Definition von [Affinitäts- / Anti-Affinitätsregeln](compute.md#verwaltung-der-affinitaet-ihrer-virtuellen-maschinen) -->

<img src={shivaCpool_004} />

Im Tab __'Hosts'__ werden für jeden Hypervisor folgende Informationen angezeigt:

- CPU- und Speichernutzung,
- Anzahl der zugeordneten virtuellen Maschinen,
- Verfügbarkeit eines neuen Builds für das Betriebssystem des Hypervisors (falls zutreffend),
- Status des Hypervisors (in Produktion verbunden, in Wartung, ausgeschaltet usw.),
- Aktionenmenü.

<img src={shivaCpool_005} />

Im Tab __'Hosts'__ stehen mehrere Aktionen zur Verfügung:

- Anforderung neuer Hypervisoren über die Schaltfläche __'Host hinzufügen'__:

<img src={shivaCpool_009} />

- Möglichkeit, die Details eines Hypervisors einzusehen:

<img src={shivaCpool_007} />

- Eingang oder Ausgang aus dem __Wartungsmodus__ eines Hypervisors,
- __Aktualisierung__ des Hypervisors, falls erforderlich; hierfür __muss__ der Hypervisor unbedingt im Wartungsmodus sein. Es gibt zwei Arten von Aktualisierungen:

1. VMware-Builds (neue Versionen des Hypervisors):

<img src={shivaCpool_008Build} />

2. Aktualisierung des Firmware-Images Ihres Rechenknotens (BIOS und Firmware von Erweiterungskarten):

<img src={shivaCpool_008Firm} />

*__Hinweis__*:

- Cloud Temple stellt regelmäßig neue Builds für Hypervisoren bereit.
Es ist wichtig, Ihre Hypervisoren regelmäßig zu aktualisieren, insbesondere um Sicherheitspatches anwenden zu können.
__Allerdings führen wir die Aktualisierung Ihrer Hypervisoren nicht automatisch durch.__ Cloud Temple hat keine Sichtbarkeit über die Verfügbarkeitsverpflichtungen Ihrer Workloads.
Daher überlassen wir Ihnen die Umsetzung Ihrer Änderungsmanagement-Prozesse und die Anwendung der neuen Builds zum optimalen Zeitpunkt.
- Der Aktualisierungsprozess ist vollständig automatisiert. Sie müssen mindestens zwei Hypervisoren in Ihrem Cluster haben, um eine Update-Operation ohne Dienstunterbrechung durchführen zu können.

<!-- TODO: Add missing page. -->
<!-- - *Für die Durchführung der verschiedenen Aktionen sind die entsprechenden Berechtigungen erforderlich [siehe hier](../console/permissions.md).* -->

Sie sehen auch alle Affinitäts- und Anti-Affinitätsregeln für Ihren Hypervisor-Cluster im Bereich __'Regeln'__.

### VM Affinity Management

__Affinity and anti-affinity rules__ allow you to control the placement of virtual machines (VMs) across your hypervisors.  
They can be used to manage resource utilization within your __'Cpool'__.  
For example, they help balance workloads across servers or isolate resource-intensive workloads.  
In a __'Cpool'__ environment based on VMware, these rules are commonly used to manage the behavior of VMs during vMotion operations.  
vMotion enables the migration of VMs from one host to another without service interruption.

You can configure the following rules via the rule management interface:

- __Affinity Rules__: These rules ensure that certain virtual machines run on the same physical host.  
  They are used to improve performance by keeping VMs that communicate frequently together on the same server, thus reducing network latency.  
  Affinity rules are particularly useful in scenarios where performance is critical—such as database systems or applications requiring fast inter-server communication.

- __Anti-Affinity Rules__: Conversely, these rules ensure that certain virtual machines do not run on the same physical host.  
  They are essential for availability and resilience—for instance, to prevent all critical VMs from being affected in the event of a single host failure.  
  Anti-affinity rules are crucial for high-availability applications, such as in production environments where fault tolerance is a top priority.  
  For example, you would not want both of your Active Directory servers located on the same hypervisor.

When creating a rule, you define:
- The rule type (affinity / anti-affinity),
- The rule name,
- Its activation status (__'Status'__),
- And the VMs involved within your hypervisor cluster.

<img src={shivaCpool_006} />

*Note: The affinity/anti-affinity rules available in the console apply only between virtual machines (not between hypervisors and VMs).*

## Backup

### Create a backup policy

To create a new backup policy, you must submit a request to support. Support is accessible via the buoy icon in the top-right corner of the window.

Creating a new backup policy is done through a __service request__ specifying:

    Your Organization's name
    A contact person's name, email address, and phone number to finalize the configuration
    The tenant name
    The backup policy name
    The retention characteristics (x days, y weeks, z months, ...)

<img src={shivaSupport} />

### Assign a backup policy to a virtual machine

When an SLA is assigned to a virtual machine (VM), all disks associated with this VM automatically inherit the same SLA. Subsequently, you can manually trigger a backup execution via the **Backup Policies** tab. If no manual launch is performed, the backup will run automatically according to the schedule defined by the SLA.

SecNumCloud requires that a backup policy be assigned to a virtual machine before it is started. Otherwise, you will receive the following notification:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Click on the __'Backup Policies'__ tab in your virtual machine's menu. You can view the backup policy or policies assigned to this VM here.

To assign a new backup policy to the virtual machine, click the __'Add Policy'__ button and select the desired backup policy.

<img src={shivaVmPolitiquesBackup} />

### Assign a backup policy to a virtual disk

It is also possible to assign an SLA directly to a specific virtual disk of a machine. In this case, the virtual machine does not inherit this SLA applied individually to the disk. However, it is not possible to manually trigger backup execution at the disk level, as this functionality is not supported in Spectrum Protect Plus.

On the other hand, it is possible to exclude certain disks from one or more backup policies (SLAs) of the VM, thereby allowing the removal of one or more SLAs on a per-disk basis. This approach provides the flexibility to manually initiate backup execution for a specific SLA without affecting all disks of the virtual machine, enabling more granular backup management.

Click on the action bar of the disk to which you want to assign a backup policy. Then, click on __'Policies'__ and select the desired backup policy.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Note*: The policy to be added must reside in a different availability zone than the virtual machine.

### Run a backup policy

In the __'Backup Policies'__ menu of your virtual machine, click the __'Run'__ button in the __'Actions'__ column for the backup policy you wish to execute.

<img src={shivaVmPolitiquesBackupExecute} />

You can also run a backup policy from the __'Backups'__ section in your virtual machine's menu. Click the __'Run Backup'__ button, then select the backup you want to execute from the dropdown list.

<img src={shivaVmPolitiquesBackupExecute2} />

### Remove a backup policy

In the __'Backup Policies'__ menu of your virtual machine, click the __'Remove'__ button in the __'Actions'__ column for the backup policy you wish to remove.

<img src={shivaVmPolitiquesBackupRetirer} />

__Warning: It is not possible to remove the last SLA on an active virtual machine:__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Deleting a backup policy: case of a suspended backup policy ("held")

When the last resource is disassociated from an SLA policy, the system automatically detects this situation. As a result, all jobs associated with this SLA policy are automatically moved to the "Held" ("Suspended") state. It is important to note that direct deletion of the SLA policy is not possible at this stage due to the existence of dependent jobs. To proceed with the deletion of the policy, a specific sequence of steps must be followed.

First, verify that the affected jobs are indeed in the "Held" state. Once confirmed, these dependent jobs can be deleted. Only after removing these dependent jobs can the SLA policy be permanently erased from the system.

A special case requires particular attention: adding a new resource to an SLA policy whose dependent jobs have not been deleted. In this scenario, the job identifiers will be retained. However, it is crucial to note that jobs in the "Held" state will not resume automatically. Manual intervention will be required to reactivate them and allow their execution.

> **Note:** For any clarification regarding this situation, please contact Cloud Temple support.

The Cloud Temple console prevents assigning a virtual machine to a suspended policy:

<img src={shivaBackupHeld_001} />

Similarly, it is not possible to start a virtual machine associated with a suspended backup policy:

<img src={shivaBackupHeld_002} />

### Wiederherstellen einer Sicherung

Der Tab __'Sicherungen'__ im Menü Ihrer virtuellen Maschinen ermöglicht Ihnen den Zugriff auf die Liste der Sicherungen dieser Maschine.  
Um eine Sicherung wiederherzustellen, klicken Sie auf die Schaltfläche __'Wiederherstellen'__ in der Zeile, die der Sicherung entspricht, die Sie wiederherstellen möchten.

<img src={shivaVmBackupRestaurer} />

1. __Produktionsmodus__: Der Produktionsmodus ermöglicht die Wiederherstellung nach einem Ausfall am lokalen Standort über den primären Speicher oder einen entfernten Wiederherstellungsstandort, wobei die ursprünglichen Maschinenabbilder durch die Wiederherstellungsabbilder ersetzt werden. Alle Konfigurationen werden im Rahmen der Wiederherstellung übertragen, einschließlich Namen und Kennungen, und alle mit der virtuellen Maschine verbundenen Datenkopierarbeiten werden weiterhin ausgeführt. Bei einer Wiederherstellung im Produktionsmodus können Sie wählen, den Speicher in der virtuellen Maschine durch einen virtuellen Datenträger aus einer vorherigen virtuellen Maschinen-Sicherung zu ersetzen.

2. __Testmodus__: Der Testmodus erstellt temporäre virtuelle Maschinen für Entwicklung, Tests, Überprüfung von Momentaufnahmen und Wiederherstellungstests nach einem Ausfall gemäß einem wiederholbaren Zeitplan, ohne Auswirkungen auf die Produktionsumgebungen. Testmaschinen laufen so lange, wie erforderlich, um Tests und Überprüfungen durchzuführen, und werden anschließend automatisch bereinigt. Durch die Isolation des Netzwerks können Sie eine sichere Umgebung schaffen, um Ihre Arbeiten durchzuführen, ohne die für die Produktion genutzten virtuellen Maschinen zu beeinträchtigen. Die in Testmodus erstellten virtuellen Maschinen verfügen über eindeutige Namen und Kennungen, um Konflikte in Ihrer Produktionsumgebung zu vermeiden.

3. __Klonmodus__: Der Klonmodus erstellt Kopien von virtuellen Maschinen für Anwendungsfälle, die dauerhafte oder langfristig laufende Kopien erfordern, beispielsweise zur Datenexploration oder zur Duplizierung eines Testumfelds in einem isolierten Netzwerk. Die in Klonmodus erstellten virtuellen Maschinen verfügen über eindeutige Namen und Kennungen, um Konflikte in Ihrer Produktionsumgebung zu vermeiden. Im Klonmodus müssen Sie besonders auf die Ressourcenverbrauch achten, da dieser Modus dauerhafte oder langfristig laufende Maschinen erstellt.

__Die Wiederherstellung ist standardmäßig im Modus "TEST" konfiguriert, um die Produktion zu schützen__, und Sie können den Namen der wiederhergestellten VM wählen:

<img src={shivaVmBackupTest} />

Beachten Sie, dass bei erfolgreichen Tests eine virtuelle Maschine vom Testmodus in den Produktionsmodus überführt werden kann:

<img src={shivaVmBackup_2prod} />