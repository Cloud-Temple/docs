---
title: Using an NVIDIA GPU
---

import nvidiasmi from './images/nvidiasmi.png'

# Using a GPU on Managed Kubernetes

This tutorial shows you how to deploy a pod that uses a GPU resource on a Managed Kubernetes cluster configured with "Bare Metal" nodes equipped with NVIDIA GPUs.

## Requis

- Un clúster Kubernetes gestionado con al menos un nodo worker del tipo "Bare Metal" con GPU.

## Ejemplo de manifiesto de Pod

A continuación se muestra un ejemplo de manifiesto de Pod que ejecuta el comando `nvidia-smi` para verificar la presencia y estado de la tarjeta GPU.

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

- **`runtimeClassName: nvidia`**: Esta es la parte más importante. Indica a Kubernetes que utilice el runtime de NVIDIA. El toolkit de NVIDIA se encarga entonces de inyectar los controladores de NVIDIA directamente en el pod, lo que permite que el contenedor acceda a la GPU.
- **`restartPolicy: Never`**: Dado que este pod es simplemente un comando de verificación, no queremos que se reinicie después de su ejecución.
- **`image: "nvidia/cuda:..."`**: Utilizamos una imagen proporcionada por NVIDIA que contiene las herramientas necesarias para interactuar con la GPU.
- **`command: ["nvidia-smi"]`**: Esta es la orden que se ejecutará dentro del contenedor. `nvidia-smi` es una herramienta de línea de comandos que proporciona información sobre las GPUs NVIDIA.

Para obtener más información sobre el funcionamiento del toolkit de NVIDIA, puede consultar la [documentación oficial en GitHub](https://github.com/NVIDIA/nvidia-container-toolkit).

## Despliegue y Verificación

1.  **Despliegue el pod** utilizando el comando `kubectl apply`:
    ```shell
    kubectl apply -f nvidia-smi.yaml
    ```

2.  **Verifique los registros del pod** para ver la salida del comando `nvidia-smi`:
    ```shell
    kubectl logs nvidia-cuda-check
    ```

Si todo está configurado correctamente, debería ver una salida similar a la siguiente, mostrando los detalles de su tarjeta GPU:

<img src={nvidiasmi} alt="Resultado del comando nvidia-smi"/>