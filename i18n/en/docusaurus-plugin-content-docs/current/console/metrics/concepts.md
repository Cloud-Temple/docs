---
title: Concepts
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

## Introduction

The majority of __Cloud Temple__ clients have visualization, monitoring, and metrics tools to track their operations.

The Console's philosophy is to enable data access to integrate into this tooling via an integrated Prometheus proxy.

This proxy allows you to query and manipulate data from a visualization tool such as [Grafana](https://grafana.com).

However, it is possible to view certain performance data for your Cloud resources in the Console's web interface.

*__Note:__ The __Cloud Temple__ philosophy is not to integrate only charts into the web interface, but also to provide the maximum amount of information accessible via the API*

The service also includes visibility of scheduled operations and incidents (interventions, maintenance, incident reports) from the Console, with email notifications.

## Benefits

| Benefit                      | Description                                                                                       |
|------------------------------|---------------------------------------------------------------------------------------------------|
| Open standard                | Metrics are exposed in Prometheus format and queried in PromQL, with no proprietary language.    |
| API-first                    | Every metric visible in the web interface is also accessible via the API.                        |
| Immediate visibility         | Dashboards are integrated into the Console for IaaS VMware and OpenIaaS.                         |
| Grafana-ready                | The Console can be added as a Prometheus datasource in Grafana, with open source dashboards.     |
| Environmental metrics        | CO₂ emissions and energy consumption available natively.                                         |

## Features

| Feature                         | Description                                                                          |
|---------------------------------|--------------------------------------------------------------------------------------|
| Prometheus proxy                | PromQL-compatible API, accessible from Grafana or any compatible tool.               |
| Integrated dashboards           | IaaS VMware and OpenIaaS metrics in the Console web interface.                       |
| Environmental metrics           | CO₂ and energy consumption (kWh) per resource.                                       |
| Operations and incidents        | Scheduled interventions and incidents visible in the Console, email notifications.   |

### Integrated dashboards in the web interface

*__Note:__ To access these dashboards, you must have the __'metric_read'__ permission.*

#### Global Overview

The Console home page displays the main dashboard, presenting all metrics that provide a status overview of each product you have subscribed to within your environment. In case of issue(s) with your VMware and/or OpenIaaS products, alerts will be visible, with colors indicating their severity.

These alerts are clickable and redirect to the relevant product page.

<img src={shivaHome} />

#### VMware Metrics - Global View

In the __'VMware'__ menu, a specific dashboard is available in the __'Metrics'__ submenu. It includes 4 tabs:

##### Overview

On this tab, you will find some of the metrics already present in the global dashboard discussed at the beginning of this chapter.

<img src={shivaMetric_000} />

##### Calculation

On this tab, you will find the number of __AZ__, __Clusters__, __ESXs__, __carbon emissions__, __power consumption estimate__, as well as 7 charts
providing a highly visual overview of your VMware environment. The power consumption estimate in kW/h is calculated based on the average of readings covering the selected period, expressed per hour.

You can choose the date range to cover, as well as the data grouping type (by default, data is grouped for the entire scope). For example, by selecting __Host__:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

On hover over each chart, the details of resource names and their values are displayed. On clicking these same charts, a small tooltip opens, allowing you to more easily view the details corresponding to the clicked date:
<img src={shivaMetric_014} />

##### Storage

Similarly to the "Compute" tab, various information is displayed: the number of __AZ__, __datastore clusters__, __datastores__, as well as 2 charts. The same filtering principle applies, but here, we can group by __SDRS Cluster__ and __Datastore__.

<img src={shivaMetric_004} />

##### Virtual Machines

Here you can find a global view of virtual machine health.

This summary provides, for the selected time range:

- the number of CPUs and the __average CPU utilization__,
- the amount of memory in GB and the __average memory usage__,
- the average __storage access latency__ for read and write operations,
- the average __'CPU Ready'__ for the virtual machine (ce qui correspond au temps moyen d'attente de disponibilité d'un core physique par la machine virtuelle).

<img src={shivaMetric_006} />

For each VM, you can access its performance history by clicking the green __'History'__ icon of the virtual machine in the action column. :

<img src={shivaMetric_003} />

You are then taken to the graphical visualization page for historical data, including an __environmental performance__ view :

<img src={shivaMetric_007} />

#### VMware Metrics - View by Resource

You can also view a portion of the metrics related to VMware, but this time more specifically for a given __Host__ or __Datastore__.

##### Host

In the Host view, you can view, for a given period, the __energy consumption__ as well as the estimated __carbon emissions__.

<img src={shivaMetric_008} />

##### Datastore

In the Datastore view, you can view __IOPS__ for a given period.

<img src={shivaMetric_009} />

#### OpenIaaS Metrics

In the __'OpenIaaS'__ menu, a specific dashboard is available in the __'Metrics'__ submenu. It includes 3 tabs:

##### Overview

On this tab, you will find a portion of the metrics already present in the global dashboard discussed at the beginning of this chapter.

<img src={shivaMetric_010} />

##### Compute

On this tab, you will find the number of __AZ__, __Clusters__, and __Hosts__, along with 5 charts providing a highly visual overview of your OpenIaaS environment.

You can choose the date range to cover, as well as the data grouping type (by default, data is grouped across your entire scope). For example, selecting __Host__:

<img src={shivaMetric_011} />

<img src={shivaMetric_012} />

##### Storage

Similarly to the "Compute" tab, you will find various information: the number of __AZs__, __Clusters__, __Datastores__ as well as a chart. The same filtering principle applies, but here, we can group by __Block Storage__.

<img src={shivaMetric_013} />

### Usage with __Grafana__

Console Integration with Grafana

The Cloud Temple Console can be used as a datasource for your [Grafana](https://grafana.com/) infrastructure.

The console is Prometheus-compatible, enabling you to add it to Grafana as a Prometheus-type datasource. This allows you to:

- Visualize all your metrics.
- Create your own custom dashboards tailored to your needs.

Cloud Temple also provides a [collection of dashboards](https://github.com/Cloud-Temple/console-grafana-iaas) ready-to-use, which you can use as a base or adapt to your specific use cases.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />

To connect your Grafana instance to the Console, follow the [getting started guide](quickstart.md).

## Architecture

A Prometheus proxy integrated into the Console exposes the metrics of your resources. Your visualization tool (Grafana, for example) queries this proxy as a Prometheus datasource, using your Console credentials.

## Regions and availability zones

The service is integrated into the Cloud Temple Console: metrics cover the resources of your tenants, regardless of their availability zone.

## Technical specifications

| Parameter                          | Value                                     |
|------------------------------------|-------------------------------------------|
| Metrics format                     | Prometheus, PromQL queries                |
| Dashboard scope                    | IaaS VMware, OpenIaaS                     |
| Operations and incidents history   | 60 days                                   |

## Security and compliance

Observability is certified HDS and ISO 27001. It is included in the SecNumCloud-qualified and C5-compliant services.

## Reversibility

| Operation                         | Method                                             | Cost     |
|-----------------------------------|----------------------------------------------------|----------|
| Metrics export                    | Prometheus collection into your tools, self-service | Included |
| Activity log export               | Console Activity API                               | Included |

## Pricing

Observability is included at no extra cost in any Cloud Temple subscription. See the product page on the Cloud Temple website:
[Observability](https://www.cloud-temple.com/produits/observability/).
