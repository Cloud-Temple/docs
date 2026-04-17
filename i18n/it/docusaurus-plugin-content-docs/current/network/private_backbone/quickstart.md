---
title: Guida introduttiva
---

# Guida introduttiva — Private Backbone

Questa guida ti accompagna nella creazione della tua prima rete privata inter-AZ e nella configurazione dell'accesso Internet con IP pubblici.

---

## Prerequisiti

- Accesso alla **Console Cloud Temple** con i diritti di rete attivati
- Almeno un cluster di compute distribuito nel tuo tenant
- Per l'accesso Internet: una richiesta di servizio preventiva per le porte di connettività esterna

---

## Parte 1 — Creare una rete privata (VLAN)

### Passaggio 1: Accedere al menu Rete

Nella Console Cloud Temple, fai clic su **Rete** nella barra di navigazione a sinistra.

### Passaggio 2: Creare una nuova rete

Fai clic su **Nuova rete** e inserisci:

| Campo | Descrizione | Esempio |
|-------|-------------|---------|
| Nome | Identificatore leggibile della tua rete | `prod-backend-vlan` |
| VLAN ID | Identificatore VLAN (automatico o manuale) | `100` |
| Descrizione | Utilizzo della rete (opzionale) | `Rete backend di produzione` |

### Passaggio 3: Configurare la propagazione

Seleziona i **cluster di destinazione** su cui propagare questa rete.

:::caution[Limite di propagazione]
Le modifiche di propagazione sono limitate a **20 reti** per azione. Per volumi maggiori, esegui più azioni successive.
:::

### Passaggio 4: Confermare

Fai clic su **Crea**. La VLAN viene provisioned istantaneamente ed è disponibile sui cluster selezionati.

---

## Parte 2 — Condividere una rete tra tenant

Se la tua organizzazione ha più tenant, puoi condividere una rete:

1. Seleziona la rete dall'elenco
2. Fai clic su **Condividi**
3. Scegli il/i tenant di destinazione dall'elenco filtrato per organizzazione
4. Conferma la condivisione

La rete appare nella sezione **Condiviso con me** del tenant destinatario.

---

## Parte 3 — Ordinare IP pubblici

### Passaggio 1: Accedere alla sezione Internet

Nella Console Cloud Temple, naviga su **Rete > Internet**.

### Passaggio 2: Ordinare un blocco di IP

Fai clic su **Ordina indirizzi IP** e scegli:

| Tipo | Blocco minimo |
|------|--------------|
| IPv4 | 1 indirizzo |
| IPv6 | /64 (64 indirizzi) |

### Passaggio 3: Associare gli IP ai servizi

Una volta assegnato il blocco:
1. Seleziona l'indirizzo IP dall'elenco
2. Fai clic su **Associa**
3. Scegli il servizio di destinazione (VM, apparecchiatura, ecc.)

### Passaggio 4: Configurare il DNS inverso (PTR)

Per ogni IP pubblico, puoi definire un record PTR:
1. Fai clic sull'IP nella console
2. Seleziona **Configura PTR**
3. Inserisci il nome DNS desiderato (es. `servizio.esempio.it`)

---

## Parte 4 — Connettività esterna (porte 1G/10G)

Per collegare un'apparecchiatura di rete (firewall, router) o un collegamento operatore:

**Apri una richiesta di servizio** con le seguenti informazioni:
- Nome dell'organizzazione e referente tecnico
- Nome del tenant e zona di disponibilità di destinazione
- Tipo di porta desiderata: **1 Gbps** o **10 Gbps** (fibra o rame)
- Rete di destinazione ed eventuali esigenze di hosting fisico

:::info[Tempo di consegna]
Le porte di connettività esterna vengono consegnate su preventivo dopo la validazione della richiesta di servizio.
:::

---

## Prossimi passi

- 📖 [Concetti Private Backbone](./concepts) — Capire VPLS, VLAN tagging, BGP
- 🔧 [Tutorial](./tutorials) — Configurare FortiGate o pfSense con BGP
- 🌐 [Documentazione VPC](../vpc/vpc) — Per un approccio di rete cloud-native
