---
title: Configurar una IP Estática y una VM
---
import vpcCreateNetworkAdaptersVmModale from '../images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '../images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '../images/vpc_create_network_adapters_vm.png'
import vpcStaticIps from '../images/vpc_static_ips.png'
import vpcMacAddressAssociateModale from '../images/vpc_mac_address_associate_modale.png'

# Configurar una IP Estática y una VM

Este tutorial le guía para conectar una máquina virtual IaaS Open Source a una red VPC y asignarle una IP estática.

## Requisitos previos
*   Tener un VPC y una red privada creados.
*   Tener una VM IaaS Open Source desplegada.

## Paso 1: Crear el adaptador de red en la VM

1.  Acceda a la vista de detalles de su máquina virtual.
2.  Vaya a la pestaña **Interfaces de Red**.
3.  Haga clic en el botón para añadir una interfaz.
<img src={vpcCreateNetworkAdaptersVm} />

4.  En la ventana modal, seleccione su red VPC.
<img src={vpcCreateNetworkAdaptersVmModale} />
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

5.  Valide la creación. Anote la dirección MAC generada para la interfaz.

## Paso 2: Crear una IP Estática en el VPC

1.  Acceda a su VPC, pestaña **IPs Estáticas**.
2.  Si es necesario, cree un nuevo pool o una nueva IP estática.
<img src={vpcStaticIps} />

## Paso 3: Asociar la IP a la dirección MAC

1.  Seleccione la IP estática que desea asignar.
2.  Haga clic en la acción de asociación (o "Asociar una dirección MAC").
3.  En la ventana modal, introduzca o seleccione la dirección MAC de la interfaz de red creada en el paso 1.
<img src={vpcMacAddressAssociateModale} />

4.  Valide.
