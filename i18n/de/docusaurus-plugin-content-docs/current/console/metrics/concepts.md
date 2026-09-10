---
title: Metriken
---
import metricsHypervisorsCo2 from '@site/docs/console/metrics/images/metrics_hypervisors_co2.png'
import shivaHome from '@site/docs/console/metrics/images/shiva_home.png'
import shivaMetric_000 from '@site/docs/console/metrics/images/shiva_metric_000.png'
import shivaMetric_001 from '@site/docs/console/metrics/images/shiva_metric_001.png'
import shivaMetric_002 from '@site/docs/console/metrics/images/shiva_metric_002.png'
import shivaMetric_003 from '@site/docs/console/metrics/images/shiva_metric_003.png'
import shivaMetric_004 from '@site/docs/console/metrics/images/shiva_metric_004.png'
import shivaMetric_006 from '@site/docs/console/metrics/images/shiva_metric_006.png'
import shivaMetric_007 from '@site/docs/console/metrics/images/shiva_metric_007.png'
import shivaMetric_008 from '@site/docs/console/metrics/images/shiva_metric_008.png'
import shivaMetric_009 from '@site/docs/console/metrics/images/shiva_metric_009.png'
import shivaMetric_010 from '@site/docs/console/metrics/images/shiva_metric_010.png'
import shivaMetric_011 from '@site/docs/console/metrics/images/shiva_metric_011.png'
import shivaMetric_012 from '@site/docs/console/metrics/images/shiva_metric_012.png'
import shivaMetric_013 from '@site/docs/console/metrics/images/shiva_metric_013.png'
import shivaMetric_014 from '@site/docs/console/metrics/images/shiva_metric_014.png'
import grafanaDashboards_003 from '@site/docs/console/metrics/images/grafana_dashboards_003.png'
import grafanaDashboards_004 from '@site/docs/console/metrics/images/grafana_dashboards_004.png'
import grafanaDashboards_002 from '@site/docs/console/metrics/images/grafana_dashboards_002.png'
import grafanaDatasourceHttp from '@site/docs/console/metrics/images/grafana_datasource_http.png'
import grafanaDatasourceAuth from '@site/docs/console/metrics/images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from '@site/docs/console/metrics/images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from '@site/docs/console/metrics/images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from '@site/docs/console/metrics/images/grafana_datasource_working.png'
import grafanaDashboards_001 from '@site/docs/console/metrics/images/grafana_dashboards_001.png'

Die Mehrheit der __Cloud Temple__-Kunden verfügt über Tools zur Visualisierung, zum Monitoring und zur Metrikerfassung zur Verfolgung ihrer Operationen.

Die Philosophie der Konsole besteht darin, den Datenzugriff zu ermöglichen, um sich über einen integrierten Prometheus-Proxy in dieses Tooling zu integrieren.

