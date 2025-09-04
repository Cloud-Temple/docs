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

Most __Cloud Temple__ customers have visualization, monitoring, and metrics tools for tracking their operations.

The Shiva console's philosophy is to provide access to data in order to integrate into this tooling via an integrated Prometheus proxy.

This proxy allows you to query and manipulate data from a visualization tool like [Grafana](https://grafana.com).

It is however possible to view some performance data of your Cloud resources in the Shiva console's web interface.

*__Note:__ The __Cloud Temple__ philosophy is not to integrate multiple graphs into the web interface, but to offer the maximum amount of information accessible via the API*

## Integrated Dashboard in the Web Interface

*__Note :__ To access these dashboards, it is necessary to have the right __'metric_read'__*

### Carbon Emissions Tracking for Computation

The Shiva console's dashboard integrates by default a tracking graph of your computation's electricity consumption as well as the estimate of the associated carbon emissions.

It is accessible directly on the homepage of the Cloud Temple console's web interface by clicking on __'Metric'__ :

<img src={metricsHypervisorsCo2} />

### Overview of Virtual Machine Health

The summary of the virtual machine status is accessible in the __'IaaS'__ menu on the left of your screen, in the sub-menu __'Health'__ then __'Virtual Machines'__.

This summary provides, for the selected time range in __'Filters'__:

- the number of CPUs and the __average CPU usage__,
- the number of GB of memory and the __average memory usage__,
- the averages of __storage access latency__ for read and write operations,
- the average __'CPU Ready'__ time of the virtual machine (which corresponds to the average waiting time for physical core availability by the virtual machine).

<img src={shivaMetric_000} />

For each VM, you can access the performance history by clicking on the green __'History'__ icon of the virtual machine in the action column:

<img src={shivaMetric_003} />

You then access the graphical visualization page of the historical data, including a __environmental performance__ view:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

## Use with __Grafana__

Integrating the Shiva console with Grafana

The Cloud Temple Shiva console can be used as a datasource for your [Grafana](https://grafana.com) infrastructure.

The console is Prometheus compatible, which allows you to add it in Grafana as a Prometheus type datasource. You will be able to:
-  Visualize all your metrics.
-  Create your own custom dashboards tailored to your needs.

Cloud Temple also provides a [collection of ready-to-use dashboards](https://github.com/Cloud-Temple/console-grafana-iaas), which you can use as a base or adapt to your use cases.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />
