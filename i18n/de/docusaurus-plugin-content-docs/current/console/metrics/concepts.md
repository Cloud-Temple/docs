---
title: Metriken
---
import metricsHypervisorsCo2 from './images/metrics_hypervisors_co2.png'
import shivaMetric_000 from './images/shiva_metric_000.png'
import shivaMetric_003 from './images/shiva_metric_003.png'
import shivaMetric_001 from './images/shiva_metric_001.png'
import shivaMetric_002 from './images/shiva_metric_002.png'
import grafanaDashboards_003 from './images/grafana_dashboards_003.png'
import grafanaDashboards_004 from './images/grafana_dashboards_004.png'
import grafanaDashboards_002 from './images/grafana_dashboards_002.png'
import grafanaDatasourceHttp from './images/grafana_datasource_http.png'
import grafanaDatasourceAuth from './images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from './images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from './images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from './images/grafana_datasource_working.png'
import grafanaDashboards_001 from './images/grafana_dashboards_001.png'

Die Mehrheit der __Cloud Temple__-Kunden verfügt über Visualisierungs-, Überwachungs- und Metrik-Tools zur Verfolgung ihrer Operationen.

Die Philosophie der Shiva-Konsole besteht darin, den Zugriff auf Daten zu ermöglichen, um sich über einen integrierten Prometheus-Proxy in diese Tools zu integrieren.

Dieser Proxy ermöglicht es Ihnen, Daten von einem Visualisierungstool wie [Grafana](https://grafana.com) abzufragen und zu bearbeiten.

Es ist jedoch möglich, bestimmte Leistungsdaten Ihrer Cloud-Ressourcen in der Weboberfläche der Shiva-Konsole anzuzeigen.

*__Hinweis:__ Die Philosophie von __Cloud Temple__ ist es nicht, mehrere Grafiken in die Weboberfläche zu integrieren, sondern die maximale Menge an Informationen über die API zugänglich zu machen.*

## In die Weboberfläche integriertes Dashboard

*__Hinweis:__ Um auf diese Dashboards zugreifen zu können, benötigen Sie die Berechtigung __'metric_read'__.*

### Verfolgung der Kohlenstoffemissionen für die Berechnung

Das Dashboard der Shiva-Konsole enthält standardmäßig eine Grafik zur Verfolgung des Stromverbrauchs Ihrer Rechenressourcen sowie die geschätzten damit verbundenen Kohlenstoffemissionen.

Es ist direkt von der Startseite der Weboberfläche der Cloud Temple-Konsole aus zugänglich, indem Sie auf __'Metric'__ klicken:

<img src={metricsHypervisorsCo2} />

### Globale Ansicht des Zustands der virtuellen Maschinen

Die Zusammenfassung des Zustands der virtuellen Maschinen ist im Menü __'IaaS'__ auf der linken Seite Ihres Bildschirms unter dem Untermenü __'Health'__ und dann __'Virtual Machines'__ zugänglich.

Diese Zusammenfassung liefert für den in den __'Filtern'__ ausgewählten Zeitraum:

- die Anzahl der CPUs und die __durchschnittliche CPU-Auslastung__,
- die Speichermenge in GB und die __durchschnittliche Speichernutzung__,
- die durchschnittliche __Speicherzugriffslatenz__ für Lese- und Schreibvorgänge,
- die durchschnittliche __'CPU Ready'__ der virtuellen Maschine (was der durchschnittlichen Wartezeit einer virtuellen Maschine auf die Verfügbarkeit eines physischen Kerns entspricht).

<img src={shivaMetric_000} />

Für jede VM können Sie auf deren Leistungsverlauf zugreifen, indem Sie auf das grüne __'History'__-Symbol für die virtuelle Maschine in der Aktionsspalte klicken:

<img src={shivaMetric_003} />

Sie gelangen dann auf die Seite zur grafischen Visualisierung historischer Daten, einschließlich einer Ansicht zur __Umweltleistung__:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

## Verwendung mit __Grafana__

### Konfigurieren Sie die Konsole als Datenquelle in Grafana

Das Ziel ist es, die Beobachtbarkeit Ihrer Cloud-Infrastruktur durch Cloud Temple-Metriken zu verbessern.

#### Voraussetzungen

- Eine Grafana-Instanz mit Zugriff auf die Konsolen-APIs.
- Administratorzugriff auf die Grafana-Instanz, um *Datenquellen* zu konfigurieren.
- Ein persönliches Zugriffstoken mit mindestens der Berechtigung `metrics_read`.

#### Konfiguration

Gehen Sie in der Grafana-__Konfiguration__ zum Tab "__datasources__" und klicken Sie auf "__Add datasource__".

Geben Sie in der URL die __Konsolenmetrik-API-URL__ ohne die Version an und beenden Sie sie mit "__/prometheus__"
(Beispiel: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

Aktivieren Sie im Abschnitt __Authentifizierung__ die Option __Basic Auth__.

<img src={grafanaDatasourceAuth} />

Konfigurieren Sie im Abschnitt "__Basic Auth Details__" den __Benutzernamen__ und das __Passwort__ unter Verwendung
der jeweiligen __ID__ und des __Geheimnisses__ eines __Persönlichen Zugriffstokens__ mit der Berechtigung __metrics_read__.

<img src={grafanaDatasourceBasicAuthDetails} />

Konfigurieren Sie im Abschnitt "__Alerting__" die Eigenschaft __HTTP Method__ auf __GET__.

<img src={grafanaDatasourceAlerting} />

#### Ergebnis

Um zu bestätigen, dass die Konfiguration korrekt und funktionsfähig ist, drücken Sie die Schaltfläche "__Save & test__".

Sie sollten ein Banner sehen, das Sie darüber informiert, dass die Konfiguration erfolgreich war.

<img src={grafanaDatasourceWorking} />

Eine ganze Reihe von Konfigurationsbeispielen für Grafana finden Sie hier: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />

Integration der Shiva-Konsole mit Grafana

Die Cloud Temple Shiva-Konsole kann als Datenquelle für Ihre [Grafana](https://grafana.com/)-Infrastruktur verwendet werden.

Die Konsole ist Prometheus-kompatibel, was es ermöglicht, sie in Grafana als Prometheus-Datenquelle hinzuzufügen. Sie können dann:

- Alle Ihre Metriken visualisieren.
- Ihre eigenen benutzerdefinierten Dashboards erstellen, die auf Ihre Bedürfnisse zugeschnitten sind.

Cloud Temple stellt auch eine [Sammlung von Dashboards](https://github.com/Cloud-Temple/console-grafana-iaas) zur Verfügung, die Sie als Basis verwenden oder an Ihre Anwendungsfälle anpassen können.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />
