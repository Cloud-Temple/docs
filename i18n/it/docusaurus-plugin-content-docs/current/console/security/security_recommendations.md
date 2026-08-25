---
title: Buone pratiche
---

*Ultimo aggiornamento : 22/05/2025*

## Raccomandazioni per l'utilizzo sicuro dei servizi Cloud Temple

I servizi Cloud Temple offrono un'infrastruttura cloud altamente sicura per progettazione. Tuttavia, alcune buone pratiche di sicurezza rientrano nella vostra responsabilità in quanto utenti di questi servizi. Questa guida vi aiuta a rafforzare la sicurezza del vostro ambiente cloud sfruttando le funzionalità offerte nella Console.

Troverete al suo interno raccomandazioni concrete per:

- Proteggere l'accesso alla Console cloud;
- Gestire gli accessi e le autorizzazioni in modo controllato;
- Proteggere le risorse distribuite tramite i nostri servizi cloud.

## Accesso alla Console

L'accesso alla Console è la porta d'ingresso verso tutti i servizi Cloud Temple. È quindi essenziale proteggerla in modo efficace.

### Limitare l'accesso alla Console tramite filtraggio IP

L'accesso alla console di gestione cloud è limitato agli indirizzi IP precedentemente autorizzati. Questa restrizione consente di autorizzare l'accesso solo agli utenti provenienti dagli intervalli di indirizzi IP specificati, minimizzando così i rischi di accessi non autorizzati.

È possibile configurare queste restrizioni IP nelle impostazioni della propria organizzazione. Per sapere come configurare il filtraggio IP, consulta la [Gestione degli accessi e autenticazione | Documentazione Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestione-degli-accessi-e-autenticazione).

Per massimizzare l'efficacia di questo meccanismo, assicurati di:

- **Limitare il numero di indirizzi IP autorizzati** allo stretto necessario;
- Evitare intervalli troppo ampi o generici;
- Aggiungere **esclusivamente IP provenienti da ambienti controllati** (es: IP di uscita della rete aziendale);
- Vietare, o limitare al massimo, gli indirizzi IP individuali (es: IP pubblico della residenza del proprio personale IT);
- Vietare, o limitare, gli indirizzi IP di terze parti (es: fornitori di servizi);
- Mantenere questa lista aggiornata in caso di evoluzione dell'infrastruttura di rete.

Per gli accessi remoti (lavoro da remoto, fornitori…), privilegia il passaggio attraverso la rete aziendale tramite VPN piuttosto che l'autorizzazione diretta di indirizzi IP individuali. Ciò riduce la superficie di esposizione della Console e centralizza la gestione degli accessi all'interno della propria organizzazione.

### Utilizzare la federazione delle identità

La federazione delle identità consente di integrare la Console Cloud Temple con il tuo provider di identità (IdP), abilitando il SSO. Questo approccio centralizza l'autenticazione e offre diversi vantaggi :

- Gestione unificata degli account : creazione, modifica e eliminazione tramite la tua directory ;
- Riduzione della superficie di attacco : gli account locali diventano inutili o limitati ;
- Maggiore tracciabilità : gli accessi vengono registrati dal tuo IdP ;
- Integrazione potenziata : MFA, alerting, politiche di sicurezza contestuali… ;
- Conformità semplificata : coerenza con le tue pratiche interne.

Per questi motivi, **la federazione delle identità è consigliata**, in particolare per gli ambienti con un gran numero di utenti o con elevati requisiti di sicurezza.

Segui le nostre guide passo passo per integrare il tuo provider di identità :

- [Configurer la fédération avec Azure AD | Documentation Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Configurer la fédération avec ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Abilitare l'autenticazione multifactore (MFA)

L'autenticazione multifactore (MFA) rafforza significativamente la sicurezza di accesso alla Console Cloud Temple. Aggiunge una fase di autenticazione richiedendo un codice temporaneo generato da un'applicazione dedicata, in aggiunta alla password. Questa misura limita fortemente i rischi di accesso non autorizzato, anche in caso di furto delle credenziali.

Per gli account gestiti localmente dalla Console (senza federazione), l'MFA è abilitato per impostazione predefinita e non può essere disabilitato.

**Per gli account federati, è fortemente consigliato richiedere l'MFA lato provider di identità**, in particolare per gli amministratori con accesso alla Console.

Per ulteriori informazioni:  

- [Qu’est-ce que le MFA et est-il obligatoire ? | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#cosè-lmfa-e-obbligatorio)
- [Tutoriel : Fédération d'identité avec Microsoft EntraID | Documentation Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Tutoriel : Fédération d'identité avec Microsoft ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Accedere alla Console da dispositivi sicuri

La postazione e l'ambiente da cui accedete alla Console sono importanti per garantire la sicurezza dell'amministrazione dei vostri servizi cloud. Se operate in un ambiente con elevati requisiti di sicurezza, potete applicare le seguenti raccomandazioni :

- Per l'amministrazione da parte dei vostri team, applicare tutto o parte delle [Recommandations relatives à l'administration sécurisée des SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si) ;
- In caso di amministrazione da parte di un terzo, valutare l'opportunità di rivolgersi a un [Prestataires d’administration et de maintenance sécurisées (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), in base alla sensibilità delle risorse ospitate e al vostro contesto legale e normativo.

### Sensibilizzare gli amministratori al rischio di phishing

L'accesso alla Console Cloud Temple deve essere oggetto di una vigilanza rafforzata, in particolare di fronte ai tentativi di phishing volti a rubare credenziali o codici MFA. È cruciale che gli utenti autorizzati vengano regolarmente sensibilizzati a questi rischi: verifica sistematica dell'URL, prudenza di fronte ai messaggi inaspettati e segnalazione immediata di qualsiasi attività sospetta.

Per limitare questi rischi, consigliamo di non accedere mai alla Console tramite un link ricevuto via e-mail, ma di inserire sempre manualmente l'URL abituale.

Queste best practice rientrano nella vostra responsabilità in quanto clienti e sono essenziali per prevenire gli attacchi di phishing. In caso di dubbi, il supporto Cloud Temple rimane a vostra disposizione.

## Gestione dei servizi cloud

Le tue risorse Cloud vengono gestite dalla Console. Questo capitolo presenta raccomandazioni essenziali per controllare l'utilizzo dei servizi cloud.

### Identificare i proprietari del tenant

Il proprietario del tenant detiene tutti i permessi legati ai prodotti attivati e riceve le notifiche ufficiali. È cruciale assicurarsi che i proprietari del vostro tenant siano i punti di riferimento adeguati all'interno della vostra organizzazione.

Per una gestione sicura ed efficace :

- **Identificate un proprietario responsabile**, preferibilmente una persona direttamente coinvolta nella gestione dell'ambiente.
- **Verificate l'indirizzo e-mail di contatto** del proprietario per assicurarvi che sia valido e regolarmente consultato.
- **Garantite un controllo diretto**, aggiungendo un proprietario membro della vostra organizzazione, anche se affidate la gestione del vostro servizio cloud, per poter supervisionare le notifiche e le decisioni importanti.
- **Limitate il numero di proprietari** a 3 per ridurre la superficie di esposizione e facilitare l'audit delle azioni critiche.

Per ulteriori informazioni sulla gestione dei proprietari del tenant, consulta il [Guide des propriétaires sur un tenant | Documentation Cloud Temple](../../console/iam/concepts#gestione-dei-proprietari-su-un-tenant).

### Gestire le autorizzazioni sui vostri servizi cloud

La Console Cloud Temple consente una gestione granulare degli accessi assegnando a ciascun utente uno o più livelli di autorizzazione, che determinano precisamente le azioni consentite. Consultate la documentazione sulle autorizzazioni ([Permissions disponibles pour les utilisateurs de votre organisation | Documentation Cloud Temple](../../console/iam/concepts#permessi-disponibili-per-gli-utenti-della-tua-organizzazione)) per comprendere in dettaglio le diverse autorizzazioni e assegnarle in modo appropriato.

Per una gestione efficace e sicura delle autorizzazioni, vi consigliamo di seguire le seguenti best practice:

- **Applicare il principio del privilegio minimo:** concedere agli utenti solo le autorizzazioni necessarie per le loro mansioni. Ciò riduce i rischi limitando l'accesso a funzionalità non necessarie.
- **Limitare le autorizzazioni sensibili:** Assegnare le autorizzazioni sensibili solo agli utenti responsabili di queste funzioni. Le autorizzazioni sensibili riguardano in particolare la gestione degli accessi (console\_public\_access\_write, \*\_console\_access, object - storage\_write), la gestione delle autorizzazioni (iam\_write, iam\_offline\_access) e la gestione dei backup (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Privilegiare l'accesso in sola lettura:** In caso di dubbio, concedere un accesso in sola lettura (\*\_read) per minimizzare i rischi consentendo comunque l'accesso alle informazioni necessarie.
- **Effettuare revisioni regolari dei diritti:** Verificare periodicamente le autorizzazioni degli utenti per revocare quelle obsolete. L'esportazione delle autorizzazioni in formato CSV facilita questa gestione.**

Un'assegnazione controllata delle autorizzazioni limita i rischi di errori o azioni malevole, rafforzando al contempo la vostra postura di sicurezza.

### Aggiornare regolarmente gli hypervisor

Cloud Temple fornisce regolarmente build per gli hypervisor per garantire l'applicazione delle patch di sicurezza. Tuttavia, l'aggiornamento degli hypervisor rimane sotto la vostra responsabilità, poiché non abbiamo visibilità sui vostri vincoli operativi.  

Pertanto, vi consigliamo di:

- Controllare regolarmente nella Console la disponibilità di nuovi build per i vostri hypervisor;  
- **Distribuire regolarmente i nuovi build su tutti i vostri hypervisor**, in particolare se correggono vulnerabilità di sicurezza;
- Distribuire regolarmente sulle vostre macchine virtuali le nuove versioni di vmtools.

**È disponibile una pagina degli avvisi di sicurezza** per informarvi sulle vulnerabilità note e sulle relative raccomandazioni: [Alertes de sécurité | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).

### Monitorare l'attività sui servizi cloud

Per garantire un monitoraggio efficace del vostro ambiente cloud e reagire rapidamente in caso di anomalie, è essenziale implementare una strategia di monitoraggio attivo. Vi raccomandiamo in particolare di:

- **Monitorare la disponibilità dei servizi** tramite la [Status page | Cloud Temple](https://status.cloud-temple.com/), per ricevere avvisi in caso di incidenti o interruzioni generali;
- **Attivare le notifiche tematiche** pertinenti per il vostro utilizzo dalla Console, per ricevere in tempo reale gli avvisi importanti (voir [Abonnement aux notifications thématiques | Documentation Cloud Temple](../../console/iam/concepts#sottoscrizione-alle-notifiche-tematiche));
- **Sfruttare i log di attività Cloud** per identificare le azioni sensibili o sospette sulle vostre risorse (voir section « Journalisation - Suivi des Activités » du [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart)). La raccolta e l’analisi dei log di attività può essere automatizzata tramite le API Console, per integrare gli eventi nei vostri strumenti di monitoraggio o di rilevamento degli incidenti.

## Proteggere le risorse ospitate

In un modello Cloud, la sicurezza delle risorse distribuite è di responsabilità dell'utente. Cloud Temple fornisce un'infrastruttura sicura, ma spetta a voi proteggere i vostri sistemi operativi, i dati e le configurazioni.

Di seguito sono riportate le best practice essenziali per rafforzare la sicurezza delle vostre VM: configurazione delle politiche di backup, crittografia delle risorse critiche e hardening dei sistemi operativi. Queste misure contribuiscono a limitare i rischi di compromissione, a garantire l'integrità dei dati e a assicurare la continuità operativa in caso di incidente.

### Configurare i backup

Per garantire la sicurezza e la resilienza dei vostri dati, è essenziale definire e applicare correttamente le vostre politiche di backup. L'assegnazione di una politica di backup a ogni macchina virtuale prima del suo avvio è obbligatoria. La documentazione è disponibile nella sezione "Backup" del [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart).

Di seguito sono riportate le raccomandazioni per la gestione delle politiche di backup delle vostre risorse Cloud Temple :

- **Definite le vostre politiche di backup:** Richiedete al supporto la creazione di politiche di backup adeguate alle esigenze di sicurezza della vostra organizzazione.  
- **Evitate le politiche sospese:** Non lasciare alcuna VM associata a una politica di backup sospesa per evitare di compromettere la sicurezza dei dati.
- **Eseguite test di ripristino:** Testate regolarmente il ripristino dei vostri backup per verificare l'efficacia delle vostre procedure di ripristino.

### Crittografare le VM sensibili

In aggiunta alla crittografia dei dati a livello di disco, nativa per tutte le risorse cloud, **la crittografia delle VM può essere attivata per proteggere le vostre risorse più sensibili**. Per farlo, consultate [Chiffrer une machine virtuelle VMware | Documentation Cloud Temple](../../iaas_vmware/tutorials/vm_encryption).

Ecco alcune best practice in caso di utilizzo della crittografia delle VM :

- Attivare la crittografia sulle VM sensibili : applicatela fin dalla creazione della macchina o durante un aggiornamento pianificato. L'operazione richiede l'arresto temporaneo della VM ;
- Verificare lo stato di crittografia : controllate dalla console che la VM mostri correttamente lo stato "crittografato" ;
- Effettuare il backup prima della crittografia : assicuratevi che la VM sia correttamente salvata prima di qualsiasi modifica.

### Limitare l'esposizione delle vostre risorse

Per limitare la superficie di attacco delle vostre macchine virtuali, è fortemente consigliato limitare allo stretto necessario i servizi esposti. In particolare, assicuratevi di configurare le vostre risorse in modo da **non esporre pubblicamente le interfacce di amministrazione e le console** dei sistemi e delle applicazioni distribuite.

Se utilizzate i servizi Object Storage di Cloud Temple, è inoltre consigliabile **non configurare i bucket con accesso pubblico**, salvo nei casi in cui ciò sia strettamente necessario (vedi [Limitazione degli accessi ai bucket S3 | Documentazione Cloud Temple](../../storage/oss/quickstart#gestione-delle-politiche-di-accesso)).

### Indurire le macchine virtuali (servizi IaaS)

L'hosting di una macchina virtuale su un cloud sicuro non garantisce, da solo, la sicurezza del sistema operativo, dei servizi o delle applicazioni che essa esegue. L'indurimento delle VM, siano esse distribuite direttamente da voi o prelevate dal catalogo, è di vostra responsabilità.

Vi raccomandiamo di **applicare le misure di sicurezza di base**

- Mantenere i sistemi aggiornati con le patch di sicurezza ;
- Limitare i servizi esposti ;
- Disabilitare i componenti inutili ;  
- Limitare i diritti di accesso al minimo indispensabile ;
- Abilitare la registrazione degli accessi ;
- Configurare backup regolari.

Per guidarvi in queste azioni, fate riferimento a :

- Le guide di indurimento degli editori dei software che utilizzate ;
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer) ;
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Queste best practice costituiscono la prima linea di difesa per proteggere i vostri sistemi nel cloud.

### Indurire i container (services PaaS)

Per garantire la sicurezza dei vostri container nell'ambito del servizio PaaS OpenShift, vi consigliamo di implementare le seguenti misure per rafforzare il loro hardening :

- **Origine delle immagini** : Assicuratevi che tutte le immagini provengano da fonti affidabili, come registri interni o il Red Hat Container Catalog, ed evitate l'utilizzo di immagini della community non verificate, come quelle disponibili su Docker Hub pubblico.
- **Limitazione dei privilegi** : Limitate i privilegi dei container utilizzando le funzionalità di OpenShift, in particolare le *Security Context Constraints* (SCC), al fine di restringere le autorizzazioni allo stretto necessario.
- **Configurazione delle SCC** : Create SCC personalizzati per ogni applicazione o gruppo di applicazioni. Ciò include la restrizione delle chiamate di sistema consentite (par exemple, via *seccomp profiles*), con configurazioni specifiche come il divieto di *ptrace* o *mount* per ridurre i rischi di escape dei container.
- **Isolamento dei carichi di lavoro** : Utilizzate i *Namespaces* e le *Network Policies* per isolare le applicazioni e limitare le interazioni non necessarie tra i container.
- **Logging completo** : Attivate il logging tramite l'operatore OpenShift Logging per catturare gli eventi associati ai container e ai sistemi ospitati, al fine di rilevare e analizzare meglio qualsiasi attività sospetta.

## Per approfondire

Se desiderate usufruire di servizi di sicurezza aggiuntivi o di un supporto rafforzato su aspetti legati alla sicurezza (audit, hardening, conformità, consulenza, ecc.), i nostri **Professional Services** possono essere contattati. Per ulteriori informazioni, rivolgetevi al vostro referente Cloud Temple.