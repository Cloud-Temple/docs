---
title: Konzepte
---
import bastion from '@site/docs/bastion/images/bastion.png'

<a id="cest-quoi-le-bastion-cloud-temple-"></a>

## Einführung

Der Cloud Temple Bastion ist ein verwalteter Dienst, der eine sichere RDP- oder SSH-Konnektivität von der Cloud Temple-Konsole zu Ihren physischen und virtuellen Infrastrukturen bereitstellt, unabhängig davon, ob sie sich in der Vertrauenscloud, in einer Public Cloud oder On-Premise befinden. Er bildet den zentralen Einstiegspunkt für Ihre administrativen Zugriffe: Ihre Geräte werden verwaltet, ohne dem Internet ausgesetzt zu sein, und alle Aktionen werden für Audit- und Compliance-Zwecke nachverfolgt.

<img src={bastion} />

### Zielgruppen und Anwendungsfälle

Der Bastion richtet sich an Systemadministratoren, DevOps-Teams, Organisationen mit regulatorischen Anforderungen und den öffentlichen Sektor. Typische Anwendungsfälle:

- **Administrativer Fernzugriff**: sicheres Gateway zu sensiblen Infrastrukturen.
- **Reduzierung der Angriffsfläche**: Kein verwaltetes Gerät ist direkt dem Internet ausgesetzt.
- **Zugriff für Partner und Dienstleister**: zeitlich begrenzte und kontrollierte Zugriffe auf die Geräte.
- **Einhaltung regulatorischer Vorgaben**: Nachverfolgbarkeit der Aktionen für Audits.
- **Verwaltung mehrerer Umgebungen**: einheitlicher Zugriff auf Cloud- und On-Premise-Ressourcen.

<a id="les-avantages"></a>

## Vorteile

| Vorteil                    | Beschreibung                                                                                                                                                            |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Zentrale Verwaltung        | Der Bastion ist direkt über die Konsole zugänglich: Alle administrativen Zugriffe werden an einem Ort verwaltet.                                                         |
| Sicherheit                 | Die über den Bastion verwalteten Geräte sind nicht dem Internet ausgesetzt, was sie insbesondere vor dem Scannen ihrer Ports durch böswillige Benutzer schützt.        |
| Nachverfolgbarkeit         | Alle administrativen Aktionen werden protokolliert.                                                                                                                     |
| Flexibler Zugriff          | Ein einziger Dienst verwaltet Geräte in der Vertrauenscloud, in einer Public Cloud oder On-Premise.                                                                     |
| Infrastructure as Code     | Eine REST-API ermöglicht die vollständige Verwaltung der Geräte „as Code“.                                                                                              |

## Funktionen

| Funktion                  | Beschreibung                                                                                                   |
|---------------------------|----------------------------------------------------------------------------------------------------------------|
| RDP- und SSH-Zugriff      | Sichere Verbindung zu den zu verwaltenden Geräten.                                                             |
| Schnellverbindung         | Einmalige Verbindung zu einem Gerät unter Angabe des Protokolls, seiner IP-Adresse und Ihrer Anmeldedaten.     |
| Registrierte Geräte       | Wiederverwendbare Verbindungskonfiguration: Bei jeder Verbindung werden nur Ihre Anmeldedaten abgefragt.       |
| Tags und Suche            | Einordnung der Geräte nach Tags, Suche nach Namen.                                                             |
| Verschlüsselte Datenflüsse | Die gesamte Kommunikation zwischen der Konsole, der Appliance und den Geräten ist verschlüsselt.              |
| Protokollierung           | Nachverfolgbarkeit aller administrativen Aktionen.                                                             |
| REST-API                  | Erstellung, Änderung und Löschung der Geräte per API.                                                          |

## Architektur

### Die Bastion-Appliance

Die Bastion-Appliance ist eine virtuelle Maschine, die in der Nähe Ihrer Geräte bereitgestellt wird. Sie leitet einen sicheren und direkten Datenfluss von der Konsole zu den zu verwaltenden Geräten im selben virtuellen Netzwerk.

