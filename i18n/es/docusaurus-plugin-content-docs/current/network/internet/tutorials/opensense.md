---
sidebar_position: 1
---

# Desplegar un firewall open source OPNsense

## Prerrequisitos

Antes de comenzar, se requiere una cuenta de Cloud Temple activa y los permisos correspondientes:

- haber suscrito la oferta de Cloud Temple;
- disponer de los permisos sobre el módulo Compute.

Una vez reunidos estos elementos, el despliegue solo toma unos pocos minutos.

## Qué es OPNsense

OPNsense es un firewall y router de código abierto basado en FreeBSD. Es un fork de pfSense creado en 2014. Sus puntos fuertes:

- una interfaz web clara y moderna;
- actualizaciones dos veces por semana;
- una arquitectura modular con un sistema de plugins;
- soporte nativo de OpenVPN, WireGuard e IPsec.

Toda la administración se realiza desde un navegador. Una vez que la red está configurada, ya no se necesita acceso a consola.

## El principio de despliegue

Se levantan dos máquinas virtuales :

- **el firewall** en sí, desplegado desde la plantilla OPNsense ;
- **una VM de gestión** con interfaz gráfica, colocada en la misma red que la interfaz LAN del firewall. Es desde esta VM desde donde se realiza la configuración inicial del firewall.

El firewall tiene dos interfaces : **LAN** (lado de red interna) y **WAN** (lado de Internet).  
Vamos a configurar la interfaz LAN para acceder a la interfaz web del firewall y poder posteriormente realizar la configuración del acceso a Internet.

# Paso 1 — Recuperar los parámetros de red en Shiva

En la interfaz Shiva de Cloud Temple necesitará recuperar los siguientes elementos para configurar la sesión BGP que da acceso a internet

- **Prefijo público**: su bloque de IPs públicas (pestaña « IPs públicas »)
- **Prefijo de interconexión**: la subred punto a punto que porta el enlace BGP (pestaña « IPs de interco »)
- **Dirección de puerta de enlace compartida** (pestaña « IPs de interco »)
- **AS local**: el número de AS de su organización
- **AS de socio**: el número de AS de Cloud Temple
- **Keepalive timer**: el intervalo que mantiene la sesión BGP activa
- **Hold-time timer**: el tiempo antes de que la sesión sea declarada caída
- **Direcciones de los route servers**: los servidores con los que se intercambian las rutas

Mantenga esta lista a la vista, volveremos a ella en la etapa WAN.

![Parámetros BGP en Shiva](/img/screenshots/shiva.png)
![IPs públicas](/img/screenshots/ip-publiques.png)
![IPs de interco](/img/screenshots/ip-dintercos.png)

# Paso 2 — Desplegar las dos VM

Desde **Shiva** :

1. despliegue el firewall a partir de la plantilla OPNsense ;
2. despliegue la VM de gestión con interfaz gráfica, aquí utilizamos la imagen Ubuntu 26.04 LTS disponible en la Marketplace.

La interfaz WAN de su firewall debe estar configurada en su vlan Internet con una IP tomada del prefijo de interconexión proporcionado por Shiva.

# Paso 3 — Configurar el LAN y acceder a la interfaz web


En la interfaz **LAN** del firewall, asigne una IP de su red interna, con su máscara de subred y su puerta de enlace.

![Paramètres LAN](/img/screenshots/lan.png)

Coloque luego la VM de gestión en esta misma red.  
Para la demostración utilizamos Ubuntu 22.04, con una IP del mismo subred asignada vía Netplan.

Abra un navegador en la VM de gestión e ingrese la IP LAN del firewall.  
  
Ahora debería poder acceder a la interfaz de administración de OPNsense.

![Login firewall](/img/screenshots/login-fw.png)

<div align="center">

**Credenciales por defecto**
Usuario : **root**
Contraseña : **opnsense**

</div>

:::warning[Changez le mot de passe tout de suite]
Antes de continuar, reemplace la contraseña `root` por defecto.
:::

# Paso 4 — Configuración de la interfaz  WAN

Todo se realiza ahora en la interfaz web.

## 4.1 — La pasarela

Configure primero la **pasarela** WAN con la dirección de pasarela compartida anotada en el paso 1.

![Gateway WAN](/img/screenshots/wan-gw.png)

## 4.2 — La interfaz WAN

Configure en la interfaz WAN una IP tomada del prefijo de interconexión, y asocie la interfaz con la pasarela que acaba de crear.

![Interface WAN](/img/screenshots/ip-wan.png)

# Paso 5 — Establecer la sesión BGP

## 5.1 — Activar el enrutamiento

Vaya a **Routing > General** y marque **Enable**.

![Routing General](/img/screenshots/routing-general.png)
![Routing BGP](/img/screenshots/routing-bgp.png)

A continuación, proporcione la información de conexión hacia los route servers :

- las IP de los route servers ;
- el número de AS del socio.

:::info[¿Por qué el multi-hop ?]
Marque la casilla **multi-hop**. Los route servers están a más de un salto, y una sesión eBGP tiene un TTL de 1 por defecto : sin multi-hop, los paquetes nunca llegarían a los servidores.
:::

![PEER1](/img/screenshots/peer1.png)
![PEER2](/img/screenshots/peer2.png)

## 5.2 — Rutas estáticas hacia los route servers

En **Routing > Static**, agregue las rutas para conectar con estos servidores (cada una en `/32`).

![Activer les routes statiques](/img/screenshots/routing-static-enable.png)
![Route RS1](/img/screenshots/routes-peer1.png)
![Route RS2](/img/screenshots/routes-peer2.png)

## 5.3 — Redistribución de rutas

Autorice la **redistribución de rutas estáticas y conectadas** para anunciar su prefijo público.

![Redistribution des routes statiques](/img/screenshots/redistribute-static.png)
![Redistribution des routes connectées](/img/screenshots/redistribute-connected.png)

## 5.4 — Verificar la sesión

Diríjase a **Routing > Diagnostic > BGP**.  
Si los parámetros son correctos, el **BGP State** muestra `established`.

![Peer 1 established](/img/screenshots/peer1-established.png)
![Peer 2 established](/img/screenshots/peer2-established.png)

# Paso 6 — Anunciar el prefijo público

Siempre en **Routing > Static**, cree una ruta que apunte hacia la **loopback** del firewall, esto crea una ruta « blackhole ».

Esta ruta permite anunciar su prefijo público a los servidores de rutas.

![Préfixe public / route blackhole](/img/screenshots/prefix-pub.png)

# Paso 7 — Configurar el NAT

Para finalizar, algunas reglas NAT que deben ingresarse manualmente.  
**El orden importa** : las reglas « no NAT » deben ir antes que las reglas de acceso a Internet, de lo contrario el NAT se aplicará al tráfico BGP y la sesión se caerá.

**No hacer NAT con los peers BGP** (esta debe ir en primer lugar) :

**Dar acceso a Internet a su red LAN** :

**Dar acceso a Internet al propio firewall**, para sus actualizaciones :


![NAT Rules](/img/screenshots/NAT-rules.png)

Solo queda probar la conectividad hacia Internet desde la máquina de gestión :

![ping](/img/screenshots/pingvm.png)

# Conclusión

El firewall OPNsense está desplegado, las sesiones BGP están establecidas y su prefijo público está anunciado.  


**Si es necesario, la documentación oficial de OPNsense.**


https://docs.opnsense.org/index.html