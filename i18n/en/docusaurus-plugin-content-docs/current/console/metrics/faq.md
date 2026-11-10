---
title: Frequently asked questions
---

## Is the service billed as an extra?

No. The dashboards built into the Console, the Prometheus API endpoint (PromQL), the open-source Grafana dashboard templates, visibility on scheduled operations and incidents, and incident email notifications are included at no extra cost in every Cloud Temple subscription.

## Does Cloud Temple provide a managed Grafana instance?

No. Cloud Temple provides the data source (the Console's Prometheus proxy) and [open-source dashboard templates](https://github.com/Cloud-Temple/console-grafana-iaas), but not Grafana as a service. You connect the PromQL-compatible tool of your choice, for example your own Grafana instance, in the cloud or on premises.

## How is access to my metrics secured?

With a personal access token (PAT). Your tool authenticates with Basic Auth using the ID and secret of a token created from your profile in the Console. Following the principle of least privilege, this token should only have the `metrics_read` permission.

## Can I create alerts on Cloud Temple metrics?

Yes, in your own tool: for example Grafana alert rules on memory saturation, CPU or IOPS, based on the Prometheus data source. For alerting, set the data source's HTTP method to GET (see the [getting started guide](quickstart.md)).

## Can I track the carbon footprint of my infrastructure?

Yes. The Prometheus feed and the Console dashboards include CO₂ emissions and estimated energy consumption (kWh), per hypervisor and per datacenter.

## How long is the history of incidents and interventions kept?

60 days. The Console shows completed interventions and resolved incidents (with their reports) for the last 60 days, as well as interventions scheduled for the next 60 days.
