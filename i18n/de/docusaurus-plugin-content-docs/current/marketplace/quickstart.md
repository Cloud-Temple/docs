---
title: Erste Schritte
---
import marketplaceCatalog from './images/marketplace_catalog.png'
import marketplaceSolutionDetails from './images/marketplace_solution_details.png'

# Schnellstart für Cloud Temple Marketplace

Diese Seite führt Sie durch die ersten Schritte zur Nutzung des **Cloud Temple Marketplace** über die Konsole. Befolgen Sie diese Anweisungen, um verfügbare Lösungen zu entdecken und sie schnell bereitzustellen.

---

## Voraussetzungen

Stellen Sie vor dem Start sicher, dass folgende Punkte erfüllt sind:

1. **Aktives Abonnement**: Um Bereitstellungen zu ermöglichen, muss Ihre Organisation mindestens einen Cloud Temple-Service (IaaS OpenSource oder IaaS VMware) abonniert haben. Für die Kontaktaufnahme mit unseren Partnern benötigen Sie kein spezifisches Abonnement.
2. **Benutzerberechtigungen**: Ihr Benutzerkonto muss über die erforderlichen Rechte für den Zugang zur Konsole und Schreibberechtigungen für Zielumgebungen verfügen, wenn Sie dort Ressourcen bereitstellen möchten.
3. **Zielumgebung**: Verfügen Sie über einen konfigurierten Tenant für die Lösungsbereitstellung.

---

## Zugang zum Marketplace

### 1. Zugang über die Shiva-Konsole

Nach der Anmeldung bei der Cloud Temple-Konsole können Sie auf verschiedene Weise auf den Marketplace zugreifen:

- **Hauptmenü**: Ein **Marketplace**-Menü ist in der Hauptnavigation verfügbar
- **Virtual Machine-Seiten**: Der Marketplace ist auch über die Seiten zur Erstellung virtueller Maschinen in OpenIaaS- und VMware-Umgebungen zugänglich

### 2. Marketplace-Seite

Die Marketplace-Seite präsentiert einen Katalog verfügbarer Lösungen. Jede Lösung zeigt:

- **Name und Logo** der Lösung
- **Kurzbeschreibung**
- **Herausgeber/Partner**
- **Lösungstyp** (VM Image, SaaS-Lösung, etc.)

<img src={marketplaceCatalog} />

---

## Konsultation von Lösungsdetails

### Zugang zu detaillierten Informationen

Durch Klicken auf eine Lösung gelangen Sie zu einer Detailseite mit:

- **Vollständige Beschreibung** der Lösung
- **Technische Spezifikationen** (falls zutreffend)
- **Bereitstellungsvoraussetzungen**
- **Dokumentation** des Herausgebers
- **Verfügbare Bereitstellungsoptionen**

<img src={marketplaceSolutionDetails} />

---

## Verfügbare Aktionen

Je nach Lösungstyp sind verschiedene Aktionen möglich:

### Bereitstellung von Virtual Machine Images

Für Lösungen, die mit Ihren OpenIaaS- oder VMware-Umgebungen kompatibel sind, können Sie direkt vom Marketplace aus bereitstellen.

**Wichtiger Hinweis:** Direkte Bereitstellung ist nur für Images verfügbar, die Ihre Umgebung in ihren kompatiblen Zielen haben.

**Detaillierte Anleitungen:**
- [Wie stelle ich ein Image auf OpenIaaS bereit?](tutorials/deploy_openiaas)
- [Wie stelle ich ein Image auf VMware bereit?](tutorials/deploy_vmware)

### Partner-Kontakt

Für Lösungen, die eine Verbindung erfordern, können Sie den Partner-Herausgeber direkt kontaktieren.

**Detaillierte Anleitung:**
- [Wie kontaktiere ich einen Partner?](tutorials/contact_partner)

---
