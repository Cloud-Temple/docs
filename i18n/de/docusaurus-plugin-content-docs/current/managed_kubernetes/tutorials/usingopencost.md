---
title: Kosten mit OpenCost verfolgen
---
import opencostui from '@site/docs/managed_kubernetes/tutorials/images/opencost.png'
import opencostgrafana from '@site/docs/managed_kubernetes/tutorials/images/opencostgrafana.png'
import opencostmcp from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp.png'
import opencostmcp2 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp2.png'
import opencostmcp3 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp3.png'

## Ziele

Dieses Tutorial stellt Ihnen **OpenCost** vor, das Kosten-Monitoring- und -Optimierungswerkzeug, das in Ihren **Managed Kubernetes**-Cluster integriert ist. Am Ende dieses Leitfadens werden Sie in der Lage sein:

- Auf die OpenCost-Oberfläche **zuzugreifen**.
- Die Struktur der Oberfläche und die verfügbaren Ansichten zu **verstehen**.
- Die Kostenverteilung Ihrer Anwendungen und Infrastruktur zu **analysieren**.

## Was ist OpenCost?

OpenCost ist eine Open-Source-Lösung und ein CNCF-Standard (Cloud Native Computing Foundation), der Echtzeit-Einblick in die Kosten Ihrer Kubernetes-Umgebungen bietet. Es hilft Ihnen, genau zu verstehen, was Ressourcen in Ihrem Cluster verbraucht und wie sich das in Kosten niederschlägt.

Im Managed Kubernetes-Angebot ist OpenCost vorinstalliert und konfiguriert, um Ihnen einen klaren Überblick über Ihre Ausgaben zu geben. Es ist direkt mit den tatsächlichen Kosten der Cloud Temple-Infrastruktur parametriert.

## Zugriff auf die OpenCost-Oberfläche

Die OpenCost-Oberfläche ist über eine sichere, cluster-spezifische URL verfügbar. Um darauf zuzugreifen, verwenden Sie die folgende URL und ersetzen Sie `bezeichner` durch den Bezeichner Ihres Clusters (z.B. `ctodev`):

`https://opencost.external-secured.bezeichner.mk.ms-cloud-temple.com`

:::info
Der Zugriff auf diese URL ist auf die IP-Adressen beschränkt, die Sie dem Cloud Temple-Support mitgeteilt haben. Falls Sie keinen Zugriff haben, wenden Sie sich bitte an den Support, um die Firewall-Regeln zu überprüfen.
:::

<img src={opencostui} alt="OpenCost UI"/>

## Die Kostenverteilung erkunden (Allocations)

Die wichtigste und detaillierteste Ansicht von OpenCost ist das **Allocations**-Dashboard. Hier können Sie Ihren Ressourcenverbrauch in Echtzeit visualisieren.

Diese Ansicht ermöglicht es Ihnen, Kosten nach nativen Kubernetes-Konzepten aufzuschlüsseln. Das Dropdown-Menü „Aggregate by" ist das Hauptwerkzeug für Ihre Analyse; es ermöglicht Ihnen, Kosten zu gruppieren nach:

- **Namespace**: Für eine Ansicht nach Umgebung oder Team.
- **Deployment**, **StatefulSet** usw.: Um die Kosten einer bestimmten Anwendung zu analysieren.
- **Controller**: Für eine technischere Ansicht.

### Aggregation nach Labels

Für eine noch detailliertere Finanzanalyse kann OpenCost Kosten auf Basis von **Kubernetes-Labels** aggregieren. Im Menü gibt es keine direkte „Label"-Option, aber OpenCost nimmt Ihre Labels auf und ermöglicht benutzerdefinierte Aggregationen. Dafür ist eine konsistente Labeling-Strategie unerlässlich. Durch die Verwendung von Labels wie `team: backend` oder `product: api-gateway` können Sie z.B. Kosten analysieren, die Ihrer Organisation genau entsprechen.
Für diese Art der Analyse müssen Sie die KI-Integration von OpenCost nutzen.

## Grafana-Dashboard

