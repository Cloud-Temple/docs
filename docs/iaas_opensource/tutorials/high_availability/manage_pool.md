---
title: Gestion du Pool
---
import open_iaas_pool_ha_how_to_find from '../images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '../images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '../images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '../images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '../images/open_iaas_pool_ha_error.png'

Pour gérer la haute disponibilité d'un pool, il vous suffit d'aller sur la page du pool. L'état du HA est directement affiché :
<img src={open_iaas_pool_ha_how_to_find} />

Pour activer la HA sur un pool, vous devez sélectionner un Block Storage en tant que Heartbeat :
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Une fois activé, vous pouvez voir le nombre de machines virtuelles qui n'ont pas de configuration HA :
<img src={open_iaas_pool_ha_enabled} />

Si le nombre d'host disponible ne permet pas de faire fonctionner la HA, un message d'alerte sera affiché :
<img src={open_iaas_pool_ha_error} />
