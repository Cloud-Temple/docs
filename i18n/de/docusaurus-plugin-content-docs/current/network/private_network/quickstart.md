---
Leitfaden zum Einstieg
---

```
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
```

### Private Networks within a Region

The management of private networks within a region is directly handled through the Cloud Temple console.

### Inner to Tenant

The creation of a virtual network takes place in the *Réseaux* menu on the top left bar in the screen.

<img src={shivaNetwork_001} />

Clicking on the button *Nouveau réseau*

You need to specify the name of your network, which will be displayed. By default, all of your clusters will access your new network.

It is now possible to create several networks simultaneously. Simply click on *ajouter un réseau*.

<img src={shivaNetwork_002} />

In the following steps, you can specify more precisely the scope of propagation within the tenant between your different IaaS VMware or Open IaaS clusters.

<div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
  <img src={shivaNetwork_003} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
  <img src={shivaNetwork_004} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
</div>

### Verwaltung von Netzwerkbefehlen

Nachdem alle Schritte abgeschlossen sind, werden Ihre Netzwerke erstellt und eine Befehlszeile generiert, um sie zu verbreiten. Sie können Ihre Befehle wie folgt überwachen:

- Im Tab __Befehl__ im Hauptmenü

<img src={shivaNetwork_order_001} />

- Durch Klicken auf die Informationen, die zu den zugehörigen Befehlen weisen

> **Wichtig:** Es ist nicht möglich, gleichzeitig mehrere Befehle desselben Ressourcentyps zu generieren. Sie müssen warten, bis der aktuelle Befehl bearbeitet wird, bevor Sie einen neuen erstellen.

Alle verfügbaren Aktionen für Ihre Netzwerke sind im Menü __Befehl__ jedes einzelnen Netzwerks zu finden:

- Aktivierung des Teilens eines Netzwerks zwischen Tenant innerhalb derselben Organisation.
- Deaktivierung des Teilens eines Netzwerks zwischen Tenant innerhalb derselben Organisation.
- Hinzufügen eines neuen Teilens eines Netzwerks zwischen Tenant innerhalb derselben Organisation.
- Löschen eines bestehenden Teilens eines Netzwerks zwischen Tenant innerhalb derselben Organisation.
- Darstellung grafisch der Verbreitung eines Netzwerks auf allen Clustern und Hypervisoren innerhalb eines Tenants.
- Löschen der Verbreitung innerhalb eines Tenants.
- Änderung der Verbreitung innerhalb eines Tenants.

> Die Löschung eines Netzwerks ist derzeit nicht verfügbar.

<img src={shivaNetwork_005} />
<img src={shivaNetwork_006} />

#### Anzeigen der Verbreitung von Netzwerken

Sie können leicht im Menü __*Aktionen*__ die Verbreitung eines Netzwerks auf Ihre verschiedenen Clusters innerhalb einesselben Tenants visualisieren.

Wählen Sie die Option *"Verbreitungsverfolgung anzeigen"* :

<img src={shivaNetwork_007} />

#### Modifikation der Verbreitung

Die Änderung einer Verbreitungsregel innerhalb eines Tenants erfolgt über die Option __Verbreiten__. Nachdem Sie einen Produkt (z.B. IaaS VMware, Open IaaS, Bare metal) ausgewählt haben, müssen die Clusters in diese Verbreitung integriert werden.

<img src={shivaNetwork_008} />
<img src={shivaNetwork_009} />

__Hinweis:__ *Die Änderung der Verbreitungsregel ist auf 20 Netzwerke pro Aktion beschränkt.*

#### Entfernung der Verbreitung

Die Entfernung einer Verbreitung innerhalb eines Tenants erfolgt durch die Option __Entfernen einer Verbreitung__:

Wählen Sie dann aus, welche Verbreitung Sie entfernen möchten:

<img src={shivaNetworkDeletePropagation} />

Eine Kommando wird dann erstellt, wie bei der ursprünglichen Erstellung mit Verbreitung.

<img src={shivaNetworkDeletePropagationOrder} />
<img src={shivaNetworkDeletePropagationOrderValidate} />

#### Verzögerte Netzwerkverbreitung

Es ist möglich, die Erstellung und Verbreitung von Netzwerken in zwei separaten Schritten zu trennen:

1. __Verbreiten eines bestehenden Netzwerks__ : Klicken Sie auf die Aktion __*Verbreiten*__ auf einem bereits erstelltem Netzwerk
2. __Auswahl des Ziels der Verbreitung__ : Eine Befehlszeile wird dann erstellt, ähnlich wie bei der ursprünglichen Erstellung mit Verbreitung.

#### Aktivierung und Deaktivierung von Netzwerken

Ein Netzwerk kann zeitweise deaktiviert werden, ohne dass es gelöscht wird, und dann wieder aktiviert werden.

<img src={shivaNetwork_010} />

### Network Sharing Between Tenants

By default, **networks are only available within a single tenant**. You can choose to **share a network across multiple tenants** for technical or connectivity reasons. This means you can share a network between your **[Tenant](../../console/iam/concepts.md#tenant)** within the same organization.

To achieve this, simply enable sharing as shown below:

<img src={shivaNetworkVnShareEnabled} />

After enabling sharing, add a share as follows:

<img src={shivaNetworkVnShared} />

Next, select the target tenant. Note that the list of tenants is dynamic and depends on your organization and your permissions.

<img src={shivaNetworkVnSharedTenant} />

Once network sharing is enabled, it will be visible in the 'Shared Networks' tab from your second tenant.

<img src={shivaNetworkVnSharedWithMe} />

### Anzeige von geteilten Netzwerken

Nachdem die Netzwerkverbindungen propagiert wurden, ermöglicht der Register "Geteilte Netzwerke" die Darstellung der Netzwerke, die andere Tenants Ihrer Organisation mit Ihnen teilen:

<img src={shivaNetwork_007} />