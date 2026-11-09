---
title: Erste Schritte
---

import grafanaDatasourceHttp from '@site/docs/console/metrics/images/grafana_datasource_http.png'
import grafanaDatasourceAuth from '@site/docs/console/metrics/images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from '@site/docs/console/metrics/images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from '@site/docs/console/metrics/images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from '@site/docs/console/metrics/images/grafana_datasource_working.png'
import grafanaDashboards_001 from '@site/docs/console/metrics/images/grafana_dashboards_001.png'

Diese Anleitung fügt die Konsole als Prometheus-Datenquelle in Ihre Grafana-Instanz ein. Anschließend können Sie dort die Metriken Ihrer Cloud-Temple-Ressourcen einsehen und eigene Dashboards erstellen.

:::info

Cloud Temple stellt keine verwaltete Grafana-Instanz bereit: Sie verwenden Ihre eigene Instanz, in der Cloud oder vor Ort. Die in die Konsole integrierten Dashboards erfordern dagegen keine Konfiguration (siehe [Konzepte](concepts.md)).

:::

## Voraussetzungen

- Eine Grafana-Instanz mit Zugriff auf die API der Konsole.
- Administrativer Zugriff auf die Grafana-Instanz, um die *Datenquellen* konfigurieren zu können.
- Ein Personal Access Token mit mindestens der Berechtigung `metrics_read`.

## Konfiguration

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

## Ergebnis

Um zu bestätigen, dass die Konfiguration korrekt und funktionsfähig ist, klicken Sie auf die Schaltfläche "__Save & test__".

Es sollte eine Bestätigungsmeldung angezeigt werden, die besagt, dass die Konfiguration erfolgreich war.

<img src={grafanaDatasourceWorking} />

Hier finden Sie eine Vielzahl von Konfigurationsbeispielen für Grafana: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />
