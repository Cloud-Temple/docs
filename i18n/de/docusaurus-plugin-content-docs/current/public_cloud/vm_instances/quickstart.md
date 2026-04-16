---
title: Erste Schritte
---

## Voraussetzungen

Stellen Sie vor dem Start sicher, dass Sie folgendes haben:

- Ein aktives **Cloud Temple-Tenant**
- Ein Mindest-Abonnement für den **Standard-Support**
- Die erforderlichen Berechtigungen in Ihrer Cloud Temple-Organisation

## Eine virtuelle Maschine bereitstellen

### 1. Auf den Dienst zugreifen

Melden Sie sich bei der **Cloud Temple-Konsole** an und navigieren Sie über das Hauptmenü zum Bereich **VM Instances**.

### 2. Tenant und Verfügbarkeitszone auswählen

- Wählen Sie den **Tenant**, in dem Sie die virtuelle Maschine bereitstellen möchten.
- Wählen Sie die Ziel-**Verfügbarkeitszone (AZ)** aus den in der Region FR1 verfügbaren aus.

### 3. Ein Image vom Marketplace auswählen

Virtuelle Maschinen werden ausschließlich aus **offiziellen Cloud Temple Marketplace-Images** bereitgestellt.

- Durchsuchen Sie den Katalog der verfügbaren Images.
- Wählen Sie das gewünschte Betriebssystem und die Version aus.

### 4. Die virtuelle Maschine konfigurieren

Geben Sie die Parameter für Ihre Instanz ein:

| Parameter | Beschreibung |
|-----------|-------------|
| **Service-Klasse** | Development, General Purpose oder Performance |
| **Flavor** | Wählen Sie aus vordefinierten Flavors oder erstellen Sie einen Custom-Flavor (vCPU + RAM) |
| **Zusätzliche Festplatten** | Fügen Sie bei Bedarf zusätzliche Volumes hinzu (bis zu 16 Volumes, max. 2 TB pro Volume) |
| **Netzwerk (VPC)** | Verbinden Sie die VM mit Ihrem VPC-Netzwerk |
| **Cloud-init** | Optional: Injizieren Sie beim Start ein Vorkonfigurationsskript (SSH-Schlüssel, Netzwerkkonfiguration usw.) |

:::info[Systemfestplatte]
Die Systemfestplatte (Flash) ist automatisch enthalten. Ihre Größe (zwischen 15 und 100 GB) hängt vom gewählten Betriebssystem ab.
:::

### 5. Bereitstellung starten

Bestätigen Sie die Konfiguration und starten Sie die Provisionierung. Die Bereitstellung ist **automatisiert und sofort** (wenige Minuten).

## Ihre virtuellen Maschinen verwalten

Von der Konsole aus können Sie folgende Aktionen auf Ihren virtuellen Maschinen durchführen:

- **Starten / Stoppen / Neu starten** der virtuellen Maschine
- **Konsole öffnen**, um direkt auf das System zuzugreifen
- **Konfiguration ändern** (vCPU, RAM) — VM muss gestoppt sein
- **Festplatten hinzufügen** (zusätzliche Volumes)
- **Leistungsmetriken anzeigen** (CPU, RAM, Festplatte)
- **Backup konfigurieren** (kostenpflichtige Option) mit konfigurierbarer Aufbewahrung

## Automatisierung und Infrastructure as Code

Der VM Instances-Dienst ist vollständig automatisierbar:

### Über die REST API

Die Cloud Temple REST API ermöglicht die vollständige programmatische Steuerung des Lebenszyklus virtueller Maschinen.

API-Referenz: [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### Über Terraform

Der Cloud Temple Terraform-Provider ermöglicht die Verwaltung von VM Instances als Infrastructure as Code.

```hcl
# Beispiel VM Instances-Ressource mit Terraform
# Weitere Attribute finden Sie in der Provider-Dokumentation
resource "cloudtemple_compute_vm_instance" "example" {
  # ...
}
```

Weitere Informationen zur Installation und Konfiguration des Providers finden Sie in der [Terraform-Dokumentation](pathname:///docs/terraform/terraform).

## Nützliche Ressourcen

- [Öffentliche Cloud Temple-Dokumentation](https://docs.cloud-temple.com/home)
- [API-Referenz](https://shiva.cloud-temple.com/api/)
- [Terraform-Dokumentation](pathname:///docs/terraform/terraform)
- [Konzepte der Verfügbarkeitszonen](../../additional_content/concepts_az.md)
