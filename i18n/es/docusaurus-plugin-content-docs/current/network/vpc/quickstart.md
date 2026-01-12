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

# Inicio Rápido VPC

Esta guía le acompaña en la creación de su primer Virtual Private Cloud (VPC) y el despliegue de sus primeras redes privadas.

## Requisitos previos

Actualmente, la activación del servicio VPC requiere tener una suscripción a una oferta **IaaS Open Source**. (Esta condición se eliminará posteriormente).

## Paso 1: Acceder a la Consola

1.  Conéctese a la Consola Cloud Temple.
2.  En el menú de navegación, seleccione **Network** y luego **VPC**.

<img src={newTabNetwork} />

## Paso 2: Crear un VPC

1.  Haga clic en el botón **Crear un VPC**.
<img src={vpcCreateButton} />

2.  Complete el formulario guiado:
    *   **Nombre del VPC**: Elija un nombre único para identificar su entorno.
    *   **Descripción**: (Opcional) Añada una descripción.
<img src={vpcCreateModal} />

3.  Valide la creación.

> **Nota**: El aprovisionamiento del VPC está totalmente automatizado y generalmente tarda menos de una hora.

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

## Paso 4: Activar la Pasarela (Opcional)

Para dar acceso a Internet a sus redes privadas a través de una pasarela segura:

1. Haga clic en el botón de activación de la pasarela.
<img src={vpcActivateGatewayButton} />

2. Confirme la activación en la ventana modal.
<img src={vpcActivateGatewayModal} />

## Paso 5: Conectar sus recursos

Sus redes privadas ahora están disponibles en todas las zonas de disponibilidad (AZ) de la región. Puede conectar sus máquinas virtuales IaaS Open Source o sus servidores directamente desde sus respectivas interfaces de configuración.
