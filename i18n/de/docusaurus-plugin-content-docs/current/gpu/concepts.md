---
title: Konzepte
---

## Einführung

GPU stellt NVIDIA-Grafikkarten H100 und L40S für Berechnungen in den Bereichen künstliche Intelligenz, maschinelles Lernen und Hochleistungsrechnen bereit. Die GPUs werden nicht einzeln bestellt: Sie sind in die Compute-Blades und Worker-Nodes der IaaS- und PaaS-Angebote integriert. Sie nutzen sie über virtuelle Maschinen, Bare Metal-Server, Container oder Kubernetes-Cluster, mit den Standardwerkzeugen des NVIDIA-Ökosystems.

### Zielgruppen und Anwendungsfälle

GPU richtet sich an Data Scientists, Forschende, Ingenieure, Unternehmen, die KI-Dienste bereitstellen, sowie an den öffentlichen Sektor. Typische Anwendungsfälle:

- **Modelltraining**: Training neuronaler Netze und Deep Learning.
- **Inferenz**: Bereitstellung von KI-Diensten in der Produktion.
- **Computer Vision**: Bild- und Videoverarbeitung.
- **Engineering und Simulation**: Modellierungs- und Simulationswerkzeuge.
- **Wissenschaftliche Forschung**: wissenschaftliches Rechnen, Modellierung komplexer Szenarien und Analyse großer Datenmengen.

## Vorteile

| Vorteil                    | Beschreibung                                                                                                      |
|----------------------------|-------------------------------------------------------------------------------------------------------------------|
| Beschleunigte Berechnungen | GPUs beschleunigen das Training und die Inferenz von KI-Modellen im Vergleich zu einer Verarbeitung auf CPU.     |
| Mehrere Nutzungsarten      | GPUs werden über virtuelle Maschinen, Bare Metal-Server, Container und Kubernetes genutzt.                        |
| Dedizierte Ressourcen      | Die Karten sind in Compute-Blades installiert, die Ihrer Nutzung vorbehalten sind.                                |
| Partitionierung            | Eine H100-Karte kann dank Multi-Instance GPU (MIG) zwischen mehreren isolierten Workloads geteilt werden.         |
| Standard-Ökosystem         | CUDA, cuDNN und die wichtigsten KI-Frameworks lassen sich ohne Anpassung nutzen.                                  |
| Hosting in Frankreich      | Die GPU-Ressourcen und die verarbeiteten Daten werden in Frankreich gehostet.                                     |

## Funktionen

| Funktion                 | Beschreibung                                                                                         |
|--------------------------|------------------------------------------------------------------------------------------------------|
| NVIDIA H100              | Karte mit 80 GB GPU-Speicher.                                                                        |
| NVIDIA L40S              | Karte mit 48 GB GPU-Speicher.                                                                        |
| Multi-Instance GPU       | Partitionierung einer H100-Karte in höchstens 7 Instanzen, jede mit eigenem dediziertem Speicher.    |
| Bare Metal-Server        | Mit GPUs ausgestattete Compute-Blades zu Ihrer exklusiven Nutzung.                                   |
| Virtuelle Maschinen      | GPUs, die über die virtuellen Maschinen der IaaS-Angebote zugänglich sind.                           |
| Container und Kubernetes | GPU-Worker-Nodes auf PaaS OpenShift und Bare Metal-Nodes mit GPU auf Managed Kubernetes.             |
| NVIDIA-Bibliotheken      | Kompatibilität mit CUDA, cuDNN und KI-Frameworks (TensorFlow, PyTorch usw.).                         |
| Zentrale Verwaltung      | Verwaltung der Ressourcen über die Cloud Temple-Konsole.                                             |

## Architektur

### Angebote mit GPUs

Jedes GPU-Compute-Blade bzw. jeder GPU-Worker-Node ist mit zwei NVIDIA-Karten ausgestattet. Die GPU-Konfiguration hängt vom genutzten Angebot ab:

| Angebot            | GPU-Konfiguration                                                                                         | Dokumentation                                                    |
|--------------------|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Bare Metal         | Blade PERFORMANCE 4: 2 x NVIDIA L40S 48 GB. Blade PERFORMANCE 5: 2 x NVIDIA H100 80 GB.                   | [Konzepte Bare Metal](../iaas_bare-metal/concepts.md)            |
| IaaS VMware        | Blade PERFORMANCE 4: 2 x NVIDIA L40S 48 GB.                                                               | [Konzepte IaaS VMware](../iaas_vmware/concepts.md)               |
| IaaS OpenSource    | Blade PERFORMANCE 4: 2 x NVIDIA L40S 48 GB.                                                               | [Konzepte IaaS OpenSource](../iaas_opensource/concepts.md)       |
| PaaS OpenShift     | GPU-Worker-Nodes: 2 x NVIDIA L40S 48 GB pro Worker, in Gruppen von 3 Workern, 1 pro Verfügbarkeitszone.   | [Konzepte PaaS OpenShift](../paas_openshift/concepts.md)         |
| Managed Kubernetes | Mit GPUs ausgestattete Worker-Nodes vom Typ Bare Metal.                                                   | [Eine GPU auf Managed Kubernetes verwenden](../managed_kubernetes/tutorials/usinggpu.md) |

### Integrationen

