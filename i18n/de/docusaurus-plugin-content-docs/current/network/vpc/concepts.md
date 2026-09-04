---
title: Konzepte
---

# VPC-Konzepte

## Definition und Positionierung

Der **VPC (Virtual Private Cloud)** ist ein verwalteter Netzwerkdienst, der die Erstellung isolierter, sicherer und über die Cloud Temple-Konsole steuerbarer privater Netzwerke ermöglicht. Er ist darauf ausgelegt, ein cloud-native-Erlebnis zu bieten, indem er die Konfiguration von Netzwerk und Sicherheit automatisiert.

Stand Januar 2026 ermöglichen die privaten Netzwerke des VPC die Vernetzung der Dienste **IaaS Open Source** und **IaaS VMware**. Die Vernetzung mit **Bare Metal**-Servern wird in einem kommenden Update verfügbar sein.

### VPC vs Privates Backbone

Cloud Temple bietet zwei Netzwerknutzungsmodelle an:

* **Privates Backbone (Historisches Angebot)** :
  * Ideal für Experten, die maximale Autonomie und spezifische Netzwerkkonfigurationen (erweitertes Layer 2) suchen.
  * Erfordert die manuelle Installation und Verwaltung von Sicherheitsgeräten (Firewalls, Router).
  * Manuelle Verwaltung des Adressplans.

* **VPC (Neues Produkt)** :
  * Entwickelt für ein cloud-natives und automatisiertes Erlebnis.
  * Integrierte Sicherheit (Gateway, Firewalling, NAT) ohne Verwaltung von Drittanbietergeräten.
  * Managed Service mit von Cloud Temple garantierter Hochverfügbarkeit.
  * Ideal für moderne Projekte, DevOps und das Hosting von Webanwendungen.

## Architecture

Der VPC basiert auf einer redundanten und hochverfügbaren Architektur, die den niedriglatenten inter-AZ-Backbone von Cloud Temple nutzt.

### Schlüsselkomponenten

* **VPC-Router** : Im Zentrum jedes VPC verwaltet er das dynamische Routing zwischen den verschiedenen Private Networks (trafic est-ouest).
* **Private Netzwerke (VLANs)** : Netzwerksegmente auf Ebene 2, die Ihre Ressourcen (VMs, serveurs) verbinden. Sie erstrecken sich nativ über mehrere Verfügbarkeitszonen (AZ) hinweg, ohne dass eine IP-Neukonfiguration erforderlich ist.
* **Externes Gateway (External Gateway)** : Optioneller Ein- und Ausgangspunkt für den Internetverkehr (nord-sud). Es integriert NAT-Funktionen und Traffic-Management.

### Isolierung und Sicherheit

Der VPC gewährleistet eine strikte Isolierung:

* Jeder VPC ist eine eigenständige Netzwerkentität.
* Die Bereitstellung erfolgt auf dedizierten Ressourcen (für Open-Source-IaaS-Kunden), wodurch sichergestellt wird, dass keine Netzwerkressourcen gemeinsam genutzt werden.
* Der Dienst ist **SecNumCloud**-zertifiziert.

## Hauptfunktionen

| Funktion | Beschreibung | Verfügbarkeit |
|----------------|-------------|---------------|
| **Regionale Private Netzwerke** | Multi-AZ-Bereitstellung und transparente L2-Ausbreitung. | Verfügbar |
| **Natives Routing** | Automatische Kommunikation zwischen privaten Netzwerken desselben VPC. | Verfügbar |
| **IPAM & DHCP** | Automatisierte Verwaltung von Adresspools und dynamische Zuweisung. | Verfügbar |
| **Internetzugriff** | Konfigurierbar über das Gateway (NAT, DNAT, kontrollierter Egress). | Verfügbar |
| **Floating IPs** | Flexible Bereitstellung von Diensten im Internet. | Verfügbar |
| **Mikrosegmentierung** | Netzwerkrichtlinien-Gruppen für erweiterte Sicherheit. | S1 2026 |
| **Observability** | Protokolle und Leistungsmetriken des Netzwerks. | S1 2026 |
| **DNS-Dienst** | Interne und externe Namensauflösung. | S2 2026 |
| **VPN & Cloud Connect** | Sichere Konnektivität zu On-Premise-Umgebungen und öffentlichen Clouds. | S2 2026 |

## Anwendungsfälle

* **Hosting kritischer Anwendungen**, das eine starke Isolation erfordert.
* **Multi-Projekt-Segmentierung** (Prod, Pre-prod, Dev).
* **Testumgebungen**, die ephemere und isoliert sind.
* **Souveräne Netzwerkinfrastrukturen** für sensible Daten.