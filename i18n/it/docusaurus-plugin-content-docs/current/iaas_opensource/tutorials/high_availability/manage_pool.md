---
title: Gestione del Pool
---
import open_iaas_pool_ha_how_to_find from '../images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '../images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '../images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '../images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '../images/open_iaas_pool_ha_error.png'
import open_iaas_pool_ha_vm_errors from '../images/open_iaas_pool_ha_vm_errors.png'

Per gestire l'alta disponibilità di un pool, è sufficiente accedere alla pagina del pool. Lo stato dell'alta disponibilità viene visualizzato direttamente:
<img src={open_iaas_pool_ha_how_to_find} />

Per abilitare l'alta disponibilità su un pool, è necessario selezionare un Block Storage come Heartbeat:
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Una volta abilitato, è possibile visualizzare il numero di [macchine virtuali che non hanno una configurazione](manage_vm.md) ad alta disponibilità:
<img src={open_iaas_pool_ha_enabled} />

Se il [numero di hosts disponibili](../../concepts.md#alta-disponibilità) non consente di far funzionare l'alta disponibilità, verrà visualizzato un messaggio di avviso:
<img src={open_iaas_pool_ha_error} />

Per poter abilitare l'alta disponibilità su un pool, non deve esserci alcuna macchina virtuale accesa contemporaneamente, che utilizzi un ISO proveniente da un archiviazione locale (non condivisa) e che abbia l'alta disponibilità configurata in modalità "restart". In caso di questa situazione, è possibile consultare l'elenco delle macchine virtuali problematiche:
<img src={open_iaas_pool_ha_vm_errors} />