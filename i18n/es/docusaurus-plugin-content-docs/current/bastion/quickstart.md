---
title: Guía de inicio
---
import creerSession from '@site/docs/bastion/images/creer_session.png'
import creerSession2 from '@site/docs/bastion/images/creer_session2.png'
import creerSession3 from '@site/docs/bastion/images/creer_session3.png'
import ouvrirSession from '@site/docs/bastion/images/ouvrir_session.png'
import ouvrirSession2 from '@site/docs/bastion/images/ouvrir_session2.png'

Esta guía de inicio presenta cómo activar el producto Bastion, registrar un equipo y conectarse a él.

## Prerrequisitos

1. Haber activado el producto Bastion para su organización.
2. Los equipos a administrar deben ser accesibles desde la red donde se ha desplegado la Appliance Bastion.
3. Contar con los permisos sobre el módulo Bastion.
4. En el caso de un despliegue de la Appliance onpremise, los flujos correspondientes deben estar abiertos.

## Los flujos necesarios para el funcionamiento del producto Bastion

Se requieren varios flujos para el correcto funcionamiento del Appliance Bastion.

### La pasarela bastión

| Origen                   | Destino                                 | Protocolo |
|--------------------------|-----------------------------------------|-----------|
| Appliance bastión cliente| 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### Flujo de administración RDP

| Origen                   | Destino                     | Protocolo |
|--------------------------|-----------------------------|-----------|
| Aparato bastión del cliente | Las instancias a administrar | TCP/3389  |

### Flujo de administración SSH

| Origen                   | Destino                     | Protocolo |
|--------------------------|-----------------------------|-----------|
| Appliance bastión del cliente | Las instancias a administrar | TCP/22    |

<a id="demander-la-création-dune-appliance"></a>

## Activar el producto Bastion

El producto Bastion se activa en autoservicio desde la vista Organización de la consola Cloud Temple. También puede recurrir a su contacto comercial habitual.

## Registrar un equipo

Para acceder regularmente a un equipo que deba administrarse, es más adecuado registrarlo: solo se le solicitarán su nombre de usuario y su contraseña en cada conexión.

Para ello, vaya a la pestaña « Equipos » del menú « Bastión » y, a continuación, haga clic en el botón « Nuevo equipo ».

<img src={creerSession} />

A continuación, complete la información necesaria para crear su equipo :

    - Nombre del equipo ;
    - Descripción ;
    - Appliance asociada ;
    - Tipo de protocolo (SSH o RDP) ;
    - Dirección IP del host ;
    - Configuración del teclado.

<img src={creerSession2} />

Debería aparecer una notificación que indique la creación del equipo en la esquina superior derecha de la página. El equipo se añade posteriormente a la lista de sus equipos.

Para crear un nuevo equipo, también puede acceder a la pestaña « Appliances » haciendo clic en la barra de acciones de la Appliance a la que desea asociar un equipo.

<img src={creerSession3} />

## Conectarse a un equipo

Vaya a la pestaña « Equipos » de la pestaña « Bastión ». Haga clic en la barra de acciones del equipo que desea abrir y, a continuación, en el botón « Abrir ».

<img src={ouvrirSession} />

En cada conexión al equipo, solo deberá proporcionar sus credenciales de autenticación.

<img src={ouvrirSession2} />

Una vez introducidas sus credenciales, aparecerá una notificación que confirma el inicio de la conexión a su equipo y se abrirá la consola hacia su máquina virtual.