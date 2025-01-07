---
title: Concepts
---
## Was ist das Bastion Cloud Temple?

Das Bastion Cloud Temple ist ein verwalteter Dienst, der Ihnen eine sichere RDP- oder SSH-Konnektivität von der Cloud Temple-Konsole zu Ihren physischen und virtuellen Infrastrukturen bietet, sei es auf dem Vertrauens-Cloud, auf einer öffentlichen Cloud oder On-Premises. Die Bastion-Lösung ermöglicht die Verwaltung Ihrer Geräte, ohne sie dem Internet auszusetzen.

![](images/bastion.svg)

## Die Vorteile
| Vorteil               |                                                                              Beschreibung                                                                               |   
|-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Zentrale Verwaltung   |                                  Das Bastion Cloud Temple ist direkt über das Shiva-Portal zugänglich.                                                                  |   
| Sicherheit            | Geräte, die über das Bastion verwaltet werden, sind nicht dem Internet ausgesetzt, was sie insbesondere vor der Portscan-Analyse durch bösartige Benutzer schützt.     |  
| Infrastructure as Code|          APIs ermöglichen die vollständige Verwaltung des Bastion Cloud Temple "as Code" (Erstellung von Sitzungen, Verbindung, Änderung und Löschung von Sitzungen).    |   

## Referenzen (SKU)
| Referenz                            |   Einheit  |           SKU           |  
|-------------------------------------|:----------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP  | 1 Sitzung  | cmp:bastion:session:std |  


### Die Bastion-Appliance

Die Bastion-Appliance ist eine virtuelle Maschine, die in der Nähe Ihrer Geräte bereitgestellt wird. Diese Appliance ermöglicht einen sicheren und direkten Datenstrom von der Shiva-Plattform zu den zu verwaltenden Geräten, die sich im selben virtuellen Netzwerk befinden.

Der Datenstrom wird verschlüsselt und in einem VPN-Tunnel gekapselt. Die Lösung erfordert nicht die Öffnung eines Datenstroms vom Internet zu Ihrer Infrastruktur. Es reicht aus, dass die Appliance Zugriff auf die öffentliche IP des Shiva Bastion-Moduls über Port 443 hat.

Eine Appliance kann verwendet werden, um eine schnelle Verbindung zu einem Gerät herzustellen. Bei jeder Verbindung müssen das gewünschte Protokoll, die IP-Adresse der Maschine und Ihre Anmeldeinformationen angegeben werden. Um zu vermeiden, dass diese Informationen bei jeder Verbindung erneut eingegeben werden müssen, ist es möglich, Sitzungen zu erstellen, die mit regelmäßig zu verwaltenden Geräten verknüpft sind.

### Die Sitzungen

Eine Sitzung ist eine Konfigurationsverbindung zu einem Gerät über ein Bastion. Sie besteht darin, ein zu verwaltendes Gerät und die zu verwendende Appliance zur Übertragung des Datenstroms zu definieren und ermöglicht so eine schnellere Verbindung zu diesem Gerät.

Diese Lösung eignet sich, wenn regelmäßig eine Verbindung zu einem zu verwaltenden Gerät hergestellt werden muss. Die wesentlichen Informationen werden gespeichert, nur Ihre Anmeldeinformationen sind bei der Verbindung erforderlich.