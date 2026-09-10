---
title: la red en Kubernetes Administrado
---
import cillium from '@site/docs/managed_kubernetes/tutorials/images/cillium.png'

---

## Objetivos

Este tutorial tiene como objetivo familiarizarle con los conceptos de red fundamentales de la oferta **Managed Kubernetes**. Al final de esta guía, estará en capacidad de:

- Comprender el plan de direccionamiento IP de su clúster (nodos, pods, servicios).
- Conocer los diferentes mecanismos para exponer sus aplicaciones (Ingress, LoadBalancer).
- Visualizar los flujos de red y las políticas de seguridad con Hubble.

Tomaremos como **ejemplo** un clúster **"ctodev"**, cuyo rango asignado es **10.20.0.0/22**

> ⚠[definición de los rangos]
> Este rango de IP privadas X.Y.Z.0/22 (RFC 1918) se define con el cliente durante el despliegue del clúster. No puede modificarse posteriormente.

## Plan de direccionamiento IP

Su clúster Kubernetes gestionado cuenta con un VLAN multizonal con un rango de direcciones IPv4 en /22.

El rango de nuestro **ejemplo** 10.20.0.0/22 se divide lógicamente en subrangos.

    - 10.20.0.0/24 se asigna a los Nodos del clúster:

    - 10.20.0.10 : ctodev-gitrunner (la máquina que gestiona la infraestructura)

    - 10.20.0.20 : IP virtual (balanceo de carga) del servicio API de Kubernetes
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

    - 10.20.1.1 : ingress`nginx-internal`

    - MetalLB externo : 10.20.1.128 – 10.20.1.254

    - 10.20.1.128 : ingress`nginx-external`
      - 10.20.1.129 : ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16

    - Services: 10.95.0.0/12

> ⚠[Rangos Pods y Services]
> Los rangos de Pods y Services se definen con el cliente durante la implementación del clúster. No se pueden modificar posteriormente.

## Uso de MetalLB

MetalLB es el componente que permite exponer servicios de capa 3 (non web / L7) directamente en una dirección IP, ya sea interna o externa, utilizando el tipo de servicio `LoadBalancer`. Es una alternativa a los Ingress para aplicaciones no HTTP o para casos de uso específicos.

Para utilizar MetalLB, bastará con crear un servicio de tipo `LoadBalancer`. MetalLB le asignará automáticamente una dirección IP desde los rangos preconfigurados. La distinción entre los rangos `interne` y `externe` es una medida de seguridad para garantizar que una aplicación destinada a un uso interno no se exponga en una red pública por error.

**Ejemplo : Exponer un servicio en la red interna**

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

Después de aplicar este manifiesto, a tu servicio se le asignará una dirección IP en el rango `10.20.1.1 – 10.20.1.127` y será accesible desde tu red interna conectada al clúster.

**Ejemplo : Exponer un servicio en la red externa**

Para solicitar una dirección IP desde el rango externo (`10.20.1.128 – 10.20.1.254`), debes agregar la etiqueta `lb-type: external` a tu servicio.

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

> **Importante** : Este rango permanece **en un espacio de direcciones privadas**. Para una **exposición pública**, es necesario crear una **regla NAT (DNAT)** en el firewall de tu infraestructura para redirigir el tráfico desde una de tus IPs públicas externas hacia la dirección IP privada asignada por MetalLB.

## IP Públicas

Su clúster Kubernetes administrado se entregó originalmente con 2 direcciones IPv4 públicas.

La 1ª IP se utiliza en el puerto 6443 para la API de Kubernetes (en nuestro ejemplo ctodev.mk.ms-cloud-temple.com:6443)

Esta misma IP también está enmascarada por NAT en el ingress controller *"nginx-external-secured"* para el puerto 443. Esto permite la exposición de las diferentes consolas puestas a su disposición (consulte la guía de inicio rápido). Los accesos a esta IP pública están **filtrados** mediante una lista de IPs autorizadas.

---

La 2ª IP pública está enmascarada por NAT en el ingress controller *"nginx-external"*, en los puertos 80 y 443.

Las aplicaciones expuestas con la ingress class *"nginx-external"* serán, por lo tanto, directamente accesibles desde Internet en esta IP.

*Si desea modificar las reglas del firewall (agregar/eliminar IPs autorizadas), debe realizar una solicitud de soporte.*

*Es posible agregar otras IPs públicas si lo desea.*

## DNS

Para el DNS interno (CoreDNS), el clúster tendrá estos parámetros:

