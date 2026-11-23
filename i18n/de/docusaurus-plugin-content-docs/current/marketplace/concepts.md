---
title: Konzepte
---

<a id="définition-et-positionnement"></a>

## Übersicht

Die **Marketplace Cloud Temple** ist eine zentrale Plattform, die den Zugang und die Bereitstellung von einsatzbereiten Cloud-Lösungen erleichtert: virtuelle Maschinen-Images für den Einsatz in Ihren Cloud Temple-Umgebungen, verwaltete Dienste und SaaS-Lösungen von Partnern.

Die Marketplace Cloud Temple positioniert sich als Hebel für die digitale Transformation von Unternehmen, die zuverlässige Dienste mit einfacher und schneller Integration suchen.

Sie ermöglicht:

- **Zentralisierung** des Zugangs zu von Cloud Temple ausgewählten Partnerlösungen
- **Vereinfachung** der Bereitstellung von Cloud-Umgebungen
- **Beschleunigung** der Umsetzung digitaler Projekte
- **Bereitstellung** in Ihren Cloud Temple-Umgebungen, die über eigene Qualifikationen verfügen; die Sicherheit der bereitgestellten Maschinen bleibt Ihre Verantwortung

Sie richtet sich an IT- und DevOps-Teams, die ihre Cloud Temple-Umgebungen aufbauen, einschließlich in regulierten Branchen, sowie an Fachbereiche, die nach SaaS-Lösungen von Partnerherstellern suchen.

## Vorteile

| Vorteil | Beschreibung |
|---|---|
| Zentraler Zugang | Images, verwaltete Dienste und SaaS-Lösungen von Partnern in einem einzigen Katalog vereint, abrufbar über die Cloud Temple Konsole. |
| Schnelle Bereitstellung | Die virtuellen Maschinen-Images werden direkt in Ihren Umgebungen bereitgestellt, in den meisten Fällen innerhalb weniger Minuten. |
| Partnerlösungen | Zugang zu Lösungen von Partnerherstellern und direkte Vermittlung mit diesen. |
| Integration in die Konsole | Die Marketplace wird über die gewohnte Verwaltungsoberfläche genutzt, ohne zusätzliches Tool. |

## Funktionen

