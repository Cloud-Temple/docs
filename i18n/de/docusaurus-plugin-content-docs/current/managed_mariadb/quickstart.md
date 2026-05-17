---
title: Schnellstartanleitung
---

Willkommen zur Schnellstartanleitung für **MariaDB Managed** Cloud Temple.

Ziel dieses Abschnitts ist es, Sie zu den erforderlichen Ressourcen zu leiten, damit Sie sich schnell mit Ihrem Produkt vertraut machen können.

## Bevor Sie beginnen

Stellen Sie sicher, dass Sie über die von Cloud-Temple bereitgestellten Zugriffsrechte verfügen.

Stellen Sie sicher, dass die Netzwerkflüsse zu den Ihnen bereitgestellten IP-Adressen geöffnet sind.

## Zugriff auf Ihren verwalteten MariaDB-Cluster

Je nach gewähltem Bereitstellungsmodell verfügen Sie über einen oder mehrere Endpunkte.

**StandAlone** : 1 Endpunkt (1 IP), erreichbar über Port 3306.

**Distributed** :

- 1 Maxscale-Endpunkt, erreichbar über Port 3306, der Ihre Abfragen an die am besten geeigneten Instanzen verteilt (dieser Endpunkt ist zu bevorzugen)
- 1 R/W-Endpunkt, erreichbar über Port 3306, der auf die primäre Instanz für Lese-/Schreibzugriffe verweist.
- 1 R/O-Endpunkt, erreichbar über Port 3306, der auf alle Instanzen für Lesezugriffe verweist.

## Ihre Berechtigungen

Sie verfügen über keine Berechtigungen auf Ebene der Datenbank-Engine (weder `SUPER` noch `ALL_PRIVILEGE`).

Sie können die Engine oder deren Optionen nicht neu konfigurieren und das performance_schema nicht installieren.

Anfragen zur Anlage von Datenbanken, Benutzern oder Grants sind an die Cloud-Temple-Teams zu richten.