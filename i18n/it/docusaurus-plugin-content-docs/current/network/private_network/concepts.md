---
title: Concetti
---

### La tecnologia VPLS

La rete globale di Cloud Temple utilizza la tecnologia __[VPLS](https://it.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ è una VPN di livello 2 punto-multipunto basata su Ethernet. Permette di connettere siti geograficamente
dispersi tra loro attraverso una rete MPLS. Per i clienti, tutti i siti sembrano essere nella stessa
LAN Ethernet, anche se il traffico viene trasportato attraverso la rete di Cloud Temple.

__VPLS__, nella sua implementazione e configurazione, ha molto in comune con una VPN di livello 2. In VPLS, un pacchetto che proviene
da una rete cliente viene prima inviato a un dispositivo di bordo cliente (CE) (ad esempio, un router o uno switch Ethernet).
Viene poi inviato a un router di bordo del provider (PE) all'interno della rete del fornitore di servizi.
Il pacchetto attraversa la rete del fornitore di servizi su un percorso a commutazione di etichette MPLS (LSP).
Arriva al router PE di uscita, che poi inoltra il traffico al dispositivo CE sul sito cliente di destinazione.
La differenza sta nel fatto che, per __VPLS__, i pacchetti possono attraversare la rete del fornitore di
servizi in modo punto-multipunto, il che significa che un pacchetto proveniente da un dispositivo CE può essere
diffuso a tutti i router PE che partecipano a un'istanza di routing __VPLS__.

Il circuito __VPLS__ di un cliente può essere __esteso attraverso tutte le zone di disponibilità di una regione__.

Il protocollo __VPLS__ è __completamente trasparente__ per i clienti che vedono solo le diverse VLAN nelle loro zone di disponibilità.

### La rete nell'offerta di virtualizzazione VMware

Le reti virtuali (vlan) nell'offerta di virtualizzazione VMware sono reti di tipo __'DVPortgroup'__. Un __'dvPortGroup'__,
o __'Distributed Virtual Port Group'__, è un concetto specifico di VMware. Un dvPortGroup è un'entità che
raggruppa più porte virtuali (vPorts) in un ambiente di rete virtuale distribuita per facilitarne l'utilizzo.

Situate all'interno di un __[Tenant](../../../console/iam/concepts/#tenant)__, possono essere estese tra le zone di disponibilità,
permettendovi di costruire architetture "attivo / attivo" con quorum.

La larghezza di banda massima utilizzabile dipende principalmente dal modello di blade utilizzato (10Gbps convergenti o 25 Gbps convergenti) e dalle capacità delle macchine virtuali.

È possibile raggiungere una larghezza di banda di 10Gbps.

Le configurazioni disponibili sulla console Cloud Temple nell'ambito dell'offerta di virtualizzazione VMware sono le seguenti:

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Nota__* :

- *La scelta dell'indirizzamento IP all'interno di queste reti è __libera.__*
- *__SRV-IO__ non è disponibile nell'offerta di rete associata alla virtualizzazione VMware.*
- *__QinQ__ è supportato sull'architettura Cloud Temple. QinQ, noto anche come "VLAN stacking" o 802.1ad, è
un protocollo di rete che permette l'incapsulamento di più tag VLAN (Virtual Local Area Network) in un singolo frame Ethernet.*

## Reti private regionali

L'ordine delle reti private all'interno di una regione si effettua direttamente nella console Cloud Temple.

__*Nota:*__ *Non è possibile scegliere l'ID vlan 802.1q.*

| Riferimento                                 | Unità  | SKU                          |
|-------------------------------------------|--------|------------------------------|
| RETE - Regione FR1 - VLAN privata inter AZ | 1 vlan | csp:(region):network:vlan:v1 |

## Condivisione di rete tra tenant

Per impostazione predefinita, __le reti sono disponibili solo all'interno di un tenant__. È possibile scegliere di __condividere una rete tra più tenant__ per ragioni tecniche o di connettività.
È quindi possibile condividere una rete tra i vostri __[Tenant](../../../console/iam/concepts/#tenant)__ all'interno della stessa organizzazione.

## Connettività privata esterna

L'offerta di rete di Cloud Temple permette ai clienti di connettere le proprie infrastrutture IPSEC, MPLS o Fibra ai loro tenant.

A questo scopo, Cloud Temple offre:

- La possibilità di ospitare un dispositivo di rete in un'area comune (non qualificata Secnumcloud),
- Porte di connettività da 1Gbps o 10Gbps.

La creazione di una connettività esterna si realizza tramite una richiesta di servizio indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    La zona di disponibilità o, in mancanza, il sito fisico desiderato per questa connettività
    Il numero e per ciascuno, il tipo di porta di connettività attesa (fibra, rame, 1Gbps, 10Gbps, ...)
    La rete del vostro tenant che deve accogliere questa connettività
    Il numero di 'U' di hosting eventualmente desiderato

## Circuiti dedicati

Cloud Temple offre la possibilità di beneficiare di una fibra dedicata tra due infrastrutture di hosting dedicato (rack).

Questo servizio è tipicamente utilizzato quando si desidera ospitare 2 infrastrutture non-cloud (ad esempio due IBM AS/400), in due rack distinti su due datacenter fisici distinti.
Potreste voler collegare direttamente questi due rack in modo privato senza passare attraverso l'infrastruttura backbone di Cloud Temple e utilizzare solo il backbone di trasmissione ottica.

In questo contesto, possiamo fornire una connettività in fibra ottica tra i vostri due rack. La consegna avviene sistematicamente su due percorsi ottici diversificati.

Ecco i diversi tipi di consegna possibili:

- Ethernet fibra 1Gbps
- Ethernet fibra 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

La creazione di una connettività dedicata si realizza tramite una richiesta di servizio indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    Gli identificativi dei due rack dedicati
    La larghezza di banda desiderata
    La rete del vostro tenant che deve accogliere questa connettività

Sarete contattati dal supporto per affinare la vostra richiesta.

| Riferimento                                                                                | Unità    | SKU                              | Impegno   |
|------------------------------------------------------------------------------------------|-----------|----------------------------------|------------|
| RETE - Collegamento dedicato inter AZ 1G ethernet (due collegamenti via due percorsi diversificati) | 1 pacchetto | csp:(region):network:epl:1g:v1   | 36 mesi   |
| RETE - Collegamento dedicato inter AZ 10G ethernet (due collegamenti via due percorsi diversificati) | 1 pacchetto | csp:(region):network:epl:10g:v1  | 36 mesi   |
| RETE - Collegamento dedicato inter AZ 8G fiber-channel (due collegamenti via due percorsi diversificati) | 1 pacchetto | csp:(region):network:fcpl:8g:v1  | 36 mesi   |
| RETE - Collegamento dedicato inter AZ 16G fiber-channel (due collegamenti via due percorsi diversificati) | 1 pacchetto | csp:(region):network:fcpl:16g:v1 | 36 mesi   |
