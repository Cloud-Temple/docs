---
title: La red en Kubernetes Managed
---

import cillium from '@site/docs/managed_kubernetes/tutorials/images/cillium.png'

---

## Objetivos

El objetivo de este tutorial es familiarizarle con los conceptos de red fundamentales de la oferta **Managed Kubernetes**. Al final de esta guía, podrá:

- Comprender el plan de direccionamiento IP de su clúster (nodos, pods, servicios).
- Conocer los diferentes mecanismos para exponer sus aplicaciones (Ingress, LoadBalancer).
- Visualizar los flujos de red y las políticas de seguridad con Hubble.

Tomaremos como **ejemplo** un clúster **"ctodev"**, con el rango asignado **10.20.0.0/22**

:::warning[Definición de rangos]
 Este rango de IP privadas X.Y.Z.0/22 (RFC 1918) se define con el cliente durante la configuración del clúster. No puede modificarse posteriormente.
:::

## Plan de direccionamiento IP

Su clúster de Kubernetes Managed dispone de una VLAN multi-zona con un rango de direcciones IPv4 en /22.

El rango de nuestro **ejemplo** 10.20.0.0/22 se divide lógicamente en sub-rangos.

    - 10.20.0.0/24 está asignado a los Nodos del clúster:

        - 10.20.0.10 : ctodev-gitrunner (la máquina que gestiona la infraestructura)

        - 10.20.0.20 : IP virtual (con balanceo de carga) del servicio API de Kubernetes
        - 10.20.0.21 : ctodev-cp-01 (control plane 01)
        - 10.20.0.22 : ctodev-cp-02 (control plane 02)
        - 10.20.0.23 : ctodev-cp-03 (control plane 03)

        - 10.20.0.41 : ctodev-ceph-01 (Ceph Storage 01)
        - 10.20.0.42 : ctodev-ceph-02 (Ceph Storage 02)
        - 10.20.0.43 : ctodev-ceph-03 (Ceph Storage 03)

        - 10.20.0.51 : ctodev-wrk-01 (Worker 01)
        - 10.20.0.52 : ctodev-wrk-02 (Worker 02)
        - 10.20.0.53 : ctodev-wrk-03 (Worker 03)
        - ...
        - 10.20.0.151 : ctodev-wrk-100 (Worker 100)

    - MetalLB interno : 10.20.1.1 – 10.20.1.127

      - 10.20.1.1 : ingress `nginx-internal`
    
    - MetalLB externo : 10.20.1.128 – 10.20.1.254

      - 10.20.1.128 : ingress `nginx-external`
      - 10.20.1.129 : ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16 

    - Services: 10.95.0.0/12 

:::warning[Rangos de Pods y Services]
Los rangos de Pods y Services se definen con el cliente durante la configuración del clúster. No pueden modificarse posteriormente.
:::

## Uso de MetalLB

MetalLB es el componente que permite exponer servicios de capa 3 (no web / L7) directamente en una dirección IP, ya sea interna o externa, utilizando el tipo de servicio `LoadBalancer`. Es una alternativa a los Ingress para aplicaciones no HTTP o para casos de uso específicos.

Para usar MetalLB, simplemente cree un servicio de tipo `LoadBalancer`. MetalLB le asignará automáticamente una dirección IP de los rangos preconfigurados. La distinción entre los rangos `interno` y `externo` es una medida de seguridad para garantizar que una aplicación destinada a uso interno no quede expuesta accidentalmente en una red pública.

**Ejemplo: Exponer un servicio en la red interna**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mon-service-interne
  namespace: mon-namespace
spec:
  selector:
    app: mon-app
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 80
  type: LoadBalancer
```

Tras aplicar este manifiesto, su servicio recibirá una dirección IP en el rango `10.20.1.1 – 10.20.1.127` y será accesible desde su red interna conectada al clúster.

**Ejemplo: Exponer un servicio en la red externa**

Para solicitar una dirección IP del rango externo (`10.20.1.128 – 10.20.1.254`), debe añadir la etiqueta `lb-type: external` a su servicio.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mon-service-externe
  namespace: mon-namespace
  labels:
    lb-type: external
spec:
  selector:
    app: mon-app
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 80
  type: LoadBalancer
```

> **Importante**: Este rango permanece **en un espacio de direccionamiento privado**. Para una **exposición pública**, es necesario crear una **regla NAT (DNAT)** en el firewall de su infraestructura para redirigir el tráfico desde una de sus IPs públicas externas a la dirección IP privada asignada por MetalLB.

## IPs Públicas

Su clúster de Kubernetes Managed fue entregado con 2 direcciones IPv4 públicas.

La 1ª IP se utiliza en el puerto 6443 para la API de Kubernetes (en nuestro ejemplo ctodev.mk.ms-cloud-temple.com:6443)

Esta misma IP también está NATada en el controlador de ingress *"nginx-external-secured"* para el puerto 443. Esto permite la exposición de las diferentes consolas puestas a su disposición (consulte la guía de inicio rápido). El acceso a esta IP pública está **filtrado** con una lista de IPs autorizadas.

---
La 2ª IP pública está NATada en el controlador de ingress *"nginx-external"*, en los puertos 80 y 443.

Las aplicaciones expuestas con la clase de ingress *"nginx-external"* serán por tanto directamente accesibles desde Internet en esta IP.

*Si desea modificar las reglas de firewall (añadir/eliminar IPs autorizadas), debe realizar una solicitud de soporte.*

