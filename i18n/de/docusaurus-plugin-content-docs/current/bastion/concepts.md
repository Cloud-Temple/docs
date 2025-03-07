---
title: Concepts
---
import bastion from './images/bastion.svg'


## Was ist der Bastion Cloud Temple?

Der Bastion Cloud Temple ist ein verwalteter Dienst, der Ihnen eine sichere RDP- oder SSH-Konnektivität von der Cloud Temple-Konsole zu Ihren physischen und virtuellen Infrastrukturen bietet, unabhängig davon, ob sie sich in der vertraulichen Cloud, in einer öffentlichen Cloud oder vor Ort befinden. Die Bastion-Lösung ermöglicht die Verwaltung Ihrer Geräte, ohne sie dem Internet auszusetzen.

<img src={bastion} />

## Vorteile
| Vorteil                |                                                                              Beschreibung                                                                               |
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Zentrale Verwaltung    |                                      Der Bastion Cloud Temple ist direkt über das Shiva-Portal zugänglich.                                                              |
| Sicherheit             | Die über den Bastion verwalteten Geräte sind dem Internet nicht ausgesetzt, wodurch sie insbesondere vor Port-Scans durch böswillige Benutzer geschützt sind.            |
| Infrastructure as Code |          APIs ermöglichen die vollständige Verwaltung des Bastion Cloud Temple "as Code" (Sitzungserstellung, Verbindung, Änderung und Löschung von Sitzungen).          |

## Referenzen (SKU)
| Referenz                          |  Einheit  |           SKU           |
|-----------------------------------|:---------:|:-----------------------:|
| VERWALTUNG - Bastion SSH & RDP    | 1 Sitzung | cmp:bastion:session:std |

### Die Bastion Appliance

Die Bastion Appliance ist eine virtuelle Maschine, die in der Nähe Ihrer Geräte bereitgestellt wird. Diese Appliance ermöglicht einen sicheren und direkten Datenfluss von der Shiva-Plattform zu den zu verwaltenden Geräten, die sich im selben virtuellen Netzwerk befinden.

Der Datenfluss ist verschlüsselt und in einem VPN-Tunnel gekapselt. Die Lösung erfordert keine Öffnung eines Datenflusses vom Internet zu Ihren Infrastrukturen. Es reicht aus, dass die Appliance Zugriff auf die öffentliche IP-Adresse des Shiva Bastion-Moduls über Port 443 hat.

Eine Appliance kann verwendet werden, um eine schnelle Verbindung zu einem Gerät herzustellen. Bei jeder Verbindung müssen das gewünschte Protokoll, die IP-Adresse der Maschine und Ihre Anmeldedaten angegeben werden. Um diese Informationen nicht bei jeder Verbindung eingeben zu müssen, können Sitzungen erstellt werden, die regelmäßig zu verwaltenden Geräten zugeordnet sind.

### Die Sitzungen

Eine Sitzung ist eine Konfigurationsdatei zur Verbindung mit einem Gerät über einen Bastion. Sie besteht darin, ein zu verwaltendes Gerät und die Appliance, über die der Datenfluss abgewickelt wird, zu definieren und ermöglicht so eine schnellere Verbindung zu diesem Gerät.

Diese Lösung ist geeignet, wenn regelmäßig Verbindungen zu einem zu verwaltenden Gerät hergestellt werden. Die wesentlichen Informationen werden gespeichert, nur Ihre Anmeldedaten sind bei der Verbindung erforderlich.