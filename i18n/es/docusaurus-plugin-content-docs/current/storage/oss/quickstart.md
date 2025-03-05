---
title: Guía de inicio
---

## Listar todos los buckets S3 de su tenant

Puede acceder a todos sus buckets a través del menú '__Almacenamiento de Objetos__' en la consola de Cloud Temple:

![](images/S3_list_bucket.png)

Puede ver todas las cuentas creadas en su tenant y autorizadas para acceder al servicio S3 a través de la pestaña '__Cuentas de Almacenamiento__'.

![](images/S3_accounts.png)

## Creación de una nueva cuenta de almacenamiento

La creación de una cuenta de almacenamiento en su tenant se realiza pulsando el botón '__Nueva cuenta de almacenamiento__' en la parte superior derecha, en la pestaña '__Cuentas de Almacenamiento__':

![](images/S3_create_account.png)

La plataforma le proporciona la clave de acceso y la clave secreta de su bucket:

![](images/S3_storage_keys.png)

__ATENCIÓN:__ Las claves secreta y de acceso se presentan solo una vez. Después de esta primera aparición, es imposible consultar de nuevo la clave secreta. Es esencial anotar esta información de inmediato; de lo contrario, necesitará generar un nuevo par de claves.

La regeneración se realiza en las opciones de claves eligiendo la opción "Reiniciar clave de acceso".

![](images/S3_keyregen.png)


## Creación de un bucket S3

La creación de un nuevo bucket se realiza haciendo clic en el botón '__Nuevo bucket__' en la parte superior derecha de la pantalla:

![](images/S3_create.png)

Aparecerá una ventana donde debe proporcionar:

1. La **región** de creación de su bucket,
2. El **tipo** de bucket: de rendimiento o de archivo,
3. El **nombre** de su bucket (debe ser único).

![](images/S3_create_popup_001.png)

Hasta el 3 de abril de 2024, la región disponible es **FR1** (París) y solo está disponible el tipo de rendimiento.

También debe elegir quién puede acceder a su bucket:

- Acceso **Privado**: Por defecto, el acceso está limitado a direcciones IP específicas de Cloud Temple.
- Acceso **Público**: El acceso está abierto a todas las direcciones de Internet (notablemente a través de la regla 0.0.0.0/0). Sin embargo, siempre se requiere autenticación. No recomendamos esta configuración debido a sus implicaciones de seguridad.
- Acceso **Personalizado**: Esta opción le permite especificar las direcciones IPv4 o los rangos de subredes que desea autorizar.

## Asociación de una cuenta de almacenamiento a un bucket

Las asociaciones de cuentas a los buckets se realizan en la pestaña '__Políticas__'

![](images/S3_account_assign.png)

Esta asociación permite dar acceso de la cuenta de almacenamiento al bucket. Hay cuatro roles:

1. **Mantenedor**: Derechos de lectura, escritura, gestión de derechos y gestión de la política

Los permisos S3 detrás de este rol:
```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. **Escritor y Lector**: Leer y editar, modificar, eliminar archivos en los buckets.

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

3. **Escritor**: Leer y editar, modificar, eliminar archivos en los buckets.

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

4. **Lector**: Leer archivos en los buckets y descargarlos.

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

![](images/S3_account_access.png)

## Navegar por un bucket S3

Cuando hace clic en el nombre de un bucket, accede primero a la pestaña '__Archivos__' para ver su contenido:

![](images/S3_files.png)

En la pestaña '__Configuraciones__' puede ver el detalle de la información de su bucket S3:

![](images/S3_params.png)

Usted tendrá:

1. El nombre del bucket S3,
2. Su región
3. El número de objetos que contiene y el tamaño en bytes del bucket,
4. Su punto de terminación,
5. Los parámetros de ciclo de vida que definen, en particular, la expiración de los objetos del bucket. '__0__' corresponde a una retención infinita.

Puede modificar el parámetro de retención a través del botón '__Modificar__' del ciclo de vida:

![](images/S3_lifecycle.png)

Finalmente, puede modificar su tipología de acceso.

## Limitaciones de acceso a sus buckets S3

Es muy sencillo configurar las restricciones de acceso a sus buckets S3. Al crear un bucket, puede elegir entre tres configuraciones de acceso:

![](images/S3_create_popup_001.png)

- Acceso **Privado**: Por defecto, el acceso está limitado a direcciones IP específicas de Cloud Temple.
- Acceso **Público**: El acceso está abierto a todas las direcciones de Internet (notablemente a través de la regla 0.0.0.0/0). No recomendamos esta configuración debido a sus implicaciones de seguridad.
- Acceso **Personalizado**: Esta opción le permite especificar las direcciones IPv4 o los rangos de subredes que desea autorizar:

![](images/S3_create_popup_002.png)

*El soporte para IPv6 está previsto para el primer semestre de 2025.*

## Eliminación de un bucket S3

La eliminación de un bucket se realiza en las acciones asociadas al bucket eligiendo la opción __'Eliminar'__.

![](images/S3_delete.png)

_**ATENCIÓN: La eliminación es definitiva y no hay forma de recuperar los datos.**_


## ¿Cómo se factura la oferta S3 de Cloud Temple?

El precio es mensual, por Gio de almacenamiento, facturado mensualmente. Sin embargo, la plataforma contabiliza el uso por hora y realiza la facturación sobre una base mensual de 720 horas.

Por ejemplo, si consume en el mes 30 Gio durante 1 hora y luego nada, y unos días después 30 Gio durante 2 horas, la factura mensual será *( Precio (1 x 30Gio) + 2 x Precio (30Gio) ) / 720* en el mes considerado. La facturación es a término vencido.