---
title: Inicio rápido
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import shivaProfil_006 from '@site/docs/console/images/shiva_profil_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaSupport_01 from '@site/docs/console/images/shiva_support_01.png'
import shivaSupport_02 from '@site/docs/console/images/shiva_support_02.png'
import shivaSupport_03 from '@site/docs/console/images/shiva_support_03.png'
import shivaOnboard_007 from '@site/docs/console/images/shiva_onboard_007.png'
import shivaLogs from '@site/docs/console/images/shiva_logs.png'
import shivaOnboard_009 from '@site/docs/console/images/shiva_onboard_009.png'
import shivaOnboard_008 from '@site/docs/console/images/shiva_onboard_008.png'
import shivaSupportCriticities from '@site/docs/console/images/shiva_incident_criticities.png'
import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import imgDashboard from '@site/docs/console/images/shiva_org_dashboard.png'
import imgTenants from '@site/docs/console/images/shiva_org_tenants.png'
import imgTenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import imgUsers from '@site/docs/console/images/shiva_org_users.png'
import imgAccess from '@site/docs/console/images/shiva_org_access.png'
import imgCostsOverview from '@site/docs/console/images/shiva_org_costs_overview.png'
import imgCostsConsumption from '@site/docs/console/images/shiva_org_costs_consumption.png'

## Requisitos

