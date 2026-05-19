---
title: Track costs with OpenCost
---
import opencostui from '@site/docs/managed_kubernetes/tutorials/images/opencost.png'
import opencostgrafana from '@site/docs/managed_kubernetes/tutorials/images/opencostgrafana.png'
import opencostmcp from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp.png'
import opencostmcp2 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp2.png'
import opencostmcp3 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp3.png'

## Objectives

This tutorial introduces **OpenCost**, the cost monitoring and optimization tool integrated into your **Managed Kubernetes** cluster. By the end of this guide, you will be able to:

- **Access** the OpenCost interface.
- **Understand** the interface structure and available views.
- **Analyze** the cost breakdown of your applications and infrastructure.

## What is OpenCost?

OpenCost is an open-source solution, a CNCF (Cloud Native Computing Foundation) standard, that provides real-time visibility into the costs of your Kubernetes environments. It helps you understand exactly what is consuming resources in your cluster and how that translates into costs.

In the Managed Kubernetes product, OpenCost is pre-installed and configured to give you a clear view of your spending. It is directly configured with the actual costs of the Cloud Temple infrastructure.

## Access the OpenCost interface

The OpenCost interface is exposed via a secure URL specific to your cluster. To access it, use the following URL by replacing `identifiant` with your cluster's identifier (for example, `ctodev`):

`https://opencost.external-secured.identifiant.mk.ms-cloud-temple.com`

:::info
Access to this URL is restricted to the IP addresses you have provided to Cloud Temple support. If you are unable to access it, please contact support to verify the firewall rules.
:::

<img src={opencostui} alt="OpenCost UI"/>

## Explore Cost Allocation (Allocations)

The main and most detailed view in OpenCost is the **Allocations** dashboard. This is where you can visualize your resource consumption in real time.

This view allows you to break down costs by native Kubernetes concepts. The "Aggregate by" dropdown menu is your primary analysis tool, enabling you to group costs by:

- **Namespace**: To get a view per environment or team.
- **Deployment**, **StatefulSet**, etc.: To analyze the cost of a specific application.
- **Controller**: For a more technical view.

### Aggregation by Labels

For even more granular financial analysis, OpenCost can aggregate costs based on **Kubernetes labels**. There is no direct "Label" option in the menu, but OpenCost ingests your labels and allows you to create custom aggregations. To do this, a consistent labeling strategy is essential. For example, by using labels such as `team: backend` or `product: api-gateway`, you can analyze costs that precisely match your organization.
For this type of analysis, you must use the OpenCost AI integration.

## Grafana Dashboard

A Grafana dashboard is also available to visualize OpenCost data. This dashboard provides an alternative and complementary view to the OpenCost interface, and it retains the complete history of cost metrics, allowing you to analyze long-term trends.

<img src={opencostgrafana} alt="OpenCost Grafana Dashboard"/>

## Advanced Usage: AI Integration (Serveur MCP)

For advanced users, OpenCost can be directly queried from the Cline conversational assistant (ou autre) using the **MCP (Multi-purpose Co-processor) servers** system. This allows you to script queries and retrieve cost data directly within your conversations.

### 1. Configuring MCP OpenCost in Cline

To connect Cline to your OpenCost instance, you must add the following configuration to your `cline_mcp_settings.json` file. This file is typically located in Cline's configuration directory.

We recommend creating an MCP server named "opencost-xxxxx", where xxxxx is the name of your managed Kubernetes cluster.
The MCP server URL follows the format `https://opencost-mcp.external-secured.identifiant.mk.ms-cloud-temple.com`
For example, for the "bestie" cluster:

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

Once this file is saved, Cline will automatically load the `opencost-xxxxx` MCP on startup.

### 2. Querying OpenCost with MCP

:::tip[Prerequisites
]
To interact with the MCP in natural language, the underlying AI must have access to language models (LLMs), either locally (LMStudio, etc), or via a connection to public services like GPT-5 or Gemini, or by using our sovereign **[LLM-as-a-Service](pathname:///llmaas/llmaas)** product.
:::

After configuration, you can use the LLM tools to perform natural language queries on this MCP server.

#### Example

"use the MCP "opencost-bestie", and tell me what percentage of the cluster's costs are not allocated to resources"
You will get this:
<img src={opencostmcp} alt="réponse IA opencost"/>

#### Example 2

"use the MCP "opencost-bestie",  and list the costs associated with persistent volumes for yesterday"

<img src={opencostmcp2} alt="opencost AI response 2"/>

#### Example 3

"use the opencost-bestie MCP, and tell me what percentage of the cluster costs are allocated to the application with the label "nginx". (filter of the form filter: "label:app:frontend" )"

<img src={opencostmcp3} alt="opencost AI response 3"/>

## Conclusion

OpenCost provides you with powerful tools for fine-grained and real-time analysis of your Kubernetes cluster costs. By primarily using the **Allocations** view and combining it with a robust labeling strategy, you can gain a clear overview of your expenses, aligned with both your technical deployments and your internal organization. Leveraging LLMs and the OpenCost MCP server allows you to take data utilization even further.