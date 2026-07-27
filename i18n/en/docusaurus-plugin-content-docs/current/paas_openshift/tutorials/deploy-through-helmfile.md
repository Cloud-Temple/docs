---
title : Deploy via Helmfile
---

# Deploying with Helmfile

---

## Objectives

The main objective of this tutorial is to show how to deploy applications on our OpenShift PaaS using **Helmfile** by orchestrating multiple Helm charts together.

Expose the front-end service via HTTP/HTTPS.

## Known Limitations

The context for this demonstration is as follows:

- Complies with OpenShift constraints **(SCC restricted-V2)**.
- Deployment of only **unprivileged containers** (UID > 30000).
- No use of **custom CRDs**.
- No access to the platform role as **cluster-admin**.
- No cluster-level deployment (**cluster-wide installation**).
- No **namespace creation** via Helmfile (to avoid permission conflicts).

## Highlights

- Demonstration of deploying a front-end (Nginx) and a back-end (PostgreSQL) using Helmfile.

## Software Versions

- OpenShift CLI : 4.17.6  
- Helm : v3.16.3  
- Helmfile : v0.169.2  
- OpenShift : v4.15  
- PostgreSQL : v17.2.0-debian-12-r5  
- Nginx : v1.27.3  

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
   - Test application functionality.  
4. Explore advanced use cases and extensions.  

---

## Required Files

To get started, you will need our **Demo Repository**

- Retrieve it [here](https://github.com/Cloud-Temple/product-openshift-how-to/tree/main) in the `/examples/deploy-through-helmfile/` directory.

You will find three files there:

- `Helmfile.yaml`: Deployment manifest that allows Helmfile to define and orchestrate the deployment of Helm charts.  
- `nginx-values.yaml`: Specifies the configuration and behavior of Nginx.  
- `postgres-values.yaml`: Specifies the configuration and behavior of PostgreSQL.  

---

### `Helmfile.yaml`

The main Helmfile configuration file.  
It defines the repositories, Helm charts, and custom values for each application.

#### Line-by-line analysis

---

#### `helmDefaults`

```yaml
helmDefaults:
  createNamespace: false
```

- **Description** : Defines the default behavior of Helm commands executed via Helmfile.
- **Detail** :
  - `createNamespace: false` : Prevents Helm from attempting to create namespaces during deployment.  
- **Impact** :
  - Ensures that the namespace must exist before deploying the charts.  
  - Reduces errors in environments with limited permissions.  

---

#### `repositories`

```yaml
repositories:
  - name: bitnami
    url: https://charts.bitnami.com/bitnami
```

- **Description** : Defines the Helm repositories containing the required charts.  
- **Details** :  
  - `name` : Alias for the Helm repository.  
  - `url` : URL of the Bitnami repository, which contains commonly used charts compatible with OpenShift.  

---

#### `releases`

```yaml
  - name: nginx
    namespace: poc-helmfile
    chart: bitnami/nginx
    values:
      - nginx-values.yaml
```

- **Description** : Defines a Helm application named **nginx**.  
- **Details** :  
  - `name` : Name of the Helm release.  
  - `namespace` : Kubernetes namespace in which this application will be deployed.  
  - `chart` : Helm chart used, here `bitnami/nginx`, retrieved from the Bitnami repository.  
  - `values` : YAML file containing specific configurations for the deployment, here `nginx-values.yaml`.  

---

### `nginx-values.yaml`

Configuration file for the deployment of **Nginx**.  

---

### `postgres-values.yaml`

Provides the configuration for the deployment of **PostgreSQL**.

---

## Deployment Process

### 1. Install Prerequisites

Ensure that all tools mentioned in the software section are installed.  
Follow the following guides if needed:  

- [OCP CLI Guide](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
- [Helmfile Guide](https://helmfile.readthedocs.io/en/latest/)

---

### 2. Connecting to the OpenShift cluster

Authenticate to your OpenShift cluster using the following command:

```bash
oc login --server=https://api.openshift.example.com:6443 --web
```

> **Warning** :  
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

### 5. Deployment Verification

- **Verify the pods** :  

```bash
oc get pods -n poc-helmfile
```

---

### 6. Test the services

Expose the deployed services to test their accessibility and proper operation.

#### 1. Route Creation

Expose the Nginx service by configuring HTTP or HTTPS routes:

- **For HTTPS** :

```bash
oc create route edge nginx-tls --service=nginx -n poc-helmfile --port=8080
```

- **For HTTP** :

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

### 7. Verify routes and access applications

#### 1. List of available routes

Verify that the routes have been created correctly:

```bash
oc get routes -n poc-helmfile
```

Example output:

| Name         | Host/Port                                                                        | Service  | Port  | TLS Termination | Label                                  |
|-------------|----------------------------------------------------------------------------------|----------|-------|----------------|-------------------------------------------|
| nginx       | nginx-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com             | nginx    | 8080  | None          | `ct-router-type=public`                   |
| nginx-tls   | nginx-tls-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com         | nginx    | 8080  | Edge (TLS)     | `ct-router-type=public`                   |

#### 2. Access the applications

Use the URLs listed in the "Host/Port" column to access the applications. Here is an example:

- For HTTP: `http://nginx-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`
- For HTTPS: `https://nginx-tls-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`

> You should see a web server response from the deployed **Nginx front-end**.

---

## Validation Criteria

To ensure the success of this demonstration, verify the following:

1. **Both applications run without errors**.  
2. The pods use UIDs > 30000, in accordance with rootless container constraints.  
3. No custom CRDs have been deployed.  
4. The deployed services are accessible via their defined routes (verify Nginx on HTTP and HTTPS).  

---

## Conclusion

You now have a complete example of deploying front-end and back-end applications on OpenShift with Helmfile. This method offers modular and robust management of complex environments.

You are now proficient in deploying via **Helmfile** on OpenShift in a Cloud Temple-managed environment. 🚀