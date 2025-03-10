---
title: Guide de démarrage
---
import shivaInet_001 from './images/shiva_inet_001.png'
import shivaInet_002 from './images/shiva_inet_002.png'
import shivaInet_003 from './images/shiva_inet_003.png'
import shivaInet_004 from './images/shiva_inet_004.png'
import shivaInet_005 from './images/shiva_inet_005.png'
import shivaInet_008 from './images/shiva_inet_008.png'
import shivaInet_007 from './images/shiva_inet_007.png'


## Verwaltung Ihrer Internetverbindungen

Die Verwaltung der Konnektivität erfolgt über das Menü **'Netzwerk'** > **'Internet'**. Dieses Menü zentralisiert die Verwaltung der IP-Adressen und bietet zwei unterschiedliche Kategorien:

1. **Öffentliche IP-Adressen**: Diese werden verwendet, um Ihre Dienste im Internet zu veröffentlichen und somit eingehende und ausgehende Datenübertragungen zu erleichtern.
2. **Interkonnektions-IP-Adressen**: Diese Adressen ermöglichen es Ihren Gateways, den Datenverkehr in das spezifische Netzwerk von Cloud Temple zu leiten und so eine sichere und effiziente Verbindung zu gewährleisten.

Öffentliche IP-Adressen ermöglichen den Internetzugang, während Interkonnektions-IP-Adressen in Verbindung mit dem BGP4-Protokoll sichere Verbindungen zwischen Netzwerken gewährleisten. Letztere erleichtern sichere und zuverlässige Verbindungen zwischen Ihrem Mandanten und dem Netzwerk von Cloud Temple. Die gemeinsame Nutzung dieser Adressen verbessert das Verkehrsmanagement und stärkt die Sicherheit und Leistung des Netzwerks.

Hier ist die Hauptschnittstelle zur Verwaltung der IP-Adressen:

<img src={shivaInet_001} />

Der Start-Tab entspricht Ihrem internen ASN, der Ihrem Mandanten zugewiesen ist. Er enthält insbesondere wichtige Informationen für die Konfiguration Ihrer BGP-Konnektivität.

### Öffentliche IP-Adressen

Sie können die Blöcke und IP-Adressen, die Ihrem Mandanten zugewiesen sind, über das in die Cloud Temple-Konsole integrierte IPAM anzeigen und kommentieren:

<img src={shivaInet_002} />

Die Bestellung öffentlicher IP-Adressen erfolgt über den Button **'Öffentliche IPs bestellen'**:

<img src={shivaInet_003} />

Die Reservierung und Zuweisung einer IP-Adresse erfolgt über den Button **'Eine Adresse reservieren'**:

<img src={shivaInet_004} />

Die Änderung oder Löschung der Reservierung erfolgt über die Buttons **'Aktionen'**:

<img src={shivaInet_005} />

Das Löschen einer Reservierung bedeutet, dass die Ressource für eine andere Nutzung verfügbar wird, aber weiterhin dem Kunden zugewiesen und in Rechnung gestellt wird.

Bei einigen Zeilen ist der Button **'Aktion'** nicht verfügbar, was darauf hinweist, dass die IP-Adressen reserviert und somit nicht für eine Nutzung verfügbar sind.

### Interkonnektions-IP-Adressen

In gleicher Weise können Sie die Blöcke der Interkonnektions-IP-Adressen anzeigen und kommentieren. Sie können die Interkonnektionsnetze mit dem Cloud Temple-Netzwerk und deren Nutzung anzeigen:

<img src={shivaInet_008} />

Sie können, wie bei den öffentlichen Adressen, deren Nutzung im integrierten IPAM-Management leicht ändern:

<img src={shivaInet_007} />