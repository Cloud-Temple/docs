---
title: SLA VPC
slug: /contractual/network/sla-vpc
displayed_sidebar: docSidebar
---

# Accordo sul Livello di Servizio (SLA) – Virtual Private Cloud (VPC)

| | |
| :--- | :--- |
| **Data dell'ultimo aggiornamento** | 17 aprile 2026 |

Il presente documento definisce gli Impegni sul Livello di Servizio (SLA) applicabili al prodotto **Virtual Private Cloud (VPC)** fornito da **Cloud Temple** (di seguito denominato « il Fornitore » o « Cloud Temple »). Integra le Condizioni Generali di Vendita e di Servizio di Cloud Temple e costituisce un tutto inscindibile con le stesse.

---

## 1. Definizioni

Nel quadro del presente SLA, i seguenti termini con iniziale maiuscola hanno il significato riportato di seguito :

- **Tasso di Disponibilità Mensile** : La percentuale di tempo di funzionamento garantito per il piano dati del servizio VPC durante un mese civile.
- **Servizio VPC** : L'insieme dei componenti gestiti da Cloud Temple che costituiscono il Virtual Private Cloud : router VPC, reti private (Private Networks), e gateway esterno (External Gateway) con le relative funzionalità NAT, DNAT e IP fluttuanti.
- **Piano Dati** : Il piano di trasporto di rete che garantisce il routing dei flussi tra le reti private dello stesso VPC, nonché la connettività Internet tramite il gateway esterno.
- **Piano di Controllo** : Le API e le interfacce (Console Cloud Temple) che consentono la creazione, la modifica e l'eliminazione delle risorse VPC (reti, router, IP fluttuanti, regole di sicurezza).
- **Periodo di Indisponibilità** : Interruzione completa del routing tra le reti private dello stesso VPC, o perdita totale della connettività Internet tramite il gateway esterno quando è attivo, rilevata dagli strumenti di monitoraggio di Cloud Temple.
- **Durata di Indisponibilità** : Tempo ininterrotto durante il quale viene rilevato il Periodo di Indisponibilità. Per essere conteggiata ai fini del presente SLA, una Durata di Indisponibilità deve essere di almeno **cinque (5) minuti consecutivi**.

---

## 2. Impegni sul Livello di Servizio (SLA)

Cloud Temple si impegna per i seguenti livelli di disponibilità mensili:

| Componente | Tasso di Disponibilità Mensile garantito |
| :--- | :---: |
| **Piano dati VPC** (routing inter-rete, NAT, DNAT) | **99,99 %** |
| **Piano di controllo VPC** (API, Console Cloud Temple) | **99,9 %** |

Un Tasso di Disponibilità Mensile di **99,99 %** per il piano dati corrisponde a un massimo di **4,4 minuti** di tempo di inattività consentito per mese civile.

In caso di mancato rispetto di tali impegni, il Cliente potrà richiedere Crediti di Servizio nelle condizioni definite all'Articolo 5.

---

## 3. Misura e ambito di disponibilità

Il monitoraggio e il calcolo del Tasso di Disponibilità Mensile vengono eseguiti **esclusivamente dagli strumenti di monitoraggio dell'infrastruttura di Cloud Temple**.

**Ambito di responsabilità :**  
Il presente SLA copre esclusivamente i componenti di rete **gestiti da Cloud Temple** :
- Il router VPC e la tabella di routing interna.
- Le Private Networks (segmenti L2) e la loro disponibilità a livello di piano dati.
- Il gateway esterno (External Gateway), le sue funzionalità NAT, DNAT e gli indirizzi IP flottanti associati.

:::info
Le risorse di calcolo (Istanze VM, IaaS OpenSource, IaaS VMware) connesse al VPC sono oggetto di SLA distinti e non sono coperte dal presente documento.
:::

---

## 4. Esclusioni dalla Garanzia

Il presente SLA non costituisce un impegno per gli elementi al di fuori del controllo diretto di Cloud Temple. Non sono **considerati** Periodi di Inattività le interruzioni risultanti da :

1. **Configurazioni del Cliente** : Regole di filtraggio della rete (Security Groups, ACLs) configurate dal Cliente che bloccano la connettività, conflitti di indirizzamento IP, configurazione errata di sottoreti o route statiche.

2. **Guasti delle risorse connesse** : Guasti a livello del sistema operativo o delle applicazioni ospitate sulle istanze di calcolo (Istanze VM, IaaS, Bare Metal) connesse al VPC.

3. **Connettività Internet esterna** : Interruzioni della connettività che si verificano oltre il punto di demarcazione di Cloud Temple (incidenti presso gli operatori di transit Internet, degradazioni dei collegamenti BGP upstream).

4. **Manutenzione programmata** : Interventi di manutenzione sull'infrastruttura di rete di Cloud Temple oggetto di notifica preventiva nell'ambito delle finestre di manutenzione previste dal contratto di supporto del Cliente.

5. **Comportamento abusivo o violazione** : Sospensione del servizio VPC da parte di Cloud Temple in seguito a una violazione delle Condizioni Generali o dei requisiti di sicurezza (es. : attività di rete malevola, mancato rispetto delle Condizioni di Utilizzo Accettabile).

6. **Forza maggiore** : Eventi al di fuori del controllo ragionevole di Cloud Temple (disastri naturali, atti di guerra, interruzioni nazionali dell'energia, ecc.).

---

## 5. Crediti di Servizio e Penali

### 5.1 Piano dati VPC

Se il Tasso di Disponibilità Mensile del 99,99 % non viene raggiunto per il piano dati, il Cliente ha diritto a un Credito di Servizio calcolato in percentuale dell'importo mensile fatturato per il servizio VPC :

| Tasso di disponibilità mensile rilevato | Credito di Servizio |
| :--- | :---: |
| Tra il 99,00 % e il 99,98 % | 10 % |
| Tra il 95,00 % e il 98,99 % | 25 % |
| Inferiore al 95,00 % | 100 % |

### 5.2 Piano di controllo VPC

Se il Tasso di Disponibilità Mensile del 99,9 % non viene raggiunto per il piano di controllo, il Cliente ha diritto a un Credito di Servizio del **10 %** dell'importo mensile fatturato per il servizio VPC interessato.

### 5.3 Modalità di reclamo

Per ottenere un Credito di Servizio, il Cliente deve presentare una richiesta motivata aprendo un ticket presso il supporto Cloud Temple entro **trenta (30) giorni calendario** dal mese in cui si è verificato l'incidente.

La richiesta dovrà includere:
- L'identificativo (UUID) del VPC interessato
- I timestamp precisi del Periodo di Indisponibilità constatato