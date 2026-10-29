---
title: Avvio rapido
---
import newTabNetwork from '@site/docs/network/vpc/images/new_tab_network.png'
import vpcCreateButton from '@site/docs/network/vpc/images/vpc_create_button.png'
import vpcCreateModal from '@site/docs/network/vpc/images/vpc_create_modale.png'
import vpcOverview from '@site/docs/network/vpc/images/vpc.png'
import vpcDetailsView from '@site/docs/network/vpc/images/vpc_details_view.png'
import vpcNewPrivateNetwork from '@site/docs/network/vpc/images/vpc_new_private_network.png'
import vpcActivateGatewayButton from '@site/docs/network/vpc/images/vpc_activate_gateway_button.png'
import vpcActivateGatewayModal from '@site/docs/network/vpc/images/vpc_activate_gatewat_modale.png'
import vpcOrders from '@site/docs/network/vpc/images/vpc_orders.png'
import vpcStaticIps from '@site/docs/network/vpc/images/vpc_static_ips.png'
import vpcNewStaticIps from '@site/docs/network/vpc/images/vpc_new_static_ips.png'
import vpcNewStaticIpsModale from '@site/docs/network/vpc/images/vpc_new_static_ips_modale.png'
import vpcStaticIpsAssociate from '@site/docs/network/vpc/images/vpc_static_ips_associate_png.png'

# Avvio rapido VPC

Questa guida vi accompagna nella creazione del vostro primo Virtual Private Cloud (VPC) e nel deployment dei vostri primi network privati.

## Prerequisiti

Attualmente, l'attivazione del servizio VPC richiede di aver sottoscritto un prodotto **IaaS Open Source**. (Questa condizione sarà rimossa in un secondo momento).

## Passo 1: Accedere alla Console

1. Accedete alla Console Cloud Temple.
2. Nel menu di navigazione, selezionate **Network** quindi **VPC**.

<img src={newTabNetwork} />

## Passo 2: Ordinare un VPC

1. Fate clic sul pulsante **Nuovo VPC**.
<img src={vpcCreateButton} />

2. Compilate il modulo guidato:
    * **Nome del VPC**: Scegliete un nome univoco per identificare il vostro ambiente.
    * **Descrizione**: (Opzionale) Aggiungete una descrizione.
<img src={vpcCreateModal} />

3. Confermate la creazione.

> **Nota**: Il provisioning del VPC è completamente automatizzato e richiede generalmente meno di un'ora.

### Alternativa: Tramite il menu Ordini

È inoltre possibile avviare l'ordine di risorse VPC direttamente dal menu **Marketplace** > **Ordini**.

<img src={vpcOrders} />

<img src={vpcOverview} />

## Passo 3: Creare Network Privati (Private Networks)

Una volta che il vostro VPC è attivo:

1. Accedete ai dettagli del vostro VPC facendo clic sul suo nome.
<img src={vpcDetailsView} />

2. Andate nella scheda **Reti private**.
3. Fate clic su **Aggiungi una rete**.
4. Configurate il vostro network:
    * **Nome**: Nome del segmento di rete (es: `backend`, `frontend`).
    * **CIDR**: Intervallo di indirizzi IP (es: `192.168.1.0/24`).

<img src={vpcNewPrivateNetwork} />

## Passo 4: Attivare la Gateway e Ordinare IP Pubbliche

Per consentire l'accesso a Internet e l'esposizione di servizi:

1. Verificate se la gateway è attivata. In caso contrario, fate clic sul pulsante di attivazione.
<img src={vpcActivateGatewayButton} />

<img src={vpcActivateGatewayModal} />

1. Una volta che la gateway è attiva, andate nella scheda **IP pubbliche**.
<img src={vpcStaticIps} />

> **Nota**: L'elenco **IP pubbliche** alla radice del menu VPC mostra tutte le IP pubbliche (associate o meno). La scheda **IP pubbliche** nei dettagli di un VPC consente di gestire quelle associate a questo VPC (richiede la gateway attiva).

1. Fate clic sul pulsante per ordinare nuove IP, oppure fate clic sull'azione "Associa" per associare uno degli indirizzi IP dell'elenco che non lo è ancora.
<img src={vpcNewStaticIps} />

<img src={vpcStaticIpsAssociate} />
<img src={vpcNewStaticIpsModale} />

1. Selezionate il numero di IP che desiderate ordinare quindi confermate il vostro ordine.

## Passo 5: Collegare le vostre risorse

I vostri network privati sono ora disponibili in tutte le zone di disponibilità (AZ) della regione. Potete collegarvi le vostre macchine virtuali IaaS Open Source o i vostri server direttamente dalle rispettive interfacce di configurazione.

Per imparare a configurare un network VPC su una macchina virtuale, consultate il nostro tutorial: [Configurare un IP statico e una VM](./tutorials/vm_configuration).
