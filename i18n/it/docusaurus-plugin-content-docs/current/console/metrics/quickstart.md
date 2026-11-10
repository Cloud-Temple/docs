---
title: Guida introduttiva
---

import grafanaDatasourceHttp from '@site/docs/console/metrics/images/grafana_datasource_http.png'
import grafanaDatasourceAuth from '@site/docs/console/metrics/images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from '@site/docs/console/metrics/images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from '@site/docs/console/metrics/images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from '@site/docs/console/metrics/images/grafana_datasource_working.png'
import grafanaDashboards_001 from '@site/docs/console/metrics/images/grafana_dashboards_001.png'

Questa guida aggiunge la Console come origine dati Prometheus nella vostra istanza Grafana. Potrete poi consultarvi le metriche delle vostre risorse Cloud Temple e creare le vostre dashboard.

:::info

Cloud Temple non fornisce un'istanza Grafana gestita: utilizzate la vostra istanza, nel cloud o on-premise. Le dashboard integrate nella Console, invece, non richiedono alcuna configurazione (vedete [Concetti](concepts.md)).

:::

## Prerequisiti

- Un'istanza Grafana con accesso alle API della Console.
- Un accesso di amministrazione sull'istanza Grafana per poter configurare le *datasource*.
- Un token di accesso personale con almeno l'autorizzazione `metrics_read`.

## Configurazione

Nella __configurazione__ di Grafana, andare alla scheda "__datasources__" e fare clic su "__Add datasource__".

Nell'__URL__, fornire l'__URL dell'API Console Metrics__ senza la versione e che termina con "__/prometheus__"
(esempio: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

Nell'__autenticazione__, attivare l'opzione __Basic Auth__.

<img src={grafanaDatasourceAuth} />

Nella sezione "__Basic Auth Details__", configurare il __username__ e la __password__ utilizzando
rispettivamente l'__id__ e il __secret__ di un __Token di accesso personale__ con il permesso __metrics_read__.

<img src={grafanaDatasourceBasicAuthDetails} />

Nella sezione "__Alerting__", configurare la proprietà __HTTP Method__ su __GET__.

<img src={grafanaDatasourceAlerting} />

## Risultato

Per confermare che la configurazione sia corretta e funzionante, cliccate sul pulsante "__Save & test__".

Dovreste visualizzare un banner che vi informa che la configurazione è stata completata con successo.

<img src={grafanaDatasourceWorking} />

Troverete una serie completa di esempi di configurazione per Grafana qui: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />
