---
title: Welcome Guide
---
import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

## Deploying a Red Hat OpenShift Platform within Your Tenant

This guide outlines the steps to deploy a Red Hat OpenShift platform within your existing tenant environment. By following these instructions, you'll be able to leverage the container orchestration capabilities of OpenShift for managing and scaling applications efficiently.

### Prerequisites:
1. **Access to a Red Hat OpenShift Cluster**: Ensure you have administrative access to an operational Red Hat OpenShift cluster.
2. **Tenant Environment Setup**: Confirm that your tenant environment supports integration with external platforms like OpenShift.
3. **Network Connectivity**: Verify proper network connectivity between your tenant and the OpenShift cluster, including firewall rules if necessary.
4. **Authentication Mechanism**: Establish an authentication mechanism (e.g., OAuth, LDAP) to securely connect users or applications within your tenant with OpenShift.

### Steps for Deployment:

1. **Integration Configuration**:
   - Configure the integration between your tenant and Red Hat OpenShift using appropriate APIs or service mesh technologies like Istio. This involves setting up authentication endpoints, authorization policies, and network routing.
   
2. **Tenant-Specific Namespace Creation**:
   - Create a dedicated namespace within the OpenShift cluster specifically for your tenant's applications. This helps in organizing resources and enforcing isolation between different tenants' workloads.

3. **Resource Allocation**:
   - Define resource quotas (CPU, memory) for the tenant to ensure efficient utilization of cluster resources and prevent one tenant from monopolizing them.

4. **Identity Management Integration**:
   - Integrate your tenant's identity management system with OpenShift using methods like OpenID Connect or LDAP. This allows users within your tenant to access OpenShift resources seamlessly.

5. **Application Deployment**:
   - Deploy applications from your tenant into the dedicated namespace on OpenShift. Utilize tools like `oc` (OpenShift command-line interface) for managing deployments, builds, and services.

6. **Monitoring and Logging**:
   - Set up monitoring and logging solutions to keep track of application health, performance metrics, and troubleshoot issues effectively. Tools such as Prometheus and Grafana can be integrated with OpenShift for this purpose.

7. **Security Configuration**:
   - Implement security best practices like Role-Based Access Control (RBAC), network policies, and secrets management to protect your tenant's data and applications within the OpenShift environment.

8. **Testing and Validation**:
   - Thoroughly test the integration and functionality of deployed applications to ensure they meet performance, security, and compliance requirements.

### Post-Deployment Considerations:
- **Maintenance and Updates**: Establish a process for managing updates and patches in both your tenant's environment and OpenShift cluster.
- **Scalability**: Plan for scaling resources as needed based on application demands or tenant growth.
- **Disaster Recovery**: Develop strategies to handle potential failures or outages, ensuring business continuity.

By following these steps, you can successfully deploy a Red Hat OpenShift platform within your existing tenant environment, enhancing your organization's ability to manage and scale applications efficiently while maintaining robust security and compliance measures.

### Access Rights Assignment

It is essential that the [Tenant](../console/iam/concepts.md#tenant) administrator grants management rights to the OpenShift platform to the OpenShift administrator user in order for them to access it:

<img src={oshiftRights} />

### Accessing Openshift Environment within a Tenant

Following the assignment of rights, the '__Openshift__' module becomes available in the Cloud Temple console menu:

<img src={oshiftMenu_001} />

You will then see the Openshift clusters deployed within your tenant:

<img src={oshiftMenu_002} />

Click on the cluster you wish to manage, and you'll access the administration environment of that cluster:

<img src={oshiftMenu_002} />

Upon authentication, you can manage your cluster:

<img src={oshiftMenu_003} />

### Environment Resources

Here are the connection and configuration details specific to your OpenShift environment:

#### Login Details

To access various OpenShift components, ensure your tenant is whitelisted in the console (refer to Cloud Temple Documentation: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __Shiva Tenant URL__:
  [https://**your-tenant-id**.shiva.cloud-temple.com/](https://**your-tenant-id**.shiva.cloud-temple.com/)

- __OpenShift UI__:
  [https://ui-ocp01-**your-tenant-id**.paas.cloud-temple.com/](https://ui-ocp01-**your-tenant-id**.paas.cloud-temple.com/)

- __External API__:
  [https://api-ocp01-**your-tenant-id**.paas.cloud-temple.com](https://api-ocp01-**your-tenant-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__:
  [https://gitops-ocp01-**your-tenant-id**.paas.cloud-temple.com/applications](https://gitops-ocp01-**your-tenant-id**.paas.cloud-temple.com/applications)

#### Connecting to the Cluster via CLI

To connect using the command line interface (CLI), use the following command:

```bash
oc login https://api-ocp01-{your-id}.paas.cloud-temple.com/ --web
```

#### Accessing the Registry

To access the registry, log in using the following commands:

```bash
oc login https://api-ocp01-{your_id}.paas.cloud-temple.com --web
docker login -u {your_username} -p $(oc whoami -t) registry-ocp01-{your_id}.paas.cloud-temple.com
```

Next, verify and pull a Docker image:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{your_id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{your_id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configuration of Routers and Load Balancers

The platform offers flexible options for __flow routing__ and __load balancing__:

- By default, private load balancers are used for routes and ingress points.
- Domains:
  - `*.apps-priv-ocp01-{your_id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{your_id}.paas.cloud-temple.com`

Ensure your routes or ingress points are configured with the appropriate label or ingress class tags to guarantee proper routing.

Example:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### Interconnection IaaS

Network configurations are critical for securing communications with OpenShift.

- **Interconnection Network**: 100.67.0.0/28
- **Private Load Balancer VIP**: 100.67.0.3

Ensure your firewall has a dedicated interface and allows traffic between the specified networks.
