---
title: Guía de inicio
---

Bienvenido a la guía de inicio de **Managed Kubernetes** Cloud Temple.

El objetivo de esta sección es orientarte hacia los recursos necesarios para comenzar a utilizar tu clúster.

## Antes de comenzar

Para interactuar con su clúster, son indispensables los siguientes elementos:

1.  **El archivo `kubeconfig`**: Este archivo, que le proporcionan los equipos de Cloud Temple al entregar el servicio, contiene toda la información necesaria para conectarse de forma segura.
2.  **La herramienta `kubectl`**: Se trata de la interfaz de línea de comandos estándar para gestionar un clúster de Kubernetes.
3.  **La herramienta `kubelogin`** (si se utiliza OIDC): Si su clúster está configurado para autenticarse mediante un proveedor de identidad OIDC (como Entra ID/Azure AD), deberá instalar la herramienta `kubelogin` para gestionar el flujo de autenticación. Consulte la [guía de instalación de kubelogin](https://github.com/int128/kubelogin).

Herramientas gráficas recomendadas: Para una experiencia más visual y una gestión simplificada de sus recursos, le recomendamos el uso de **Lens**. Se trata de una herramienta potente para Kubernetes que le permite explorar su clúster, gestionar sus aplicaciones y visualizar su estado de forma gráfica.  
Algunos de nuestros tutoriales utilizarán Lens para ilustrar las manipulaciones. Puede descargarlo aquí: [https://k8slens.dev/](https://k8slens.dev/).

## Acceder a su clúster Kubernetes gestionado

Su clúster de producción está identificado por un código de 5 letras (6 letras en Dev/Test). Este código se utiliza para construir las URLs de las diferentes interfaces. En los tutoriales, usaremos **"ctodev"**.

Las URLs son:

- API de Kubernetes (utilizada en kubeconfig):
  - **identificador**.mk.ms-cloud-temple.com:6443 (por lo tanto, en nuestro ejemplo: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443))

- URLs públicas:
  - k10.external-secured.**identificador**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identificador**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identificador**.mk.ms-cloud-temple.com
  - kubecost.external-secured.**identificador**.mk.ms-cloud-temple.com

*Las URLs anteriores solo son accesibles desde direcciones IP públicas conocidas, configuradas en el firewall de la solución. Si desea agregar una IP pública, debe solicitar soporte.*

- URLs internas:
  - ceph.internal.**identificador**.mk.ms-cloud-temple.com
  - argocd.internal.**identificador**.mk.ms-cloud-temple.com
  - hubble.internal.**identificador**.mk.ms-cloud-temple.com

*Las URLs anteriores no están expuestas en Internet. Solo son accesibles desde la red interna del clúster Kubernetes gestionado.*

## Sus permisos

Para los clústeres Kubernetes gestionados **"Dev/Test"**, la cuenta de servicio que se le ha proporcionado tiene todos los permisos en todo el clúster (ClusterAdmin).

En los clústeres **"Producción"**, sus permisos están limitados. Dispone de un permiso **"Viewer Extendido"** sobre los recursos del clúster. Este permiso otorga acceso de solo lectura a recursos clave, tanto a nivel de clúster como para diagnóstico:

- **Namespaces**: permiten a los inquilinos listar los espacios de nombres para herramientas y paneles de control.
- **Pods, deployments, replicaset...**: permiten a los inquilinos listar los recursos desplegados en el clúster.
- **Nodes**: ofrecen visibilidad sobre la capacidad, los taints y las etiquetas de los nodos para comprender el comportamiento del planificador.
- **StorageClasses, PVs, PVCs, VolumeAttachments y CSIDrivers**: permiten a los inquilinos identificar las clases de almacenamiento disponibles y resolver problemas de enlace entre PVC y PV o errores relacionados con controladores CSI.
- **IngressClasses**: informan a los usuarios sobre los controladores de Ingress disponibles para el enrutamiento de aplicaciones.
- **NetworkPolicies, ResourceQuotas, LimitRanges y Events**: esenciales para diagnosticar restricciones de red, fallos de planificación o violaciones de cuotas de recursos.

La cuenta de servicio que se le ha asignado también ha sido configurada como **propietaria de un primer *tenant* Capsule**.  
Puede crear espacios de nombres (namespaces), que se asociarán a su tenant Capsule.  
Los usuarios externos (OIDC) son miembros de este mismo tenant Capsule, lo que les permite interactuar libremente dentro de los **espacios de nombres** asociados al tenant. (Ver el tutorial "Gestionar permisos con Capsule").

Algunas acciones no están permitidas:

- Listar / crear tenants Capsule
- Crear CRD: Si necesita desplegar una aplicación con CRD (por ejemplo, un chart Helm de un operador), deberá contactar al soporte para que importen estos CRD (mediante extracción de los archivos YAML desde el chart Helm). A continuación, podrá desplegar su chart Helm con la opción `--skip-crds`. Ver: [Documentación Helm 3](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Desplegar su primera aplicación</h3>
      </div>
      <div className="card__body">
        <p>
          Siga una guía detallada para conectarse, desplegar una aplicación "Hola Mundo" y exponerla en Internet.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/firstdeploy" className="button button--primary button--block">Comenzar el tutorial &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Entender la red</h3>
      </div>
      <div className="card__body">
        <p>
          Descubra el esquema de direccionamiento, los controladores de Ingress y cómo exponer sus servicios de forma segura.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">Ver el tutorial de red &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Gestionar permisos con Capsule</h3>
      </div>
      <div className="card__body">
        <p>
          Aprenda a usar Capsule para crear tenants y delegar permisos a sus equipos.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Descubrir Capsule &rarr;</a>
      </div>
    </div>
  </div>
</div>