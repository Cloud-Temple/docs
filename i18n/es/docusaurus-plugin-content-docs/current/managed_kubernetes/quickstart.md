---
title: Guía de Inicio Rápido
---

Bienvenido a la guía de inicio rápido de **Managed Kubernetes** de Cloud Temple.

El objetivo de esta sección es orientarle hacia los recursos necesarios para familiarizarse con su clúster.

---

## Antes de Comenzar

Para interactuar con su clúster, varios elementos son indispensables:

1. **El archivo `kubeconfig`**: Este archivo, que le proporcionan los equipos de Cloud Temple en la entrega del servicio, contiene toda la información para conectarse de forma segura.
2. **La herramienta `kubectl`**: Es la interfaz de línea de comandos estándar para gestionar un clúster Kubernetes.
3. **La herramienta `kubelogin`** (si se utiliza OIDC): Si su clúster está configurado para autenticarse a través de un proveedor de identidad OIDC (como Entra ID/Azure AD), debe instalar la herramienta `kubelogin` para gestionar el flujo de autenticación. Siga la [guía de instalación de kubelogin](https://github.com/int128/kubelogin).

:::info Herramientas gráficas recomendadas:
Para una experiencia más visual y una gestión simplificada de sus recursos, le recomendamos el uso de **Lens**. Es una herramienta potente para Kubernetes que le permite explorar su clúster, gestionar sus aplicaciones y visualizar su estado de forma gráfica.
Algunos de nuestros tutoriales utilizarán Lens para ilustrar las operaciones. Puede descargarlo aquí: [https://k8slens.dev/](https://k8slens.dev/).
:::

---

## Acceder a su Clúster Kubernetes Gestionado

Su clúster de producción se identifica mediante un código de 5 letras (6 letras en Dev/Test). Este código se utiliza para construir las URLs de las distintas interfaces. En los tutoriales, utilizaremos **"ctodev"**.

Las URLs son:

- API de Kubernetes (utilizada en kubeconfig):
  - **identificador**.mk.ms-cloud-temple.com:6443  (por lo tanto, en nuestro ejemplo: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443) )

- URLs públicas:
  - k10.external-secured.**identificador**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identificador**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identificador**.mk.ms-cloud-temple.com
  - opencost.external-secured.**identificador**.mk.ms-cloud-temple.com
  - opencost-mcp.external-secured.**identificador**.mk.ms-cloud-temple.com

:::info URLs seguras
Las URLs anteriores solo son accesibles desde IPs públicas conocidas, configuradas en el firewall de la solución. Si desea añadir una IP pública, debe realizar una solicitud de soporte.
:::

- URLs internas:
  - ceph.internal.**identificador**.mk.ms-cloud-temple.com
  - argocd.internal.**identificador**.mk.ms-cloud-temple.com
  - hubble.internal.**identificador**.mk.ms-cloud-temple.com

:::info URLs internas
Las URLs anteriores no están expuestas en Internet. Solo son accesibles en la red interna de Managed Kubernetes.
:::

---

## Sus Permisos

:::warning Dev/Test
Para los clústeres Managed Kubernetes **"Dev/Test"**, la cuenta de servicio que se le ha proporcionado tiene todos los permisos sobre el clúster completo (ClusterAdmin)
:::

En los clústeres de **"Producción"**, sus permisos son limitados. Dispone de un derecho de **"Visor Extendido"** sobre los recursos del clúster. Este derecho otorga acceso de solo lectura a recursos clave, tanto a nivel del clúster como para el diagnóstico:

- Namespaces: permiten a los tenants listar los espacios de nombres para herramientas y dashboards.
- Pods, deployments, replicaset...: permiten a los tenants listar los recursos desplegados en el clúster.
- Nodes: ofrecen visibilidad sobre la capacidad, los taints y las labels de los nodos para comprender el comportamiento del planificador.
- StorageClasses, PVs, PVCs, VolumeAttachments y CSIDrivers: permiten a los tenants identificar las clases de almacenamiento disponibles y resolver problemas de enlace entre PVC y PV o errores relacionados con los controladores CSI.
- IngressClasses: informan a los usuarios sobre los controladores de ingress disponibles para el enrutamiento de aplicaciones.
- NetworkPolicies, ResourceQuotas, LimitRanges y Events: esenciales para diagnosticar restricciones de red, fallos de planificación o violaciones de cuotas de recursos.

La cuenta de servicio que se le ha confiado también ha sido designada **propietaria de un primer *tenant* de Capsule**.
Puede crear Namespaces, que quedarán asociados a su tenant de Capsule.
Las cuentas externas (OIDC) son miembros de este mismo tenant de Capsule, lo que les permite interactuar libremente dentro de los **namespaces** asociados al tenant. (Ver el tutorial "Gestionar los permisos con Capsule")

Algunas acciones no están permitidas:

- listar / crear tenants de Capsule
- crear CRDs: Si necesita desplegar una aplicación con CRDs (por ejemplo, un chart de Helm de un operador), deberá interactuar con el soporte para que estas CRDs sean importadas (mediante la extracción de los yamls del chart de Helm). Luego podrá desplegar su chart de Helm con la opción --skip-crds. Ver: [Documentación de Helm 3](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Desplegar su Primera Aplicación</h3>
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
        <h3>Tutorial: Comprender la Red</h3>
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
        <h3>Tutorial: Gestionar los Permisos con Capsule</h3>
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
