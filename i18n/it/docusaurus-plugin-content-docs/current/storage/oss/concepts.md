---
title: Concetti
sidebar_position: 2
---

<a id="concepts-du-stockage-objet-oss"></a>

## Presentazione

L'**Archiviazione oggetti** è un servizio di archiviazione distribuito, scalabile ed economico per i dati non strutturati. Compatibile con il protocollo S3, replica automaticamente i dati su tre zone di disponibilità e non addebita i trasferimenti in uscita. È adatto all'archiviazione, al backup e alla memorizzazione di dati applicativi in un ambiente sovrano.

### Destinatari e casi d'uso

- **Sviluppatori di applicazioni**: archiviazione per applicazioni cloud-native e microservizi.
- **Team DevOps**: backup e archiviazione di dati critici.
- **Dati voluminosi**: gestione economica di grandi volumi.
- **Contenuti multimediali**: immagini, video e documenti.
- **Settore pubblico**: archiviazione a lungo termine conforme ai requisiti di sovranità.

## Vantaggi

| Vantaggio                 | Descrizione                                                                          |
|---------------------------|--------------------------------------------------------------------------------------|
| Scalabilità               | L'architettura orizzontale si adatta alla crescita dei vostri dati.                  |
| Durabilità e ridondanza   | I dati sono distribuiti automaticamente su tre zone di disponibilità.                |
| Nessun costo di uscita    | Il trasferimento in uscita dei vostri dati è gratuito.                               |
| Compatibilità S3          | Gli strumenti e gli SDK S3 esistenti si utilizzano senza adattamenti.                |

## Funzionalità

| Funzionalità             | Descrizione                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| API compatibile S3       | Accesso tramite l'API S3, compatibile al 97% con AWS S3.                    |
| Tipo di bucket           | Scelta alla creazione tra un bucket «prestazioni» o «archiviazione».        |
| Replica su 3 zone        | Ridondanza automatica su tre zone di disponibilità.                         |
| Erasure Coding           | Protezione EC 12+4.                                                         |
| Cifratura a riposo       | Cifratura lato server, attivata a livello del *namespace*.                  |
| Richieste prefirmate     | URL temporanei sicuri.                                                      |
| Modalità di accesso di rete | Controllo dell'esposizione di rete dei bucket (pubblico, privato, personalizzato). |
| Client universali        | AWS-CLI, S3CMD, minio-CLI, MC CLI.                                          |

### Componenti principali

- **Oggetti**: i dati fondamentali archiviati nel servizio. Un oggetto è composto da dati (il file stesso) e da metadati (informazioni descrittive sull'oggetto).
- **Bucket (contenitori)**: gli oggetti sono organizzati in bucket. Un bucket è un contenitore di oggetti e il suo nome deve essere univoco all'interno del servizio.
- **Chiavi**: ogni oggetto di un bucket è identificato in modo univoco da una chiave (un nome di file).
- **Endpoint**: gli URL regionali che utilizzate per accedere all'API del servizio.

<a id="architecture-technique"></a>

## Architettura

Il servizio si basa su un'architettura distribuita che garantisce un'elevata durabilità e un'elevata disponibilità dei dati. Gli oggetti sono archiviati in modo ridondante su più nodi di archiviazione, distribuiti su tre zone di disponibilità.

- **Erasure Coding EC 12+4**: i dati sono suddivisi in 12 segmenti e completati da 4 segmenti di parità.
- **Distribuzione**: i segmenti sono ripartiti su nodi e rack diversi.
- **Rete**: rete ad alte prestazioni, fino a 100 Gb/s.

L'accesso al servizio avviene tramite un'API RESTful standard, compatibile con il protocollo S3, che consente di utilizzare un'ampia gamma di strumenti e SDK esistenti. Il servizio è integrato nella console Cloud Temple e si gestisce anche come Infrastructure as Code con Terraform.

## Regioni e zone di disponibilità

L'Archiviazione oggetti è disponibile nella regione FR1. I dati sono distribuiti su tre zone di disponibilità.

## Specifiche tecniche

| Parametro             | Valore                                |
|-----------------------|---------------------------------------|
| Compatibilità         | 97% AWS S3                            |
| Durabilità            | 99,999999999% (undici 9), annuale     |
| Erasure Coding        | EC 12+4                               |
| Prestazioni di rete   | 1 Gbps garantito, fino a 100 Gb/s     |
| Cifratura             | TLS 1.2 / 1.3 in transito, AES-256 a riposo |

### Limiti

- 999 bucket per tenant.
- 5 TB per oggetto.

<a id="sécurité-et-chiffrement"></a>

## Sicurezza e conformità

L'Archiviazione oggetti è certificata HDS e ISO 27001, conforme C5 e qualificata SecNumCloud.

La sicurezza dei vostri dati è una priorità. Il servizio integra meccanismi di cifratura per proteggere i vostri dati, sia archiviati (a riposo) sia in transito sulla rete.

### Cifratura dei dati a riposo (Data at Rest Encryption - D@RE)

Per proteggere i vostri dati archiviati, il servizio utilizza la cifratura lato server.

- **Attivazione**: la cifratura D@RE è attivata a livello del *namespace* (spazio dei nomi).
- **Algoritmo**: cifratura **AES a 256 bit** certificata **FIPS 140-3**, tramite la libreria software **RSA BSAFE Crypto-J** in versione **7.x**.
- **Funzionamento**: quando scrivete un oggetto in un bucket in cui D@RE è attivato, il servizio cifra automaticamente i vostri dati prima di scriverli sui dischi. In lettura, l'oggetto viene decifrato in modo trasparente. La gestione delle chiavi di cifratura è interamente a carico del servizio.

### Cifratura dei dati in transito

Tutte le comunicazioni con l'API del servizio, sia per caricare, scaricare o gestire i vostri dati, devono essere protette.

- **Protocollo**: è obbligatorio l'utilizzo del protocollo **TLS (Transport Layer Security)**, versioni **1.2 e 1.3**.
- **Funzionamento**: utilizzando HTTPS per tutte le vostre richieste API, i dati scambiati tra il vostro client e i server sono cifrati e protetti da intercettazioni o alterazioni durante il transito.

## Disponibilità del servizio

L'obiettivo di disponibilità del servizio è del 99,99%, misurato su base mensile, finestre di manutenzione incluse.

## Responsabilità

La ripartizione delle responsabilità tra il cliente e Cloud Temple è descritta nella [matrice delle responsabilità (RACI) dell'archiviazione oggetti](../../contractual/iaas/raci_s3.md).

## Reversibilità

Potete recuperare i vostri dati in qualsiasi momento, in modo autonomo, con gli strumenti S3 standard.

| Operazione                  | Descrizione                                                                                  | Costo      |
|-----------------------------|----------------------------------------------------------------------------------------------|------------|
| Recupero dei dati           | Download di tutti i vostri oggetti tramite l'API S3.                                         | Gratuito   |
| Trasferimento in uscita     | Nessun costo di uscita per il trasferimento dei vostri dati verso un altro fornitore.        | Gratuito   |
| Assistenza alla migrazione  | Supporto tecnico su richiesta per le operazioni di migrazione complesse.                     | Su preventivo |

## Prezzi

Il servizio è fatturato in base alla capacità effettivamente utilizzata, senza costi di uscita. Le tariffe sono pubblicate sulla pagina del prodotto sul sito Cloud Temple:
[Archiviazione oggetti — prezzi](https://www.cloud-temple.com/produits/stockage-objet/).
