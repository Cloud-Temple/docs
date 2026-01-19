---
title: Monitorare i costi con OpenCost
---
import opencostui from './images/opencost.png'
import opencostmcp from './images/opencostmcp.png'
import opencostmcp2 from './images/opencostmcp2.png'
import opencostmcp3 from './images/opencostmcp3.png'

## Obiettivi

Questo tutorial vi presenta **OpenCost**, lo strumento di monitoraggio e ottimizzazione dei costi integrato nel vostro cluster **Managed Kubernetes**. Al termine di questa guida, sarete in grado di:

- **Accedere** all'interfaccia di OpenCost.
- **Comprendere** la struttura dell'interfaccia e le visualizzazioni disponibili.
- **Analizzare** la ripartizione dei costi delle vostre applicazioni e della vostra infrastruttura.

## Cos'è OpenCost?

OpenCost è una soluzione open-source, standard della CNCF (Cloud Native Computing Foundation), che fornisce una visibilità in tempo reale sui costi dei tuoi ambienti Kubernetes. Ti aiuta a comprendere con precisione cosa consuma risorse nel tuo cluster e come ciò si traduce in termini di costi.

Nell'offerta Kubernetes gestito, OpenCost è già preinstallato e configurato per offrirti una visione chiara delle tue spese. È direttamente impostato con i costi effettivi dell'infrastruttura Cloud Temple.

## Accedere all'interfaccia OpenCost

L'interfaccia di OpenCost è esposta tramite un URL sicuro, specifico per il tuo cluster. Per accedervi, utilizza l'URL seguente sostituendo `identifiant` con l'identificativo del tuo cluster (ad esempio, `ctodev`):

`https://opencost.external-secured.identifiant.mk.ms-cloud-temple.com`

:::info
L'accesso a questo URL è limitato agli indirizzi IP dichiarati al supporto Cloud Temple. Se non riesci ad accedervi, contatta il supporto per verificare le regole del firewall.
:::

<img src={opencostui} alt="Interfaccia OpenCost"/>

## Esplorare la distribuzione dei costi (Allocations)

La vista principale e più dettagliata di OpenCost è il dashboard **Allocations**. È qui che potete visualizzare in tempo reale il consumo delle vostre risorse.

Questa vista vi permette di suddividere i costi in base ai concetti nativi di Kubernetes. Il menu a discesa "Aggregate by" è lo strumento principale per l'analisi, permettendovi di raggruppare i costi per:

- **Namespace**: per ottenere una visione per ambiente o per team.
- **Deployment**, **StatefulSet**, ecc.: per analizzare il costo di un'applicazione specifica.
- **Controller**: per una visione più tecnica.

### Aggregazione per Label

Per un'analisi finanziaria ancora più approfondita, OpenCost può aggregare i costi basandosi sui **label Kubernetes**. Non esiste un'opzione "Label" diretta nel menu, ma OpenCost importa i tuoi label e ti permette di creare aggregazioni personalizzate. A questo scopo, è fondamentale adottare una strategia di labeling coerente. Ad esempio, utilizzando label come `team: backend` o `product: api-gateway`, potrai analizzare i costi in modo preciso in base alla tua organizzazione.  
Per questo tipo di analisi, è necessario passare attraverso l'integrazione IA di OpenCost.

## Uso avanzato: Integrazione con un'IA (server MCP)

Per gli utenti avanzati, OpenCost può essere interrogato direttamente dall'assistente conversazionale Cline (o altri) grazie al sistema di **server MCP (Multi-purpose Co-processor)**. Ciò ti permette di scriptare richieste e ottenere dati sui costi direttamente nelle tue conversazioni.

### 1. Configurazione di MCP OpenCost in Cline

Per collegare Cline alla tua istanza OpenCost, devi aggiungere la seguente configurazione al file `cline_mcp_settings.json`. Questo file si trova di solito nella directory di configurazione di Cline.

Ti consigliamo di creare un server MCP denominato "opencost-xxxxx", dove xxxxx è il nome del tuo cluster Kubernetes gestito.  
L'URL del server MCP è del tipo `https://opencost-mcp.external-secured.identifiant.mk.ms-cloud-temple.com`.  
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

Per generare il valore `<TOKEN>` a partire dai tuoi identificativi, utilizza una delle seguenti comandi:

**Per Linux/macOS:**
```bash
echo -n 'finopsadm:VOTRE_MOT_DE_PASSE' | base64
```

**Per Windows (PowerShell):**
```powershell
$credentials = [System.Text.Encoding]::UTF8.GetBytes("finopsadm:VOTRE_MOT_DE_PASSE")
[System.Convert]::ToBase64String($credentials)
```

Una volta salvato il file, Cline caricherà automaticamente il MCP `opencost-xxxxx` all'avvio.

### 2. Query OpenCost with MCP

:::tip Prerequisiti
Per interagire con il MCP in linguaggio naturale, il modello di intelligenza artificiale sottostante deve avere accesso a modelli linguistici (LLM), sia localmente (LMStudio, ecc.), sia tramite connessione a servizi pubblici come GPT-5 o Gemini, oppure utilizzando la nostra offerta **[LLM-as-a-Service](/llmaas/llmaas)** sovrana.
:::

Dopo la configurazione, puoi utilizzare gli strumenti LLM per effettuare query in linguaggio naturale su questo server MCP.

#### Esempio:

"usa il MCP 'opencost-bestie' e dimmi quale percentuale dei costi del cluster non è allocata a risorse"
Otterrai quanto segue:
<img src={opencostmcp} alt="risposta IA opencost"/>

#### Example 2:

"utilizza il MCP 'opencost-bestie' e elencami i costi associati ai volumi persistenti della giornata di ieri"

<img src={opencostmcp2} alt="risposta IA opencost 2"/>

#### Example 3:

"Use the OpenCost MCP opencost-bestie, and tell me what percentage of the cluster costs are allocated to the application with the label 'nginx' (filter of the form filter: 'label:app:frontend')."

<img src={opencostmcp3} alt="IA response opencost 3"/>

## Conclusione

OpenCost ti fornisce strumenti potenti per un'analisi dettagliata e in tempo reale dei costi del tuo cluster Kubernetes. Utilizzando principalmente la vista **Allocations** e combinandola con una strategia efficace di labeling, puoi ottenere una visione chiara delle tue spese, allineata sia ai tuoi deployment tecnici che alla tua organizzazione interna. L'utilizzo di LLM e del server MCP opencost ti permette di andare oltre nell'analisi dei dati.