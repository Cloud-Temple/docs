---
title: Quickstart
---


## Listar todos los bucket S3 de su tenant

Puede acceder a todos sus buckets a través del menú '__Almacenamiento de objetos__' de la consola Cloud Temple:

![](images/S3_list_bucket.png)

Puede ver todas las cuentas creadas en su tenant y autorizadas para acceder al servicio S3 a través de la pestaña '__Cuentas de almacenamiento__'.

![](images/S3_accounts.png)

## Creación de una nueva cuenta de almacenamiento

La creación de una cuenta de almacenamiento en su tenant se realiza presionando el botón '__Nueva cuenta de almacenamiento__' en la parte superior derecha, en la pestaña '__Cuentas de almacenamiento__' :

![](images/S3_create_account.png)

La plataforma le proporciona entonces la clave de acceso y la clave secreta de su bucket:

![](images/S3_storage_keys.png)

__ATENCIÓN:__ Las claves secreta y de acceso se presentan una sola vez. Después de esta primera aparición, se vuelve imposible consultar de nuevo la clave secreta. Es por lo tanto esencial anotar esta información inmediatamente; de lo contrario, será necesario generar un nuevo par de claves.

La regeneración se realiza a nivel de las opciones de la clave eligiendo la opción "Restablecer clave de acceso".

![](images/S3_keyregen.png)


## Creación de un bucket S3 

La creación de un nuevo bucket se realiza haciendo clic en el botón '__Nuevo bucket__' en la parte superior derecha de la pantalla:

![](images/S3_create.png)

Entonces se muestra una ventana y debe proporcionar:

1. La **región** de creación de su bucket,
2. El **tipo** de bucket: rendimiento o archivado,
3. El **nombre** de su bucket (debe ser único).

![](images/S3_create_popup_001.png)

A partir del 3 de abril de 2024, la región disponible es **FR1** (París) y solo está disponible el tipo de rendimiento.

También debe elegir quién puede acceder a su bucket:

- Acceso **Privado**: Por defecto, el acceso está limitado a direcciones IP específicas de Cloud Temple.
- Acceso **Público**: El acceso está abierto a todas las direcciones de Internet (en particular a través de la regla 0.0.0.0/0). Desaconsejamos esta configuración debido a sus implicaciones en términos de seguridad.
- Acceso **Personalizado**: Esta opción le permite especificar las direcciones IPv4 o los rangos de subredes que desea autorizar.

## Asociar una cuenta de almacenamiento a un bucket

Las asociaciones de cuentas a los buckets se realizan en la pestaña '__Políticas__'

![](images/S3_account_assign.png)

Esta asociación permite dar acceso de la cuenta de almacenamiento al bucket. Hay tres roles:

1. **Mantenedor**: Derechos de lectura, escritura, gestión de derechos y gestión de políticas.
2. **Lector**: Leer los archivos en los buckets y descargarlos.
3. **Escritor**: Leer y editar, modificar, eliminar los archivos en los buckets.

![](images/S3_account_access.png)

## Navegar por un bucket S3

Cuando hace clic en el nombre de un bucket, tiene acceso primero a la pestaña '__Archivos__' para ver su contenido:

![](images/S3_files.png)

En la pestaña '__Configuraciones__' puede ver el detalle de la información de su bucket S3:

![](images/S3_params.png)

Tiene entonces:

1. El nombre del bucket S3,
2. Su región
3. La cantidad de objetos que contiene y el tamaño en bytes del bucket,
4. Su punto de acceso,
5. Los parámetros del ciclo de vida que definen en particular la expiración de los objetos del bucket. '__0__' corresponde a una retención infinita.

Puede modificar el parámetro de retención a través del botón '__Modificar__' del ciclo de vida:

![](images/S3_lifecycle.png)

Finalmente, puede modificar su tipología de acceso.

## Limitaciones de acceso a sus bucket S3

Es muy sencillo configurar las restricciones de acceso a sus buckets S3. Al crear un bucket, tiene la opción de elegir entre tres configuraciones de acceso:

![](images/S3_create_popup_001.png)

- Acceso **Privado**: Por defecto, el acceso está limitado a direcciones IP específicas de Cloud Temple.
- Acceso **Público**: El acceso está abierto a todas las direcciones de Internet (en particular a través de la regla 0.0.0.0/0). Desaconsejamos esta configuración debido a sus implicaciones en términos de seguridad.
- Acceso **Personalizado**: Esta opción le permite especificar las direcciones IPv4 o los rangos de subredes que desea autorizar:

![](images/S3_create_popup_002.png)

*El soporte IPv6 está previsto para el primer semestre de 2025.*

## Eliminación de un bucket S3

La eliminación de un bucket se realiza en las acciones asociadas al bucket eligiendo la opción __'Eliminar'__.

![](images/S3_delete.png)

_**ATENCIÓN: La eliminación es definitiva y no existe ningún medio para recuperar los datos.**_


## ¿Cómo se factura la oferta S3 de Cloud Temple?

El precio es un precio mensual, por GiB de almacenamiento, facturado mensualmente. Sin embargo, la plataforma contabiliza el uso por hora y realiza la facturación en una base mensual de 720 horas.

Por ejemplo, si consume en el mes 30 GiB durante 1 hora y luego nada, y luego unos días más tarde 30 GiB durante 2 horas, la factura mensual será de *( Precio (1 x 30 GiB) + 2 x Precio (30 GiB) ) / 720* en el mes considerado. La facturación es a término vencido.