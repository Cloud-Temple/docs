---
title: Guida di avvio
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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Il Storage oggetti Cloud Temple è un servizio di archiviazione oggetti altamente sicuro e certificato SecNumCloud, basato sul protocollo Amazon S3. Ti consente di archiviare tutti i tipi di dati, inclusi quelli più sensibili, in conformità con i più elevati standard di sicurezza. Puoi gestire il tuo archivio direttamente dalla console Cloud Temple e integrare numerose librerie esistenti o client CLI per un utilizzo programmatico.

## Prima di iniziare

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>

    Per eseguire le azioni descritte di seguito, è necessario disporre di:

    *   Un account Cloud Temple collegato alla console
    *   Il ruolo 'Owner' oppure le autorizzazioni IAM che ti consentono di eseguire azioni sul tenant dell'organizzazione interessata.

  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc alias set cloudtemple-fr1 https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com VOTRE_CLE_ACCES VOTRE_CLE_SECRETE
    Added `cloudtemple-fr1` successfully.
    ```
    - Sostituisci `VOTRE_NAMESPACE` con il tuo namespace. Questo parametro è disponibile nella console Cloud Temple, nel dettaglio di un bucket.
    - Sostituisci `VOTRE_CLE_ACCES` e `VOTRE_CLE_SECRETE` con le chiavi del tuo account di archiviazione.

  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">

    Il client AWS viene configurato tramite il comando `aws configure`. Dovrai inserire le tue chiavi di accesso e la regione predefinita.
    ```bash
    ❯ aws configure
    AWS Access Key ID [None]: VOTRE_CLE_ACCES
    AWS Secret Access Key [None]: VOTRE_CLE_SECRETE
    Default region name [None]: fr1
    Default output format [None]: json
    ```
    A differenza di `mc`, il client AWS non salva l'endpoint. Dovrai specificarlo per ogni comando tramite l'opzione `--endpoint-url`.

    L'endpoint del tuo servizio è: `https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com`

    **Suggerimento:** Per evitare di digitare l'endpoint ogni volta, puoi impostarlo nel file di configurazione AWS (`~/.aws/config`) creando un profilo dedicato:
    ```ini
    [profile cloudtemple]
    region = fr1
    output = json
    s3 =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    s3api =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    ```
    Potrai quindi utilizzare questo profilo con l'opzione `--profile cloudtemple` in ogni comando.

  </TabItem>
</Tabs>

## Elenco di tutti i bucket S3 del tuo tenant

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Puoi accedere all'insieme di tutti i tuoi bucket tramite il menu '__Archiviazione oggetti__' della console Cloud Temple:
    <img src={S3ListBucket} />
    Puoi visualizzare tutti i conti creati sul tuo tenant e autorizzati ad accedere al servizio S3 tramite la scheda '__Account di archiviazione__'.
    <img src={S3Accounts} />
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc ls cloudtemple-fr1
    [2025-05-06 15:12:57 CEST]     13B demo01/
    [2025-06-30 15:29:56 CEST]      0B demo03/
    [2025-01-29 14:40:40 CET]      0B test/
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
    Quando fai clic sul nome di un bucket, accedi per primo alla scheda '__File__' per visualizzare il suo contenuto:
    <img src={S3Files} />
    Nella scheda '__Impostazioni__' puoi visualizzare i dettagli delle informazioni del tuo bucket S3:
    <img src={S3Params} />

    **Nota importante**: il concetto di '__Protezione dalla cancellazione__' si riferisce alla durata di protezione dei dati, e non a una cancellazione programmata. I dati rimangono accessibili per tutta la durata configurata. Per attivare la cancellazione automatica dei dati al termine del periodo di conservazione, è necessario definire una politica di ciclo di vita (lifecycle).

    **Esempio di politica di ciclo di vita** (`lifecycle.json`):

    **Prerequisiti**:

    - è necessario utilizzare il conto di archiviazione '__chiave di accesso globale__', che deve disporre dei permessi '__s3:PutLifecycleConfiguration__' e '__s3:GetLifecycleConfiguration__' sul bucket.

    ```json
    {
      "Rules": [
        {
          "ID": "DeleteOldObjects",
          "Prefix": "",  // "" = tutto il bucket, altrimenti specificare un prefisso
          "Status": "Enabled",
          "Expiration": {
            "Days": 30  // elimina dopo 30 giorni
          },
          "NoncurrentVersionExpiration": {
            "NoncurrentDays": 7  // elimina le vecchie versioni 7 giorni dopo la creazione di una nuova
          }
        }
      ]
    }
    ```

    Se utilizzi AWS CLI:

    ```bash
    aws --endpoint-url https://<ecs-endpoint> \
    s3api put-bucket-lifecycle-configuration \
    --bucket <nome-del-bucket> \
    --lifecycle-configuration file://lifecycle.json
    ```
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc ls cloudtemple-fr1/demo-app/
    [2024-05-23 09:41:58 CEST] 8.9KiB README.md
    [2024-05-22 09:56:04 CEST]     0B helloworld.txt
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 ls s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    2024-05-23 09:41:58      8923 README.md
    2024-05-22 09:56:04         0 helloworld.txt
    ```
  </TabItem>

