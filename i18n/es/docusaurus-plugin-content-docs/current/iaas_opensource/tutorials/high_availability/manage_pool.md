---
title: Gestión del Pool
---
import open_iaas_pool_ha_how_to_find from '../images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '../images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '../images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '../images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '../images/open_iaas_pool_ha_error.png'

Para gestionar la alta disponibilidad de un pool, simplemente vaya a la página del pool. El estado de la alta disponibilidad se muestra directamente:
<img src={open_iaas_pool_ha_how_to_find} />

Para activar la alta disponibilidad en un pool, debe seleccionar un Block Storage como Heartbeat:
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Una vez activado, puede ver el número de [máquinas virtuales que no tienen configuración de alta disponibilidad](manage_vm.md):
<img src={open_iaas_pool_ha_enabled} />

Si el [número de hosts disponibles](../../concepts.md#alta-disponibilidad) no permite que funcione la alta disponibilidad, se mostrará un mensaje de alerta:
<img src={open_iaas_pool_ha_error} />
