---
title: Metrología
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

La mayoría de los clientes de __Cloud Temple__ disponen de herramientas de visualización, monitoreo y métricas para el seguimiento de sus operaciones.

La filosofía de la Consola es permitir el acceso a los datos para integrarse en esta herramienta mediante un proxy Prometheus integrado.

Este proxy le permite consultar y manipular los datos desde una herramienta de visualización como [Grafana](https://grafana.com).

Sin embargo, es posible visualizar ciertos datos de rendimiento de sus recursos Cloud en la interfaz web de la Consola.

*__Nota:__ La filosofía de __Cloud Temple__ no se limita a integrar gráficos en la interfaz web, sino también a ofrecer la máxima cantidad de información accesible a través de la API*

## Paneles de control integrados en la interfaz web

*__Nota :__ Para acceder a estos paneles de control, es necesario tener el permiso __'metric_read'__*

### Vista general

La página de inicio de la Consola muestra el panel principal, que presenta el conjunto de métricas que permiten evaluar el estado actual de cada producto al que se ha suscrito dentro de su perímetro. En caso de problema(s) en sus productos VMware y/o OpenIaaS, se mostrarán alertas, cuyo color está relacionado con su importancia.

Estas alertas son clicables y redirigen a la página del producto correspondiente.

<img src={shivaHome} />

### Métricas VMware - Vista global

En el menú __'VMware'__, un panel de control específico está disponible en el submenú __'Métricas'__. Agrupa 4 pestañas :

#### Vista general

En esta pestaña se muestra una parte de las métricas ya presentes en el panel de control global abordado al inicio de este capítulo.

<img src={shivaMetric_000} />

#### Cálculo
En esta pestaña, se encuentra el número de __AZ__, de __Clusters__, de __ESXs__, la __emisión de carbono__, la __estimación del consumo__, así como 7 gráficos
que ofrecen una visión muy visual del estado de su entorno VMware. La estimación del consumo en kw/h se calcula sobre la media de las lecturas que cubren el período seleccionado, referida a una hora.

Puede elegir el intervalo de fechas a cubrir, así como el tipo de agrupación de datos (par défaut, les données sont regroupées pour l'ensemble de votre périmètre). Al elegir __Host__ por ejemplo:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

Al pasar el cursor sobre cada uno de los gráficos, se muestran los detalles de los nombres de los recursos y sus valores. Al hacer clic en estos mismos gráficos, se abre un pequeño tooltip que le permite consultar más fácilmente los detalles correspondientes a la fecha seleccionada:
<img src={shivaMetric_014} />

#### Almacenamiento

De la misma manera que en la pestaña "Cálculo", se muestran diferentes datos: el número de __AZ__, de __datastore clusters__, de __datastores__ así como 2 gráficos. Se aplica el mismo principio de filtros, pero aquí podemos agrupar por __Cluster SDRS__ y __Datastore__.

<img src={shivaMetric_004} />

#### Máquinas virtuales

Aquí se presenta una visión global de la salud de las máquinas virtuales.

Este resumen proporciona, para el intervalo de tiempo seleccionado:

- el número de CPU y la __media de uso de CPU__,
- el número de Go de memoria y la __media de uso de memoria__,
- Las medias de __latencia de acceso al almacenamiento__ en lectura y escritura,
- El __'CPU Ready'__ medio de la máquina virtual (lo que corresponde al tiempo medio de espera de disponibilidad de un núcleo físico por parte de la máquina virtual).

<img src={shivaMetric_006} />

Para cada VM, puede acceder al historial de su rendimiento haciendo clic en el icono verde __'Historial'__ de la máquina virtual en la columna de acción. :

<img src={shivaMetric_003} />

Accederá entonces a la página de visualización gráfica de los datos históricos, que incluye una vista de __rendimiento del entorno__:

<img src={shivaMetric_007} />

### Métricas de VMware - Vista por recurso

También es posible consultar una parte de las métricas relacionadas con VMware, pero esta vez de manera más específica para un __Host__ o un __Datastore__ determinado.

#### Host

En la vista de un Host, se puede consultar, para un período determinado, el __consumo energético__ así como la estimación de las __emisiones de carbono__.

<img src={shivaMetric_008} />

#### Datastore

En la vista de un Datastore, se pueden consultar los __IOPS__ para un período determinado.

<img src={shivaMetric_009} />

### Métricas OpenIaaS

En el menú __'OpenIaaS'__, hay un panel de control específico disponible en el submenú __'Métricas'__. Incluye 3 pestañas :

#### Resumen

En esta pestaña, se muestra una parte de las métricas ya incluidas en el dashboard global abordado al inicio de este capítulo.

<img src={shivaMetric_010} />

#### Cálculo

En esta pestaña, se muestra el número de __AZ__, __Clusters__, __Hosts__, así como 5 gráficos
que presentan una visión muy visual del estado de su entorno OpenIaaS.

Puede elegir el intervalo de fechas a cubrir, así como el tipo de agrupación de datos (por defecto, los datos se agrupan para todo su ámbito). Por ejemplo, al seleccionar __Host__:

<img src={shivaMetric_011} />

<img src={shivaMetric_012} />

#### Almacenamiento

De la misma manera que en la pestaña "Cálculo", se muestran diferentes datos: el número de __AZ__, de __Clusters__, de __Datastores__ así como un gráfico. Se aplica el mismo principio de filtros, pero aquí podemos agrupar por __Block Storage__.

<img src={shivaMetric_013} />

## Uso con __Grafana__

Integración de la Consola con Grafana

La Consola de Cloud Temple puede utilizarse como fuente de datos para su infraestructura [Grafana](https://grafana.com/).

La consola es compatible con Prometheus, lo que permite agregarla en Grafana como una fuente de datos de tipo Prometheus. De este modo, podrá:

- Visualizar todas sus métricas.
- Crear sus propios dashboards personalizados adaptados a sus necesidades.

Cloud Temple también pone a disposición una [colección de dashboards](https://github.com/Cloud-Temple/console-grafana-iaas) listos para usar, que puede utilizar como base o adaptar según sus casos de uso.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />

### Configurar la Consola como fuente de datos en Grafana

El objetivo es enriquecer la observabilidad de su infraestructura Cloud mediante la telemetría de Cloud Temple.

#### Requisitos

- Una instancia de Grafana con acceso a las API de la Consola.
- Acceso de administrador en la instancia de Grafana para poder configurar las *fuentes de datos*.
- Un token de acceso personal con al menos el permiso `metrics_read`.

#### Configuración

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

#### Resultado

Para confirmar que la configuración es correcta y está operativa, haga clic en el botón "__Guardar y probar__".

Debería aparecer un banner que le notifique que la configuración se ha completado correctamente.

<img src={grafanaDatasourceWorking} />

Encontrará un conjunto completo de ejemplos de configuración para Grafana aquí: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />