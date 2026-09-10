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
El Gestor de costos muestra el **consumo real** de sus recursos en el tenant seleccionado. Los datos se actualizan periódicamente para reflejar su uso actual.
:::

## Panel de control principal

La página de inicio del Gestor de Costos presenta un resumen visual de su consumo. Al abrirlo, dispone de una vista general que le permite identificar rápidamente las tendencias de consumo y las partidas más importantes.

<img src={billingDashboardPreview} />

El panel de control está organizado en torno a varios ejes complementarios, accesibles a través de las pestañas disponibles en la parte superior de la página.

## Consumo total

La pestaña **Consumo total** ofrece una vista agregada de todo su consumo durante el período seleccionado. Este gráfico le permite observar la evolución de sus gastos a lo largo del tiempo e identificar posibles picos o tendencias.

<img src={billingDashboardConsumptionTotal} />

Puede ajustar el **período de visualización** para refinar su análisis: día, semana, mes o rango personalizado. La curva de consumo total es directamente legible y no requiere conocimientos técnicos específicos.

## Consumo por producto

La pestaña **Consumo por producto** desglosa su consumo según las principales familias de servicios de Cloud Temple a las que se ha suscrito: compute, almacenamiento, red, etc.

<img src={billingDashboardConsumptionPerProduct} />

Esta vista es particularmente útil para **identificar las partidas de gasto más significativas** y orientar las decisiones de optimización. Cada producto se representa con su participación relativa en el consumo global, lo que facilita su lectura y comparación.

## Consumo por servicio

La pestaña **Consumo por servicio** ofrece un nivel de detalle adicional al desglosar el consumo por **servicio específico** dentro de cada producto.

<img src={billingDashboardConsumptionPerService} />

Este nivel de granularidad le permite profundizar en el análisis: por ejemplo, puede distinguir el consumo de sus máquinas virtuales, su almacenamiento en bloque, sus instantáneas o su ancho de banda de red, e identificar así con precisión los recursos que generan mayores costos.

## Detalle del consumo

La vista **Detalle del consumo** presenta una tabla exhaustiva que enumera todos los recursos consumidos durante el período. Cada fila corresponde a un recurso identificable (máquina virtual, volumen de almacenamiento, dirección IP pública, etc.) con su nivel de consumo asociado.

<img src={billingConsumptionDetails} />

Este detalle es valioso para los equipos que deseen realizar un **desglose analítico** de sus costos o para identificar recursos potencialmente no utilizados que podrían desactivarse con el fin de optimizar los gastos.

## Cuadro de tarifas

La pestaña **Cuadro de tarifas** (o **Lista de precios**) hace referencia a todos los precios unitarios aplicables a los recursos disponibles en su tenant. Se trata del catálogo de precios vigente que le permite anticipar el costo de nuevos recursos antes de su implementación.

<img src={billingPricesList} />

Cada entrada del cuadro indica :

- El **tipo de recurso** afectado
- La **unidad de facturación** (por hora, por GB, por unidad, etc.)
- El **precio unitario** aplicable

:::tip
El cuadro de tarifas es su referencia para **simular el costo** de una infraestructura antes de solicitarla. Combine esta información con los datos de consumo para identificar las palancas de optimización.
:::

## Buenas prácticas

Para sacar el máximo provecho del Gestor de costos, aquí tiene algunas recomendaciones:

- **Consulte regularmente** su consumo para detectar rápidamente cualquier desviación de costos.
- **Compare los períodos** : la herramienta le permite analizar la evolución mes a mes para identificar tendencias.
- **Utilice la vista por servicio** para identificar recursos subutilizados u olvidados (instantáneas antiguas, volúmenes desconectados, etc.).
- **Cruce con la tabla de precios** para evaluar el impacto financiero de cualquier cambio de infraestructura antes de realizarlo.