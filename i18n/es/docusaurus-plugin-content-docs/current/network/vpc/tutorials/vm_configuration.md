---
title: Configuración de Red de la VM
---
import vpcCreateNetworkAdaptersVmModale from '@site/docs/network/vpc/images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '@site/docs/network/vpc/images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '@site/docs/network/vpc/images/vpc_create_network_adapters_vm.png'
import vpcDetailIpsPub from '@site/docs/network/vpc/images/vpc_detail_ips_pub.png'
import vpcIpPubAssociate from '@site/docs/network/vpc/images/vpc_ip_pub_associate.png'
import vpcMacAddressAssociateModale from '@site/docs/network/vpc/images/vpc_mac_address_associate_modale.png'

# Configuración de Red de la VM

Este tutorial le guía para conectar una máquina virtual a una red VPC y asignarle una IP estática (privada), así como una IP pública si es necesario.

## Requisitos previos

* Tener un VPC y una red privada creados.
* Tener una VM desplegada (IaaS de código abierto o VMware).

## 1. Asignación de una IP privada estática

Puede fijar la IP privada de su máquina virtual de dos maneras.

### Método A: Desde la Máquina Virtual (Recomendado)

Este método le permite configurar la red y la IP en una sola etapa durante la creación de la interfaz.

1. Acceda a la vista detallada de su máquina virtual.
2. Vaya al panel **Adaptadores de red**.
3. Haga clic en el botón **Nuevo adaptador de red** para agregar una interfaz.
<img src={vpcCreateNetworkAdaptersVm} />

4. En el cuadro de diálogo, seleccione su red VPC.
<img src={vpcCreateNetworkAdaptersVmModale} />

5. Una vez seleccionada la red, elija una de las direcciones IP estáticas disponibles.
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

6. Confirme la creación.

> **Nota**: Puede editar posteriormente el adaptador de red para cambiar de red si es necesario.

### Método B: Desde la vista Redes Privadas

Este método es útil para reservar una IP antes de crear la VM o para modificar una asociación existente.

1. Acceda a la vista detallada de su VPC, pestaña **Redes Privadas**.
2. Despliegue el grupo de direcciones IP de la red correspondiente.
3. Haga clic en la acción "Asociar a una dirección MAC" para una IP disponible.
4. En el cuadro de diálogo, asocie una de las IPs estáticas a una dirección MAC de una VM.
<img src={vpcMacAddressAssociateModale} />

## 2. Asociación de una IP pública (Opcional)

Si desea que su VM sea accesible desde Internet.

1. Desde la vista detallada de su VPC, acceda a la pestaña **IPs públicas**.  
<img src={vpcDetailIpsPub} />

2. Haga clic en el botón **Asociar una IP pública**.

3. En el cuadro de diálogo, seleccione la red privada y la IP estática de destino y, a continuación, confirme la asociación.  
<img src={vpcIpPubAssociate} />

4. Una vez realizada la asociación, puede utilizar esta dirección IP pública para acceder a su VM.

## Configuración del SO invitado

**Importante**: Para que la dirección IP estática (privada) se asigne correctamente, asegúrese de que la interfaz de red de su sistema operativo invitado (OS) esté configurada en modo **DHCP**. El servicio DHCP del VPC se encargará de asignar la dirección reservada.
