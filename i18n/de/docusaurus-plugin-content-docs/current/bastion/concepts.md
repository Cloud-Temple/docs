---
title: Konzepte
---
import bastion from './images/bastion.svg'

## Was ist der Cloud Temple Bastion?

Der Cloud Temple Bastion ist ein verwalteter Dienst, der Ihnen sichere RDP- oder SSH-Konnektivität von der Cloud Temple-Konsole zu Ihren physischen und virtuellen Infrastrukturen bietet, unabhängig davon, ob sie sich in der vertrauenswürdigen Cloud, in einer öffentlichen Cloud oder On-Premises befinden. Die Bastion-Lösung ermöglicht die Verwaltung Ihrer Geräte, ohne sie dem Internet auszusetzen.

<img src={bastion} />

## Die Vorteile

| Vorteil                |                                                                              Beschreibung                                                                               |
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Zentralisierte Verwaltung |                                              Der Cloud Temple Bastion ist direkt über das Shiva-Portal zugänglich.                                                   |
| Sicherheit             | Über den Bastion verwaltete Geräte sind nicht dem Internet ausgesetzt, was sie insbesondere vor Port-Scans durch böswillige Benutzer schützt.                          |
| Infrastructure as Code |          APIs ermöglichen die vollständige Verwaltung des Cloud Temple Bastion "as Code" (Sitzungserstellung, Verbindung, Änderung und Löschung von Sitzungen).        |

## Referenzen (SKU)

| Referenz                          |  Einheit  |           SKU           |
|-----------------------------------|:---------:|:-----------------------:|
| VERWALTUNG - Bastion SSH & RDP    | 1 Sitzung | cmp:bastion:session:std |

### Die Bastion Appliance

Die Bastion Appliance ist eine virtuelle Maschine, die in der Nähe Ihrer Geräte bereitgestellt wird. Diese Appliance ermöglicht einen sicheren und direkten Datenfluss von der Shiva-Plattform zu den zu verwaltenden Geräten, die sich im selben virtuellen Netzwerk befinden.

Der Datenfluss ist verschlüsselt und in einem VPN-Tunnel gekapselt. Die Lösung erfordert keine Öffnung eines Datenflusses vom Internet zu Ihren Infrastrukturen. Die Appliance benötigt lediglich Zugriff auf die öffentliche IP-Adresse des Shiva Bastion-Moduls über Port 443.

Eine Appliance kann für eine schnelle Verbindung zu einem Gerät verwendet werden. Bei jeder Verbindung müssen das gewünschte Protokoll, die IP-Adresse der Maschine und Ihre Anmeldedaten angegeben werden. Um diese Informationen nicht bei jeder Verbindung eingeben zu müssen, können Sitzungen erstellt werden, die mit regelmäßig zu verwaltenden Geräten verknüpft sind.

### Die Sitzungen

Eine Sitzung ist eine Verbindungskonfiguration zu einem Gerät über einen Bastion. Sie besteht darin, ein zu verwaltendes Gerät und die für den Datenfluss zu verwendende Appliance zu definieren, wodurch eine schnellere Verbindung zu diesem Gerät ermöglicht wird.

Diese Lösung eignet sich für regelmäßige Verbindungen zu einem zu verwaltenden Gerät. Wesentliche Informationen werden gespeichert, nur Ihre Anmeldedaten sind bei der Verbindung erforderlich.
