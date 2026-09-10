---
title: Schnellstartanleitung
---
import marketplaceCatalog from '@site/docs/marketplace/images/marketplace_catalog.png'
import marketplaceSolutionDetails from '@site/docs/marketplace/images/marketplace_solution_details.png'

# Schnellstart für die Cloud Temple Marketplace

Diese Seite führt Sie durch die ersten Schritte zur Nutzung der **Cloud Temple Marketplace** über die Konsole. Befolgen Sie diese Anweisungen, um die verfügbaren Lösungen kennenzulernen und schnell bereitzustellen.

---

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass folgende Punkte erfüllt sind:

1. **Aktives Abonnement**: Um Bereitstellungen zu ermöglichen, muss Ihre Organisation mindestens einen Cloud Temple-Dienst (IaaS OpenSource ou IaaS VMware) abonniert haben. Im Rahmen der Kontaktaufnahme mit unseren Partnern ist kein spezifisches Abonnement erforderlich.
2. **Benutzerberechtigungen**: Ihr Benutzerkonto muss über die erforderlichen Berechtigungen zum Zugriff auf die Konsole sowie über Schreibrechte für die Zielumgebungen verfügen, wenn Sie dort Ressourcen bereitstellen möchten.
3. **Zielumgebung**: Eine für die Bereitstellung von Lösungen konfigurierte Tenant-Umgebung muss vorhanden sein.

---

## Zugriff auf den Marketplace

### 1. Zugriff über die Konsole

Nachdem Sie sich bei der Cloud Temple-Konsole angemeldet haben, können Sie auf den Marketplace auf verschiedene Weise zugreifen:

- **Hauptmenü** : Ein **Marketplace**-Menü ist in der Hauptnavigation verfügbar
- **Seiten für virtuelle Maschinen** : Der Marketplace ist auch über die Seiten zur Erstellung virtueller Maschinen in den OpenIaaS- und VMware-Umgebungen zugänglich

### 2. Marketplace-Seite

Die Marketplace-Seite stellt einen Katalog der verfügbaren Lösungen bereit. Jede Lösung zeigt folgende Informationen an:

- **Name und Logo** der Lösung
- **Kurze Beschreibung**
- **Anbieter/Partner**
- **Lösungstyp** (VM-Image, SaaS-Lösung, usw.)

<img src={marketplaceCatalog} />

---

## Details einer Lösung anzeigen

### Zugriff auf detaillierte Informationen

Durch Klicken auf eine Lösung gelangen Sie zu einer Detailseite, die Folgendes umfasst:

- **Vollständige Beschreibung** der Lösung
- **Technische Spezifikationen** (falls zutreffend)
- **Voraussetzungen** für die Bereitstellung
- **Dokumentation** des Anbieters
- **Bereitstellungsoptionen** verfügbar

<img src={marketplaceSolutionDetails} />

---

## Verfügbare Aktionen

Je nach Lösungstyp sind verschiedene Aktionen möglich:

### Bereitstellen von VM-Images

Für Lösungen, die mit Ihren OpenIaaS- oder VMware-Umgebungen kompatibel sind, können Sie direkt aus dem Marketplace bereitstellen.

**Wichtiger Hinweis:** Die direkte Bereitstellung ist nur für Images verfügbar, die Ihre Umgebung in ihren kompatiblen Zielen unterstützen.

**Detaillierte Anleitungen:**

- [Wie stelle ich ein Image auf OpenIaaS bereit?](tutorials/deploy_openiaas)
- [Wie stelle ich ein Image auf VMware bereit?](tutorials/deploy_vmware)

### Kontakt zu Partnern

Für Lösungen, die eine Vermittlung erfordern, können Sie den Publisher-Partner direkt kontaktieren.

**Detaillierte Anleitung:**

- [Wie kontaktiere ich einen Partner?](tutorials/contact_partner)

---