---
title: Quickstart
---


## Verwaltung Ihrer Internetverbindungen

Die Verwaltung der Konnektivität erfolgt über das Menü **'Netzwerk'** > **'Internet'**. Dieses Menü zentralisiert die Verwaltung der IP-Adressen und bietet zwei verschiedene Kategorien:

1. **Öffentliche IP-Adressen** : Sie werden verwendet, um Ihre Dienste im Internet verfügbar zu machen und so den eingehenden und ausgehenden Datenverkehr zu erleichtern.
2. **Interconnect-IP-Adressen** : Diese Adressen ermöglichen es Ihren Gateways, den Verkehr zu dem spezifischen Netzwerk von Cloud Temple zu lenken, wodurch eine sichere und effiziente Verbindung gewährleistet wird.

Öffentliche IP-Adressen ermöglichen den Internetzugang, während die mit dem BGP4-Protokoll verwendeten Interconnect-IP-Adressen sichere Verbindungen zwischen Netzwerken gewährleisten. Letztere erleichtern zuverlässige und sichere Datenaustausche zwischen Ihrem Tenant und dem Cloud Temple-Netzwerk. Die gemeinsame Nutzung dieser Adressen verbessert das Verkehrsmanagement und erhöht die Netzwerksicherheit und -leistung.

Hier ist die Hauptschnittstelle zur Verwaltung der IP-Adressen:

![](images/shiva_inet_001.png)

Der Startbildschirm entspricht Ihrem internen ASN, der Ihrem Tenant gewidmet ist. Er zeigt insbesondere die wichtigen Informationen für die Konfiguration Ihrer BGP-Konnektivität an.

### Öffentliche IP-Adressen

Es ist möglich, die IP-Blöcke und Adressen, die Ihrem Tenant zugeordnet sind, über das in der Cloud Temple-Konsole integrierte IPAM einzusehen und zu kommentieren:

![](images/shiva_inet_002.png)

Die Bestellung von öffentlichen IP-Adressen erfolgt über die Schaltfläche **'Öffentliche IPs bestellen'** :

![](images/shiva_inet_003.png)

Die Reservierung und Zuweisung einer IP-Adresse erfolgt über die Schaltfläche **'Adresse reservieren'** :

![](images/shiva_inet_004.png)

Das Ändern oder Löschen der Reservierung erfolgt über die Schaltflächen **'Aktionen'** :

![](images/shiva_inet_005.png)

Das Löschen einer Reservierung bedeutet, dass die Ressource für eine andere Nutzung verfügbar wird, aber weiterhin dem Kunden zugewiesen und in Rechnung gestellt wird.

In einigen Zeilen ist die Schaltfläche **'Aktion'** nicht verfügbar, was darauf hinweist, dass die IP-Adressen reserviert sind und daher nicht zur Nutzung zur Verfügung stehen.

### Interconnect-IP-Adressen

Ebenso können Sie die Interconnect-IP-Adressblöcke einsehen und kommentieren. Sie können die Subnetze der Interconnect-Verbindungen mit dem Cloud Temple-Netzwerk und deren Nutzung visualisieren:

![](images/shiva_inet_008.png)

Sie können deren Nutzung leicht ändern, wie bei den öffentlichen Adressen, in der integrierten IPAM-Verwaltung:

![](images/shiva_inet_007.png)