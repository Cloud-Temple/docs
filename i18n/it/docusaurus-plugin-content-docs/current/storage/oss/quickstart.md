---
title: Quickstart
---


## Elencare tutti i bucket S3 del tuo tenant

Puoi accedere a tutti i tuoi bucket tramite il menu '__Storage Oggetti__' della console Cloud Temple:

![](images/S3_list_bucket.png)

Puoi vedere tutti gli account creati sul tuo tenant e autorizzati ad accedere al servizio S3 tramite la scheda '__Account di archiviazione__'.

![](images/S3_accounts.png)

## Creazione di un nuovo account di archiviazione

La creazione di un account di archiviazione sul tuo tenant si effettua premendo il pulsante '__Nuovo account di archiviazione__' in alto a destra, nella scheda '__Account di archiviazione__':

![](images/S3_create_account.png)

La piattaforma ti darà quindi la chiave di accesso e la chiave segreta del tuo bucket:

![](images/S3_storage_keys.png)

__ATTENZIONE:__ Le chiavi segrete e di accesso sono presentate una sola volta. Dopo questa prima comparsa, diventa impossibile rivedere la chiave segreta. Pertanto, è essenziale annotare queste informazioni immediatamente; in caso contrario, sarà necessario generare un nuovo paio di chiavi.

La rigenerazione si effettua a livello delle opzioni delle chiavi scegliendo l'opzione "Reimposta chiave di accesso".

![](images/S3_keyregen.png)


## Creazione di un bucket S3 

La creazione di un nuovo bucket si effettua cliccando sul pulsante '__Nuovo bucket__' in alto a destra dello schermo:

![](images/S3_create.png)

Una finestra si aprirà e dovrai compilare:

1. La **regione** di creazione del tuo bucket,
2. Il **tipo** di bucket: prestante o archiviazione,
3. Il **nome** del tuo bucket (deve essere unico).

![](images/S3_create_popup_001.png)

Al 3 aprile 2024, la regione disponibile è **FR1** (Parigi) e solo il tipo prestante è disponibile.

Devi anche scegliere chi può accedere al tuo bucket:

- Accesso **Privato**: Di default, l'accesso è limitato agli indirizzi IP specifici di Cloud Temple.
- Accesso **Pubblico**: L'accesso è aperto a tutti gli indirizzi Internet (in particolare tramite la regola 0.0.0.0/0). Sconsigliamo questa configurazione per le sue implicazioni in termini di sicurezza.
- Accesso **Personalizzato**: Questa opzione ti permette di specificare gli indirizzi IPv4 o le gamme di sottoreti che desideri autorizzare.

## Associare un account di archiviazione a un bucket

Le associazioni degli account ai bucket sono realizzate nella scheda '__Politiche__'

![](images/S3_account_assign.png)

Questa associazione permette di dare l'accesso dell'account di archiviazione al bucket. Ci sono tre ruoli:

1. **Manutentore**: Diritti di lettura, scrittura, gestione dei diritti e gestione della politica
2. **Lettore**: Leggere i file nei bucket e scaricarli.
3. **Scrittore**: Leggere e modificare, cambiare, cancellare i file nei bucket.

![](images/S3_account_access.png)

## Sfogliare un bucket S3

Quando clicchi sul nome di un bucket, accedi subito alla scheda '__File__' per vedere il suo contenuto:

![](images/S3_files.png)

Nella scheda '__Impostazioni__' puoi vedere il dettaglio delle informazioni del tuo bucket S3:

![](images/S3_params.png)

Avrai quindi:

1. Il nome del bucket S3,
2. La sua regione
3. Il numero di oggetti che contiene e la dimensione in byte del bucket,
4. Il suo endpoint,
5. I parametri del ciclo di vita che definiscono, in particolare, l'esaurimento degli oggetti del bucket. '__0__' corrisponde a una ritenzione infinita.

Puoi modificare il parametro di ritenzione tramite il pulsante '__Modifica__' del ciclo di vita:

![](images/S3_lifecycle.png)

Infine, puoi modificare la sua tipologia di accesso.

## Limitazioni degli accessi ai tuoi bucket S3

È molto semplice configurare le restrizioni di accesso ai tuoi bucket S3. Durante la creazione di un bucket, hai la scelta tra tre configurazioni di accesso:

![](images/S3_create_popup_001.png)

- Accesso **Privato**: Di default, l'accesso è limitato agli indirizzi IP specifici di Cloud Temple.
- Accesso **Pubblico**: L'accesso è aperto a tutti gli indirizzi Internet (in particolare tramite la regola 0.0.0.0/0). Sconsigliamo questa configurazione per le sue implicazioni in termini di sicurezza.
- Accesso **Personalizzato**: Questa opzione ti permette di specificare gli indirizzi IPv4 o le gamme di sottoreti che desideri autorizzare:

![](images/S3_create_popup_002.png)

*Il supporto IPv6 è previsto per il primo semestre del 2025.*

## Eliminazione di un bucket S3

L'eliminazione di un bucket si effettua nelle azioni associate al bucket scegliendo l'opzione __'Elimina'__.

![](images/S3_delete.png)

__**ATTENZIONE: L'eliminazione è definitiva e non esiste alcun modo per recuperare i dati.**_


## Come viene fatturata l'offerta S3 di Cloud Temple?

Il prezzo è mensile, per Gio di archiviazione, fatturato mensilmente. Tuttavia, la piattaforma contabilizza l'uso ad ore e realizza la fatturazione su una base mensile di 720 ore.

Ad esempio, se consumi nel mese 30 Gio per 1h poi nulla, poi alcuni giorni dopo 30Gio per 2h, la fattura mensile sarà di *(Prezzo (1 x 30Gio) + 2 x Prezzo (30Gio)) / 720* nel mese considerato. La fatturazione avviene a fine periodo.