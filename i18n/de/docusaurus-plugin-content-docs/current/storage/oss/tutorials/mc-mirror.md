---
titel: Synchronisieren eines Verzeichnisses mit mc mirror
---

Die Befehlszeile `mc mirror` ist ein leistungsstarkes Werkzeug zur Synchronisation des Inhalts eines lokalen Verzeichnisses mit einem S3-Bucket. Sie ladet neue oder geänderte Dateien, und optional auch die Löschung von Dateien aus dem Bucket, die lokal nicht mehr vorhanden sind. Dies ist eine effiziente Methode zur Erhaltung einer Backup-Sicherung oder zum Bereitstellen eines statischen Websites.

Vergessen Sie nicht, Ihren [MinIO-Client wie im Anleitungsstart](../quickstart.md) zu konfigurieren.

### Beispiel für die Grundform

Um den Inhalt des Verzeichnisses lokal `./mon-site` mit dem Bucket `demo-app` auf Ihrem Alias `cloudtemple-fr1` zu synchronisieren:

```bash
mc mirror ./mon-site/ cloudtemple-fr1/demo-app/
```

### Optionen zum Nutzen

*   `--overwrite`: Erzwingt das Überschreiben von Dateien auf der Ziel-Destination, selbst wenn diese neuer sind als die entsprechenden Dateien im Quellverzeichnis. **Nutzen Sie dies mit Vorsicht, da es zu einer unwiderruhbaren Datenverlust führen kann.**
*   `--remove`: Entfernt von der Ziel-Destination Dateien, die im Quellverzeichnis nicht mehr vorhanden sind. **Verwenden Sie dies sorgfältig, da es zu einer irreversiblen Datenverlust führen kann.**

# Komplette Synchronisation mit Entfernung von abgelegten Dateien auf dem Ziel
> mc mirror --remove ./mon-site/ cloudtemple-fr1/demo-app/