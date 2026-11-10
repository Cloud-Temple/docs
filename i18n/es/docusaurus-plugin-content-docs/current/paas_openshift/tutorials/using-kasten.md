---
title: Configurar Copias de Seguridad con Kasten en el S3 SNC Cloud Temple
---

---

## Objetivos

El objetivo principal de esta guía es mostrarle cómo configurar un almacenamiento **S3 SNC (SecNumCloud)** en Kasten para realizar y gestionar sus copias de seguridad en la infraestructura de Cloud Temple. Esta guía abarca los pasos necesarios para configurar esta integración en un entorno OpenShift.

---

## Limitaciones conocidas

En el contexto de esta configuración:

- **Acceso a la oferta S3 Cloud Temple**: Debe disponer de la oferta S3 proporcionada por Cloud Temple (clave de acceso y clave secreta).  
  
---

## Puntos fuertes

- **Seguro y certificado**: Cloud Temple ofrece un almacenamiento S3 conforme a los estándares **SecNumCloud**, certificado y seguro.  
- **Facilidad de integración con Kasten**: La interfaz intuitiva de Kasten permite una configuración rápida y directa.  
- **Adaptado a entornos modernos**: Esta solución está diseñada para integrarse fácilmente con clústeres Kubernetes que funcionan con OpenShift.  

---

## Versiones de software

Asegúrese de que las siguientes versiones de software y herramientas estén instaladas para garantizar una compatibilidad óptima:  

- **Kasten K10**: v5.5.10 o superior  
- **OpenShift CLI**: v4.15.6 o superior  
- **Kubernetes**: v1.24 o superior (vía OpenShift)  

---

## Requisitos previos

Para seguir esta guía, asegúrese de tener los siguientes elementos:

1. **Acceso a la interfaz de Kasten**: Debe poder acceder al tablero de Kasten desplegado en su clúster OpenShift.  
2. **Claves S3 proporcionadas por Cloud Temple**:
   - Clave de acceso (Access Key)
   - Clave secreta (Secret Key)  
3. **Bucket preconfigurado**: Un bucket en S3 Cloud Temple, por ejemplo: `demobackup`.
4. **Permisos de Kubernetes**: Debe tener permisos administrativos dentro del namespace de Kasten (`kasten-io`) para realizar configuraciones.  

---

## Plan de demostración

### Vista general de los pasos

1. Preparación del entorno Kasten y OpenShift.  
2. Configuración de un perfil S3 en la interfaz de Kasten.  
3. Creación y validación de tareas de copia de seguridad apuntando al almacenamiento S3 configurado.  

---

## Archivos necesarios

No se requiere ningún archivo específico para esta configuración, pero necesitará la siguiente información proporcionada por Cloud Temple:  

- **Clave de acceso S3**  
- **Clave secreta S3**  
- **URL del endpoint S3 SNC**: Por ejemplo, `xxxxx.s3.fr1.cloud-temple.com`.  
- **Nombre de su Bucket**: Ejemplo, `demobackup`.

---

## Despliegue

### 1. Acceder a Kasten via OpenShift

Acceda a la interfaz gráfica de su clúster OpenShift:  

1. Inicie sesión en la consola de OpenShift y acceda al namespace donde se ha desplegado Kasten (por defecto `kasten-io`).  
2. Vaya a la pestaña **Aplicaciones** y haga clic en el enlace de redirección al tablero de Kasten.  
3. Una vez en Kasten, asegúrese de que las dependencias estén funcionales (conectividad a los nodos, recursos disponibles).  

---

### 2. Crear un perfil S3 en Kasten

1. Una vez en el tablero de Kasten, vaya a la sección **"Locations"** (Ubicaciones).  
2. Haga clic en el botón **"Add New Location"** (Añadir nueva ubicación).  
3. Elija el tipo de almacenamiento **"S3 Compatible Storage"**.  
4. Rellene los siguientes parámetros:  

   - **Tipo**: S3 Compatible Storage  
   - **Región**: `FR1`  
   - **Nombre del Bucket**: `demobackup`  
   - **Endpoint (URL)**: `xxxxx.s3.fr1.cloud-temple.com`  
   - **Clave de acceso (Access Key)**: Introduzca la clave de acceso proporcionada por Cloud Temple.  
   - **Clave secreta (Secret Key)**: Introduzca la clave secreta asociada.  

5. Pruebe la conectividad a través de la interfaz para verificar que la conexión al bucket es exitosa.  
6. Guarde la configuración.  

---

### 3. Configurar y validar una tarea de copia de seguridad

1. En Kasten, cree una política (Policy) para gestionar sus copias de seguridad:  
   - Vaya a la sección **Policies** (Políticas).  
   - Haga clic en **Create Policy** (Crear política).  
   - Seleccione **Backup** como tipo de tarea.  
   - Elija los namespaces o workloads a incluir en la copia de seguridad (por ejemplo, una aplicación crítica desplegada en OpenShift).  

2. En **Location** (Ubicación), seleccione la ubicación S3 que ha configurado anteriormente (`demobackup`).  

3. Programe la frecuencia de las copias de seguridad:  
   - Ejemplo: Copia de seguridad diaria a las 23:00 horas.  

4. Guarde la política, luego lance una prueba manual para verificar el buen funcionamiento de sus copias de seguridad.  

---

### 4. Verificar el estado de las copias de seguridad

1. Vaya a la sección **Activities** (Actividades) de Kasten.  
2. Consulte las copias de seguridad completadas y verifique que los datos se han enviado correctamente a su bucket S3 Cloud Temple.  
3. Inicie sesión en la interfaz S3 de Cloud Temple para verificar la presencia de los archivos de copia de seguridad en el bucket.  

---

## Criterios de validación

Para confirmar que la copia de seguridad está correctamente configurada:

1. Las pruebas de conectividad con el bucket S3 (endpoint, clave de acceso, clave secreta) son exitosas.  
2. Las copias de seguridad se ejecutan sin errores y se muestran en la sección **Activities** de Kasten.  
3. Los archivos de copia de seguridad aparecen en el bucket S3 (verifique a través de la interfaz Cloud Temple).  
4. Los workloads respaldados pueden ser restaurados con éxito a través de Kasten.  

---

## Conclusión

Siguiendo esta guía, ha configurado con éxito una ubicación de copia de seguridad S3 compatible con SecNumCloud en Kasten con la infraestructura de Cloud Temple. Este flujo de trabajo permite gestionar eficazmente sus copias de seguridad, aprovechando un almacenamiento certificado y seguro.  

Para ir más allá, puede:  

- Añadir otros workloads a respaldar.  
- Configurar políticas de retención avanzadas en Kasten.  
- Automatizar las pruebas de restauración para validar sus datos.  

¡Ahora dispone de una solución robusta y conforme para asegurar sus datos críticos! 🚀
