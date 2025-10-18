

---
title: Buone pratiche
---

*Ultima modifica: 22/05/2025*



## Raccomandazioni per l'utilizzo sicuro dei servizi Cloud Temple

I servizi Cloud Temple ti offrono un'infrastruttura cloud estremamente sicura per impostazione. Tuttavia, alcune buone pratiche di sicurezza rientrano nella tua responsabilità come utente di questi servizi. Questo documento ti aiuta a rafforzare la sicurezza del tuo ambiente cloud sfruttando le funzionalità offerte nella Console.

Vi troverai raccomandazioni concrete per:

- Proteggere l'accesso alla Console cloud;
- Gestire gli accessi e le autorizzazioni in modo controllato;
- Proteggere le risorse distribuite tramite i nostri servizi cloud.



## Accesso alla Console

L'accesso alla Console è la porta d'ingresso verso tutti i vostri servizi Cloud Temple. È quindi essenziale proteggerla in modo efficace.



### Limitare l'accesso alla Console tramite filtro IP

L'accesso alla console di gestione cloud è limitato alle indirizzi IP precedentemente autorizzati. Questa restrizione consente di autorizzare l'accesso solo agli utenti provenienti dalle aree IP specifiche, riducendo così i rischi di accessi non autorizzati.

È possibile configurare queste restrizioni IP nei parametri della vostra organizzazione. Per sapere come configurare il filtro IP, consultate la [Gestione degli accessi e autenticazione | Documentazione Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestione-degli-accessi-e-autenticazione).

Per massimizzare l'efficacia di questo meccanismo, assicuratevi di:

- **Limitare il numero di indirizzi IP autorizzati** al minimo indispensabile;
- Evitare aree troppo ampie o generiche;
- Aggiungere **solo IP provenienti da ambienti controllati** (es. IP di uscita del vostro network aziendale);
- Proibire, o limitare al massimo, gli indirizzi IP individuali (es. IP pubblico della casa del personale IT);
- Proibire, o limitare, gli indirizzi IP di terze parti (es. fornitore di servizi);
- Mantenere questa lista aggiornata in caso di evoluzione della vostra infrastruttura di rete.

Per gli accessi remoti (lavoro da casa, fornitori…), preferite un passaggio attraverso il vostro network aziendale tramite VPN invece di un'autorizzazione diretta degli indirizzi IP individuali. Questo riduce la superficie di esposizione della Console e centralizza la gestione degli accessi all'interno della vostra organizzazione.



### Utilizzare l'identità federata

L'identità federata consente di integrare la Console Cloud Temple con il tuo fornitore di identità (IdP), attivando il SSO. Questo approccio centralizza l'autenticazione e offre diversi vantaggi:

- Gestione unificata degli account: creazione, modifica e cancellazione tramite il tuo directory;
- Riduzione della superficie d'attacco: gli account locali diventano inutili o limitati;
- Tracciabilità migliorata: gli accessi vengono registrati dal tuo IdP;
- Integrazione rafforzata: MFA, notifiche, politiche di sicurezza contestuali…;
- Conformità semplificata: coerenza con le tue pratiche interne.

Per questi motivi, **la federazione delle identità è raccomandata**, in particolare per ambienti con un alto numero di utenti o requisiti di sicurezza elevati.

Segui i nostri guide passo passo per integrare il tuo fornitore di identità:

- [Configurare la federazione con Azure AD | Documentazione Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Configurare la federazione con ADFS | Documentazione Cloud Temple](../../console/iam/tutorials/sso_adfs)



### Abilitare l'autenticazione a due fattori (MFA)

L'autenticazione a due fattori (MFA) rafforza significativamente la sicurezza di accesso alla Console Cloud Temple. Aggiunge un passo di autenticazione richiedendo un codice temporaneo generato da un'applicazione dedicata, in aggiunta alla password. Questa misura riduce significativamente i rischi di accesso non autorizzato, anche in caso di furto di credenziali.

Per gli account gestiti localmente dalla Console (senza federazione), il MFA è abilitato per impostazione predefinita e non può essere disattivato.

**Per gli account federati, è fortemente raccomandato richiedere il MFA dal fornitore di identità**, in particolare per gli amministratori che hanno accesso alla Console.

Per ulteriori informazioni:  

- [Cosa è il MFA e è obbligatorio? | Documentazione Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutorial: Federazione di identità con Microsoft EntraID | Documentazione Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Tutorial: Federazione di identità con Microsoft ADFS | Documentazione Cloud Temple](../../console/iam/tutorials/sso_adfs)



### Accedere alla Console da dispositivi sicuri

Il posto e l'ambiente da cui accedi alla Console sono importanti per sicurizzare l'amministrazione dei vostri servizi cloud. Se ti trovi in un ambiente con requisiti di sicurezza elevati, puoi applicare le seguenti raccomandazioni:

- Per l'amministrazione da parte delle tue squadre, applicare tutte o parte delle [Recommandations relative all'amministrazione sicura dei sistemi informativi | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si) ;
- In caso di amministrazione da parte di un terzo, valutare l'opportunità di fare riferimento a un [Prestatori di amministrazione e manutenzione sicuri (PAMS) | ANSSI](https://cyber.gouv.fr/prestatori-damministrazione-e-manutenzione-sicuri-pams), in base alla sensibilità delle risorse ospitate e al tuo contesto legale e normativo.



### Sensibilizzare gli amministratori al rischio di phishing

L'accesso alla Console Cloud Temple deve essere oggetto di una vigilanza rafforzata, in particolare di fronte ai tentativi di phishing volti a rubare credenziali o codici MFA. È fondamentale che gli utenti autorizzati siano regolarmente sensibilizzati a questi rischi: verifica sistematica dell'URL, prudenza di fronte ai messaggi inaspettati e segnalazione immediata di qualsiasi attività sospetta.

Per limitare questi rischi, raccomandiamo di non accedere mai alla Console tramite un collegamento ricevuto via e-mail, ma sempre digitando manualmente l'URL abituale.

Queste buone pratiche rientrano nella vostra responsabilità come cliente e sono essenziali per prevenire gli attacchi di phishing. In caso di dubbio, il supporto Cloud Temple è a vostra disposizione.



## Gestion des services cloud

Vos ressources Cloud sont gérées depuis la Console. Ce chapitre vous présente des recommandations essentielles pour contrôler l’exploitation des services cloud.



### Identificare i proprietari del tenant

Il proprietario del tenant detiene tutte le autorizzazioni relative ai prodotti attivati e riceve le notifiche ufficiali. È fondamentale assicurarsi che i proprietari del proprio tenant siano i contatti appropriati all'interno della propria organizzazione.

Per una gestione sicura ed efficiente:

- **Identificare un proprietario responsabile**, preferibilmente una persona direttamente coinvolta nella gestione dell'ambiente.
- **Verificare l'indirizzo email di contatto** del proprietario per assicurarsi che sia valido e regolarmente consultato.
- **Assicurare un controllo diretto**, aggiungendo un proprietario membro della propria organizzazione, anche se si delega la gestione del proprio servizio cloud, per poter monitorare le notifiche e le decisioni importanti.
- **Limitare il numero di proprietari** a 3 per ridurre la superficie di esposizione e facilitare l'audit delle azioni critiche.

Per saperne di più sulla gestione dei proprietari del tenant, consulta il [Guida dei proprietari su un tenant | Documentazione Cloud Temple](../../console/iam/concepts#gestion-des-propriétaires-sur-un-tenant).



### Gestire le autorizzazioni sui vostri servizi cloud

La Console Cloud Temple consente una gestione granulare degli accessi assegnando a ciascun utente uno o più livelli di autorizzazione, che determinano precisamente le azioni consentite. Consulta la documentazione sulle autorizzazioni ([Permessi disponibili per gli utenti della vostra organizzazione | Documentazione Cloud Temple](../../console/iam/concepts#permissions-disponibili-pour-les-utilisateurs-de-votre-organisation)) per comprendere in dettaglio le diverse autorizzazioni e assegnarle in modo appropriato.

Per una gestione efficace e sicura delle autorizzazioni, vi consigliamo di seguire queste best practice:

- **Applicare il principio del minimo privilegio:** assegnate agli utenti esclusivamente le autorizzazioni necessarie alle loro mansioni. Questo riduce i rischi limitando l'accesso alle funzionalità non necessarie.
- **Limitare le autorizzazioni sensibili:** assegnate le autorizzazioni sensibili solo agli utenti responsabili di tali funzioni. Le autorizzazioni sensibili riguardano in particolare la gestione degli accessi (console_public_access_write, *_console_access, object - storage_write), la gestione delle autorizzazioni (iam_write, iam_offline_access), e la gestione dei backup (backup_iaas_opensource_write, backup_iaas_spp_write).**
- **Preferire l'accesso in sola lettura:** in caso di dubbio, fornite un accesso in sola lettura (*_read) per minimizzare i rischi, pur permettendo l'accesso alle informazioni necessarie.
- **Eseguire revisioni regolari dei diritti:** verificate regolarmente le autorizzazioni degli utenti per rimuovere quelle obsolete. L'esportazione delle autorizzazioni in formato CSV facilita questa gestione.**

Un'assegnazione controllata delle autorizzazioni limita i rischi di errore o di azioni dannose, rafforzando contemporaneamente la vostra posizione di sicurezza.



### Aggiornare regolarmente gli hypervisor

Cloud Temple fornisce regolarmente build per gli hypervisor per garantire l'applicazione dei patch di sicurezza. Tuttavia, l'aggiornamento degli hypervisor rimane a tuo carico, poiché non abbiamo visibilità sulle tue esigenze aziendali.  

Pertanto, ti consigliamo di:

- Controllare regolarmente nella Console la disponibilità di nuovi build per i tuoi hypervisor;  
- **Distribuire regolarmente i nuovi build sull'intero insieme dei tuoi hypervisor**, in particolare se correggono vulnerabilità di sicurezza;
- Distribuire regolarmente sulle tue macchine virtuali le nuove versioni dei vmtools.

**Una pagina di alerte di sicurezza è disponibile** per informarti sulle vulnerabilità note e le relative raccomandazioni: [Alerte di sicurezza | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).



### Monitorare l'attività sui servizi cloud

Per garantire una sorveglianza efficace del tuo ambiente cloud e reagire rapidamente in caso di anomalie, è essenziale implementare una strategia di monitoraggio attivo. Ti consigliamo in particolare di:

- **Monitorare la disponibilità dei servizi** tramite la [Status page | Cloud Temple](https://status.cloud-temple.com/), per essere avvisato in caso di incidenti o interruzioni globali;
- **Abilitare le notifiche tematiche** rilevanti per il tuo utilizzo dalla Console, per ricevere in tempo reale le importanti notifiche (vedi [Abbonamento alle notifiche tematiche | Documentazione Cloud Temple](../../console/iam/concepts#abbonamento-alle-notifiche-tematiche));
- **Utilizzare i log Cloud** per identificare le azioni sensibili o sospette sulle tue risorse (vedi sezione « Logging - Tracciamento delle attività » del [Guida di avvio | Documentazione Cloud Temple](../../iaas_vmware/quickstart)). La raccolta e l'analisi dei log può essere automatizzata tramite le API Console, per integrare gli eventi nei tuoi strumenti di monitoraggio o di rilevamento incidenti.



## Proteggere le risorse ospitate

Nel modello Cloud, la sicurezza delle risorse distribuite è responsabilità dell'utente. Cloud Temple fornisce un'infrastruttura sicura, ma spetta a te proteggere i tuoi sistemi operativi, i tuoi dati e le tue configurazioni.

Di seguito troverai le buone pratiche essenziali per rafforzare la sicurezza delle tue VM: configurazione di politiche di backup, crittografia delle risorse critiche e rafforzamento dei sistemi operativi. Queste misure contribuiscono a limitare i rischi di compromissione, a garantire l'integrità dei dati e a garantire la continuità operativa in caso di incidente.



### Configurare le backup

Per garantire la sicurezza e la resilienza dei propri dati, è essenziale definire e applicare correttamente le proprie politiche di backup. L'assegnazione di una politica di backup a ogni macchina virtuale prima del suo avvio è obbligatorio. La documentazione è disponibile nella sezione "Backup" del [Guida di avvio | Documentazione Cloud Temple](../../iaas_vmware/quickstart).

Ecco le raccomandazioni per la gestione delle politiche di backup delle proprie risorse Cloud Temple:

- **Definire le politiche di backup:** Richiedi al supporto la creazione delle politiche di backup adatte alle esigenze dell'organizzazione in termini di sicurezza.  
- **Evitare le politiche sospese:** Non lasciare alcuna VM associata a una politica di backup sospesa per evitare di compromettere la sicurezza dei dati.
- **Eseguire test di ripristino:** Testare regolarmente il ripristino dei propri backup per controllare l'efficacia delle proprie procedure di ripristino.



### Cifrare le VM sensibili

In aggiunta alla crittografia dei dati a livello di dischi, nativi per tutte le risorse cloud, **la crittografia delle VM può essere attivata per proteggere le tue risorse più sensibili**. Per farlo, consulta [Cifrare una macchina virtuale VMware | Documentazione Cloud Temple](../../iaas_vmware/tutorials/vm_encryption).

Ecco alcune buone pratiche in caso di utilizzo della crittografia delle VM:

- Attivare la crittografia sulle VM sensibili: applicarla fin dalla creazione della macchina o durante un aggiornamento pianificato. L'operazione richiede l'arresto temporaneo della VM;
- Verificare lo stato di crittografia: controllate dalla console che la VM mostri effettivamente lo stato "cifrata";
- Eseguire un backup prima della crittografia: assicuratevi che la VM sia correttamente salvata prima di qualsiasi modifica.



### Limitare l'esposizione delle tue risorse

Per limitare la superficie di attacco delle tue macchine virtuali, è fortemente consigliato limitare al minimo indispensabile i servizi esposti. In particolare, assicurati di configurare le tue risorse in modo da **non esporre pubblicamente le interfacce di amministrazione e console** dei sistemi e applicazioni distribuiti.

Se utilizzi i servizi di Archiviazione Oggetti di Cloud Temple, è inoltre consigliato **non configurare i tuoi bucket con accesso pubblico**, tranne nei casi in cui sia strettamente necessario (vedi [Limitation des accès à vos buckets S3 | Documentation Cloud Temple](../../storage/oss/quickstart#gestion-des-politiques-daccès)).



### Rafforzare le macchine virtuali (servizi IaaS)

L'hosting di una macchina virtuale su un cloud sicuro non garantisce, da solo, la sicurezza del sistema operativo, dei servizi o delle applicazioni che esegue. Il rafforzamento delle VM, sia che siano distribuite da voi o provenienti dal catalogo, è responsabilità vostra.

Vi consigliamo di **applicare le misure di sicurezza di base**

- Mantenere i sistemi aggiornati con gli aggiornamenti di sicurezza;
- Limitare i servizi esposti;
- Disattivare i componenti non necessari;  
- Ristringere i diritti di accesso al minimo necessario;
- Attivare la registrazione degli accessi;
- Configurare backup regolari.

Per guidarvi in queste azioni, fate riferimento a:

- I guide di rafforzamento degli editor dei software che utilizzate;
- [Guide essenziali e buone pratiche di cybersecurity | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer) ;
- [Guide sicurezza CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Queste buone pratiche costituiscono la prima linea di difesa per sicurizzare i vostri sistemi nel cloud.



### Rafforzare i container (servizi PaaS)

Per garantire la sicurezza dei propri container nel contesto del servizio PaaS OpenShift, vi consigliamo di implementare le seguenti misure per rafforzare il loro hardening:

- **Fonte delle immagini** : Assicuratevi che tutte le immagini provengano da fonti affidabili, come registri interni o il Red Hat Container Catalog, e evitate l'uso di immagini comunitarie non verificate, come quelle disponibili su Docker Hub pubblico.
- **Limitazione dei privilegi** : Limitate i privilegi dei container utilizzando le funzionalità di OpenShift, tra cui i *Security Context Constraints* (SCC), per limitare le autorizzazioni al minimo necessario.
- **Configurazione dei SCC** : Crea SCC personalizzati per ogni applicazione o gruppo di applicazioni. Questo include la limitazione degli chiamate al sistema autorizzate (ad esempio, tramite *seccomp profiles*), con configurazioni specifiche come l'interdizione di *ptrace* o *mount* per ridurre i rischi di fuga dai container.
- **Isolamento dei carichi di lavoro** : Utilizza i *Namespaces* e le *Network Policies* per isolare le applicazioni e limitare le interazioni non necessarie tra i container.
- **Log completo** : Attiva la registrazione tramite l'operatore OpenShift Logging per catturare gli eventi associati ai container e ai sistemi ospitati, al fine di rilevare e analizzare meglio qualsiasi attività sospetta.



## Per andare oltre

Se desideri beneficiare di servizi di sicurezza aggiuntivi o di un supporto rafforzato su aspetti di sicurezza (audit, rafforzamento, conformità, consiglio, ecc.), i nostri **Professional Services** possono essere richiesti. Per ulteriori informazioni, contatta il tuo punto di contatto Cloud Temple.