---
conceptos
---

## Allocation de una dirección IP pública Provider Aggregated (PA)

En este escenario, se utilizan direcciones IP públicas asignadas a Cloud Temple, que son alquiladas para sus uso.

La creación de la conectividad internet y la asignación de las direcciones IP públicas asociadas se realiza mediante una solicitud de servicio que incluye:

    El nombre de tu Organización
    El nombre de un contacto junto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    La tamaño del subnet deseado (mínimo /29 en IPv4 y /64 en IPv6)
    Si no han sido proporcionados, se pedirán las informaciónes RIPE (contacto administrativo incluido) por parte del soporte

La entrega de la conexión a Internet se realiza mediante el protocolo BGP4, en respuesta al soporte, que proporcionará las siguientes informaciones:

    *prefix public*
    *prefix de interconexión*
    *gateway any-cast*
    *Subnet IP*
    *AS local*
    *AS de Cloud Temple*
    *timers de mantenimiento y tiempo de vida del nodo*
    *direcciones de los servidores de routación asociadas a tu tenant*.

El uso del protocolo BGP4 garantiza un enrutamiento eficiente de tus flujos Internet hacia la puerto activo de tu arquitectura, especialmente en escenarios de despliegue multi-zonas de disponibilidad, como es el caso de clusters de firewalls distribuidos entre dos zonas de disponibilidad.

## Bloques IPv4

1. **Bloque IPv4**
   - Un bloc IPv4 est une série d'adresses IP numériques qui sont gérées par un seul opérateur de réseau (ORG).
   - Chaque bloc contient un nombre limité d'adresses, généralement entre 16 et 32 millions.

2. **Allocation des Bloques IPv4**
   - Les organismes de gestion des adresses IP (RIRs) comme ARIN, RIPE NCC ou APNIC sont responsables de l'allocation des blocs IPv4 aux opérateurs de réseaux.
   - L'allocation se fait généralement en fonction du besoin et de la disponibilité des adresses.

3. **Types de Bloques IPv4**
   - **Bloque réservée**: Utilisées pour des adresses spécifiques, telles que les adresses d'en-tête routage (RIP, OSPF).
   - **Bloque privé**: Utilisées par les petits réseaux locaux (LAN) et les entreprises. Ces blocs ne sont pas attribués directement aux opérateurs de réseaux publics.
   - **Bloque publique**: Attribuée aux grands opérateurs de réseau publics, permettant l'accès à Internet.

4. **Exemple de Bloc IPv4**
   ```
   192.0.0.0 - 192.255.255.255
   ```
   Ce bloc est attribué par ARIN et couvre environ 65 000 adresses IP.

5. **Fragmentation des Bloques IPv4**
   - Les opérateurs de réseaux peuvent diviser un seul bloc en plusieurs sous-blocs pour mieux gérer l'allocation et la gestion des adresses.
   - Par exemple, 192.0.0.0 peut être fragmenté en 16384 sous-blocs de 65 536 adresses chacun (192.0.0.0/8).

6. **Réutilisation des Bloques IPv4**
   - Les opérateurs de réseaux peuvent réutiliser des blocs d'adresses IP qui ne sont pas utilisés, en particulier les bloques privés ou réservés.
   - Cette pratique est réglementée par les RIRs pour éviter la sur-allocation et assurer une gestion efficace des adresses.

7. **Gestion des Bloques IPv4**
   - Les opérateurs de réseaux doivent demander l'allocation d'un bloc à un RIR, en fournissant des justifications pour le besoin et la durée prévue.
   - Une fois alloué, ils doivent gérer efficacement les adresses IP dans leur bloc, en évitant l'exhaustion et en optimisant l'utilisation.

8. **Transition vers IPv6**
   - Avec la croissance de l'Internet et l'épuisement des adresses IPv4, de nombreux opérateurs de réseaux commencent à planifier ou à mettre en œuvre la transition vers les adresses IP v6.
   - Les blocs IPv4 seront progressivement réservés pour les services critiques et les applications nécessitant une grande stabilité d'adresse, tandis que le reste du parc d'adresses se tournera vers l'IPv6.

9. **Documentation des Bloques IPv4**
   - Les informations sur les blocs IPv4, y compris leur allocation et utilisation, sont documentées dans divers registres publics tels que le RIRs ou les bases de données d'adresses IP.
   - Ces documents fournissent une transparence et une responsabilité pour la gestion des adresses IP.

10. **Impact sur les Applications**
    - Les applications dépendant des adresses IPv4 doivent être conçues pour gérer potentiellement plusieurs blocs d'adresses, en particulier dans les environnements multi-org ou avec des stratégies de réutilisation.

En résumé, les blocs IPv4 jouent un rôle crucial dans la gestion et l'allocation des adresses IP numériques, permettant ainsi le fonctionnement des réseaux Internet. Leur allocation, utilisation et gestion sont soumises à des règles strictes pour assurer une utilisation efficace et durable des ressources IP.

### Offer of IPv4 Version 1

__*This offer is no longer being marketed as of May 2, 2024*__

The delivery of IPv4 addresses will be provided within the limits of our available stock for our clients, with a minimum block of 8 IPv4 (/29 or 255.255.255.248).

You can view the affected IP address blocks in the 'Public IPs' menu under the Networks menu on the top left sidebar.

| Reference                             | Unité  | SKU                          |
| ------------------------------------- | ------ | ---------------------------- |
| Network - Dedicated Public IPv4 Ranges | 8 IPv4 | csp:(region):network:ipv4:v1 |

### Offer of IPv4 Version 2

The delivery of an IPv4 is provided within the **available stock limits** for our clients, per IP address.

You can view the affected blocks of addresses in the 'Public IPv4' menu under the Network section on the top left sidebar.

| Reference                     | Unité   | SKU                          |
| ----------------------------- | ------   | ---------------------------- |
| Dedicated IPv4 Network        | 1 IPv4  | csp:(region):network:ipv4:v2 |

## Blocs de IPv6

La comanda para blocs de IPv6 se realiza a través del menú __*Internet*__ del apartado __*Redes*__.

Es posible visualizar los rangos de direcciones IPv6 asignados en el menú __*'IPs públicas'*__ del menú Redes, ubicado en la barra lateral superior.

| Referencia                             | Unidad   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Red - Rango de direcciones IPv6 dedicadas | 64 IPv6 | csp:(región):red:ipv6:v1 |

## Direcciones IP públicas proveedor independientes (PI)

Si tiene sus propias direcciones IP proveedor independientes (PI), puede anunciarlas dentro del Sistema Autónomo de Cloud Temple. Esto le permite seguir utilizando sus propias direcciones IP en la infraestructura de Cloud Temple y facilitar las migraciones.

Para ello, realice una solicitud de servicio indicando:

    El nombre de su Organización
    El nombre de un contacto junto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del teniente
    La bloque de direcciones IP PI que posee y que desea anunciar
    Si aún no se han proporcionado, las informaciónes RIPE asociadas serán solicitadas por el soporte

No hay una facturación específica para los clientes que utilizan direcciones IP proveedor independientes.

### Reserva de ancho de banda internet

La capacidad de banda ancha del Internet se puede reservar en niveles de 100 Mbps. La capacidad máxima disponible para una router es de 1 Gbps, potencialmente limitada por las características técnicas de su router.

La facturación se realiza al 95% de la pérdida en el período de facturación, generalmente un mes. Por lo tanto, puede disfrutar ocasionalmente de un "burst" por encima de su capacidad reservada.

| Referencia                                  | Unidad    | SKU                                         |
| -------------------------------------------- | -------- | ------------------------------------------ |
| Red - Banda ancha reservada                  | 100 Mbps | csp:(región):red:tráfico:internet:v1     |

__*Nota:*__
*No hay facturación volumétrica de tipo "costo de salida". Usted solo pagará la reserva de banda ancha.*

## Anti-DDoS

Un ataque por no tolerancia de servicio (DDoS) busca debilitar o inactivar un servicio a través del sobrecarga excesiva mediante tráfico ilegítimo.

La protección Anti-DDoS de Cloud Temple te protege contra los actores maliciosos y **está activa sin costo adicional contra ataques voluminosos**: el filtrado se realiza a priori por nuestros socios telefónicos.