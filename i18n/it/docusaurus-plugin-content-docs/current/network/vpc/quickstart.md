---
title: Avvio Rapido
---
import newTabNetwork from './images/new_tab_network.png'
import vpcCreateButton from './images/vpc_create_button.png'
import vpcCreateModal from './images/vpc_create_modale.png'
import vpcOverview from './images/vpc.png'
import vpcDetailsView from './images/vpc_details_view.png'
import vpcNewPrivateNetwork from './images/vpc_new_private_network.png'
import vpcActivateGatewayButton from './images/vpc_activate_gateway_button.png'
import vpcActivateGatewayModal from './images/vpc_activate_gatewat_modale.png'

# Avvio Rapido VPC

Questa guida ti accompagna nella creazione del tuo primo Virtual Private Cloud (VPC) e nel deployment delle tue prime reti private.

## Prerequisiti

Attualmente, l'attivazione del servizio VPC richiede di aver sottoscritto un'offerta **IaaS Open Source**. (Questa condizione sarà rimossa in seguito).

## Passo 1: Accedi alla Console

1.  Accedi alla Console Cloud Temple.
2.  Nel menu di navigazione, seleziona **Network** poi **VPC**.

<img src={newTabNetwork} />

## Passo 2: Crea un VPC

1.  Clicca sul pulsante **Crea un VPC**.
<img src={vpcCreateButton} />

2.  Compila il modulo guidato:
    *   **Nome del VPC**: Scegli un nome univoco per identificare il tuo ambiente.
    *   **Descrizione**: (Opzionale) Aggiungi una descrizione.
<img src={vpcCreateModal} />

3.  Convalida la creazione.

> **Nota**: Il provisioning del VPC è completamente automatizzato e richiede generalmente meno di un'ora.

<img src={vpcOverview} />

## Passo 3: Crea Reti Private

Una volta che il tuo VPC è attivo:

1.  Accedi ai dettagli del tuo VPC cliccando sul suo nome.
<img src={vpcDetailsView} />

2.  Vai alla scheda **Reti Private**.
3.  Clicca su **Aggiungi una rete**.
4.  Configura la tua rete:
    *   **Nome**: Nome del segmento di rete (es: `backend`, `frontend`).
    *   **CIDR**: Intervallo di indirizzi IP (es: `192.168.1.0/24`).
    *   **DHCP**: Attiva o disattiva il servizio DHCP nativo.

<img src={vpcNewPrivateNetwork} />

## Passo 4: Attiva il Gateway (Opzionale)

Per dare accesso a Internet alle tue reti private tramite un gateway sicuro:

1. Clicca sul pulsante di attivazione del gateway.
<img src={vpcActivateGatewayButton} />

2. Conferma l'attivazione nella finestra modale.
<img src={vpcActivateGatewayModal} />

## Passo 5: Collega le tue risorse

Le tue reti private sono ora disponibili in tutte le Zone di Disponibilità (AZ) della regione. Puoi collegare le tue macchine virtuali IaaS Open Source o i tuoi server direttamente dalle rispettive interfacce di configurazione.
