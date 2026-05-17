---
title: Monitorare i costi con OpenCost
---
import opencostui from '@site/docs/managed_kubernetes/tutorials/images/opencost.png'
import opencostgrafana from '@site/docs/managed_kubernetes/tutorials/images/opencostgrafana.png'
import opencostmcp from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp.png'
import opencostmcp2 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp2.png'
import opencostmcp3 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp3.png'

## Obiettivi

Questo tutorial presenta **OpenCost**, lo strumento di monitoraggio e ottimizzazione dei costi integrato nel cluster **Managed Kubernetes**. Al termine di questa guida, sarete in grado di:

- **Accedere** all'interfaccia di OpenCost.
- **Comprendere** la struttura dell'interfaccia e le viste disponibili.
- **Analizzare** la ripartizione dei costi delle vostre applicazioni e della vostra infrastruttura.

## Cos'è OpenCost?

OpenCost è una soluzione open-source, standard CNCF (Cloud Native Computing Foundation), che fornisce una visibilità in tempo reale sui costi dei tuoi ambienti Kubernetes. Ti aiuta a comprendere esattamente cosa consuma risorse nel tuo cluster e come ciò si traduce in termini di costi.

Nel prodotto Managed Kubernetes, OpenCost è preinstallato e configurato per offrirti una visione chiara delle tue spese. È direttamente configurato con i costi effettivi dell'infrastruttura Cloud Temple.

## Accedere all'interfaccia OpenCost

L'interfaccia di OpenCost è esposta su un URL sicuro, specifico per il vostro cluster. Per accedervi, utilizzate il seguente URL sostituendo `identificativo` con quello del vostro cluster (ad esempio, `ctodev`) :

`https://opencost.external-secured.identifiant.mk.ms-cloud-temple.com`

:::info
L'accesso a questo URL è limitato agli indirizzi IP che avete dichiarato al supporto Cloud Temple. Se non riuscite ad accedervi, contattate il supporto per verificare le regole del firewall.
:::

<img src={opencostui} alt="OpenCost UI"/>

## Esplorare la ripartizione dei costi (Allocations)

La vista principale e più dettagliata di OpenCost è la dashboard **Allocations**. È qui che è possibile visualizzare il consumo delle risorse in tempo reale.

Questa vista consente di scomporre i costi in base ai concetti nativi di Kubernetes. Il menu a discesa "Aggregate by" è lo strumento principale per la tua analisi; ti consente di raggruppare i costi per:

- **Namespace** : Per avere una vista per ambiente o per team.
- **Deployment**, **StatefulSet**, ecc. : Per analizzare il costo di un'applicazione specifica.
- **Controller** : Per una vista più tecnica.

### Aggregazione per Etichette

Per un'analisi finanziaria ancora più granulare, OpenCost può aggregare i costi basandosi sulle **etichette Kubernetes**. Non è presente un'opzione diretta "Etichetta" nel menu, ma OpenCost importa le vostre etichette e consente di creare aggregazioni personalizzate. A tal fine, è essenziale una strategia di etichettatura coerente. Ad esempio, utilizzando etichette come `team: backend` o `product: api-gateway`, potrete analizzare i costi che corrispondono esattamente alla vostra organizzazione.
Per questo tipo di analisi, è necessario utilizzare l'integrazione IA di OpenCost.

## Dashboard Grafana

Un dashboard Grafana è disponibile anche per visualizzare i dati di OpenCost. Questo dashboard offre una vista alternativa e complementare all'interfaccia di OpenCost e conserva lo storico completo delle metriche dei costi, consentendoti di analizzare le tendenze a lungo termine.

<img src={opencostgrafana} alt="OpenCost Grafana Dashboard"/>

## Utilizzo Avanzato: Integrazione con un'IA (Server MCP)

Per gli utenti avanzati, OpenCost può essere interrogato direttamente dall'assistente conversazionale Cline (o altro) grazie al sistema di **server MCP (Multi-purpose Co-processor)**. Questo consente di eseguire query tramite script e di ottenere i dati sui costi direttamente nelle conversazioni.

### 1. Configurazione di MCP OpenCost in Cline

Per connettere Cline alla tua istanza OpenCost, devi aggiungere la configurazione seguente al tuo file `cline_mcp_settings.json`. Questo file si trova generalmente nella directory di configurazione di Cline.

Consigliamo di creare un server MCP "opencost-xxxxx" dove xxxxx è il nome del tuo cluster Kubernetes gestito.
L'URL del server MCP è di tipo `https://opencost-mcp.external-secured.identifiant.mk.ms-cloud-temple.com`
Ad esempio, per il cluster "bestie" :

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

Per generare il valore `<TOKEN>` a partire dalle tue credenziali, utilizza uno dei comandi seguenti :

**Per Linux/macOS :**

```bash
echo -n 'finopsadm:VOTRE_MOT_DE_PASSE' | base64
```

**Per Windows (PowerShell) :**

```powershell
$credentials = [System.Text.Encoding]::UTF8.GetBytes("finopsadm:VOTRE_MOT_DE_PASSE")
[System.Convert]::ToBase64String($credentials)
```

Una volta salvato questo file, Cline caricherà automaticamente il MCP `opencost-xxxxx` all'avvio.

### 2. Interrogare OpenCost con il MCP

:::tip[Prerequisiti
]
Per interagire con il MCP in linguaggio naturale, l'IA sottostante deve avere accesso a modelli linguistici (LLM), sia localmente (LMStudio, ecc.), sia tramite una connessione a servizi pubblici come GPT-5 o Gemini, sia utilizzando il nostro prodotto **[LLM-as-a-Service](pathname:///llmaas/llmaas)** sovrano.
:::

Dopo la configurazione, è possibile utilizzare gli strumenti LLM per eseguire query in linguaggio naturale su questo server MCP.

#### Esempio

"usa il MCP "opencost-bestie", e dimmi quale percentuale dei costi del cluster non è allocata alle risorse"
Otterrai questo:
<img src={opencostmcp} alt="risposta IA opencost"/>

#### Esempio 2

"use il MCP "opencost-bestie",  e elencami i costi associati ai volumi persistenti per la giornata di ieri"

<img src={opencostmcp2} alt="risposta IA opencost 2"/>

#### Esempio 3

"utilizza il MCP opencost-bestie, e dimmi quale percentuale dei costi del cluster assegnati all'applicazione con l'etichetta "nginx" . (filtro del tipo filter: "label:app:frontend" )"

<img src={opencostmcp3} alt="risposta IA opencost 3"/>

## Conclusion

OpenCost fornisce potenti strumenti per un'analisi granulare e in tempo reale dei costi del tuo cluster Kubernetes. Utilizzando principalmente la vista **Allocations** e combinandola con una solida strategia di labeling, è possibile ottenere una visione chiara delle spese, allineata sia ai deployment tecnici che all'organizzazione interna. L'utilizzo dei LLM e del server MCP di OpenCost consente di approfondire ulteriormente l'utilizzo dei dati.