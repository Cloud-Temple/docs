---
title: Usar ArgoCD para sus despliegues GitOps
---

import argocdguestbook from './images/argocdguestbook.png'

## Objetivos

Este tutorial le explica cómo utilizar **ArgoCD**, la herramienta de implementación continua GitOps integrada en su clúster **Managed Kubernetes**. Al final de esta guía, sabrá:
- Qué es el enfoque GitOps.
- Cómo acceder a la interfaz de ArgoCD.
- Cómo implementar una aplicación utilizando ArgoCD para sincronizar un repositorio Git.

## El principio de GitOps con ArgoCD

El **GitOps** es una práctica que consiste en utilizar un repositorio Git como única fuente de verdad para declarar el estado deseado de su infraestructura y sus aplicaciones.

**ArgoCD** es la herramienta que implementa este principio. Monitorea continuamente un repositorio Git y compara el estado definido allí (mediante manifiestos de Kubernetes) con el estado real de su clúster. Si detecta una diferencia, aplica automáticamente los cambios para que el clúster coincida con lo declarado en Git.

Las ventajas son numerosas:
- **Despliegues fiables y reproducibles.**
- **Rastreabilidad completa** de todos los cambios a través del historial Git.
- **Recuperación rápida** tras un incidente al volver a un commit anterior.
- **Seguridad mejorada** al limitar los accesos directos al clúster.

## Acceder a la interfaz de ArgoCD

La interfaz web de ArgoCD se expone en una URL interna de su clúster. Para acceder a ella, debe estar conectado a la red interna del clúster (por ejemplo, a través de un bastión o una VPN).

La URL a utilizar es la siguiente, reemplazando `<su-identificador-de-clúster>`:

`http://argocd.internal.<su-identificador-de-clúster>.mk.ms-cloud-temple.com`

Puede obtener la dirección IP interna del Ingress de ArgoCD con el siguiente comando:
```bash
kubectl get ingress argocd-server -n argocd
```

:::info
La contraseña para la cuenta `admin` se le proporciona a usted por parte del equipo de Cloud Temple al entregarle su clúster.
:::

## Deploy an application with ArgoCD

We will now deploy a test application using the GitOps approach.

### 1. El repositorio Git

ArgoCD necesita un repositorio Git que contenga los manifiestos Kubernetes de la aplicación que se desea desplegar. Para este tutorial, utilizaremos el repositorio de ejemplos de ArgoCD: `https://github.com/argoproj/argocd-example-apps`. Desplegaremos la aplicación `guestbook`, que se encuentra en este repositorio.

### 2. Prepare the destination namespace

To deploy the application in a namespace managed by Capsule, we must first create the namespace and apply the appropriate tenant label.

Run the following commands:

```bash
```

# Crea el namespace
kubectl create namespace guestbook

# Apply the label to associate it with the "default" tenant of Capsule (if needed, as the namespace has likely already been associated with your tenant during its creation)
kubectl label namespace guestbook capsule.clastix.io/tenant=default

### 3. Crear la aplicación en ArgoCD

Ahora que el namespace está listo, podemos declarar la aplicación en ArgoCD.

1.  Cree un archivo llamado `app-guestbook.yaml` con el siguiente contenido:

    ```yaml
    apiVersion: argoproj.io/v1alpha1
    kind: Application
    metadata:
      name: guestbook
      namespace: argocd
    spec:
      project: default
      source:
        repoURL: https://github.com/argoproj/argocd-example-apps.git
        targetRevision: HEAD
        path: guestbook
      destination:
        server: https://kubernetes.default.svc
        namespace: guestbook
      syncPolicy:
        automated:
          prune: true
          selfHeal: true
    ```
    Este manifiesto le pide a ArgoCD que:
    - Cree una aplicación llamada `guestbook`.
    - Supervise el repositorio `argocd-example-apps`.
    - Se enfoque en el directorio `guestbook` de este repositorio.
    - Despliegue los manifiestos encontrados en el namespace `guestbook` del clúster local.
    - Mantenga la sincronización de forma automática (`automated`).

