---
title: Matriz de responsabilidad IaaS - Almacenamiento de Objetos S3
slug: /contractual/storage/raci
displayed_sidebar: docSidebar
---


A continuación se presenta el RACI de la distribución de responsabilidades entre el cliente y Cloud Temple para el uso de la plataforma de Almacenamiento de Objetos S3 de Cloud Temple.

## Definición de los diferentes roles

Aquí recordamos los distintos roles del RACI:

| Rol          | Descripción                              |
|--------------|------------------------------------------|
| (R) Ejecuta  | __E__jecuta el proceso                   |
| (A) Aprueba  | __A__prueba la ejecución del proceso     |
| (C) Consulta | __C__onsultado durante el proceso        |
| (I) Informado| __I__nformado de los resultados del proceso |

## Definir sus requisitos

| Actividad                                                                            | Rol del Cliente | Rol Cloud Temple |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Validar que el producto de Almacenamiento de Objetos S3 cumple con los requisitos de la aplicación | __RA__      | __CI__            |
| Suscribirse al servicio con la información necesaria                           | __RA__      | __I__             |

## Implementar el servicio

| Actividad                                                                             | Rol Cliente | Rol Cloud Temple |
|---------------------------------------------------------------------------------------|-------------|------------------|
| Garantizar el mantenimiento operativo de la plataforma de Almacenamiento de Objetos S3 | __I__       | __RA__           |
| Garantizar el mantenimiento de seguridad de la plataforma de Almacenamiento de Objetos S3 | __I__       | __RA__           |
| Crear los objetos                                                                     | __RA__      |                  |
| Crear las claves de acceso y asignar los permisos asociados                           | __RA__      |                  |

## Operaciones recurrentes

| Actividad                                                                           | Rol del Cliente | Rol de Cloud Temple |
|-------------------------------------------------------------------------------------|-----------------|---------------------|
| Garantizar el mantenimiento en condiciones operativas de la plataforma de Almacenamiento de Objetos S3 | __I__           | __RA__              |
| Garantizar el mantenimiento en condiciones de seguridad de la plataforma de Almacenamiento de Objetos S3 | __I__           | __RA__              |
| Garantizar la accesibilidad del servicio de Almacenamiento de Objetos S3          | __I__           | __RA__              |
| Conservar y poner a disposición los registros de la plataforma de Almacenamiento de Objetos S3 |                 | __RA__              |
| Supervisar el correcto funcionamiento de la plataforma de Almacenamiento de Objetos S3 | __I__           | __RA__              |
| Gestionar el ciclo de vida de los objetos                                           | __RA__          |                     |
| Gestionar el ciclo de vida de los permisos sobre los objetos                        | __RA__          |                     |
| Gestionar la seguridad lógica de los objetos                                        | __RA__          |                     |
| Gestionar los incidentes en el servicio de Almacenamiento de Objetos S3           | __I__           | __RA__              |
| Gestionar los problemas en el servicio de Almacenamiento de Objetos S3            | __I__           | __RA__              |
| Gestionar la capacidad del servicio de Almacenamiento de Objetos S3               | __I__           | __RA__              |
| Gestionar las actualizaciones en el servicio de Almacenamiento de Objetos S3      | __I__           | __RA__              |

## Gestión del cifrado

| Actividad                                                                                 | Rol del Cliente | Rol de Cloud Temple |
|------------------------------------------------------------------------------------------|-----------------|---------------------|
| Gestionar el cifrado de los datos antes del despliegue en el servicio de Almacenamiento de Objetos S3 | __RA__          |                     |
| Gestionar el cifrado en el espacio de almacenamiento asignado por el servicio de Almacenamiento de Objetos S3 | __A__           | __R__               |

## Continuidad del negocio

| Actividad                                                                                  | Rol del Cliente | Rol de Cloud Temple |
|-------------------------------------------------------------------------------------------|-----------------|---------------------|
| Garantizar la continuidad del negocio del servicio de almacenamiento de objetos S3       | __I__           | __RA__              |
| Garantizar la copia de seguridad de los datos                                              | __RA__          |                     |
| Realizar pruebas periódicas de restauración de datos                                       | __RA__          |                     |
| mantener el plan de continuidad del negocio y de recuperación ante desastres para las aplicaciones | __RA__          |                     |

## Reversibilidad

| Actividad                                                                                  | Rol Cliente | Rol Cloud Temple |
|--------------------------------------------------------------------------------------------|-------------|------------------|
| Implementar el proyecto de reversibilidad (planificación, herramientas, métodos, objetivos,...) | __RA__      |                  |
| Exportar los datos desde el servicio de Almacenamiento de Objetos S3                       | __RA__      |                  |
| Eliminar los datos en el servicio de Almacenamiento de Objetos S3                          | __RA__      |                  |
| Destruir los soportes de almacenamiento al final de su vida útil o en caso de error        |             | __RA__           |