---
title: Usare una GPU nVidia
---

import nvidiasmi from './images/nvidiasmi.png'

# Utilizzare una GPU su Kubernetes Gestito

Questo tutorial ti mostra come distribuire un pod che utilizza una risorsa GPU in un cluster Kubernetes Gestito configurato con nodi "Bare Metal" dotati di GPU NVIDIA.

## Prerequisiti

- Un cluster Kubernetes gestito con almeno un nodo worker di tipo "Bare Metal" con GPU.

## Esempio di manifesto di Pod

Ecco un esempio di manifesto di pod che esegue il comando `nvidia-smi` per verificare la presenza e lo stato della scheda GPU.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nvidia-cuda-check
spec:
  runtimeClassName: nvidia  # Chiave per Talos NVIDIA
  restartPolicy: Never
  containers:
  - name: nvidia-version-check
    image: "nvidia/cuda:13.1.0-devel-ubuntu24.04"
    imagePullPolicy: Always
    command: ["nvidia-smi"]
```

### Spiegazione del Manifesto

- **`runtimeClassName: nvidia`**: È la parte più importante. Indica a Kubernetes di utilizzare il runtime NVIDIA. Il toolkit NVIDIA si occupa quindi di iniettare direttamente i driver NVIDIA all'interno del pod, consentendo al contenitore di accedere al GPU.
- **`restartPolicy: Never`**: Poiché questo pod è semplicemente un comando di verifica, non vogliamo che venga riavviato dopo il suo completamento.
- **`image: "nvidia/cuda:..."`**: Utilizziamo un'immagine fornita da NVIDIA che contiene gli strumenti necessari per interagire con il GPU.
- **`command: ["nvidia-smi"]`**: È il comando che verrà eseguito all'interno del contenitore. `nvidia-smi` è uno strumento da riga di comando che fornisce informazioni sui GPU NVIDIA.

Per ulteriori informazioni sul funzionamento del toolkit NVIDIA, è possibile consultare la [documentazione ufficiale su GitHub](https://github.com/NVIDIA/nvidia-container-toolkit).

## Distribuzione e verifica

1.  **Distribuisci il pod** utilizzando il comando `kubectl apply`:
    ```shell
    kubectl apply -f nvidia-smi.yaml
    ```

2.  **Verifica i log del pod** per visualizzare l'output del comando `nvidia-smi`:
    ```shell
    kubectl logs nvidia-cuda-check
    ```

Se tutto è configurato correttamente, dovresti vedere un output simile a questo, che mostra i dettagli della tua scheda GPU:

<img src={nvidiasmi} alt="risultato del comando nvidia-smi"/>