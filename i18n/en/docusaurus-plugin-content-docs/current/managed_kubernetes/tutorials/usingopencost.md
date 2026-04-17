---
title: Tracking Costs with OpenCost
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

OpenCost is an open-source solution, a CNCF (Cloud Native Computing Foundation) standard, that provides real-time visibility into the costs of your Kubernetes environments. It helps you understand precisely what is consuming resources in your cluster and how that translates into costs.

In the Managed Kubernetes offering, OpenCost is pre-installed and configured to give you a clear view of your spending. It is directly parameterized with the real costs of Cloud Temple infrastructure.

## Accessing the OpenCost Interface

The OpenCost interface is exposed on a secure URL specific to your cluster. To access it, use the following URL, replacing `identifier` with your cluster identifier (for example, `ctodev`):

`https://opencost.external-secured.identifier.mk.ms-cloud-temple.com`

:::info
Access to this URL is restricted to the IP addresses you have declared to Cloud Temple support. If you cannot access it, please contact support to check the firewall rules.
:::

<img src={opencostui} alt="OpenCost UI"/>

## Exploring the Cost Breakdown (Allocations)

The main and most detailed view of OpenCost is the **Allocations** dashboard. This is where you can visualize your resource consumption in real time.

This view allows you to break down costs by native Kubernetes concepts. The "Aggregate by" dropdown menu is the main tool for your analysis; it allows you to group costs by:

- **Namespace**: For a view by environment or by team.
- **Deployment**, **StatefulSet**, etc.: To analyze the cost of a specific application.
- **Controller**: For a more technical view.

### Aggregation by Labels

For an even more granular financial analysis, OpenCost can aggregate costs based on **Kubernetes labels**. There is no direct "Label" option in the menu, but OpenCost ingests your labels and allows you to create custom aggregations. For this, a consistent labeling strategy is essential. For example, by using labels such as `team: backend` or `product: api-gateway`, you will be able to analyze costs that precisely correspond to your organization.
For this type of analysis, you need to go through OpenCost's AI integration.

## Grafana Dashboard

A Grafana dashboard is also available to visualize OpenCost data. This dashboard provides an alternative and complementary view to the OpenCost interface, and it retains the complete history of cost metrics, allowing you to analyze trends over the long term.

<img src={opencostgrafana} alt="OpenCost Grafana Dashboard"/>

## Advanced Usage: Integration with AI (MCP Server)

For advanced users, OpenCost can be queried directly from the Cline conversational assistant (or others) thanks to the **MCP (Multi-purpose Co-processor) servers** system. This allows you to script queries and obtain cost data directly in your conversations.

### 1. Configuring the OpenCost MCP in Cline

To connect Cline to your OpenCost instance, you need to add the following configuration to your `cline_mcp_settings.json` file. This file is usually found in the Cline configuration directory.

We recommend creating an MCP server named "opencost-xxxxx" where xxxxx is the name of your managed Kubernetes cluster.
The MCP server URL follows this format: `https://opencost-mcp.external-secured.identifier.mk.ms-cloud-temple.com`
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
echo -n 'finopsadm:YOUR_PASSWORD' | base64
```

**For Windows (PowerShell):**

```powershell
$credentials = [System.Text.Encoding]::UTF8.GetBytes("finopsadm:YOUR_PASSWORD")
[System.Convert]::ToBase64String($credentials)
```

Once this file is saved, Cline will automatically load the `opencost-xxxxx` MCP at startup.

### 2. Querying OpenCost with the MCP

:::tip[Prerequisites]
To interact with the MCP in natural language, the underlying AI must have access to language models (LLMs), either locally (LMStudio, etc.), or via a connection to public services like GPT-5 or Gemini, or by using our sovereign **[LLM-as-a-Service](pathname:///llmaas/llmaas)** offering.
:::

After configuration, you can use LLM tools to perform natural language queries on this MCP server.

#### Example

"Use the MCP 'opencost-bestie', and tell me what percentage of cluster costs are not allocated to resources"
You will get this:
<img src={opencostmcp} alt="AI opencost response"/>

#### Example 2

"Use the MCP 'opencost-bestie', and list the costs associated with persistent volumes for yesterday"

<img src={opencostmcp2} alt="AI opencost response 2"/>

#### Example 3

"Use the MCP opencost-bestie, and tell me what percentage of cluster costs are allocated to the application with the label 'nginx'. (filter of the form filter: 'label:app:frontend')"

<img src={opencostmcp3} alt="AI opencost response 3"/>

## Conclusion

OpenCost provides you with powerful tools for a detailed, real-time analysis of your Kubernetes cluster costs. By primarily using the **Allocations** view and combining it with a good labeling strategy, you can get a clear view of your spending, aligned both with your technical deployments and your internal organization. Using LLMs and the OpenCost MCP server allows you to go further in exploiting the data.
