---
title: Guida di Partenza
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import S3ListBucket from './images/S3_list_bucket.png';
import S3Accounts from './images/S3_accounts.png';
import S3CreateAccount from './images/S3_create_account.png';
import S3StorageKeys from './images/S3_storage_keys.png';
import S3Keyregen from './images/S3_keyregen.png';
import S3Create from './images/S3_create.png';
import S3CreatePopup_001 from './images/S3_create_popup_001.png';
import S3AccountAssign from './images/S3_account_assign.png';
import S3AccountAccess from './images/S3_account_access.png';
import S3Files from './images/S3_files.png';
import S3Params from './images/S3_params.png';
import S3Lifecycle from './images/S3_lifecycle.png';
import S3CreatePopup_002 from './images/S3_create_popup_002.png';
import S3Delete from './images/S3_delete.png';

Il Tempio del Servizio di Obiettivi Cloud SecNumCloud è un servizio di archiviazione di oggetti altamente sicuro e certificato, basato sul protocollo Amazon S3. Ti permette di archiviare qualsiasi tipo di dati, inclusi quelli più sensibili, in conformità con le più elevate esigenze di sicurezza. Puoi gestire il tuo archiviazione direttamente dalla console Cloud Temple e integrare numerose biblioteche esistenti o client CLI per l'uso programmatico.

## Prima di iniziare

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>

    Per eseguire le compiti descritti di seguito, è necessario avere:

    *   Un account Cloud Temple connesso alla console
    *   Lo status di 'Owner' o delle autorizzazioni IAM che ti consentono di effettuare azioni sul tenant dell'organizzazione in questione.

  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc alias set cloudtemple-fr1 https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com VOTRE_CLE_ACCES VOTRE_CLE_SECRETE
    Aliase 'cloudtemple-fr1' aggiunta con successo.
    ```
    - Sostituisci `VOTRE_NAMESPACE` con il tuo namespace. Questo parametro è disponibile nella console Cloud Temple, nel dettaglio del bucket.
    - Sostituisci `VOTRE_CLE_ACCES` e `VOTRE_CLE_SECRETE` con quelli del tuo account di archiviazione.

  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">

    Il client AWS viene configurato tramite la comando `aws configure`. Dovrai inserire le tue chiavi di accesso e la regione di default.
    ```bash
    ❯ aws configure
    AWS Access Key ID [None]: VOTRE_CLE_ACCES
    AWS Secret Access Key [None]: VOTRE_CLE_SECRETE
    Regione di default: fr1
    Formattazione di output di default: json
    ```
    A differenza di `mc`, il client AWS non memorizza l'indirizzo di terminazione (endpoint). Dovrai specificarlo per ogni comando utilizzando l'opzione `--endpoint-url`.

    L'indirizzo di terminazione del tuo servizio è: `https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com`

    **Suggerimento:** Per evitare di digitare l'indirizzo di terminazione a ogni volta, puoi definirlo nel file di configurazione AWS (`~/.aws/config`) creando un profilo dedicato:
    ```ini
    [profile cloudtemple]
    regione = fr1
    output = json
    s3 =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    s3api =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    ```
    Puoi quindi utilizzare questo profilo con l'opzione `--profile cloudtemple` su ogni comando.


  </TabItem>

</Tabs>

## Elencare tutti i bucket S3 del tuo tenente
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Puoi accedere all'elenco di tutti i tuoi bucket tramite il menu '__Bucketi__' della console Cloud Temple:
    ![S3 List Bucket](https://link-to-image-1)
    Puoi visualizzare tutti i conti creati sul tuo tenente e autorizzati a accedere al servizio S3 tramite l'angolo '__Accounte di stoccaggio__'.
    ![S3 Accounts](https://link-to-image-2)
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc ls cloudtemple-fr1
    [2025-05-06 15:12:57 CEST]      13B demo01/
    [2025-06-30 15:29:56 CEST]       0B demo03/
    [2025-01-29 14:40:40 CET]       0B test/
    ```
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 ls --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    2025-05-06 15:12:57 demo01
    2025-06-30 15:29:56 demo03
    2025-01-29 14:40:40 test
    ```
  </TabItem>

</Tabs>

## Esplorare un bucket S3
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Quando si clicca sul nome di un bucket, si ha accesso in primo luogo all'onglet '__File__' per visualizzare il suo contenuto:
    ![S3 Files](https://link-to-S3-Files-image)
    Nell'onglet '__Parametri__' è possibile vedere i dettagli delle informazioni del bucket S3:
    ![S3 Parameters](https://link-to-S3-Parameters-image)

    **Nota importante sulla ritenzione**: Il concetto di ritenzione corrisponde alla durata di protezione dei dati, non a una cancellazione programmata. I dati rimangono accessibili per tutto il periodo di ritenzione. Per provocare una cancellazione automatica dei dati alla fine del periodo di ritenzione, è necessario definire una politica del ciclo di vita (lifecycle).
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc ls cloudtemple-fr1/demo-app/
    [2024-05-23 09:41:58 CEST] 8.9KiB README.md
    [2024-05-22 09:56:04 CEST]      0B helloworld.txt
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 ls s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    2024-05-23 09:41:58       8923 README.md
    2024-05-22 09:56:04          0 helloworld.txt
    ```
  </TabItem>

</Tabs>

### Caricature di un file nel bucket (upload)
<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc cp ./version.txt cloudtemple-fr1/demo-app/
    `./version.txt` -> `cloudtemple-fr1/demo-app/version.txt`
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 cp ./version.txt s3://demo-app/version.txt --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    upload: ./version.txt to s3://demo-app/version.txt
    ```
  </TabItem>

</Tabs>

## Download a file from a bucket
<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc cp cloudtemple-fr1/demo-app/app.tar.gz .
    `cloudtemple-fr1/demo-app/app.tar.gz` -> `./app.tar.gz`
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 cp s3://demo-app/app.tar.gz . --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    download: s3://demo-app/app.tar.gz to ./app.tar.gz
    ```
  </TabItem>

</Tabs>

## Eliminare un file in un bucket
<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc rm cloudtemple-fr1/demo-app/version.txt
    File `cloudtemple-fr1/demo-app/version.txt` eliminato con successo.
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 rm s3://demo-app/version.txt --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    delete: s3://demo-app/version.txt
    ```
  </TabItem>

</Tabs>

## Creazione di un nuovo account storage
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La creazione di un account storage sul tuo tenente si effettua premendo il pulsante '__Nuovo account storage__' in alto a destra, all'interno dell'angolo '__Account Storage__':
    <img src={S3CreateAccount} />
    La piattaforma vi fornisce quindi la chiave di accesso e la chiave segreta del tuo bucket:
    <img src={S3StorageKeys} />
    **ATTENZIONE**: Le chiavi segrete e di accesso vengono mostrate solo una volta. Dopo questa prima apparizione, non sarà più possibile consultare nuovamente la chiave segreta. È quindi fondamentale prendere nota di queste informazioni immediatamente; altrimenti, dovrete generare una nuova coppia di chiavi.
    La regenerazione avviene nel settore delle opzioni della chiave e si effettua selezionando l'opzione "Rinnovare chiave di accesso".
    <img src={S3Keyregen} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La creazione degli account storage è un'operazione specifica della piattaforma Cloud Temple e deve essere eseguita tramite la console, come descritto nel primo angolo.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La creazione degli account storage è un'operazione specifica della piattaforma Cloud Temple e deve essere eseguita tramite la console.
  </TabItem>
</Tabs>

## Creazione di un bucket S3
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La creazione di un nuovo bucket si effettua cliccando sul pulsante '__Nuovo bucket__' in alto a destra dello schermo:
    <img src={S3Create} />
    Una finestra appare quindi e dovrebbe essere inserito:
    1. La **regione** di creazione del tuo bucket,
    2. Il **tipo** del bucket: performante o archiviazione,
    3. Il **nome** del tuo bucket (devi deve essere unico).
    <img src={S3CreatePopup_001} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 mb s3://nouveau-bucket --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    make_bucket: nouveau-bucket
    ```
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc mb cloudtemple-fr1/nouveau-bucket
    Bucket `cloudtemple-fr1/nouveau-bucket` created successfully.
    ```
  </TabItem>
</Tabs>

## Eliminazione di un bucket S3
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La rimozione di un bucket avviene nelle azioni associate al bucket, selezionando l'opzione __'Rimuovi'.__
    <img src={S3Delete} />
    _**ATTENZIONE: La rimozione è definitiva e non esiste alcun modo per recuperare i dati.**_
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 rb s3://nouveau-bucket --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    remove_bucket: nouveau-bucket
    ```
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc rb cloudtemple-fr1/nouveau-bucket
    Removed `cloudtemple-fr1/nouveau-bucket` successfully.
    ```
  </TabItem>
</Tabs>

## Gestione delle politiche di accesso
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Le'associazione di conto a bucket e la configurazione delle restrizioni d'accesso vengono effettuate nell'oggetto '__Politiche__' del bucket.
    <img src={S3AccountAssign} />
    Questa interfaccia ti permette di concedere l'accesso allo stesso bucket dal conto di archiviazione in base a quattro ruoli predefiniti (Maniteneur, Scrittore e Lettore, Scrittore, Lettore).
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La gestione fine delle politiche d'accesso tramite il client AWS (`put-bucket-policy`) è un'operazione avanzata. Per la maggior parte dei casi d'uso, ti consigliamo di utilizzare la console Cloud Temple per una configurazione semplificata e sicura.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La gestione fine delle politiche d'accesso tramite il client `mc` (`policy` comandi) è un'operazione avanzata. Per la maggior parte dei casi d'uso, ti consigliamo di utilizzare la console Cloud Temple per una configurazione semplificata e sicura.
  </TabItem>
</Tabs>
