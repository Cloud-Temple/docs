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

Der **Kostenmanager** ist das Modul der Cloud Temple Console, das sich der **Transparenz Ihres Verbrauchs** widmet. Er ermöglicht es Ihnen, die Nutzung Ihrer Cloud-Ressourcen innerhalb eines Tenants in Echtzeit zu verfolgen und einen klaren Überblick über Ihre Ausgaben zu erhalten.

Dieses Modul erfüllt ein grundlegendes Bedürfnis: **zu verstehen, was Sie verbrauchen, wann Sie es verbrauchen und zu welchen Kosten**, ohne in komplexe Tabellen oder detaillierte Rechnungen navigieren zu müssen.

:::info
Der Kostenmanager zeigt den **tatsächlichen Verbrauch** Ihrer Ressourcen auf dem ausgewählten Tenant an. Die Daten werden regelmäßig aktualisiert, um Ihre aktuelle Nutzung widerzuspiegeln.
:::

## Haupt-Dashboard

Die Startseite des Kostenmanagers bietet eine grafische Übersicht Ihres Verbrauchs. Beim Öffnen erhalten Sie eine Gesamtsicht, die es ermöglicht, Verbrauchstrends und die größten Kostenposten schnell zu identifizieren.

<img src={billingDashboardPreview} />

Das Dashboard gliedert sich in mehrere ergänzende Bereiche, die über die Registerkarten oben auf der Seite erreichbar sind.

## Gesamtverbrauch

Der Tab **Gesamtverbrauch** bietet eine aggregierte Übersicht über Ihren gesamten Verbrauch im ausgewählten Zeitraum. Dieses Diagramm ermöglicht es Ihnen, die Entwicklung Ihrer Ausgaben im Zeitverlauf zu beobachten und eventuelle Spitzen oder Trends zu identifizieren.

<img src={billingDashboardConsumptionTotal} />

Sie können den **Anzeigezeitraum** anpassen, um Ihre Analyse zu verfeinern: Tag, Woche, Monat oder benutzerdefinierter Zeitraum. Die Kurve des Gesamtverbrauchs ist direkt ablesbar und erfordert keine besonderen technischen Kenntnisse.

## Verbrauch nach Produkt

Der Tab **Verbrauch nach Produkt** unterteilt Ihren Verbrauch nach den Hauptkategorien der Cloud Temple-Dienste, die Sie abonniert haben: Compute, Speicher, Netzwerk usw.

<img src={billingDashboardConsumptionPerProduct} />

Diese Ansicht ist besonders nützlich, um **die bedeutendsten Kostenposten zu identifizieren** und Optimierungsentscheidungen gezielt zu treffen. Jedes Produkt wird mit seinem relativen Anteil am Gesamtverbrauch dargestellt, was die Übersicht und den Vergleich erleichtert.

## Verbrauch nach Service

Der Tab **Verbrauch nach Service** bietet ein zusätzliches Detaillierungslevel, indem er den Verbrauch nach **spezifischem Service** innerhalb jedes Produkts aufschlüsselt.

<img src={billingDashboardConsumptionPerService} />

Dieses Granularitätsniveau ermöglicht es Ihnen, die Analyse weiter zu vertiefen: Sie können beispielsweise den Verbrauch Ihrer virtuellen Maschinen, Ihres Blockspeichers, Ihrer Snapshots oder Ihrer Netzwerkbandbreite aufschlüsseln und so genau die Ressourcen identifizieren, die die höchsten Kosten verursachen.

## Verbrauchsdetails

Die Ansicht **Verbrauchsdetails** zeigt eine umfassende Tabelle, die alle während des Zeitraums verbrauchten Ressourcen auflistet. Jede Zeile entspricht einer identifizierbaren Ressource (virtuelle Maschine, Speichervolumen, öffentliche IP-Adresse usw.) mit dem zugehörigen Verbrauchsniveau.

<img src={billingConsumptionDetails} />

Diese Details sind wertvoll für Teams, die eine **analytische Aufschlüsselung** ihrer Kosten durchführen oder potenziell ungenutzte Ressourcen identifizieren möchten, die deaktiviert werden können, um die Ausgaben zu optimieren.

## Preisliste

Der Tab **Preisliste** (oder **Preistabelle**) listet alle auf die in Ihrem Tenant verfügbaren Ressourcen anwendbaren Einheitspreise auf. Es handelt sich um den aktuellen Preiskatalog, der es Ihnen ermöglicht, die Kosten neuer Ressourcen vor deren Bereitstellung abzuschätzen.

<img src={billingPricesList} />

Jeder Eintrag der Tabelle zeigt Folgendes an:

- Die **Ressourcenart**
- Die **Abrechnungseinheit** (pro Stunde, pro GB, pro Einheit usw.)
- Der **Einheitspreis**

:::tip
Die Preisliste dient als Referenz, um die **Kosten** einer Infrastruktur vor der Bestellung zu **simulieren**. Kombinieren Sie diese Informationen mit den Verbrauchsdaten, um Optimierungspotenziale zu identifizieren.
:::

## Best Practices

Um den Kostenmanager optimal zu nutzen, finden Sie hier einige Empfehlungen:

- **Überwachen Sie regelmäßig** Ihre Nutzung, um Budgetabweichungen schnell zu erkennen.
- **Vergleichen Sie Zeiträume** : Das Tool ermöglicht es Ihnen, die Entwicklung von Monat zu Monat zu analysieren, um Trends zu identifizieren.
- **Verwenden Sie die Service-Ansicht**, um untergenutzte oder vergessene Ressourcen zu identifizieren (alte Snapshots, abgetrennte Volumes usw.).
- **Kreuzen Sie mit der Preistabelle**, um die finanziellen Auswirkungen von Infrastrukturänderungen vor der Umsetzung zu bewerten.