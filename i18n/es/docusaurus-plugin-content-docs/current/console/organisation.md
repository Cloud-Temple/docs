---
title: Vista de organización
---

La **vista de organización** reúne las funciones de gestión de su entidad en la Consola Cloud Temple: gestión de los tenants, de los usuarios y sus permisos, control de accesos y seguimiento del consumo. Una organización federa uno o varios **tenants** (entornos cloud aislados) y los permisos de los usuarios se **segregan tenant por tenant**.

:::info
Esta página describe la **interfaz**: dónde encontrar cada función y qué permite. La documentación de **referencia** del modelo organización / tenant y de los permisos se encuentra en el módulo [IAM](iam/concepts.md).
:::

## Barra superior y selección del tenant de trabajo

En la parte superior de la Consola, la barra muestra la organización actual (**«Mi organización»**). El selector asociado abre la lista **«Mis tenants»**: cada tenant aparece en ella, acompañado en su caso de la insignia **SecNumCloud** cuando está cualificado.

Para **elegir el tenant de trabajo**, hay dos opciones:

- desde la barra superior, abra el selector **«Mis tenants»** y haga clic en el tenant deseado;
- desde la página **Tenants**, utilice la acción **«Conectarse al tenant»** de una fila.

Los recursos técnicos (cálculo, almacenamiento, red, etc.) son **propios de cada tenant** y no se comparten entre tenants.

{/* TODO screenshot: barra superior con el menú «Mis tenants» desplegado (insignias SecNumCloud visibles) */}

## Panel de control

El **Panel de control** es la página de inicio de la organización. Ofrece una síntesis transversal:

- el estado de los **tickets de soporte** (abiertos, respuesta requerida, validación del cliente, incidentes);
- el **número de tenants** de la organización;
- una **vista general de los costes** (coste del mes en curso, desglose por tenant y por servicio).

{/* TODO screenshot: Panel de control de la organización (síntesis Soporte, Tenants, costes) */}

## Administración de la organización

La sección **Administración** de la navegación izquierda agrupa las páginas de gobernanza de la organización.

| Página | Función |
|---|---|
| **Tenants** | Crear y evolucionar los tenants |
| **Usuarios** | Gestionar las cuentas y sus permisos |
| **Acceso** | Lista de IP públicas autorizadas (whitelist) |
| **Logs** | Registro de actividades (trazabilidad) |
| **Soporte** | Tickets de la organización |

El **Gestor de costes** (fuera de la sección Administración) proporciona el seguimiento del consumo.

## Tenants

La página **Tenants** enumera todos los tenants de la organización. Una barra de búsqueda y la paginación facilitan la navegación cuando hay muchos tenants.

### Crear un tenant

El botón **«Nuevo tenant»** abre un formulario en dos partes:

- **Identidad del tenant**: el **nombre** (validado en tiempo real) y una **descripción**;
- **Productos del tenant**: los productos que se activarán en el tenant. Los botones **«Seleccionar todo»** / **«Deseleccionar todo»** aceleran la introducción.

Confirme con **«Crear»**: el tenant se inicializa con los productos seleccionados.

### Acciones sobre un tenant

El menú de acciones de cada fila ofrece:

- **Conectarse al tenant** — define este tenant como tenant de trabajo;
- **Modificar los productos** — activa o desactiva productos en el tenant para modificar su alcance;
- **Copiar UUID** — copia el identificador técnico del tenant (útil para la API o un ticket de soporte).

### Propietarios y ciclo de vida

- **Creación**: en autoservicio mediante **«Nuevo tenant»**.
- **Evolución**: adición o eliminación de productos mediante **«Modificar los productos»**.
- **Eliminación**: se realiza mediante **solicitud de soporte** — no existe eliminación directa desde la interfaz.
- **Propietarios de tenant**: cada tenant tiene al menos un propietario. Las reglas (número recomendado, plazo de propagación, retirada mediante solicitud de soporte, permisos de un propietario) se detallan en el módulo [IAM](iam/concepts.md).

:::info
Las operaciones sobre los tenants quedan registradas en la página **Logs** (por ejemplo «*Creating tenant…*» o «*Updating features on tenant…*»).
:::

