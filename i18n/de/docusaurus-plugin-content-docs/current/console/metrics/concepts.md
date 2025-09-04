---
title: Metrologie
---
import metricsHypervisorsCo2 from './images/metrics_hypervisors_co2.png'
import shivaMetric_000 from './images/shiva_metric_000.png'
import shivaMetric_003 from './images/shiva_metric_003.png'
import shivaMetric_001 from './images/shiva_metric_001.png'
import shivaMetric_002 from './images/shiva_metric_002.png'
import grafanaDashboards_003 from './images/grafana_dashboards_003.png'
import grafanaDashboards_004 from './images/grafana_dashboards_004.png'
import grafanaDashboards_002 from './images/grafana_dashboards_002.png'

## Konzept

Die Mehrheit der __Cloud Temple__-Kunden verfügt über Visualisierungs-, Monitoring- und Metrologiewerkzeuge zur Überwachung ihrer Betriebsabläufe.

Die Philosophie der Shiva-Konsole besteht darin, den Zugriff auf Daten zu ermöglichen, um sich über einen integrierten Prometheus-Proxy in diese Werkzeuge zu integrieren.

Dieser Proxy ermöglicht es Ihnen, Daten von einem Visualisierungstool wie [Grafana](https://grafana.com) abzufragen und zu manipulieren.

Es ist jedoch möglich, bestimmte Leistungsdaten Ihrer Cloud-Ressourcen in der Weboberfläche der Shiva-Konsole zu visualisieren.

*__Hinweis:__ Die Philosophie von __Cloud Temple__ besteht nicht darin, mehrere Grafiken in die Weboberfläche zu integrieren, sondern ein Maximum an Informationen über die API zugänglich zu machen*

## In die Weboberfläche integriertes Dashboard

*__Hinweis:__ Um auf diese Dashboards zugreifen zu können, ist das Recht __'metric_read'__ erforderlich*

### Verfolgung der CO2-Emissionen für die Berechnung

Das Dashboard der Shiva-Konsole integriert standardmäßig eine Grafik zur Verfolgung des Stromverbrauchs Ihrer Berechnungen sowie die geschätzte damit verbundene CO2-Emission.

Es ist direkt auf der Startseite der Cloud Temple-Konsolen-Weboberfläche zugänglich, indem Sie auf __'Metric'__ klicken:

<img src={metricsHypervisorsCo2} />

### Globale Ansicht der Gesundheit virtueller Maschinen

Die Zusammenfassung des Zustands der virtuellen Maschinen ist im Menü __'IaaS'__ auf der linken Seite Ihres Bildschirms, im Untermenü __'Gesundheit'__ und dann __'Virtuelle Maschinen'__ zugänglich.

Diese Zusammenfassung gibt für den in __'Filter'__ ausgewählten Zeitraum an:

- die Anzahl der CPUs und die __durchschnittliche CPU-Auslastung__,
- die Anzahl der GB Speicher und die __durchschnittliche Speichernutzung__,
- Die Durchschnittswerte der __Speicherzugriffslatenz__ beim Lesen und Schreiben,
- Die durchschnittliche __'CPU Ready'__-Zeit der virtuellen Maschine (was der durchschnittlichen Wartezeit entspricht, bis ein physischer Kern für die virtuelle Maschine verfügbar ist).

<img src={shivaMetric_000} />

Für jede VM können Sie auf ihre Leistungshistorie zugreifen, indem Sie auf das grüne Symbol __'Verlauf'__ der virtuellen Maschine in der Aktionsspalte klicken:

<img src={shivaMetric_003} />

Sie gelangen dann zur grafischen Visualisierungsseite der historischen Daten, einschließlich einer Ansicht der __Umweltleistung__:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

## Verwendung mit __Grafana__

Integration der Shiva-Konsole mit Grafana

Die Cloud Temple Shiva-Konsole kann als Datenquelle für Ihre [Grafana](https://grafana.com)-Infrastruktur verwendet werden.

Die Konsole ist Prometheus-kompatibel, was es Ihnen ermöglicht, sie in Grafana als Prometheus-Datenquelle hinzuzufügen. Sie können dann:

-  Alle Ihre Metriken visualisieren.
-  Ihre eigenen benutzerdefinierten Dashboards erstellen, die auf Ihre Bedürfnisse zugeschnitten sind.

Cloud Temple stellt auch eine [Sammlung von gebrauchsfertigen Dashboards](https://github.com/Cloud-Temple/console-grafana-iaas) zur Verfügung, die Sie als Grundlage verwenden oder an Ihre Anwendungsfälle anpassen können.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />
