---
title: Gestione del Pool
---
import open_iaas_pool_ha_how_to_find from '../images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '../images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '../images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '../images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '../images/open_iaas_pool_ha_error.png'

Per gestire l'alta disponibilità di un pool, è sufficiente andare alla pagina del pool. Lo stato HA viene visualizzato direttamente:
<img src={open_iaas_pool_ha_how_to_find} />

Per attivare l'HA su un pool, è necessario selezionare un Block Storage come Heartbeat:
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Una volta attivato, è possibile vedere il numero di macchine virtuali che non hanno configurazione HA:
<img src={open_iaas_pool_ha_enabled} />

Se il numero di host disponibili non consente il funzionamento dell'HA, verrà visualizzato un messaggio di avviso:
<img src={open_iaas_pool_ha_error} />
