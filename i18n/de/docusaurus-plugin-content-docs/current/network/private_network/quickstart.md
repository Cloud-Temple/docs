---
title: Guide de démarrage
---
import shivaNetwork_001 from './images/shiva_network_001.jpg'
import shivaNetwork_002 from './images/shiva_network_002.jpg'
import shivaNetwork_003 from './images/shiva_network_003.jpg'
import shivaNetwork_004 from './images/shiva_network_004.jpg'
import shivaNetwork_005 from './images/shiva_network_005.jpg'
import shivaNetwork_006 from './images/shiva_network_006.jpg'
import shivaNetworkVnShareEnabled from './images/shiva_network_vn_share_enabled.png'
import shivaNetworkVnShared from './images/shiva_network_vn_shared.png'
import shivaNetworkVnSharedTenant from './images/shiva_network_vn_shared_tenant.png'
import shivaNetworkVnSharedWithMe from './images/shiva_network_vn_shared_with_me.png'


## Regionale Private Netzwerke

Die Bestellung privater Netzwerke innerhalb einer Region erfolgt direkt in der Cloud Temple-Konsole.

### Innerhalb eines Tenants

Die Erstellung eines virtuellen Netzwerks erfolgt im Menü __*Network*__ auf der grünen Leiste links auf dem Bildschirm.

<img src={shivaNetwork_001} />

Klicken Sie dann auf die Schaltfläche __*Neues Netzwerk*__

Sie müssen den Namen Ihres Netzwerks angeben, der angezeigt wird. Standardmäßig haben alle Ihre Cluster Zugriff auf Ihr neues Netzwerk.
Im Untermenü __*Erweiterte Optionen*__ können Sie jedoch den Umfang der Ausbreitung innerhalb des Tenants zwischen Ihren verschiedenen Clustern genauer angeben.

<img src={shivaNetwork_002} />

Alle möglichen Aktionen für Ihre Netzwerke finden Sie im Menü __*Aktionen*__ für jedes einzelne:

- Die Aktivierung der Freigabe eines Netzwerks zwischen Tenants derselben Organisation.
- Die Deaktivierung der Freigabe eines Netzwerks zwischen Tenants derselben Organisation.
- Das Hinzufügen der Freigabe eines Netzwerks zwischen Tenants derselben Organisation.
- Das Entfernen der Freigabe eines Netzwerks zwischen Tenants derselben Organisation.
- Die grafische Darstellung der Ausbreitung eines Netzwerks auf alle Ihre Cluster und Hypervisoren innerhalb eines Tenants.
- Das Entfernen einer Ausbreitung innerhalb eines Tenants.
- Die Anpassung einer Ausbreitung innerhalb eines Tenants.
- Das Löschen eines Netzwerks.

<img src={shivaNetwork_003} />

#### Visualisierung der Ausbreitung Ihrer Netzwerke

Im Menü __*Aktionen*__ können Sie die Ausbreitung eines Netzwerks auf Ihre verschiedenen Cluster innerhalb eines Tenants einfach visualisieren.
Wählen Sie die Option *"Ausbreitung anzeigen"* :

<img src={shivaNetwork_004} />

#### Anpassung der Ausbreitung

Die Anpassung einer Ausbreitung innerhalb eines Tenants erfolgt über die Option *"Ausbreiten"* :
wählen Sie dann die Cluster aus, die in diese Ausbreitung einbezogen werden sollen.

<img src={shivaNetwork_005} />

__*Anmerkung:*__ *Die Anpassung der Ausbreitung ist auf 20 Netzwerke pro Aktion begrenzt.*

#### Löschung eines Netzwerks

Die Löschung eines Netzwerks innerhalb eines Tenants erfolgt über die Option *"Netzwerk löschen"* :

<img src={shivaNetwork_006} />

### Netzwerkfreigabe zwischen Tenants

Standardmäßig __sind Netzwerke nur innerhalb eines Tenants verfügbar__. Sie können wählen, ein Netzwerk aus __technischen oder Konnektivitätsgründen zwischen mehreren Tenants zu teilen__.
Es ist möglich, ein Netzwerk zwischen Ihren __[Tenant](../../../console/iam/concepts/#tenant)__ innerhalb derselben Organisation zu teilen.

Sie müssen lediglich die Freigabe wie unten aktiviert.

<img src={shivaNetworkVnShareEnabled} />

Sobald die Freigabe aktiviert ist, fügen Sie einfach eine Freigabe wie unten hinzu.

<img src={shivaNetworkVnShared} />

Wählen Sie dann den Ziel-Tenant aus. Beachten Sie, dass die Liste der Tenants dynamisch ist.
Sie hängt von Ihrer Organisation und Ihren Rechten ab.

<img src={shivaNetworkVnSharedTenant} />

Sobald das Netzwerk freigegeben ist, wird es unter dem Tab 'Geteilte Netzwerke' von Ihrem zweiten Tenant aus sichtbar sein.

<img src={shivaNetworkVnSharedWithMe} />