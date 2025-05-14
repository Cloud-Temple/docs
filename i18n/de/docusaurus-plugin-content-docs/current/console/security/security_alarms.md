---
title: Sicherheitshinweise
---

Hier finden Sie unsere Sicherheitshinweise und Empfehlungen zu Cloud Temple-Diensten.

## Sicherheitslücken

### Tabelle der Sicherheitslücken

| Veröffentlichungsdatum | Betroffener Dienst | Kennung | CVSSv3-Score | Details | CT-Schweregrad | Empfehlung | Beschreibung |
|---------------------|-----------------|-------------|--------------|---------|-------------|----------------|-------------|
| 12.05.2025 | IaaS By VMware | CVE-2025-22247 | 6.1 | **VMware Tools-Sicherheitslücke: CVE-2025-25234** [Herstellerbulletin](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25683) | 🟡 Mittel | Aktualisieren Sie VMware Tools auf Version 12.5.2 auf Ihren VMs, um die Sicherheitslücke zu beheben. | Eine Sicherheitslücke bei der unsicheren Dateiverwaltung in VMware Tools wurde VMware privat gemeldet. Updates sind verfügbar, um diese Sicherheitslücke in betroffenen VMware-Produkten zu beheben. |
| 25.03.2025 | IaaS By VMware | CVE-2025-22230 | 7.8 | **VMware Tools-Sicherheitslücke: CVE-2025-22230** [Herstellerbulletin](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25518) | 🟠 Hoch | Aktualisieren Sie VMware Tools auf Version 15.5.1 für Windows auf Ihren VMs, um diese Sicherheitslücke zu beheben. | Eine Authentifizierungsumgehungs-Sicherheitslücke in VMware Tools für Windows wurde VMware privat gemeldet. Updates sind verfügbar, um diese Sicherheitslücke in betroffenen VMware-Produkten zu beheben. |
| 04.03.2025 | IaaS By VMware | Mehrere CVEs | 7.1 bis 9.3 | **Sicherheitslücken in VMware ESXI (CVE-2025-22224, CVE-2025-22225, CVE-2025-22226)** [Herstellerbulletin](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25390) | 🟠 Hoch | Installieren Sie so schnell wie möglich die verfügbaren Patches für Ihren Branch. Die neuen gepatchten Versionen sind in der Console verfügbar. Zur Erinnerung: Die Console zeigt an, welche Versionen Ihrer ESXi nicht aktuell sind. | Mehrere Sicherheitslücken in VMware ESXi wurden VMware privat gemeldet (CVE-2025-22224; CVE-2025-22225; CVE-2025-22226). Updates sind verfügbar, um diese Sicherheitslücken in betroffenen VMware-Produkten zu beheben. |

## Schweregradskalen

| Stufe | Beschreibung |
|--------|-------------|
| 🔴 **Kritisch** | CVSS 7+ Sicherheitslücke mit erheblichem Ausnutzungsrisiko (Exposition, einfache Ausnutzung) |
| 🟠 **Hoch** | CVSS 7+ Sicherheitslücke ohne erhebliches Ausnutzungsrisiko (begrenzte Exposition oder Ausnutzungseinschränkungen) |
| 🟡 **Mittel** | CVSS 4+ Sicherheitslücke |
| 🔵 **Niedrig** | CVSS-Sicherheitslücke unter 4 oder nicht ausnutzbar. |

*Die Ausnutzungskriterien werden im technischen Kontext unserer Cloud-Infrastrukturen und -Dienste berücksichtigt.*
