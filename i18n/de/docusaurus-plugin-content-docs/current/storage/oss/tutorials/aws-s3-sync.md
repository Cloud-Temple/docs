---
title: Synchronisieren eines Verzeichnisses mit AWS CLI
---

Wie `mc` bietet auch die AWS CLI den Befehl `aws s3 sync` für das Synchronisieren von Verzeichnissen. Dieser Befehl vergleicht den Inhalt des Quellverzeichnisses und des S3-Buckets, um nur neue oder geänderte Dateien zu übertragen.

Vergessen Sie nicht, Ihren [AWS-Client wie im Leitfaden „Erste Schritte“ beschrieben](../quickstart.md) einzurichten und den Parameter `--endpoint-url` zu verwenden.

### Beispiel für die Grundform

Um den Inhalt des lokalen Verzeichnisses `./mon-site` mit dem Bucket `s3://demo-app` zu synchronisieren:

```bash
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
```

### Nützliche Optionen

* `--delete`: Löscht Dateien aus dem Bucket, die im lokalen Verzeichnis nicht mehr vorhanden sind. Dies ist der entsprechende Ersatz für die Option `--remove` von `mc mirror`.
* `--exact-timestamps`: Bei der Synchronisation wird eine Datei nur kopiert, wenn sich ihr Änderungszeitstempel unterscheidet.
* `--dryrun`: Zeigt die zu erledigenden Operationen an, ohne sie tatsächlich auszuführen. Sehr nützlich zur Überprüfung einer Befehlszeile vor der Ausführung.

```bash
# Simulation der Synchronisation mit Löschen zur Überprüfung von Änderungen
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com --delete --dryrun
(dryrun) delete: s3://demo-app/old-file.html
(dryrun) upload: mon-site/new-file.css to s3://demo-app/new-file.css
```
