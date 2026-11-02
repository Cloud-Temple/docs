---
title: Konzepte
---
import oshiftOffert from '@site/docs/paas_openshift/images/oshift_offert.png'

## Einführung

Das **PaaS OpenShift** ist eine verwaltete Red Hat OpenShift-Plattform, die nativ über drei Verfügbarkeitszonen derselben Region bereitgestellt wird. Die Control Plane wird von Cloud Temple betrieben; Sie stellen Ihre containerisierten Anwendungen auf dedizierten Worker-Knoten bereit und verwalten sie dort.

### Einführung in Red Hat OpenShift

**Red Hat OpenShift** ist eine Enterprise-Container-Plattform, die die Bereitstellung, Verwaltung und Skalierung containerisierter Anwendungen automatisiert. Die Plattform basiert auf Docker, einem Containerisierungssystem, mit dem eine Anwendung und ihre Abhängigkeiten in einen virtuellen Container verpackt werden können, sowie auf Kubernetes, einem Container-Orchestrierungssystem, das die Ausführung und Koordination der Container auf einem Server-Cluster steuert.

#### Im Rahmen der OpenShift-Plattform von Cloud Temple bereitgestelltes Red Hat-Angebot

Die Plattform ist ein Red Hat OpenShift 4 auf Basis von [Red Hat OpenShift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) und umfasst [OpenShift Data Foundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />


## Vorteile

| Vorteil                 | Beschreibung                                                                                 |
|-------------------------|----------------------------------------------------------------------------------------------|
| Verwaltete Plattform    | Die Betriebs- und Sicherheitsaufrechterhaltung der Control Plane ist gewährleistet.          |
| Hochverfügbarkeit       | Der Cluster ist auf drei Verfügbarkeitszonen verteilt, die im Angebot enthalten sind.         |
| Dedizierte Ressourcen   | Die Worker-Knoten sind dedizierte Compute-Blades.                                            |
| Sicherung und Migration | Veeam Kasten K10 sichert Ihre Anwendungen und erleichtert Migrationen zwischen Plattformen.  |
| Souveränität            | SecNumCloud-qualifizierter Dienst.                                                           |

### Vorteile von Red Hat OpenShift

- **Flexibilität:** Entwickler können die Tools, Sprachen und Frameworks ihrer Wahl verwenden.
- **Betriebseffizienz:** OpenShift optimiert die Ressourcennutzung, verkürzt die Time-to-Market und steigert die Produktivität der Entwickler.
- **Skalierbarkeit:** Die Plattform führt die Skalierung von Anwendungen automatisch aus, um dynamischen Anforderungen gerecht zu werden.
- **Sicherheit und Compliance:** Durch integrierte Sicherheitsrichtlinien unterstützt OpenShift die Einhaltung von Sicherheits- und Compliance-Standards.

Red Hat OpenShift ist eine umfassende Lösung für die Entwicklung, Bereitstellung und Verwaltung containerbasierter Anwendungen und bietet Unternehmen, die moderne Ansätze für die Softwareentwicklung verfolgen, eine leistungsstarke, sichere und flexible Plattform.

## Funktionen

### Hauptfunktionen von Red Hat OpenShift

- **Automatisierte Bereitstellung und Verwaltung:** OpenShift vereinfacht den Prozess der Anwendungsbereitstellung, indem es Verwaltungsroutinen wie Skalierung, Zustandsüberwachung und Lebenszyklus der Container automatisiert. Es bietet eine integrierte Umgebung für Entwicklung, Test und Produktion von Anwendungen.

- **Unterstützung mehrerer Sprachen und Dienste:** Die Plattform unterstützt eine breite Palette von Programmiersprachen (z. B. Java, Node.js, Python, Ruby und PHP) und bietet integrierte Dienste wie Messaging, Caching und Datenbanken, sodass Entwickler sich auf den Code konzentrieren können, anstatt sich um die Infrastruktur kümmern zu müssen.

- **Continuous Integration (CI) und Continuous Deployment (CD):** OpenShift integriert CI/CD-Tools, die die Softwareentwicklungs-Pipeline automatisieren – vom ersten Commit bis zum Produktions-Deployment – und so DevOps-Praktiken fördern.

- **Operations-Management:** OpenShift stellt Tools für Überwachung, Leistungsmanagement und Diagnose von Anwendungen und Infrastruktur bereit, die Betreibern helfen, die Gesundheit und Leistung der Systeme aufrechtzuerhalten.

- **Erweiterte Sicherheit:** Die Plattform ist mit integrierter Sicherheit ausgelegt und bietet rollenbasierte Zugriffskontrollen, Aufgabentrennung sowie automatisierte Verwaltung von Secrets, um Anwendungen und Daten zu schützen.

### Red Hat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) ist eine integrierte Lösung für Speicherung und Datenverwaltung, die für den nahtlosen Betrieb im OpenShift-Ökosystem konzipiert ist. Sie bietet eine persistente, sichere und hochverfügbare Dateninfrastruktur für containerisierte Anwendungen und unterstützt damit moderne, auf Container und Microservices ausgerichtete Entwicklungsumgebungen. ODF ist darauf ausgelegt, die Datenverwaltung in Hybrid-Cloud- und Multi-Cloud-Umgebungen zu vereinfachen und zu automatisieren, und bildet eine solide Grundlage für geschäftskritische Unternehmensanwendungen.

#### Hauptfunktionen von OpenShift Data Foundation

- **Persistenter Speicher:** ODF stellt eine persistente Speicherschicht für Container bereit, die für Unternehmensanwendungen wie Datenbanken, Content-Management-Systeme und Anwendungen mit persistentem Zustand unerlässlich ist.

- **Multicloud und Hybrid:** ODF ist für Hybrid-Cloud- und Multicloud-Umgebungen konzipiert und ermöglicht eine einheitliche Datenverwaltung über verschiedene Cloud-Umgebungen hinweg, was die Mobilität von Anwendungen und Daten erleichtert.

- **Automatisierung und Orchestrierung:** Dank der tiefen Integration in Kubernetes und OpenShift automatisiert ODF die Bereitstellung, Skalierung und Lebenszyklusverwaltung des Speichers entsprechend den Anforderungen der Anwendungen.

- **Hochverfügbarkeit und Resilienz:** ODF nutzt Datenreplikation und Snapshots, um die Hochverfügbarkeit und Dauerhaftigkeit der Daten sicherzustellen, was für die Kontinuität des Geschäftsbetriebs unerlässlich ist.

- **Datensicherheit:** Die Lösung umfasst erweiterte Sicherheitsfunktionen wie die Verschlüsselung ruhender und übertragener Daten sowie anpassbare Sicherheits- und Compliance-Richtlinien. Unsere SecNumCloud-Implementierung gewährleistet einen mehrstufigen Schutz:
  - **Verschlüsselung ruhender Daten**: Der von OpenShift Data Foundation bereitgestellte persistente Speicher basiert auf unserer zugrunde liegenden Block-Storage-Infrastruktur. Daher werden alle ruhenden Daten mit dem Algorithmus **XTS-AES 256** verschlüsselt, der der Norm **FIPS 140-2** entspricht.
  - **Verschlüsselung übertragener Daten**: Alle Zugriffe auf die Plattform, einschließlich API, Webkonsole und Anwendungsverkehr über Routen, werden systematisch mit dem Protokoll **TLS** gesichert und verschlüsselt.

#### Vorteile von OpenShift Data Foundation

- **Betriebliche Flexibilität:** ODF ermöglicht es Unternehmen, ihre Daten in verteilten Umgebungen effizient zu verwalten, und bietet die nötige Flexibilität, um den sich wandelnden Anforderungen moderner Anwendungen gerecht zu werden.

- **Vereinfachte Datenverwaltung:** Durch die Automatisierung zahlreicher Datenverwaltungsaufgaben reduziert ODF die Komplexität und setzt IT-Ressourcen für Initiativen mit höherem Mehrwert frei.

- **Kostenoptimierung:** Die Fähigkeit von ODF, sich dynamisch an den Speicherbedarf anzupassen, hilft, Kosten zu optimieren, indem Überprovisionierung vermieden und die verfügbaren Ressourcen effizienter genutzt werden.

- **Leistungssteigerung:** ODF ist darauf ausgelegt, eine hohe Leistung für Unternehmensanwendungen zu liefern, und bietet Optimierungsmöglichkeiten für verschiedene Arten von Workloads.

Red Hat OpenShift Data Foundation ist eine fortschrittliche Datenspeicherlösung, die die Effizienz, Resilienz und Sicherheit der auf OpenShift bereitgestellten Unternehmensanwendungen stärkt. Durch persistenten, automatisierten und sicheren Speicher spielt ODF eine entscheidende Rolle dabei, Unternehmen in die Lage zu versetzen, das Potenzial von Container- und Hybrid-Cloud-Technologien voll auszuschöpfen.

### Load Balancer

Die **SecNumCloud OpenShift**-Umgebung bietet Lastverteilungslösungen, die auf mehrere Funktionsbereiche zugeschnitten sind und eine sichere und optimierte Verwaltung des Datenverkehrs gewährleisten.

Die Load Balancer decken vier verschiedene Bereiche ab und stützen sich dabei auf unterschiedliche Schichten des OSI-Modells:

- **Zugriff auf die Verwaltungstools** (API-Server und OpenShift-Konsole)
- **Öffentlicher HTTP/HTTPS-Datenverkehr**
- **Privater HTTP/HTTPS-Datenverkehr**
- **Spezifischer Datenverkehr, der eine erweiterte Anpassung erfordert**

#### Zugriff auf die Verwaltungstools

Der Zugriff auf die Verwaltungstools wird durch dedizierte Load Balancer gesichert. Diese sind durch verstärkte Sicherheitskontrollen geschützt, insbesondere durch eine über die **Cloud Temple**-Konsole verwaltbare Whitelist, die eine strikte Zugriffsverwaltung gewährleistet.

#### Öffentlicher HTTP/HTTPS-Datenverkehr

Die **öffentlichen LoadBalancer** auf Basis von **HAProxy** arbeiten auf **Schicht 4** des OSI-Modells. Sie ermöglichen es, Ihre Workloads über **HTTP/HTTPS** mittels **Routes** und **Ingress** bereitzustellen, und sorgen so für eine effiziente und leistungsstarke Verteilung des eingehenden Datenverkehrs.

#### Privater HTTP/HTTPS-Datenverkehr (Verbindung mit Ihren IaaS SNC-Diensten)

Die **privaten LoadBalancer** erleichtern die Kommunikation mit Ihren **IaaS SNC**-Diensten ohne öffentliche Exposition. Wie ihre öffentlichen Pendants verteilen sie den **HTTP/HTTPS**-Datenverkehr und gewährleisten dabei eine sichere und isolierte Umgebung.

#### Spezifischer Datenverkehr

Der **spezifische Datenverkehr** wird über den LoadBalancer **MetalLB** abgewickelt. Er unterstützt erweiterte Anforderungen, die eine feingranulare Anpassung erfordern, zum Beispiel:

- Die Verbindung zu einer Datenbank über **TCP**
- Die Verarbeitung von **UDP**-Datenströmen für Echtzeitanwendungen oder Anwendungen mit geringer Latenz
- Das Routing fortgeschrittener Protokolle wie **QUIC** oder **MQTT-SN**, was zusätzliche Flexibilität bietet

Diese Lösung ermöglicht die Abwicklung Ihrer spezifischen Datenströme, sowohl für Ihre privaten Verbindungen als auch für Ihre Anforderungen an die öffentliche Exposition.

Das Routing erfolgt über **dedizierte öffentliche und private IP-Adressen**. Standardmäßig werden Ihnen für die Bereitstellung Ihrer Dienste folgende IP-Adressen zugewiesen:

- **4 öffentliche IP-Adressen**
- **254 private IP-Adressen**

Reichen diese Ressourcen für Ihre Workloads nicht aus, können Sie bei unseren Diensten die Zuweisung zusätzlicher IP-Adressen beantragen, sowohl **öffentliche** als auch **private**.

> **Hinweis**: Die integrierten LoadBalancer fungieren nicht als **WAF**.

<a id="architecture-générale-de-la-plateforme"></a>

## Architektur

### Allgemeines

Die Red Hat OpenShift-Plattform von Cloud Temple ist als regionales Produkt konzipiert und wird nativ über [**drei unterschiedliche Verfügbarkeitszonen**](../additional_content/concepts_az.md) innerhalb derselben [Region](../additional_content/concepts_regional.md) von Cloud Temple bereitgestellt. Diese dreizonale Architektur erhöht die Verfügbarkeit und Resilienz der Daten erheblich.

Die Plattform besteht aus einer Control Plane und Worker-Knoten, die alle von der Cloud Temple-Infrastruktur verwaltet werden. Die Control Plane ist gleichmäßig auf die drei Verfügbarkeitszonen verteilt, um eine zentrale und sichere Verwaltung zu gewährleisten. Die Worker-Knoten werden hingegen durch Compute-Blades repräsentiert, die so angeordnet sind, dass jede Verfügbarkeitszone eines davon enthält.

Für die Worker-Knoten stehen mehrere Arten von Compute-Blades zur Verfügung, was eine flexible Anpassung an unterschiedliche betriebliche Anforderungen ermöglicht. Sie werden im Abschnitt Technische Spezifikationen beschrieben.

## Regionen und Verfügbarkeitszonen

Das PaaS OpenShift ist in der Region FR1 verfügbar. Es wird nativ über drei Verfügbarkeitszonen bereitgestellt, die ohne zusätzliche Buchung im Angebot enthalten sind. Die Knoten werden gleichmäßig auf die drei Zonen verteilt (ein Knoten pro Zone).

## Technische Spezifikationen

### Worker-Knoten


| Konfiguration                                                                                                                | Einheit |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| OPENSHIFT - Control Plane - 3 Knoten - Region FR1                                                                            | 1 dedizierter Plan |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 Kerne / 20 Threads - 64 GB RAM - 512 GiB FLASH 1500 iops)                         | 3 dedizierte Worker |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 Kerne / 40 Threads - 128 GB RAM - 512 GiB FLASH 1500 iops)                      | 3 dedizierte Worker |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 Kerne / 64 Threads - 384 GB RAM - 512 GiB FLASH 1500 iops)                   | 3 dedizierte Worker |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 Kerne / 96 Threads - 768 GB RAM - 512 GiB FLASH 1500 iops)                    | 3 dedizierte Worker |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 Kerne / 112 Threads - 1.5 TB RAM - 512 GiB FLASH 1500 iops)                       | 3 dedizierte Worker |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 Kerne / 64 Threads - 512 GB RAM - 512 GiB FLASH 1500 iops - 2xNVIDIA L40S 48GB)    | 3 dedizierte Worker + GPUs |


Die Red Hat OpenShift-Produkte von Cloud Temple sind im Pay-as-you-go-Modell oder mit einer 12-monatigen Reservierung verfügbar.

**Hinweise**:

1. *Die Aufrechterhaltung der Betriebsbereitschaft und Sicherheit der Control Plane liegt in der Verantwortung von Cloud Temple im Rahmen eines PaaS-Dienstes.*

2. *Zum 15. Juni 2024 ist die Version 1 der Plattform softwareseitig bewusst auf 30 Worker-Knoten pro Control Plane (unabhängig vom Worker-Typ) und auf insgesamt 50 TiB persistenten Speicher begrenzt. Sollten diese Grenzen für Ihr Projekt ein Hindernis darstellen, wenden Sie sich bitte an den Support.*

3. *Jeder Worker-Knoten wird mit 512 GiB Block-Flash-Speicher geliefert, was 1.5 TiB pro Leistungseinheit ergibt (1 Worker pro AZ).*

4. *Ein Worker-Knoten kann standardmäßig bis zu 250 Pods verwalten. Diese Anzahl ist über den Parameter podsPerCore anpassbar – beispielsweise ergeben sich bei 10 Pods pro Kern auf einem 4-Kern-Knoten maximal 40 Pods. Weitere technische Details finden Sie in der [Dokumentation zur Pod-Verwaltung](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) und im [Leitfaden zu OpenShift-Grenzwerten](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *Das PaaS-Angebot OpenShift umfasst nativ den Zugang zu den 3 Verfügbarkeitszonen, ohne dass eine zusätzliche Buchung erforderlich ist.*

6. *Es ist möglich, den OpenShift-Cluster später um zusätzlichen Block-Speicher zu erweitern.*

7. *Die Knoten werden gleichmäßig auf die 3 Verfügbarkeitszonen verteilt (1 Knoten pro Zone). Es ist nicht möglich, einen Cluster ungleichmäßig zu gestalten, indem einer einzelnen Zone eine größere Anzahl von Knoten zugewiesen wird.*

### Rechte und Berechtigungen

Hier sind die wichtigsten implementierten Berechtigungen:

|       Gruppe       |          API           |                                                                                       Ressourcenberechtigungen                                                                                     |
|--------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|          Alle          |                                                                                     Ressourcen (*) Get, List                                                                                       |
|       Batch        |       CronJobs,        |                                                                        Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                        |
|    Autoscaling     |HorizontalPodAutoscalers|                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|     Networking     |       Ingresses,       |                                                                  NetworkPolicies Create, Get, List, Watch, Update, Patch, Delete                                                                   |
|       Policy       |  PodDisruptionBudgets  |                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|       Route        |      (OpenShift)       |                                                                       Routes Create, Get, List, Watch, Update, Patch, Delete                                                                       |
|       Build        |      (OpenShift)       |                                                          BuildConfigs, Builds, BuildLogs Create, Get, List, Watch, Update, Patch, Delete                                                           |
|       Image        |      (OpenShift)       |                                                           ImageStreams, ImageStreamTags Create, Get, List, Watch, Update, Patch, Delete                                                            |
|        Apps        |      (OpenShift)       |                                                                 DeploymentConfigs Create, Get, List, Watch, Update, Patch, Delete                                                                  |
|      Template      |      (OpenShift)       |                                                            Templates, TemplateInstances Create, Get, List, Watch, Update, Patch, Delete                                                            |
|   Authorization    |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        RBAC        |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|      Project       |      (OpenShift)       |                                                                                Projects Get, Delete, Update, Patch                                                                                 |
|     Operators      |     Subscriptions,     |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete                                        |
|    Cert-Manager    |     Certificates,      |                                                    CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                                    |
|      Logging       |      (OpenShift)       |                                                       ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                        |
|      Storage       |    VolumeSnapshots     |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|        Ceph        |         (Rook)         |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                           |
|       NooBaa       |     BackingStores,     |                                                           BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                            |
|    ObjectBucket    |  ObjectBucketClaims,   |                                                                   ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        OCS         |      (OpenShift)       |                                                         StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                                          |
|       Local        |        Storage         |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        CSI         |         Addons         |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metrics       |         Pods,          |                                                                                             Nodes Get                                                                                              |
|      Security      |PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Custom       |       Resources        |                       Verschiedene benutzerdefinierte Ressourcen im Zusammenhang mit Kasten K10, Keycloak usw. Create, Get, List, Watch, Update, Patch, Delete                                      |

### Grenzen

- Maximal 30 Worker-Knoten pro Control Plane, unabhängig von ihrem Typ.
- Insgesamt 50 TiB persistenter Speicher.
- Standardmäßig 250 Pods pro Worker-Knoten, anpassbar über den Parameter podsPerCore.
- Standardmäßig 4 öffentliche und 254 private IP-Adressen zugewiesen; zusätzliche Adressen können beantragt werden.

<a id="restrictions-et-exigences-de-sécurité-sur-openshift-secnumcloud"></a>

## Sicherheit und Compliance

Das PaaS OpenShift ist nach HDS und ISO 27001 zertifiziert, trägt das Gaia-X-Label Stufe 3, ist CISPE- und C5-konform und SecNumCloud-qualifiziert.


### Dedizierte Control Plane

Die Ausführung von Workloads auf der **Control Plane** ist strikt untersagt. Diese Einschränkung gewährleistet die Sicherheit und Stabilität der OpenShift-Plattform auf **SecNumCloud**, indem der Zugriff auf kritische Ressourcen begrenzt wird.

### Verbot von Containern mit erhöhten Berechtigungen (rootless)

Um die Sicherheitsanforderungen des **SecNumCloud-Referenzrahmens** zu erfüllen, sind ausschließlich **rootless-Container** zulässig. Dieser Ansatz erhöht die Sicherheit, indem jeglicher privilegierter Zugriff auf die Container verhindert wird.

Anwendungen, die erhöhte Berechtigungen benötigen, müssen angepasst werden, da ihre Bereitstellung nicht zugelassen wird. Diese Einschränkung gilt auch für **Helm Charts** und **Operatoren**, die nicht-rootless-Images verwenden, wodurch deren Einsatz mit der Infrastruktur unvereinbar ist.

### Einschränkungen bei ClusterRoles

In unserem OpenShift-Produkt ist die Verwaltung der Zugriffsrechte auf Cluster-Ebene streng geregelt, um **Sicherheit und Compliance** mit SecNumCloud zu gewährleisten.

Dies bedeutet **Einschränkungen bei ClusterRoles**, die die globalen Berechtigungen begrenzen. Auch wenn diese Einschränkungen technische Anpassungen erfordern können, sind sie unerlässlich, um die Resilienz und Stabilität der Umgebung zu stärken.

Unser Support-Team steht Ihnen zur Verfügung, um Sie bei der Anpassung Ihrer Konfigurationen zu begleiten und Sie zu möglichen Alternativen zu beraten.

### Einschränkungen bei Security Context Constraints (SCC)

Die **Security Context Constraints (SCC)** sind vorgegeben und können von den Benutzern nicht geändert werden. Folglich sind die Ausführungsparameter der Container (Zugriffsrechte, Linux-Capabilities usw.) vordefiniert und nicht anpassbar.

Diese Einschränkung soll jeden unbefugten Zugriff auf kritische Ressourcen des Clusters verhindern. Anwendungen, die spezifische Sicherheitskontexte benötigen, müssen so angepasst werden, dass sie die geltenden SCC einhalten.

Aus betrieblicher Sicht kann dies architektonische Anpassungen und Änderungen an den Bereitstellungsprozessen erfordern, insbesondere bei **Helm Charts** und **Operatoren**, die diese Einschränkungen nicht einhalten.

### Einschränkungen bei Custom Resource Definitions (CRDs)

Um die **SecNumCloud-Konformität** zu gewährleisten, ist die Verwendung von **Custom Resource Definitions (CRDs)** und benutzerdefinierten Controllern eingeschränkt.

Diese Maßnahme, die mit den Rechten auf dem Cluster zusammenhängt, verhindert die Bereitstellung nicht autorisierter Ressourcen, die die Stabilität und Sicherheit der Infrastruktur beeinträchtigen könnten. Sie gilt auch für **Operatoren** und **Helm Charts**, mit Einschränkungen bei den **RBAC**-Rechten.

**Nicht zertifizierte CRDs** können abgelehnt werden, um die Integrität des Clusters sicherzustellen. Nur **CRDs aus zertifizierten Operatoren oder Helm Charts** sind nach Validierung durch unsere Dienste zulässig.

Unser Support-Team kann Sie bei diesem Vorgehen unterstützen und Sie zu den empfohlenen bewährten Verfahren beraten.

### Wegfall der Unterstützung dynamischer IP-Adressen für Runner

Die **OpenShift SecNumCloud-Runner** müssen mit **festen IP-Adressen** konfiguriert werden.

Diese Anforderung gewährleistet den sicheren Zugriff auf die **OpenShift-APIs**, die Verwaltungsoberflächen und die Zugriffsverwaltungstools der **Cloud Temple**-Konsole.

**Dynamische IP-Adressen werden nicht unterstützt**, was eine entsprechende Konfiguration erfordert, um die Konnektivität und Sicherheit der Komponenten zu gewährleisten.

<a id="stratégie-de-sauvegarde-de-votre-plateforme-paas-openshift"></a>

## Sicherung und Kontinuität

Die Sicherung und Wiederherstellung der PaaS OpenShift-Plattform liegt für den **ETCD**-Teil im Rahmen der Plattformverwaltung in der Verantwortung von Cloud Temple. **Die Sicherung und Wiederherstellung der Deployments und Anwendungsdaten liegt in der Verantwortung des Auftraggebers**.

Cloud Temple stellt seinen Kunden das Angebot **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)) zur Verfügung, eine Plattform speziell für die Datenverwaltung in Kubernetes-Umgebungen. Sie wurde entwickelt, um die Anforderungen an den Datenschutz zu erfüllen, und bietet leistungsstarke Funktionen für Sicherung, Wiederherstellung, Migration und Disaster Recovery. Kasten K10 integriert sich nativ in Kubernetes-Umgebungen – unabhängig davon, ob diese auf Cloud-Clustern oder On-Premises betrieben werden – und eignet sich für unterschiedliche Anwendungsfälle, insbesondere die Migration von Clustern zwischen verschiedenen Kubernetes-Distributionen wie Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine und Red Hat OpenShift.

