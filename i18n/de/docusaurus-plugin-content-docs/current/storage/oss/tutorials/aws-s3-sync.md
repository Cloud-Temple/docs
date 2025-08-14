---
title: Ein Verzeichnis mit der AWS CLI synchronisieren
---

Ähnlich wie `mc` bietet die AWS CLI den Befehl `aws s3 sync`, um Verzeichnisse zu synchronisieren. Dieser Befehl vergleicht den Inhalt des Quellverzeichnisses und des Zielbuckets, um nur neue oder geänderte Dateien zu übertragen.

Vergessen Sie nicht, Ihren [AWS-Client gemäß dem Schnellstart-Guide zu konfigurieren](../quickstart.md#configurer-votre-client-aws-aws) und den Parameter `--endpoint-url` zu verwenden.

### Grundbeispiel

Um den Inhalt des lokalen Verzeichnisses `./mon-site` in den Bucket `s3://demo-app` zu synchronisieren:

```bash
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
```

### Nützliche Optionen

*   `--delete` : Löscht die Dateien im Bucket, die nicht mehr im lokalen Verzeichnis vorhanden sind. Dies entspricht der Option `--remove` von `mc mirror`.
*   `--exact-timestamps` : Kopiert die Datei nur, wenn das Änderungsdatum anders ist.
*   `--dryrun` : Zeigt die Operationen an, die durchgeführt würden, ohne sie tatsächlich auszuführen. Sehr nützlich, um eine Befehlszeile zu überprüfen, bevor sie ausgeführt wird.

```bash
```

# Simulation einer Synchronisation mit Löschung zur Überprüfung von Änderungen
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com --delete --dryrun
(dryrun) Löschen: s3://demo-app/old-file.html
(dryrun) Hochladen: mon-site/new-file.css nach s3://demo-app/new-file.css