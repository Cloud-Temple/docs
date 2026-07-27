---
title: Best practices
---

*Ultimo aggiornamento: 22/05/2025*

## Raccomandazioni per l'utilizzo sicuro dei servizi Cloud Temple

I servizi Cloud Temple offrono un'infrastruttura cloud altamente sicura per progettazione. Tuttavia, alcune buone pratiche di sicurezza rientrano nella vostra responsabilità in quanto utenti di questi servizi. Questa guida vi aiuta a rafforzare la sicurezza del vostro ambiente cloud sfruttando le funzionalità offerte nella Console.

Troverete al suo interno raccomandazioni concrete per:

- Proteggere l'accesso alla Console cloud;
- Gestire gli accessi e le autorizzazioni in modo controllato;
- Proteggere le risorse distribuite tramite i nostri servizi cloud.

## Accesso alla Console

L'accesso alla Console è il punto di ingresso verso tutti i servizi Cloud Temple. È quindi essenziale proteggerla efficacemente.

### Limitare l'accesso alla Console tramite filtraggio IP

L'accesso alla console di gestione cloud è limitato agli indirizzi IP precedentemente autorizzati. Questa restrizione consente di autorizzare l'accesso solo agli utenti provenienti dagli intervalli di IP specificati, minimizzando così i rischi di accessi non autorizzati.

È possibile configurare queste restrizioni IP nelle impostazioni della propria organizzazione. Per sapere come configurare il filtraggio IP, consulta la [Gestione degli accessi e dell'autenticazione | Documentazione Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestion-des-accès-et-authentification).

Per massimizzare l'efficacia di questo meccanismo, assicurati di:

- **Limitare il numero di indirizzi IP autorizzati** allo stretto necessario;
- Evitare intervalli troppo ampi o generici;
- Aggiungere **esclusivamente IP provenienti da ambienti controllati** (es: IP di uscita della rete aziendale);
- Vietare, o limitare al massimo, gli indirizzi IP individuali (es: IP pubblico della residenza del proprio personale IT);
- Vietare, o limitare, gli indirizzi IP di terze parti (es: fornitori di servizi);
- Mantenere questa lista aggiornata in caso di evoluzione dell'infrastruttura di rete.

Per gli accessi remoti (lavoro da remoto, fornitori…), privilegia il transito attraverso la rete aziendale tramite VPN piuttosto che l'autorizzazione diretta di indirizzi IP individuali. Ciò riduce la superficie di esposizione della Console e centralizza la gestione degli accessi all'interno della propria organizzazione.

### Utilizzare la federazione delle identità

La federazione delle identità consente di integrare la Console Cloud Temple con il proprio provider di identità (IdP), attivando il SSO. Questo approccio centralizza l'autenticazione e offre diversi vantaggi:

- Gestione unificata degli account: creazione, modifica e eliminazione tramite la propria directory;
- Riduzione della superficie di attacco: gli account locali diventano inutili o limitati;
- Maggiore tracciabilità: gli accessi vengono registrati dal proprio IdP;
- Integrazione potenziata: MFA, alerting, politiche di sicurezza contestuali…;
- Conformità semplificata: coerenza con le proprie pratiche interne.

Per questi motivi, **la federazione delle identità è consigliata**, in particolare per gli ambienti con un gran numero di utenti o con elevati requisiti di sicurezza.

Segui le nostre guide passo passo per integrare il tuo provider di identità:

- [Configurare la federazione con Azure AD | Documentazione Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Configurare la federazione con ADFS | Documentazione Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Abilitare l’autenticazione a più fattori (MFA)

L’autenticazione a più fattori (MFA) rafforza significativamente la sicurezza di accesso alla Console Cloud Temple. Aggiunge un passaggio di autenticazione richiedendo un codice temporaneo generato da un’applicazione dedicata, in aggiunta alla password. Questa misura limita fortemente i rischi di accesso non autorizzato, anche in caso di furto delle credenziali.

Per gli account gestiti localmente dalla Console (senza federazione), l’MFA è abilitato per impostazione predefinita e non può essere disabilitato.

**Per gli account federati, si consiglia vivamente di richiedere l’MFA lato provider di identità**, in particolare per gli amministratori con accesso alla Console.

Per ulteriori informazioni:  

- [Qu’est-ce que le MFA et est-il obligatoire ? | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutoriel : Fédération d'identité avec Microsoft EntraID | Documentation Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Tutoriel : Fédération d'identité avec Microsoft ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Accedere alla Console da dispositivi sicuri

La postazione e l'ambiente da cui accedete alla Console sono importanti per garantire la sicurezza dell'amministrazione dei vostri servizi cloud. Se operate in un ambiente con elevati requisiti di sicurezza, potete applicare le seguenti raccomandazioni:

- Per l'amministrazione da parte dei vostri team, applicare tutto o parte delle [Recommandations relatives à l'administration sécurisée des SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si);
- In caso di amministrazione da parte di un terzo, valutare l'opportunità di rivolgersi a un [Prestataires d’administration et de maintenance sécurisées (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), in base alla sensibilità delle risorse ospitate e al vostro contesto legale e normativo.

### Sensibilizzare gli amministratori al rischio di phishing

L'accesso alla Console Cloud Temple deve essere oggetto di una vigilanza rafforzata, in particolare di fronte ai tentativi di phishing volti a rubare credenziali o codici MFA. È cruciale che gli utenti abilitati vengano regolarmente sensibilizzati a questi rischi: verifica sistematica dell'URL, cautela nei confronti dei messaggi inaspettati e segnalazione immediata di qualsiasi attività sospetta.

Per limitare questi rischi, raccomandiamo di non accedere mai alla Console tramite un link ricevuto via e-mail, ma sempre digitando manualmente l'URL abituale.

Queste buone pratiche rientrano nella vostra responsabilità in quanto clienti e sono essenziali per prevenire gli attacchi di phishing. In caso di dubbi, il supporto Cloud Temple rimane a vostra disposizione.

## Gestione dei servizi cloud

Le vostre risorse Cloud sono gestite dalla Console. Questo capitolo vi presenta raccomandazioni essenziali per controllare l'utilizzo dei servizi cloud.

### Identificare i proprietari del tenant

Il proprietario del tenant detiene tutti i permessi legati ai prodotti attivati e riceve le notifiche ufficiali. È cruciale assicurarsi che i proprietari del vostro tenant siano i punti di contatto adeguati all'interno della vostra organizzazione.

Per una gestione sicura ed efficace:

- **Identificate un proprietario responsabile**, preferibilmente una persona direttamente coinvolta nella gestione dell'ambiente.
- **Verificate l'indirizzo e-mail di contatto** del proprietario per assicurarvi che sia valido e regolarmente consultato.
- **Assicurate un controllo diretto**, aggiungendo un proprietario membro della vostra organizzazione, anche se affidate la gestione del vostro servizio cloud, per poter supervisionare le notifiche e le decisioni importanti.
- **Limitate il numero di proprietari** a 3 per ridurre la superficie di esposizione e facilitare l'audit delle azioni critiche.

Per ulteriori informazioni sulla gestione dei proprietari del tenant, consultare il [Guide des propriétaires sur un tenant | Documentation Cloud Temple](../../console/iam/concepts#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Gestire le autorizzazioni sui tuoi servizi cloud

La Console Cloud Temple consente una gestione granulare degli accessi assegnando a ciascun utente uno o più livelli di autorizzazione, che determinano precisamente le azioni consentite. Consulta la documentazione sulle autorizzazioni ([Permissions disponibles pour les utilisateurs de votre organisation | Documentation Cloud Temple](../../console/iam/concepts#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)) per comprendere in dettaglio le diverse autorizzazioni e assegnarle in modo appropriato.

Per una gestione efficace e sicura delle autorizzazioni, ti consigliamo di seguire queste best practice :

- **Applicare il principio del privilegio minimo :** concedi agli utenti solo le autorizzazioni necessarie per le loro mansioni. Ciò riduce i rischi limitando l'accesso a funzionalità non necessarie.
- **Limitare le autorizzazioni sensibili :** Assegna le autorizzazioni sensibili solo agli utenti responsabili di queste funzioni. Le autorizzazioni sensibili riguardano in particolare la gestione degli accessi (console\_public\_access\_write, \*\_console\_access, object - storage\_write), la gestione delle autorizzazioni (iam\_write, iam\_offline\_access) e la gestione dei backup (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Privilegiare l'accesso in sola lettura :** In caso di dubbio, concedi un accesso in sola lettura (\*\_read) per minimizzare i rischi consentendo comunque l’accesso alle informazioni necessarie.
- **Effettuare revisioni regolari dei diritti :** Verifica regolarmente le autorizzazioni degli utenti per rimuovere quelle obsolete. L’esportazione delle autorizzazioni in formato CSV facilita questa gestione.**

Un'assegnazione controllata delle autorizzazioni limita i rischi di errori o azioni malevole, rafforzando al contempo la tua postura di sicurezza.

### Aggiornare regolarmente gli hypervisor

Cloud Temple fornisce regolarmente build per gli hypervisor per garantire l'applicazione delle patch di sicurezza. Tuttavia, l'aggiornamento degli hypervisor rimane sotto la vostra responsabilità, poiché non abbiamo visibilità sui vostri vincoli di business.  

Pertanto, vi consigliamo di:

- Controllare regolarmente nella Console la disponibilità di nuovi build per i vostri hypervisor;  
- **Distribuire regolarmente i nuovi build su tutti i vostri hypervisor**, in particolare se correggono vulnerabilità di sicurezza;
- Distribuire regolarmente sulle vostre macchine virtuali le nuove versioni di vmtools.

**È disponibile una pagina degli avvisi di sicurezza** per informarvi sulle vulnerabilità note e sulle relative raccomandazioni: [Alertes de sécurité | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).

### Monitorare l'attività sui servizi cloud

Per garantire un monitoraggio efficace del vostro ambiente cloud e reagire rapidamente in caso di anomalie, è essenziale implementare una strategia di monitoraggio attivo. Vi raccomandiamo in particolare di :

- **Monitorare la disponibilità dei servizi** tramite la [Pagina di stato | Cloud Temple](https://status.cloud-temple.com/), al fine di essere avvisati in caso di incidenti o interruzioni generali ;
- **Abilitare le notifiche tematiche** pertinenti per il vostro utilizzo dalla Console, al fine di ricevere in tempo reale gli avvisi importanti (vedere [Abbonamento alle notifiche tematiche | Documentazione Cloud Temple](../../console/iam/concepts#abonnement-aux-notifications-thématiques)) ;
- **Sfruttare i log di attività Cloud** per identificare azioni sensibili o sospette sulle vostre risorse (vedere la sezione « Registrazione - Monitoraggio delle Attività » della [Guida introduttiva | Documentazione Cloud Temple](../../iaas_vmware/quickstart)). La raccolta e l'analisi dei log di attività può essere automatizzata tramite le API Console, al fine di integrare gli eventi nei vostri strumenti di supervisione o di rilevamento degli incidenti.

## Proteggere le risorse ospitate

In un modello Cloud, la sicurezza delle risorse distribuite è responsabilità dell'utente. Cloud Temple fornisce un'infrastruttura sicura, ma spetta a voi proteggere i vostri sistemi operativi, i vostri dati e le vostre configurazioni.

Di seguito sono riportate le best practice essenziali per rafforzare la sicurezza delle vostre VM: configurazione delle politiche di backup, crittografia delle risorse critiche e hardening dei sistemi operativi. Queste misure contribuiscono a limitare i rischi di compromissione, a garantire l'integrità dei dati e a assicurare la continuità operativa in caso di incidente.

### Configurare i backup

Per garantire la sicurezza e la resilienza dei vostri dati, è essenziale definire e applicare correttamente le vostre politiche di backup. L'assegnazione di una politica di backup a ciascuna macchina virtuale prima del suo avvio è obbligatoria. La documentazione è disponibile nella sezione "Backup" del [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart).

Di seguito sono riportate le raccomandazioni per la gestione delle politiche di backup delle vostre risorse Cloud Temple :

- **Definite le vostre politiche di backup :** Richiedete al supporto la creazione di politiche di backup adeguate alle esigenze di sicurezza della vostra organizzazione.  
- **Evitate le politiche sospese :** Non lasciate alcuna VM associata a una politica di backup sospesa per evitare di compromettere la sicurezza dei dati.
- **Eseguite test di ripristino :** Testate regolarmente il ripristino dei vostri backup per verificare l'efficacia delle vostre procedure di ripristino.

### Crittografare le VM sensibili

In aggiunta alla crittografia dei dati a livello di disco, nativa per tutte le risorse cloud, **la crittografia delle VM può essere attivata per proteggere le vostre risorse più sensibili**. Per farlo, consultate [Chiffrer une machine virtuelle VMware | Documentation Cloud Temple](../../iaas_vmware/tutorials/vm_encryption).

Ecco alcune buone pratiche in caso di utilizzo della crittografia delle VM :

- Attivare la crittografia sulle VM sensibili : applicatela fin dalla creazione della macchina o durante un aggiornamento pianificato. L'operazione richiede l'arresto temporaneo della VM ;
- Verificare lo stato di crittografia : controllate dalla console che la VM mostri correttamente lo stato "crittografata" ;
- Effettuare il backup prima della crittografia : assicuratevi che la VM sia correttamente salvata prima di qualsiasi modifica.

### Limitare l'esposizione delle vostre risorse

Per limitare la superficie di attacco delle vostre macchine virtuali, si consiglia vivamente di restringere al minimo indispensabile i servizi esposti. In particolare, assicuratevi di configurare le vostre risorse in modo da **non esporre pubblicamente le interfacce di amministrazione e le console** dei sistemi e delle applicazioni distribuite.

Se utilizzate i servizi Object Storage di Cloud Temple, si consiglia inoltre di **non configurare i bucket con accesso pubblico**, salvo nei casi in cui ciò sia strettamente necessario (vedere [Limitation des accès à vos buckets S3 | Documentation Cloud Temple](../../storage/oss/quickstart#gestion-des-politiques-daccès)).

### Indurire le macchine virtuali (servizi IaaS)

L'hosting di una macchina virtuale su un cloud sicuro non garantisce, da solo, la sicurezza del sistema operativo, dei servizi o delle applicazioni che essa esegue. L'hardening delle VM, siano esse distribuite direttamente da voi o prelevate dal catalogo, è di vostra responsabilità.

Vi raccomandiamo di **applicare le misure di sicurezza di base**

- Mantenere i sistemi aggiornati con le patch di sicurezza ;
- Limitare i servizi esposti ;
- Disabilitare i componenti inutili ;  
- Restringere i diritti di accesso al minimo indispensabile ;
- Abilitare la registrazione degli accessi ;
- Configurare backup regolari.

Per guidarvi in queste azioni, fate riferimento a :

- I guide di hardening dei produttori dei software che utilizzate ;
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer) ;
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Queste best practice costituiscono la prima linea di difesa per proteggere i vostri sistemi nel cloud.

### Indurire i container (servizi PaaS)

Per garantire la sicurezza dei vostri container nell'ambito del servizio PaaS OpenShift, vi consigliamo di implementare le seguenti misure per rafforzare il loro indurimento :

- **Origine delle immagini** : Assicuratevi che tutte le immagini provengano da fonti affidabili, come registri interni o il Red Hat Container Catalog, ed evitate l'utilizzo di immagini comunitarie non verificate, come quelle disponibili su Docker Hub pubblico.
- **Limitazione dei privilegi** : Limitate i privilegi dei container utilizzando le funzionalità di OpenShift, in particolare le *Security Context Constraints* (SCC), al fine di restringere le autorizzazioni allo stretto necessario.
- **Configurazione delle SCC** : Create SCC personalizzati per ogni applicazione o gruppo di applicazioni. Ciò include la restrizione delle chiamate di sistema autorizzate (ad esempio, tramite *seccomp profiles*), con configurazioni specifiche come il divieto di *ptrace* o *mount* per ridurre i rischi di escape dei container.
- **Isolamento dei carichi di lavoro** : Utilizzate i *Namespaces* e le *Network Policies* per isolare le applicazioni e limitare le interazioni non necessarie tra i container.
- **Logging completo** : Attivate il logging tramite l'operatore OpenShift Logging per catturare gli eventi associati ai container e ai sistemi ospitati, al fine di rilevare e analizzare meglio qualsiasi attività sospetta.

## Per approfondire

Se desideri usufruire di servizi di sicurezza aggiuntivi o di un supporto rafforzato su aspetti di sicurezza (audit, hardening, conformità, consulenza, ecc.), i nostri **Professional Services** sono a tua disposizione. Per ulteriori informazioni, contatta il tuo referente Cloud Temple.