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

## Concepto

La mayoría de los clientes de __Cloud Temple__ disponen de herramientas de visualización, monitoreo y metrología para el seguimiento de sus operaciones.

La filosofía de la consola Shiva es permitir el acceso a los datos para integrarse en estas herramientas a través de un proxy Prometheus integrado.

Este proxy le permite consultar y manipular datos desde una herramienta de visualización como [Grafana](https://grafana.com).

Sin embargo, es posible visualizar ciertos datos de rendimiento de sus recursos Cloud en la interfaz web de la consola Shiva.

*__Nota:__ La filosofía de __Cloud Temple__ no es integrar múltiples gráficos en la interfaz web, sino ofrecer el máximo de información accesible a través de la API*

## Panel de control integrado en la interfaz web

*__Nota:__ Para acceder a estos paneles, es necesario tener el derecho __'metric_read'__*

### Seguimiento de emisiones de carbono para el cálculo

El panel de control de la consola Shiva integra por defecto un gráfico de seguimiento del consumo eléctrico de su cálculo así como la estimación de la emisión de carbono asociada.

Es accesible directamente en la página de inicio de la interfaz web de la consola Cloud Temple, haciendo clic en __'Metric'__:

<img src={metricsHypervisorsCo2} />

### Vista global de la salud de las máquinas virtuales

El resumen del estado de las máquinas virtuales es accesible en el menú __'IaaS'__ a la izquierda de su pantalla, en el submenú __'Salud'__ y luego __'Máquinas virtuales'__

Este resumen proporciona, en el rango de tiempo seleccionado en __'Filtros'__:

- el número de CPUs y el __uso promedio de CPU__,
- el número de GB de memoria y el __uso promedio de memoria__,
- Los promedios de __latencia de acceso al almacenamiento__ en lectura y escritura,
- El __'CPU Ready'__ promedio de la máquina virtual (lo que corresponde al tiempo promedio de espera para la disponibilidad de un núcleo físico por la máquina virtual).

<img src={shivaMetric_000} />

Para cada VM, puede acceder al historial de su rendimiento haciendo clic en el icono verde __'Historial'__ de la máquina virtual en la columna de acción:

<img src={shivaMetric_003} />

Accederá entonces a la página de visualización gráfica de los datos históricos, incluyendo una vista de __rendimiento ambiental__:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

## Uso con __Grafana__

Es posible que la consola Shiva sirva de __fuente de datos__ para su infraestructura [Grafana](https://grafana.com).

Encontrará todo un conjunto de __ejemplos de configuración para Grafana__ [aquí](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />
