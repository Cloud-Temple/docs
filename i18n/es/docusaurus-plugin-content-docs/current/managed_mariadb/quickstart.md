---
title: Guía de inicio
---

Bienvenido a la guía de inicio de **MariaDB Administrado** Cloud Temple.

El objetivo de esta sección es orientarle hacia los recursos necesarios para comenzar a utilizar su producto.

## Antes de comenzar

Asegúrese de contar con los accesos que le han sido proporcionados por Cloud-Temple.

Asegúrese de que los flujos de red estén abiertos hacia las direcciones IP que le han sido proporcionadas.

> **Prerrequisitos de despliegue** : Este despliegue requiere un clúster Kubernetes gestionado completamente instalado, con el stack Prometheus y Grafana configurado para contar con telemetría completa y el dashboard de Grafana asociado.

Cada clúster o servidor se despliega de forma aislada por el operador MariaDB en un namespace de Kubernetes dedicado.

## Acceder a su clúster MariaDB gestionado

Según el modelo de implementación elegido, dispone de uno o varios endpoints.

**StandAlone** : 1 único endpoint (1 única IP), accesible en el puerto 3306.

**MultiAZ** :

- 1 Endpoint Maxscale, accesible en el puerto 3306, capaz de distribuir sus consultas hacia las instancias más adecuadas (es el endpoint que debe priorizarse).
- 1 Endpoint R/W, accesible en el puerto 3306, que apunta a la instancia primaria, en lectura-escritura.
- 1 Endpoint R/O, accesible en el puerto 3306, que apunta a todas las instancias, en solo lectura.

## Sus permisos

No dispone de ningún permiso a nivel del motor de base de datos (ni `SUPER`, ni `ALL_PRIVILEGE`).

No puede reconfigurar el motor ni sus opciones, ni instalar `performance_schema`. (Recordatorio: además, se desaconseja activarlo en instancias inferiores al tamaño X-Large por motivos de recursos de RAM).

Las solicitudes de creación de bases de datos, usuarios o grants deben dirigirse a los equipos de Cloud-Temple.