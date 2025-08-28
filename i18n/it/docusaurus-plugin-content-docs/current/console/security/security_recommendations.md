---
Titoli delle Buone Pratiche
---

Ultima revisione: 22 maggio 2025

## Recommandazioni per l'utilizzo sicuro dei servizi Cloud Temple

I servizi Cloud Temple offrono un'infrastruttura cloud altamente sicura progettata da zero. Tuttavia, alcune buone pratiche di sicurezza relativi alla gestione delle tue risorse devono essere affrontate come utente dei nostri servizi. Questo manuale ti aiuta a rafforzare la sicurezza del tuo ambiente cloud sfruttando le funzionalità disponibili nella Console.

All'interno di questo manuale, troverai raccomandazioni concrete per:

- Proteggere l'accesso alla Console cloud;
- Gestire gli accessi e i diritti in modo efficace;
- Sicurare le risorse eseguite tramite i nostri servizi cloud.

## Accesso alla Console

L'accesso alla Console è la porta d'ingresso per l'intero ambiente di servizi Cloud di Temple della Conoscenza. Pertanto, è fondamentale proteggerla in modo efficace.

### Limitare il controllo della console tramite filtraggio IP

L'accesso alla console di gestione cloud è limitato alle ip address autorizzate in anticipo. Questa restrizione consente l'accesso unicamente agli utenti provenient da fasce di indirizzi IP specificate, minimizzando così i rischi di accesso non autorizzato.

