---
title: Crear una máquina virtual
---

Este tutorial le guía a través de los diferentes métodos de creación de una máquina virtual en su entorno OpenIaaS.

## Introducción

La consola Cloud Temple le ofrece **tres métodos** para crear una máquina virtual OpenIaaS:

1. **Desde un Modelo** : Despliegue rápido a partir de un modelo preconfigurado
2. **Import XVA** : Importación de una máquina virtual desde un archivo XVA
3. **Desde el Marketplace** : Despliegue de una imagen certificada del catálogo Cloud Temple

## Prerrequisitos
- Disponer de un entorno OpenIaaS configurado
- Tener los permisos necesarios para crear máquinas virtuales
- Para el modo XVA: disponer de un archivo XVA válido
- Para el modo Marketplace: tener acceso al catálogo Marketplace

## Acceso a la creación

Desde el menú **OpenIaaS** > **Máquinas Virtuales**, haga clic en el botón **Nueva máquina virtual**.

Se abre una ventana que le muestra los tres métodos de despliegue disponibles. Seleccione el método deseado para continuar.

---

## Método 1: Despliegue desde un modelo

Este método permite crear rápidamente una máquina virtual a partir de un modelo preconfigurado.

### Paso 1: Selección del Pool y del Modelo

Seleccione en primer lugar el **Pool** (zona de disponibilidad) donde desea implementar su máquina virtual, y a continuación elija el **Modelo** que utilizará como base.

### Paso 2: Información general

Configure los parámetros básicos de su máquina virtual:

- **Nombre** : Nombre único de la máquina virtual (se permiten caracteres alfanuméricos, guiones, guiones bajos, puntos y espacios)
- **CPU** : Número de núcleos virtuales (mínimo 1)
- **RAM** : Cantidad de memoria con selección de la unidad (MB, GB, TB)

### Paso 3 : Cloud Init (opcional)

Cloud Init permite automatizar la configuración inicial de su máquina virtual en el primer arranque.

Puede configurar:

- **Cloud Config** : Configuración general (hostname, usuarios, paquetes, etc.)
- **Network Config** : Configuración de red en formato Netplan v2
- **Destroy After Boot** : Opción para eliminar la configuración de Cloud Init después del primer arranque

:::info
Esta etapa es completamente opcional. Si no necesita Cloud Init, deje los campos por defecto y pase a la siguiente etapa.
:::

### Paso 4 : Configuración de los discos

Gestione los discos virtuales de su máquina virtual. Los discos del modelo se agregan automáticamente y no se pueden eliminar.

Para cada disco, configure lo siguiente:

- **Nombre** : Nombre único del disco
- **Capacidad** : Tamaño del disco con selección de la unidad (MB, GB, TB)
- **Block Storage** : Almacenamiento de destino

Puede agregar hasta 24 discos virtuales en total. Haga clic en **Agregar un disco** para crear un nuevo disco.

:::warning
Si configura Cloud Init, es obligatorio al menos un disco para almacenar la configuración.
:::

### Paso 5: Configuración de los adaptadores de red

Configure las interfaces de red de su máquina virtual (máximo 7 adaptadores).

Para cada adaptador de red:

- **Red** : Seleccione la red virtual (con indicación VPC o Private Backbone)
- **Dirección MAC** : Opcional, se genera automáticamente si no se especifica

:::info[VPC]
La configuración de las redes VPC solo está disponible desde la pestaña Red de la máquina virtual una vez finalizada la operación. La configuración desde este formulario estará disponible próximamente.
:::

Haga clic en **Agregar adaptador de red** para crear una nueva interfaz.

### Paso 6 : Alta disponibilidad

Configure el nivel de alta disponibilidad de su máquina virtual.

:::tip
Para obtener más información sobre la configuración de la alta disponibilidad y los distintos modos disponibles, consulte la guía dedicada: [Gestión de la alta disponibilidad de una máquina virtual](./high_availability/manage_vm)
:::

### Paso 7: Resumen y validación

Verifique toda su configuración antes de crear la máquina virtual.

El resumen muestra todos los parámetros configurados:

