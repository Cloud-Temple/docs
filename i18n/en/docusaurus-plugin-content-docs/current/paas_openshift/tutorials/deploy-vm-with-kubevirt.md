---
title : Deploy a Virtual Machine (VM) with KubeVirt
---

## Objectives

This tutorial aims to provide clear steps to deploy and configure virtual machines (VMs) in **KubeVirt** on your OpenShift cluster. 

Two scenarios will be addressed:

1. Creation and deployment of a Fedora virtual machine with NGINX.
2. Creation of a custom Windows Server 2022 virtual machine with IIS.

---

## Known Limitations

- Missing templates in the OpenShift catalog can be retrieved from the official KubeVirt repository:  
  [https://github.com/kubevirt/common-templates/tree/master](https://github.com/kubevirt/common-templates/tree/master).  
- Deployed virtual machines must be compatible with KubeVirt (virtio drivers, disk formats, etc.).
- Configuration depends on the privileges assigned in the corresponding OpenShift project.
- Advanced network configuration (e.g., port forwarding) is necessary to access services hosted on the VMs.

---

## Highlights

- **Flexibility**: Allows deploying VMs directly from OpenShift, simplifying the hosting of applications requiring a VM environment.  
- **Windows and Linux Compatibility**: Supports Fedora and Windows Server.  
- **Ease of Integration**: Leverages inherent services of KubeVirt and OpenShift (PVC, port forwarding, ingress).  

---

## Software Versions

- OpenShift: v4.15 or higher  
- Kubernetes: v1.24 or higher  
- KubeVirt: v0.56 or higher  
- VMware Workstation (for Windows Server conversion): Version 16 or higher  
- qemu-img: Version 6.1 or higher  

---

## Prerequisites

Before starting, ensure:

1. KubeVirt is properly installed within OpenShift.  
2. You have admin access to the OpenShift project where the VM will be deployed.  
3. You have SSH keys to access the Fedora virtual machine.
4. You have installed and configured the following tools:  
   - **OpenShift CLI (`oc`)**  
   - **qemu-img** (for disk conversion to `qcow2` format)  
5. You have access to the Azure blob where the Windows Server image will be stored.  

---

## Demonstration Plan

### Overview of Steps

1. Deploy a Fedora VM with NGINX.  
2. Deploy a Windows Server VM with IIS.  
3. Configure network access (SSH for Fedora, RDP for Windows).  
4. Verify that the services (NGINX/IIS) are accessible from your browser.  

---

## Required Files

You will need the following files for deployment:

1. **ssh-port-forward.yaml**: Manifest to configure SSH access to the Fedora VM.  
2. **nginx-expose.yaml**: Manifest to expose NGINX in OpenShift.  
3. **rdp-port-forward.yaml**: Manifest to configure RDP access to the Windows VM.  
4. **iis-expose.yaml**: Manifest to expose IIS in OpenShift.  

---

## Deployment Procedure

---

### Step 1: Deploy a Fedora VM with NGINX

1. **Create a Fedora VM in OpenShift**:  

   - Access the **Administrator** view in OpenShift and select **Virtualization**.
   - Go to the **Catalog** tab and click on **Create VM**.
   - Fill in the following parameters:  
     - **Operating System**: Fedora  
     - **Instance Type**: U Series with **2 CPU and 8GB RAM**  
     - **VM Name**: `fedora-nginx`  
   - Add your public SSH key (`mysshkey`) to access the VM.
   - Click on **Create**.  

2. **Configure CLI access to OpenShift**:  

   - Run the following command to work on the proper OpenShift project:  

     ```bash
     oc project demokubevirt
     ```

   - Log in to the OpenShift API:  

     ```bash
     oc login --server=api-ocp01-{your-id}.paas.cloud-temple.com --web
     ```

3. **Configure SSH access to the Fedora VM**:  

   - Apply the manifest to configure port forwarding for SSH:  

     ```bash
     oc apply -f ssh-port-forward.yaml
     ```

   - Forward the local port from your machine:  

     ```bash
     oc port-forward svc/fedora-service-ssh 2222:22
     ```

   - Connect to the VM from a new terminal:  

     ```bash
     ssh cloud-user@127.0.0.1 -p 2222 -o StrictHostKeyChecking=no
     ```

4. **Deploy NGINX on Fedora**:

   - Connect to the VM as above and run the following commands:  

     ```bash
     sudo dnf update -y 
     sudo dnf install nginx -y
     sudo systemctl start nginx
     sudo systemctl enable nginx
     ```

   - Verify that NGINX is running correctly:  

     ```bash
     sudo systemctl status nginx
     ```

5. **Expose NGINX in OpenShift**:  

   - Apply the following manifest to expose the service:  

     ```bash
     oc apply -f nginx-expose.yaml
     ```

6. **Access the NGINX website**:  

   - Open your browser and go to:  
     `https://nginx-fedora.apps-ocp01-{your-id}.paas.cloud-temple.com`.

---

### Step 2: Deploy a Windows Server VM with IIS

1. **Create a custom Windows image**:  

   - Install a Windows Server VM in VMware Workstation with:  
     - Drivers: **Virtio**, SATA, e1000e, UEFI.  
     - Perform a **Sysprep**.
     - Export the image in **OVF** format.  

   - Convert the disk image to **qcow2** format using `qemu-img`:  

     ```bash
     qemu-img convert -f vmdk -O qcow2 WindowsServer2022-OC-disk1.vmdk output.qcow2
     ```

   - Upload the converted image to an Azure blob and obtain the SAS key.  

2. **Create a custom template for Windows Server in KubeVirt**:  

   - From the OpenShift **catalog** tab, create a template with the following parameters:  
     - **2 CPU, 8GB RAM, 100GB storage**.  
     - Configure storage to use **virtio**.  
     - Use the blob URL as the disk source and include the SAS key.  

3. **Configure IIS on Windows**:  

   - Connect to the VM (administrator password, keyboard, etc.).
   - Install **IIS** in the console:  

     ```powershell
     Install-WindowsFeature -name Web-Server -IncludeManagementTools
     ```

4. **Configure RDP access**:  

   - Apply the following YAML files:  

     ```bash
     oc apply -f rdp-port-forward.yaml
     oc apply -f iis-expose.yaml
     ```

   - Forward the RDP port locally:  

     ```bash
     oc port-forward svc/windows-service-rdp 2222:3389
     ```

   - Connect via your RDP client:  

     ```bash
     mstsc -v 127.0.0.1:2222
     ```

5. **Access the IIS website**:  

   - In your browser, go to:  
     `https://iis-windows.apps-ocp01-{your-id}.paas.cloud-temple.com`.

---

## Validation Criteria

1. Fedora and Windows Server VMs are deployed without errors.  
2. SSH on Fedora and RDP on Windows work via port forwarding.  
3. NGINX and IIS services are publicly accessible via the configured URLs.  

---

## Conclusion

This guide has enabled you to deploy Fedora and Windows Server virtual machines on KubeVirt with OpenShift. You have learned to configure network access (SSH/RDP) and expose web services. These steps can be reproduced for various scenarios where VMs are necessary in an OpenShift PaaS environment **Cloud Temple**. 🚀