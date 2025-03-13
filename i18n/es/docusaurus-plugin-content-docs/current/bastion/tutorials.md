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

Estos tutoriales le ayudan a desplegar y gestionar un Bastion Cloud Temple desde el portal Shiva.

## Requisitos previos

1. Haber suscrito a la oferta Cloud Temple (suscripción Appliance Bastion).
2. Los equipos a administrar deben ser accesibles desde la red donde está desplegado el Appliance Bastion.
3. Tener los derechos sobre el módulo Bastion.
4. En el marco de un despliegue del Appliance on-premise, los flujos correspondientes deben estar abiertos.

## Interfaz

Una vez conectado al portal web Shiva, diríjase a la pestaña "Bastion" del menú izquierdo.

<img src={sessions} />

La pestaña "Equipos" le permite consultar la lista de sus equipos. Un equipo corresponde a una configuración de conexión a través de un Appliance Bastion. Para cada equipo, se indica su nombre, sus etiquetas, su descripción, el Appliance asociado, el tipo de conexión (SSH o RDP), la IP del host y finalmente la configuración del teclado.

Puede filtrar la lista de sus equipos según las etiquetas que les han sido asignadas, y un motor de búsqueda permite buscar una sesión por su nombre.

<img src={sessions2} />

La pestaña "Appliances" le proporciona la lista de sus Appliances Bastion. Para cada Appliance, se especifica el nombre y la descripción del Appliance.

Un motor de búsqueda está disponible para permitirle buscar un Appliance por su nombre.

<img src={appliances} />

## Desplegar un Appliance

Antes de poder desplegar un Appliance, es necesario realizar una solicitud de suscripción a un Appliance a través de una solicitud al soporte.

## Abrir un flujo hacia un equipo

En la pestaña "Appliances", haga clic en la barra de acción del Appliance que desea abrir. Luego haga clic en el botón "Abrir".

<img src={ouvrirAppliance} />

A continuación, proporcione la información necesaria para la conexión:

    - Elección del protocolo (SSH o RDP);
    - Dirección IP del host a administrar;
    - Información de autenticación;
    - Configuración del teclado.

Luego haga clic en "Conectar" para abrir el Appliance. Se abre entonces la consola de la máquina virtual a administrar.

## Registrar un equipo

Para acceder regularmente a un equipo a administrar, es más adecuado crear una configuración de equipo, que solo requerirá su nombre de usuario y contraseña en cada conexión.

Para ello, diríjase a la pestaña "Equipos" del menú "Bastion", luego haga clic en el botón "Nuevo equipo".

<img src={creerSession} />

A continuación, proporcione la información necesaria para la creación de su equipo:

    - Nombre del equipo;
    - Descripción;
    - Appliance asociado;
    - Tipo de protocolo (SSH o RDP);
    - Dirección IP del host;
    - Idioma del teclado.

<img src={creerSession2} />

Debería aparecer una notificación indicando la creación de su configuración de equipo en la parte superior derecha de la página. La configuración se añade luego a la lista de sus equipos.

Para crear una nueva conexión, también puede pasar por la pestaña "Appliances" haciendo clic en la barra de acción del Appliance al que desea asociar una configuración de equipo.

<img src={creerSession3} />

## Conectarse a un equipo

Diríjase a la pestaña "Equipos" de la pestaña "Bastion". Haga clic en la barra de acción del equipo que desea abrir y haga clic en el botón "Abrir".

<img src={ouvrirSession} />

En cada conexión al equipo, solo necesita proporcionar su información de autenticación.

<img src={ouvrirSession2} />

Después de ingresar sus credenciales, aparece una notificación confirmando el inicio de la sesión y se abre la consola hacia su máquina virtual.

## Modificar una configuración de equipo

Diríjase a la pestaña "Equipos" de la sección "Bastion", haga clic en la barra de acción del equipo que desea modificar y haga clic en el botón "Modificar".

<img src={modifierSession} />

Luego puede modificar el nombre del equipo, su descripción, el Appliance asociado, el protocolo (SSH o RDP), la dirección IP del host o el idioma del teclado.

<img src={modifierSession2} />

## Eliminar una configuración de equipo

Diríjase a la pestaña "Equipos" de la sección "Bastion", haga clic en la barra de acción del equipo que desea eliminar y haga clic en el botón "Eliminar".

<img src={supprimerSession} />
