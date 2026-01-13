---
title: Inicio rápido
---
import newTabNetwork from './images/new_tab_network.png'
import vpcCreateButton from './images/vpc_create_button.png'
import vpcCreateModal from './images/vpc_create_modale.png'
import vpcOverview from './images/vpc.png'
import vpcDetailsView from './images/vpc_details_view.png'
import vpcNewPrivateNetwork from './images/vpc_new_private_network.png'
import vpcActivateGatewayButton from './images/vpc_activate_gateway_button.png'
import vpcActivateGatewayModal from './images/vpc_activate_gatewat_modale.png'
import vpcOrders from './images/vpc_orders.png'
import vpcStaticIps from './images/vpc_static_ips.png'
import vpcNewStaticIps from './images/vpc_new_static_ips.png'
import vpcNewStaticIpsModale from './images/vpc_new_static_ips_modale.png'
import vpcStaticIpsAssociate from './images/vpc_static_ips_associate_png.png'

# Inicio Rápido VPC

Esta guía le acompaña en la creación de su primer Virtual Private Cloud (VPC) y el despliegue de sus primeras redes privadas.

## Requisitos previos

Actualmente, la activación del servicio VPC requiere tener una suscripción a una oferta **IaaS Open Source**. (Esta condición se eliminará posteriormente).

## Paso 1: Acceder a la Consola

1.  Conéctese a la Consola Cloud Temple.
2.  En el menú de navegación, seleccione **Network** y luego **VPC**.

<img src={newTabNetwork} />

## Paso 2: Solicitar un VPC

1.  Haga clic en el botón **Nuevo VPC**.
<img src={vpcCreateButton} />

2.  Complete el formulario guiado:
    *   **Nombre del VPC**: Elija un nombre único para identificar su entorno.
    *   **Descripción**: (Opcional) Añada una descripción.
<img src={vpcCreateModal} />

3.  Valide la creación.

> **Nota**: El aprovisionamiento del VPC está totalmente automatizado y generalmente tarda menos de una hora.

### Alternativa: A través de la pestaña Pedidos

También puede iniciar el pedido de recursos VPC directamente desde el menú **Pedidos**.

<img src={vpcOrders} />

<img src={vpcOverview} />

## Paso 3: Crear Redes Privadas

Una vez que su VPC esté activo:

1.  Acceda al detalle de su VPC haciendo clic en su nombre.
<img src={vpcDetailsView} />

2.  Vaya a la pestaña **Redes Privadas**.
3.  Haga clic en **Añadir una red**.
4.  Configure su red:
    *   **Nombre**: Nombre del segmento de red (ej: `backend`, `frontend`).
    *   **CIDR**: Rango de direcciones IP (ej: `192.168.1.0/24`).

<img src={vpcNewPrivateNetwork} />

## Paso 4: Activar la Pasarela y Solicitar IPs Públicas

Para permitir el acceso a Internet y la exposición de servicios:

1.  Compruebe si la pasarela está activada. Si no, haga clic en el botón de activación.
<img src={vpcActivateGatewayButton} />
<img src={vpcActivateGatewayModal} />

2.  Una vez que la pasarela esté activa, vaya a la pestaña **IPs Públicas**.
<img src={vpcStaticIps} />

> **Nota**: La lista "IPs Públicas" en la raíz del menú VPC muestra todas las IPs públicas disponibles, ya sean asociadas a un VPC o no. La pestaña "IPs Públicas" en el detalle de un VPC permite gestionar las asociadas a este VPC (requiere pasarela activa).

3.  Haga clic en el botón para solicitar nuevas IPs, o haga clic en la acción "Asociar" para asociar una de las direcciones IP de la lista que aún no lo está.
<img src={vpcNewStaticIps} />
<img src={vpcStaticIpsAssociate} />
<img src={vpcNewStaticIpsModale} />

4.  Seleccione el número de IPs que desea solicitar y confirme su pedido.

## Paso 5: Conectar sus recursos

Sus redes privadas ahora están disponibles en todas las zonas de disponibilidad (AZ) de la región. Puede conectar sus máquinas virtuales IaaS Open Source o sus servidores directamente desde sus respectivas interfaces de configuración.

Para aprender a configurar una red VPC en una máquina virtual, consulte nuestro tutorial: [Configurar una IP Estática y una VM](./tutorials/vm_configuration).
