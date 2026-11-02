---
title: Conceptos
---

## Presentación

GPU proporciona tarjetas gráficas NVIDIA H100 y L40S para los cálculos de inteligencia artificial, aprendizaje automático y computación de alto rendimiento. Los GPU no se contratan por separado: están integrados en los blades de cálculo y en los worker nodes de las ofertas IaaS y PaaS. Usted los utiliza desde máquinas virtuales, servidores Bare Metal, contenedores o clústeres Kubernetes, con las herramientas estándar del ecosistema NVIDIA.

### Destinatarios y casos de uso

GPU está dirigido a científicos de datos, investigadores, ingenieros, empresas que despliegan servicios de IA y al sector público. Casos de uso típicos:

- **Entrenamiento de modelos**: entrenamiento de redes neuronales y aprendizaje profundo (deep learning).
- **Inferencia**: despliegue de servicios de IA en producción.
- **Visión por computador**: procesamiento de imágenes y vídeos.
- **Ingeniería y simulación**: herramientas de modelado y de simulación.
- **Investigación científica**: cálculo científico, modelado de escenarios complejos y análisis de datos masivos.

## Ventajas

| Ventaja                    | Descripción                                                                                                       |
|----------------------------|-------------------------------------------------------------------------------------------------------------------|
| Aceleración de los cálculos | Los GPU aceleran el entrenamiento y la inferencia de los modelos de IA en comparación con un procesamiento en CPU. |
| Varios modos de uso        | Los GPU se utilizan desde máquinas virtuales, servidores Bare Metal, contenedores y Kubernetes.                   |
| Recursos dedicados         | Las tarjetas están instaladas en blades de cálculo dedicados a su uso.                                            |
| Particionamiento           | Una tarjeta H100 puede compartirse entre varias cargas de trabajo aisladas gracias a Multi-Instance GPU (MIG).    |
| Ecosistema estándar        | CUDA, cuDNN y los principales frameworks de IA se utilizan sin adaptación.                                        |
| Alojamiento en Francia     | Los recursos GPU y los datos procesados están alojados en Francia.                                                |

## Funcionalidades

| Funcionalidad            | Descripción                                                                                          |
|--------------------------|------------------------------------------------------------------------------------------------------|
| NVIDIA H100              | Tarjeta de 80 GB de memoria GPU.                                                                     |
| NVIDIA L40S              | Tarjeta de 48 GB de memoria GPU.                                                                     |
| Multi-Instance GPU       | Particionamiento de una tarjeta H100 en un máximo de 7 instancias, cada una con su memoria dedicada. |
| Servidores Bare Metal    | Blades de cálculo equipados con GPU, para su uso exclusivo.                                          |
| Máquinas virtuales       | GPU accesibles desde las máquinas virtuales de las ofertas IaaS.                                     |
| Contenedores y Kubernetes | Worker nodes GPU en PaaS OpenShift y nodos Bare Metal con GPU en Managed Kubernetes.                |
| Bibliotecas NVIDIA       | Compatibilidad con CUDA, cuDNN y los frameworks de IA (TensorFlow, PyTorch, etc.).                   |
| Gestión centralizada     | Gestión de los recursos desde la consola Cloud Temple.                                               |

## Arquitectura

### Ofertas que integran GPU

Cada blade de cálculo o worker node GPU incorpora dos tarjetas NVIDIA. La configuración GPU depende de la oferta utilizada:

| Oferta             | Configuración GPU                                                                                         | Documentación                                                    |
|--------------------|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Bare Metal         | Blade PERFORMANCE 4: 2 x NVIDIA L40S 48 GB. Blade PERFORMANCE 5: 2 x NVIDIA H100 80 GB.                   | [Conceptos Bare Metal](../iaas_bare-metal/concepts.md)           |
| IaaS VMware        | Blade PERFORMANCE 4: 2 x NVIDIA L40S 48 GB.                                                               | [Conceptos IaaS VMware](../iaas_vmware/concepts.md)              |
| IaaS OpenSource    | Blade PERFORMANCE 4: 2 x NVIDIA L40S 48 GB.                                                               | [Conceptos IaaS OpenSource](../iaas_opensource/concepts.md)      |
| PaaS OpenShift     | Worker nodes GPU: 2 x NVIDIA L40S 48 GB por worker, en grupos de 3 workers, 1 por zona de disponibilidad. | [Conceptos PaaS OpenShift](../paas_openshift/concepts.md)        |
| Managed Kubernetes | Nodos workers de tipo Bare Metal equipados con GPU.                                                       | [Utilizar un GPU en Managed Kubernetes](../managed_kubernetes/tutorials/usinggpu.md) |

### Integraciones

