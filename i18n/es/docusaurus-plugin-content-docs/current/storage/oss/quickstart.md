---
title: Guía de inicio rápido
---

## Listar todos los buckets S3 de tu tenant

Puedes acceder a todos tus buckets a través del menú '__Almacenamiento de Objetos__' de la consola Cloud Temple:

![](images/S3_list_bucket.png)

Puedes ver todas las cuentas creadas en tu tenant y autorizadas a acceder al servicio S3 a través de la pestaña '__Cuentas de almacenamiento__'.

![](images/S3_accounts.png)

## Creación de una nueva cuenta de almacenamiento

La creación de una cuenta de almacenamiento en tu tenant se realiza pulsando el botón '__Nueva cuenta de almacenamiento__' en la parte superior derecha, en la pestaña '__Cuentas de almacenamiento__':

![](images/S3_create_account.png)

La plataforma te proporciona entonces la clave de acceso y la clave secreta de tu bucket:

![](images/S3_storage_keys.png)

__ATENCIÓN:__ Las claves secreta y de acceso se presentan una sola vez. Después de esta primera aparición, se vuelve imposible consultar de nuevo la clave secreta. Por lo tanto, es esencial anotar esta información inmediatamente; de lo contrario, será necesario generar un nuevo par de claves.

La regeneración se realiza a nivel de las opciones de la clave eligiendo la opción "Reiniciar clave de acceso".

![](images/S3_keyregen.png)


## Creación de un bucket S3

La creación de un nuevo bucket se realiza haciendo clic en el botón '__Nuevo bucket__' en la parte superior derecha de la pantalla:

![](images/S3_create.png)

Aparece una ventana y debes proporcionar:

1. La **región** de creación de tu bucket,
2. El **tipo** de bucket: rendimiento o archivo,
3. El **nombre** de tu bucket (debe ser único).

![](images/S3_create_popup_001.png)

A 3 de abril de 2024, la región disponible es **FR1** (París) y solo está disponible el tipo de rendimiento.

Debes también elegir quién puede acceder a tu bucket:

- Acceso **Privado**: Por defecto, el acceso está limitado a direcciones IP específicas de Cloud Temple.
- Acceso **Público**: El acceso está abierto a todas las direcciones de Internet (particularmente a través de la regla 0.0.0.0/0). Desaconsejamos esta configuración debido a sus implicaciones en términos de seguridad.
- Acceso **Personalizado**: Esta opción le permite especificar las direcciones IPv4 o los rangos de subredes que desea autorizar.

## Asociación de una cuenta de almacenamiento a un bucket

Las asociaciones de cuenta a buckets se realizan en la pestaña '__Políticas__'

![](images/S3_account_assign.png)

Esta asociación permite dar acceso del cuenta de almacenamiento al bucket. Hay cuatro roles:

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

2. **Escritor y Lector**: Leer, editar, modificar y eliminar archivos en los buckets.

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

3. **Escritor**: Leer, editar, modificar y eliminar archivos en los buckets.

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

4. **Lector**: Leer y descargar archivos en los buckets.

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

## Explorar un bucket S3

Cuando haces clic en el nombre de un bucket, primero accedes a la pestaña '__Archivos__' para ver su contenido:

![](images/S3_files.png)

En la pestaña '__Configuración__' puedes ver los detalles de tu bucket S3:

![](images/S3_params.png)

Aquí puedes ver:

1. El nombre del bucket S3,
2. Su región,
3. El número de objetos que contiene y el tamaño en bytes del bucket,
4. Su punto de acceso,
5. Los parámetros del ciclo de vida que, en particular, definen la expiración de los objetos del bucket. '__0__' corresponde a una retención infinita.

Puedes modificar el parámetro de retención a través del botón '__Modificar__' del ciclo de vida:

![](images/S3_lifecycle.png)

Finalmente, puedes modificar su tipología de acceso.

## Limitaciones de acceso a tus buckets S3

Es muy sencillo configurar las restricciones de acceso a tus buckets S3. Al crear un bucket, tienes la opción de elegir entre tres configuraciones de acceso:

![](images/S3_create_popup_001.png)

- Acceso **Privado**: Por defecto, el acceso está limitado a direcciones IP específicas de Cloud Temple.
- Acceso **Público**: El acceso está abierto a todas las direcciones de Internet (particularmente a través de la regla 0.0.0.0/0). Desaconsejamos esta configuración debido a sus implicaciones en términos de seguridad.
- Acceso **Personalizado**: Esta opción te permite especificar las direcciones IPv4 o los rangos de subredes que deseas autorizar:

![](images/S3_create_popup_002.png)

*El soporte IPv6 está previsto para el primer semestre de 2025.*

## Eliminación de un bucket S3

La eliminación de un bucket se realiza en las acciones asociadas al bucket eligiendo la opción __'Eliminar'__.

![](images/S3_delete.png)

_**ATENCIÓN: La eliminación es definitiva y no hay manera de recuperar los datos.**_


## ¿Cómo se factura la oferta S3 de Cloud Temple?

El precio es mensual, por GiB de almacenamiento, facturado mensualmente. Sin embargo, la plataforma contabiliza el uso por hora y realiza la facturación sobre una base mensual de 720 horas.

Por ejemplo, si consumes en el mes 30 GiB durante 1 hora y luego nada, y después de unos días 30 GiB durante 2 horas, la factura mensual será de *(Precio (1 x 30 GiB) + 2 x Precio (30 GiB)) / 720* para el mes en cuestión. La facturación es a término vencido.
