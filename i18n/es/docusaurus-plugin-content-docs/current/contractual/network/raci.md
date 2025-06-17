---
title: Matriz de responsabilidad de red
---

### Conectividad de red del cliente

| Actividad                                                                                             | Rol Cliente | Rol Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|------------------|
| Suscribirse a una conectividad de red operador para acceder a un datacenter físico Cloud Temple (6) | __RA__      | __CI__           |
| Gestionar incidentes en los enlaces de red operador del cliente                                     | __RA__      |                  |
| Gestionar problemas en los enlaces de red operador del cliente                                      | __RA__      | __I__            |
| Gestionar capacidades en los enlaces de red operador del cliente                                     | __RA__      | __CI__           |

*(6) Cloud Temple asume la responsabilidad de la red en cuanto a su infraestructura backbone, sus puntos de colecta así como los puntos de interconexión datacenter, garantizando así la conectividad entre estos puntos y su red backbone. En la oferta de alojamiento en baía física, Cloud Temple asume la responsabilidad a partir del equipo situado en la parte superior del rack, comúnmente denominado "top of rack".*