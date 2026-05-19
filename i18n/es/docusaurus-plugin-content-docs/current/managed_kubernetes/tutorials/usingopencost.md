---
title: Seguimiento de costos con OpenCost
---
import opencostui from '@site/docs/managed_kubernetes/tutorials/images/opencost.png'
import opencostgrafana from '@site/docs/managed_kubernetes/tutorials/images/opencostgrafana.png'
import opencostmcp from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp.png'
import opencostmcp2 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp2.png'
import opencostmcp3 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp3.png'

## Objetivos

Este tutorial le presenta **OpenCost**, la herramienta de monitoreo y optimización de costos integrada en su clúster **Managed Kubernetes**. Al finalizar esta guía, podrá:

- **Acceder** a la interfaz de OpenCost.
- **Comprender** la estructura de la interfaz y las vistas disponibles.
- **Analizar** el desglose de costos de sus aplicaciones y de su infraestructura.

## ¿Qué es OpenCost?

OpenCost es una solución de código abierto, estándar de la CNCF (Cloud Native Computing Foundation), que proporciona visibilidad en tiempo real sobre los costos de sus entornos Kubernetes. Le ayuda a comprender exactamente qué consume recursos en su clúster y cómo se traduce en términos de costos.

En el producto Managed Kubernetes, OpenCost está preinstalado y configurado para ofrecerle una visión clara de sus gastos. Está configurado directamente con los costos reales de la infraestructura Cloud Temple.

## Acceder a la interfaz de OpenCost

La interfaz de OpenCost está expuesta en una URL segura, específica de su clúster. Para acceder, utilice la siguiente URL reemplazando `identifiant` por el de su clúster (por ejemplo, `ctodev`) :

`https://opencost.external-secured.identifiant.mk.ms-cloud-temple.com`

:::info
El acceso a esta URL está restringido a las direcciones IP que haya declarado al soporte de Cloud Temple. Si no puede acceder a ella, contacte al soporte para verificar las reglas del firewall.
:::

<img src={opencostui} alt="Interfaz de OpenCost"/>

## Explorar la asignación de costos (Allocations)

La vista principal y más detallada de OpenCost es el panel de control **Allocations**. Aquí es donde puede visualizar el consumo de sus recursos en tiempo real.

Esta vista le permite desglosar los costos por conceptos nativos de Kubernetes. El menú desplegable "Aggregate by" es la herramienta principal para su análisis; le permite agrupar los costos por:

- **Namespace** : Para tener una vista por entorno o por equipo.
- **Deployment**, **StatefulSet**, etc. : Para analizar el costo de una aplicación específica.
- **Controller** : Para una vista más técnica.

### Agregación por etiquetas

Para un análisis financiero aún más detallado, OpenCost puede agregar los costos basándose en las **etiquetas de Kubernetes**. No hay una opción "Etiqueta" directa en el menú, pero OpenCost ingiere sus etiquetas y le permite crear agregaciones personalizadas. Para ello, una estrategia de etiquetado coherente es esencial. Por ejemplo, al utilizar etiquetas como `team: backend` o `product: api-gateway`, podrá analizar los costos que corresponden precisamente a su organización.
Para este tipo de análisis, debe utilizar la integración de IA de OpenCost.

## Dashboard Grafana

Un dashboard de Grafana también está disponible para visualizar los datos de OpenCost. Este dashboard ofrece una vista alternativa y complementaria a la interfaz de OpenCost, y conserva el historial completo de las métricas de costos, permitiéndole analizar las tendencias a largo plazo.

<img src={opencostgrafana} alt="OpenCost Grafana Dashboard"/>

## Uso Avanzado: Integración con una IA (Servidor MCP)

Para usuarios avanzados, OpenCost puede ser consultado directamente desde el asistente conversacional Cline (o cualquier otro) gracias al sistema de **servidores MCP (Co-procesador de propósito múltiple)**. Esto te permite crear scripts de consultas y obtener datos de costo directamente en tus conversaciones.

### 1. Configuración del MCP OpenCost en Cline

Para conectar Cline a su instancia de OpenCost, debe agregar la siguiente configuración a su archivo `cline_mcp_settings.json`. Este archivo se encuentra generalmente en el directorio de configuración de Cline.

Recomendamos crear un servidor MCP "opencost-xxxxx" donde xxxxx es el nombre de su clúster de Kubernetes administrado.
La URL del servidor MCP es de tipo `https://opencost-mcp.external-secured.identifiant.mk.ms-cloud-temple.com`
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

Para generar el valor `<TOKEN>` a partir de sus credenciales, utilice uno de los siguientes comandos:

**Para Linux/macOS:**

```bash
echo -n 'finopsadm:VOTRE_MOT_DE_PASSE' | base64
```

**Para Windows (PowerShell):**

```powershell
$credentials = [System.Text.Encoding]::UTF8.GetBytes("finopsadm:VOTRE_MOT_DE_PASSE")
[System.Convert]::ToBase64String($credentials)
```

Una vez guardado este archivo, Cline cargará automáticamente el MCP `opencost-xxxxx` al inicio.

### 2. Consultar OpenCost con el MCP

:::tip[Requisitos
]
Para interactuar con el MCP en lenguaje natural, la IA subyacente debe tener acceso a modelos de lenguaje (LLMs), ya sea localmente (LMStudio, etc.), ya sea a través de una conexión a servicios públicos como GPT-5 o Gemini, ya sea utilizando nuestro producto **[LLM-as-a-Service](pathname:///llmaas/llmaas)** soberano.
:::

Una vez configurado, puedes usar las herramientas LLM para realizar consultas en lenguaje natural a este servidor MCP.

#### Ejemplo

"usa el MCP "opencost-bestie", y dime qué porcentaje de los costos del clúster no está asignado a recursos"
Obtendrás esto:
<img src={opencostmcp} alt="respuesta IA opencost"/>

#### Ejemplo 2

"utiliza el MCP "opencost-bestie",  y muéstrame los costos asociados a los volúmenes persistentes del día de ayer"

<img src={opencostmcp2} alt="respuesta IA opencost 2"/>

#### Ejemplo 3

"utiliza el MCP opencost-bestie, y dime qué porcentaje de los costos del cluster asignados a la aplicación con la etiqueta "nginx" . (filtro de la forma filter: "label:app:frontend" )"

<img src={opencostmcp3} alt="respuesta IA opencost 3"/>

## Conclusión

OpenCost le proporciona herramientas potentes para un análisis fino y en tiempo real de los costos de su clúster de Kubernetes. Al utilizar principalmente la vista **Asignaciones** y combinarla con una buena estrategia de etiquetado, puede obtener una visión clara de sus gastos, alineada tanto con sus despliegues técnicos como con su organización interna. El uso de LLM y del servidor MCP de OpenCost permite ir más allá en la explotación de los datos.