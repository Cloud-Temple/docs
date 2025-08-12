---
title: Gestione del Pool
---
import open_iaas_pool_ha_how_to_find from '../images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '../images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '../images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '../images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '../images/open_iaas_pool_ha_error.png'
import open_iaas_pool_ha_vm_errors from '../images/open_iaas_pool_ha_vm_errors.png'

Per gestire l'alta disponibilità di un pool, è sufficiente andare alla pagina del pool. Lo stato dell'alta disponibilità viene visualizzato direttamente:
<img src={open_iaas_pool_ha_how_to_find} />

Per attivare l'alta disponibilità su un pool, è necessario selezionare un Block Storage come Heartbeat:
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Una volta attivato, è possibile vedere il numero di [macchine virtuali che non hanno configurazione](manage_vm.md) ad alta disponibilità:
<img src={open_iaas_pool_ha_enabled} />

Se il [numero di host disponibili](../../concepts.md#alta-disponibilità) non consente il funzionamento dell'alta disponibilità, verrà visualizzato un messaggio di avviso:
<img src={open_iaas_pool_ha_error} />

Per poter attivare l'alta disponibilità su un pool, nessuna macchina virtuale deve essere contemporaneamente accesa, utilizzare un ISO da storage locale (non condiviso), e avere l'alta disponibilità configurata in modalità "restart". Se questa situazione si verifica, sarà possibile consultare l'elenco delle macchine virtuali problematiche:
<img src={open_iaas_pool_ha_vm_errors} />
