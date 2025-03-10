---
title: Tutoriales
---
import sessions from './images/sessions.png'
import sessions2 from './images/sessions2.png'
import appliances from './images/appliances.png'
import ouvrirAppliance from './images/ouvrir_appliance.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'
import modifierSession from './images/modifier_session.png'
import modifierSession2 from './images/modifier_session2.png'
import supprimerSession from './images/supprimer_session.png'

Estos tutoriales te ayudan a desplegar y gestionar un Bastion Cloud Temple desde el portal Shiva.

## Prerrequisitos

1. Haberse suscrito a la oferta Cloud Temple (suscripción Appliance Bastion).
2. Los equipos a administrar deben ser accesibles desde la red donde se haya desplegado el Appliance Bastion.
3. Tener los permisos en el módulo Bastion.
4. En el caso de un despliegue del Appliance on-premise, los flujos correspondientes deben estar abiertos.

## Interfaz

Una vez conectado al portal web Shiva, dirígete a la pestaña "Bastion" del menú izquierdo.

<img src={sessions} />

La pestaña « Equipos » te permite consultar la lista de tus equipos. Un equipo corresponde a una configuración de
conexión a través de un Appliance Bastion. Para cada equipo, se indica su nombre, sus tags, su
descripción, el Appliance que tiene asociado, el tipo de conexión (SSH o RDP), la IP del host y finalmente la configuración del teclado.

Puedes filtrar la lista de tus equipos según los tags que les hayan sido asignados, y un motor de búsqueda permite buscar una sesión por su nombre.

<img src={sessions2} />

La pestaña « Appliances » te da la lista de tus Appliances Bastion. Para cada Appliance, se especifican su nombre y su descripción.

Un motor de búsqueda está disponible para permitirte buscar un Appliance por su nombre.

<img src={appliances} />

## Desplegar un Appliance
Antes de poder desplegar un Appliance, es necesario realizar una solicitud de suscripción a un Appliance a través de una solicitud al soporte.

## Abrir un flujo hacia un equipo
En la pestaña « Appliances », haz clic en la barra de acción del Appliance que deseas abrir. Luego haz clic en el botón « Abrir ».

<img src={ouvrirAppliance} />

Luego, proporciona la información necesaria para la conexión:

    - Elección del protocolo (SSH o RDP);
    - Dirección IP del host a administrar;
    - Información de autenticación;
    - Configuración del teclado.

Luego haz clic en « Conectar » para abrir el Appliance. Entonces se abre la consola de la máquina virtual a administrar.

## Registrar un equipo

Para acceder regularmente a un equipo a administrar, es más adecuado crear una configuración de equipo, la cual solo requerirá tu nombre de usuario y contraseña en cada conexión.

Para ello, dirígete a la pestaña « Equipos » del menú « Bastion » y luego haz clic en el botón « Nuevo equipo ».

<img src={creerSession} />


Luego, proporciona la información necesaria para la creación de tu equipo:

    - Nombre del equipo;
    - Descripción;
    - Appliance asociado;
    - Tipo de protocolo (SSH o RDP);
    - Dirección IP del host;
    - Idioma del teclado.

<img src={creerSession2} />


Debería aparecer una notificación indicándote la creación de tu configuración de equipo en la parte superior derecha de la página. La configuración se añade luego a la lista de tus equipos.

Para crear una nueva conexión, también puedes pasar por la pestaña « Appliances » haciendo clic en la barra de acción del Appliance al que deseas asociar una configuración de equipo.

<img src={creerSession3} />

## Conectarse a un equipo

Dirígete a la pestaña « Equipos » de la pestaña « Bastion ». Haz clic en la barra de acción del equipo que deseas abrir y haz clic en el botón « Abrir ».

<img src={ouvrirSession} />

En cada conexión al equipo, solo necesitas proporcionar tu información de autenticación.

<img src={ouvrirSession2} />

Después de ingresar tus credenciales, aparece una notificación confirmando el inicio de la sesión y se abre la consola hacia tu máquina virtual.

## Modificar una configuración de equipo

Dirígete a la pestaña « Equipos » de la sección « Bastion », haz clic en la barra de acción del equipo que deseas modificar y haz clic en el botón « Modificar ».

<img src={modifierSession} />

Luego puedes modificar el nombre del equipo, su descripción, el Appliance asociado, el protocolo (SSH o RDP), la dirección IP del host o el idioma del teclado.

<img src={modifierSession2} />

## Eliminar una configuración de equipo

Dirígete a la pestaña « Equipos » de la sección « Bastion », haz clic en la barra de acción del equipo que deseas eliminar y haz clic en el botón « Eliminar ».

<img src={supprimerSession} />