Ein zentraler Anwendungsfall von Kasten K10 ist die **Migration von Clustern zwischen verschiedenen Kubernetes-Plattformen**. Ob für den Wechsel auf eine robustere Infrastruktur oder die Konsolidierung bestehender Umgebungen – Kasten K10 bietet einfache und effiziente Werkzeuge zur Durchführung dieser Migrationen:

- **Sicherung und Schutz der Daten**: Bei der Migration eines Kubernetes Vanilla- oder VMware Tanzu-Clusters zu Red Hat Kubernetes Engine oder OpenShift besteht der erste Schritt darin, die Anwendungsdaten und deren Zustände zu sichern. Kasten K10 integriert sich problemlos in die Kubernetes-APIs, um Anwendungen, deren Abhängigkeiten sowie die zugehörigen Datenvolumes zu identifizieren. Dazu gehört die Sicherung von persistenten Volumes (Persistent Volumes - PV), Datenbanken, Konfigurationen und Secrets. Kasten K10 unterstützt eine breite Palette von Speicheranbietern (S3, Google Cloud Storage, Azure Blob Storage usw.), wodurch Snapshots der zu migrierenden Anwendungen erstellt werden können. Diese Sicherungen werden anschließend sicher gespeichert, mit Optionen für Verschlüsselung und granulare Zugriffskontrolle, wodurch die Datensicherheit während des gesamten Prozesses gewährleistet ist.

