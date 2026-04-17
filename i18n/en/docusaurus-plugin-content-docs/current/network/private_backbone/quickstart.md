---
title: Getting Started
---

# Getting Started — Private Backbone

This guide walks you through creating your first inter-AZ private network and configuring Internet access with public IPs.

---

## Prerequisites

- Access to the **Cloud Temple Console** with network rights enabled
- At least one compute cluster deployed in your tenant
- For Internet access: a prior service request for external connectivity ports

---

## Part 1 — Create a Private Network (VLAN)

### Step 1: Access the Network Menu

In the Cloud Temple Console, click **Network** in the left navigation bar.

### Step 2: Create a New Network

Click **New network** and fill in:

| Field | Description | Example |
|-------|-------------|---------|
| Name | Human-readable identifier for your network | `prod-backend-vlan` |
| VLAN ID | VLAN identifier (auto or manual) | `100` |
| Description | Network usage (optional) | `Production backend network` |

### Step 3: Configure Propagation

Select the **target clusters** to propagate this network to.

:::caution[Propagation limit]
Propagation changes are limited to **20 networks** per action. For larger volumes, perform multiple successive actions.
:::

### Step 4: Confirm

Click **Create**. The VLAN is provisioned instantly and available on the selected clusters.

---

## Part 2 — Share a Network Between Tenants

If your organization has multiple tenants, you can share a network:

1. Select the network from the list
2. Click **Share**
3. Choose the target tenant(s) from the organization-filtered list
4. Confirm the share

The network then appears in the **Shared with me** section of the destination tenant.

---

## Part 3 — Order Public IPs

### Step 1: Access the Internet Section

In the Cloud Temple Console, navigate to **Network > Internet**.

### Step 2: Order an IP Block

Click **Order IP addresses** and choose:

| Type | Minimum block |
|------|--------------|
| IPv4 | 1 address |
| IPv6 | /64 (64 addresses) |

### Step 3: Associate IPs with Your Services

Once the block is allocated:
1. Select the IP address from the list
2. Click **Associate**
3. Choose the target service (VM, equipment, etc.)

### Step 4: Configure Reverse DNS (PTR)

For each public IP, you can set a PTR record:
1. Click the IP in the console
2. Select **Configure PTR**
3. Enter the desired DNS name (e.g. `service.example.com`)

---

## Part 4 — External Connectivity (1G/10G ports)

To connect network equipment (firewall, router) or an operator link:

**Open a service request** with the following information:
- Organization name and technical contact
- Tenant name and target availability zone
- Desired port type: **1 Gbps** or **10 Gbps** (fibre or copper)
- Destination network and any physical hosting requirements

:::info[Delivery time]
External connectivity ports are delivered on quote after validation of the service request.
:::

---

## Next Steps

- 📖 [Private Backbone Concepts](./concepts) — Understand VPLS, VLAN tagging, BGP
- 🔧 [Tutorials](./tutorials) — Configure FortiGate or pfSense with BGP
- 🌐 [VPC Documentation](../vpc/vpc) — For a cloud-native network approach
