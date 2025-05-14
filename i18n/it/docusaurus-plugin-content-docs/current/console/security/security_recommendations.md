---
title: Buone Pratiche
---

## Raccomandazioni per l'utilizzo sicuro dei servizi Cloud Temple

I servizi Cloud Temple offrono un'infrastruttura cloud altamente sicura per progettazione. Tuttavia, alcune buone pratiche di sicurezza sono di vostra responsabilità come utenti di questi servizi. Questa guida vi aiuta a rafforzare la sicurezza del vostro ambiente cloud sfruttando le funzionalità offerte nella Console.

Troverete raccomandazioni concrete per:

- Proteggere l'accesso alla Console cloud;
- Gestire gli accessi e le autorizzazioni in modo controllato;
- Proteggere le risorse implementate attraverso i nostri servizi cloud.

## Accesso alla Console

L'accesso alla Console è la porta d'ingresso a tutti i vostri servizi Cloud Temple. È quindi essenziale proteggerla efficacemente.

### Limitare l'accesso alla Console tramite filtraggio IP

L'accesso alla console di gestione cloud è limitato agli indirizzi IP precedentemente autorizzati. Questa restrizione consente l'accesso solo agli utenti provenienti dagli intervalli IP specificati, riducendo così i rischi di accessi non autorizzati.

Potete configurare queste restrizioni IP nelle impostazioni della vostra organizzazione. Per sapere come configurare il filtraggio IP, consultate la [Gestione degli accessi e autenticazione | Documentazione Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestion-des-acc%C3%A8s-et-authentification).

Per massimizzare l'efficacia di questo meccanismo, assicuratevi di:

- **Limitare il numero di indirizzi IP autorizzati** allo stretto necessario;
- Evitare intervalli troppo ampi o generici;
- Aggiungere **solo IP provenienti da ambienti controllati** (es: IP in uscita della vostra rete aziendale);
- Vietare, o limitare al massimo, gli indirizzi IP individuali (es: IP pubblico del domicilio del vostro personale IT);
- Vietare, o limitare, gli indirizzi IP di terze parti (es: fornitore di servizi);
- Mantenere questo elenco aggiornato in caso di evoluzione della vostra infrastruttura di rete.

Per gli accessi remoti (telelavoro, fornitori di servizi, ecc.), privilegiate il passaggio attraverso la vostra rete aziendale via VPN piuttosto che autorizzare direttamente indirizzi IP individuali. Ciò riduce la superficie di esposizione della Console e centralizza la gestione degli accessi all'interno della vostra organizzazione.

### Utilizzare la federazione di identità

La federazione di identità permette di integrare la Console Cloud Temple con il vostro provider di identità (IdP), attivando il SSO. Questo approccio centralizza l'autenticazione e offre diversi vantaggi:

- Gestione unificata degli account: creazione, modifica e cancellazione tramite la vostra directory;
- Riduzione della superficie di attacco: gli account locali diventano inutili o limitati;
- Maggiore tracciabilità: gli accessi sono registrati dal vostro IdP;
- Integrazione rafforzata: MFA, alerting, politiche di sicurezza contestuali, ecc.;
- Conformità facilitata: coerenza con le vostre pratiche interne.

Per questi motivi, **la federazione di identità è raccomandata**, in particolare per ambienti con un ampio personale o con elevati requisiti di sicurezza.

Seguite le nostre guide passo-passo per integrare il vostro provider di identità:
- [Configurare la federazione con Azure AD | Documentazione Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Configurare la federazione con ADFS | Documentazione Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Attivare l'autenticazione a più fattori (MFA)

L'autenticazione a più fattori (MFA) rafforza significativamente la sicurezza dell'accesso alla Console Cloud Temple. Aggiunge una fase di autenticazione richiedendo un codice temporaneo generato da un'applicazione dedicata, in aggiunta alla password. Questa misura limita fortemente i rischi di accesso non autorizzato, anche in caso di furto delle credenziali.

Per gli account gestiti localmente dalla Console (senza federazione), l'MFA è attivato per impostazione predefinita e non può essere disattivato.

**Per gli account federati, è fortemente raccomandato richiedere l'MFA lato provider di identità**, in particolare per gli amministratori con accesso alla Console.

Per saperne di più:

- [Cos'è l'MFA ed è obbligatorio? | Documentazione Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutorial: Federazione di identità con Microsoft EntraID | Documentazione Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Tutorial: Federazione di identità con Microsoft ADFS | Documentazione Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Accedere alla Console da dispositivi sicuri

La postazione e l'ambiente da cui accedete alla Console sono importanti per proteggere l'amministrazione dei vostri servizi cloud. Se operate in un ambiente con elevati requisiti di sicurezza, potete applicare le seguenti raccomandazioni:

- Per l'amministrazione da parte dei vostri team, applicare tutte o parte delle [Raccomandazioni relative all'amministrazione sicura dei SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si);
- In caso di amministrazione da parte di terzi, valutare l'opportunità di ricorrere a un [Fornitore di amministrazione e manutenzione sicura (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), a seconda della sensibilità delle risorse ospitate e del vostro contesto legale e normativo.

### Sensibilizzare gli amministratori al rischio di phishing

Gli accessi alla Console Cloud Temple devono essere oggetto di una vigilanza rafforzata, in particolare contro i tentativi di phishing volti a rubare credenziali o codici MFA. È cruciale che gli utenti autorizzati siano regolarmente sensibilizzati a questi rischi: verifica sistematica dell'URL, prudenza di fronte a messaggi inaspettati e segnalazione immediata di qualsiasi attività sospetta.

Per limitare questi rischi, raccomandiamo di non accedere mai alla Console tramite un link ricevuto via email, ma sempre digitando manualmente l'URL abituale.

Queste buone pratiche sono di vostra responsabilità come cliente e sono essenziali per prevenire attacchi di phishing. In caso di dubbio, il supporto Cloud Temple rimane a vostra disposizione.

## Gestione dei servizi cloud

Le vostre risorse Cloud sono gestite dalla Console. Questo capitolo presenta raccomandazioni essenziali per controllare l'utilizzo dei servizi cloud.

### Identificare i proprietari del tenant

Il proprietario del tenant detiene tutte le autorizzazioni relative ai prodotti attivati e riceve le notifiche ufficiali. È cruciale assicurarsi che i proprietari del vostro tenant siano gli interlocutori adatti all'interno della vostra organizzazione.

Per una gestione sicura ed efficace:

- **Identificate un proprietario responsabile**, preferibilmente una persona direttamente coinvolta nella gestione dell'ambiente.
- **Verificate l'indirizzo email di contatto** del proprietario per assicurarvi che sia valido e regolarmente consultato.
- **Assicurate un controllo diretto**, aggiungendo un proprietario membro della vostra organizzazione, anche se affidate la gestione del vostro servizio cloud, al fine di poter supervisionare le notifiche e le decisioni importanti.
- **Limitate il numero di proprietari** a 3 per ridurre la superficie di esposizione e facilitare l'audit delle azioni critiche.

Per saperne di più sulla gestione dei proprietari di tenant, consultate la [Guida dei proprietari su un tenant | Documentazione Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Gestire le autorizzazioni sui vostri servizi cloud

La Console Cloud Temple permette una gestione granulare degli accessi assegnando a ciascun utente uno o più livelli di autorizzazione, che determinano precisamente le azioni autorizzate. Consultate la documentazione delle autorizzazioni ([Autorizzazioni disponibili per gli utenti della vostra organizzazione | Documentazione Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)) per comprendere in dettaglio le diverse autorizzazioni e assegnarle in modo appropriato.

Per una gestione efficace e sicura delle autorizzazioni, vi raccomandiamo di seguire queste migliori pratiche:

- **Applicare il principio del minimo privilegio:** concedete agli utenti solo le autorizzazioni necessarie alle loro missioni. Ciò riduce i rischi limitando l'accesso a funzionalità non necessarie.
- **Limitate le autorizzazioni sensibili:** Assegnate le autorizzazioni sensibili solo agli utenti responsabili di queste funzioni. Le autorizzazioni sensibili riguardano in particolare la gestione degli accessi (console\_public\_access\_write, \*\_console\_access, object - storage\_write), la gestione delle autorizzazioni (iam\_write, iam\_offline\_access) e la gestione dei backup (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Privilegiate l'accesso in sola lettura:** In caso di dubbio, date un accesso in sola lettura (\*\_read) per minimizzare i rischi permettendo allo stesso tempo l'accesso alle informazioni necessarie.
- **Effettuate revisioni regolari dei diritti:** Verificate regolarmente le autorizzazioni degli utenti per rimuovere quelle obsolete. L'esportazione delle autorizzazioni in formato CSV facilita questa gestione.**

Un'attribuzione controllata delle autorizzazioni limita i rischi di errore o azione malevola, rafforzando allo stesso tempo la vostra postura di sicurezza.

### Aggiornare regolarmente gli hypervisor

Cloud Temple fornisce regolarmente build per gli hypervisor al fine di garantire l'applicazione delle patch di sicurezza. Tuttavia, l'aggiornamento degli hypervisor rimane sotto la vostra responsabilità, poiché non abbiamo visibilità sui vostri vincoli aziendali.

Pertanto, vi raccomandiamo di:

- Controllare regolarmente nella Console la disponibilità di nuove build per i vostri hypervisor;
- **Implementare regolarmente le nuove build su tutti i vostri hypervisor**, in particolare se correggono vulnerabilità di sicurezza;
- Implementare regolarmente sulle vostre macchine virtuali le nuove versioni dei vmtools.

Una pagina di informazioni sulla sicurezza disponibile nella Console permette di identificare le vulnerabilità note e le raccomandazioni associate (build da implementare, ecc.).

### Monitorare l'attività sui servizi cloud

Per garantire un monitoraggio efficace del vostro ambiente cloud e reagire rapidamente in caso di anomalia, è essenziale implementare una strategia di vigilanza attiva. Vi raccomandiamo in particolare di:

- **Monitorare la disponibilità dei servizi** tramite la [Status page | Cloud Temple](https://status.cloud-temple.com/), per essere avvisati in caso di incidenti o interruzioni globali;
- **Attivare le notifiche tematiche** pertinenti per il vostro utilizzo dalla Console, per ricevere in tempo reale gli avvisi importanti (vedere [Abbonamento alle notifiche tematiche | Documentazione Cloud Temple](../../console/iam/concepts#abonnement-aux-notifications-th%C3%A9matiques));
- **Sfruttare i log di attività Cloud** per identificare azioni sensibili o sospette sulle vostre risorse (vedere sezione "Logging - Monitoraggio delle Attività" della [Guida introduttiva | Documentazione Cloud Temple](../../iaas_vmware/quickstart)). La raccolta e l'analisi dei log di attività può essere automatizzata tramite le API Console, al fine di integrare gli eventi nei vostri strumenti di supervisione o rilevamento degli incidenti.

## Proteggere le risorse ospitate

In un modello Cloud, la sicurezza delle risorse implementate è responsabilità dell'utente. Cloud Temple fornisce un'infrastruttura sicura, ma spetta a voi proteggere i vostri sistemi operativi, i vostri dati e le vostre configurazioni.

Di seguito troverete le buone pratiche essenziali per rafforzare la sicurezza delle vostre VM: configurazione delle politiche di backup, crittografia delle risorse critiche e rafforzamento dei sistemi operativi. Queste misure contribuiscono a limitare i rischi di compromissione, garantire l'integrità dei dati e assicurare una continuità operativa in caso di incidente.

### Configurare i backup

Per garantire la sicurezza e la resilienza dei vostri dati, è essenziale definire e applicare correttamente le vostre politiche di backup. L'assegnazione di una politica di backup a ogni macchina virtuale prima del suo avvio è obbligatoria. La documentazione è disponibile nella sezione "Backup" della [Guida introduttiva | Documentazione Cloud Temple](../../iaas_vmware/quickstart).

Ecco le raccomandazioni in materia di gestione delle politiche di backup delle vostre risorse Cloud Temple:

- **Definite le vostre politiche di backup:** Chiedete al supporto la creazione di politiche di backup adattate alle esigenze della vostra organizzazione in materia di sicurezza.
- **Evitate le politiche sospese:** Non lasciate alcuna VM associata a una politica di backup sospesa per evitare di compromettere la sicurezza dei dati.
- **Effettuate test di ripristino:** Testate regolarmente il ripristino dei vostri backup per controllare l'efficacia delle vostre procedure di ripristino.

### Crittografare le VM sensibili

In aggiunta alla crittografia dei dati a livello di dischi, nativa per tutte le risorse cloud, **la crittografia delle VM può essere attivata per proteggere le vostre risorse più sensibili**. Per questo, consultate [Crittografare una macchina virtuale VMware | Documentazione Cloud Temple](../../iaas_vmware/tutorials/vm_encryption?_highlight=*chiff).

Ecco alcune buone pratiche in caso di utilizzo della crittografia delle VM:

- Attivare la crittografia sulle VM sensibili: Applicatela fin dalla creazione della macchina o durante un aggiornamento pianificato. L'operazione richiede l'arresto temporaneo della VM;
- Verificare lo stato di crittografia: Controllate dalla console che la VM mostri lo stato "crittografato";
- Backup prima della crittografia: Assicuratevi che la VM sia correttamente salvata prima di qualsiasi modifica.

### Limitare l'esposizione delle vostre risorse

Per limitare la superficie di attacco delle vostre macchine virtuali, è fortemente raccomandato limitare allo stretto necessario i servizi esposti. In particolare, assicuratevi di configurare le vostre risorse in modo da **non esporre pubblicamente le interfacce di amministrazione e le console** dei sistemi e delle applicazioni implementati.

Se utilizzate i servizi di Object Storage di Cloud Temple, è anche consigliato **non configurare i vostri bucket in accesso pubblico**, salvo nei casi in cui ciò sia strettamente necessario (vedere [Limitazione degli accessi ai vostri bucket S3 | Documentazione Cloud Temple](../../storage/oss/quickstart?_highlight=*bucket#limitations-des-acc%C3%A8s-%C3%A0-vos-bucket-s3)).

### Rafforzare le macchine virtuali (servizi IaaS)

L'hosting di una macchina virtuale su un cloud sicuro non garantisce, da solo, la sicurezza del sistema operativo, dei servizi o delle applicazioni che esegue. Il rafforzamento delle VM, che siano implementate da voi o provenienti dal catalogo, è di vostra responsabilità.

Vi raccomandiamo di **applicare le misure di sicurezza di base**:

- Mantenere i sistemi aggiornati con le patch di sicurezza;
- Limitare i servizi esposti;
- Disattivare i componenti inutili;
- Limitare i diritti di accesso allo stretto necessario;
- Attivare la registrazione degli accessi;
- Configurare backup regolari.

Per guidarvi in queste azioni, fate riferimento a:

- Le guide di rafforzamento degli editori dei software che utilizzate;
- [Guide essenziali e buone pratiche di cybersicurezza | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [Guide di sicurezza CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Queste buone pratiche costituiscono la prima linea di difesa per proteggere i vostri sistemi nel cloud.

### Rafforzare i container (servizi PaaS)

Per garantire la sicurezza dei vostri container nel quadro del servizio PaaS OpenShift, vi raccomandiamo di implementare le seguenti misure per rafforzare il loro indurimento:

- **Fonte delle immagini**: Assicuratevi che tutte le immagini provengano da fonti affidabili, come registry interni o il Red Hat Container Catalog, ed evitate l'utilizzo di immagini comunitarie non verificate, come quelle disponibili su Docker Hub pubblico.
- **Restrizione dei privilegi**: Limitate i privilegi dei container utilizzando le funzionalità di OpenShift, in particolare le *Security Context Constraints* (SCC), per limitare i permessi allo stretto necessario.
- **Configurazione delle SCC**: Create SCC personalizzate per ogni applicazione o gruppo di applicazioni. Ciò include la restrizione delle chiamate di sistema autorizzate (ad esempio, tramite *seccomp profiles*), con configurazioni specifiche come il divieto di *ptrace* o *mount* per ridurre i rischi di evasione dei container.
- **Isolamento dei carichi di lavoro**: Utilizzate i *Namespaces* e le *Network Policies* per isolare le applicazioni e limitare le interazioni non necessarie tra i container.
- **Logging completo**: Attivate il logging tramite l'operatore OpenShift Logging per catturare gli eventi associati ai container e ai sistemi ospitati, al fine di rilevare e analizzare meglio qualsiasi attività sospetta.

## Per andare oltre

Se desiderate beneficiare di servizi di sicurezza complementari o di un supporto rafforzato su aspetti di sicurezza (audit, rafforzamento, conformità, consulenza, ecc.), i nostri **Professional Services** possono essere sollecitati. Per saperne di più, contattate il vostro referente Cloud Temple.
