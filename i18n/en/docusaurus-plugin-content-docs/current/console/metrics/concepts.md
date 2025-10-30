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
import grafanaDashboards_003 from './images/grafana_dashboards_003.png'
import grafanaDashboards_004 from './images/grafana_dashboards_004.png'
import grafanaDashboards_002 from './images/grafana_dashboards_002.png'
import grafanaDatasourceHttp from './images/grafana_datasource_http.png'
import grafanaDatasourceAuth from './images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from './images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from './images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from './images/grafana_datasource_working.png'
import grafanaDashboards_001 from './images/grafana_dashboards_001.png'

Most of __Cloud Temple's__ clients have visualization, monitoring, and metrology tools for tracking their operations.

The philosophy of the Shiva console is to enable access to data in order to integrate into this tooling via an integrated Prometheus proxy.

This proxy allows you to query and manipulate the data from a visualization tool like [Grafana](https://grafana.com).

It is however possible to visualize some performance data of your Cloud resources in the web interface of the Shiva console.

*__Note:__ The __Cloud Temple__ philosophy is not to integrate multiple graphs into the web interface, but to offer the maximum of information accessible via the API*

## Integrated Dashboards in the Web Interface

*__Note:__ To access these dashboards, you need to have the right __'metric_read'__*

### Global View

The home page of the Shiva console displays the main dashboard, presenting all the metrics that provide an overview of each product you have subscribed to within your scope. In case of problem(s) with your VMware and/or OpenIaaS products, alerts will be visible, with colors indicating their importance.

These alerts are clickable and redirect to the relevant product page.

<img src={shivaHome} />

### VMware Metrics - Global View

In the **'VMware'** menu, a specific dashboard is available in the **'Metrics'** submenu. It contains 4 tabs:

#### Overview

This tab shows some of the metrics already present in the global dashboard discussed at the beginning of this chapter.

<img src={shivaMetric_000} />

#### Compute

This tab shows the number of **AZs**, **Clusters**, **ESXs**, **carbon emissions**, **consumption**, as well as 7 charts providing a very visual overview of your VMware environment.

You can choose the date range to cover, as well as the data grouping type (by default, data is grouped for your entire scope). For example, by choosing **Host**:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

#### Storage

Similar to the "Compute" tab, you will find various information: the number of **AZs**, **datastore clusters**, **datastores**, as well as 2 charts. The same filtering principle applies, but here we can group by **SDRS Cluster** and **Datastore**.

<img src={shivaMetric_004} />

#### Virtual Machines

Here you will find a global view of the health of your virtual machines.

This summary provides, over the selected time range:
- the number of CPUs and the __average CPU usage__,
- the number of GB of memory and the __average memory usage__,
- The averages of __storage access latency__ for read and write operations,
- The average __'CPU Ready'__ time of the virtual machine (which corresponds to the average waiting time for a physical core availability by the virtual machine).

<img src={shivaMetric_006} />

For each VM, you can access the performance history by clicking on the green __'History'__ icon of the virtual machine in the action column:

<img src={shivaMetric_003} />

You then access the graphical visualization page of the historical data, including an __environmental performance view__:

<img src={shivaMetric_007} />

### VMware Metrics - Resource View

You can also view some VMware-related metrics, but this time more specifically for a given **Host** or **Datastore**.

#### Host

In the Host view, you can view the **energy consumption** as well as the estimated **carbon emissions** for a given period.

<img src={shivaMetric_008} />

#### Datastore

In the Datastore view, you can view the **IOPS** for a given period.

<img src={shivaMetric_009} />

### OpenIaaS Metrics

In the **'OpenIaaS'** menu, a specific dashboard is available in the **'Metrics'** submenu. It contains 3 tabs:

#### Overview

This tab shows some of the metrics already present in the global dashboard discussed at the beginning of this chapter.

<img src={shivaMetric_010} />

#### Compute

This tab shows the number of **AZs**, **Clusters**, **Hosts**, as well as 5 charts providing a very visual overview of your OpenIaaS environment.

You can choose the date range to cover, as well as the data grouping type (by default, data is grouped for your entire scope). For example, by choosing **Host**:

<img src={shivaMetric_011} />

<img src={shivaMetric_012} />

#### Storage

Similar to the "Compute" tab, you will find various information: the number of **AZs**, **Clusters**, **Datastores**, as well as a chart. The same filtering principle applies, but here we can group by **Block Storage**.

<img src={shivaMetric_013} />

## Usage with __Grafana__

Integration of the Shiva console with Grafana

The Shiva console from Cloud Temple can be used as a datasource for your infrastructure [Grafana](https://grafana.com/).

The console is compatible with Prometheus, allowing it to be added in Grafana as a Prometheus type datasource. You will then be able to:

- Visualize all your metrics.
- Create your own custom dashboards tailored to your needs.

Cloud Temple also provides a [collection of dashboards](https://github.com/Cloud-Temple/console-grafana-iaas) ready to use, which you can use as a base or adapt according to your use cases.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />



### Configure the Console as a Data Source in Grafana

The goal is to enhance the observability of your Cloud infrastructure via Cloud Temple metrics.



#### Prerequisites

- A Grafana instance with access to the Console APIs.
- Administrator access on the Grafana instance to configure the *datasources*.
- A personal access token with at least the `metrics_read` right.



#### Configuration

In the __configuration__ of Grafana, go to the "__datasources__" tab and click on "__Add datasource__".

In the URL, provide the "__URL of the Console Metrics API__" without the version and ending with "__/prometheus__"
(example: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

In the __Authentication__, enable the option __Basic Auth__.

<img src={grafanaDatasourceAuth} />

In the "__Basic Auth Details__" section, configure the __username__ and __password__ using respectively the __id__ and __secret__ of a __Personal Access Token__ with the __metrics_read__ permission.

<img src={grafanaDatasourceBasicAuthDetails} />

In the "__Alerting__" section, configure the __HTTP Method__ property to __GET__.

<img src={grafanaDatasourceAlerting} />



#### Result

To confirm that the configuration is correct and functional, click the "__Save & test__" button.

You should see a banner informing you that the configuration was successful.

<img src={grafanaDatasourceWorking} />

You will find a set of example configurations for Grafana here: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />
