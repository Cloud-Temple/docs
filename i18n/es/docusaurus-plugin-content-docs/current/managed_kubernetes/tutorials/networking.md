---
title: La red en Kubernetes gestionado
---

import cillium from './images/cillium.png'

---

## Objetivos

Este tutorial tiene como objetivo familiarizarte con los conceptos fundamentales de red de la oferta **Managed Kubernetes**. Al final de esta guía, serás capaz de:

- Comprender el plan de direccionamiento IP de tu clúster (nodos, pods, servicios).
- Conocer los diferentes mecanismos para exponer tus aplicaciones (Ingress, LoadBalancer).
- Visualizar los flujos de red y las políticas de seguridad con Hubble.

Tomaremos como **ejemplo** un clúster **"ctodev"**, cuyo rango asignado es **10.20.0.0/22**.

:::warning definición de rangos
 Este rango de direcciones IP privadas X.Y.Z.0/22 (RFC 1918) se define con el cliente durante la configuración del clúster. No puede modificarse posteriormente.
:::

## Plan de direccionamiento IP

Su clúster Kubernetes gestionado dispone de un VLAN multi-zonal con un rango de direcciones IPv4 en /22.

El rango de nuestro **ejemplo** 10.20.0.0/22 se divide lógicamente en subrangos.

    - 10.20.0.0/24 se asigna a los Nodos del clúster:

        - 10.20.0.10 : ctodev-gitrunner (la máquina que controla la infraestructura)

        - 10.20.0.20 : IP virtual (balanceada por carga) del servicio API de Kubernetes
        - 10.20.0.21 : ctodev-cp-01 (control plane 01)
        - 10.20.0.22 : ctodev-cp-02 (control plane 02)
        - 10.20.0.23 : ctodev-cp-03 (control plane 03)

        - 10.20.0.41 : ctodev-ceph-01 (almacenamiento Ceph 01)
        - 10.20.0.42 : ctodev-ceph-02 (almacenamiento Ceph 02)
        - 10.20.0.43 : ctodev-ceph-03 (almacenamiento Ceph 03)

        - 10.20.0.51 : ctodev-wrk-01 (Worker 01)
        - 10.20.0.52 : ctodev-wrk-02 (Worker 02)
        - 10.20.0.53 : ctodev-wrk-03 (Worker 03)
        - ...
        - 10.20.0.151 : ctodev-wrk-100 (Worker 100)

    - MetalLB interno: 10.20.1.1 – 10.20.1.127

      - 10.20.1.1 : ingress `nginx-internal`
    
    - MetalLB externo: 10.20.1.128 – 10.20.1.254

      - 10.20.1.128 : ingress `nginx-external`
      - 10.20.1.129 : ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16 

    - Servicios: 10.95.0.0/12 

:::warning Rangos Pods y Servicios
Los rangos de Pods y Servicios se definen con el cliente durante la configuración del clúster. No pueden modificarse posteriormente.
:::

## Uso de MetalLB

MetalLB es el componente que permite exponer servicios de capa 3 (no web / L7) directamente mediante una dirección IP, ya sea interna o externa, utilizando el tipo de servicio `LoadBalancer`. Es una alternativa a los Ingress para aplicaciones no HTTP o para casos de uso específicos.

Para usar MetalLB, simplemente debes crear un servicio del tipo `LoadBalancer`. MetalLB le asignará automáticamente una dirección IP desde las gamas preconfiguradas. La distinción entre las gamas `interna` y `externa` es una medida de seguridad para garantizar que una aplicación destinada a uso interno no se exponga accidentalmente en una red pública.

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

Tras aplicar este manifiesto, tu servicio recibirá una dirección IP dentro del rango `10.20.1.1 – 10.20.1.127` y será accesible desde tu red interna conectada al clúster.

**Ejemplo: Exponer un servicio en la red externa**

Para solicitar una dirección IP desde el rango externo (`10.20.1.128 – 10.20.1.254`), debes añadir la etiqueta `lb-type: external` a tu servicio.

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

> **Importante**: Esta gama sigue estando **dentro de un espacio de direcciones privadas**. Para una **exposición pública**, es necesario crear una **regla NAT (DNAT)** en el firewall de tu infraestructura para redirigir el tráfico desde una de tus direcciones IP públicas externas hacia la dirección IP privada asignada por MetalLB.

## Direcciones IP Públicas

Su clúster Kubernetes gestionado se entregó originalmente con 2 direcciones IPv4 públicas.

La primera IP se utiliza en el puerto 6443 para la API de Kubernetes (en nuestro ejemplo: ctodev.mk.ms-cloud-temple.com:6443).

Esta misma IP también se traduce (NAT) al controlador de ingreso *"nginx-external-secured"* en el puerto 443. Esto permite exponer las diferentes consolas puestas a su disposición (consulte la guía de inicio rápido). El acceso a esta IP pública está **filtrado** mediante una lista de direcciones IP autorizadas.

---
La segunda IP pública se traduce (NAT) al controlador de ingreso *"nginx-external"* en los puertos 80 y 443.

Las aplicaciones expuestas mediante la clase de ingreso *"nginx-external"* serán, por tanto, directamente accesibles desde Internet a través de esta IP.

*Si desea realizar modificaciones en las reglas del firewall (añadir o eliminar direcciones IP autorizadas), debe solicitar soporte.*

*Es posible agregar otras direcciones IP públicas si lo desea.*

## DNS

Para el DNS interno (CoreDNS), el clúster tendrá estos parámetros:

- Nombre del clúster: ` <identificador del clúster>`
- Dominio interno: `<identificador del clúster>-cluster.local` (en nuestro ejemplo: ctodev-cluster.local)

Este dominio interno es fundamental para la comunicación entre servicios dentro del clúster. Permite que una aplicación se comunique con otra aplicación simplemente utilizando el nombre del servicio de Kubernetes, sin necesidad de conocer su dirección IP interna.

Por ejemplo, un servicio llamado `api-backend` en el namespace `production` será automáticamente resoluble a la dirección `api-backend.production.svc.ctodev-cluster.local`.

---

La zona DNS pública utilizada para los clústeres Kubernetes gestionados es `.mk.ms-cloud-temple.com`.

El ingress *"nginx-external"* (mapeado a la IP pública número 2) es accesible mediante `"*.external.<su identificador de clúster>.mk.ms-cloud-temple.com"`.  
Si publica una aplicación con esta clase de ingress, podrá acceder a ella directamente mediante este nombre de dominio. Consulte el tutorial: [Desplegar su primera aplicación](./firstdeploy)

## Hubble: Observabilidad de red al alcance de la mano

Hubble es una interfaz gráfica y de línea de comandos para visualizar y comprender los flujos de red de su clúster. Basado en Cilium, le ofrece un mapa detallado de servicios, dependencias y políticas de red en tiempo real.

Con Hubble, puede:
- **Visualizar los flujos de tráfico** entre sus pods y servicios.
- **Identificar problemas de conectividad** y errores de red.
- **Verificar la aplicación de sus políticas de seguridad** (Network Policies).
- **Explorar las dependencias** entre sus diferentes aplicaciones.

### Acceder a la interfaz Hubble

La interfaz gráfica de Hubble se expone en una URL interna de su clúster. No es posible acceder mediante `kubectl port-forward` porque los usuarios no tienen los permisos suficientes en el namespace `kube-system`.

Para acceder a ella, deberá estar conectado a la red interna del clúster (por ejemplo, a través de un bastión o una VPN). La URL que debe utilizar es la siguiente:

`http://hubble.internal.<su-identificador-de-clúster>.mk.ms-cloud-temple.com`

Para que esta URL sea resoluble desde su estación de trabajo, probablemente deberá agregar una entrada en su archivo `hosts` o en su DNS interno. Puede obtener la dirección IP interna del Ingress de Hubble con el siguiente comando:

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Creación de zonas DNS internas (cluster privado)

Para reforzar la seguridad y simplificar el acceso a sus servicios y a la API de Kubernetes desde su red interna, se recomienda crear una zona DNS interna. Esta zona permitirá resolver los nombres de dominio de sus Ingress y de la API de Kubernetes hacia sus direcciones IP privadas respectivas, evitando así el tráfico a través de redes públicas.

**Ejemplo de configuración con nuestro cluster "ctodev", cuyo rango asignado es** **10.20.0.0/22 :**

Basándose en las URLs proporcionadas en la guía de inicio, puede configurar su DNS interno de la siguiente manera:

1.  **Cree la zona DNS privada** en sus servidores DNS internos para `.<identificador del cluster>.mk.ms-cloud-temple.com`

2.  **Agregue los siguientes registros de tipo A**:

    -   **Para la API de Kubernetes:**
        -   `. -> 10.20.0.20` (IP virtual de la API)

    -   **Para servicios internos (a través del Ingress `nginx-internal`):**
        -   `hubble.internal -> 10.20.1.1`
        -   `argocd.internal -> 10.20.1.1`
        -   `ceph.internal -> 10.20.1.1`

    -   **Para servicios seguros (a través del Ingress `nginx-external-secure`):**
        -   `k10.external-secured -> 10.20.1.129`
        -   `grafana.external-secured -> 10.20.1.129`
        -   `harbor.external-secured -> 10.20.1.129`
        -   `kubecost.external-secured -> 10.20.1.129`

Esta configuración garantiza que el tráfico hacia la API y los servicios internos permanezca confinado a su red privada, conforme a las mejores prácticas de seguridad.

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

:::warning Para ir más allá: seguridad en producción
Este documento explica los conceptos fundamentales de red. Para un despliegue en producción, es crucial aplicar medidas de seguridad adicionales:

-   **Utilice imágenes seguras**: Prefiera imágenes procedentes de su registro empresarial seguro, como **Harbor**, en lugar de imágenes públicas.
-   **Controle los flujos de red**: Implemente `NetworkPolicies` para controlar las comunicaciones solo a los flujos necesarios entre sus aplicaciones.
-   **Aplicar políticas de gobernanza**: Utilice herramientas como **Kyverno** para imponer reglas de seguridad (por ejemplo: prohibir contenedores con privilegios "root", exigir `requests` y `limits` de recursos, etc.).
:::