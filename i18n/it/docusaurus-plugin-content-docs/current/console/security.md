---
title: Raccomandazioni di sicurezza
---

## Raccomandazioni per l’utilizzo sicuro dei servizi Cloud Temple

I servizi Cloud Temple offrono un'infrastruttura cloud altamente sicura per design. Tuttavia, alcune buone pratiche di sicurezza sono sotto la vostra responsabilità in quanto utenti di questi servizi. Questa guida vi aiuta a rafforzare la sicurezza del vostro ambiente cloud sfruttando le funzionalità offerte dalla Console.

Troverete raccomandazioni concrete per:

- Proteggere l’accesso alla Console cloud;
- Gestire gli accessi e le autorizzazioni in modo controllato;
- Mettere in sicurezza le risorse implementate attraverso i nostri servizi cloud.

## Accesso alla Console

L’accesso alla Console è la porta d’ingresso a tutti i vostri servizi Cloud Temple. È quindi essenziale proteggerlo efficacemente.  

### Limitare l'accesso alla Console tramite filtraggio IP

L’accesso alla console di gestione cloud è limitato agli indirizzi IP preventivamente autorizzati. Questa restrizione consente di autorizzare l’accesso solo agli utenti provenienti dagli intervalli IP specificati, minimizzando così i rischi di accessi non autorizzati.

È possibile configurare queste restrizioni IP nei parametri della propria organizzazione. Per sapere come configurare il filtraggio IP, consultare la [Gestion des accès et authentification | Documentation Cloud Temple](../console/iam/quickstart?_highlight=*facteur#gestion-des-acc%C3%A8s-et-authentification).

Per massimizzare l’efficacia di questo meccanismo, assicuratevi di:

- **Limitare il numero di indirizzi IP autorizzati** allo stretto necessario;
- Evitare intervalli troppo ampi o generici;
- Aggiungere **soltanto indirizzi IP provenienti da ambienti controllati** (es: IP di uscita della vostra rete aziendale);
- Vietare, o limitare al massimo, gli indirizzi IP individuali (es: IP pubblica da casa del vostro personale IT);
- Vietare, o limitare, gli indirizzi IP di terze parti (es: fornitori di servizi);
- Mantenere aggiornata questa lista in caso di modifiche alla vostra infrastruttura di rete.

Per gli accessi da remoto (telelavoro, fornitori...), privilegiate un passaggio attraverso la vostra rete aziendale tramite VPN piuttosto che autorizzare direttamente indirizzi IP individuali. Questo riduce la superficie di esposizione della Console e centralizza la gestione degli accessi all’interno dell’organizzazione.

### Utilizzare la federazione d’identità

La federazione d’identità consente di integrare la Console Cloud Temple con il vostro fornitore d’identità (IdP), attivando il SSO. Questo approccio centralizza l’autenticazione e offre numerosi vantaggi:

- Gestione unificata degli account: creazione, modifica e cancellazione tramite il vostro directory;
- Riduzione della superficie di attacco: gli account locali diventano inutili o limitati;
- Maggiore tracciabilità: gli accessi sono registrati dal vostro IdP;
- Integrazione potenziata: MFA, allerta, politiche di sicurezza contestuali…;
- Maggiore conformità: coerenza con le vostre pratiche interne.

Per queste ragioni, **la federazione d’identità è raccomandata**, in particolare negli ambienti con molti utenti o con requisiti di sicurezza elevati.

Seguite le nostre guide passo dopo passo per integrare il vostro fornitore d’identità:
- [Configurer la fédération avec Azure AD | Documentation Cloud Temple](../console/iam/tutorials/sso_aad)
- [Configurer la fédération avec ADFS | Documentation Cloud Temple](../console/iam/tutorials/sso_adfs)

### Attivare l’autenticazione multifattore (MFA)

L’autenticazione multifattore (MFA) rafforza significativamente la sicurezza d’accesso alla Console Cloud Temple. Aggiunge un passaggio di verifica richiedendo un codice temporaneo generato da un’applicazione dedicata, oltre alla password. Questa misura riduce notevolmente il rischio di accesso non autorizzato, anche in caso di furto delle credenziali.

Per gli account gestiti localmente dalla Console (senza federazione), la MFA è attivata per default e non può essere disattivata.

**Per gli account federati, è fortemente raccomandato richiedere la MFA lato fornitore d’identità**, in particolare per gli amministratori con accesso alla Console.

Per maggiori informazioni:

- [Qu’est-ce que le MFA et est-il obligatoire ? | Documentation Cloud Temple](../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutoriel : Fédération d'identité avec Microsoft EntraID | Documentation Cloud Temple](../console/iam/tutorials/sso_aad)
- [Tutoriel : Fédération d'identité avec Microsoft ADFS | Documentation Cloud Temple](../console/iam/tutorials/sso_adfs)

### Accedere alla Console da dispositivi sicuri

Il terminale e l’ambiente da cui accedete alla Console sono importanti per garantire la sicurezza dell’amministrazione dei vostri servizi cloud. Se operate in un contesto con requisiti di sicurezza elevati, potete applicare le seguenti raccomandazioni:

- Per l’amministrazione da parte dei vostri team interni, applicate in tutto o in parte le [Recommandations relatives à l'administration sécurisée des SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si);
- In caso di amministrazione da parte di terzi, valutare l’opportunità di rivolgersi a un [Prestataires d’administration et de maintenance sécurisées (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), secondo la sensibilità delle risorse ospitate e il vostro contesto legale e normativo.

### Sensibilizzare gli amministratori al rischio di phishing

Gli accessi alla Console Cloud Temple devono essere oggetto di particolare attenzione, specialmente nei confronti dei tentativi di phishing volti a rubare credenziali o codici MFA. È fondamentale che gli utenti autorizzati siano regolarmente sensibilizzati a questi rischi: verifica sistematica dell’URL, prudenza verso i messaggi inattesi e segnalazione immediata di ogni attività sospetta.

Per limitare tali rischi, raccomandiamo di non accedere mai alla Console tramite un link ricevuto via e-mail, ma sempre digitando manualmente l’URL abituale.

Queste buone pratiche rientrano nelle vostre responsabilità in quanto clienti e sono essenziali per prevenire gli attacchi di phishing. In caso di dubbio, il supporto Cloud Temple rimane a vostra disposizione.

## Gestione dei servizi cloud

Le vostre risorse Cloud sono gestite tramite la Console. Questo capitolo presenta alcune raccomandazioni fondamentali per controllare l’uso dei servizi cloud.

### Identificare i proprietari del tenant

Il proprietario del tenant dispone di tutte le autorizzazioni relative ai prodotti attivati e riceve le notifiche ufficiali. È fondamentale assicurarsi che i proprietari del vostro tenant siano interlocutori adeguati all’interno della vostra organizzazione.

Per una gestione sicura ed efficace:

- **Identificare un proprietario responsabile**, preferibilmente direttamente coinvolto nella gestione dell’ambiente.
- **Verificare l’indirizzo e-mail di contatto** del proprietario al fine di accertarsi che sia valido e regolarmente consultato.
- **Assicurare un controllo diretto**, aggiungendo un proprietario membro della vostra organizzazione, anche se delegate la gestione del vostro servizio cloud, per poter supervisionare notifiche e decisioni importanti.
- **Limitare il numero di proprietari** a 3, per ridurre la superficie di esposizione e facilitare l’audit delle azioni critiche.

Per maggiori informazioni sulla gestione dei proprietari del tenant, consultare il [Guide des popriétaires sur un tenant | Documentation Cloud Temple](../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Gestire le autorizzazioni sui vostri servizi cloud

La Console Cloud Temple consente una gestione granulare degli accessi assegnando a ciascun utente uno o più livelli di autorizzazione, che determinano con precisione le azioni consentite. Consultate la documentazione delle autorizzazioni ([Permissions disponibles pour les utilisateurs de votre organisation | Documentation Cloud Temple](../console/iam/concepts?_highlight=*propri%C3%A9taire#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)) per comprendere nel dettaglio le varie autorizzazioni e assegnarle in modo appropriato.

Per una gestione efficace e sicura delle autorizzazioni, vi raccomandiamo di seguire queste migliori pratiche:

- **Applicare il principio del minimo privilegio:** concedete agli utenti solo le autorizzazioni strettamente necessarie alle loro attività. Questo riduce i rischi limitando l’accesso a funzionalità non necessarie.
- **Limitare le autorizzazioni sensibili:** Assegnate le autorizzazioni sensibili solo agli utenti responsabili di tali funzioni. Le autorizzazioni sensibili includono in particolare la gestione degli accessi (console\_public\_access\_write, \*\_console\_access, object-storage\_write), la gestione delle autorizzazioni (iam\_write, iam\_offline\_access), e la gestione dei backup (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Privilegiare l’accesso in sola lettura:** In caso di dubbio, concedete un accesso in sola lettura (\*\_read) per minimizzare i rischi consentendo comunque l’accesso alle informazioni necessarie.
- **Effettuare revisioni regolari dei diritti:** Verificate periodicamente le autorizzazioni degli utenti per revocare quelle obsolete. L’esportazione delle autorizzazioni in formato CSV facilita questa gestione.**

Un’assegnazione controllata delle autorizzazioni riduce i rischi di errore o azioni malevole, rafforzando allo stesso tempo la vostra postura di sicurezza.

### Aggiornare regolarmente gli hypervisor

Cloud Temple fornisce regolarmente dei build per gli hypervisor al fine di garantire l’applicazione delle patch di sicurezza. Tuttavia, l’aggiornamento degli hypervisor resta sotto la vostra responsabilità, poiché non abbiamo visibilità sui vostri vincoli operativi.  

Di conseguenza, vi raccomandiamo di:
- Controllare regolarmente nella Console la disponibilità di nuovi build per i vostri hypervisor;  
- **Distribuire regolarmente i nuovi build su tutti i vostri hypervisor**, in particolare se correggono vulnerabilità di sicurezza;
- Distribuire regolarmente sulle vostre macchine virtuali le nuove versioni dei vmtools.

Una pagina d'informazione sulla sicurezza disponibile nella Console consente di identificare le vulnerabilità conosciute e le relative raccomandazioni (build da distribuire…).

### Monitorare l’attività sui servizi cloud

Per garantire un monitoraggio efficace del vostro ambiente cloud e reagire rapidamente in caso di anomalie, è essenziale mettere in atto una strategia di vigilanza attiva. In particolare, consigliamo di:

- **Monitorare la disponibilità dei servizi** tramite la [Status page | Cloud Temple](https://status.cloud-temple.com/), per essere avvisati in caso di incidenti o interruzioni globali;
- **Attivare le notifiche tematiche** pertinenti per il vostro utilizzo dalla Console, per ricevere in tempo reale gli avvisi importanti (vedi [Abonnement aux notifications thématiques | Documentation Cloud Temple](../console/iam/concepts#abonnement-aux-notifications-th%C3%A9matiques));
- **Sfruttare i log di attività Cloud** per identificare azioni sensibili o sospette sulle vostre risorse (vedere sezione « Journalisation - Suivi des Activités » del [Guide de démarrage | Documentation Cloud Temple](../iaas_vmware/quickstart)). La raccolta e analisi dei log di attività può essere automatizzata tramite le API Console, per integrare gli eventi nei vostri strumenti di supervisione o rilevamento degli incidenti.

## Mettere in sicurezza le risorse ospitate

In un modello Cloud, la sicurezza delle risorse distribuite è responsabilità dell’utente. Cloud Temple fornisce un’infrastruttura sicura, ma spetta a voi proteggere i vostri sistemi operativi, i dati e le configurazioni.

Di seguito sono riportate le pratiche essenziali per rafforzare la sicurezza delle vostre VM: configurazione delle policy di backup, crittografia delle risorse critiche e hardening dei sistemi operativi. Queste misure contribuiscono a limitare i rischi di compromissione, garantire l'integrità dei dati e assicurare la continuità operativa in caso di incidente.

### Configurare i backup

Per garantire la sicurezza e la resilienza dei vostri dati, è essenziale definire e applicare correttamente le vostre policy di backup. L’assegnazione di una politica di backup a ciascuna macchina virtuale prima del suo avvio è obbligatoria. La documentazione è disponibile nella sezione "Sauvegarde" del [Guide de démarrage | Documentation Cloud Temple](../iaas_vmware/quickstart).

Ecco le raccomandazioni per la gestione delle policy di backup delle vostre risorse Cloud Temple:

- **Definite le vostre policy di backup:** Richiedete al supporto la creazione di policy di backup adatte alle esigenze della vostra organizzazione in termini di sicurezza;  
- **Evitare le policy sospese:** Nessuna VM deve essere associata a una politica di backup sospesa per non compromettere la sicurezza dei dati;
- **Eseguire test di ripristino:** Testare regolarmente il ripristino dei backup per verificare l'efficacia delle vostre procedure di recovery.

### Crittografare le VM sensibili

Oltre alla crittografia dei dati a livello di disco, attiva per tutte le risorse cloud, **la crittografia delle VM può essere attivata per proteggere le vostre risorse più sensibili**. A tal fine, consultare [Chiffrer une machine virtuelle VMware | Documentation Cloud Temple](../iaas_vmware/tutorials/vm_encryption?_highlight=*chiff).

Ecco alcune buone pratiche in caso di utilizzo della crittografia delle VM:

- Attivare la crittografia sulle VM sensibili: Applicarla al momento della creazione della macchina o durante un aggiornamento pianificato. L'operazione richiede l'arresto temporaneo della VM;
- Verificare lo stato di crittografia: Controllare dalla console che la VM mostri effettivamente lo stato "crittografato";
- Effettuare un backup prima della crittografia: Assicurarsi che la VM sia correttamente sottoposta a backup prima di qualsiasi modifica.

### Limitare l’esposizione delle vostre risorse

Per ridurre al minimo la superficie d’attacco delle vostre macchine virtuali, è fortemente consigliato limitare ai soli necessari i servizi esposti. In particolare, assicuratevi di configurare le vostre risorse in modo da **non esporre pubblicamente le interfacce di amministrazione e le console** dei sistemi e delle applicazioni distribuite.

Se utilizzate il servizio Object Storage di Cloud Temple, è inoltre consigliato **non configurare i vostri bucket in accesso pubblico**, tranne nei casi in cui ciò sia strettamente necessario (vedi [Limitation des accès à vos buckets S3 | Documentation Cloud Temple](../storage/oss/quickstart?_highlight=*bucket#limitations-des-acc%C3%A8s-%C3%A0-vos-bucket-s3)).

### Rinforzare le macchine virtuali (servizi IaaS)

L’hosting di una macchina virtuale su un cloud sicuro non garantisce, di per sé, la sicurezza del sistema operativo, dei servizi o delle applicazioni che essa esegue. L’hardening delle VM, siano esse distribuite direttamente da voi o derivanti dal catalogo, è sotto la vostra responsabilità.

Vi consigliamo di **applicare le misure di sicurezza di base**:

- Mantenere i sistemi aggiornati con le patch di sicurezza;
- Limitare i servizi esposti;
- Disattivare i componenti non necessari;  
- Restringere i diritti di accesso al minimo necessario;
- Attivare la registrazione degli accessi;
- Configurare backup regolari.

Per supportarvi in queste azioni, fate riferimento a:

- Le guide di hardening fornite dai produttori del software che utilizzate;
- [Guide essenziali e buone pratiche di cybersicurezza | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [CIS Benchmarks® Security Guides | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Queste buone pratiche rappresentano la prima linea di difesa per mettere in sicurezza i vostri sistemi nel cloud.

### Rinforzare i container (servizi PaaS)

Per garantire la sicurezza dei vostri container nell’ambito del servizio PaaS OpenShift, vi consigliamo di attuare le seguenti misure per rafforzarne l’hardening:

- **Origine delle immagini**: Assicuratevi che tutte le immagini provengano da fonti affidabili, come registry interni o il Red Hat Container Catalog, ed evitate l’utilizzo di immagini comunitarie non verificate, come quelle disponibili su Docker Hub pubblico;
- **Restrizione dei privilegi**: Limitate i privilegi dei container utilizzando le funzionalità di OpenShift, in particolare le *Security Context Constraints* (SCC), per limitare i permessi al minimo necessario;
- **Configurazione delle SCC**: Create SCC personalizzate per ogni applicazione o gruppo di applicazioni. Questo include la limitazione delle system call autorizzate (ad esempio, tramite *seccomp profiles*), con configurazioni specifiche come il blocco di *ptrace* o *mount* per ridurre i rischi di escapement dei container;
- **Isolamento dei carichi di lavoro**: Usare *Namespaces* e *Network Policies* per isolare le applicazioni e limitare le interazioni non necessarie tra i container;
- **Registrazione completa**: Attivare la log collection tramite l’operatore OpenShift Logging per catturare gli eventi associati ai container e ai sistemi ospitati, al fine di rilevare ed analizzare meglio eventuali attività sospette.

## Per approfondire

Se desiderate usufruire di servizi di sicurezza aggiuntivi o di un supporto avanzato sulle questioni di sicurezza (audit, hardening, conformità, consulenza, ecc.), potete rivolgervi ai nostri **Professional Services**. Per maggiori informazioni, contattate il vostro referente Cloud Temple.