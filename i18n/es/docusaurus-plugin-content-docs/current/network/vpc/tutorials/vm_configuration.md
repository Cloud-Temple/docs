---
title: Configuración de Red de la VM
---
import vpcCreateNetworkAdaptersVmModale from '../images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '../images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '../images/vpc_create_network_adapters_vm.png'
import vpcDetailIpsPub from '../images/vpc_detail_ips_pub.png'
import vpcIpPubAssociate from '../images/vpc_ip_pub_associate.png'
import vpcMacAddressAssociateModale from '../images/vpc_mac_address_associate_modale.png'

# Configuración de Red de la VM

Este tutorial le guía para conectar una máquina virtual a una red VPC y asignarle una IP estática (privada), así como una IP pública si es necesario.

## Requisitos previos
*   Tener un VPC y una red privada creados.
*   Tener una VM desplegada.

## 1. Asignación de una IP Privada Estática

Puede fijar la IP privada de su VM de dos maneras.

### Método A: Desde la Máquina Virtual (Recomendado)

Este método le permite configurar la red y la IP en un solo paso al crear la interfaz.

1.  Acceda a la vista de detalles de su máquina virtual.
2.  Vaya a la pestaña **Adaptadores de red**.
3.  Haga clic en el botón **Nuevo adaptador de red** para añadir una interfaz.
<img src={vpcCreateNetworkAdaptersVm} />

4.  En la ventana modal, seleccione su red VPC.
<img src={vpcCreateNetworkAdaptersVmModale} />

5.  Una vez seleccionada la red, elija una de las IPs estáticas disponibles.
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

6.  Valide la creación.

> **Nota**: Puede editar el adaptador de red posteriormente para cambiar de red si es necesario.

### Método B: Desde la vista de Redes Privadas

Este método es útil para reservar una IP antes de crear la VM o para modificar una asociación existente.

1.  Acceda a la vista detallada de su VPC, pestaña **Redes Privadas**.
2.  Despliegue el pool de direcciones IP de la red correspondiente.
3.  Haga clic en la acción "Asociar a una dirección MAC" para una IP disponible.
4.  En la ventana modal, asocie una de las IPs estáticas a una dirección MAC de una VM.
<img src={vpcMacAddressAssociateModale} />

## 2. Asociación de una IP Pública (Opcional)

Si desea que su VM sea accesible desde Internet.

1.  Desde la vista detallada de su VPC, vaya a la pestaña **IPs Públicas**.
<img src={vpcDetailIpsPub} />

2.  Haga clic en el botón **Asociar una IP pública**.

3.  En la ventana modal, seleccione la red privada y la IP estática de destino, luego valide la asociación.
<img src={vpcIpPubAssociate} />

4.  Una vez realizada la asociación, puede utilizar esta dirección IP pública para acceder a su VM.

## Configuración del SO Invitado

**Importante**: Para que la IP estática (privada) se asigne correctamente, asegúrese de que la interfaz de red de su sistema operativo invitado (OS) esté configurada en modo **DHCP**. El servicio DHCP del VPC asignará la dirección reservada.
