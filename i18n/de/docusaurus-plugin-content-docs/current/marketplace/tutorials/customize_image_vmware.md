---
title: VMware-Image anpassen
---
import marketplaceVMwareExportTemplate from '@site/docs/marketplace/images/marketplace_vmware_export_template.png'
import marketplaceVMwareExportTemplateButton from '@site/docs/marketplace/images/marketplace_vmware_export_template_button.png'
import marketplaceVMwareDeployFromTemplate from '@site/docs/marketplace/images/marketplace_vmware_deploy_from_template.png'

Dieses Tutorial erklärt, wie Sie ein von der Marketplace bereitgestelltes VMware-VM-Image (VMI) anpassen, um Ihre eigenen wiederverwendbaren Vorlagen zu erstellen.

### Allgemeines Prinzip

Die Marketplace stellt generische Betriebssysteme (OS) bereit. Das Deployment über die Marketplace bietet Ihnen eine solide Grundlage, die sich schnell und einfach bereitstellen lässt, wodurch manuelle Uploads entfallen und Ihre Bereitstellungen beschleunigt werden.

Nach dem Deployment wird das Image zu einer virtuellen Maschine, die Sie konfigurieren können. Anschließend können Sie sie als wiederverwendbare Vorlage exportieren, die von allen Benutzern Ihres Tenants genutzt werden kann.

---

## Anpassungsschritte

1. **Bereitstellen des Basisimages** aus dem Marketplace.
2. **Konfigurieren der virtuellen Maschine** nach Ihren Anforderungen.
3. **Erstellen eines Modells** aus der konfigurierten virtuellen Maschine.
4. **Bereitstellen einer neuen virtuellen Maschine** aus Ihrem benutzerdefinierten Modell.

---

### Schritt 1: Basis-Image bereitstellen

Folgen Sie dem Tutorial [Ein Image auf VMware bereitstellen](./deploy_vmware.md), um zu beginnen.

---

### Schritt 2: Virtuelle Maschine konfigurieren

Nachdem die virtuelle Maschine bereitgestellt wurde, konfigurieren Sie sie nach Ihren Anforderungen (Softwareinstallation, Sicherheitskonfiguration, usw.).

---

### Schritt 3: Eine Vorlage aus der virtuellen Maschine erstellen

1. Wählen Sie in der Liste Ihrer virtuellen Maschinen die konfigurierte virtuelle Maschine aus.
2. Wählen Sie in der Aktionsleiste **"Exportieren"** aus.
3. Folgen Sie den Schritten in der Konsole, um die Vorlage zu exportieren.

<img src={marketplaceVMwareExportTemplateButton} />
<img src={marketplaceVMwareExportTemplate} />

---

### Schritt 4: Vom neuen Modell bereitstellen

Sie können vom Katalog oder von der Seite "Virtuelle Maschinen" bereitstellen.

So stellen Sie von der Seite **Virtuelle Maschinen** bereit:

1. Klicken Sie auf **"Virtuelle Maschine erstellen"**. 
2. Wählen Sie **"Vom Modell bereitstellen"**. 
3. Wählen Sie Ihr neues Modell aus der Liste aus.

<img src={marketplaceVMwareDeployFromTemplate} />