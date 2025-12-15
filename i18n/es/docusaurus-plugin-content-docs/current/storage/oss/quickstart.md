---
title: Guía de inicio
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


El almacenamiento objeto Cloud Temple es un servicio de almacenamiento de objetos altamente seguro y certificado SecNumCloud, basado en el protocolo Amazon S3. Le permite almacenar todo tipo de datos, incluidos los más sensibles, cumpliendo con los más altos requisitos de seguridad. Puede gestionar su almacenamiento directamente desde la consola Cloud Temple e integrar numerosas bibliotecas existentes o clientes CLI para su uso programático.

## Antes de comenzar

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>

    Para realizar las acciones presentadas a continuación, debe disponer de:

    *   Una cuenta Cloud Temple conectada a la consola
    *   El rol de 'Owner' o permisos IAM que le autorizan a realizar acciones sobre el tenant de la organización correspondiente.

  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc alias set cloudtemple-fr1 https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com VOTRE_CLE_ACCES VOTRE_CLE_SECRETA
    Added `cloudtemple-fr1` successfully.
    ```
    - Reemplace `VOTRE_NAMESPACE` por su namespace. Este parámetro está disponible en la consola Cloud Temple, en el detalle de un bucket.
    - Reemplace `VOTRE_CLE_ACCES` y `VOTRE_CLE_SECRETA` por las claves de su cuenta de almacenamiento.

  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">

    El cliente AWS se configura mediante el comando `aws configure`. Deberá proporcionar sus claves de acceso y la región predeterminada.
    ```bash
    ❯ aws configure
    AWS Access Key ID [None]: VOTRE_CLE_ACCES
    AWS Secret Access Key [None]: VOTRE_CLE_SECRETA
    Default region name [None]: fr1
    Default output format [None]: json
    ```
    A diferencia de `mc`, el cliente AWS no guarda la URL del punto final (endpoint). Deberá especificarlo en cada comando mediante la opción `--endpoint-url`.

    La URL del punto final de su servicio es: `https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com`

    **Consejo:** Para evitar escribir el endpoint cada vez, puede definirlo en el archivo de configuración de AWS (`~/.aws/config`) creando un perfil dedicado:
    ```ini
    [profile cloudtemple]
    region = fr1
    output = json
    s3 =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    s3api =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    ```
    A continuación, podrá utilizar este perfil con la opción `--profile cloudtemple` en cada comando.

  </TabItem>
</Tabs>

## Listar todos los buckets S3 de su tenant

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Puede acceder a todos sus buckets a través del menú '__Almacenamiento de objetos__' de la consola Cloud Temple:
    <img src={S3ListBucket} />
    Puede ver todos los cuentas creadas en su tenant y autorizadas para acceder al servicio S3 a través de la pestaña '__Cuentas de almacenamiento__'.
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

## Navegar un bucket S3
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Cuando haces clic en el nombre de un bucket, accedes primero a la pestaña '__Archivos__' para ver su contenido:
    <img src={S3Files} />
    En la pestaña '__Configuración__' puedes ver los detalles de información de tu bucket S3:
    <img src={S3Params} />

    **Importante**: El concepto de '__Protección contra eliminación__' se refiere a la duración de protección de los datos, y no a una eliminación programada. Los datos permanecen accesibles durante todo el período configurado. Para provocar la eliminación automática de los datos al finalizar el período de retención, es necesario definir una política de ciclo de vida (lifecycle).

    **Ejemplo de política de ciclo de vida** (`lifecycle.json`):

    **Requisitos previos**:

    - Debe usarse la cuenta de almacenamiento '__clave de acceso global__' porque debe tener los permisos '__s3:PutLifecycleConfiguration__' y '__s3:GetLifecycleConfiguration__' sobre el bucket.

    ```json
    {
      "Rules": [
        {
          "ID": "DeleteOldObjects",
          "Prefix": "",  // "" = todo el bucket, de lo contrario, especificar un prefijo específico
          "Status": "Enabled",
          "Expiration": {
            "Days": 30  // elimina después de 30 días
          },
          "NoncurrentVersionExpiration": {
            "NoncurrentDays": 7  // elimina las versiones antiguas 7 días después de la creación de una nueva
          }
        }
      ]
    }
    ```

    Si usas AWS CLI:

    ```bash
    aws --endpoint-url https://<ecs-endpoint> \
    s3api put-bucket-lifecycle-configuration \
    --bucket <nombre-del-bucket> \
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

