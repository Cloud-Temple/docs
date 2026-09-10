---
title: Utilizar una GPU nVidia
---

import nvidiasmi from '@site/docs/managed_kubernetes/tutorials/images/nvidiasmi.png'

# Utilizar una GPU en Managed Kubernetes

Este tutorial le muestra cómo desplegar un pod que utiliza un recurso GPU en un clúster de Managed Kubernetes configurado con nodos "Bare Metal" equipados con GPUs NVIDIA.

## Prerrequisitos

- Un clúster de Kubernetes administrado con al menos un nodo worker de tipo "Bare Metal" con GPU.

## Ejemplo de manifiesto de Pod

A continuación se muestra un ejemplo de manifiesto de pod que ejecuta el comando `nvidia-smi` para verificar la presencia y el estado de la tarjeta GPU.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nvidia-cuda-check
spec:
  runtimeClassName: nvidia  # Clé pour Talos NVIDIA
  restartPolicy: Never
  containers:
  - name: nvidia-version-check
    image: "nvidia/cuda:13.1.0-devel-ubuntu24.04"
    imagePullPolicy: Always
    command: ["nvidia-smi"]
```

### Explicación del Manifiesto

- **`runtimeClassName: nvidia`**: Esta es la parte más importante. Indica a Kubernetes que utilice el runtime de NVIDIA. El toolkit de NVIDIA se encarga entonces de inyectar los controladores de NVIDIA directamente en el pod, lo que permite que el contenedor acceda a la GPU.
- **`restartPolicy: Never`**: Dado que este pod es solo un comando de verificación, no queremos que se reinicie después de su ejecución.
- **`image: "nvidia/cuda:..."`**: Utilizamos una imagen proporcionada por NVIDIA que contiene las herramientas necesarias para interactuar con la GPU.
- **`command: ["nvidia-smi"]`**: Este es el comando que se ejecutará dentro del contenedor. `nvidia-smi` es una herramienta de línea de comandos que proporciona información sobre las GPU de NVIDIA.

Para obtener más información sobre el funcionamiento del toolkit de NVIDIA, puede consultar la [documentación oficial en GitHub](https://github.com/NVIDIA/nvidia-container-toolkit).

## Despliegue y Verificación

1. **Despliegue el pod** utilizando el comando `kubectl apply` :

    ```shell
    kubectl apply -f nvidia-smi.yaml
    ```

2. **Verifique los logs del pod** para ver la salida del comando `nvidia-smi` :

    ```shell
    kubectl logs nvidia-cuda-check
    ```

Si todo está configurado correctamente, debería ver una salida similar a esta, que muestra los detalles de su tarjeta GPU :

<img src={nvidiasmi} alt="nvidia-smi command result"/>