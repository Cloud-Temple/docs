---
title: Metrologie
---
import metricsHypervisorsCo2 from './images/metrics_hypervisors_co2.png'
import shivaHome from './images/shiva_home.png'
import shivaMetric_000 from './images/shiva_metric_000.png'
import shivaMetric_001 from './images/shiva_metric_001.png'
import shivaMetric_002 from './images/shiva_metric_002.png'
import shivaMetric_003 from './images/shiva_metric_003.png'
import shivaMetric_004 from './images/shiva_metric_004.png'
import shivaMetric_006 from './images/shiva_metric_006.png'
import shivaMetric_007 from './images/shiva_metric_007.png'
import shivaMetric_008 from './images/shiva_metric_008.png'
import shivaMetric_009 from './images/shiva_metric_009.png'
import shivaMetric_010 from './images/shiva_metric_010.png'
import shivaMetric_011 from './images/shiva_metric_011.png'
import shivaMetric_012 from './images/shiva_metric_012.png'
import shivaMetric_013 from './images/shiva_metric_013.png'
import shivaMetric_014 from './images/shiva_metric_014.png'
import grafanaDashboards_003 from './images/grafana_dashboards_003.png'
import grafanaDashboards_004 from './images/grafana_dashboards_004.png'
import grafanaDashboards_002 from './images/grafana_dashboards_002.png'
import grafanaDatasourceHttp from './images/grafana_datasource_http.png'
import grafanaDatasourceAuth from './images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from './images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from './images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from './images/grafana_datasource_working.png'
import grafanaDashboards_001 from './images/grafana_dashboards_001.png'

Die Mehrheit der __Cloud Temple__-Kunden verfügt über Tools zur Visualisierung, Überwachung und Metriken zur Verfolgung ihrer Operationen.

Die Philosophie der Konsole besteht darin, den Zugriff auf Daten zu ermöglichen, um sich über einen integrierten Prometheus-Proxy in diese Tools einzubinden.

