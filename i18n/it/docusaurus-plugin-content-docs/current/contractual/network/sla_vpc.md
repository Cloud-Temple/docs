---
title: SLA VPC
slug: /contractual/network/sla-vpc
displayed_sidebar: docSidebar
---

# Accordo sul Livello di Servizio (SLA) – Virtual Private Cloud (VPC)

| | |
| :--- | :--- |
| **Ultimo aggiornamento** | 17 aprile 2026 |

Il presente documento definisce gli Accordi sul Livello di Servizio (SLA) applicabili al prodotto **Virtual Private Cloud (VPC)** fornito da **Cloud Temple** (di seguito denominato «il Fornitore» o «Cloud Temple»). Integra le Condizioni Generali di Vendita e di Servizio di Cloud Temple e costituisce con esse un tutto inscindibile.

---

## 1. Definizioni

Nel quadro del presente SLA, i seguenti termini con iniziale maiuscola hanno il significato indicato di seguito:

- **Tasso di Disponibilità Mensile**: La percentuale di tempo di corretto funzionamento garantita per il piano dati del servizio VPC durante un mese solare.
- **Servizio VPC**: L'insieme dei componenti gestiti da Cloud Temple che costituiscono il Virtual Private Cloud: router VPC, reti private (Private Networks) e gateway esterno (External Gateway) con le sue funzionalità NAT, DNAT e IP flottanti.
- **Piano Dati**: Il piano di trasporto di rete che garantisce il routing dei flussi tra le reti private dello stesso VPC nonché la connettività Internet tramite il gateway esterno.
- **Piano di Controllo**: Le API e le interfacce (Console Cloud Temple) che consentono la creazione, la modifica e l'eliminazione delle risorse VPC (reti, router, IP flottanti, regole di sicurezza).
- **Periodo di Indisponibilità**: Interruzione completa del routing tra le reti private dello stesso VPC, o perdita totale della connettività Internet tramite il gateway esterno attivato, rilevata dagli strumenti di monitoraggio di Cloud Temple.
- **Durata dell'Indisponibilità**: Tempo ininterrotto durante il quale si constata il Periodo di Indisponibilità. Per essere contabilizzata ai sensi del presente SLA, una Durata dell'Indisponibilità deve essere di almeno **cinque (5) minuti consecutivi**.

---

## 2. Impegni sul Livello di Servizio (SLA)

Cloud Temple si impegna ai seguenti livelli di disponibilità mensile:

| Componente | Tasso di Disponibilità Mensile garantito |
| :--- | :---: |
| **Piano Dati VPC** (routing inter-rete, NAT, DNAT) | **99,99 %** |
| **Piano di Controllo VPC** (API, Console Cloud Temple) | **99,95 %** |

Un Tasso di Disponibilità Mensile del **99,99 %** per il piano dati corrisponde a un massimo di **4,4 minuti** di indisponibilità autorizzata per mese solare.

In caso di mancato rispetto di questi impegni, il Cliente potrà richiedere Crediti di Servizio alle condizioni definite all'Articolo 5.

---

## 3. Misurazione e perimetro della Disponibilità

La sorveglianza e il calcolo del Tasso di Disponibilità Mensile sono effettuati **esclusivamente dagli strumenti di monitoraggio dell'infrastruttura di Cloud Temple**.

**Perimetro di responsabilità:**  
Il presente SLA copre unicamente i componenti di rete **gestiti da Cloud Temple**:
- Il router VPC e la tabella di routing interna.
- Le Reti Private (segmenti L2) e la loro disponibilità a livello del piano dati.
- Il Gateway Esterno (External Gateway), le sue funzionalità NAT, DNAT e gli IP flottanti associati.

:::info
Le risorse di calcolo (VM Instances, IaaS OpenSource, IaaS VMware) connesse al VPC sono soggette a SLA distinti e non sono coperte dal presente documento.
:::

---

## 4. Esclusioni di Garanzia

Il presente SLA non costituisce un impegno sugli elementi al di fuori del controllo diretto di Cloud Temple. **Non** sono considerate Periodi di Indisponibilità le interruzioni derivanti da:

1. **Configurazioni del Cliente**: Regole di filtraggio di rete (Security Groups, ACL) configurate dal Cliente che bloccano la connettività, conflitti di indirizzi IP, errata configurazione di sottoreti o route statiche.

2. **Guasti delle risorse collegate**: Guasti a livello del sistema operativo o delle applicazioni ospitate sulle istanze di calcolo (VM Instances, IaaS, Bare Metal) collegate al VPC.

3. **Connettività Internet esterna**: Interruzioni di connettività oltre il punto di demarcazione di Cloud Temple (incidenti presso i provider di transito Internet, degradazioni dei collegamenti BGP upstream).

4. **Manutenzione programmata**: Interventi di manutenzione sull'infrastruttura di rete di Cloud Temple che siano stati notificati preventivamente nell'ambito delle finestre di manutenzione previste dal contratto di supporto del Cliente.

5. **Comportamento abusivo o violazione**: Sospensione del servizio VPC da parte di Cloud Temple a seguito di una violazione delle Condizioni Generali o dei requisiti di sicurezza.

6. **Forza maggiore**: Eventi al di fuori del ragionevole controllo di Cloud Temple.

---

## 5. Crediti di Servizio e Penali

### 5.1 Piano Dati VPC

Se il Tasso di Disponibilità Mensile del 99,99 % non viene raggiunto per il piano dati, il Cliente ha diritto a un Credito di Servizio calcolato come percentuale dell'importo mensile fatturato per il servizio VPC:

| Tasso di disponibilità mensile riscontrato | Credito di Servizio |
| :--- | :---: |
| Tra 99,00 % e 99,98 % | 10 % |
| Tra 95,00 % e 98,99 % | 25 % |
| Inferiore al 95,00 % | 100 % |

### 5.2 Piano di Controllo VPC

Se il Tasso di Disponibilità Mensile del 99,95 % non viene raggiunto per il piano di controllo, il Cliente ha diritto a un Credito di Servizio del **10 %** dell'importo mensile fatturato per il servizio VPC.

### 5.3 Modalità di reclamo

Per ottenere un Credito di Servizio, il Cliente deve presentare una richiesta motivata aprendo un ticket presso il supporto di Cloud Temple entro **trenta (30) giorni solari** successivi al mese in cui si è verificato l'incidente.

La richiesta deve contenere:
- L'identificatore (UUID) del VPC interessato
- I timestamp precisi del Periodo di Indisponibilità riscontrato
