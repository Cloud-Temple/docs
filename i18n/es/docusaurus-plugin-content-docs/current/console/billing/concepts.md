---
title: Gestor de costos
---

import billingDashboardPreview from '@site/docs/console/billing/images/billing_dashboard_preview.png'
import billingDashboardConsumptionTotal from '@site/docs/console/billing/images/billing_dashboard_consumption_total.png'
import billingDashboardConsumptionPerProduct from '@site/docs/console/billing/images/billing_dashboard_consumption_per_product.png'
import billingDashboardConsumptionPerService from '@site/docs/console/billing/images/billing_dashboard_consumption_per_service.png'
import billingConsumptionDetails from '@site/docs/console/billing/images/billing_consumption_details.png'
import billingPricesList from '@site/docs/console/billing/images/billing_prices_list.png'

## Presentación

El **Gestor de costos** es el módulo de la Consola Cloud Temple dedicado a la **visibilidad de su consumo**. Le permite seguir en tiempo real el uso de sus recursos cloud dentro de un tenant y tener una visión clara de sus gastos.

Este módulo responde a una necesidad fundamental: **comprender qué consume, cuándo lo consume y a qué costo**, sin tener que navegar por tablas complejas o facturas detalladas.

:::info
El Gestor de costos presenta el **consumo efectivo** de sus recursos en el tenant seleccionado. Los datos se actualizan regularmente para reflejar su uso actual.
:::

## Panel principal

La página de inicio del Gestor de costos presenta una síntesis visual de su consumo. Al abrirlo, dispone de una visión general que permite identificar rápidamente las tendencias de consumo y los partidas más importantes.

<img src={billingDashboardPreview} />

El panel está organizado en torno a varios ejes complementarios, accesibles mediante las pestañas disponibles en la parte superior de la página.

## Consumo total

La pestaña **Consumo total** ofrece una vista agregada de todo su consumo durante el período seleccionado. Este gráfico le permite observar la evolución de sus gastos en el tiempo e identificar posibles picos o tendencias.

<img src={billingDashboardConsumptionTotal} />

Puede ajustar el **período de visualización** para afinar su análisis: día, semana, mes o rango personalizado. La curva de consumo total es directamente legible y no requiere conocimientos técnicos específicos.

## Consumo por producto

La pestaña **Consumo por producto** descompone su consumo según las grandes familias de servicios Cloud Temple a las que se ha suscrito: compute, almacenamiento, red, etc.

<img src={billingDashboardConsumptionPerProduct} />

Esta vista es particularmente útil para **identificar las partidas de gasto más significativas** y orientar las decisiones de optimización. Cada producto se representa con su parte relativa en el consumo global, lo que facilita la lectura y la comparación.

## Consumo por servicio

La pestaña **Consumo por servicio** ofrece un nivel de detalle adicional al ventilar el consumo por **servicio específico** dentro de cada producto.

<img src={billingDashboardConsumptionPerService} />

Este nivel de granularidad le permite ir más allá en el análisis: puede, por ejemplo, distinguir el consumo de sus máquinas virtuales, su almacenamiento en bloque, sus instantáneas o su ancho de banda de red, e identificar así con precisión los recursos que generan más costes.

## Detalle del consumo

La vista **Detalle del consumo** presenta una tabla exhaustiva que lista todos los recursos consumidos durante el período. Cada línea corresponde a un recurso identificable (máquina virtual, volumen de almacenamiento, dirección IP pública, etc.) con su nivel de consumo asociado.

<img src={billingConsumptionDetails} />

Este detalle es valioso para los equipos que desean realizar una **distribución analítica** de sus costes o para identificar recursos potencialmente inutilizados que podrían desactivarse para optimizar los gastos.

## Tabla de tarifas

La pestaña **Tabla de tarifas** (o **Lista de precios**) referencia todos los tarifas unitarios aplicables a los recursos disponibles en su tenant. Se trata del catálogo de precios vigente que le permite anticipar el coste de nuevos recursos antes de su despliegue.

<img src={billingPricesList} />

Cada entrada de la tabla indica:

- El **tipo de recurso** afectado
- La **unidad de facturación** (por hora, por GB, por unidad, etc.)
- El **precio unitario** aplicable

:::tip
Para los precios públicos vigentes, consulte el [catálogo tarifario oficial de Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/). La tabla mostrada en la Consola presenta las tarifas aplicables a su tenant; combine esta información con los datos de consumo para identificar los palancas de optimización.
:::

## Buenas prácticas

Para sacar el máximo partido al Gestor de costos, aquí hay algunas recomendaciones:

- **Consulte regularmente** su consumo para detectar rápidamente cualquier desviación presupuestaria.
- **Compare los períodos**: la herramienta le permite analizar la evolución mes a mes para identificar tendencias.
- **Utilice la vista por servicio** para identificar recursos subutilizados u olvidados (instantáneas antiguas, volúmenes desconectados, etc.).
- **Cruce con la tabla de tarifas** para evaluar el impacto financiero de cualquier cambio de infraestructura antes de realizarlo.
