---
title: Seguimiento de costos con OpenCost
---
import opencostui from '@site/docs/managed_kubernetes/tutorials/images/opencost.png'
import opencostgrafana from '@site/docs/managed_kubernetes/tutorials/images/opencostgrafana.png'
import opencostmcp from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp.png'
import opencostmcp2 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp2.png'
import opencostmcp3 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp3.png'

## Objetivos

Este tutorial le presenta **OpenCost**, la herramienta de monitoreo y optimización de costos integrada en su clúster **Managed Kubernetes**. Al finalizar esta guía, será capaz de:

- **Acceder** a la interfaz de OpenCost.
- **Comprender** la estructura de la interfaz y las vistas disponibles.
- **Analizar** el desglose de los costos de sus aplicaciones y su infraestructura.

## ¿Qué es OpenCost?

OpenCost es una solución de código abierto, estándar de la CNCF (Cloud Native Computing Foundation), que proporciona visibilidad en tiempo real sobre los costos de sus entornos Kubernetes. Le ayuda a comprender exactamente qué consume recursos en su clúster y cómo esto se traduce en términos de costos.

En el producto Managed Kubernetes, OpenCost está preinstalado y configurado para brindarle una visión clara de sus gastos. Se configura directamente con los costos reales de la infraestructura Cloud Temple.

## Acceder a la interfaz de OpenCost

La interfaz de OpenCost se expone en una URL segura, exclusiva para su clúster. Para acceder a ella, utilice la siguiente URL reemplazando `identifiant` por el de su clúster (por ejemplo, `ctodev`) :

`https://opencost.external-secured.identifiant.mk.ms-cloud-temple.com`

>ℹ️El acceso a esta URL está restringido a las direcciones IP que haya declarado al soporte de Cloud Temple. Si no puede acceder a ella, póngase en contacto con el soporte para verificar las reglas del firewall.


<img src={opencostui} alt="OpenCost UI"/>

## Explorar la asignación de costos (Allocations)

La vista principal y más detallada de OpenCost es el panel de control **Allocations**. Aquí es donde puede visualizar el consumo de sus recursos en tiempo real.

Esta vista le permite desglosar los costos según conceptos nativos de Kubernetes. El menú desplegable "Aggregate by" es la herramienta principal para su análisis, y le permite agrupar los costos por:

- **Namespace** : Para obtener una vista por entorno o por equipo.
- **Deployment**, **StatefulSet**, etc. : Para analizar el costo de una aplicación específica.
- **Controller** : Para una vista más técnica.

### Agregación por Etiquetas

Para un análisis financiero aún más detallado, OpenCost puede agregar los costos basándose en las **etiquetas de Kubernetes**. No hay una opción "Etiqueta" directa en el menú, pero OpenCost ingiere sus etiquetas y le permite crear agregaciones personalizadas. Para ello, una estrategia de etiquetado coherente es esencial. Por ejemplo, al utilizar etiquetas como `team: backend` o `product: api-gateway`, podrá analizar los costos que corresponden exactamente a su organización.
Para este tipo de análisis, debe utilizar la integración de IA de opencost.

## Dashboard Grafana

Un dashboard de Grafana también está disponible para visualizar los datos de OpenCost. Este dashboard ofrece una vista alternativa y complementaria a la interfaz de OpenCost, y conserva el historial completo de las métricas de costos, permitiéndole analizar las tendencias a largo plazo.

<img src={opencostgrafana} alt="Dashboard de Grafana de OpenCost"/>

## Uso Avanzado: Integración con una IA (Servidor MCP)

Para usuarios avanzados, OpenCost puede consultarse directamente desde el asistente conversacional Cline (u otro) gracias al sistema de **servidores MCP (Model Context Protocol)**. Esto le permite automatizar consultas y obtener datos de costos directamente en sus conversaciones.

### 1. Configuración del MCP OpenCost en Cline

Para conectar Cline a su instancia de OpenCost, debe agregar la siguiente configuración a su archivo `cline_mcp_settings.json`. Este archivo generalmente se encuentra en el directorio de configuración de Cline.

Recomendamos crear un servidor MCP "opencost-xxxxx" donde xxxxx es el nombre de su clúster Kubernetes administrado.
La URL del servidor MCP es de tipo `https://opencost-mcp.external-secured.identifiant.mk.ms-cloud-temple.com`
Por ejemplo, para el clúster "bestie" :

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

Para generar el valor `<TOKEN>` a partir de sus credenciales, utilice uno de los siguientes comandos :

**Para Linux/macOS :**

```bash
echo -n 'finopsadm:VOTRE_MOT_DE_PASSE' | base64
```

**Para Windows (PowerShell) :**

```powershell
$credentials = [System.Text.Encoding]::UTF8.GetBytes("finopsadm:VOTRE_MOT_DE_PASSE")
[System.Convert]::ToBase64String($credentials)
```

Una vez guardado este archivo, Cline cargará automáticamente el MCP `opencost-xxxxx` al iniciar.

### 2. Consultar OpenCost con el MCP

>ℹ️[Prerrequisitos]
>Para interactuar con el MCP en lenguaje natural, la IA subyacente debe tener acceso a modelos de lenguaje (LLMs), ya sea localmente (LMStudio, etc), ya sea a través de una conexión a servicios públicos como GPT-5 o Gemini, o bien utilizando nuestro producto **[LLM-as-a-Service](pathname:///llmaas/llmaas)** soberano.


Después de la configuración, puede utilizar las herramientas de LLM para realizar consultas en lenguaje natural en este servidor MCP.

#### Ejemplo

"usa el MCP "opencost-bestie", y dime qué porcentaje de los costos del clúster no están asignados a recursos"
Obtendrás esto:
<img src={opencostmcp} alt="réponse IA opencost"/>

#### Ejemplo 2

"usa el MCP "opencost-bestie",  y enumérame los costos asociados a los volúmenes persistentes del día de ayer"

<img src={opencostmcp2} alt="respuesta IA opencost 2"/>

#### Ejemplo 3

"utiliza el MCP opencost-bestie, y dime qué porcentaje de los costos del cluster están asignados a la aplicación con la etiqueta "nginx" . (filtre de la forme filter: "label:app:frontend" )"

<img src={opencostmcp3} alt="réponse IA opencost 3"/>

## Conclusión

OpenCost le proporciona herramientas potentes para un análisis granular y en tiempo real de los costos de su clúster de Kubernetes. Al utilizar principalmente la vista **Allocations** y combinarla con una buena estrategia de etiquetado, puede obtener una visión clara de sus gastos, alineada tanto con sus despliegues técnicos como con su organización interna. El uso de los LLM y del servidor MCP de OpenCost permite ir más allá en el aprovechamiento de los datos.