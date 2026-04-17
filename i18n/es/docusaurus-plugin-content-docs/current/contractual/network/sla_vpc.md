---
title: SLA VPC
slug: /contractual/network/sla-vpc
displayed_sidebar: docSidebar
---

# Acuerdo de Nivel de Servicio (SLA) – Virtual Private Cloud (VPC)

| | |
| :--- | :--- |
| **Última actualización** | 17 de abril de 2026 |

Este documento define los Acuerdos de Nivel de Servicio (SLA) aplicables al producto **Virtual Private Cloud (VPC)** proporcionado por **Cloud Temple** (en adelante denominado «el Proveedor» o «Cloud Temple»). Complementa las Condiciones Generales de Venta y de Servicio de Cloud Temple y forma un todo inseparable con ellas.

---

## 1. Definiciones

En el marco de este SLA, los términos siguientes con mayúscula tienen el significado indicado a continuación:

- **Tasa de Disponibilidad Mensual**: El porcentaje de tiempo de funcionamiento garantizado para el plano de datos del servicio VPC durante un mes calendario.
- **Servicio VPC**: El conjunto de componentes gestionados por Cloud Temple que constituyen el Virtual Private Cloud: router VPC, redes privadas (Private Networks) y pasarela externa (External Gateway) con sus funciones NAT, DNAT e IPs flotantes.
- **Plano de Datos**: El plano de transporte de red que garantiza el enrutamiento de flujos entre las redes privadas de un mismo VPC y la conectividad a Internet a través de la pasarela externa.
- **Plano de Control**: Las APIs e interfaces (Consola Cloud Temple) que permiten la creación, modificación y eliminación de recursos VPC (redes, routers, IPs flotantes, reglas de seguridad).
- **Período de Indisponibilidad**: Interrupción completa del enrutamiento entre las redes privadas de un mismo VPC, o pérdida total de la conectividad a Internet a través de la pasarela externa activada, detectada por las herramientas de monitorización de Cloud Temple.
- **Duración de Indisponibilidad**: Tiempo ininterrumpido durante el cual se constata el Período de Indisponibilidad. Para ser contabilizado en el marco de este SLA, una Duración de Indisponibilidad debe ser de al menos **cinco (5) minutos consecutivos**.

---

## 2. Compromisos de Nivel de Servicio (SLA)

Cloud Temple se compromete a los siguientes niveles de disponibilidad mensual:

| Componente | Tasa de Disponibilidad Mensual garantizada |
| :--- | :---: |
| **Plano de Datos VPC** (enrutamiento entre redes, NAT, DNAT) | **99,99 %** |
| **Plano de Control VPC** (API, Consola Cloud Temple) | **99,9 %** |

Una Tasa de Disponibilidad Mensual del **99,99 %** para el plano de datos corresponde a un máximo de **4,4 minutos** de indisponibilidad autorizada por mes calendario.

En caso de incumplimiento de estos compromisos, el Cliente podrá reclamar Créditos de Servicio en las condiciones definidas en el Artículo 5.

---

## 3. Medición y alcance de la Disponibilidad

La supervisión y el cálculo de la Tasa de Disponibilidad Mensual se realizan **exclusivamente por las herramientas de monitorización de la infraestructura de Cloud Temple**.

**Alcance de responsabilidad:**  
Este SLA cubre únicamente los componentes de red **gestionados por Cloud Temple**:
- El router VPC y la tabla de enrutamiento interna.
- Las Redes Privadas (segmentos L2) y su disponibilidad a nivel del plano de datos.
- La Pasarela Externa (External Gateway), sus funciones NAT, DNAT y las IPs flotantes asociadas.

:::info
Los recursos de cómputo (VM Instances, IaaS OpenSource, IaaS VMware) conectados al VPC están sujetos a SLAs separados y no están cubiertos por este documento.
:::

---

## 4. Exclusiones de Garantía

Este SLA no constituye un compromiso sobre los elementos fuera del control directo de Cloud Temple. **No** se consideran Períodos de Indisponibilidad las interrupciones resultantes de:

1. **Configuraciones del Cliente**: Reglas de filtrado de red (Security Groups, ACLs) configuradas por el Cliente que bloquean la conectividad, conflictos de direcciones IP, configuraciones incorrectas de subredes o rutas estáticas.

2. **Fallos de los recursos conectados**: Fallos a nivel del sistema operativo o de las aplicaciones alojadas en las instancias de cómputo (VM Instances, IaaS, Bare Metal) conectadas al VPC.

3. **Conectividad a Internet externa**: Interrupciones de conectividad más allá del punto de demarcación de Cloud Temple (incidentes en proveedores de tránsito de Internet, degradaciones de enlaces BGP upstream).

4. **Mantenimiento programado**: Intervenciones de mantenimiento en la infraestructura de red de Cloud Temple que hayan sido notificadas previamente en el marco de las ventanas de mantenimiento previstas en el contrato de soporte del Cliente.

5. **Comportamiento abusivo o infracción**: Suspensión del servicio VPC por Cloud Temple tras una violación de las Condiciones Generales o de los requisitos de seguridad.

6. **Fuerza mayor**: Eventos fuera del control razonable de Cloud Temple.

---

## 5. Créditos de Servicio y Penalizaciones

### 5.1 Plano de Datos VPC

Si no se alcanza la Tasa de Disponibilidad Mensual del 99,99 % para el plano de datos, el Cliente tiene derecho a un Crédito de Servicio calculado como porcentaje del importe mensual facturado por el servicio VPC:

| Tasa de disponibilidad mensual constatada | Crédito de Servicio |
| :--- | :---: |
| Entre 99,00 % y 99,98 % | 10 % |
| Entre 95,00 % y 98,99 % | 25 % |
| Inferior al 95,00 % | 100 % |

### 5.2 Plano de Control VPC

Si no se alcanza la Tasa de Disponibilidad Mensual del 99,9 % para el plano de control, el Cliente tiene derecho a un Crédito de Servicio del **10 %** del importe mensual facturado por el servicio VPC.

### 5.3 Procedimiento de reclamación

Para obtener un Crédito de Servicio, el Cliente debe presentar una solicitud motivada mediante la apertura de un ticket en el soporte de Cloud Temple dentro de los **treinta (30) días naturales** siguientes al mes en que se produjo el incidente.

La solicitud deberá incluir:
- El identificador (UUID) del VPC afectado
- Las marcas de tiempo precisas del Período de Indisponibilidad constatado
