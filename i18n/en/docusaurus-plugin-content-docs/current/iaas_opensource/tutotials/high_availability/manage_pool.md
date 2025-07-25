---
title: Pool Management
---
import open_iaas_pool_ha_how_to_find from '../images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '../images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '../images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '../images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '../images/open_iaas_pool_ha_error.png'

To manage the high availability of a pool, simply go to the pool page. The HA status is directly displayed:
<img src={open_iaas_pool_ha_how_to_find} />

To enable HA on a pool, you must select a Block Storage as Heartbeat:
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Once enabled, you can see the number of virtual machines that do not have HA configuration:
<img src={open_iaas_pool_ha_enabled} />

If the number of available hosts does not allow HA to function, an alert message will be displayed:
<img src={open_iaas_pool_ha_error} />
