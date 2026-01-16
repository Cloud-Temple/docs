---
title: Metrology
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
import shivaMetric_014 from './images/shiva_metric_014.png'
import grafanaDashboards_003 from './images/grafana_dashboards_003.png'
import grafanaDashboards_004 from './images/grafana_dashboards_004.png'
import grafanaDashboards_002 from './images/grafana_dashboards_002.png'
import grafanaDatasourceHttp from './images/grafana_datasource_http.png'
import grafanaDatasourceAuth from './images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from './images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from './images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from './images/grafana_datasource_working.png'
import grafanaDashboards_001 from './images/grafana_dashboards_001.png'

Most __Cloud Temple__ customers have visualization, monitoring, and metrology tools in place to track their operations.

The Console's philosophy is to enable access to data so it can be integrated into this tooling via an embedded Prometheus proxy.

This proxy allows you to query and manipulate data using a visualization tool such as [Grafana](https://grafana.com).

However, it is also possible to view certain performance metrics of your Cloud resources directly within the Console's web interface.

*__Note:__ The __Cloud Temple__ philosophy is not limited to embedding graphs within the web interface, but also to providing maximum information accessible via the API*

## Built-in dashboards in the web interface

*__Note:__ To access these dashboards, you must have the __'metric_read'__ permission*

### Overview

The home page of the Console displays the main dashboard, showing all metrics that provide an overview of each product you have subscribed to within your scope. If any issues occur with your VMware and/or OpenIaaS products, alerts will be visible—alert color indicates their severity.

These alerts are clickable and redirect to the corresponding product page.

<img src={shivaHome} />

### VMware Metrics - Overview

In the **'VMware'** menu, a dedicated dashboard is available under the **'Metrics'** submenu. It includes 4 tabs:

#### Overview

On this tab, you'll find some of the metrics already present in the global dashboard discussed at the beginning of this chapter.

<img src={shivaMetric_000} />

#### Calculation

On this tab, you'll find the number of **AZs**, **Clusters**, **ESXs**, **carbon emissions**, **power consumption estimates**, as well as 7 visual graphs providing a clear, graphical overview of your VMware environment. The power consumption estimate in kWh is calculated based on the average of readings covering the selected period, normalized to a per-hour basis.

You can select the date range to analyze, as well as the data grouping type (by default, data is aggregated across your entire environment). For example, selecting **Host**:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

When hovering over each graph, resource names and their corresponding values are displayed. Clicking on a graph opens a small tooltip, allowing you to easily view detailed information for the selected date:
<img src={shivaMetric_014} />

#### Storage

Just as on the "Compute" tab, you'll find various pieces of information: the number of **AZs**, **datastore clusters**, **datastores**, as well as two charts. The same filtering principles apply, but here you can group by **Cluster SDRS** and **Datastore**.

<img src={shivaMetric_004} />

#### Virtual Machines

Here you can find an overview of the health status of virtual machines.

This summary provides, over the selected time range:
- the number of CPUs and the __average CPU utilization__,
- the amount of memory in GB and the __average memory usage__,
- the average __storage access latency__ for both read and write operations,
- the average __'CPU Ready'__ time of the virtual machine (i.e., the average wait time for a physical CPU core to become available for the VM).

<img src={shivaMetric_006} />

For each VM, you can access its performance history by clicking the green __'History'__ icon in the Actions column:

<img src={shivaMetric_003} />

This will take you to the page displaying historical data in graphical form, including an __environmental performance__ view:

<img src={shivaMetric_007} />

### VMware Metrics - View by Resource

It is also possible to view a subset of metrics related to VMware, this time more specifically for a given **Host** or **Datastore**.

#### Host

In the Host view, you can check the **energy consumption** and the estimated **carbon emissions** for a given period.

<img src={shivaMetric_008} />

#### Datastore

In a Datastore view, you can check the **IOPS** for a given period.

<img src={shivaMetric_009} />

### OpenIaaS Metrics

In the **'OpenIaaS'** menu, a dedicated dashboard is available in the **'Metrics'** submenu. It includes 3 tabs:

#### Overview

On this tab, you'll find some of the metrics already present in the global dashboard discussed at the beginning of this chapter.

<img src={shivaMetric_010} />

#### Calcul

On this tab, you'll find the number of **AZs**, **Clusters**, **Hosts**, as well as 5 graphs providing a highly visual overview of your OpenIaaS environment.

You can select the date range to cover, as well as the data grouping type (by default, data is grouped across your entire environment). For example, by choosing **Host**:

<img src={shivaMetric_011} />

<img src={shivaMetric_012} />

#### Storage

Just as on the "Compute" tab, you'll find various information: the number of **AZs**, **Clusters**, **Datastores**, as well as a chart. The same filtering principles apply, but here we can group by **Block Storage**.

<img src={shivaMetric_013} />

## Usage with __Grafana__

Integrating the Console with Grafana

The Cloud Temple Console can be used as a data source for your [Grafana](https://grafana.com/) infrastructure.

The Console is Prometheus-compatible, allowing you to add it to Grafana as a Prometheus-type data source. You will then be able to:

- Visualize all your metrics.
- Create custom dashboards tailored to your specific needs.

Cloud Temple also provides a [collection of ready-to-use dashboards](https://github.com/Cloud-Temple/console-grafana-iaas) that you can use as a starting point or adapt to your use cases.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />

### Configure the Console as a Data Source in Grafana

The goal is to enhance the observability of your Cloud infrastructure through Cloud Temple metrics.

#### Prerequisites

- A Grafana instance with access to the Console APIs.
- Administrative access to the Grafana instance to configure *datasources*.
- A personal access token with at least the `metrics_read` permission.

#### Configuration

In the __Grafana configuration__, go to the "__Datasources__" tab and click on "__Add datasource__".

In the URL field, provide the __Console Metrics API URL__ without the version, ending with "__/prometheus__"  
(example: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

In the "__Authentication__" section, enable the __Basic Auth__ option.

<img src={grafanaDatasourceAuth} />

In the "__Basic Auth Details__" section, configure the __username__ and __password__ using the __id__ and __secret__ of a __Personal Access Token__ with the __metrics_read__ permission.

<img src={grafanaDatasourceBasicAuthDetails} />

In the "__Alerting__" section, set the __HTTP Method__ to __GET__.

<img src={grafanaDatasourceAlerting} />

#### Result

To confirm that the configuration is correct and functional, click the "__Save & test__" button.

You should see a banner indicating that the configuration was successful.

<img src={grafanaDatasourceWorking} />

You can find a comprehensive set of Grafana configuration examples here: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />