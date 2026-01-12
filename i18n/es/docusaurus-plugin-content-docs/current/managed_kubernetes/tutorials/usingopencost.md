---
title: Seguimiento de costos con OpenCost
---
import opencostui from './images/opencost.png'
import opencostmcp from './images/opencostmcp.png'
import opencostmcp2 from './images/opencostmcp2.png'
import opencostmcp3 from './images/opencostmcp3.png'

## Objetivos

Este tutorial presenta **OpenCost**, la herramienta de supervisión y optimización de costos integrada en su clúster **Kubernetes gestionado**. Al final de esta guía, será capaz de:

- **Acceder** a la interfaz de OpenCost.
- **Comprender** la estructura de la interfaz y las vistas disponibles.
- **Analizar** la distribución de los costos de sus aplicaciones y de su infraestructura.

## ¿Qué es OpenCost?

OpenCost es una solución open-source, estándar de la CNCF (Cloud Native Computing Foundation), que proporciona visibilidad en tiempo real sobre los costos de sus entornos Kubernetes. Le ayuda a comprender con precisión qué consume recursos en su clúster y cómo se traduce esto en términos de costos.

En la oferta de Kubernetes gestionado, OpenCost está preinstalado y configurado para ofrecerle una visión clara de sus gastos. Está directamente configurado con los costos reales de la infraestructura Cloud Temple.

## Acceder a la interfaz de OpenCost

La interfaz de OpenCost se expone en una URL segura, específica para su clúster. Para acceder a ella, utilice la siguiente URL sustituyendo `identificador` por el identificador de su clúster (por ejemplo, `ctodev`):

`https://opencost.external-secured.identificador.mk.ms-cloud-temple.com`

:::info
El acceso a esta URL está restringido a las direcciones IP que ha declarado al soporte de Cloud Temple. Si no puede acceder, póngase en contacto con el soporte para verificar las reglas del firewall.
:::

<img src={opencostui} alt="Interfaz de OpenCost"/>

## Explorar la distribución de costos (Asignaciones)

La vista principal y más detallada de OpenCost es el panel **Asignaciones**. Aquí puede visualizar el consumo de sus recursos en tiempo real.

Esta vista le permite descomponer los costos según conceptos nativos de Kubernetes. El menú desplegable "Agrupar por" es la herramienta principal para su análisis, ya que le permite agrupar los costos por:

- **Namespace**: Para obtener una visión por entorno o por equipo.
- **Deployment**, **StatefulSet**, etc.: Para analizar el costo de una aplicación específica.
- **Controller**: Para una visión más técnica.

### Aggregation by Labels

For even more granular financial analysis, OpenCost can aggregate costs based on **Kubernetes labels**. There isn't a direct "Label" option in the menu, but OpenCost ingests your labels and allows you to create custom aggregations. For this, a consistent labeling strategy is essential. For example, using labels such as `team: backend` or `product: api-gateway` enables you to analyze costs precisely aligned with your organizational structure.  
For this type of analysis, you must go through OpenCost's AI integration.

## Uso avanzado: Integración con una IA (servidor MCP)

Para usuarios avanzados, OpenCost puede consultarse directamente desde el asistente conversacional Cline (o cualquier otro) gracias al sistema de **servidores MCP (Multi-purpose Co-processor)**. Esto le permite crear consultas mediante scripts y obtener datos de costos directamente en sus conversaciones.

### 1. Configuración del MCP OpenCost en Cline

Para conectar Cline con su instancia de OpenCost, debe agregar la siguiente configuración a su archivo `cline_mcp_settings.json`. Este archivo se encuentra generalmente en el directorio de configuración de Cline.

Recomendamos crear un servidor MCP "opencost-xxxxx", donde xxxxx es el nombre de su clúster Kubernetes gestionado.  
La URL del servidor MCP tiene el formato `https://opencost-mcp.external-secured.identificador.mk.ms-cloud-temple.com`.

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

Para generar el valor `<TOKEN>` a partir de sus credenciales, utilice una de las siguientes comandos:

**Para Linux/macOS:**
```bash
echo -n 'finopsadm:SU_CONTRASEÑA' | base64
```

**Para Windows (PowerShell):**
```powershell
$credentials = [System.Text.Encoding]::UTF8.GetBytes("finopsadm:SU_CONTRASEÑA")
[System.Convert]::ToBase64String($credentials)
```

Una vez guardado este archivo, Cline cargará automáticamente el MCP `opencost-xxxxx` al iniciar.

### 2. Query OpenCost with MCP

:::tip Prerequisites
To interact with MCP using natural language, the underlying AI must have access to language models (LLMs), either locally (e.g., LMStudio) or via connections to public services such as GPT-5 or Gemini, or by using our **[LLM-as-a-Service](/docs/llmaas/llmaas)** sovereign offering.
:::

After configuration, you can use LLM tools to perform natural language queries against this MCP server.

#### Ejemplo:

"usa el MCP 'opencost-bestie', y dime qué porcentaje de los costos del clúster no está asignado a recursos"
Obtendrás lo siguiente:
<img src={opencostmcp} alt="respuesta IA opencost"/>

#### Example 2:

"Use the MCP 'opencost-bestie', and list me the costs associated with persistent volumes from yesterday"

<img src={opencostmcp2} alt="IA response opencost 2"/>

#### Ejemplo 3:

"Utiliza el MCP opencost-bestie y dime qué porcentaje de los costos del clúster se asigna a la aplicación con la etiqueta 'nginx' (filtro del tipo filter: 'label:app:frontend')."

<img src={opencostmcp3} alt="respuesta IA opencost 3"/>

## Conclusión

OpenCost te proporciona herramientas potentes para un análisis detallado y en tiempo real de los costos de tu clúster Kubernetes. Al utilizar principalmente la vista **Asignaciones** y combinarla con una buena estrategia de etiquetado, puedes obtener una visión clara de tus gastos, alineada tanto a tus despliegues técnicos como a tu organización interna. El uso de LLM y del servidor MCP opencost permite ir aún más lejos en la explotación de los datos.