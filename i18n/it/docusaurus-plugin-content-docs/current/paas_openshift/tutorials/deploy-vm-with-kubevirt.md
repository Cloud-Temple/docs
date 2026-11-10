---
title: Distribuire una macchina virtuale (VM) con KubeVirt
---

## Obiettivi

Questo tutorial ha lo scopo di fornire passaggi chiari per distribuire e configurare macchine virtuali (VM) in **KubeVirt** sul vostro cluster OpenShift.

Verranno trattati due scenari:

1. Creazione e distribuzione di una macchina virtuale Fedora con NGINX.
2. Creazione di una macchina virtuale Windows Server 2022 personalizzata con IIS.

## Limitazioni note

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

Prima di iniziare, assicuratevi che:

1. KubeVirt sia correttamente installato su OpenShift.  
2. Disponiate di un accesso amministrativo al progetto OpenShift in cui verrà distribuita la VM.  
3. Disponiate delle chiavi SSH per accedere alla macchina virtuale Fedora.  
4. Abbiate installato e configurato gli strumenti seguenti:  
   - **OpenShift CLI (`oc`)**  
   - **qemu-img** (per la conversione dei dischi nel formato `qcow2`)  
5. Abbiate accesso al blob Azure in cui verrà archiviata l'immagine di Windows Server.

## Piano dimostrativo

### Panoramica dei passaggi

1. Distribuire una VM Fedora con NGINX.  
2. Distribuire una VM Windows Server con IIS.  
3. Configurare l'accesso di rete (SSH per Fedora, RDP per Windows).  
4. Verificare che i servizi (NGINX/IIS) siano accessibili dal vostro browser.

## File necessari

Vi serviranno i seguenti file per il deployment:

1. **ssh-port-forward.yaml** : Manifesto per configurare l'accesso SSH alla VM Fedora.  
2. **nginx-expose.yaml** : Manifesto per esporre NGINX in OpenShift.  
3. **rdp-port-forward.yaml** : Manifesto per configurare l'accesso RDP alla VM Windows.  
4. **iis-expose.yaml** : Manifesto per esporre IIS in OpenShift.

## Svolgimento del deployment

---

### Passo 1: Distribuire una VM Fedora con NGINX

1. **Creare una VM Fedora in OpenShift**:

   - Accedete alla vista **Administrator** in OpenShift e selezionate **Virtualization**.
   - Andate nella scheda **Catalog** e fate clic su **Create a new VM**.
   - Compilate i seguenti parametri:
     - **Operating System**: Fedora
     - **Instance Type**: U Series con **2 CPU e 8 GB di RAM**
     - **VM Name**: `fedora-nginx`
   - Aggiungete la vostra chiave SSH pubblica (`mysshkey`) per accedere alla VM.
   - Fate clic su **Create**.

2. **Configurare l'accesso CLI a OpenShift**:

   - Eseguite il comando seguente per lavorare sul progetto OpenShift corretto:

     ```bash
     oc project demokubevirt
     ```

   - Connettetevi all'API OpenShift:

     ```bash
     oc login --server=api-ocp01-{your-id}.paas.cloud-temple.com --web
     ```

3. **Configurare l'accesso SSH alla VM Fedora**:

   - Applicate il manifesto per configurare il port forwarding per SSH:

     ```bash
     oc apply -f ssh-port-forward.yaml
     ```

   - Reindirizzate la porta in locale dalla vostra macchina:

     ```bash
     oc port-forward svc/fedora-service-ssh 2222:22
     ```

   - Connettetevi alla VM da un nuovo terminale:

     ```bash
     ssh cloud-user@127.0.0.1 -p 2222 -o StrictHostKeyChecking=no
     ```

4. **Distribuire NGINX su Fedora**:

   - Connettetevi alla VM come indicato sopra ed eseguite i comandi:

     ```bash
     sudo dnf update -y
     sudo dnf install nginx -y
     sudo systemctl start nginx
     sudo systemctl enable nginx
     ```

   - Verificate che NGINX funzioni correttamente:

     ```bash
     sudo systemctl status nginx
     ```

5. **Esporre NGINX in OpenShift**:

   - Applicate il manifesto seguente per esporre il servizio:

     ```bash
     oc apply -f nginx-expose.yaml
     ```

6. **Accedere al sito web NGINX**:

   - Aprite il vostro browser e accedete a:
     `https://nginx-fedora.apps-ocp01-{your-id}.paas.cloud-temple.com`.

### Passo 2: Distribuire una VM Windows Server con IIS

1. **Creare un'immagine Windows personalizzata**:

   - Installate una VM Windows Server in VMware Workstation con:  
     - Driver: **Virtio**, SATA, e1000e, UEFI.  
     - Eseguite un **Sysprep**.  
     - Esportate l'immagine nel formato **OVF**.

   - Convertite l'immagine disco nel formato **qcow2** utilizzando `qemu-img`:

     ```bash
     qemu-img convert -f vmdk -O qcow2 WindowsServer2022-OC-disk1.vmdk output.qcow2
     ```

   - Caricate l'immagine convertita in un blob Azure e recuperate la chiave SAS.

2. **Creare un template personalizzato per Windows Server in KubeVirt**:

   - Dalla scheda **catalog** di OpenShift, create un template con i seguenti parametri:  
     - **2 CPU, 8 GB di RAM, 100 GB di storage**.  
     - Configurate lo storage per utilizzare **virtio**.  
     - Utilizzate l'URL del blob come sorgente del disco e integrate la chiave SAS.

3. **Configurare IIS su Windows**:

   - Connettetevi alla VM (password di amministratore, tastiera, ecc.).
   - Installate **IIS** dalla console:

     ```powershell
     Install-WindowsFeature -name Web-Server -IncludeManagementTools
     ```

4. **Configurare l'accesso RDP**:

   - Applicate i seguenti file YAML:

     ```bash
     oc apply -f rdp-port-forward.yaml
     oc apply -f iis-expose.yaml
     ```

   - Reindirizzate la porta RDP in locale:

     ```bash
     oc port-forward svc/windows-service-rdp 2222:3389
     ```

   - Connettetevi tramite il vostro client RDP:

     ```bash
     mstsc -v 127.0.0.1:2222
     ```

5. **Accedere al sito web IIS**:

   - Nel vostro browser, accedete a:  
     `https://iis-windows.apps-ocp01-{your-id}.paas.cloud-temple.com`.

## Criteri di validazione

1. Le macchine virtuali Fedora e Windows Server sono state distribuite senza errori.  
2. L'accesso SSH a Fedora e RDP a Windows funzionano tramite port forwarding.  
3. I servizi NGINX e IIS sono accessibili pubblicamente tramite le URL configurate.

## Conclusione

Questa guida vi ha permesso di distribuire macchine virtuali Fedora e Windows Server su KubeVirt con OpenShift. Avete imparato a configurare i collegamenti di rete (SSH/RDP) e a esporre servizi web. Questi passaggi possono essere ripetuti per diversi scenari in cui sono necessarie macchine virtuali in un ambiente PaaS OpenShift **Cloud Temple**. 🚀
