---
title: Gestione del Pool
---
import open_iaas_pool_ha_how_to_find from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_error.png'
import open_iaas_pool_ha_vm_errors from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_vm_errors.png'

Per gestire l'alta disponibilità di un pool, è sufficiente andare alla pagina del pool. Lo stato dell'alta disponibilità è direttamente visualizzato:
<img src={open_iaas_pool_ha_how_to_find} />

Per abilitare l'alta disponibilità su un pool, aprite il menu delle azioni (⋮) poi « Modifica alta disponibilità », e selezionate un Block Storage come Heartbeat:
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Una volta abilitato, è possibile visualizzare il numero di [macchine virtuali che non hanno una configurazione](manage_vm.md) di alta disponibilità:
<img src={open_iaas_pool_ha_enabled} />

Se il [numero di host disponibili](../../concepts.md#alta-disponibilità) non consente di far funzionare l'alta disponibilità, verrà visualizzato un messaggio di avviso:
<img src={open_iaas_pool_ha_error} />

Per poter abilitare l'alta disponibilità su un pool, nessuna macchina virtuale deve essere simultaneamente accesa, utilizzare un ISO proveniente da un archivio locale (non condiviso) e avere l'alta disponibilità configurata in modalità "restart". Se questa situazione si verifica, sarà possibile consultare l'elenco delle macchine virtuali che causano il problema:
<img src={open_iaas_pool_ha_vm_errors} />
