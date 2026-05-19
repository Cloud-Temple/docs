---
title: Kosten mit OpenCost verfolgen
---
import opencostui from '@site/docs/managed_kubernetes/tutorials/images/opencost.png'
import opencostgrafana from '@site/docs/managed_kubernetes/tutorials/images/opencostgrafana.png'
import opencostmcp from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp.png'
import opencostmcp2 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp2.png'
import opencostmcp3 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp3.png'

## Ziele

Dieses Tutorial stellt Ihnen **OpenCost** vor, das Monitoring- und Kostenoptimierungstool, das in Ihren **Managed Kubernetes**-Cluster integriert ist. Am Ende dieses Handbuchs sind Sie in der Lage:

- **Zugreifen** auf die OpenCost-Oberfläche.
- **Verstehen** der Struktur der Oberfläche und der verfügbaren Ansichten.
- **Analysieren** der Kostenverteilung Ihrer Anwendungen und Ihrer Infrastruktur.

## Was ist OpenCost?

OpenCost ist eine Open-Source-Lösung, die als Standard der CNCF (Cloud Native Computing Foundation) gilt und Echtzeit-Einblicke in die Kosten Ihrer Kubernetes-Umgebungen bietet. Es hilft Ihnen genau zu verstehen, welche Ressourcen in Ihrem Cluster verbraucht werden und wie sich dies in Kosten niederschlägt.

Im Managed-Kubernetes-Produkt ist OpenCost vorinstalliert und konfiguriert, um Ihnen einen klaren Überblick über Ihre Ausgaben zu verschaffen. Es ist direkt mit den tatsächlichen Kosten der Cloud-Temple-Infrastruktur verknüpft.

## Zugriff auf die OpenCost-Benutzeroberfläche

Die OpenCost-Benutzeroberfläche ist über eine sichere, cluster-spezifische URL verfügbar. Um darauf zuzugreifen, verwenden Sie die folgende URL, wobei Sie `identifiant` durch die Kennung Ihres Clusters (z. B. `ctodev`) ersetzen:

`https://opencost.external-secured.identifiant.mk.ms-cloud-temple.com`

:::info
Der Zugriff auf diese URL ist auf die IP-Adressen beschränkt, die Sie beim Cloud-Temple-Support angegeben haben. Falls der Zugriff nicht möglich ist, wenden Sie sich bitte an den Support, um die Firewall-Regeln überprüfen zu lassen.
:::

<img src={opencostui} alt="OpenCost UI"/>

## Kostenverteilung (Allocations) erkunden

Die Haupt- und detaillierteste Ansicht von OpenCost ist das Dashboard **Allocations**. Hier können Sie den Echtzeit-Ressourcenverbrauch visualisieren.

Diese Ansicht ermöglicht es Ihnen, die Kosten nach nativen Kubernetes-Konzepten aufzuschlüsseln. Das Dropdown-Menü "Aggregate by" ist das Hauptwerkzeug für Ihre Analyse und ermöglicht es Ihnen, die Kosten zu gruppieren nach :

- **Namespace** : Für eine Ansicht pro Umgebung oder Team.
- **Deployment**, **StatefulSet** usw. : Zur Analyse der Kosten einer bestimmten Anwendung.
- **Controller** : Für eine technischere Ansicht.

### Label-basierte Aggregation

Für eine noch feinere Finanzanalyse kann OpenCost die Kosten basierend auf den **Kubernetes-Labels** aggregieren. Es gibt keine direkte „Label“-Option im Menü, aber OpenCost verarbeitet Ihre Labels und ermöglicht die Erstellung benutzerdefinierter Aggregationen. Dafür ist eine konsistente Labeling-Strategie unerlässlich. Durch die Verwendung von Labels wie `team: backend` oder `product: api-gateway` können Sie die Kosten analysieren, die genau zu Ihrer Organisation passen.
Für diese Art der Analyse müssen Sie die KI-Integration von OpenCost nutzen.

## Grafana Dashboard

Ein Grafana-Dashboard ist ebenfalls verfügbar, um die OpenCost-Daten zu visualisieren. Dieses Dashboard bietet eine alternative und ergänzende Ansicht zur OpenCost-Benutzeroberfläche und speichert den vollständigen Verlauf der Kostenmetriken, sodass Sie langfristige Trends analysieren können.

