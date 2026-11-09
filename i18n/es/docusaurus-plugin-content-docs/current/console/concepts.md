---
title: Conceptos de la Console
---

## Presentación

La **Consola Cloud Temple** es el punto de entrada a los productos de Cloud Temple que integra: cálculo, almacenamiento, red, seguridad, IA y otros. Algunos servicios gestionados (Kubernetes gestionado, bases de datos gestionadas, AIOps) se contratan a través de los equipos de Cloud Temple y no se controlan desde la Consola. En ella se piden y gestionan los recursos en autoservicio, se gestionan las identidades y los accesos, se siguen las operaciones y se abren las solicitudes de soporte.

Está diseñada *API-first*: la interfaz web se apoya en la API pública, que puede utilizar directamente, con el proveedor Terraform o con el servidor MCP.

Está dirigida a los equipos de TI que administran su plataforma, a los equipos DevOps que la automatizan, a los equipos de seguridad y cumplimiento que controlan los accesos y la trazabilidad, y a los equipos de producción que siguen las operaciones.

El modelo en el que se basa la Consola (organización, tenants, usuarios y permisos) se describe en la sección Arquitectura; su documentación de referencia es el módulo [IAM](./iam/concepts.md).

## Ventajas

| Ventaja | Descripción |
|---|---|
| Punto de entrada único | Los recursos de los productos integrados en la Consola en un mismo portal, con un único juego de credenciales. |
| Autoservicio | Crea, configura y elimina sus recursos en cualquier momento, sin intervención de Cloud Temple. |
| Automatización | La plataforma se controla por API o con Terraform, con configuraciones versionables e integrables en sus cadenas CI/CD. |
| Seguridad y trazabilidad | Accesos filtrados por dirección IP, doble factor, permisos por tenant y registro de las acciones. |

## Funcionalidades

| Funcionalidad | Descripción |
|---|---|
| Consola web | Panel de control, inventario de recursos, pedidos en autoservicio, acceso a los productos contratados integrados en la Consola. |
| Gestión de identidades y accesos | Organización, tenants, usuarios y permisos: consulte el módulo [IAM](./iam/concepts.md). |
| API REST | API documentada en formato OpenAPI 3.0, consultable desde la Consola: consulte la [API de la Consola](./api.md). |
| Proveedor Terraform | Proveedor `Cloud-Temple/cloudtemple`, publicado en el Terraform Registry: consulte el [proveedor Terraform](../terraform/terraform.md). |
| Servidor MCP | Conexión de un cliente de IA compatible con MCP (*Model Context Protocol*) a su tenant, para consultar su entorno. |
| Seguimiento de las operaciones | [Operaciones planificadas e incidentes](./status.md), registro de actividades. |
| Soporte | Creación y seguimiento de las solicitudes de soporte desde la Consola. |

## Arquitectura

### Organización y tenants

Toda la plataforma se basa en dos niveles.

**La organización** representa su entidad: empresa, departamento o equipo. Lleva su contrato y su facturación, y reúne todas las cuentas de usuario. También define el mecanismo de autenticación común a esas cuentas: local en la Console o federado con su propio directorio.

**El tenant** es un entorno de trabajo dentro de la organización. Una organización tiene al menos uno. Los recursos encargados se asignan a un tenant concreto y no se comparten con los demás tenants.

```
Su organización
├── Tenant «producción»
├── Tenant «aceptación»
└── Tenant «laboratorio»
```