{/* TODO screenshot: página Tenants (lista) y luego el diálogo «Nuevo tenant» (secciones Identidad + Productos) */}

## Usuarios y permisos

La página **Usuarios** enumera las cuentas de la organización. Las credenciales son **globales a la organización**; los permisos, en cambio, se definen **por tenant**.

Para cada cuenta se muestran el **nombre**, el **correo electrónico**, el **tipo** de cuenta — **Cuenta federada** (proveedor de identidad externo) o **Cuenta local** — y marcas visuales: **Propietario de la organización**, **Yo**, o **Correo no verificado** (cuenta no finalizada).

### Herramientas de la página

- **Filtros**: por **Propietarios de la organización**, **Tipo**, **Origen** y **Estado**.
- **Exportar CSV**: exporta la lista de usuarios y sus accesos, útil para la auditoría.

### Acciones sobre una cuenta

El menú de acciones ofrece, según el estado de la cuenta:

- **Añadir como propietario de organización**;
- **Reinscripción** — reenvía la invitación a una cuenta no finalizada;
- **Copiar UUID**;
- **Eliminar**.

:::note
No puede eliminarse a sí mismo. La **invitación** de un nuevo usuario y la **asignación fina de permisos por tenant** se describen en el módulo [IAM](iam/quickstart.md).
:::

### Propietario de organización y propietario de tenant

Son dos nociones distintas:

- el **propietario de la organización** se añade desde la página **Usuarios** (acción «Añadir como propietario de organización»); su **retirada se realiza mediante solicitud de soporte**;
- el **propietario de tenant** pertenece al ámbito de un tenant; sus reglas se describen en el módulo [IAM](iam/concepts.md).

{/* TODO screenshot: página Usuarios (insignias «Propietario de la organización» y «Cuenta federada») + panel Filtros */}

## Acceso — whitelist IP

La página **Acceso** gestiona la **lista de direcciones IP públicas autorizadas** a alcanzar la Consola. De acuerdo con los requisitos **SecNumCloud**, solo se acepta el tráfico procedente de estas direcciones.

- Cada entrada asocia una **IP** (notación CIDR) a una **descripción**.
- El botón **«Añadir una IP»** permite añadir una dirección a la lista.

:::warning
La **eliminación** de una IP autorizada se realiza mediante **solicitud de soporte**.
:::

{/* TODO screenshot: página Acceso (whitelist IP) + diálogo «Añadir una IP» */}

## Informe de consumo — Gestor de costes

El **Gestor de costes** ofrece una vista del consumo de la organización, desglosado por tenant. Ofrece dos pestañas.

### Pestaña «Resumen»

Vista sintética del mes en curso:

- indicadores clave: **coste del mes en curso**, **coste del año en curso**, **número de productos activos**;
- **Coste por tenant** — desglose de los costes entre los tenants;
- **Coste actual por servicio** y **Coste actual por producto** — principales partidas de consumo.

### Pestaña «Consumo»

Informe detallado e historizado:

- selección del **periodo** (mes de inicio y de fin) y del eje **«Mostrar por»**;
- vistas **Consumo mensual**, **Total**, **Previsión** y **Tendencia**;
- una tabla desplegable por **Mes / Tenant / Servicio / Producto / Importe**, con la **tendencia** respecto al mes anterior.

:::info
El importe del mes en curso es una **previsión**: se estima a partir de los días ya consumidos.
:::

{/* TODO screenshot: Gestor de costes — pestaña «Resumen» y luego pestaña «Consumo» */}

## Registro y soporte

- **Logs** — la página **Actividades** registra las operaciones de lectura y escritura de la organización (pestañas **Recientes** / **Archivadas**, filtros, exportación CSV) con fines de trazabilidad. Véase también la sección Registro de la [guía de inicio de la Consola](console_quickstart.md).
- **Soporte** — la página **Soporte** centraliza los **tickets de la organización** (indicadores, creación de tickets, filtros, exportación). La creación y el seguimiento de las solicitudes se describen en la [guía de inicio de la Consola](console_quickstart.md).