- Haber suscrito un producto Cloud Temple. Para suscribirse, puede [contactarnos](https://www.cloud-temple.com/contactez-nous/) o por correo electrónico a la dirección __contact@cloud-temple.com__.
- Tener acceso a la Consola
- Tener declarada su dirección IPv4 pública en la zona de confianza de Cloud Temple (el acceso a la Consola está limitado a las direcciones de confianza identificadas)

## Conexión a su tenant de Cloud Temple

La consola es accesible a través de la siguiente URL: [Consola](https://shiva.cloud-temple.com) o bien desde la URL directa que se le ha comunicado por correo electrónico.

La primera página le permite seleccionar [la organización](iam/concepts.md#organisations) en la que se ha creado su usuario.
Una vez introducida la empresa, haga clic en __'Iniciar sesión'__.

<img src={shivaLogin} />

A continuación, será redirigido a una página que le solicitará autenticarse.
Una vez conectado, accederá a esta página.

Encontrará allí todas las métricas relacionadas con los productos suscritos en su ámbito. En caso de problema(s) con sus productos VMware y/o OpenIaaS, se mostrarán alertas; el color está relacionado con su importancia.

<img src={shivaHome} />

## Vista de organización

:::info Acceso
La **vista de organización** está reservada a los **propietarios de la organización**.
:::

La **vista de organización** reúne las funciones de gestión de su entidad en la Consola Cloud Temple: gestión de los tenants, de los usuarios y sus permisos, control de accesos y seguimiento del consumo. Una organización federa uno o varios **tenants** (entornos cloud aislados) y los permisos de los usuarios se **segregan tenant por tenant**.

:::info
Esta sección describe la **interfaz**: dónde encontrar cada función y qué permite. La documentación de **referencia** del modelo organización / tenant y de los permisos se encuentra en el módulo [IAM](iam/concepts.md).
:::

### Barra superior y selección del tenant de trabajo

En la parte superior de la Consola, la barra muestra la organización actual (**«Mi organización»**). El selector asociado abre la lista **«Mis tenants»**: cada tenant aparece en ella, acompañado en su caso de la insignia **SecNumCloud** cuando está cualificado.

Para **elegir el tenant de trabajo**, hay dos opciones:

- desde la barra superior, abra el selector **«Mis tenants»** y haga clic en el tenant deseado;
- desde la página **Tenants**, utilice la acción **«Conectarse al tenant»** de una fila.

Los recursos técnicos (cálculo, almacenamiento, red, etc.) son **propios de cada tenant** y no se comparten entre tenants.

<img src={imgSelector} />

### Panel de control

El **Panel de control** es la página de inicio de la organización. Ofrece una síntesis transversal:

- el estado de los **tickets de soporte** (abiertos, respuesta requerida, validación del cliente, incidentes);
- el **número de tenants** de la organización;
- una **vista general de los costes** (coste del mes en curso, desglose por tenant y por servicio).

<img src={imgDashboard} />

### Administración de la organización

La sección **Administración** de la navegación izquierda agrupa las páginas de gobernanza de la organización.

| Página | Función |
|---|---|
| **Tenants** | Crear y evolucionar los tenants |
| **Usuarios** | Gestionar las cuentas y sus permisos |
| **Acceso** | Lista de IP públicas autorizadas (whitelist) |
| **Logs** | Registro de actividades (trazabilidad) |
| **Soporte** | Tickets de la organización |

El **Gestor de costes** (fuera de la sección Administración) proporciona el seguimiento del consumo.

### Tenants

La página **Tenants** enumera todos los tenants de la organización. Una barra de búsqueda y la paginación facilitan la navegación cuando hay muchos tenants.

#### Crear un tenant

El botón **«Nuevo tenant»** abre un formulario en dos partes:

- **Identidad del tenant**: el **nombre** (validado en tiempo real) y una **descripción**;
- **Productos del tenant**: los productos que se activarán en el tenant. Los botones **«Seleccionar todo»** / **«Deseleccionar todo»** aceleran la introducción.

Confirme con **«Crear»**: el tenant se inicializa con los productos seleccionados.

#### Acciones sobre un tenant

El menú de acciones de cada fila ofrece:

- **Conectarse al tenant** — define este tenant como tenant de trabajo;
- **Modificar los productos** — activa o desactiva productos en el tenant para modificar su alcance;
- **Copiar UUID** — copia el identificador técnico del tenant (útil para la API o un ticket de soporte).

#### Propietarios y ciclo de vida

- **Creación**: en autoservicio mediante **«Nuevo tenant»**.
- **Evolución**: adición o eliminación de productos mediante **«Modificar los productos»**.
- **Propietarios de tenant**: cada tenant tiene al menos un propietario. Las reglas (número recomendado, plazo de propagación, retirada mediante solicitud de soporte, permisos de un propietario) se detallan en el módulo [IAM](iam/concepts.md).

:::info
Las operaciones sobre los tenants quedan registradas en la página **Logs** (por ejemplo «*Creating tenant…*» o «*Updating features on tenant…*»).
:::

<img src={imgTenants} />

<img src={imgTenantNew} />

### Usuarios y permisos

La página **Usuarios** enumera las cuentas de la organización. Las credenciales son **globales a la organización**; los permisos, en cambio, se definen **por tenant**.

Para cada cuenta se muestran el **nombre**, el **correo electrónico**, el **tipo** de cuenta — **Cuenta federada** (proveedor de identidad externo) o **Cuenta local** — y marcas visuales: **Propietario de la organización**, **Yo**, o **Correo no verificado** (cuenta no finalizada).

#### Herramientas de la página

- **Filtros**: por **Propietarios de la organización**, **Tipo**, **Origen** y **Estado**.
- **Exportar CSV**: exporta la lista de usuarios y sus accesos, útil para la auditoría.

#### Acciones sobre una cuenta

El menú de acciones ofrece, según el estado de la cuenta:

- **Añadir como propietario de organización**;
- **Reinscripción** — reenvía la invitación a una cuenta no finalizada;
- **Copiar UUID**;
- **Eliminar**.

:::note
No puede eliminarse a sí mismo. La **invitación** de un nuevo usuario y la **asignación fina de permisos por tenant** se describen en el módulo [IAM](iam/quickstart.md).
:::

#### Propietario de organización y propietario de tenant

Son dos nociones distintas:

- el **propietario de la organización** se añade desde la página **Usuarios** (acción «Añadir como propietario de organización»); su **retirada se realiza mediante solicitud de soporte**;
- el **propietario de tenant** pertenece al ámbito de un tenant; sus reglas se describen en el módulo [IAM](iam/concepts.md).

:::info
Como **propietario de la organización**, es por defecto **propietario de todos los tenants** de la organización. Por ello, dispone de todos los permisos sobre cada uno de esos tenants. A la inversa, si se le retira este rol, **no** pierde esos permisos: permanecen adquiridos en los tenants correspondientes.
:::

<img src={imgUsers} />

### Acceso — whitelist IP

La página **Acceso** gestiona la **lista de direcciones IP públicas autorizadas** a alcanzar la Consola. De acuerdo con los requisitos **SecNumCloud**, solo se acepta el tráfico procedente de estas direcciones.

- Cada entrada asocia una **IP** (notación CIDR) a una **descripción**.
- El botón **«Añadir una IP»** permite añadir una dirección a la lista.

:::warning
La **eliminación** de una IP autorizada se realiza mediante **solicitud de soporte**.
:::

<img src={imgAccess} />

### Informe de consumo — Gestor de costes

El **Gestor de costes** ofrece una vista del consumo de la organización, desglosado por tenant. Ofrece dos pestañas.

#### Pestaña «Resumen»

Vista sintética del mes en curso:

- indicadores clave: **coste del mes en curso**, **coste del año en curso**, **número de productos activos**;
- **Coste por tenant** — desglose de los costes entre los tenants;
- **Coste actual por servicio** y **Coste actual por producto** — principales partidas de consumo.

#### Pestaña «Consumo»

Informe detallado e historizado:

- selección del **periodo** (mes de inicio y de fin) y del eje **«Mostrar por»**;
- vistas **Consumo mensual**, **Total**, **Previsión** y **Tendencia**;
- una tabla desplegable por **Mes / Tenant / Servicio / Producto / Importe**, con la **tendencia** respecto al mes anterior.

:::info
El importe del mes en curso es una **previsión**: se estima a partir de los días ya consumidos.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

### Registro y soporte

- **Logs** — la página **Actividades** registra las operaciones de lectura y escritura de la organización (pestañas **Recientes** / **Archivadas**, filtros, exportación CSV) con fines de trazabilidad.
- **Soporte** — la página **Soporte** centraliza los **tickets de la organización** (indicadores, creación de tickets, filtros, exportación).

## Gestión del idioma

La consola está disponible en __francés__, __inglés__. Puede cambiar el idioma de funcionamiento mediante el icono __idioma__ situado en la parte superior derecha de la pantalla.

El cambio de idioma de un usuario debe realizarse en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Ajustes de usuario'__.

<img src={shivaProfil_006} />

La configuración se aplica a cada tenant [Tenant](iam/concepts.md#tenant).

## Acceso al soporte técnico

En cualquier momento, puede contactar al __equipo de soporte de Cloud Temple__ a través de __el ícono 'boya'__ ubicado en la esquina superior derecha de la pantalla.

<img src={shivaSupport} />

Será guiado durante todo el proceso de solicitud de soporte.

El primer paso es identificar el tipo de solicitud de soporte:

- Solicitar asesoramiento sobre el uso de un producto (fuera de incidentes),
- Solicitar asistencia relacionada con su cuenta de cliente,
- Declarar un incidente o solicitar soporte técnico.
- Solicitar la asistencia de un servicio profesional (puesta a disposición de un ingeniero de Cloud Temple para resolver un problema).

<img src={shivaSupport_01} />

Posteriormente, tiene la posibilidad de proporcionar detalles e incluir archivos (imágenes o registros, por ejemplo).

El solicitante también puede especificar un nivel de criticidad (P1 a P5) en la descripción del ticket, en caso de un incidente de seguridad, como:

<img src={shivaSupportCriticities} />

__CRÍTICA (P1)__:

- Sospecha de fuga de datos sensibles
- Detección de un acceso no autorizado a sus datos
- Comprometimiento de sus credenciales de administración
- Indisponibilidad total de sus servicios críticos
- Comportamientos anómalos en datos sensibles
- Violación de datos personales

__ALTA (P2)h__:

- Mal funcionamiento de los accesos de usuario
- Anomalía en el cifrado de sus datos
- Pérdida de acceso a ciertas funcionalidades críticas
- Incoherencia en los datos
- Lentitud importante que afecta a la actividad

__MEDIA (P3)__:

- Problema de rendimiento localizado
- Incidente en una función no crítica
- Error de configuración con impacto limitado
- Dificultad de acceso puntual

__BAJA (P4)__:

- Solicitud de investigación
- Anomalía sin impacto directo
- Consulta sobre cumplimiento
- Necesidad de aclaración técnica

__SERVICIO OPERATIVO (P5)__:

- Servicio operativo sin riesgo inmediato

<img src={shivaSupport_02} />

Una vez realizada su solicitud, es posible encontrar sus solicitudes a través de __el ícono 'boya'__ ubicado en la esquina superior derecha de la pantalla:

<img src={shivaSupport_03} />

## Acceso a las funcionalidades de usuario a través de la interfaz web

El conjunto de funcionalidades accesibles para su usuario (en función de sus permisos) se encuentra a la izquierda de la pantalla, en la barra verde.
Las funcionalidades están agrupadas por módulo. Esto incluye principalmente:

- El __inventario__ de sus recursos,
- El __seguimiento de operaciones__,
- La __gestión de recursos IaaS__ (Cálculo, almacenamiento, red, ...)
- La __gestión de recursos OpenIaaS__ (Cálculo, almacenamiento, red, ...)
- El acceso a los __servicios complementarios__ (Bastión, monitoring, ...)
- La __administración de su organización__ (Gestión de tenants, permisos, ...)

La activación de un módulo para un usuario depende de los permisos de este. Por ejemplo, el módulo __'Pedido'__ no estará disponible si el usuario no cuenta con el permiso __'ORDER'__.

A continuación se presenta una descripción de los diferentes módulos disponibles. Nuevos módulos se añaden regularmente para enriquecer la consola:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Panel de Control__ : permite obtener rápidamente una visión del __total de recursos de cálculo y almacenamiento__, las estadísticas de la __copia de seguridad__ y un __resumen de los expedientes de soporte__,
- __Inventario__ : permite obtener una visión del conjunto de sus recursos de tipo __'máquinas virtuales'__. Si se utilizan __etiquetas__, permite obtener una vista por __etiqueta__ (por ejemplo, vista empresarial, vista de aplicación, ...),
- __Gestión externa__ : da acceso al seguimiento de sus __solicitudes de soporte__ y a la __métrica de los servicios__,
- __IaaS__ : permite la __gestión de infraestructuras IaaS VMware__ (Máquinas virtuales, clústers, hipervisores, réplicas, copias de seguridad, ...),
- __OpenIaaS__ : permite la __gestión de recursos Xen Orchestra__ (Máquinas virtuales, copias de seguridad, ...),
- __OpenShift__ : permite la gestión de su **arquitectura PaaS RedHat OpenShift** y la administración de sus contenedores en las 3 zonas de disponibilidad de la plataforma.
- __Bastión__ : Permite desplegar y gestionar appliances de bastión SSH/RDP en sus redes,
- __Red__ : permite la gestión de __redes de nivel 2 y 3__, de las __IPs públicas__ y de sus __circuitos de telecomunicaciones__,
- __Colocación__ : Ofrece la visión de los equipos situados en zona de __colocación compartida o dedicada__,
- __Pedido__ : Permite el pedido de recursos y el seguimiento de los despliegues,
- __Administración__ : Agrupa las funciones de administración de usuarios y tenants, así como el acceso al registro global.
</div>
</div>
Los pictogramas __'NEW'__ indican que el producto en cuestión ha sido aprovisionado pero aún no está cualificado para la __oferta SecNumCloud__, y __'BETA'__ indican que el producto en cuestión ha sido aprovisionado y acaba de ser cualificado para la __oferta SecNumCloud__.

__Registro - Seguimiento de Actividades__
=====================================

La página de actividades está destinada a proporcionar una visibilidad completa sobre todas las operaciones de lectura y escritura realizadas dentro de la consola, asegurando así una trazabilidad y una seguridad mejoradas. Destaca las dos pestañas principales: Recientes y Archivadas.

<img src={shivaLogs} />

### __Estructura de la Página__

#### __Pestañas__

- __Recientes__

- Operaciones recientes
- Seguimiento en tiempo real

- __Archivados__

- Operaciones en un período más largo
- Operaciones archivadas para trazabilidad y cumplimiento

#### __Información Mostrada__

- Fecha y Hora

- Tipo de operación
  - Estado
- Usuario
- Descripción de la operación

#### __Funcionalidad__

- Búsqueda/Filtrado para operaciones específicas

### __Uso__

- __Acceso :__ permiso `activity_read`
- __Navegación :__
  - Seleccione la pestaña "Recientes" para las operaciones en tiempo real.
  - Elija "Archivados" para consultar el historial.
  - Utilice las funciones de búsqueda y filtrado para localizar operaciones específicas.

#### __Nota de Cumplimiento__

Conforme a la certificación SecNumCloud, el almacenamiento de los eventos de la consola Cloud Temple tiene una duración mínima de __6 meses__, garantizando así el cumplimiento de los requisitos de seguridad y trazabilidad.

## Consulta de las últimas actualizaciones

Haga clic en la esquina inferior izquierda de la barra verde en el icono __'Novedades'__. Verá el detalle de los cambios para cada versión de la consola Cloud Temple.

<img src={shivaOnboard_009} />

## Acceso a las funcionalidades de usuario a través de la API

El acceso a todas las funcionalidades de la Consola es posible a través de la API de Consola. Puede consultar el detalle de los métodos y las configuraciones a través de __'Perfil'__ y __'APIs'__ :

<img src={shivaOnboard_008} />

## Proveedor Terraform

Cloud Temple pone a su disposición un [provider Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) para gestionar *"como código"* su plataforma Cloud.