*Es posible añadir otras IPs públicas si lo desea.*

## DNS

Para el DNS interno (CoreDNS), el clúster tendrá estos parámetros:

- Nombre del clúster: `<identificador del clúster>`
- Dominio interno: `<identificador del clúster>-cluster.local` (en nuestro ejemplo: ctodev-cluster.local)

Este dominio interno es fundamental para la comunicación entre servicios dentro del clúster. Permite que una aplicación contacte con otra simplemente usando su nombre de servicio de Kubernetes, sin necesidad de conocer su dirección IP interna.

Por ejemplo, un servicio llamado `api-backend` en el namespace `production` será automáticamente resoluble en la dirección `api-backend.production.svc.ctodev-cluster.local`.

---

La zona DNS pública utilizada para los clústeres de Kubernetes Managed es `.mk.ms-cloud-temple.com`

El ingress *"nginx-external"* (mapeado a la IP pública nº 2) es accesible en `"*.external.<su identificador de clúster>.mk.ms-cloud-temple.com"`.
Si publica una aplicación con esta ingress-class, podrá acceder a ella directamente a través de este nombre de dominio. Consulte el tutorial: [Desplegar su primera aplicación](./firstdeploy)

## Hubble: La observabilidad de red al alcance de su mano

Hubble es una interfaz gráfica y de línea de comandos para visualizar y comprender los flujos de red de su clúster. Basado en Cilium, ofrece un mapa detallado de servicios, dependencias y políticas de red en tiempo real.

Con Hubble, puede:

- **Visualizar los flujos de tráfico** entre sus pods y servicios.
- **Identificar problemas de conectividad** y errores de red.
- **Verificar la aplicación de sus políticas de seguridad** (Network Policies).
- **Explorar las dependencias** entre sus diferentes aplicaciones.

### Acceder a la interfaz Hubble

La interfaz gráfica de Hubble está expuesta en una URL interna de su clúster. El acceso no es posible mediante port-forwarding de `kubectl` ya que los usuarios no disponen de permisos suficientes sobre el namespace `kube-system`.

Para acceder, debe estar conectado a la red interna del clúster (por ejemplo, mediante un bastion o una VPN). La URL a utilizar es la siguiente:

`http://hubble.internal.<su-identificador-de-clúster>.mk.ms-cloud-temple.com`

Para que esta URL sea resoluble desde su estación de trabajo, probablemente necesitará añadir una entrada en su archivo `hosts` o en su DNS interno. Puede obtener la dirección IP interna del Ingress de Hubble con el siguiente comando:

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Creación de zonas DNS internas (clúster privado)

Para reforzar la seguridad y simplificar el acceso a sus servicios y a la API de Kubernetes desde su red interna, se recomienda crear una zona DNS interna. Esta zona permitirá resolver los nombres de dominio de sus Ingresses y de la API de Kubernetes hacia sus respectivas direcciones IP privadas, evitando así el tránsito por redes públicas.

**Ejemplo de configuración con nuestro clúster "ctodev", con el rango asignado** **10.20.0.0/22:**

Basándose en las URLs proporcionadas en la guía de inicio rápido, puede configurar su DNS interno de la siguiente manera:

1. **Cree la zona DNS privada** en sus servidores DNS internos para `.<identificador del clúster>.mk.ms-cloud-temple.com`

2. **Añada los siguientes registros de tipo A**:

    - **Para la API de Kubernetes:**
        - `. -> 10.20.0.20` (IP virtual de la API)

    - **Para los servicios internos (a través del Ingress `nginx-internal`):**
        - `hubble.internal -> 10.20.1.1`
        - `argocd.internal -> 10.20.1.1`
        - `ceph.internal -> 10.20.1.1`

    - **Para los servicios seguros (a través del Ingress `nginx-external-secure`):**
        - `k10.external-secured -> 10.20.1.129`
        - `grafana.external-secured -> 10.20.1.129`
        - `harbor.external-secured -> 10.20.1.129`
        - `opencost.external-secured -> 10.20.1.129`
        - `opencost-mcp.external-secured -> 10.20.1.129`

Esta configuración garantiza que el tráfico hacia la API y los servicios internos permanezca confinado en su red privada, de acuerdo con las mejores prácticas de seguridad.

<div class="card">
  <div class="card__header">
    <h3>Tutorial: Desplegar su primera aplicación</h3>
  </div>
  <div class="card__body">
    <p>
      Siga nuestra guía detallada para aprender a exponer una aplicación utilizando un Ingress.
    </p>
  </div>
  <div class="card__footer">
    <a href="./firstdeploy" class="button button--primary button--block">Ver el tutorial &rarr;</a>
  </div>
</div>

:::warning[Para ir más lejos: seguridad en producción]
Este documento explica los conceptos de red fundamentales. Para un despliegue en producción, es fundamental aplicar medidas de seguridad adicionales:

- **Utilice imágenes seguras**: Prefiera imágenes de su registro corporativo seguro como **Harbor** en lugar de imágenes públicas.
- **Controle los flujos de red**: Implemente `NetworkPolicies` para controlar las comunicaciones a los únicos flujos necesarios entre sus aplicaciones.
- **Aplique políticas de gobernanza**: Utilice herramientas como **Kyverno** para imponer reglas de seguridad (p. ej. prohibir contenedores "root", exigir `requests` y `limits` de recursos, etc.).
:::
