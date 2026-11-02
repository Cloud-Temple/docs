---
title: Inicio Rápido
---
import newTabNetwork from '@site/docs/network/vpc/images/new_tab_network.png'
import vpcCreateButton from '@site/docs/network/vpc/images/vpc_create_button.png'
import vpcCreateModal from '@site/docs/network/vpc/images/vpc_create_modale.png'
import vpcOverview from '@site/docs/network/vpc/images/vpc.png'
import vpcDetailsView from '@site/docs/network/vpc/images/vpc_details_view.png'
import vpcNewPrivateNetwork from '@site/docs/network/vpc/images/vpc_new_private_network.png'
import vpcActivateGatewayButton from '@site/docs/network/vpc/images/vpc_activate_gateway_button.png'
import vpcActivateGatewayModal from '@site/docs/network/vpc/images/vpc_activate_gatewat_modale.png'
import vpcOrders from '@site/docs/network/vpc/images/vpc_orders.png'
import vpcStaticIps from '@site/docs/network/vpc/images/vpc_static_ips.png'
import vpcNewStaticIps from '@site/docs/network/vpc/images/vpc_new_static_ips.png'
import vpcNewStaticIpsModale from '@site/docs/network/vpc/images/vpc_new_static_ips_modale.png'
import vpcStaticIpsAssociate from '@site/docs/network/vpc/images/vpc_static_ips_associate_png.png'

# Inicio Rápido VPC

Esta guía le acompaña en la creación de su primer Virtual Private Cloud (VPC) y el despliegue de sus primeras redes privadas.

## Prerrequisitos

Actualmente, la activación del servicio VPC requiere haber suscrito un producto **IaaS Open Source**. (Esta condición se levantará posteriormente).

## Paso 1: Acceder a la Consola

1. Conéctese a la Consola Cloud Temple.
2. En el menú de navegación, seleccione **Network** y luego **VPC**.

<img src={newTabNetwork} />

## Paso 2: Pedir un VPC

1. Haga clic en el botón **Nuevo VPC**.
<img src={vpcCreateButton} />

2. Complete el formulario guiado:
    * **Nombre del VPC**: Elija un nombre único para identificar su entorno.
    * **Descripción**: (Opcional) Agregue una descripción.
<img src={vpcCreateModal} />

3. Valide la creación.

> **Nota**: El aprovisionamiento del VPC es completamente automatizado y generalmente toma menos de una hora.

### Alternativa: A través del menú Pedidos

También puede iniciar el pedido de recursos VPC directamente desde el menú **Marketplace** > **Pedidos**.

<img src={vpcOrders} />

<img src={vpcOverview} />

## Paso 3: Crear Redes Privadas (Private Networks)

Una vez que su VPC esté activo:

1. Acceda al detalle de su VPC haciendo clic en su nombre.
<img src={vpcDetailsView} />

2. Vaya a la pestaña **Redes Privadas**.
3. Haga clic en **Agregar una red**.
4. Configure su red:
    * **Nombre**: Nombre del segmento de red (ej: `backend`, `frontend`).
    * **CIDR**: Rango de direcciones IP (ej: `192.168.1.0/24`).

<img src={vpcNewPrivateNetwork} />

## Paso 4: Activar la Pasarela y Pedir IPs Públicas

Para permitir el acceso a Internet y la exposición de servicios:

1. Verifique si la pasarela está activada. De lo contrario, haga clic en el botón de activación.
<img src={vpcActivateGatewayButton} />

<img src={vpcActivateGatewayModal} />

1. Una vez que la pasarela esté activa, vaya a la pestaña **IPs públicas**.
<img src={vpcStaticIps} />

> **Nota**: La lista **IPs públicas** en la raíz del menú VPC muestra todas las IPs públicas (asociadas o no). La pestaña **IPs públicas** en el detalle de un VPC permite gestionar las asociadas a ese VPC (requiere la pasarela activa).

1. Haga clic en el botón para pedir nuevas IPs, o haga clic en la acción "Asociar" para asociar una de las direcciones IP de la lista que aún no lo está.
<img src={vpcNewStaticIps} />

<img src={vpcStaticIpsAssociate} />
<img src={vpcNewStaticIpsModale} />

1. Seleccione el número de IPs que desea pedir y luego confirme su pedido.

## Paso 5: Conectar sus recursos

Sus redes privadas están ahora disponibles en todas las zonas de disponibilidad (AZ) de la región. Puede conectar sus máquinas virtuales IaaS Open Source o sus servidores directamente desde sus respectivas interfaces de configuración.

Para aprender a configurar una red VPC en una máquina virtual, consulte nuestro tutorial: [Configurar una IP Estática y una VM](./tutorials/vm_configuration).
