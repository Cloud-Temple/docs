---
title: Concepts
---

## Introduction

GPU provides NVIDIA H100 and L40S graphics cards for artificial intelligence, machine learning and high-performance computing workloads. GPUs cannot be ordered on their own: they are integrated into the compute blades and worker nodes of the IaaS and PaaS offerings. You use them from virtual machines, Bare Metal servers, containers or Kubernetes clusters, with the standard tools of the NVIDIA ecosystem.

### Audiences and use cases

GPU is intended for data scientists, researchers, engineers, companies deploying AI services and the public sector. Typical use cases:

- **Model training**: training of neural networks and deep learning.
- **Inference**: deployment of AI services in production.
- **Computer vision**: image and video processing.
- **Engineering and simulation**: modeling and simulation tools.
- **Scientific research**: scientific computing, modeling of complex scenarios and analysis of massive data.

## Benefits

| Benefit                    | Description                                                                                                       |
|----------------------------|-------------------------------------------------------------------------------------------------------------------|
| Accelerated computing      | GPUs accelerate the training and inference of AI models compared with CPU processing.                             |
| Multiple usage modes       | GPUs are used from virtual machines, Bare Metal servers, containers and Kubernetes.                               |
| Dedicated resources        | The cards are installed in compute blades dedicated to your use.                                                  |
| Partitioning               | An H100 card can be shared between several isolated workloads thanks to Multi-Instance GPU (MIG).                 |
| Standard ecosystem         | CUDA, cuDNN and the main AI frameworks can be used without adaptation.                                            |
| Hosting in France          | GPU resources and the data processed are hosted in France.                                                        |

## Features

| Feature                  | Description                                                                                          |
|--------------------------|------------------------------------------------------------------------------------------------------|
| NVIDIA H100              | Card with 80 GB of GPU memory.                                                                       |
| NVIDIA L40S              | Card with 48 GB of GPU memory.                                                                       |
| Multi-Instance GPU       | Partitioning of an H100 card into up to 7 instances, each with its own dedicated memory.             |
| Bare Metal servers       | Compute blades equipped with GPUs, for your exclusive use.                                           |
| Virtual machines         | GPUs accessible from the virtual machines of the IaaS offerings.                                     |
| Containers and Kubernetes | GPU worker nodes on PaaS OpenShift and Bare Metal nodes with GPUs on Managed Kubernetes.            |
| NVIDIA libraries         | Compatibility with CUDA, cuDNN and AI frameworks (TensorFlow, PyTorch, etc.).                        |
| Centralized management   | Resource management from the Cloud Temple Console.                                                   |

## Architecture

### Offerings that include GPUs

Each GPU compute blade or worker node is fitted with two NVIDIA cards. The GPU configuration depends on the offering used:

| Offering           | GPU configuration                                                                                         | Documentation                                                    |
|--------------------|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Bare Metal         | PERFORMANCE 4 blade: 2 x NVIDIA L40S 48 GB. PERFORMANCE 5 blade: 2 x NVIDIA H100 80 GB.                   | [Bare Metal concepts](../iaas_bare-metal/concepts.md)            |
| IaaS VMware        | PERFORMANCE 4 blade: 2 x NVIDIA L40S 48 GB.                                                               | [IaaS VMware concepts](../iaas_vmware/concepts.md)               |
| IaaS OpenSource    | PERFORMANCE 4 blade: 2 x NVIDIA L40S 48 GB.                                                               | [IaaS OpenSource concepts](../iaas_opensource/concepts.md)       |
| PaaS OpenShift     | GPU worker nodes: 2 x NVIDIA L40S 48 GB per worker, in groups of 3 workers, 1 per availability zone.      | [PaaS OpenShift concepts](../paas_openshift/concepts.md)         |
| Managed Kubernetes | Bare Metal worker nodes equipped with GPUs.                                                               | [Using a GPU on Managed Kubernetes](../managed_kubernetes/tutorials/usinggpu.md) |

### Integrations

