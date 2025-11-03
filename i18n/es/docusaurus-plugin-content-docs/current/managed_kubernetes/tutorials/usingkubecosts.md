---
title: Tracking costs with Kubecost
---
import kubecostsallocations from './images/kubecostsallocations.png'

## Objetivos

Este tutorial presenta **Kubecost**, la herramienta de supervisión y optimización de costos integrada en su clúster **Kubernetes gestionado**. Al final de esta guía, será capaz de:

- **Acceder** a la interfaz de Kubecost.
- **Analizar** la distribución de costos de sus aplicaciones.
- **Identificar** oportunidades de optimización para reducir su factura.

## ¿Qué es Kubecost?

Kubecost es una solución de código abierto que proporciona visibilidad en tiempo real sobre los costos de sus entornos Kubernetes. Le ayuda a comprender con precisión qué está consumiendo recursos en su clúster y cómo se traduce eso en costos.

En la oferta de Kubernetes gestionado, Kubecost está preinstalado y configurado para brindarle una visión clara de sus gastos. Está directamente configurado con los costos reales de la infraestructura de Cloud Temple, lo que significa que las estimaciones mostradas son fieles a su factura.

## Acceder a la interfaz de Kubecost

La interfaz de Kubecost se expone en una URL segura, específica para su clúster. Para acceder a ella, utilice la siguiente URL reemplazando `identificador` por el identificador de su clúster (por ejemplo, `ctodev`):

`https://kubecost.external-secured.identificador.mk.ms-cloud-temple.com`

*Nota: El acceso a esta URL está restringido a las direcciones IP que ha declarado al soporte de Cloud Temple. Si no puede acceder, póngase en contacto con el soporte para verificar las reglas del firewall.*

## Explorar la distribución de costos (Asignaciones)

La página principal de Kubecost es el panel **Asignaciones**. Aquí puede visualizar el consumo de sus recursos.

Por defecto, los costos se agregan por **Namespace**. Puede utilizar el menú desplegable "Agrupar por" para cambiar la vista y analizar los costos por:
- `Deployment`, `StatefulSet`, etc.
- `Controller`
- `Label` (muy útil si utiliza etiquetas para identificar sus equipos o proyectos. Por ejemplo, puede utilizar la etiqueta del tenant de cápsula.)

También puede ajustar el período de análisis (por defecto, "Últimos 7 días") para visualizar los costos en otro período.

<img src={kubecostsallocations} />

## Analyze the cost of infrastructure (Assets)

The **Assets** section provides a detailed view of the costs associated with the underlying infrastructure of your cluster:
- Nodes (VMs)
- Persistent disks
- Network costs

This allows you to understand how costs are distributed across computing, storage, and networking resources.

## Identificar oportunidades de optimización (Savings)

Kubecost no se limita a mostrar los costos; también le ayuda a reducirlos. La sección **Savings** analiza continuamente su clúster y le proporciona recomendaciones concretas para optimizar sus gastos.

Las recomendaciones más comunes incluyen:
- **Ajuste del tamaño de los contenedores (Right-sizing container requests):** Ajustar las solicitudes de CPU y memoria de sus contenedores para que coincidan con su consumo real.
- **Gestión de cargas de trabajo abandonadas (Manage abandoned workloads):** Identificar despliegues que ya no se utilizan pero que siguen consumiendo recursos.
- **Gestión de volúmenes no asignados (Manage unclaimed volumes):** Encontrar volúmenes persistentes que ya no están conectados a ningún pod.

Cada recomendación va acompañada de una estimación de los ahorros mensuales que podría lograr.

## Conclusión

Kubecost es una herramienta potente para controlar los costos de su clúster Kubernetes. Al explorar regularmente los paneles de control "Asignaciones", "Activos" y "Ahorros", no solo podrá entender dónde va su dinero, sino que también podrá tomar decisiones informadas para optimizar la eficiencia de sus aplicaciones y reducir su factura.