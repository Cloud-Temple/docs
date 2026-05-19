---
title: Guida di avvio
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

## Calcolo

### Gestione delle macchine virtuali

L'interfaccia di gestione delle tue macchine virtuali è disponibile nella Console nel menu __'OpenIaaS'__ situato nella barra verde a sinistra dello schermo.

### Elenco delle macchine virtuali

Nella sezione __'Macchine virtuali'__, ha accesso all'elenco delle sue macchine virtuali ospitate sul suo Cloud attendibile.

<img src={openIaasVirtualMachinesList} />

Ha accesso alle seguenti informazioni, per ogni macchina virtuale:

- Il suo nome.
- Il suo stato (spento, acceso).
- La sua zona di disponibilità (AZ).
- Il suo sistema operativo.
- La quantità di CPU virtuali (vCPU).
- La quantità di memoria virtuale (vRAM).

### Azioni sulle macchine virtuali

Le seguenti azioni sono possibili da questa interfaccia:

- Aggiornare l'elenco delle macchine virtuali.
- Filtrare l'elenco.
- Cercare una macchina virtuale per nome.
- Creare una nuova macchina virtuale.

<img src={openIaasVirtualMachinesListActions} />

Quando si fa clic sulla freccia a discesa verde sulla destra dell'elenco per una macchina virtuale, si accede a tutte le informazioni relative a essa.

<img src={openIaasVirtualMachineOverview} />

Una barra rapida consente di eseguire le seguenti azioni:

<img src={openIaasVirtualMachineActions} />

- Accendere la macchina virtuale.
- Spegnerla.
- Riavviarla.
- Aprire la console.
- Montare un ISO.
- Smontare un ISO.
- Convertire la macchina virtuale in modello.
- Spostarla.
- Rinominarla.
- Eliminarla.

Nella scheda di informazione '__Generali__', si trovano informazioni dettagliate relative alla propria macchina virtuale, come la posizione fisica (AZ, Pool, Host), la RAM, la CPU, gli indirizzi IP e altro.

<img src={openIaasVirtualMachineOverviewInformations} />

Una scheda '__Avanzate__' consente di consultare informazioni più specifiche:

- UUID della macchina virtuale
- Guest tools
- Sistema operativo guest
- Unità DVD

Nonché modificare alcune opzioni quali:

- Ordine di avvio
- Secure boot
- Avvio automatico (impossibile se non è associata alcuna politica di backup alla VM)

<img src={openIaasVirtualMachineAdvancedOverview} />

### Console di una macchina virtuale

La console di una macchina virtuale è accessibile dall'elenco delle macchine virtuali facendo clic sull'icona __'Console'__ :

<img src={openIaasVmConsoleBtn} />

Si apre una nuova scheda del browser e viene visualizzata la console della tua macchina, basata su un client VNC :

<img src={openIaasVmConsoleOpen} />

Nel menu VNC è possibile :

- richiedere l'invio di tasti particolari,
- forzare la mappatura della tastiera (nel caso in cui la tua macchina virtuale non abbia la stessa disposizione della tastiera del tuo browser web),
- aprire un campo di testo da inviare alla macchina. Questo metodo sostituisce il vecchio sistema di appunti non funzionante,
- passare alla modalità a schermo intero,
- modificare le dimensioni della finestra (ridimensionamento).

#### Supporto layout tastiera

La digitazione eseguita nella console dipende dalla lingua della tastiera del browser web, dalla lingua della tastiera della macchina virtuale e dall'attivazione o meno dell'opzione 'enforce keyboard' a sinistra dello schermo.
Di seguito una sintesi delle possibili situazioni:

| Lingua tastiera macchina fisica (input) | Lingua tastiera macchina virtuale | Opzione 'enforce keyboard' selezionata | Risultato (output) |
| ------------------------------------------------- | ----------------------------------------- | -------------------------------------- | ------------------------ |
| Francese                                          | Francese                                  | No                                     | ✅                       |
| Francese                                          | Francese                                  | Sì                                     | Non consigliato            |
| Francese                                          | Inglese                                   | No                                     | Inglese                  |
| Francese                                          | Inglese                                   | Sì                                     | ✅                       |
| Inglese                                           | Francese                                  | No                                     | Francese                 |
| Inglese                                           | Francese                                  | Sì                                     | ✅                       |
| Inglese                                           | Inglese                                   | No                                     | ✅                       |
| Inglese                                           | Inglese                                   | Sì                                     | Non consigliato            |

