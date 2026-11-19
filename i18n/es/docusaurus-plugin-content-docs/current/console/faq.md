---
title: Preguntas frecuentes
---

## ¿Qué operaciones generan una actividad?

Todas las operaciones realizadas desde la Consola o mediante su API: tanto las escrituras (creación, modificación, eliminación) como las lecturas. Cada actividad indica, entre otros datos, el iniciador, la fecha, el tipo de operación, los recursos afectados y el estado. Consulte [Actividades](./concepts.md#actividades).

## ¿Cuándo pasa una actividad de «Recientes» a «Archivadas»?

Una vez finalizada la operación, con éxito o con error, la actividad pasa a **Archivadas** entre 24 y 30 horas después de su creación. Una operación más larga permanece en **Recientes** mientras está en curso y pasa después a **Archivadas** en las 6 horas siguientes a su finalización.

## ¿Cuánto tiempo se conservan las actividades archivadas?

558 días, es decir, aproximadamente 18 meses, a partir de su archivado. Este plazo va más allá del mínimo de 6 meses asociado a la cualificación SecNumCloud de la Consola.

## ¿Estos plazos son los mismos para todos los tenants?

Sí. Los fija Cloud Temple a nivel de plataforma, son idénticos para todos los tenants y no son configurables.

## ¿Cómo consultar o recuperar las actividades archivadas?

En la Consola, desde el menú **Logs**, pestaña **Archivadas**, con el permiso `activity_read`. Mediante la API, con la ruta `GET /activity/v1/activities/archive`: consulte la [API de la Consola](./api.md#las-actividades).

## ¿Las actividades cubren los eventos de la infraestructura?

No. Registran las operaciones realizadas en la Consola y su API, no los eventos de la infraestructura subyacente.
