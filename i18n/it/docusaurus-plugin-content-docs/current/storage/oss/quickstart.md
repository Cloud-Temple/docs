---
title: Guida introduttiva
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


## Elencare tutti i bucket S3 del tenant

È possibile accedere a tutti i bucket dal menu '__Object Storage__' della console Cloud Temple:

<img src={S3ListBucket} />

È possibile vedere tutti gli account creati nel tenant e autorizzati ad accedere al servizio S3 tramite la scheda '__Account di storage__'.

<img src={S3Accounts} />

## Creazione di un nuovo account di storage

La creazione di un account di storage nel tenant avviene premendo il pulsante '__Nuovo account di storage__' in alto a destra, nella scheda '__Account di storage__':

<img src={S3CreateAccount} />

La piattaforma fornisce quindi la chiave di accesso e la chiave segreta del bucket:

<img src={S3StorageKeys} />

__ATTENZIONE :__ Le chiavi segreta e di accesso sono presentate una sola volta. Dopo questa prima apparizione, diventa impossibile consultare nuovamente la chiave segreta. È quindi essenziale annotare queste informazioni immediatamente; in caso contrario, sarà necessario generare una nuova coppia di chiavi.

La rigenerazione si effettua nelle opzioni della chiave scegliendo l'opzione "Reimposta chiave di accesso".

<img src={S3Keyregen} />


## Creazione di un bucket S3

La creazione di un nuovo bucket avviene cliccando sul pulsante '__Nuovo bucket__' in alto a destra dello schermo:

<img src={S3Create} />

Una finestra si apre e bisogna inserire:

1. La **regione** di creazione del bucket,
2. Il **tipo** di bucket: performante o archiviazione,
3. Il **nome** del bucket (deve essere unico).

<img src={S3CreatePopup_001} />

Al 3 aprile 2024, la regione disponibile è **FR1** (Parigi) e solo il tipo performante è disponibile.

Bisogna anche scegliere chi può accedere al bucket:

- Accesso **Privato**: Per impostazione predefinita, l'accesso è limitato agli indirizzi IP specifici di Cloud Temple.
- Accesso **Pubblico**: L'accesso è aperto a tutti gli indirizzi Internet (in particolare tramite la regola 0.0.0.0/0). Tuttavia, è sempre richiesta l'autenticazione. Si sconsiglia questa configurazione per le implicazioni in termini di sicurezza.
- Accesso **Personalizzato**: Questa opzione consente di specificare gli indirizzi IPv4 o le aree di sottorete da autorizzare.

## Associazione di un account di storage a un bucket

Le associazioni degli account ai bucket sono effettuate nella scheda '__Politiche__'

<img src={S3AccountAssign} />

Questa associazione consente di dare accesso all'account di storage al bucket. Ci sono quattro ruoli:

1. **Manutentore**: Diritti di lettura, scrittura, gestione dei diritti e gestione delle politiche.

I permessi S3 dietro questo ruolo:
```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. **Scrittore e Lettore**: Leggere, modificare, cambiare e cancellare i file nei bucket.

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

3. **Scrittore**: Leggere, modificare, cambiare e cancellare i file nei bucket.

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

4. **Lettore**: Leggere i file nei bucket e scaricarli.

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

## Navigare un bucket S3

Quando si clicca sul nome di un bucket, si accede prima alla scheda '__File__' per vedere il contenuto:

<img src={S3Files} />

Nella scheda '__Impostazioni__' è possibile vedere i dettagli delle informazioni del bucket S3:

<img src={S3Params} />

Sono presenti:

1. Il nome del bucket S3,
2. La regione
3. Il numero di oggetti che contiene e la dimensione in byte del bucket,
4. Il punto di terminazione,
5. I parametri del ciclo di vita che definiscono in particolare la scadenza degli oggetti nel bucket. '__0__' corrisponde a una ritenzione infinita.

È possibile modificare il parametro di ritenzione tramite il pulsante '__Modifica__' del ciclo di vita:

<img src={S3Lifecycle} />

Infine, è possibile modificare la sua tipologia di accesso.

## Limitazioni degli accessi ai bucket S3

È molto semplice configurare le restrizioni di accesso ai bucket S3. Durante la creazione di un bucket, è possibile scegliere tra tre configurazioni di accesso:

<img src={S3CreatePopup_001} />

- Accesso **Privato**: Per impostazione predefinita, l'accesso è limitato agli indirizzi IP specifici di Cloud Temple.
- Accesso **Pubblico**: L'accesso è aperto a tutti gli indirizzi Internet (in particolare tramite la regola 0.0.0.0/0). Si sconsiglia questa configurazione per le implicazioni in termini di sicurezza.
- Accesso **Personalizzato**: Questa opzione consente di specificare gli indirizzi IPv4 o le aree di sottorete da autorizzare:

<img src={S3CreatePopup_002} />

*Il supporto IPv6 è previsto per il primo semestre del 2025.*

## Eliminazione di un bucket S3

L'eliminazione di un bucket avviene tramite le azioni associate al bucket selezionando l'opzione __'Elimina'__.

<img src={S3Delete} />

_**ATTENZIONE : L'eliminazione è definitiva e non esiste alcun modo per recuperare i dati.**_

## Come viene fatturata l'offerta S3 di Cloud Temple?

Il prezzo è mensile, per GiB di storage, fatturato mensilmente. Tuttavia, la piattaforma calcola l'uso all'ora e fattura su base mensile di 720 ore.

Ad esempio, se si consumano 30 GiB per 1 ora, poi niente, e poi qualche giorno dopo 30 GiB per 2 ore, la fattura mensile sarà *( Prezzo (1 x 30 GiB) + 2 x Prezzo (30 GiB) ) / 720* per il mese considerato. La fatturazione è a termine passato.