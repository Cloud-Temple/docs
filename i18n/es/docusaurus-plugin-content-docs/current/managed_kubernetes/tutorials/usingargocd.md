---
title: Utilizar ArgoCD para sus despliegues GitOps
---

import argocdguestbook from '@site/docs/managed_kubernetes/tutorials/images/argocdguestbook.png'

## Objetivos

Este tutorial le explica cómo utilizar **ArgoCD**, la herramienta de despliegue continuo GitOps integrada en su clúster **Managed Kubernetes**. Al finalizar esta guía, sabrá:

- Qué es el enfoque GitOps.
- Cómo acceder a la interfaz de ArgoCD.
- Cómo desplegar una aplicación utilizando ArgoCD para sincronizar un repositorio Git.

## El principio de GitOps con ArgoCD

**GitOps** es una práctica que consiste en utilizar un repositorio Git como única fuente de verdad para declarar el estado deseado de su infraestructura y sus aplicaciones.

**ArgoCD** es la herramienta que implementa este principio. Supervisa continuamente un repositorio Git y compara el estado definido en él (mediante manifiestos de Kubernetes) con el estado real de su clúster. Si detecta una diferencia, aplica automáticamente los cambios para que el clúster coincida con lo declarado en Git.

Las ventajas son numerosas:

- **Despliegues fiables y reproducibles.**
- **Trazabilidad completa** de todos los cambios a través del historial de Git.
- **Recuperación rápida** tras un incidente, volviendo a un commit anterior.
- **Seguridad mejorada** al limitar los accesos directos al clúster.

## Acceder a la interfaz de ArgoCD

La interfaz web de ArgoCD está expuesta en una URL interna de su clúster. Para acceder a ella, debe estar conectado a la red interna del clúster (por ejemplo, a través de un bastión o una VPN).

La URL a utilizar es la siguiente, reemplazando `<votre-identifiant-de-cluster>` :

`http://argocd.internal.<votre-identifiant-de-cluster>.mk.ms-cloud-temple.com`

Puede obtener la dirección IP interna del Ingress de ArgoCD con el siguiente comando :

```bash
kubectl get ingress argocd-server -n argocd
```

:::info
La contraseña para la cuenta `admin` se la proporcionan los equipos de Cloud Temple durante la entrega de su clúster.
:::

## Desplegar una aplicación con ArgoCD

Ahora vamos a desplegar una aplicación de prueba utilizando el enfoque GitOps.

### 1. El repositorio Git

ArgoCD necesita un repositorio Git que contenga los manifiestos de Kubernetes de la aplicación a desplegar. Para este tutorial, utilizaremos el repositorio de ejemplos de ArgoCD: `https://github.com/argoproj/argocd-example-apps`. Desplegaremos la aplicación `guestbook` que se encuentra en este repositorio.

### 2. Preparar el espacio de nombres de destino

Para que la aplicación pueda desplegarse en un namespace gestionado por Capsule, primero debemos crear este namespace y aplicar la etiqueta de tenant correspondiente.

Ejecute los siguientes comandos:

```bash
# Crée le namespace
kubectl create namespace guestbook

# Applique le label pour l'associer au tenant "default" de Capsule (si besoin, car le namespace a surement déjà été associé avec votre tenant lors de sa création)
kubectl label namespace guestbook capsule.clastix.io/tenant=default
```

### 3. Crear la aplicación en ArgoCD

Una vez que el namespace está listo, podemos declarar la aplicación en ArgoCD.

1. Cree un archivo llamado `app-guestbook.yaml` con el siguiente contenido :

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

    Este manifiesto le indica a ArgoCD que :
    - Cree una aplicación llamada `guestbook`.
    - Supervise el repositorio `argocd-example-apps`.
    - Se centre en la carpeta `guestbook` de este repositorio.
    - Despliegue los manifiestos encontrados en el namespace `guestbook` del clúster local.
    - Mantenga la sincronización automáticamente (`automated`).

2. Tiene dos opciones para crear la aplicación en ArgoCD :

    **Opción A : A través de `kubectl` (Enfoque GitOps)**

    Aplique este manifiesto directamente a su clúster. Este es el método recomendado porque sigue el principio GitOps de gestión declarativa.

    ```bash
    kubectl apply -f app-guestbook.yaml
    ```

    **Opción B : A través de la interfaz web de ArgoCD**

    También puede crear la aplicación directamente desde la interfaz gráfica :
    - En la interfaz de ArgoCD, haga clic en **"+ NEW APP"**.
    - En la esquina superior derecha de la pantalla de creación, haga clic en **"EDIT AS YAML"**.
    - Pegue el contenido de su archivo `app-guestbook.yaml` en el editor.
    - Haga clic en **"CREATE"**.

### 4. Verificar la sincronización

En cuanto aplique el manifiesto, ArgoCD detectará este nuevo recurso `Application` y comenzará su trabajo.

1. **A través de la interfaz web :**
    - Inicie sesión en la interfaz de ArgoCD.
    - Debería ver una nueva tarjeta para la aplicación `guestbook`.
    - Después de unos instantes, su estado debería cambiar a `Healthy` y `Synced`.
    - Al hacer clic en la tarjeta, puede visualizar todos los recursos de Kubernetes (Deployment, Service, etc.) que se han creado.

<img src={argocdguestbook} />

1. **A través de la línea de comandos :**
    - Verifique que el namespace `guestbook` se haya creado :

      ```bash
      kubectl get ns guestbook
      ```

    - Verifique que los recursos de la aplicación se hayan implementado correctamente en este namespace :

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

### 5. El ciclo GitOps

Ahora, si modificas un manifiesto en el repositorio Git, ArgoCD detectará el cambio y actualizará automáticamente la aplicación en el clúster. ¡Esa es la magia de GitOps!

## Limpieza

Para eliminar la aplicación y todos los recursos asociados, simplemente puede eliminar el recurso `Application` de ArgoCD.

1. **Desde la interfaz web :**
    - En la interfaz de ArgoCD, busque la aplicación `guestbook`.
    - Haga clic en los tres puntos (...) para abrir el menú y seleccione **"Delete"**.
    - Marque la opción **"Foreground"** para asegurarse de que todos los recursos gestionados (pods, servicios, etc.) también se eliminen en cascada.
2. **Desde `kubectl` :**
    - Elimine el archivo `app-guestbook.yaml` que creó :

      ```bash
      kubectl delete -f app-guestbook.yaml
      ```

ArgoCD ahora eliminará todos los componentes de la aplicación `guestbook`. Una vez finalizada la sincronización de eliminación, el espacio de nombres `guestbook` estará vacío. Puede eliminarlo entonces con el siguiente comando :

```bash
kubectl delete namespace guestbook
```

:::info[Para ir más allá: la gestión de secretos
]
Este tutorial utiliza un repositorio público sin datos sensibles. Para sus aplicaciones en producción, es crucial nunca almacenar secretos (contraseñas, claves de API) en texto claro en su repositorio Git. Soluciones como **Sealed Secrets** o **HashiCorp Vault** se integran con ArgoCD para gestionar sus secretos de forma segura. Un futuro tutorial detallará este enfoque.
:::

## Conclusion

Ha desplegado su primera aplicación con ArgoCD siguiendo los principios de GitOps. Este enfoque potente le permite gestionar sus despliegues de manera declarativa, fiable y segura. Le recomendamos adoptarla para todas sus aplicaciones en Kubernetes administrado.