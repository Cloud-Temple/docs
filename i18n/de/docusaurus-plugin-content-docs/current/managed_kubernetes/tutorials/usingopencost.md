---
title: Cost Tracking with OpenCost
---
import opencostui from './images/opencost.png'
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

In the Managed Kubernetes offering, OpenCost is pre-installed and pre-configured to give you a clear view of your expenses. It is directly configured with the actual infrastructure costs from Temple Cloud.

## Access the OpenCost Interface

The OpenCost interface is exposed via a secure URL specific to your cluster. To access it, use the following URL, replacing `identifiant` with your cluster's identifier (for example, `ctodev`):

`https://opencost.external-secured.identifiant.mk.ms-cloud-temple.com`

:::info
Access to this URL is restricted to the IP addresses you have declared with Cloud Temple support. If you are unable to access it, please contact support to verify your firewall rules.
:::

<img src={opencostui} alt="OpenCost UI"/>

## Explore Cost Distribution (Allocations)

The main and most detailed view in OpenCost is the **Allocations** dashboard. This is where you can visualize your resource consumption in real time.

This view allows you to break down costs by native Kubernetes concepts. The "Aggregate by" dropdown is your primary tool for analysis, enabling you to group costs by:

- **Namespace**: To get a view per environment or team.
- **Deployment**, **StatefulSet**, etc.: To analyze the cost of a specific application.
- **Controller**: For a more technical perspective.

### Aggregation by Labels

For even more granular financial analysis, OpenCost can aggregate costs based on **Kubernetes labels**. There is no direct "Label" option in the menu, but OpenCost ingests your labels and enables you to create custom aggregations. For this, a consistent labeling strategy is essential. For example, using labels such as `team: backend` or `product: api-gateway` allows you to analyze costs precisely aligned with your organizational structure.

For this type of analysis, you must use OpenCost's AI integration.

## Advanced Usage: Integration with an AI (MCP Server)

For advanced users, OpenCost can be directly queried from the conversational assistant Cline (or others) via the **MCP (Multi-purpose Co-processor) server** system. This enables you to script requests and retrieve cost data directly within your conversations.

### 1. Configuration du MCP OpenCost dans Cline

Um Cline mit Ihrer OpenCost-Instanz zu verbinden, müssen Sie die folgende Konfiguration in Ihre Datei `cline_mcp_settings.json` hinzufügen. Diese Datei befindet sich normalerweise im Konfigurationsverzeichnis von Cline.

Wir empfehlen, einen MCP-Server mit dem Namen „opencost-xxxxx“ zu erstellen, wobei xxxxx der Name Ihres verwalteten Kubernetes-Clusters ist.  
Die URL des MCP-Servers hat folgendes Format: `https://opencost-mcp.external-secured.identifiant.mk.ms-cloud-temple.com`  
Beispiel für den Cluster „bestie“:

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

Um den Wert für `<TOKEN>` aus Ihren Anmeldeinformationen zu generieren, verwenden Sie eine der folgenden Befehle:

**Für Linux/macOS:**
```bash
echo -n 'finopsadm:VOTRE_MOT_DE_PASSE' | base64
```

**Für Windows (PowerShell):**
```powershell
$credentials = [System.Text.Encoding]::UTF8.GetBytes("finopsadm:VOTRE_MOT_DE_PASSE")
[System.Convert]::ToBase64String($credentials)
```

Nachdem Sie diese Datei gespeichert haben, lädt Cline den MCP `opencost-xxxxx` automatisch beim Start.

### 2. Query OpenCost using MCP

:::tip Prerequisites
To interact with MCP using natural language, the underlying AI must have access to language models (LLMs), either locally (e.g., LMStudio) or via connections to public services such as GPT-5 or Gemini, or by using our **[LLM-as-a-Service](/docs/llmaas/llmaas)** sovereign offering.
:::

After setup, you can use LLM tools to perform natural language queries against this MCP server.

#### Beispiel:

"Verwende den MCP 'opencost-bestie' und sag mir, welcher Prozentsatz der Clusterkosten nicht einer Ressource zugewiesen ist."
Sie erhalten Folgendes:
<img src={opencostmcp} alt="IA-Antwort opencost"/>

#### Example 2:

"Use the MCP 'opencost-bestie', and list me the costs associated with persistent volumes from yesterday"

<img src={opencostmcp2} alt="IA response opencost 2"/>

#### Beispiel 3:

"Verwende den MCP opencost-bestie und gib mir den Prozentsatz der Clusterkosten an, die der Anwendung mit dem Label »nginx« zugewiesen sind. (Filter der Form filter: »label:app:frontend«)"

<img src={opencostmcp3} alt="IA-Antwort opencost 3" />

## Schlussfolgerung

OpenCost bietet Ihnen leistungsstarke Werkzeuge zur detaillierten und Echtzeit-Analyse der Kosten Ihres Kubernetes-Clusters. Durch die hauptsächliche Nutzung der Ansicht **Allocations** und deren Kombination mit einer gut durchdachten Labeling-Strategie erhalten Sie eine klare Übersicht über Ihre Ausgaben, die sowohl Ihren technischen Bereitstellungen als auch Ihrer internen Organisation entspricht. Die Nutzung von LLMs und des MCP-Servers opencost ermöglicht eine noch tiefere Auswertung der Daten.