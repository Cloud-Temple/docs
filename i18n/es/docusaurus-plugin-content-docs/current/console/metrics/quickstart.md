---
title: Guía de inicio
---

import grafanaDatasourceHttp from '@site/docs/console/metrics/images/grafana_datasource_http.png'
import grafanaDatasourceAuth from '@site/docs/console/metrics/images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from '@site/docs/console/metrics/images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from '@site/docs/console/metrics/images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from '@site/docs/console/metrics/images/grafana_datasource_working.png'
import grafanaDashboards_001 from '@site/docs/console/metrics/images/grafana_dashboards_001.png'

Esta guía añade la Consola como fuente de datos Prometheus en su instancia de Grafana. Después podrá consultar en ella las métricas de sus recursos Cloud Temple y crear sus propios paneles.

:::info

Cloud Temple no proporciona una instancia de Grafana gestionada: usted utiliza su propia instancia, en la nube o en sus instalaciones. Los paneles integrados en la Consola, en cambio, no requieren ninguna configuración (consulte [Conceptos](concepts.md)).

:::

## Requisitos

- Una instancia de Grafana con acceso a las API de la Consola.
- Acceso de administrador en la instancia de Grafana para poder configurar las *fuentes de datos*.
- Un token de acceso personal con al menos el permiso `metrics_read`.

## Configuración

En la __configuración__ de Grafana, vaya a la pestaña "__datasources__" y haga clic en "__Add datasource__".

En la URL, proporcione la __URL de la API Console Metrics__ sin la versión y que termine con "__/prometheus__"
(ejemplo: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

En la __autenticación__, active la opción __Basic Auth__.

<img src={grafanaDatasourceAuth} />

En la sección "__Basic Auth Details__", configure el __username__ y __password__ utilizando respectivamente el __id__ y el __secret__ de un __Token de acceso personal__ con el permiso __metrics_read__.

<img src={grafanaDatasourceBasicAuthDetails} />

En la sección "__Alerting__", configure la propiedad __HTTP Method__ en __GET__.

<img src={grafanaDatasourceAlerting} />

## Resultado

Para confirmar que la configuración es correcta y está operativa, haga clic en el botón "__Guardar y probar__".

Debería aparecer un banner que le notifique que la configuración se ha completado correctamente.

<img src={grafanaDatasourceWorking} />

Encontrará un conjunto completo de ejemplos de configuración para Grafana aquí: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />
