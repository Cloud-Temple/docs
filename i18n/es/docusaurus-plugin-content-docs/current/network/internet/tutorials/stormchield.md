---
title: Desplegar un firewall Stormshield SNS EVA
sidebar_label: Desplegar un firewall Stormshield SNS EVA
sidebar_position: 6
---

# Desplegar un firewall Stormshield SNS EVA

## Prerrequisitos

Antes de comenzar, debe contar con una cuenta de Cloud Temple activa y los permisos correspondientes:

- haber suscrito la oferta de Cloud Temple;
- contar con permisos sobre el módulo Compute.

Una vez reunidos estos elementos, el despliegue solo toma unos minutos.

## Qué es Stormshield SNS

Stormshield Network Security (SNS) es un firewall / UTM francés editado por Stormshield. Su variante virtual se llama SNS EVA (Elastic Virtual Appliance). Sus puntos fuertes:

- una interfaz web de administración completa;
- un motor de filtrado y NAT por reglas ordenadas;
- el motor de enrutamiento dinámico BIRD (BGP, OSPF, RIP) integrado;
- el soporte nativo de IPsec y SSL VPN.

Toda la administración se realiza desde un navegador. Una vez que la red está configurada, ya no se necesita un acceso a consola, salvo para algunas verificaciones avanzadas como el estado de las sesiones BGP.

## El principio de despliegue

Se montan dos máquinas virtuales:

- el firewall en sí, desplegado desde la imagen SNS EVA;
- una VM de gestión con interfaz gráfica, colocada en la misma red que la interfaz LAN del firewall. Es desde esta VM desde donde se realiza la configuración inicial del firewall.

El firewall tiene dos interfaces: LAN **(lado de red interna, nombrada `in` en SNS)** y WAN **(lado de Internet, nombrada `out` en SNS.)**
Vamos a configurar la interfaz LAN para acceder a la interfaz web del firewall y poder posteriormente realizar la configuración del acceso a Internet.

# Paso 1 — Recuperar los parámetros de red en Shiva

En la interfaz Shiva de Cloud Temple necesitará recuperar los siguientes elementos para configurar la sesión BGP que da acceso a Internet :

- **Prefijo público** : su bloque de IPs públicas (pestaña « IP públicas »)
- **Prefijo de interconexión** : la subred punto a punto que porta el enlace BGP (pestaña « IP de interco »)
- **Dirección de puerta de enlace compartida** (pestaña « IP de interco »)
- **AS local** : el número de AS de su organización
- **AS de socio** : el número de AS de Cloud Temple
- **Keepalive timer** : el intervalo que mantiene la sesión BGP viva
- **Hold-time timer** : el tiempo antes de que la sesión sea declarada muerta
- **Direcciones de los route servers** : los servidores con los que se intercambian las rutas

Mantenga esta lista a la vista, volveremos a ella en el paso WAN y en la configuración de BIRD.

![Parámetros BGP en Shiva](/img/screenshots/shiva.png)

# Paso 2 — Desplegar las dos VM

Desde **Shiva** :

1. despliegue el firewall a partir de la imagen SNS EVA desde la Marketplace ;
2. despliegue la VM de gestión con interfaz gráfica (Ubuntu por ejemplo).

La interfaz WAN de su firewall debe estar configurada en su vLAN Internet con una IP tomada del prefijo de interconexión proporcionado por Shiva.

# Paso 3 — Configurar el LAN y unirse a la interfaz web

En la interfaz LAN del firewall, asigne una IP de su red interna con su máscara de subred.
:::info
En SNS esto se hace en el primer arranque a través de la consola.
:::

![Interfaz LAN](/img/screenshots/storm-in.png)

Coloque luego la VM de gestión en esta misma red.  
Para la demostración utilizamos una imagen Ubuntu 26.04 LTS disponible en la Marketplace, con una IP del mismo subred asignada vía Netplan.  
:::info
La puerta de enlace predeterminada de esta VM debe ser la dirección LAN del firewall.
:::

