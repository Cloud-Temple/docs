---
title: Gestor de costes
---

import billingDashboardPreview from '@site/docs/console/billing/images/billing_dashboard_preview.png'
import billingDashboardTotal from '@site/docs/console/billing/images/billing_dashboard_consumption_total.png'
import billingDashboardPerProduct from '@site/docs/console/billing/images/billing_dashboard_consumption_per_product.png'
import billingDashboardPerService from '@site/docs/console/billing/images/billing_dashboard_consumption_per_service.png'
import billingConsumptionDetails from '@site/docs/console/billing/images/billing_consumption_details.png'
import billingPricesList from '@site/docs/console/billing/images/billing_prices_list.png'

El **Gestor de costes** es accesible desde el menú principal de la Consola Cloud Temple. Le ofrece una visión completa y transparente del consumo de recursos cloud, permitiéndole gestionar sus gastos de forma autónoma.

:::info
El acceso al Gestor de costes requiere los derechos apropiados en su tenant. Póngase en contacto con su responsable comercial para obtener más información y conocer las condiciones de acceso al servicio.
:::

## Panel de control

El panel de control del Gestor de costes es la página de inicio del módulo. Ofrece una vista resumida de todo su consumo para el período seleccionado.

<img src={billingDashboardPreview} alt="Panel de control del Gestor de costes" />

Desde este panel puede:

- **Seleccionar un período** de análisis (mes actual, mes anterior o un rango de fechas personalizado),
- **Navegar entre las distintas pestañas** para refinar el análisis de su consumo,
- **Exportar sus datos de consumo** para integrarlos en sus herramientas de informes internas.

## Consumo global

La pestaña **Consumo global** muestra el importe total consumido durante el período seleccionado. Es el punto de partida para comprender la evolución general de sus gastos cloud.

<img src={billingDashboardTotal} alt="Consumo global del período" />

Este gráfico le permite visualizar:

- El **importe total** consumido durante el período,
- La **evolución temporal** de su consumo (día a día o mes a mes según la granularidad elegida),
- Posibles **picos de consumo** para identificar rápidamente anomalías o incrementos de carga.

:::info
**Lectura del gráfico para el mes en curso**

Para el mes en curso, el gráfico distingue dos zonas visuales:
- La parte **azul (sólida)** representa el **consumo real hasta la fecha**, es decir, los recursos efectivamente consumidos desde el inicio del mes,
- La parte **naranja (rayada)** representa la **previsión** estimada hasta el final del mes, calculada en base a su ritmo de consumo actual.

Esta proyección le permite anticipar su presupuesto de fin de mes en tiempo real.
:::

## Consumo por producto

La pestaña **Consumo por producto** le permite identificar el desglose de sus gastos según los productos Cloud Temple a los que está suscrito.

<img src={billingDashboardPerProduct} alt="Desglose del consumo por producto" />

Cada producto (IaaS, Almacenamiento, Red, etc.) se presenta con:

- Su **participación relativa** en el consumo total,
- Su **importe absoluto** para el período,
- La **tendencia** con respecto al período anterior.

Esta vista es especialmente útil para identificar qué productos representan las partidas de gasto más importantes y orientar sus decisiones de optimización.

## Consumo por servicio

La pestaña **Consumo por servicio** refina el análisis desglosando el consumo a nivel de los servicios individuales dentro de cada producto.

<img src={billingDashboardPerService} alt="Desglose del consumo por servicio" />

Esta vista detallada le permite:

- Identificar con precisión **qué servicios** contribuyen más a su facturación,
- Comparar el consumo de servicios similares,
- Detectar servicios infrautilizados o sobredimensionados para **optimizar su huella cloud**.

## Detalles de consumo

La sección **Detalles de consumo** lista todas las líneas de facturación individuales del período seleccionado. Es la vista más detallada del Gestor de costes.

<img src={billingConsumptionDetails} alt="Detalles de las líneas de consumo" />

Para cada línea de consumo encontrará:

- El **nombre del recurso** consumido,
- La **cantidad** consumida y la **unidad de medida** asociada (horas, GB, solicitudes, etc.),
- El **precio unitario** aplicado,
- El **importe total** de esta línea durante el período.

Esta vista es indispensable para realizar una conciliación contable precisa o para analizar en detalle el uso de recursos específicos.

## Catálogo de precios

El **Catálogo de precios** recoge los precios unitarios de todos los recursos y servicios disponibles en su tenant Cloud Temple.

<img src={billingPricesList} alt="Catálogo de precios unitarios" />

Este catálogo le permite:

- **Anticipar el coste** de un nuevo recurso antes de pedirlo,
- Realizar **simulaciones presupuestarias** para sus proyectos cloud,
- Comparar precios entre diferentes niveles o configuraciones de recursos.

:::tip
Los precios mostrados en el catálogo son las tarifas contractuales aplicables a su tenant. Pueden diferir de las tarifas públicas en función de su contrato Cloud Temple.
:::
