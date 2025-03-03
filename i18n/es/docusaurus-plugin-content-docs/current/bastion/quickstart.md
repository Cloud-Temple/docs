---
title: Guide de démarrage
---


Ce guide de démarrage vous présente comment demander la création d'une Appliance et comment enregistrer une nouvelle session et s'y connecter.

## Prérequisitos

1. Tener una suscripción a la oferta de Cloud Temple (suscripción Appliance Bastion).
2. Los equipos a administrar deben ser accesibles desde la red donde se despliega el Appliance Bastion.
3. Tener los derechos sobre el módulo Bastion.
4. En el caso de un despliegue del Appliance onpremise, los flujos correspondientes deben estar abiertos.


## Los flujos necesarios para el funcionamiento del producto Bastion

Se necesitan varios flujos para el buen funcionamiento del Appliance Bastion.

### La passerelle bastion
| Source                   | Destination                                 | Protocole |
|--------------------------|---------------------------------------------|-----------|
| Appliance bastion client | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### Flujo de administración RDP

| Source                   | Destination                 | Protocole |
|--------------------------|-----------------------------|-----------|
| Appliance bastion client | Les instances à administrer | TCP/3389  |

### Flujo de administración SSH

| Source                   | Destination                 | Protocole |
|--------------------------|-----------------------------|-----------|
| Appliance bastion client | Les instances à administrer | TCP/22    |


## Solicitar la creación de un Appliance
Antes de poder desplegar un Appliance, se debe solicitar una suscripción a un Appliance a través de una solicitud al soporte.
El soporte es accesible en la consola Shiva desde el ícono de salvavidas en la barra en la parte superior derecha de la ventana.

![](images/shiva_support.png)


## Registrar un equipo

Para acceder regularmente a un equipo a administrar, es más adecuado crear una sesión, que solo requerirá su nombre de usuario y contraseña en cada conexión.

Para ello, diríjase a la pestaña « Equipements » del menú « Bastion », luego haga clic en el botón « Nouveau équipement ».

![](images/creer_session.png)


Luego, ingrese la información necesaria para la creación de su equipo:

    - Nombre del equipo;
    - Descripción;
    - Appliance asociado;
    - Tipo de protocolo (SSH o RDP);
    - Dirección IP del host;
    - Configuración del teclado.

![](images/creer_session2.png)


Debería aparecer una notificación indicándole la creación del equipo en la parte superior derecha de la página. La sesión luego se añade a la lista de sus equipos.

Para crear un nuevo equipo, también puede ir a la pestaña « Appliances » haciendo clic en la barra de acción del Appliance al cual desea asociar un equipo.

![](images/creer_session3.png)

## Conectarse a un equipo

Diríjase a la pestaña « Equipements » de la pestaña « Bastion ». Haga clic en la barra de acciones del equipo que desea abrir y haga clic en el botón « Ouvrir ».

![](images/ouvrir_session.png)

En cada conexión al equipo, solo necesitará proporcionar su información de autenticación.

![](images/ouvrir_session2.png)

Después de ingresar sus credenciales, aparece una notificación confirmando el inicio de la conexión a su equipo y se abre la consola hacia su máquina virtual.