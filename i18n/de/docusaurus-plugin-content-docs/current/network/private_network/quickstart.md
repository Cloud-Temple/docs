---
title: Schnellstart
---
import shivaNetwork_001 from '@site/docs/network/private_network/images/shiva_network_001.png'
import shivaNetwork_002 from '@site/docs/network/private_network/images/shiva_network_002.png'
import shivaNetwork_003 from '@site/docs/network/private_network/images/shiva_network_003.png'
import shivaNetwork_004 from '@site/docs/network/private_network/images/shiva_network_004.png'
import shivaNetwork_005 from '@site/docs/network/private_network/images/shiva_network_005.png'
import shivaNetwork_006 from '@site/docs/network/private_network/images/shiva_network_006.png'
import shivaNetwork_007 from '@site/docs/network/private_network/images/shiva_network_007.png'
import shivaNetwork_008 from '@site/docs/network/private_network/images/shiva_network_008.png'
import shivaNetwork_009 from '@site/docs/network/private_network/images/shiva_network_009.png'
import shivaNetwork_010 from '@site/docs/network/private_network/images/shiva_network_010.png'
import shivaNetworkVnShareEnabled from '@site/docs/network/private_network/images/shiva_network_vn_share_enabled.png'
import shivaNetworkVnShared from '@site/docs/network/private_network/images/shiva_network_vn_shared.png'
import shivaNetworkVnSharedTenant from '@site/docs/network/private_network/images/shiva_network_vn_shared_tenant.png'
import shivaNetworkVnSharedWithMe from '@site/docs/network/private_network/images/shiva_network_vn_shared_with_me.png'
import shivaNetwork_order_001 from '@site/docs/network/private_network/images/shiva_order_network_001.png'
import shivaNetworkDeletePropagation from '@site/docs/network/private_network/images/shiva_network_delete_propagation.png'
import shivaNetworkDeletePropagationOrder from '@site/docs/network/private_network/images/shiva_network_delete_propagation_order.png'
import shivaNetworkDeletePropagationOrderValidate from '@site/docs/network/private_network/images/shiva_network_delete_propagation_order_validate.png'

## Regionale private Netzwerke

Die Bestellung privater Netzwerke innerhalb einer Region erfolgt direkt in der Cloud-Temple-Konsole.

### Innerhalb eines Tenants

Die Erstellung eines virtuellen Netzwerks erfolgt im Menü __*Netzwerk*__ > __*Privater Backbone*__ auf der grünen Leiste links auf dem Bildschirm.

<img src={shivaNetwork_001} />

Klicken Sie anschließend auf die Schaltfläche __*Neues Netzwerk*__

Sie müssen den Namen Ihres Netzwerks angeben, der angezeigt wird. Standardmäßig haben alle Ihre Cluster Zugriff auf Ihr neues Netzwerk.

Es ist nun möglich, mehrere Netzwerke gleichzeitig zu erstellen. Klicken Sie einfach auf __*Netzwerk hinzufügen*__.

<img src={shivaNetwork_002} />

In den nächsten Schritten können Sie den Umfang der Propagierung innerhalb des Tenants zwischen Ihren verschiedenen IaaS-VMware- oder Open-IaaS-Clustern genauer festlegen.

<div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
  <img src={shivaNetwork_003} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
  <img src={shivaNetwork_004} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
</div>

### Verwaltung der Netzwerkbestellungen

Nachdem Sie alle Schritte abgeschlossen haben, werden Ihre Netzwerke erstellt und anschließend eine Bestellung zur Propagierung generiert. Sie können Ihre Bestellungen verfolgen:

- Über den Tab __*Bestellungen*__ im Hauptmenü

<img src={shivaNetwork_order_001} />

- Durch Klicken auf die Informationslabels, die zu den zugehörigen Bestellungen weiterleiten

> __Wichtig:__ Es ist nicht möglich, mehrere Bestellungen desselben Ressourcentyps gleichzeitig zu generieren. Sie müssen warten, bis die laufende Bestellung bearbeitet wurde, bevor Sie eine neue erstellen.

Alle möglichen Aktionen für Ihre Netzwerke finden Sie im Menü __*Aktionen*__ jedes einzelnen:

