---
title: Kostenverfolgung mit OpenCost
---
import opencostui from './images/opencost.png'
import opencostgrafana from './images/opencostgrafana.png'
import opencostmcp from './images/opencostmcp.png'
import opencostmcp2 from './images/opencostmcp2.png'
import opencostmcp3 from './images/opencostmcp3.png'

## Ziele

Dieser Leitfaden führt Sie in **OpenCost** ein, das integrierte Kostenüberwachungs- und Optimierungstool für Ihren **Managed Kubernetes**-Cluster. Am Ende dieses Leitfadens können Sie:

- **Auf die OpenCost-Oberfläche zugreifen**.
- **Die Struktur der Oberfläche und die verfügbaren Ansichten verstehen**.
- **Die Kostenverteilung Ihrer Anwendungen und Ihrer Infrastruktur analysieren**.

## What is OpenCost?

OpenCost is an open-source, CNCF (Cloud Native Computing Foundation) standard solution that provides real-time visibility into the costs of your Kubernetes environments. It helps you precisely understand what is consuming resources within your cluster and how this translates into cost.

In the Managed Kubernetes offering, OpenCost is pre-installed and pre-configured to give you a clear view of your expenses. It is directly set up with the actual infrastructure costs from Temple Cloud.

## Access the OpenCost Interface

The OpenCost interface is exposed via a secure URL specific to your cluster. To access it, use the following URL, replacing `identifiant` with your cluster's identifier (for example, `ctodev`):

`https://opencost.external-secured.identifiant.mk.ms-cloud-temple.com`

:::info
Access to this URL is restricted to the IP addresses you have declared with Cloud Temple support. If you are unable to access it, please contact support to verify your firewall rules.
:::

<img src={opencostui} alt="OpenCost UI"/>

## Explore Cost Allocation (Allocations)

The main and most detailed view in OpenCost is the **Allocations** dashboard. This is where you can visualize your resource consumption in real time.

This view allows you to break down costs by native Kubernetes concepts. The "Aggregate by" dropdown is your primary tool for analysis, enabling you to group costs by:

- **Namespace**: To get a view per environment or team.
- **Deployment**, **StatefulSet**, etc.: To analyze the cost of a specific application.
- **Controller**: For a more technical perspective.

### Aggregation by Labels

For even more granular financial analysis, OpenCost can aggregate costs based on **Kubernetes labels**. There is no direct "Label" option in the menu, but OpenCost ingests your labels and enables you to create custom aggregations. For this, a consistent labeling strategy is essential. For example, using labels such as `team: backend` or `product: api-gateway` allows you to analyze costs precisely aligned with your organizational structure.

For this type of analysis, you must use OpenCost's AI integration.

## Grafana Dashboard

Ein Grafana-Dashboard ist ebenfalls verfügbar, um die Daten von OpenCost zu visualisieren. Dieses Dashboard bietet eine alternative und ergänzende Ansicht gegenüber der OpenCost-Oberfläche und behält den vollständigen Verlauf der Kostenmetriken bei, sodass Sie langfristige Trends analysieren können.

<img src={opencostgrafana} alt="OpenCost Grafana Dashboard"/>

## Advanced Usage: Integration with an AI (MCP Server)

For advanced users, OpenCost can be directly queried from the conversational assistant Cline (or others) via the **MCP (Multi-purpose Co-processor) server** system. This enables you to script queries and retrieve cost data directly within your conversations.

### 1. Configuring OpenCost MCP in Cline

To connect Cline to your OpenCost instance, add the following configuration to your `cline_mcp_settings.json` file. This file is typically located in the Cline configuration directory.

We recommend creating an MCP server named "opencost-xxxxx", where xxxxx is the name of your managed Kubernetes cluster.  
The MCP server URL has the format: `https://opencost-mcp.external-secured.identifiant.mk.ms-cloud-temple.com`  
For example, for the cluster "bestie":

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

To generate the `<TOKEN>` value from your credentials, use one of the following commands:

**For Linux/macOS:**
```bash
echo -n 'finopsadm:VOTRE_MOT_DE_PASSE' | base64
```

**For Windows (PowerShell):**
```powershell
$credentials = [System.Text.Encoding]::UTF8.GetBytes("finopsadm:VOTRE_MOT_DE_PASSE")
[System.Convert]::ToBase64String($credentials)
```

Once this file is saved, Cline will automatically load the `opencost-xxxxx` MCP at startup.

### 2. Query OpenCost using MCP

:::tip Prerequisites
To interact with MCP using natural language, the underlying AI must have access to language models (LLMs), either locally (e.g., LMStudio) or via connections to public services such as GPT-5 or Gemini, or by using our sovereign **[LLM-as-a-Service](/llmaas/llmaas)** offering.
:::

After setup, you can use LLM tools to perform natural language queries against this MCP server.

#### Beispiel:

"Verwende den MCP 'opencost-bestie' und sag mir, welcher Prozentsatz der Clusterkosten nicht einer Ressource zugewiesen ist."
Sie erhalten Folgendes:
<img src={opencostmcp} alt="IA-Antwort opencost"/>

#### Example 2:

"Use the MCP 'opencost-bestie', and list me the costs associated with persistent volumes from yesterday"

<img src={opencostmcp2} alt="IA response opencost 2" />

#### Beispiel 3:

"Verwende den MCP opencost-bestie und gib an, welcher Prozentsatz der Clusterkosten der Anwendung mit dem Label »nginx« zugewiesen ist. (Filter der Form filter: »label:app:frontend«)"

<img src={opencostmcp3} alt="IA-Antwort opencost 3" />

## Schlussfolgerung

OpenCost bietet Ihnen leistungsstarke Werkzeuge zur detaillierten und Echtzeit-Analyse der Kosten Ihres Kubernetes-Clusters. Durch die hauptsächliche Nutzung der Ansicht **Allocations** und deren Kombination mit einer gut durchdachten Labeling-Strategie erhalten Sie eine klare Übersicht über Ihre Ausgaben, die sowohl Ihren technischen Bereitstellungen als auch Ihrer internen Organisation entspricht. Die Nutzung von LLMs und des MCP-Servers opencost ermöglicht eine noch tiefere Auswertung der Daten.