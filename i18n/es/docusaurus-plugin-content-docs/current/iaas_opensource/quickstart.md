---
title: Guía de inicio rápido
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'

## Cómputo

### Gestión de máquinas virtuales

La interfaz de gestión de sus máquinas virtuales está disponible en la consola Shiva en el menú __'OpenIaaS'__ ubicado en la barra lateral verde a la izquierda de la pantalla.

### Lista de máquinas virtuales

En la sección __'Máquinas virtuales'__, tiene acceso a la lista de sus máquinas virtuales alojadas en su Cloud de confianza.

<img src={openIaasVirtualMachinesList} />

Tiene acceso a la siguiente información para cada máquina virtual:

- Su nombre.
- Su estado (apagada, encendida).
- Su zona de disponibilidad (AZ).
- Su sistema operativo.
- La cantidad de CPUs virtuales (vCPU).
- La cantidad de memoria virtual (vRAM).

### Acciones sobre las máquinas virtuales

Las siguientes acciones son posibles desde esta interfaz:

- Actualizar la lista de máquinas virtuales.
- Filtrar la lista.
- Buscar una máquina virtual por su nombre.
- Crear una nueva máquina virtual.

<img src={openIaasVirtualMachinesListActions} />

Cuando hace clic en la flecha desplegable verde a la derecha de la lista para una máquina virtual, accede a toda la información sobre ella.

<img src={openIaasVirtualMachineOverview} />

Una barra de herramientas rápida le permite realizar las siguientes acciones:

<img src={openIaasVirtualMachineActions} />

- Encender la máquina virtual.
- Apagarla.
- Reiniciarla.
- Abrir la consola.
- Montar un ISO.
- Desmontar un ISO.
- Convertir la máquina virtual en una plantilla.
- Moverla.
- Renombrarla.
- Eliminarla.

En la pestaña de información '__General__', encontrará información detallada sobre su máquina virtual, como su ubicación física (AZ, Pool, Host), RAM, CPU, direcciones IP y más.

<img src={openIaasVirtualMachineOverviewInformations} />

Una pestaña '__Avanzado__' le permite ver información más específica:

- UUID de la máquina virtual
- Herramientas de invitado
- SO invitado
- Unidad de DVD

Así como modificar ciertas opciones como:

- Orden de arranque
- Arranque seguro
- Inicio automático (no es posible si no hay una política de copia de seguridad asociada a la VM)

<img src={openIaasVirtualMachineAdvancedOverview} />
