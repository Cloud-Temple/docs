---
title: Guide de démarrage
---

Ce guide de démarrage vous présente comment demander la création d'une Appliance et comment enregistrer une nouvelle session et s'y connecter.

## Prérequisitos

1. Haber suscrito a la oferta Cloud Temple (suscripción Appliance Bastion).
2. Los equipos a administrar deben ser accesibles desde la red donde está desplegado el Appliance Bastion.
3. Tener los derechos sobre el módulo Bastion.
4. En el marco de un despliegue del Appliance on-premise, los flujos correspondientes deben estar abiertos.

## Los flujos necesarios para el funcionamiento del producto Bastion

Varios flujos son necesarios para el buen funcionamiento del Appliance Bastion.

### La pasarela bastion
| Fuente                   | Destino                                    | Protocolo |
|--------------------------|--------------------------------------------|-----------|
| Appliance bastion cliente | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### Flujos de administración RDP

| Fuente                   | Destino                   | Protocolo |
|--------------------------|---------------------------|-----------|
| Appliance bastion cliente | Las instancias a administrar | TCP/3389  |

### Flujos de administración SSH

| Fuente                   | Destino                   | Protocolo |
|--------------------------|---------------------------|-----------|
| Appliance bastion cliente | Las instancias a administrar | TCP/22    |

## Solicitar la creación de un Appliance
Antes de poder desplegar un Appliance, se debe hacer una solicitud de suscripción a un Appliance a través de una solicitud al soporte.
El soporte es accesible en la consola Shiva desde el icono de boya en la barra en la parte superior derecha de la ventana.

![](images/shiva_support.png)

## Registrar un equipo

Para acceder regularmente a un equipo que necesita ser administrado, es más adecuado crear una sesión, que solo requerirá su nombre de usuario y contraseña en cada conexión.

Para ello, diríjase a la pestaña « Equipos » del menú « Bastion », luego, haga clic en el botón « Nuevo equipo ».

![](images/creer_session.png)

Luego ingrese la información necesaria para crear su equipo:

    - Nombre del equipo;
    - Descripción;
    - Appliance asociado;
    - Tipo de protocolo (SSH o RDP);
    - Dirección IP del host;
    - Configuración del teclado.

![](images/creer_session2.png)

Debería aparecer una notificación indicándole la creación del equipo en la parte superior derecha de la página. La sesión se agrega luego a la lista de sus equipos.

Para crear un nuevo equipo, también puede pasar por la pestaña « Appliances » haciendo clic en la barra de acciones del Appliance al que desea asociar un equipo.

![](images/creer_session3.png)

## Conectarse a un equipo

Diríjase a la pestaña « Equipos » de la pestaña « Bastion ». Haga clic en la barra de acciones del equipo que desea abrir, y haga clic en el botón « Abrir ».

![](images/ouvrir_session.png)

En cada conexión al equipo, solo necesita ingresar su información de autenticación.

![](images/ouvrir_session2.png)

Después de haber ingresado sus credenciales, aparece una notificación confirmando el inicio de la conexión a su equipo y se abre la consola hacia su máquina virtual.