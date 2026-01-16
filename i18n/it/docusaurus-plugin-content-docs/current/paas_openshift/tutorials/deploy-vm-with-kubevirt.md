---
title: Deploy a Virtual Machine (VM) with KubeVirt
---

## Obiettivi

Questo tutorial ha lo scopo di fornire passaggi chiari per distribuire e configurare macchine virtuali (VM) in **KubeVirt** sul tuo cluster OpenShift.

Verranno trattati due scenari:

1. Creazione e distribuzione di una macchina virtuale Fedora con NGINX.
2. Creazione di una macchina virtuale Windows Server 2022 personalizzata con IIS.

## Note notevoli

- I template mancanti nel catalogo OpenShift possono essere recuperati dal repository ufficiale KubeVirt:  
  [https://github.com/kubevirt/common-templates/tree/master](https://github.com/kubevirt/common-templates/tree/master).  
- Le macchine virtuali distribuite devono essere compatibili con KubeVirt (driver virtio, formato dischi, ecc.).  
- La configurazione dipende dai privilegi assegnati nel progetto OpenShift corrispondente.  
- È necessaria una configurazione di rete avanzata (ad esempio: port forwarding) per accedere ai servizi ospitati sulle VM.

## Punti di forza

- **Flessibilità**: Consente il deployment diretto di macchine virtuali da OpenShift, semplificando l'hosting di applicazioni che richiedono un ambiente VM.  
- **Compatibilità Windows e Linux**: Supporta Fedora e Windows Server.  
- **Facile integrazione**: Utilizza i servizi integrati di KubeVirt e OpenShift (PVC, port forwarding, ingress).

## Versioni dei software

- OpenShift: v4.15 o successiva  
- Kubernetes: v1.24 o successiva  
- KubeVirt: v0.56 o successiva  
- VMware Workstation (per la conversione di Windows Server): versione 16 o successiva  
- qemu-img: versione 6.1 o successiva

## Prerequisiti

Prima di iniziare, assicurati che:

1. KubeVirt sia correttamente installato su OpenShift.  
2. Disponga di un accesso amministrativo al progetto OpenShift in cui verrà distribuita la VM.  
3. Disponga delle chiavi SSH per accedere alla macchina virtuale Fedora.  
4. Abbia installato e configurato gli strumenti seguenti:  
   - **OpenShift CLI (`oc`)**  
   - **qemu-img** (per la conversione dei dischi nel formato `qcow2`)  
5. Abbia accesso al blob Azure in cui verrà archiviata l'immagine di Windows Server.

## Demo Plan

### Panoramica dei passaggi

1. Distribuire una VM Fedora con NGINX.  
2. Distribuire una VM Windows Server con IIS.  
3. Configurare l'accesso di rete (SSH per Fedora, RDP per Windows).  
4. Verificare che i servizi (NGINX/IIS) siano accessibili dal vostro browser.

## File necessarie

Ti serviranno i seguenti file per il deployment:

1. **ssh-port-forward.yaml** : Manifesto per configurare l'accesso SSH alla VM Fedora.  
2. **nginx-expose.yaml** : Manifesto per esporre NGINX in OpenShift.  
3. **rdp-port-forward.yaml** : Manifesto per configurare l'accesso RDP alla VM Windows.  
4. **iis-expose.yaml** : Manifesto per esporre IIS in OpenShift.

## Svolgimento del deployment

---

### Step 1: Deploy a Fedora VM with NGINX

1. **Create a Fedora VM in OpenShift**:

   - Go to the **Administrator** view in OpenShift and select **Virtualization**.
   - Navigate to the **Catalog** tab and click **Create a new VM**.
   - Fill in the following settings:
     - **Operating System**: Fedora
     - **Instance Type**: U Series with **2 CPUs and 8 GB RAM**
     - **VM Name**: `fedora-nginx`
   - Add your public SSH key (`mysshkey`) to access the VM.
   - Click **Create**.

2. **Configure CLI access to OpenShift**:

   - Run the following command to work on the correct OpenShift project:

     ```bash
     oc project demokubevirt
     ```

   - Log in to the OpenShift API:

     ```bash
     oc login --server=api-ocp01-{your-id}.paas.cloud-temple.com --web
     ```

3. **Configure SSH access to the Fedora VM**:

   - Apply the manifest to set up SSH port forwarding:

     ```bash
     oc apply -f ssh-port-forward.yaml
     ```

   - Forward the port locally from your machine:

     ```bash
     oc port-forward svc/fedora-service-ssh 2222:22
     ```

   - Connect to the VM from a new terminal:

     ```bash
     ssh cloud-user@127.0.0.1 -p 2222 -o StrictHostKeyChecking=no
     ```

4. **Deploy NGINX on Fedora**:

   - Connect to the VM as described above and run the following commands:

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

### Step 2: Deploy a Windows Server VM with IIS

1. **Create a custom Windows image**:

   - Deploy a Windows Server VM in VMware Workstation with the following settings:  
     - Drivers: **Virtio**, SATA, e1000e, UEFI.  
     - Perform a **Sysprep**.  
     - Export the image in **OVF** format.

   - Convert the disk image to **qcow2** format using `qemu-img`:

     ```bash
     qemu-img convert -f vmdk -O qcow2 WindowsServer2022-OC-disk1.vmdk output.qcow2
     ```

   - Upload the converted image to an Azure blob and retrieve the SAS key.

2. **Create a custom template for Windows Server in KubeVirt**:

   - From the **catalog** tab in OpenShift, create a template with the following parameters:  
     - **2 CPUs, 8 GB RAM, 100 GB storage**.  
     - Configure storage to use **virtio**.  
     - Use the blob URL as the disk source and include the SAS key.

3. **Configure IIS on Windows**:

   - Connect to the VM (administrator password, keyboard, etc.).
   - Install **IIS** via the console:

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

   - Connect using your RDP client:

     ```bash
     mstsc -v 127.0.0.1:2222
     ```

5. **Access the IIS website**:

   - In your browser, navigate to:  
     `https://iis-windows.apps-ocp01-{your-id}.paas.cloud-temple.com`.

## Criteri di validazione

1. Le macchine virtuali Fedora e Windows Server sono state distribuite senza errori.  
2. L'accesso SSH a Fedora e RDP a Windows funzionano tramite port forwarding.  
3. I servizi NGINX e IIS sono accessibili pubblicamente tramite le URL configurate.

## Conclusione

Questo guida ti ha permesso di distribuire macchine virtuali Fedora e Windows Server su KubeVirt con OpenShift. Hai imparato a configurare i collegamenti di rete (SSH/RDP) e a esporre servizi web. Questi passaggi possono essere ripetuti per diversi scenari in cui sono necessarie macchine virtuali in un ambiente PaaS OpenShift **Cloud Temple**. 🚀