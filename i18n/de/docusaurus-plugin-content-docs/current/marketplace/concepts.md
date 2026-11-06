---
title: Konzepte
---

<a id="definition-und-positionierung"></a>

## Einführung

Die **Marketplace Cloud Temple** ist eine zentralisierte Plattform, die den Zugriff auf und die Bereitstellung von sofort einsatzbereiten Cloud-Lösungen erleichtert: Images virtueller Maschinen für Ihre Cloud-Temple-Umgebungen, Managed Services und SaaS-Lösungen von Partnern.

Die Cloud Temple Marketplace positioniert sich als Hebel für die digitale Transformation von Unternehmen, die zuverlässige Dienste mit einfacher und schneller Integration suchen.

Sie ermöglicht:

- **Zentralisieren** des Zugriffs auf validierte Partnerlösungen
- **Vereinfachen** der Bereitstellung von Cloud-Umgebungen
- **Beschleunigen** der Umsetzung digitaler Projekte
- **Garantieren** der Compliance und Sicherheit der Bereitstellungen in Ihren Cloud-Temple-Umgebungen

Sie richtet sich an IT- und DevOps-Teams, die ihre Cloud-Temple-Umgebungen aufbauen, auch in regulierten Branchen, sowie an Fachabteilungen, die SaaS-Lösungen von Partner-Softwareherstellern suchen.

## Vorteile

| Vorteil | Beschreibung |
|---|---|
| Zentraler Zugang | Images, Managed Services und SaaS-Lösungen von Partnern in einem einzigen Katalog, abrufbar über die Cloud-Temple-Konsole. |
| Schnelle Bereitstellung | Images virtueller Maschinen werden direkt in Ihren Umgebungen bereitgestellt, bei den meisten in wenigen Minuten. |
| Partnerlösungen | Zugang zu den Lösungen von Partner-Softwareherstellern und direkter Kontakt mit ihnen. |
| Integration in die Konsole | Der Marketplace wird über die gewohnte Verwaltungsoberfläche genutzt, ohne zusätzliches Werkzeug. |

## Funktionen

