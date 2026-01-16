---
title: Conceptos del Almacenamiento Objeto
sidebar_position: 2
---

# Conceptos del Almacenamiento Objeto (OSS)

## Arquitectura Técnica

El servicio de almacenamiento de objetos de Cloud Temple está construido sobre una arquitectura distribuida que garantiza una alta durabilidad y disponibilidad de los datos. Los objetos se almacenan de forma redundante en múltiples nodos de almacenamiento dentro de nuestros datacenters certificados SecNumCloud.

El acceso al servicio se realiza a través de una API RESTful estándar, compatible con el protocolo S3, lo que le permite utilizar una amplia gama de herramientas y SDKs existentes.

## Componentes Principales

-   **Objetos**: Los datos fundamentales almacenados en el servicio. Un objeto está compuesto por datos (el archivo en sí) y metadatos (información descriptiva sobre el objeto).
-   **Buckets (Contenedores)**: Los objetos se organizan en buckets. Un bucket es un contenedor para objetos, y su nombre debe ser único dentro del servicio.
-   **Claves**: Cada objeto dentro de un bucket se identifica de forma única mediante una clave (un nombre de archivo).
-   **Endpoints**: Las URL regionales que utiliza para acceder a la API del servicio de almacenamiento.

## Seguridad y cifrado

La seguridad de sus datos es nuestra máxima prioridad. El servicio OSS integra mecanismos de cifrado robustos para proteger sus datos, ya sea cuando están almacenados (en reposo) o cuando se transmiten a través de la red.

### Cifrado de Datos en Reposo (Data at Rest Encryption - D@RE)

Para proteger sus datos almacenados, nuestro servicio utiliza cifrado del lado del servidor.

-   **Activación**: El cifrado D@RE se activa a nivel de *namespace* (espacio de nombres).
-   **Algoritmo**: Utilizamos el algoritmo **AES-256**, uno de los estándares de cifrado más seguros disponibles.
-   **Funcionamiento**: Cuando escribe un objeto en un bucket donde D@RE está activado, el servicio cifra automáticamente sus datos antes de escribirlos en los discos. Cuando lee el objeto, se descifra de forma transparente para usted. La gestión de las claves de cifrado está completamente gestionada por el servicio.

### Cifrado de Datos en Tránsito

Todas las comunicaciones con la API del servicio de almacenamiento objeto, ya sea para subir, descargar o gestionar sus datos, deben estar protegidas.

-   **Protocolo**: Exigimos el uso del protocolo **TLS (Transport Layer Security)**, versiones **1.2 y 1.3**.
-   **Funcionamiento**: Al utilizar HTTPS para todas sus solicitudes de API, se asegura que los datos intercambiados entre su cliente y nuestros servidores estén cifrados, protegiéndolos así contra la interceptación o alteración durante su tránsito por la red.