---
title: Metrics
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

The majority of __Cloud Temple__ customers have visualization, monitoring, and metrics tools to track their operations.

The philosophy of the Shiva console is to provide access to data in order to integrate with these tools via a built-in Prometheus proxy.

This proxy allows you to query and manipulate data from a visualization tool like [Grafana](https://grafana.com).

However, it is possible to view certain performance data for your Cloud resources in the Shiva console's web interface.

*__Note:__ The __Cloud Temple__ philosophy is not to integrate multiple graphs into the web interface, but to offer the maximum amount of information accessible via the API.*

## Dashboard integrated into the web interface

*__Note:__ To access these dashboards, you must have the __'metric_read'__ permission.*

### Carbon emission tracking for computing

The Shiva console dashboard includes, by default, a graph for tracking the electricity consumption of your computing resources and the associated estimated carbon emissions.

It is directly accessible from the Cloud Temple console's web interface homepage by clicking on __'Metric'__:

<img src={metricsHypervisorsCo2} />

### Global view of virtual machine health

The summary of the virtual machines' status is accessible in the __'IaaS'__ menu on the left of your screen, under the __'Health'__ submenu, then __'Virtual Machines'__.

This summary provides, for the time range selected in __'Filters'__:

- the number of CPUs and the __average CPU usage__,
- the amount of memory in GB and the __average memory usage__,
- the average __storage access latency__ for read and write operations,
- the average __'CPU Ready'__ of the virtual machine (which corresponds to the average time a virtual machine waits for a physical core to become available).

<img src={shivaMetric_000} />

For each VM, you can access its performance history by clicking on the green __'History'__ icon for the virtual machine in the action column:

<img src={shivaMetric_003} />

You will then be taken to the page for graphical visualization of historical data, including an __environmental performance__ view:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

## Usage with __Grafana__

### Configure the Console as a datasource in Grafana

The objective is to enhance the observability of your Cloud infrastructure via Cloud Temple metrics.

#### Prerequisites

- A Grafana instance with access to the Console APIs.
- Administrative access on the Grafana instance to configure *datasources*.
- A personal access token with at least the `metrics_read` permission.

#### Configuration

In the Grafana __configuration__, go to the "__datasources__" tab and click on "__Add datasource__".

In the URL, provide the __Console Metrics API URL__ without the version and ending with "__/prometheus__"
(example: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

In the __authentication__ section, enable the __Basic Auth__ option.

<img src={grafanaDatasourceAuth} />

In the "__Basic Auth Details__" section, configure the __username__ and __password__ using
the respective __id__ and __secret__ of a __Personal Access Token__ with the __metrics_read__ permission.

<img src={grafanaDatasourceBasicAuthDetails} />

In the "__Alerting__" section, configure the __HTTP Method__ property to __GET__.

<img src={grafanaDatasourceAlerting} />

#### Result

To confirm that the configuration is correct and functional, press the "__Save & test__" button.

You should see a banner informing you that the configuration was successful.

<img src={grafanaDatasourceWorking} />

You will find a whole set of configuration examples for Grafana here: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />

Integration of the Shiva console with Grafana

The Cloud Temple Shiva console can be used as a datasource for your [Grafana](https://grafana.com/) infrastructure.

The console is Prometheus compatible, which allows it to be added in Grafana as a Prometheus type datasource. You will be able to:

- Visualize all of your metrics.
- Create your own custom dashboards tailored to your needs.

Cloud Temple also provides a [collection of dashboards](https://github.com/Cloud-Temple/console-grafana-iaas) ready to use, which you can use as a base or adapt to your use cases.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />
