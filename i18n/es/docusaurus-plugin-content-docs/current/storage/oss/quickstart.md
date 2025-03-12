---
title: Guía de inicio rápido
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

## Listar todos los buckets S3 de su tenant

Puede acceder a todos sus buckets a través del menú '__Almacenamiento de Objetos__' en la consola de Cloud Temple:

<img src={S3ListBucket} />

Puede ver todas las cuentas creadas en su tenant y autorizadas para acceder al servicio S3 a través de la pestaña '__Cuentas de almacenamiento__'.

<img src={S3Accounts} />

## Creación de una nueva cuenta de almacenamiento

Para crear una cuenta de almacenamiento en su tenant, haga clic en el botón '__Nueva cuenta de almacenamiento__' en la esquina superior derecha de la pestaña '__Cuentas de almacenamiento__':

<img src={S3CreateAccount} />

La plataforma le proporcionará entonces la clave de acceso y la clave secreta para su bucket:

<img src={S3StorageKeys} />

__ATENCIÓN:__ Las claves secreta y de acceso se presentan una sola vez. Después de esta primera aparición, se vuelve imposible consultar de nuevo la clave secreta. Por lo tanto, es esencial anotar esta información inmediatamente; de lo contrario, será necesario generar un nuevo par de claves.

La regeneración de claves se realiza en las opciones de la clave seleccionando "Reiniciar clave de acceso".

<img src={S3Keyregen} />

## Creación de un bucket S3

Para crear un nuevo bucket, haga clic en el botón '__Nuevo bucket__' en la parte superior derecha de la pantalla:

<img src={S3Create} />

Aparecerá una ventana donde deberá especificar:

1. La __región__ de creación de su bucket,
2. El __tipo__ de bucket: rendimiento o archivo,
3. El __nombre__ de su bucket (debe ser único).

<img src={S3CreatePopup_001} />

A fecha de 3 de abril de 2024, la región disponible es __FR1__ (París) y solo está disponible el tipo de rendimiento.

También debe elegir quién puede acceder a su bucket:

- Acceso __Privado__: Por defecto, el acceso está limitado a direcciones IP específicas de Cloud Temple.
- Acceso __Público__: El acceso está abierto a todas las direcciones de Internet (especialmente a través de la regla 0.0.0.0/0). Sin embargo, sigue siendo necesaria la autenticación. No recomendamos esta configuración debido a sus implicaciones en términos de seguridad.
- Acceso __Personalizado__: Esta opción le permite especificar las direcciones IPv4 o los rangos de subredes que desea autorizar.

## Asociación de una cuenta de almacenamiento a un bucket

Las asociaciones de cuentas a buckets se realizan en la pestaña '__Políticas__'

<img src={S3AccountAssign} />

Esta asociación permite dar acceso de la cuenta de almacenamiento al bucket. Hay cuatro roles:

1. __Mantenedor__: Permisos de lectura, escritura, gestión de derechos y gestión de políticas

Los permisos S3 detrás de este rol:

```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. __Escritor y Lector__: Leer y editar, modificar, eliminar archivos en los buckets.

Los permisos S3 detrás de este rol:

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

3. __Escritor__: Leer y editar, modificar, eliminar archivos en los buckets.

Los permisos S3 detrás de este rol:

```json
{
    "name": "write_only",
    "permissions": [
        "s3:List*"
        "s3:*Object"
    ]
}
```

4. __Lector__: Leer archivos en los buckets y descargarlos.

Los permisos S3 detrás de este rol:

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

## Navegar por un bucket S3

Cuando hace clic en el nombre de un bucket, accede primero a la pestaña '__Archivos__' para ver su contenido:

<img src={S3Files} />

En la pestaña '__Parámetros__' puede ver los detalles de la información de su bucket S3:

<img src={S3Params} />

Entonces tiene:

1. El nombre del bucket S3,
2. Su región
3. El número de objetos que contiene y el tamaño en bytes del bucket,
4. Su punto de terminación,
5. Los parámetros del ciclo de vida que definen especialmente la expiración de los objetos del bucket. '__0__' corresponde a una retención infinita.

Puede modificar el parámetro de retención a través del botón '__Modificar__' del ciclo de vida:

<img src={S3Lifecycle} />

Finalmente, puede modificar su tipología de acceso.

## Limitación de los accesos a sus buckets S3

Es muy sencillo configurar las restricciones de acceso a sus buckets S3. Al crear un bucket, tiene la opción entre tres configuraciones de acceso:

<img src={S3CreatePopup_001} />

- Acceso __Privado__: Por defecto, el acceso está limitado a direcciones IP específicas de Cloud Temple.
- Acceso __Público__: El acceso está abierto a todas las direcciones de Internet (especialmente a través de la regla 0.0.0.0/0). No recomendamos esta configuración debido a sus implicaciones en términos de seguridad.
- Acceso __Personalizado__: Esta opción le permite especificar las direcciones IPv4 o los rangos de subredes que desea autorizar:

<img src={S3CreatePopup_002} />

*El soporte IPv6 está previsto para el primer semestre de 2025.*

## Eliminación de un bucket S3

La eliminación de un bucket se realiza en las acciones asociadas al bucket seleccionando la opción __'Eliminar'__.

<img src={S3Delete} />

***ATENCIÓN: La eliminación es definitiva y no existe ningún medio para recuperar los datos.***

## ¿Cómo se factura la oferta S3 de Cloud Temple?

El precio es un precio mensual, por GiB de almacenamiento, facturado mensualmente. Sin embargo, la plataforma contabiliza el uso por hora y realiza la facturación sobre una base mensual de 720 horas.

Por ejemplo, si consume en el mes 30 GiB durante 1h y luego nada, y luego unos días más tarde 30 GiB durante 2h, la factura mensual será de *( Precio (1 x 30GiB) + 2 x Precio (30GiB) ) / 720* en el mes considerado. La facturación se realiza a mes vencido.
