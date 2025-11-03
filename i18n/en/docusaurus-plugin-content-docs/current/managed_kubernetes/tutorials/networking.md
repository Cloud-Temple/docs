---
title: The Network in Managed Kubernetes
---

import cillium from './images/cillium.png'

---

## Objectives

This tutorial aims to familiarize you with the fundamental networking concepts of the **Managed Kubernetes** offering. By the end of this guide, you will be able to:

- Understand your cluster's IP addressing scheme (nodes, pods, services).
- Know the different mechanisms for exposing your applications (Ingress, LoadBalancer).
- Visualize network flows and security policies using Hubble.

We will use as an **example** a cluster named **"ctodev"**, with an assigned range of **10.20.0.0/22**.

*Note: This private IP range X.Y.Z.0/22 (RFC 1918) is defined with the client during cluster setup and cannot be modified afterward.*

## IP Addressing Plan

Your Managed Kubernetes cluster is provisioned with a multi-zone VLAN using an IPv4 address range of /22.

The **example** range 10.20.0.0/22 is logically divided into sub-ranges.

    - 10.20.0.0/24 is assigned to cluster Nodes:

        - 10.20.0.10 : ctodev-gitrunner (the machine that manages the infrastructure)

        - 10.20.0.20 : Virtual IP (load-balanced) for the Kubernetes API service
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

    - Internal MetalLB: 10.20.1.1 – 10.20.1.127

      - 10.20.1.1 : ingress `nginx-internal`
    
    - External MetalLB: 10.20.1.128 – 10.20.1.254

      - 10.20.1.128 : ingress `nginx-external`
      - 10.20.1.129 : ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16 

    - Services: 10.95.0.0/12 

*Note: The Pods and Services ranges are defined with the client during cluster setup and cannot be modified afterward.*

## Using MetalLB

MetalLB is the component that enables exposing layer 3 (non-web / L7) services directly on an IP address—either internal or external—using the `LoadBalancer` service type. It serves as an alternative to Ingress for non-HTTP applications or specific use cases.

To use MetalLB, simply create a `LoadBalancer` type service. MetalLB will automatically assign an IP address from the pre-configured pools. The distinction between `internal` and `external` pools is a security measure to ensure that an application intended for internal use is not accidentally exposed on a public network.

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

After applying this manifest, your service will be assigned an IP address within the range `10.20.1.1 – 10.20.1.127` and will be accessible from your internal network connected to the cluster.

**Example: Exposing a service on the external network**

To request an IP address from the external pool (`10.20.1.128 – 10.20.1.254`), you must add the label `lb-type: external` to your service.

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

> **Important**: This range remains within a **private address space**. For **public exposure**, you must create a **NAT (DNAT) rule** on your infrastructure's firewall to redirect traffic from one of your public external IPs to the private IP assigned by MetalLB.

## Public IPs

Your Managed Kubernetes cluster was initially delivered with 2 public IPv4 addresses.

The first IP is used on port 6443 for the Kubernetes API (in our example: ctodev.mk.ms-cloud-temple.com:6443).

This same IP is also NATed to the ingress controller *"nginx-external-secured"* on port 443. This enables access to the various consoles provided to you (see the quickstart guide). Access to this public IP is **filtered** using an allowed IP list.

---
The second public IP is NATed to the ingress controller *"nginx-external"* on ports 80 and 443.

Applications exposed via the ingress class *"nginx-external"* will therefore be directly accessible from the Internet using this IP.

*If you wish to modify firewall rules (add/remove allowed IPs), you must submit a support request.*

*It is possible to add additional public IPs if desired.*

## DNS

For the internal DNS (CoreDNS), the cluster will have the following settings:

- Cluster name: ` <cluster identifier>`
- Internal domain: `<cluster identifier>-cluster.local` (in our example: ctodev-cluster.local)

This internal domain is essential for inter-service communication within the cluster. It allows an application to contact another application simply by using its Kubernetes service name, without needing to know its internal IP address.

For example, a service named `api-backend` in the `production` namespace will automatically be resolvable at the address `api-backend.production.svc.ctodev-cluster.local`.

---

The public DNS zone used for Managed Kubernetes clusters is `.mk.ms-cloud-temple.com`.

The ingress *"nginx-external"* (mapped to public IP #2) is accessible at `"*.external.<your cluster identifier>.mk.ms-cloud-temple.com"`.  
If you deploy an application using this ingress-class, you can access it directly via this domain name. See the tutorial: [Deploy Your First Application](./firstdeploy)

## Hubble: Network Observability at Your Fingertips

Hubble is a graphical and command-line interface to visualize and understand network traffic flows within your cluster. Built on Cilium, it provides real-time, detailed mapping of services, dependencies, and network policies.

With Hubble, you can:
- **Visualize traffic flows** between your pods and services.
- **Identify connectivity issues** and network errors.
- **Verify enforcement of your security policies** (Network Policies).
- **Explore dependencies** between your various applications.

### Accessing the Hubble Interface

The Hubble graphical interface is exposed via an internal URL of your cluster. Access is not possible through `kubectl port-forwarding` because users do not have sufficient permissions on the `kube-system` namespace.

To access it, you must be connected to the cluster's internal network (for example, via a bastion host or a VPN). Use the following URL:

`http://hubble.internal.<your-cluster-identifier>.mk.ms-cloud-temple.com`

To make this URL resolvable from your workstation, you may need to add an entry to your `hosts` file or to your internal DNS. You can obtain the internal IP address of the Hubble Ingress using the following command:

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Creating Internal DNS Zones (Private Cluster)

To enhance security and simplify access to your services and the Kubernetes API from your internal network, it is recommended to set up an internal DNS zone. This zone will resolve domain names for your Ingresses and the Kubernetes API to their respective private IP addresses, ensuring traffic stays within your private network and avoids public networks.

**Example configuration for our cluster "ctodev", which has been assigned the range `10.20.0.0/22`:**

Based on the URLs provided in the quick start guide, you can configure your internal DNS as follows:

1.  **Create a private DNS zone** on your internal DNS servers for `. <cluster identifier>.mk.ms-cloud-temple.com`

2.  **Add the following A records:**

    -   **For the Kubernetes API:**
        -   `. -> 10.20.0.20` (API virtual IP)

    -   **For internal services (via the `nginx-internal` Ingress):**
        -   `hubble.internal -> 10.20.1.1`
        -   `argocd.internal -> 10.20.1.1`
        -   `ceph.internal -> 10.20.1.1`

    -   **For secured services (via the `nginx-external-secure` Ingress):**
        -   `k10.external-secured -> 10.20.1.129`
        -   `grafana.external-secured -> 10.20.1.129`
        -   `harbor.external-secured -> 10.20.1.129`
        -   `kubecost.external-secured -> 10.20.1.129`

This configuration ensures that traffic to the API and internal services remains confined to your private network, in line with security best practices.

<div class="card">
  <div class="card__header">
    <h3>Tutorial: Deploy Your First Application</h3>
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

:::warning Going Further: Security in Production
This document covers fundamental networking concepts. For production deployments, it is essential to implement additional security measures:

-   **Use secure images**: Prefer images from your enterprise-secured registry such as **Harbor**, rather than public images.
-   **Control network traffic**: Implement `NetworkPolicies` to restrict communications to only necessary flows between your applications.
-   **Enforce governance policies**: Use tools like **Kyverno** to enforce security rules (e.g., prohibit root containers, require resource `requests` and `limits`, etc.).
:::