---
title: Networking in Managed Kubernetes
---

import cillium from '@site/docs/managed_kubernetes/tutorials/images/cillium.png'

---

## Objectives

The goal of this tutorial is to familiarize you with the fundamental networking concepts of the **Managed Kubernetes** offering. By the end of this guide, you will be able to:

- Understand the IP addressing plan of your cluster (nodes, pods, services).
- Know the different mechanisms for exposing your applications (Ingress, LoadBalancer).
- Visualize network flows and security policies with Hubble.

We will use as an **example** a cluster **"ctodev"**, with the assigned range **10.20.0.0/22**

:::warning[Range definitions]
 This private IP range X.Y.Z.0/22 (RFC 1918) is defined with the client when the cluster is set up. It cannot be modified later.
:::

## IP Addressing Plan

Your Managed Kubernetes cluster has a multi-zone VLAN with an IPv4 address range in /22.

The range of our **example** 10.20.0.0/22 is logically divided into sub-ranges.

    - 10.20.0.0/24 is assigned to the cluster Nodes:

        - 10.20.0.10 : ctodev-gitrunner (the machine that drives the infrastructure)

        - 10.20.0.20 : virtual IP (load balanced) of the Kubernetes API service
        - 10.20.0.21 : ctodev-cp-01 (control plane 01)
        - 10.20.0.22 : ctodev-cp-02 (control plane 02)
        - 10.20.0.23 : ctodev-cp-03 (control plane 03)

        - 10.20.0.41 : ctodev-ceph-01 (Ceph Storage 01)
        - 10.20.0.42 : ctodev-ceph-02 (Ceph Storage 02)
        - 10.20.0.43 : ctodev-ceph-03 (Ceph Storage 03)

        - 10.20.0.51 : ctodev-wrk-01 (Worker 01)
        - 10.20.0.52 : ctodev-wrk-02 (Worker 02)
        - 10.20.0.53 : ctodev-wrk-03 (Worker 03)
        - ...
        - 10.20.0.151 : ctodev-wrk-100 (Worker 100)

    - Internal MetalLB : 10.20.1.1 – 10.20.1.127

      - 10.20.1.1 : ingress `nginx-internal`
    
    - External MetalLB : 10.20.1.128 – 10.20.1.254

      - 10.20.1.128 : ingress `nginx-external`
      - 10.20.1.129 : ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16 

    - Services: 10.95.0.0/12 

:::warning[Pods and Services Ranges]
The Pods and Services ranges are defined with the client when the cluster is set up. They cannot be modified later.
:::

## Using MetalLB

MetalLB is the component that allows exposing layer 3 services (non-web / L7) directly on an IP address, whether internal or external, using the `LoadBalancer` service type. It is an alternative to Ingress for non-HTTP applications or for specific use cases.

To use MetalLB, you simply need to create a service of type `LoadBalancer`. MetalLB will automatically assign it an IP address from the pre-configured ranges. The distinction between `internal` and `external` ranges is a security measure to ensure that an application intended for internal use is not accidentally exposed on a public network.

**Example: Exposing a service on the internal network**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mon-service-interne
  namespace: mon-namespace
spec:
  selector:
    app: mon-app
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 80
  type: LoadBalancer
```

After applying this manifest, your service will be assigned an IP address in the range `10.20.1.1 – 10.20.1.127` and will be accessible from your internal network connected to the cluster.

**Example: Exposing a service on the external network**

To request an IP address from the external range (`10.20.1.128 – 10.20.1.254`), you must add the label `lb-type: external` to your service.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mon-service-externe
  namespace: mon-namespace
  labels:
    lb-type: external
spec:
  selector:
    app: mon-app
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 80
  type: LoadBalancer
```

> **Important**: This range remains **in a private address space**. For **public exposure**, it is necessary to create a **NAT rule (DNAT)** on your infrastructure firewall to redirect traffic from one of your external public IPs to the private IP address assigned by MetalLB.

## Public IPs

Your Managed Kubernetes cluster was delivered with 2 public IPv4 addresses.

The 1st IP is used on port 6443 for the Kubernetes API (in our example ctodev.mk.ms-cloud-temple.com:6443)

This same IP is also NATed on the *"nginx-external-secured"* ingress controller for port 443. This enables exposure of the various consoles made available to you (see the quickstart guide). Access to this public IP is **filtered** with a list of allowed IPs.

---
The 2nd public IP is NATed on the *"nginx-external"* ingress controller, on ports 80 and 443.

