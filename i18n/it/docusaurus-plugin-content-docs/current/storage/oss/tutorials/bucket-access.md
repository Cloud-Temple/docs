---
title: Gestione degli accessi ai bucket S3 dalla Console Cloud Temple
---
import S3CustomAccess from '../images/S3_access_custom.png'
import S3PrivateAccess from '../images/S3_access_private.png'
import S3PublicAccess from '../images/S3_access_public.png'

L'interfaccia di configurazione dei bucket propone tre modalità di gestione degli accessi in base al tipo di restrizione IP desiderato:

### **Accesso Pubblico**

<img src={S3PublicAccess} />

  - Funzionamento: Non viene applicata alcuna restrizione basata sull'indirizzo IP.
  - Conseguenza: Il bucket è accessibile da qualsiasi indirizzo IP, senza filtraggio.

### **Accesso Privato (automatico)**

<img src={S3PrivateAccess} />

  - Funzionamento: Tutte le sottoreti CIDR assegnate al tenant vengono aggiunte automaticamente dall'editor, senza intervento manuale.
  - Caratteristica della Console: Gli indirizzi di rete (primo indirizzo del blocco) e di broadcast (ultimo indirizzo del blocco), che di solito sono riservati in una rete IP, vengono anch'essi aggiunti automaticamente.
  - Conseguenza: L'utente non deve gestire queste sottigliezze, tutto viene preso in considerazione dallo strumento.

### **Accesso Custom (manuale)**

<img src={S3CustomAccess} />

  - Funzionamento: L'utente deve fornire esplicitamente tutte le gamme CIDR, nonché gli indirizzi di rete e di broadcast da autorizzare.
  - Esempio: Se si desidera autorizzare il prefisso `80.75.153.200/29`, è necessario aggiungere anche gli indirizzi `80.75.153.200/32` (indirizzo di rete) e `80.75.153.207/32` (indirizzo di broadcast) in modo esplicito, affinché questi ultimi siano inclusi nella politica di accesso.
  - Conseguenza: Offre una libertà totale, ma impone una configurazione completa e rigorosa.

:::info

### Nature dei prefissi CIDR forniti da Cloud Temple

Tutti i prefissi CIDR forniti da Cloud Temple sono [translate:prefissi di routing] (route prefixes). Ciò significa che per queste gamme, **tutte le indirizzi che coprono, inclusi gli indirizzi di rete e broadcast, sono utilizzabili come origini valide** nell'ambito della politica di accesso. È per questo motivo che l'editor della Console include sistematicamente queste indirizzi speciali in modalità Private.

Questa caratteristica distingue il vostro ambiente da alcuni reti classiche in cui questi indirizzi sono riservati e non utilizzabili.