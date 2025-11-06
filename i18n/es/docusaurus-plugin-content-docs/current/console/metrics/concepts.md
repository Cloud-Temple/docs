---
title: Metrología
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

La mayoría de los clientes de __Cloud Temple__ cuentan con herramientas de visualización, monitoreo y metrología para el seguimiento de sus operaciones.

La filosofía de la consola Shiva es permitir el acceso a los datos para integrarse en estas herramientas mediante un proxy Prometheus integrado.

Este proxy le permite consultar y manipular los datos desde una herramienta de visualización como [Grafana](https://grafana.com).

Sin embargo, también es posible visualizar ciertos datos de rendimiento de sus recursos Cloud en la interfaz web de la consola Shiva.

*__Nota:__ La filosofía __Cloud Temple__ no consiste únicamente en integrar gráficos en la interfaz web, sino también en ofrecer el máximo de información accesible a través de la API*

## Dashboards integrados en la interfaz web

*__Nota:__ Para acceder a estos dashboards, es necesario contar con el permiso __'metric_read'__*

### Vista general

La página de inicio de la consola Shiva muestra el panel principal, que presenta todas las métricas que permiten tener una visión general de cada producto al que usted ha suscrito dentro de su ámbito. En caso de problemas con sus productos VMware y/o OpenIaaS, se mostrarán alertas, cuyo color está relacionado con su gravedad.

Estas alertas son clicables y redirigen a la página correspondiente al producto afectado.

<img src={shivaHome} />

### Métricas VMware - Vista general

En el menú **'VMware'**, está disponible un panel específico en el submenú **'Métricas'**. Agrupa 4 pestañas:

#### Vista general

En esta pestaña se encuentran algunas de las métricas ya presentes en el panel general tratado al inicio de este capítulo.

<img src={shivaMetric_000} />

#### Cálculo

En esta pestaña, se muestra el número de **AZ**, **Clusters**, **ESX**, la **emisión de carbono**, el **consumo**, así como 7 gráficos que ofrecen una visión muy visual de su entorno VMware.

Puede elegir el intervalo de fechas a cubrir, así como el tipo de agrupación de datos (por defecto, los datos se agrupan para todo su entorno). Al seleccionar, por ejemplo, **Host**:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

#### Almacenamiento

Al igual que en la pestaña "Cálculo", se encuentran diferentes informaciónes: el número de **AZ**, de **clusters de datastore**, de **datastores**, así como 2 gráficos. Se aplica el mismo principio de filtros, pero aquí podemos agrupar por **Cluster SDRS** y **Datastore**.

<img src={shivaMetric_004} />

#### Máquinas virtuales

Aquí se presenta una visión general de la salud de las máquinas virtuales.

Este resumen proporciona, en el intervalo de tiempo seleccionado:
- el número de CPUs y la __media de uso de CPU__,
- la cantidad de GB de memoria y la __media de uso de memoria__,
- las medias de __latencia de acceso al almacenamiento__ en lectura y escritura,
- la __media de "CPU Ready"__ de la máquina virtual (que corresponde al tiempo medio de espera de disponibilidad de un núcleo físico por parte de la máquina virtual).

<img src={shivaMetric_006} />

Para cada VM, puede acceder al historial de rendimiento haciendo clic en el icono verde __'Historial'__ de la máquina virtual en la columna de acciones:

<img src={shivaMetric_003} />

A continuación, accederá a la página de visualización gráfica de los datos históricos, incluyendo una vista __de rendimiento del entorno__:

<img src={shivaMetric_007} />

### VMware Metrics - View by resource

It is also possible to view some of the metrics related to VMware, this time more specifically for a given **Host** or **Datastore**.

#### Host

En la vista de un Host, se puede consultar, para un período determinado, el **consumo energético** así como la estimación de **emisiones de carbono**.

<img src={shivaMetric_008} />

#### Datastore

En la vista de un Datastore, se pueden consultar durante un período determinado las **IOPS**.

<img src={shivaMetric_009} />

### OpenIaaS Metrics

In the **'OpenIaaS'** menu, a specific dashboard is available in the **'Metrics'** submenu. It includes 3 tabs:

#### Vista general

En esta pestaña se encuentran algunas de las métricas ya presentes en el panel general tratado al inicio de este capítulo.

<img src={shivaMetric_010} />

#### Cálculo

En esta pestaña, se muestra el número de **AZ**, **Clusters**, **Hosts**, así como 5 gráficos que ofrecen una visión muy visual de su entorno OpenIaaS.

Puede seleccionar el intervalo de fechas a cubrir, así como el tipo de agrupación de datos (por defecto, los datos se agrupan para todo su entorno). Al elegir, por ejemplo, **Host**:

<img src={shivaMetric_011} />

<img src={shivaMetric_012} />

#### Almacenamiento

Al igual que en la pestaña "Cálculo", se muestran diferentes información: el número de **AZ**, **Clusters**, **Datastores**, así como un gráfico. Se aplica el mismo principio de filtros, pero aquí podemos agrupar por **Block Storage**.

<img src={shivaMetric_013} />

## Uso con __Grafana__

Integración de la consola Shiva con Grafana

La consola Shiva de Cloud Temple puede utilizarse como fuente de datos para su infraestructura [Grafana](https://grafana.com/).

La consola es compatible con Prometheus, lo que permite agregarla en Grafana como fuente de datos de tipo Prometheus. De esta forma podrá:

- Visualizar todas sus métricas.
- Crear sus propios paneles personalizados adaptados a sus necesidades.

Cloud Temple también pone a disposición una [colección de paneles](https://github.com/Cloud-Temple/console-grafana-iaas) listos para usar, que puede utilizar como base o adaptar según sus casos de uso.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />

### Configurar la Consola como origen de datos en Grafana

El objetivo es enriquecer la observabilidad de su infraestructura en la nube mediante la métrica de Cloud Temple.

#### Requis

- Una instancia de Grafana con acceso a las API de la Consola.
- Acceso de administración en la instancia de Grafana para poder configurar los *datasources*.
- Un token de acceso personal con al menos el permiso `metrics_read`.

#### Configuration

En la __configuración__ de Grafana, ir al panel "__datasources__" y hacer clic en "__Add datasource__".

En la URL, proporcionar la __URL de la API Console Metrics__ sin la versión y que termine con "__/prometheus__"
(ejemplo: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

En la sección de "__Autenticación__", activar la opción __Basic Auth__.

<img src={grafanaDatasourceAuth} />

En la parte "__Detalles de Basic Auth__", configurar el __nombre de usuario__ y __contraseña__ utilizando respectivamente el __id__ y el __secreto__ de un __Token de acceso personal__ con el permiso __metrics_read__.

<img src={grafanaDatasourceBasicAuthDetails} />

En la sección "__Alerting__", configurar la propiedad __Método HTTP__ como __GET__.

<img src={grafanaDatasourceAlerting} />

#### Resultado

Para confirmar que la configuración es correcta y funcional, pulse el botón "__Guardar y probar__".

Debería aparecer una barra informativa indicando que la configuración se ha realizado con éxito.

<img src={grafanaDatasourceWorking} />

Encontrará un conjunto completo de ejemplos de configuración para Grafana aquí: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />