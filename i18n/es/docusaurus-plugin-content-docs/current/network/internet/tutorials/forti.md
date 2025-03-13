---
title: Desplegar un firewall virtual Fortigate
tags:
  - internet
  - tutorials
---

import fortiSupport from '../images/forti_support.png';
import fortiSupportVm01 from '../images/forti_support_vm_01.png';
import fortiSupportVm02 from '../images/forti_support_vm_02.png';
import asn from '../images/asn.png';
import ipsPub from '../images/ips_pub.png';
import ipsInterco from '../images/ips_interco.png';
import fortiVmType01 from '../images/forti_vm_type_01.png';
import shivaCatalogues from '../images/shiva_catalogues.png';
import imgImport01 from '../images/img_import_01.png';
import imgImport02 from '../images/img_import_02.png';
import imgImport03 from '../images/img_import_03.png';
import imgImport04 from '../images/img_import_04.png';
import imgImport05 from '../images/img_import_05.png';
import imgImport06 from '../images/img_import_06.png';
import imgImport07 from '../images/img_import_07.png';
import imgImport08 from '../images/img_import_08.png';
import imgImport09 from '../images/img_import_09.png';
import imgImport10 from '../images/img_import_10.png';
import imgImport11 from '../images/img_import_11.png';
import imgImport12 from '../images/img_import_12.png';
import ipPlan01 from '../images/ip_plan_01.png';
import ipPlan02 from '../images/ip_plan_02.png';
import ipPlan03 from '../images/ip_plan_03.png';
import ipPlan04 from '../images/ip_plan_04.png';
import ipPlan05 from '../images/ip_plan_05.png';
import imgDeploy01 from '../images/img_deploy_01.png';
import imgDeploy02 from '../images/img_deploy_02.png';
import imgDeploy03 from '../images/img_deploy_03.png';
import imgDeploy04 from '../images/img_deploy_04.png';
import imgDeploy05 from '../images/img_deploy_05.png';
import imgDeploy06 from '../images/img_deploy_06.png';
import imgDeploy07 from '../images/img_deploy_07.png';
import imgDeploy08 from '../images/img_deploy_08.png';
import imgDeploy09 from '../images/img_deploy_09.png';
import imgDeploy10 from '../images/img_deploy_10.png';
import imgDeploy11 from '../images/img_deploy_11.png';
import imgBackup01 from '../images/img_backup_01.png';
import imgBackup02 from '../images/img_backup_02.png';
import imgBackup03 from '../images/img_backup_03.png';
import imgBackup04 from '../images/img_backup_04.png';
import vmStart01 from '../images/vm_start_01.png';
import vmStart02 from '../images/vm_start_02.png';
import vmConsole01 from '../images/vm_console_01.png';
import vmBoot01 from '../images/vm_boot_01.png';
import vmBoot02 from '../images/vm_boot_02.png';
import vmBoot03 from '../images/vm_boot_03.png';
import vmBoot04 from '../images/vm_boot_04.png';

## Objetivo de esta guía

Esta guía detalla los pasos esenciales para desplegar eficazmente un firewall individual o un clúster de firewalls en un entorno SecNumCloud.

**Nota:** *Las configuraciones presentadas en este documento sirven como guía de referencia y deben ser cuidadosamente adaptadas a las especificidades técnicas, a los requisitos de seguridad y a los objetivos operativos propios de cada entorno*

## Prerrequisitos para esta guía

### Derechos necesarios

El despliegue de los appliances virtuales requiere un acceso al tenant del cliente en la consola Cloud Temple con los permisos específicos siguientes:

Si utiliza la oferta **OpenIaaS**:

| Nombre del permiso                           | Descripción del permiso                                                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| compute_iaas_opensource_console_access        | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                               |
| compute_iaas_opensource_infrastructure_read   | Oferta OpenIaaS - Consulta de datos avanzados de los recursos VMware (reglas afinidad/anti-afinidad, configuración drs, etc)  |
| compute_iaas_opensource_infrastructure_write  | Oferta OpenIaaS - Gestión avanzada de los recursos VMware                                                                     |
| compute_iaas_opensource_read                  | Oferta OpenIaaS - Consulta de los recursos de tipo Máquinas Virtuales                                                         |
| compute_iaas_opensource_management            | Oferta OpenIaaS - Gestión de los recursos de tipo Máquinas Virtuales                                                          |
| compute_iaas_opensource_virtual_machine_power | Oferta OpenIaaS - Gestión de la alimentación de una máquina virtual                                                           |
| activity_read                                 | Consulta de los registros logs y actividades                                                                                  |

Si utiliza la oferta **Vmware**:

| Nombre del permiso                           | Descripción del permiso                                                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| compute_iaas_vmware_console_access            | Oferta Vmware - Apertura de la consola de una máquina virtual                                                                 |
| compute_iaas_vmware_infrastructure_read       | Oferta Vmware - Consulta de datos avanzados de los recursos VMware (reglas afinidad/anti-afinidad, configuración drs, etc)    |
| compute_iaas_vmware_infrastructure_write      | Oferta Vmware - Gestión avanzada de los recursos VMware                                                                       |
| compute_iaas_vmware_read                      | Oferta Vmware - Consulta de los recursos de tipo Máquinas Virtuales                                                           |
| compute_iaas_vmware_management                | Oferta Vmware - Gestión de los recursos de tipo Máquinas Virtuales                                                            |
| compute_iaas_vmware_virtual_machine_power     | Oferta Vmware - Gestión de la alimentación de una máquina virtual                                                             |
| activity_read                                 | Consulta de los registros logs y actividades                                                                                  |

Si desea utilizar ***Terraform***, se requieren los siguientes permisos adicionales:

| Nombre del permiso                           | Descripción del permiso                                                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| tag_read                                      | Consulta de las etiquetas, excepto las etiquetas RTMS                                                                         |
| tag_write                                     | Gestión de las etiquetas, excepto las etiquetas RTMS                                                                          |
| iam_read                                      | Consulta de los derechos de usuarios                                                                                          |
| iam_write                                     | Gestión de los derechos de usuarios                                                                                           |

La imagen OVA del appliance a desplegar debe estar disponible antes de comenzar el proceso. Encontrará las imágenes Fortinet en [el sitio de soporte](https://support.fortinet.com/welcome/). Es necesario disponer de una cuenta de soporte Fortinet.

Vaya a la **sección Download** y luego a **Firmware Images**:

<img src={fortiSupport} />

**Al 1° de julio de 2024, la versión 7.2 es recomendada.**

La imagen a descargar es la FGT_VM64 en formato OVF/ZIP:

<img src={fortiSupportVm01} />

**Nota:** *Si ha suscrito a una unidad de obra firewall Fortinet, el soporte de Cloud Temple puede proporcionar la imagen en formato OVA así como la licencia asociada.*

| Unidades de obra de infraestructura - FIREWALLS VIRTUALES | Unidad            | sku                     |
| :-------------------------------------------------------- | :---------------- | :---------------------- |
| FIREWALL UTM -Fortigate Virtual VM02V - sin vdom          | 1 clúster virtual | csp:fr1:licence:fw:ftg2 |
| FIREWALL UTM -Fortigate Virtual VM04V - sin vdom          | 1 clúster virtual | csp:fr1:licence:fw:ftg4 |
| FIREWALL UTM -Fortigate Virtual VM08V - sin vdom          | 1 clúster virtual | csp:fr1:licence:fw:ftg8 |
| FIREWALL UTM -Fortigate - 5 vdom complementarios          | 5 vdom            | csp:fr1:licence:fw:vdom |

### Información de conectividad de red

Debe disponer de la información necesaria para establecer la sesión BGP con el backbone. Estos datos están disponibles en la consola Cloud Temple, en la sección Network → Internet → ASNs:

<img src={asn} />

También debe disponer de una franja de direcciones IP públicas cuyo alcance esté acorde con sus necesidades. La franja de direcciones reservada se indica en la consola Cloud Temple en la sección Network → Internet → IP públicas. Aquí hay un ejemplo:

<img src={ipsPub} />

Finalmente, debe disponer del bloque que le es asignado en la red de interconexión BGP para poder beneficiarse de una ruta hacia Internet. La red de interconexión Cloud Temple es el 100.64.0.0/16 y cada acceso dispone de una subred de interconexión de tipo /28. Esta red se utiliza para el establecimiento de la sesión BGP con el núcleo de enrutamiento Cloud Temple. Encontrará este rango en la consola Cloud Temple en la sección Network → Internet → IPs de interconexiones. Aquí hay un ejemplo:

<img src={ipsInterco} />

**Nota:** *Debe haber suscrito a las unidades de obras asociadas de conectividad a Internet. Entonces verá aparecer la información de conectividad en la consola Cloud Temple.*

## Estructura de red tipo

La estructura tipo de un despliegue Cloud Temple es de tipo Clúster en continuidad de actividad. Implica la implementación y suscripción a al menos 2 zonas de disponibilidad en una región.

El despliegue estándar de los firewalls se lleva a cabo en clúster, con un equipo en cada zona de disponibilidad SNC. Una red virtual asegura la sincronización del clúster. Los puertos WAN acceden a Internet a través de la red de interconexión.

Se necesita una configuración inicial para establecer las sesiones BGP, permitiendo así la conectividad a Internet. Las VLAN privadas se enrutan hacia las interfaces LAN del firewall virtual a través de un trunk (agrupación de redes de nivel 2 mediante la tecnología 802.1q).

**Nota:** *Aunque no se recomienda esta arquitectura, esta guía también se aplica a los despliegues mono-AZ.*

## Importar el appliance Fortinet en la consola Cloud Temple

### Descompresión del archivo appliance

Después de descargar desde el sitio de soporte Fortinet, descomprima el archivo ZIP para obtener:

- Los discos virtuales VMDK del appliance,

- Los archivos OVF que describen el appliance para diferentes formatos de hardware virtual VMware.

<img src={fortiSupportVm02} />

Aquí están los tipos de plantilla comúnmente integrados en el .ZIP:

| Plantilla                      | Compatible con                           |
| ------------------------------ | ----------------------------------------- |
| FortiGate-VM64.ovf             | ESXI 8.0 (versión de hardware 20) o posterior |
| FortiGate-VM64.hw13.ovf        | ESXI 6.5 (versión de hardware 13) o posterior |
| FortiGate-VM64.hw15.ovf        | ESXI 6.7U2+ (versión de hardware 15) o posterior |
| FortiGate-VM64.hw17.ovf        | ESXI 7.0 (versión de hardware 17) o posterior |
| FortiGate-VM64.vapp.ovf        | ESXI 8.0 (versión de hardware 20) o posterior |
| FortiGate-VM64.nsxt.ovf        | ESXI 6.7U2+ (versión de hardware 15) o posterior |
| FortiGate-VM64-ZNTA.vapp.ovf   | ESXI 7.0 (versión de hardware 17) o posterior |

### Importar el appliance en su catálogo de imágenes vía la consola Cloud Temple

Conéctese a su "tenant" dentro de la consola Cloud Temple, luego vaya a "**Catálogo**" y "**Publicar archivos**":

<img src={shivaCatalogues} />

Elija un nombre para su imagen. Le recomendamos usar: **FGT-VM-VERSION-AZ**, por ejemplo aquí FGT-VM-*7.2.8*-*TH3S*:

<img src={imgImport01} />

Indique luego la librería de imágenes de la zona de disponibilidad **(1)**:

<img src={imgImport02} />

Luego elija los archivos para publicar en la librería **(2)**:

<img src={imgImport03} />

<img src={imgImport04} />

Luego haga clic en "**publicar archivos**":

<img src={imgImport05} />

Espere a que la descarga de sus archivos en la librería termine:

<img src={imgImport06} />

<img src={imgImport07} />

*La operación debe repetirse para cada zona de disponibilidad donde desee desplegar un appliance.*

Por ejemplo, para la segunda zona PAR7S:

<img src={imgImport08} />

<img src={imgImport09} />

<img src={imgImport10} />

<img src={imgImport11} />

<img src={imgImport12} />

**Nota:**

- ***(1)*** *Cada zona de disponibilidad tiene una librería de imágenes para los hipervisores de esa zona.*

- ***(2)*** *para el archivo .ovf, elija una versión cuyo hardware virtual sea compatible con la versión de los hipervisores ESXi (al 1° de julio de 2024, la versión máxima soportada es la **v19** correspondiente a ESX 7.0.x.).*

## Despliegue del appliance Fortinet en una zona de disponibilidad

### Planificar el despliegue de su interconexión BGP

Debe seleccionar una dirección IP de interconexión para su futuro appliance Firewall. La primera dirección es siempre la puerta de enlace BGP Cloud Temple. Las otras direcciones están disponibles en principio (a menos que haya desplegado otros equipos previamente):

<img src={ipPlan01} />

La regla es tomar las IP libres en secuencia:

<img src={ipPlan02} />

### Planificar el uso de sus direcciones IP públicas

Todas las IP públicas asignadas son utilizables para su tenant. El tamaño de la subred depende de las unidades de obras suscritas.

<img src={ipPlan03} />

### Parámetros de configuración BGP4

Tome nota de las 3 informaciones importantes siguientes para la configuración de BGP4:

<img src={ipPlan04} />

- **AS Socio**: el AS remoto utilizado para montar la sesión BGP desde el punto de vista del firewall, que es el AS Cloud Temple.

- **Route Servers**: los dos peers BGP hacia donde montar una sesión BGP.

- **Nombre**: el número de AS propio del tenant; quite el prefijo *AS* para mantener solo el número.

<img src={ipPlan05} />

### Desplegar el appliance en la infraestructura

Desde la librería de la zona de disponibilidad en la que desea instalar su appliance, seleccione la plantilla y luego "**Desplegar**":

<img src={imgDeploy01} />

Debe nombrar la máquina virtual; le aconsejamos la nomenclatura siguiente: FGT-VM-**0X**-**ROLE**-**AZ**

- **0X**: corresponde al tipo de licencia Fortigate al que se haya suscrito:

<img src={fortiVmType01} />

- **ROLE**: Por ejemplo INTERNET para un firewall de interconexión INTERNET.

- **AZ**: La zona de disponibilidad

<img src={imgDeploy02} />

Luego elija la zona de disponibilidad:

<img src={imgDeploy03} />

Luego el clúster de hipervisor objetivo:

<img src={imgDeploy04} />

Elija el destino de almacenamiento:

<img src={imgDeploy05} />

Indique finalmente la información de configuración de su appliance y en particular la información de direccionamiento obtenida anteriormente:

<img src={imgDeploy06} />

- **Token**: no indicar nada

- **Configuration URL**: no indicar nada

- **Hostname**: idéntico al nombre de la envoltura de la VM

- **DNS**: 208.91.112.53 y 208.91.112.2 (por defecto, pero usted puede decidir utilizar otro DNS a su conveniencia)

- **Interface IP**: primera IP de interconexión libre

- **Netmask**: máscara de red del rango de interconexión

- **Interface 2**: no configurada

Haga clic en **Siguiente**. La información de configuración de las interfaces debe ser ingresada. La primera interfaz debe utilizarse para el acceso a Internet; las demás se asignarán temporalmente al VLAN dedicada a la alta disponibilidad:

<img src={imgDeploy07} />

finalmente, haga clic en "**Desplegar**".

<img src={imgDeploy08} />

<img src={imgDeploy09} />

Cuando el despliegue esté terminado, la consola Cloud Temple se lo indicará:

<img src={imgDeploy10} />

Su appliance ahora es visible en las máquinas virtuales:

<img src={imgDeploy11} />

### Asignación de una política de respaldo

En un entorno SecNumCloud, una máquina virtual debe tener una política de respaldo para arrancar. Usted puede configurarla en las políticas y lanzar la tarea de inventario:

<img src={imgBackup01} />

<img src={imgBackup02} />

Asigne la política correspondiente al RPO deseado, por defecto puede elegir una política diaria:

<img src={imgBackup03} />

Puede confirmar su elección:

<img src={imgBackup04} />

Si se requieren políticas adicionales (como en este ejemplo 'daily' y 'monthly'), repita la operación para cada política adicional.

### Arranque de la máquina virtual

El arranque de la máquina virtual se realiza desde la consola Cloud Temple:

<img src={vmStart01} />

Es posible observar la consola y el appliance Fortinet reiniciar nuevamente al final del primer arranque:

<img src={vmStart02} />

Después de este segundo arranque, la dirección IP indicada en el despliegue de la máquina virtual en la sección **OvfProperties** debe responder al ping, siempre que haya acceso a la red de interconexión.

## Configuración inicial

### Conexión a la consola

En la consola Cloud Temple, seleccione su appliance Fortinet y solicite la consola del appliance.

<img src={vmConsole01} />

Dependiendo del momento en que acceda a la consola, puede haber visto los arranques iniciales de esta:

<img src={vmBoot01} />

<img src={vmBoot02} />

Luego puede conectarse a la consola del appliance, el nombre de usuario es "**admin**". El appliance le pedirá que cambie la contraseña (no hay ninguna por defecto, solo presione ENTER).

Debe ingresar una nueva contraseña.

**Atención: El appliance está en teclado QWERTY.**

**En caso de error de contraseña, deberá reinstalar su appliance.**

<img src={vmBoot03} />

<img src={vmBoot04} />

### Configuración de la sesión BGP

En este paso, configuraremos en modo consola su appliance Fortinet para levantar el enlace BGP4

#### Configuración del rango de IPs Públicas

El primer paso consiste en definir los rangos de direcciones IP públicas. Para empezar, configuraremos solo el primer bloque. Utilizaremos la información que ha anotado anteriormente.

    config router prefix-list
        edit "pfx_net_public_customer"
        config rule
        edit 1
            set prefix 80.75.159.90/31
                unset ge
                set le 32
            next
        edit 100
            set action deny
            set prefix 0.0.0.0 0.0.0.0
                unset ge
                unset le
            next
        end
    next
    edit "pfx_deny_all"
        config rule
            edit 1
                set action deny
                set prefix 0.0.0.0 0.0.0.0
                unset ge
                unset le
        next
        end
    next
    end

Puede verificar que la configuración se ha realizado correctamente con el comando:

    show router prefix-list

#### Configuración del route map

Una "route map policy" sirve para definir políticas de enrutamiento más complejas que pueden influir o modificar el comportamiento del tráfico de red basado en criterios específicos. Los route maps son particularmente útiles para tareas avanzadas de gestión de tráfico, tales como el filtrado de rutas, la redirección de tráfico o la modificación de atributos de ruta en protocolos de enrutamiento dinámico como BGP (Border Gateway Protocol). En nuestro contexto, apunta a asegurar su red contra anuncios no válidos.

El segundo paso consiste en configurar la policy del route map:

    config router route-map
        edit "rm_deny_all"
            config rule
            edit 1
                set match-ip-address "pfx_deny_all"
            next
        end
        next
        edit "rm_net_public_customer"
            config rule
            edit 1
                set match-ip-address "pfx_net_public_customer"
            next
        end
        next
    end

Puede verificar que la configuración se ha realizado correctamente con el comando:

    show router route-map

#### Configuración del anuncio BGP

Ahora configuraremos el anuncio BGP. Debe tener en su poder, como se vio anteriormente en esta guía, la IP de interconexión (aquí, el router-id), la dirección IP del peer BGP4 (aquí, **100.64.0.1** y **100.64.0.2**), el AS local (aquí **4200000005**) y el rango IP Público previamente configurado. ***Recuerde***:

<img src={ipPlan04} />

y

<img src={ipPlan05} />

En esta configuración, el AS (sistema autónomo) de Cloud Temple es el 33930. El AS 65001 es un AS privado que lo representa. El uso en este nivel de un número AS privado es más adecuado, especialmente si hay múltiples conexiones BGP a configurar.

    config router bgp
        set as 65001                                                                    
        set router-id **100.64.1.110**                                                     
        set network-import-check disable                                                    
        set graceful-restart enable                                                           
        config neighbor
            edit "100.64.0.1" 
                set capability-graceful-restart enable
                set ebgp-enforce-multihop enable
                set next-hop-self enable
                set soft-reconfiguration enable
                set ebgp-multihop-ttl 3
                set remote-as 33930
                set local-as 4200000005
                set route-map-in "rm_deny_all"
                set route-map-out "rm_net_public_customer"
                set keep-alive-timer 10
                set holdtime-timer 30
            next
            edit "100.64.0.2"
                set capability-graceful-restart enable
                set ebgp-enforce-multihop enable
                set next-hop-self enable
                set soft-reconfiguration enable
                set ebgp-multihop-ttl 3
                set remote-as 33930
                set local-as 4200000005
                set route-map-in \"rm_deny_all\"
                set route-map-out \"rm_net_public_customer\"
                set keep-alive-timer 10
                set holdtime-timer 30
            next
        end

    config network
        edit 1
            set prefix 80.75.159.90/31
        next
    end
    config redistribute "connected"
    end
    config redistribute "static"
        set status enable
    end
    end

Puede después verificar que las sesiones BGP se han establecido:

    get router info bgp summary

#### Configuración de la dirección de LoopBack

Usar la dirección de loopback para establecer sesiones BGP entre pares mejora la estabilidad de la sesión. Las direcciones de loopback no dependen del estado de una interfaz física específica. Por lo tanto, incluso si una interfaz falla o si una ruta es interrumpida, la sesión BGP puede permanecer activa siempre y cuando exista otra ruta válida entre los pares. Esto aumenta la redundancia y la resiliencia de la red.

Usar direcciones de loopback para las sesiones BGP también ayuda a reforzar la seguridad. Las políticas de seguridad pueden aplicarse de manera más uniforme y eficaz a las direcciones de loopback, y medidas de seguridad adicionales como la autenticación y las listas de control de acceso pueden implementarse más fácilmente.

Recomendamos nombrar la dirección de LoopBack utilizando la primera IP pública del primer rango, que debería ser la dirección por defecto para salir a Internet: **LOOP_"PENÚLTIMO OCTETO DE LA IP PÚBLICA"_"ÚLTIMO OCTETO DE LA IP PÚBLICA"**

Por ejemplo, si su primera IP Pública de su primer rango es 80.75.159.90/32, la loopback se nombra **LOOP_159.90**.
En la línea de comando de su appliance, escriba (**¡Atención 80.75.159.90/32 es solo un ejemplo!**):

```
    config system interface 
        edit "LOOP_159_90"
        set vdom "root"
        set ip 80.75.159.90/32
        set allowaccess ping
        set type loopback
        next
    end
    config firewall ippool
        edit "NAT-PUB-ALL"
        set startip 80.75.159.90
        set endip 80.75.159.90
        next
    end
    config system dns
        set primary 96.45.45.45
        set secondary 96.45.46.46
        set source-ip 80.75.159.90
    end
    config system fortiguard
        set update-server-location eu
        set source-ip 80.75.159.90
    end
    config system ntp
        set ntpsync enable
        set source-ip 80.75.159.90
    end
```

Esto permite la configuración inicial del NAT, DNS, prevención de intrusiones y reloj. Ahora, su appliance debería poder hacer ping al exterior si la dirección IP de origen es la IP de NAT (aquí en este ejemplo 80.57.159.90).

**Recomendamos también cambiar el puerto de administración, que por defecto es 80 o 443.**

#### Configuración de las interfaces WAN y HA

Para simplificar la legibilidad de las interfaces en la administración de los equipos, recomendamos renombrar las interfaces para que su nombre corresponda a su rol en el firewall. Esto se hace mediante la definición de un alias en la interfaz.

El port1 se define como WAN y el port2 se renombra como HA. Para el puerto de HA, se define una dirección IP en el subnet APIPA para que los equipos puedan comunicarse de esta manera una vez en clúster.

```
config system interface
        edit "port1"
                set alias "WAN"
        next
        edit "port2"
                set ip 169.254.254.1 255.255.255.252
                set allowaccess ping
                set type physical
                set alias "HA"
                set snmp-index 2
        next
end
```

### Despliegue de un segundo miembro

#### Despliegue de la segunda VM

Para desplegar un segundo miembro para la creación del clúster, se recomienda disponer de una segunda AZ para asegurar la alta disponibilidad del clúster de firewall.

Para desplegar la segunda appliance, repita las acciones de despliegue indicadas anteriormente en la segunda AZ:

- Adición de la plantilla OVF en una biblioteca de contenido
- Despliegue de una VM desde esta biblioteca de contenido
- Asignación de una política de respaldo

Recomendamos mantener la política de nombrado de la VM, es decir, FGT-VM-0X-ROLE-AZ y para la dirección IP de la primera interfaz, será necesario usar la segunda IP libre del rango de interconexión.

#### Configuración de las interfaces WAN y HA

Siempre con el objetivo de simplificar la legibilidad de las interfaces, estas deben ser renombradas en el segundo miembro. También será necesario en esta etapa configurar la dirección IP de la interfaz de HA para que los equipos puedan comunicarse para la creación del clúster.

```
config system interface
        edit "port1"
                set alias "WAN"
        next
        edit "port2"
                set ip 169.254.254.2 255.255.255.252
                set allowaccess ping
                set type physical
                set alias "HA"
                set snmp-index 2
        next
end
```

### Creación del clúster

Configuraremos un clúster Activo/Pasivo. La contraseña constituye una clave compartida entre los dos miembros del clúster y debe ser conservada de manera segura. La comunicación entre los equipos se realiza en unicast y, por lo tanto, la IP del peer a indicar es la de la interfaz HA del firewall con el que se establecerá el clúster.
Finalmente, las interfaces mencionadas en la sección *monitor* son las interfaces supervisadas; si se pierde el enlace L2, esto provocará un failover del clúster.

En el primer equipo, esta configuración es:

```
config system ha
    set mode a-p
 set group-name "FTG-HA-INTERNET"
    set group-id 16
    set password SECRET
    set hbdev HA 10
 set priority 100
    set monitor "HA" "WAN"
    set unicast-hb enable
    set unicast-hb-peerip 169.254.254.2
end
```

Finalmente, en el segundo, cambiaremos la dirección IP del peer y bajaremos la prioridad para que el primer equipo sea elegido por defecto como el miembro activo del clúster:

```
config system ha
    set mode a-p
 set group-name "FTG-HA-INTERNET"
    set group-id 16
    set password SECRET
    set hbdev HA 10
 set priority 200
    set monitor "HA" "WAN"
    set unicast-hb enable
    set unicast-hb-peerip 169.254.254.1
end
```

La sincronización puede tomar unos minutos para establecerse.

Para una verificación completa, el comando *get sys ha status* es el comando indicado. Para verificar de manera más sucinta, debe ejecutar *diag sys ha checksum cluster*
Cuando la sincronización es funcional, los checksums de la línea *all* deben ser idénticos en ambos equipos.

```
# diag sys ha checksum cluster

================== FG3H0ZZZNNNNNNN1 ==================

is_manage_primary()=1, is_root_primary()=1
debugzone
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb

checksum
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb

================== FG3H0ZZZNNNNNNN2 ==================

is_manage_primary()=0, is_root_primary()=0
debugzone
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb

checksum
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb
```

#### Configuración de accesos externos en el firewall

Primero, trasladamos el puerto de administración del puerto 443 al puerto 8443 para permitir la liberación de un puerto estándar que pueda ser utilizado para usos empresariales.

```
config system global
 set admin-sport 8443
end
```

Agregamos un servicio personalizado para las reglas de flujo a seguir:

```
config firewall service custom
    edit "TCP-8443"
        set tcp-portrange 8443
    next
end
```

Autorización de la administración en la interfaz WAN y en la interfaz loopback. Será importante en esta etapa adaptar el nombre de la interfaz LOOP tal como se definió anteriormente:

```
edit port1
 set allowaccess ping https ssh http
next

config system interface
 edit "LOOP_0"
        set allowaccess ping https ssh http snmp
 next
end
```

Luego creamos una regla de flujo que autoriza el acceso a las interfaces de administración en la interfaz loopback. Esta regla es muy permisiva, permite todas las direcciones IP, por lo que es adecuado filtrar después en rangos explícitamente permitidos.

```
config firewall policy
    edit 1
        set name "WAN to LOOP"
        set srcintf "port1"
        set dstintf "LOOP_0"
        set action accept
        set srcaddr "all"
        set dstaddr "all"
        set schedule "always"
        set service "ALL_ICMP" "HTTP" "HTTPS" "SSH" "TCP-8443"
    next
end
```

Finalmente, restringimos la autenticación de la cuenta admin a rangos de IP preestablecidos. Esta es una recomendación fuerte de seguridad de Cloud Temple.

```
config system admin
    edit "admin"
        set trusthost1 100.64.1.99/32
        set trusthost2 1.2.3.4/32
        set trusthost3 5.6.7.8/32
        set accprofile "super_admin"
        set vdom "root"
        set password SECRET
     next
end
```
