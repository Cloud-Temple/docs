---
titolo: Sincronizzazione di un directory con mc mirror
---

La comando `mc mirror` è uno strumento potente per sincronizzare il contenuto di un directory locale con un bucket S3. Può trasferire nuovi o modificati file, e opzionalmente rimuovere i file dal bucket che non esistono più localmente. È una metodo efficiente per mantenere una copia di sicurezza o distribuire un sito statico.

Non dimenticate di configurare il vostro [client MinIO come indicato nel manuale di avvio](../quickstart.md).

### Traduzione in italiano (Markdown)

Per sincronizzare il contenuto del percorso locale `./mon-sito` con il bucket `demo-app` sul tuo alias `cloudtemple-fr1`:

```bash
❯ mc mirror ./mon-sito/ cloudtemple-fr1/demo-app/
```

### Opzioni utili

*   `--overwrite`: Forza il sostituzione dei file esistenti nella destinazione, anche se sono più recenti.
*   `--remove`: Elimina i file dalla destinazione che non esistono nel directory di origine. **Utilizzare con cautela**, poiché può portare a una perdita di dati irreversibili.

```bash


# Sincronizzazione completa con cancellazione dei file remoti obsoleti
> mc mirror --elimina ./mon-sito/ cloudtemple-fr1/demo-app/