## Write a file to a bucket (upload)
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

## Descargar un archivo desde un bucket
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
    descarga: s3://demo-app/app.tar.gz a ./app.tar.gz
    ```
  </TabItem>

</Tabs>

## Eliminar un archivo de un bucket
<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc rm cloudtemple-fr1/demo-app/version.txt
    Eliminado `cloudtemple-fr1/demo-app/version.txt`.
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 rm s3://demo-app/version.txt --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    eliminado: s3://demo-app/version.txt
    ```
  </TabItem>

</Tabs>

## Creación de una nueva cuenta de almacenamiento
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La creación de una cuenta de almacenamiento en su inquilino se realiza pulsando el botón '__Nueva cuenta de almacenamiento__' en la parte superior derecha, en la pestaña '__Cuentas de almacenamiento__':
    <img src={S3CreateAccount} />
    La plataforma le proporciona entonces la clave de acceso y la clave secreta de su bucket:
    <img src={S3StorageKeys} />
    __ATENCIÓN:__ Las claves de acceso y secreta solo se muestran una vez. Después de esta primera aparición, será imposible volver a consultar la clave secreta. Es por ello esencial anotar esta información inmediatamente; de lo contrario, deberá generar una nueva pareja de claves.
    La regeneración se realiza desde las opciones de la clave, seleccionando la opción "Restablecer clave de acceso".
    <img src={S3Keyregen} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La creación de cuentas de almacenamiento es una operación específica de la plataforma Cloud Temple y debe realizarse a través de la consola, tal como se describe en la primera pestaña.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La creación de cuentas de almacenamiento es una operación específica de la plataforma Cloud Temple y debe realizarse a través de la consola.
  </TabItem>
</Tabs>

## Creación de un bucket S3
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La creación de un nuevo bucket se realiza haciendo clic en el botón '__Nuevo bucket__' en la parte superior derecha de la pantalla:
    <img src={S3Create} />
    A continuación, aparece una ventana donde debe indicar:
    1. La **región** de creación de su bucket,
    2. El **tipo** de bucket: rendimiento o archivado,
    3. El **nombre** de su bucket (debe ser único).
    <img src={S3CreatePopup_001} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 mb s3://nouveau-bucket --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    make_bucket: nuevo-bucket
    ```
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc mb cloudtemple-fr1/nouveau-bucket
    Bucket `cloudtemple-fr1/nouveau-bucket` created successfully.
    ```
  </TabItem>
</Tabs>

## Eliminación de un bucket S3
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La eliminación de un bucket se realiza en las acciones asociadas al bucket eligiendo la opción __'Eliminar'__.
    <img src={S3Delete} />
    _**ATENCIÓN: La eliminación es definitiva y no existe ninguna manera de recuperar los datos.**_
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

## Gestión de políticas de acceso
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Las asociaciones de cuentas a los buckets y la configuración de restricciones de acceso se realizan en la pestaña '__Políticas__' del bucket.
    <img src={S3AccountAssign} />
    Esta interfaz le permite otorgar acceso a la cuenta de almacenamiento al bucket según cuatro roles predefinidos (read_only, read_write, write_only, maintainer).
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La gestión detallada de políticas de acceso mediante el cliente AWS (`put-bucket-policy`) es una operación avanzada. Para la mayoría de los casos de uso, recomendamos utilizar la consola Cloud Temple para una configuración simplificada y segura.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La gestión detallada de políticas de acceso mediante el cliente `mc` (`comandos policy`) es una operación avanzada. Para la mayoría de los casos de uso, recomendamos utilizar la consola Cloud Temple para una configuración simplificada y segura.
  </TabItem>
</Tabs>