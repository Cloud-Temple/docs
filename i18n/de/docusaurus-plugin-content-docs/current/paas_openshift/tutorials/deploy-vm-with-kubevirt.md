---
title : Eine Virtuelle Maschine (VM) mit KubeVirt bereitstellen
---

## Ziele

Dieses Tutorial soll klare Schritte zum Bereitstellen und Konfigurieren von virtuellen Maschinen (VM) in **KubeVirt** auf Ihrem OpenShift-Cluster bereitstellen.

Zwei Szenarien werden behandelt:

1. Erstellung und Bereitstellung einer Fedora-VM mit NGINX.
2. Erstellung einer angepassten Windows Server 2022-VM mit IIS.

---

## Bekannte Einschränkungen

- Fehlende Vorlagen im OpenShift-Katalog können aus dem offiziellen KubeVirt-Repository abgerufen werden:  
  [https://github.com/kubevirt/common-templates/tree/master](https://github.com/kubevirt/common-templates/tree/master).  
- Die bereitgestellten virtuellen Maschinen müssen mit KubeVirt kompatibel sein (Virtio-Treiber, Festplattenformat usw.).
- Die Konfiguration hängt von den im entsprechenden OpenShift-Projekt zugewiesenen Berechtigungen ab.
- Eine erweiterte Netzwerkkonfiguration (z. B.: Port-Weiterleitung) ist erforderlich, um auf die auf den VMs gehosteten Dienste zuzugreifen.

---

## Stärken

- **Flexibilität**: Ermöglicht die Bereitstellung von VMs direkt aus OpenShift, wodurch das Hosting von Anwendungen, die eine VM-Umgebung benötigen, vereinfacht wird.  
- **Windows- und Linux-Kompatibilität**: Unterstützt Fedora und Windows Server.  
- **Einfache Integration**: Nutzt die in KubeVirt und OpenShift enthaltenen Dienste (PVC, Port-Weiterleitung, Ingress).  

---

## Software-Versionen

- OpenShift: v4.15 oder höher  
- Kubernetes: v1.24 oder höher  
- KubeVirt: v0.56 oder höher  
- VMware Workstation (für die Windows Server-Konvertierung): Version 16 oder höher  
- qemu-img: Version 6.1 oder höher  

---

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass:

1. KubeVirt ordnungsgemäß in OpenShift installiert ist.  
2. Sie Administratorzugriff auf das OpenShift-Projekt haben, in dem die VM bereitgestellt wird.  
3. Sie die SSH-Schlüssel haben, um auf die Fedora-VM zuzugreifen.
4. Sie die folgenden Werkzeuge installiert und konfiguriert haben:  
   - **OpenShift CLI (`oc`)**  
   - **qemu-img** (für die Konvertierung von Festplatten in das `qcow2`-Format)  
5. Sie Zugriff auf den Azure-Blob haben, wo das Windows Server-Abbild gespeichert wird.

---

## Demo-Plan

### Übersicht der Schritte

1. Bereitstellen einer Fedora-VM mit NGINX.  
2. Bereitstellen einer Windows Server-VM mit IIS.  
3. Konfigurieren des Netzwerkzugriffs (SSH für Fedora, RDP für Windows).  
4. Überprüfen, ob die Dienste (NGINX/IIS) über Ihren Browser zugänglich sind.  

---

## Benötigte Dateien

Sie benötigen die folgenden Dateien für die Bereitstellung:

1. **ssh-port-forward.yaml**: Manifest zur Konfiguration des SSH-Zugriffs auf die Fedora-VM.  
2. **nginx-expose.yaml**: Manifest zum Exponieren von NGINX in OpenShift.  
3. **rdp-port-forward.yaml**: Manifest zur Konfiguration des RDP-Zugriffs auf die Windows-VM.  
4. **iis-expose.yaml**: Manifest zum Exponieren von IIS in OpenShift.  

---

## Bereitstellungsablauf

---

### Schritt 1: Bereitstellen einer Fedora-VM mit NGINX

1. **Erstellen einer Fedora-VM in OpenShift**:  

   - Wechseln Sie zur **Administrator**-Ansicht in OpenShift und wählen Sie **Virtualization**.
   - Gehen Sie zum Reiter **Catalog** und klicken Sie auf **Create new VM**.
   - Geben Sie die folgenden Parameter an:  
     - **Betriebssystem**: Fedora  
     - **Instanztyp**: U-Serie mit **2 CPU und 8 GB RAM**  
     - **Name der VM**: `fedora-nginx`  
   - Fügen Sie Ihren öffentlichen SSH-Schlüssel (`mysshkey`) zum Zugriff auf die VM hinzu.
   - Klicken Sie auf **Create**.

2. **Konfigurieren des CLI-Zugriffs auf OpenShift**:  

   - Geben Sie den folgenden Befehl ein, um im korrekten OpenShift-Projekt zu arbeiten:  

     ```bash
     oc project demokubevirt
     ```

   - Melden Sie sich an der OpenShift-API an:  

     ```bash
     oc login --server=api-ocp01-{your-id}.paas.cloud-temple.com --web
     ```

3. **Konfigurieren des SSH-Zugriffs auf die Fedora-VM**:

   - Wenden Sie das Manifest zur Konfiguration der Port-Weiterleitung für SSH an:  

     ```bash
     oc apply -f ssh-port-forward.yaml
     ```

   - Leiten Sie den Port lokal von Ihrer Maschine weiter:  

     ```bash
     oc port-forward svc/fedora-service-ssh 2222:22
     ```

   - Verbinden Sie sich von einem neuen Terminal aus mit der VM:  

     ```bash
     ssh cloud-user@127.0.0.1 -p 2222 -o StrictHostKeyChecking=no
     ```

4. **NGINX auf Fedora bereitstellen**:  

   - Verbinden Sie sich wie oben beschrieben mit der VM und führen Sie die folgenden Befehle aus:  

     ```bash
     sudo dnf update -y 
     sudo dnf install nginx -y
     sudo systemctl start nginx
     sudo systemctl enable nginx
     ```

   - Überprüfen Sie, ob NGINX korrekt funktioniert:  

     ```bash
     sudo systemctl status nginx
     ```

5. **NGINX in OpenShift exponieren**:  

   - Wenden Sie das folgende Manifest an, um den Dienst zu exponieren:  

     ```bash
     oc apply -f nginx-expose.yaml
     ```

6. **Zugriff auf die NGINX-Webseite**:  

   - Öffnen Sie Ihren Browser und gehen Sie zu:  
     `https://nginx-fedora.apps-ocp01-{your-id}.paas.cloud-temple.com`.

---

### Schritt 2: Bereitstellen einer Windows Server-VM mit IIS

1. **Erstellen eines angepassten Windows-Abbilds**:  

   - Installieren Sie eine Windows Server-VM in VMware Workstation mit:  
     - Treibern: **Virtio**, SATA, e1000e, UEFI.  
     - Führen Sie **Sysprep** durch.
     - Exportieren Sie das Abbild im **OVF**-Format.

   - Konvertieren Sie das Festplattenabbild mit `qemu-img` in das **qcow2**-Format:  

     ```bash
     qemu-img convert -f vmdk -O qcow2 WindowsServer2022-OC-disk1.vmdk output.qcow2
     ```

   - Laden Sie das konvertierte Abbild in einen Azure-Blob hoch und erhalten Sie den SAS-Schlüssel.

2. **Erstellen einer angepassten Vorlage für Windows Server in KubeVirt**:

   - Erstellen Sie im Reiter **Catalog** von OpenShift eine Vorlage mit den folgenden Parametern:  
     - **2 CPU, 8 GB RAM, 100 GB Speicher**.  
     - Konfigurieren Sie den Speicher für die Nutzung von **virtio**.  
     - Verwenden Sie die URL des Blobs als Quelle für das Festplattenabbild und binden Sie den SAS-Schlüssel ein.

3. **Konfigurieren von IIS auf Windows**:  

   - Verbinden Sie sich mit der VM (Administrator-Passwort, Tastatur etc.).
   - Installieren Sie **IIS** in der Konsole:  

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

   - Verbinden Sie sich über Ihren RDP-Client:  

     ```bash
     mstsc -v 127.0.0.1:2222
     ```

5. **Zugriff auf die IIS-Webseite**:  

   - Öffnen Sie Ihren Browser und gehen Sie zu:  
     `https://iis-windows.apps-ocp01-{your-id}.paas.cloud-temple.com`.

---

## Validierungskriterien

1. Die Fedora- und Windows Server-VMs sind fehlerfrei bereitgestellt.
2. SSH auf Fedora und RDP auf Windows funktioniert über die Port-Weiterleitung.
3. Die NGINX- und IIS-Dienste sind öffentlich über die konfigurierten URLs zugänglich.

---

## Fazit

Dieser Leitfaden hat Ihnen ermöglicht, Fedora- und Windows Server-VMs auf KubeVirt mit OpenShift bereitzustellen. Sie haben gelernt, Netzwerkzugriffe (SSH/RDP) zu konfigurieren und Webdienste zu exponieren. Diese Schritte können für verschiedene Szenarien wiederholt werden, in denen VMs in einer OpenShift-PaaS-Umgebung **Cloud Temple** benötigt werden. 🚀