---
title: SLA VPC
slug: /contractual/network/sla-vpc
displayed_sidebar: docSidebar
---

# Acuerdo de Nivel de Servicio (SLA) – Virtual Private Cloud (VPC)

| | |
| :--- | :--- |
| **Fecha de última actualización** | 17 de abril de 2026 |

El presente documento define los Compromisos de Nivel de Servicio (SLA) aplicables al producto **Virtual Private Cloud (VPC)** proporcionado por **Cloud Temple** (en adelante denominado « el Proveedor » o « Cloud Temple »). Complementa las Condiciones Generales de Venta y Servicio de Cloud Temple y constituye un todo indisoluble con las mismas.

---

## 1. Definiciones

En el marco del presente SLA, los siguientes términos con mayúscula tienen el siguiente significado:

- **Tasa de Disponibilidad Mensual** : El porcentaje de tiempo de funcionamiento garantizado para el plano de datos del servicio VPC durante un mes calendario.
- **Servicio VPC** : El conjunto de componentes gestionados por Cloud Temple que conforman el Virtual Private Cloud: router VPC, redes privadas (Private Networks) y pasarela externa (External Gateway) con sus funciones NAT, DNAT e IPs flotantes.
- **Plano de Datos** : El plano de transporte de red que garantiza el enrutamiento de flujos entre las redes privadas de un mismo VPC, así como la conectividad a Internet a través de la pasarela externa.
- **Plano de Control** : Las API e interfaces (Console Cloud Temple) que permiten la creación, modificación y eliminación de recursos VPC (réseaux, routeurs, IPs flottantes, règles de sécurité).
- **Período de Indisponibilidad** : Interrupción completa del enrutamiento entre las redes privadas de un mismo VPC, o pérdida total de la conectividad a Internet a través de la pasarela externa cuando está activada, detectada por las herramientas de monitoreo de Cloud Temple.
- **Duración de Indisponibilidad** : Tiempo ininterrumpido durante el cual se detecta el Período de Indisponibilidad. Para ser contabilizada en el marco de este SLA, una Duración de Indisponibilidad debe ser de al menos **cinco (5) minutes consécutives**.

---

## 2. Acuerdos de Nivel de Servicio (SLA)

Cloud Temple se compromete con los siguientes niveles de disponibilidad mensual:

| Componente | Tasa de Disponibilidad Mensual Garantizada |
| :--- | :---: |
| **Plano de datos VPC** (enrutamiento entre redes, NAT, DNAT) | **99,99 %** |
| **Plano de control VPC** (API, Consola Cloud Temple) | **99,9 %** |

Una Tasa de Disponibilidad Mensual de **99,99 %** para el plano de datos corresponde a un máximo de **4,4 minutos** de indisponibilidad permitida por mes calendario.

En caso de incumplimiento de estos compromisos, el Cliente podrá solicitar Créditos de Servicio en las condiciones establecidas en el Artículo 5.

---

## 3. Medición y ámbito de la Disponibilidad

La supervisión y el cálculo de la Tasa de Disponibilidad Mensual se realizan **exclusivamente mediante las herramientas de monitoreo de la infraestructura de Cloud Temple**.

**Ámbito de responsabilidad:**  
El presente SLA cubre únicamente los componentes de red **gestionados por Cloud Temple** :
- El router VPC y la tabla de enrutamiento interna.
- Las Redes Privadas (segments L2) y su disponibilidad a nivel del plano de datos.
- La pasarela externa (External Gateway), sus funcionalidades NAT, DNAT y las IPs flotantes asociadas.

:::info
Los recursos de cómputo (VM Instances, IaaS OpenSource, IaaS VMware) conectados al VPC están sujetos a SLA distintos y no están cubiertos por el presente documento.
:::

---

## 4. Exclusiones de Garantía

El presente SLA no constituye un compromiso respecto a los elementos fuera del control directo de Cloud Temple. No se consideran **Periodos de Indisponibilidad** las interrupciones resultantes de:

1. **Configuraciones del Cliente** : Reglas de filtrado de red (Security Groups, ACLs) configuradas por el Cliente que bloqueen la conectividad, conflictos de direccionamiento IP, configuración incorrecta de subredes o rutas estáticas.

2. **Fallos de los recursos conectados** : Averías a nivel del sistema operativo o de las aplicaciones alojadas en las instancias de cálculo (Instancias de VM, IaaS, Bare Metal) conectadas al VPC.

3. **Conectividad a Internet externa** : Interrupciones de conectividad que se produzcan más allá del punto de demarcación de Cloud Temple (incidentes en operadores de tránsito de Internet, degradaciones de los enlaces BGP upstream).

4. **Mantenimiento programado** : Intervenciones de mantenimiento en la infraestructura de red de Cloud Temple que hayan sido notificadas con antelación en el marco de las ventanas de mantenimiento previstas en el contrato de soporte del Cliente.

5. **Comportamiento abusivo o violación** : Suspensión del servicio VPC por parte de Cloud Temple tras una violación de las Condiciones Generales o de los requisitos de seguridad (ej. : actividad de red maliciosa, incumplimiento de las Condiciones de Uso Aceptable).

6. **Fuerza mayor** : Eventos fuera del control razonable de Cloud Temple (catástrofes naturales, actos de guerra, cortes de energía a nivel nacional, etc.).

---

## 5. Créditos de Servicio y Penalizaciones

### 5.1 Plan de datos VPC

Si no se alcanza la Tasa de Disponibilidad Mensual del 99,99 % para el plan de datos, el Cliente es elegible para un Crédito de Servicio calculado como un porcentaje del monto mensual facturado por el servicio VPC :

| Tasa de disponibilidad mensual constatada | Crédito de Servicio |
| :--- | ---: |
| Entre 99,00 % y 99,98 % | 10 % |
| Entre 95,00 % y 98,99 % | 25 % |
| Inferior al 95,00 % | 100 % |

### 5.2 Plano de control VPC

Si no se alcanza la Tasa de Disponibilidad Mensual del 99,9 % para el plano de control, el Cliente es elegible para un Crédito de Servicio del **10 %** del monto mensual facturado por el servicio VPC afectado.

### 5.3 Modalidades de reclamación

Para obtener un Crédito de Servicio, el Cliente debe presentar una solicitud fundamentada mediante la apertura de un ticket con el soporte de Cloud Temple dentro de un plazo de **treinta (30) días calendario** siguientes al mes en el que se produjo el incidente.

La solicitud deberá incluir:
- El identificador (UUID) del VPC correspondiente
- Las marcas de tiempo precisas del Período de Indisponibilidad constatado