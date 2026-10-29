---
title: Conceptos
sidebar_position: 2
---

<a id="concepts-du-stockage-objet-oss"></a>

## Presentación

El **Almacenamiento de objetos** es un servicio de almacenamiento distribuido, escalable y económico para datos no estructurados. Compatible con el protocolo S3, replica automáticamente los datos en tres zonas de disponibilidad y no factura las transferencias salientes. Es adecuado para el archivado, la copia de seguridad y el almacenamiento de datos de aplicaciones en un entorno soberano.

### Destinatarios y casos de uso

- **Desarrolladores de aplicaciones**: almacenamiento para aplicaciones cloud-native y microservicios.
- **Equipos DevOps**: copia de seguridad y archivado de datos críticos.
- **Datos voluminosos**: gestión económica de grandes volúmenes.
- **Contenidos enriquecidos**: imágenes, vídeos y documentos.
- **Sector público**: archivado a largo plazo conforme a los requisitos de soberanía.

## Ventajas

| Ventaja                   | Descripción                                                                          |
|---------------------------|--------------------------------------------------------------------------------------|
| Escalabilidad             | La arquitectura horizontal se adapta al crecimiento de sus datos.                    |
| Durabilidad y redundancia | Los datos se distribuyen automáticamente en tres zonas de disponibilidad.            |
| Sin costes de salida      | La transferencia saliente de sus datos es gratuita.                                  |
| Compatibilidad S3         | Las herramientas y SDKs S3 existentes se utilizan sin adaptación.                    |

## Funcionalidades

| Funcionalidad            | Descripción                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| API compatible con S3    | Acceso mediante la API S3, compatible al 97 % con AWS S3.                   |
| Tipo de bucket           | Elección en la creación entre un bucket «rendimiento» o «archivado».        |
| Replicación en 3 zonas   | Redundancia automática en tres zonas de disponibilidad.                     |
| Erasure Coding           | Protección EC 12+4.                                                         |
| Cifrado en reposo        | Cifrado del lado del servidor, activado a nivel del *namespace*.            |
| Solicitudes prefirmadas  | URLs temporales seguras.                                                    |
| Modos de acceso de red   | Control de la exposición de red de los buckets (público, privado, personalizado). |
| Clientes universales     | AWS-CLI, S3CMD, minio-CLI, MC CLI.                                          |

### Componentes principales

- **Objetos**: los datos fundamentales almacenados en el servicio. Un objeto se compone de datos (el propio archivo) y de metadatos (información descriptiva sobre el objeto).
- **Buckets (contenedores)**: los objetos se organizan en buckets. Un bucket es un contenedor de objetos, y su nombre debe ser único dentro del servicio.
- **Claves**: cada objeto de un bucket se identifica de forma única mediante una clave (un nombre de archivo).
- **Endpoints**: las URLs regionales que utiliza para acceder a la API del servicio.

<a id="architecture-technique"></a>

## Arquitectura

El servicio se basa en una arquitectura distribuida que garantiza una alta durabilidad y una alta disponibilidad de los datos. Los objetos se almacenan de forma redundante en varios nodos de almacenamiento, distribuidos en tres zonas de disponibilidad.

- **Erasure Coding EC 12+4**: los datos se dividen en 12 segmentos y se completan con 4 segmentos de paridad.
- **Distribución**: los segmentos se reparten entre diferentes nodos y racks.
- **Red**: red de alto rendimiento, hasta 100 Gb/s.

El acceso al servicio se realiza mediante una API RESTful estándar, compatible con el protocolo S3, lo que permite utilizar una amplia gama de herramientas y SDKs existentes. El servicio se integra con la consola Cloud Temple y también se gestiona como Infrastructure as Code con Terraform.

## Regiones y zonas de disponibilidad

El Almacenamiento de objetos está disponible en la región FR1. Los datos se distribuyen en tres zonas de disponibilidad.

## Especificaciones técnicas

| Parámetro             | Valor                                 |
|-----------------------|---------------------------------------|
| Compatibilidad        | 97 % AWS S3                           |
| Durabilidad           | 99,999999999 % (once nueves), anual   |
| Erasure Coding        | EC 12+4                               |
| Rendimiento de red    | 1 Gbps garantizado, hasta 100 Gb/s    |
| Cifrado               | TLS 1.2 / 1.3 en tránsito, AES-256 en reposo |

### Límites

- 999 buckets por tenant.
- 5 TB por objeto.

<a id="sécurité-et-chiffrement"></a>

## Seguridad y cumplimiento

El Almacenamiento de objetos está certificado HDS e ISO 27001, es conforme con C5 y está cualificado SecNumCloud.

La seguridad de sus datos es una prioridad. El servicio integra mecanismos de cifrado para proteger sus datos, tanto almacenados (en reposo) como en tránsito por la red.

### Cifrado de los datos en reposo (Data at Rest Encryption - D@RE)

Para proteger sus datos almacenados, el servicio utiliza el cifrado del lado del servidor.

- **Activación**: el cifrado D@RE se activa a nivel del *namespace* (espacio de nombres).
- **Algoritmo**: cifrado **AES de 256 bits** certificado **FIPS 140-3**, mediante la biblioteca de software **RSA BSAFE Crypto-J** en versión **7.x**.
- **Funcionamiento**: cuando escribe un objeto en un bucket en el que D@RE está activado, el servicio cifra automáticamente sus datos antes de escribirlos en los discos. En la lectura, el objeto se descifra de forma transparente. La gestión de las claves de cifrado corre íntegramente a cargo del servicio.

### Cifrado de los datos en tránsito

Todas las comunicaciones con la API del servicio, ya sea para cargar, descargar o gestionar sus datos, deben estar protegidas.

- **Protocolo**: se impone el uso del protocolo **TLS (Transport Layer Security)**, versiones **1.2 y 1.3**.
- **Funcionamiento**: al utilizar HTTPS para todas sus solicitudes API, los datos intercambiados entre su cliente y los servidores se cifran y quedan protegidos contra la interceptación o la alteración durante su tránsito.

## Disponibilidad del servicio

El objetivo de disponibilidad del servicio es del 99,99 %, medido mensualmente, incluidas las ventanas de mantenimiento.

## Responsabilidades

El reparto de responsabilidades entre el cliente y Cloud Temple se detalla en la [matriz de responsabilidades (RACI) del almacenamiento de objetos](../../contractual/iaas/raci_s3.md).

## Reversibilidad

Puede recuperar sus datos en cualquier momento, de forma autónoma, con las herramientas S3 estándar.

| Operación                   | Descripción                                                                                  | Coste      |
|-----------------------------|----------------------------------------------------------------------------------------------|------------|
| Recuperación de los datos   | Descarga de todos sus objetos mediante la API S3.                                            | Sin coste  |
| Transferencia saliente      | Sin costes de salida al transferir sus datos a otro proveedor.                               | Sin coste  |
| Asistencia a la migración   | Soporte técnico bajo demanda para las operaciones de migración complejas.                    | Bajo presupuesto |

## Precios

El servicio se factura según la capacidad realmente utilizada, sin costes de salida. Las tarifas se publican en la página del producto en el sitio web de Cloud Temple:
[Almacenamiento de objetos — precios](https://www.cloud-temple.com/produits/stockage-objet/).
