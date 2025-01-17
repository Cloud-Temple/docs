---
title: Configurare i Backup con Kasten sul S3 SNC Cloud Temple
---

---

## Obiettivi

L'obiettivo principale di questa guida è mostrarvi come configurare uno storage **S3 SNC (SecNumCloud)** in Kasten per eseguire e gestire i vostri backup sull’infrastruttura cloud Cloud Temple. Questa guida copre i passaggi necessari per configurare questa integrazione in un ambiente OpenShift.

---

## Limitazioni conosciute

Nell'ambito di questa configurazione:

- **Accesso all'offerta S3 Cloud Temple**: Dovete disporre dell'offerta S3 fornita da Cloud Temple (chiave di accesso e chiave segreta).  

---

## Punti di forza

- **Sicuro e certificato**: Cloud Temple offre uno storage S3 conforme agli standard **SecNumCloud**, certificato e sicuro.  
- **Semplicità di integrazione con Kasten**: L’interfaccia intuitiva di Kasten consente una configurazione rapida e diretta.  
- **Adatto agli ambienti moderni**: Questa soluzione è progettata per integrarsi facilmente ai cluster Kubernetes funzionanti con OpenShift.  

---

## Versioni dei software

Assicuratevi che le seguenti versioni di software e strumenti siano installate per garantire una compatibilità ottimale:  
- **Kasten K10**: v5.5.10 o superiore  
- **OpenShift CLI**: v4.15.6 o superiore  
- **Kubernetes**: v1.24 o superiore (via OpenShift)  

---

## Prerequisiti

Per seguire questa guida, assicuratevi di avere i seguenti elementi:

1. **Accesso all’interfaccia Kasten**: Dovete poter accedere alla dashboard di Kasten distribuita nel vostro cluster OpenShift.  
2. **Chiavi S3 fornite da Cloud Temple**:
   - Chiave di accesso (Access Key)
   - Chiave segreta (Secret Key)  
3. **Bucket preconfigurato**: Un Bucket in S3 Cloud Temple, esempio: `demobackup`.  
4. **Autorizzazioni Kubernetes**: Dovete disporre delle autorizzazioni amministrative all'interno del namespace Kasten (`kasten-io`) per effettuare configurazioni.  

---

## Piano di dimostrazione

### Panoramica dei passaggi

1. Preparazione dell’ambiente Kasten e OpenShift.  
2. Configurazione di un profilo S3 nell’interfaccia Kasten.  
3. Creazione e validazione di attività di backup puntando verso la posizione S3 configurata.  

---

## File necessari

Non sono necessari file specifici per questa configurazione, ma avrete bisogno delle seguenti informazioni fornite da Cloud Temple:  
- **Chiave di accesso S3**  
- **Chiave segreta S3**  
- **URL dell’endpoint S3 SNC**: Per esempio, `xxxxx.s3.fr1.cloud-temple.com`.  
- **Nome del vostro Bucket**: Esempio, `demobackup`.

---

## Svolgimento della distribuzione

### 1. Accedere a Kasten tramite OpenShift

Accedete all’interfaccia grafica del vostro cluster OpenShift:

1. Connettetevi alla console OpenShift e accedete al namespace in cui Kasten è distribuito (per impostazione predefinita `kasten-io`).  
2. Andate nella scheda **Applications** e cliccate sul link di reindirizzamento verso la dashboard Kasten.  
3. Una volta in Kasten, assicuratevi che le dipendenze siano funzionali (connettività ai nodi, risorse disponibili).  

---

### 2. Creare un profilo S3 in Kasten

1. Una volta sulla dashboard di Kasten, andate nella sezione **"Locations"** (Posizioni).  
2. Cliccate sul pulsante **"Add New Location"** (Aggiungi una nuova posizione).  
3. Selezionate il tipo di storage **"S3 Compatible Storage"**.  
4. Inserite i seguenti parametri:  

   - **Tipo**: S3 Compatible Storage  
   - **Regione**: `FR1`  
   - **Nome del Bucket**: `demobackup`  
   - **Endpoint (URL)**: `xxxxx.s3.fr1.cloud-temple.com`  
   - **Chiave di accesso (Access Key)**: Inserite la chiave di accesso fornita da Cloud Temple.  
   - **Chiave segreta (Secret Key)**: Inserite la chiave segreta associata.  

5. Testate la connettività tramite l’interfaccia per verificare che la connessione al Bucket sia riuscita.  
6. Salvate la configurazione.  

---

### 3. Configurare e validare un’attività di backup

1. In Kasten, create una politica (Policy) per gestire i vostri backup:  
   - Andate nella sezione **Policies** (Politiche).  
   - Cliccate su **Create Policy** (Crea una politica).  
   - Selezionate **Backup** come tipo di attività.  
   - Scegliete i namespace o workload da includere nel backup (per esempio, un'applicazione critica distribuita in OpenShift).  

2. Sotto **Location** (Posizione), selezionate la posizione S3 che avete configurato in precedenza (`demobackup`).  

3. Pianificate la frequenza dei backup:  
   - Esempio: Backup quotidiano alle 23:00.  

4. Salvate la politica, quindi avviate un test manuale per verificare il corretto funzionamento dei vostri backup.  

---

### 4. Verificare lo stato dei backup

1. Andate nella sezione **Activities** (Attività) di Kasten.  
2. Consultate i backup completati e verificate che i dati siano stati inviati al vostro Bucket S3 Cloud Temple.  
3. Connettetevi all’interfaccia S3 di Cloud Temple per verificare la presenza dei file di backup nel Bucket.  

---

## Criteri di validazione

Per confermare che il backup sia correttamente configurato:

1. I test di connettività con il Bucket S3 (endpoint, access key, secret key) sono riusciti.  
2. I backup vengono eseguiti senza errori e appaiono nella sezione **Activities** di Kasten.  
3. I file di backup appaiono nel Bucket S3 (verificate tramite l’interfaccia Cloud Temple).  
4. I workload salvati possono essere ripristinati con successo tramite Kasten.  

---

## Conclusione

Seguendo questa guida, avete configurato con successo una posizione di backup S3 compatibile SecNumCloud in Kasten con l’infrastruttura Cloud Temple. Questo workflow consente di gestire efficacemente i vostri backup, sfruttando uno storage certificato e sicuro.  

Per ulteriori approfondimenti, potete:  
- Aggiungere altri workload da salvare.  
- Configurare politiche di retention avanzate in Kasten.  
- Automatizzare i test di ripristino per validare i vostri dati.  

Avete ora a disposizione una soluzione robusta e conforme per proteggere i vostri dati critici! 🚀