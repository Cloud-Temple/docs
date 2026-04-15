---
title: Eine NVIDIA GPU verwenden
---

import nvidiasmi from '@site/docs/managed_kubernetes/tutorials/images/nvidiasmi.png'

# Eine GPU auf Managed Kubernetes verwenden

Dieses Tutorial zeigt Ihnen, wie Sie einen Pod bereitstellen, der eine GPU-Ressource auf einem Managed Kubernetes-Cluster verwendet, der mit „Bare Metal"-Knoten ausgestattet ist, die mit NVIDIA GPUs ausgestattet sind.

## Voraussetzungen

- Ein Managed Kubernetes-Cluster mit mindestens einem „Bare Metal"-Worker-Knoten mit GPU.

## Beispiel-Pod-Manifest

Hier ist ein Beispiel-Pod-Manifest, das den Befehl `nvidia-smi` ausführt, um die Anwesenheit und den Status der GPU-Karte zu überprüfen.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nvidia-cuda-check
spec:
  runtimeClassName: nvidia  # Schlüssel für Talos NVIDIA
  restartPolicy: Never
  containers:
  - name: nvidia-version-check
    image: "nvidia/cuda:13.1.0-devel-ubuntu24.04"
    imagePullPolicy: Always
    command: ["nvidia-smi"]
```

### Erklärung des Manifests

- **`runtimeClassName: nvidia`**: Dies ist der wichtigste Teil. Er weist Kubernetes an, die NVIDIA-Laufzeitumgebung zu verwenden. Das NVIDIA-Toolkit injiziert dann die NVIDIA-Treiber direkt in den Pod, sodass der Container auf die GPU zugreifen kann.
- **`restartPolicy: Never`**: Da es sich bei diesem Pod nur um einen Überprüfungsbefehl handelt, soll er nach der Ausführung nicht neu gestartet werden.
- **`image: "nvidia/cuda:..."`**: Wir verwenden ein von NVIDIA bereitgestelltes Image, das die notwendigen Werkzeuge für die Interaktion mit der GPU enthält.
- **`command: ["nvidia-smi"]`**: Dies ist der Befehl, der im Container ausgeführt wird. `nvidia-smi` ist ein Befehlszeilenwerkzeug, das Informationen über NVIDIA GPUs liefert.

Weitere Informationen zur Funktionsweise des NVIDIA-Toolkits finden Sie in der [offiziellen Dokumentation auf GitHub](https://github.com/NVIDIA/nvidia-container-toolkit).

## Bereitstellung und Überprüfung

1. **Stellen Sie den Pod bereit** mit dem Befehl `kubectl apply`:

    ```shell
    kubectl apply -f nvidia-smi.yaml
    ```

2. **Überprüfen Sie die Pod-Logs**, um die Ausgabe des Befehls `nvidia-smi` zu sehen:

    ```shell
    kubectl logs nvidia-cuda-check
    ```

Wenn alles korrekt konfiguriert ist, sollten Sie eine Ausgabe ähnlich der folgenden sehen, die die Details Ihrer GPU-Karte anzeigt:

<img src={nvidiasmi} alt="nvidia-smi command result"/>
