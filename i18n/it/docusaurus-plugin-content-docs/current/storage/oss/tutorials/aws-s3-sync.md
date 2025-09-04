---
title: Sincronizzazione di un directory con AWS CLI
---

Allo stesso modo che `mc`, l'AWS CLI offre la comando `aws s3 sync` per sincronizzare i directory. Questa comanda confronta il contenuto del directory sorgente e del bucket di destinazione per trasferire solo i file nuovi o modificati.

Non dimenticate di configurare il vostro [client AWS come indicato nel manuale di avvio](../quickstart.md) e di utilizzare il parametro `--endpoint-url`.

### Esempio di base

Per sincronizzare il contenuto del percorso locale `./mon-site` con il bucket `s3://demo-app`:

```bash
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
```

### Opzioni utili

*   `--delete`: Elimina i file dal bucket che non esistono più nel percorso locale, equivalente all'opzione `--remove` di `mc mirror`.
*   `--exact-timestamps`: Durante la sincronizzazione, copia solo il file se l'ora di modifica è diversa.
*   `--dryrun`: Mostra le operazioni che sarebbero eseguite senza effettivamente le eseguire. Molto utile per verificare una comanda prima della sua esecuzione.

# Simulazione di sincronizzazione con cancellazione per verificare i cambiamenti
> aws s3 sync ./mon-sito/ s3://demo-app/ --endpoint-url https://VOTRE_NUVOLO.s3.fr1.cloud-temple.com --delete --dryrun
(in modalità di test) cancellazione: s3://demo-app/vecchio-file.html
(in modalità di test) caricamento: mon-sito/nuovo-file.css su s3://demo-app/nuovo-file.css