- Información general (nombre, CPU, RAM)
- Modelo seleccionado
- Cloud Init (si está configurado)
- Discos
- Adaptadores de red
- Alta disponibilidad

Haga clic en **Crear** para iniciar el despliegue de su máquina virtual.

---

## Método 2: Importación desde un archivo XVA

Este método permite importar una máquina virtual desde un archivo en formato XVA (XenServer Virtual Appliance).

### Presentación del formato XVA

El formato XVA es el formato de exportación/importación nativo de XCP-ng y XenServer. Contiene una máquina virtual completa con sus discos y su configuración.

### Paso 1: Nombre de la máquina virtual

Defina el nombre de su máquina virtual.

El nombre debe cumplir con las mismas reglas que para el despliegue desde una plantilla (caracteres alfanuméricos, guiones, guiones bajos, puntos y espacios).

### Paso 2: Carga del archivo XVA

Importe su archivo XVA desde su ordenador.

:::info
El archivo debe tener la extensión `.xva`. Los nombres de archivo solo deben contener caracteres alfanuméricos, guiones, guiones bajos y puntos (sin espacios).
:::

Arrastre y suelte su archivo en la zona designada o haga clic para seleccionar el archivo desde su explorador.

### Paso 3: Selección del almacenamiento

Seleccione el almacenamiento de destino para su máquina virtual importada.

Seleccione un Block Storage en el árbol de directorios. El sistema verifica automáticamente que el espacio disponible sea suficiente para alojar su archivo XVA.

### Paso 4: Resumen y validación

Verifique la información antes de iniciar la importación.

El resumen muestra:

- El nombre de la VM
- El tipo de implementación (XVA)
- El archivo XVA y su tamaño
- El almacenamiento de destino

Haga clic en **Crear** para iniciar la importación de su máquina virtual.

### Acerca de la opción skip_set_template

Al importar un archivo XVA, la opción `skip_set_template` determina si el resultado de la importación será una máquina virtual directamente utilizable o una plantilla. Esta opción se utiliza especialmente con herramientas de automatización como Packer. Más información: [documentación de XCP-ng](https://xcp-ng.org/blog/2024/02/22/using-packer-with-xcp-ng/).

---

## Método 3: Despliegue desde el Marketplace

El Marketplace Cloud Temple ofrece imágenes de máquinas virtuales certificadas y listas para usar.

### Selección de una imagen del Marketplace

Explore el catálogo de imágenes disponibles para OpenIaaS.

Solo se muestran las imágenes compatibles con la plataforma OpenIaaS.

### Configuración de la máquina virtual

La configuración desde el Marketplace sigue un proceso similar al despliegue desde una plantilla, con algunas particularidades:

- Las características del sistema (SO, CPU, RAM) están predefinidas por la imagen del Marketplace
- Puede personalizar el nombre de la VM
- Cloud Init está disponible para la configuración inicial
- El mapeo de red permite asociar las interfaces de red de la imagen con sus redes

:::tip
Para una guía detallada del despliegue en el Marketplace, consulte el tutorial dedicado: [Desplegar una imagen en OpenIaaS](../../marketplace/tutorials/deploy_openiaas)
:::

---

## Buenas prácticas

### Elección del método de despliegue

- **Modelo** : Ideal para despliegues estándar y repetitivos dentro de su organización
- **XVA** : Recomendado para migrar VMs existentes o utilizar imágenes personalizadas
- **Marketplace** : Perfecto para comenzar rápidamente con imágenes certificadas y mantenidas

### Configuración de recursos

- **CPU y RAM** : Dimensione según las necesidades reales de su carga de trabajo
- **Discos** : Prevea un margen de crecimiento para evitar redimensionamientos futuros

### Alta disponibilidad

- Active el modo **Restart** para las aplicaciones críticas
- Utilice **Best-Effort** para los entornos menos críticos

### Cloud Init

- Utilice Cloud Init para estandarizar la configuración de sus VMs
- Documente sus configuraciones de Cloud Init para facilitar su reutilización
- Pruebe sus configuraciones en VMs de prueba antes del despliegue en producción

### Seguridad

- Utilice nombres explícitos para facilitar la identificación y la gestión
- Planifique una estrategia de copia de seguridad desde la creación de la VM