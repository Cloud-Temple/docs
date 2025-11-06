---
title: Tutoriales
---

Estos tutoriales le ayudan a ponerse al día y gestionar su clúster **Managed Kubernetes** de Cloud Temple.

## 1. Deploy your first application (Hello World)

This first tutorial guides you through deploying, exposing, and accessing a simple application on your cluster.

### Requis

1.  **`kubectl` instalado**: Asegúrese de que la herramienta de línea de comandos de Kubernetes, `kubectl`, esté instalada en su estación de trabajo. Si no es así, siga las [instrucciones de instalación oficiales](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/).
2.  **Archivo `kubeconfig`**: El equipo Cloud Temple le ha proporcionado un archivo `kubeconfig` tras el despliegue de su clúster. Colóquelo en la ubicación predeterminada (`~/.kube/config`) o utilice la variable de entorno `KUBECONFIG` para especificarlo.

### Paso 1: Verificar la conexión con el clúster

Para comenzar, asegúrese de que `kubectl` esté correctamente configurado y pueda comunicarse con su clúster. Ejecute el siguiente comando:

```bash
kubectl get nodes
```

Debería ver la lista de sus nodos (workers) con el estado `Ready`.

```
NAME         STATUS   ROLES    AGE   VERSION
worker-node1   Ready    <none>   ...   ...
worker-node2   Ready    <none>   ...   ...
worker-node3   Ready    <none>   ...   ...
```

### Paso 2: Crear un Despliegue

Vamos a desplegar una aplicación web sencilla que muestra una página de inicio.

1.  Crea un archivo llamado `hello-deployment.yaml` con el siguiente contenido:

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: hello-world
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: hello
      template:
        metadata:
          labels:
            app: hello
        spec:
          containers:
          - name: hello-app
            image: nginxdemos/hello
            ports:
            - containerPort: 80
    ```

2.  Aplica este manifiesto para crear el Despliegue:

    ```bash
    kubectl apply -f hello-deployment.yaml
    ```

3.  Verifica que los pods están en ejecución:

    ```bash
    kubectl get pods -l app=hello
    ```
    Deberías ver dos pods con el estado `Running`.

### Paso 3: Exponer el Despliegue mediante un Servicio

Para permitir la comunicación con nuestros pods dentro del clúster, creamos un Servicio.

1.  Cree un archivo llamado `hello-service.yaml`:

    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: hello-service
    spec:
      type: ClusterIP
      selector:
        app: hello
      ports:
        - protocol: TCP
          port: 80
          targetPort: 80
    ```

2.  Aplicar el manifiesto:

    ```bash
    kubectl apply -f hello-service.yaml
    ```
    Este servicio ahora expone nuestra aplicación en un puerto interno dentro del clúster.

### Paso 4: Exponer el servicio desde fuera con un Ingress

Para hacer que nuestra aplicación sea accesible desde Internet, utilizaremos un objeto Ingress. Utilizaremos la clase de ingress `nginx-external`, que se proporciona por defecto.

1.  Cree un archivo `hello-ingress.yaml`. **No olvide reemplazar `su-dominio.ejemplo.com`** por un nombre de dominio que apunte a la dirección IP pública de su ingress `nginx-external`.

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: hello-ingress
      annotations:
        # Especifica que queremos un certificado TLS gestionado por Cert-Manager
        cert-manager.io/cluster-issuer: "letsencrypt-prod"
    spec:
      ingressClassName: nginx-external
      rules:
      - host: "su-dominio.ejemplo.com"
        http:
          paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: hello-service
                port:
                  number: 80
      tls:
      - hosts:
        - "su-dominio.ejemplo.com"
        secretName: hello-tls-secret # Cert-Manager creará este secreto con el certificado
    ```

2.  Aplicar el manifiesto:

    ```bash
    kubectl apply -f hello-ingress.yaml
    ```

### Paso 5: Acceder a su aplicación

Espere unos instantes mientras Cert-Manager obtiene el certificado TLS de Let's Encrypt. Puede seguir el estado con el siguiente comando:

```bash
kubectl describe certificate hello-tls-secret
```

Una vez que el certificado esté listo (aparezca el evento `Certificate issued successfully`), abra su navegador y acceda a `https://su-dominio.example.com`.

¡Felicidades! Ha desplegado y expuesto su primera aplicación en Managed Kubernetes Cloud Temple.