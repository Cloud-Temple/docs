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


Il Cloud Temple Object Storage è un servizio di archiviazione oggetti estremamente sicuro e qualificato SecNumCloud, basato sul protocollo Amazon S3. Ti permette di archiviare tutti i tipi di dati, inclusi i più sensibili, in conformità con i requisiti di sicurezza più elevati. Puoi gestire il tuo archiviazione direttamente dalla console Cloud Temple e integrare molte librerie esistenti o client CLI per un utilizzo programmatico.

## Prima di iniziare


<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>

    Per eseguire le azioni riportate di seguito, è necessario disporre di:

    *   Un account Cloud Temple connesso alla console
    *   Il ruolo di 'Owner' o le autorizzazioni IAM che ti autorizzano a eseguire azioni sul tenant dell'organizzazione interessata.

  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc alias set cloudtemple-fr1 https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com VOTRE_CLE_ACCES VOTRE_CLE_SECRETE
    Aggiunto `cloudtemple-fr1` con successo.           
    ```
    - Sostituisci `VOTRE_NAMESPACE` con il tuo namespace. Questo parametro è disponibile nella console Cloud Temple, nel dettaglio di un bucket.
    - Sostituisci `VOTRE_CLE_ACCES` e `VOTRE_CLE_SECRETE` con quelle del tuo account di storage.

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
    A differenza di `mc`, il client AWS non memorizza l'endpoint. Dovrai specificarlo per ogni comando con l'opzione `--endpoint-url`.

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
    Potrai quindi utilizzare questo profilo con l'opzione `--profile cloudtemple` su ogni comando.


  </TabItem>

</Tabs>

## Elencare tutti i bucket S3 del proprio tenant
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    È possibile accedere a tutti i propri bucket tramite il menu '__Storage oggetti__' della console Cloud Temple:
    <img src={S3ListBucket} />
    È possibile vedere tutti i conti creati sul proprio tenant e autorizzati ad accedere al servizio S3 tramite l'anteprima '__Account di storage__'.
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
    Quando fai clic sul nome di un bucket, hai accesso per primo alla scheda '__File__' per visualizzare il suo contenuto:
    <img src={S3Files} />
    Nella scheda '__Impostazioni__' puoi vedere i dettagli delle informazioni del tuo bucket S3:
    <img src={S3Params} />
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
    Rimosso `cloudtemple-fr1/demo-app/version.txt`.
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
    La creazione di un account di archiviazione sul tuo tenant avviene premendo il pulsante '__Nuovo account di archiviazione__' in alto a destra, nell'anteprima '__Account di archiviazione__':
    <img src={S3CreateAccount} />
    La piattaforma ti fornisce quindi la chiave di accesso e la chiave segreta del tuo bucket:
    <img src={S3StorageKeys} />
    __ATTENZIONE:__ le chiavi di accesso e segreta vengono visualizzate una sola volta. Dopo questa prima visualizzazione, non sarà più possibile visualizzare nuovamente la chiave segreta. È quindi essenziale annotare immediatamente queste informazioni; in caso contrario, sarà necessario generare una nuova coppia di chiavi.
    La rigenerazione avviene nelle opzioni della chiave selezionando l'opzione "Reimposta chiave di accesso".
    <img src={S3Keyregen} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La creazione di account di archiviazione è un'operazione specifica della piattaforma Cloud Temple e deve essere eseguita tramite la console, come descritto nell'anteprima precedente.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La creazione di account di archiviazione è un'operazione specifica della piattaforma Cloud Temple e deve essere eseguita tramite la console.
  </TabItem>
</Tabs>

## Creazione di un bucket S3
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La creazione di un nuovo bucket viene effettuata facendo clic sul pulsante '__Nuovo bucket__' in alto a destra dello schermo :
    <img src={S3Create} />
    Si apre una finestra e devi compilare :
    1. La **regione** di creazione del tuo bucket,
    2. Il **tipo** di bucket: prestazioni o archiviazione,
    3. Il **nome** del tuo bucket (deve essere univoco).
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
    L'eliminazione di un bucket viene eseguita nelle azioni associate al bucket scegliendo l'opzione __'Elimina'__.
    <img src={S3Delete} />
    _**ATTENZIONE: L'eliminazione è definitiva e non esiste alcun modo per recuperare i dati.**_
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
    Le associazioni del account ai bucket e la configurazione delle restrizioni di accesso vengono eseguite nella scheda '__Politiche__' del bucket.
    <img src={S3AccountAssign} />
    Questa interfaccia ti permette di dare l'accesso del account di archiviazione al bucket in base a quattro ruoli predefiniti (Manutentore, Scrittore e Lettore, Scrittore, Lettore).
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La gestione fine delle politiche di accesso tramite il client AWS (`put-bucket-policy`) è un'operazione avanzata. Per la maggior parte dei casi d'uso, consigliamo di utilizzare la console Cloud Temple per una configurazione semplificata e sicura.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La gestione fine delle politiche di accesso tramite il client `mc` (`policy` commands) è un'operazione avanzata. Per la maggior parte dei casi d'uso, consigliamo di utilizzare la console Cloud Temple per una configurazione semplificata e sicura.
  </TabItem>
</Tabs>