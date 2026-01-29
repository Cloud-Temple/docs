---
title: Konzepte
---

# VPC-Konzepte

## Definition und Positionierung

Der **VPC (Virtual Private Cloud)** ist ein verwalteter Netzwerkservice, der die Erstellung isolierter, sicherer und steuerbarer privater Netzwerke über die Cloud Temple-Konsole ermöglicht. Er ist darauf ausgelegt, eine cloud-native Erfahrung zu bieten, indem er die Netzwerk- und Sicherheitskonfiguration automatisiert.

Stand Januar 2026 ermöglichen die privaten Netzwerke des VPC die Interkonnektivität zwischen den Diensten **IaaS Open Source** und **IaaS VMware**. Die Interkonnektivität mit den **Bare Metal**-Servern wird in einer kommenden Aktualisierung verfügbar sein.

### VPC vs Private Backbone

Cloud Temple offers two network consumption modes:

*   **Private Backbone (Legacy offering)**:
    *   Ideal for experts seeking maximum autonomy and specific network configurations (extended L2).
    *   Requires manual installation and management of security equipment (firewalls, routers).
    *   Manual management of IP addressing.

*   **VPC (New offering)**:
    *   Designed for a cloud-native and automated experience.
    *   Built-in security (Gateway, Firewalling, NAT) without the need to manage third-party equipment.
    *   Fully managed service with high availability guaranteed by Cloud Temple.
    *   Ideal for modern projects, DevOps workflows, and hosting web applications.

## Architecture

The VPC is based on a redundant and highly available architecture, leveraging Cloud Temple's low-latency inter-AZ backbone.

### Schlüsselkomponenten

*   **VPC-Router**: Im Zentrum jedes VPCs verwaltet er den dynamischen Routingverkehr zwischen den verschiedenen Private Networks (Ost-West-Traffic).
*   **Private Networks (VLANs)**: L2-Netzwerksegmente, die Ihre Ressourcen (VMs, Server) verbinden. Sie erstrecken sich natürlicherweise über mehrere Verfügbarkeitszonen (AZ) ohne IP-Neukonfiguration.
*   **Externe Gateway (External Gateway)**: Optionaler Eingangs- und Ausgangspunkt für Internet-Traffic (Nord-Süd). Sie integriert Funktionen für NAT und Flussverwaltung.

### Isolation und Sicherheit

Das VPC gewährleistet eine strenge Isolation:
*   Jedes VPC ist eine eigenständige Netzwerkeinheit.
*   Die Bereitstellung erfolgt auf dedizierten Ressourcen (für IaaS-Open-Source-Kunden), wodurch sichergestellt wird, dass keine Netzwerkressourcen geteilt werden.
*   Der Dienst befindet sich derzeit in der Zertifizierung **SecNumCloud**.

## Hauptfunktionen

| Funktion | Beschreibung | Verfügbarkeit |
|--------|-------------|---------------|
| **Regionale private Netzwerke** | Multi-AZ-Bereitstellung und transparente L2-Weiterleitung. | Verfügbar |
| **Nativer Routing** | Automatisierte Kommunikation zwischen privaten Netzwerken innerhalb eines VPC. | Verfügbar |
| **IPAM & DHCP** | Automatisierte Verwaltung von Adresspools und dynamische Zuweisung. | Verfügbar |
| **Internetzugriff** | Konfigurierbar über Gateway (NAT, DNAT, kontrollierter Egress). | Verfügbar |
| **Flottierende IP-Adressen** | Flexible Exposition von Diensten im Internet. | Verfügbar |
| **Micro-Segmentation** | Netzwerkrichtliniengruppen für erweiterte Sicherheit. | S1 2026 |
| **Beobachtbarkeit** | Logs und Leistungsmetriken des Netzwerks. | S1 2026 |
| **Service DNS** | Namensauflösung intern und extern. | S2 2026 |
| **VPN & Cloud Connect** | Sichere Verbindung zu On-Premise-Infrastrukturen und öffentlichen Clouds. | S2 2026 |

## Use Cases

*   Critical application hosting requiring strong isolation.
*   Multi-project segmentation (Prod, Pre-prod, Dev).
*   Ephemeral and isolated test environments.
*   Sovereign networking foundations for sensitive data.