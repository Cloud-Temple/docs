---
title: SLA VPC
slug: /contractual/network/sla-vpc
displayed_sidebar: docSidebar
---

# Service Level Agreement (SLA) – Virtual Private Cloud (VPC)

| | |
| :--- | :--- |
| **Letzte Aktualisierung** | 17. April 2026 |

Dieses Dokument definiert die Service Level Agreements (SLA) für das **Virtual Private Cloud (VPC)**-Produkt von **Cloud Temple** (nachfolgend „Anbieter" oder „Cloud Temple" genannt). Es ergänzt die Allgemeinen Geschäftsbedingungen von Cloud Temple und bildet mit diesen eine untrennbare Einheit.

---

## 1. Definitionen

Im Rahmen dieser SLA haben die folgenden groß geschriebenen Begriffe die nachstehende Bedeutung:

- **Monatliche Verfügbarkeitsrate**: Der garantierte Betriebszeitanteil für die Datenebene des VPC-Dienstes in einem Kalendermonat.
- **VPC-Dienst**: Alle von Cloud Temple verwalteten Komponenten des Virtual Private Cloud: VPC-Router, Private Networks und External Gateway mit NAT-, DNAT- und Floating-IP-Funktionen.
- **Datenebene**: Die Netzwerktransportebene, die das Routing zwischen privaten Netzwerken innerhalb desselben VPC sowie die Internet-Konnektivität über das External Gateway sicherstellt.
- **Steuerungsebene**: Die APIs und Schnittstellen (Cloud Temple Konsole) zur Erstellung, Änderung und Löschung von VPC-Ressourcen (Netzwerke, Router, Floating IPs, Sicherheitsregeln).
- **Ausfallzeitraum**: Vollständige Unterbrechung des Routings zwischen privaten Netzwerken innerhalb desselben VPC oder vollständiger Verlust der Internet-Konnektivität über das aktivierte External Gateway, festgestellt durch Cloud Temples Monitoring-Tools.
- **Ausfallzeit**: Ununterbrochene Zeit, während der der Ausfallzeitraum besteht. Um im Rahmen dieser SLA berücksichtigt zu werden, muss eine Ausfallzeit mindestens **fünf (5) aufeinanderfolgende Minuten** betragen.

---

## 2. Service Level Verpflichtungen (SLA)

Cloud Temple verpflichtet sich zu den folgenden monatlichen Verfügbarkeitsniveaus:

| Komponente | Garantierte monatliche Verfügbarkeitsrate |
| :--- | :---: |
| **VPC-Datenebene** (Netzwerk-Routing, NAT, DNAT) | **99,99 %** |
| **VPC-Steuerungsebene** (API, Cloud Temple Konsole) | **99,9 %** |

Eine monatliche Verfügbarkeitsrate von **99,99 %** für die Datenebene entspricht maximal **4,4 Minuten** zulässiger Ausfallzeit pro Kalendermonat.

Bei Nichteinhaltung dieser Verpflichtungen kann der Kunde Service-Gutschriften unter den in Artikel 5 definierten Bedingungen beanspruchen.

---

## 3. Messung und Umfang der Verfügbarkeit

Die Überwachung und Berechnung der monatlichen Verfügbarkeitsrate erfolgt **ausschließlich durch Cloud Temples Infrastruktur-Monitoring-Tools**.

**Verantwortungsbereich:**  
Diese SLA deckt nur die von Cloud Temple **verwalteten** Netzwerkkomponenten ab:
- Den VPC-Router und die interne Routing-Tabelle.
- Die Private Networks (L2-Segmente) und ihre Verfügbarkeit auf Datenebenenniveau.
- Das External Gateway, seine NAT- und DNAT-Funktionen sowie die zugehörigen Floating IPs.

:::info
Compute-Ressourcen (VM Instances, IaaS OpenSource, IaaS VMware), die mit dem VPC verbunden sind, unterliegen separaten SLAs und werden von diesem Dokument nicht abgedeckt.
:::

---

## 4. Ausschlüsse

Diese SLA stellt keine Verpflichtung bezüglich Elementen außerhalb der direkten Kontrolle von Cloud Temple dar. Folgendes wird **nicht** als Ausfallzeitraum betrachtet:

1. **Kundenkonfigurationen**: Netzwerkfilterregeln (Security Groups, ACLs), die vom Kunden konfiguriert wurden und die Konnektivität blockieren, IP-Adresskonflikte, fehlerhafte Subnetz- oder statische Routenkonfigurationen.

2. **Ausfälle verbundener Ressourcen**: Ausfälle auf Betriebssystem- oder Anwendungsebene von Compute-Instanzen (VM Instances, IaaS, Bare Metal), die mit dem VPC verbunden sind.

3. **Externe Internet-Konnektivität**: Konnektivitätsunterbrechungen jenseits des Cloud Temple-Demarcationspunkts (Vorfälle bei Internet-Transit-Anbietern, BGP-Upstream-Verbindungsverschlechterungen).

4. **Geplante Wartung**: Wartungsarbeiten an der Netzwerkinfrastruktur, die im Rahmen der im Support-Vertrag des Kunden vorgesehenen Wartungsfenster vorab angekündigt wurden.

5. **Missbrauch oder Verstoß**: Aussetzung des VPC-Dienstes durch Cloud Temple nach einem Verstoß gegen die Allgemeinen Geschäftsbedingungen oder Sicherheitsanforderungen.

6. **Höhere Gewalt**: Ereignisse außerhalb der angemessenen Kontrolle von Cloud Temple.

---

## 5. Service-Gutschriften und Strafen

### 5.1 VPC-Datenebene

Wenn die monatliche Verfügbarkeitsrate von 99,99 % für die Datenebene nicht erreicht wird, ist der Kunde berechtigt, eine Service-Gutschrift zu erhalten:

| Festgestellte monatliche Verfügbarkeitsrate | Service-Gutschrift |
| :--- | :---: |
| Zwischen 99,00 % und 99,98 % | 10 % |
| Zwischen 95,00 % und 98,99 % | 25 % |
| Unter 95,00 % | 100 % |

### 5.2 VPC-Steuerungsebene

Wenn die monatliche Verfügbarkeitsrate von 99,9 % für die Steuerungsebene nicht erreicht wird, hat der Kunde Anspruch auf eine Service-Gutschrift von **10 %** des monatlich für den VPC-Dienst berechneten Betrags.

### 5.3 Reklamationsverfahren

Um eine Service-Gutschrift zu erhalten, muss der Kunde innerhalb von **dreißig (30) Kalendertagen** nach dem Monat, in dem der Vorfall aufgetreten ist, eine begründete Anfrage durch Öffnen eines Tickets beim Cloud Temple Support einreichen.

Die Anfrage muss enthalten:
- Die UUID des betroffenen VPC
- Genaue Zeitstempel des festgestellten Ausfallzeitraums