Dieser Proxy ermöglicht es Ihnen, Daten von einem Visualisierungstool wie [Grafana](https://grafana.com) abzufragen und zu manipulieren.

Es ist jedoch möglich, bestimmte Performance-Daten Ihrer Cloud-Ressourcen in der Weboberfläche der Konsole anzuzeigen.

*__Hinweis:__ Die Philosophie von __Cloud Temple__ besteht nicht nur darin, Diagramme in der Weboberfläche zu integrieren, sondern auch maximal viele Informationen bereitzustellen, die über die API zugänglich sind.*

## In die Web-Oberfläche integrierte Dashboards

*__Hinweis:__ Für den Zugriff auf diese Dashboards ist die Berechtigung __'metric_read'__ erforderlich.*

### Übersicht

Die Startseite der Konsole zeigt das Haupt-Dashboard, das alle Metriken darstellt, die eine Statusübersicht über alle Produkte ermöglichen, für die Sie in Ihrem Geltungsbereich ein Abonnement abgeschlossen haben. Bei Problemen mit Ihren VMware- und/oder OpenIaaS-Produkten werden Warnungen angezeigt, deren Farbe der Kritikalität entspricht.

Diese Warnungen sind anklickbar und leiten zur entsprechenden Produktseite weiter.

<img src={shivaHome} />

### VMware-Metriken - Gesamtübersicht

Im Menü __'VMware'__ ist ein spezifisches Dashboard im Untermenü __'Metriken'__ verfügbar. Es umfasst 4 Registerkarten :

#### Übersicht

Auf diesem Tab finden sich ein Teil der Metriken, die bereits zu Beginn dieses Kapitels im globalen Dashboard behandelt wurden.

<img src={shivaMetric_000} />

#### Berechnung

Auf diesem Tab finden Sie die Anzahl der __AZ__, der __Clusters__, der __ESXs__, die __CO₂-Emission__, die __Verbrauchsabschätzung__ sowie 7 Diagramme,
die eine sehr visuelle Bestandsaufnahme Ihrer VMware-Umgebung darstellen. Die Verbrauchsabschätzung in kw/h wird auf Basis des Durchschnitts der Messwerte berechnet, die den gewählten Zeitraum abdecken, und auf eine Stunde hochgerechnet.

Sie können den abzudeckenden Datumsbereich sowie den Typ der Datenaggregation auswählen (standardmäßig werden die Daten für Ihren gesamten Umfang aggregiert). Bei der Auswahl von __Host__ z. B.:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

Beim Überfahren der einzelnen Diagramme mit der Maus werden die Details der Ressourcennamen und deren Werte angezeigt. Beim Klicken auf diese Diagramme öffnet sich eine kleine Tooltip, die es Ihnen ermöglicht, die Details zum angeklickten Datum leichter einzusehen:
<img src={shivaMetric_014} />

#### Speicher

Ebenso wie auf der Registerkarte „Berechnung“ finden sich hier verschiedene Informationen: die Anzahl der __AZ__, der __Datastore-Cluster__ und der __Datastores__ sowie 2 Diagramme. Das gleiche Filterprinzip gilt hier, jedoch können wir nach __SDRS-Cluster__ und __Datastore__ gruppieren.

<img src={shivaMetric_004} />

#### Virtuelle Maschinen

Hier erhalten Sie einen globalen Überblick über den Status der virtuellen Maschinen.

Diese Zusammenfassung zeigt für den ausgewählten Zeitraum:

- die Anzahl der CPUs und die __durchschnittliche CPU-Auslastung__,
- die Anzahl der GB Speicher und die __durchschnittliche Speichernutzung__,
- die durchschnittlichen __Speicherzugriffszeiten__ beim Lesen und Schreiben,
- die durchschnittliche __'CPU Ready'__-Zeit der virtuellen Maschine (entspricht der durchschnittlichen Wartezeit auf die Verfügbarkeit eines physischen Cores durch die virtuelle Maschine).

<img src={shivaMetric_006} />

Für jede VM können Sie auf den Verlauf ihrer Leistungsdaten zugreifen, indem Sie auf das grüne Symbol __'Verlauf'__ in der Aktionsspalte der virtuellen Maschine klicken:

<img src={shivaMetric_003} />

Sie gelangen dann zur Seite zur grafischen Darstellung der historischen Daten, einschließlich einer __Umweltmetriken__-Ansicht:

<img src={shivaMetric_007} />

### VMware-Metriken - Ansicht nach Ressource

Zudem ist es möglich, einen Teil der VMware-bezogenen Metriken einzusehen, dieses Mal jedoch spezifischer für einen bestimmten __Host__ oder ein bestimmtes __Datastore__.

#### Host

In der Host-Ansicht können für einen bestimmten Zeitraum der __Energieverbrauch__ sowie die Schätzung der __Kohlenstoffemissionen__ eingesehen werden.

<img src={shivaMetric_008} />

#### Datastore

In der Datastore-Ansicht können Sie für einen bestimmten Zeitraum die __IOPS__ einsehen.

<img src={shivaMetric_009} />

### OpenIaaS-Metriken

Im Menü __'OpenIaaS'__ ist ein spezifisches Dashboard im Untermenü __'Metriken'__ verfügbar. Es umfasst 3 Registerkarten:

#### Übersicht

Auf diesem Tab finden sich ein Teil der Metriken, die bereits zu Beginn dieses Kapitels im globalen Dashboard erläutert wurden.

<img src={shivaMetric_010} />

#### Berechnung

Auf diesem Tab finden Sie die Anzahl der __AZ__, __Clusters__ und __Hosts__ sowie 5 Diagramme, die eine sehr visuelle Übersicht Ihrer OpenIaaS-Umgebung bieten.

Sie können den abzudeckenden Datumsbereich sowie den Typ der Datenaggregation auswählen (standardmäßig werden die Daten für Ihren gesamten Umfang aggregiert). Beispiel: Auswahl von __Host__:

<img src={shivaMetric_011} />

<img src={shivaMetric_012} />

#### Speicher

Ebenso wie auf der Registerkarte "Berechnung" finden sich hier verschiedene Informationen: die Anzahl der __AZ__, der __Clusters__ und der __Datastores__ sowie ein Diagramm. Das gleiche Filterprinzip gilt auch hier, jedoch können wir nach __Block Storage__ gruppieren.

<img src={shivaMetric_013} />

## Verwendung mit __Grafana__

Integration der Konsole mit Grafana

Die Cloud Temple Konsole kann als Datenquelle für Ihre [Grafana](https://grafana.com/)-Infrastruktur verwendet werden.

Die Konsole ist Prometheus-kompatibel, sodass sie in Grafana als Datenquelle vom Typ Prometheus hinzugefügt werden kann. Sie können damit:

- Alle Ihre Metriken visualisieren.
- Eigene, an Ihre Anforderungen angepasste Dashboards erstellen.

Cloud Temple stellt zudem eine [Sammlung an Dashboards](https://github.com/Cloud-Temple/console-grafana-iaas) bereit, die sofort einsatzbereit sind und als Grundlage dienen oder an Ihre Anwendungsfälle angepasst werden können.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />

### Konfigurieren der Konsole als Datenquelle in Grafana

Das Ziel ist es, die Observability Ihrer Cloud-Infrastruktur durch Cloud-Temple-Metriken zu erweitern.

#### Voraussetzungen

- Eine Grafana-Instanz mit Zugriff auf die API der Konsole.
- Administrativer Zugriff auf die Grafana-Instanz, um die *Datenquellen* konfigurieren zu können.
- Ein Personal Access Token mit mindestens der Berechtigung `metrics_read`.

#### Konfiguration

Gehen Sie in der __Konfiguration__ von Grafana zum Reiter "__Datenquellen__" und klicken Sie auf "__Datenquelle hinzufügen__".

Geben Sie in das Feld URL die __URL der Console Metrics API__ ohne die Versionsnummer und endend mit "__/prometheus__" ein
(Beispiel: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

Aktivieren Sie in der __Authentifizierung__ die Option __Basic Auth__.

<img src={grafanaDatasourceAuth} />

Im Bereich "__Basic Auth Details__" konfigurieren Sie den __Benutzernamen__ und das __Passwort__ unter Verwendung der __ID__ und des __Secrets__ eines __persönlichen Zugriffstokens__ mit der Berechtigung __metrics_read__.

<img src={grafanaDatasourceBasicAuthDetails} />

Im Bereich "__Alerting__" konfigurieren Sie die Eigenschaft __HTTP Method__ auf __GET__.

<img src={grafanaDatasourceAlerting} />

#### Ergebnis

Um zu bestätigen, dass die Konfiguration korrekt und funktionsfähig ist, klicken Sie auf die Schaltfläche "__Save & test__".

Es sollte eine Bestätigungsmeldung angezeigt werden, die besagt, dass die Konfiguration erfolgreich war.

<img src={grafanaDatasourceWorking} />

Hier finden Sie eine Vielzahl von Konfigurationsbeispielen für Grafana: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />