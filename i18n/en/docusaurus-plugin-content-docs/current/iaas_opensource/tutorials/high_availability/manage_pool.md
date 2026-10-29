---
title: Pool Management
---
import open_iaas_pool_ha_how_to_find from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_error.png'
import open_iaas_pool_ha_vm_errors from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_vm_errors.png'

To manage the high availability of a pool, simply go to the pool page. The high availability status is displayed directly:
<img src={open_iaas_pool_ha_how_to_find} />

To enable high availability on a pool, open the actions menu (⋮) then "Modify high availability", and select a Block Storage as a Heartbeat:
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Once enabled, you can see the number of [virtual machines that do not have a high availability configuration](manage_vm.md):
<img src={open_iaas_pool_ha_enabled} />

If the [number of available hosts](../../concepts.md#high-availability) does not allow high availability to work, an alert message will be displayed:
<img src={open_iaas_pool_ha_error} />

In order to enable high availability on a pool, no virtual machine must be simultaneously powered on, using an ISO from a local (non-shared) storage, and having high availability configured in "restart" mode. If this situation occurs, you can view the list of problematic virtual machines:
<img src={open_iaas_pool_ha_vm_errors} />
