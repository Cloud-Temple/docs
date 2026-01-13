---
title: Konzepte
---

# VPC-Konzepte

## Definition und Positionierung

Die **VPC (Virtual Private Cloud)** ist ein verwalteter Netzwerkdienst, der die Erstellung isolierter, sicherer und kontrollierbarer privater Netzwerke über die Cloud Temple-Konsole ermöglicht. Sie wurde entwickelt, um ein Cloud-natives Erlebnis zu bieten und die Netzwerk- und Sicherheitskonfiguration zu automatisieren.

Stand Januar 2026 ermöglichen VPC-Privatnetzwerke die Verbindung von **IaaS Open Source**- und **IaaS VMware**-Diensten. Die Verbindung mit **Bare Metal**-Servern wird in einem zukünftigen Update verfügbar sein.

### VPC vs Private Backbone

Cloud Temple bietet zwei Netzwerkverbrauchsmodi an:

*   **Private Backbone (Historisches Angebot)**:
    *   Ideal für Experten, die maximale Autonomie und spezifische Netzwerkkonfigurationen (Extended L2) suchen.
    *   Erfordert manuelle Installation und Verwaltung von Sicherheitsgeräten (Firewalls, Router).
    *   Manuelle Verwaltung des Adressplans.

*   **VPC (Neues Angebot)**:
    *   Entwickelt für ein Cloud-natives und automatisiertes Erlebnis.
    *   Integrierte Sicherheit (Gateway, Firewalling, NAT) ohne Verwaltung von Drittanbietergeräten.
    *   Managed Service mit garantierter Hochverfügbarkeit durch Cloud Temple.
    *   Ideal für moderne Projekte, DevOps und Webanwendungs-Hosting.

## Architektur

Die VPC basiert auf einer redundanten und hochverfügbaren Architektur, die den inter-AZ-Backbone mit geringer Latenz von Cloud Temple nutzt.

### Schlüsselkomponenten

*   **VPC-Router**: Im Herzen jeder VPC verwaltet er das dynamische Routing zwischen verschiedenen privaten Netzwerken (Ost-West-Verkehr).
*   **Private Netzwerke (VLANs)**: Layer-2-Netzwerksegmente, die Ihre Ressourcen (VMs, Server) verbinden. Sie erstrecken sich nativ über mehrere Verfügbarkeitszonen (AZ) ohne IP-Rekonfiguration.
*   **Externes Gateway**: Optionaler Ein- und Ausgangspunkt für Internetverkehr (Nord-Süd). Es integriert NAT- und Flussmanagementfunktionen.

### Isolierung und Sicherheit

Die VPC garantiert eine strikte Isolierung:
*   Jede VPC ist eine unabhängige Netzwerkentität.
*   Die Bereitstellung erfolgt auf dedizierten Ressourcen (für IaaS Open Source-Kunden), wodurch sichergestellt wird, dass keine Netzwerkressourcen geteilt werden.
*   Der Dienst durchläuft derzeit die **SecNumCloud**-Qualifizierung.

## Hauptfunktionen

| Funktion | Beschreibung | Verfügbarkeit |
|----------|--------------|---------------|
| **Regionale private Netzwerke** | Multi-AZ-Bereitstellung und transparente L2-Weiterleitung. | H2 2025 |
| **Natives Routing** | Automatische Kommunikation zwischen privaten Netzwerken derselben VPC. | H2 2025 |
| **IPAM & DHCP** | Automatische Verwaltung von Adresspools und dynamische Zuweisung. | H2 2025 |
| **Internetzugang** | Konfigurierbar über Gateway (NAT, DNAT, Kontrollierter Egress). | H2 2025 |
| **Floating IPs** | Flexible Bereitstellung von Diensten im Internet. | H2 2025 |
| **Mikro-Segmentierung** | Netzwerkrichtliniengruppen für erweiterte Sicherheit. | H1 2026 |
| **Beobachtbarkeit** | Protokolle und Metriken zur Netzwerkleistung. | H1 2026 |
| **DNS-Dienst** | Interne und externe Namensauflösung. | H2 2026 |
| **VPN & Cloud Connect** | Sichere Konnektivität zu On-Premise und Public Clouds. | H2 2026 |

## Anwendungsfälle

*   **Hosting kritischer Anwendungen**, die eine starke Isolierung erfordern.
*   **Multi-Projekt-Segmentierung** (Prod, Pre-Prod, Dev).
*   **Testumgebungen**, flüchtig und isoliert.
*   **Souveräne Netzwerkbasis** für sensible Daten.
