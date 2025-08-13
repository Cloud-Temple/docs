---
title: Pool Management
---
import open_iaas_pool_ha_how_to_find from '../images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '../images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '../images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '../images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '../images/open_iaas_pool_ha_error.png'
import open_iaas_pool_ha_vm_errors from '../images/open_iaas_pool_ha_vm_errors.png'

To manage the high availability of a pool, simply go to the pool page. The high availability status is directly displayed:
<img src={open_iaas_pool_ha_how_to_find} />

To enable high availability on a pool, you must select a Block Storage as Heartbeat:
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Once enabled, you can see the number of [virtual machines that do not have high availability configuration](manage_vm.md):
<img src={open_iaas_pool_ha_enabled} />

If the [number of available hosts](../../concepts.md#high-availability) does not allow high availability to function, an alert message will be displayed:
<img src={open_iaas_pool_ha_error} />

In order to enable high availability on a pool, no virtual machine must be simultaneously powered on, use an ISO from local storage (non-shared), and have high availability configured in "restart" mode. If this situation occurs, you will be able to view the list of problematic virtual machines:
<img src={open_iaas_pool_ha_vm_errors} />
