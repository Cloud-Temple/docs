---
title: Copiare e sincronizzare con Rclone
---

[Rclone](https://rclone.org/) è uno strumento da riga di comando open source che consente di copiare e sincronizzare file verso numerosi servizi di archiviazione cloud, inclusi i sistemi compatibili con S3. È particolarmente adatto per backup, migrazioni di dati e sincronizzazione di directory.

:::caution Versione richiesta
Assicurati di utilizzare una **versione recente di Rclone** per garantire la compatibilità con l'archiviazione oggetti Cloud Temple. Puoi verificare la tua versione con `rclone version`.
:::

## Prerequisiti

- Un account di archiviazione S3 Cloud Temple con le chiavi di accesso (Access Key e Secret Key).
- L'endpoint S3 del tuo account (disponibile nella [console Cloud Temple](../../console/console.md)).

## Installazione di Rclone

Su Linux/macOS, installa Rclone con lo script ufficiale:

```bash
curl https://rclone.org/install.sh | sudo bash
```

Su altri sistemi, consulta la [documentazione ufficiale di installazione](https://rclone.org/install/).

Verifica l'installazione:

```bash
rclone version
```

## Configurazione

Crea il file di configurazione Rclone per il tuo storage S3 Cloud Temple:

```bash
mkdir -p ~/.config/rclone
cat > ~/.config/rclone/rclone.conf <<EOF
[cloudtemple-s3]
type = s3
provider = Other
access_key_id = LA_TUA_ACCESS_KEY
secret_access_key = IL_TUO_SECRET_KEY
endpoint = https://IL_TUO_COMPTE.s3.fr1.cloud-temple.com/
EOF
```

:::tip
Sostituisci `LA_TUA_ACCESS_KEY`, `IL_TUO_SECRET_KEY` e `IL_TUO_COMPTE` con i tuoi dati effettivi, disponibili nella console Cloud Temple nella sezione **Storage Oggetti > Account di archiviazione**.
:::

Puoi verificare la tua configurazione:

```bash
cat ~/.config/rclone/rclone.conf
```

## Verifica connessione

Elencate i vostri bucket per verificare che la connessione funzioni:

```bash
rclone lsd cloudtemple-s3:
```

Elencate i file di un bucket:

```bash
rclone ls cloudtemple-s3:nome-del-bucket
```

## Copiare file (`copy`)

Il comando `rclone copy` copia i file sorgente nella destinazione **senza eliminare i file esistenti** nella destinazione.

### Test in modalità simulazione (dry-run)

Prima di qualsiasi operazione, esegui un test con `--dry-run` per vedere cosa verrà fatto senza apportare modifiche:

```bash
rclone copy /data/backup cloudtemple-s3:nom-du-bucket/ --dry-run --verbose
```

### Copia effettiva

```bash
rclone copy /data/backup cloudtemple-s3:nome-del-bucket/ --verbose
```

## Sincronizzare file (`sync`)

Il comando `rclone sync` rende la destinazione **identica** alla sorgente. I file presenti nella destinazione ma assenti nella sorgente verranno **eliminati**.

:::danger Attenzione
`rclone sync` **elimina** i file dalla destinazione che non esistono più nella sorgente. Testa sempre con `--dry-run` prima di eseguire il comando.
:::

### Test in modalità simulazione

```bash
rclone sync /data/backup cloudtemple-s3:nome-del-bucket/ --dry-run --verbose
```

### Sincronizzazione efficace

```bash
rclone sync /data/backup cloudtemple-s3:nome-del-bucket/ --delete-during --verbose
```

## Opzioni utili

| Opzione | Descrizione |
|--------|-------------|
| `--dry-run` | Simula l'operazione senza modificare nulla |
| `--verbose` | Mostra i dettagli delle operazioni |
| `--progress` | Mostra una barra di avanzamento in tempo reale |
| `--transfers N` | Numero di trasferimenti paralleli (valore predefinito: 4) |
| `--bwlimit RATE` | Limita la larghezza di banda (es. `10M` per 10 MB/s) |
| `--exclude PATTERN` | Esclude i file in base a un modello (es. `*.tmp`) |
| `--min-age DURATA` | Trasferisce solo i file più vecchi della durata specificata |

### Esempio con opzioni avanzate

```bash
rclone sync /data/backup cloudtemple-s3:nome-del-bucket/ \
  --transfers 8 \
  --bwlimit 50M \
  --exclude "*.tmp" \
  --exclude ".cache/**" \
  --progress \
  --verbose
```

## Automazione con cron

Per automatizzare un backup giornaliero, aggiungi un'entrata cron:

```bash


# Daily backup at 2 AM
0 2 * * * rclone sync /data/backup cloudtemple-s3:bucket-name/ --log-file=/var/log/rclone-backup.log --log-level INFO
```