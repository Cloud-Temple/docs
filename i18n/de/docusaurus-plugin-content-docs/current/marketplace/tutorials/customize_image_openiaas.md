---
title: Ein OpenIaaS-Image anpassen
---
import marketplaceOpenIaasExportTemplate from '@site/docs/marketplace/images/marketplace_openiaas_export_template.png'
import marketplaceOpenIaasExportTemplateButton from '@site/docs/marketplace/images/marketplace_openiaas_export_template_button.png'
import marketplaceOpeniaasDeployFromTemplate from '@site/docs/marketplace/images/marketplace_openiaas_deploy_from_template.png'

Dieses Tutorial erklärt, wie Sie ein vom Marktplatz bereitgestelltes OpenIaaS-Image für virtuelle Maschinen (VMI) anpassen, um Ihre eigenen wiederverwendbaren Vorlagen zu erstellen.

### Allgemeines Prinzip

Der Marktplatz bietet generische Betriebssysteme (OS). Die Bereitstellung über den Marktplatz bietet Ihnen eine saubere Basis, die schnell und einfach bereitgestellt werden kann, wodurch Sie manuelle Uploads vermeiden und Ihre Bereitstellungen beschleunigen.

Sobald das Image bereitgestellt ist, wird es zu einer virtuellen Maschine, die Sie konfigurieren können. Sie können es dann als Vorlage exportieren, die von allen Benutzern in Ihrem Mandanten wiederverwendet werden kann.

---

## Anpassungsschritte

1.  **Bereitstellen des Basis-Images** aus dem Marktplatz.
2.  **Konfigurieren der virtuellen Maschine** nach Ihren Bedürfnissen.
3.  **Erstellen einer Vorlage** aus der konfigurierten virtuellen Maschine.
4.  **Bereitstellen einer neuen virtuellen Maschine** aus Ihrer benutzerdefinierten Vorlage.

---

### Schritt 1: Bereitstellen des Basis-Images

Folgen Sie dem Tutorial [Ein Image auf OpenIaaS bereitstellen](./deploy_openiaas.md), um zu beginnen.

---

### Schritt 2: Konfigurieren der virtuellen Maschine

Sobald die virtuelle Maschine bereitgestellt ist, konfigurieren Sie sie nach Ihren Bedürfnissen (Installation von Software, Sicherheitseinstellungen usw.).

---

### Schritt 3: Erstellen einer Vorlage aus der virtuellen Maschine

1.  Wählen Sie aus Ihrer Liste der virtuellen Maschinen die konfigurierte virtuelle Maschine aus.
2.  Wählen Sie **"Exportieren"** aus der Aktionsleiste.
3.  Befolgen Sie die Schritte in der Konsole, um die Vorlage zu exportieren.

<img src={marketplaceOpenIaasExportTemplateButton} />
<img src={marketplaceOpenIaasExportTemplate} />

---

### Schritt 4: Bereitstellen von Ihrer neuen Vorlage

Sie können von der Seite "Katalog" oder von der Seite "Virtuelle Maschinen" bereitstellen.

So stellen Sie von der Seite **Virtuelle Maschinen** bereit:
1.  Klicken Sie auf **"Eine virtuelle Maschine erstellen"**.
2.  Wählen Sie **"Aus einer Vorlage bereitstellen"**.
3.  Wählen Sie Ihre neue Vorlage aus der Liste aus.

<img src={marketplaceOpeniaasDeployFromTemplate} />
