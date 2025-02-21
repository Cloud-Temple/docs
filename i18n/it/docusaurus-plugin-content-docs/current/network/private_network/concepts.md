---
title: Concepts
---

### La tecnologia VPLS
La rete globale Cloud Temple utilizza la tecnologia __[VPLS](https://it.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ è una VPN di livello 2 point-to-multipoint basata su Ethernet. Permette di connettere siti geograficamente
dispersi tra loro attraverso una rete MPLS. Per i clienti, tutti i siti sembrano essere nella stessa
LAN Ethernet, anche se il traffico è trasportato dalla rete Cloud Temple.

__VPLS__, nella sua implementazione e configurazione, ha molto in comune con una VPN di livello 2. In VPLS, un pacchetto che proviene
da una rete cliente è prima inviato a un dispositivo del cliente (CE) (ad esempio, un router o uno switch Ethernet).
Successivamente, viene inviato a un router di bordo del provider (PE) all'interno della rete del provider di servizi.
Il pacchetto attraversa la rete del provider di servizi su un percorso a commutazione di etichette MPLS (LSP).
Arriva al router PE di uscita, che poi trasferisce il traffico al dispositivo CE sul sito del cliente di destinazione.
La differenza sta nel fatto che, per __VPLS__, i pacchetti possono attraversare la rete del provider di
servizi in modo point-to-multipoint, il che significa che un pacchetto proveniente da un dispositivo CE può essere
diffuso a tutti i router PE partecipanti a un'istanza di routing __VPLS__.

Il circuito __VPLS__ di un cliente può essere __esteso tra tutte le zone di disponibilità di una regione__.

Il protocollo __VPLS__ è __totalmente trasparente__ per i clienti che vedono solo i diversi VLAN sulle loro zone di disponibilità.

### La rete nell'offerta di virtualizzazione VMware

I reti virtuali (vlan) dell'offerta di virtualizzazione VMware sono reti di tipo __'DVPortgroup'__. Un __'dvPortGroup'__,
o __'Distributed Virtual Port Group'__, è un concetto specifico di VMware. Un dvPortGroup è un'entità che
raggruppa più porte virtuali (vPorts) in un ambiente di rete virtuale distribuito per facilitare il loro uso.

Localizzati all'interno di un __[Tenant](../../../console/iam/concepts/#tenant)__, possono essere estesi tra le zone di disponibilità
permettendo così di costruire architetture "attivo / attivo" con quorum.

La larghezza di banda massima utilizzabile dipende principalmente dal modello di lama utilizzato (10Gbps convergenti o 25 Gbps convergenti) e dalle capacità delle macchine virtuali.

È possibile raggiungere una larghezza di banda di 10Gbps.

Le configurazioni disponibili sulla console Cloud Temple nell'ambito dell'offerta di virtualizzazione VMware sono le seguenti:

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Nota__* :

- *La scelta dell'indirizzamento IP all'interno di queste reti è __libera.__*
- *__SRV-IO__ non è disponibile nell'offerta di rete associata alla virtualizzazione VMware.*
- *__QinQ__ è supportato sull'architettura Cloud Temple. QinQ, noto anche come "VLAN stacking" o 802.1ad, è
un protocollo di rete che consente l'incapsulamento di più etichette VLAN (Virtual Local Area Network) in un singolo frame Ethernet.*


## Reti private regionali

L'ordine delle reti private all'interno di una regione si realizza direttamente nella console Cloud Temple.

__*Nota :*__ *Non è possibile scegliere l'ID VLAN 802.1q.*

| Riferimento                                | Unità  | SKU                          |
|--------------------------------------------|--------|------------------------------|
| RETE - Regione FR1 - VLAN privato inter AZ | 1 vlan | csp:(region):network:vlan:v1 |


## Condivisione di rete tra tenant

Per impostazione predefinita, __le reti sono disponibili solo all'interno di un tenant__. È possibile scegliere di __condividere una rete tra più tenant__ per ragioni tecniche o di connettività.
È quindi possibile condividere una rete tra i vostri __[Tenant](../../../console/iam/concepts/#tenant)__ all'interno della stessa organizzazione.

## Connettività privata esterna

L'offerta di rete Cloud Temple consente ai clienti di connettere le proprie infrastrutture IPSEC, MPLS o Fibre ai loro tenant.

Cloud Temple propone a tal fine:

- La possibilità di ospitare un apparato di rete in una zona comune (non qualificata Secnumcloud),
- Porte di connettività 1Gbps o 10Gbps.

La creazione di una connettività esterna avviene tramite una richiesta di servizio indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua e-mail e n° di telefono per completare la configurazione
    Il nome del tenant
    La zona di disponibilità o, in mancanza, il sito fisico desiderato per questa connettività
    Il numero e per ciascuno, il tipo di porta di connettività richiesto (fibra, rame, 1Gbps, 10Gbps, ...)
    La rete del vostro tenant che deve accogliere questa connettività
    Il numero di 'U' eventualmente di hosting desiderato

## Circuiti dedicati

Cloud Temple offre la possibilità di beneficiare di una fibra dedicata tra due infrastrutture di hosting dedicato (rack).

Questo servizio è tipicamente utilizzato quando si desidera ospitare 2 infrastrutture non-cloud (ad esempio due IBM AS/400), in due rack distinti su due data center fisici distinti.
Potete desiderare di collegare direttamente questi due rack in privato senza passare per l'infrastruttura backbone Cloud Temple e utilizzare solo la dorsale di trasmissione ottica.

In questo contesto, possiamo fornire una connettività in fibra ottica tra i vostri due rack. La consegna avviene sistematicamente su due percorsi ottici diversificati.

Ecco i diversi tipi di consegna possibili:

- Ethernet fibra 1Gbps
- Ethernet fibra 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

La creazione di una connettività dedicata avviene tramite una richiesta di servizio indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua e-mail e n° di telefono per completare la configurazione
    Il nome dei tenant
    Gli identificativi dei due rack dedicati
    La larghezza di banda desiderata
    La rete del vostro tenant che deve accogliere questa connettività

Sarete contattati dal supporto per affinare la vostra richiesta.

| Riferimento                                                                                   | Unità     | SKU                              | Impegno    |
|----------------------------------------------------------------------------------------------|-----------|----------------------------------|------------|
| RETE - Link dedicato inter AZ 1G ethernet (due link tramite due percorsi diversificati)      | 1 forfait | csp:(region):network:epl:1g:v1   | 36 mesi    |
| RETE - Link dedicato inter AZ 10G ethernet (due link tramite due percorsi diversificati)     | 1 forfait | csp:(region):network:epl:10g:v1  | 36 mesi    |
| RETE - Link dedicato inter AZ 8G fiber-channel (due link tramite due percorsi diversificati) | 1 forfait | csp:(region):network:fcpl:8g:v1  | 36 mesi    |
| RETE - Link dedicato inter AZ 16G fiber-channel (due link tramite due percorsi diversificati)| 1 forfait | csp:(region):network:fcpl:16g:v1 | 36 mesi    |