- **Cloud Temple Console**: management of the blades, virtual machines and clusters that host the GPUs.
- **Kubernetes API**: exposure of GPUs to pods on PaaS OpenShift and Managed Kubernetes.
- **CUDA and NVIDIA libraries**: CUDA toolkit, cuDNN and AI frameworks (TensorFlow, PyTorch, etc.).

## Regions and availability zones

GPUs are available in the FR1 region. The data processed remains hosted in France. On PaaS OpenShift, the GPU worker nodes of a given group are distributed across three availability zones, with one worker per zone.

## Technical specifications

### Card specifications

| Parameter               | NVIDIA L40S  | NVIDIA H100  |
|-------------------------|--------------|--------------|
| GPU memory              | 48 GB        | 80 GB        |
| FP32                    | 91.6 TFlops  | 51 TFlops    |
| TF32 (Tensor Core) *    | 366 TFlops   | 756 TFlops   |
| FP16 (Tensor Core) *    | 733 TFlops   | 1,513 TFlops |
| FP8 (Tensor Core) *     | 1,466 TFlops | 3,026 TFlops |
| Maximum power consumption | 350 W      | 350 W        |

\* NVIDIA manufacturer values with structured sparsity. Without sparsity, these values are halved.

### Multi-Instance GPU

Multi-Instance GPU (MIG) technology partitions an H100 card into up to 7 instances. Each instance has its own memory and its own compute units, isolated from the other instances. Several workloads can thus share the same card without interfering with one another.

### Limits

- Multi-Instance GPU is available on H100 cards only. L40S cards do not support it.
- The number and model of the cards are set by the blade class or the worker node type: you cannot modify the GPU configuration of a blade.
- On PaaS OpenShift, GPU worker nodes are ordered in groups of 3 workers.
- On IaaS VMware, a hypervisor cluster consists of blades of the same type: GPU blades form a separate cluster.

## Security and compliance

GPU is certified HDS and ISO 27001, and available on SecNumCloud-qualified and C5-compliant services.

- **Dedicated resources**: the cards are installed in compute blades dedicated to your use.
- **Isolation**: on H100, each MIG instance has dedicated memory, isolated from the other instances.
- **Data residency**: the data processed is hosted in France, in the FR1 region.

## Service availability

On the Bare Metal offering, the GPU availability target is 99.9%, measured monthly. On the other offerings, the availability target is that of the offering hosting the GPU.

## Reversibility

At the end of the service, you can retrieve the following items:

| Exported item          | Deliverable                          | Provision time              | Cost       |
|------------------------|--------------------------------------|-----------------------------|------------|
| Models                 | Standard formats (ONNX, etc.)        | 15 days                     | Free of charge |
| Data                   | Open formats                         | 30 days                     | Free of charge |
| Migration assistance   | Technical support                    | On request                  | On quote   |

## Pricing

GPUs are billed with the compute blade or worker node that hosts them. Commitment terms depend on the offering: on PaaS OpenShift, GPU worker nodes are available with monthly pay-as-you-go or a 12-month reservation. GPU pricing is published on the product page on the Cloud Temple website:
[GPU — pricing](https://www.cloud-temple.com/produits/gpu/).

## Best practices

- **Size according to the memory required**: choose the H100 card (80 GB) or the L40S card (48 GB) depending on the size of the models and data to be processed.
- **Share an H100 card** between several small workloads with Multi-Instance GPU, rather than dedicating an entire card to each one.
- **Virtual machines**: to use a GPU from an IaaS VMware virtual machine, enable the advanced parameters `pciPassthru.use64bitMMIO` and `pciPassthru.64bitMMIOSizeGB` (see the [IaaS VMware quickstart guide](../iaas_vmware/quickstart.md)).
- **Kubernetes**: on Managed Kubernetes, declare `runtimeClassName: nvidia` in your pods so that they can access the GPU (see the tutorial [Using a GPU on Managed Kubernetes](../managed_kubernetes/tutorials/usinggpu.md)).
