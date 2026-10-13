---
title: Kostenmanager
---

import billingDashboardPreview from '@site/docs/console/billing/images/billing_dashboard_preview.png'
import billingDashboardConsumptionTotal from '@site/docs/console/billing/images/billing_dashboard_consumption_total.png'
import billingDashboardConsumptionPerProduct from '@site/docs/console/billing/images/billing_dashboard_consumption_per_product.png'
import billingDashboardConsumptionPerService from '@site/docs/console/billing/images/billing_dashboard_consumption_per_service.png'
import billingConsumptionDetails from '@site/docs/console/billing/images/billing_consumption_details.png'
import billingPricesList from '@site/docs/console/billing/images/billing_prices_list.png'

## Übersicht

Der **Kostenmanager** ist das Modul der Cloud Temple Console, das sich der **Transparenz Ihres Ressourcenverbrauchs** widmet. Er ermöglicht es Ihnen, die Nutzung Ihrer Cloud-Ressourcen innerhalb eines Tenants in Echtzeit zu verfolgen und einen klaren Überblick über Ihre Ausgaben zu erhalten.

Dieses Modul erfüllt ein grundlegendes Bedürfnis: **zu verstehen, was Sie verbrauchen, wann Sie es verbrauchen und zu welchen Kosten**, ohne sich durch komplexe Tabellen oder detaillierte Rechnungen navigieren zu müssen.

:::info
Der Kostenmanager zeigt den **tatsächlichen Verbrauch** Ihrer Ressourcen auf dem ausgewählten Tenant an. Die Daten werden regelmäßig aktualisiert, um Ihre aktuelle Nutzung widerzuspiegeln.
:::

## Haupt-Dashboard

Die Startseite des Kostenmanagers bietet eine visuelle Zusammenfassung Ihres Verbrauchs. Beim Öffnen steht Ihnen eine Gesamtübersicht zur Verfügung, die es ermöglicht, Verbrauchstrends und die wichtigsten Kostenstellen schnell zu identifizieren.

<img src={billingDashboardPreview} />

Das Dashboard ist um mehrere ergänzende Achsen herum organisiert, die über die Registerkarten oben auf der Seite zugänglich sind.

## Gesamter Verbrauch

Das Register **Gesamter Verbrauch** bietet eine aggregierte Ansicht Ihres gesamten Verbrauchs im ausgewählten Zeitraum. Dieses Diagramm ermöglicht es Ihnen, die Entwicklung Ihrer Ausgaben im Zeitverlauf zu beobachten und eventuelle Spitzen oder Trends zu identifizieren.

<img src={billingDashboardConsumptionTotal} />

Sie können den **Anzeigezeitraum** anpassen, um Ihre Analyse zu verfeinern: Tag, Woche, Monat oder benutzerdefinierter Zeitraum. Die Kurve des Gesam Verbrauchs ist direkt ablesbar und erfordert keine speziellen technischen Kenntnisse.

## Verbrauch nach Produkt

Das Register **Verbrauch nach Produkt** unterteilt Ihren Verbrauch nach den großen Kategorien der Cloud Temple-Dienste, für die Sie Abos abgeschlossen haben: Compute, Storage, Netzwerk usw.

<img src={billingDashboardConsumptionPerProduct} />

Diese Ansicht ist besonders nützlich, um **die signifikantesten Kostenstellen zu identifizieren** und Optimierungsentscheidungen zu treffen. Jedes Produkt wird mit seinem relativen Anteil am Gesamtverbrauch dargestellt, was das Lesen und Vergleichen erleichtert.

## Verbrauch nach Dienst

Das Register **Verbrauch nach Dienst** bietet ein zusätzliches Detaillierungsgrad, indem der Verbrauch nach **spezifischem Dienst** innerhalb jedes Produkts aufgeschlüsselt wird.

<img src={billingDashboardConsumptionPerService} />

Dieses Maß an Granularität ermöglicht es Ihnen, tiefer in die Analyse einzusteigen: Sie können beispielsweise den Verbrauch Ihrer virtuellen Maschinen, Ihres Block-Speichers, Ihrer Snapshots oder Ihrer Netzwerkbandbreite unterscheiden und so genau die Ressourcen identifizieren, die die höchsten Kosten verursachen.

## Verbrauchsdetails

Die Ansicht **Verbrauchsdetails** zeigt eine umfassende Tabelle, die alle im Zeitraum verbrauchten Ressourcen auflistet. Jede Zeile entspricht einer identifizierbaren Ressource (virtuelle Maschine, Speichervolume, öffentliche IP-Adresse usw.) mit ihrem zugehörigen Verbrauchsniveau.

<img src={billingConsumptionDetails} />

Diese Details sind wertvoll für Teams, die eine **analytische Kostenverteilung** durchführen oder potenziell ungenutzte Ressourcen identifizieren möchten, die deaktiviert werden könnten, um die Ausgaben zu optimieren.

## Preisliste

Das Register **Preisliste** (oder **Preisliste**) listet alle anwendbaren Einheitspreise für die in Ihrem Tenant verfügbaren Ressourcen auf. Es handelt sich um den geltenden Preiskatalog, der es Ihnen ermöglicht, die Kosten neuer Ressourcen vor deren Bereitstellung abzuschätzen.

<img src={billingPricesList} />

Jeder Eintrag in der Liste gibt an:

- Den **Ressourcentyp**
- Die **Abrechnungseinheit** (pro Stunde, pro GB, pro Einheit usw.)
- Den **geltenden Einheitspreis**

:::tip
Für die aktuellen öffentlichen Preise konsultieren Sie den [offiziellen Cloud Temple Preiskatalog](https://www.cloud-temple.com/nos-tarifs-publics/). Die in der Console angezeigte Liste zeigt die für Ihren Tenant geltenden Preise; kombinieren Sie diese Informationen mit den Verbrauchsdaten, um Optimierungspotenziale zu identifizieren.
:::

## Best Practices

Um das Beste aus dem Kostenmanager herauszuholen, hier einige Empfehlungen:

- **Überprüfen Sie regelmäßig** Ihren Verbrauch, um Budgetabweichungen schnell zu erkennen.
- **Vergleichen Sie Zeiträume**: Das Tool ermöglicht es Ihnen, die Entwicklung von Monat zu Monat zu analysieren, um Trends zu identifizieren.
- **Verwenden Sie die Ansicht nach Dienst**, um untergenutzte oder vergessene Ressourcen zu identifizieren (alte Snapshots, getrennte Volumes usw.).
- **Kreuzen Sie mit der Preisliste**, um die finanziellen Auswirkungen jeder Infrastrukturänderung zu bewerten, bevor Sie diese durchführen.