- **Cloud Temple-Konsole**: Verwaltung der Blades, virtuellen Maschinen und Cluster, die die GPUs tragen.
- **Kubernetes-API**: Bereitstellung der GPUs für Pods auf PaaS OpenShift und Managed Kubernetes.
- **CUDA und NVIDIA-Bibliotheken**: CUDA Toolkit, cuDNN und KI-Frameworks (TensorFlow, PyTorch usw.).

## Regionen und Verfügbarkeitszonen

Die GPUs sind in der Region FR1 verfügbar. Die verarbeiteten Daten bleiben in Frankreich gehostet. Auf PaaS OpenShift werden die GPU-Worker-Nodes einer Gruppe auf drei Verfügbarkeitszonen verteilt, mit einem Worker pro Zone.

## Technische Spezifikationen

### Spezifikationen der Karten

| Parameter               | NVIDIA L40S  | NVIDIA H100  |
|-------------------------|--------------|--------------|
| GPU-Speicher            | 48 GB        | 80 GB        |
| FP32                    | 91,6 TFlops  | 51 TFlops    |
| TF32 (Tensor Core) *    | 366 TFlops   | 756 TFlops   |
| FP16 (Tensor Core) *    | 733 TFlops   | 1 513 TFlops |
| FP8 (Tensor Core) *     | 1 466 TFlops | 3 026 TFlops |
| Maximale Leistungsaufnahme | 350 W     | 350 W        |

\* Herstellerangaben von NVIDIA mit strukturierter Sparsity. Ohne Sparsity halbieren sich diese Werte.

### Multi-Instance GPU

Die Technologie Multi-Instance GPU (MIG) partitioniert eine H100-Karte in höchstens 7 Instanzen. Jede Instanz verfügt über eigenen Speicher und eigene Recheneinheiten, die von den anderen Instanzen isoliert sind. So können mehrere Workloads eine Karte gemeinsam nutzen, ohne sich gegenseitig zu beeinträchtigen.

### Grenzen

- Multi-Instance GPU ist nur auf H100-Karten verfügbar. L40S-Karten unterstützen es nicht.
- Anzahl und Modell der Karten sind durch die Blade-Klasse bzw. den Worker-Node-Typ festgelegt: Sie können die GPU-Konfiguration eines Blades nicht ändern.
- Auf PaaS OpenShift werden GPU-Worker-Nodes in Gruppen von 3 Workern bestellt.
- Auf IaaS VMware besteht ein Hypervisor-Cluster aus Blades desselben Typs: Die GPU-Blades bilden einen separaten Cluster.

## Sicherheit und Compliance

GPU ist nach HDS und ISO 27001 zertifiziert und auf SecNumCloud-qualifizierten und C5-konformen Diensten verfügbar.

- **Dedizierte Ressourcen**: Die Karten sind in Compute-Blades installiert, die Ihrer Nutzung vorbehalten sind.
- **Isolation**: Auf H100 verfügt jede MIG-Instanz über dedizierten Speicher, der von den anderen Instanzen isoliert ist.
- **Datenresidenz**: Die verarbeiteten Daten werden in Frankreich, in der Region FR1, gehostet.

## Dienstverfügbarkeit

Im Bare Metal-Angebot beträgt das Verfügbarkeitsziel der GPUs 99,9 %, monatlich gemessen. In den anderen Angeboten gilt das Verfügbarkeitsziel des Angebots, das die GPU hostet.

## Reversibilität

Am Ende des Dienstes können Sie folgende Elemente zurückerhalten:

| Exportiertes Element   | Lieferumfang                         | Bereitstellungsfrist        | Kosten     |
|------------------------|--------------------------------------|-----------------------------|------------|
| Modelle                | Standardformate (ONNX usw.)          | 15 Tage                     | Kostenlos  |
| Daten                  | Offene Formate                       | 30 Tage                     | Kostenlos  |
| Migrationsunterstützung | Technischer Support                 | Auf Anfrage                 | Nach Angebot |

## Preise

Die GPUs werden zusammen mit dem Compute-Blade oder Worker-Node abgerechnet, der sie hostet. Die Bindungsmodalitäten hängen vom Angebot ab: Auf PaaS OpenShift sind GPU-Worker-Nodes mit monatlicher nutzungsbasierter Abrechnung oder mit einer 12-monatigen Reservierung verfügbar. Die Preise für GPU sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[GPU — Preise](https://www.cloud-temple.com/produits/gpu/).

## Bewährte Verfahren

- **Dimensionieren Sie nach dem benötigten Speicher**: Wählen Sie die H100-Karte (80 GB) oder die L40S-Karte (48 GB) je nach Größe der zu verarbeitenden Modelle und Daten.
- **Teilen Sie eine H100-Karte** mit Multi-Instance GPU zwischen mehreren kleinen Workloads, anstatt jedem eine ganze Karte zuzuweisen.
- **Virtuelle Maschinen**: Um eine GPU aus einer virtuellen Maschine von IaaS VMware zu nutzen, aktivieren Sie die erweiterten Parameter `pciPassthru.use64bitMMIO` und `pciPassthru.64bitMMIOSizeGB` (siehe den [Schnellstart-Leitfaden IaaS VMware](../iaas_vmware/quickstart.md)).
- **Kubernetes**: Deklarieren Sie auf Managed Kubernetes `runtimeClassName: nvidia` in Ihren Pods, damit diese auf die GPU zugreifen können (siehe das Tutorial [Eine GPU auf Managed Kubernetes verwenden](../managed_kubernetes/tutorials/usinggpu.md)).