<img src={opencostgrafana} alt="OpenCost Grafana-Dashboard"/>

## Erweiterte Nutzung: Integration mit einer KI (MCP-Server)

Für fortgeschrittene Benutzer kann OpenCost direkt über den Cline-Chat-Assistenten (oder andere) dank des **MCP (Multi-purpose Co-processor)-Server-Systems** abgefragt werden. Dies ermöglicht es Ihnen, Abfragen zu skripten und Kostendaten direkt in Ihren Konversationen abzurufen.

### 1. Konfiguration des MCP OpenCost in Cline

Um Cline mit Ihrer OpenCost-Instanz zu verbinden, müssen Sie die folgende Konfiguration zu Ihrer Datei `cline_mcp_settings.json` hinzufügen. Diese Datei befindet sich normalerweise im Konfigurationsverzeichnis von Cline.

Wir empfehlen, einen MCP-Server "opencost-xxxxx" zu erstellen, wobei xxxxx der Name Ihres verwalteten Kubernetes-Clusters ist.
Die URL des MCP-Servers hat das Format `https://opencost-mcp.external-secured.identifiant.mk.ms-cloud-temple.com`
Beispielsweise für den Cluster "bestie":

```json
{
  "mcpServers": {
    "opencost-bestie": {
      "disabled": false,
      "timeout": 60,
      "type": "streamableHttp",
      "url": "https://opencost-mcp.external-secured.bestie.mk.ms-cloud-temple.com",
      "headers": {
        "Authorization": "Basic <TOKEN>"
      }
    }
  }
}
```

Um den Wert `<TOKEN>` aus Ihren Anmeldeinformationen zu generieren, verwenden Sie einen der folgenden Befehle:

**Für Linux/macOS:**

```bash
echo -n 'finopsadm:VOTRE_MOT_DE_PASSE' | base64
```

**Für Windows (PowerShell):**

```powershell
$credentials = [System.Text.Encoding]::UTF8.GetBytes("finopsadm:VOTRE_MOT_DE_PASSE")
[System.Convert]::ToBase64String($credentials)
```

Nachdem diese Datei gespeichert wurde, lädt Cline den MCP `opencost-xxxxx` automatisch beim Start.

### 2. OpenCost mit MCP abfragen

:::tip[Voraussetzungen
]
Um mit dem MCP in natürlicher Sprache zu interagieren, muss die zugrunde liegende KI Zugriff auf Sprachmodelle (LLMs) haben, entweder lokal (LMStudio, etc), über eine Verbindung zu öffentlichen Diensten wie GPT-5 oder Gemini oder unter Nutzung unseres souveränen Produkts **[LLM-as-a-Service](pathname:///llmaas/llmaas)**.
:::

Nach der Konfiguration können Sie die LLM-Tools verwenden, um Abfragen in natürlicher Sprache an diesen MCP-Server zu stellen.

#### Beispiel

"nutze den MCP "opencost-bestie" und sag mir, welcher Prozentsatz der Clusterkosten nicht an Ressourcen allokiert ist"
Sie erhalten Folgendes:
<img src={opencostmcp} alt="OpenCost-KI-Antwort"/>

#### Beispiel 2

"nutze den MCP "opencost-bestie",  und liste mir die Kosten für die persistenten Volumes für den gestrigen Tag auf"

<img src={opencostmcp2} alt="KI-Antwort opencost 2"/>

#### Beispiel 3

"nutze den MCP opencost-bestie und sage mir, welchen Prozentsatz der Clusterkosten auf die Anwendung mit dem Label "nginx" . (Filter in der Form filter: "label:app:frontend" )

<img src={opencostmcp3} alt="KI-Antwort opencost 3"/>

## Fazit

OpenCost bietet Ihnen leistungsstarke Werkzeuge für eine feingranulare und Echtzeit-Analyse der Kosten Ihres Kubernetes-Clusters. Durch die primäre Nutzung der Ansicht **Allokationen** in Kombination mit einer durchdachten Labeling-Strategie erhalten Sie einen klaren Überblick über Ihre Ausgaben, der sowohl Ihre technischen Bereitstellungen als auch Ihre interne Organisation widerspiegelt. Der Einsatz von LLMs und des OpenCost MCP-Servers ermöglicht eine vertiefte Datenauswertung.