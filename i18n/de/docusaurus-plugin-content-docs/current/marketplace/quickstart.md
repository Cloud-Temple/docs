---
title: Schnellstartanleitung
---
import marketplaceCatalog from './images/marketplace_catalog.png'
import marketplaceSolutionDetails from './images/marketplace_solution_details.png'

# QuickStart für die Cloud Temple Marketplace

Diese Seite führt Sie durch die ersten Schritte zur Nutzung der **Cloud Temple Marketplace** über die Konsole. Befolgen Sie diese Anweisungen, um die verfügbaren Lösungen kennenzulernen und diese schnell bereitzustellen.

## Voraussetzungen

Stellen Sie sicher, dass die folgenden Punkte erfüllt sind, bevor Sie beginnen:

1. **Aktivierte Abonnement**: Um Bereitstellungen durchführen zu können, muss Ihre Organisation mindestens ein Cloud Temple-Service-Abonnement (IaaS OpenSource oder IaaS VMware) abgeschlossen haben. Im Rahmen der Zusammenarbeit mit unseren Partnern ist kein spezifisches Abonnement erforderlich.
2. **Benutzerberechtigungen**: Ihr Benutzerkonto muss über die erforderlichen Berechtigungen verfügen, um auf die Konsole zugreifen zu können, sowie über Schreibrechte für die Zielumgebungen, wenn Sie Ressourcen bereitstellen möchten.
3. **Zielumgebung**: Sie müssen über einen konfigurierten Tenant verfügen, der für die Bereitstellung von Lösungen verwendet werden kann.

## Access to the Marketplace

### 1. Access via the Console

After logging into the Cloud Temple console, you can access the Marketplace in several ways:

- **Main menu**: A **Marketplace** menu is available in the main navigation
- **Virtual machine pages**: The Marketplace is also accessible from the virtual machine creation pages in OpenIaaS and VMware environments

### 2. Marketplace-Seite

Die Marketplace-Seite zeigt einen Katalog der verfügbaren Lösungen. Jede Lösung zeigt an:

- **Name und Logo** der Lösung  
- **Kurze Beschreibung**  
- **Herausgeber/Partner**  
- **Typ der Lösung** (VM-Image, SaaS-Lösung, usw.)

<img src={marketplaceCatalog} />

## Viewing solution details

### Zugriff auf detaillierte Informationen

Wenn Sie auf eine Lösung klicken, gelangen Sie zu einer Detailseite mit folgenden Informationen:

- **Vollständige Beschreibung** der Lösung  
- **Technische Spezifikationen** (falls zutreffend)  
- **Voraussetzungen** für die Bereitstellung  
- **Dokumentation**, bereitgestellt durch den Anbieter  
- **Verfügbare Bereitstellungsoptionen**  

<img src={marketplaceSolutionDetails} />

## Available actions

Depending on the type of solution, different actions are possible:

### Deployment of Virtual Machine Images

For solutions compatible with your OpenIaaS or VMware environments, you can deploy directly from the Marketplace.

**Important note:** Direct deployment is only available for images that list your environment among their compatible targets.

**Detailed guides:**
- [How to deploy an image on OpenIaaS?](tutorials/deploy_openiaas)
- [How to deploy an image on VMware?](tutorials/deploy_vmware)

### Kontakt zu Partnern

Für Lösungen, die eine Vermittlung erfordern, können Sie den jeweiligen Partner-Editor direkt kontaktieren.

**Detaillierter Leitfaden:**
- [Wie kontaktiert man einen Partner?](tutorials/contact_partner)