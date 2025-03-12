---
title: Erste Schritte
---
import shivaInet_001 from './images/shiva_inet_001.png'
import shivaInet_002 from './images/shiva_inet_002.png'
import shivaInet_003 from './images/shiva_inet_003.png'
import shivaInet_004 from './images/shiva_inet_004.png'
import shivaInet_005 from './images/shiva_inet_005.png'
import shivaInet_008 from './images/shiva_inet_008.png'
import shivaInet_007 from './images/shiva_inet_007.png'

## Verwaltung Ihrer Internetkonnektivität

Die Verwaltung der Konnektivität erfolgt über das Menü **'Netzwerk'** > **'Internet'**. Dieses Menü zentralisiert die Verwaltung von IP-Adressen und bietet zwei verschiedene Kategorien:

1. **Öffentliche IP-Adressen**: Sie werden verwendet, um Ihre Dienste im Internet zugänglich zu machen und erleichtern so den ein- und ausgehenden Datenaustausch.
2. **Verbindungs-IP-Adressen**: Diese Adressen ermöglichen es Ihren Gateways, den Datenverkehr zum spezifischen Netzwerk von Cloud Temple zu leiten und sorgen so für eine sichere und effiziente Verbindung.

Öffentliche IP-Adressen ermöglichen den Internetzugang, während Verbindungs-IP-Adressen, die mit dem BGP4-Protokoll verwendet werden, sichere Verbindungen zwischen Netzwerken gewährleisten. Letztere erleichtern einen zuverlässigen und sicheren Austausch zwischen Ihrem Tenant und dem Cloud Temple-Netzwerk. Die kombinierte Nutzung dieser Adressen verbessert das Verkehrsmanagement und erhöht die Sicherheit und Leistung des Netzwerks.

Hier ist die Hauptoberfläche für die IP-Adressverwaltung:

<img src={shivaInet_001} />

Der Startreiter entspricht Ihrer internen ASN, die Ihrem Tenant zugeordnet ist. Er enthält wichtige Informationen für die Einrichtung Ihrer BGP-Konnektivität.

### Öffentliche IP-Adressen

Es ist möglich, die IP-Blöcke und -Adressen, die Ihrem Tenant zugeordnet sind, über das in die Cloud Temple-Konsole integrierte IPAM einzusehen und zu kommentieren:

<img src={shivaInet_002} />

Öffentliche IP-Adressen können über die Schaltfläche **'Öffentliche IPs bestellen'** bestellt werden:

<img src={shivaInet_003} />

Die Reservierung und Zuweisung einer IP-Adresse erfolgt über die Schaltfläche **'Eine Adresse reservieren'**:

<img src={shivaInet_004} />

Die Änderung oder Löschung der Reservierung erfolgt über die Schaltflächen **'Aktionen'**:

<img src={shivaInet_005} />

Das Löschen einer Reservierung bedeutet, dass die Ressource für eine andere Verwendung verfügbar wird, aber dem Kunden weiterhin zugewiesen und in Rechnung gestellt wird.

Bei einigen Zeilen ist die Schaltfläche **'Aktion'** nicht verfügbar, was darauf hinweist, dass die IP-Adressen reserviert und daher nicht für eine Verwendung verfügbar sind.

### Verbindungs-IP-Adressen

Ebenso können Sie Verbindungs-IP-Adressblöcke einsehen und kommentieren. Sie können die Verbindungssubnetze mit dem Cloud Temple-Netzwerk und deren Verwendung visualisieren:

<img src={shivaInet_008} />

Sie können, wie bei öffentlichen Adressen, deren Verwendung in der integrierten IPAM-Verwaltung leicht ändern:

<img src={shivaInet_007} />