2.  Tiene dos opciones para crear la aplicación en ArgoCD:

    **Opción A: Mediante `kubectl` (Enfoque GitOps)**

    Aplicar este manifiesto directamente en su clúster. Este es el método recomendado ya que sigue el principio GitOps de gestión declarativa.
    ```bash
    kubectl apply -f app-guestbook.yaml
    ```

    **Opción B: Mediante la interfaz web de ArgoCD**

    También puede crear la aplicación directamente desde la interfaz gráfica:
    - En la UI de ArgoCD, haga clic en **"+ NUEVA APP"**.
    - En la parte superior derecha de la pantalla de creación, haga clic en **"EDITAR COMO YAML"**.
    - Pegue el contenido de su archivo `app-guestbook.yaml` en el editor.
    - Haga clic en **"CREAR"**.

### 4. Verificar la sincronización

Tan pronto como apliques el manifiesto, ArgoCD detecta esta nueva recurso `Application` y comienza su trabajo.

1.  **A través de la interfaz web:**
    - Inicia sesión en la interfaz de ArgoCD.
    - Deberías ver una nueva tarjeta para la aplicación `guestbook`.
    - Después de unos instantes, su estado debería pasar a `Healthy` y `Synced`.
    - Al hacer clic en la tarjeta, puedes visualizar todas las recursos de Kubernetes (Deployment, Service, etc.) que han sido creados.

<img src={argocdguestbook} />

2.  **A través de la línea de comandos:**
    - Verifica que el namespace `guestbook` ha sido creado:
      ```bash
      kubectl get ns guestbook
      ```
    - Verifica que los recursos de la aplicación están correctamente desplegados en este namespace:
      ```bash
      kubectl get all -n guestbook
      NAME                                READY   STATUS    RESTARTS   AGE
      pod/guestbook-ui-85db984648-br6r2   1/1     Running   0          19m

      NAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
      service/guestbook-ui   ClusterIP   10.111.160.90   <none>        80/TCP    19m

      NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
      deployment.apps/guestbook-ui   1/1     1            1           19m

      NAME                                      DESIRED   CURRENT   READY   AGE
      replicaset.apps/guestbook-ui-85db984648   1         1         1       19m
      ```

### 5. The GitOps cycle

Now, if you modify a manifest in the Git repository, ArgoCD will detect the change and automatically update the application in the cluster. That's the magic of GitOps!

## Limpieza

Para eliminar la aplicación y todos los recursos asociados, simplemente puede eliminar el recurso `Application` de ArgoCD.

1.  **A través de la interfaz web:**
    - En la interfaz de ArgoCD, busque la aplicación `guestbook`.
    - Haga clic en los tres puntos (...) para abrir el menú y seleccione **"Delete"**.
    - Marque la opción **"Foreground"** para asegurarse de que todos los recursos gestionados (pods, servicios, etc.) también se eliminen de forma cascada.
2.  **A través de `kubectl`:**
    - Elimine el archivo `app-guestbook.yaml` que creó:
      ```bash
      kubectl delete -f app-guestbook.yaml
      ```

ArgoCD ahora eliminará todos los componentes de la aplicación `guestbook`. Una vez finalizada la sincronización de eliminación, el namespace `guestbook` estará vacío. Puede eliminarlo con el siguiente comando:

```bash
kubectl delete namespace guestbook
```

:::info Para ir más lejos: gestión de secretos
Este tutorial utiliza un repositorio público sin datos sensibles. Para sus aplicaciones en producción, es fundamental no almacenar nunca secretos (contraseñas, claves de API) en texto claro en su repositorio Git. Soluciones como **Sealed Secrets** o **HashiCorp Vault** se integran con ArgoCD para gestionar sus secretos de forma segura. Un tutorial futuro detallará esta aproximación.
:::

## Conclusión

Ha desplegado su primera aplicación con ArgoCD siguiendo los principios de GitOps. Esta potente metodología le permite gestionar sus despliegues de forma declarativa, fiable y segura. Le animamos a adoptarla para todas sus aplicaciones en Kubernetes administrado.