</Tabs>

## Scrivere un file in un bucket (upload)
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

## Scaricare un file da un bucket
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

## Eliminare un file da un bucket
<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc rm cloudtemple-fr1/demo-app/version.txt
    Eliminato `cloudtemple-fr1/demo-app/version.txt`.
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 rm s3://demo-app/version.txt --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    eliminato: s3://demo-app/version.txt
    ```
  </TabItem>

</Tabs>

## Creazione di un nuovo account di archiviazione
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La creazione di un account di archiviazione sul tuo tenant avviene premendo il pulsante '__Nuovo account di archiviazione__' in alto a destra, nell'opzione '__Account di archiviazione__':
    <img src={S3CreateAccount} />
    La piattaforma ti fornisce quindi la chiave di accesso e la chiave segreta del tuo bucket:
    <img src={S3StorageKeys} />
    __ATTENZIONE:__ Le chiavi segreta e di accesso vengono visualizzate una sola volta. Dopo questa prima visualizzazione, non sarà più possibile consultare nuovamente la chiave segreta. È quindi fondamentale annotare immediatamente queste informazioni; in caso contrario, sarà necessario generare una nuova coppia di chiavi.
    La rigenerazione avviene nelle opzioni della chiave selezionando l'opzione "Reimposta chiave di accesso".
    <img src={S3Keyregen} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La creazione di account di archiviazione è un'operazione specifica della piattaforma Cloud Temple e deve essere eseguita tramite la console, come descritto nell'opzione precedente.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La creazione di account di archiviazione è un'operazione specifica della piattaforma Cloud Temple e deve essere eseguita tramite la console.
  </TabItem>
</Tabs>

## Creazione di un bucket S3
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La creazione di un nuovo bucket avviene facendo clic sul pulsante '__Nuovo bucket__' in alto a destra dello schermo:
    <img src={S3Create} />
    Viene quindi visualizzata una finestra in cui è necessario compilare i seguenti campi:
    1. La **regione** di creazione del tuo bucket,
    2. Il **tipo** di bucket: prestazioni elevate o archiviazione,
    3. Il **nome** del tuo bucket (deve essere univoco).
    <img src={S3CreatePopup_001} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 mb s3://nouveau-bucket --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    make_bucket: nuovo-bucket
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
    L'eliminazione di un bucket avviene nelle azioni associate al bucket selezionando l'opzione __'Elimina'__.
    <img src={S3Delete} />
    _**ATTENZIONE: L'eliminazione è definitiva e non esiste alcun modo per recuperare i dati.**_
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 rb s3://nouveau-bucket --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    remove_bucket: nuovo-bucket
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
    L'associazione del conto ai bucket e la configurazione delle restrizioni di accesso vengono eseguite nell'interfaccia '__Politiche__' del bucket.
    <img src={S3AccountAssign} />
    Questa interfaccia consente di concedere l'accesso al conto di archiviazione al bucket in base a quattro ruoli predefiniti (Manutentore, Scrittore e Lettore, Scrittore, Lettore).
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La gestione avanzata delle politiche di accesso tramite il client AWS (`put-bucket-policy`) è un'operazione complessa. Per la maggior parte dei casi d'uso, raccomandiamo di utilizzare la console Cloud Temple per una configurazione semplificata e sicura.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La gestione avanzata delle politiche di accesso tramite il client `mc` (`policy` commands) è un'operazione complessa. Per la maggior parte dei casi d'uso, raccomandiamo di utilizzare la console Cloud Temple per una configurazione semplificata e sicura.
  </TabItem>
</Tabs>