---
title: Deploy a Virtual Machine (VM) with KubeVirt
---

## Ziele

Dieser Leitfaden soll klare Schritte zur Bereitstellung und Konfiguration von virtuellen Maschinen (VMs) in **KubeVirt** in Ihrem OpenShift-Cluster bereitstellen.

Zwei Szenarien werden behandelt:

1. Erstellung und Bereitstellung einer virtuellen Maschine mit Fedora und NGINX.
2. Erstellung einer benutzerdefinierten virtuellen Maschine mit Windows Server 2022 und IIS.

## Bekannte Einschränkungen

- Fehlende Templates im OpenShift-Katalog können aus dem offiziellen KubeVirt-Repository abgerufen werden:  
  [https://github.com/kubevirt/common-templates/tree/master](https://github.com/kubevirt/common-templates/tree/master).  
- Bereitgestellte virtuelle Maschinen müssen mit KubeVirt kompatibel sein (virtio-Treiber, Datenträgerformate usw.).  
- Die Konfiguration hängt von den in dem entsprechenden OpenShift-Projekt zugewiesenen Berechtigungen ab.  
- Für den Zugriff auf Dienste, die auf den VMs gehostet werden, ist eine erweiterte Netzwerkkonfiguration erforderlich (z. B. Port-Forwarding).

## Stärken

- **Flexibilität**: Ermöglicht den direkten Einsatz von VMs über OpenShift, vereinfacht die Bereitstellung von Anwendungen, die eine VM-Umgebung erfordern.  
- **Kompatibilität mit Windows und Linux**: Unterstützt Fedora und Windows Server.  
- **Einfache Integration**: Nutzt die integrierten Dienste von KubeVirt und OpenShift (PVC, Port-Forwarding, Ingress).

## Software Versions

- OpenShift: v4.15 or higher  
- Kubernetes: v1.24 or higher  
- KubeVirt: v0.56 or higher  
- VMware Workstation (for Windows Server conversion): Version 16 or higher  
- qemu-img: Version 6.1 or higher

## Voraussetzungen

Stellen Sie vor Beginn sicher:

1. Dass KubeVirt korrekt in OpenShift installiert ist.  
2. Dass Sie über Administratorberechtigungen für den OpenShift-Projektbereich verfügen, in dem die VM bereitgestellt werden soll.  
3. Dass Sie die SSH-Schlüssel für den Zugriff auf die Fedora-VM besitzen.  
4. Dass die folgenden Tools installiert und konfiguriert sind:  
   - **OpenShift CLI (`oc`)**  
   - **qemu-img** (zur Konvertierung von Festplatten in das `qcow2`-Format)  
5. Dass Sie Zugriff auf den Azure-Blob besitzen, in dem das Windows Server-Image gespeichert wird.

## Demonstration Plan

### Overview of the Steps

1. Deploy a Fedora VM with NGINX.  
2. Deploy a Windows Server VM with IIS.  
3. Configure network access (SSH for Fedora, RDP for Windows).  
4. Verify that the services (NGINX/IIS) are accessible from your browser.

## Erforderliche Dateien

Sie benötigen die folgenden Dateien für die Bereitstellung:

1. **ssh-port-forward.yaml**: Manifest zur Konfiguration des SSH-Zugriffs auf die Fedora-VM.  
2. **nginx-expose.yaml**: Manifest zur Exposition von NGINX in OpenShift.  
3. **rdp-port-forward.yaml**: Manifest zur Konfiguration des RDP-Zugriffs auf die Windows-VM.  
4. **iis-expose.yaml**: Manifest zur Exposition von IIS in OpenShift.

## Deployment流程

---

### Schritt 1: Bereitstellung einer Fedora-VM mit NGINX

1. **Erstellen einer Fedora-VM in OpenShift**:

   - Gehen Sie in der **Administratoransicht** von OpenShift zu **Virtualization**.
   - Wechseln Sie zum Tab **Catalog** und klicken Sie auf **Neue VM erstellen**.
   - Füllen Sie die folgenden Einstellungen aus:
     - **Betriebssystem**: Fedora
     - **Instanztyp**: U Series mit **2 CPU und 8 GB RAM**
     - **VM-Name**: `fedora-nginx`
   - Fügen Sie Ihre öffentliche SSH-Schlüssel (`mysshkey`) hinzu, um Zugriff auf die VM zu erhalten.
   - Klicken Sie auf **Erstellen**.

2. **Konfigurieren des CLI-Zugriffs auf OpenShift**:

   - Führen Sie den folgenden Befehl aus, um im richtigen OpenShift-Projekt zu arbeiten:

     ```bash
     oc project demokubevirt
     ```

   - Melden Sie sich bei der OpenShift-API an:

     ```bash
     oc login --server=api-ocp01-{your-id}.paas.cloud-temple.com --web
     ```

3. **Konfigurieren des SSH-Zugriffs auf die Fedora-VM**:

   - Wenden Sie das Manifest an, um den Port-Forwarding für SSH zu konfigurieren:

     ```bash
     oc apply -f ssh-port-forward.yaml
     ```

   - Leiten Sie den Port lokal von Ihrer Maschine weiter:

     ```bash
     oc port-forward svc/fedora-service-ssh 2222:22
     ```

   - Stellen Sie eine Verbindung zur VM über ein neues Terminal her:

     ```bash
     ssh cloud-user@127.0.0.1 -p 2222 -o StrictHostKeyChecking=no
     ```

4. **Bereitstellen von NGINX auf Fedora**:

   - Melden Sie sich wie oben beschrieben bei der VM an und führen Sie die folgenden Befehle aus:

     ```bash
     sudo dnf update -y 
     sudo dnf install nginx -y
     sudo systemctl start nginx
     sudo systemctl enable nginx
     ```

   - Stellen Sie sicher, dass NGINX ordnungsgemäß funktioniert:

     ```bash
     sudo systemctl status nginx
     ```

5. **Veröffentlichen von NGINX in OpenShift**:

   - Wenden Sie das folgende Manifest an, um den Dienst zu veröffentlichen:

     ```bash
     oc apply -f nginx-expose.yaml
     ```

6. **Zugriff auf die NGINX-Webseite**:

   - Öffnen Sie Ihren Browser und rufen Sie folgende Adresse auf:
     `https://nginx-fedora.apps-ocp01-{your-id}.paas.cloud-temple.com`.

### Schritt 2: Bereitstellung einer Windows Server-VM mit IIS

1. **Erstellen eines benutzerdefinierten Windows-Images**:

   - Stellen Sie eine Windows Server-VM in VMware Workstation bereit mit:
     - Treibern: **Virtio**, SATA, e1000e, UEFI.
     - Führen Sie einen **Sysprep** aus.
     - Exportieren Sie das Image im Format **OVF**.

   - Konvertieren Sie die Festplattendatei in das Format **qcow2** mithilfe von `qemu-img`:

     ```bash
     qemu-img convert -f vmdk -O qcow2 WindowsServer2022-OC-disk1.vmdk output.qcow2
     ```

   - Laden Sie die konvertierte Image-Datei in einen Azure-Blob hoch und rufen Sie den SAS-Schlüssel ab.

2. **Erstellen eines benutzerdefinierten Templates für Windows Server in KubeVirt**:

   - Erstellen Sie im Tab **Catalog** von OpenShift ein Template mit folgenden Einstellungen:
     - **2 CPU, 8 GB RAM, 100 GB Speicher**.
     - Konfigurieren Sie den Speicher für die Verwendung von **virtio**.
     - Verwenden Sie die Blob-URL als Datenträgerquelle und integrieren Sie den SAS-Schlüssel.

3. **Konfigurieren von IIS unter Windows**:

   - Melden Sie sich bei der VM an (Administratorpasswort, Tastatur usw.).
   - Installieren Sie **IIS** über die Konsole:

     ```powershell
     Install-WindowsFeature -name Web-Server -IncludeManagementTools
     ```

4. **Konfigurieren des RDP-Zugriffs**:

   - Wenden Sie die folgenden YAML-Dateien an:

     ```bash
     oc apply -f rdp-port-forward.yaml
     oc apply -f iis-expose.yaml
     ```

   - Leiten Sie den RDP-Port lokal weiter:

     ```bash
     oc port-forward svc/windows-service-rdp 2222:3389
     ```

   - Stellen Sie eine Verbindung über Ihren RDP-Client her:

     ```bash
     mstsc -v 127.0.0.1:2222
     ```

5. **Zugriff auf die IIS-Webseite**:

   - Öffnen Sie Ihren Browser und rufen Sie folgende Adresse auf:
     `https://iis-windows.apps-ocp01-{your-id}.paas.cloud-temple.com`.

## Validierungskriterien

1. Die VMs Fedora und Windows Server wurden fehlerfrei bereitgestellt.  
2. SSH auf Fedora und RDP auf Windows funktionieren über Portweiterleitung.  
3. Die Dienste NGINX und IIS sind über die konfigurierten URLs öffentlich erreichbar.

## Schlussfolgerung

Dieser Leitfaden hat Ihnen geholfen, virtuelle Maschinen mit Fedora und Windows Server unter KubeVirt mit OpenShift bereitzustellen. Sie haben gelernt, Netzwerkzugriffe (SSH/RDP) einzurichten und Webdienste verfügbar zu machen. Diese Schritte können für verschiedene Szenarien wiederholt werden, in denen virtuelle Maschinen in einer OpenShift-PaaS-Umgebung **Cloud Temple** benötigt werden. 🚀