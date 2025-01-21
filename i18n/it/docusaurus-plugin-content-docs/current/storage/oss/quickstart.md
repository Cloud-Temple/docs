---
title: Guide de démarrage
---

## Lister l'ensemble des bucket S3 de votre tenant

Vous pouvez accéder à l'ensemble de vos buckets via le menu '__Stockage Objet__' de la console Cloud Temple :

![](images/S3_list_bucket.png)

Vous pouvez voir tous les comptes créés sur votre tenant et autorisé à accéder au service S3 via l'onglet '__Comptes de stockage__'.

![](images/S3_accounts.png)

## Création d'un nouveau compte de stockage

La création d'un compte de stockage sur votre tenant se fait en appuyant sur le bouton '__Nouveau compte de stockage__' en haut à droite, dans l'onglet '__Comptes de stockage__' :

![](images/S3_create_account.png)

La plateforme vous donne alors la clef d'accès et la clef secrète de votre bucket :

![](images/S3_storage_keys.png)

__ATTENZIONE:__ Le chiavi segrete e di accesso sono presentate una sola volta. Dopo questa prima apparizione, diventa impossibile consultare di nuovo la chiave segreta. È quindi essenziale annotare queste informazioni immediatamente; altrimenti, sarà necessario generare una nuova coppia di chiavi.

La rigenerazione si fa al livello delle opzioni della chiave scegliendo l'opzione "Reimposta chiave di accesso".

![](images/S3_keyregen.png)

## Création d'un bucket S3

La creation de nouveau bucket se fait en cliquant sur le bouton '__Nouveau bucket__' en haut à droite de l'écran :

![](images/S3_create.png)

Una finestra si apre e dovete inserire:

1. La **regione** di creazione del vostro bucket,
2. Il **tipo** di bucket: performante o archivio,
3. Il **nome** del vostro bucket (deve essere unico).

![](images/S3_create_popup_001.png)

Al 3 aprile 2024, la regione disponibile è **FR1** (Parigi) e solo il tipo performante è disponibile.

Dovete anche scegliere chi può accedere al vostro bucket:

- Accesso **Privato**: Per impostazione predefinita, l'accesso è limitato agli indirizzi IP specifici di Cloud Temple.
- Accesso **Pubblico**: L'accesso è aperto a tutti gli indirizzi Internet (in particolare tramite la regola 0.0.0.0/0). Sconsigliamo questa configurazione per le sue implicazioni in termini di sicurezza.
- Accesso **Personalizzato**: Questa opzione vi permette di specificare gli indirizzi IPv4 o i range di subnet che desiderate autorizzare.

## Association d'un compte de stockage à un bucket

Les associations de compte aux buckets sont réalisées dans l'onglet '__Politiques__'

![](images/S3_account_assign.png)

Questa associazione permette di concedere l'accesso del conto di archiviazione al bucket. Ci sono quattro ruoli:

1. **Gestore**: i diritti di lettura, scrittura, gestione dei diritti e gestione della politica

Le autorizzazioni S3 dietro questo ruolo:
```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. **Scrittore e Lettore**: leggere, modificare, modificare, eliminare i file nei buckets.

Le autorizzazioni S3 dietro questo ruolo:
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

3. **Scrittore**: leggere, modificare, modificare, eliminare i file nei buckets.

Le autorizzazioni S3 dietro questo ruolo:
```json
{
    "name": "write_only",
    "permissions": [
        "s3:List*"
        "s3:*Object"
    ]
}
```

4. **Lettore**: leggere i file nei buckets e scaricarli.

Le autorizzazioni S3 dietro questo ruolo:
```json
{
    "name": "read_only",
    "permissions": [
        "s3:Get*"
        "s3:List*"
    ]
}
```

![](images/S3_account_access.png)

## Parcourir un bucket S3

Quando cliccate sul nome di un bucket, avete accesso per primo alla scheda '__File__' per vedere il suo contenuto:

![](images/S3_files.png)

Nella scheda '__Parametri__' potete vedere i dettagli delle informazioni del vostro bucket S3:

![](images/S3_params.png)

Vedrete quindi:

1. Il nome del bucket S3,
2. La sua regione
3. Il numero di oggetti che contiene e la dimensione in byte del bucket,
4. Il suo endpoint,
5. I parametri di ciclo di vita che definiscono in particolare la scadenza degli oggetti del bucket. '__0__' corrisponde a una ritenzione infinita.

Potete modificare il parametro di ritenzione tramite il pulsante '__Modifica__' del ciclo di vita:

![](images/S3_lifecycle.png)

Infine, potete modificare la tipologia di accesso.

## Limitations des accès à vos bucket S3

È molto semplice configurare le restrizioni di accesso ai vostri bucket S3. Durante la creazione di un bucket, avete la possibilità di scegliere tra tre configurazioni di accesso:

![](images/S3_create_popup_001.png)

- Accesso **Privato**: Per impostazione predefinita, l'accesso è limitato agli indirizzi IP specifici di Cloud Temple.
- Accesso **Pubblico**: L'accesso è aperto a tutti gli indirizzi Internet (in particolare tramite la regola 0.0.0.0/0). Sconsigliamo questa configurazione per le sue implicazioni in termini di sicurezza.
- Accesso **Personalizzato**: Questa opzione vi permette di specificare gli indirizzi IPv4 o i range di subnet che desiderate autorizzare:

![](images/S3_create_popup_002.png)

*Il supporto IPv6 è previsto per il primo semestre del 2025.*

## Suppression d'un bucket S3

La cancellazione di un bucket si fa nelle azioni associate al bucket scegliendo l'opzione '__Elimina__'.

![](images/S3_delete.png)

_**ATTENZIONE: L'eliminazione è definitiva e non esiste alcun modo per recuperare i dati.**_

## Comment est facturé l'offre S3 de Cloud Temple ?

Il prezzo è mensile, al GiB di archiviazione, fatturato mensilmente. Tuttavia, la piattaforma calcola l'uso su base oraria e realizza la fatturazione su una base mensile di 720 ore.

Ad esempio, se consumate nel mese 30 GiB per 1 ora e poi niente, e qualche giorno più tardi 30 GiB per 2 ore, la fattura mensile sarà di *( Prezzo (1 x 30GiB) + 2 x Prezzo (30GiB) ) / 720* nel mese considerato. La fatturazione è a termine scaduto.