---
title: SLA de Instancias de VM
slug: /contractual/vm-instances/sla
displayed_sidebar: docSidebar
---

# Acuerdo de Nivel de Servicio (SLA) – Instancias VM

| | |
| :--- | :--- |
| **Fecha de última actualización** | 15 de abril de 2026 |

El presente documento define los Compromisos de Nivel de Servicio (SLA) aplicables al producto **VM Instances** proporcionado por **Cloud Temple** (en adelante denominado « el Proveedor » o « Cloud Temple »). Complementa las Condiciones Generales de Venta y Servicio de Cloud Temple y constituye un todo indisoluble con las mismas.

---

## 1. Definiciones

En el marco del presente SLA, los siguientes términos con mayúscula tienen el siguiente significado:

- **Tasa de Disponibilidad Mensual** : El porcentaje de tiempo de funcionamiento garantizado para una instancia de VM durante un mes calendario.
- **Instancia de VM** : El servidor privado virtual aprovisionado bajo demanda por el Cliente en la infraestructura cloud de Cloud Temple, basado en recursos de cómputo y almacenamiento compartidos de alto rendimiento.
- **Período de Indisponibilidad** : Pérdida total de acceso y conectividad externa a la Instancia de VM, medida exclusivamente a nivel de la infraestructura subyacente de Cloud Temple (estado de la instancia reportado como inactivo, detenido o con error por el hipervisor de Cloud Temple).
- **Duración de Indisponibilidad** : Tiempo ininterrumpido durante el cual se constata el Período de Indisponibilidad. Para ser contabilizada en virtud de este SLA, una Duración de Indisponibilidad debe ser de al menos **cuatro (4) minutos consecutivos**.

---

## 2. Acuerdos de Nivel de Servicio (SLA)

Cloud Temple se compromete a garantizar una Tasa de Disponibilidad Mensual de **99,95 %** para cada Instancia de VM activa facturada al Cliente.

Esta tasa equivale a un máximo de **21,9 minutos** de Duración de Indisponibilidad autorizada por mes calendario. En caso de incumplimiento de este compromiso, el Cliente podrá solicitar Créditos de Servicio en las condiciones establecidas en el Artículo 5.

---

## 3. Medición y ámbito de la Disponibilidad

La monitorización y el cálculo de la Tasa de Disponibilidad Mensual se realizan **exclusivamente mediante las herramientas de monitorización de la infraestructura de Cloud Temple**, sondeando el estado de la instancia a nivel de la capa de virtualización.

**Ámbito de responsabilidad:**  
El presente SLA cubre únicamente el funcionamiento de los recursos de cómputo (Compute: CPU, RAM) asignados en la infraestructura física de Cloud Temple.

:::info
La conectividad de red (VPC, enrutamiento) o el almacenamiento persistente son objeto de documentos SLA distintos y no están cubiertos por el presente compromiso.
:::

**Principio de exclusión por el estado UP:**  
Una vez que la VM Instance es vista como «UP» o «RUNNING» por la plataforma Cloud Temple, el compromiso del SLA se considera cumplido, independientemente de la accesibilidad de la capa de aplicaciones del Cliente.

---

## 4. Exclusiones de Garantía

El presente SLA no constituye un compromiso respecto a la disponibilidad de los elementos que están bajo el control exclusivo del Cliente. Por consiguiente, **no** se consideran Períodos de Indisponibilidad las interrupciones, pérdidas de acceso o averías resultantes de:

1. **Fallos del Sistema Operativo (SO) o de software** : Bloqueo del SO invitado (por ej., *Kernel Panic*, *Pantalla Azul de la Muerte*), sobrecarga de la CPU o de la RAM causada por los procesos del Cliente, o corrupción del sistema de archivos interno.

2. **Configuraciones del Cliente** : Reglas de firewall de red o local (iptables, firewalld) que bloquean los accesos, errores de configuración de red dentro del SO mediante Cloud-init o en la fase posterior al despliegue.

3. **Averías de aplicaciones** : Detención o fallo de un servicio alojado en la Instancia VM (servidor web, base de datos, contenedores, etc.).

4. **Mantenimiento programado** : Intervenciones de hardware o software en la infraestructura física de Cloud Temple que hayan sido notificadas con antelación en el marco de las ventanas de mantenimiento previstas en su contrato de soporte.

5. **Ausencia o desactivación de las herramientas VM** : Los agentes de gestión del hipervisor (*tools*) preinstalados por Cloud Temple en cada instancia son indispensables para medir y garantizar la disponibilidad. Si estas *tools* han sido desactivadas, eliminadas o vuelven a no funcionar por parte del cliente, Cloud Temple ya no puede garantizar la supervisión de la instancia ni constatar objetivamente un período de indisponibilidad. El SLA se **suspenderá inmediatamente** por la duración durante la cual las *tools* estén ausentes o no operativas. La presencia y el correcto funcionamiento de las *tools* son responsabilidad exclusiva del cliente durante toda la vida útil de la instancia.

6. **Comportamiento abusivo o incumplimiento** : Suspensión de la Instancia VM por parte de Cloud Temple como consecuencia de una violación de las Condiciones Generales o de los requisitos de seguridad (por ej., compromiso de seguridad, incumplimiento de las normas del Marketplace de Cloud Temple).

7. **Fuerza mayor** : Eventos fuera del control razonable de Cloud Temple.

---

## 5. Créditos de Servicio y Penalizaciones

Si no se alcanza la Tasa de Disponibilidad Mensual del 99,95 % para una Instancia de VM determinada, el Cliente es elegible para una compensación en forma de Crédito de Servicio.

El Crédito de Servicio se calcula como un porcentaje del monto mensual facturado por la Instancia de VM afectada:

| Tasa de disponibilidad mensual registrada | Crédito de Servicio |
| :--- | :---: |
| Entre 99,00 % y 99,94 % | 10 % |
| Entre 95,00 % y 98,99 % | 25 % |
| Inferior al 95,00 % | 100 % |

### 5.1 Modalidades de reclamación

Para obtener un Crédito de Servicio, el Cliente debe presentar una solicitud motivada mediante la apertura de un ticket con el soporte de Cloud Temple dentro de un plazo de **treinta (30) días calendario** siguientes al mes en el que tuvo lugar el incidente.

La solicitud deberá incluir:
- El identificador (UUID) de la Instancia de VM correspondiente
- Las marcas de tiempo precisas del Período de Indisponibilidad constatado