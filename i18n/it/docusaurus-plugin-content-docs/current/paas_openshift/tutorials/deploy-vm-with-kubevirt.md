---
title : Déployez une Machine Virtuelle (VM) avec KubeVirt
---

## Obiettivi

Questo tutorial ha l'obiettivo di fornire passaggi chiari per distribuire e configurare macchine virtuali (VM) in **KubeVirt** sul tuo cluster OpenShift. 

Verranno trattati due scenari:

1. Creazione e distribuzione di una macchina virtuale Fedora con NGINX.
2. Creazione di una macchina virtuale Windows Server 2022 personalizzata con IIS.

---

## Limitazioni conosciute

- I template mancanti nel catalogo OpenShift possono essere recuperati dal repository ufficiale KubeVirt:  
  [https://github.com/kubevirt/common-templates/tree/master](https://github.com/kubevirt/common-templates/tree/master).  
- Le macchine virtuali distribuite devono essere compatibili con KubeVirt (driver virtio, formato dischi, ecc.).
- La configurazione dipende dai privilegi assegnati nel progetto OpenShift corrispondente.
- È necessaria una configurazione avanzata della rete (per esempio: port forwarding) per accedere ai servizi ospitati sulle VM.

---

## Punti di forza

- **Flessibilità**: Permette di distribuire VM direttamente da OpenShift, semplificando l'hosting di applicazioni che necessitano di un ambiente VM.  
- **Compatibilità Windows e Linux**: Supporta Fedora e Windows Server.  
- **Facilità di integrazione**: Utilizza i servizi inerenti a KubeVirt e OpenShift (PVC, port forwarding, ingress).  

---

## Versioni dei software

- OpenShift: v4.15 o superiore  
- Kubernetes: v1.24 o superiore  
- KubeVirt: v0.56 o superiore  
- VMware Workstation (per la conversione Windows Server): Versione 16 o superiore  
- qemu-img: Versione 6.1 o superiore  

---

## Prerequisiti

Prima di iniziare, assicurati di:

1. Aver installato correttamente KubeVirt in OpenShift.  
2. Disporre di un accesso amministratore al progetto OpenShift dove verrà distribuita la VM.  
3. Possedere le chiavi SSH per accedere alla macchina virtuale Fedora.
4. Avere installato e configurato i seguenti strumenti:  
   - **OpenShift CLI (`oc`)**  
   - **qemu-img** (per la conversione di dischi in formato `qcow2`)  
5. Avere accesso al blob Azure dove sarà memorizzata l'immagine di Windows Server.  

---

## Piano di dimostrazione

### Panoramica dei passaggi

1. Distribuire una VM Fedora con NGINX.  
2. Distribuire una VM Windows Server con IIS.  
3. Configurare l'accesso alla rete (SSH per Fedora, RDP per Windows).  
4. Verificare che i servizi (NGINX/IIS) siano accessibili dal tuo browser.  

---

## File necessari

Avrai bisogno dei seguenti file per la distribuzione:

1. **ssh-port-forward.yaml**: Manifesto per configurare l'accesso SSH alla VM Fedora.  
2. **nginx-expose.yaml**: Manifesto per esporre NGINX in OpenShift.  
3. **rdp-port-forward.yaml**: Manifesto per configurare l'accesso RDP alla VM Windows.  
4. **iis-expose.yaml**: Manifesto per esporre IIS in OpenShift.  

---

## Svolgimento della distribuzione

---

### Passo 1: Distribuire una VM Fedora con NGINX

1. **Creare una VM Fedora in OpenShift**:  

   - Accedi alla vista **Amministratore** in OpenShift e seleziona **Virtualization**.
   - Vai alla scheda **Catalog** e clicca su **Crea una nuova VM**.
   - Compila i seguenti parametri:  
     - **Sistema operativo**: Fedora  
     - **Tipo di istanza**: U Series con **2 CPU e 8 GB RAM**  
     - **Nome della VM**: `fedora-nginx`  
   - Aggiungi la tua chiave SSH pubblica (`mysshkey`) per accedere alla VM.
   - Clicca su **Crea**.  

2. **Configurare l'accesso CLI a OpenShift**:  

   - Esegui il seguente comando per lavorare sul corretto progetto OpenShift:  

     ```bash
     oc project demokubevirt
     ```

   - Connettiti all'API OpenShift:  

     ```bash
     oc login --server=api-ocp01-{your-id}.paas.cloud-temple.com --web
     ```

3. **Configurare l'accesso SSH alla VM Fedora**:  

   - Applica il manifesto per configurare il port forwarding per SSH:  

     ```bash
     oc apply -f ssh-port-forward.yaml
     ```

   - Reindirizza la porta localmente dalla tua macchina:  

     ```bash
     oc port-forward svc/fedora-service-ssh 2222:22
     ```

   - Connettiti alla VM da un nuovo terminale:  

     ```bash
     ssh cloud-user@127.0.0.1 -p 2222 -o StrictHostKeyChecking=no
     ```

4. **Distribuire NGINX su Fedora**:  

   - Connettiti alla VM come sopra ed esegui i seguenti comandi:  

     ```bash
     sudo dnf update -y 
     sudo dnf install nginx -y
     sudo systemctl start nginx
     sudo systemctl enable nginx
     ```

   - Verifica che NGINX funzioni correttamente:  

     ```bash
     sudo systemctl status nginx
     ```

5. **Esporre NGINX in OpenShift**:  

   - Applica il seguente manifesto per esporre il servizio:  

     ```bash
     oc apply -f nginx-expose.yaml
     ```

6. **Accedere al sito web NGINX**:  

   - Apri il tuo browser e accedi a:  
     `https://nginx-fedora.apps-ocp01-{your-id}.paas.cloud-temple.com`.

---

### Passo 2: Distribuire una VM Windows Server con IIS

1. **Creare un'immagine Windows personalizzata**:  

   - Installa una VM Windows Server in VMware Workstation con:  
     - Driver: **Virtio**, SATA, e1000e, UEFI.  
     - Esegui un **Sysprep**.
     - Esporta l'immagine in formato **OVF**.  

   - Converti l'immagine del disco in formato **qcow2** utilizzando `qemu-img`:  

     ```bash
     qemu-img convert -f vmdk -O qcow2 WindowsServer2022-OC-disk1.vmdk output.qcow2
     ```

   - Carica l'immagine convertita in un blob Azure e recupera la chiave SAS.  

2. **Creare un template personalizzato per Windows Server in KubeVirt**:  

   - Dalla scheda **catalog** di OpenShift, crea un template con i seguenti parametri:  
     - **2 CPU, 8 GB RAM, 100 GB di storage**.  
     - Configura lo storage per utilizzare **virtio**.  
     - Utilizza l'URL del blob come sorgente del disco e integra la chiave SAS.  

3. **Configurare IIS su Windows**:  

   - Connettiti alla VM (password amministratore, tastiera, ecc.).
   - Installa **IIS** nella console:  

     ```powershell
     Install-WindowsFeature -name Web-Server -IncludeManagementTools
     ```

4. **Configurare l'accesso RDP**:  

   - Applica i seguenti YAML:  

     ```bash
     oc apply -f rdp-port-forward.yaml
     oc apply -f iis-expose.yaml
     ```

   - Reindirizza la porta RDP localmente:  

     ```bash
     oc port-forward svc/windows-service-rdp 2222:3389
     ```

   - Connettiti tramite il tuo client RDP:  

     ```bash
     mstsc -v 127.0.0.1:2222
     ```

5. **Accedere al sito web IIS**:  

   - Nel tuo browser, vai a:  
     `https://iis-windows.apps-ocp01-{your-id}.paas.cloud-temple.com`.

---

## Criteri di validazione

1. Le VM Fedora e Windows Server sono distribuite senza errori.  
2. L'SSH su Fedora e l'RDP su Windows funzionano tramite il port forwarding.  
3. I servizi NGINX e IIS sono accessibili pubblicamente tramite gli URL configurati.  

---

## Conclusione

Questa guida ti ha permesso di distribuire macchine virtuali Fedora e Windows Server su KubeVirt con OpenShift. Hai imparato a configurare gli accessi di rete (SSH/RDP) e ad esporre servizi web. Questi passaggi possono essere replicati per vari scenari in cui sono necessarie VM in un ambiente PaaS in OpenShift **Cloud Temple**. 🚀