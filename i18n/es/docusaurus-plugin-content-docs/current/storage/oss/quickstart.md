---
title: guía de inicio
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
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

El Templo del Almacenamiento Objeto Cloud es un servicio de almacenamiento de objetos altamente seguro y calificado SecNumCloud, basado en el protocolo Amazon S3. Te permite almacenar todos los tipos de datos, incluidos los más sensibles, cumpliendo con las más altas exigencias de seguridad. Puedes gestionar tu almacenamiento directamente desde la consola Cloud Temple y integrar muchas bibliotecas existentes o clientes CLI para el uso programático.

## Antes de comenzar

<Tabs>
  <TabItem value="Consola Cloud Temple" label="Consola Cloud Temple">

    Para realizar las acciones descritas a continuación, es necesario tener:

    *   Una cuenta Cloud Temple conectada a la consola
    *   El estado de 'Propietario' o las permisos IAM que le permitan realizar acciones en el teniente de la organización correspondiente.

  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc alias set cloudtemple-fr1 https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com VOTRE_CLE_ACCES VOTRE_CLE_SECRETE
    Añadido `cloudtemple-fr1` con éxito.
    ```
    - Reemplace `VOTRE_NAMESPACE` por su espacio de nombres. Este parámetro está disponible en la consola Cloud Temple, en los detalles del bucket.
    - Reemplace `VOTRE_CLE_ACCES` y `VOTRE_CLE_SECRETE` por las claves de acceso de su cuenta de almacenamiento.

  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">

    El cliente AWS se configura mediante la comando `aws configure`. Deberá proporcionar sus claves de acceso y la región predeterminada.
    ```bash
    ❯ aws configure
    AWS Access Key ID [None]: VOTRE_CLE_ACCES
    AWS Secret Access Key [None]: VOTRE_CLE_SECRETE
    Default region name [None]: fr1
    Default output format [None]: json
    ```
    A diferencia de `mc`, el cliente AWS no almacena el punto final (endpoint). Deberá especificarlo para cada comando utilizando la opción `--endpoint-url`.

    El punto final de su servicio es: `https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com`

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

## Listar todos los buckets S3 de tu tenencia
<Tabs>
  <TabItem value="Consola Cloud Temple" label="Consola Cloud Temple" default>
    Puedes acceder al conjunto de tus buckets a través del menú '__Almacenamiento de Objetos__' de la consola Cloud Temple:
    <img src={S3ListBucket} />
    Puedes ver todos los cuentas creadas en tu tenencia y autorizadas para acceder al servicio S3 a través del apartado '__Cuentas de almacenamiento__'.
    <img src={S3Accounts} />
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

## Exploring an S3 Bucket

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Lorsque vous hésitez sur le nom d'un bucket, accédez en premier à l'onglet '__Fichiers__' pour consulter son contenu :
    <img src={S3Files} />
    Dans l'onglet '__Paramètres__', vous pouvez obtenir des informations détaillées sur les propriétés de votre bucket S3 :
    <img src={S3Params} />

    **Nota importante sobre la retención**: El concepto de retención corresponde a la duración de protección de los datos, no a una eliminación programada. Los datos permanecen accesibles durante todo el período de retención. Para provocar una eliminación automática de los datos al final del período de retención, es necesario definir una política de ciclo de vida (lifecycle).
    
    **Ejemplo de política de ciclo de vida**:
    ```json
    {
      "Rules": [
        {
          "ID": "Eliminacion-despues-30-dias",
          "Status": "Enabled",
          "Expiration": {
            "Days": 30
          }
        }
      ]
    }
    ```
    Esta política eliminará automáticamente todos los objetos del bucket después de 30 días.
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

### Carga de un archivo en un bucket (upload)
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
    download: s3://demo-app/app.tar.gz to ./app.tar.gz
    ```
  </TabItem>

</Tabs>

## Eliminar un archivo de un bucket
<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc rm cloudtemple-fr1/demo-app/version.txt
    Removed `cloudtemple-fr1/demo-app/version.txt`.
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 rm s3://demo-app/version.txt --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    delete: s3://demo-app/version.txt
    ```
  </TabItem>

</Tabs>

## Creación de un nuevo cuenta de almacenamiento
<Tabs>
  <TabItem value="Consola de Cloud Temple" label="Consola de Cloud Temple" default>
    La creación de una cuenta de almacenamiento en tu tenencia se realiza presionando el botón '__Nueva cuenta de almacenamiento__' en la parte superior derecha, en el menú '__Cuentas de almacenamiento__':
    <img src={S3CreateAccount} />
    La plataforma luego muestra las claves de acceso y la clave secreta de tu bucket:
    <img src={S3StorageKeys} />
    **ATENCIÓN:** Las claves de acceso y secreto se muestran solo una vez. Después de esta primera aparición, no será posible consultar nuevamente la clave secreta. Por lo tanto, es esencial tomar nota de estas informaciónes inmediatamente; de lo contrario, tendrás que generar una nueva pareja de claves.
    La regeneración se realiza en las opciones de las claves seleccionando la opción "Regenerar clave de acceso".
    <img src={S3Keyregen} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La creación de cuentas de almacenamiento es una operación específica de la plataforma Cloud Temple y debe realizarse a través de la consola, como se describe en el primer menú.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La creación de cuentas de almacenamiento es una operación específica de la plataforma Cloud Temple y debe realizarse a través de la consola.
  </TabItem>
</Tabs>

## Creación de un bucket S3
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La creación de un nuevo bucket implica hacer clic en el botón '__Nuevo bucket__' ubicado en la parte superior derecha del escritorio:
    <img src={S3Create} />
    Se muestra una ventana donde se debe ingresar:
    1. La **región** de creación del bucket,
    2. El **tipo** del bucket: de alto rendimiento o almacenamiento,
    3. El **nombre** del bucket (debe ser único).
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
    Bucket `cloudtemple-fr1/nuevo-bucket` se creó con éxito.
    ```
  </TabItem>
</Tabs>

## Eliminación de un bucket S3
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La eliminación de un bucket se realiza seleccionando la acción asociada al bucket y elegir la opción __'Eliminar'.__
    <img src={S3Delete} />
    _**ATENCIÓN: La eliminación es definitiva y no existe ningún método para recuperar los datos.**_
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 rb s3://nuevo-bucket --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    eliminar_bucket: nuevo-bucket
    ```
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc rb cloudtemple-fr1/nuevo-bucket
    Eliminado el bucket `cloudtemple-fr1/nuevo-bucket` con éxito.
    ```
  </TabItem>
</Tabs>

## Gestión de políticas de acceso
<Tabs>
  <TabItem value="Consola Cloud Temple" label="Consola Cloud Temple" default>
    La asociación de cuentas al bucket y la configuración de las restricciones de acceso se realizan en el panel "__Políticas__" del bucket.
    <img src={S3AccountAssign} />
    Esta interfaz le permite otorgar el acceso del almacenamiento de cuenta al bucket según cuatro roles predefinidos (Mantenedor, Escritor y Lector, Escritor).
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La gestión fina de las políticas de acceso a través del cliente AWS (`put-bucket-policy`) es una operación avanzada. Para la mayoría de los casos de uso, recomendamos pasar por la consola Cloud Temple para una configuración simplificada y segura.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La gestión fina de las políticas de acceso a través del cliente `mc` (`policy` comandos) es una operación avanzada. Para la mayoría de los casos de uso, recomendamos pasar por la consola Cloud Temple para una configuración simplificada y segura.
  </TabItem>
</Tabs>
