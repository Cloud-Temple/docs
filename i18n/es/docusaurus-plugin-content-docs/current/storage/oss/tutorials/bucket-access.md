---
title: Gestión de accesos a los buckets S3 desde la Consola Cloud Temple
---
import S3CustomAccess from '../images/S3_access_custom.png'
import S3PrivateAccess from '../images/S3_access_private.png'
import S3PublicAccess from '../images/S3_access_public.png'

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

### **Custom Access (manual)**

<img src={S3CustomAccess} />

  - How it works: The user must explicitly provide all CIDR ranges as well as the network and broadcast addresses to be authorized.
  - Example: If you want to authorize the prefix `80.75.153.200/29`, you must also explicitly add the addresses `80.75.153.200/32` (network address) and `80.75.153.207/32` (broadcast address) so that these are included in the access policy.
  - Consequence: Offers full flexibility, but requires complete and rigorous configuration.

:::info

### Nature of the CIDR prefixes provided by Cloud Temple

All CIDR prefixes provided by Cloud Temple are [translate:route prefixes]. This means that for these address ranges, **all addresses they cover—including network and broadcast addresses—are usable as valid source addresses** in access policies. This is why the Console editor systematically includes these special addresses in Private mode.

This characteristic distinguishes your environment from certain traditional networks, where these addresses are reserved and not usable.