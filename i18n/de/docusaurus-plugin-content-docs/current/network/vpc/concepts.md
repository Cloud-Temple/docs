---
title: Konzepte
---

<a id="concepts-vpc"></a>
<a id="définition-et-positionnement"></a>

## Einführung

Der **VPC (Virtual Private Cloud)** ist ein verwalteter Netzwerkdienst, mit dem sich isolierte, sichere und über die Cloud Temple-Konsole steuerbare private Netzwerke erstellen lassen. Er bietet ein Cloud-native-Erlebnis: Die Konfiguration von Netzwerk und Sicherheit ist automatisiert, ohne dass Netzwerkgeräte installiert oder verwaltet werden müssen.

Die privaten Netzwerke des VPC verbinden die Dienste **IaaS OpenSource**, **IaaS VMware** und **VM Instances** miteinander.

### VPC vs Private Backbone

Es werden zwei Netzwerk-Nutzungsmodelle angeboten:

* **Private Backbone (historisches Angebot)**:
  * ideal für Experten, die maximale Autonomie und spezifische Netzwerkkonfigurationen (erweitertes L2) suchen;
  * erfordert die manuelle Installation und Verwaltung von Sicherheitsgeräten (Firewalls, Router);
  * manuelle Verwaltung des Adressplans.

* **VPC**:
  * konzipiert für ein Cloud-natives und automatisiertes Erlebnis;
  * integrierte Sicherheit (Gateway, Filterung, NAT) ohne Verwaltung von Drittanbietergeräten;
  * verwalteter, hochverfügbarer Dienst;
  * ideal für moderne Projekte, DevOps und das Hosting von Webanwendungen.

<a id="cas-dusage"></a>

### Zielgruppen und Anwendungsfälle

* **Hosting kritischer Anwendungen**, das eine starke Isolierung erfordert.
* **Multi-Projekt-Segmentierung** (Produktion, Vorproduktion, Entwicklung).
* **Testumgebungen**, kurzlebig und isoliert.
* **Souveräne Netzwerkgrundlagen** für sensible Daten.

## Vorteile

| Vorteil                     | Beschreibung                                                                                |
|-----------------------------|---------------------------------------------------------------------------------------------|
| Hochverfügbarkeit           | Die Datenebene ist für eine Verfügbarkeit von 99,99 % ausgelegt.                            |
| Multi-Zonen ohne Neukonfiguration | Ein einziger Adressplan erstreckt sich über mehrere Verfügbarkeitszonen, ohne IP-Neukonfiguration. |
| Integrierte Sicherheit      | Gateway, Filterung und NAT sind enthalten, ohne zu verwaltende Netzwerkgeräte.              |
| Einheitliche Steuerung      | Verwaltung über die Konsole oder per API.                                                   |
| Souveränität                | SecNumCloud-qualifizierter Dienst.                                                          |

<a id="fonctionnalités-principales"></a>

## Funktionen

| Funktion                      | Beschreibung                                                                |
|-------------------------------|-----------------------------------------------------------------------------|
| **Regionale private Netzwerke** | Multi-AZ-Bereitstellung und transparente L2-Ausbreitung.                  |
| **Private Networks**          | Segmentierte Netzwerke, zwischen Cloud Temple-Angeboten verbindbar.         |
| **Natives Routing**           | Automatische Kommunikation zwischen den privaten Netzwerken desselben VPC.  |
| **IPAM & DHCP**               | Reservierung von IP-Adressen, Verwaltung der Pools und dynamische Zuweisung. |
| **Internetzugang**            | Konfigurierbar über das Gateway (NAT, DNAT, kontrollierter Egress).         |
| **Floating IPs**              | Flexible Bereitstellung von Diensten im Internet.                           |
| **Flussrichtlinien**          | Integrierte Sicherheitsfilterung für Nord-Süd- und Ost-West-Flüsse.         |
| **Observability**             | Protokolle und Leistungsmetriken des Netzwerks.                             |
| **Inter-VPC-Peering**         | Verbindung von VPCs (kostenpflichtige Option).                              |

