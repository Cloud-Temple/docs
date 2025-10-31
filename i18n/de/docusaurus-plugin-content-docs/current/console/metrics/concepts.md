---
title: Metrik
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

*__Hinweis:__ Die Philosophie von __Cloud Temple__ besteht nicht darin, mehrere Grafiken in der Web-Oberfläche zu integrieren, sondern maximal verfügbare Informationen über die API anzubieten*

## Integrierte Dashboards in der Web-Oberfläche

*__Hinweis:__ Um auf diese Dashboards zuzugreifen, ist es notwendig, das Recht __'metric_read'__ zu besitzen*

### Globale Ansicht

Die Startseite der Shiva-Konsole zeigt das Haupt-Dashboard an, das alle Metriken darstellt, die einen Überblick über jedes Produkt bieten, das Sie in Ihrem Bereich abonniert haben. Bei Problemen mit Ihren VMware- und/oder OpenIaaS-Produkten werden Warnungen sichtbar sein, deren Farbe auf ihre Bedeutung hinweist.

Diese Warnungen sind klickbar und leiten zur entsprechenden Produktseite weiter.

<img src={shivaHome} />

### VMware-Metriken - Globale Ansicht

Im Menü **'VMware'** ist ein spezifisches Dashboard im Untermenü **'Metriken'** verfügbar. Es umfasst 4 Registerkarten:

#### Überblick

Auf dieser Registerkarte finden Sie einige der Metriken, die bereits im globalen Dashboard am Anfang dieses Kapitels vorhanden sind.

<img src={shivaMetric_000} />

#### Berechnung

Auf dieser Registerkarte finden Sie die Anzahl der **AZs**, **Cluster**, **ESXs**, **Kohlenstoffemissionen**, **Verbrauch** sowie 7 Diagramme, die einen sehr visuellen Überblick über Ihre VMware-Umgebung bieten.

Sie können den abzudeckenden Datumsbereich sowie den Typ der Datengruppierung wählen (standardmäßig werden die Daten für Ihren gesamten Bereich gruppiert). Zum Beispiel durch Auswahl von **Host**:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

#### Speicher

Ähnlich wie auf der Registerkarte "Berechnung" finden Sie verschiedene Informationen: die Anzahl der **AZs**, **Datastore-Cluster**, **Datastores** sowie 2 Diagramme. Das gleiche Filterprinzip gilt, aber hier können wir nach **SDRS-Cluster** und **Datastore** gruppieren.

<img src={shivaMetric_004} />

#### Virtuelle Maschinen

Hier finden Sie eine globale Ansicht der Gesundheit Ihrer virtuellen Maschinen.

Diese Zusammenfassung zeigt für den ausgewählten Zeitraum:
- die Anzahl der CPUs und den __Durchschnitt der CPU-Auslastung__,
- die Anzahl der GB RAM und den __Durchschnittsverbrauch der RAM__,
- Die Durchschnittswerte der __Speicherzugriffsverzögerung__ bei Lese- und Schreibvorgängen,
- Den durchschnittlichen __CPU Ready__-Wert der virtuellen Maschine (dies entspricht der durchschnittlichen Wartezeit für die Verfügbarkeit eines physischen Kerns durch die virtuelle Maschine).

<img src={shivaMetric_006} />

Für jede VM können Sie den Leistungsverlauf aufrufen, indem Sie auf das grüne __'Verlauf'__-Symbol der virtuellen Maschine in der Spalte Aktion klicken:

<img src={shivaMetric_003} />

Sie gelangen dann zur Seite zur grafischen Darstellung der historischen Daten, einschließlich einer __Umweltleistungsansicht__:

<img src={shivaMetric_007} />

### VMware-Metriken - Ressourcenansicht

Sie können auch einige VMware-bezogene Metriken anzeigen, diesmal jedoch spezifischer für einen bestimmten **Host** oder **Datastore**.

#### Host

In der Host-Ansicht können Sie den **Energieverbrauch** sowie die geschätzten **Kohlenstoffemissionen** für einen bestimmten Zeitraum anzeigen.

<img src={shivaMetric_008} />

#### Datastore

In der Datastore-Ansicht können Sie die **IOPS** für einen bestimmten Zeitraum anzeigen.

<img src={shivaMetric_009} />

### OpenIaaS-Metriken

Im Menü **'OpenIaaS'** ist ein spezifisches Dashboard im Untermenü **'Metriken'** verfügbar. Es umfasst 3 Registerkarten:

#### Überblick

Auf dieser Registerkarte finden Sie einige der Metriken, die bereits im globalen Dashboard am Anfang dieses Kapitels vorhanden sind.

<img src={shivaMetric_010} />

#### Berechnung

Auf dieser Registerkarte finden Sie die Anzahl der **AZs**, **Cluster**, **Hosts** sowie 5 Diagramme, die einen sehr visuellen Überblick über Ihre OpenIaaS-Umgebung bieten.

Sie können den abzudeckenden Datumsbereich sowie den Typ der Datengruppierung wählen (standardmäßig werden die Daten für Ihren gesamten Bereich gruppiert). Zum Beispiel durch Auswahl von **Host**:

<img src={shivaMetric_011} />

<img src={shivaMetric_012} />

#### Speicher

Ähnlich wie auf der Registerkarte "Berechnung" finden Sie verschiedene Informationen: die Anzahl der **AZs**, **Cluster**, **Datastores** sowie ein Diagramm. Das gleiche Filterprinzip gilt, aber hier können wir nach **Block Storage** gruppieren.

<img src={shivaMetric_013} />

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
