---
title: SLA delle istanze VM
slug: /contractual/vm-instances/sla
displayed_sidebar: docSidebar
---

# Accordo sul Livello di Servizio (SLA) – Istanze VM

| | |
| :--- | :--- |
| **Data dell'ultimo aggiornamento** | 15 aprile 2026 |

Il presente documento definisce gli Impegni sul Livello di Servizio (SLA) applicabili al prodotto **Istanze VM** fornito da **Cloud Temple** (ci-après dénommé « le Fournisseur » ou « Cloud Temple »). Integra le Condizioni Generali di Vendita e di Servizio di Cloud Temple e costituisce un tutto indissolubile con le stesse.

---

## 1. Definizioni

Nel contesto del presente SLA, i seguenti termini con iniziale maiuscola hanno il significato riportato di seguito:

- **Tasso di Disponibilità Mensile** : La percentuale di tempo di funzionamento garantito per un'istanza VM durante un mese civile.
- **Istanza VM** : Il server privato virtuale provisionato su richiesta dal Cliente sull'infrastruttura cloud di Cloud Temple, basato su risorse di calcolo e archiviazione condivise ad alte prestazioni.
- **Periodo di Indisponibilità** : Perdita totale di accesso e connettività esterna all'Istanza VM, misurata esclusivamente a livello dell'infrastruttura sottostante di Cloud Temple (stato dell'istanza segnalato come inattivo, arrestato o in errore dall'ipervisore Cloud Temple).
- **Durata di Indisponibilità** : Tempo ininterrotto durante il quale si verifica il Periodo di Indisponibilità. Per essere conteggiata ai sensi del presente SLA, una Durata di Indisponibilità deve essere di almeno **quattro (4) minuti consecutivi**.

---

## 2. Impegni sul Livello di Servizio (SLA)

Cloud Temple si impegna a garantire un Tasso di Disponibilità Mensile di **99,95 %** per ogni Istanza VM attiva fatturata al Cliente.

Questo tasso equivale a un massimo di **21,9 minuti** di Durata di Indisponibilità autorizzata per mese civile. In caso di mancato rispetto di tale impegno, il Cliente potrà richiedere Crediti di Servizio nelle condizioni definite all'Articolo 5.

---

## 3. Misura e perimetro della Disponibilità

Il monitoraggio e il calcolo del Tasso di Disponibilità Mensile sono effettuati **esclusivamente dagli strumenti di monitoraggio dell'infrastruttura di Cloud Temple**, verificando lo stato dell'istanza a livello dello strato di virtualizzazione.

**Perimetro di responsabilità :**  
Il presente SLA copre esclusivamente il funzionamento delle risorse di calcolo (Compute : CPU, RAM) allocate sull'infrastruttura hardware di Cloud Temple.

:::info
La connettività di rete (VPC, routing) o lo storage persistente sono oggetto di documenti SLA distinti e non sono coperti dal presente impegno.
:::

**Principio di esclusione per lo stato UP :**  
Non appena l'istanza VM è visualizzata come « UP » o « RUNNING » dalla piattaforma Cloud Temple, l'impegno SLA è considerato rispettato, indipendentemente dall'accessibilità dello strato applicativo del Cliente.

---

## 4. Esclusioni dalla Garanzia

Il presente SLA non costituisce un impegno sulla disponibilità degli elementi che sono sotto il controllo esclusivo del Cliente. Di conseguenza, non sono **considerati** Periodi di Indisponibilità le interruzioni, le perdite di accesso o i guasti derivanti da:

1. **Guasti del Sistema Operativo (OS) o software**: Crash dell'OS guest (es. *Kernel Panic*, *Blue Screen of Death*), sovraccarico della CPU o della RAM causato dai processi del Cliente, o corruzione del sistema di file interno.

2. **Configurazioni del Cliente**: Regole del firewall di rete o locale (iptables, firewalld) che bloccano gli accessi, errori di configurazione di rete all'interno dell'OS tramite Cloud-init o in fase post-deployment.

3. **Guasti applicativi**: Arresto o crash di un servizio ospitato sulla VM Instance (server web, database, container, ecc.).

4. **Manutenzione programmata**: Interventi hardware o software sull'infrastruttura fisica di Cloud Temple che sono stati oggetto di notifica preventiva nell'ambito delle finestre di manutenzione previste dal contratto di supporto.

5. **Assenza o disattivazione dei tools VM**: Gli agent di gestione dell'ipervisors (*tools*) preinstallati da Cloud Temple su ogni istanza sono indispensabili per la misurazione e la garanzia della disponibilità. Se questi tools sono stati disattivati, rimossi o resi non funzionanti dal cliente, Cloud Temple non è più in grado di garantire il monitoraggio dell'istanza né di accertare oggettivamente un periodo di indisponibilità. Il SLA è **immediatamente sospeso** per la durata in cui i tools sono assenti o non operativi. La presenza e il corretto funzionamento dei tools sono sotto la piena responsabilità del cliente per tutta la durata di vita dell'istanza.

6. **Comportamento abusivo o violazione**: Sospensione della VM Instance da parte di Cloud Temple in seguito a una violazione delle Condizioni Generali o dei requisiti di sicurezza (es. compromissione, mancato rispetto delle regole del Marketplace Cloud Temple).

7. **Forza maggiore**: Eventi al di fuori del controllo ragionevole di Cloud Temple.

---

## 5. Crediti di Servizio e Penalità

Se il Tasso di Disponibilità Mensile del 99,95 % non viene raggiunto per una determinata VM Instance, il Cliente ha diritto a un risarcimento sotto forma di Credito di Servizio.

Il Credito di Servizio è calcolato in percentuale dell'importo mensile fatturato per la VM Instance interessata:

| Tasso di disponibilità mensile rilevato | Credito di Servizio |
| :--- | :---: |
| Tra il 99,00 % e il 99,94 % | 10 % |
| Tra il 95,00 % e il 98,99 % | 25 % |
| Inferiore al 95,00 % | 100 % |

### 5.1 Modalità di reclamo

Per ottenere un Credito di Servizio, il Cliente deve presentare una richiesta motivata aprendo un ticket presso il supporto Cloud Temple entro **trenta (30) giorni calendario** dal mese in cui l'incidente si è verificato.

La richiesta dovrà includere:
- L'identificativo (UUID) della VM Instance interessata
- I timestamp precisi del Periodo di Indisponibilità riscontrato