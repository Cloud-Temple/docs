---
title: Tutoriales
---
import sessions from '@site/docs/bastion/images/sessions.png'
import sessions2 from '@site/docs/bastion/images/sessions2.png'
import appliances from '@site/docs/bastion/images/appliances.png'
import ouvrirAppliance from '@site/docs/bastion/images/ouvrir_appliance.png'
import creerSession from '@site/docs/bastion/images/creer_session.png'
import creerSession2 from '@site/docs/bastion/images/creer_session2.png'
import creerSession3 from '@site/docs/bastion/images/creer_session3.png'
import ouvrirSession from '@site/docs/bastion/images/ouvrir_session.png'
import ouvrirSession2 from '@site/docs/bastion/images/ouvrir_session2.png'
import modifierSession from '@site/docs/bastion/images/modifier_session.png'
import modifierSession2 from '@site/docs/bastion/images/modifier_session2.png'
import supprimerSession from '@site/docs/bastion/images/supprimer_session.png'

Estos tutoriales le ayudan a implementar y gestionar un Bastion Cloud Temple desde la Consola.

## Prerrequisitos

1. Haber suscrito el producto Cloud Temple (suscripción Appliance Bastion).
2. Los equipos a administrar deben ser accesibles desde la red donde se despliega la Appliance Bastion.
3. Contar con los permisos del módulo Bastion.
4. En el caso de un despliegue de la Appliance on-premise, los flujos correspondientes deben estar abiertos.

## Interfaz

Una vez conectado al portal web Console, acceda a la pestaña "Bastion" del menú izquierdo.

<img src={sessions} />

La pestaña « Equipos » le permite consultar la lista de sus equipos. Un equipo corresponde a una configuración de conexión mediante una Appliance Bastion. Para cada equipo, se indican su nombre, sus etiquetas, su descripción, la Appliance asociada, el tipo de conexión (SSH o RDP), la IP del host y, por último, la configuración del teclado.

Puede filtrar la lista de sus equipos según las etiquetas asignadas y un motor de búsqueda permite buscar una sesión por su nombre.

<img src={sessions2} />

La pestaña « Appliances » le muestra la lista de sus Appliances Bastion. Para cada Appliance, se especifican el nombre y la descripción.

Dispone de un motor de búsqueda para permitirle buscar una Appliance por su nombre.

<img src={appliances} />

## Desplegar una Appliance

Antes de poder desplegar una Appliance, es necesario realizar una solicitud de suscripción a una Appliance a través de una solicitud al soporte.

## Abrir una conexión hacia un equipo

En la pestaña « Appliances », haga clic en la barra de acciones del Appliance que desea abrir. A continuación, haga clic en el botón « Abrir ».

<img src={ouvrirAppliance} />

Complete a continuación la información necesaria para la conexión:

    - Selección del protocolo (SSH ou RDP) ;
    - Dirección IP del host a administrar ;
    - Información de identificación ;
    - Configuración del teclado.

Luego, haga clic en « Conectar » para abrir el Appliance. Se abrirá entonces la consola de la máquina virtual a administrar.

## Guardar un equipo

Para acceder con regularidad a un equipo que deba administrarse, es más conveniente crear una configuración de equipo, la cual solo solicitará su nombre de usuario y contraseña en cada conexión.

Para ello, diríjase a la pestaña « Equipos » del menú « Bastion » y, a continuación, haga clic en el botón « Nuevo equipo ».

<img src={creerSession} />

A continuación, complete la información necesaria para crear su equipo:

    - Nombre del equipo ;
    - Descripción ;
    - Appliance asociada ;
    - Tipo de protocolo (SSH o RDP) ;
    - Dirección IP del host ;
    - Idioma del teclado.

<img src={creerSession2} />

Debería aparecer una notificación que indique la creación de su configuración de equipo en la esquina superior derecha de la página. La configuración se agregará posteriormente a la lista de sus equipos.

Para crear una nueva conexión, también puede acceder a la pestaña « Appliances » haciendo clic en la barra de acciones de la Appliance a la que desea asociar una configuración de equipo.

<img src={creerSession3} />

## Conectarse a un equipo

Diríjase a la pestaña « Equipos » de la pestaña « Bastión ». Haga clic en la barra de acciones del equipo que desea abrir y, a continuación, haga clic en el botón « Abrir ».

<img src={ouvrirSession} />

En cada conexión al equipo, solo necesita proporcionar sus credenciales de autenticación.

<img src={ouvrirSession2} />

Una vez introducidas sus credenciales, aparecerá una notificación que confirma el inicio de la sesión y se abrirá la consola hacia su máquina virtual.

## Modificar la configuración de un equipo

Vaya a la pestaña « Equipos » de la sección « Bastion », haga clic en la barra de acciones del equipo que desea modificar y haga clic en el botón « Modificar ».

<img src={modifierSession} />

A continuación, puede modificar el nombre del equipo, su descripción, el Appliance asociado, el protocolo (SSH o RDP), la dirección IP del host o el idioma del teclado.

<img src={modifierSession2} />

## Eliminar una configuración de equipo

Acceda a la pestaña « Equipos » de la sección « Bastión », haga clic en la barra de acciones del equipo que desea eliminar y haga clic en el botón « Eliminar ».

<img src={supprimerSession} />