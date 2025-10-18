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

## Requisitos previos

1. Haber suscrito a la oferta Cloud Temple (suscripción Appliance Bastion).
2. Los equipos a administrar deben ser accesibles desde la red donde se despliega la Appliance Bastion.
3. Tener los permisos en el módulo Bastion.
4. En el caso de un despliegue de la Appliance onpremise, los flujos correspondientes deben estar abiertos.

## Los flujos necesarios para el funcionamiento del producto Bastion

Varios flujos son necesarios para el correcto funcionamiento de la Appliance Bastion.

### La puerta de enlace bastión

| Fuente                   | Destino                                 | Protocolo |
|--------------------------|-----------------------------------------|-----------|
| Appliance bastión cliente | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### Flujos de administración RDP

| Fuente                   | Destino                 | Protocolo |
|--------------------------|-------------------------|-----------|
| Appliance bastión cliente | Las instancias a administrar | TCP/3389  |

### Flujos de administración SSH

| Fuente                   | Destino                 | Protocolo |
|--------------------------|-------------------------|-----------|
| Appliance bastión cliente | Las instancias a administrar | TCP/22    |

## Solicitar la creación de una Appliance

Antes de poder desplegar una Appliance, es necesario realizar una solicitud de suscripción a una Appliance a través de un ticket al soporte.
El soporte está disponible en la consola Shiva desde el icono de balsa en la barra superior a la derecha de la ventana.

<img src={shivaSupport} />

## Registrar un equipo

Para acceder con regularidad a un equipo a administrar, es más conveniente crear una sesión, que solo requerirá su nombre de usuario y contraseña en cada conexión.

Para ello, vaya al menú « Equipos » del menú « Bastion », y haga clic en el botón « Nuevo equipo ».

<img src={creerSession} />

A continuación, complete la información necesaria para crear su equipo:

    - Nombre del equipo;
    - Descripción;
    - Appliance asociada;
    - Tipo de protocolo (SSH o RDP);
    - Dirección IP del host;
    - Configuración del teclado.

<img src={creerSession2} />

Una notificación le indicará la creación del equipo que aparecerá en la parte superior derecha de la página. La sesión se agregará luego a la lista de sus equipos.

También puede crear un nuevo equipo a través del menú « Appliances » haciendo clic en la barra de acciones de la Appliance a la que desea asociar un equipo.

<img src={creerSession3} />

## Conectarse a un equipo

Vaya al menú « Equipos » del menú « Bastion ». Haga clic en la barra de acciones del equipo que desea abrir y haga clic en el botón « Abrir ».

<img src={ouvrirSession} />

En cada conexión al equipo, solo necesita proporcionar sus credenciales de autenticación.

<img src={ouvrirSession2} />

Después de ingresar sus identificadores, una notificación confirmando el inicio de la conexión a su equipo aparecerá y se abrirá la consola hacia su máquina virtual.