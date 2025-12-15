---
title: Track costs with Kubecost
---
:::info[FinOps tool evolution]
The **KubeCost** product, while still functional on your cluster, is gradually being replaced by **OpenCost**, its open-source successor.

**OpenCost** is now the recommended and actively maintained solution by the Cloud Native Computing Foundation (CNCF) community.

We encourage you to start using OpenCost to take advantage of the latest features and improved integration.
:::

import kubecostsallocations from './images/kubecostsallocations.png'

## Objetivos

Este tutorial presenta **Kubecost**, la herramienta de supervisión y optimización de costos integrada en su clúster **Managed Kubernetes**. Al final de esta guía, será capaz de:

- **Acceder** a la interfaz de Kubecost.
- **Analizar** la distribución de costos de sus aplicaciones.
- **Identificar** oportunidades de optimización para reducir su factura.

## ¿Qué es Kubecost?

Kubecost es una solución de código abierto que proporciona visibilidad en tiempo real sobre los costos de sus entornos Kubernetes. Le ayuda a comprender con precisión qué está consumiendo recursos en su clúster y cómo se traduce eso en costos.

En la oferta de Kubernetes gestionado, Kubecost está preinstalado y configurado para ofrecerle una visión clara de sus gastos. Está directamente configurado con los costos reales de la infraestructura de Cloud Temple, lo que significa que las estimaciones mostradas son fieles a su factura.

## Access the Kubecost interface

The Kubecost interface is exposed on a secure URL specific to your cluster. To access it, use the following URL, replacing `identifiant` with your cluster's identifier (for example, `ctodev`):

`https://kubecost.external-secured.identifiant.mk.ms-cloud-temple.com`

:::info
Access to this URL is restricted to the IP addresses you have declared to Cloud Temple support. If you are unable to access it, please contact support to verify your firewall rules.
:::

## Explore the cost distribution (Allocations)

The main page in Kubecost is the **Allocations** dashboard. This is where you can visualize your resource consumption.

By default, costs are aggregated by **Namespace**. Use the "Aggregate by" dropdown menu to change the view and analyze costs by:
- `Deployment`, `StatefulSet`, etc.
- `Controller`
- `Label` (very useful if you use labels to identify your teams or projects. For example, you could use the capsule tenant label.)

You can also adjust the analysis period (default: "Last 7 days") to visualize costs over a different timeframe.

<img src={kubecostsallocations} alt="Kubecost UI"/>

## Analyze infrastructure costs (Assets)

The **Assets** section provides a detailed view of the costs associated with the underlying infrastructure of your cluster:
- Nodes (VMs)
- Persistent disks
- Network costs

This allows you to understand the cost distribution across computing, storage, and networking resources.

## Identify optimization opportunities (Savings)

Kubecost does more than just show costs — it also helps you reduce them. The **Savings** section continuously analyzes your cluster and provides concrete recommendations to optimize your spending.

Common recommendations include:
- **Right-sizing container requests:** Adjust CPU and memory requests for your containers to match their actual usage.
- **Manage abandoned workloads:** Identify deployments that are no longer in use but still consume resources.
- **Manage unclaimed volumes:** Find persistent disks that are no longer attached to any pod.

Each recommendation comes with an estimate of the monthly savings you could achieve.

## Conclusión

Kubecost es una herramienta potente para controlar los costos de su clúster Kubernetes. Al explorar regularmente los paneles de control "Asignaciones", "Activos" y "Ahorros", no solo podrá comprender dónde va su dinero, sino también tomar decisiones informadas para optimizar la eficiencia de sus aplicaciones y reducir su factura.