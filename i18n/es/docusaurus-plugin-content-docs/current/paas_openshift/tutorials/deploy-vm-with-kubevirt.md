---
title : Déployer une Machine Virtuelle (VM) avec KubeVirt
---

## Objetivos

Este tutorial tiene como objetivo proporcionar pasos claros para desplegar y configurar máquinas virtuales (VM) en **KubeVirt** en su clúster de OpenShift. 

Se abordarán dos escenarios:

1. Creación y despliegue de una máquina virtual Fedora con NGINX.
2. Creación de una máquina virtual Windows Server 2022 personalizada con IIS.

---

## Limitaciones conocidas

- Las plantillas faltantes en el catálogo de OpenShift se pueden recuperar del repositorio oficial de KubeVirt:  
  [https://github.com/kubevirt/common-templates/tree/master](https://github.com/kubevirt/common-templates/tree/master).  
- Las máquinas virtuales desplegadas deben ser compatibles con KubeVirt (drivers virtio, formato de discos, etc.).
- La configuración depende de los privilegios asignados en el proyecto OpenShift correspondiente.
- Se requiere una configuración avanzada de la red (por ejemplo: port forwarding) para acceder a los servicios hospedados en las VM.

---

## Puntos destacados

- **Flexibilidad**: Permite desplegar VM directamente desde OpenShift, simplificando el hospedaje de aplicaciones que requieren un entorno VM.  
- **Compatibilidad con Windows y Linux**: Soporta Fedora y Windows Server.  
- **Facilidad de integración**: Utiliza los servicios inherentes a KubeVirt y OpenShift (PVC, port forwarding, ingress).  

---

## Versiones del software

- OpenShift: v4.15 o superior  
- Kubernetes: v1.24 o superior  
- KubeVirt: v0.56 o superior  
- VMware Workstation (para la conversión de Windows Server): Versión 16 o superior  
- qemu-img: Versión 6.1 o superior  

---

## Prerrequisitos

Antes de comenzar, asegúrese de:

1. Que KubeVirt está correctamente instalado en OpenShift.  
2. Disponer de acceso administrador al proyecto OpenShift donde se desplegará la VM.  
3. Tener las claves SSH para acceder a la máquina virtual Fedora.
4. Tener instaladas y configuradas las siguientes herramientas:  
   - **OpenShift CLI (`oc`)**  
   - **qemu-img** (para la conversión de discos al formato `qcow2`)  
5. Tener acceso al blob de Azure donde se almacenará la imagen de Windows Server.  

---

## Plan de demostración

### Visión general de los pasos

1. Desplegar una VM Fedora con NGINX.  
2. Desplegar una VM Windows Server con IIS.  
3. Configurar el acceso a la red (SSH para Fedora, RDP para Windows).  
4. Verificar que los servicios (NGINX/IIS) son accesibles desde su navegador.  

---

## Archivos necesarios

Necesitará los siguientes archivos para el despliegue:

1. **ssh-port-forward.yaml**: Manifiesto para configurar el acceso SSH a la VM Fedora.  
2. **nginx-expose.yaml**: Manifiesto para exponer NGINX en OpenShift.  
3. **rdp-port-forward.yaml**: Manifiesto para configurar el acceso RDP a la VM Windows.  
4. **iis-expose.yaml**: Manifiesto para exponer IIS en OpenShift.  

---

## Proceso del despliegue

---

### Paso 1: Desplegar una VM Fedora con NGINX

1. **Crear una VM Fedora en OpenShift**:  

   - Acceda a la vista **Administrador** en OpenShift y seleccione **Virtualization**.
   - Vaya a la pestaña **Catalog** y haga clic en **Crear una nueva VM**.
   - Complete los siguientes parámetros:  
     - **Sistema operativo**: Fedora  
     - **Tipo de instancia**: U Series con **2 CPU y 8 GB RAM**  
     - **Nombre de la VM**: `fedora-nginx`  
   - Agregue su clave SSH pública (`mysshkey`) para acceder a la VM.
   - Haga clic en **Crear**.  

2. **Configurar el acceso CLI a OpenShift**:  

   - Ingrese el siguiente comando para trabajar en el proyecto OpenShift correcto:  

     ```bash
     oc project demokubevirt
     ```

   - Conéctese a la API de OpenShift:  

     ```bash
     oc login --server=api-ocp01-{your-id}.paas.cloud-temple.com --web
     ```

3. **Configurar el acceso SSH a la VM Fedora**:  

   - Aplique el manifiesto para configurar el port forwarding para SSH:  

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

   - Aplique el siguiente manifiesto para exponer el servicio:  

     ```bash
     oc apply -f nginx-expose.yaml
     ```

6. **Acceder al sitio web de NGINX**:  

   - Abra su navegador y vaya a:  
     `https://nginx-fedora.apps-ocp01-{your-id}.paas.cloud-temple.com`.

---

### Paso 2: Desplegar una VM Windows Server con IIS

1. **Crear una imagen personalizada de Windows**:  

   - Instale una VM Windows Server en VMware Workstation con:  
     - Drivers: **Virtio**, SATA, e1000e, UEFI.  
     - Realice un **Sysprep**.
     - Exporte la imagen en formato **OVF**.  

   - Convierta la imagen del disco al formato **qcow2** utilizando `qemu-img`:  

     ```bash
     qemu-img convert -f vmdk -O qcow2 WindowsServer2022-OC-disk1.vmdk output.qcow2
     ```

   - Cargue la imagen convertida en un blob de Azure y recupere la clave SAS.  

2. **Crear una plantilla personalizada para Windows Server en KubeVirt**:  

   - Desde la pestaña **catalog** de OpenShift, cree una plantilla con los siguientes parámetros:  
     - **2 CPU, 8 GB RAM, 100 GB de almacenamiento**.  
     - Configure el almacenamiento para usar **virtio**.  
     - Utilice la URL del blob como fuente de disco e integre la clave SAS.  

3. **Configurar IIS en Windows**:  

   - Conéctese a la VM (contraseña de administrador, teclado, etc.).
   - Instale **IIS** en la consola:  

     ```powershell
     Install-WindowsFeature -name Web-Server -IncludeManagementTools
     ```

4. **Configurar el acceso RDP**:  

   - Aplique los siguientes YAML:  

     ```bash
     oc apply -f rdp-port-forward.yaml
     oc apply -f iis-expose.yaml
     ```

   - Redirija el puerto RDP localmente:  

     ```bash
     oc port-forward svc/windows-service-rdp 2222:3389
     ```

   - Conéctese a través de su cliente RDP:  

     ```bash
     mstsc -v 127.0.0.1:2222
     ```

5. **Acceder al sitio web IIS**:  

   - En su navegador, navegue a:  
     `https://iis-windows.apps-ocp01-{your-id}.paas.cloud-temple.com`.

---

## Criterios de validación

1. Las VM Fedora y Windows Server se despliegan sin errores.  
2. SSH en Fedora y RDP en Windows funcionan a través del port forwarding.  
3. Los servicios NGINX y IIS son accesibles públicamente a través de las URL configuradas.  

---

## Conclusión

Esta guía le ha permitido desplegar máquinas virtuales Fedora y Windows Server en KubeVirt con OpenShift. Usted ha aprendido a configurar los accesos a la red (SSH/RDP) y a exponer servicios web. Estos pasos pueden ser reproducidos para diversos escenarios donde se necesiten VM en un entorno en el PaaS Openshift **Cloud Temple**. 🚀