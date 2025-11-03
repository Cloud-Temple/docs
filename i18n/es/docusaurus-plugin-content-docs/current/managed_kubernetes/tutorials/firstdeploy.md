---
title: Tutorial - Desplegar su primera aplicación
---

## Objetivos

Este tutorial te guiará paso a paso para realizar tu primer despliegue en un cluster **Kubernetes gestionado**. Al final de esta guía, habrás:
- Desplegado una aplicación web sencilla.
- Expuesto esta aplicación dentro del clúster mediante un Servicio.
- Hacido que la aplicación sea accesible desde Internet a través de un Ingress.

## Requis

- Ha configurado su acceso al clúster según se describe en la [guía de inicio rápido](../quickstart.md).
- Cuenta con un espacio de nombres (namespace) en el que tiene permisos de despliegue. En este tutorial, utilizaremos un espacio de nombres llamado `hello-world`.

## Paso 1: Crear un namespace

Si aún no lo ha hecho, cree un namespace para aislar su aplicación.

```bash
kubectl create namespace hello-world
```

## Paso 2: Desplegar una aplicación "Hola Mundo"

Vamos a desplegar una aplicación de demostración que muestra una página web sencilla.

1.  Crea un archivo llamado `deployment.yaml` con el siguiente contenido:

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: hello-world-deployment
      namespace: hello-world
      labels:
        app: hello-world
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: hello-world
      template:
        metadata:
          labels:
            app: hello-world
        spec:
          containers:
          - name: hello-world
            image: nginxdemos/hello:plain-text
            ports:
            - containerPort: 80
    ```

2.  Aplica este manifiesto a tu clúster:

    ```bash
    kubectl apply -f deployment.yaml
    ```

3.  Verifica que el despliegue se ha creado y que los pods están en ejecución:

    ```bash
    kubectl get deployment -n hello-world
    # Deberías ver tu despliegue con 2/2 réplicas listas.
    NAME                     READY   UP-TO-DATE   AVAILABLE   AGE
    hello-world-deployment   2/2     2            2           102s

    kubectl get pods -n hello-world
    # Deberías ver dos pods con el estado "Running".
    NAME                                      READY   STATUS    RESTARTS   AGE
    hello-world-deployment-669dfbd799-294zz   1/1     Running   0          2m21s
    hello-world-deployment-669dfbd799-plcbg   1/1     Running   0          2m21s
    ```

## Paso 3: Exponer la aplicación en el clúster (Service)

Para permitir que los diferentes componentes del clúster se comuniquen con nuestra aplicación, debemos crear un **Service**.

1.  Cree un archivo llamado `service.yaml`:

    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: hello-world-service
      namespace: hello-world
    spec:
      selector:
        app: hello-world
      ports:
        - protocol: TCP
          port: 80
          targetPort: 80
      type: ClusterIP
    ```

2.  Aplicar el manifiesto:

    ```bash
    kubectl apply -f service.yaml
    ```
    Su aplicación ahora es accesible mediante el nombre `hello-world-service.hello-world` desde cualquier otro pod del clúster.

## Paso 4: Hacer que la aplicación sea accesible desde Internet (Ingress)

Para exponer nuestro servicio en Internet, utilizaremos un recurso **Ingress**. La oferta de Kubernetes gestionado proporciona varios `ingressClassName` preconfigurados. Usaremos `nginx-external` para una exposición pública.

1.  Cree un archivo `ingress.yaml`. **Recuerde reemplazar `votre-cluster-id`** por el identificador de su clúster (por ejemplo: `ctodev`).

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: hello-world-ingress
      namespace: hello-world
    spec:
      ingressClassName: nginx-external
      rules:
      - host: "hello-world.external.votre-cluster-id.mk.ms-cloud-temple.com" # cámbiame
        http:
          paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: hello-world-service
                port:
                  number: 80
    ```

2.  Aplicar el manifiesto:

    ```bash
    kubectl apply -f ingress.yaml
    ```

## Paso 5: Verificar el acceso

Una entrada DNS "*" ya está redirigiendo todas las URLs que terminan con ".external.votre-cluster-id.mk.ms-cloud-temple.com" a la IP del ingress "external".  
Por lo tanto, las aplicaciones publicadas bajo este sufijo DNS son directamente accesibles.

```bash
curl http://hello-world.external.votre-cluster-id.mk.ms-cloud-temple.com
```

Deberías recibir una respuesta del servidor NGINX de demostración.

```bash
StatusCode        : 200
StatusDescription : OK
Content           : Server address: 10.247.1.223:80
                    Server name: hello-world-deployment-669dfbd799-plcbg
                    Date: 29/Oct/2025:15:40:04 +0000
                    URI: /
                    Request ID: 2df985e0630c3a123b5cde23b687a033

RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Content-Length: 170
                    Cache-Control: no-cache
                    Content-Type: text/plain
                    Date: Wed, 29 Oct 2025 15:40:04 GMT
                    Expires: Wed, 29 Oct 2025 15:40:03 GMT
                    Server: ng...
```
:::warning Para ir más lejos: seguridad en producción
Este tutorial te ha mostrado los fundamentos del despliegue. Para un entorno de producción, es crucial aplicar medidas de seguridad adicionales:

-   **Utiliza imágenes seguras**: Prioriza imágenes procedentes de tu registro empresarial seguro, como **Harbor**, en lugar de imágenes públicas.
-   **Controla los flujos de red**: Implementa `NetworkPolicies` para restringir las comunicaciones a solo los flujos necesarios entre tus aplicaciones.
-   **Aplica políticas de gobernanza**: Usa herramientas como **Kyverno** para imponer reglas de seguridad (por ejemplo: prohibir contenedores con privilegios "root", exigir `requests` y `limits` de recursos, etc.).
:::

## Limpieza

Para eliminar todas las recursos que ha creado durante este tutorial, puede simplemente eliminar el namespace:

```bash
kubectl delete namespace hello-world
```

¡Felicidades! Ha desplegado y expuesto su primera aplicación en Kubernetes administrado.