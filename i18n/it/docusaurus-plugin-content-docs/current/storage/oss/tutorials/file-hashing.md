---
title: Aggiungere l'hash di un file (Checksum)
---

Il servizio di Storage Oggetti di Cloud Temple supporta la verifica dell'integrità dei file tramite le metadati (checksum). Alcuni client, come `mc`, possono calcolare e allegare questo hash automaticamente, mentre per altri è necessario specificarlo manualmente.

### 1. Calcolo automatico del MD5 con `mc`

Il client MinIO (`mc`) può calcolare in tempo reale un hash MD5 e associarlo all'oggetto durante l'upload. Il hash è poi visibile nel campo `ETag` delle metadati dell'oggetto.

```bash
```

# Calcolo del MD5 locale per la verifica
❯ md5 test.txt
MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83

# Caricamento del file con calcolo del MD5
❯ mc cp --md5 test.txt cloudtemple-fr1/demo-app/
...test.txt: 18 B / 18 B [================] 100.00% 111 B/s 0s

# Verifica delle metadati dell'oggetto
❯ mc stat cloudtemple-fr1/demo-app/test.txt
Name      : test.txt
Data      : 2024-06-08 10:21:31 CEST
Dimensione  : 18 B
ETag      : 8b34b2754802a46e3475998dfcf76f83
Tipo      : file
Crittografia: SSE-S3
Metadati  :
    Tipo di contenuto: text/plain
```
L'`ETag` corrisponde effettivamente all'hash MD5 del file locale.

### 2. Aggiunta manuale di un hash SHA-256

Puoi anche aggiungere manualmente un hash (ad esempio, SHA-256) come attributo S3 durante l'upload.

```bash
```

# Calcolo del SHA-256 locale
❯ shasum -a 256 test.txt
2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt

# Caricamento del file passando l'hash come attributo
❯ mc cp test.txt cloudtemple-fr1/demo-app/ --attr "checksum-sha256=$(shasum -a 256 test.txt | cut -f1 -d' ')"
...test.txt: 18 B / 18 B [================] 100.00% 141 B/s 0s

# Verifica delle metadati
❯ mc stat cloudtemple-fr1/demo-app/test.txt
Name      : test.txt
Data      : 2024-06-08 10:41:17 CEST
Size      : 18 B
ETag      : 8b34b2754802a46e3475998dfcf76f83
Type      : file
Encryption: SSE-S3
Metadati  :
    X-Amz-Meta-Checksum-Sha256: 2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682
    Content-Type              : text/plain
```
L'hash SHA-256 è ora presente nei metadati personalizzati dell'oggetto.