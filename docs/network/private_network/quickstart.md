---
title: Guide de démarrage
---
import shivaNetwork_001 from './images/shiva_network_001.png'
import shivaNetwork_002 from './images/shiva_network_002.png'
import shivaNetwork_003 from './images/shiva_network_003.png'
import shivaNetwork_004 from './images/shiva_network_004.png'
import shivaNetwork_005 from './images/shiva_network_005.png'
import shivaNetwork_006 from './images/shiva_network_006.png'
import shivaNetwork_007 from './images/shiva_network_007.png'
import shivaNetwork_008 from './images/shiva_network_008.png'
import shivaNetwork_009 from './images/shiva_network_009.png'
import shivaNetwork_010 from './images/shiva_network_010.png'
import shivaNetworkVnShareEnabled from './images/shiva_network_vn_share_enabled.png'
import shivaNetworkVnShared from './images/shiva_network_vn_shared.png'
import shivaNetworkVnSharedTenant from './images/shiva_network_vn_shared_tenant.png'
import shivaNetworkVnSharedWithMe from './images/shiva_network_vn_shared_with_me.png'
import shivaNetwork_order_001 from './images/shiva_order_network_001.png'
import shivaNetworkDeletePropagation from './images/shiva_network_delete_propagation.png'
import shivaNetworkDeletePropagationOrder from './images/shiva_network_delete_propagation_order.png'
import shivaNetworkDeletePropagationOrderValidate from './images/shiva_network_delete_propagation_order_validate.png'

## Réseaux privés régionaux

La commande des réseaux privés au sein d'une région se réalise directement dans la console Cloud Temple.

### Au sein d'un tenant

La création d'un réseau virtuel se fait dans le menu __*Réseaux*__ sur le bandeau vert à gauche de l'écran.

<img src={shivaNetwork_001} />

Cliquer ensuite sur le bouton __*Nouveau réseau*__

Vous devez spécifier le nom de votre réseau qui sera affiché. Par défaut, l'ensemble de vos clusters accéderont à votre nouveau réseau.

Il est désormais possible de créer plusieurs réseaux simultanément. Cliquez simplement sur __*ajouter un réseau*__.

<img src={shivaNetwork_002} />

Dans les prochaines étapes, vous pourrez spécifier plus finement l'étendue de la propagation au sein du tenant entre vos différents clusters IaaS VMware ou Open IaaS.

<div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
  <img src={shivaNetwork_003} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
  <img src={shivaNetwork_004} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
</div>

### Gestion des commandes de réseau

Après avoir compléter toutes les étapes, vos réseaux sont créés, puis une commande est générée pour les propager. Vous pouvez suivre vos commandes :

- Via l'onglet __*Commandes*__ dans le menu principal

<img src={shivaNetwork_order_001} />

- En cliquant sur les labels d'information qui redirigent vers les commandes liées

> __Important :__ Il n'est pas possible de générer plusieurs commandes du même type de ressource simultanément. Vous devez attendre que la commande en cours soit prise en charge avant d'en créer une nouvelle.

L'ensemble des actions possibles sur vos réseaux se trouve dans le menu __*Actions*__ de chacun d'eux :

- L'activation du partage d'un réseau entre tenant d'une meme organisation.
- La désactivation du partage d'un réseau entre tenant d'une meme organisation.
- L'ajout d'un partage d'un réseau entre tenant d'une meme organisation.
- La suppression d'un partage d'un réseau entre tenant d'une meme organisation.
- La visualisation graphique de la propagation d'un réseau sur l'ensemble de vos clusters et de vos hyperviseurs au sein d'un tenant.
- La suppression d'une propagation au sein d'un tenant.
- La modification d'une propagation au sein d'un tenant.

> La suppression d'un réseau n'est pas encore disponible.

<img src={shivaNetwork_005} />
<img src={shivaNetwork_006} />

#### Visualisation de la propagation de vos réseaux

Vous pouvez facilement dans le menu __*Actions*__ visualiser pour un réseau sa propagation vers vos différents clusters au sein d'un même tenant.

Choisissez l'option *"Visualiser la propagation"* :

<img src={shivaNetwork_007} />

#### Modification de la propagation

La modification d'une propagation au sein d'un tenant est réalisée par l'option __*Propager*__ :

Choisissez ensuite vers quel produit (IaaS VMware, Open IaaS, Bare metal) vous souhaitez propager vos réseaux, puis les clusters devant être intégrés à cette propagation.

<img src={shivaNetwork_008} />
<img src={shivaNetwork_009} />

__*Remarque :*__ *La modification de propagation est limitée à 20 réseaux par action.*

#### Suppression de la propagation

La suppression d'une propagation au sein d'un tenant est réalisée par l'option __*Supprimer une propagation*__:

Choississez ensuite quelle propagation vous souhaitez supprimer:

<img src={shivaNetworkDeletePropagation} />

Une commande est ensuite créée, comme lors de la création initiale avec propagation.

<img src={shivaNetworkDeletePropagationOrder} />
<img src={shivaNetworkDeletePropagationOrderValidate} />

#### Propagation différée des réseaux

Il est possible de séparer la création et la propagation des réseaux en deux étapes distinctes :

1. __Propager un réseau existant__ : Cliquez sur l'action __*Propager*__ sur un réseau déjà créé
2. __Sélectionner la cible de propagation__ : Une commande est ensuite créée, comme lors de la création initiale avec propagation.

#### Activation et désactivation des réseaux

Un réseau peut être temporairement désactivé sans être supprimé puis ensuite être réactivé.

<img src={shivaNetwork_010} />

### Partage de réseau entre tenants

Par défaut, __les réseaux sont uniquement disponibles au sein d'un tenant__. Vous pouvez choisir de __partager un réseau entre plusieurs tenants__ pour des raisons techniques ou des raisons de connectivité.
Il est ainsi possible de partager un réseau entre vos __[Tenant](../../console/iam/concepts.md#tenant)__ au sein d'une même organisation.

Il suffit pour cela d'activer le partage comme ci-dessous.

<img src={shivaNetworkVnShareEnabled} />

Une fois l'activation du partage effectué, il vous suffit d'ajouter un partage comme ci-dessous.

<img src={shivaNetworkVnShared} />

Puis, sélectionner le tenant cible. Attention, la liste des tenants est dynamique.
Elle dépend de votre organisation et de vos droits.

<img src={shivaNetworkVnSharedTenant} />

Une fois le réseau partagé, il sera visible dans l'onglet 'Réseaux partagés' depuis votre second tenant.

<img src={shivaNetworkVnSharedWithMe} />

### Visualisation des réseaux partagés

Une fois les réseaux propagés, l'onglet "Réseaux partagés" permet de visualiser les réseaux que d'autres tenants de votre organisation partagent avec vous :

<img src={shivaNetwork_007} />