Abra un navegador en la VM de gestión e ingrese la dirección `https://IP-LAN-du-firewall/admin`.

Ahora debería poder acceder a la interfaz de administración de SNS.

![Login firewall](/img/screenshots/storm-login.png)

<div align="center">

**Credenciales predeterminadas**
Username : **admin**
Password : **admin**

</div>

:::warning[Cambie la contraseña de inmediato]
Antes de continuar, reemplace la contraseña `admin` predeterminada.
:::

# Paso 4 — Configuración de la interfaz WAN

Todo se realiza ahora en la interfaz web, bajo **Configuración > Red**.

:::info[Las direcciones IP son objetos]
En SNS, no se introduce una dirección IP directamente en los campos de las rutas, las reglas de filtrado o del NAT: primero debe declararse como objeto de red en Configuración > Objetos > Objetos de red, y luego seleccionarse.  
  
 Cree a medida los objetos que necesite (pasarela, route servers, prefijo público, redes LAN y WAN).
:::

## 4.1 — La interfaz WAN

En **Red > Interfaces**, configure en la interfaz WAN (`out`) una IP tomada del prefijo de interconexión.

![Interface WAN](/img/screenshots/storm-out.png)

## 4.2 — La pasarela

En **Red > Enrutamiento**, defina la pasarela predeterminada con la dirección de pasarela compartida anotada en el paso 1.

![Passerelle WAN](/img/screenshots/storm-gw.png)

# Paso 5 — Crear la loopback para el prefijo público

El prefijo público debe ser portado por una interfaz loopback en el firewall.

En **Red > Interfaces virtuales**, pestaña **Loopback**, agregue una loopback con su IP pública en `/32`.

![Loopback](/img/screenshots/storm-loopback.png)

# Paso 6 — Montar la sesión BGP

En SNS, el BGP se configura en el motor BIRD, a través de **Configuración > Red > Enrutamiento dinámico**.

## 6.1 — Rutas estáticas hacia los route servers

En **Red > Enrutamiento > Rutas estáticas**, agregue una ruta en `/32` hacia cada route server, apuntando a la pasarela compartida.  

:::info
Estas rutas deben declararse aquí y no en BIRD, para evitar que el tráfico BGP sea bloqueado por las alarmas de suplantación de dirección IP.
:::

![Rutas estáticas hacia los route servers](/img/screenshots/storm-routes.png)

## 6.2 — Activar el enrutamiento dinámico

En **Enrutamiento dinámico**, active el enrutamiento dinámico BIRD y seleccione la versión **BIRD v2**.

## 6.3 — Escribir la configuración BIRD

En la pestaña **BIRD V2**, introduzca la configuración reemplazando los valores por los suyos (anotados en el paso 1). Se declara un bloque `protocol bgp` por route server.

![Configuration BIRD](/img/screenshots/storm-bird-bgp.png)


```
router id <ip-wan-firewall>;

# On n'annonce que le préfixe public
filter export_public {
    if net = <prefixe-public> then accept;
    else reject;
}

# Route blackhole pour annoncer le préfixe public
protocol static StaticRoutes {
    ipv4;
    route <prefixe-public> blackhole;
}

protocol kernel {
    persist;
    scan time 20;
    ipv4 {
        export all;
        preference 254;
    };
    learn;
}

protocol device {
    scan time 10;
}

# Session vers le route server 1
protocol bgp RS1 {
    description "Route server 1";
    local as <local-as>;
    neighbor <ip-route-server-1> as <as-partenaire>;
    multihop 5;
    hold time <hold-time>;
    keepalive time <keepalive>;
    source address <ip-wan-firewall>;
    ipv4 {
        import all;
        export filter export_public;
    };
}

# Session vers le route server 2
protocol bgp RS2 {
    description "Route server 2";
    local as <local-as>;
    neighbor <ip-route-server-2> as <as-partenaire>;
    multihop 5;
    hold time <hold-time>;
    keepalive time <keepalive>;
    source address <ip-wan-firewall>;
    ipv4 {
        import all;
        export filter export_public;
    };
}
```