Der Datenfluss ist verschlüsselt und in einem VPN-Tunnel gekapselt. Die Lösung erfordert keine Öffnung eines Datenflusses aus dem Internet zu Ihren Infrastrukturen. Es genügt, dass die Appliance Zugriff auf die öffentliche IP-Adresse des Bastion-Konsolenmoduls auf Port 443 hat.

Eine Appliance kann verwendet werden, um eine Schnellverbindung zu einem Gerät herzustellen. Bei jeder Verbindung müssen das gewünschte Protokoll, die IP-Adresse der Maschine und Ihre Anmeldedaten angegeben werden. Um diese Angaben nicht bei jeder Verbindung eingeben zu müssen, können Sie die Geräte registrieren, die Sie regelmäßig verwalten.

<a id="les-sessions"></a>

### Die Geräte

Ein Gerät ist eine im Bastion registrierte Verbindungskonfiguration. Sie verknüpft eine zu verwaltende Maschine (Name, IP-Adresse, Protokoll SSH oder RDP, Tastaturlayout) mit der Appliance, über die der Datenfluss läuft.

Diese Konfiguration eignet sich für eine regelmäßige Verbindung zu einem Gerät. Die wesentlichen Informationen werden gespeichert: Bei der Verbindung werden nur Ihre Anmeldedaten abgefragt.

### Integrationen

- **Cloud Temple-Konsole**: Verwaltung der Appliances und Geräte über das Menü „Bastion“.
- **REST-API**: Automatisierung der Geräteverwaltung.

## Regionen und Verfügbarkeitszonen

Der Bastion-Dienst wird aus der Region FR1 betrieben, und seine Protokolle werden in Frankreich gehostet. Die Appliance wird so nah wie möglich an Ihren Geräten bereitgestellt: in der Vertrauenscloud, in einer Public Cloud oder On-Premise.

## Technische Spezifikationen

| Parameter          | Wert                                     |
|--------------------|------------------------------------------|
| Protokolle         | RDP, SSH                                 |
| Verwaltete Geräte  | Bis zu 50 pro Appliance                  |
| Verschlüsselung    | Obligatorisch, für alle Datenflüsse      |
| API                | REST                                     |
| Protokollierung    | Alle administrativen Aktionen            |

### Grenzen

- Eine Appliance verwaltet maximal 50 Geräte. Darüber hinaus stellen Sie eine zusätzliche Appliance bereit.
- Die zu verwaltenden Geräte müssen aus dem Netzwerk erreichbar sein, in dem die Appliance bereitgestellt ist.

## Sicherheit und Compliance

Der Bastion ist nach HDS und ISO 27001 zertifiziert. Er ist in den SecNumCloud-qualifizierten und C5-konformen Diensten enthalten.

- **Verschlüsselung**: Alle Datenflüsse sind verschlüsselt.
- **Isolierung**: Die Appliances laufen in einer dedizierten Umgebung mit strikter logischer Isolierung der virtuellen Administrationsmaschinen.
- **Zugriffskontrolle**: granulare Zugriffskontrolle und Durchsetzung von Passwortrichtlinien.
- **Nachverfolgbarkeit**: Alle administrativen Aktionen werden protokolliert.

## Dienstverfügbarkeit

Das Verfügbarkeitsziel des Bastion-Dienstes beträgt 99,9 %, gemessen über einen Monat.

## Reversibilität

Am Ende des Dienstes können Sie folgende Elemente kostenlos abrufen:

| Exportiertes Element | Lieferumfang              | Bereitstellungsfrist        |
|----------------------|---------------------------|-----------------------------|
| Audit-Protokolle     | Audit-Dateien             | 30 Tage                     |
| Konfiguration        | Parameter der Appliance   | 15 Tage                     |

## Preise

Der Bastion wird monatlich pro Appliance abgerechnet. Die Preise sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[Bastion — Preise](https://www.cloud-temple.com/produits/bastion/).
