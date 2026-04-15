---
title: Preguntas Frecuentes
---

## Is S3 access restricted to the internal network?

No — there is no "private internal network" in this context. Access to the **S3** service is performed **via public IP addresses**. By default, S3 buckets are **private**, and access is controlled through IP address whitelists associated with the bucket.

Allowed IP addresses can be:

- **Dedicated public IPs** assigned to the client within the Cloud Temple infrastructure;
- or **external public IPs** (remote sites, warehouses, factories, partner operators, etc.).

## ¿Se pueden tener buckets accesibles desde el exterior?

Sí, pero únicamente en casos específicos. La restricción de acceso se gestiona **por bucket**, lo que permite definir:

- **buckets estrictamente privados**, accesibles únicamente desde las IP públicas autorizadas del cliente;
- **buckets parcialmente accesibles**, permitiendo direcciones IP públicas externas específicas (sitios remotos, socios).

## ¿Qué es un enlace de descarga seguro S3?

Una **URL prefirmada** (*pre-signed URL*) es una URL temporal y firmada que permite acceder de forma puntual a un objeto S3 sin exponer credenciales permanentes. El enlace contiene un **token** y una **fecha de caducidad**.

**Características:**

- Duración de validez configurable (por ejemplo, 5 días por defecto)
- Generación mediante API o desde la aplicación
- Acceso sujeto a reglas de lista blanca de IP y a las políticas del bucket

## ¿Pueden utilizarse los enlaces prefirmados desde fuera?

No, si el bucket está restringido por lista de IP.

Incluso con un enlace prefirmado válido, el acceso será denegado si la solicitud no proviene de una **dirección IP pública autorizada** para este bucket.

Ejemplo:

> Si el bucket está configurado para autorizar únicamente las IP públicas dedicadas del cliente, un usuario externo **no podrá** descargar el archivo, incluso si dispone de un enlace temporal.

## ¿Se pueden crear enlaces temporales para usos puntuales?

Sí. Los **enlaces prefirmados** se pueden generar bajo demanda para compartir de forma temporal. Incluyen un **token de acceso** y caducan tras el período configurado.

Estos enlaces siempre están sujetos a las **restricciones de IP** del bucket.

## ¿Qué ocurre si una solicitud proviene de una IP no autorizada?

El acceso se **rechaza** (HTTP 403 – *Acceso denegado*).

El servicio verifica:

1. La validez del **token** (si se trata de un enlace prefirmado)
2. La **IP de origen** de la solicitud
3. Las **políticas ACL** y reglas configuradas en el bucket

Cualquier condición no cumplida provoca el rechazo del acceso.

## Escenarios de uso recomendados

- **Archivado interno del cliente**: buckets privados accesibles únicamente desde las IP públicas dedicadas del cliente (gestión mediante lista blanca).
- **Compartir de forma segura de forma temporal**: generación de enlaces prefirmados con expiración corta y control estricto de las IP autorizadas.
- **Acceso específico desde ubicación remota**: autorización de IP públicas externas precisas para sitios empresariales (almacenes, fábricas) tras validación de seguridad.