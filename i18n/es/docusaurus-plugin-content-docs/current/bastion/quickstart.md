---
title: Guía de inicio
---
import shivaSupport from './images/shiva_support.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'

Esta guía de inicio le presenta cómo solicitar la creación de una Appliance y cómo registrar una nueva sesión y conectarse a ella.

## Requis

1. Tener suscrito a la oferta Cloud Temple (suscripción Appliance Bastion).
2. Los equipos a administrar deben ser accesibles desde la red donde se despliega la Appliance Bastion.
3. Tener permisos sobre el módulo Bastion.
4. En el caso de un despliegue de la Appliance on-premise, los flujos correspondientes deben estar abiertos.

## Los flujos necesarios para el funcionamiento del producto Bastion

Varios flujos son necesarios para el correcto funcionamiento de la Appliance Bastion.

### Puerta de enlace bastión

| Origen                   | Destino                                 | Protocolo |
|--------------------------|-----------------------------------------|-----------|
| Appliance bastion cliente | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### RDP Administration Flow

| Source                   | Destination                 | Protocol  |
|--------------------------|-----------------------------|-----------|
| Client bastion appliance | Instances to administer     | TCP/3389  |

### SSH administration flow

| Source                   | Destination                 | Protocol  |
|--------------------------|-----------------------------|-----------|
| Client bastion appliance | Instances to administer       | TCP/22    |

## Solicitar la creación de una Appliance

Antes de poder desplegar una Appliance, es necesario realizar una solicitud de suscripción a una Appliance mediante un ticket al soporte técnico.  
El soporte técnico está disponible en la Consola a través del ícono de balsa en la barra superior derecha de la ventana.

<img src={shivaSupport} />

## Registrar un equipo

Para acceder con regularidad a un equipo que deba administrarse, es más conveniente crear una sesión, que solo le solicitará su nombre de usuario y contraseña en cada conexión.

Para ello, vaya al panel « Equipos » del menú « Bastión» y haga clic en el botón « Nuevo equipo ».

<img src={creerSession} />

A continuación, rellene la información necesaria para crear su equipo:

    - Nombre del equipo;
    - Descripción;
    - Appliance asociada;
    - Tipo de protocolo (SSH o RDP);
    - Dirección IP del host;
    - Configuración del teclado.

<img src={creerSession2} />

Debería aparecer una notificación en la parte superior derecha de la página indicando la creación del equipo. A continuación, la sesión se añadirá a la lista de sus equipos.

Para crear un nuevo equipo, también puede pasar por el panel « Appliances », haciendo clic en la barra de acciones de la Appliance a la que desea asociar un equipo.

<img src={creerSession3} />

## Conectarse a un equipo

Diríjase al panel « Equipos » del panel « Bastión ». Haga clic en la barra de acciones del equipo que desea abrir y luego en el botón « Abrir ».

<img src={ouvrirSession} />

En cada conexión al equipo, solo necesita proporcionar sus credenciales de autenticación.

<img src={ouvrirSession2} />

Después de ingresar sus identificadores, aparecerá una notificación que confirma el inicio de la conexión con su equipo y se abrirá la consola hacia su máquina virtual.