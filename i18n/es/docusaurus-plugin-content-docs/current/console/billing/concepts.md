---
title: Gestor de costos
---

import billingDashboardPreview from '@site/docs/console/billing/images/billing_dashboard_preview.png'
import billingDashboardConsumptionTotal from '@site/docs/console/billing/images/billing_dashboard_consumption_total.png'
import billingDashboardConsumptionPerProduct from '@site/docs/console/billing/images/billing_dashboard_consumption_per_product.png'
import billingDashboardConsumptionPerService from '@site/docs/console/billing/images/billing_dashboard_consumption_per_service.png'
import billingConsumptionDetails from '@site/docs/console/billing/images/billing_consumption_details.png'

## Presentación

El **Gestor de costos** es el módulo de la Consola Cloud Temple dedicado a la **visibilidad de su consumo**. Le permite seguir en tiempo real el uso de sus recursos cloud dentro de un tenant y tener una visión clara de sus gastos.

Este módulo responde a una necesidad fundamental: **comprender qué consume, cuándo lo consume y a qué costo**, sin tener que navegar por tablas complejas o facturas detalladas.

:::info
El Gestor de costos presenta el **consumo efectivo** de sus recursos en el tenant seleccionado. Los datos se actualizan periódicamente para reflejar su uso actual.
:::

## Panel de control principal

La página de inicio del Gestor de costos presenta una síntesis visual de su consumo. Desde el momento en que se abre, dispone de una vista general que le permite identificar rápidamente las tendencias de consumo y los conceptos más importantes.

<img src={billingDashboardPreview} />

El panel de control está organizado en torno a varios ejes complementarios, accesibles mediante las pestañas disponibles en la parte superior de la página.

## Consumo total

La pestaña **Consumo total** ofrece una vista agregada de la totalidad de su consumo en el período seleccionado. Este gráfico le permite observar la evolución de sus gastos a lo largo del tiempo e identificar posibles picos o tendencias.

<img src={billingDashboardConsumptionTotal} />

Puede ajustar el **período de visualización** para afinar su análisis: día, semana, mes o rango personalizado. La curva de consumo total es directamente legible y no requiere una experiencia técnica particular.

## Consumo por producto

La vista **Producto** descompone su consumo según las grandes familias de servicios Cloud Temple a las que se ha suscrito: compute, almacenamiento, red, etc.

<img src={billingDashboardConsumptionPerService} />

Esta vista es particularmente útil para **identificar los conceptos de gasto más significativos** y orientar las decisiones de optimización. Cada producto se representa con su parte relativa en el consumo global, lo que facilita la lectura y la comparación.

## Consumo por SKU

La vista **SKU** ofrece un nivel de detalle adicional al desglosar el consumo por **referencia tarifada (SKU)** dentro de cada producto.

<img src={billingDashboardConsumptionPerProduct} />

Este nivel de granularidad le permite ir más allá en el análisis: puede, por ejemplo, distinguir el consumo de sus máquinas virtuales, de su almacenamiento en bloque, de sus instantáneas o de su ancho de banda de red, e identificar así con precisión los recursos que generan más costos.

## Detalle del consumo

La vista **Detalle del consumo** presenta una tabla exhaustiva que lista la totalidad de los recursos consumidos en el período. Cada fila corresponde a un recurso identificable (máquina virtual, volumen de almacenamiento, dirección IP pública, etc.) con su nivel de consumo asociado.

<img src={billingConsumptionDetails} />

Este detalle es valioso para los equipos que desean realizar una **distribución analítica** de sus costos o para identificar recursos potencialmente no utilizados que podrían desactivarse para optimizar los gastos.

## Buenas prácticas

Para aprovechar al máximo el Gestor de costos, aquí hay algunas recomendaciones:

- **Consulte periódicamente** su consumo para detectar rápidamente cualquier desviación presupuestaria.
- **Compare los períodos**: la herramienta le permite analizar la evolución mes a mes para identificar las tendencias.
- **Utilice la vista por SKU** para identificar recursos subutilizados u olvidados (instantáneas antiguas, volúmenes desconectados, etc.).
