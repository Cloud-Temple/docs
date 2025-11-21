---
title: Übersicht
---

Der Cloud Temple Terraform Provider ermöglicht es Ihnen, Ihre Cloud Temple Konto-Infrastruktur mit dem Infrastructure as Code (IaC) Ansatz zu verwalten. Er bietet eine vollständige Integration mit den Cloud Temple Infrastrukturdiensten und ermöglicht es Ihnen, Ihre Cloud-Ressourcen deklarativ und reproduzierbar bereitzustellen, zu konfigurieren und zu verwalten.

## Hauptfunktionen

- **Infrastructure as Code**: Definieren Sie Ihre Infrastruktur in versionierbaren Konfigurationsdateien
- **Deklaratives Management**: Beschreiben Sie den gewünschten Zustand Ihrer Infrastruktur, Terraform kümmert sich um den Rest
- **Vollständige Automatisierung**: Automatisieren Sie die Bereitstellung und Verwaltung Ihrer Ressourcen
- **Reproduzierbarkeit**: Stellen Sie identische Umgebungen zuverlässig bereit
- **Abhängigkeitsverwaltung**: Terraform verwaltet automatisch die Reihenfolge der Ressourcenerstellung

## Abgedeckte Produkte

Der Cloud Temple Terraform Provider unterstützt die folgenden Dienste:

### VMware IaaS

Verwalten Sie Ihre VMware virtuellen Maschinen mit allen erweiterten Virtualisierungsfunktionen:

- **Virtuelle Maschinen**: Erstellung und Konfiguration virtueller Maschinen
- **Virtuelle Festplatten**: Erstellung und Konfiguration virtueller Festplatten
- **Netzwerkadapter**: Verwaltung der Netzwerkadapter virtueller Maschinen
- **Virtuelle Controller**: Verwaltung von Festplattencontrollern und anderen Geräten
- **Cloud-Init**: Automatisierte Startkonfiguration
- **Backup**: Integration mit Cloud Temple Backup-Richtlinien

### OpenSource IaaS

Bereitstellung und Verwaltung virtueller Maschinen auf OpenSource-Infrastruktur basierend auf XCP-ng:

- **Virtuelle Maschinen**: Erstellung und Verwaltung virtueller Maschinen
- **Virtuelle Festplatten**: Erstellung und Konfiguration virtueller Festplatten
- **Netzwerkadapter**: Erstellung und Konfiguration der Netzwerkadapter virtueller Maschinen
- **Replikation**: Datenreplikationsrichtlinien
- **Hochverfügbarkeit**: HA-Konfiguration (disabled, restart, best-effort)
- **Cloud-Init**: NoCloud-kompatible automatisierte Konfiguration
- **Backup**: Integration mit Cloud Temple Backup-Richtlinien

### Objektspeicher

Verwalten Sie Ihre S3-kompatiblen Objektspeicherplätze:

- **Buckets**: Bucket-Erstellung und -Konfiguration
- **Speicherkonten**: S3-Identitäts- und Credential-Verwaltung
- **ACL**: Granulare Bucket-Zugriffskontrolle
- **Versionierung**: Objektversionsverwaltung

## Voraussetzungen

Bevor Sie den Cloud Temple Terraform Provider verwenden, stellen Sie sicher, dass Sie über Folgendes verfügen:

### Zugriff auf die Cloud Temple Konsole

Sie müssen Zugriff auf die [Cloud Temple Konsole](https://shiva.cloud-temple.com) mit entsprechenden Rechten auf dem Tenant haben, an dem Sie arbeiten möchten.

### API-Schlüssel

Der Provider benötigt Cloud Temple API-Anmeldeinformationen:

- **Client ID**: Client-Identifikator für die Authentifizierung
- **Secret ID**: Mit der Client-ID verknüpftes Geheimnis

Diese Anmeldeinformationen können über die Cloud Temple Konsole generiert werden, indem Sie [dieser Prozedur](https://docs.cloud-temple.com/console/api#cl%C3%A9s-api) folgen.

### Rechte und Berechtigungen

Abhängig von den Ressourcen, die Sie verwalten möchten, müssen Sie über die entsprechenden Rollen verfügen:

#### Für VMware IaaS

- `compute_iaas_vmware_infrastructure_read`
- `compute_iaas_vmware_infrastructure_write`
- `compute_iaas_vmware_management`
- `compute_iaas_vmware_read`
- `compute_iaas_vmware_virtual_machine_power`
- `backup_iaas_spp_read` und `backup_iaas_spp_write` (für Backup)

#### Für OpenSource IaaS

- `compute_iaas_opensource_management`
- `compute_iaas_opensource_read`
- `compute_iaas_opensource_virtual_machine_power`
- `backup_iaas_opensource_read` und `backup_iaas_opensource_write` (für Backup)

#### Für Objektspeicher

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

## Protokollierung und Debugging

Um detaillierte Provider-Protokollierung zu aktivieren:

```bash
# DEBUG-Level-Protokollierung
export TF_LOG=DEBUG
terraform apply

# JSON-Format-Protokollierung
export TF_LOG=JSON
terraform apply

# Protokolle in eine Datei speichern
export TF_LOG_PATH=./terraform.log
terraform apply
```

## Support und Ressourcen

- **Offizielle Dokumentation**: [Terraform Registry](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- **Quellcode**: [GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple)
- **Issues**: [GitHub Issues](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues)

## Nächste Schritte

- [Konzepte](concepts.md): Verstehen Sie die wichtigsten Provider-Konzepte
- [Erste Schritte](quickstart.md): Erstellen Sie Ihre erste Infrastruktur
- [Tutorials](tutorials.md): Praktische Beispiele und Anwendungsfälle
