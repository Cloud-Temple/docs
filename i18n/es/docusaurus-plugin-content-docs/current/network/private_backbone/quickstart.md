---
title: Guía de inicio
---

# Guía de inicio — Private Backbone

Esta guía le acompaña en la creación de su primera red privada inter-AZ y la configuración del acceso a Internet con IPs públicas.

---

## Requisitos previos

- Acceso a la **Consola Cloud Temple** con derechos de red activados
- Al menos un clúster de cómputo desplegado en su tenant
- Para el acceso a Internet: una solicitud de servicio previa para los puertos de conectividad externa

---

## Parte 1 — Crear una red privada (VLAN)

### Paso 1: Acceder al menú de red

En la Consola Cloud Temple, haga clic en **Red** en la barra de navegación izquierda.

### Paso 2: Crear una nueva red

Haga clic en **Nueva red** e introduzca:

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| Nombre | Identificador legible de su red | `prod-backend-vlan` |
| VLAN ID | Identificador VLAN (automático o manual) | `100` |
| Descripción | Uso de la red (opcional) | `Red backend de producción` |

### Paso 3: Configurar la propagación

Seleccione los **clústeres destino** en los que propagar esta red.

:::caution[Límite de propagación]
La modificación de propagación está limitada a **20 redes** por acción. Para volúmenes mayores, realice varias acciones sucesivas.
:::

### Paso 4: Validar

Haga clic en **Crear**. La VLAN se aprovisiona instantáneamente y está disponible en los clústeres seleccionados.

---

## Parte 2 — Compartir una red entre tenants

Si su organización tiene varios tenants, puede compartir una red:

1. Seleccione la red de la lista
2. Haga clic en **Compartir**
3. Elija el/los tenant(s) destino en la lista filtrada por organización
4. Valide el uso compartido

La red aparece entonces en la sección **Compartido conmigo** del tenant destinatario.

---

## Parte 3 — Solicitar IPs públicas

### Paso 1: Acceder a la sección Internet

En la Consola Cloud Temple, navegue a **Red > Internet**.

### Paso 2: Solicitar un bloque de IPs

Haga clic en **Solicitar direcciones IP** y elija:

| Tipo | Bloque mínimo |
|------|--------------|
| IPv4 | 1 dirección |
| IPv6 | /64 (64 direcciones) |

### Paso 3: Asociar las IPs a sus servicios

Una vez asignado el bloque:
1. Seleccione la dirección IP de la lista
2. Haga clic en **Asociar**
3. Elija el servicio destino (VM, equipo, etc.)

### Paso 4: Configurar el DNS inverso (PTR)

Para cada IP pública, puede definir un registro PTR:
1. Haga clic en la IP en la consola
2. Seleccione **Configurar PTR**
3. Introduzca el nombre DNS deseado (p. ej. `servicio.ejemplo.com`)

---

## Parte 4 — Conectividad externa (puertos 1G/10G)

Para conectar un equipo de red (firewall, router) o un enlace de operador:

**Abra una solicitud de servicio** con la siguiente información:
- Nombre de la organización y contacto técnico
- Nombre del tenant y zona de disponibilidad destino
- Tipo de puerto deseado: **1 Gbps** o **10 Gbps** (fibra o cobre)
- Red de destino y posibles necesidades de alojamiento físico

:::info[Plazo de entrega]
Los puertos de conectividad externa se entregan bajo presupuesto tras la validación de la solicitud de servicio.
:::

---

## Siguientes pasos

- 📖 [Conceptos Private Backbone](./concepts) — Comprender VPLS, etiquetado VLAN, BGP
- 🔧 [Tutoriales](./tutorials) — Configurar FortiGate o pfSense con BGP
- 🌐 [Documentación VPC](../vpc/vpc) — Para un enfoque de red cloud-native
