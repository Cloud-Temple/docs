---
title: SLA VM-Instanzen
slug: /contractual/vm-instances/sla
---

# Service Level Agreement (SLA) – VM-Instanzen

| | |
| :--- | :--- |
| **Letzte Aktualisierung** | 15. April 2026 |

Dieses Dokument definiert die Service Level Commitments (SLA), die für das Produkt **VM-Instanzen** von **Cloud Temple** gelten. Es ergänzt die Allgemeinen Geschäftsbedingungen von Cloud Temple und bildet mit diesen eine untrennbare Einheit.

---

## 1. Definitionen

- **Monatliche Verfügbarkeitsrate**: Der garantierte Betriebszeit-Prozentsatz für eine VM-Instanz während eines Kalendermonats.
- **VM-Instanz**: Der auf Anfrage des Kunden auf der Cloud-Infrastruktur von Cloud Temple bereitgestellte virtuelle private Server, der auf leistungsstarken gemeinsam genutzten Compute- und Speicherressourcen basiert.
- **Nichtverfügbarkeitszeitraum**: Vollständiger Verlust des Zugangs und der externen Konnektivität zur VM-Instanz, ausschließlich auf der Ebene der zugrunde liegenden Cloud Temple-Infrastruktur gemessen.
- **Nichtverfügbarkeitsdauer**: Ununterbrochene Zeit, während der der Nichtverfügbarkeitszeitraum festgestellt wird. Um im Rahmen dieses SLA angerechnet zu werden, muss eine Nichtverfügbarkeitsdauer mindestens **vier (4) aufeinanderfolgende Minuten** betragen.

---

## 2. Service Level Commitments (SLA)

Cloud Temple verpflichtet sich, eine monatliche Verfügbarkeitsrate von **99,95 %** für jede aktive, dem Kunden berechnete VM-Instanz sicherzustellen.

Diese Rate entspricht maximal **21,9 Minuten** autorisierter Nichtverfügbarkeitsdauer pro Kalendermonat. Bei Nichteinhaltung kann der Kunde Service Credits gemäß Artikel 5 beanspruchen.

---

## 3. Messung und Umfang der Verfügbarkeit

Die Überwachung und Berechnung der monatlichen Verfügbarkeitsrate erfolgt **ausschließlich durch die Infrastruktur-Monitoring-Tools von Cloud Temple**.

**Verantwortungsbereich:**  
Dieses SLA deckt nur den Betrieb der Compute-Ressourcen (CPU, RAM) ab, die auf der Hardware-Infrastruktur von Cloud Temple zugewiesen sind.

:::info
Netzwerkkonnektivität (VPC, Routing) oder persistenter Speicher sind Gegenstand separater SLA-Dokumente.
:::

**Ausschlussprinzip des UP-Status:**  
Sobald die VM-Instanz von der Cloud Temple-Plattform als „UP" oder „RUNNING" erkannt wird, gilt die SLA-Verpflichtung als erfüllt.

---

## 4. Ausschlüsse von der Garantie

1. **Betriebssystem- oder Software-Ausfälle**: Absturz des Gast-Betriebssystems, CPU- oder RAM-Überlastung durch Kundenprozesse, interne Dateisystemkorruption.

2. **Kundenkonfigurationen**: Netzwerk- oder lokale Firewall-Regeln, die Zugriffe blockieren, Netzwerkkonfigurationsfehler innerhalb des Betriebssystems.

3. **Anwendungsausfälle**: Abschaltung oder Absturz eines auf der VM-Instanz gehosteten Dienstes.

4. **Geplante Wartungen**: Hardware- oder Software-Eingriffe mit vorheriger Benachrichtigung.

5. **Abwesenheit oder Deaktivierung der VM-Tools**: Die von Cloud Temple auf jeder Instanz vorinstallierten Hypervisor-Management-Agenten (*Tools*) sind für die Messung und Garantie der Verfügbarkeit unerlässlich. Wenn diese Tools vom Kunden deaktiviert, entfernt oder nicht funktionsfähig gemacht wurden, kann Cloud Temple die Instanz nicht mehr überwachen und einen Nichtverfügbarkeitszeitraum nicht objektiv feststellen. Das SLA wird **sofort ausgesetzt**, solange die Tools fehlen oder nicht betriebsbereit sind. Das Vorhandensein und die ordnungsgemäße Funktion der Tools liegen während der gesamten Lebensdauer der Instanz in der ausschließlichen Verantwortung des Kunden.

6. **Missbräuchliches Verhalten oder Verstoß**: Aussetzung der VM-Instanz durch Cloud Temple aufgrund eines Verstoßes gegen die AGB.

7. **Höhere Gewalt**: Ereignisse außerhalb des vernünftigen Einflussbereichs von Cloud Temple.

---

## 5. Service Credits und Strafen

| Festgestellte monatliche Verfügbarkeitsrate | Service Credit |
| :--- | :---: |
| Zwischen 99,00 % und 99,94 % | 10 % |
| Zwischen 95,00 % und 98,99 % | 25 % |
| Unter 95,00 % | 100 % |

### 5.1 Reklamationsverfahren

Der Kunde muss eine begründete Anfrage über ein Support-Ticket bei Cloud Temple innerhalb von **dreißig (30) Kalendertagen** nach dem betreffenden Monat einreichen.

Die Anfrage muss enthalten:
- Die UUID der betroffenen VM-Instanz
- Die genauen Zeitstempel des beobachteten Nichtverfügbarkeitszeitraums
