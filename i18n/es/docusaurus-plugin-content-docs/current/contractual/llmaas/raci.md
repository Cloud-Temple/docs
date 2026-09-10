---
title: Matriz de responsabilidades - LLMaaS
displayed_sidebar: docSidebar
---


A continuación se presenta el RACI de la distribución de responsabilidades entre el cliente y Cloud Temple para el uso de la plataforma LLM as a Service (LLMaaS).

## Definición de los diferentes roles

Aquí recordamos los diferentes roles del RACI :

| Rol          | Descripción                              |
| ------------ | ---------------------------------------- |
| (R) Realiza  | __R__aliza el proceso                    |
| (A) Aprueba  | __A__prueba la realización del proceso  |
| (C) Consulta | __C__onsultado durante el proceso        |
| (I) Informado| __I__nformado de los resultados del proceso |

## Definir su necesidad

| Actividad                                                              | Rol del Cliente | Rol Cloud Temple |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Validar que el servicio LLMaaS cumple con los requisitos de la aplicación | __RA__      | __CI__            |
| Suscribirse al servicio y seleccionar un nivel de facturación           | __RA__      | __I__             |

## Implementar el servicio

| Actividad                                                                           | Rol Cliente | Rol Cloud Temple |
| ---------------------------------------------------------------------------------- | ----------- | ---------------- |
| Garantizar el mantenimiento operativo de la plataforma LLMaaS (API, GPU)           | __I__       | __RA__           |
| Garantizar el mantenimiento de seguridad de la plataforma LLMaaS                   | __I__       | __RA__           |
| Gestionar las claves de acceso API (creación, rotación, revocación)                | __RA__      |                  |
| Desarrollar y mantener el código de la aplicación cliente                          | __RA__      |                  |

## Operaciones recurrentes

| Actividad                                                         | Rol Cliente | Rol Cloud Temple |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Garantizar la disponibilidad de la API LLMaaS                         | __I__       | __RA__            |
| Supervisar el correcto funcionamiento de la plataforma y los modelos | __I__       | __RA__            |
| Gestionar los incidentes en la plataforma LLMaaS                     | __I__       | __RA__            |
| Gestionar los problemas en la plataforma LLMaaS                     | __I__       | __RA__            |
| Gestionar la capacidad de la infraestructura GPU                        | __I__       | __RA__            |
| Gestionar la evolución de los modelos (ajout, dépréciation)           | __C, I__    | __RA__            |
| Seguir el consumo y la facturación                         | __RA__      | __I__             |

## Gestión de la seguridad

| Actividad                                                                    | Rol del Cliente | Rol de Cloud Temple |
| --------------------------------------------------------------------------- | --------------- | ------------------- |
| Asegurar la infraestructura física y la plataforma LLMaaS                   | __I__           | __RA__              |
| Gestionar los accesos y permisos de los usuarios finales de la aplicación   | __RA__          |                     |
| Asegurar los datos y los prompts enviados a la API                          | __RA__          | __C__               |
| Garantizar la confidencialidad de los datos procesados por los modelos      | __R__           | __A__               |
| Gestionar el cumplimiento de la aplicación final (RGPD, etc.)               | __RA__          | __I__               |

## Continuidad del negocio

| Actividad                                                              | Rol del Cliente | Rol de Cloud Temple |
| --------------------------------------------------------------------- | --------------- | ------------------- |
| Garantizar la continuidad del negocio de la plataforma LLMaaS         | __I__           | __RA__              |
| Garantizar la copia de seguridad de los datos de la aplicación cliente | __RA__          |                     |
| Mantener el plan de continuidad del negocio para la aplicación cliente | __RA__          |                     |

## Reversibilidad

| Actividad                                                                    | Rol Cliente | Rol Cloud Temple |
| ---------------------------------------------------------------------------- | ----------- | ---------------- |
| Implementar el proyecto de reversibilidad (planificación, herramientas, objetivos) | __RA__      | __C__             |
| Exportar los datos y el código de la aplicación cliente                      | __RA__      |                  |
| Eliminar las claves de API y los accesos al servicio                         | __RA__      |                  |