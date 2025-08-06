---
title: Schnellstartanleitung
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

## Regionale private Netzwerke

Die Bestellung privater Netzwerke innerhalb einer Region erfolgt direkt in der Cloud Temple-Konsole.

### Innerhalb eines Tenants

Die Erstellung eines virtuellen Netzwerks erfolgt im Menü __*Netzwerke*__ in der grünen Leiste auf der linken Seite des Bildschirms.

<img src={shivaNetwork_001} />

Klicken Sie dann auf die Schaltfläche __*Neues Netzwerk*__

Sie müssen den Namen Ihres Netzwerks angeben, der angezeigt wird. Standardmäßig greifen alle Ihre Cluster auf Ihr neues Netzwerk zu.

Es ist jetzt möglich, mehrere Netzwerke gleichzeitig zu erstellen. Klicken Sie einfach auf __*Netzwerk hinzufügen*__.

<img src={shivaNetwork_002} />

In den nächsten Schritten können Sie den Umfang der Verbreitung innerhalb des Tenants zwischen Ihren verschiedenen VMware IaaS- oder Open IaaS-Clustern genauer festlegen.

<div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
  <img src={shivaNetwork_003} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
  <img src={shivaNetwork_004} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
</div>

### Verwaltung von Netzwerkbestellungen

Nach Abschluss aller Schritte werden Ihre Netzwerke erstellt und anschließend eine Bestellung zur Verbreitung generiert. Sie können Ihre Bestellungen verfolgen:

- Über die Registerkarte __*Bestellungen*__ im Hauptmenü

<img src={shivaNetwork_order_001} />

- Durch Klicken auf die Informationslabels, die zu den zugehörigen Bestellungen weiterleiten

> __Wichtig:__ Es ist nicht möglich, mehrere Bestellungen desselben Ressourcentyps gleichzeitig zu generieren. Sie müssen warten, bis die aktuelle Bestellung bearbeitet wurde, bevor Sie eine neue erstellen.

Alle möglichen Aktionen für Ihre Netzwerke finden Sie im Menü __*Aktionen*__ jedes einzelnen:

- Aktivierung der Netzwerkfreigabe zwischen Tenants derselben Organisation.
- Deaktivierung der Netzwerkfreigabe zwischen Tenants derselben Organisation.
- Hinzufügen einer Netzwerkfreigabe zwischen Tenants derselben Organisation.
- Entfernen einer Netzwerkfreigabe zwischen Tenants derselben Organisation.
- Grafische Visualisierung der Netzwerkverbreitung über alle Ihre Cluster und Hypervisoren innerhalb eines Tenants.
- Löschen einer Verbreitung innerhalb eines Tenants.
- Ändern einer Verbreitung innerhalb eines Tenants.

> Das Löschen von Netzwerken ist noch nicht verfügbar.

<img src={shivaNetwork_005} />
<img src={shivaNetwork_006} />

#### Anzeige Ihrer Netzwerkverbreitung

Sie können im Menü __*Aktionen*__ einfach die Verbreitung eines Netzwerks zu Ihren verschiedenen Clustern innerhalb desselben Tenants anzeigen.

Wählen Sie die Option *"Verbreitung anzeigen"*:

<img src={shivaNetwork_007} />

#### Änderung der Verbreitung

Die Änderung einer Verbreitung innerhalb eines Tenants erfolgt über die Option __*Verbreiten*__:

Wählen Sie dann aus, auf welches Produkt (VMware IaaS, Open IaaS, Bare Metal) Sie Ihre Netzwerke verbreiten möchten, und dann die Cluster, die in diese Verbreitung integriert werden sollen.

<img src={shivaNetwork_008} />
<img src={shivaNetwork_009} />

__*Hinweis:*__ *Die Änderung der Verbreitung ist auf 20 Netzwerke pro Aktion begrenzt.*

#### Löschen der Verbreitung

Das Löschen einer Verbreitung innerhalb eines Tenants erfolgt über die Option __*Verbreitung löschen*__:

Wählen Sie dann aus, welche Verbreitung Sie löschen möchten:

<img src={shivaNetworkDeletePropagation} />

Anschließend wird eine Bestellung erstellt, wie bei der ursprünglichen Erstellung mit Verbreitung.

<img src={shivaNetworkDeletePropagationOrder} />
<img src={shivaNetworkDeletePropagationOrderValidate} />

#### Verzögerte Netzwerkverbreitung

Es ist möglich, die Netzwerkerstellung und -verbreitung in zwei separate Schritte zu unterteilen:

1. __Ein vorhandenes Netzwerk verbreiten__: Klicken Sie auf die Aktion __*Verbreiten*__ bei einem bereits erstellten Netzwerk
2. __Das Verbreitungsziel auswählen__: Anschließend wird eine Bestellung erstellt, wie bei der ursprünglichen Erstellung mit Verbreitung.

#### Aktivieren und Deaktivieren von Netzwerken

Ein Netzwerk kann vorübergehend deaktiviert werden, ohne gelöscht zu werden, und dann wieder aktiviert werden.

<img src={shivaNetwork_010} />

### Netzwerkfreigabe zwischen Tenants

Standardmäßig sind __Netzwerke nur innerhalb eines Tenants verfügbar__. Sie können sich dafür entscheiden, __ein Netzwerk zwischen mehreren Tenants zu teilen__ aus technischen Gründen oder aus Konnektivitätsgründen.
Es ist somit möglich, ein Netzwerk zwischen Ihren __[Tenants](../../../console/iam/concepts/#tenant)__ innerhalb derselben Organisation zu teilen.

Aktivieren Sie dazu einfach die Freigabe wie unten gezeigt.

<img src={shivaNetworkVnShareEnabled} />

Sobald die Freigabe aktiviert ist, fügen Sie einfach eine Freigabe wie unten gezeigt hinzu.

<img src={shivaNetworkVnShared} />

Wählen Sie dann den Ziel-Tenant aus. Beachten Sie, dass die Tenant-Liste dynamisch ist.
Sie hängt von Ihrer Organisation und Ihren Rechten ab.

<img src={shivaNetworkVnSharedTenant} />

Sobald das Netzwerk freigegeben ist, wird es in der Registerkarte "Geteilte Netzwerke" von Ihrem zweiten Tenant aus sichtbar sein.

<img src={shivaNetworkVnSharedWithMe} />

### Anzeige geteilter Netzwerke

Sobald die Netzwerke verbreitet sind, können Sie über die Registerkarte "Geteilte Netzwerke" die Netzwerke anzeigen, die andere Tenants Ihrer Organisation mit Ihnen teilen:

<img src={shivaNetwork_007} />
