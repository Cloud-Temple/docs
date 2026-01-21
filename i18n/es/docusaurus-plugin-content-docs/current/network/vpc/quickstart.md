---
title: Guía rápida
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

# Guía Rápida de VPC

Esta guía le acompañará en la creación de su primer Cloud Privado Virtual (VPC) y en el despliegue de sus primeras redes privadas.

## Requis previos

Actualmente, la activación del servicio VPC requiere haber suscrito una oferta **IaaS Open Source**. (Esta condición se eliminará posteriormente).

## Paso 1: Acceder a la Consola

1.  Inicie sesión en la Consola Cloud Temple.
2.  En el menú de navegación, seleccione **Network** y luego **VPC**.

<img src={newTabNetwork} />

## Paso 2: Crear un VPC

1.  Haz clic en el botón **Nuevo VPC**.
<img src={vpcCreateButton} />

2.  Completa el formulario guiado:
    *   **Nombre del VPC**: Elige un nombre único para identificar tu entorno.
    *   **Descripción**: (Opcional) Añade una descripción.
<img src={vpcCreateModal} />

3.  Confirma la creación.

> **Nota**: La provisión del VPC es completamente automática y suele tardar menos de una hora.

### Alternativa: A través del panel Comandos

También puede iniciar directamente el comando de recursos VPC desde el menú **Comandos**.

<img src={vpcOrders} />

<img src={vpcOverview} />

## Step 3: Create Private Networks

Once your VPC is active:

1.  Go to your VPC details by clicking on its name.
<img src={vpcDetailsView} />

2.  Navigate to the **Private Networks** tab.
3.  Click **Add a network**.
4.  Configure your network:
    *   **Name**: Name of the network segment (e.g., `backend`, `frontend`).
    *   **CIDR**: IP address range (e.g., `192.168.1.0/24`).

<img src={vpcNewPrivateNetwork} />

## Paso 4: Activar la pasarela y solicitar direcciones IP públicas

Para permitir el acceso a Internet y la exposición de servicios:

1.  Verifique si la pasarela está activada. Si no lo está, haga clic en el botón de activación.
<img src={vpcActivateGatewayButton} />
<img src={vpcActivateGatewayModal} />

2.  Una vez activa la pasarela, vaya al panel **IPs públicas**.
<img src={vpcStaticIps} />

> **Nota**: La lista **IPs públicas** en la raíz del menú VPC muestra todas las direcciones IP públicas (asociadas o no). El panel **IPs públicas** en el detalle de un VPC permite gestionar únicamente las direcciones IP asociadas a ese VPC (requiere que la pasarela esté activa).

3.  Haga clic en el botón para solicitar nuevas IPs, o haga clic en la acción "Asociar" para asignar una de las direcciones IP de la lista que aún no esté asociada.
<img src={vpcNewStaticIps} />
<img src={vpcStaticIpsAssociate} />
<img src={vpcNewStaticIpsModale} />

4.  Seleccione la cantidad de IPs que desea solicitar y confirme su solicitud.

## Paso 5: Conectar sus recursos

Sus redes privadas ahora están disponibles en todas las zonas de disponibilidad (AZ) de la región. Puede conectar sus máquinas virtuales IaaS de código abierto o sus servidores directamente desde sus interfaces de configuración respectivas.

Para aprender a configurar una red VPC en una máquina virtual, consulte nuestra guía paso a paso: [Configurar una IP estática y una VM](./tutorials/vm_configuration).