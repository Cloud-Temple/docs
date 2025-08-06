---
title: Erste Schritte
---
import shivaNetwork_001 from './images/shiva_network_001.png'
import shivaNetwork_002 from './images/shiva_network_002.png'
import shivaNetwork_003 from './images/shiva_network_003.png'
import shivaNetwork_004 from './images/shiva_network_004.png'
import shivaNetwork_005 from './images/shiva_network_005.png'
import shivaNetwork_006 from './images/shiva_network_006.png'
import shivaNetworkVnShareEnabled from './images/shiva_network_vn_share_enabled.png'
import shivaNetworkVnShared from './images/shiva_network_vn_shared.png'
import shivaNetworkVnSharedTenant from './images/shiva_network_vn_shared_tenant.png'
import shivaNetworkVnSharedWithMe from './images/shiva_network_vn_shared_with_me.png'

## Regionale private Netzwerke

Private Netzwerke innerhalb einer Region können direkt über die Cloud Temple-Konsole bestellt werden.

### Innerhalb eines Tenants

Die Erstellung eines virtuellen Netzwerks erfolgt im Menü __*Network*__ auf der grünen Leiste auf der linken Seite des Bildschirms.

<img src={shivaNetwork_001} />

Klicken Sie dann auf die Schaltfläche __*Neues Netzwerk*__.

Sie müssen den Namen Ihres Netzwerks angeben, der angezeigt wird. Standardmäßig haben alle Ihre Cluster Zugriff auf Ihr neues Netzwerk.
Im Untermenü __*Erweiterte Optionen*__ können Sie jedoch den Umfang der Ausbreitung innerhalb des Tenants zwischen Ihren verschiedenen Clustern genauer festlegen.

<img src={shivaNetwork_002} />

Alle möglichen Aktionen für Ihre Netzwerke finden Sie im Menü __*Aktionen*__ für jedes einzelne:

- Aktivierung der Netzwerkfreigabe zwischen Tenants derselben Organisation.
- Deaktivierung der Netzwerkfreigabe zwischen Tenants derselben Organisation.
- Hinzufügen einer Netzwerkfreigabe zwischen Tenants derselben Organisation.
- Entfernen einer Netzwerkfreigabe zwischen Tenants derselben Organisation.
- Grafische Visualisierung der Netzwerkausbreitung über alle Ihre Cluster und Hypervisoren innerhalb eines Tenants.
- Entfernen einer Ausbreitung innerhalb eines Tenants.
- Ändern einer Ausbreitung innerhalb eines Tenants.
- Löschen eines Netzwerks.

<img src={shivaNetwork_003} />

#### Visualisierung der Netzwerkausbreitung

Sie können im Menü __*Aktionen*__ leicht die Ausbreitung eines Netzwerks auf Ihre verschiedenen Cluster innerhalb desselben Tenants visualisieren.
Wählen Sie die Option *"Ausbreitung anzeigen"*:

<img src={shivaNetwork_004} />

#### Ändern der Ausbreitung

Das Ändern einer Ausbreitung innerhalb eines Tenants erfolgt über die Option *"Ausbreiten"*:
Wählen Sie dann die Cluster aus, die in diese Ausbreitung einbezogen werden sollen.

<img src={shivaNetwork_005} />

__*Hinweis:*__ *Die Änderung der Ausbreitung ist auf 20 Netzwerke pro Aktion beschränkt.*

#### Löschen eines Netzwerks

Das Löschen eines Netzwerks innerhalb eines Tenants erfolgt über die Option *"Netzwerk löschen"*:

<img src={shivaNetwork_006} />

### Netzwerkfreigabe zwischen Tenants

Standardmäßig sind __Netzwerke nur innerhalb eines Tenants verfügbar__. Sie können wählen, __ein Netzwerk zwischen mehreren Tenants zu teilen__, aus technischen Gründen oder aus Konnektivitätsgründen.
Es ist somit möglich, ein Netzwerk zwischen Ihren __[Tenants](../../../console/iam/concepts/#tenant)__ innerhalb derselben Organisation zu teilen.

Aktivieren Sie dazu einfach die Freigabe wie unten gezeigt.

<img src={shivaNetworkVnShareEnabled} />

Sobald die Freigabe aktiviert ist, müssen Sie nur noch eine Freigabe hinzufügen, wie unten gezeigt.

<img src={shivaNetworkVnShared} />

Wählen Sie dann den Ziel-Tenant aus. Bitte beachten Sie, dass die Liste der Tenants dynamisch ist.
Sie hängt von Ihrer Organisation und Ihren Berechtigungen ab.

<img src={shivaNetworkVnSharedTenant} />

Sobald das Netzwerk geteilt ist, wird es im Tab 'Geteilte Netzwerke' von Ihrem zweiten Tenant aus sichtbar sein.

<img src={shivaNetworkVnSharedWithMe} />
