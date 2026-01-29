---
title: NVIDIA GPU verwenden
---

import nvidiasmi from './images/nvidiasmi.png'

# Using a GPU on Managed Kubernetes

This tutorial shows you how to deploy a pod that uses a GPU resource on a Managed Kubernetes cluster configured with "Bare Metal" nodes equipped with NVIDIA GPUs.

## Voraussetzungen

- Ein Managed Kubernetes-Cluster mit mindestens einem Worker-Knoten vom Typ "Bare Metal" mit GPU.

## Example Pod Manifest

Here is an example pod manifest that runs the `nvidia-smi` command to check the presence and status of the GPU card.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nvidia-cuda-check
spec:
  runtimeClassName: nvidia  # Key for Talos NVIDIA
  restartPolicy: Never
  containers:
  - name: nvidia-version-check
    image: "nvidia/cuda:13.1.0-devel-ubuntu24.04"
    imagePullPolicy: Always
    command: ["nvidia-smi"]
```

### Explanation of the Manifest

- **`runtimeClassName: nvidia`**: This is the most important part. It instructs Kubernetes to use the NVIDIA runtime. The NVIDIA toolkit then injects the NVIDIA drivers directly into the pod, enabling the container to access the GPU.
- **`restartPolicy: Never`**: Since this pod is just a verification command, we don't want it to restart after execution.
- **`image: "nvidia/cuda:..."`**: We use an image provided by NVIDIA that includes the necessary tools to interact with the GPU.
- **`command: ["nvidia-smi"]`**: This is the command executed inside the container. `nvidia-smi` is a command-line tool that provides information about NVIDIA GPUs.

For more information about how the NVIDIA toolkit works, refer to the [official documentation on GitHub](https://github.com/NVIDIA/nvidia-container-toolkit).

## Bereitstellung und Überprüfung

1.  **Stellen Sie den Pod bereit** mit dem Befehl `kubectl apply`:
    ```shell
    kubectl apply -f nvidia-smi.yaml
    ```

2.  **Überprüfen Sie die Protokolle des Pods**, um die Ausgabe des Befehls `nvidia-smi` anzuzeigen:
    ```shell
    kubectl logs nvidia-cuda-check
    ```

Wenn die Konfiguration korrekt durchgeführt wurde, sollten Sie eine Ausgabe ähnlich der folgenden sehen, die Details Ihrer GPU zeigt:

<img src={nvidiasmi} alt="Ergebnis des nvidia-smi-Befehls"/>