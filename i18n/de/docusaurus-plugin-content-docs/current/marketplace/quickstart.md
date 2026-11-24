---
title: Marketplace-Einführungsguide
---
import marketplaceCatalog from '@site/docs/marketplace/images/marketplace_catalog.png'
import marketplaceSolutionDetails from '@site/docs/marketplace/images/marketplace_solution_details.png'

# Marketplace-Einführungsguide

Diese Seite führt Sie durch die ersten Schritte zur Nutzung der **Cloud Temple Marketplace** über die Konsole. Befolgen Sie diese Anweisungen, um die verfügbaren Lösungen zu entdecken und schnell zu deployen.

---

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Folgendes erfüllt ist:

1. **Aktivierte Abo** : Um Bereitstellungen durchzuführen, muss Ihre Organisation mindestens einen Cloud Temple-Dienst abonniert haben (OpenIaaS, VMware oder VM Instances). Im Rahmen der Zusammenarbeit mit unseren Partnern ist kein spezifisches Abo erforderlich.
2. **Benutzerberechtigungen** : Ihr Benutzerkonto muss über die erforderlichen Rechte für den Zugriff auf die Konsole sowie Schreibrechte auf die Zielsysteme verfügen, wenn Sie dort Ressourcen bereitstellen möchten.
3. **Zielsystem** : Ein für die Bereitstellung von Lösungen konfigurierter Tenant muss vorhanden sein.

---

## Zugriff auf die Marketplace

### 1. Zugriff über die Konsole

Sobald Sie bei der Cloud Temple Konsole angemeldet sind, können Sie auf die Marketplace auf verschiedene Weise zugreifen:

- **Hauptmenü** : Ein Menü **Marketplace** ist in der Hauptnavigation verfügbar
- **Virtuelle Maschinen-Seiten** : Die Marketplace ist auch über die Seiten zur Erstellung virtueller Maschinen in den Umgebungen OpenIaaS, VMware und VM Instances zugänglich

### 2. Marketplace-Seite

Die Marketplace-Seite zeigt einen Katalog der verfügbaren Lösungen. Jede Lösung zeigt an:

- **Name und Logo** der Lösung
- **Kurze Beschreibung**
- **Herausgeber/Partner**
- **Lösungstyp** (VM-Image, SaaS-Lösung usw.)

<img src={marketplaceCatalog} />

---

## Details einer Lösung einsehen

### Zugriff auf detaillierte Informationen

Durch Klicken auf eine Lösung gelangen Sie zu einer Detailseite, die Folgendes enthält:

- **Vollständige Beschreibung** der Lösung
- **Technische Spezifikationen** (falls zutreffend)
- **Voraussetzungen** für die Bereitstellung
- **Dokumentation**, die vom Herausgeber bereitgestellt wird
- **Verfügbare Bereitstellungsoptionen**

<img src={marketplaceSolutionDetails} />

---

## Verfügbare Aktionen

Je nach Lösungstyp sind verschiedene Aktionen möglich:

### Bereitstellung von virtuellen Maschinen-Images

Für Lösungen, die mit Ihren Umgebungen OpenIaaS, VMware oder VM Instances kompatibel sind, können Sie direkt aus der Marketplace bereitstellen.

**Wichtiger Hinweis:** Die direkte Bereitstellung ist nur für Images verfügbar, die Ihre Umgebung in ihren kompatiblen Zielen enthalten.

**Detaillierte Anleitungen:**

- [Wie deployt man ein Image auf OpenIaaS?](tutorials/deploy_openiaas.md)
- [Wie deployt man ein Image auf VMware?](tutorials/deploy_vmware.md)
- [Wie deployt man ein Image auf VM Instance?](tutorials/deploy_vminstance.md)

### Kontakt mit den Partnern

Für Lösungen, die eine Vermittlung erfordern, können Sie den Partner-Herausgeber direkt kontaktieren.

**Detaillierte Anleitung:**

- [Wie kontaktiert man einen Partner?](tutorials/contact_partner)

---
