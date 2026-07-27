---
title: Schnellstart
---

Willkommen im Schnellstart-Leitfaden für **Gemanagtes MariaDB** von Cloud Temple.

Ziel dieses Abschnitts ist es, Sie zu den erforderlichen Ressourcen zu führen, um Ihr Produkt in Betrieb zu nehmen.

## Bevor Sie beginnen

Stellen Sie sicher, dass Sie über die von Cloud-Temple bereitgestellten Zugänge verfügen.

Stellen Sie sicher, dass der Netzwerkverkehr zu den Ihnen bereitgestellten IP-Adressen freigegeben ist.

> **Bereitstellungsanforderungen** : Diese Bereitstellung erfordert einen vollständig installierten, verwalteten Kubernetes-Cluster, mit einem konfigurierten Prometheus- und Grafana-Stack, um vollständige Telemetrie und das zugehörige Grafana-Dashboard nutzen zu können.

Jeder Cluster oder Server wird vom MariaDB-Operator isoliert in einem dedizierten Kubernetes-Namespace bereitgestellt.

## Zugriff auf Ihren verwalteten MariaDB-Cluster

Je nach gewähltem Bereitstellungsmodell verfügen Sie über einen oder mehrere Endpunkte.

**StandAlone** : 1 einzelner Endpunkt (1 einzelne IP), erreichbar über Port 3306.

**MultiAZ** :

- 1 Maxscale-Endpunkt, erreichbar über Port 3306, der Ihre Abfragen an die am besten geeigneten Instanzen verteilen kann (dies ist der bevorzugte Endpunkt).
- 1 R/W-Endpunkt, erreichbar über Port 3306, der auf die primäre Instanz zeigt und Lese- und Schreibzugriff ermöglicht.
- 1 R/O-Endpunkt, erreichbar über Port 3306, der auf alle Instanzen zeigt und nur Lesezugriff ermöglicht.

## Ihre Berechtigungen

Sie verfügen über keine Berechtigungen auf Ebene der Datenbank-Engine (ni `SUPER`, ni `ALL_PRIVILEGE`).

Sie können die Engine oder deren Optionen nicht neu konfigurieren und auch das `performance_schema` nicht installieren. (Rappel : il est d'ailleurs déconseillé de l'activer sur les instances inférieures à la taille X-Large pour des raisons de ressources RAM).

Anfragen zur Erstellung von Datenbanken, Benutzern oder GRANTs sind an die Cloud-Temple-Teams zu richten.