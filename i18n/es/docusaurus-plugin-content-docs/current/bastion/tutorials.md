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

Estos tutoriales le ayudan a implementar y gestionar un Bastión Cloud Temple desde la Consola.

## Requis

1. Tener suscrito a la oferta Cloud Temple (suscripción Appliance Bastion).
2. Los equipos a administrar deben ser accesibles desde la red donde se despliega la Appliance Bastion.
3. Tener permisos sobre el módulo Bastion.
4. En el caso de un despliegue de la Appliance on-premise, los flujos correspondientes deben estar abiertos.

## Interface

Una vez conectado al portal web Console, dirígete al menú izquierdo y selecciona la pestaña "Bastion".

<img src={sessions} />

La pestaña « Equipos » te permite consultar la lista de tus equipos. Un equipo corresponde a una configuración de conexión a través de una Appliance Bastion. Para cada equipo se indica su nombre, sus etiquetas, su descripción, la Appliance asociada, el tipo de conexión (SSH o RDP), la IP del host y finalmente la configuración del teclado.

Puedes filtrar la lista de tus equipos según las etiquetas asignadas, y un motor de búsqueda te permite buscar una sesión por su nombre.

<img src={sessions2} />

La pestaña « Appliances » te muestra la lista de tus Appliances Bastion. Para cada Appliance se especifica su nombre y su descripción.

Está disponible un motor de búsqueda para permitirte buscar una Appliance por su nombre.

<img src={appliances} />

## Deploy an Appliance

Before deploying an Appliance, you must submit a subscription request for an Appliance through a support ticket.

## Abrir un flujo hacia un equipo

En la pestaña « Appliances », haga clic en la barra de acciones del appliance que desea abrir. A continuación, pulse el botón « Abrir ».

<img src={ouvrirAppliance} />

A continuación, rellene la información necesaria para la conexión:

    - Selección del protocolo (SSH o RDP);
    - Dirección IP del host a administrar;
    - Información de identificación;
    - Configuración del teclado.

A continuación, pulse « Conectar » para abrir el appliance. Se abrirá entonces la consola de la máquina virtual que se va a administrar.

## Registrar un equipo

Para acceder con regularidad a un equipo que deba administrarse, es más conveniente crear una configuración de equipo, que solo le solicitará su nombre de usuario y su contraseña en cada conexión.

Para ello, vaya al panel « Equipos » del menú « Bastión», y haga clic en el botón « Nuevo equipo ».

<img src={creerSession} />

A continuación, rellene la información necesaria para crear su equipo:

    - Nombre del equipo;
    - Descripción;
    - Appliance asociada;
    - Tipo de protocolo (SSH o RDP);
    - Dirección IP del host;
    - Idioma del teclado.

<img src={creerSession2} />

Debería aparecer una notificación en la parte superior derecha de la página indicándole la creación de su configuración de equipo. A continuación, la configuración se añadirá a la lista de sus equipos.

Para crear una nueva conexión, también puede pasar por el panel « Appliances », haciendo clic en la barra de acciones de la Appliance a la que desee asociar una configuración de equipo.

<img src={creerSession3} />

## Conectarse a un equipo

Diríjase al panel « Equipos » dentro del panel « Bastión ». Haga clic en la barra de acciones del equipo que desea abrir y luego en el botón « Abrir ».

<img src={ouvrirSession} />

En cada conexión al equipo, solo necesita proporcionar sus credenciales de autenticación.

<img src={ouvrirSession2} />

Después de ingresar sus identificadores, aparecerá una notificación que confirma el inicio de la sesión y se abrirá la consola hacia su máquina virtual.

## Modificar la configuración de un equipo

Diríjase a la pestaña « Equipos » en la sección « Bastión», haga clic en la barra de acciones del equipo que desea modificar y luego en el botón « Modificar ».

<img src={modifierSession} />

A continuación, puede modificar el nombre del equipo, su descripción, la Appliance asociada, el protocolo (SSH o RDP), la dirección IP del host o el idioma del teclado.

<img src={modifierSession2} />

## Delete a device configuration

Go to the « Devices » tab in the « Bastion » section, click on the action bar of the device you want to delete, and click the « Delete » button.

<img src={supprimerSession} />
