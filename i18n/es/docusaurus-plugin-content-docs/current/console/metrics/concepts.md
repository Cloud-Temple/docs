

---
title: Metrología
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

La mayoría de los clientes **Cloud Temple** cuentan con herramientas de visualización, monitoreo y metrología para el seguimiento de sus operaciones.

La filosofía de la consola Shiva es facilitar el acceso a los datos para integrarse en este entorno de herramientas a través de un proxy Prometheus integrado.

Este proxy le permite consultar y manipular los datos desde una herramienta de visualización como [Grafana](https://grafana.com).

Sin embargo, es posible visualizar ciertos datos de rendimiento de sus recursos en la nube en la interfaz web de la consola Shiva.

*__Nota :__ La filosofía __Cloud Temple__ no es integrar múltiples gráficos en la interfaz web, sino ofrecer la máxima cantidad de información accesible a través de la API*



## Panel de control integrado en la interfaz web

*__Nota :__ Para acceder a estos dashboards, es necesario tener el permiso __'metric_read'__*



### Seguimiento de emisiones de carbono para el cálculo

El dashboard de la consola Shiva integra por defecto un gráfico de seguimiento del consumo eléctrico de su cálculo así como la estimación de la emisión de carbono asociada.

Está disponible directamente en la página de inicio de la interfaz web de la consola Cloud Temple, haciendo clic en __'Metric'__ :

<img src={metricsHypervisorsCo2} />



### Vista general del estado de las máquinas virtuales

El resumen del estado de las máquinas virtuales está disponible en el menú __'IaaS'__ a la izquierda de su pantalla, en el submenú __'Salud'__ y luego __'Máquinas virtuales'__.

Este resumen muestra, en el rango de tiempo seleccionado en __'Filtros'__:

- la cantidad de CPU y el __promedio de uso de la CPU__,
- la cantidad de GB de memoria y el __promedio de uso de la memoria__,
- los promedios de __latencia de acceso al almacenamiento__ en lectura y escritura,
- el __promedio de CPU Ready__ de la máquina virtual (lo que corresponde al tiempo promedio de espera para la disponibilidad de un núcleo físico por parte de la máquina virtual).

<img src={shivaMetric_000} />

Para cada VM, puede acceder al historial de sus rendimientos haciendo clic en la icono verde __'Historial'__ de la máquina virtual en la columna acción. :

<img src={shivaMetric_003} />

Luego accede a la página de visualización gráfica de los datos históricos, incluyendo una vista __rendimiento ambiental__ :

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />



## Uso con __Grafana__

Integración de la consola Shiva con Grafana

La consola Shiva de Cloud Temple puede usarse como fuente de datos para su infraestructura [Grafana](https://grafana.com/).

La consola es compatible con Prometheus, lo que permite agregarla en Grafana como fuente de datos de tipo Prometheus. Así podrás:

- Visualizar el conjunto de tus métricas.
- Crear tus propios dashboards personalizados adaptados a tus necesidades.

Cloud Temple también pone a disposición una [colección de dashboards](https://github.com/Cloud-Temple/console-grafana-iaas) listos para usar, que puedes usar como base o adaptar según tus casos de uso.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />



### Configurar la Consola como origen de datos en Grafana

El objetivo es enriquecer la observabilidad de su infraestructura en la nube a través de la metrología Cloud Temple.



#### Requisitos

- Una instancia de Grafana con acceso a las API de la Consola.
- Un acceso de administración en la instancia de Grafana para poder configurar los *datasources*.
- Un token de acceso personal que tenga al menos el permiso `metrics_read`.



#### Configuración

En la __configuración__ de Grafana, ir a la pestaña "__datasources__" y hacer clic en "__Add datasource__".

En la URL, proporcionar la __URL de la API Console Metrics__ sin la versión y terminando con "__/prometheus__"
(ejemplo: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

En la __autenticación__, activar la opción __Basic Auth__.

<img src={grafanaDatasourceAuth} />

En la sección "__Basic Auth Details__", configurar el __nombre de usuario__ y __contraseña__ utilizando respectivamente los __id__ y __secret__ de un __Token de acceso personal__ con el permiso __metrics_read__.

<img src={grafanaDatasourceBasicAuthDetails} />

En la sección "__Alerting__", configurar la propiedad __Método HTTP__ en __GET__.

<img src={grafanaDatasourceAlerting} />



#### Resultado

Para confirmar que la configuración es correcta y funcional, haga clic en el botón "__Save & test__".

Debería ver un banner que le informa de que la configuración fue exitosa.

<img src={grafanaDatasourceWorking} />

Encontrará un conjunto de ejemplos de configuración para Grafana aquí: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />