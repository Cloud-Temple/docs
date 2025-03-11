---
title: Metrology
---
import metricsHypervisorsCo2 from './images/metrics_hypervisors_co2.png'
import shivaMetric_000 from './images/shiva_metric_000.png'
import shivaMetric_003 from './images/shiva_metric_003.png'
import shivaMetric_001 from './images/shiva_metric_001.png'
import shivaMetric_002 from './images/shiva_metric_002.png'
import grafanaDashboards_003 from './images/grafana_dashboards_003.png'
import grafanaDashboards_004 from './images/grafana_dashboards_004.png'
import grafanaDashboards_002 from './images/grafana_dashboards_002.png'


## Concept

The majority of __Cloud Temple__ clients have visualization, monitoring, and metrology tools for tracking their operations.

The philosophy of the Shiva console is to allow access to the data to integrate into these tools via an integrated Prometheus proxy.

This proxy allows you to query and manipulate data from a visualization tool like [Grafana](https://grafana.com).

However, it is possible to visualize certain performance data of your Cloud resources in the Shiva console web interface.

*__Note:__ The __Cloud Temple__ philosophy is not to integrate multiple charts into the web interface, but to offer the maximum information accessible via the API*

## Dashboard integrated into the web interface

*__Note:__ To access these dashboards, it is necessary to have the __'metric_read'__ right*

### Tracking carbon emissions for computing

The Shiva console dashboard integrates by default a chart for tracking the electricity consumption of your computing as well as the associated carbon emission estimate.

It is directly accessible on the homepage of the Cloud Temple console web interface, by clicking on __'Metric'__:

<img src={metricsHypervisorsCo2} />

### Global view of virtual machine health

The summary of the state of virtual machines is accessible in the __'IaaS'__ menu on the left side of your screen, in the __'Health'__ submenu then __'Virtual Machines'__

This summary provides, over the time range selected in __'Filters'__:

- the number of CPUs and the __average CPU usage__,
- the number of GB of memory and the __average memory usage__,
- The averages of __storage access latency__ for reads and writes,
- The average __'CPU Ready'__ of the virtual machine (which corresponds to the average wait time for a physical core to be available for the virtual machine).

<img src={shivaMetric_000} />

For each VM, you can access its performance history by clicking on the green __'History'__ icon of the virtual machine in the action column. :

<img src={shivaMetric_003} />

You will then access the graphical visualization page of the historical data, including an __environmental performance__ view:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

## Use with __Grafana__

It is possible for the Shiva console to serve as a __datasource__ for your [Grafana](https://grafana.com) infrastructure.

You will find a whole set of __configuration examples for Grafana__ here:

https://github.com/Cloud-Temple/console-grafana-iaas

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />