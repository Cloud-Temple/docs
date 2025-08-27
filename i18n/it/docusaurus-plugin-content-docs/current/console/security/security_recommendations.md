---
title: Buone pratiche
---

*Ultimo aggiornamento: 22/05/2025*

## Raccomandazioni per l’utilizzo sicuro dei servizi Cloud Temple

I servizi Cloud Temple offrono un’infrastruttura cloud altamente sicura per progettazione. Tuttavia, alcune buone pratiche di sicurezza rientrano sotto la vostra responsabilità in quanto utenti di tali servizi. Questa guida vi aiuta a rafforzare la sicurezza del vostro ambiente cloud sfruttando le funzionalità disponibili nella Console.

Troverete raccomandazioni concrete per:

- Proteggere l’accesso alla Console cloud;
- Gestire gli accessi e i permessi in modo controllato;
- Mettere in sicurezza le risorse distribuite tramite i nostri servizi cloud.

## Accesso alla Console

L’accesso alla Console è il punto d’ingresso a tutti i vostri servizi Cloud Temple. È quindi essenziale proteggerlo efficacemente.  

### Limitare l'accesso alla Console tramite filtraggio IP

L’accesso alla console di gestione cloud è limitato agli indirizzi IP precedentemente autorizzati. Questa restrizione consente di autorizzare l’accesso solo agli utenti provenienti da intervalli IP specificati, riducendo così i rischi di accessi non autorizzati.

Potete configurare queste restrizioni IP nelle impostazioni della vostra organizzazione. Per sapere come configurare il filtraggio IP, consultate la [Gestion des accès et authentification | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestion-des-accès-et-authentification).

Per massimizzare l’efficacia di questo meccanismo, assicuratevi di:

- **Limitare il numero di indirizzi IP autorizzati** allo stretto necessario;
- Evitare intervalli troppo ampi o generici;
- Aggiungere **solo IP provenienti da ambienti controllati** (es: IP in uscita della vostra rete aziendale);
- Vietare, o limitare al massimo, gli indirizzi IP individuali (es: IP pubblica della residenza del vostro personale IT);
- Vietare, o limitare, gli indirizzi IP di terzi (es: fornitori di servizi);
- Mantenere aggiornata questa lista in caso di evoluzioni della vostra infrastruttura di rete.

Per gli accessi remoti (telelavoro, fornitori…), privilegiate un passaggio tramite la vostra rete aziendale via VPN piuttosto che un’autorizzazione diretta di indirizzi IP individuali. Ciò riduce la superficie esposta della Console e centralizza la gestione degli accessi all’interno della vostra organizzazione.

### Utilizzare la federazione d’identità

La federazione d’identità consente di integrare la Console Cloud Temple con il vostro provider di identità (IdP), attivando il SSO. Questo approccio centralizza l’autenticazione e offre numerosi vantaggi:

- Gestione unificata degli account: creazione, modifica e cancellazione tramite la vostra directory;
- Riduzione della superficie d’attacco: gli account locali diventano inutili o limitati;
- Maggiore tracciabilità: gli accessi sono registrati dal vostro IdP;
- Integrazione rafforzata: MFA, avvisi, politiche di sicurezza contestuali…;
- Conformità facilitata: coerenza con le vostre pratiche interne.

Per questi motivi, **la federazione di identità è raccomandata**, in particolare per gli ambienti con un elevato numero di utenti o requisiti di sicurezza stringenti.

Seguite le nostre guide passo passo per integrare il vostro provider di identità:

