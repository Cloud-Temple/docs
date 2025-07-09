---
title: Sicherheitshinweise
---

Hier finden Sie die Sicherheitshinweise im Zusammenhang mit unseren Cloud-Services.  
Diese Seite wird täglich aktualisiert, um neu identifizierte Schwachstellen zu berücksichtigen.

## Schwachstellen

| Datum | Referenz(en) | CVSS | Titel | Beschreibung | Service(s) | Schweregrad | Behandlung |
|---------------------|-----------------|-------------|--------------|---------|-------------|----------------|-------------|
| 01/07/2025 | [XSA-470](https://xenbits.xen.org/xsa/advisory-470.html) | N/A | **XCP-NG-Schwachstelle durch fehlerhafte Ausnahmebehandlung** <br> [Hersteller-Bulletin](https://xcp-ng.org/blog/2025/07/03/july-2025-security-and-maintenance-update-for-xcp-ng-8-2-lts/) | Eine Schwachstelle wurde in XCP-NG entdeckt, die es privilegiertem Code innerhalb einer virtuellen Maschine ermöglicht, einen Absturz des Hypervisors zu verursachen, was zu einem Denial of Service (DoS) des gesamten Hosts führen kann. | IaaS OpenSource | 🟡 Mäßig | ✅ Das Update Ihrer XCP-ng-Instanzen ist geplant, sobald die Patches von Cloud Temple validiert wurden. Kein Handeln Ihrerseits erforderlich. |
| 23/05/2025 | [XSA-468](https://xenbits.xen.org/xsa/advisory-468.html) | 8.8-90 | **XCP-NG-Vulnerabilitäten in den PV-Windows-Treibern (XSA-468)** <br> [Herausgeber-Bulletin](https://xcp-ng.org/blog/2025/05/27/xsa-468-windows-pv-driver-vulnerabilities/) | Mehrere Schwachstellen (CVE-2025-27462, CVE-2025-27463, CVE-2025-27464) in den PV-Windows-Treibern ermöglichen es unprivilegierten Benutzern, Systemrechte innerhalb der Windows-VMs zu erlangen. | IaaS OpenSource | 🟠 Wichtig | ⚠️ Wir empfehlen Ihnen, die PV-Windows-Treiber Ihrer virtuellen Maschinen auf in der Sicherheitsmitteilung angegebenen korrigierten Versionen zu aktualisieren. ✅ Die Aktualisierung Ihrer XCP-ng-Instanzen ist ab der Validierung der Patches durch Cloud Temple geplant. |
| 22/05/2025 | [XSA-469, INTEL-SA](https://xcp-ng.org/blog/2025/05/14/may-2025-security-update-for-xcp-ng-8-2-83/) | 4.9-6.5 | **XCP-NG-Vulnerabilitäten im Intel-Microcode und Xen (XSA-469, INTEL-SA)** <br> [Herausgeber-Bulletin](https://xcp-ng.org/blog/2025/05/14/may-2025-security-update-for-xcp-ng-8-2-8-3/) | Sicherheitspatches für XCP-ng wurden veröffentlicht, die mehrere Schwachstellen im Intel-Microcode und Xen beheben. | IaaS OpenSource | 🟡 Mäßig | ✅ Die Aktualisierung Ihrer XCP-ng-Instanzen ist ab der Validierung der Patches durch Cloud Temple geplant. Keine Aktion von Ihrer Seite erforderlich. |
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-6.8 | **VMSA-2025-0010: Mehrere Schwachstellen in VMware ESXi (CVE-2025-41226, CVE-2025-41227, CVE-2025-41228)** | Es wurden mehrere Schwachstellen in VMware ESXi gemeldet: Denial-of-Service-Schwachstelle bei Gastoperationen (CVE-2025-41226), Denial-of-Service-Schwachstelle (CVE-2025-41227), Cross-Site-Scripting (XSS)-Schwachstelle (CVE-2025-41228). Patches werden vom Hersteller bereitgestellt. | IaaS By VMware | 🟡 Moderat | ⚠️ Wir empfehlen Ihnen, Ihre Hypervisoren zu aktualisieren. Die gepatchten ESXi-Versionen sind verfügbar, sobald sie von Cloud Temple validiert wurden. Die Konsole zeigt Ihnen an, welche ESXi aktualisiert werden müssen. | 
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-8.8 | **VMSA-2025-0010: Mehrere Schwachstellen in vCenter (CVE-2025-41225, CVE-2025-41228)** | Es wurden mehrere Schwachstellen in VMware vCenter gemeldet: Authentifizierte Befehlsausführung in VMware vCenter Server (CVE-2025-41225), Cross-Site-Scripting (XSS)-Schwachstelle (CVE-2025-41228). Patches werden vom Hersteller bereitgestellt. | IaaS By VMware | 🟠 Wichtig | ✅ Die Aktualisierung Ihrer vCenter-Instanzen ist eingeplant, sobald die Patches von Cloud Temple validiert wurden. Es ist keine Aktion Ihrerseits erforderlich. | 
| 14/05/2025 | [VMSA-2025-0007](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25683) | 6.1 | **VMSA-2025-0007: Unsichere Dateiverwaltung in VMware Tools (CVE-2025-22247)** | Es wurde eine unsichere Dateiverwaltung in VMware Tools gemeldet. Patches werden vom Hersteller bereitgestellt. | IaaS By VMware | 🟡 Moderat | ⚠️ Wir empfehlen Ihnen, VMware Tools auf Ihren virtuellen Maschinen zu aktualisieren. | 
| 25/03/2025 | [VMSA-2025-0005](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25518) | 7.8 | **VMSA-2025-0005: Authentifizierungsumgehung in VMware Tools für Windows (CVE-2025-22230)** | Es wurde eine Schwachstelle zur Umgehung der Authentifizierung in VMware Tools für Windows gemeldet. Patches werden vom Hersteller bereitgestellt. | IaaS By VMware | 🟠 Wichtig | ⚠️ Wir empfehlen Ihnen, VMware Tools auf Ihren virtuellen Maschinen zu aktualisieren. |
| 04/03/2025 | [VMSA-2025-0004](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25390) | 7.1-9.3 | **VMSA-2025-0004: Mehrere Schwachstellen in VMware ESXi (CVE-2025-22224, CVE-2025-22225, CVE-2025-22226)** | Es wurden mehrere Schwachstellen in VMware ESXi gemeldet: Heap-Überlauf-Schwachstelle in VMCI (CVE-2025-22224), von VMware als kritisch eingestuft, Arbiträrer Schreibzugriff in VMware ESXi (CVE-2025-22225), HGFS-Informationsleck-Schwachstelle (CVE-2025-22226). Patches werden vom Hersteller bereitgestellt. | IaaS By VMware | 🟠 Wichtig | ⚠️ Wir empfehlen Ihnen, Ihre Hypervisoren zu aktualisieren. Die gepatchten ESXi-Versionen sind verfügbar, sobald sie von Cloud Temple validiert wurden. Die Konsole zeigt Ihnen an, welche ESXi aktualisiert werden müssen. |

## Informationen

- **Datum**: Erscheinungsdatum der ursprünglichen Cloud Temple-Sicherheitsmeldung.
- **Referenz(en)**: CVE-ID, sofern verfügbar.
- **CVSS**: Basiswert laut CVSS v3, wie vom Hersteller oder CVE angegeben, nicht kontextualisiert. Die Kontextualisierung erfolgt über den CT-Schweregrad. Wenn eine Warnung mehrere Schwachstellen betrifft, werden der min. und max. CVSS-Wert angegeben.
- **Titel**: Titel der Warnung, ggf. mit Anbieterreferenz.
- **Beschreibung**: Zusammenfassung mit Link(s) zu Detailinformationen.
- **Service(s)**: Betroffener(e) Cloud Temple-Service(s).
- **Schweregrad**: Bewertung der Schwere im Kontext der Cloud Temple-Services (bei mehreren Schwachstellen auf die kritischste bezogen). Die Ausnutzbarkeit wird im technischen Kontext unserer Infrastrukturen und Cloud-Services berücksichtigt.

| Niveau | Beschreibung |
|--------|-------------|
| 🔴 **Kritisch** | Schwachstelle mit CVSS 7+ und hohem Risiko der Ausnutzung (hohe Exposition, einfache Ausnutzung). Eine zeitnahe Behebung oder Minderung wird dringend empfohlen. |
| 🟠 **Wichtig** | Schwachstelle mit CVSS 7+, aber ohne hohes Ausnutzungsrisiko (begrenzte Exposition oder Ausnutzungsschwierigkeit) |
| 🟡 **Moderat** | Schwachstelle mit CVSS 4+ |
| 🔵 **Niedrig** | Schwachstelle mit CVSS unter 4 oder nicht ausnutzbar. |

- **Behandlung**: Informationen und Empfehlungen im Kontext der Cloud Temple-Services. ⚠️ weist darauf hin, dass eine Aktion Ihrerseits erforderlich ist. ✅ zeigt an, dass Cloud Temple die Behebung übernimmt.