---
title: Gestion du Pool
---
import open_iaas_pool_ha_how_to_find from '../images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '../images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '../images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '../images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '../images/open_iaas_pool_ha_error.png'
import open_iaas_pool_ha_vm_errors from '../images/open_iaas_pool_ha_vm_errors.png'

Pour gérer la haute disponibilité d'un pool, il vous suffit d'aller sur la page du pool. L'état de la haute disponibilité est directement affiché :
<img src={open_iaas_pool_ha_how_to_find} />

Pour activer la haute disponibilité sur un pool, vous devez sélectionner un Block Storage en tant que Heartbeat :
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Une fois activé, vous pouvez voir le nombre de [machines virtuelles qui n'ont pas de configuration](manage_vm.md) haute disponibilité :
<img src={open_iaas_pool_ha_enabled} />

Si le [nombre d'hosts disponibles](../../concepts.md#haute-disponibilité) ne permet pas de faire fonctionner la haute disponibilité, un message d'alerte sera affiché :
<img src={open_iaas_pool_ha_error} />

Afin de pouvoir activer la haute disponibilité sur un pool, aucune machine virtuelle ne doit être simultanément allumée, utiliser un ISO provenant d’un stockage local (non partagé), et avoir la haute disponibilité configurée en mode "restart". Si cette situation se produit, vous pourrez consulter la liste des machines virtuelles posant problème:
<img src={open_iaas_pool_ha_vm_errors} />
