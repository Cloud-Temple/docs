---
title: Preguntas frecuentes
---

## ¿El servicio se factura aparte?

No. Los paneles integrados en la Consola, el endpoint de la API Prometheus (PromQL), las plantillas de paneles de Grafana de código abierto, la visibilidad de las operaciones planificadas y de los incidentes, así como las notificaciones de incidentes por correo electrónico, están incluidos sin coste adicional en cualquier suscripción de Cloud Temple.

## ¿Cloud Temple proporciona una instancia de Grafana gestionada?

No. Cloud Temple proporciona la fuente de datos (el proxy Prometheus de la Consola) y [plantillas de paneles de código abierto](https://github.com/Cloud-Temple/console-grafana-iaas), pero no Grafana como servicio. Usted conecta la herramienta compatible con PromQL que elija, por ejemplo su propia instancia de Grafana, en la nube o en sus instalaciones.

## ¿Cómo se protege el acceso a mis métricas?

Con un token de acceso personal (PAT). Su herramienta se autentica en Basic Auth con el identificador y el secreto de un token creado desde su perfil en la Consola. Según el principio de mínimo privilegio, este token solo debe tener el permiso `metrics_read`.

## ¿Puedo crear alertas sobre las métricas de Cloud Temple?

Sí, en su propia herramienta: por ejemplo, reglas de alerta de Grafana sobre la saturación de memoria, la CPU o las IOPS, a partir de la fuente de datos Prometheus. Para las alertas, configure el método HTTP de la fuente de datos en GET (consulte la [guía de inicio](quickstart.md)).

## ¿Puedo seguir la huella de carbono de mi infraestructura?

Sí. El flujo Prometheus y los paneles de la Consola incluyen las emisiones de CO₂ y el consumo energético estimado (kWh), por hipervisor y por centro de datos.

## ¿Cuánto tiempo se conserva el historial de incidentes e intervenciones?

60 días. La Consola muestra las intervenciones finalizadas y los incidentes resueltos (con sus informes) de los últimos 60 días, así como las intervenciones planificadas para los próximos 60 días.
