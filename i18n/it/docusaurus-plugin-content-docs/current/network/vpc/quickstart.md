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
import vpcOrders from './images/vpc_orders.png'
import vpcStaticIps from './images/vpc_static_ips.png'
import vpcNewStaticIps from './images/vpc_new_static_ips.png'
import vpcNewStaticIpsModale from './images/vpc_new_static_ips_modale.png'
import vpcStaticIpsAssociate from './images/vpc_static_ips_associate_png.png'

# Avvio Rapido VPC

Questa guida ti accompagna nella creazione del tuo primo Virtual Private Cloud (VPC) e nel deployment delle tue prime reti private.

## Prerequisiti

Attualmente, l'attivazione del servizio VPC richiede di aver sottoscritto un'offerta **IaaS Open Source**. (Questa condizione sarà rimossa in seguito).

## Passo 1: Accedi alla Console

1.  Accedi alla Console Cloud Temple.
2.  Nel menu di navigazione, seleziona **Network** poi **VPC**.

<img src={newTabNetwork} />

## Passo 2: Ordinare un VPC

1.  Clicca sul pulsante **Nuovo VPC**.
<img src={vpcCreateButton} />

2.  Compila il modulo guidato:
    *   **Nome del VPC**: Scegli un nome univoco per identificare il tuo ambiente.
    *   **Descrizione**: (Opzionale) Aggiungi una descrizione.
<img src={vpcCreateModal} />

3.  Convalida la creazione.

> **Nota**: Il provisioning del VPC è completamente automatizzato e richiede generalmente meno di un'ora.

### Alternativa: Tramite la scheda Ordini

Puoi anche avviare l'ordine delle risorse VPC direttamente dal menu **Ordini**.

<img src={vpcOrders} />

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

<img src={vpcNewPrivateNetwork} />

## Passo 4: Attivare Gateway e Ordinare IP Pubblici

Per consentire l'accesso a Internet e l'esposizione dei servizi:

1.  Verifica se il gateway è attivato. In caso contrario, clicca sul pulsante di attivazione.
<img src={vpcActivateGatewayButton} />
<img src={vpcActivateGatewayModal} />

2.  Una volta che il gateway è attivo, vai alla scheda **IP Pubblici**.
<img src={vpcStaticIps} />

> **Nota**: L'elenco "IP Pubblici" visualizza tutti gli IP pubblici disponibili, siano essi già associati a un VPC o meno. La scheda "IP Pubblici" nel dettaglio di un VPC consente di gestire quelli associati a questo VPC (richiede gateway attivo).

3.  Clicca sul pulsante per ordinare nuovi IP, oppure clicca sull'azione "Associa" per associare uno degli indirizzi IP nell'elenco che non lo è ancora.
<img src={vpcNewStaticIps} />
<img src={vpcStaticIpsAssociate} />
<img src={vpcNewStaticIpsModale} />

4.  Seleziona il numero di IP che desideri ordinare e conferma l'ordine.

## Passo 5: Collega le tue risorse

Le tue reti private sono ora disponibili in tutte le Zone di Disponibilità (AZ) della regione. Puoi collegare le tue macchine virtuali IaaS Open Source o i tuoi server direttamente dalle rispettive interfacce di configurazione.

Per imparare a configurare una rete VPC su una macchina virtuale, consulta il nostro tutorial: [Configurare un IP Statico e una VM](./tutorials/vm_configuration).
