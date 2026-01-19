---
title: Track Costs with OpenCost
---
import opencostui from './images/opencost.png'
import opencostmcp from './images/opencostmcp.png'
import opencostmcp2 from './images/opencostmcp2.png'
import opencostmcp3 from './images/opencostmcp3.png'

## Objectives

This tutorial introduces **OpenCost**, the cost monitoring and optimization tool integrated into your **Managed Kubernetes** cluster. By the end of this guide, you will be able to:

- **Access** the OpenCost interface.
- **Understand** the interface structure and available views.
- **Analyze** the cost distribution of your applications and infrastructure.

## What is OpenCost?

OpenCost is an open-source, CNCF (Cloud Native Computing Foundation) standard solution that provides real-time visibility into the costs of your Kubernetes environments. It helps you precisely understand what is consuming resources within your cluster and how that translates into cost.

In the Managed Kubernetes offering, OpenCost is pre-installed and pre-configured to give you a clear view of your expenses. It is directly configured with the actual infrastructure costs from Temple Cloud.

## Access the OpenCost Interface

The OpenCost interface is exposed on a secure URL specific to your cluster. To access it, use the following URL, replacing `identifiant` with your cluster's identifier (for example, `ctodev`):

`https://opencost.external-secured.identifiant.mk.ms-cloud-temple.com`

:::info
Access to this URL is restricted to the IP addresses you have declared with Cloud Temple support. If you are unable to access it, please contact support to verify your firewall rules.
:::

<img src={opencostui} alt="OpenCost UI"/>

## Explore Cost Allocation

The main and most detailed view in OpenCost is the **Allocations** dashboard. This is where you can visualize your resource consumption in real time.

This view allows you to break down costs by native Kubernetes concepts. The "Aggregate by" dropdown is your primary tool for analysis, enabling you to group costs by:

- **Namespace**: To get a view by environment or team.
- **Deployment**, **StatefulSet**, etc.: To analyze the cost of a specific application.
- **Controller**: For a more technical perspective.

### Cost Aggregation by Labels

For even more granular financial analysis, OpenCost can aggregate costs based on **Kubernetes labels**. There is no direct "Label" option in the menu, but OpenCost ingests your labels and enables you to create custom aggregations. For this, a consistent labeling strategy is essential. For example, using labels such as `team: backend` or `product: api-gateway` allows you to analyze costs precisely aligned with your organizational structure.

For this type of analysis, you must use OpenCost's AI integration.

## Advanced Usage: Integration with an AI (MCP Server)

For advanced users, OpenCost can be directly queried from the conversational assistant Cline (or others) through the **MCP (Multi-purpose Co-processor) servers** system. This enables you to script requests and retrieve cost data directly within your conversations.

### 1. Configuring OpenCost MCP in Cline

To connect Cline to your OpenCost instance, add the following configuration to your `cline_mcp_settings.json` file. This file is typically located in Cline's configuration directory.

We recommend creating an MCP server named "opencost-xxxxx", where xxxxx is the name of your managed Kubernetes cluster.  
The MCP server URL follows the format: `https://opencost-mcp.external-secured.identifiant.mk.ms-cloud-temple.com`  
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

### 2. Query OpenCost with MCP

:::tip Prerequisites
To interact with MCP using natural language, the underlying AI must have access to language models (LLMs), either locally (e.g., LMStudio) or via connections to public services such as GPT-5 or Gemini, or by using our sovereign **[LLM-as-a-Service](/llmaas/llmaas)** offering.
:::

After setup, you can use LLM tools to perform natural language queries against this MCP server.

#### Example:

"Use the MCP 'opencost-bestie', and tell me what percentage of the cluster's costs are not allocated to resources"
You will get this:
<img src={opencostmcp} alt="IA response opencost"/>

#### Example 2:

"Use the MCP 'opencost-bestie', and list me the costs associated with persistent volumes from yesterday"

<img src={opencostmcp2} alt="IA response opencost 2"/>

#### Example 3:

"Use the OpenCost MCP opencost-bestie, and tell me what percentage of the cluster costs are allocated to the application with the label 'nginx' (filter of the form filter: 'label:app:frontend')."

<img src={opencostmcp3} alt="IA response opencost 3"/>

## Conclusion

OpenCost provides you with powerful tools for detailed, real-time cost analysis of your Kubernetes cluster. By primarily using the **Allocations** view and combining it with a solid labeling strategy, you can gain a clear understanding of your spending, aligned both with your technical deployments and internal organizational structure. Leveraging LLMs and the OpenCost MCP server enables you to take data exploitation even further.