---
title: Kosten mit Kubecost verfolgen
---
import kubecostsallocations from './images/kubecostsallocations.png'

## Ziele

Dieser Leitfaden führt Sie in **Kubecost** ein, das Monitoring- und Kostenoptimierungstool für Ihren **Managed Kubernetes**-Cluster. Am Ende dieses Leitfadens können Sie:

- **Auf die Kubecost-Oberfläche zugreifen**.
- **Die Kostenverteilung Ihrer Anwendungen analysieren**.
- **Optimierungsmöglichkeiten identifizieren, um Ihre Rechnung zu senken**.

## What is Kubecost?

Kubecost is an open-source solution that provides real-time visibility into the costs of your Kubernetes environments. It helps you understand precisely what is consuming resources within your cluster and how this translates into cost.

In the Managed Kubernetes offering, Kubecost is pre-installed and pre-configured to give you a clear view of your expenses. It is directly integrated with the actual Cloud infrastructure costs from Temple Cloud, meaning the estimates displayed accurately reflect your billing.

## Access the Kubecost Interface

The Kubecost interface is exposed on a secure URL specific to your cluster. To access it, use the following URL, replacing `identifiant` with your cluster's identifier (for example, `ctodev`):

`https://kubecost.external-secured.identifiant.mk.ms-cloud-temple.com`

*Note: Access to this URL is restricted to the IP addresses you have declared with Cloud Temple support. If you are unable to access it, please contact support to verify your firewall rules.*

## Explore Cost Distribution (Allocations)

The main page in Kubecost is the **Allocations** dashboard. This is where you can visualize your resource consumption.

By default, costs are aggregated by **Namespace**. Use the "Aggregate by" dropdown menu to switch views and analyze costs by:
- `Deployment`, `StatefulSet`, etc.
- `Controller`
- `Label` (very useful if you use labels to identify your teams or projects. For example, you could use the capsule tenant label.)

You can also adjust the analysis period (default: "Last 7 days") to view costs over a different timeframe.

<img src={kubecostsallocations} />

## Analyze the cost of infrastructure (Assets)

The **Assets** section provides a detailed view of the costs associated with the underlying infrastructure of your cluster:
- Nodes (VMs)
- Persistent disks
- Network costs

This allows you to understand the cost distribution across compute, storage, and network resources.

## Identify optimization opportunities (Savings)

Kubecost does more than just show costs — it also helps you reduce them. The **Savings** section continuously analyzes your cluster and provides concrete recommendations to optimize your spending.

Common recommendations include:
- **Right-sizing container requests:** Adjust CPU and memory requests for your containers to match their actual usage.
- **Manage abandoned workloads:** Identify deployments that are no longer in use but still consume resources.
- **Manage unclaimed volumes:** Find persistent disks that are no longer attached to any pods.

Each recommendation comes with an estimate of the monthly savings you could achieve.

## Schlussfolgerung

Kubecost ist ein leistungsstarkes Werkzeug, um die Kosten Ihres Kubernetes-Clusters unter Kontrolle zu halten. Durch regelmäßige Untersuchung der Dashboards „Allocations“, „Assets“ und „Savings“ können Sie nicht nur verstehen, wohin Ihr Geld fließt, sondern auch fundierte Maßnahmen ergreifen, um die Effizienz Ihrer Anwendungen zu optimieren und Ihre Rechnung zu senken.