- [Configurer la fédération avec Azure AD | Documentation Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Configurer la fédération avec ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Attivare l’autenticazione a più fattori (MFA)

L’autenticazione a più fattori (MFA) rafforza significativamente la sicurezza di accesso alla Console Cloud Temple. Aggiunge un passaggio di autenticazione richiedendo un codice temporaneo generato da un’applicazione dedicata, in aggiunta alla password. Questa misura limita fortemente i rischi di accesso non autorizzato, anche in caso di furto delle credenziali.

Per gli account gestiti localmente dalla Console (senza federazione), il MFA è attivo per impostazione predefinita e non può essere disattivato.

**Per gli account federati, è fortemente raccomandato richiedere il MFA lato provider d’identità**, in particolare per gli amministratori che accedono alla Console.

Per saperne di più:  

- [Qu’est-ce que le MFA et est-il obligatoire ? | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutoriel : Fédération d'identité avec Microsoft EntraID | Documentation Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Tutoriel : Fédération d'identité avec Microsoft ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Accedere alla Console da dispositivi sicuri

La postazione e l’ambiente da cui accedete alla Console sono importanti per proteggere l’amministrazione dei vostri servizi cloud. Se operate in un ambiente con requisiti di sicurezza elevati, potete applicare le seguenti raccomandazioni:

- Per l’amministrazione da parte dei vostri team interni, applicare in tutto o in parte le [Recommandations relatives à l'administration sécurisée des SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si);
- In caso di amministrazione da parte di terzi, valutare la possibilità di rivolgersi a un [Prestataires d’administration et de maintenance sécurisées (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), in base alla sensibilità delle risorse ospitate e al vostro contesto legale e normativo.

### Sensibilizzare gli amministratori al rischio di phishing

Gli accessi alla Console Cloud Temple devono essere oggetto di particolare attenzione, soprattutto contro i tentativi di phishing volti a sottrarre credenziali o codici MFA. È fondamentale che gli utenti autorizzati siano regolarmente sensibilizzati a questi rischi: controllo sistematico dell’URL, cautela nei confronti di messaggi inattesi e segnalazione immediata di qualsiasi attività sospetta.

Per limitare questi rischi, raccomandiamo di non accedere mai alla Console tramite un link ricevuto via e-mail, ma sempre digitando manualmente l’URL abituale.

Queste buone pratiche rientrano sotto la vostra responsabilità in quanto clienti e sono essenziali per prevenire gli attacchi di phishing. In caso di dubbio, il supporto Cloud Temple resta a vostra disposizione.

## Gestione dei servizi cloud

Le vostre risorse Cloud sono gestite dalla Console. Questo capitolo presenta raccomandazioni essenziali per controllare l’esercizio dei servizi cloud.

### Identificare i proprietari del tenant

Il proprietario del tenant detiene tutti i permessi relativi ai prodotti attivati e riceve le notifiche ufficiali. È fondamentale assicurarsi che i proprietari del vostro tenant siano interlocutori adeguati all’interno della vostra organizzazione.

Per una gestione sicura ed efficace:

- **Identificare un proprietario responsabile**, preferibilmente una persona direttamente coinvolta nella gestione dell’ambiente.
- **Verificare l’indirizzo e-mail di contatto** del proprietario per assicurarvi che sia valido e regolarmente consultato.
- **Assicurare un controllo diretto**, aggiungendo un proprietario membro della vostra organizzazione, anche se delegate la gestione del vostro servizio cloud, per poter supervisionare le notifiche e decisioni importanti.
- **Limitare il numero di proprietari** a 3 per ridurre la superficie esposta e facilitare l’audit delle azioni critiche.

Per saperne di più sulla gestione dei proprietari del tenant, consultate il [Guide des popriétaires sur un tenant | Documentation Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Gestire i permessi sui vostri servizi cloud

La Console Cloud Temple consente una gestione granulare degli accessi assegnando a ciascun utente uno o più livelli di permessi, che determinano in modo preciso le azioni autorizzate. Consultate la documentazione dei permessi ([Permissions disponibles pour les utilisateurs de votre organisation | Documentation Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)) per comprendere nel dettaglio i diversi permessi e attribuirli in modo appropriato.

Per una gestione efficace e sicura dei permessi, vi raccomandiamo di seguire queste buone pratiche:

- **Applicare il principio del minimo privilegio:** concedere agli utenti solo i permessi necessari alla loro attività. Ciò riduce i rischi limitando l’accesso a funzionalità non necessarie.
- **Limitare i permessi sensibili:** assegnare i permessi sensibili solo agli utenti responsabili di tali funzioni. I permessi sensibili includono in particolare la gestione degli accessi (console\_public\_access\_write, \*\_console\_access, object - storage\_write), la gestione dei permessi (iam\_write, iam\_offline\_access), e la gestione dei backup (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Privilegiare l’accesso in sola lettura:** In caso di dubbio, concedere un accesso in sola lettura (\*\_read) per minimizzare i rischi pur consentendo l’accesso alle informazioni necessarie.
- **Effettuare revisioni regolari dei diritti:** Verificare regolarmente i permessi degli utenti per rimuovere quelli obsoleti. L’esportazione dei permessi in formato CSV facilita tale gestione.**

Un’attribuzione controllata dei permessi limita i rischi di errore o azioni malevole, rinforzando al contempo la vostra postura di sicurezza.

### Aggiornare regolarmente gli hypervisor

Cloud Temple fornisce regolarmente build per gli hypervisor al fine di assicurare l’applicazione delle patch di sicurezza. Tuttavia, l’aggiornamento degli hypervisor resta sotto la vostra responsabilità, poiché non abbiamo visibilità sui vostri vincoli di business.
Di conseguenza, vi consigliamo di:

- Verificare regolarmente nella Console la disponibilità di nuovi build per i vostri hypervisor;  
- **Distribuire regolarmente i nuovi build su tutti i vostri hypervisor**, in particolare se correggono vulnerabilità di sicurezza;  
- Distribuire regolarmente sulle vostre macchine virtuali le nuove versioni dei vmtools.

**È disponibile una pagina di avvisi di sicurezza** per informarvi sulle vulnerabilità note e le raccomandazioni associate: [Alertes de sécurité | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).

### Monitorare l’attività sui servizi cloud

Per garantire un monitoraggio efficace del vostro ambiente cloud e reagire rapidamente in caso di anomalia, è essenziale implementare una strategia di sorveglianza attiva. In particolare, vi consigliamo di:

- **Monitorare la disponibilità dei servizi** tramite la [Status page | Cloud Temple](https://status.cloud-temple.com/), così da essere avvisati in caso di incidenti o malfunzionamenti generali;  
- **Attivare le notifiche tematiche** pertinenti per il vostro uso dalla Console, per ricevere in tempo reale gli avvisi importanti (vedere [Abonnement aux notifications thématiques | Documentation Cloud Temple](../../console/iam/concepts#abonnement-aux-notifications-th%C3%A9matiques));  
- **Utilizzare i log di attività Cloud** per identificare azioni sensibili o sospette sulle vostre risorse (vedere sezione « Journalisation - Suivi des Activités » del [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart)). La raccolta e analisi dei log di attività può essere automatizzata tramite le API Console, per integrare gli eventi nei vostri strumenti di monitoraggio o rilevamento incidenti.

## Mettere in sicurezza le risorse ospitate

In un modello Cloud, la sicurezza delle risorse distribuite è responsabilità dell’utente. Cloud Temple fornisce un’infrastruttura sicura, ma spetta a voi proteggere i vostri sistemi operativi, dati e configurazioni.

Di seguito sono riportate le principali buone pratiche per rafforzare la sicurezza delle vostre VM: configurazione delle politiche di backup, crittografia delle risorse critiche, e hardening dei sistemi operativi. Queste misure contribuiscono a limitare i rischi di compromissione, garantire l’integrità dei dati e assicurare la continuità operativa in caso di incidente.

### Configurare i backup

Per garantire la sicurezza e la resilienza dei vostri dati, è essenziale definire e applicare correttamente le vostre politiche di backup. L’assegnazione di una politica di backup a ciascuna macchina virtuale prima del suo avvio è obbligatoria. La documentazione è disponibile nella sezione "Sauvegarde" del [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart).

Ecco le raccomandazioni in materia di gestione delle politiche di backup delle vostre risorse Cloud Temple:

- **Definite le vostre politiche di backup:** Richiedete al supporto la creazione delle politiche di backup adatte alle esigenze della vostra organizzazione in termini di sicurezza.  
- **Evitate le politiche sospese:** Non lasciate alcuna VM associata a una politica di backup sospesa per non compromettere la sicurezza dei dati.  
- **Eseguite test di ripristino:** Testate regolarmente il ripristino dei vostri backup per verificare l’efficacia delle vostre procedure di recovery.

### Cifrare le VM sensibili

In aggiunta alla cifratura dei dati a livello disco, nativa per tutte le risorse cloud, **la cifratura delle VM può essere attivata per proteggere le vostre risorse più sensibili**. Per farlo, consultate [Chiffrer une machine virtuelle VMware | Documentation Cloud Temple](../../iaas_vmware/tutorials/vm_encryption?_highlight=*chiff).

Ecco alcune buone pratiche in caso di utilizzo della cifratura delle VM:

- Attivare la cifratura sulle VM sensibili: Applicatela fin dalla creazione della macchina o in occasione di un aggiornamento pianificato. L’operazione richiede l’arresto temporaneo della VM;  
- Verificare lo stato di cifratura: Controllate dalla console che la VM riporti lo stato "chiffré";  
- Eseguire un backup prima della cifratura: Assicuratevi che la VM sia correttamente salvata prima di qualsiasi modifica.

### Limitare l’esposizione delle vostre risorse

Per ridurre la superficie di attacco delle vostre macchine virtuali, si raccomanda vivamente di limitare all’essenziale i servizi esposti. In particolare, assicuratevi di configurare le vostre risorse in modo da **non esporre pubblicamente le interfacce di amministrazione e le console** dei sistemi e delle applicazioni distribuite.

Se utilizzate i servizi Object Storage di Cloud Temple, è inoltre consigliato **non configurare i vostri bucket con accesso pubblico**, salvo nei casi in cui ciò sia strettamente necessario (vedere [Limitation des accès à vos buckets S3 | Documentation Cloud Temple](../../storage/oss/quickstart?_highlight=*bucket#limitations-des-acc%C3%A8s-%C3%A0-vos-bucket-s3)).

### Hardening delle macchine virtuali (servizi IaaS)

L’hosting di una macchina virtuale su un cloud sicuro non garantisce, da solo, la sicurezza del sistema operativo, dei servizi o delle applicazioni in esecuzione. L’hardening delle VM, siano esse state distribuite da voi o provenienti dal catalogo, è sotto la vostra responsabilità.

Vi raccomandiamo di **applicare le misure di sicurezza di base**

- Mantenere i sistemi aggiornati con le patch di sicurezza;  
- Limitare i servizi esposti;  
- Disattivare i componenti non necessari;  
- Restringere i diritti di accesso al minimo indispensabile;  
- Attivare la registrazione degli accessi;  
- Configurare backup regolari.

Per guidarvi in queste azioni, fate riferimento a:

- Le guide di hardening dei fornitori dei software che utilizzate;  
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);  
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Queste buone pratiche costituiscono la prima linea di difesa per mettere in sicurezza i vostri sistemi nel cloud.

### Hardening dei container (servizi PaaS)

Per garantire la sicurezza dei vostri container nell’ambito del servizio PaaS OpenShift, vi consigliamo di implementare le seguenti misure per rafforzarne l’hardening:

- **Fonte delle immagini:** Verificate che tutte le immagini provengano da fonti affidabili, come registry interni o Red Hat Container Catalog, ed evitate l’utilizzo di immagini comunitarie non verificate, come quelle disponibili su Docker Hub pubblico.  
- **Restrizione dei privilegi:** Limitate i privilegi dei container utilizzando le funzionalità di OpenShift, in particolare le *Security Context Constraints* (SCC), per ridurre i permessi al minimo necessario.  
- **Configurazione delle SCC:** Create SCC personalizzate per ogni applicazione o gruppo di applicazioni. Questo include la restrizione delle chiamate di sistema autorizzate (ad esempio, tramite *seccomp profiles*), con configurazioni specifiche come il divieto di *ptrace* o *mount* per ridurre il rischio di fuga dai container.  
- **Isolamento dei carichi di lavoro:** Utilizzate *Namespaces* e *Network Policies* per isolare le applicazioni e limitare le interazioni non necessarie tra i container.  
- **Registrazione completa:** Attivate la registrazione tramite l’operatore OpenShift Logging per catturare gli eventi associati ai container e ai sistemi ospitati, al fine di rilevare e analizzare meglio qualsiasi attività sospetta.

## Per approfondire

Se desiderate beneficiare di servizi di sicurezza aggiuntivi o di un supporto rafforzato su aspetti legati alla sicurezza (audit, hardening, conformità, consulenza, ecc.), potete richiedere i nostri **Professional Services**. Per saperne di più, rivolgetevi al vostro referente Cloud Temple.