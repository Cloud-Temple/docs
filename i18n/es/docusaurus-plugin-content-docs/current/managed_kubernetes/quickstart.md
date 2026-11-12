---
title: Guía de inicio
---
Bienvenido a la guía de inicio de **Managed Kubernetes** de Cloud Temple.

El objetivo de esta sección es orientarle hacia los recursos necesarios para tomar el control de su clúster.

---

## Antes de comenzar

Para interactuar con su clúster, varios elementos son indispensables:

1. **El archivo `kubeconfig`**: Este archivo, que le es proporcionado por los equipos de Cloud Temple en la entrega del servicio, contiene toda la información para conectarse de manera segura.
2. **La herramienta `kubectl`**: Se trata de la interfaz de línea de comandos estándar para gestionar un clúster Kubernetes.
3. **La herramienta `kubelogin`** (si se utiliza OIDC): Si su clúster está configurado para autenticarse a través de un proveedor de identidad OIDC (como Entra ID/Azure AD), debe instalar la herramienta `kubelogin` para gestionar el flujo de autenticación. Siga la [guía de instalación de kubelogin](https://github.com/int128/kubelogin).

> ℹ️[Herramientas gráficas recomendadas:]
> Para una experiencia más visual y una gestión simplificada de sus recursos, le recomendamos el uso de **Lens**. Es una herramienta potente para Kubernetes que le permite explorar su clúster, gestionar sus aplicaciones y visualizar su estado de manera gráfica.
> Algunos de nuestros tutoriales utilizarán Lens para ilustrar las operaciones. Puede descargarlo aquí: [https://k8slens.dev/](https://k8slens.dev/).

---

## Acceder a su clúster Kubernetes Managé

Su clúster de producción está identificado por un código de 5 letras (6 letras en Dev/Test). Este código se utiliza para construir las url de las diferentes interfaces. En los tutoriales, utilizaremos **"ctodev"**.

Las urls son:

- API kubernetes (utilizada en kubeconfig):

  - **identifiant**.mk.ms-cloud-temple.com:6443  (por lo tanto en nuestro ejemplo: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443) )
- url públicas:

  - k10.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - opencost.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - opencost-mcp.external-secured.**identifiant**.mk.ms-cloud-temple.com

>ℹ️[url seguras]
>Las url anteriores solo son accesibles desde IPs públicas conocidas, configuradas en el firewall de la solución. Si desea agregar una IP pública, debe realizar una solicitud de soporte.
>

>ℹ️[url internas]
>Las url siguientes no están expuestas en Internet. Solo son accesibles en la red Interna Kubernetes Managé.
>  - ceph.internal.**identifiant**.mk.ms-cloud-temple.com
>  - argocd.internal.**identifiant**.mk.ms-cloud-temple.com
>  - hubble.internal.**identifiant**.mk.ms-cloud-temple.com

---

## Sus permisos

>⚠[Dev/Test y Kubernetes Core]
>Para los clústeres Kubernetes Managé **"Dev/Test"** y los clústeres Core, la cuenta de servicio que le ha sido proporcionada dispone de todos los permisos sobre el conjunto del clúster (ClusterAdmin)

En los clústeres **"Production"**, sus permisos están limitados. Dispone de un derecho **"Viewer Etendu"** sobre los recursos del clúster. Este derecho otorga un acceso de solo lectura a recursos clave, tanto a nivel del clúster como para el diagnóstico:

- Namespaces: autorizan a los inquilinos a listar los espacios de nombres para las herramientas y paneles de control.
- Pods, deployments, replicaset...: autorizan a los inquilinos a listar los recursos desplegados en el clúster.
- Nodes: ofrecen una visibilidad sobre la capacidad, los taints y los labels de los nodos para comprender el comportamiento del planificador.
- StorageClasses, PVs, PVCs, VolumeAttachments y CSIDrivers: permiten a los inquilinos identificar las clases de almacenamiento disponibles y resolver los problemas de vinculación entre PVC y PV o los errores relacionados con los controladores CSI.
- IngressClasses: informan a los usuarios sobre los controladores de ingress disponibles para el enrutamiento de las aplicaciones.
- NetworkPolicies, ResourceQuotas, LimitRanges y Events: esenciales para diagnosticar las restricciones de red, los fallos de planificación o las violaciones de cuotas de recursos.

La cuenta de servicio que le ha sido confiada también ha sido designada **propietaria de un primer *tenant* Capsule**.
Puede crear Namespaces, que se asociarán a su tenant Capsule.
Las cuentas externas (OIDC) son miembros de este mismo tenant Capsule, lo que les permite interactuar libremente dentro de los **namespaces** que están asociados al tenant. (Ver el tutorial "Gestionar los permisos con Capsule")

Algunas acciones no están permitidas:

- listar / crear tenants Capsule
- crear CRD: Si debe desplegar una aplicación con CRD (por ejemplo, un helm chart de un operador), deberá interactuar con el soporte para que estos CRD sean importados (mediante extracción de los yaml desde el chart helm). Luego podrá desplegar su chart helm con la opción --skip-crds. Ver: [Documentation Helm 3](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Desplegar su primera aplicación</h3>
      </div>
      <div className="card__body">
        <p>Siga una guía detallada para conectarse, desplegar una aplicación "Hello World" y exponerla en Internet.</p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/firstdeploy" className="button button--primary button--block">Comenzar el tutorial →</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Comprender la red</h3>
      </div>
      <div className="card__body">
        <p>Descubra el plan de direccionamiento, los Ingress Controllers y cómo exponer sus servicios de manera segura.</p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">Ver el tutorial de red →</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Gestionar los permisos con Capsule</h3>
      </div>
      <div className="card__body">
        <p>Aprenda a utilizar Capsule para crear tenants y delegar permisos a sus equipos.</p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Descubrir Capsule →</a>
      </div>
    </div>
  </div>
</div>
