---
title: Guía de inicio
---

Bienvenido a la guía de inicio de **MariaDB Administrado** de Cloud Temple.

El objetivo de esta sección es orientarle hacia los recursos necesarios para comenzar a utilizar su producto.

## Antes de comenzar

Asegúrese de disponer de los accesos que le han sido proporcionados por Cloud-Temple.

Asegúrese de que los flujos de red estén abiertos hacia las IPs que se le han proporcionado.

## Acceso a su clúster de MariaDB Administrado

Según el modelo de implementación elegido, dispone de uno o varios endpoints.

**StandAlone**: 1 único endpoint (1 única IP), accesible en el puerto 3306.

**Distributed**:

- 1 Endpoint MaxScale, accesible en el puerto 3306, capaz de distribuir sus consultas hacia las instancias más apropiadas (este es el endpoint preferido)
- 1 Endpoint R/W, accesible en el puerto 3306, que apunta a la instancia primaria, en modo lectura-escritura.
- 1 Endpoint R/O, accesible en el puerto 3306, que apunta a todas las instancias, en modo solo lectura.

## Sus permisos

No dispone de ningún permiso a nivel del motor de base de datos (ni `SUPER`, ni `ALL_PRIVILEGE`)

No puede reconfigurar el motor ni sus opciones, ni instalar el performance_schema.

Las solicitudes de adición de bases de datos, usuarios o grants deben realizarse a los equipos de Cloud-Temple.
