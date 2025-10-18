---
title: Aggiungere l'hash di un file (Checksum)
---

Il servizio di Archiviazione Oggetti di Cloud Temple supporta il controllo dell'integrità dei file tramite i metadati (checksum). Alcuni client, come `mc`, possono calcolare e associare automaticamente questo hash, mentre per altri è necessario specificarlo manualmente.

### 1. Calcolo automatico del MD5 con `mc`

Il client MinIO (`mc`) può calcolare in tempo reale un hash MD5 e associarlo all'oggetto durante l'upload. L'hash sarà successivamente visibile nel campo `ETag` dei metadati dell'oggetto.

```bash


# Calcolo del MD5 locale per verifica
❯ md5 test.txt
MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83

# Upload del file con calcolo del MD5
❯ mc cp --md5 test.txt cloudtemple-fr1/demo-app/
...test.txt: 18 B / 18 B [================] 100.00% 111 B/s 0s

# Verification of object metadata
❯ mc stat cloudtemple-fr1/demo-app/test.txt
Name      : test.txt
Date      : 2024-06-08 10:21:31 CEST
Size      : 18 B
ETag      : 8b34b2754802a46e3475998dfcf76f83
Type      : file
Encryption: SSE-S3
Metadata  :
    Content-Type: text/plain
```
The `ETag` matches the MD5 hash of the local file.

### 2. Manual addition of a SHA-256 hash

You can also manually add a hash (for example, SHA-256) as an S3 attribute during upload.

```bash
```

# Calcolo SHA-256 locale
❯ shasum -a 256 test.txt
2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt

# Upload del file passando l'hash come attributo
❯ mc cp test.txt cloudtemple-fr1/demo-app/ --attr "checksum-sha256=$(shasum -a 256 test.txt | cut -f1 -d' ')"
...test.txt: 18 B / 18 B [================] 100.00% 141 B/s 0s

# Verification of metadata
❯ mc stat cloudtemple-fr1/demo-app/test.txt
Name      : test.txt
Date      : 2024-06-08 10:41:17 CEST
Size      : 18 B
ETag      : 8b34b2754802a46e3475998dfcf76f83
Type      : file
Encryption: SSE-S3
Metadata  :
    X-Amz-Meta-Checksum-Sha256: 2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682
    Content-Type              : text/plain
```
The SHA-256 hash is now present in the object's custom metadata.

### 3. Risolvere gli errori `XAmzContentSHA256Mismatch` con AWS CLI o Terraform

#### Origine del problema

Errori di tipo `XAmzContentSHA256Mismatch` possono verificarsi a seguito di una modifica del comportamento predefinito del SDK AWS relativo al calcolo dei checksum. Questo SDK viene utilizzato sia da AWS CLI che da Terraform.

#### Versioni interessate

- **AWS CLI**: Versione 2.23.0 e successive
- **Terraform**: Versione 1.11.2 e successive

Queste versioni includono un SDK AWS che inserisce automaticamente l'intestazione `x-amz-checksum-mode` e calcola i checksum CRC32 per i caricamenti, il che può causare conflitti con la configurazione del server di archiviazione oggetti.

#### Soluzione 1: Variabile di ambiente (Raccomandata)

La soluzione più semplice consiste nel disabilitare questo nuovo comportamento tramite una variabile di ambiente.

Per **AWS CLI**:
```bash
AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED aws s3 cp file.txt s3://mio-bucket/
```

Per **Terraform**:
```bash
AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED terraform apply
```

Per rendere questo parametro permanente nella tua sessione shell:
```bash
export AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED
```

#### Soluzione 2: Configurazione nel profilo AWS (per AWS CLI)

È possibile impostare questo parametro in modo permanente nel proprio profilo AWS CLI.

1.  Apri il file di configurazione AWS: `~/.aws/config`
2.  Aggiungi il seguente parametro nel tuo profilo:

```ini
[default]
request_checksum_calculation = WHEN_REQUIRED
```

Questa soluzione è ideale se si utilizza regolarmente AWS CLI.

#### Soluzione 3: Rollback (Non raccomandato)

Come ultima risorsa, è possibile tornare a una versione precedente degli strumenti.

Per **AWS CLI**, tornare alla versione 2.22.35:
```bash
pip install awscli==2.22.35
```

Per **Terraform**, tornare alla versione 1.11.1.

#### Verifica

Per confermare che la tua soluzione funzioni, esegui un comando semplice:

```bash
aws s3 ls
```

# or
terraform plan
```

If the commands run without checksum errors, the issue is resolved.