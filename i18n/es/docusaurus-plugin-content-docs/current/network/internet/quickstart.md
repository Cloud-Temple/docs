---
title: Guía de inicio rápido
---
import shivaInet_001 from './images/shiva_inet_001.png'
import shivaInet_002 from './images/shiva_inet_002.png'
import shivaInet_003 from './images/shiva_inet_003.png'
import shivaInet_004 from './images/shiva_inet_004.png'
import shivaInet_005 from './images/shiva_inet_005.png'
import shivaInet_008 from './images/shiva_inet_008.png'
import shivaInet_007 from './images/shiva_inet_007.png'

## Gestión de sus conectividades a Internet

La gestión de la conectividad se realiza a través del menú **'Red'** > **'Internet'**. Este menú centraliza la gestión de direcciones IP, ofreciendo dos categorías distintas:

1. **Direcciones IP Públicas**: se utilizan para exponer sus servicios en Internet, facilitando así los intercambios de datos entrantes y salientes.
2. **Direcciones IP de Interconexión**: estas direcciones permiten a sus pasarelas dirigir el tráfico hacia la red específica de Cloud Temple, asegurando una conexión segura y eficiente.

Las direcciones IP públicas permiten el acceso a Internet, mientras que las direcciones IP de interconexión utilizadas con el protocolo BGP4 aseguran conexiones seguras entre redes. Estas últimas facilitan intercambios fiables y seguros entre su tenant y la red de Cloud Temple. El uso conjunto de estas direcciones mejora la gestión del tráfico y refuerza la seguridad y el rendimiento de la red.

Aquí está la interfaz principal para la gestión de direcciones IP:

<img src={shivaInet_001} />

La pestaña de inicio corresponde a su ASN interno dedicado a su tenant. Indica especialmente la información importante para la configuración de su conectividad BGP.

### Direcciones IP públicas

Es posible ver y comentar los bloques y direcciones IP asociados a su tenant a través del IPAM integrado en la consola de Cloud Temple:

<img src={shivaInet_002} />

El pedido de direcciones IP públicas se realiza mediante el botón **'Solicitar IPs públicas'**:

<img src={shivaInet_003} />

La reserva y asignación de una dirección IP se realiza mediante el botón **'Reservar una dirección'**:

<img src={shivaInet_004} />

La modificación o eliminación de la reserva se realiza mediante los botones **'Acciones'**:

<img src={shivaInet_005} />

Eliminar una reserva significa que el recurso queda disponible para otro uso, pero sigue estando asignado y facturado al cliente.

En algunas líneas, el botón **'Acción'** no está disponible, lo que indica que las direcciones IP están reservadas y, por lo tanto, no están disponibles para su uso.

### Direcciones IP de interconexión

De la misma manera, puede ver y comentar los bloques de direcciones IP de interconexión. Puede visualizar las subredes de interconexión con la red de Cloud Temple y su uso:

<img src={shivaInet_008} />

Puede modificar fácilmente, como con las direcciones públicas, su uso en la gestión IPAM integrada:

<img src={shivaInet_007} />
