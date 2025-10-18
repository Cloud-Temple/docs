---
Titel: Synchronisieren eines Verzeichnisses mit AWS CLI
---

Wie `mc`, bietet auch die AWS CLI die Befehlszeile `aws s3 sync` für das Synchronisieren von Verzeichnissen. Diese Befehl vergleicht den Inhalt des Quellverzeichnisses und des S3-Buckets, um nur neue oder geänderte Dateien zu übertragen.

Vergessen Sie nicht, Ihren [AWS-Client wie im Anleitungsstart](../quickstart.md) einzurichten und den Parameter `--endpoint-url` zu verwenden.

### Beispiel für die Grundform

Um den Inhalt des Verzeichnisses lokal `./mon-site` mit dem S3-Bucket `s3://demo-app` zu synchronisieren:

```bash
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
```

### Nützliche Optionen

*   `--delete`: Löscht Dateien aus dem Bucket, die im lokalen Verzeichnis nicht mehr vorhanden sind. Dies ist der entsprechende Ersatz für die Option `--remove` von `mc mirror`.
*   `--exact-timestamps`: Bei der Synchronisation kopiert nur den Dateipfad, wenn das Modifikationsdatum unterschiedlich ist.
*   `--dryrun`: Zeigt die zu erledigenden Operationen an, ohne sie tatsächlich auszuführen. Sehr nützlich zur Überprüfung einer Befehlszeile vor der Ausführung.

# Simulation der Synchronisation mit Löschen zur Überprüfung von Änderungen
❯ aws s3 sync ./mon-Site/ s3://demo-App/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com --delete --dryrun
(dry run) löschen: s3://demo-App/alt-Datei.html
(dry run) Hochladen: mon-Site/neue-Datei.css in s3://demo-App/neue-Datei.css