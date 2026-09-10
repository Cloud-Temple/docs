---
title: Konzepte
---
import bastion from '@site/docs/bastion/images/bastion.png'

## Was ist das Bastion Cloud Temple?

Das Bastion Cloud Temple ist ein verwalteter Dienst, der Ihnen eine sichere RDP- oder SSH-Verbindung von der Cloud Temple-Konsole aus
ermöglicht, um auf Ihre physischen und virtuellen Infrastrukturen zuzugreifen, unabhängig davon, ob sie sich im vertrauenswürdigen Cloud, in einer
öffentlichen Cloud oder On-Premise befinden. Die Bastion-Lösung ermöglicht die Verwaltung Ihrer Geräte, ohne sie dem Internet auszusetzen.

<img src={bastion} />

## Die Vorteile

| Vorteil                |                                                                              Beschreibung                                                                              |
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Zentrale Verwaltung    |                                              Das Bastion Cloud Temple ist direkt über die Konsole zugänglich.                                                |
| Sicherheit             | Die über das Bastion verwalteten Geräte sind nicht direkt dem Internet ausgesetzt, was sie insbesondere vor der Portanalyse durch böswillige Benutzer schützt. |
| Infrastructure as Code |          Über APIs kann das Bastion Cloud Temple vollständig "as Code" verwaltet werden (Erstellung, Verbindungsaufbau, Änderung und Beendigung von Sitzungen).          |

## Referenzen (SKU)

| Referenz                          |   Einheit   |           SKU           |
|------------------------------------|:---------:|:-----------------------:|
| VERWALTUNG - Bastion SSH & RDP | 1 Sitzung | cmp:bastion:session:std |

### Die Bastion-Appliance

Die Bastion-Appliance ist eine virtuelle Maschine, die in der Nähe Ihrer Geräte bereitgestellt wird. Diese Appliance ermöglicht einen sicheren und direkten Datenfluss von der Console-Plattform zu den zu verwaltenden Geräten, die sich im selben virtuellen Netzwerk befinden.

Der Datenfluss wird verschlüsselt und in einem VPN-Tunnel gekapselt. Die Lösung erfordert keine Freigabe von Datenflüssen vom Internet zu Ihrer Infrastruktur. Es reicht aus, wenn die Appliance über Port 443 auf die öffentliche IP-Adresse des Console-Bastion-Moduls zugreifen kann.

Eine Appliance kann verwendet werden, um eine schnelle Verbindung zu einem Gerät herzustellen. Bei jeder Verbindung müssen das gewünschte Protokoll, die IP-Adresse des Geräts und Ihre Anmeldeinformationen angegeben werden. Um diese Angaben bei jeder Verbindung nicht erneut eingeben zu müssen, können Sitzungen erstellt werden, die mit regelmäßig zu verwaltenden Geräten verknüpft sind.

### Sitzungen

Eine Sitzung ist eine Konfiguration für die Verbindung zu einem Gerät über einen Bastion. Sie besteht darin, ein zu verwaltendes Gerät und die zu verwendende Appliance zur Weiterleitung des Datenverkehrs zu definieren, wodurch sich eine schnellere Verbindung zu diesem Gerät ermöglicht.

Diese Lösung eignet sich für regelmäßige Verbindungen zu einem zu verwaltenden Gerät. Die wesentlichen Informationen werden gespeichert, bei der Verbindung werden lediglich Ihre Zugangsdaten benötigt.