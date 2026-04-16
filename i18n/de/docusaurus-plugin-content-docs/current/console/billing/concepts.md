---
title: Kostenmanager
---

import billingDashboardPreview from '@site/docs/console/billing/images/billing_dashboard_preview.png'
import billingDashboardTotal from '@site/docs/console/billing/images/billing_dashboard_consumption_total.png'
import billingDashboardPerProduct from '@site/docs/console/billing/images/billing_dashboard_consumption_per_product.png'
import billingDashboardPerService from '@site/docs/console/billing/images/billing_dashboard_consumption_per_service.png'
import billingConsumptionDetails from '@site/docs/console/billing/images/billing_consumption_details.png'
import billingPricesList from '@site/docs/console/billing/images/billing_prices_list.png'

Der **Kostenmanager** ist über das Hauptmenü der Cloud Temple Console zugänglich. Er bietet Ihnen einen vollständigen und transparenten Überblick über Ihren Cloud-Ressourcenverbrauch, sodass Sie Ihre Ausgaben eigenständig verwalten können.

:::info
Der Zugriff auf den Kostenmanager erfordert die entsprechenden Rechte in Ihrem Tenant. Bitte kontaktieren Sie Ihren Vertriebsansprechpartner für weitere Informationen und um die Zugangsbedingungen zum Dienst zu erfahren.
:::

## Dashboard

Das Dashboard des Kostenmanagers ist die Startseite des Moduls. Es bietet eine zusammenfassende Ansicht Ihres gesamten Verbrauchs für den ausgewählten Zeitraum.

<img src={billingDashboardPreview} alt="Kostenmanager Dashboard" />

Von diesem Dashboard aus können Sie:

- **Einen Analysezeitraum auswählen** (aktueller Monat, vorheriger Monat oder ein benutzerdefinierter Datumsbereich),
- **Zwischen den verschiedenen Tabs navigieren**, um Ihre Verbrauchsanalyse zu verfeinern,
- **Ihre Verbrauchsdaten exportieren**, um sie in Ihre internen Reporting-Tools zu integrieren.

## Gesamtverbrauch

Der Tab **Gesamtverbrauch** zeigt den im ausgewählten Zeitraum verbrauchten Gesamtbetrag. Er ist der Ausgangspunkt für das Verständnis der allgemeinen Entwicklung Ihrer Cloud-Ausgaben.

<img src={billingDashboardTotal} alt="Gesamtverbrauch für den Zeitraum" />

Dieses Diagramm ermöglicht es Ihnen zu visualisieren:

- Den **Gesamtbetrag**, der im Zeitraum verbraucht wurde,
- Die **zeitliche Entwicklung** Ihres Verbrauchs (täglich oder monatlich je nach gewählter Granularität),
- Etwaige **Verbrauchsspitzen**, um Anomalien oder Lastspitzen schnell zu identifizieren.

:::info
**Diagramm für den aktuellen Monat lesen**

Für den aktuellen Monat zeigt das Diagramm zwei visuelle Bereiche:

- Der **blaue (ausgefüllte) Bereich** stellt den **tatsächlichen Verbrauch bis dato** dar, d.h. die seit Monatsbeginn tatsächlich verbrauchten Ressourcen,
- Der **orange (schraffierte) Bereich** stellt die **Prognose** bis zum Monatsende dar, berechnet auf Basis Ihrer aktuellen Verbrauchsrate.

Diese Projektion ermöglicht es Ihnen, Ihr Monatsendbudget in Echtzeit zu antizipieren.
:::

## Verbrauch nach Produkt

Der Tab **Verbrauch nach Produkt** ermöglicht es Ihnen, die Aufschlüsselung Ihrer Ausgaben nach den Cloud Temple-Produkten zu identifizieren, die Sie abonniert haben.

<img src={billingDashboardPerProduct} alt="Verbrauchsaufschlüsselung nach Produkt" />

Jedes Produkt (IaaS, Speicher, Netzwerk usw.) wird präsentiert mit:

- Seinem **relativen Anteil** am Gesamtverbrauch,
- Seinem **absoluten Betrag** für den Zeitraum,
- Der **Tendenz** im Vergleich zum vorherigen Zeitraum.

Diese Ansicht ist besonders nützlich, um zu identifizieren, welche Produkte die größten Kostenpositionen darstellen, und um Ihre Optimierungsentscheidungen zu lenken.

## Verbrauch nach Dienst

Der Tab **Verbrauch nach Dienst** verfeinert die Analyse, indem der Verbrauch auf der Ebene der einzelnen Dienste innerhalb jedes Produkts aufgeschlüsselt wird.

<img src={billingDashboardPerService} alt="Verbrauchsaufschlüsselung nach Dienst" />

Diese detaillierte Ansicht ermöglicht es Ihnen:

- Genau zu identifizieren, **welche Dienste** am meisten zu Ihrer Abrechnung beitragen,
- Den Verbrauch ähnlicher Dienste zu vergleichen,
- Untergenutzter oder überdimensionierter Dienste zu erkennen, um **Ihren Cloud-Fußabdruck zu optimieren**.

## Verbrauchsdetails

Der Abschnitt **Verbrauchsdetails** listet alle einzelnen Abrechnungszeilen für den ausgewählten Zeitraum auf. Es ist die detaillierteste Ansicht des Kostenmanagers.

<img src={billingConsumptionDetails} alt="Details der Verbrauchszeilen" />

Für jede Verbrauchszeile finden Sie:

- Den **Namen der verbrauchten Ressource**,
- Die verbrauchte **Menge** und die zugehörige **Maßeinheit** (Stunden, GB, Anfragen usw.),
- Den angewendeten **Einheitspreis**,
- Den **Gesamtbetrag** für diese Zeile im Zeitraum.

Diese Ansicht ist unerlässlich für eine genaue buchhalterische Abstimmung oder für die detaillierte Analyse der Nutzung bestimmter Ressourcen.

## Preiskatalog

Der **Preiskatalog** listet die Einheitspreise aller Ressourcen und Dienste auf, die in Ihrem Cloud Temple-Tenant verfügbar sind.

<img src={billingPricesList} alt="Einheitspreiskatalog" />

Dieser Katalog ermöglicht es Ihnen:

- Die **Kosten** einer neuen Ressource vor der Bestellung zu **antizipieren**,
- **Budgetsimulationen** für Ihre Cloud-Projekte durchzuführen,
- Preise zwischen verschiedenen Ressourcentiers oder -konfigurationen zu vergleichen.

:::tip
Die im Katalog angezeigten Preise sind die Vertragspreise, die für Ihren Tenant gelten. Sie können je nach Ihrem Cloud Temple-Vertrag von den öffentlichen Preisen abweichen.
:::