Applications exposed with the *"nginx-external"* ingress class will therefore be directly accessible from the Internet on this IP.

*If you wish to modify firewall rules (adding/removing allowed IPs), you must submit a support request.*

*It is possible to add additional public IPs if you wish.*

## DNS

For internal DNS (CoreDNS), the cluster will have these parameters:

- Cluster name: `<cluster identifier>`
- Internal domain: `<cluster identifier>-cluster.local` (in our example: ctodev-cluster.local)

This internal domain is crucial for inter-service communication within the cluster. It allows an application to contact another application simply by using its Kubernetes service name, without needing to know its internal IP address.

For example, a service named `api-backend` in the `production` namespace will automatically be resolvable at the address `api-backend.production.svc.ctodev-cluster.local`.

---

The public DNS zone used for Managed Kubernetes clusters is `.mk.ms-cloud-temple.com`

The *"nginx-external"* ingress (mapped to public IP #2) is accessible at `"*.external.<your cluster identifier>.mk.ms-cloud-temple.com"`.
If you publish an application with this ingress-class, you can access it directly via this domain name. See the tutorial: [Deploy your first application](./firstdeploy)

## Hubble: Network Observability at Your Fingertips

Hubble is a graphical and command-line interface for visualizing and understanding the network flows of your cluster. Based on Cilium, it provides you with a detailed map of services, dependencies, and network policies in real time.

With Hubble, you can:

- **Visualize traffic flows** between your pods and services.
- **Identify connectivity issues** and network errors.
- **Verify the enforcement of your security policies** (Network Policies).
- **Explore the dependencies** between your different applications.

### Accessing the Hubble Interface

The Hubble graphical interface is exposed on an internal URL of your cluster. Access is not possible via `kubectl` port-forwarding because users do not have sufficient rights on the `kube-system` namespace.

To access it, you must be connected to the cluster's internal network (for example, via a bastion or a VPN). The URL to use is as follows:

`http://hubble.internal.<your-cluster-identifier>.mk.ms-cloud-temple.com`

For this URL to be resolvable from your workstation, you will probably need to add an entry to your `hosts` file or to your internal DNS. You can get the internal IP address of the Hubble Ingress with the following command:

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Creating Internal DNS Zones (Private Cluster)

To strengthen security and simplify access to your services and the Kubernetes API from your internal network, it is recommended to create an internal DNS zone. This zone will allow resolving the domain names of your Ingresses and the Kubernetes API to their respective private IP addresses, avoiding transit through public networks.

**Example configuration with our "ctodev" cluster, with the assigned range** **10.20.0.0/22:**

Based on the URLs provided in the quickstart guide, you can configure your internal DNS as follows:

1. **Create the private DNS zone** on your internal DNS servers for `.<cluster identifier>.mk.ms-cloud-temple.com`

2. **Add the following type A records**:

    - **For the Kubernetes API:**
        - `. -> 10.20.0.20` (virtual IP of the API)

    - **For internal services (via the `nginx-internal` Ingress):**
        - `hubble.internal -> 10.20.1.1`
        - `argocd.internal -> 10.20.1.1`
        - `ceph.internal -> 10.20.1.1`

    - **For secured services (via the `nginx-external-secure` Ingress):**
        - `k10.external-secured -> 10.20.1.129`
        - `grafana.external-secured -> 10.20.1.129`
        - `harbor.external-secured -> 10.20.1.129`
        - `opencost.external-secured -> 10.20.1.129`
        - `opencost-mcp.external-secured -> 10.20.1.129`

This configuration ensures that traffic to the API and internal services remains confined to your private network, in accordance with security best practices.

<div class="card">
  <div class="card__header">
    <h3>Tutorial: Deploy your first application</h3>
  </div>
  <div class="card__body">
    <p>
      Follow our detailed guide to learn how to expose an application using an Ingress.
    </p>
  </div>
  <div class="card__footer">
    <a href="./firstdeploy" class="button button--primary button--block">View the tutorial &rarr;</a>
  </div>
</div>

:::warning[Going further: security in production]
This document explains the fundamental networking concepts. For a production deployment, it is crucial to apply additional security measures:

- **Use secure images**: Prefer images from your secure corporate registry such as **Harbor** rather than public images.
- **Control network flows**: Implement `NetworkPolicies` to control communications to only the necessary flows between your applications.
- **Apply governance policies**: Use tools like **Kyverno** to enforce security rules (e.g. prohibit "root" containers, require resource `requests` and `limits`, etc.).
:::
