---
title: SLA VPC
slug: /contractual/network/sla-vpc
displayed_sidebar: docSidebar
---

# Service Level Agreement (SLA) – Virtual Private Cloud (VPC)

| | |
| :--- | :--- |
| **Letztes Änderungsdatum** | 17. April 2026 |

Dieses Dokument definiert die Service Level Agreements (SLA) für das Produkt **Virtual Private Cloud (VPC)**, das von **Cloud Temple** (nachfolgend „der Anbieter“ oder „Cloud Temple“) bereitgestellt wird. Es ergänzt die Allgemeinen Verkaufs- und Servicebedingungen von Cloud Temple und bildet mit diesen ein untrennbares Ganzes.

---

## 1. Definitionen

Im Rahmen dieser SLA haben die folgenden Begriffe mit Großschreibung die nachstehende Bedeutung :

- **Monatliche Verfügbarkeitsrate** : Der garantierte Prozentsatz der Betriebszeit für den Data Plane des VPC-Dienstes während eines Kalendermonats.
- **VPC-Dienst** : Die Gesamtheit der von Cloud Temple verwalteten Komponenten, die die Virtual Private Cloud bilden : VPC-Router, Private Networks und External Gateway mit dessen NAT-, DNAT-Funktionen und Floating IPs.
- **Data Plane** : Die Netzwerkebene für den Transport, die das Routing der Datenströme zwischen den privaten Netzwerken desselben VPC sowie die Internetkonnektivität über das External Gateway gewährleistet.
- **Control Plane** : Die APIs und Schnittstellen (Cloud Temple Console), die die Erstellung, Änderung und Löschung von VPC-Ressourcen (Netzwerke, Router, Floating IPs, Sicherheitsregeln) ermöglichen.
- **Ausfallzeit** : Vollständige Unterbrechung des Routings zwischen den privaten Netzwerken desselben VPC oder vollständiger Verlust der Internetkonnektivität über das External Gateway (sofern aktiviert), festgestellt durch die Monitoring-Tools von Cloud Temple.
- **Ausfalldauer** : Ununterbrochene Zeitdauer, in der die Ausfallzeit festgestellt wird. Um für diese SLA angerechnet zu werden, muss eine Ausfalldauer mindestens **fünf (5) aufeinanderfolgende Minuten** betragen.

---

## 2. Service Level Agreements (SLA)

Cloud Temple garantiert die folgenden monatlichen Verfügbarkeitswerte:

| Komponente | Garantierte monatliche Verfügbarkeit |
| :--- | :---: |
| **VPC-Datenebene** (routage inter-réseaux, NAT, DNAT) | **99,99 %** |
| **VPC-Kontroll-Ebene** (API, Console Cloud Temple) | **99,9 %** |

Eine garantierte monatliche Verfügbarkeit der **VPC-Datenebene** von **99,99 %** entspricht maximal **4,4 Minuten** zulässiger Ausfallzeit pro Kalendermonat.

Bei Nichteinhaltung dieser Zusicherungen kann der Kunde unter den in Artikel 5 festgelegten Bedingungen Servicegutschriften geltend machen.

---

## 3. Messung und Umfang der Verfügbarkeit

Die Überwachung und Berechnung des monatlichen Verfügbarkeitsgrads erfolgen **ausschließlich durch die Monitoring-Tools der Cloud-Temple-Infrastruktur**.

**Verantwortungsbereich:**  
Dieses SLA deckt ausschließlich die von Cloud Temple verwalteten Netzwerkkomponenten ab:
- Der VPC-Router und die interne Routing-Tabelle.
- Private Networks (segments L2) und deren Verfügbarkeit auf der Datenebene.
- Das externe Gateway (External Gateway), dessen NAT- und DNAT-Funktionen sowie die zugehörigen Floating IPs.

:::info
Rechenressourcen (VM Instances, IaaS OpenSource, IaaS VMware), die mit dem VPC verbunden sind, unterliegen separaten SLAs und sind nicht durch dieses Dokument abgedeckt.
:::

---

## 4. Garantieausschlüsse

Dieses SLA begründet keine Verpflichtungen für Elemente, die außerhalb der direkten Kontrolle von Cloud Temple liegen. **Nicht** als Ausfallzeiten gelten Unterbrechungen, die folgende Ursachen haben:

1. **Konfigurationen des Kunden** : Vom Kunden konfigurierte Netzwerkfilterregeln (Security Groups, ACLs), die die Konnektivität blockieren, IP-Adresskonflikte, fehlerhafte Konfiguration von Subnetzen oder statischen Routen.

2. **Ausfälle verbundener Ressourcen** : Ausfälle auf Ebene des Betriebssystems oder der auf den mit dem VPC verbundenen Compute-Instanzen (VM-Instanzen, IaaS, Bare Metal) gehosteten Anwendungen.

3. **Externe Internetkonnektivität** : Unterbrechungen der Konnektivität jenseits des Cloud Temple-Abgrenzungspunkts (Vorfälle bei Internet-Transit-Betreibern, Beeinträchtigungen der Upstream-BGP-Leitungen).

4. **Geplante Wartung** : Wartungsarbeiten an der Cloud Temple-Netzwerkinfrastruktur, die im Rahmen der im Supportvertrag des Kunden vorgesehenen Wartungsfenster vorher angekündigt wurden.

5. **Missbräuchliches Verhalten oder Verstöße** : Einstellung des VPC-Dienstes durch Cloud Temple infolge von Verstößen gegen die Allgemeinen Geschäftsbedingungen oder Sicherheitsanforderungen (z. B. bösartige Netzwerkaktivitäten, Nichteinhaltung der Akzeptablen Nutzungsbedingungen).

6. **Höhere Gewalt** : Ereignisse außerhalb der zumutbaren Kontrolle von Cloud Temple (Naturkatastrophen, Kriegsereignisse, landesweite Stromausfälle usw.).

---

## 5. Serviceguthaben und Vertragsstrafen

### 5.1 VPC-Datenebene

Wenn die monatliche Verfügbarkeit von 99,99 % für die Datenebene nicht erreicht wird, hat der Kunde Anspruch auf ein Serviceguthaben, das als Prozentsatz des monatlich in Rechnung gestellten Betrags für den VPC-Dienst berechnet wird:

| Festgestellte monatliche Verfügbarkeit | Serviceguthaben |
| :--- | :---: |
| Zwischen 99,00 % und 99,98 % | 10 % |
| Zwischen 95,00 % und 98,99 % | 25 % |
| Unter 95,00 % | 100 % |

### 5.2 VPC-Steuerungsebene

Wenn die monatliche Verfügbarkeitsrate von 99,9 % für die Steuerungsebene nicht erreicht wird, hat der Kunde Anspruch auf ein Serviceguthaben in Höhe von **10 %** des monatlich berechneten Betrags für den betroffenen VPC-Dienst.

### 5.3 Bedingungen für die Gutschrift

Um eine Servicegutschrift zu erhalten, muss der Kunde einen begründeten Antrag stellen, indem er ein Ticket beim Cloud Temple Support erstellt. Der Antrag muss innerhalb von **dreißig (30) Kalendertagen** nach dem Monat, in dem der Vorfall eingetreten ist, eingereicht werden.

Der Antrag muss folgende Angaben enthalten:
- Die Identifikations-ID (UUID) des betroffenen VPC
- Die genauen Zeitstempel der festgestellten Ausfallzeit