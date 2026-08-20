---
title: Monitorare i costi con OpenCost
---
import opencostui from '@site/docs/managed_kubernetes/tutorials/images/opencost.png'
import opencostgrafana from '@site/docs/managed_kubernetes/tutorials/images/opencostgrafana.png'
import opencostmcp from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp.png'
import opencostmcp2 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp2.png'
import opencostmcp3 from '@site/docs/managed_kubernetes/tutorials/images/opencostmcp3.png'

## Obiettivi

Questo tutorial presenta **OpenCost**, lo strumento di monitoraggio e ottimizzazione dei costi integrato nel tuo cluster **Managed Kubernetes**. Al termine di questa guida, sarai in grado di :

- **Accedere** all'interfaccia di OpenCost.
- **Comprendere** la struttura dell'interfaccia e le viste disponibili.
- **Analizzare** la ripartizione dei costi delle tue applicazioni e della tua infrastruttura.

## Cos'è OpenCost ?

OpenCost è una soluzione open-source, standard della CNCF (Cloud Native Computing Foundation), che fornisce una visibilità in tempo reale sui costi dei vostri ambienti Kubernetes. Vi aiuta a comprendere esattamente cosa consuma risorse nel vostro cluster e come ciò si traduce in termini di costi.

Nel prodotto Managed Kubernetes, OpenCost è preinstallato e configurato per offrirvi una visione chiara delle vostre spese. È configurato direttamente con i costi reali dell'infrastruttura Cloud Temple.

## Accedere all'interfaccia OpenCost

L'interfaccia di OpenCost è esposta su un URL sicuro, specifico per il vostro cluster. Per accedervi, utilizzate il seguente URL sostituendo `identifiant` con quello del vostro cluster (ad esempio, `ctodev`) :

`https://opencost.external-secured.identifiant.mk.ms-cloud-temple.com`

>ℹ️L'accesso a questo URL è limitato agli indirizzi IP che avete dichiarato al supporto Cloud Temple. Se non riuscite ad accedervi, contattate il supporto per verificare le regole del firewall.


<img src={opencostui} alt="OpenCost UI"/>

## Esplorare l'allocazione dei costi (Allocations)

La vista principale e più dettagliata di OpenCost è la dashboard **Allocations**. È qui che puoi visualizzare il consumo delle risorse in tempo reale.

Questa vista ti consente di scomporre i costi per concetti nativi di Kubernetes. Il menu a tendina "Aggregate by" è lo strumento principale per la tua analisi, ti permette di raggruppare i costi per:

- **Namespace** : Per avere una vista per ambiente o per team.
- **Deployment**, **StatefulSet**, ecc. : Per analizzare il costo di un'applicazione specifica.
- **Controller** : Per una vista più tecnica.

### Aggregazione per Etichette

Per un'analisi finanziaria ancora più dettagliata, OpenCost può aggregare i costi basandosi sulle **etichette Kubernetes**. Non esiste un'opzione "Label" diretta nel menu, ma OpenCost acquisisce le vostre etichette e vi consente di creare aggregazioni personalizzate. Per farlo, una strategia di etichettatura coerente è essenziale. Ad esempio, utilizzando etichette come `team: backend` o `product: api-gateway`, potrete analizzare i costi che corrispondono precisamente alla vostra organizzazione.
Per questo tipo di analisi, è necessario utilizzare l'integrazione IA di OpenCost.

## Dashboard Grafana

Un dashboard Grafana è inoltre disponibile per visualizzare i dati di OpenCost. Questo dashboard offre una vista alternativa e complementare all'interfaccia di OpenCost, e conserva la cronologia completa delle metriche dei costi, consentendovi di analizzare le tendenze nel lungo periodo.

<img src={opencostgrafana} alt="OpenCost Grafana Dashboard"/>

## Utilizzo Avanzato: Integrazione con un'IA (Serveur MCP)

Per gli utenti avanzati, OpenCost può essere interrogato direttamente dall'assistente conversazionale Cline (ou autre) grazie al sistema di **MCP (Model Context Protocol) servers**. Ciò vi consente di automatizzare le query e ottenere i dati sui costi direttamente nelle vostre conversazioni.

### 1. Configurazione del MCP OpenCost in Cline

Per connettere Cline alla vostra istanza OpenCost, è necessario aggiungere la configurazione seguente al file `cline_mcp_settings.json`. Questo file si trova solitamente nella directory di configurazione di Cline.

Consigliamo di creare un server MCP "opencost-xxxxx" dove xxxxx è il nome del vostro cluster Kubernetes gestito.
L'URL del server MCP è del tipo `https://opencost-mcp.external-secured.identifiant.mk.ms-cloud-temple.com`
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

Per generare il valore `<TOKEN>` a partire dalle vostre credenziali, utilizzare uno dei seguenti comandi :

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

### 2. Interrogare OpenCost con MCP

>ℹ️[Prerequisiti]
>Per interagire con MCP in linguaggio naturale, l'IA sottostante deve avere accesso a modelli linguistici (LLM), sia localmente (LMStudio, ecc.), sia tramite una connessione a servizi pubblici come GPT-5 o Gemini, sia utilizzando il nostro prodotto **[LLM-as-a-Service](pathname:///llmaas/llmaas)** sovrano.


Dopo la configurazione, è possibile utilizzare gli strumenti LLM per eseguire query in linguaggio naturale su questo server MCP.

#### Esempio

"usa il MCP "opencost-bestie", e dimmi quale percentuale dei costi del cluster non è allocata alle risorse"
Otterrai questo:
<img src={opencostmcp} alt="réponse IA opencost"/>

#### Esempio 2

"utilizza il MCP "opencost-bestie",  e elencami i costi associati ai volumi persistenti per la giornata di ieri"

<img src={opencostmcp2} alt="risposta IA opencost 2"/>

#### Esempio 3

"utilizza il MCP opencost-bestie, e dimmi quale percentuale dei costi del cluster è allocata all'applicazione con il label "nginx" . (filtre de la forme filter: "label:app:frontend" )"

<img src={opencostmcp3} alt="réponse IA opencost 3"/>

## Conclusion

OpenCost fornisce strumenti potenti per un'analisi dettagliata e in tempo reale dei costi del vostro cluster Kubernetes. Utilizzando principalmente la vista **Allocations** e combinandola con una buona strategia di labeling, è possibile ottenere una visione chiara delle vostre spese, allineata sia ai vostri deployment tecnici che alla vostra organizzazione interna. L'utilizzo degli LLM e del server MCP opencost consente di andare oltre nello sfruttamento dei dati.