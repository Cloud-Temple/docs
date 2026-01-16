---
title: Übersicht
---

Der Terraform Cloud Temple Provider ermöglicht es Ihnen, die Infrastruktur Ihres Cloud Temple-Kontos mithilfe des Infrastructure as Code (IaC)-Ansatzes zu verwalten. Er bietet eine vollständige Integration mit den Cloud Temple-Infrastrukturdiensten und ermöglicht es Ihnen, Ihre Cloud-Ressourcen deklarativ und reproduzierbar bereitzustellen, zu konfigurieren und zu verwalten.

## Hauptfunktionen

- **Infrastructure as Code**: Definieren Sie Ihre Infrastruktur in versionierbaren Konfigurationsdateien
- **Deklarative Verwaltung**: Beschreiben Sie den gewünschten Zustand Ihrer Infrastruktur, Terraform kümmert sich um den Rest
- **Vollständige Automatisierung**: Automatisieren Sie die Bereitstellung und Verwaltung Ihrer Ressourcen
- **Reproduzierbarkeit**: Bereitstellen identischer Umgebungen zuverlässig
- **Abhängigkeitsverwaltung**: Terraform verwaltet automatisch die Erstellungsreihenfolge der Ressourcen

## Abgedeckte Produkte

Der Terraform Cloud Temple Provider unterstützt die folgenden Dienste:

### IaaS VMware

Verwalten Sie Ihre VMware-basierten virtuellen Maschinen mit allen erweiterten Virtualisierungsfunktionen:

- **Virtuelle Maschinen**: Erstellung und Konfiguration von virtuellen Maschinen
- **Virtuelle Festplatten**: Erstellung und Konfiguration von virtuellen Festplatten
- **Netzwerkadapter**: Verwaltung von Netzwerkadaptern für virtuelle Maschinen
- **Virtuelle Controller**: Verwaltung von Festplattencontrollern und anderen Geräten
- **Cloud-Init**: Automatisierte Konfiguration beim Start
- **Backup**: Integration mit Cloud Temple Backup-Richtlinien

### IaaS OpenSource

Bereitstellen und Verwalten von virtuellen Maschinen auf der OpenSource-Infrastruktur basierend auf XCP-ng:

- **Virtuelle Maschinen**: Erstellung und Verwaltung von virtuellen Maschinen
- **Virtuelle Festplatten**: Erstellung und Konfiguration von virtuellen Festplatten
- **Netzwerkadapter**: Erstellung und Konfiguration von Netzwerkadaptern für virtuelle Maschinen
- **Replikation**: Datenreplikationsrichtlinien
- **Hochverfügbarkeit**: HA-Konfiguration (deaktiviert, Neustart, Best-Effort)
- **Cloud-Init**: Automatisierte Konfiguration kompatibel mit NoCloud
- **Backup**: Integration mit Cloud Temple Backup-Richtlinien

### Object Storage

Verwalten Sie Ihre S3-kompatiblen Speicherbereiche:

- **Buckets**: Erstellung und Konfiguration von Buckets
- **Speicherkonten**: Verwaltung von S3-Identitäten und Anmeldeinformationen
- **ACL**: Granulare Zugriffskontrolle für Buckets
- **Versionierung**: Verwaltung von Objektversionen

## Voraussetzungen

Stellen Sie sicher, dass Sie Folgendes besitzen, bevor Sie den Terraform Cloud Temple Provider verwenden:

### Zugriff auf die Cloud Temple-Konsole

Sie müssen Zugriff auf die [Cloud Temple-Konsole](https://shiva.cloud-temple.com) mit den entsprechenden Berechtigungen für den Mandanten haben, an dem Sie arbeiten möchten.

### API-Schlüssel

Der Provider benötigt Cloud Temple API-Anmeldeinformationen:

- **Client ID**: Client-Identifikator zur Authentifizierung
- **Secret ID**: Geheimnis, das dem Client ID zugeordnet ist

Diese Anmeldeinformationen können über die Cloud Temple-Konsole generiert werden, indem Sie [diesem Verfahren](https://docs.cloud-temple.com/console/api#cl%C3%A9s-api) folgen.

### Rechte und Berechtigungen

Je nach den Ressourcen, die Sie verwalten möchten, müssen Sie über die entsprechenden Rollen verfügen:

#### Für IaaS VMware

- `compute_iaas_vmware_infrastructure_read`
- `compute_iaas_vmware_infrastructure_write`
- `compute_iaas_vmware_management`
- `compute_iaas_vmware_read`
- `compute_iaas_vmware_virtual_machine_power`
- `backup_iaas_spp_read` und `backup_iaas_spp_write` (für die Sicherung)

#### Für IaaS Open Source

- `compute_iaas_opensource_management`
- `compute_iaas_opensource_read`
- `compute_iaas_opensource_virtual_machine_power`
- `backup_iaas_opensource_read` und `backup_iaas_opensource_write` (für die Sicherung)

#### Für Object Storage

- `object-storage_write`
- `object-storage_read`
- `object-storage_iam_management`

#### Gemeinsame Rechte

- `activity_read`
- `tag_read` und `tag_write`

## Terraform-Kompatibilität

Der Cloud Temple Provider ist kompatibel mit:

- **Terraform**: Version 1.0 und höher
- **OpenTofu**: Kompatibel mit aktuellen Versionen

## Logging und Debugging

Um die detaillierte Protokollierung für den Provider zu aktivieren:

```bash
# Debug-Protokollierung
export TF_LOG=DEBUG
terraform apply

# JSON-Format für Protokollierung
export TF_LOG=JSON
terraform apply

# Loggen in eine Datei speichern
export TF_LOG_PATH=./terraform.log
terraform apply
```

## Support und Ressourcen

- **Offizielle Dokumentation** : [Terraform Registry](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- **Quellcode** : [GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple)
- **Fehlermeldungen** : [GitHub Issues](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues)

## Nächste Schritte

- [Konzepte](concepts.md): Verstehen Sie die Schlüsselkonzepte des Providers
- [Schnellstartanleitung](quickstart.md): Erstellen Sie Ihre erste Infrastruktur
- [Tutorials](tutorials.md): Praktische Beispiele und Anwendungsfälle
