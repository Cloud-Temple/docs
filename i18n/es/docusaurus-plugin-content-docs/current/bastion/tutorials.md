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

Estos tutoriales le ayudan a implementar y gestionar un Bastión Cloud Temple desde el portal Shiva.

## Requisitos previos

1. Tener suscrito la oferta Cloud Temple (suscrito Appliance Bastión).
2. Los equipos a administrar deben ser accesibles desde la red donde se despliega el Appliance Bastión.
3. Tener permisos en el módulo Bastión.
4. En el caso de un despliegue del Appliance onpremise, los flujos correspondientes deben estar abiertos.

## Interfaz

Una vez conectado al portal web Shiva, vaya a la pestaña "Bastión" del menú izquierdo.

<img src={sessions} />

La pestaña "Equipos" le permite consultar la lista de sus equipos. Un equipo corresponde a una configuración de conexión a través de un Appliance Bastión. Para cada equipo, se indica su nombre, sus etiquetas, su descripción, el Appliance al que está asociado, el tipo de conexión (SSH o RDP), la IP del host y la configuración del teclado.

Puede filtrar la lista de sus equipos según las etiquetas que les correspondan, y un motor de búsqueda permite buscar una sesión por su nombre.

<img src={sessions2} />

La pestaña "Appliances" le da la lista de sus Appliances Bastión. Para cada Appliance, se especifica el nombre del Appliance y su descripción.

Un motor de búsqueda está disponible para que pueda buscar un Appliance por su nombre.

<img src={appliances} />

## Implementar un Appliance

Antes de poder implementar un Appliance, debe realizar una solicitud de suscripción a un Appliance a través de un ticket al soporte.

## Abrir un flujo hacia un equipo

En la pestaña "Appliances", haga clic en la barra de acción del Appliance que desee abrir. Luego, haga clic en el botón "Abrir".

<img src={ouvrirAppliance} />

A continuación, ingrese la información necesaria para la conexión:

    - Selección del protocolo (SSH o RDP);
    - Dirección IP del host a administrar;
    - Información de identificación;
    - Configuración del teclado.

Haga clic a continuación en "Conectar" para abrir el Appliance. A continuación, se abre la consola de la máquina virtual a administrar.

## Guardar un equipo

Para acceder con regularidad a un equipo a administrar, es más adecuado crear una configuración de equipo, que solo requerirá su nombre de usuario y contraseña en cada conexión.

Para ello, vaya a la pestaña "Equipos" del menú "Bastión" y haga clic en el botón "Nuevo equipo".

<img src={creerSession} />

A continuación, ingrese la información necesaria para crear su equipo:

    - Nombre del equipo;
    - Descripción;
    - Appliance asociado;
    - Tipo de protocolo (SSH o RDP);
    - Dirección IP del host;
    - Idioma del teclado.

<img src={creerSession2} />

Una notificación le indicará la creación de su configuración de equipo que aparecerá en la parte superior derecha de la página. La configuración se añade a continuación a la lista de sus equipos.

También puede crear una nueva conexión pasando por la pestaña "Appliances" haciendo clic en la barra de acción del Appliance al que desee asociar una configuración de equipo.

<img src={creerSession3} />

## Conectarse a un equipo

Vaya a la pestaña "Equipos" de la sección "Bastión". Haga clic en la barra de acciones del equipo que desee abrir y haga clic en el botón "Abrir".

<img src={ouvrirSession} />

En cada conexión al equipo, solo necesita ingresar sus datos de autenticación.

<img src={ouvrirSession2} />

Después de ingresar sus credenciales, aparece una notificación confirmando el inicio de la sesión y se abre la consola hacia su máquina virtual.

## Modificar una configuración de equipo

Vaya a la pestaña "Equipos" de la sección "Bastión", haga clic en la barra de acción del equipo que desee modificar y haga clic en el botón "Modificar".

<img src={modifierSession} />

A continuación, puede modificar el nombre del equipo, su descripción, el Appliance asociado, el protocolo (SSH o RDP), la dirección IP del host o el idioma del teclado.

<img src={modifierSession2} />

## Eliminar una configuración de equipo

Vaya a la pestaña "Equipos" de la sección "Bastión", haga clic en la barra de acción del equipo que desee eliminar y haga clic en el botón "Eliminar".

<img src={supprimerSession} />