- **Portabilität und Migration**: Die Migration zwischen Kubernetes-Distributionen wie Vanilla oder Tanzu und Red Hat-Lösungen wie OpenShift oder Kubernetes Engine kann aufgrund unterschiedlicher Architekturen und plattformspezifischer Konfigurationen komplex sein. Kasten K10 vereinfacht diesen Prozess durch eine Abstraktionsschicht für die Portabilität von Anwendungen. Bei der Migration repliziert Kasten K10 Konfigurationen und Daten von einem Quellcluster auf einen Zielcluster und berücksichtigt dabei die Besonderheiten jeder Umgebung. Beispielsweise können Kubernetes-Objekte wie ConfigMaps, Secrets, PVs sowie CRDs (Custom Resource Definitions) unter Berücksichtigung der spezifischen Einschränkungen jeder Kubernetes-Distribution migriert werden, sei es ein Red Hat OpenShift- oder ein Kubernetes Engine-Cluster. Der Prozess ist automatisiert, wodurch das Risiko manueller Fehler erheblich reduziert wird. Zudem ermöglicht Kasten K10 je nach Bedarf eine schrittweise oder vollständige Migration und bietet Echtzeit-Einblick in den Status der Migration, was die Verwaltung und Überwachung der Umstellung erleichtert.

