---
title: Leitfaden zum Start
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

## Regionale private Netzwerke

Die Verwaltung der privaten Netzwerke innerhalb einer Region erfolgt direkt in der Cloud Temple-Konsole.

### Innerhalb eines Mandanten

Die Erstellung eines virtuellen Netzwerks erfolgt im Menü __*Network*__ auf dem grünen Balken links auf dem Bildschirm.

<img src={shivaNetwork_001} />

Klicken Sie anschließend auf die Schaltfläche __*Neues Netzwerk*__.

Sie müssen den Namen Ihres Netzwerks angeben, der angezeigt wird. Standardmäßig werden alle Ihre Cluster auf Ihr neues Netzwerk zugreifen.  
Allerdings im Untermenü __*Erweiterte Optionen*__ können Sie die Ausbreitung innerhalb des Mandanten zwischen Ihren verschiedenen Clustern detaillierter angeben.

<img src={shivaNetwork_002} />

Alle möglichen Aktionen für Ihre Netzwerke finden Sie im Menü __*Aktionen*__ jedes einzelnen:

- Die Aktivierung des Netzwerk-Teilens zwischen Mandanten einer Organisation.
- Die Deaktivierung des Netzwerk-Teilens zwischen Mandanten einer Organisation.
- Das Hinzufügen des Netzwerk-Teilens zwischen Mandanten einer Organisation.
- Das Löschen des Netzwerk-Teilens zwischen Mandanten einer Organisation.
- Die grafische Darstellung der Netzwerkverbreitung über alle Ihre Cluster und Hypervisoren innerhalb eines Mandanten.
- Das Löschen einer Verbreitung innerhalb eines Mandanten.
- Die Änderung einer Verbreitung innerhalb eines Mandanten.
- Das Löschen eines Netzwerks.

<img src={shivaNetwork_003} />

#### Visualisierung der Ausbreitung Ihrer Netzwerke

Sie können im Menü __*Aktionen*__ leicht für ein Netzwerk dessen Ausbreitung zu Ihren verschiedenen Clustern innerhalb eines Mieters visualisieren.
Wählen Sie die Option *"Visualisierung der Ausbreitung"*:

<img src={shivaNetwork_004} />

#### Änderung der Propagation

Die Änderung einer Propagation innerhalb eines Mandanten erfolgt über die Option *"Propagieren"*:  
Wählen Sie anschließend die Cluster aus, die in diese Propagation integriert werden sollen.

<img src={shivaNetwork_005} />

__*Hinweis :*__ *Die Änderung der Propagation ist auf 20 Netzwerke pro Aktion begrenzt.*

#### Löschen eines Netzwerks

Das Löschen eines Netzwerks innerhalb eines Mandanten erfolgt über die Option *"Netzwerk löschen"* :

<img src={shivaNetwork_006} />

### Netzwerkfreigabe zwischen Mandanten

Standardmäßig sind Netzwerke nur innerhalb eines Mandanten verfügbar. Sie können ein Netzwerk zwischen mehreren Mandanten freigeben, aus technischen Gründen oder aus Gründen der Verbindung.
Es ist somit möglich, ein Netzwerk zwischen Ihren __[Mandanten](../../console/iam/concepts.md#tenant)__ innerhalb derselben Organisation zu teilen.

Dazu müssen Sie die Freigabe wie unten aktivieren.

<img src={shivaNetworkVnShareEnabled} />

Nach der Aktivierung der Freigabe müssen Sie einfach eine Freigabe wie unten hinzufügen.

<img src={shivaNetworkVnShared} />

Danach wählen Sie den Zielmandanten aus. Beachten Sie, dass die Liste der Mandanten dynamisch ist.
Sie hängt von Ihrer Organisation und Ihren Berechtigungen ab.

<img src={shivaNetworkVnSharedTenant} />

Sobald das Netzwerk freigegeben ist, ist es im Tab „Freigegebene Netzwerke“ in Ihrem zweiten Mandanten sichtbar.

<img src={shivaNetworkVnSharedWithMe} />