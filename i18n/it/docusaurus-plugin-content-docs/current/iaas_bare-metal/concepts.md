---
title: Concetti
---


L'offerta **Bare Metal** di Cloud Temple propone server fisici dedicati associati a storage block distribuito.
Questa soluzione offre una personalizzazione totale per i clienti che desiderano gestire i propri ambienti software, sia per installare un sistema Linux, Windows o un hypervisor.

---

## Un'infrastruttura fisica e flessibile

L'offerta Bare Metal si basa su un'architettura progettata per soddisfare le esigenze dei carichi di lavoro critici.

### Componenti principali

- **Server Cisco UCS** : Ad alte prestazioni e affidabili, queste lame di calcolo costituiscono la base dell'offerta.
- **Storage IBM Spectrum Virtualize** : Storage a blocchi distribuito, che offre resilienza e elevate prestazioni.

### Architettura

Il modello di storage distribuito offre una separazione tra il calcolo (server Bare Metal) e lo storage (blocco distribuito), consentendo:

- Una flessibilità per mappare i volumi di storage su più server Bare Metal in base alle esigenze.
- Una personalizzazione ottimale delle configurazioni di calcolo e storage.
- Una maggiore resilienza grazie all'uso di **Distributed RAID 6**.

---

## Regioni e zone di disponibilità

Il prodotto Bare Metal è distribuito in una zona di disponibilità.
Una [zona di disponibilità](../additional_content/concepts_az.md) fa parte di una [regione](../additional_content/concepts_regional.md).

Questo tipo di distribuzione consente di scegliere la posizione dei server Bare Metal e di ripartirli su diverse zone di disponibilità (AZ).
Ciò offre una migliore distribuzione del carico, massimizza la ridondanza e facilita l'implementazione di un piano di disaster recovery (DRP) in caso di incidente.

---

## Classi di lame di calcolo

Le lame di calcolo disponibili per l'offerta Bare Metal offrono una gamma di prestazioni per soddisfare diverse esigenze:

| Riferimento             | RAM  **(1)** | Frequenza  **(2)**                          | Numero di core / thread | Connettività  **(3)** | GPU  **(4)**           |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread          | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread          | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread         | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread          | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Note

- **(1)** La quantità di memoria è quella fisicamente disponibile sulle lame e non può essere modificata.
- **(2)** Le frequenze indicate corrispondono alla frequenza base minima e alla frequenza turbo.
- **(3)** La connettività fisica è condivisa per l'accesso di rete e l'accesso allo storage block, grazie a un'architettura convergente Cisco UCS.
- **(4)** I GPU disponibili evolvono in base alle ultime tecnologie. Al 1° maggio 2024, il prodotto include GPU NVIDIA LOVELACE L40S.

La disponibilità dell'infrastruttura è garantita al 99.9%, misurata mensilmente, inclusi i periodi di manutenzione. Tutte le richieste relative al SLA devono essere segnalate tramite un ticket di incidente.

---

## Classi di storage a blocchi

Lo storage a blocchi distribuito, basato su **IBM Spectrum Virtualize**, offre una gamma di prestazioni adattate a diversi casi d'uso :

| Riferimento                         | IOPS/To        | Limite IOPS max / Volume | Banda passante max / Volume | Utilizzo principale                        |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essenziale**             | 500            | 10 000 IOPS               | 512 Mo/s                    | Carichi di lavoro leggeri             |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 Mo/s                   | Carichi di lavoro standard            |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 Mo/s                   | Carichi intensivi                     |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 Mo/s                   | Carichi critici                      |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 Mo/s                   | Carichi ultra-intensivi               |
| **MASS STORAGE - Archiviazione**      | Non applicabile | Non garantito               | Non garantito                 | Storage economico per l'archiviazione   |

### Caratteristiche

- **Prestazioni** : Le prestazioni effettive crescono linearmente in base al volume allocato (secondo il rapporto IOPS/TB), **entro il limite hardware assoluto definito sopra**. (Ad esempio, un volume da 10 TB di classe Ultra sarà fisicamente limitato a 30.000 IOPS e 1024 MB/s).
- **Tecnologia** : Flash NVMe con **Distributed RAID 6** per una maggiore resilienza.
- **Disponibilità** : 99,99%, misurata mensilmente.
- **Restrizioni** : Nessuna limitazione su letture o scritture. Nessuna compressione o deduplicazione automatica, garantendo l'utilizzo completo dei volumi riservati.

### Sicurezza e Cifratura dello Storage a Blocchi

Per garantire la riservatezza dei vostri dati a riposo, l'intera nostra infrastruttura di storage a blocchi integra una robusta cifratura hardware.

- **Tipo di Cifratura** : I dati sono cifrati direttamente sui dischi (`Data At Rest`) utilizzando l'algoritmo **XTS-AES 256**.
- **Conformità** : Questo metodo di cifratura è conforme alla norma **FIPS 140-2**, garantendo un elevato livello di sicurezza convalidato.
- **Funzionamento** : La cifratura viene applicata al momento della scrittura dei dati sul supporto di storage fisico.

:::warning[Punto di attenzione sulla replicazione]
È importante notare che questa cifratura protegge i dati memorizzati sui dischi. Non è attiva "on-the-fly", il che significa che i dati non vengono cifrati durante le operazioni di replicazione dello storage tra le zone di disponibilità. La sicurezza dei trasferimenti è garantita da canali di comunicazione dedicati e sicuri.
:::

---

## Accesso Console Bare Metal

L'accesso ai server Bare Metal avviene direttamente dalla **console Cloud Temple**. Questa funzionalità offre un controllo totale sul ciclo di vita dei server, includendo:

- **Accesso KVM**: Un'interfaccia diretta per gestire i server, come se si fosse fisicamente in loco.
- **Gestione delle operazioni comuni**: Possibilità di eseguire azioni come la gestione dell'alimentazione, i riavvii o ancora l'**associazione ISO** per l'installazione di un sistema operativo.

Questo livello di accesso garantisce una flessibilità massima nel rispetto dei vincoli di sicurezza.

---

## Connettività di rete dei server Bare Metal

I server Bare Metal dispongono di funzionalità di rete avanzate.

### VLAN di livello 2

È possibile configurare **VLAN di tipo livello 2** sulle interfacce di rete dei server Bare Metal.
Gli utenti possono:

- **Abilitare il tagging VLAN** per associare uno o più VLAN a una singola interfaccia.
- **Propagare i VLAN** direttamente sulle interfacce di rete dei server.

### Aggregazione delle interfacce di rete

Ogni server è dotato di **due interfacce di rete**. Queste interfacce possono essere utilizzate in modo indipendente o combinate per garantire prestazioni e ridondanza migliori:

### Prestazioni di rete

Le prestazioni delle interfacce di rete sono direttamente correlate alla classe della lama scelta. Esempio:

- Le lame **ECO** offrono una connettività di 2 x 10 Gbit/s.
- Le lame **STANDARD** e superiori dispongono di una connettività di 2 x 25 Gbit/s.

Queste opzioni di rete garantiscono una connettività affidabile, flessibile e adatta a una varietà di carichi di lavoro professionali.

---