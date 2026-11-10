---
title: Gestión de accesos a los buckets S3 desde la Consola Cloud Temple
---
import S3CustomAccess from '@site/docs/storage/oss/images/S3_access_custom.png'
import S3PrivateAccess from '@site/docs/storage/oss/images/S3_access_private.png'
import S3PublicAccess from '@site/docs/storage/oss/images/S3_access_public.png'

La interfaz de configuración de buckets ofrece tres modos de gestión de accesos según el tipo de restricción IP deseado:

### **Acceso Público**

<img src={S3PublicAccess} />

- Funcionamiento: No se aplica ninguna restricción de dirección IP.
- Consecuencia: El bucket es accesible desde todas las direcciones IP, sin filtrado.

### **Acceso privado (automático)**

<img src={S3PrivateAccess} />

- Funcionamiento: Todas las subredes CIDR asignadas al inquilino se añaden automáticamente por el editor, sin intervención manual.
- Especificidad de la Consola: Las direcciones de red (primera dirección del bloque) y de difusión (última dirección del bloque), que normalmente están reservadas en una red IP, también se añaden automáticamente.
- Consecuencia: El usuario no tiene que gestionar estas sutilezas, todo se tiene en cuenta automáticamente por la herramienta.

### **Acceso Custom (manual)**

<img src={S3CustomAccess} />

- Funcionamiento: El usuario debe proporcionar explícitamente todas las subredes CIDR, así como las direcciones de red y de difusión que se deben autorizar.
- Ejemplo: Si desea autorizar el prefijo `80.75.153.200/29`, también debe añadir explícitamente las direcciones `80.75.153.200/32` (dirección de red) y `80.75.153.207/32` (dirección de difusión) para que estas queden incluidas en la política de acceso.
- Consecuencia: Ofrece una libertad total, pero exige una configuración completa y rigurosa.

:::info

### Naturaleza de los prefijos CIDR proporcionados por Cloud Temple

Todos los prefijos CIDR proporcionados por Cloud Temple son prefijos de enrutamiento (route prefixes). Esto significa que, para estas subredes, **todas las direcciones que cubren, incluidas las direcciones de red y de difusión, pueden utilizarse como orígenes válidos** de acceso en la política. Por eso el editor de la Consola incluye sistemáticamente estas direcciones especiales en el modo Private.

Esta particularidad distingue su entorno de ciertas redes clásicas en las que estas direcciones están reservadas y no pueden utilizarse.
