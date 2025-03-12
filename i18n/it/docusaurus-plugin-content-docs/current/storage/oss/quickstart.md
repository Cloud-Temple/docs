---
title: Guida rapida
---
import S3ListBucket from './images/S3_list_bucket.png'
import S3Accounts from './images/S3_accounts.png'
import S3CreateAccount from './images/S3_create_account.png'
import S3StorageKeys from './images/S3_storage_keys.png'
import S3Keyregen from './images/S3_keyregen.png'
import S3Create from './images/S3_create.png'
import S3CreatePopup_001 from './images/S3_create_popup_001.png'
import S3AccountAssign from './images/S3_account_assign.png'
import S3AccountAccess from './images/S3_account_access.png'
import S3Files from './images/S3_files.png'
import S3Params from './images/S3_params.png'
import S3Lifecycle from './images/S3_lifecycle.png'
import S3CreatePopup_002 from './images/S3_create_popup_002.png'
import S3Delete from './images/S3_delete.png'

## Elencare tutti i bucket S3 del vostro tenant

Potete accedere a tutti i vostri bucket tramite il menu '__Storage Oggetti__' nella console Cloud Temple:

<img src={S3ListBucket} />

Potete vedere tutti gli account creati sul vostro tenant e autorizzati ad accedere al servizio S3 tramite la scheda '__Account di storage__'.

<img src={S3Accounts} />

## Creazione di un nuovo account di storage

La creazione di un account di storage sul vostro tenant si effettua cliccando sul pulsante '__Nuovo account di storage__' in alto a destra, nella scheda '__Account di storage__':

<img src={S3CreateAccount} />

La piattaforma vi fornirà quindi la chiave di accesso e la chiave segreta per il vostro bucket:

<img src={S3StorageKeys} />

__ATTENZIONE:__ Le chiavi segreta e di accesso vengono presentate una sola volta. Dopo questa prima apparizione, diventa impossibile consultare nuovamente la chiave segreta. È quindi essenziale annotare queste informazioni immediatamente; in caso contrario, sarà necessario generare una nuova coppia di chiavi.

La rigenerazione si effettua a livello delle opzioni della chiave scegliendo l'opzione "Reimposta chiave di accesso".

<img src={S3Keyregen} />

## Creazione di un bucket S3

La creazione di un nuovo bucket si effettua cliccando sul pulsante '__Nuovo bucket__' in alto a destra dello schermo:

<img src={S3Create} />

Apparirà una finestra in cui dovrete specificare:

1. La __regione__ di creazione del vostro bucket,
2. Il __tipo__ di bucket: performante o archiviazione,
3. Il __nome__ del vostro bucket (deve essere unico).

<img src={S3CreatePopup_001} />

Al 3 aprile 2024, la regione disponibile è __FR1__ (Parigi) e solo il tipo performante è disponibile.

Dovete anche scegliere chi può accedere al vostro bucket:

- Accesso __Privato__: Per impostazione predefinita, l'accesso è limitato agli indirizzi IP specifici di Cloud Temple.
- Accesso __Pubblico__: L'accesso è aperto a tutti gli indirizzi Internet (in particolare tramite la regola 0.0.0.0/0). Tuttavia, è sempre richiesta l'autenticazione. Sconsigliamo questa configurazione a causa delle sue implicazioni in termini di sicurezza.
- Accesso __Personalizzato__: Questa opzione vi permette di specificare gli indirizzi IPv4 o gli intervalli di sottoreti che desiderate autorizzare.

## Associazione di un account di storage a un bucket

Le associazioni di account ai bucket vengono realizzate nella scheda '__Politiche__'

<img src={S3AccountAssign} />

Questa associazione permette di dare l'accesso dell'account di storage al bucket. Ci sono quattro ruoli:

1. __Manutentore__: Diritti di lettura, scrittura, gestione dei diritti e gestione delle politiche

I permessi S3 dietro questo ruolo:

```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. __Scrittore e Lettore__: Leggere e modificare, cambiare, eliminare file nei bucket.

I permessi S3 dietro questo ruolo:

```json
{
    "name": "read_write",
    "permissions": [
        "s3:Get*"
        "s3:List*"
        "s3:*Object"
    ]
}
```

3. __Scrittore__: Leggere e modificare, cambiare, eliminare file nei bucket.

I permessi S3 dietro questo ruolo:

```json
{
    "name": "write_only",
    "permissions": [
        "s3:List*"
        "s3:*Object"
    ]
}
```

4. __Lettore__: Leggere file nei bucket e scaricarli.

I permessi S3 dietro questo ruolo:

```json
{
    "name": "read_only",
    "permissions": [
        "s3:Get*"
        "s3:List*"
    ]
}
```

<img src={S3AccountAccess} />

## Navigare in un bucket S3

Quando cliccate sul nome di un bucket, accedete prima alla scheda '__File__' per vedere il suo contenuto:

<img src={S3Files} />

Nella scheda '__Parametri__' potete vedere i dettagli delle informazioni del vostro bucket S3:

<img src={S3Params} />

Avete quindi:

1. Il nome del bucket S3,
2. La sua regione
3. Il numero di oggetti che contiene e la dimensione in byte del bucket,
4. Il suo endpoint,
5. I parametri del ciclo di vita che definiscono in particolare la scadenza degli oggetti del bucket. '__0__' corrisponde a una conservazione infinita.

Potete modificare il parametro di conservazione tramite il pulsante '__Modifica__' del ciclo di vita:

<img src={S3Lifecycle} />

Infine, potete modificare la sua tipologia di accesso.

## Limitazioni degli accessi ai vostri bucket S3

È molto semplice configurare le restrizioni di accesso ai vostri bucket S3. Durante la creazione di un bucket, avete la scelta tra tre configurazioni di accesso:

<img src={S3CreatePopup_001} />

- Accesso __Privato__: Per impostazione predefinita, l'accesso è limitato agli indirizzi IP specifici di Cloud Temple.
- Accesso __Pubblico__: L'accesso è aperto a tutti gli indirizzi Internet (in particolare tramite la regola 0.0.0.0/0). Sconsigliamo questa configurazione a causa delle sue implicazioni in termini di sicurezza.
- Accesso __Personalizzato__: Questa opzione vi permette di specificare gli indirizzi IPv4 o gli intervalli di sottoreti che desiderate autorizzare:

<img src={S3CreatePopup_002} />

*Il supporto IPv6 è previsto per il primo semestre del 2025.*

## Eliminazione di un bucket S3

L'eliminazione di un bucket si effettua nelle azioni associate al bucket scegliendo l'opzione __'Elimina'__.

<img src={S3Delete} />

***ATTENZIONE: L'eliminazione è definitiva e non esiste alcun modo per recuperare i dati.***

## Come viene fatturata l'offerta S3 di Cloud Temple?

Il prezzo è un prezzo mensile, per GiB di storage, fatturato mensilmente. Tuttavia, la piattaforma contabilizza l'utilizzo all'ora e realizza la fatturazione su una base mensile di 720 ore.

Per esempio, se consumate nel mese 30 GiB per 1h e poi niente, poi qualche giorno dopo 30 GiB per 2h, la fattura mensile sarà di *( Prezzo (1 x 30GiB) + 2 x Prezzo (30GiB) ) / 720* sul mese considerato. La fatturazione avviene a fine periodo.
