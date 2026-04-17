---
title: SLA Istanze VM
slug: /contractual/vm-instances/sla
---

# Accordo sul Livello di Servizio (SLA) – Istanze VM

| | |
| :--- | :--- |
| **Ultimo aggiornamento** | 15 aprile 2026 |

Questo documento definisce gli Impegni di Livello di Servizio (SLA) applicabili al prodotto **Istanze VM** fornito da **Cloud Temple**. Integra le Condizioni Generali di Vendita e di Servizio di Cloud Temple e costituisce con esse un tutto inscindibile.

---

## 1. Definizioni

- **Tasso di Disponibilità Mensile**: La percentuale di tempo di funzionamento garantita per un'Istanza VM nel corso di un mese calendario.
- **Istanza VM**: Il server privato virtuale provisionato su richiesta del Cliente sull'infrastruttura cloud di Cloud Temple, basato su risorse di calcolo e storage condivise ad alte prestazioni.
- **Periodo di Indisponibilità**: Perdita totale di accesso e connettività esterna all'Istanza VM, misurata esclusivamente a livello dell'infrastruttura sottostante di Cloud Temple.
- **Durata di Indisponibilità**: Tempo ininterrotto durante il quale viene constatato il Periodo di Indisponibilità. Per essere contabilizzata ai sensi di questo SLA, una Durata di Indisponibilità deve essere di almeno **quattro (4) minuti consecutivi**.

---

## 2. Impegni di Livello di Servizio (SLA)

Cloud Temple si impegna a garantire un Tasso di Disponibilità Mensile del **99,95%** per ogni Istanza VM attiva fatturata al Cliente.

Questo tasso equivale a un massimo di **21,9 minuti** di Durata di Indisponibilità autorizzata per mese calendario. In caso di mancato rispetto, il Cliente potrà richiedere Crediti di Servizio nelle condizioni definite all'Articolo 5.

---

## 3. Misurazione e Perimetro della Disponibilità

Il monitoraggio e il calcolo del Tasso di Disponibilità Mensile vengono effettuati **esclusivamente dagli strumenti di monitoraggio dell'infrastruttura di Cloud Temple**.

**Perimetro di responsabilità:**  
Il presente SLA copre solo il funzionamento delle risorse di calcolo (CPU, RAM) allocate sull'infrastruttura hardware di Cloud Temple.

:::info
La connettività di rete (VPC, routing) o lo storage persistente sono oggetto di documenti SLA separati.
:::

**Principio di esclusione per stato UP:**  
Non appena l'Istanza VM viene vista come "UP" o "RUNNING" dalla piattaforma Cloud Temple, l'impegno SLA è considerato rispettato.

---

## 4. Esclusioni dalla Garanzia

1. **Guasti del Sistema Operativo o software**: Crash del guest OS, sovraccarico di CPU o RAM causato dai processi del Cliente, corruzione del filesystem interno.

2. **Configurazioni del Cliente**: Regole firewall che bloccano gli accessi, errori di configurazione di rete all'interno dell'OS.

3. **Guasti applicativi**: Arresto o crash di un servizio ospitato sull'Istanza VM.

4. **Manutenzione programmata**: Interventi con notifica preventiva nelle finestre di manutenzione previste.

5. **Assenza o disabilitazione dei tools VM**: Gli agenti di gestione dell'hypervisor (*tools*) preinstallati da Cloud Temple su ogni istanza sono indispensabili per la misurazione e la garanzia della disponibilità. Se questi tools sono stati disabilitati, rimossi o resi non funzionali dal cliente, Cloud Temple non è più in grado di monitorare l'istanza né di constatare obiettivamente un periodo di indisponibilità. Il SLA è **immediatamente sospeso** per la durata in cui i tools sono assenti o non operativi. La presenza e il corretto funzionamento dei tools sono sotto l'esclusiva responsabilità del cliente per tutta la durata di vita dell'istanza.

6. **Comportamento abusivo o violazione**: Sospensione dell'Istanza VM da parte di Cloud Temple a seguito di una violazione delle Condizioni Generali.

7. **Forza maggiore**: Eventi al di fuori del ragionevole controllo di Cloud Temple.

---

## 5. Crediti di Servizio e Penali

| Tasso di disponibilità mensile constatato | Credito di Servizio |
| :--- | :---: |
| Tra 99,00% e 99,94% | 10% |
| Tra 95,00% e 98,99% | 25% |
| Inferiore al 95,00% | 100% |

### 5.1 Modalità di Reclamo

Il Cliente deve presentare una richiesta motivata aprendo un ticket presso il supporto Cloud Temple entro **trenta (30) giorni di calendario** successivi al mese in cui si è verificato l'incidente.

La richiesta deve includere:
- L'UUID dell'Istanza VM interessata
- I timestamp precisi del Periodo di Indisponibilità osservato
