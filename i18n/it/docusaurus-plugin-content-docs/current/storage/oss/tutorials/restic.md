---
title: Backup con Restic su Object Storage (S3)
---

## Introduzione

Restic è uno strumento veloce, sicuro ed efficiente per il backup, compatibile con numerosi backend, inclusi i servizi basati su S3. Questa guida ti accompagna passo dopo passo nella configurazione di un backup verso un archivio oggetti compatibile con S3 (come AWS S3, MinIO, Wasabi, ecc.).

## Prerequisiti

*   Un bucket S3 esistente
*   Le credenziali di accesso (Access Key e Secret Key)
*   Il nome della regione (per AWS)
*   L'URL del endpoint S3 (nel caso di un fornitore non-AWS)
*   Restic installato sulla tua macchina

## Installazione di Restic

### Debian/Ubuntu

```bash
sudo apt aggiorna
sudo apt install restic
```

### macOS (tramite Homebrew)

```bash
brew install restic
```

### Windows

Scarica il binario da: [https://github.com/restic/restic/releases](https://github.com/restic/restic/releases)

## Configurazione delle variabili di ambiente

Prima di utilizzare Restic con S3, è necessario configurare le seguenti variabili:

```bash
export AWS_ACCESS_KEY_ID="la_tua_access_key"
export AWS_SECRET_ACCESS_KEY="il_tuo_secret_key"
export RESTIC_PASSWORD="il_tuo_password"
```

Per un endpoint S3 personalizzato (non AWS), aggiungi anche:

```bash
export RESTIC_REPOSITORY="s3:https://endpoint.personalizzato:porta/nome_bucket"
```

Esempio:

```bash
export RESTIC_REPOSITORY="s3:https://s3.miaazienda.local:9000/backup"
```

## Inizializzare il repository Restic

Una sola volta, inizializza il repository nel bucket:

```bash
restic init
```

## Eseguire un backup

Per eseguire il backup di una cartella:

```bash
restic backup /percorso/verso/la_mia_cartella
```

## Elencare i backup

```bash
restic snapshots
```

## Ripristinare un backup

Ripristina l'ultimo backup:

```bash
restic restore latest --target /percorso/ripristino
```

## Eliminare le vecchie copie di sicurezza

Ad esempio, mantenere gli ultimi 7 snapshot:

```bash
restic forget --keep-last 7 --prune
```

## Verifica dell'integrità

Per verificare che tutto sia in ordine:

```bash
restic check
```

## Automatizzare il backup (cron)

Creare un compito cron, ad esempio ogni giorno alle 2:00:

```bash
0 2 * * * /usr/bin/restic backup /home/user/dossier >> /var/log/restic.log 2>&1
```

Assicurarsi che tutte le variabili d'ambiente siano esportate in un file caricato dal cron (ad esempio: `/etc/restic.env`).

## Approfondimenti

*   Documentazione ufficiale: [https://restic.readthedocs.io](https://restic.readthedocs.io)
*   Restic con altri backend: B2, Azure, Google Cloud, ecc.

Questo tutorial ti fornisce una solida base per integrare Restic in una politica di backup affidabile, crittografato e compatibile con i moderni sistemi di archiviazione come S3.