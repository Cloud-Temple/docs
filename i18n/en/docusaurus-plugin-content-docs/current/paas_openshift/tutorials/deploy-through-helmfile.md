---
title : Deploying through HelmFile
---

# Deploy using Helmfile

---

## Objectives

The main objective of this tutorial is to show how to deploy applications on our OpenShift PaaS using **Helmfile** by orchestrating multiple Helm charts together.

Expose the front-end service via HTTP/HTTPS.

## Known Limitations

The context of this demonstration is the following:

- Adheres to OpenShift constraints **(SCC restricted-V2)**.
- Deployment of **unprivileged containers only** (UID > 30000).
- No use of **custom CRDs**.
- No access to the platform role as **cluster-admin**.
- No cluster-wide deployment (**installation cluster-wide**).
- No **namespace creation** via Helmfile (to avoid permission conflicts).

## Highlights

- Demonstration of deploying a front-end (Nginx) and a back-end (PostgreSQL) using Helmfile.

## Software Versions

- OpenShift CLI: 4.17.6  
- Helm: v3.16.3  
- Helmfile: v0.169.2  
- OpenShift: v4.15  
- PostgreSQL: v17.2.0-debian-12-r5  
- Nginx: v1.27.3  

---

## Prerequisites

Before starting this demonstration, ensure you have the following tools and resources:

1. **CLI Tools**  
   - **OpenShift CLI (`oc`)**: [Documentation](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
   - **Helm**: [Documentation](https://helm.sh/docs/)  
   - **Helmfile**: [Documentation](https://helmfile.readthedocs.io/en/latest/)

2. **OpenShift Environment**

   - A functional OpenShift cluster managed by Cloud Temple.  

3. **Access and Permissions**  
   - Client admin role to create projects and deploy resources.
  
---

## Demonstration Plan

### Overview of Steps

1. Prepare the environment and tools.  
2. Deploy applications using Helmfile:  
   - **nginx**: A simple web server.  
   - **PostgreSQL**: A database server.  
3. Verify the deployment:  
   - Confirm that rootless configurations are applied.  
   - Test the functionality of the applications.  
4. Explore advanced use cases and extensions.  

---

## Required Files

To get started, you'll need our **Demo Repository**

- Get it [here](https://github.com/Cloud-Temple/product-openshift-how-to/tree/main) in the directory `/examples/deploy-through-helmfile/`.

It contains three files:

- `Helmfile.yaml`: Deployment manifest allowing Helmfile to define and orchestrate the deployment of Helm charts.  
- `nginx-values.yaml`: Specifies the configuration and behavior of Nginx.  
- `postgres-values.yaml`: Specifies the configuration and behavior of PostgreSQL.  

---

### `Helmfile.yaml`

The main Helmfile configuration file.  
It defines the repositories, Helm charts, and custom values for each application.

#### Line-by-line Analysis

---

#### `helmDefaults`

```yaml
helmDefaults:
  createNamespace: false
```

- **Description**: Defines the default behavior of Helm commands executed via Helmfile.
- **Detail**:
  - `createNamespace: false`: Prevents Helm from trying to create namespaces during the deployment.  
- **Impact**:
  - Ensures that the namespace must exist before launching the deployment of the charts.  
  - Reduces errors in environments with limited permissions.  

---

#### `repositories`

```yaml
repositories:
  - name: bitnami
    url: https://charts.bitnami.com/bitnami
```

- **Description**: Defines the Helm repositories containing the necessary charts.  
- **Detail**:  
  - `name`: Alias of the Helm repository.  
  - `url`: URL of the Bitnami repository, which contains commonly used charts compatible with OpenShift.  

---

#### `releases`

```yaml
  - name: nginx
    namespace: poc-helmfile
    chart: bitnami/nginx
    values:
      - nginx-values.yaml
```

- **Description**: Defines a Helm release named **nginx**.  
- **Detail**:  
  - `name`: Name of the Helm release.  
  - `namespace`: Kubernetes namespace in which this application will be deployed.  
  - `chart`: Helm chart used, here `bitnami/nginx`, fetched from the Bitnami repository.  
  - `values`: YAML file containing specific configurations for the deployment, here `nginx-values.yaml`.  

---

### `nginx-values.yaml`

Configuration file for the deployment of **Nginx**.  

---

### `postgres-values.yaml`

Provides the configuration for the deployment of **PostgreSQL**.

---

## Deployment Procedure

### 1. Install the prerequisites

Ensure that all tools mentioned in the software section are installed.  
Follow the following guides if needed:  

- [OCP CLI Guide](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
- [Helmfile Guide](https://helmfile.readthedocs.io/en/latest/)

---

### 2. Log in to the OpenShift cluster

Authenticate to your OpenShift cluster with the following command:

```bash
oc login --server=https://api.openshift.example.com:6443 --web
```

> **Caution**:  
> Replace `--server=url` with the URL of your Cloud Temple PaaS instance.

---

### 3. Create a dedicated namespace

This namespace will isolate the demonstration resources:

```bash
oc new-project poc-helmfile
```

---

### 4. Deploy applications with Helmfile

Use the following command:

```bash
helmfile sync
```

---

### 5. Verify the deployment

- **Check the pods**:  

```bash
oc get pods -n poc-helmfile
```

---

### 6. Test the services

Expose the deployed services to test their accessibility and functionality.

#### 1. Creating routes

Expose the Nginx service by configuring HTTP or HTTPS routes:

- **For HTTPS**:

```bash
oc create route edge nginx-tls --service=nginx -n poc-helmfile --port=8080
```

- **For HTTP**:

```bash
oc create route edge nginx --service=nginx -n poc-helmfile --port=8080
```

#### 2. Add a label for public exposure

Add a specific label to the router so that your service is publicly accessible:

- For the HTTPS route:

```bash
oc label route nginx-tls ct-router-type=public -n poc-helmfile
```

- For the HTTP route:

```bash
oc label route nginx ct-router-type=public -n poc-helmfile
```

These steps ensure that your routes are exposed correctly.

---

### 7. Check the routes and access the applications

#### 1. List available routes

Verify that the routes have been correctly created:

```bash
oc get routes -n poc-helmfile
```

Sample output:

| Name        | Host/Port                                                              | Service | Port  | TLS Resolution | Label                                  |
|-------------|------------------------------------------------------------------------|----------|-------|----------------|----------------------------------------|
| nginx       | nginx-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com | nginx    | 8080  | None           | `ct-router-type=public`                |
| nginx-tls   | nginx-tls-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com | nginx    | 8080  | Edge (TLS)    | `ct-router-type=public`                |

#### 2. Access the applications

Use the URLs listed in the `Host/Port` column to access the applications. Here is an example:

- For HTTP: `http://nginx-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`
- For HTTPS: `https://nginx-tls-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`

> You should see a web server response from the **Nginx front-end** deployed.

---

## Validation Criteria

To ensure the success of this demonstration, verify the following:

1. **Both applications are running without errors**.  
2. The pods use UID > 30000, in accordance with rootless container constraints.  
3. No custom CRD has been deployed.  
4. The deployed services are accessible via their defined routes (check Nginx on HTTP and HTTPS).  

---

## Conclusion

You now have a complete example of deploying front-end and back-end applications on OpenShift with Helmfile. This method offers modular and robust management of complex environments.

You now master deployment via **Helmfile** on OpenShift in an environment managed by Cloud Temple. 🚀