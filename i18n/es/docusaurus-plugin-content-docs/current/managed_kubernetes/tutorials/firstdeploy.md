---
title: Tutorial - Desplegar su primera aplicación
---

## Objetivos

Este tutorial le guía paso a paso en su primer despliegue en un clúster de **Managed Kubernetes**. Al final de esta guía, habrá:

- Desplegado una aplicación web sencilla.
- Expuesto esa aplicación dentro del clúster mediante un Service.
- Hecho la aplicación accesible desde Internet a través de un Ingress.

## Requisitos previos

- Ha configurado su acceso al clúster como se describe en la [guía de inicio rápido](../quickstart.md).
- Dispone de un namespace sobre el que tiene derechos de despliegue. En este tutorial, utilizaremos un namespace llamado `hello-world`.

## Paso 1: Crear un namespace

Si aún no lo ha hecho, cree un namespace para aislar su aplicación.

```bash
kubectl create namespace hello-world
```

## Paso 2: Desplegar una aplicación "Hello World"

Desplegaremos una aplicación de demostración que muestra una página web sencilla.

1. Cree un archivo llamado `deployment.yaml` con el siguiente contenido:

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

2. Aplique este manifiesto a su clúster:

    ```bash
    kubectl apply -f deployment.yaml
    ```

3. Verifique que el despliegue se ha creado y que los pods están en ejecución:

    ```bash
    kubectl get deployment -n hello-world
    # Debería ver su despliegue con 2/2 réplicas listas.
    NAME                     READY   UP-TO-DATE   AVAILABLE   AGE
    hello-world-deployment   2/2     2            2           102s

    kubectl get pods -n hello-world
    # Debería ver dos pods con el estado "Running".
    NAME                                      READY   STATUS    RESTARTS   AGE
    hello-world-deployment-669dfbd799-294zz   1/1     Running   0          2m21s
    hello-world-deployment-669dfbd799-plcbg   1/1     Running   0          2m21s
    ```

## Paso 3: Exponer la aplicación dentro del clúster (Service)

Para permitir que los diferentes componentes del clúster se comuniquen con nuestra aplicación, debemos crear un **Service**.

1. Cree un archivo llamado `service.yaml`:

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

2. Aplique el manifiesto:

    ```bash
    kubectl apply -f service.yaml
    ```

    Su aplicación ahora es accesible mediante el nombre `hello-world-service.hello-world` desde cualquier otro pod del clúster.

## Paso 4: Hacer la aplicación accesible desde Internet (Ingress)

Para exponer nuestro servicio en Internet, utilizaremos un recurso **Ingress**. La oferta de Managed Kubernetes proporciona varios `ingressClassName` preconfigurados. Utilizaremos `nginx-external` para la exposición pública.

1. Cree un archivo `ingress.yaml`. **Recuerde reemplazar `su-cluster-id`** por el identificador de su clúster (p. ej. `ctodev`).

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: hello-world-ingress
      namespace: hello-world
    spec:
      ingressClassName: nginx-external
      rules:
      - host: "hello-world.external.su-cluster-id.mk.ms-cloud-temple.com" # cámbiame
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

2. Aplique el manifiesto:

    ```bash
    kubectl apply -f ingress.yaml
    ```

## Paso 5: Verificar el acceso

Una entrada DNS comodín ya apunta todas las URLs que terminan en ".external.su-cluster-id.mk.ms-cloud-temple.com" a la IP del ingress "external".
Las aplicaciones publicadas en este sufijo DNS son por lo tanto directamente accesibles.

```bash
curl http://hello-world.external.su-cluster-id.mk.ms-cloud-temple.com
```

Debería recibir una respuesta del servidor NGINX de demostración.

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

:::warning[Para ir más lejos: seguridad en producción]
Este tutorial le ha mostrado los conceptos básicos del despliegue. Para un entorno de producción, es fundamental aplicar medidas de seguridad adicionales:

- **Utilice imágenes seguras**: Prefiera imágenes de su registro corporativo seguro como **Harbor** en lugar de imágenes públicas.
- **Controle los flujos de red**: Implemente `NetworkPolicies` para restringir las comunicaciones a los únicos flujos necesarios entre sus aplicaciones.
- **Aplique políticas de gobernanza**: Utilice herramientas como **Kyverno** para imponer reglas de seguridad (p. ej. prohibir contenedores "root", exigir `requests` y `limits` de recursos, etc.).
:::

## Limpieza

Para eliminar todos los recursos que creó durante este tutorial, puede simplemente eliminar el namespace:

```bash
kubectl delete namespace hello-world
```

¡Enhorabuena, ha desplegado y expuesto su primera aplicación en Managed Kubernetes!