| Funktion | Beschreibung |
|---|---|
| Images virtueller Maschinen | Vorkonfigurierte Images zur Bereitstellung auf IaaS OpenSource und IaaS VMware: siehe [Erste Schritte](./quickstart.md). |
| Managed Services | Für Sie betriebene Dienste, im Katalog vorgestellt. |
| SaaS-Lösungen von Partnern | Lösungen von Partner-Softwareherstellern, über den Katalog zugänglich. |
| Kontaktaufnahme | Direkter Kontakt mit dem Hersteller einer Lösung über ihre Seite. |
| Öffentlicher Katalog | Die aktuelle Liste der Lösungen finden Sie im [Marketplace-Katalog auf der Cloud-Temple-Website](https://www.cloud-temple.com/marketplace/). |

<a id="integration-mit-dem-ökosystem-cloud-temple"></a>

## Architektur

### Cloud Temple-Konsole

Der Marktplatz ist nativ in die Cloud Temple-Konsole integriert und bietet:

- **Einheitlicher Zugriff** über die übliche Verwaltungsschnittstelle
- **Direkte Bereitstellung** von Images virtueller Maschinen auf Ihren bestehenden Infrastrukturen
- **Zentralisiertes Management** der so bereitgestellten virtuellen Maschinen

### Kompatibilität mit Diensten

Die Images virtueller Maschinen des Marketplace werden in folgenden Umgebungen bereitgestellt:

- **IaaS OpenSource** : Bereitstellung auf OpenIaaS-Infrastruktur
- **IaaS VMware** : Integration in die vSphere-Umgebung

## Regionen und Verfügbarkeitszonen

Images virtueller Maschinen werden in der Region und den Verfügbarkeitszonen Ihrer Cloud-Temple-Umgebung bereitgestellt (Region FR1). Bei Managed Services und SaaS-Lösungen ist der Standort für jedes Angebot spezifisch und auf seiner Seite angegeben.

<a id="verfügbare-lösungstypen"></a>

## Technische Spezifikationen

Der Katalog umfasst Images virtueller Maschinen, Managed Services und SaaS-Lösungen von Partner-Softwareherstellern. Er wächst laufend: Die hier beschriebenen Lösungen sind nur Beispiele, die aktuelle Liste finden Sie im [Marketplace-Katalog auf der Cloud-Temple-Website](https://www.cloud-temple.com/marketplace/).

### Virtual Machine Images

Virtuelle Maschinen-Images bilden derzeit das Kernstück des Marketplace-Produkts. Diese vorkonfigurierten Images ermöglichen die schnelle Bereitstellung standardisierter Umgebungen.

**Eigenschaften:**

- Geprüfte und sichere Images
- Kompatibel mit OpenIaaS- und VMware-Umgebungen
- Bereitstellung in weniger als 10 Minuten
- Native Integration in die Cloud Temple-Konsole

### Partnerlösungen

Der Marketplace bietet zudem Zugang zu Lösungen, die von unseren Partner-Softwareherstellern entwickelt wurden und verschiedene Geschäftsbereiche abdecken.

**Zugriffsprozess:**

- Katalogeinsicht über die Konsole
- Direkte Kontaktaufnahme mit dem Partner
- Je nach Angebot Bereitstellung in Ihren Cloud-Temple-Umgebungen oder Zugang zum SaaS-Dienst, den der Hersteller betreibt

### Grenzen

- Der Katalog entwickelt sich laufend weiter: Die auf dieser Seite beschriebenen Lösungen sind Beispiele.
- Die Aktualisierung der Partnerlösungen liegt bei ihren Herstellern, ebenso die Antwortzeiten auf Kontaktanfragen.

## Sicherheit und Compliance

### Hosting und Qualifizierungen

Hosting und Qualifizierungen hängen vom Lösungstyp ab:

- **Images virtueller Maschinen**: Sie werden in Ihren Cloud-Temple-Umgebungen bereitgestellt und unterliegen deren Qualifizierungen.
- **Managed Services und SaaS-Lösungen**: Hosting und Zertifizierungen sind für jedes Angebot spezifisch. Prüfen Sie die Angaben auf seiner Seite im [Marketplace-Katalog der Website](https://www.cloud-temple.com/marketplace/) und wenden Sie sich für weitere Details an den Hersteller.

### Validierung der Lösungen

Die in der Marketplace angebotenen Lösungen unterliegen einer strengen Auswahl, die Folgendes gewährleistet:

- **Kompatibilität** mit der Cloud Temple-Infrastruktur, für die dort bereitgestellten Lösungen
- **Sicherheit** der Images virtueller Maschinen
- **Zuverlässigkeit** der Softwarepartner

## Verantwortlichkeiten

Der Support für den Marketplace selbst (Katalog, Bereitstellung der Images) ist Teil des Supports der Cloud-Temple-Konsole. Jedes Angebot hat darüber hinaus eigene Supportbedingungen: die des Dienstes bei einem Angebot von Cloud Temple, die des Herstellers bei einer Partnerlösung, der auch für deren Aktualisierungen und Antwortzeiten zuständig ist. Die über den Marketplace bereitgestellten virtuellen Maschinen sind Ressourcen Ihrer IaaS-Umgebung: siehe die [IaaS-Verantwortlichkeitsmatrix (RACI)](../contractual/iaas/raci.md).

## Reversibilität

- **Images virtueller Maschinen**: Die bereitgestellten Maschinen sind Ressourcen Ihrer IaaS-Umgebung; ihre Reversibilität folgt der des betreffenden Angebots, IaaS OpenSource oder IaaS VMware.
- **Partnerlösungen**: Es gelten die vom Hersteller angegebenen Austrittsbedingungen.

## Preise

Der Marketplace verursacht keine eigenen Kosten. Sie zahlen die Infrastruktur, auf der Sie ein Image bereitstellen, und je nach gewähltem Angebot die Lizenz oder den Dienst, bereitgestellt von Cloud Temple oder einem Partner, zu dessen Preisbedingungen. Die Einzelheiten jedes Angebots finden Sie im [Marketplace-Katalog auf der Cloud-Temple-Website](https://www.cloud-temple.com/marketplace/).
