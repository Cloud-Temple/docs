---
title: Sincronizzare una cartella con AWS CLI
---

In modo simile a `mc`, l'AWS CLI fornisce il comando `aws s3 sync` per sincronizzare le directory. Questo comando confronta il contenuto della cartella di origine e del bucket di destinazione per trasferire solo i file nuovi o modificati.

Non dimenticate di configurare il vostro [client AWS come indicato nel guida di avvio](../quickstart.md#configurare-vostro-client-aws-aws) e di utilizzare il parametro `--endpoint-url`.

### Esempio di base

Per sincronizzare il contenuto della cartella locale `./mon-site` verso il bucket `s3://demo-app` :

```bash
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
```

### Opzioni utili

*   `--delete` : Elimina i file dal bucket che non esistono più nella cartella locale. È l'equivalente dell'opzione `--remove` di `mc mirror`.
*   `--exact-timestamps` : Durante la sincronizzazione, copia il file solo se l'orario di modifica è diverso.
*   `--dryrun` : Mostra le operazioni che verrebbero eseguite senza eseguirle effettivamente. Molto utile per verificare un comando prima di eseguirlo.

```bash
```

# Simulazione di una sincronizzazione con eliminazione per verificare i cambiamenti
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com --delete --dryrun
(simulazione) delete: s3://demo-app/old-file.html
(simulazione) upload: mon-site/new-file.css to s3://demo-app/new-file.css