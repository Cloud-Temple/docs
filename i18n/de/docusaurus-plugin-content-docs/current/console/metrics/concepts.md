

---
title: Metrik
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

Die meisten Kunden von __Cloud Temple__ verfügen über Visualisierungstools, Monitoring- und Metriktools zur Überwachung ihrer Operationen.

Die Philosophie der Shiva-Konsole besteht darin, den Zugriff auf die Daten zu ermöglichen, um sich in dieses Werkzeug über ein integriertes Prometheus-Proxy zu integrieren.

Dieses Proxy-Tool ermöglicht es Ihnen, Daten über ein Visualisierungstool wie [Grafana](https://grafana.com) abzufragen und zu verarbeiten.

Es ist jedoch möglich, bestimmte Leistungsdaten Ihrer Cloud-Ressourcen in der Web-Oberfläche der Shiva-Konsole anzuzeigen.

*__Hinweis :__ Die Philosophie von __Cloud Temple__ besteht nicht darin, mehrere Grafiken in der Web-Oberfläche zu integrieren, sondern maximal verfügbare Informationen über die API anzubieten*



## Integrierter Dashboard-Interface

*__Hinweis:__ Um auf diese Dashboards zuzugreifen, ist es notwendig, das Recht __'metric_read'__ zu besitzen*



### Carbonemissions-Tracking für die Berechnung

Das Dashboard der Shiva-Konsole integriert standardmäßig ein Diagramm zur Verfolgung des Stromverbrauchs Ihres Rechnens sowie die geschätzten CO2-Emissionen, die damit verbunden sind.

Es ist direkt auf der Startseite der Web-Oberfläche der Cloud Temple-Konsole verfügbar, indem Sie auf __'Metric'__ klicken:

<img src={metricsHypervisorsCo2} />



### Übersicht der VM-Gesundheit

Die Zusammenfassung des Zustands der virtuellen Maschinen ist im Menü __'IaaS'__ auf der linken Seite Ihres Bildschirms im Untermenü __'Gesundheit'__ unter __'Virtuelle Maschinen'__ zugänglich.

Diese Zusammenfassung zeigt für den ausgewählten Zeitraum in __'Filter'__:

- die Anzahl der CPUs und den __Durchschnitt der CPU-Auslastung__,
- die Anzahl der GB RAM und den __Durchschnittsverbrauch der RAM__,
- die Durchschnittswerte der __Speicherzugriffsverzögerung__ bei Lese- und Schreibvorgängen,
- den durchschnittlichen __CPU Ready__-Wert der virtuellen Maschine (dies entspricht der durchschnittlichen Wartezeit für die Verfügbarkeit eines physischen Kerne durch die virtuelle Maschine).

<img src={shivaMetric_000} />

Für jede VM können Sie den Leistungsverlauf aufrufen, indem Sie auf das grüne __'Verlauf'__-Symbol der virtuellen Maschine in der Spalte Aktion klicken:

<img src={shivaMetric_003} />

Sie gelangen dann zur Seite zur grafischen Darstellung der historischen Daten, einschließlich einer __Umweltleistungsansicht__:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />



## Nutzung mit __Grafana__

Integration der Shiva-Konsole mit Grafana

Die Shiva-Konsole von Cloud Temple kann als Datenquelle für Ihre Infrastruktur [Grafana](https://grafana.com/) verwendet werden.

Die Konsole ist kompatibel mit Prometheus, was es ermöglicht, sie als Datenquelle des Typs Prometheus in Grafana hinzuzufügen. Sie können dann:

- Alle Ihre Metriken visualisieren.
- Ihre eigenen benutzerdefinierten Dashboards erstellen, die Ihren Anforderungen entsprechen.

Cloud Temple stellt auch eine [Dashboard-Sammlung](https://github.com/Cloud-Temple/console-grafana-iaas) bereit, die direkt verwendet oder an Ihre Anwendungsfälle angepasst werden kann.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />



### Console als Datenquelle in Grafana konfigurieren

Das Ziel ist, die Beobachtbarkeit Ihrer Cloud-Infrastruktur durch die Metrik von Cloud Temple zu verbessern.



#### Voraussetzungen

- Eine Grafana-Instanz mit Zugriff auf die APIs der Konsole.
- Administrationszugriff auf die Grafana-Instanz, um Datenquellen zu konfigurieren.
- Ein Personal Access Token mit mindestens der Berechtigung `metrics_read`.



#### Konfiguration

In der __Konfiguration__ von Grafana gehen Sie zum Tab "__Datenquellen__" und klicken Sie auf "__Datenquelle hinzufügen__".

In der URL geben Sie die __URL der API Console Metrics__ ohne die Version an und beendet mit "__/prometheus__"
(z. B. [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

Bei der __Authentifizierung__ aktivieren Sie die Option __Basic Auth__.

<img src={grafanaDatasourceAuth} />

In der Teil "__Basic Auth Details__", konfigurieren Sie den __Benutzername__ und __Passwort__ unter Verwendung
der __id__ und __secret__ eines __Persönlichen Zugriffstokens__ mit der Berechtigung __metrics_read__.

<img src={grafanaDatasourceBasicAuthDetails} />

In der Teil "__Alerting__", konfigurieren Sie die Eigenschaft __HTTP-Methode__ auf __GET__.

<img src={grafanaDatasourceAlerting} />



#### Ergebnis

Um zu überprüfen, ob die Konfiguration korrekt und funktionsfähig ist, klicken Sie auf den Button "__Save & test__".

Sie sollten ein Banner sehen, das Sie darüber informiert, dass die Konfiguration erfolgreich war.

<img src={grafanaDatasourceWorking} />

Sie finden eine Vielzahl von Beispielen für die Konfiguration von Grafana hier: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />