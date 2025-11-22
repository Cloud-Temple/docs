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
import openIaasVmConsoleBtn from './images/open_iaas_vm_console_btn.png'
import openIaasVmConsoleOpen from './images/open_iaas_vm_console_open.png'
import openIaasVmConsoleClipboard from './images/open_iaas_vm_console_clipboard.png'

## Calculation

### Virtual Machine Management

The interface for managing your virtual machines is available in the Shiva console under the __'OpenIaaS'__ menu located on the green bar on the left side of the screen.

### Liste der virtuellen Maschinen

In der Sektion __'Virtuelle Maschinen'__ haben Sie Zugriff auf die Liste Ihrer auf Ihrem vertrauenswürdigen Cloud-System gehosteten virtuellen Maschinen.

<img src={openIaasVirtualMachinesList} />

Für jede virtuelle Maschine stehen Ihnen folgende Informationen zur Verfügung:

- Der Name.
- Der Status (ausgeschaltet, eingeschaltet).
- Die Verfügbarkeitszone (AZ).
- Das Betriebssystem.
- Die Anzahl virtueller CPUs (vCPU).
- Die Menge an virtuellem Arbeitsspeicher (vRAM).

### Aktionen für virtuelle Maschinen

Die folgenden Aktionen sind über diese Schnittstelle möglich:

- Aktualisieren der Liste der virtuellen Maschinen.
- Filtern der Liste.
- Suchen einer virtuellen Maschine anhand ihres Namens.
- Erstellen einer neuen virtuellen Maschine.

<img src={openIaasVirtualMachinesListActions} />

Wenn Sie auf den grünen Dropdown-Pfeil rechts neben einer virtuellen Maschine klicken, erhalten Sie Zugriff auf alle verfügbaren Informationen zu dieser Maschine.

<img src={openIaasVirtualMachineOverview} />

Ein schneller Bereich ermöglicht die Ausführung folgender Aktionen:

<img src={openIaasVirtualMachineActions} />

- Virtuelle Maschine starten.
- Virtuelle Maschine herunterfahren.
- Virtuelle Maschine neu starten.
- Konsole öffnen.
- ISO-Medium einlegen.
- ISO-Medium auswerfen.
- Virtuelle Maschine in einen Template umwandeln.
- Virtuelle Maschine verschieben.
- Virtuelle Maschine umbenennen.
- Virtuelle Maschine löschen.

Im Register **„Allgemein“** finden Sie detaillierte Informationen zur virtuellen Maschine, wie beispielsweise ihren physischen Standort (AZ, Pool, Host), den RAM, die CPU, die IP-Adressen und weitere Angaben.

<img src={openIaasVirtualMachineOverviewInformations} />

Ein Register **„Erweitert“** ermöglicht den Zugriff auf spezifischere Informationen:

- UUID der virtuellen Maschine
- Guest Tools
- Gastbetriebssystem
- DVD-Laufwerk

Zusätzlich können bestimmte Einstellungen geändert werden, wie beispielsweise:

- Startreihenfolge
- Secure Boot
- Automatisches Starten (nicht möglich, wenn keiner Sicherungsrichtlinie eine VM zugeordnet ist)

<img src={openIaasVirtualMachineAdvancedOverview} />

### Virtual Machine Console

The console of a virtual machine is accessible from the list of virtual machines by clicking the __'Console'__ icon:

<img src={openIaasVmConsoleBtn} />

A new tab opens in your browser and displays the console of your machine, based on a VNC client:

<img src={openIaasVmConsoleOpen} />

In the VNC menu, you can:
- request the transmission of specific keys,
- force a keyboard mapping (in case your virtual machine uses a different keyboard layout than your web browser),
- open a text field that can be transmitted to the machine. This method replaces the previous non-functional clipboard,
- switch to full-screen mode,
- change the window size (scaling).

#### Keyboard Layout Support

Input entered in the console depends on the keyboard language of your web browser, the keyboard language of the virtual machine, and whether the 'enforce keyboard' option on the left side of the screen is enabled or not.

Below is a summary of the possible scenarios:

| Physical Machine Keyboard Language (input) | Virtual Machine Keyboard Language | 'Enforce Keyboard' Option Selected | Result (output)        |
| ------------------------------------------ | --------------------------------- | ---------------------------------- | ---------------------- |
| French                                     | French                            | No                                 | ✅                     |
| French                                     | French                            | Yes                                | Not recommended        |
| French                                     | English                           | No                                 | English                |
| French                                     | English                           | Yes                                | ✅                     |
| English                                    | French                            | No                                 | French                 |
| English                                    | French                            | Yes                                | ✅                     |
| English                                    | English                           | No                                 | ✅                     |
| English                                    | English                           | Yes                                | Not recommended        |

__Note__:
- If certain characters do not appear during manual input, you may try using the clipboard instead.

#### Clipboard Functionality
This feature allows you to send an entire string of characters to your virtual machine. It is important to note that the "enforce keyboard" option affects how this string of characters is transmitted to your virtual machine. If you notice during console input that the "enforce keyboard" option is required, make sure to enable it before using the clipboard.  
This functionality can be used to send a password, a command, or the content of a configuration file, for example:

<img src={openIaasVmConsoleClipboard} />

Upon clicking the "Paste" button, the content of your text field is sent to your virtual machine.

## Replication

### Access to Replication Management

The replication management interface is available in the Shiva console under the menu __'OpenIaaS'__ > __'Replication'__, located on the green bar on the left side of the screen.

<img src={openIaasReplicationMenu} />

### Creating a replication policy

In the __'Replication'__ section, you can create policies defining the protection settings for your virtual machines.

<img src={openIaasReplicationPoliciesView} />

To create a new policy, click the __'Add policy'__ button. A form opens with the following steps:

#### Step 1: General Information

- __Name__ : Provide an explicit name for your policy
- __Frequency__ : Select the replication interval (1–59 minutes or 1–24 hours)

<img src={openIaasReplicationPolicyForm1} />

#### Step 2: Storage Selection

- __Availability Zone__: Select the destination zone
- __Pool__: Choose the resource pool
- __Block Storage__: Select the destination storage

<img src={openIaasReplicationPolicyForm2} />

#### Schritt 3: Validierung

Überprüfen Sie die Einstellungen und klicken Sie auf __'Hinzufügen'__, um die Richtlinie zu erstellen.

### Associating a VM with Replication

To protect a virtual machine, go to the details of your VM from the list of virtual machines.

In the VM's detailed view, you will find a __'Replication'__ section:

<img src={openIaasVmReplicationSection} />

Steps to associate a VM with replication:

1. Click on __'Configure a policy'__
2. Select the desired replication policy from the dropdown list
3. Confirm your selection

Replication will start automatically after confirmation.

### Policy and Replica Management

#### Policy Overview

The __'Policies'__ tab allows you to view all your replication policies:

<img src={openIaasReplicationPoliciesTable} />

For each policy, you have access to the following information:

- Its name  
- Its replication frequency  
- The destination availability zone  
- The associated pool  
- The block storage used  

Available actions include:

- View details for each policy  
- Modify parameters  
- Delete an unused policy

#### Replica View

The __'Replicas'__ tab displays all virtual machines currently being replicated:

<img src={openIaasReplicationReplicasTable} />

You can view:

- The names of the replicated virtual machines  
- The source and target locations  
- The associated replication policy  

Available actions include:

- Export data in CSV format  
- View replication details  
- Manage replicas by policy