__Nota__ :

- Se alcuni caratteri non vengono immessi manualmente, puoi provare tramite gli appunti.

#### Funzionamento degli appunti

Questa funzionalità ti permette di inviare una stringa di caratteri completa alla tua macchina virtuale. È importante notare che il tasto "enforce keyboard" influenza il modo in cui questa stringa di caratteri
verrà trasmessa alla tua macchina virtuale. Se durante la digitazione nella console riscontri che l'opzione "enforce keyboard" è necessaria, ricordati di attivarla prima di utilizzare gli appunti.  
Questa funzionalità può essere utilizzata per l'invio di una password, di un comando o del contenuto di un file di configurazione, ad esempio:

<img src={openIaasVmConsoleClipboard} />

Al clic sul pulsante "Paste", il contenuto del tuo campo di testo viene inviato alla tua macchina virtuale.

## Replicazione

### Accesso alla gestione della replicazione

L'interfaccia di gestione della replicazione è disponibile nella Console nel menu __'OpenIaaS'__ > __'Replicazione'__ situato nella barra verde a sinistra dello schermo.

<img src={openIaasReplicationMenu} />

### Creazione di una politica di replicazione

Nella sezione __'Replicazione'__, è possibile creare politiche che definiscono i parametri di protezione delle macchine virtuali.

<img src={openIaasReplicationPoliciesView} />

Per creare una nuova politica, fai clic sul pulsante __'Aggiungi politica'__. Si apre un modulo con i passaggi seguenti:

#### Passo 1 : Informazioni generali

- __Nome__ : Assegna un nome esplicito alla tua politica
- __Frequenza__ : Seleziona l'intervallo di replica (1-59 minuti o 1-24 ore)

<img src={openIaasReplicationPolicyForm1} />

#### Fase 2: Selezione dello storage

- __Zona di disponibilità__ : Seleziona la zona di destinazione
- __Pool__ : Scegli il pool di risorse
- __Block Storage__ : Seleziona lo storage di destinazione

<img src={openIaasReplicationPolicyForm2} />

#### Fase 3: Validazione

Verificare i parametri e fare clic su __'Aggiungi'__ per creare la policy.

### Associazione di una VM alla replica

Per proteggere una macchina virtuale, accedi ai dettagli della tua VM dall'elenco delle macchine virtuali.

Nella vista dettagliata della VM, troverai una sezione __'Replica'__ :

<img src={openIaasVmReplicationSection} />

I passaggi per associare una VM alla replica :

1. Clicca su __'Configura una policy'__
2. Seleziona la policy di replica desiderata dall'elenco a discesa
3. Conferma la tua scelta

La replica viene avviata automaticamente dopo la conferma.

### Gestione delle politiche e repliche

#### Vista delle politiche

La scheda __'Politiche'__ consente di visualizzare tutte le proprie politiche di replicazione:

<img src={openIaasReplicationPoliciesTable} />

Sono disponibili le seguenti informazioni per ogni politica:

- Il nome
- La frequenza di replicazione
- La zona di disponibilità di destinazione
- Il pool associato
- Lo storage a blocchi utilizzato

Le azioni disponibili includono:

- Visualizzare i dettagli di ogni politica
- Modificare le impostazioni
- Eliminare una politica non utilizzata

#### Vista delle repliche

La scheda __'Repliche'__ visualizza tutte le macchine virtuali in fase di replica:

<img src={openIaasReplicationReplicasTable} />

È possibile visualizzare:

- Il nome delle macchine virtuali replicate
- La posizione di origine e destinazione
- La politica di replica associata

Le azioni disponibili includono:

- Esportazione dei dati in formato CSV
- Visualizzazione dei dettagli di replica
- Gestione delle repliche per politica