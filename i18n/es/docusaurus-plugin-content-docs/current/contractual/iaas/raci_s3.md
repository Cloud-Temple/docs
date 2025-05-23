---
title: Matriz de responsabilidad IaaS - Almacenamiento de Objetos S3
---

A continuación se presenta la matriz RACI de distribución de responsabilidades entre el cliente y Cloud Temple para el uso de la plataforma de Almacenamiento de Objetos S3 de Cloud Temple.

## Definición de los diferentes roles

Recordamos aquí los diferentes roles del RACI:

| Rol         | Descripción                              |
|--------------|------------------------------------------|
| (R) Realiza  | __R__ealiza el proceso                 |
| (A) Aprueba | __A__prueba la realización del proceso |
| (C) Consulta | __C__onsultado durante el proceso        |
| (I) Informado  | __I__nformado de los resultados del proceso   |

## Definir su necesidad

| Actividad                                                                            | Rol del Cliente | Rol de Cloud Temple |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Validar que el producto de Almacenamiento de Objetos S3 cumple con las necesidades de la aplicación | __RA__      | __CI__            |
| Suscribirse al servicio con la información necesaria                           | __RA__      | __I__             |

## Implementar el servicio

| Actividad                                                                             | Rol del Cliente | Rol de Cloud Temple |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar el mantenimiento en condiciones operativas de la plataforma de Almacenamiento de Objetos S3 | __I__       | __RA__            |
| Asegurar el mantenimiento en condiciones de seguridad de la plataforma de Almacenamiento de Objetos S3    | __I__       | __RA__            |
| Crear los objetos                                                                   | __RA__      |                   |
| Crear las claves de acceso y asignar los derechos asociados                            | __RA__      |                   |

## Operaciones recurrentes

| Actividad                                                                           | Rol del Cliente | Rol de Cloud Temple |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar el mantenimiento en condiciones operativas de la plataforma de Almacenamiento de Objetos S3 | __I__       | __RA__            |
| Asegurar el mantenimiento en condiciones de seguridad de la plataforma de Almacenamiento de Objetos S3    | __I__       | __RA__            |
| Asegurar la accesibilidad del servicio de Almacenamiento de Objetos S3                               | __I__       | __RA__            |
| Conservar y poner a disposición los registros de la plataforma de Almacenamiento de Objetos S3  |             | __RA__            |
| Supervisar el buen funcionamiento de la plataforma de Almacenamiento de Objetos S3                | __I__       | __RA__            |
| Seguir el ciclo de vida de los objetos                                                  | __RA__      |                   |
| Seguir el ciclo de vida de los derechos sobre los objetos                                   | __RA__      |                   |
| Gestionar la seguridad lógica de los objetos                                               | __RA__      |                   |
| Gestionar los incidentes en el servicio de Almacenamiento de Objetos S3                              | __I__       | __RA__            |
| Gestionar los problemas en el servicio de Almacenamiento de Objetos S3                              | __I__       | __RA__            |
| Gestionar la capacidad en el servicio de Almacenamiento de Objetos S3                                | __I__       | __RA__            |
| Gestionar las evoluciones en el servicio de Almacenamiento de Objetos S3                             | __I__       | __RA__            |

## Gestión del cifrado

| Actividad                                                                                 | Rol del Cliente | Rol de Cloud Temple |
|------------------------------------------------------------------------------------------|-------------|-------------------|
| Gestionar el cifrado de los datos antes del despliegue en el servicio de Almacenamiento de Objetos S3      | __RA__      |                   |
| Gestionar el cifrado en el espacio de almacenamiento asignado por el servicio de Almacenamiento de Objetos S3    | __A__       | __R__             |

## Continuidad de actividad

| Actividad                                                                                  | Rol del Cliente | Rol de Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar la continuidad de actividad del servicio de Almacenamiento de Objetos S3                         | __I__       | __RA__            |
| Asegurar la copia de seguridad de los datos                                                         | __RA__      |                   |
| Realizar pruebas periódicas de restauración de datos                                | __RA__      |                   |
| Mantener el plan de continuidad de actividad y de recuperación de actividad para las aplicaciones | __RA__      |                   |

## Reversibilidad

| Actividad                                                                                  | Rol del Cliente | Rol de Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Implementar el proyecto de reversibilidad (planificación, herramientas, métodos, objetivos,...) | __RA__      |                   |
| Exportar los datos desde el servicio de Almacenamiento de Objetos S3                              | __RA__      |                   |
| Eliminar los datos en el servicio de Almacenamiento de Objetos S3                                | __RA__      |                   |
| Destruir los soportes de almacenamiento al final de su vida útil o en caso de error                              |             | __RA__            |
