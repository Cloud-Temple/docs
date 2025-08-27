---
title: Guida rapida
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

## Calcolo

### Gestione delle macchine virtuali

L'interfaccia di gestione delle vostre macchine virtuali è disponibile nella console Shiva nel menu __'OpenIaaS'__ situato sulla barra laterale verde a sinistra dello schermo.

### Lista delle macchine virtuali

Nella sezione __'Macchine virtuali'__, avete accesso alla lista delle vostre macchine virtuali ospitate sul vostro Cloud di fiducia.

<img src={openIaasVirtualMachinesList} />

Avete accesso alle seguenti informazioni per ogni macchina virtuale:

- Il suo nome.
- Il suo stato (spenta, accesa).
- La sua zona di disponibilità (AZ).
- Il suo sistema operativo.
- La quantità di CPU virtuali (vCPU).
- La quantità di memoria virtuale (vRAM).

### Azioni sulle macchine virtuali

Le seguenti azioni sono possibili da questa interfaccia:

- Aggiornare la lista delle macchine virtuali.
- Filtrare la lista.
- Cercare una macchina virtuale per nome.
- Creare una nuova macchina virtuale.

<img src={openIaasVirtualMachinesListActions} />

Quando cliccate sulla freccia a discesa verde a destra della lista per una macchina virtuale, accedete a tutte le informazioni su di essa.

<img src={openIaasVirtualMachineOverview} />

Una barra degli strumenti rapida vi permette di eseguire le seguenti azioni:

<img src={openIaasVirtualMachineActions} />

- Accendere la macchina virtuale.
- Spegnerla.
- Riavviarla.
- Aprire la console.
- Montare un ISO.
- Smontare un ISO.
- Convertire la macchina virtuale in un template.
- Spostarla.
- Rinominarla.
- Eliminarla.

Nella scheda di informazioni '__Generali__', troverete informazioni dettagliate relative alla vostra macchina virtuale, come la sua posizione fisica (AZ, Pool, Host), RAM, CPU, indirizzi IP e altro.

<img src={openIaasVirtualMachineOverviewInformations} />

Una scheda '__Avanzate__' vi permette di consultare informazioni più specifiche:

- UUID della macchina virtuale
- Guest tools
- Sistema operativo ospite
- Unità DVD

Così come modificare alcune opzioni come:

- Ordine di avvio
- Secure boot
- Avvio automatico (impossibile se nessuna politica di backup è associata alla VM)

<img src={openIaasVirtualMachineAdvancedOverview} />

## Replica

### Accesso alla Gestione della Replica

L'interfaccia di gestione della replica è disponibile nella console Shiva nel menu __'OpenIaaS'__ > __'Replica'__ situato sulla barra laterale verde a sinistra dello schermo.

<img src={openIaasReplicationMenu} />

### Creazione di una Politica di Replica

Nella sezione __'Replica'__, potete creare politiche che definiscono i parametri di protezione delle vostre macchine virtuali.

<img src={openIaasReplicationPoliciesView} />

Per creare una nuova politica, cliccate sul pulsante __'Aggiungi una politica'__. Si apre un modulo con i seguenti passaggi:

#### Passaggio 1: Informazioni Generali

- __Nome__: Date un nome esplicito alla vostra politica
- __Frequenza__: Scegliete l'intervallo di replica (1-59 minuti o 1-24 ore)

<img src={openIaasReplicationPolicyForm1} />

#### Passaggio 2: Selezione dello Storage

- __Zona di Disponibilità__: Selezionate la zona di destinazione
- __Pool__: Scegliete il pool di risorse
- __Block Storage__: Selezionate lo storage di destinazione

<img src={openIaasReplicationPolicyForm2} />

#### Passaggio 3: Validazione

Verificate i parametri e cliccate su __'Aggiungi'__ per creare la politica.

### Associazione di una VM con la Replica

Per proteggere una macchina virtuale, accedete ai dettagli della vostra VM dalla lista delle macchine virtuali.

Nella vista dettagliata della VM, troverete una sezione __'Replica'__:

<img src={openIaasVmReplicationSection} />

I passaggi per associare una VM con la replica:

1. Cliccate su __'Configura una politica'__
2. Selezionate la politica di replica desiderata dall'elenco a discesa
3. Validate la vostra scelta

La replica inizia automaticamente dopo la validazione.

### Gestione delle Politiche e delle Repliche

#### Vista delle Politiche

La scheda __'Politiche'__ vi permette di visualizzare tutte le vostre politiche di replica:

<img src={openIaasReplicationPoliciesTable} />

Avete accesso alle seguenti informazioni per ogni politica:

- Il suo nome
- La sua frequenza di replica
- La zona di disponibilità di destinazione
- Il pool associato
- Il block storage utilizzato

Le azioni disponibili includono:

- Consultare i dettagli di ogni politica
- Modificare i parametri
- Eliminare una politica non utilizzata

#### Vista delle Repliche

La scheda __'Repliche'__ mostra tutte le macchine virtuali attualmente in replica:

<img src={openIaasReplicationReplicasTable} />

Potete visualizzare:

- Il nome delle macchine virtuali replicate
- La posizione di origine e destinazione
- La politica di replica associata

Le azioni disponibili includono:

- Esportare i dati in formato CSV
- Consultare i dettagli di replica
- Gestire le repliche per politica
