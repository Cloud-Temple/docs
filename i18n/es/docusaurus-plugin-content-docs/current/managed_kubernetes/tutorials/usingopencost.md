---
title: Seguimiento de costos con OpenCost
---
import opencostui from '@site/docs/managed_kubernetes/tutorials/images/opencost.png'
import opencostgrafana from '@site/docs/managed_kubernetes/tutorials/images/opencostgrafana.png'
import opencostmcp from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp.png'
import opencostmcp2 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp2.png'
import opencostmcp3 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp3.png'

## Objetivos

Este tutorial le presenta **OpenCost**, la herramienta de monitorización y optimización de costos integrada en su clúster **Managed Kubernetes**. Al final de esta guía, usted será capaz de:

- **Acceder** a la interfaz de OpenCost.
- **Comprender** la estructura de la interfaz y las vistas disponibles.
- **Analizar** la distribución de costos de sus aplicaciones e infraestructura.

## ¿Qué es OpenCost?

OpenCost es una solución de código abierto, estándar de la CNCF (Cloud Native Computing Foundation), que proporciona visibilidad en tiempo real sobre los costos de sus entornos Kubernetes. Le ayuda a comprender con precisión qué consume recursos en su clúster y cómo se traduce en términos de costos.

En la oferta Managed Kubernetes, OpenCost está preinstalado y configurado para darle una visión clara de sus gastos. Está directamente parametrizado con los costos reales de la infraestructura de Cloud Temple.

## Acceder a la interfaz de OpenCost

La interfaz de OpenCost está expuesta en una URL segura, específica de su clúster. Para acceder a ella, use la siguiente URL reemplazando `identificador` por el identificador de su clúster (por ejemplo, `ctodev`):

`https://opencost.external-secured.identificador.mk.ms-cloud-temple.com`

:::info
El acceso a esta URL está restringido a las direcciones IP que ha declarado al soporte de Cloud Temple. Si no puede acceder, contacte con el soporte para verificar las reglas del firewall.
:::

<img src={opencostui} alt="OpenCost UI"/>

## Explorar la distribución de costos (Allocations)

La vista principal y más detallada de OpenCost es el panel de control **Allocations**. Aquí es donde puede visualizar el consumo de sus recursos en tiempo real.

Esta vista le permite desglosar los costos por conceptos nativos de Kubernetes. El menú desplegable "Aggregate by" es la principal herramienta para su análisis; le permite agrupar los costos por:

- **Namespace**: Para obtener una vista por entorno o por equipo.
- **Deployment**, **StatefulSet**, etc.: Para analizar el costo de una aplicación específica.
- **Controller**: Para una vista más técnica.

### Agregación por Labels

Para un análisis financiero aún más detallado, OpenCost puede agregar los costos basándose en **labels de Kubernetes**. No hay una opción "Label" directa en el menú, pero OpenCost ingiere sus labels y le permite crear agregaciones personalizadas. Para ello, es esencial una estrategia de etiquetado coherente. Por ejemplo, usando labels como `team: backend` o `product: api-gateway`, podrá analizar los costos que corresponden precisamente a su organización.
Para este tipo de análisis, debe usar la integración de IA de OpenCost.

## Dashboard de Grafana

También hay un dashboard de Grafana disponible para visualizar los datos de OpenCost. Este dashboard ofrece una vista alternativa y complementaria a la interfaz de OpenCost, y conserva el historial completo de las métricas de costos, lo que le permite analizar tendencias a largo plazo.

<img src={opencostgrafana} alt="OpenCost Grafana Dashboard"/>

## Uso Avanzado: Integración con IA (Servidor MCP)

Para usuarios avanzados, OpenCost puede ser consultado directamente desde el asistente conversacional Cline (u otros) gracias al sistema de **servidores MCP (Multi-purpose Co-processor)**. Esto le permite hacer scripts de consultas y obtener datos de costos directamente en sus conversaciones.

### 1. Configuración del MCP de OpenCost en Cline

Para conectar Cline a su instancia de OpenCost, debe añadir la siguiente configuración a su archivo `cline_mcp_settings.json`. Este archivo se encuentra generalmente en el directorio de configuración de Cline.

Recomendamos crear un servidor MCP llamado "opencost-xxxxx" donde xxxxx es el nombre de su clúster de Kubernetes gestionado.
La URL del servidor MCP sigue este formato: `https://opencost-mcp.external-secured.identificador.mk.ms-cloud-temple.com`
Por ejemplo, para el clúster "bestie":

```json
{
  "mcpServers": {
    "opencost-bestie": {
      "disabled": false,
      "timeout": 60,
      "type": "streamableHttp",
      "url": "https://opencost-mcp.external-secured.bestie.mk.ms-cloud-temple.com",
      "headers": {
        "Authorization": "Basic <TOKEN>"
      }
    }
  }
}
```

Para generar el valor de `<TOKEN>` a partir de sus credenciales, use uno de los siguientes comandos:

**Para Linux/macOS:**

```bash
echo -n 'finopsadm:SU_CONTRASEÑA' | base64
```

**Para Windows (PowerShell):**

```powershell
$credentials = [System.Text.Encoding]::UTF8.GetBytes("finopsadm:SU_CONTRASEÑA")
[System.Convert]::ToBase64String($credentials)
```

Una vez guardado este archivo, Cline cargará automáticamente el MCP `opencost-xxxxx` al iniciarse.

### 2. Consultar OpenCost con el MCP

:::tip Requisitos previos
Para interactuar con el MCP en lenguaje natural, la IA subyacente debe tener acceso a modelos de lenguaje (LLMs), ya sea localmente (LMStudio, etc.), o a través de una conexión a servicios públicos como GPT-5 o Gemini, o utilizando nuestra oferta soberana **[LLM-as-a-Service](pathname:///llmaas/llmaas)**.
:::

Tras la configuración, puede usar herramientas LLM para realizar consultas en lenguaje natural sobre este servidor MCP.

#### Ejemplo

"Usa el MCP 'opencost-bestie' y dime qué porcentaje de los costos del clúster no están asignados a recursos"
Obtendrá esto:
<img src={opencostmcp} alt="Respuesta IA opencost"/>

#### Ejemplo 2

"Usa el MCP 'opencost-bestie' y lista los costos asociados a los volúmenes persistentes del día de ayer"

<img src={opencostmcp2} alt="Respuesta IA opencost 2"/>

#### Ejemplo 3

"Usa el MCP opencost-bestie y dime qué porcentaje de los costos del clúster están asignados a la aplicación con el label 'nginx'. (filtro de la forma filter: 'label:app:frontend')"

<img src={opencostmcp3} alt="Respuesta IA opencost 3"/>

## Conclusión

OpenCost le proporciona herramientas potentes para un análisis detallado y en tiempo real de los costos de su clúster de Kubernetes. Usando principalmente la vista **Allocations** y combinándola con una buena estrategia de etiquetado, puede obtener una visión clara de sus gastos, alineada tanto con sus despliegues técnicos como con su organización interna. El uso de LLMs y del servidor MCP de OpenCost permite ir más lejos en la explotación de los datos.
