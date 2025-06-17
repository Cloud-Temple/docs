---
title: Guía de inicio
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'

## Cálculo

### Gestión de Máquinas Virtuales

La interfaz de gestión de sus máquinas virtuales está disponible en la consola Shiva en el menú __'OpenIaaS'__ situado en la barra verde a la izquierda de la pantalla.

### Lista de máquinas virtuales

En la sección __'Máquinas virtuales'__, tiene acceso a la lista de sus máquinas virtuales alojadas en su Cloud de confianza.

<img src={openIaasVirtualMachinesList} />

Tiene acceso a la siguiente información, para cada máquina virtual:

- Su nombre.
- Su estado (apagada, encendida).
- Su zona de disponibilidad (AZ).
- Su sistema operativo.
- La cantidad de CPU virtuales (vCPU).
- La cantidad de memoria virtual (vRAM).

### Acciones en las máquinas virtuales

Las siguientes acciones son posibles desde esta interfaz:

- Actualizar la lista de máquinas virtuales.
- Filtrar la lista.
- Buscar una máquina virtual por su nombre.
- Crear una nueva máquina virtual.

<img src={openIaasVirtualMachinesListActions} />

Cuando hace clic en la flecha verde a la derecha de la lista para una máquina virtual, accede a toda la información relativa a dicha máquina.

<img src={openIaasVirtualMachineOverview} />

Una barra rápida permite realizar las siguientes acciones:

<img src={openIaasVirtualMachineActions} />

- Encender la máquina virtual.
- Apagarla.
- Reiniciarla.
- Abrir la consola.
- Montar un ISO.
- Desmontar un ISO.
- Convertir la máquina virtual en plantilla.
- Moverla.
- Renombrarla.
- Eliminarla.

En la pestaña de información '__Generales__', encuentra información detallada relativa a su máquina virtual, como su ubicación física (AZ, Pool, Host), la RAM, el CPU, las direcciones IP y otras.

<img src={openIaasVirtualMachineOverviewInformations} />

Una pestaña '__Avanzado__' permite consultar información más específica:

- UUID de la máquina virtual
- Herramientas del invitado
- Sistema operativo del invitado
- Unidad DVD

Así como modificar ciertas opciones tales como:

- El orden de arranque
- El arranque seguro
- El arranque automático (imposible si no hay ninguna política de copia de seguridad asociada a la VM)

<img src={openIaasVirtualMachineAdvancedOverview} />