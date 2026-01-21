---
title: Configuración de Red de la VM
---
import vpcCreateNetworkAdaptersVmModale from '../images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '../images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '../images/vpc_create_network_adapters_vm.png'
import vpcDetailIpsPub from '../images/vpc_detail_ips_pub.png'
import vpcIpPubAssociate from '../images/vpc_ip_pub_associate.png'
import vpcMacAddressAssociateModale from '../images/vpc_mac_address_associate_modale.png'

# Network Configuration of the VM

This tutorial guides you through connecting a virtual machine to a VPC network and assigning it a static (private) IP address, as well as a public IP address if required.

## Requis previos
*   Tener un VPC y una red privada creados.
*   Tener una VM desplegada (IaaS de código abierto o VMware).

## 1. Asignación de una IP privada estática

Puede fijar la IP privada de su máquina virtual de dos maneras.

### Método A: Desde la Máquina Virtual (Recomendado)

Este método le permite configurar la red y la IP en una sola etapa durante la creación de la interfaz.

1.  Acceda a la vista detallada de su máquina virtual.
2.  Vaya al panel **Adaptadores de red**.
3.  Haga clic en el botón **Nuevo adaptador de red** para agregar una interfaz.
<img src={vpcCreateNetworkAdaptersVm} />

4.  En el cuadro de diálogo, seleccione su red VPC.
<img src={vpcCreateNetworkAdaptersVmModale} />

5.  Una vez seleccionada la red, elija una de las direcciones IP estáticas disponibles.
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

6.  Confirme la creación.

> **Nota**: Puede editar posteriormente el adaptador de red para cambiar de red si es necesario.

### Método B: Desde la vista Redes Privadas

Este método es útil para reservar una IP antes de crear la VM o para modificar una asociación existente.

1.  Acceda a la vista detallada de su VPC, pestaña **Redes Privadas**.
2.  Despliegue el grupo de direcciones IP de la red correspondiente.
3.  Haga clic en la acción "Asociar a una dirección MAC" para una IP disponible.
4.  En el cuadro de diálogo, asocie una de las IPs estáticas a una dirección MAC de una VM.
<img src={vpcMacAddressAssociateModale} />

## 2. Associating a Public IP (Optional)

If you want to make your VM accessible from the internet.

1.  From the detailed view of your VPC, go to the **Public IPs** tab.  
<img src={vpcDetailIpsPub} />

2.  Click the **Associate a public IP** button.

3.  In the modal, select the target private network and static IP, then confirm the association.  
<img src={vpcIpPubAssociate} />

4.  Once the association is complete, you can use this public IP address to access your VM.

## Configuración del SO invitado

**Importante**: Para que la dirección IP estática (privada) se asigne correctamente, asegúrese de que la interfaz de red de su sistema operativo invitado (OS) esté configurada en modo **DHCP**. El servicio DHCP del VPC se encargará de asignar la dirección reservada.