---
title: Preguntas frecuentes sobre la copia de seguridad
tags:
  - iaas_opensource
  - tutorials
  - iaas_opensource_backup
---

import backupCloneOpenIaas_001 from './images/backup_clone_iaas_opensource_001.png'
import backupCloneOpenIaas_002 from './images/backup_clone_iaas_opensource_002.png'
import backupPolicyOpenIaas_001 from './images/backup_policy_iaas_opensource_001.png'
import backupPolicyOpenIaas_002 from './images/backup_policy_iaas_opensource_002.png'
import backupPolicyOpenIaas_003 from './images/backup_policy_iaas_opensource_003.png'
import backupPolicyOpenIaas_004 from './images/backup_policy_iaas_opensource_004.png'
import backupPolicyOpenIaas_005 from './images/backup_policy_iaas_opensource_005.png'
import backupPolicyOpenIaas_006 from './images/backup_policy_iaas_opensource_006.png'
import backupRestorationOpenIaas_001 from './images/backup_restoration_iaas_opensource_001.png'
import backupRestorationOpenIaas_002 from './images/backup_restoration_iaas_opensource_002.png'

---

### ¿Cómo clonar una máquina virtual?

Solo hay una forma de clonar una máquina virtual:

- Directamente desde el icono __'Exportar'__ de su máquina virtual:

<img src={backupCloneOpenIaas_001} />
<img src={backupCloneOpenIaas_002} />

---

### ¿Cómo agregar una política de copia de seguridad a una máquina virtual?

Vaya a la página __'Máquinas virtuales'__ en la sección __'OpenIaaS'__ del banner del menú verde en el lado izquierdo de la pantalla.

Seleccione una máquina virtual y luego la pestaña __'Políticas de copia de seguridad'__ de esta máquina:

<img src={backupPolicyOpenIaas_001} />

Agregue la política de copia de seguridad deseada:

<img src={backupPolicyOpenIaas_002} />

---

### ¿Cómo eliminar una política de copia de seguridad de una máquina virtual?

Vaya a la página __'Máquinas virtuales'__, seleccione una máquina virtual y luego la pestaña __'Políticas de copia de seguridad'__ de esta máquina.

Elimine la política de copia de seguridad deseada y confirme la eliminación:

<img src={backupPolicyOpenIaas_003} />

__*Nota:*__ *¡Advertencia! __SecNumCloud requiere que haya al menos una política de copia de seguridad__ para cada máquina virtual.*

---

### ¿Cómo saber si una copia de seguridad se ha ejecutado correctamente?

Vaya a la página __'Informes'__ del menú __'Copia de seguridad'__ en el menú de navegación a la izquierda de su pantalla. Elija la política de su elección y selecciónela.

<img src={backupPolicyOpenIaas_004} />

Una vez que se selecciona una política, tiene acceso a las copias de seguridad ordenadas por __Fecha de inicio__.

<img src={backupPolicyOpenIaas_005} />

Tiene a su disposición el detalle completo de cada copia de seguridad desde la acción __Ver__.

<img src={backupPolicyOpenIaas_006} />

---

### ¿Cómo iniciar una restauración?

Vaya a la página __'Máquinas virtuales'__, seleccione una máquina virtual y luego la pestaña __'Copias de seguridad'__ de esta máquina. Para iniciar la restauración, seleccione la copia de seguridad que desea restaurar.

<img src={backupRestorationOpenIaas_001} />
<img src={backupRestorationOpenIaas_002} />

---
