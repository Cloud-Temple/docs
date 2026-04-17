---
title: SLA Instancias VM
slug: /contractual/vm-instances/sla
---

# Acuerdo de Nivel de Servicio (SLA) – Instancias VM

| | |
| :--- | :--- |
| **Última actualización** | 15 de abril de 2026 |

Este documento define los Compromisos de Nivel de Servicio (SLA) aplicables al producto **Instancias VM** proporcionado por **Cloud Temple**. Complementa las Condiciones Generales de Venta y Servicio de Cloud Temple y forma un todo inseparable con ellas.

---

## 1. Definiciones

- **Tasa de Disponibilidad Mensual**: El porcentaje de tiempo de funcionamiento garantizado para una Instancia VM durante un mes calendario.
- **Instancia VM**: El servidor privado virtual aprovisionado bajo demanda por el Cliente en la infraestructura cloud de Cloud Temple, basado en recursos de cómputo y almacenamiento compartidos de alto rendimiento.
- **Período de Indisponibilidad**: Pérdida total del acceso y conectividad externa a la Instancia VM, medida exclusivamente a nivel de la infraestructura subyacente de Cloud Temple.
- **Duración de Indisponibilidad**: Tiempo ininterrumpido durante el cual se constata el Período de Indisponibilidad. Para ser contabilizada en este SLA, una Duración de Indisponibilidad debe ser de al menos **cuatro (4) minutos consecutivos**.

---

## 2. Compromisos de Nivel de Servicio (SLA)

Cloud Temple se compromete a garantizar una Tasa de Disponibilidad Mensual del **99,95 %** para cada Instancia VM activa facturada al Cliente.

Esta tasa equivale a un máximo de **21,9 minutos** de Duración de Indisponibilidad autorizada por mes calendario. En caso de incumplimiento, el Cliente podrá reclamar Créditos de Servicio en las condiciones definidas en el Artículo 5.

---

## 3. Medición y Ámbito de la Disponibilidad

La supervisión y el cálculo de la Tasa de Disponibilidad Mensual se realizan **exclusivamente por las herramientas de monitoreo de infraestructura de Cloud Temple**.

**Ámbito de responsabilidad:**  
Este SLA cubre únicamente el funcionamiento de los recursos de cómputo (CPU, RAM) asignados en la infraestructura hardware de Cloud Temple.

:::info
La conectividad de red (VPC, enrutamiento) o el almacenamiento persistente son objeto de documentos SLA separados.
:::

**Principio de exclusión por estado UP:**  
En cuanto la Instancia VM sea vista como "UP" o "RUNNING" por la plataforma Cloud Temple, el compromiso de SLA se considera cumplido.

---

## 4. Exclusiones de Garantía

1. **Fallos del Sistema Operativo o de software**: Caída del OS invitado, sobrecarga de CPU o RAM causada por procesos del Cliente, corrupción del sistema de archivos interno.

2. **Configuraciones del Cliente**: Reglas de cortafuegos que bloquean accesos, errores de configuración de red dentro del OS.

3. **Fallos de aplicación**: Detención o caída de un servicio alojado en la Instancia VM.

4. **Mantenimiento programado**: Intervenciones con notificación previa en las ventanas de mantenimiento previstas.

5. **Ausencia o desactivación de las tools de VM**: Los agentes de gestión del hipervisor (*tools*) preinstalados por Cloud Temple en cada instancia son indispensables para la medición y garantía de la disponibilidad. Si estos tools han sido desactivados, eliminados o inutilizados por el cliente, Cloud Temple ya no puede supervisar la instancia ni constatar objetivamente un período de indisponibilidad. El SLA queda **inmediatamente suspendido** durante el tiempo en que los tools estén ausentes o no operativos. La presencia y el correcto funcionamiento de los tools son responsabilidad exclusiva del cliente durante toda la vida de la instancia.

6. **Comportamiento abusivo o violación**: Suspensión de la Instancia VM por Cloud Temple tras una violación de las Condiciones Generales.

7. **Fuerza mayor**: Eventos fuera del control razonable de Cloud Temple.

---

## 5. Créditos de Servicio y Penalizaciones

| Tasa de disponibilidad mensual constatada | Crédito de Servicio |
| :--- | :---: |
| Entre 99,00 % y 99,94 % | 10 % |
| Entre 95,00 % y 98,99 % | 25 % |
| Inferior al 95,00 % | 100 % |

### 5.1 Modalidades de Reclamación

El Cliente debe presentar una solicitud motivada mediante la apertura de un ticket de soporte en Cloud Temple en un plazo de **treinta (30) días calendario** tras el mes en que ocurrió el incidente.

La solicitud deberá incluir:
- El UUID de la Instancia VM afectada
- Los timestamps precisos del Período de Indisponibilidad observado
