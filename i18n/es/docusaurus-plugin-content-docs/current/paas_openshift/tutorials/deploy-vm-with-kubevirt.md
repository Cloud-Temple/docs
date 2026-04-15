---
title: Deploy a Virtual Machine (VM) with KubeVirt
---

## Objetivos

Este tutorial tiene como objetivo proporcionar pasos claros para desplegar y configurar máquinas virtuales (VM) en **KubeVirt** en su clúster OpenShift.

Se abordarán dos escenarios:

1. Creación y despliegue de una máquina virtual Fedora con NGINX.
2. Creación de una máquina virtual Windows Server 2022 personalizada con IIS.

## Limitaciones conocidas

- Los templates faltantes en el catálogo de OpenShift pueden recuperarse desde el repositorio oficial de KubeVirt:  
  [https://github.com/kubevirt/common-templates/tree/master](https://github.com/kubevirt/common-templates/tree/master).  
- Las máquinas virtuales desplegadas deben ser compatibles con KubeVirt (controladores virtio, formato de discos, etc.).  
- La configuración depende de los privilegios asignados en el proyecto de OpenShift correspondiente.  
- Se requiere una configuración avanzada de red (por ejemplo: reenvío de puertos) para acceder a los servicios alojados en las VM.

## Puntos fuertes

- **Flexibilidad**: Permite desplegar máquinas virtuales directamente desde OpenShift, simplificando el alojamiento de aplicaciones que requieren un entorno de máquina virtual.  
- **Compatibilidad con Windows y Linux**: Soporta Fedora y Windows Server.  
- **Facilidad de integración**: Utiliza los servicios inherentes a KubeVirt y OpenShift (PVC, reenvío de puertos, ingress).

## Versiones de los software

- OpenShift: v4.15 o superior  
- Kubernetes: v1.24 o superior  
- KubeVirt: v0.56 o superior  
- VMware Workstation (para la conversión de Windows Server): Versión 16 o superior  
- qemu-img: Versión 6.1 o superior

## Requis previos

Antes de comenzar, asegúrese de lo siguiente:

1. Que KubeVirt esté correctamente instalado en OpenShift.  
2. De tener acceso de administrador al proyecto de OpenShift donde se desplegará la VM.  
3. De poseer las claves SSH para acceder a la máquina virtual Fedora.  
4. De tener instalados y configurados las siguientes herramientas:  
   - **CLI de OpenShift (`oc`)**  
   - **qemu-img** (para la conversión de discos al formato `qcow2`)  
5. De tener acceso al blob de Azure donde se almacenará la imagen de Windows Server.

## Demo Plan

### Visión general de los pasos

1. Desplegar una máquina virtual Fedora con NGINX.  
2. Desplegar una máquina virtual Windows Server con IIS.  
3. Configurar el acceso de red (SSH para Fedora, RDP para Windows).  
4. Verificar que los servicios (NGINX/IIS) son accesibles desde su navegador.

## Archivos necesarios

Necesitará los siguientes archivos para la implementación:

1. **ssh-port-forward.yaml**: Manifiesto para configurar el acceso SSH a la VM Fedora.  
2. **nginx-expose.yaml**: Manifiesto para exponer NGINX en OpenShift.  
3. **rdp-port-forward.yaml**: Manifiesto para configurar el acceso RDP a la VM Windows.  
4. **iis-expose.yaml**: Manifiesto para exponer IIS en OpenShift.

## Flujo de despliegue

---

### Paso 1: Desplegar una VM Fedora con NGINX

1. **Crear una VM Fedora en OpenShift**:

   - Acceda a la vista **Administrador** en OpenShift y seleccione **Virtualization**.
   - Vaya al panel **Catalog** y haga clic en **Crear una nueva VM**.
   - Rellene los siguientes parámetros:
     - **Sistema operativo**: Fedora
     - **Tipo de instancia**: Serie U con **2 CPU y 8 GB de RAM**
     - **Nombre de la VM**: `fedora-nginx`
   - Agregue su clave SSH pública (`mysshkey`) para acceder a la VM.
   - Haga clic en **Crear**.

2. **Configurar el acceso CLI a OpenShift**:

   - Ejecute el siguiente comando para trabajar en el proyecto OpenShift correcto:

     ```bash
     oc project demokubevirt
     ```

   - Inicie sesión en la API de OpenShift:

     ```bash
     oc login --server=api-ocp01-{your-id}.paas.cloud-temple.com --web
     ```

3. **Configurar el acceso SSH a la VM Fedora**:

   - Aplicar el manifiesto para configurar el reenvío de puertos para SSH:

     ```bash
     oc apply -f ssh-port-forward.yaml
     ```

   - Redirija el puerto localmente desde su máquina:

     ```bash
     oc port-forward svc/fedora-service-ssh 2222:22
     ```

   - Conéctese a la VM desde una nueva terminal:

     ```bash
     ssh cloud-user@127.0.0.1 -p 2222 -o StrictHostKeyChecking=no
     ```

4. **Desplegar NGINX en Fedora**:

   - Conéctese a la VM como se indicó anteriormente y ejecute los siguientes comandos:

     ```bash
     sudo dnf update -y 
     sudo dnf install nginx -y
     sudo systemctl start nginx
     sudo systemctl enable nginx
     ```

   - Verifique que NGINX esté funcionando correctamente:

     ```bash
     sudo systemctl status nginx
     ```

5. **Exponer NGINX en OpenShift**:

   - Aplicar el siguiente manifiesto para exponer el servicio:

     ```bash
     oc apply -f nginx-expose.yaml
     ```

6. **Acceder al sitio web NGINX**:

   - Abra su navegador y acceda a:
     `https://nginx-fedora.apps-ocp01-{your-id}.paas.cloud-temple.com`.

### Paso 2: Desplegar una VM Windows Server con IIS

1. **Crear una imagen personalizada de Windows**:

   - Instale una VM Windows Server en VMware Workstation con los siguientes parámetros:
     - Controladores: **Virtio**, SATA, e1000e, UEFI.
     - Ejecute un **Sysprep**.
     - Exporte la imagen en formato **OVF**.

   - Convierta la imagen de disco al formato **qcow2** utilizando `qemu-img`:

     ```bash
     qemu-img convert -f vmdk -O qcow2 WindowsServer2022-OC-disk1.vmdk output.qcow2
     ```

   - Suba la imagen convertida a un blob de Azure y obtenga la clave SAS.

2. **Crear una plantilla personalizada para Windows Server en KubeVirt**:

   - Desde la pestaña **catálogo** de OpenShift, cree una plantilla con los siguientes parámetros:
     - **2 CPU, 8 GB RAM, 100 GB de almacenamiento**.
     - Configure el almacenamiento para usar **virtio**.
     - Utilice la URL del blob como fuente de disco e incluya la clave SAS.

3. **Configurar IIS en Windows**:

   - Conéctese a la VM (contraseña de administrador, teclado, etc.).
   - Instale **IIS** desde la consola:

     ```powershell
     Install-WindowsFeature -name Web-Server -IncludeManagementTools
     ```

4. **Configurar el acceso RDP**:

   - Aplicar los siguientes archivos YAML:

     ```bash
     oc apply -f rdp-port-forward.yaml
     oc apply -f iis-expose.yaml
     ```

   - Redirija el puerto RDP localmente:

     ```bash
     oc port-forward svc/windows-service-rdp 2222:3389
     ```

   - Conéctese mediante su cliente RDP:

     ```bash
     mstsc -v 127.0.0.1:2222
     ```

5. **Acceder al sitio web IIS**:

   - En su navegador, vaya a:
     `https://iis-windows.apps-ocp01-{your-id}.paas.cloud-temple.com`.

## Criterios de validación

1. Las máquinas virtuales Fedora y Windows Server se despliegan sin errores.  
2. El acceso SSH a Fedora y RDP a Windows funcionan mediante reenvío de puertos.  
3. Los servicios NGINX e IIS son accesibles públicamente a través de las URL configuradas.

## Conclusión

Esta guía le ha permitido implementar máquinas virtuales Fedora y Windows Server en KubeVirt con OpenShift. Ha aprendido a configurar el acceso de red (SSH/RDP) y a exponer servicios web. Estos pasos pueden reproducirse para diversos escenarios en los que se necesiten máquinas virtuales en un entorno PaaS OpenShift **Cloud Temple**. 🚀