- Nombre del clúster : `<identificador del clúster>`
- Dominio interno : `<identificador del clúster>-cluster.local` (en nuestro ejemplo : ctodev-cluster.local)

Este dominio interno es crucial para la comunicación entre servicios dentro del clúster. Permite que una aplicación contacte a otra utilizando simplemente su nombre de servicio de Kubernetes, sin necesidad de conocer su dirección IP interna.

Por ejemplo, un servicio llamado `api-backend` en el namespace `production` será automáticamente resoluble en la dirección `api-backend.production.svc.ctodev-cluster.local`.

---

La zona DNS pública utilizada para los clústeres Kubernetes Administrados es `.mk.ms-cloud-temple.com`

El ingress *"nginx-external"* (mapeado a la IP pública n°2) es accesible en `"*.external.<votre identifiant de cluster>.mk.ms-cloud-temple.com"`.
Si publica una aplicación con esta ingress-class, podrá acceder a ella directamente a través de este nombre de dominio. Vea el tutorial : [Desplegar su primera aplicación](./firstdeploy)

## Hubble : La observabilidad de red al alcance de la mano

Hubble es una interfaz gráfica y de línea de comandos para visualizar y comprender los flujos de red de su clúster. Basado en Cilium, le ofrece un mapeo detallado de los servicios, las dependencias y las políticas de red en tiempo real.

Con Hubble, puede :

- **Visualizar los flujos de tráfico** entre sus pods y servicios.
- **Identificar los problemas de conectividad** y los errores de red.
- **Verificar la aplicación de sus políticas de seguridad** (Network Policies).
- **Explorar las dependencias** entre sus diferentes aplicaciones.

### Acceder a la interfaz de Hubble

La interfaz gráfica de Hubble se expone en una URL interna de su clúster. El acceso no es posible mediante un port-forwarding `kubectl` ya que los usuarios no cuentan con los permisos suficientes en el namespace `kube-system`.

Para acceder a ella, debe estar conectado a la red interna del clúster (por ejemplo, a través de un bastión o una VPN). La URL a utilizar es la siguiente:

`http://hubble.internal.<votre-identifiant-de-cluster>.mk.ms-cloud-temple.com`

Para que esta URL sea resoluble desde su estación de trabajo, probablemente deberá agregar una entrada en su archivo `hosts` o en su DNS interno. Puede obtener la dirección IP interna del Ingress de Hubble con el siguiente comando:

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Creación de zonas DNS internas (clúster privado)

Para reforzar la seguridad y simplificar el acceso a sus servicios y a la API de Kubernetes desde su red interna, se recomienda crear una zona DNS interna. Esta zona permitirá resolver los nombres de dominio de sus Ingress y de la API de Kubernetes hacia sus respectivas direcciones IP privadas, evitando así transitar por redes públicas.

**Ejemplo de configuración con nuestro clúster "ctodev", cuyo rango asignado es** **10.20.0.0/22 :**

Basándose en las URLs proporcionadas en la guía de inicio, puede configurar su DNS interno de la siguiente manera:

1. **Cree la zona DNS privada** en sus servidores DNS internos para `.<identificador del clúster>.mk.ms-cloud-temple.com`
2. **Agregue los siguientes registros de tipo A** :

   - **Para la API de Kubernetes :**

     - `. -> 10.20.0.20` (IP virtual de la API)
   - **Para los servicios internos (vía el Ingress `nginx-internal`) :**

     - `hubble.internal -> 10.20.1.1`
     - `argocd.internal -> 10.20.1.1`
     - `ceph.internal -> 10.20.1.1`
   - **Para los servicios seguros (vía el Ingress `nginx-external-secure`) :**

     - `k10.external-secured -> 10.20.1.129`
     - `grafana.external-secured -> 10.20.1.129`
     - `harbor.external-secured -> 10.20.1.129`
     - `opencost.external-secured -> 10.20.1.129`
     - `opencost-mcp.external-secured -> 10.20.1.129`

Esta configuración garantiza que el tráfico hacia la API y los servicios internos permanezca confinado a su red privada, de acuerdo con las mejores prácticas de seguridad.

<div class="card">
  <div class="card__header">
    <h3>Tutorial: Despliegue de su primera aplicación</h3>
  </div>
  <div class="card__body">
    <p>
      Siga nuestra guía detallada para aprender a exponer una aplicación utilizando un Ingress.
    </p>
  </div>
  <div class="card__footer">
    <a href="./firstdeploy" class="button button--primary button--block">Ver el tutorial →</a>
  </div>
</div>