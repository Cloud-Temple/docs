---
title: Monitorare i costi con OpenCost
---
import opencostui from '@site/docs/managed_kubernetes/tutorials/images/opencost.png'
import opencostgrafana from '@site/docs/managed_kubernetes/tutorials/images/opencostgrafana.png'
import opencostmcp from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp.png'
import opencostmcp2 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp2.png'
import opencostmcp3 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp3.png'

## Obiettivi

Questo tutorial presenta **OpenCost**, lo strumento di monitoraggio e ottimizzazione dei costi integrato nel cluster **Managed Kubernetes**. Al termine di questa guida, sarà possibile:

- **Accedere** all'interfaccia di OpenCost.
- **Comprendere** la struttura dell'interfaccia e le viste disponibili.
- **Analizzare** la ripartizione dei costi delle applicazioni e dell'infrastruttura.

## Cos'è OpenCost?

OpenCost è una soluzione open source, standard CNCF (Cloud Native Computing Foundation), che fornisce visibilità in tempo reale sui costi degli ambienti Kubernetes. Aiuta a capire con precisione cosa consuma risorse nel cluster e come ciò si traduce in termini di costi.

Nell'offerta Managed Kubernetes, OpenCost è preinstallato e configurato per fornire una visione chiara delle spese. È direttamente parametrizzato con i costi reali dell'infrastruttura Cloud Temple.

## Accedere all'interfaccia OpenCost

L'interfaccia OpenCost è esposta su un URL sicuro, specifico del cluster. Per accedervi, utilizzare il seguente URL sostituendo `identificatore` con l'identificatore del cluster (ad esempio, `ctodev`):

`https://opencost.external-secured.identificatore.mk.ms-cloud-temple.com`

:::info
L'accesso a questo URL è limitato agli indirizzi IP dichiarati al supporto Cloud Temple. Se non è possibile accedere, contattare il supporto per verificare le regole del firewall.
:::

<img src={opencostui} alt="OpenCost UI"/>

## Esplorare la ripartizione dei costi (Allocations)

La vista principale e più dettagliata di OpenCost è il dashboard **Allocations**. Qui è possibile visualizzare il consumo delle risorse in tempo reale.

Questa vista consente di scomporre i costi per concetti nativi di Kubernetes. Il menu a discesa "Aggregate by" è lo strumento principale per l'analisi; consente di raggruppare i costi per:

- **Namespace**: Per una vista per ambiente o per team.
- **Deployment**, **StatefulSet**, ecc.: Per analizzare il costo di un'applicazione specifica.
- **Controller**: Per una vista più tecnica.

### Aggregazione per Label

Per un'analisi finanziaria ancora più dettagliata, OpenCost può aggregare i costi basandosi sui **label Kubernetes**. Non esiste un'opzione "Label" diretta nel menu, ma OpenCost acquisisce i label e consente di creare aggregazioni personalizzate. A tal fine, è essenziale una strategia di etichettatura coerente. Ad esempio, utilizzando label come `team: backend` o `product: api-gateway`, sarà possibile analizzare i costi che corrispondono precisamente all'organizzazione.
Per questo tipo di analisi, è necessario utilizzare l'integrazione AI di OpenCost.

## Dashboard Grafana

È disponibile anche un dashboard Grafana per visualizzare i dati di OpenCost. Questo dashboard offre una vista alternativa e complementare all'interfaccia OpenCost, e conserva la cronologia completa delle metriche dei costi, consentendo di analizzare le tendenze nel lungo termine.

<img src={opencostgrafana} alt="OpenCost Grafana Dashboard"/>

## Utilizzo Avanzato: Integrazione con AI (Server MCP)

Per gli utenti avanzati, OpenCost può essere interrogato direttamente dall'assistente conversazionale Cline (o altri) grazie al sistema di **server MCP (Multi-purpose Co-processor)**. Ciò consente di creare script di query e ottenere dati sui costi direttamente nelle conversazioni.

### 1. Configurazione dell'MCP OpenCost in Cline

Per connettere Cline all'istanza OpenCost, è necessario aggiungere la seguente configurazione al file `cline_mcp_settings.json`. Questo file si trova solitamente nella directory di configurazione di Cline.

Si consiglia di creare un server MCP denominato "opencost-xxxxx" dove xxxxx è il nome del cluster Kubernetes gestito.
L'URL del server MCP ha il seguente formato: `https://opencost-mcp.external-secured.identificatore.mk.ms-cloud-temple.com`
Ad esempio, per il cluster "bestie":

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

Per generare il valore `<TOKEN>` dalle proprie credenziali, utilizzare uno dei seguenti comandi:

**Per Linux/macOS:**

```bash
echo -n 'finopsadm:LA_VOSTRA_PASSWORD' | base64
```

**Per Windows (PowerShell):**

```powershell
$credentials = [System.Text.Encoding]::UTF8.GetBytes("finopsadm:LA_VOSTRA_PASSWORD")
[System.Convert]::ToBase64String($credentials)
```

Una volta salvato il file, Cline caricherà automaticamente il MCP `opencost-xxxxx` all'avvio.

### 2. Interrogare OpenCost con l'MCP

:::tip Prerequisiti
Per interagire con l'MCP in linguaggio naturale, l'AI sottostante deve avere accesso a modelli linguistici (LLM), sia localmente (LMStudio, ecc.), sia tramite una connessione a servizi pubblici come GPT-5 o Gemini, sia utilizzando la nostra offerta sovrana **[LLM-as-a-Service](pathname:///llmaas/llmaas)**.
:::

Dopo la configurazione, è possibile utilizzare gli strumenti LLM per effettuare query in linguaggio naturale su questo server MCP.

#### Esempio

"Utilizza il MCP 'opencost-bestie' e dimmi quale percentuale dei costi del cluster non è allocata a risorse"
Si otterrà questo:
<img src={opencostmcp} alt="Risposta AI opencost"/>

#### Esempio 2

"Utilizza il MCP 'opencost-bestie' e elenca i costi associati ai volumi persistenti per la giornata di ieri"

<img src={opencostmcp2} alt="Risposta AI opencost 2"/>

#### Esempio 3

"Utilizza il MCP opencost-bestie e dimmi quale percentuale dei costi del cluster è allocata all'applicazione con il label 'nginx'. (filtro della forma filter: 'label:app:frontend')"

<img src={opencostmcp3} alt="Risposta AI opencost 3"/>

## Conclusione

OpenCost fornisce strumenti potenti per un'analisi dettagliata e in tempo reale dei costi del cluster Kubernetes. Utilizzando principalmente la vista **Allocations** e combinandola con una buona strategia di etichettatura, è possibile ottenere una visione chiara delle spese, allineata sia ai deployment tecnici che all'organizzazione interna. L'utilizzo di LLM e del server MCP OpenCost consente di approfondire ulteriormente lo sfruttamento dei dati.