- **Multi-Cloud- und Multi-Distribution-Kompatibilität**: Kasten K10 ist für hybride und Multi-Cloud-Umgebungen konzipiert und damit ein ideales Werkzeug für Organisationen, die Anwendungen von Tanzu- oder Vanilla-Clustern in Red Hat-Umgebungen in der Cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) oder auf On-Premises-Infrastrukturen migrieren möchten. Dies gewährleistet maximale Flexibilität und ermöglicht es DevOps-Teams, die beste Umgebung entsprechend den geschäftlichen Anforderungen oder den Strategien zur Infrastrukturmodernisierung zu wählen.

- **Vereinfachte Verwaltung und Automatisierung**: Kasten K10 bietet eine intuitive Benutzeroberfläche, mit der Administratoren Migrations- und Sicherungsvorgänge einfach verwalten können, ohne tiefgehende Kenntnisse jeder einzelnen Kubernetes-Plattform zu benötigen. Die Lösung verfügt zudem über Automatisierungsfunktionen, mit denen wiederkehrende Migrations- und Sicherungsrichtlinien definiert werden können, die sich für kontinuierliche Abläufe in CI/CD-Pipelines integrieren. Benutzer können Migrationen oder Wiederherstellungen entsprechend Wartungsfenstern planen, Validierungstests nach der Migration durchführen und Failover-Prozesse bei Problemen auf dem Quellcluster automatisieren.

