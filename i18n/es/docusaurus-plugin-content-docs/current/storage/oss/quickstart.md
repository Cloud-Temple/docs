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


El Almacenamiento de Objetos Cloud Temple es un servicio de almacenamiento de objetos altamente seguro y certificado SecNumCloud, basado en el protocolo Amazon S3. Le permite almacenar todos los tipos de datos, incluidos los más sensibles, en conformidad con los requisitos de seguridad más altos. Puede gestionar su almacenamiento directamente desde la consola Cloud Temple e integrar muchas bibliotecas existentes o clientes CLI para su uso programático.

## Antes de comenzar


<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>

    Para realizar las acciones presentadas a continuación, debe contar con:

    *   Una cuenta Cloud Temple conectada a la consola
    *   El estado de 'Owner' o permisos IAM que le autorizan a realizar acciones en el tenant de la organización correspondiente.

  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc alias set cloudtemple-fr1 https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com VOTRE_CLE_ACCES VOTRE_CLE_SECRETE
    Added `cloudtemple-fr1` successfully.           
    ```
    - Reemplace `VOTRE_NAMESPACE` por su espacio de nombres. Este parámetro está disponible en la consola Cloud Temple, en el detalle de un bucket.
    - Reemplace `VOTRE_CLE_ACCES` y `VOTRE_CLE_SECRETE` por las de su cuenta de almacenamiento.

  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">

    El cliente AWS se configura mediante el comando `aws configure`. Deberá ingresar sus claves de acceso y la región predeterminada.
    ```bash
    ❯ aws configure
    AWS Access Key ID [None]: VOTRE_CLE_ACCES
    AWS Secret Access Key [None]: VOTRE_CLE_SECRETE
    Default region name [None]: fr1
    Default output format [None]: json
    ```
    A diferencia de `mc`, el cliente AWS no guarda el punto de terminación (endpoint). Deberá especificarlo para cada comando con la opción `--endpoint-url`.

    El punto de terminación de su servicio es: `https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com`

    **Consejo:** Para evitar escribir el endpoint cada vez, puede definirlo en el archivo de configuración AWS (`~/.aws/config`) creando un perfil dedicado:
    ```ini
    [profile cloudtemple]
    region = fr1
    output = json
    s3 =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    s3api =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    ```
    Luego podrá usar este perfil con la opción `--profile cloudtemple` en cada comando.


  </TabItem>

</Tabs>

## Listar todos los buckets S3 de su inquilino
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Puede acceder a todos sus buckets a través del menú '__Almacenamiento de objetos__' de la consola Cloud Temple :
    <img src={S3ListBucket} />
    Puede ver todos los cuentas creadas en su inquilino y autorizadas a acceder al servicio S3 a través de la pestaña '__Cuentas de almacenamiento__'.
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

## Explorar un bucket S3
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Cuando haces clic en el nombre de un bucket, accedes primero a la pestaña '__Archivos__' para ver su contenido:
    <img src={S3Files} />
    En la pestaña '__Configuración__' puedes ver los detalles de la información de tu bucket S3:
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

## Escribir un archivo en un bucket (subida)
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
    carga: ./version.txt a s3://demo-app/version.txt
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
    download: s3://demo-app/app.tar.gz to ./app.tar.gz
    ```
  </TabItem>

</Tabs>

## Eliminar un archivo de un bucket
<Tabs>
  <TabItem value="CLI MC" label="CLI MC" default>
    ```bash
    ❯ mc rm cloudtemple-fr1/demo-app/version.txt
    Eliminado `cloudtemple-fr1/demo-app/version.txt`.
    ```
  </TabItem>

  <TabItem value="CLI de AWS" label="CLI de AWS">
    ```bash
    ❯ aws s3 rm s3://demo-app/version.txt --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    eliminación: s3://demo-app/version.txt
    ```
  </TabItem>

</Tabs>

## Creación de una nueva cuenta de almacenamiento
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La creación de una cuenta de almacenamiento en su inquilino se realiza presionando el botón '__Nuevo cuenta de almacenamiento__' en la parte superior derecha, en la pestaña '__Cuentas de almacenamiento__' :
    <img src={S3CreateAccount} />
    La plataforma le proporciona entonces la clave de acceso y la clave secreta de su bucket :
    <img src={S3StorageKeys} />
    __ATENCIÓN :__ Las claves de acceso y secreta se muestran una sola vez. Después de esta primera aparición, se vuelve imposible consultar nuevamente la clave secreta. Por lo tanto, es esencial anotar esta información inmediatamente; de lo contrario, será necesario generar un nuevo par de claves.
    La regeneración se realiza en las opciones de la clave eligiendo la opción "Restablecer clave de acceso".
    <img src={S3Keyregen} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La creación de cuentas de almacenamiento es una operación específica de la plataforma Cloud Temple y debe realizarse a través de la consola, como se describe en la primera pestaña.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La creación de cuentas de almacenamiento es una operación específica de la plataforma Cloud Temple y debe realizarse a través de la consola.
  </TabItem>
</Tabs>

## Creación de un bucket S3
<Tabs>
  <TabItem value="Console Cloud Temple" label="Consola Cloud Temple" default>
    La creación de un nuevo bucket se hace haciendo clic en el botón '__Nuevo bucket__' en la parte superior derecha de la pantalla :
    <img src={S3Create} />
    Una ventana se muestra entonces y debe rellenar:
    1. La **región** de creación de su bucket,
    2. El **tipo** de bucket: rendimiento o almacenamiento,
    3. El **nombre** de su bucket (debe ser único).
    <img src={S3CreatePopup_001} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 mb s3://nuevo-bucket --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    make_bucket: nuevo-bucket
    ```
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc mb cloudtemple-fr1/nuevo-bucket
    Bucket `cloudtemple-fr1/nuevo-bucket` creado correctamente.
    ```
  </TabItem>
</Tabs>

## Eliminación de un bucket S3
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La eliminación de un bucket se realiza en las acciones asociadas al bucket al elegir la opción __'Eliminar'__.
    <img src={S3Delete} />
    _**ATENCIÓN: La eliminación es definitiva y no existe ningún medio para recuperar los datos.**_
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
    Eliminado `cloudtemple-fr1/nouveau-bucket` correctamente.
    ```
  </TabItem>
</Tabs>

## Gestión de políticas de acceso
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Las asociaciones de cuenta a los buckets y la configuración de las restricciones de acceso se realizan en la pestaña '__Políticas__' del bucket.
    <img src={S3AccountAssign} />
    Esta interfaz le permite otorgar el acceso de la cuenta de almacenamiento al bucket según cuatro roles predefinidos (Mantenedor, Escritor y Lector, Escritor, Lector).
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La gestión fina de las políticas de acceso a través del cliente AWS (`put-bucket-policy`) es una operación avanzada. Para la mayoría de los casos de uso, recomendamos utilizar la consola Cloud Temple para una configuración simplificada y segura.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La gestión fina de las políticas de acceso a través del cliente `mc` (`policy` commands) es una operación avanzada. Para la mayoría de los casos de uso, recomendamos utilizar la consola Cloud Temple para una configuración simplificada y segura.
  </TabItem>
</Tabs>