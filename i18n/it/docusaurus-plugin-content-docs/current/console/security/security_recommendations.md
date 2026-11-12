---
title: Best practices
---

*Ultimo aggiornamento: 22/05/2025*

## Raccomandazioni per l'utilizzo sicuro dei servizi Cloud Temple

I servizi Cloud Temple offrono un'infrastruttura cloud altamente sicura per progettazione. Tuttavia, alcune best practice di sicurezza rientrano nella vostra responsabilità in quanto utenti di questi servizi. Questa guida vi aiuta a rafforzare la sicurezza del vostro ambiente cloud sfruttando le funzionalità proposte nella Console.

Vi troverete raccomandazioni concrete per:

- Proteggere l'accesso alla Console cloud;
- Gestire gli accessi e i permessi in modo controllato;
- Proteggere le risorse distribuite tramite i nostri servizi cloud.

## Accesso alla Console

L'accesso alla Console è il punto di ingresso verso l'insieme dei vostri servizi Cloud Temple. È quindi essenziale proteggerla efficacemente.

### Limitare l'accesso alla Console tramite filtraggio IP

L'accesso alla console di gestione cloud è limitato agli indirizzi IP precedentemente autorizzati. Questa restrizione consente di autorizzare l'accesso solo agli utenti provenienti dalle gamme di IP specificate, minimizzando così i rischi di accesso non autorizzato.

È possibile configurare queste restrizioni IP nelle impostazioni della propria organizzazione. Per sapere come configurare il filtraggio IP, consultare la [Gestione degli accessi e autenticazione | Documentazione Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestione-degli-accessi-e-autenticazione).

Per massimizzare l'efficacia di questo meccanismo, si raccomanda di:

- **Limitare il numero di indirizzi IP autorizzati** al minimo indispensabile;
- Evitare gamme troppo ampie o generiche;
- Aggiungere **solo IP provenienti da ambienti controllati** (es: IP di uscita della rete aziendale);
- Vietare, o limitare al massimo, gli indirizzi IP individuali (es: IP pubblica della residenza del personale IT);
- Vietare, o limitare, gli indirizzi IP di terze parti (es: fornitore di servizi);
- Mantenere aggiornata questa lista in caso di evoluzione dell'infrastruttura di rete.

Per gli accessi da remoto (smart working, fornitori…), si raccomanda di passare tramite la rete aziendale via VPN anziché autorizzare direttamente indirizzi IP individuali. Questo riduce la superficie di esposizione della Console e centralizza la gestione degli accessi all'interno dell'organizzazione.

### Utilizzare la federazione di identità

La federazione di identità consente di integrare la Console Cloud Temple con il proprio provider di identità (IdP), attivando il SSO. Questo approccio centralizza l'autenticazione e offre diversi vantaggi:

- Gestione unificata degli account: creazione, modifica e eliminazione tramite il proprio directory;
- Riduzione della superficie di attacco: gli account locali diventano inutili o limitati;
- Tracciabilità aumentata: gli accessi sono registrati dal proprio IdP;
- Integrazione rafforzata: MFA, alerting, politiche di sicurezza contestuale…;
- Conformità facilitata: coerenza con le pratiche interne.

Per queste ragioni, **la federazione di identità è raccomandata**, in particolare per gli ambienti con un numero elevato di utenti o con requisiti di sicurezza elevati.

Seguire le nostre guide passo passo per integrare il proprio provider di identità:

- [Configurare la federazione con Azure AD | Documentazione Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Configurare la federazione con ADFS | Documentazione Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Attivare l'autenticazione multifattore (MFA)

L'autenticazione multifattore (MFA) rafforza significativamente la sicurezza dell'accesso alla Console Cloud Temple. Aggiunge un passaggio di autenticazione richiedendo un codice temporaneo generato da un'applicazione dedicata, in aggiunta alla password. Questa misura limita fortemente i rischi di accesso non autorizzato, anche in caso di furto delle credenziali.

Per gli account gestiti localmente dalla Console (senza federazione), il MFA è attivato di default e non può essere disattivato.

**Per gli account federati, è fortemente raccomandato richiedere il MFA lato provider di identità**, in particolare per gli amministratori con accesso alla Console.

Per saperne di più:

- [Cos'è il MFA ed è obbligatorio? | Documentazione Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#cosè-il-mfa-ed-è-obbligatorio)
- [Tutorial: Federazione di identità con Microsoft EntraID | Documentazione Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Tutorial: Federazione di identità con Microsoft ADFS | Documentazione Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Accedere alla Console da dispositivi sicuri

Il dispositivo e l'ambiente da cui si accede alla Console sono importanti per proteggere l'amministrazione dei propri servizi cloud. Se si opera in un ambiente con requisiti di sicurezza elevati, è possibile applicare le seguenti raccomandazioni:

- Per l'amministrazione da parte dei propri team, applicare tutto o parte delle [Raccomandazioni relative all'amministrazione sicura dei SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si);
- In caso di amministrazione da parte di un terzo, valutare l'opportunità di fare ricorso a un [Fornitore di amministrazione e manutenzione sicure (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), in base alla sensibilità delle risorse ospitate e al proprio contesto legale e regolamentare.

### Sensibilizzare gli amministratori al rischio di phishing

Gli accessi alla Console Cloud Temple devono essere oggetto di una vigilanza rafforzata, in particolare di fronte ai tentativi di phishing volti a sottrarre credenziali o codici MFA. È cruciale che gli utenti abilitati siano regolarmente sensibilizzati a questi rischi: verifica sistematica dell'URL, prudenza di fronte a messaggi inaspettati e segnalazione immediata di qualsiasi attività sospetta.

Per limitare questi rischi, si raccomanda di non accedere mai alla Console tramite un link ricevuto via e-mail, ma sempre digitando manualmente l'URL abituale.

Queste best practice rientrano nella vostra responsabilità in quanto cliente e sono essenziali per prevenire gli attacchi di phishing. In caso di dubbio, il supporto Cloud Temple resta a disposizione.

## Gestione dei servizi cloud

Le risorse Cloud sono gestite dalla Console. Questo capitolo presenta raccomandazioni essenziali per controllare l'uso dei servizi cloud.

### Identificare i proprietari del tenant

Il proprietario del tenant detiene tutti i permessi relativi ai prodotti attivati e riceve le notifiche ufficiali. È cruciale assicurarsi che i proprietari del proprio tenant siano i interlocutori adeguati all'interno dell'organizzazione.

Per una gestione sicura ed efficiente:

- **Identificare un proprietario responsabile**, di preferenza una persona direttamente coinvolta nella gestione dell'ambiente.
- **Verificare l'indirizzo e-mail di contatto** del proprietario per assicurarsi che sia valido e regolarmente consultato.
- **Garantire un controllo diretto**, aggiungendo un proprietario membro della propria organizzazione, anche se si affida la gestione del proprio servizio cloud, al fine di poter supervisionare le notifiche e le decisioni importanti.
- **Limitare il numero di proprietari** a 3 per ridurre la superficie di esposizione e facilitare l'audit delle azioni critiche.

Per saperne di più sulla gestione dei proprietari del tenant, consultare la [Guida dei proprietari su un tenant | Documentazione Cloud Temple](../../console/iam/concepts#gestione-dei-proprietari-su-un-tenant).

### Gestire i permessi sui propri servizi cloud

La Console Cloud Temple consente una gestione granulare degli accessi attribuendo a ciascun utente uno o più livelli di permesso, che determinano precisamente le azioni autorizzate. Consultare la documentazione dei permessi ([Permessi disponibili per gli utenti della propria organizzazione | Documentazione Cloud Temple](../../console/iam/concepts#permissions-disponibili-per-gli-utenti-della-vostra-organizzazione)) per comprendere in dettaglio i diversi permessi e attribuirli in modo appropriato.

Per una gestione efficiente e sicura dei permessi, si raccomanda di seguire queste best practice:

- **Applicare il principio del minimo privilegio:** concedere agli utenti solo i permessi necessari alle loro mansioni. Questo riduce i rischi limitando l'accesso a funzionalità non necessarie.
- **Limitare i permessi sensibili:** Attribuire i permessi sensibili solo agli utenti responsabili di queste funzioni. I permessi sensibili riguardano in particolare la gestione degli accessi (console\_public\_access\_write, \*\_console\_access, object - storage\_write), la gestione dei permessi (iam\_write, iam\_offline\_access) e la gestione dei backup (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Privilegiare l'accesso in sola lettura:** In caso di dubbio, concedere un accesso in sola lettura (\*\_read) per minimizzare i rischi consentendo al contempo l'accesso alle informazioni necessarie.
- **Effettuare revisioni periodiche dei diritti:** Verificare regolarmente i permessi degli utenti per rimuovere quelli obsoleti. L'export dei permessi in formato CSV facilita questa gestione.**

Un'attribuzione controllata dei permessi limita i rischi di errore o di azione malevola, rafforzando al contempo la propria postura di sicurezza.

### Aggiornare regolarmente gli hypervisor

Cloud Temple fornisce regolarmente dei build per gli hypervisor al fine di garantire l'applicazione delle patch di sicurezza. Tuttavia, l'aggiornamento degli hypervisor resta di vostra responsabilità, poiché non abbiamo visibilità sui vostri vincoli operativi.

Di conseguenza, si raccomanda di:

- Controllare regolarmente nella Console la disponibilità di nuovi build per i propri hypervisor;
- **Distribuire regolarmente i nuovi build su tutti gli hypervisor**, in particolare se correggono vulnerabilità di sicurezza;
- Distribuire regolarmente sulle macchine virtuali le nuove versioni dei vmtools.

**Una pagina di allerte di sicurezza è disponibile** per informare sulle vulnerabilità note e sulle raccomandazioni associate: [Allerte di sicurezza | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).

### Monitorare l'attività sui servizi cloud

Per garantire un monitoraggio efficace del proprio ambiente cloud e reagire rapidamente in caso di anomalia, è essenziale mettere in atto una strategia di vigilanza attiva. Si raccomanda in particolare di:

- **Monitorare la disponibilità dei servizi** tramite la [Status page | Cloud Temple](https://status.cloud-temple.com/), per essere allertati in caso di incidenti o guasti globali;
- **Attivare le notifiche tematiche** pertinenti per il proprio utilizzo dalla Console, per ricevere in tempo reale le allerte importanti (vedere [Abbonamento alle notifiche tematiche | Documentazione Cloud Temple](../../console/iam/concepts#abbonamento-alle-notifiche-tematiche));
- **Sfruttare i log di attività Cloud** per identificare azioni sensibili o sospette sulle proprie risorse (vedere sezione « Logging - Tracciamento delle Attività » della [Guida di avvio | Documentazione Cloud Temple](../../iaas_vmware/quickstart)). La raccolta e l'analisi dei log di attività può essere automatizzata tramite le API Console, al fine di integrare gli eventi nei propri strumenti di supervisione o di rilevamento degli incidenti.

## Proteggere le risorse ospitate

In un modello Cloud, la sicurezza delle risorse distribuite rientra nella responsabilità dell'utente. Cloud Temple fornisce un'infrastruttura sicura, ma spetta a voi proteggere i propri sistemi operativi, i propri dati e le proprie configurazioni.

Di seguito si trovano le best practice essenziali per rafforzare la sicurezza delle proprie VM: configurazione di politiche di backup, crittografia delle risorse critiche e hardening dei sistemi operativi. Queste misure contribuiscono a limitare i rischi di compromissione, a garantire l'integrità dei dati e a assicurare la continuità operativa in caso di incidente.

### Configurare i backup

Per garantire la sicurezza e la resilienza dei propri dati, è essenziale definire e applicare correttamente le proprie politiche di backup. L'assegnazione di una politica di backup a ciascuna macchina virtuale prima del suo avvio è obbligatoria. La documentazione è disponibile nella sezione "Backup" della [Guida di avvio | Documentazione Cloud Temple](../../iaas_vmware/quickstart).

Ecco le raccomandazioni in materia di gestione delle politiche di backup delle proprie risorse Cloud Temple:

- **Definire le proprie politiche di backup:** Richiedere al supporto la creazione delle politiche di backup adeguate alle esigenze della propria organizzazione in materia di sicurezza.
- **Evitare le politiche sospese:** Non lasciare alcuna VM associata a una politica di backup sospesa per evitare di compromettere la sicurezza dei dati.
- **Effettuare test di ripristino:** Testare regolarmente il ripristino dei propri backup per verificare l'efficacia delle proprie procedure di ripristino.

### Cifrare le VM sensibili

In aggiunta alla crittografia dei dati a livello dei dischi, nativa per tutte le risorse cloud, **la crittografia delle VM può essere attivata per proteggere le risorse più sensibili**. Per questo, consultare [Cifrare una macchina virtuale VMware | Documentazione Cloud Temple](../../iaas_vmware/tutorials/vm_encryption).

Ecco alcune best practice in caso di utilizzo della crittografia delle VM:

- Attivare la crittografia sulle VM sensibili: Applicarla fin dalla creazione della macchina o durante un aggiornamento pianificato. L'operazione richiede l'arresto temporaneo della VM;
- Verificare lo stato di crittografia: Controllare dalla console che la VM mostri correttamente lo stato "crittografata";
- Effettuare un backup prima della crittografia: Assicurarsi che la VM sia correttamente salvata prima di qualsiasi modifica.

### Limitare l'esposizione delle proprie risorse

Per limitare la superficie di attacco delle proprie macchine virtuali, è fortemente raccomandato limitare al minimo indispensabile i servizi esposti. In particolare, si raccomanda di configurare le proprie risorse in modo da **non esporre pubblicamente le interfacce di amministrazione e le console** dei sistemi e delle applicazioni distribuite.

Se si utilizzano i servizi di Object Storage di Cloud Temple, è inoltre consigliabile **non configurare i propri bucket in accesso pubblico**, salvo nei casi in cui ciò sia strettamente necessario (vedere [Limitazione degli accessi ai propri bucket S3 | Documentazione Cloud Temple](../../storage/oss/quickstart#gestione-delle-politiche-di-accesso)).

### Indurire le macchine virtuali (servizi IaaS)

L'hosting di una macchina virtuale su un cloud sicuro non garantisce, di per sé, la sicurezza del sistema operativo, dei servizi o delle applicazioni che essa esegue. L'indurimento delle VM, che siano deployate da voi o provenienti dal catalogo, è di vostra responsabilità.

Vi raccomandiamo di **applicare le misure di sicurezza di base**

- Mantenere i sistemi aggiornati con le patch di sicurezza ;
- Limitare i servizi esposti ;
- Disattivare i componenti inutili ;
- Restringere i diritti di accesso al minimo indispensabile ;
- Attivare la registrazione degli accessi ;
- Configurare backup regolari.

Per guidarvi in queste azioni, fate riferimento a :

- I guide di indurimento degli editori dei software che utilizzate ;
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer) ;
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Queste best practice costituiscono la prima linea di difesa per proteggere i vostri sistemi nel cloud.

### Indurire i container (servizi PaaS)

Per garantire la sicurezza dei vostri container nel contesto del servizio PaaS OpenShift, vi raccomandiamo di implementare le seguenti misure per rafforzare il loro indurimento :

- **Origine delle immagini** : Assicuratevi che tutte le immagini provengano da fonti affidabili, come registri interni o il Red Hat Container Catalog, ed evitate l'uso di immagini community non verificate, come quelle disponibili su Docker Hub pubblico.
- **Restrizione dei privilegi** : Limitate i privilegi dei container utilizzando le funzionalità di OpenShift, in particolare le *Security Context Constraints* (SCC), al fine di restringere i permessi al minimo indispensabile.
- **Configurazione delle SCC** : Create SCC personalizzati per ogni applicazione o gruppo di applicazioni. Ciò include la restrizione delle chiamate di sistema autorizzate (par exemple, via *seccomp profiles*), con configurazioni specifiche come il divieto di *ptrace* o *mount* per ridurre i rischi di evasione dei container.
- **Isolamento dei carichi di lavoro** : Utilizzate i *Namespaces* e le *Network Policies* per isolare le applicazioni e limitare le interazioni non necessarie tra i container.
- **Logging completo** : Attivate il logging tramite l'operatore OpenShift Logging per catturare gli eventi associati ai container e ai sistemi ospitati, al fine di rilevare e analizzare meglio qualsiasi attività sospetta.

## Per approfondire

Se desiderate usufruire di servizi di sicurezza complementari o di un supporto rafforzato su aspetti di sicurezza (audit, durcissement, conformité, conseil, etc.), i nostri **Professional Services** possono essere richiesti. Per ulteriori informazioni, rivolgetevi al vostro referente Cloud Temple.
