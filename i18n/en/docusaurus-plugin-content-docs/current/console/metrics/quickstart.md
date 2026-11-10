---
title: Getting started
---

import grafanaDatasourceHttp from '@site/docs/console/metrics/images/grafana_datasource_http.png'
import grafanaDatasourceAuth from '@site/docs/console/metrics/images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from '@site/docs/console/metrics/images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from '@site/docs/console/metrics/images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from '@site/docs/console/metrics/images/grafana_datasource_working.png'
import grafanaDashboards_001 from '@site/docs/console/metrics/images/grafana_dashboards_001.png'

This guide adds the Console as a Prometheus data source in your Grafana instance. You can then view the metrics of your Cloud Temple resources there and build your own dashboards.

:::info

Cloud Temple does not provide a managed Grafana instance: you use your own instance, in the cloud or on premises. The dashboards built into the Console require no configuration (see [Concepts](concepts.md)).

:::

## Prerequisites

- A Grafana instance with access to the Console APIs.
- Administrative access to the Grafana instance to configure the *datasources*.
- A personal access token with at least the `metrics_read` permission.

## Configuration

In Grafana's __configuration__, go to the "__datasources__" tab and click "__Add datasource__".

In the URL, provide the __Console Metrics API URL__ without the version and ending with "__/prometheus__"
(example: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

In __authentication__, enable the __Basic Auth__ option.

<img src={grafanaDatasourceAuth} />

In the "__Basic Auth Details__" section, configure the __username__ and __password__ using
the __id__ and __secret__ of a __Personal Access Token__ with the __metrics_read__ permission, respectively.

<img src={grafanaDatasourceBasicAuthDetails} />

In the "__Alerting__" section, set the __HTTP Method__ property to __GET__.

<img src={grafanaDatasourceAlerting} />

## Result

To confirm that the configuration is correct and functional, click the "__Save & test__" button.

You should see a banner appear informing you that the configuration was successful.

<img src={grafanaDatasourceWorking} />

You will find a complete set of Grafana configuration examples here: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />
