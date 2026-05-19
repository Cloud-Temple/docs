---
title: SLA-VM-Instanzen
slug: /contractual/vm-instances/sla
displayed_sidebar: docSidebar
---

# Service Level Agreement (SLA) – VM-Instanzen

| | |
| :--- | :--- |
| **Letztes Änderungsdatum** | 15. April 2026 |

Dieses Dokument definiert die Service Level Agreements (SLAs), die für das Produkt **VM-Instanzen** gelten, das von **Cloud Temple** (nachfolgend „der Anbieter“ oder „Cloud Temple“ genannt) bereitgestellt wird. Es ergänzt die Allgemeinen Verkaufs- und Servicebedingungen von Cloud Temple und bildet mit diesen eine untrennbare Einheit.

---

## 1. Definitionen

Im Rahmen dieses SLA haben die folgenden Begriffe mit Großschreibung die nachstehende Bedeutung:

- **Monatlicher Verfügbarkeitsgrad** : Der garantierte Prozentsatz der Betriebszeit für eine VM-Instanz während eines Kalendermonats.
- **VM-Instanz** : Der vom Kunden bei Bedarf bereitgestellte virtuelle private Server auf der Cloud-Infrastruktur von Cloud Temple, die auf hochleistungsfähigen, gemeinsam genutzten Rechen- und Speicherressourcen basiert.
- **Ausfallzeit** : Totaler Verlust des Zugriffs und der externen Konnektivität zur VM-Instanz, gemessen ausschließlich auf Ebene der zugrunde liegenden Infrastruktur von Cloud Temple (Instanzstatus, der vom Cloud Temple Hypervisor als inaktiv, gestoppt oder fehlerhaft gemeldet wird).
- **Ausfalldauer** : Ununterbrochene Zeit, in der die Ausfallzeit festgestellt wird. Um für dieses SLA angerechnet zu werden, muss eine Ausfalldauer mindestens **vier (4) aufeinanderfolgende Minuten** betragen.

---

## 2. Service Level Agreements (SLA)

Cloud Temple verpflichtet sich, eine monatliche Verfügbarkeit von **99,95 %** für jede dem Kunden in Rechnung gestellte aktive VM-Instanz sicherzustellen.

Dieser Wert entspricht maximal **21,9 Minuten** zulässiger Ausfallzeit pro Kalendermonat. Bei Nichteinhaltung dieser Verpflichtung kann der Kunde Serviceguthaben gemäß den in Artikel 5 festgelegten Bedingungen geltend machen.

---

## 3. Messung und Umfang der Verfügbarkeit

Die Überwachung und Berechnung der monatlichen Verfügbarkeitsrate erfolgt **ausschließlich durch die Monitoring-Tools der Cloud-Temple-Infrastruktur**, die den Status der Instanz auf der Virtualisierungsschicht abfragen.

**Verantwortungsbereich :**  
Dieses SLA deckt ausschließlich den Betrieb der auf der Cloud-Temple-Hardwareinfrastruktur bereitgestellten Compute-Ressourcen (Compute: CPU, RAM) ab.

:::info
Die Netzwerkverbindung (VPC, Routing) oder der persistente Speicher sind Gegenstand separater SLA-Dokumente und werden durch diese Verpflichtung nicht abgedeckt.
:::

**Ausschlussprinzip bei UP-Status :**  
Sobald die VM-Instanz von der Cloud-Temple-Plattform als „UP“ oder „RUNNING“ eingestuft wird, gilt die SLA-Verpflichtung als erfüllt, unabhängig von der Erreichbarkeit der Anwendungsschicht des Kunden.

---

## 4. Garantieausschlüsse

Dieses SLA stellt keine Zusicherung zur Verfügbarkeit von Elementen dar, die unter der ausschließlichen Kontrolle des Kunden stehen. Daher gelten Unterbrechungen, Zugangsverluste oder Ausfälle, die aus folgenden Gründen resultieren, **nicht** als Ausfallzeiten:

1. **Ausfälle des Betriebssystems (OS) oder softwarebedingte Ausfälle**: Absturz des Gast-OS (z. B. *Kernel Panic*, *Blue Screen of Death*), Überlastung der CPU oder des RAM durch Prozesse des Kunden oder Beschädigung des internen Dateisystems.

2. **Kundenkonfigurationen**: Netzwerk- oder lokale Firewall-Regeln (iptables, firewalld), die Zugriffe blockieren, sowie Netzwerk-Konfigurationsfehler innerhalb des OS über Cloud-init oder nach der Bereitstellung.

3. **Anwendungsausfälle**: Stilllegung oder Absturz eines auf der VM-Instanz gehosteten Dienstes (Webserver, Datenbank, Container usw.).

4. **Geplante Wartung**: Hardware- oder Softwareeingriffe auf der physischen Infrastruktur von Cloud Temple, die im Rahmen der in Ihrem Supportvertrag vorgesehenen Wartungsfenster vorher angekündigt wurden.

5. **Fehlen oder Deaktivierung der VM-Tools**: Die von Cloud Temple auf jeder Instanz vorinstallierten Hypervisor-Verwaltungsagenten (*tools*) sind unerlässlich für die Messung und Gewährleistung der Verfügbarkeit. Wenn diese Tools vom Kunden deaktiviert, gelöscht oder funktionsunfähig gemacht wurden, ist Cloud Temple nicht mehr in der Lage, die Überwachung der Instanz durchzuführen oder eine Ausfallzeit objektiv festzustellen. Das SLA wird **sofort ausgesetzt** für die Dauer, in der die Tools fehlen oder nicht betriebsbereit sind. Das Vorhandensein und die einwandfreie Funktion der Tools liegen während der gesamten Lebensdauer der Instanz in der alleinigen Verantwortung des Kunden.

6. **Missbräuchliches Verhalten oder Verstöße**: Sperrung der VM-Instanz durch Cloud Temple infolge eines Verstoßes gegen die Allgemeinen Geschäftsbedingungen oder Sicherheitsanforderungen (z. B. Kompromittierung, Nichteinhaltung der Regeln des Cloud Temple Marketplace).

7. **Höhere Gewalt**: Ereignisse, die außerhalb der zumutbaren Kontrolle von Cloud Temple liegen.

---

## 5. Serviceguthaben und Pönalen

Wird die monatliche Verfügbarkeitsrate von 99,95 % für eine bestimmte VM-Instanz nicht erreicht, hat der Kunde Anspruch auf eine Entschädigung in Form eines Serviceguthabens.

Das Serviceguthaben wird als Prozentsatz des monatlich in Rechnung gestellten Betrags für die betroffene VM-Instanz berechnet:

| Festgestellte monatliche Verfügbarkeitsrate | Serviceguthaben |
| :--- | :---: |
| Zwischen 99,00 % und 99,94 % | 10 % |
| Zwischen 95,00 % und 98,99 % | 25 % |
| Unter 95,00 % | 100 % |

### 5.1 Verfahren zur Geltendmachung

Um eine Service-Gutschrift zu erhalten, muss der Kunde diese begründet beantragen, indem er ein Ticket beim Cloud Temple Support erstellt. Der Antrag muss innerhalb von **dreißig (30) Kalendertagen** nach dem Monat, in dem der Vorfall eingetreten ist, gestellt werden.

Der Antrag muss folgende Angaben enthalten:
- Die Kennung (UUID) der betroffenen VM-Instanz
- Die genauen Zeitstempel der festgestellten Ausfallzeit