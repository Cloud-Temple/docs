---
title: Hash einer Datei hinzufügen (Checksumme)
---

Der Objektspeicher-Service von Cloud Temple unterstützt die Prüfung der Integrität von Dateien über Metadaten (Checksummen). Einige Clients, wie `mc`, können diesen Hash automatisch berechnen und anhängen, während für andere der Hash manuell angegeben werden muss.

### 1. Automatische MD5-Berechnung mit `mc`

Der MinIO-Client (`mc`) kann während des Uploads einen MD5-Hash berechnen und diesen dem Objekt anhängen. Der Hash ist anschließend im Feld `ETag` der Objektmetadaten sichtbar.

```bash
```

# Lokale MD5-Berechnung zur Überprüfung
❯ md5 test.txt
MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83

# Dateiupload mit MD5-Hash-Berechnung
❯ mc cp --md5 test.txt cloudtemple-fr1/demo-app/
...test.txt: 18 B / 18 B [================] 100.00% 111 B/s 0s

# Überprüfung der Objektmetadaten
❯ mc stat cloudtemple-fr1/demo-app/test.txt
Name      : test.txt
Datum      : 2024-06-08 10:21:31 CEST
Größe      : 18 B
ETag      : 8b34b2754802a46e3475998dfcf76f83
Typ      : Datei
Verschlüsselung: SSE-S3
Metadaten  :
    Content-Type: text/plain
```
Die `ETag` entspricht genau dem MD5-Hash der lokalen Datei.

### 2. Manueller Hinzufügen eines SHA-256-Hashs

Sie können auch manuell einen Hash (zum Beispiel SHA-256) als S3-Attribut bei der Übertragung hinzufügen.

```bash
```

# Lokale SHA-256-Berechnung
❯ shasum -a 256 test.txt
2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt

# Dateiupload mit Übergeben des Hashs als Attribut
❯ mc cp test.txt cloudtemple-fr1/demo-app/ --attr "checksum-sha256=$(shasum -a 256 test.txt | cut -f1 -d' ')"
...test.txt: 18 B / 18 B [================] 100.00% 141 B/s 0s

# Metadatenprüfung
❯ mc stat cloudtemple-fr1/demo-app/test.txt
Name      : test.txt
Datum      : 2024-06-08 10:41:17 CEST
Größe      : 18 B
ETag      : 8b34b2754802a46e3475998dfcf76f83
Typ      : Datei
Verschlüsselung: SSE-S3
Metadaten  :
    X-Amz-Meta-Checksum-Sha256: 2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682
    Content-Type              : text/plain
```
Der SHA-256-Hash ist nun in den benutzerdefinierten Metadaten des Objekts enthalten.