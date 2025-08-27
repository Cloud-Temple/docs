---
title: Concetti
---

### La tecnologia VPLS

La rete globale Cloud Temple utilizza la tecnologia __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ è un VPN di livello 2 punto-multipunto basato su Ethernet. Consente di collegare siti geograficamente dispersi tra loro attraverso una rete MPLS. Per i clienti, tutti i siti sembrano essere nel medesimo LAN Ethernet, anche se il traffico viene trasportato dalla rete Cloud Temple.

__VPLS__, nella sua implementazione e configurazione, ha molto in comune con un VPN di livello 2. Nel VPLS, un pacchetto proveniente da una rete client viene prima inviato a un dispositivo client (CE) (ad esempio, un router o uno switch Ethernet).
Viene quindi inviato a un router di bordo del provider (PE) all'interno della rete del provider di servizi.
Il pacchetto attraversa la rete del provider di servizi su un percorso di commutazione etichette MPLS (LSP).
Arriva al router PE di uscita, che successivamente inoltra il traffico al dispositivo CE sul sito client di destinazione.
La differenza risiede nel fatto che, per __VPLS__, i pacchetti possono attraversare la rete del provider di servizi in modo punto-multipunto, il che significa che un pacchetto proveniente da un dispositivo CE può essere diffuso a tutti i router PE che partecipano a un'istanza di routing __VPLS__.

Il circuito __VPLS__ di un cliente può essere __esteso tra tutte le zone di disponibilità di una regione__.

Il protocollo __VPLS__ è __totalmente trasparente__ per i clienti che vedono solo i diversi VLAN sulle loro zone di disponibilità.

### La rete nell'offerta di virtualizzazione VMware

Le reti virtuali (VLAN) nell'offerta di virtualizzazione VMware sono reti di tipo __'DVPortgroup'__. Un __'dvPortGroup'__,
o __'Distributed Virtual Port Group'__, è un concetto specifico di VMware. Un dvPortGroup è un'entità che
raggruppa diversi porte virtuali (vPorts) in un ambiente di rete virtuale distribuito per facilitarne l'utilizzo.

Localizzata all'interno di un __[Tenant](../../console/iam/concepts.md#tenant)__, può essere estesa tra le zone di disponibilità
consentendoti così di costruire architetture "attivo/attivo" con quorum.

La larghezza di banda massima utilizzabile dipende principalmente dal modello di lama utilizzato (10Gbps convergenti o 25 Gbps convergenti) e dalle capacità delle macchine virtuali.

È possibile ottenere una larghezza di banda di 10Gbps.

Le configurazioni disponibili sulla console Cloud Temple nell'ambito dell'offerta di virtualizzazione VMware sono le seguenti:

- __Tag VLAN__
- __Trunk__
- __Mirror delle porte__

*__Nota__*:

- *La scelta dell'indirizzamento IP all'interno di queste reti è __libera__.*
- *__SRV-IO__ non è disponibile nell'offerta rete associata alla virtualizzazione VMware.*
- *__QinQ__ è supportato sull'architettura Cloud Temple. QinQ, noto anche come "VLAN stacking" o 802.1ad, è un protocollo di rete che permette l'incapsulamento di più etichette VLAN (Virtual Local Area Network) in un unico frame Ethernet.*

## Reti private regionali

La gestione delle reti private all'interno di una regione viene eseguita direttamente nella console Cloud Temple.

__*Nota:*__ *Non è possibile selezionare l'ID del VLAN 802.1q.*

| Riferimento                                 | Unità  | SKU                          |
|-------------------------------------------|--------|------------------------------|
| RETE - Regione FR1 - VLAN privato inter AZ | 1 vlan | csp:(region):network:vlan:v1 |

## Condivisione di rete tra tenant

Di default, __le reti sono disponibili solo all'interno di un tenant__. Puoi scegliere di __condividere una rete tra più tenant__ per motivi tecnici o di connettività.
È così possibile condividere una rete tra i tuoi __[Tenant](../../console/iam/concepts.md#tenant)__ all'interno della stessa organizzazione.

## Connessione privata esterna

L'offerta di rete Cloud Temple permette ai clienti di collegare le proprie infrastrutture IPSEC, MPLS o Fibra ai loro tenant.

Cloud Temple propone a tal fine:

- La possibilità di ospitare un dispositivo di rete in una zona comune (non qualificata Secnumcloud),
- Porte di connessione da 1Gbps o 10Gbps.

La creazione di una connessione esterna viene realizzata tramite una richiesta di servizio che indica:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua mail e numero di telefono per completare la configurazione
    Il nome del tenant
    La zona di disponibilità o, in mancanza, il sito fisico desiderato per questa connessione
    Il numero e, per ciascuno, il tipo di porta di connessione richiesta (fibra, rame, 1Gbps, 10Gbps, ...)
    La rete del vostro tenant che dovrà accogliere questa connessione
    Il numero di 'U' eventuali di ospitamento desiderati

## Circuiti dedicati

Cloud Temple offre la possibilità di beneficiare di una fibra dedicata tra due infrastrutture di hosting dedicate (rack).

Questo servizio è tipicamente utilizzato quando si desidera ospitare due infrastrutture non cloud (ad esempio due IBM AS/400), in due rack distinti su due datacenter fisici diversi.
Potresti voler collegare direttamente questi due rack in modo privato senza passare per l'infrastruttura backbone di Cloud Temple e utilizzare esclusivamente il backbone di trasmissione ottica.

In questo contesto, possiamo fornire una connettività in fibra ottica tra i tuoi due rack. La consegna avviene sempre su due percorsi ottici diversificati.

Ecco i diversi tipi di consegna disponibili:

- Ethernet fibra 1Gbps
- Ethernet fibra 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

La creazione di una connettività dedicata viene realizzata tramite una richiesta di servizio che indica:

    Il nome della tua Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per completare la configurazione
    Il nome del tenants
    Gli identificativi dei due rack dedicati
    La larghezza di banda desiderata
    La rete del tuo tenants che dovrà ospitare questa connettività

Sarai contattato dal supporto per affinare la tua richiesta.

| Riferimento                                                                                | Unità     | SKU                              | Impegno |
|------------------------------------------------------------------------------------------|-----------|----------------------------------|---------|
| RESEAU - Lien dédié inter AZ 1G ethernet (deux liens via deux chemins diversifiés)       | 1 abbonamento | csp:(region):network:epl:1g:v1   | 36 mesi    |
| RESEAU - Lien dédié inter AZ 10G ethernet (deux liens via deux chemins diversifiés)      | 1 abbonamento | csp:(region):network:epl:10g:v1  | 36 mesi    |
| RESEAU - Lien dédié inter AZ 8G fiber-channel (deux liens via deux chemins diversifiés)  | 1 abbonamento | csp:(region):network:fcpl:8g:v1  | 36 mesi    |
| RESEAU - Lien dédié inter AZ 16G fiber-channel (deux liens via deux chemins diversifiés) | 1 abbonamento | csp:(region):network:fcpl:16g:v1 | 36 mesi    |