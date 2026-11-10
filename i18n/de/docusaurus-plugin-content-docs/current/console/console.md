---
title: Übersicht über die Console
---

import { ConsoleMap } from '@site/src/components/ConsoleMap';

Die Cloud Temple Console ist die Verwaltungsoberfläche Ihrer Cloud-Plattform. Dort erstellen Sie Ihre Umgebungen, verwalten die Zugänge Ihrer Teams, aktivieren Ihre Produkte, bestellen Ressourcen und verfolgen Ihren Verbrauch. Alles, was Sie in der Console tun, ist auch über ihre [API](./api.md) verfügbar, und mit dem [Terraform-Provider](../terraform/terraform.md) steuern Sie Ihre Plattform *as code*.

<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>Erkunden Sie die Grundlagen und wesentlichen Prinzipien, um unsere Infrastruktur zu verstehen und zu beherrschen.</p>
    <a href="./console/concepts" class="card-link">Konzepte erkunden &rarr;</a>
  </div>
  <div class="card">
    <h3>Erste Schritte</h3>
    <p>Starten Sie schnell mit unseren Ressourcen, indem Sie klaren und einfachen Anweisungen folgen.</p>
    <a href="./console/onboarding" class="card-link">Erste Schritte öffnen &rarr;</a>
  </div>
  <div class="card">
    <h3>Tutorials</h3>
    <p>Lernen Sie Schritt für Schritt die Konfiguration und Nutzung unserer Dienste mit detaillierten Anleitungen.</p>
    <a href="./console/tutorials" class="card-link">Tutorials entdecken &rarr;</a>
  </div>
  <div class="card">
    <h3>Häufig gestellte Fragen</h3>
    <p>Finden Sie Antworten auf die häufigsten Fragen zu diesem Produkt.</p>
    <a href="./console/faq" class="card-link">Zu den FAQ &rarr;</a>
  </div>
</div>

## Wo die Console steht

<ConsoleMap />

Zwei Wege sind zu unterscheiden:

- **Die Steuerung.** Ihre Teams verbinden sich mit der Console über einen Browser unter [shiva.cloud-temple.com](https://shiva.cloud-temple.com). Der Zugriff ist auf die [von Ihnen erlaubten öffentlichen IP-Adressen](./onboarding.md#eine-ip-adresse-hinzufügen) beschränkt, und die [Zwei-Faktor-Authentifizierung](./onboarding.md#die-zwei-faktor-authentifizierung-ist-verpflichtend) ist Pflicht. Ihre Skripte und Terraform nutzen die API und authentifizieren sich mit einem API-Schlüssel (*Personal Access Token*).
- **Die Nutzung.** Die Nutzer Ihrer Anwendungen erreichen Ihre Maschinen und Dienste über die [Netzwerk](../network/network_overview.md)-Angebote, etwa Internet oder Private Network. Dieser Datenverkehr läuft nicht über die Console: Sie dient der Steuerung Ihrer Infrastruktur, nicht deren Bereitstellung für Ihre Nutzer.

Ihre Ressourcen sind in **Tenants** organisiert, voneinander abgeschotteten Umgebungen Ihrer Organisation, und werden in [Regionen und Verfügbarkeitszonen](../additional_content/concepts_regional.md) bereitgestellt. Die [Konzepte](./concepts.md) beschreiben dieses Modell.

## Was Sie dort tun

- **[Umgebungen einrichten](./console/onboarding)**: Organisation und Tenants anlegen, dann Ihre Produkte aktivieren.
- **[Zugänge verwalten](./console/iam)**: Nutzer, Berechtigungen pro Tenant und Identitätsföderation.
- **[Kosten verfolgen](./console/billing/concepts)**: Verbrauch nach Produkt, Dienst und Tenant.
- **[Ressourcen überwachen](./console/metrics/concepts)**: Metriken im Prometheus-Format, in der Console oder in Ihren eigenen Werkzeugen.
- **[Vorgänge und Incidents verfolgen](./console/status)**: Geplante Eingriffe auf der Plattform und laufende Incidents.
- **[Support kontaktieren](./console/console_quickstart#zugriff-auf-den-technischen-support)**: Beratung, Unterstützung zu Ihrem Konto, Incidents oder Professional Services: alle Ihre Anfragen an den Support.
- **[Ressourcen bestellen](./console/orders)**: Verfügbarkeitszonen, Cluster, Speicher und Netzwerke, mit Verfolgung der Bestellungen.
- **[Automatisieren](./console/api)**: Alle Funktionen der Console über die API, und Ihre Infrastruktur as code mit Terraform.

## Wo Sie anfangen

- **Sie sind neu bei Cloud Temple**: Folgen Sie den [ersten Schritten](./onboarding.md), von der Erstellung Ihrer Organisation bis zur Aktivierung Ihrer Produkte.
- **Sie möchten das Modell** aus Organisation, Tenants und Berechtigungen verstehen: Lesen Sie die [Konzepte](./concepts.md).
- **Sie suchen eine Funktion in der Oberfläche**: Machen Sie den [Rundgang durch die Console](./console_quickstart.md).