- **Sicherheit und Compliance**: Bei Migrationen in kritische Umgebungen wie Red Hat OpenShift oder Kubernetes Engine sind Datensicherheit und die Einhaltung von Standards (ISO, SOC, GDPR usw.) wesentliche Aspekte. Kasten K10 gewährleistet die Verschlüsselung von Daten bei der Übertragung und im Ruhezustand und bietet zudem Audit- und Nachverfolgbarkeitsoptionen für Sicherungs- und Wiederherstellungsvorgänge. Diese Funktionen sind unerlässlich, um die Sicherheit der migrierten Daten zu gewährleisten, sei es in Produktions- oder Testumgebungen. Kasten K10 ist eine unverzichtbare Lösung für Unternehmen, die Kubernetes Vanilla- oder VMware Tanzu-Cluster effizient und sicher zu Red Hat Kubernetes Engine oder OpenShift migrieren möchten.

 Die Abrechnung erfolgt nach Anzahl der Worker-Knoten.


**Hinweis**: *Bitte beachten Sie, dass der für den ordnungsgemäßen Betrieb Ihrer Sicherung erforderliche Speicherplatz in der Zielumgebung Ihrer Sicherung einzuplanen ist, in der Regel S3-Speicher. Er ist nicht in den Leistungseinheiten von OpenShift oder Kasten enthalten.*

