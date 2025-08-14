---
title: Sincronizzare una cartella con mc mirror
---

Il comando `mc mirror` è uno strumento potente per sincronizzare il contenuto di una cartella locale con un bucket S3. Può caricare i file nuovi o modificati, e in modo opzionale eliminare i file nel bucket che non esistono più localmente. È un metodo efficace per mantenere un backup o distribuire un sito statico.

Non dimenticare di configurare il [client MinIO come indicato nella guida di avvio](../quickstart.md#configurare-il-tuo-client-minio-mc).

### Esempio di base

Per sincronizzare il contenuto della cartella locale `./mon-site` nel bucket `demo-app` sul tuo alias `cloudtemple-fr1`:

```bash
❯ mc mirror ./mon-site/ cloudtemple-fr1/demo-app/
```

### Opzioni utili

*   `--overwrite` : Forza il sostituzione dei file esistenti nella destinazione, anche se sono più recenti.
*   `--remove` : Elimina i file dalla destinazione che non esistono più nella cartella sorgente. **Da utilizzare con cautela**, poiché può causare una perdita di dati irreversibile.

```bash
```

# Sincronizzazione completa con eliminazione dei file remoti obsoleti
❯ mc mirror --remove ./mon-site/ cloudtemple-fr1/demo-app/