Dieser Proxy ermöglicht es Ihnen, Daten über ein Visualisierungstool wie [Grafana](https://grafana.com) abzufragen und zu manipulieren.

Es ist jedoch auch möglich, bestimmte Leistungsdaten Ihrer Cloud-Ressourcen direkt in der Web-Oberfläche der Konsole anzuzeigen.

*__Hinweis:__ Die Philosophie von __Cloud Temple__ besteht nicht darin, ausschließlich Diagramme in der Web-Oberfläche zu integrieren, sondern auch, den maximalen Informationszugriff über die API anzubieten.*

## Built-in dashboards in the web interface

*__Note:__ To access these dashboards, you must have the __'metric_read'__ permission*

### Überblick

Die Startseite der Konsole zeigt das Hauptdashboard mit allen Metriken, die einen Überblick über Ihre Produkte innerhalb Ihres Bereichs bieten. Bei Problemen mit Ihren VMware- und/oder OpenIaaS-Produkten werden entsprechende Warnungen angezeigt, deren Farbe die Schwere der Meldung widerspiegelt.

Diese Warnungen sind klickbar und leiten Sie zur jeweiligen Produktseite weiter.

<img src={shivaHome} />

### VMware Metrics - Overview

In the **'VMware'** menu, a dedicated dashboard is available under the **'Metrics'** submenu. It contains 4 tabs:

#### Übersicht

Auf diesem Tab finden Sie einige der bereits im globalen Dashboard enthaltenen Metriken, das zu Beginn dieses Kapitels behandelt wurde.

<img src={shivaMetric_000} />

#### Berechnung

Auf diesem Tab finden Sie die Anzahl der **AZs**, **Cluster**, **ESXs**, die **Kohlenstoffemissionen**, die **geschätzte Verbrauch**, sowie 7 Diagramme, die einen sehr visuellen Überblick über Ihre VMware-Umgebung bieten. Die Schätzung des Verbrauchs in kWh wird auf Basis des Durchschnitts der Messungen über den ausgewählten Zeitraum berechnet, bezogen auf eine Stunde.

Sie können den abzudeckenden Datumsbereich sowie die Art der Datengruppierung auswählen (standardmäßig werden die Daten für Ihren gesamten Bereich gruppiert). Zum Beispiel, wenn Sie **Host** wählen:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

Beim Überfahren mit der Maus über die Diagramme werden die Details der Ressourcennamen und ihre Werte angezeigt. Beim Klicken auf diese Diagramme öffnet sich ein kleines Tooltip, das es Ihnen ermöglicht, die Details zum angeklickten Datum einfacher einzusehen:
<img src={shivaMetric_014} />

#### Speicher

Just as on the "Compute" tab, you will find various information: the number of **AZs**, **datastore clusters**, **datastores**, as well as two charts. The same filtering principles apply, but here you can group by **Cluster SDRS** and **Datastore**.

<img src={shivaMetric_004} />

#### Virtuelle Maschinen

Hier finden Sie einen Überblick über den Gesundheitszustand der virtuellen Maschinen.

Diese Zusammenfassung zeigt für den ausgewählten Zeitraum:
- die Anzahl der CPU-Kerne und den __durchschnittlichen CPU-Verbrauch__,
- die Anzahl an GB Arbeitsspeicher und den __durchschnittlichen Speicherverbrauch__,
- die Durchschnittswerte der __Speicherzugriffs-Latenz__ für Lese- und Schreibvorgänge,
- den durchschnittlichen __'CPU Ready'-Wert__ der virtuellen Maschine (dies entspricht der durchschnittlichen Wartezeit auf die Verfügbarkeit eines physischen CPU-Kerns durch die virtuelle Maschine).

<img src={shivaMetric_006} />

Für jede VM können Sie den Leistungsverlauf aufrufen, indem Sie auf das grüne __'Verlauf'-Symbol__ in der Spalte „Aktion“ klicken:

<img src={shivaMetric_003} />

Daraufhin gelangen Sie zur Seite mit der grafischen Darstellung der historischen Daten, einschließlich einer __Umweltleistungsübersicht__:

<img src={shivaMetric_007} />

### VMware Metrics - View by Resource

It is also possible to view a portion of the metrics related to VMware, this time more specifically for a given **Host** or **Datastore**.

#### Host

In der Ansicht eines Hosts können für einen bestimmten Zeitraum die **Energieverbrauchswerte** sowie die Schätzung der **Kohlenstoffemissionen** abgerufen werden.

<img src={shivaMetric_008} />

#### Datastore

In der Ansicht eines Datastores können für einen bestimmten Zeitraum die **IOPS** abgerufen werden.

<img src={shivaMetric_009} />

### OpenIaaS Metrics

In the **'OpenIaaS'** menu, a dedicated dashboard is available in the **'Metrics'** submenu. It includes 3 tabs:

#### Übersicht

Auf diesem Tab finden Sie einige der bereits im globalen Dashboard enthaltenen Metriken, das zu Beginn dieses Kapitels behandelt wurde.

<img src={shivaMetric_010} />

#### Calculation

On this tab, you will find the number of **AZs**, **Clusters**, **Hosts**, as well as 5 graphs providing a highly visual overview of your OpenIaaS environment.

You can select the date range to cover, as well as the data grouping type (by default, data is grouped across your entire environment). For example, by choosing **Host**:

<img src={shivaMetric_011} />

<img src={shivaMetric_012} />

#### Storage

Just as on the "Compute" tab, you will find various information: the number of **AZs**, **Clusters**, **Datastores**, as well as a chart. The same filtering principles apply, but here we can group by **Block Storage**.

<img src={shivaMetric_013} />

## Usage with __Grafana__

Integration of the Console with Grafana

The Console from Cloud Temple can be used as a data source for your [Grafana](https://grafana.com/) infrastructure.

The console is Prometheus-compatible, allowing you to add it to Grafana as a Prometheus-type data source. You will then be able to:

- Visualize all your metrics.
- Create custom dashboards tailored to your specific needs.

Cloud Temple also provides a [collection of ready-to-use dashboards](https://github.com/Cloud-Temple/console-grafana-iaas) that you can use as a starting point or adapt according to your use cases.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />

### Configure the Console as a data source in Grafana

The goal is to enhance the observability of your cloud infrastructure through Cloud Temple metrics.

#### Voraussetzungen

- Eine Grafana-Instanz, die Zugriff auf die APIs der Console hat.
- Administrativer Zugriff auf die Grafana-Instanz, um *Datasources* zu konfigurieren.
- Ein Personal Access Token mit mindestens der Berechtigung `metrics_read`.

#### Configuration

In der __Konfiguration__ von Grafana gehen Sie zum Tab "__Datasources__" und klicken Sie auf "__Add datasource__".

Geben Sie in der __URL__ die __API-URL von Console Metrics__ an, ohne die Versionsangabe und endend mit "__/prometheus__"
(z. B. [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

Aktivieren Sie in der __Authentifizierung__ die Option __Basic Auth__.

<img src={grafanaDatasourceAuth} />

Geben Sie in der Sektion "__Basic Auth Details__" den __Benutzernamen__ und __Passwort__ ein, wobei Sie jeweils den __ID__ und __Geheimnis__ eines __persönlichen Zugriffstokens__ verwenden, das die Berechtigung __metrics_read__ besitzt.

<img src={grafanaDatasourceBasicAuthDetails} />

Konfigurieren Sie in der Sektion "__Alerting__" die Eigenschaft __HTTP Method__ auf __GET__.

<img src={grafanaDatasourceAlerting} />

#### Ergebnis

Um sicherzustellen, dass die Konfiguration korrekt und funktionsfähig ist, klicken Sie auf die Schaltfläche "__Speichern & testen__".

Sie sollten einen Banner sehen, der Ihnen mitteilt, dass die Konfiguration erfolgreich war.

<img src={grafanaDatasourceWorking} />

Sie finden eine Vielzahl von Beispielen für Grafana-Konfigurationen hier: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />
