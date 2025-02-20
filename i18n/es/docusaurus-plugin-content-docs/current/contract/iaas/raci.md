---
title: Matrice de responsabilidad IaaS
---

Voici le modèle **RACI** définissant la répartition des responsabilités entre le client et Cloud Temple pour l'utilisation des infrastructures IaaS de Cloud Temple.

## Définition des différents rôles

Nous rappelons ici les différents rôles du RACI :

| Rôle         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Réalise  | __R__éalise le processus                                                              |
| (A) Approuve | __A__pprouve la réalisation du processus                                              |
| (C) Consulte | __C__onsulté pendant le processus                                                     |
| (I) Informé  | __I__nformé des résultats du processus (via l'outillage, le portail ou la messagerie) |

## Définition votre besoin

| Activité                                                                                       | Rôle Client | Rôle Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Définir l'architecture globale de votre plateforme Cloud Temple                                | __RA__      | __CI__            | 
| Définir le nombre de tenants et le nombre de zone de disponibilité pour chaque tenant          | __RA__      | __CI__            | 
| Définir votre stratégie globale de reprise ou de continuité d'activité                         | __RA__      | __CI__            | 
| Dimensionner correctement votre plateforme Cloud Temple (calcul, stockage, réseau, backup,...) | __RA__      | __CI__            | 
| Souscrire aux services avec les informations nécessaires                                       | __RA__      | __I__             | 

## Mise en œuvre initiale de vos tenants Cloud Temple

| Activité                                                                                                     | Rôle Client | Rôle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer la mise en oeuvre des **datacenters physiques**                                                      |             | __RA__            | 
| Assurer la mise en oeuvre des infrastructures **calcul**                                                     | __I__       | __RA__            | 
| Assurer la mise en oeuvre des infrastructures **stockage**                                                   | __I__       | __RA__            | 
| Assurer la mise en oeuvre de la connectivité au **réseau backbone(1)**                                       | __I__       | __RA__            | 
| Acquérir et maintenir les licences logiciels essentiels pour le fonctionnement de la plateforme Cloud Temple |             | __RA__            | 
| Implémenter la configuration de base de vos tenants Cloud Temple                                             | __CI__      | __RA__            | 
| Implémenter la configuration initiale pour le service de sauvegarde                                          | __CI__      | __RA__            |
| *S'ils sont souscrit :* implémenter la configuration réseau initiale pour les services Internet et Firewall  | __CI__      | __RA__            |
| Offrir l'assistance requise pour la prise en main de vos environnements Cloud Temple                         | __I__       | __RA__            | 
| Effectuer les ajustements de configuration finaux du service après sa livraison                              | __RA__      | __C__             | 
| Configurer un référentiel d'authentification externe pour la console Cloud Temple                            | __RA__      | __C__             | 
| Créer les utilisateurs de chaque tenant dans la console Cloud Temple et affecter les droits                  | __RA__      |                   | 
| Valider la conformité de la plateforme livrée avec le référentiel SecNumCloud                                | __I__       | __RA__            |
| Valider la conformité de la plateforme livrée avec les spécifications requises                               | __RA__      | __CI__            |

*(1) Le réseau backbone constitue l'infrastructure centrale de Cloud Temple, offrant une colonne vertébrale sur laquelle 
reposent les réseaux clients spécifiques, lesquels sont intégrés et pris en charge par cette infrastructure principale.*

## Intégrer votre système d'information dans vos environnements Cloud Temple

| Activité                                                                                                                      | Rôle Client | Rôle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Créer, installer, mettre à jour vos machines virtuelles                                                                       | __RA__      |                   | 
| Installer et configurer les logiciels et middlewares sur vos machines virtuelles                                              | __RA__      |                   | 
| Acheter et détenir les licences et les droits d'utilisation <br/>pour les systèmes d'exploitation de vos machines virtuelles  | __RA__      |                   | 
| Configurer le réseau pour chacune vos machines virtuelles                                                                     | __RA__      |                   |
| S'assurer que chaque machine virtuelle est associée à un plan de sauvegarde cohérent                                          | __RA__      | __C__             | 
| S'assurer que chaque machine virtuelle est associée à un <br/>plan de reprise d'activité ou de continuité d'activité cohérent | __RA__      | __C__             | 
| Implémenter une stratégie de protection antivirale sur vos machines virtuelles                                                | __RA__      |                   | 
| Mettre en place une solution de métrologie et de surveillance sur vos machines virtuelles                                     | __RA__      |                   | 
| Définir la politique de TAG de vos machines virtuelles                                                                        | __RA__      |                   | 

## Operaciones recurrentes

### Gestión de acceso e identidades

| Activité                                                                                                                             | Rôle Client | Rôle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer l'accessibilité du service Console Cloud Temple et de l'API associée                                                         |             | __RA__            |
| Assurer l'accessibilité du système d'information déployé sur vos machines virtuelles                                                 | __RA__      |                   |
| Gérer les habilitations physiques et logiques des équipes Cloud Temple aux infrastructures SecNumCloud.                              |             | __RA__            |
| Administrer les accès et la politique de sécurité associée liés à l'interface de la console Cloud Temple et à son API                | __RA__      |                   |
| Administrer les accès et la politique de sécurité associée au système d'information<br/> hébergé au sein de vos tenants Cloud Temple | __RA__      |                   |

### mantenimiento en condición operativa y de seguridad

Les activités visant à maintenir en condition opérationnelle et sécuritaire pour les infrastructures et services 
proposés par Cloud Temple, dans le cadre de son offre IaaS, sont réalisées dans l'objectif de conformité à la qualification SecNumCloud.

| Activité                                                                                                          | Rôle Client | Rôle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer le maintien en condition opérationnelle des infrastructures **datacenters physiques**                     | __I__       | __RA__            | 
| Assurer le maintien en condition de sécurité des infrastructures **datacenters physiques**                        | __I__       | __RA__            | 
| Assurer le maintien en condition opérationnelle des infrastructures **calcul**                                    | __I__       | __RA__            | 
| Assurer le maintien en condition de sécurité des infrastructures **calcul (2)**                                   | __RA__      | __CI__            | 
| Assurer le maintien en condition opérationnelle des infrastructures **stockage**                                  | __I__       | __RA__            | 
| Assurer le maintien en condition de sécurité des infrastructures **stockage**                                     | __I__       | __RA__            | 
| Assurer le maintien en condition opérationnelle des infrastructures **réseaux backbone**                          | __I__       | __RA__            | 
| Assurer le maintien en condition de sécurité des infrastructures **réseaux backbone**                             | __I__       | __RA__            |
| Assurer le maintien en condition opérationnelle des machines virtuelles déployées dans les tenants client **(3)** | __RA__      |                   |
| Assurer le maintien en condition de sécurité des machines virtuelles déployées dans les tenants client **(3)**    | __RA__      |                   |

| Asegurar el mantenimiento operativo de los middlewares desplegados en los tenants cliente                | __RA__      |                   |
| Asegurar el mantenimiento de seguridad de los middlewares desplegados en los tenants cliente                   | __RA__      |                   |

*(2) Cloud Temple proporciona regularmente las versiones más recientes del sistema operativo para sus hipervisores. 
No obstante, dado que Cloud Temple no está informado de las especificidades de sus entornos de producción y de los requisitos 
relacionados con sus cargas de trabajo, __la decisión de proceder a la actualización del sistema operativo de sus hipervisores, 
lo que implica un reinicio, le corresponde a usted__. Esta operación puede realizarse a través de la consola Cloud Temple o vía la API.
Hay servicios profesionales disponibles si desea que Cloud Temple se encargue de ciertas operaciones.*

*(3) Cloud Temple ofrece paquetes de licencias para cortafuegos (Fortinet, Stormshield) y balanceadores de carga (HAProxy), y 
trabaja en colaboración con sus equipos para la configuración inicial durante la fase de implementación. Sin embargo, 
la responsabilidad del mantenimiento operativo y de seguridad recae sobre usted durante la fase de operación 
habitual. Hay servicios profesionales disponibles si desea que Cloud Temple se encargue de ciertas operaciones.*

### Gestión de cambios, incidentes, problemas y capacidades

| Actividad                                                                                                              | Rol Cliente | Rol Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Gestionar los incidentes en las infraestructuras **datacenters físicos**                                                 | __I__       | __RA__            |
| Gestionar los problemas en las infraestructuras **datacenters físicos**                                                 |             | __RA__            |
| Gestionar las capacidades en las infraestructuras **datacenters físicos**                                                 |             | __RA__            |
| Gestionar los incidentes en las infraestructuras **cálculo**                                                                | __I__       | __RA__            |
| Gestionar los problemas en las infraestructuras **cálculo**                                                                |             | __RA__            |
| Gestionar las capacidades en las infraestructuras **cálculo**                                                                | __RA__      | __CI__            |
| Gestionar los incidentes en las infraestructuras **almacenamiento**                                                              | __I__       | __RA__            |
| Gestionar los problemas en las infraestructuras **almacenamiento**                                                              |             | __RA__            |
| Gestionar las capacidades en las infraestructuras **almacenamiento**                                                              | __RA__      | __CI__            |
| Gestionar los incidentes en las infraestructuras **red backbone**                                                       | __I__       | __RA__            |
| Gestionar los problemas en las infraestructuras **red backbone**                                                       |             | __RA__            |
| Gestionar las capacidades en las infraestructuras **red backbone**                                                       |             | __RA__            |
| Implementar una nueva máquina virtual o crear un nuevo entorno aplicativo dentro de un tenant cliente | __RA__      |                   |
| Modificar la configuración de las máquinas virtuales desplegadas                                                           | __RA__      |                   |
| Eliminar una máquina virtual desplegada                                                                              | __RA__      |                   |
| Tomar la decisión de añadir, modificar o retirar recursos en la plataforma Cloud Temple                | __RA__      | __CI__            |
| Ejecutar la decisión de modificación de recursos en la plataforma Cloud Temple                                    | __I__       | __RA__            |
| Aplicar las etiquetas a las máquinas virtuales conforme a la política definida                                        | __RA__      |                   |

### Gestión del rendimiento

| Actividad                                                                                                                                              | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Asegurar la supervisión del buen funcionamiento y la fiabilidad de todos los equipos implicados en la prestación del servicio calificado SecNumCloud | __I__       | __RA__            |
| Asegurar el seguimiento del rendimiento de los recursos físicos de cálculo, almacenamiento y red puestos a disposición de sus tenants __(4)__                  | __RI__      | __A__             |
| Supervisar el rendimiento de las máquinas virtuales que soportan sus entornos                                                                      | __RA__      | __I__             |

*(4) La plataforma Cloud Temple adopta una filosofía centrada en __la provisión de infraestructuras dedicadas__ para las necesidades de __cálculo__ (con blades físicos), de __almacenamiento__ (a través de LUNs dedicadas en los SANs) 
y de __red__ (incluyendo cortafuegos y balanceadores de carga). Estos recursos dedicados se ponen a disposición del cliente, cuya utilización 
y carga resultante dependen directamente del uso que haga de ellos. Corresponde, por tanto, al cliente implementar y gestionar los sistemas de supervisión 
y metrología necesarios para asegurar el seguimiento del funcionamiento óptimo de su sistema de información.*

### Gestión de la copia de seguridad y de la recuperación de actividad en la copia de seguridad integrada

| Actividad                                                                                                                                  | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Asegurar el mantenimiento operativo en las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple **(5)** |             | __RA__            |
| Asegurar el mantenimiento de seguridad en las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple                | __I__       | __RA__            |
| Gestionar los incidentes en las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple                                         | __I__       | __RA__            |
| Gestionar los problemas en las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple                                         |             | __RA__            |
| Gestionar las capacidades en las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple                                         | __AI__      | __RC__            |
| Asegurar el mantenimiento operativo en la solución de copia de seguridad elegida dentro de sus tenants por el cliente **(6)**       | __RA__      |                   |
| Asegurar el mantenimiento de seguridad en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                  | __RA__      |                   |
| Gestionar los incidentes en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                                            | __RA__      |                   |
| Gestionar los problemas en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                                            | __RA__      |                   |
| Gestionar las capacidades en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                                            | __RA__      | __CI__            |
| Gestionar el ciclo de vida de las políticas de copia de seguridad                                                                                      | __RA__      |                   |
| Asegurarse de que las políticas de copia de seguridad sean coherentes con el ciclo de vida de los datos                                              | __RA__      |                   |
| Asegurarse de que los planes de continuidad de actividad o de recuperación de actividad sean coherentes con el ciclo de vida de los datos                | __RA__      |                   |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia de copia de seguridad                                                   | __RA__      |                   |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia<br/> de recuperación de actividad o de continuidad de actividad          | __RA__      | __CI__            |

*(5) Al 1 de enero de 2024, la solución de copia de seguridad integrada en la plataforma Cloud Temple es IBM Spectrum Protect Plus. 
Esta solución está completamente automatizada y puede gestionarse a través de la consola Cloud Temple o de la API Cloud Temple.*

### Gestión de la copia de seguridad y de la recuperación de actividad para las plataformas de terceros dentro de un tenant cliente

| Actividad                                                                                                                                  | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar el mantenimiento operativo de la solución de respaldo elegida dentro de sus tenencias por el cliente **(6)**                      | __RA__      |                   |
| Asegurar el mantenimiento de la seguridad en la solución de respaldo elegida dentro de sus tenencias por el cliente                        | __RA__      |                   |
| Gestionar incidentes en la solución de respaldo elegida dentro de sus tenencias por el cliente                                             | __RA__      |                   |
| Gestionar los problemas en la solución de respaldo elegida dentro de sus tenencias por el cliente                                          | __RA__      |                   |
| Gestionar las capacidades en la solución de respaldo elegida dentro de sus tenencias por el cliente                                        | __RA__      | __CI__            |
| Gestionar el ciclo de vida de las políticas de respaldo                                                                                    | __RA__      |                   |
| Asegurarse de que las políticas de respaldo sean coherentes con el ciclo de vida de los datos                                              | __RA__      |                   |
| Asegurarse de que los planes de continuidad de negocio o de recuperación de desastres sean coherentes con el ciclo de vida de los datos    | __RA__      |                   |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia de respaldo                                                          | __RA__      |                   |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia<br/> de recuperación de desastres o de continuidad de negocio        | __RA__      | __CI__            |

*(6) Esto se refiere a cualquier solución de respaldo adicional implementada en los entornos del cliente y gestionada por este. 
Cloud Temple ofrece servicios profesionales para quienes deseen delegar algunas operaciones a Cloud Temple.* 

### Gestión de la documentación y del contrato

| Actividad                                                                                                                                                           | Rol Cliente | Rol Cloud Temple |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar la gestión comercial y contractual del cliente, incluyendo la elaboración de presupuestos, procesamiento de pedidos y gestión de la facturación            | __I__       | __RA__            |
| Asegurar el seguimiento contractual del servicio, incluyendo la validación de presupuestos, el seguimiento de entregas y la supervisión de la facturación           | __RA__      | __I__             |
| Asegurar el mantenimiento y la disponibilidad del inventario de recursos proporcionados por Cloud Temple relacionado con la oferta SecNumCloud                      | __I__       | __RA__            |
| Asegurar el mantenimiento y la disponibilidad de la documentación técnica relacionada con la oferta SecNumCloud                                                     | __I__       | __RA__            |
| Asegurar el seguimiento del ciclo de vida de las máquinas virtuales desplegadas en sus entornos Cloud Temple<br/> a través de su CMDB (Configuration Management Database) | __RA__      |                   | 
| Mantener actualizada la política de acceso a la interfaz de la consola Cloud Temple o a la API Cloud Temple                                                         | __RA__      |                   |

### Gestión de registros

| Actividad                                                                                                                     | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Conservar y poner a disposición los registros de la plataforma IaaS Cloud Temple **(7)**                                      |             | __RA__            |
| Conservar y poner a disposición los registros del sistema de información<br/> alojado dentro de sus tenencias Cloud Temple    | __RA__      |                   |

*(7) A partir del primero de enero de 2024, la duración de retención de los registros de la plataforma será de un año.* 

## Conectividad a la red del cliente (mpls, fibra dedicada, ipsec, ...)

| Actividad                                                                                             | Rol Cliente | Rol Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Suscribirse a una conectividad de red operada para acceder a un centro de datos físico Cloud Temple (8) | __RA__      | __CI__            |
| Gestionar el plan de direccionamiento IP                                                               | __RA__      | __I__             |
| Gestionar los incidentes en los enlaces de red de los operadores del cliente                          | __RA__      |                   |
| Gestionar los problemas en los enlaces de red de los operadores del cliente                           | __RA__      | __CI__            |
| Gestionar las capacidades en los enlaces de red de los operadores del cliente                         | __RA__      | __CI__            |

*(8) Cloud Temple asume la responsabilidad de la red en relación con su infraestructura de backbone, sus puntos de recolección así como 
los puntos de interconexión de centros de datos, garantizando así la conectividad entre estos puntos y su red de backbone. 
En la oferta de alojamiento en baía física, Cloud Temple asume la responsabilidad a partir del equipo ubicado en la parte superior del rack, comúnmente llamado "top of rack".* 

## Reversibilidad

| Actividad                                                                                                                                                                                  | Rol Cliente | Rol Cloud Temple |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Planificar el proyecto de reversibilidad y elegir las infraestructuras destino                                                                                                               | __RA__      | __I__             |
| Implementar las operaciones de transición, ya sea que impliquen una extracción manual, el uso de API <br/>o cualquier otro método tercero compatible con la plataforma Cloud Temple.     | __RA__      | __I__             |
| Transferir los datos controlando el impacto de la migración en la calidad del servicio proporcionado <br/>por el sistema de información del cliente                                       | __RA__      |                   | 
| Desmantelar las configuraciones del Cloud Privado y las opciones asociadas al cliente, <br/>después de la terminación del contrato                                                          | __I__       | __RA__            |
| Realizar el borrado seguro de los datos en los soportes de almacenamiento y proporcionar una certificación                                                                                   | __I__       | __RA__            |