- Die Aktivierung der Netzwerkfreigabe zwischen Tenants derselben Organisation.
- Die Deaktivierung der Netzwerkfreigabe zwischen Tenants derselben Organisation.
- Das Hinzufügen einer Netzwerkfreigabe zwischen Tenants derselben Organisation.
- Das Löschen einer Netzwerkfreigabe zwischen Tenants derselben Organisation.
- Die grafische Darstellung der Propagierung eines Netzwerks über alle Ihre Cluster und Hypervisoren innerhalb eines Tenants.
- Das Löschen einer Propagierung innerhalb eines Tenants.
- Die Änderung einer Propagierung innerhalb eines Tenants.

> Das Löschen eines Netzwerks ist noch nicht verfügbar.

<img src={shivaNetwork_005} />
<img src={shivaNetwork_006} />

#### Darstellung der Propagierung Ihrer Netzwerke

Sie können im Menü __*Aktionen*__ für ein Netzwerk dessen Propagierung zu Ihren verschiedenen Clustern innerhalb desselben Tenants leicht visualisieren.

Wählen Sie die Option *"Propagierung anzeigen"* :

<img src={shivaNetwork_007} />

#### Änderung der Propagierung

Die Änderung einer Propagierung innerhalb eines Tenants erfolgt über die Option __*Propagieren*__ :

Wählen Sie anschließend, zu welchem Produkt (IaaS VMware, Open IaaS, Bare Metal) Sie Ihre Netzwerke propagieren möchten, dann die Cluster, die in diese Propagierung integriert werden sollen.

<img src={shivaNetwork_008} />
<img src={shivaNetwork_009} />

__*Hinweis:*__ *Die Änderung der Propagierung ist auf 20 Netzwerke pro Aktion begrenzt.*

#### Löschen der Propagierung

Das Löschen einer Propagierung innerhalb eines Tenants erfolgt über die Option __*Propagierung löschen*__:

Wählen Sie anschließend, welche Propagierung Sie löschen möchten:

<img src={shivaNetworkDeletePropagation} />

Anschließend wird eine Bestellung erstellt, wie bei der initialen Erstellung mit Propagierung.

<img src={shivaNetworkDeletePropagationOrder} />
<img src={shivaNetworkDeletePropagationOrderValidate} />

#### Verschiebte Propagierung der Netzwerke

Es ist möglich, die Erstellung und die Propagierung der Netzwerke in zwei getrennte Schritte zu unterteilen:

1. __Ein bestehendes Netzwerk propagieren__ : Klicken Sie auf die Aktion __*Propagieren*__ bei einem bereits erstellten Netzwerk
2. __Ziel der Propagierung auswählen__ : Anschließend wird eine Bestellung erstellt, wie bei der initialen Erstellung mit Propagierung.

#### Aktivierung und Deaktivierung der Netzwerke

Ein Netzwerk kann vorübergehend deaktiviert werden, ohne gelöscht zu werden, und anschließend wieder aktiviert werden.

<img src={shivaNetwork_010} />

### Netzwerkfreigabe zwischen Tenants

Standardmäßig sind __Netzwerke nur innerhalb eines Tenants verfügbar__. Sie können entscheiden, __ein Netzwerk zwischen mehreren Tenants freizugeben__, aus technischen Gründen oder aus Gründen der Konnektivität.
So ist es möglich, ein Netzwerk zwischen Ihren __[Tenant](../../console/iam/concepts.md#tenant)__ innerhalb derselben Organisation freizugeben.

Dafür genügt es, die Freigabe wie unten zu aktivieren.

<img src={shivaNetworkVnShareEnabled} />

Sobald die Aktivierung der Freigabe erfolgt ist, genügt es, eine Freigabe wie unten hinzuzufügen.

<img src={shivaNetworkVnShared} />

Wählen Sie anschließend den Ziel-Tenant. Achtung, die Liste der Tenants ist dynamisch.
Sie hängt von Ihrer Organisation und Ihren Berechtigungen ab.

<img src={shivaNetworkVnSharedTenant} />

Sobald das Netzwerk freigegeben wurde, ist es im Tab 'Geteilte Netzwerke' aus Ihrem zweiten Tenant sichtbar.

<img src={shivaNetworkVnSharedWithMe} />

### Darstellung der geteilten Netzwerke

Sobald die Netzwerke propagiert wurden, ermöglicht der Tab "Geteilte Netzwerke" die Darstellung der Netzwerke, die andere Tenants Ihrer Organisation mit Ihnen teilen:

<img src={shivaNetwork_007} />