El reparto en tenants le corresponde: por entorno (producción, pruebas de aceptación), por aplicación o por criticidad. Puede añadir tenants en cualquier momento, y ningún producto se activa de oficio: usted elige los productos de cada tenant. El detalle está en [Organizaciones](./iam/concepts.md#organizaciones) y [Tenant](./iam/concepts.md#tenant).

Los recursos de un tenant se despliegan en [regiones y zonas de disponibilidad](../additional_content/concepts_regional.md).

### Usuarios y permisos

Las **credenciales** de un usuario son globales a la organización. Sus **permisos**, en cambio, se definen tenant por tenant: una cuenta puede estar autorizada a encargar recursos en un tenant, pero no en otro.

Hay que distinguir dos roles:

- el **propietario de la organización** gestiona las cuentas, los tenants y las direcciones IP autorizadas. Por defecto, es propietario de todos los tenants de la organización;
- el **propietario de un tenant** recibe todos los permisos asociados a los productos activados en ese tenant.

Una misma persona puede tener los dos roles. Las reglas completas están en [Asignación de permisos en un tenant](./iam/concepts.md#asignación-de-permisos-en-un-tenant) y en la [lista de permisos](./iam/concepts.md#permisos).

### La interfaz y la API

Todo lo que hace en la Console también es posible a través de su [API](./api.md). Se autentica con una **clave de API** (*Personal Access Token*), vinculada a un tenant y al usuario que la creó. El [proveedor de Terraform](../terraform/terraform.md), que gestiona su plataforma *as code*, también se autentica con credenciales de API generadas desde la Console.

## Regiones y zonas de disponibilidad

La Consola y la API están alojadas en Francia. Controlan los recursos de sus tenants, desplegados en las regiones y zonas de disponibilidad propias de cada producto.

## Especificaciones técnicas

### Interfaz

La Consola está disponible en francés, inglés, alemán, español e italiano.

### API y proveedor Terraform

- La API sigue el formato OpenAPI 3.0; su documentación interactiva está accesible desde la Consola. Cada solicitud de escritura genera una [actividad](./api.md) que permite seguir su estado.
- El proveedor Terraform es compatible con Terraform 1.0 y versiones posteriores, así como con OpenTofu.

### Servidor MCP

El servidor MCP se apoya en la API pública y aplica sus mismos controles: autenticación mediante token de acceso personal, permisos, filtrado por dirección IP y registro de las acciones. Un cliente de IA solo actúa dentro de los permisos del token utilizado.

### Límites

- Los límites de caudal de la API se definen por producto; por encima de ellos, la API responde con un error HTTP 429: consulte la [API de la Consola](./api.md).

## Seguridad y cumplimiento

### Acceder a la Console

El acceso a la Console está protegido en dos niveles:

- **las direcciones IP autorizadas**: solo las direcciones IP públicas declaradas por su organización pueden llegar a la Console. La lista es única para toda la organización, sea cual sea el tenant desde el que se modifique;
- **el doble factor**: es obligatorio para todas las cuentas de la Console. Si su organización está federada con su propio directorio, consulte los [mecanismos de autenticación](./iam/concepts.md#mecanismos-de-autenticación).

El procedimiento se describe en [Conectarse y proteger sus accesos](./onboarding.md#etapa-2-conectarse-y-proteger-sus-accesos).

### Trazabilidad

Las operaciones se registran: identidad del iniciador, fecha, tipo de operación y estado. Al estar la Consola alojada en una infraestructura cualificada SecNumCloud, sus eventos se conservan como mínimo 6 meses.

### Certificaciones

La Consola está certificada HDS e ISO 27001, e incluida en los servicios cualificados SecNumCloud y conformes a C5.

## Reversibilidad

La Consola y la API no almacenan sus datos de aplicación: conservan los metadatos de configuración y los registros.

- **Configuraciones Terraform**: sus archivos de configuración y su archivo de estado (*state*) le pertenecen.
- **Registros de actividad**: exportables mediante la API de la Consola.

## Precios

La Consola, la API, el servidor MCP y el proveedor Terraform están incluidos sin coste adicional en cualquier suscripción de Cloud Temple. Los recursos que pide se facturan según el precio de cada producto. Consulte la página del producto en el sitio web de Cloud Temple:
[Consola – API – Proveedor Terraform](https://www.cloud-temple.com/produits/console-api-provider-terraform/).
