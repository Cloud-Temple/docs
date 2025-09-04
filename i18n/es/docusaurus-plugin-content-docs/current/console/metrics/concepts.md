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

La mayoría de los clientes de __Cloud Temple__ cuentan con herramientas de visualización, monitoreo y metrología para el seguimiento de sus operaciones.

La filosofía de la consola Shiva es permitir el acceso a los datos para integrarse en este entorno mediante un proxy Prometheus integrado.

Este proxy le permite consultar y manipular los datos desde una herramienta de visualización como [Grafana](https://grafana.com).

Sin embargo, es posible visualizar ciertos datos de rendimiento de sus recursos en la interfaz web de la consola Shiva.

*__Nota:__ La filosofía __Cloud Temple__ no es integrar múltiples gráficos en la interfaz web, sino ofrecer la máxima cantidad de información accesible a través de la API*

## Panel integrado en la interfaz web

*__Nota:__ Para acceder a estos paneles, es necesario tener el permiso __'metric_read'__*

### Seguimiento de emisiones de carbono para cálculo

El panel de la consola Shiva incluye por defecto un gráfico de seguimiento del consumo eléctrico de su cálculo así como la estimación de las emisiones de carbono asociadas.

Está disponible directamente en la página de inicio de la interfaz web de la consola Cloud Temple, haciendo clic en __'Metric'__ :

<img src={metricsHypervisorsCo2} />

### Vista general del estado de las máquinas virtuales

La síntesis del estado de las máquinas virtuales está disponible en el menú __'IaaS'__ a la izquierda de su pantalla, en el submenú __'Salud'__ y luego __'Máquinas virtuales'__.

Esta síntesis muestra, en el rango de tiempo seleccionado en __'Filtros'__:

- la cantidad de CPUs y la __media de uso de CPU__,
- la cantidad de GB de memoria y la __media de uso de memoria__,
- las medias de __latencia de acceso al almacenamiento__ en lectura y escritura,
- el __CPU Ready__ medio de la máquina virtual (lo que corresponde al tiempo medio de espera de disponibilidad de un núcleo físico por parte de la máquina virtual).

<img src={shivaMetric_000} />

Para cada VM, puede acceder al historial de sus rendimientos haciendo clic en la icono verde __'Historial'__ de la máquina virtual en la columna acción. :

<img src={shivaMetric_003} />

Accede entonces a la página de visualización de datos históricos, incluyendo una vista __de rendimiento ambiental__ :

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

## Uso con __Grafana__

Integración de la consola Shiva con Grafana

La consola Shiva de Cloud Temple se puede utilizar como fuente de datos para su infraestructura de [Grafana](https://grafana.com).

La consola es compatible con Prometheus, lo que le permite agregarla en Grafana como una fuente de datos de tipo Prometheus. Podrá:
-  Visualizar todas sus métricas.
-  Crear sus propios paneles personalizados adaptados a sus necesidades.

Cloud Temple también proporciona una [colección de paneles listos para usar](https://github.com/Cloud-Temple/console-grafana-iaas), que puede usar como base o adaptar a sus casos de uso.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />
