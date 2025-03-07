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

Die Mehrheit der __Cloud Temple__-Kunden verfügen über Visualisierungs-, Überwachungs- und Metrologie-Tools zur Überwachung ihrer Operationen.

Die Philosophie der Shiva-Konsole ist es, den Zugang zu Daten zu ermöglichen, um sich über einen integrierten Prometheus-Proxy in diese Werkzeuge zu integrieren.

Dieser Proxy ermöglicht es Ihnen, Daten von einem Visualisierungstool wie [Grafana](https://grafana.com) abzurufen und zu manipulieren.

Es ist jedoch möglich, bestimmte Leistungsdaten Ihrer Cloud-Ressourcen in der Webschnittstelle der Shiva-Konsole anzuzeigen.

*__Hinweis:__ Die Philosophie von __Cloud Temple__ besteht darin, nicht mehrere Grafiken in die Webschnittstelle zu integrieren, sondern die maximal über die API zugänglichen Informationen zu bieten*

## In die Webschnittstelle integriertes Dashboard

*__Hinweis:__ Um auf diese Dashboards zugreifen zu können, müssen Sie das Recht __'metric_read'__ besitzen*

### Verfolgung der Kohlenstoffemissionen für das Rechnen

Das Dashboard der Shiva-Konsole integriert standardmäßig ein Diagramm zur Überwachung des Stromverbrauchs Ihres Rechnens sowie die Schätzung der damit verbundenen Kohlenstoffemissionen.

Es ist direkt auf der Startseite der Webschnittstelle der Cloud Temple-Konsole zugänglich, indem Sie auf __'Metric'__ klicken:

<img src={metricsHypervisorsCo2} />

### Gesamtansicht der Gesundheit der virtuellen Maschinen

Die Zusammenfassung des Zustands der virtuellen Maschinen ist im Menü __'IaaS'__ auf der linken Seite Ihres Bildschirms im Untermenü __'Gesundheit'__ und dann __'Virtuelle Maschinen'__ zugänglich.

Diese Zusammenfassung gibt für den in __'Filter'__ ausgewählten Zeitraum an:

- die Anzahl der CPUs und die __durchschnittliche CPU-Auslastung__,
- die Anzahl der GB Speicher und die __durchschnittliche Speichernutzung__,
- Die Durchschnitte der __Latenzzeit des Speicherzugriffs__ beim Lesen und Schreiben,
- Der __'CPU Ready'__-Durchschnitt der virtuellen Maschine (was der durchschnittlichen Wartezeit entspricht, bis ein physischer Kern der virtuellen Maschine zur Verfügung steht).

<img src={shivaMetric_000} />

Für jede VM können Sie auf die Leistungsdatenhistorie zugreifen, indem Sie auf das grüne __'Historie'__-Symbol der virtuellen Maschine in der Aktionsspalte klicken. :

<img src={shivaMetric_003} />

Dann gelangen Sie zur Seite der grafischen Ansicht der historischen Daten, einschließlich einer Ansicht der __Umweltleistung__:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

## Nutzung mit __Grafana__

Es ist möglich, dass die Shiva-Konsole als __Datasource__ für Ihre [Grafana](https://grafana.com)-Infrastruktur dient.

Sie finden hier eine Vielzahl an __Konfigurationsbeispielen für Grafana__:

https://github.com/Cloud-Temple/console-grafana-iaas

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />