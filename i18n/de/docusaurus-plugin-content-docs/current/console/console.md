---
title: Übersicht über die Console
---

import { ConsoleMap } from '@site/src/components/ConsoleMap';

Die Cloud Temple Console ist die Verwaltungsoberfläche Ihrer Cloud-Plattform. Dort erstellen Sie Ihre Umgebungen, verwalten die Zugänge Ihrer Teams, aktivieren Ihre Produkte, bestellen Ressourcen und verfolgen Ihren Verbrauch. Alles, was Sie in der Console tun, ist auch über ihre [API](./api.md) verfügbar, und mit dem [Terraform-Provider](../terraform/terraform.md) steuern Sie Ihre Plattform *as code*.

## Wo die Console steht

<ConsoleMap />

Zwei Wege sind zu unterscheiden:

- **Die Steuerung.** Ihre Teams verbinden sich mit der Console über einen Browser unter [shiva.cloud-temple.com](https://shiva.cloud-temple.com). Der Zugriff ist auf die [von Ihnen erlaubten öffentlichen IP-Adressen](./onboarding.md#eine-ip-adresse-hinzufügen) beschränkt, und die [Zwei-Faktor-Authentifizierung](./onboarding.md#die-zwei-faktor-authentifizierung-ist-verpflichtend) ist Pflicht. Ihre Skripte und Terraform nutzen die API und authentifizieren sich mit einem API-Schlüssel (*Personal Access Token*).
- **Die Nutzung.** Die Nutzer Ihrer Anwendungen erreichen Ihre Maschinen und Dienste über die [Netzwerk](../network/network_overview.md)-Angebote, etwa Internet oder Private Network. Dieser Datenverkehr läuft nicht über die Console: Sie dient der Steuerung Ihrer Infrastruktur, nicht deren Bereitstellung für Ihre Nutzer.

Ihre Ressourcen sind in **Tenants** organisiert, voneinander abgeschotteten Umgebungen Ihrer Organisation, und werden in [Regionen und Verfügbarkeitszonen](../additional_content/concepts_regional.md) bereitgestellt. Die [Konzepte](./concepts.md) beschreiben dieses Modell.

## Was Sie dort tun

<div class="card-grid">
  <div class="card">
    <h3>Umgebungen einrichten</h3>
    <p>Organisation und Tenants anlegen, dann Ihre Produkte aktivieren.</p>
    <a href="./console/onboarding" class="card-link">Erste Schritte &rarr;</a>
  </div>

  <div class="card">
    <h3>Zugänge verwalten</h3>
    <p>Nutzer, Berechtigungen pro Tenant und Identitätsföderation.</p>
    <a href="./console/iam" class="card-link">IAM-Modul &rarr;</a>
  </div>

  <div class="card">
    <h3>Kosten verfolgen</h3>
    <p>Verbrauch nach Produkt, Dienst und Tenant.</p>
    <a href="./console/billing/concepts" class="card-link">Kostenmanager &rarr;</a>
  </div>

  <div class="card">
    <h3>Ressourcen überwachen</h3>
    <p>Metriken im Prometheus-Format, in der Console oder in Ihren eigenen Werkzeugen.</p>
    <a href="./console/metrics/concepts" class="card-link">Metriken &rarr;</a>
  </div>

  <div class="card">
    <h3>Vorgänge und Incidents verfolgen</h3>
    <p>Geplante Eingriffe auf der Plattform und laufende Incidents.</p>
    <a href="./console/status" class="card-link">Geplante Vorgänge &rarr;</a>
  </div>

  <div class="card">
    <h3>Support kontaktieren</h3>
    <p>Beratung, Unterstützung zu Ihrem Konto, Incidents oder Professional Services: alle Ihre Anfragen an den Support.</p>
    <a href="./console/console_quickstart#zugriff-auf-den-technischen-support" class="card-link">Technischer Support &rarr;</a>
  </div>

  <div class="card">
    <h3>Ressourcen bestellen</h3>
    <p>Verfügbarkeitszonen, Cluster, Speicher und Netzwerke, mit Verfolgung der Bestellungen.</p>
    <a href="./console/orders" class="card-link">Ressourcen bereitstellen &rarr;</a>
  </div>

  <div class="card">
    <h3>Automatisieren</h3>
    <p>Alle Funktionen der Console über die API, und Ihre Infrastruktur as code mit Terraform.</p>
    <a href="./console/api" class="card-link">API-Dokumentation &rarr;</a>
  </div>
</div>

## Wo Sie anfangen

- **Sie sind neu bei Cloud Temple**: Folgen Sie den [ersten Schritten](./onboarding.md), von der Erstellung Ihrer Organisation bis zur Aktivierung Ihrer Produkte.
- **Sie möchten das Modell** aus Organisation, Tenants und Berechtigungen verstehen: Lesen Sie die [Konzepte](./concepts.md).
- **Sie suchen eine Funktion in der Oberfläche**: Machen Sie den [Rundgang durch die Console](./console_quickstart.md).
