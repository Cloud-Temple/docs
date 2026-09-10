---
title: Matriz de responsabilidad de red
displayed_sidebar: docSidebar
---

### Conectividad de red del cliente

| Actividad                                                                                             | Rol Cliente | Rol Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Suscribirse a una conectividad de red de operador para acceder a un datacenter físico de Cloud Temple (6) | __RA__      | __CI__            |
| Gestionar incidentes en los enlaces de red de operadores del cliente                                          | __RA__      |                   |
| Gestionar problemas en los enlaces de red de operadores del cliente                                          | __RA__      | __I__             |
| Gestionar la capacidad de los enlaces de red de operadores del cliente                                          | __RA__      | __CI__            |

*(6) Cloud Temple asume la responsabilidad de la red en lo que respecta a su infraestructura backbone, sus puntos de agregación así como
los puntos de interconexión del datacenter, garantizando así la conectividad entre estos puntos y su red backbone.
En la oferta de alojamiento en rack físico, Cloud Temple asume la responsabilidad a partir del equipo ubicado en la parte superior del rack, comúnmente denominado "top of rack".*