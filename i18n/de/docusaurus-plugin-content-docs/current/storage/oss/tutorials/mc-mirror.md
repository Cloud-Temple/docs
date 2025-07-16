---
title: Ein Verzeichnis mit mc mirror synchronisieren
---

Die `mc mirror`-Befehlszeile ist ein leistungsstarker Tool, um den Inhalt eines lokalen Verzeichnisses mit einem S3-Bucket zu synchronisieren. Sie kann neue oder geänderte Dateien hochladen und optional Dateien im Bucket löschen, die nicht mehr lokal vorhanden sind. Es handelt sich um eine effektive Methode, um eine Sicherung aufrechtzuerhalten oder eine statische Website bereitzustellen.

Vergessen Sie nicht, Ihren [MinIO-Client wie im Schnellstart-Guide beschrieben](../quickstart.md#configurer-votre-client-minio-mc) zu konfigurieren.

### Grundbeispiel

Um den Inhalt des lokalen Verzeichnisses `./mon-site` auf den Bucket `demo-app` auf Ihrem Alias `cloudtemple-fr1` zu synchronisieren:

```bash
❯ mc mirror ./mon-site/ cloudtemple-fr1/demo-app/
```

### Nützliche Optionen

*   `--overwrite` : Erzwingt die Ersetzung vorhandener Dateien am Zielort, auch wenn sie neuer sind.
*   `--remove` : Löscht Dateien am Zielort, die nicht mehr im Quellordner vorhanden sind. **Mit Vorsicht verwenden**, da dies zu unumkehrbaren Datenverlust führen kann.

```bash
```

# Vollständige Synchronisation mit Entfernung veralteter entfernter Dateien
❯ mc mirror --remove ./mon-site/ cloudtemple-fr1/demo-app/