| Funktion | Beschreibung |
|---|---|
| Virtuelle Maschinen-Images | Vorkonfigurierte Images für die Bereitstellung auf OpenIaaS, VMware oder VM Instances, je nach kompatiblen Zielen jedes Images: siehe [Einführungsguide](./quickstart.md). |
| Verwaltete Dienste | Für Sie betriebene Dienste, im Katalog vorgestellt. |
| SaaS-Lösungen von Partnern | Lösungen von Partnerherstellern, über den Katalog zugänglich. |
| Vermittlung | Direkter Kontakt mit dem Hersteller einer Lösung über dessen Datenblatt. |
| Öffentlicher Katalog | Die aktuelle Liste der Lösungen befindet sich im [Marketplace-Katalog der Cloud Temple Website](https://www.cloud-temple.com/marketplace/). |

<a id="intégration-avec-lécosystème-cloud-temple"></a>

## Architektur

### Cloud Temple Konsole

Die Marketplace ist nativ in die Cloud Temple Konsole integriert und bietet:

- **Einheitlicher Zugang** über die gewohnte Verwaltungsoberfläche
- **Direkte Bereitstellung** der virtuellen Maschinen-Images auf Ihren bestehenden Infrastrukturen
- **Zentrale Verwaltung** der so bereitgestellten virtuellen Maschinen

### Kompatibilität mit den Diensten

Je nach kompatiblen Zielen jedes Images werden die virtuellen Maschinen-Images der Marketplace in folgenden Umgebungen bereitgestellt:

- **IaaS OpenSource** : Bereitstellung auf OpenIaaS-Infrastruktur
- **IaaS VMware** : Integration mit der vSphere-Umgebung
- **VM Instances** : Bereitstellung aus der Marketplace oder aus dem in den Erstellungshilfemeister integrierten Katalog; siehe [VM Instance Tutorial](./tutorials/deploy_vminstance.md)

## Regionen und Verfügbarkeitszonen

Die virtuellen Maschinen-Images werden in der Region und den Verfügbarkeitszonen Ihrer Cloud Temple-Umgebung (Region FR1) bereitgestellt. Für verwaltete Dienste und SaaS-Lösungen ist die Standortspezifikation je nach Angebot und auf dessen Datenblatt angegeben.

<a id="types-de-solutions-disponibles"></a>

## Technische Merkmale

Der Katalog vereint virtuelle Maschinen-Images, verwaltete Dienste und SaaS-Lösungen von Partnerherstellern. Er wird kontinuierlich erweitert: die hier vorgestellten Lösungen sind nur Beispiele, und die aktuelle Liste befindet sich im [Marketplace-Katalog der Cloud Temple Website](https://www.cloud-temple.com/marketplace/).

### Virtual Machine Images

Die virtuellen Maschinen-Images bilden den aktuellen Kern des Marketplace-Produkts. Diese vorkonfigurierten Images ermöglichen eine schnelle Bereitstellung standardisierter Umgebungen.

**Merkmale:**

- Von Cloud Temple vor der Veröffentlichung verifizierte und validierte Images
- Bereitstellung auf OpenIaaS, VMware oder VM Instances, je nach kompatiblen Zielen jedes Images
- In der Regel Bereitstellung innerhalb weniger Minuten, je nach Image und Umgebung
- Native Integration mit der Cloud Temple Konsole

### Partnerlösungen

Die Marketplace bietet auch den Zugang zu Lösungen, die von unseren Partnerherstellern entwickelt wurden und verschiedene Geschäftsbereiche abdecken.

**Zugangsprozess:**

- Einsichtnahme in den Katalog über die Konsole
- Direkte Vermittlung mit dem Partner
- Je nach Angebot: Bereitstellung in Ihren Cloud Temple-Umgebungen oder Zugang zum vom Hersteller betriebenen SaaS-Dienst

### Einschränkungen

- Der Katalog entwickelt sich kontinuierlich weiter: die auf dieser Seite beschriebenen Lösungen sind Beispiele.
- Die Aktualisierung der Partnerlösungen obliegt deren Herstellern, ebenso wie die Reaktionszeiten auf Kontaktanfragen.

## Sicherheit und Konformität

### Hosting und Qualifikationen

Das Hosting und die Qualifikationen hängen vom Lösungstyp ab:

- **Virtuelle Maschinen-Images** : sie werden in Ihren Cloud Temple-Umgebungen bereitgestellt und unterliegen deren Qualifikationen.
- **Verwaltete Dienste und SaaS-Lösungen** : ihr Hosting und ihre Zertifizierungen sind je nach Angebot spezifisch. Konsultieren Sie die Informationen auf dessen Datenblatt im [Marketplace-Katalog der Website](https://www.cloud-temple.com/marketplace/) und wenden Sie sich für weitere Details an den Hersteller.

### Validierung der Lösungen

Cloud Temple wählt die in der Marketplace angebotenen Lösungen aus. Vor der Veröffentlichung wird ein virtuelles Maschinen-Image verifiziert (Dateien und Metadaten) und dann von Cloud Temple validiert. Diese Validierung ersetzt nicht die Absicherung der bereitgestellten Maschinen, die Ihre Verantwortung bleibt. Für eine Partnerlösung bleibt der Hersteller für dessen Inhalt und Aktualisierungen verantwortlich.

## Verantwortlichkeiten

Der Support der Marketplace selbst (Katalog, Bereitstellung der Images) obliegt dem Support der Cloud Temple Konsole. Jedes Angebot hat anschließend eigene Supportbedingungen: die des Dienstes für ein Cloud Temple-Angebot, die des Herstellers für eine Partnerlösung, die auch für dessen Aktualisierungen und Reaktionszeiten verantwortlich ist. Die aus der Marketplace bereitgestellten virtuellen Maschinen sind Ressourcen Ihrer IaaS-Umgebung: siehe [Verantwortungsmatrix (RACI) IaaS](../contractual/iaas/raci.md).

## Reversibilität

- **Virtuelle Maschinen-Images** : die bereitgestellten Maschinen sind Ressourcen Ihrer IaaS-Umgebung; ihre Reversibilität folgt der des betreffenden Angebots, IaaS OpenSource oder IaaS VMware.
- **Partnerlösungen** : die Austrittsbedingungen sind die des Herstellers, von diesem angegeben.

## Preismodell

Die Marketplace hat keine eigenen Kosten. Sie zahlen für die Infrastruktur, auf der Sie ein Image bereitstellen, und je nach gewähltem Angebot für die Lizenz oder den Dienst, der von Cloud Temple oder einem Partner zu dessen Preisbedingungen bereitgestellt wird. Die Details jedes Angebots befinden sich im [Marketplace-Katalog der Cloud Temple Website](https://www.cloud-temple.com/marketplace/).
