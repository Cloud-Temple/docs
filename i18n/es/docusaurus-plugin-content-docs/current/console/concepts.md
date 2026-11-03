---
title: Conceptos de la Console
---

Esta página presenta el modelo en el que se basa la Console: la organización, los tenants, los usuarios y sus permisos, y las dos formas de acceder a ella. La documentación de referencia de este modelo es el módulo [IAM](./iam/concepts.md).

## Organización y tenants

Toda la plataforma se basa en dos niveles.

**La organización** representa su entidad: empresa, departamento o equipo. Lleva su contrato y su facturación, y reúne todas las cuentas de usuario. También define el mecanismo de autenticación común a esas cuentas: local en la Console o federado con su propio directorio.

**El tenant** es un entorno de trabajo dentro de la organización. Una organización tiene al menos uno. Los recursos encargados se asignan a un tenant concreto y no se comparten con los demás tenants.

```
Su organización
├── Tenant «producción»
├── Tenant «preproducción»
└── Tenant «laboratorio»
```

El reparto en tenants le corresponde: por entorno (producción, preproducción), por aplicación o por criticidad. Puede añadir tenants en cualquier momento, y ningún producto se activa de oficio: usted elige los productos de cada tenant. El detalle está en [Organizaciones](./iam/concepts.md#organizaciones) y [Tenant](./iam/concepts.md#tenant).

Los recursos de un tenant se despliegan en [regiones y zonas de disponibilidad](../additional_content/concepts_regional.md).

## Usuarios y permisos

Las **credenciales** de un usuario son globales a la organización. Sus **permisos**, en cambio, se definen tenant por tenant: una cuenta puede estar autorizada a encargar recursos en un tenant, pero no en otro.

Hay que distinguir dos roles:

- el **propietario de la organización** gestiona las cuentas, los tenants y las direcciones IP autorizadas. Por defecto, es propietario de todos los tenants de la organización;
- el **propietario de un tenant** recibe todos los permisos asociados a los productos activados en ese tenant.

Una misma persona puede tener los dos roles. Las reglas completas están en [Asignación de permisos en un tenant](./iam/concepts.md#asignación-de-permisos-en-un-tenant) y en la [lista de permisos](./iam/concepts.md#permisos).

## Acceder a la Console

El acceso a la Console está protegido en dos niveles:

- **las direcciones IP autorizadas**: solo las direcciones IP públicas declaradas por su organización pueden llegar a la Console. La lista es única para toda la organización, sea cual sea el tenant desde el que se modifique;
- **el doble factor**: es obligatorio para todas las cuentas de la Console. Si su organización está federada con su propio directorio, consulte los [mecanismos de autenticación](./iam/concepts.md#mecanismos-de-autenticación).

El procedimiento se describe en [Conectarse y proteger sus accesos](./onboarding.md#etapa-2-conectarse-y-proteger-sus-accesos).

## La interfaz y la API

Todo lo que hace en la Console también es posible a través de su [API](./api.md). Se autentica con una **clave de API** (*Personal Access Token*), vinculada a un tenant y al usuario que la creó. El [proveedor de Terraform](../terraform/terraform.md), que gestiona su plataforma *as code*, también se autentica con credenciales de API generadas desde la Console.
