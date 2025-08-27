---
title: Gestión del Pool
---
import open_iaas_pool_ha_how_to_find from '../images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '../images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '../images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '../images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '../images/open_iaas_pool_ha_error.png'
import open_iaas_pool_ha_vm_errors from '../images/open_iaas_pool_ha_vm_errors.png'

Para gestionar la alta disponibilidad de un pool, simplemente vaya a la página del pool. El estado de la alta disponibilidad se muestra directamente:
<img src={open_iaas_pool_ha_how_to_find} />

Para activar la alta disponibilidad en un pool, debe seleccionar un Block Storage como Heartbeat:
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Una vez activado, puede ver el número de [máquinas virtuales que no tienen configuración](manage_vm.md) de alta disponibilidad:
<img src={open_iaas_pool_ha_enabled} />

Si el [número de hosts disponibles](../../concepts.md#alta-disponibilidad) no permite ejecutar la alta disponibilidad, se mostrará un mensaje de alerta:
<img src={open_iaas_pool_ha_error} />

Para poder activar la alta disponibilidad en un pool, ninguna máquina virtual debe estar encendida simultáneamente, usar una ISO de un almacenamiento local (no compartido) y tener la alta disponibilidad configurada en modo "reinicio". Si ocurre esta situación, podrá consultar la lista de máquinas virtuales problemáticas:
<img src={open_iaas_pool_ha_vm_errors} />