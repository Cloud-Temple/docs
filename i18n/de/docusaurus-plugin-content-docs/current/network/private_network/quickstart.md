---
title: Quickstart
---

## Regionale private Netzwerke

Die Verwaltung der privaten Netzwerke innerhalb einer Region erfolgt direkt in der Cloud Temple-Konsole.

### Innerhalb eines Tenants

Die Erstellung eines virtuellen Netzwerks erfolgt im Menü __*Network*__ auf dem grünen Streifen links auf dem Bildschirm.

![](images/shiva_network_001.jpg)

Klicken Sie dann auf die Schaltfläche __*Nouveau réseau*__

Sie müssen den Namen Ihres Netzwerks angeben, der angezeigt wird. Standardmäßig haben alle Ihre Cluster Zugriff auf Ihr neues Netzwerk.
Im Untermenü __*Options Avancées*__ können Sie jedoch die Verbreitungsreichweite innerhalb des Tenants zwischen Ihren verschiedenen Clustern genauer festlegen.

![](images/shiva_network_002.jpg)

Alle möglichen Aktionen für Ihre Netzwerke finden Sie im Menü __*Actions*__ für jedes von ihnen:

- Die Aktivierung der Netzwerkfreigabe zwischen Tenants einer gleichen Organisation.
- Die Deaktivierung der Netzwerkfreigabe zwischen Tenants einer gleichen Organisation.
- Das Hinzufügen einer Netzwerkfreigabe zwischen Tenants einer gleichen Organisation.
- Das Entfernen einer Netzwerkfreigabe zwischen Tenants einer gleichen Organisation.
- Die grafische Darstellung der Verbreitung eines Netzwerks auf alle Ihre Cluster und Hypervisoren innerhalb eines Tenants.
- Das Entfernen einer Verbreitung innerhalb eines Tenants.
- Die Änderung einer Verbreitung innerhalb eines Tenants.
- Das Löschen eines Netzwerks.

![](images/shiva_network_003.jpg)

#### Visualisierung der Verbreitung Ihrer Netzwerke

Im Menü __*Actions*__ können Sie einfach die Verbreitung eines Netzwerks auf Ihre verschiedenen Cluster innerhalb eines Tenants anzeigen lassen.
Wählen Sie die Option *"Visualiser la propagation"*:

![](images/shiva_network_004.jpg)

#### Änderung der Verbreitung

Die Änderung einer Verbreitung innerhalb eines Tenants erfolgt über die Option *"Propager"*:
wählen Sie dann die Cluster aus, die in diese Verbreitung einbezogen werden sollen.

![](images/shiva_network_005.jpg)

__*Hinweis:*__ *Die Änderung der Verbreitung ist auf 20 Netzwerke pro Aktion beschränkt.*

#### Löschen eines Netzwerks

Das Löschen eines Netzwerks innerhalb eines Tenants erfolgt über die Option *"Supprimer le réseau"*:

![](images/shiva_network_006.jpg)

### Netzwerkfreigabe zwischen Tenants

Standardmäßig sind __die Netzwerke nur innerhalb eines Tenants verfügbar__. Sie können jedoch wählen, __ein Netzwerk zwischen mehreren Tenants__ aus technischen oder Konnektivitätsgründen zu teilen.
Es ist möglich, ein Netzwerk zwischen Ihren __[Tenant](../../../console/iam/concepts/#tenant)__ innerhalb einer gleichen Organisation zu teilen.

Dazu einfach die Freigabe wie unten gezeigt aktivieren.

![](images/shiva_network_vn_share_enabled.png)

Sobald die Freigabe aktiviert ist, fügen Sie einfach eine Freigabe wie unten gezeigt hinzu.

![](images/shiva_network_vn_shared.png)

Wählen Sie dann den Zieltenant aus. Bitte beachten Sie, dass die Liste der Tenants dynamisch ist.
Sie hängt von Ihrer Organisation und Ihren Rechten ab.

![](images/shiva_network_vn_shared_tenant.png)

Sobald das Netzwerk geteilt ist, wird es im Register 'Geteilte Netzwerke' von Ihrem zweiten Tenant aus sichtbar sein.

![](images/shiva_network_vn_shared_with_me.png)