**(1)** *OADP ist nicht nativ im Cluster installiert. Nur Kasten ist für die Verwaltung von Migrationen, Sicherungen und Wiederherstellungen aktiviert*

## Dienstverfügbarkeit

Das Verfügbarkeitsziel der Control Plane beträgt 99,9 %, gemessen über einen Monat.

## Verantwortlichkeiten

Die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple ist in der [Verantwortlichkeitsmatrix (RACI) PaaS OpenShift](../contractual/paas/raci.md) beschrieben. Die Sicherung und Wiederherstellung des ETCD-Teils liegen bei Cloud Temple; die der Deployments und Anwendungsdaten liegen beim Kunden.

## Reversibilität

| Vorgang                         | Ergebnis              | Frist       | Kosten     |
|---------------------------------|-----------------------|-------------|------------|
| Export der Anwendungen          | Kubernetes-Manifeste  | 15 Tage     | Kostenlos  |
| Unterstützung bei der Migration | Technischer Support   | Auf Anfrage | Auf Angebot |

Mit Veeam Kasten K10 können Sie Ihre Anwendungen außerdem zu einer anderen Kubernetes-Distribution migrieren.

<a id="bon-à-savoir"></a>

## Bewährte Verfahren

• Falls die Hardwarekomponenten auf Plattformebene veralten und eine Migration auf neue Rechenressourcen erforderlich wird, übernimmt Cloud Temple sämtliche Hardware-Migrationen ohne zusätzliche Kosten und ohne Dienstunterbrechung.

• Für Tests von OpenShift stellt Cloud Temple keine dedizierte Umgebung bereit, Sie können jedoch [die Red Hat-Testplattformen](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it) nutzen.

• Für die Automatisierung Ihrer Infrastruktur sollten Sie den offiziellen Terraform-Provider von OpenShift bevorzugen.

## Preise

Das PaaS OpenShift ist im Pay-as-you-go-Modell oder mit einer 12-monatigen Reservierung verfügbar. Die Preise sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[PaaS OpenShift — Preise](https://www.cloud-temple.com/produits/paas-openshift/).
