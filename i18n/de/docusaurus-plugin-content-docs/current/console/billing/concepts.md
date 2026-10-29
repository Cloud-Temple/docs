---
title: Kostenmanager
---

import billingDashboardPreview from '@site/docs/console/billing/images/billing_dashboard_preview.png'
import billingDashboardConsumptionTotal from '@site/docs/console/billing/images/billing_dashboard_consumption_total.png'
import billingDashboardConsumptionPerProduct from '@site/docs/console/billing/images/billing_dashboard_consumption_per_product.png'
import billingDashboardConsumptionPerService from '@site/docs/console/billing/images/billing_dashboard_consumption_per_service.png'
import billingConsumptionDetails from '@site/docs/console/billing/images/billing_consumption_details.png'

## Vorstellung

Der **Kostenmanager** ist das Modul der Cloud Temple Console, das sich auf die **Sichtbarkeit Ihres Verbrauchs** spezialisiert. Er ermöglicht es Ihnen, die Nutzung Ihrer Cloud-Ressourcen innerhalb eines Tenants in Echtzeit zu verfolgen und einen klaren Überblick über Ihre Ausgaben zu erhalten.

Dieses Modul adressiert ein grundlegendes Bedürfnis: **zu verstehen, was Sie verbrauchen, wann Sie es verbrauchen und zu welchen Kosten**, ohne in komplexen Tabellen oder detaillierten Rechnungen navigieren zu müssen.

:::info
Der Kostenmanager zeigt den **tatsächlichen Verbrauch** Ihrer Ressourcen auf dem ausgewählten Tenant. Die Daten werden regelmäßig aktualisiert, um Ihre aktuelle Nutzung widerzuspiegeln.
:::

## Haupt-Dashboard

Die Startseite des Kostenmanagers bietet eine visuelle Übersicht Ihres Verbrauchs. Bereits beim Öffnen steht Ihnen ein Gesamtüberblick zur Verfügung, der es Ihnen ermöglicht, Verbrauchstrends und die wichtigsten Kostenstellen schnell zu identifizieren.

<img src={billingDashboardPreview} />

Das Dashboard ist um mehrere ergänzende Achsen herum organisiert, die über die oben auf der Seite verfügbaren Registerkarten zugänglich sind.

## Gesamter Verbrauch

Die Registerkarte **Gesamter Verbrauch** bietet eine aggregierte Ansicht Ihres gesamten Verbrauchs im ausgewählten Zeitraum. Dieses Diagramm ermöglicht es Ihnen, die Entwicklung Ihrer Ausgaben über die Zeit zu beobachten und mögliche Spitzen oder Trends zu identifizieren.

<img src={billingDashboardConsumptionTotal} />

Sie können den **Anzeigezeitraum** anpassen, um Ihre Analyse zu verfeinern: Tag, Woche, Monat oder benutzerdefinierter Zeitraum. Die Kurve des Gesamtverbrauchs ist direkt lesbar und erfordert keine besondere technische Expertise.

## Verbrauch nach Produkt

Die Ansicht **Produkt** gliedert Ihren Verbrauch nach den großen Service-Familien von Cloud Temple, für die Sie abonniert sind: Compute, Storage, Netzwerk usw.

<img src={billingDashboardConsumptionPerService} />

Diese Ansicht ist besonders nützlich, um **die bedeutendsten Kostenstellen zu identifizieren** und Optimierungsentscheidungen zu steuern. Jedes Produkt wird mit seinem relativen Anteil am Gesamtverbrauch dargestellt, was das Lesen und Vergleichen erleichtert.

## Verbrauch nach SKU

Die Ansicht **SKU** bietet ein zusätzliches Detailniveau, indem der Verbrauch nach **abrechenbarer Referenz (SKU)** innerhalb jedes Produkts aufgeschlüsselt wird.

<img src={billingDashboardConsumptionPerProduct} />

Dieses Granularitätsniveau ermöglicht es Ihnen, die Analyse weiter zu vertiefen: Sie können beispielsweise den Verbrauch Ihrer virtuellen Maschinen, Ihres Block-Speichers, Ihrer Snapshots oder Ihrer Netzwerkbandbreite unterscheiden und so genau die Ressourcen identifizieren, die die höchsten Kosten verursachen.

## Verbrauchsdetails

Die Ansicht **Verbrauchsdetails** zeigt eine umfassende Tabelle, die alle im Zeitraum verbrauchten Ressourcen auflistet. Jede Zeile entspricht einer identifizierbaren Ressource (virtuelle Maschine, Speicher-Volumen, öffentliche IP-Adresse usw.) mit ihrem zugehörigen Verbrauchsniveau.

<img src={billingConsumptionDetails} />

Diese Detailansicht ist wertvoll für Teams, die eine **analytische Kostenverteilung** durchführen möchten, oder um potenziell ungenutzte Ressourcen zu identifizieren, die deaktiviert werden könnten, um die Ausgaben zu optimieren.

## Best Practices

Um das Beste aus dem Kostenmanager herauszuholen, hier einige Empfehlungen:

- **Prüfen Sie regelmäßig** Ihren Verbrauch, um Budgetabweichungen schnell zu erkennen.
- **Vergleichen Sie Zeiträume**: Das Tool ermöglicht es Ihnen, die Entwicklung von Monat zu Monat zu analysieren, um Trends zu identifizieren.
- **Nutzen Sie die SKU-Ansicht**, um unterausgenutzte oder vergessene Ressourcen zu identifizieren (alte Snapshots, getrennte Volumes usw.).
