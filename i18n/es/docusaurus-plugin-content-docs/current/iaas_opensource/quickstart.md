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

La interfaz de gestión de sus máquinas virtuales está disponible en la consola Shiva en el menú __'OpenIaaS'__ ubicado en la banda verde a la izquierda de la pantalla.

### Lista de máquinas virtuales

En la sección __'Máquinas virtuales'__, tiene acceso a la lista de sus máquinas virtuales alojadas en su Cloud de confianza.

<img src={openIaasVirtualMachinesList} />

Tiene acceso a la siguiente información para cada máquina virtual:

- Su nombre.
- Su estado (apagada, encendida).
- Su zona de disponibilidad (AZ).
- Su sistema operativo.
- La cantidad de CPU virtuales (vCPU).
- La cantidad de memoria virtual (vRAM).

### Acciones sobre las máquinas virtuales

Las siguientes acciones son posibles desde esta interfaz:

- Actualizar la lista de máquinas virtuales.
- Filtrar la lista.
- Buscar una máquina virtual por su nombre.
- Crear una nueva máquina virtual.

<img src={openIaasVirtualMachinesListActions} />

Cuando hace clic en la flecha desplegable verde a la derecha de la lista para una máquina virtual, puede acceder a toda la información sobre la misma.

<img src={openIaasVirtualMachineOverview} />

Una banda rápida permite realizar las siguientes acciones:

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

En la pestaña de información '**Generales**', encontrará información detallada relacionada con su máquina virtual, como su ubicación física (AZ, Pool, Host), la RAM, la CPU, las direcciones IP, y otros.

<img src={openIaasVirtualMachineOverviewInformations} />

Una pestaña '**Avanzado**' permite consultar información más específica:

- UUID de la máquina virtual
- Herramientas de invitado
- OS invitado
- Lector DVD

Además de modificar algunas opciones, tales como:
- El orden de arranque
- El secure boot
- El arranque automático (imposible si no se asocia ninguna política de respaldo a la VM)

<img src={openIaasVirtualMachineAdvancedOverview} />