Puoi configurare queste restrizioni IP nei parametri della tua organizzazione. Per saperne come configurare il filtraggio IP, consulta la [Gestione degli accessi e dell'autenticazione | Documentazione Cloud Temple](../../console/iam/quickstart?_highlight=*fattore#gestione-degli-accessi-e-autenticazione).

Per massimizzare l'efficacia di questo meccanismo, assicurati di:

- **Limitare il numero di ip address autorizzate** al più possibile;
- Evita le fasce di indirizzi IP troppo ampie o generiche;
- Aggiungi solo ip provenienti da ambienti controllati (es. ip di uscita del tuo network aziendale);
- Proibisci, o limita al massimo, le ip address individuali (es. ip pubblico della casa di un IT personale);
- Proibisci, o limita, le ip address di terze parti (es. fornitori di servizi);
- Mantieni questa lista aggiornata in caso di cambiamenti nella tua infrastruttura di rete.

Per gli accessi remote (lavoro da remoto, fornitori...), preferisci un accesso tramite il tuo network aziendale via VPN piuttosto che l'autorizzazione diretta di ip address individuali. Questo riduce la superficie d'esposizione della Console e centralizza la gestione degli accessi all'interno della tua organizzazione.

### Utilizzo della federazione dell'identità

La federazione dell'identità consente di integrare la Console Cloud Temple con il tuo fornitore di identità (IdP), attivando l'autenticazione singola. Questa soluzione centralizza l'autenticazione e offre numerosi vantaggi:

- Gestione unificata degli account: creazione, modifica e cancellazione tramite il tuo directory;
- Riduzione della superficie di attacco: gli account locali diventano inutili o limitati;
- Tracciabilità migliorata: gli accessi sono registrati dal tuo IdP;
- Integrazione rafforzata: MFA, avviso, politiche di sicurezza contestuale...;
- Facilità della conformità: coerenza con le tue pratiche interne.

Per questi motivi, **la federazione dell'identità è raccomandata**, soprattutto per ambienti a ampia scala o con requisiti di sicurezza elevati.

Segui i nostri tutorial passo-passo per integrare il tuo fornitore di identità:

- [Configurazione della federazione con Azure AD | Documentazione Cloud Temple](../../console/iam/tutorial/sso_aad)
- [Configurazione della federazione con ADFS | Documentazione Cloud Temple](../../console/iam/tutorial/sso_adfs)

### Attivare l'autenticazione a più fattori (MFA)

L'autenticazione a più fattori (MFA) migliora notevolmente la sicurezza di accesso alla Console Cloud Temple. Aggiunge una ulteriore fase di autenticazione richiedendo un codice temporaneo generato da un'applicazione dedicata, insieme al nome utente e alla password. Questa misura riduce significativamente i rischi di accesso non autorizzato, anche in caso di furto di credenziali.

Per gli account gestiti localmente tramite la Console (senza federazione), l'MFA è attivato di default e non può essere disattivato.

**Per gli account federati, si consiglia fortemente di richiedere l'MFA dal lato dell'identità fornitore**, in particolare per gli amministratori con accesso alla Console.

Per ulteriori informazioni:

- [Cos'è l'MFA e è obbligatorio? | Documentazione Cloud Temple](../../console/iam/quickstart?_highlight=*fattore#cos%27è+l%27MFA+e+è+obbligatorio-)
- [Esercizio: Federazione dell'identità con Microsoft Intune | Documentazione Cloud Temple](../../console/iam/esercizi/sso_intune)
- [Esercizio: Federazione dell'identità con Okta | Documentazione Cloud Temple](../../console/iam/esercizi/sso_okta)

### Accessoire alla console da ambienti sicuri

La posizione e l'ambiente da cui si accede alla Console sono fondamentali per garantire la sicurezza dell'amministrazione dei servizi cloud. Se si opera in un ambiente con requisiti di sicurezza elevati, si possono applicare le seguenti raccomandazioni:

- Per l'amministrazione effettuata dalle proprie squadre, si consiglia di applicare interamente o parzialmente [Le recommandations relatives à l'administration sécurisée des SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si) ;
- In caso di amministrazione effettuata da un terzo, si valuta l'opportunità di affidarsi a [Prestatori d’amministrazione e manutenzione sicuri (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), in base alla sensibilità delle risorse ospitate e al contesto legale e regolamentare.

### Sensibilizzare gli amministratori ai rischi di phishing

Gli accessi alla Console Cloud Temple devono essere sottoposti a un controllo di vigilanza rafforzato, in particolare nei confronti delle tentativi di phishing mirate a rubare identificatori o codici MFA. È fondamentale che gli utenti autorizzati siano regolarmente sensibilizzati a questi rischi: verifica sistematica dell'URL, prudenza nei confronti dei messaggi inaspettati e segnalazione immediata di qualsiasi attività sospetta.

Per limitare questi rischi, si raccomanda di non accedere alla Console tramite un link ricevuto via email, ma sempre inserendo manualmente l'URL convenzionale.

Queste buone pratiche rientrano nella responsabilità degli utenti come clienti e sono essenziali per prevenire le attacchi di phishing. In caso di dubbio, il supporto Cloud Temple è a vostra disposizione.

### Gestione dei servizi cloud

Le gestione delle tue risorse cloud avviene tramite la console. Questo capitolo ti presenta raccomandazioni fondamentali per il controllo dell'esercizio dei servizi cloud.

### Identificare dei proprietari di tenimento

Il proprietario del tenimento detiene tutte le autorizzazioni relative ai prodotti attivi e riceve le notifiche ufficiali. È fondamentale assicurarsi che i proprietari del tuo tenimento siano gli interlocutori adatti all'interno della tua organizzazione.

Per una gestione sicura ed efficiente:

- **Identifica un responsabile proprietario**, preferibilmente una persona direttamente coinvolta nella gestione dell'ambiente.
- **Verifica l'indirizzo email di contatto** del proprietario per assicurarti che sia valido e frequentemente consultato.
- **Assicura un controllo diretto**, aggiungendo un proprietario membro della tua organizzazione, anche se affidiamo la gestione del tuo servizio cloud, per poter supervisionare le notifiche e le decisioni importanti.
- **Limita il numero di proprietari** a 3 per ridurre l'area esposta e facilitare l'audit delle azioni critiche.

Per saperne di più sulla gestione dei proprietari del tenimento, consulta il [Guida ai proprietari su un tenimento | Documentazione Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Gestione delle autorizzazioni sui servizi cloud

La Console Cloud Temple offre una gestione delle autorizzazioni estremamente personalizzabile, consentendo di assegnare a ciascun utente un o più livelli di permesso, che determinano con precisione le azioni autorizzate. Consulta la documentazione sui permessi ([Permessi disponibili per gli utenti della tua organizzazione | Documentazione Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)) per comprendere in dettaglio le diverse autorizzazioni e assegnarle di conseguenza.

Per una gestione efficiente ed efficace delle autorizzazioni, ti consigliamo di seguire queste migliori pratiche:

- **Applicare il principio del minimo privilegio:** concedere agli utenti solo le autorizzazioni necessarie per le loro mansioni. Questo riduce i rischi limitando l'accesso a funzionalità non necessarie.
- **Limitare le autorizzazioni sensibili:** assegna le autorizzazioni sensibili esclusivamente agli utenti responsabili di queste funzioni. Le autorizzazioni sensibili riguardano principalmente la gestione degli accessi (console_public_access_write, *_console_access, object - storage_write), la gestione delle autorizzazioni (iam_write, iam_offline_access), e la gestione dei backup (backup_iaas_opensource_write, backup_iaas_spp_write).**
- **Preferire l'accesso di lettura solo:** in caso di dubbio, concedi un accesso di lettura solo (\*_read) per minimizzare i rischi pur consentendo l'accesso alle informazioni necessarie.
- **Eseguire revisioni regolari delle autorizzazioni:** verifica regolarmente le autorizzazioni degli utenti per rimuovere quelle obsolette. L'esportazione delle autorizzazioni nel formato CSV semplifica questa gestione.

Una gestione accurata delle autorizzazioni limita i rischi di errori o azioni malintenzionate, rafforzando al contempo la tua postura di sicurezza.

### Aggiornamento regolare dei virtualizzatori

Cloud Temple fornisce regolarmente aggiornamenti per i virtualizzatori per garantire l'applicazione di correttivi di sicurezza. Tuttavia, la manutenzione degli aggiornamenti dei virtualizzatori rimane sotto la tua responsabilità, poiché non abbiamo visibilità sulle vostre esigenze aziendali.

Pertanto ti consigliamo di:

- Controllare regolarmente nella Console la disponibilità di nuovi build per i tuoi virtualizzatori;  
- **Eseguire regolarmente gli aggiornamenti dei nuovi build su tutti i tuoi virtualizzatori, soprattutto se correggono vulnerabilità di sicurezza;**
- Effettuare regolarmente l'installazione delle nuove versioni dei vmtools sulle tue macchine virtuali.

Una pagina di allerta per la sicurezza è disponibile per informarti delle vulnerabilità note e delle raccomandazioni correlate: [Allarme di sicurezza | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).

### Monitorare delle attività nei servizi cloud

Per garantire una sorveglianza efficace del tuo ambiente cloud e rispondere rapidamente in caso di anomalia, è fondamentale adottare una strategia di monitoraggio attivo. Ti consigliamo in particolare di:

- **Monitorare la disponibilità dei servizi** tramite [Pagina degli stati | Cloud Temple](https://status.cloud-temple.com/), per essere avvisati in caso di incidenti o panne globali;
- **Attivare le notifiche tematiche** rilevanti per il tuo utilizzo dalla Console, per ricevere in tempo reale le alert più importanti (vedi [Abbonamento alle notifiche tematiche | Documentazione Cloud Temple](../../console/iam/concepts#abbonamento-alle-notifiche-tematiche));
- **Sfruttare i registri di attività Cloud** per identificare azioni sensibili o sospette sulle tue risorse (vedi sezione "Registrazione - Seguimento delle Attività" del [Manuale di avvio | Documentazione Cloud Temple](../../iaas_vmware/quickstart)). La raccolta e l'analisi dei registri di attività possono essere automatizzate tramite le API Console, per integrare gli eventi nei tuoi strumenti di monitoraggio o rilevamento incidenti.

## Proteggere le proprie risorse ospitate

In un modello di Cloud, la sicurezza delle risorse ospitate è responsabilità dell'utente. Cloud Temple offre un'infrastruttura sicura, ma è su di voi che dovete proteggere i vostri sistemi operativi, le vostre dati e le vostre configurazioni.

Troverete qui sotto le pratiche essenziali per rafforzare la sicurezza delle vostre VM: configurazione di politiche di backup, crittografia delle risorse critiche, e hardening dei sistemi operativi. Queste misure contribuiscono a limitare i rischi di compromissione, a garantire l'integrità dei dati e ad assicurare la continuità dell'attività in caso di incidente.

### Configurare le backup

Per garantire la sicurezza e la resilienza dei tuoi dati, è fondamentale definire e applicare correttamente le politiche di backup. È obbligatorio assegnare una politica di backup a ciascuna macchina virtuale prima del suo avvio. La documentazione si trova nella sezione "Backup" del [Guida di Avvio | Documentazione Cloud Temple](../../iaas_vmware/quickstart).

Ecco le raccomandazioni per la gestione delle politiche di backup delle risorse Cloud Temple:

- **Definisci le tue politiche di backup:** Chiedi al supporto di creare politiche di backup adattate alle esigenze della tua organizzazione in termini di sicurezza.  
- **Evita le politiche sospesi:** Non lascia nessuna VM associata a una politica di backup sospesa per evitare di compromettere la sicurezza dei dati.
- **Esegui test di ripristino:** Esegui regolarmente il ripristino dei tuoi backup per controllare l'efficacia delle tue procedure di ripristino.

### Encriptare VM sensibili

In aggiunta al cifraggio dei dati a livello di disco, nativi per tutte le risorse cloud, **l'encriptazione delle VM può essere attivata per proteggere le vostre risorse più sensibili**. Per questo, consulta [Encrittura di una macchina virtuale VMware | Documentazione Cloud Temple](../../iaas_vmware/tutoriali/vm_encryption?_highlight=*encriptare).

Ecco alcune buone pratiche in caso di utilizzo dell'encriptazione delle VM:

- Attivare l'encriptazione sulle VM sensibili: Applicalo dalla creazione della macchina o durante una manutenzione pianificata. L'operazione richiede un temporaneo arresto della VM;
- Controllare lo stato di encriptazione: Verifica dal console che la VM mostra correttamente lo stato "encriptato";
- Sauvageggio prima dell'encriptazione: Assicurati che la VM sia correttamente sauvegardata prima di qualsiasi modifica.

### Limitare la visibilità delle risorse

Per ridurre la superficie di attacco delle tue macchine virtuali, è fortement raccomandato limitare alle esposizioni assolutamente necessarie i servizi. In particolare, assicurati di configurare le tue risorse in modo che **non siano esposte pubblicamente le interfacce di amministrazione e console** dei sistemi e delle applicazioni distribuite.

Se utilizzi i servizi di archiviazione oggettivo di Cloud Temple, è anche consigliato **evitare di configurare i bucket in accesso pubblico**, a meno che non sia assolutamente necessario (vedi [Limitazione dell'accesso ai tuoi bucket S3 | Documentazione Cloud Temple](../../storage/oss/quickstart?#gestione delle politiche di accesso).

### Hardening Virtual Machines (Services IaaS)

Hosting a virtual machine on a secure cloud does not ensure the security of the operating system, services, or applications it runs, regardless of whether they are self-managed or sourced from a catalog. Hardening virtual machines, whether self-deployed or procured from the catalog, falls under your responsibility.

We recommend you to **apply basic security measures**:

- Keep systems updated with security patches;
- Limit exposed services;
- Disable unnecessary components;  
- Restrict access rights to the minimum necessary;
- Enable access logging;
- Configure regular backups.

To guide you through these actions, refer to:

- Security hardening guides provided by software vendors you use;
- [Essential Guides and Cybersecurity Best Practices | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [CIS Security Benchmarks® Guides | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

These practices form the first line of defense for securing your systems in the cloud.

### Hardening Container (Security of PaaS Services)

To ensure the security of your containers within the OpenShift Platform-as-a-Service (PaaS), we recommend implementing the following measures to strengthen their hardening:

- **Image Sources**: Ensure that all images originate from trusted sources, such as internal registries or the Red Hat Container Catalog, and avoid using unverified community images available on public Docker Hub.
- **Privilege Restriction**: Limit container privileges by leveraging OpenShift's security features, particularly *Security Context Constraints* (SCC), to confine permissions to the absolute minimum required.
- **Custom SCC Configuration**: Create tailored SCCs for each application or group of applications. This includes restricting allowed system calls via *seccomp profiles*, with specific configurations like blocking *ptrace* or *mount* to minimize the risk of container escape attacks.
- **Workload Isolation**: Utilize *Namespaces* and *Network Policies* to isolate workloads and limit unnecessary interactions between containers.
- **Comprehensive Logging**: Activate logging via OpenShift's Operator for OpenShift Logging to capture events related to containers and hosted systems, enhancing the detection and analysis of suspicious activities.

## Vai più in là

Se des servizi di sicurezza aggiuntivi o un supporto di accompagnamento sull'aspetto della sicurezza (audit, fortificazione, conformità, consulenza, ecc.) vi interessano, i nostri **Servizi Professionali** possono essere contattati. Per ulteriori informazioni, contattate il vostro punto di contatto Cloud Temple.