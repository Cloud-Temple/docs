---
title: Guía de inicio rápido
---
import shivaSupport from './images/shiva_support.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'

Esta guía de inicio rápido le muestra cómo solicitar la creación de un Appliance y cómo registrar una nueva sesión y conectarse a ella.

## Requisitos previos

1. Haber suscrito a la oferta de Cloud Temple (suscripción Appliance Bastion).
2. Los equipos a administrar deben ser accesibles desde la red donde está desplegado el Appliance Bastion.
3. Tener los derechos sobre el módulo Bastion.
4. En el marco de un despliegue del Appliance on-premise, los flujos correspondientes deben estar abiertos.

## Los flujos necesarios para el funcionamiento del producto Bastion

Varios flujos son necesarios para el buen funcionamiento del Appliance Bastion.

### La pasarela bastion
| Fuente                    | Destino                                     | Protocolo |
|---------------------------|---------------------------------------------|-----------|
| Cliente appliance bastion | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### Flujos de administración RDP

| Fuente                    | Destino                    | Protocolo |
|---------------------------|----------------------------|-----------|
| Cliente appliance bastion | Las instancias a administrar | TCP/3389  |

### Flujos de administración SSH

| Fuente                    | Destino                    | Protocolo |
|---------------------------|----------------------------|-----------|
| Cliente appliance bastion | Las instancias a administrar | TCP/22    |

## Solicitar la creación de un Appliance
Antes de poder desplegar un Appliance, debe hacer una solicitud de suscripción a un Appliance mediante una solicitud al soporte.
El soporte es accesible en la consola Shiva desde el ícono de salvavidas en la barra en la parte superior derecha de la ventana.

<img src={shivaSupport} />

## Registrar un equipo

Para acceder regularmente a un equipo a administrar, es más adecuado crear una sesión, que solo requerirá su nombre de usuario y su contraseña en cada conexión.

Para ello, diríjase a la pestaña "Equipos" del menú "Bastion", luego, haga clic en el botón "Nuevo equipo".

<img src={creerSession} />

Luego, complete la información necesaria para la creación de su equipo:

    - Nombre del equipo;
    - Descripción;
    - Appliance asociado;
    - Tipo de protocolo (SSH o RDP);
    - Dirección IP del host;
    - Configuración del teclado.

<img src={creerSession2} />

Una notificación que indica la creación del equipo debería aparecer en la parte superior derecha de la página. La sesión se añade luego a la lista de sus equipos.

Para crear un nuevo equipo, también puede pasar por la pestaña "Appliances" haciendo clic en la barra de acciones del Appliance al que desea asociar un equipo.

<img src={creerSession3} />

## Conectarse a un equipo

Diríjase a la pestaña "Equipos" de la pestaña "Bastion". Haga clic en la barra de acciones del equipo que desea abrir, y haga clic en el botón "Abrir".

<img src={ouvrirSession} />

En cada conexión al equipo, solo necesita completar su información de autenticación.

<img src={ouvrirSession2} />

Después de ingresar sus credenciales, aparece una notificación que confirma el inicio de la conexión a su equipo y se abre la consola hacia su máquina virtual.