Zur Visualisierung von OpenCost-Daten ist auch ein Grafana-Dashboard verfügbar. Dieses Dashboard bietet eine alternative und ergänzende Ansicht zur OpenCost-Oberfläche und bewahrt den vollständigen Verlauf der Kostenmetriken, sodass Sie Trends langfristig analysieren können.

<img src={opencostgrafana} alt="OpenCost Grafana Dashboard"/>

## Erweiterte Nutzung: Integration mit KI (MCP-Server)

Für fortgeschrittene Benutzer kann OpenCost dank des **MCP (Multi-purpose Co-processor) Servers**-Systems direkt vom Cline-Konversationsassistenten (oder anderen) abgefragt werden. Dies ermöglicht es Ihnen, Abfragen zu skripten und Kostendaten direkt in Ihren Konversationen zu erhalten.

### 1. Konfiguration des OpenCost MCP in Cline

Um Cline mit Ihrer OpenCost-Instanz zu verbinden, müssen Sie die folgende Konfiguration zu Ihrer Datei `cline_mcp_settings.json` hinzufügen. Diese Datei befindet sich normalerweise im Cline-Konfigurationsverzeichnis.

Wir empfehlen, einen MCP-Server namens „opencost-xxxxx" zu erstellen, wobei xxxxx der Name Ihres verwalteten Kubernetes-Clusters ist.
Die MCP-Server-URL hat folgendes Format: `https://opencost-mcp.external-secured.bezeichner.mk.ms-cloud-temple.com`
Beispielsweise für den Cluster „bestie":

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

Um den `<TOKEN>`-Wert aus Ihren Anmeldedaten zu generieren, verwenden Sie einen der folgenden Befehle:

**Für Linux/macOS:**

```bash
echo -n 'finopsadm:IHR_PASSWORT' | base64
```

**Für Windows (PowerShell):**

```powershell
$credentials = [System.Text.Encoding]::UTF8.GetBytes("finopsadm:IHR_PASSWORT")
[System.Convert]::ToBase64String($credentials)
```

Sobald diese Datei gespeichert ist, lädt Cline beim Start automatisch den `opencost-xxxxx`-MCP.

### 2. OpenCost mit dem MCP abfragen

:::tip Voraussetzungen
Um mit dem MCP in natürlicher Sprache zu interagieren, muss die zugrunde liegende KI Zugang zu Sprachmodellen (LLMs) haben, entweder lokal (LMStudio usw.) oder über eine Verbindung zu öffentlichen Diensten wie GPT-5 oder Gemini, oder durch die Nutzung unseres souveränen **[LLM-as-a-Service](pathname:///llmaas/llmaas)**-Angebots.
:::

Nach der Konfiguration können Sie LLM-Werkzeuge verwenden, um Abfragen in natürlicher Sprache an diesen MCP-Server zu stellen.

#### Beispiel

„Verwende den MCP ‚opencost-bestie' und sag mir, welcher Prozentsatz der Cluster-Kosten keinen Ressourcen zugewiesen ist"
Sie erhalten folgendes:
<img src={opencostmcp} alt="KI opencost Antwort"/>

#### Beispiel 2

„Verwende den MCP ‚opencost-bestie' und liste mir die mit persistenten Volumes verbundenen Kosten für gestern auf"

<img src={opencostmcp2} alt="KI opencost Antwort 2"/>

#### Beispiel 3

„Verwende den MCP opencost-bestie und sag mir, welcher Prozentsatz der Cluster-Kosten der Anwendung mit dem Label ‚nginx' zugewiesen ist. (Filter in der Form filter: ‚label:app:frontend')"

<img src={opencostmcp3} alt="KI opencost Antwort 3"/>

## Fazit

OpenCost stellt Ihnen leistungsstarke Werkzeuge für eine detaillierte Echtzeit-Analyse der Kosten Ihres Kubernetes-Clusters bereit. Durch die hauptsächliche Nutzung der **Allocations**-Ansicht in Kombination mit einer guten Labeling-Strategie erhalten Sie einen klaren Überblick über Ihre Ausgaben, der sowohl mit Ihren technischen Deployments als auch mit Ihrer internen Organisation übereinstimmt. Der Einsatz von LLMs und des OpenCost-MCP-Servers ermöglicht eine noch tiefgreifendere Nutzung der Daten.
