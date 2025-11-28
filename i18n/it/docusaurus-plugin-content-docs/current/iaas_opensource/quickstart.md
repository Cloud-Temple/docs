---
title: Guida di avvio
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

## Calcolo

### Gestione delle macchine virtuali

L'interfaccia di gestione delle macchine virtuali è disponibile nella Console nel menu __'OpenIaaS'__ situato sulla barra verde a sinistra dello schermo.

### Elenco delle macchine virtuali

Nella sezione __'Macchine virtuali'__, puoi accedere all'elenco delle tue macchine virtuali ospitate sul tuo Cloud di fiducia.

<img src={openIaasVirtualMachinesList} />

Per ciascuna macchina virtuale, hai accesso alle seguenti informazioni:

- Il nome.
- Lo stato (spenta, accesa).
- La zona di disponibilità (AZ).
- Il sistema operativo.
- La quantità di CPU virtuali (vCPU).
- La quantità di memoria virtuale (vRAM).

### Azioni sulle macchine virtuali

Le seguenti azioni sono disponibili da questa interfaccia:

- Aggiornare l'elenco delle macchine virtuali.
- Filtrare l'elenco.
- Cerca una macchina virtuale in base al nome.
- Creare una nuova macchina virtuale.

<img src={openIaasVirtualMachinesListActions} />

Quando fai clic sulla freccia verde a destra della lista per una macchina virtuale, accedi a tutte le informazioni relative a tale macchina.

<img src={openIaasVirtualMachineOverview} />

Una barra rapida consente di eseguire le seguenti azioni:

<img src={openIaasVirtualMachineActions} />

- Accendere la macchina virtuale.
- Spegnere la macchina virtuale.
- Riavviare la macchina virtuale.
- Aprire la console.
- Montare un ISO.
- Smontare un ISO.
- Convertire la macchina virtuale in un modello.
- Spostare la macchina virtuale.
- Rinominare la macchina virtuale.
- Eliminare la macchina virtuale.

Nella scheda '__Generali__', trovi informazioni dettagliate relative alla tua macchina virtuale, come la posizione fisica (AZ, Pool, Host), la RAM, il CPU, gli indirizzi IP e altri dati.

<img src={openIaasVirtualMachineOverviewInformations} />

Una scheda '__Avanzate__' consente di visualizzare informazioni più specifiche:

- UUID della macchina virtuale
- Guest tools
- Sistema operativo ospite
- Lettore DVD

Nonché di modificare alcune opzioni, come:

- Ordine di avvio
- Secure Boot
- Avvio automatico (impossibile se non è associata alcuna politica di backup alla VM)

<img src={openIaasVirtualMachineAdvancedOverview} />

### Console di una macchina virtuale

La console di una macchina virtuale è accessibile dalla lista delle macchine virtuali facendo clic sull'icona __'Console'__:

<img src={openIaasVmConsoleBtn} />

Si apre un nuovo tab del browser, che mostra la console della tua macchina, basata su un client VNC:

<img src={openIaasVmConsoleOpen} />

Nel menu VNC è possibile:
- richiedere l'invio di tasti particolari,
- forzare un mapping della tastiera (nel caso in cui la disposizione della tastiera della tua macchina virtuale sia diversa da quella del tuo browser web),
- aprire un campo di testo trasmissibile alla macchina. Questo metodo sostituisce il vecchio appunti non funzionante,
- passare alla modalità a schermo intero,
- modificare la dimensione della finestra (scaling).

#### Keyboard layout support
The input entered in the console depends on the keyboard language of your web browser, the keyboard language of the virtual machine, and whether the 'enforce keyboard' option on the left side of the screen is enabled or not.  
Here is a summary of the possible scenarios:

| Physical machine keyboard language (input) | Virtual machine keyboard language | 'Enforce keyboard' option selected | Result (output)        |
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
- If certain characters do not appear when typed manually, you can try pasting them from the clipboard.

#### Funzionamento degli appunti
Questa funzionalità ti permette di inviare una stringa completa di caratteri alla tua macchina virtuale. È importante notare che il pulsante "enforce keyboard" influisce sul modo in cui questa stringa verrà trasmessa alla tua macchina virtuale. Se durante l'inserimento nella console riscontri la necessità di attivare l'opzione "enforce keyboard", assicurati di abilitarla prima di utilizzare gli appunti.  
Questa funzionalità può essere utilizzata per inviare una password, un comando o il contenuto di un file di configurazione, ad esempio:

<img src={openIaasVmConsoleClipboard} />

Al clic sul pulsante "Incolla", il contenuto del campo di testo viene inviato alla tua macchina virtuale.

## Replica

### Accesso alla gestione della replica

L'interfaccia di gestione della replica è disponibile nella Console nel menu __'OpenIaaS'__ > __'Replica'__, situato sulla barra verde a sinistra dello schermo.

<img src={openIaasReplicationMenu} />

### Creazione di una politica di replica

Nella sezione __'Replica'__, è possibile creare politiche che definiscono i parametri di protezione delle macchine virtuali.

<img src={openIaasReplicationPoliciesView} />

Per creare una nuova politica, fare clic sul pulsante __'Aggiungi una politica'__. Si aprirà un modulo con le seguenti fasi:

#### Step 1: General Information

- __Name__ : Provide an explicit name for your policy
- __Frequency__ : Select the replication interval (1-59 minutes or 1-24 hours)

<img src={openIaasReplicationPolicyForm1} />

#### Step 2: Storage Selection

- __Availability Zone__: Select the destination zone
- __Pool__: Choose the resource pool
- __Block Storage__: Select the destination storage

<img src={openIaasReplicationPolicyForm2} />

#### Passo 3: Convalida

Verificate i parametri e clicca su __'Aggiungi'__ per creare la politica.

### Associazione di una VM alla replica

Per proteggere una macchina virtuale, accedi ai dettagli della tua VM dalla lista delle macchine virtuali.

Nella vista dettagliata della VM, troverai una sezione __'Replica'__:

<img src={openIaasVmReplicationSection} />

Passaggi per associare una VM alla replica:

1. Clicca su __'Configura una politica'__
2. Seleziona la politica di replica desiderata dall'elenco a discesa
3. Conferma la tua scelta

La replica verrà avviata automaticamente dopo la conferma.

### Gestione delle politiche e dei replica

#### Visualizzazione delle politiche

L'opzione __'Politiche'__ ti permette di visualizzare tutte le tue politiche di replica:

<img src={openIaasReplicationPoliciesTable} />

Per ogni politica hai accesso alle seguenti informazioni:

- Il nome della politica
- La frequenza di replica
- La zona di disponibilità di destinazione
- Il pool associato
- Lo storage a blocchi utilizzato

Le azioni disponibili includono:

- Visualizzare i dettagli di ciascuna politica
- Modificare i parametri
- Eliminare una politica non utilizzata

#### Vista dei repliche

Il tab __'Repliche'__ mostra tutte le macchine virtuali in corso di replica:

<img src={openIaasReplicationReplicasTable} />

È possibile visualizzare:

- Il nome delle macchine virtuali replicate
- Il percorso di origine e destinazione
- La politica di replica associata

Le azioni disponibili includono:

- Esportazione dei dati nel formato CSV
- Consultazione dei dettagli di replica
- Gestione delle repliche per politica
