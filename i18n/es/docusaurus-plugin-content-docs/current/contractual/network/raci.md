---
title: Matriz de responsabilidad de Red
---

### Conectividad de red del cliente

| Actividad                                                                                                | Rol del Cliente | Rol de Cloud Temple |
|----------------------------------------------------------------------------------------------------------|----------------|---------------------|
| Suscribirse a una conectividad de red de operador para acceder a un datacenter físico de Cloud Temple (6) | __RA__         | __CI__              |
| Gestionar los incidentes en los enlaces de red de operadores del cliente                                 | __RA__         |                     |
| Gestionar los problemas en los enlaces de red de operadores del cliente                                  | __RA__         | __I__               |
| Gestionar las capacidades en los enlaces de red de operadores del cliente                                | __RA__         | __CI__              |

*(6) Cloud Temple asume la responsabilidad de la red en lo que respecta a su infraestructura troncal, sus puntos de recolección así como
los puntos de interconexión del datacenter, garantizando así la conectividad entre estos puntos y su red troncal.
En la oferta de alojamiento en rack físico, Cloud Temple asume la responsabilidad a partir del equipo situado en la parte superior del rack, comúnmente llamado "top of rack".*
