---
title: Häufig gestellte Fragen
---

## Wird der Dienst zusätzlich berechnet?

Nein. Die in die Konsole integrierten Dashboards, der Prometheus-API-Endpunkt (PromQL), die Open-Source-Grafana-Dashboard-Vorlagen, die Sicht auf geplante Eingriffe und Störungen sowie die E-Mail-Benachrichtigungen zu Störungen sind ohne Aufpreis in jedem Cloud-Temple-Abonnement enthalten.

## Stellt Cloud Temple eine verwaltete Grafana-Instanz bereit?

Nein. Cloud Temple stellt die Datenquelle (den Prometheus-Proxy der Konsole) und [Open-Source-Dashboard-Vorlagen](https://github.com/Cloud-Temple/console-grafana-iaas) bereit, aber nicht Grafana als Dienst. Sie binden ein PromQL-kompatibles Werkzeug Ihrer Wahl an, zum Beispiel Ihre eigene Grafana-Instanz, in der Cloud oder vor Ort.

## Wie ist der Zugriff auf meine Metriken gesichert?

Über ein persönliches Zugriffstoken (PAT). Ihr Werkzeug authentifiziert sich per Basic Auth mit der ID und dem Secret eines Tokens, das Sie in Ihrem Profil in der Konsole erstellen. Nach dem Prinzip der minimalen Rechte sollte dieses Token nur die Berechtigung `metrics_read` haben.

## Kann ich Alarme auf Cloud-Temple-Metriken einrichten?

Ja, in Ihrem eigenen Werkzeug: zum Beispiel Grafana-Alarmregeln für Speicherauslastung, CPU oder IOPS auf Basis der Prometheus-Datenquelle. Stellen Sie für das Alerting die HTTP-Methode der Datenquelle auf GET (siehe [Erste Schritte](quickstart.md)).

## Kann ich den CO₂-Fußabdruck meiner Infrastruktur verfolgen?

Ja. Der Prometheus-Datenstrom und die Dashboards der Konsole enthalten die CO₂-Emissionen und den geschätzten Energieverbrauch (kWh), pro Hypervisor und pro Rechenzentrum.

## Wie lange wird der Verlauf von Störungen und Eingriffen aufbewahrt?

60 Tage. Die Konsole zeigt abgeschlossene Eingriffe und behobene Störungen (mit ihren Berichten) der letzten 60 Tage sowie die für die nächsten 60 Tage geplanten Eingriffe.
