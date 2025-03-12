---
title: Guida rapida
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'

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
