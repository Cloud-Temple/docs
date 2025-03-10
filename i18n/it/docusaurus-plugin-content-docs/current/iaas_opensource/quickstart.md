---
title: Guida per Iniziare
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'


## Calcolo

### Gestione delle Macchine Virtuali

L’interfaccia di gestione delle tue macchine virtuali è disponibile nella console Shiva nel menu __'OpenIaaS'__ situato sulla fascia verde a sinistra dello schermo.

### Elenco delle macchine virtuali

Nella sezione __'Machines virtuelles'__, hai accesso all'elenco delle tue macchine virtuali ospitate sul tuo Cloud di fiducia.

<img src={openIaasVirtualMachinesList} />

Hai accesso alle seguenti informazioni, per ogni macchina virtuale:

- Il suo nome.
- Il suo stato (spenta, accesa).
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

Quando fai clic sulla freccia a discesa verde sulla destra dell'elenco per una macchina virtuale, accedi a tutte le informazioni che riguardano quella macchina.

<img src={openIaasVirtualMachineOverview} />

Una barra rapida consente di eseguire le seguenti azioni:

<img src={openIaasVirtualMachineActions} />

- Accendere la macchina virtuale.
- Spegnerla.
- Riavviarla.
- Aprire la console.
- Montare un ISO.
- Smontare un ISO.
- Convertire la macchina virtuale in un modello.
- Spostarla.
- Rinominare.
- Eliminarla.

Nella scheda delle informazioni '**Generali**', trovi informazioni dettagliate relative alla tua macchina virtuale, come la sua posizione fisica (AZ, Pool, Host), RAM, CPU, indirizzi IP, e altro.

<img src={openIaasVirtualMachineOverviewInformations} />

Una scheda '**Avanzato**' consente di consultare informazioni più specifiche:

- UUID della macchina virtuale
- Guest tools
- OS ospite
- Lettore DVD

Inoltre, è possibile modificare alcune opzioni come:
- L'ordine di avvio
- Il secure boot
- L'avvio automatico (impossibile se nessuna politica di backup è associata alla VM)

<img src={openIaasVirtualMachineAdvancedOverview} />