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


## Listar todos los bucket S3 de su tenant

Puede acceder a todos sus buckets a través del menú '__Almacenamiento de objetos__' de la consola Cloud Temple:

<img src={S3ListBucket} />

Puede ver todas las cuentas creadas en su tenant y autorizadas para acceder al servicio S3 a través de la pestaña '__Cuentas de almacenamiento__'.

<img src={S3Accounts} />

## Creación de una nueva cuenta de almacenamiento

La creación de una cuenta de almacenamiento en su tenant se realiza presionando el botón '__Nueva cuenta de almacenamiento__' en la parte superior derecha, en la pestaña '__Cuentas de almacenamiento__' :

<img src={S3CreateAccount} />

La plataforma le proporciona la clave de acceso y la clave secreta de su bucket:

<img src={S3StorageKeys} />

__ATENCIÓN:__ Las claves secretas y de acceso se presentan una sola vez. Después de esta primera aparición, es imposible consultar nuevamente la clave secreta. Por lo tanto, es esencial anotar esta información inmediatamente; de lo contrario, será necesario generar un nuevo par de claves.

La regeneración se realiza en las opciones de la clave eligiendo la opción "Reiniciar clave de acceso".

<img src={S3Keyregen} />


## Creación de un bucket S3

La creación de un nuevo bucket se realiza haciendo clic en el botón '__Nuevo bucket__' en la parte superior derecha de la pantalla:

<img src={S3Create} />

A continuación, aparece una ventana en la que debe proporcionar:

1. La **región** de creación de su bucket,
2. El **tipo** de bucket: alto rendimiento o archivo,
3. El **nombre** de su bucket (debe ser único).

<img src={S3CreatePopup_001} />

El 3 de abril de 2024, la región disponible es **FR1** (París) y solo está disponible el tipo de alto rendimiento.

También debe elegir quién puede acceder a su bucket:

- Acceso **Privado**: Por defecto, el acceso está limitado a las direcciones IP específicas de Cloud Temple.
- Acceso **Público**: El acceso está abierto a todas las direcciones de Internet (especialmente a través de la regla 0.0.0.0/0). Sin embargo, siempre se requiere autenticación. Desaconsejamos esta configuración debido a sus implicaciones de seguridad.
- Acceso **Personalizado**: Esta opción le permite especificar las direcciones IPv4 o los rangos de subredes que desea autorizar.

## Asociación de una cuenta de almacenamiento a un bucket

Las asociaciones de cuentas a los buckets se realizan en la pestaña '__Políticas__'

<img src={S3AccountAssign} />

Esta asociación permite dar acceso al bucket a la cuenta de almacenamiento. Existen cuatro roles:

1. **Mantenedor**: Derechos de lectura, escritura, gestión de derechos y gestión de políticas.

Los permisos S3 detrás de este rol:
```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. **Escritor y Lector**: Leer, editar, modificar, eliminar los archivos en los buckets.

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

3. **Escritor**: Leer, editar, modificar, eliminar los archivos en los buckets.

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

4. **Lector**: Leer los archivos en los buckets y descargarlos.

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

Al hacer clic en el nombre de un bucket, accede primero a la pestaña '__Archivos__' para ver su contenido:

<img src={S3Files} />

En la pestaña '__Configuración__', puede ver los detalles de la información de su bucket S3:

<img src={S3Params} />

A continuación, tiene:

1. El nombre del bucket S3,
2. Su región,
3. El número de objetos que contiene y el tamaño en bytes del bucket,
4. Su punto final,
5. Los parámetros de ciclo de vida que definen la expiración de los objetos en el bucket. '__0__' corresponde a una retención infinita.

Puede modificar el parámetro de retención a través del botón '__Modificar__' del ciclo de vida:

<img src={S3Lifecycle} />

Finalmente, puede modificar su tipología de acceso.

## Limitaciones de acceso a sus buckets S3

Es muy fácil configurar las restricciones de acceso a sus buckets S3. Al crear un bucket, tiene la opción de elegir entre tres configuraciones de acceso:

<img src={S3CreatePopup_001} />

- Acceso **Privado**: Por defecto, el acceso está limitado a las direcciones IP específicas de Cloud Temple.
- Acceso **Público**: El acceso está abierto a todas las direcciones de Internet (especialmente a través de la regla 0.0.0.0/0). Desaconsejamos esta configuración debido a sus implicaciones de seguridad.
- Acceso **Personalizado**: Esta opción le permite especificar las direcciones IPv4 o los rangos de subredes que desea autorizar:

<img src={S3CreatePopup_002} />

*El soporte para IPv6 está previsto para el primer semestre de 2025.*

## Eliminación de un bucket S3

La eliminación de un bucket se realiza en las acciones asociadas al bucket eligiendo la opción __'Eliminar'__.

<img src={S3Delete} />

_**ATENCIÓN: La eliminación es definitiva y no hay forma de recuperar los datos.**_


## ¿Cómo se factura la oferta S3 de Cloud Temple?

El precio es mensual, por Gio de almacenamiento, facturado mensualmente. Sin embargo, la plataforma contabiliza el uso por hora y realiza la facturación en una base mensual de 720 horas.

Por ejemplo, si consume durante el mes 30 Gio durante 1 hora y luego nada, y luego unos días más tarde 30Gio durante 2 horas, la factura mensual será de *( Precio (1 x 30Gio) + 2 x Precio (30Gio) ) / 720* para el mes considerado. La facturación es a término vencido.