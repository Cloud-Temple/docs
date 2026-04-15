---
title: Erste-Schritte-Leitfaden
---

Willkommen beim Erste-Schritte-Leitfaden für **Managed MariaDB** von Cloud Temple.

Das Ziel dieses Abschnitts ist es, Sie zu den notwendigen Ressourcen zu führen, um Ihr Produkt in Betrieb zu nehmen.

## Bevor Sie beginnen

Stellen Sie sicher, dass Sie über die von Cloud-Temple bereitgestellten Zugangsdaten verfügen.

Stellen Sie sicher, dass die Netzwerkflüsse zu den Ihnen bereitgestellten IPs geöffnet sind.

## Zugriff auf Ihren Managed MariaDB-Cluster

Je nach gewähltem Bereitstellungsmodell haben Sie einen oder mehrere Endpunkte.

**StandAlone**: Nur 1 Endpunkt (nur 1 IP), zugänglich auf Port 3306.

**Distributed**:

- 1 MaxScale-Endpunkt, zugänglich auf Port 3306, der Ihre Anfragen zu den am besten geeigneten Instanzen weiterleiten kann (dies ist der bevorzugte Endpunkt)
- 1 R/W-Endpunkt, zugänglich auf Port 3306, der auf die primäre Instanz im Lese-Schreib-Modus zeigt.
- 1 R/O-Endpunkt, zugänglich auf Port 3306, der auf alle Instanzen im schreibgeschützten Modus zeigt.

## Ihre Berechtigungen

Sie haben keine Berechtigungen auf der Datenbankmotorebene (weder `SUPER` noch `ALL_PRIVILEGE`)

Sie können den Motor oder seine Optionen nicht neu konfigurieren und auch kein performance_schema installieren.

Anfragen zum Hinzufügen von Datenbanken, Benutzern oder Grants müssen an die Cloud-Temple-Teams gestellt werden.