### Bereitstellungsmodi

* **VPC im dedizierten Modus**: Voraussetzung ist ein Abonnement des Angebots IaaS OpenSource. Die VPC-Instanzen (Router, Gateways) werden direkt auf Ihrer dedizierten Infrastruktur bereitgestellt: Die Rechenressourcen, die Ihre Netzwerkdienste tragen, sind physisch isoliert.
* **VPC im gemeinsam genutzten Modus**: Dieser Modus stützt sich auf das Angebot VM Instances. Er stellt den VPC ohne vorherige dedizierte Infrastruktur bereit, für punktuelle Anforderungen oder Cloud-native-Umgebungen.

## Architektur

Der VPC beruht auf einer redundanten und hochverfügbaren Architektur, die sich auf den latenzarmen Inter-AZ-Backbone von Cloud Temple stützt.

### Schlüsselkomponenten

* **VPC-Router**: Im Zentrum jedes VPC verwaltet er das dynamische Routing zwischen den verschiedenen Private Networks (Ost-West-Verkehr).
* **Private Networks (VLANs)**: Netzwerksegmente der Schicht 2, die Ihre Ressourcen (VMs, Server) verbinden. Sie erstrecken sich nativ über mehrere Verfügbarkeitszonen, ohne IP-Neukonfiguration.
* **Externes Gateway (External Gateway)**: optionaler Ein- und Ausgangspunkt für den Internetverkehr (Nord-Süd). Es integriert NAT- und Flussverwaltungsfunktionen.

### Integrationen

* **Metriken**: Die Leistungs- und Verbrauchsmetriken des VPC (Datenverkehr, Status der Gateways usw.) sind über die API der Konsole im Prometheus-Format exportierbar.

## Regionen und Verfügbarkeitszonen

Der VPC ist in der Region FR1 verfügbar. Seine privaten Netzwerke erstrecken sich über mehrere Verfügbarkeitszonen, mit einem einzigen Adressplan.

## Technische Spezifikationen

| Parameter                 | Wert                            |
|---------------------------|---------------------------------|
| VPC pro Tenant            | 8                               |
| Private Netzwerke pro VPC | 16                              |
| IP-Adressierung           | RFC 1918 / RFC 4193             |
| Inter-VPC-Peering         | Unterstützt (kostenpflichtige Option) |
| Inter-AZ-Verkehr          | Inbegriffen                     |
| Eingehender Verkehr       | Inbegriffen                     |

### Grenzen

* 8 VPC pro Tenant und 16 private Netzwerke pro VPC.

## Sicherheit und Compliance

Der VPC ist nach HDS und ISO 27001 zertifiziert und SecNumCloud-qualifiziert.

<a id="isolation-et-sécurité"></a>

### Isolierung und Sicherheit

Der VPC gewährleistet eine strikte Isolierung:

* jeder VPC ist eine unabhängige Netzwerkeinheit, logisch von den anderen Tenants isoliert;
* im dedizierten Modus erfolgt die Bereitstellung auf dedizierten Ressourcen: Keine Netzwerkressource wird zwischen Kunden geteilt;
* alle Konfigurationsvorgänge sind über die Konsole nachvollziehbar.

## Dienstverfügbarkeit

| Element                                                      | Verfügbarkeitsziel, gemessen über einen Monat |
|--------------------------------------------------------------|-----------------------------------------------|
| Datenebene (Routing zwischen Netzwerken, NAT, DNAT)          | 99,99 %                                       |
| Steuerungsebene (API, Konsole)                               | 99,9 %                                        |

## Verantwortlichkeiten

Die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple ist in der [Verantwortlichkeitsmatrix (RACI) VPC](../../contractual/network/raci_vpc.md) beschrieben.

## Reversibilität

Die Konfiguration des VPC kann nach Ende des Dienstes 30 Tage lang in einen S3-Speicher exportiert werden.

## Preise

Die Preise des VPC sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[VPC — Preise](https://www.cloud-temple.com/produits/virtual-private-cloud-souverain/).
