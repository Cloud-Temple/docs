---
title: Usar una GPU NVIDIA
---

import nvidiasmi from '@site/docs/managed_kubernetes/tutorials/images/nvidiasmi.png'

# Usar una GPU en Managed Kubernetes

Este tutorial le muestra cómo desplegar un pod que utiliza un recurso GPU en un clúster de Managed Kubernetes configurado con nodos "Bare Metal" equipados con GPUs NVIDIA.

## Requisitos previos

- Un clúster de Managed Kubernetes con al menos un nodo worker de tipo "Bare Metal" con GPU.

## Manifiesto de Pod de ejemplo

A continuación se muestra un ejemplo de manifiesto de pod que ejecuta el comando `nvidia-smi` para verificar la presencia y el estado de la tarjeta GPU.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nvidia-cuda-check
spec:
  runtimeClassName: nvidia  # Clave para Talos NVIDIA
  restartPolicy: Never
  containers:
  - name: nvidia-version-check
    image: "nvidia/cuda:13.1.0-devel-ubuntu24.04"
    imagePullPolicy: Always
    command: ["nvidia-smi"]
```

### Explicación del Manifiesto

- **`runtimeClassName: nvidia`**: Esta es la parte más importante. Le indica a Kubernetes que use el runtime de NVIDIA. El toolkit de NVIDIA se encarga entonces de inyectar los drivers de NVIDIA directamente en el pod, lo que permite al contenedor acceder a la GPU.
- **`restartPolicy: Never`**: Como este pod es simplemente un comando de verificación, no queremos que se reinicie después de su ejecución.
- **`image: "nvidia/cuda:..."`**: Usamos una imagen proporcionada por NVIDIA que contiene las herramientas necesarias para interactuar con la GPU.
- **`command: ["nvidia-smi"]`**: Este es el comando que se ejecutará dentro del contenedor. `nvidia-smi` es una herramienta de línea de comandos que proporciona información sobre las GPUs NVIDIA.

Para más información sobre el funcionamiento del toolkit de NVIDIA, puede consultar la [documentación oficial en GitHub](https://github.com/NVIDIA/nvidia-container-toolkit).

## Despliegue y Verificación

1. **Despliegue el pod** usando el comando `kubectl apply`:

    ```shell
    kubectl apply -f nvidia-smi.yaml
    ```

2. **Verifique los logs del pod** para ver la salida del comando `nvidia-smi`:

    ```shell
    kubectl logs nvidia-cuda-check
    ```

Si todo está correctamente configurado, debería ver una salida similar a la siguiente, mostrando los detalles de su tarjeta GPU:

<img src={nvidiasmi} alt="nvidia-smi command result"/>
