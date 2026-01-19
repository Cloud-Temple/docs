---
title: Using an NVIDIA GPU
---

import nvidiasmi from './images/nvidiasmi.png'

# Using a GPU on Managed Kubernetes

This tutorial shows you how to deploy a pod that uses a GPU resource on a Managed Kubernetes cluster configured with "Bare Metal" nodes equipped with NVIDIA GPUs.

## Prerequisites

- A Managed Kubernetes cluster with at least one worker node of type "Bare Metal" equipped with GPU.

## Example Pod Manifest

Here is an example pod manifest that runs the `nvidia-smi` command to verify the presence and status of the GPU card.

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

### Manifest Explanation

- **`runtimeClassName: nvidia`**: This is the most critical part. It instructs Kubernetes to use the NVIDIA runtime. The NVIDIA toolkit then injects NVIDIA drivers directly into the pod, enabling the container to access the GPU.
- **`restartPolicy: Never`**: Since this pod runs just a verification command, we don't want it to restart after execution.
- **`image: "nvidia/cuda:..."`**: We use an image provided by NVIDIA that includes the necessary tools to interact with the GPU.
- **`command: ["nvidia-smi"]`**: This is the command executed inside the container. `nvidia-smi` is a command-line utility that provides information about NVIDIA GPUs.

For more details on how the NVIDIA toolkit works, refer to the [official documentation on GitHub](https://github.com/NVIDIA/nvidia-container-toolkit).

## Deployment and Verification

1.  **Deploy the pod** using the `kubectl apply` command:
    ```shell
    kubectl apply -f nvidia-smi.yaml
    ```

2.  **Check the pod logs** to see the output of the `nvidia-smi` command:
    ```shell
    kubectl logs nvidia-cuda-check
    ```

If everything is configured correctly, you should see output similar to the following, displaying details about your GPU:

<img src={nvidiasmi} alt="nvidia-smi command result"/>