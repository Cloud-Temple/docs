---
title: Métricas
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

La mayoría de los clientes de __Cloud Temple__ disponen de herramientas de visualización, monitorización y métricas para el seguimiento de sus operaciones.

La filosofía de la consola Shiva es permitir el acceso a los datos para integrarse en estas herramientas a través de un proxy de Prometheus integrado.

Este proxy le permite consultar y manipular los datos desde una herramienta de visualización como [Grafana](https://grafana.com).

Sin embargo, es posible visualizar ciertos datos de rendimiento de sus recursos en la nube en la interfaz web de la consola Shiva.

*__Nota:__ La filosofía de __Cloud Temple__ no es integrar múltiples gráficos en la interfaz web, sino ofrecer la máxima información accesible a través de la API.*

## Panel de control integrado en la interfaz web

*__Nota:__ Para acceder a estos paneles, es necesario tener el permiso __'metric_read'__.*

### Seguimiento de las emisiones de carbono para el cálculo

El panel de control de la consola Shiva integra por defecto un gráfico de seguimiento del consumo eléctrico de su computación, así como la estimación de la emisión de carbono asociada.

Es accesible directamente en la página de inicio de la interfaz web de la consola de Cloud Temple, haciendo clic en __'Metric'__:

<img src={metricsHypervisorsCo2} />

### Vista global de la salud de las máquinas virtuales

La síntesis del estado de las máquinas virtuales es accesible en el menú __'IaaS'__ a la izquierda de su pantalla, en el submenú __'Salud'__ y luego en __'Máquinas virtuales'__.

Esta síntesis proporciona, en el rango de tiempo seleccionado en __'Filtros'__:

- el número de CPUs y el __uso medio de la CPU__,
- la cantidad de memoria en GB y el __uso medio de la memoria__,
- las medias de __latencia de acceso al almacenamiento__ en lectura y escritura,
- el __'CPU Ready'__ medio de la máquina virtual (que corresponde al tiempo medio de espera de disponibilidad de un núcleo físico por parte de la máquina virtual).

<img src={shivaMetric_000} />

Para cada VM, puede acceder a su historial de rendimiento haciendo clic en el icono verde __'Historial'__ de la máquina virtual en la columna de acciones:

<img src={shivaMetric_003} />

A continuación, accederá a la página de visualización gráfica de los datos históricos, que incluye una vista de __rendimiento medioambiental__:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

## Uso con __Grafana__

### Configurar la Consola como fuente de datos en Grafana

El objetivo es mejorar la observabilidad de su infraestructura en la nube a través de las métricas de Cloud Temple.

#### Requisitos previos

- Una instancia de Grafana con acceso a las API de la Consola.
- Acceso de administrador en la instancia de Grafana para poder configurar las *fuentes de datos*.
- Un token de acceso personal con al menos el permiso `metrics_read`.

#### Configuración

En la __configuración__ de Grafana, vaya a la pestaña "__datasources__" y haga clic en "__Add datasource__".

En la URL, proporcione la __URL de la API de Métricas de la Consola__ sin la versión y que termine en "__/prometheus__"
(ejemplo: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

En la sección de __autenticación__, active la opción __Basic Auth__.

<img src={grafanaDatasourceAuth} />

En la sección "__Basic Auth Details__", configure el __nombre de usuario__ y la __contraseña__ utilizando
respectivamente el __id__ y el __secreto__ de un __Token de Acceso Personal__ con el permiso __metrics_read__.

<img src={grafanaDatasourceBasicAuthDetails} />

En la sección "__Alerting__", configure la propiedad __HTTP Method__ en __GET__.

<img src={grafanaDatasourceAlerting} />

#### Resultado

Para confirmar que la configuración es correcta y funcional, pulse el botón "__Save & test__".

Debería ver un banner informándole de que la configuración se ha realizado con éxito.

<img src={grafanaDatasourceWorking} />

Encontrará un conjunto completo de ejemplos de configuración para Grafana aquí: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />

Integración de la consola Shiva con Grafana

La consola Shiva de Cloud Temple puede utilizarse como fuente de datos para su infraestructura de [Grafana](https://grafana.com/).

La consola es compatible con Prometheus, lo que permite añadirla en Grafana como una fuente de datos de tipo Prometheus. Así podrá:

- Visualizar todas sus métricas.
- Crear sus propios paneles personalizados adaptados a sus necesidades.

Cloud Temple también pone a su disposición una [colección de paneles](https://github.com/Cloud-Temple/console-grafana-iaas) listos para usar, que puede utilizar como base o adaptar según sus casos de uso.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />
