---
title: Matriz de responsabilidad de red
displayed_sidebar: docSidebar
---

Esta matriz **RACI** define el reparto de responsabilidades entre el cliente y Cloud Temple para la conectividad de red.

## Definición de los diferentes roles

Aquí se recuerdan los diferentes roles del RACI:

| Rol | Descripción |
|---|---|
| (R) Realiza    | __R__ealiza el proceso |
| (A) Aprueba    | __A__prueba la realización del proceso |
| (C) Consultado | __C__onsultado durante el proceso |
| (I) Informado  | __I__nformado de los resultados del proceso (a través de las herramientas, el portal o la mensajería) |

## Conectividad de red del cliente

| Actividad                                                                                             | Rol Cliente | Rol Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Suscribirse a una conectividad de red de operador para acceder a un datacenter físico de Cloud Temple (1) | __RA__      | __CI__            |
| Gestionar incidentes en los enlaces de red de operadores del cliente                                          | __RA__      |                   |
| Gestionar problemas en los enlaces de red de operadores del cliente                                          | __RA__      | __I__             |
| Gestionar la capacidad de los enlaces de red de operadores del cliente                                          | __RA__      | __CI__            |

*(1) Cloud Temple asume la responsabilidad de la red en lo que respecta a su infraestructura backbone, sus puntos de agregación así como
los puntos de interconexión del datacenter, garantizando así la conectividad entre estos puntos y su red backbone.
En la oferta de alojamiento en rack físico, Cloud Temple asume la responsabilidad a partir del equipo ubicado en la parte superior del rack, comúnmente denominado "top of rack".*