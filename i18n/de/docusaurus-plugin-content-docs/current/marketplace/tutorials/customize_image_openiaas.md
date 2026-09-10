---
title: OpenIaaS-Image anpassen
---
import marketplaceOpenIaasExportTemplate from '@site/docs/marketplace/images/marketplace_openiaas_export_template.png'
import marketplaceOpenIaasExportTemplateButton from '@site/docs/marketplace/images/marketplace_openiaas_export_template_button.png'
import marketplaceOpeniaasDeployFromTemplate from '@site/docs/marketplace/images/marketplace_openiaas_deploy_from_template.png'

Dieses Tutorial erläutert, wie Sie ein von der Marketplace bereitgestelltes OpenIaaS-VM-Image (VMI) anpassen, um Ihre eigenen wiederverwendbaren Vorlagen zu erstellen.

### Allgemeines Prinzip

Die Marketplace stellt generische Betriebssysteme (OS) bereit. Das Deployment über die Marketplace bietet Ihnen eine solide Grundlage, die sich schnell und einfach bereitstellen lässt, wodurch manuelle Uploads entfallen und Ihre Bereitstellungen beschleunigt werden.

Nach dem Deployment wird das Image zu einer virtuellen Maschine, die Sie konfigurieren können. Anschließend können Sie sie als wiederverwendbare Vorlage exportieren, die von allen Benutzern Ihres Tenants genutzt werden kann.

---

## Schritte zur Anpassung

1. **Das Basis-Image** aus dem Marketplace bereitstellen.
2. **Die virtuelle Maschine** nach Ihren Anforderungen konfigurieren.
3. **Eine Vorlage** aus der konfigurierten virtuellen Maschine erstellen.
4. **Eine neue virtuelle Maschine** aus Ihrer benutzerdefinierten Vorlage bereitstellen.

---

### Schritt 1: Bereitstellen des Basisimages

Folgen Sie dem Tutorial [Bereitstellen eines Images auf OpenIaaS](./deploy_openiaas.md), um zu beginnen.

---

### Schritt 2: Virtuelle Maschine konfigurieren

Nachdem die virtuelle Maschine bereitgestellt wurde, konfigurieren Sie sie entsprechend Ihren Anforderungen (Softwareinstallation, Sicherheitskonfiguration usw.).

---

### Schritt 3: Erstellen einer Vorlage aus der virtuellen Maschine

1. Wählen Sie in der Liste Ihrer virtuellen Maschinen die konfigurierte virtuelle Maschine aus.
2. Wählen Sie in der Aktionsleiste **"Exportieren"** aus.
3. Folgen Sie den Schritten in der Konsole, um die Vorlage zu exportieren.

<img src={marketplaceOpenIaasExportTemplateButton} />
<img src={marketplaceOpenIaasExportTemplate} />

---

### Schritt 4: Bereitstellung aus Ihrem neuen Modell

Sie können über die Seite "Katalog" oder über die Seite "Virtuelle Maschinen" bereitstellen.

Um die Bereitstellung von der Seite **Virtuelle Maschinen** durchzuführen:

1. Klicken Sie auf **"Virtuelle Maschine erstellen"**.
2. Wählen Sie **"Bereitstellung aus einem Modell"**.
3. Wählen Sie Ihr neues Modell in der Liste aus.

<img src={marketplaceOpeniaasDeployFromTemplate} />