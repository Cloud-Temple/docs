---
title: Guida rapida
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'
import openIaasReplicationPolicies from './images/open_iaas_replication_policies.png'
import openIaasReplicationPolicyCreate from './images/open_iaas_replication_policy_create.png'
import openIaasReplicationPolicyDetails from './images/open_iaas_replication_policy_details.png'
import openIaasReplicationVmAssociate from './images/open_iaas_replication_vm_associate.png'
import openIaasReplicationVmList from './images/open_iaas_replication_vm_list.png'
import openIaasReplicationReplicas from './images/open_iaas_replication_replicas.png'
import openIaasReplicationStatus from './images/open_iaas_replication_status.png'

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

La replica di macchine virtuali consente di creare e mantenere copie sincronizzate delle vostre VM tra diverse zone di disponibilità, garantendo la continuità aziendale e facilitando l'implementazione di piani di disaster recovery.

### Gestione delle Politiche di Replica

Le politiche di replica definiscono come e quando le vostre macchine virtuali verranno replicate. Accedete alla gestione della replica tramite il menu __'Replica'__ nella sezione OpenIaaS.

<img src={openIaasReplicationPolicies} />

#### Creazione di una Politica di Replica

Per creare una nuova politica di replica:

1. Cliccate sul pulsante __'Crea Politica'__
2. Completate le informazioni richieste:
   - **Nome della politica**: Scegliete un nome descrittivo
   - **Storage di destinazione**: Selezionate il repository di archiviazione (tipo `lvmohba`)
   - **Intervallo di replica**: Scegliete tra 1-59 minuti o 1-24 ore
   - **Zona di disponibilità di destinazione**: Selezionate la zona di destinazione

<img src={openIaasReplicationPolicyCreate} />

#### Dettagli e Gestione delle Politiche

Una volta creata, potete visualizzare i dettagli della politica inclusi:
- Parametri di configurazione
- Macchine virtuali associate
- Stato e cronologia della replica

<img src={openIaasReplicationPolicyDetails} />

### Associazione delle Macchine Virtuali

#### Aggiungere VM a una Politica

Per associare una macchina virtuale con una politica di replica:

1. Selezionate la politica target
2. Cliccate su __'Associa VM'__
3. Scegliete le macchine virtuali da replicare
4. Confermate l'associazione

<img src={openIaasReplicationVmAssociate} />

**Importante**: Le macchine virtuali devono essere situate in una zona di disponibilità diversa dalla zona di destinazione.

#### Gestione delle VM Associate

Visualizzate e gestite tutte le macchine virtuali associate con le vostre politiche di replica:

<img src={openIaasReplicationVmList} />

Per ogni VM, potete:
- Visualizzare lo stato di replica
- Modificare le associazioni
- Monitorare la cronologia di replica

### Monitoraggio delle Repliche

#### Panoramica delle Repliche

Accedete alla lista completa delle vostre repliche e del loro stato:

<img src={openIaasReplicationReplicas} />

Ogni replica mostra:
- Informazioni della macchina virtuale sorgente
- Posizione di destinazione
- Timestamp dell'ultima replica
- Stato attuale

#### Stato della Replica

Monitorate lo stato in tempo reale di tutte le vostre repliche:

<img src={openIaasReplicationStatus} />

L'interfaccia fornisce:
- **Cronologia di esecuzione** con timestamp dettagliati
- **Stato di successo/fallimento** per ogni replica
- **Metriche di performance** e statistiche
- **Notifiche di avviso** per qualsiasi problema

### Migliori Pratiche

- **Pianificate i vostri intervalli**: Scegliete la frequenza di replica basata sulla criticità della vostra applicazione
- **Monitorate lo spazio di archiviazione**: Assicuratevi di avere spazio sufficiente nelle zone di destinazione
- **Testate regolarmente**: Verificate l'integrità delle repliche periodicamente
- **Documentate le politiche**: Mantenete documentazione chiara della vostra strategia di replica

Questa soluzione di replica si integra perfettamente con l'infrastruttura qualificata SecNumCloud di Cloud Temple, fornendo massima sicurezza e conformità per i vostri dati critici.