Haga clic en **Verificar la configuración** y luego en **Aplicar**.

:::info[¿Por qué el multi-hop?]
Los route servers están a más de un salto, y una sesión eBGP tiene un TTL de 1 por defecto: sin `multihop`, los paquetes nunca llegarían a los servidores.
:::

## 6.4 — Verificar la sesión

Desde la interfaz web, abra **Monitoring > Conexiones**. Las dos sesiones hacia los route servers aparecen allí con protocolo `tcp`, servicio `bgp`, con tráfico intercambiado en ambos sentidos y una duración que aumenta: las sesiones están establecidas.

![Sesiones BGP en Monitoring > Conexiones](/img/screenshots/storm-gui-bgp.png)

La verificación también puede realizarse en consola: `birdc` y luego `show protocols`. El estado debe mostrar `Established` para RS1 y RS2.

![birdc show protocols](/img/screenshots/storm-birdc.png)

# Paso 7 — Configurar el filtrado

El filtrado se realiza en Configuration > Política de seguridad > Filtrado y NAT, pestaña Filtrado.

Cree las reglas de seguridad conforme a la captura siguiente.  
La política se evalúa de arriba hacia abajo: las reglas que autorizan la administración del firewall y las sesiones BGP deben colocarse antes de las reglas de acceso a Internet.  
  
Por último, la regla Block all debe permanecer obligatoriamente en la última posición para bloquear todo tráfico no explícitamente autorizado.

:::info
Las reglas que autorizan las sesiones BGP hacia los dos route servers son indispensables para el correcto establecimiento del peering.
:::
  

![Show flow rules](/img/screenshots/storm-rules.png)

La regla `Block all` debe permanecer en la última posición. Las reglas 3 y 4 son necesarias para que las sesiones BGP puedan establecerse.

# Paso 8 — Configurar el NAT

En el mismo menú, abra la pestaña NAT.

Configure las reglas como se indica en la captura de pantalla siguiente.  
:::info
 El orden es esencial: las dos primeras reglas permiten excluir el tráfico BGP de cualquier traducción de dirección, mientras que las dos siguientes realizan la traducción de los flujos de Internet provenientes del LAN y del firewall.
:::
  
Para las reglas de acceso a Internet, utilice el objeto **Internet** como destino en lugar de Any.  

:::info
Este objeto excluye automáticamente las redes directamente conectadas al firewall, evitando así hacer NAT de las comunicaciones de administración o las sesiones BGP.
:::
Las reglas de exclusión BGP utilizan la misma dirección de origen antes y después de la traducción. Esta configuración responde a la restricción de SNS, que no permite reglas NAT sin traducción, manteniendo el tráfico BGP sin cambios.

Una vez creadas las reglas, active la política **(Editar > Activar esta política).**

![Show NAT](/img/screenshots/storm-nat.png)


En el destino de las reglas de acceso a Internet (3 y 4), utilice el objeto **Internet** y no **Any**: el objeto Internet excluye las redes directamente conectadas al firewall, lo que evita hacer NAT del tráfico de administración y del tráfico BGP.

Para las reglas 1 y 2, la fuente traducida es idéntica a la fuente de origen: SNS no acepta reglas NAT sin traducción, por lo que este truco equivale a no modificar el tráfico BGP mientras se satisface esta restricción.

Después de ingresar las reglas, active la política para hacerla efectiva (**Editar > Activar esta política**).

# Paso 9 — Probar la conectividad

**Desde la consola del firewall:**

```
birdc show protocols     # les sessions aux route serveurs doivent être Established
ping 1.1.1.1             # le firewall accède à Internet
```

**Desde la máquina de gestión:**

![ping](/img/screenshots/pingvm.png)

# Conclusión

El firewall Stormshield SNS EVA está desplegado, las sesiones BGP están establecidas vía BIRD y su prefijo público está anunciado.

**Si es necesario, la documentación oficial de Stormshield.**

https://documentation.stormshield.eu/SNS/v4/fr/Content/Home.htm