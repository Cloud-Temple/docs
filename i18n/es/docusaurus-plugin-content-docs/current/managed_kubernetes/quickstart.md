---
title: Guía de inicio
---

Bienvenido a la guía de inicio de **Managed Kubernetes** Cloud Temple.

El objetivo de esta sección es orientarlo hacia los recursos necesarios para comenzar a utilizar su clúster.

---

## Antes de comenzar

Para interactuar con su clúster, se requieren varios elementos:

1. **El archivo `kubeconfig`** : Este archivo, que le proporcionan los equipos de Cloud Temple al provisionar el servicio, contiene toda la información necesaria para conectarse de forma segura.
2. **La herramienta `kubectl`** : Es la interfaz de línea de comandos estándar para administrar un clúster de Kubernetes.
3. **La herramienta `kubelogin`** (si se utiliza OIDC) : Si su clúster está configurado para autenticarse mediante un proveedor de identidad OIDC (como Entra ID/Azure AD), debe instalar la herramienta `kubelogin` para gestionar el flujo de autenticación. Siga la [guía de instalación de kubelogin](https://github.com/int128/kubelogin).

:::info[Herramientas gráficas recomendadas:
]
Para una experiencia más visual y una gestión simplificada de sus recursos, recomendamos el uso de **Lens**. Es una herramienta potente para Kubernetes que le permite explorar su clúster, administrar sus aplicaciones y visualizar su estado de forma gráfica.
Algunos de nuestros tutoriales utilizarán Lens para ilustrar las operaciones. Puede descargarlo aquí : [https://k8slens.dev/](https://k8slens.dev/).
:::

---

## Acceder a su clúster de Kubernetes administrado

Su clúster de producción está identificado por un código de 5 letras (6 letras en Dev/Test). Este código se utiliza para construir las URL de las diferentes interfaces. En los tutoriales, utilizaremos **"ctodev"**.

Las URL son:

- API de Kubernetes (utilizada en kubeconfig):
  - **identifiant**.mk.ms-cloud-temple.com:6443  (por lo tanto, en nuestro ejemplo: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443) )

- URL públicas :
  - k10.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - opencost.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - opencost-mcp.external-secured.**identifiant**.mk.ms-cloud-temple.com

:::info[URL seguras
]
Las URL anteriores solo son accesibles desde direcciones IP públicas conocidas, configuradas en el firewall de la solución. Si desea agregar una IP pública, debe realizar una solicitud de soporte.
:::

- URL internas :
  - ceph.internal.**identifiant**.mk.ms-cloud-temple.com
  - argocd.internal.**identifiant**.mk.ms-cloud-temple.com
  - hubble.internal.**identifiant**.mk.ms-cloud-temple.com

:::info[URL internas
]
Las URL anteriores no están expuestas en Internet. Solo son accesibles en la red interna de Kubernetes administrado.
:::

---

## Sus permisos

:::warning[Dev/Test
]
Para los clústeres Kubernetes gestionados **"Dev/Test"**, la cuenta de servicio proporcionada dispone de todos los permisos en todo el clúster (ClusterAdmin)
:::

En los clústeres **"Production"**, sus permisos están limitados. Dispone de un derecho **"Visualizador Extendido"** sobre los recursos del clúster. Este derecho otorga acceso de solo lectura a recursos clave, tanto a nivel del clúster como para diagnóstico:

- Namespaces : permiten a los inquilinos listar los espacios de nombres para herramientas y paneles.
- Pods, deployments,  replicaset... : permiten a los inquilinos listar los recursos desplegados en el clúster.
- Nodes : ofrecen visibilidad sobre la capacidad, los taints y las etiquetas de los nodos para comprender el comportamiento del planificador.
- StorageClasses, PVs, PVCs, VolumeAttachments y CSIDrivers : permiten a los inquilinos identificar las clases de almacenamiento disponibles y resolver problemas de vinculación entre PVC y PV o errores relacionados con controladores CSI.
- IngressClasses : informan a los usuarios sobre los controladores de ingress disponibles para el enrutamiento de aplicaciones.
- NetworkPolicies, ResourceQuotas, LimitRanges y Events : esenciales para diagnosticar restricciones de red, fallos de planificación o violaciones de cuotas de recursos.

La cuenta de servicio que se le ha asignado también se ha convertido en **propietaria de un primer *tenant* Capsule**.
Puede crear Namespaces, que se vincularán a su tenant Capsule.
Las cuentas externas (OIDC) son miembros de este mismo tenant Capsule, lo que les permite interactuar libremente dentro de los **namespaces** asociados al tenant. (Ver el tutorial "Gestionar los permisos con Capsule")

Algunas acciones no están permitidas:

- listar / crear tenants Capsule
- crear CRD: Si necesita desplegar una aplicación con CRD (por ejemplo, un helm chart de un operador), deberá interactuar con el soporte para que estas CRD se importen (mediante la extracción de los yaml desde el helm chart). Posteriormente, podrá desplegar su helm chart con la opción --skip-crds. Ver: [Documentation Helm 3](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Desplegar su primera aplicación</h3>
      </div>
      <div className="card__body">
        <p>
          Siga una guía detallada para conectarse, desplegar una aplicación "Hello World" y exponerla en Internet.
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
        <h3>Tutorial: Comprender la red</h3>
      </div>
      <div className="card__body">
        <p>
          Descubra el plan de direccionamiento, los Ingress Controllers y cómo exponer sus servicios de forma segura.
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
        <h3>Tutorial: Gestionar los permisos con Capsule</h3>
      </div>
      <div className="card__body">
        <p>
          Aprenda a utilizar Capsule para crear tenants y delegar permisos a sus equipos.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Descubrir Capsule &rarr;</a>
      </div>
    </div>
  </div>
</div>