- **Consola Cloud Temple**: gestión de los blades, las máquinas virtuales y los clústeres que alojan los GPU.
- **API de Kubernetes**: exposición de los GPU a los pods en PaaS OpenShift y Managed Kubernetes.
- **CUDA y bibliotecas NVIDIA**: CUDA toolkit, cuDNN y frameworks de IA (TensorFlow, PyTorch, etc.).

## Regiones y zonas de disponibilidad

Los GPU están disponibles en la región FR1. Los datos procesados permanecen alojados en Francia. En PaaS OpenShift, los worker nodes GPU de un mismo grupo se reparten en tres zonas de disponibilidad, a razón de un worker por zona.

## Especificaciones técnicas

### Especificaciones de las tarjetas

| Parámetro               | NVIDIA L40S  | NVIDIA H100  |
|-------------------------|--------------|--------------|
| Memoria GPU             | 48 GB        | 80 GB        |
| FP32                    | 91,6 TFlops  | 51 TFlops    |
| TF32 (Tensor Core) *    | 366 TFlops   | 756 TFlops   |
| FP16 (Tensor Core) *    | 733 TFlops   | 1 513 TFlops |
| FP8 (Tensor Core) *     | 1 466 TFlops | 3 026 TFlops |
| Consumo máximo          | 350 W        | 350 W        |

\* Valores del fabricante NVIDIA con dispersión estructurada (sparsity). Sin dispersión, estos valores se dividen por dos.

### Multi-Instance GPU

La tecnología Multi-Instance GPU (MIG) particiona una tarjeta H100 en un máximo de 7 instancias. Cada instancia dispone de su propia memoria y de sus propias unidades de cálculo, aisladas de las demás instancias. De este modo, varias cargas de trabajo comparten una misma tarjeta sin interferir entre sí.

### Límites

- Multi-Instance GPU está disponible únicamente en las tarjetas H100. Las tarjetas L40S no lo admiten.
- El número y el modelo de las tarjetas los determina la clase de blade o el tipo de worker node: no puede modificar la configuración GPU de un blade.
- En PaaS OpenShift, los worker nodes GPU se contratan en grupos de 3 workers.
- En IaaS VMware, un clúster de hipervisores se compone de blades de un mismo tipo: los blades GPU forman un clúster independiente.

## Seguridad y cumplimiento

GPU está certificado HDS e ISO 27001, y disponible en servicios cualificados SecNumCloud y conformes con C5.

- **Recursos dedicados**: las tarjetas están instaladas en blades de cálculo dedicados a su uso.
- **Aislamiento**: en H100, cada instancia MIG dispone de una memoria dedicada, aislada de las demás instancias.
- **Residencia de los datos**: los datos procesados están alojados en Francia, en la región FR1.

## Disponibilidad del servicio

En la oferta Bare Metal, el objetivo de disponibilidad de los GPU es del 99,9 %, medido mensualmente. En las demás ofertas, el objetivo de disponibilidad es el de la oferta que aloja el GPU.

## Reversibilidad

Al finalizar el servicio, puede recuperar los siguientes elementos:

| Elemento exportado     | Entregable                           | Plazo de puesta a disposición | Coste      |
|------------------------|--------------------------------------|-----------------------------|------------|
| Modelos                | Formatos estándar (ONNX, etc.)       | 15 días                     | Sin coste  |
| Datos                  | Formatos abiertos                    | 30 días                     | Sin coste  |
| Asistencia a la migración | Soporte técnico                   | Bajo petición               | Según presupuesto |

## Precios

Los GPU se facturan junto con el blade de cálculo o el worker node que los aloja. Las condiciones de compromiso dependen de la oferta: en PaaS OpenShift, los worker nodes GPU están disponibles en pago por uso mensual o en reserva de 12 meses. Los precios de GPU se publican en la página del producto en el sitio web de Cloud Temple:
[GPU — precios](https://www.cloud-temple.com/produits/gpu/).

## Buenas prácticas

- **Dimensione según la memoria necesaria**: elija la tarjeta H100 (80 GB) o L40S (48 GB) según el tamaño de los modelos y de los datos que se van a procesar.
- **Comparta una tarjeta H100** entre varias cargas de trabajo de pequeño tamaño con Multi-Instance GPU, en lugar de dedicar una tarjeta entera a cada una.
- **Máquinas virtuales**: para utilizar un GPU desde una máquina virtual IaaS VMware, active los parámetros avanzados `pciPassthru.use64bitMMIO` y `pciPassthru.64bitMMIOSizeGB` (consulte la [guía de inicio IaaS VMware](../iaas_vmware/quickstart.md)).
- **Kubernetes**: en Managed Kubernetes, declare `runtimeClassName: nvidia` en sus pods para que accedan al GPU (consulte el tutorial [Utilizar un GPU en Managed Kubernetes](../managed_kubernetes/tutorials/usinggpu.md)).
