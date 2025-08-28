---
concepti
---

Importa le seguenti immagini:

- `shivaOnboard_003` da `'./images/shiva_onboard_003.png'`
- `shivaOnboard_004` da `'./images/shiva_onboard_004.png'`
- `shivaOnboard_001` da `'./images/shiva_onboard_001.png'`
- `shivaOnboard_005` da `'./images/shiva_onboard_005.png'`
- `shivaProfil_012` da `'./images/shiva_profil_012.png'`
- `shivaProfil_014` da `'./images/shiva_profil_014.png'`
- `shivaProfil_015` da `'./images/shiva_profil_015.png'`
- `shivaProfil_016` da `'./images/shiva_profil_016.png'`
- `shivaProfil_013` da `'./images/shiva_profil_013.png'`
- `shivaProfil_010` da `'./images/shiva_profil_010.png'`
- `shivaProfil_009` da `'./images/shiva_profil_009.png'`
- `shivaProfil_011` da `'./images/shiva_profil_011.png'`
- `shivaProfil_006` da `'./images/shiva_profil_006.png'`
- `shivaProfil_007` da `'./images/shiva_profil_007.png'`
- `shivaTenantRessources_01` da `'./images/shiva_tenant_ressources_01.png'`

## Utenti

Gli account di accesso alla console Shiva vengono creati dal conto principale del committente sul comando (indipendentemente dall'autenticazione di riferimento).
Le informazioni di autenticazione sono globali per la tua [Organizzazione](#organizzazioni).

*__Nota:__ [La federazione dell'identità viene gestita al livello dell'organizzazione](#meccanismi-autenticazione)*

### Creazione di un utente nell'organizzazione della tua azienda

La creazione di un account utente all'interno dell'organizzazione della tua azienda avviene tramite invito. Per invitare un utente all'interno di una [Organizzazione](#organisations), accedi al menu __'Amministrazione'__ situato alla sinistra del bordo superiore del tuo schermo, poi al sotto-menu __'Utenti'.

Fai clic sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti.

<img src={shivaOnboard_003} />

Dopo di che, inserisci l'indirizzo email dell'utente.

<img src={shivaOnboard_004} />

L'utente riceverà quindi un messaggio di conferma via email.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà accedere alla console.


### Note:
- Il formato Markdown rimane invariato per elementi HTML o Markdown strutturali come <a>, <div>, <h1> (en-têtes), liste, blocchi di codice e commenti Markdown.
- I blocchi di codice Python non vengono tradotti, tranne i commenti che iniziano con #.
- Il contenuto all'interno dei bracket [], parentesi o URL rimane invariato.
- Nessuna modifica viene apportata al formato del file Markdown originale, rispetto alle regole stabilite.

### Assignment of User Permissions

User permission management is handled from the user profile page.

![Assigning User Permissions](shivaOnboard_003)

By default, a user has no permissions. Therefore, it's essential that the administrator who invited them grants the necessary rights for their role. This can be done by clicking on the "Actions" menu of the user and selecting "Modify".

The permission assignment menu appears then:

![Permission Assignment Menu](shivaOnboard_005)

User permissions configuration is required for each [Tenant](#tenant) within an [Organization](#organizations).

The list of permissions along with their definitions can be found [here](#permissions).

### Re-registration of a User

When a user has been provisioned but fails to confirm their registration within the expiration period of the email sent by the Console, they are no longer able to finalize their registration. In such cases, it is possible to resend them a renewal link for their initial registration.

To perform a user re-registration, navigate to the "User" tab in the Administration panel, located at the bottom left of the screen.

Select the user you wish to re-register, then click on the action button at the end of the line and choose "Re-registration".

**Warning**: Ensure that you are indeed initiating this re-registration request for your own account. Please report any unauthorized requests via support ticket.

<img src={shivaProfil_012} />

### Aggiornare il proprio profilo

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo **Profilo**, in alto a destra dello schermo, poi **Impostazioni utente** e seleziona l'azione **Aggiornare il proprio profilo**.

Passa quindi alla tua casella di posta elettronica e clicca sul link generato dalla Console. Segui semplicemente le istruzioni per aggiornare il tuo profilo.

**Avviso**: Assicurati di essere a conoscenza della richiesta di aggiornamento del proprio profilo. Fai segnalare eventuali richieste non autorizzate tramite un ticket di supporto.

<img src={shivaProfil_014} />

### Ristrutturazione del password

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo **Profilo**, in alto a destra della schermata, poi **Impostazioni utente** e seleziona l'azione **Ristrutturare password**.

Passa quindi alla tua casella email e clicca sul link generato dalla Console. Segui semplicemente le istruzioni per aggiornare la tua password.

**Avviso**: Assicurati di essere a conoscenza della richiesta di ristrutturazione del tuo password. Raccomandiamo di segnalare eventuali richieste non autorizzate tramite il servizio client.

<img src={shivaProfilo_015} />

### Rinnovamento del fattore di autenticazione doppio

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo **Profilo**, in alto a destra della schermata, poi **Impostazioni utente** e seleziona l'azione **Rinnovamento MFA**.

Passa quindi alla tua casella di posta elettronica e clicca sul link generato dalla Console. Segui semplicemente le istruzioni per aggiornare il tuo fattore di autenticazione doppio.

**Avviso**: Assicurati di essere a conoscenza della richiesta di rinnovamento del tuo fattore di autenticazione doppio. Fai segnalare eventuali richieste non autorizzate tramite un ticket di supporto.

<img src={shivaProfilo_016} />

### Eliminazione di un utente

La cancellazione di un utente deve essere eseguita nell'angolo "Utenti" del pannello Amministrazione, in basso a sinistra della schermata.

Seleziona l'utente che desideri rimuovere, poi fai clic sul pulsante azione alla fine della riga e __"Rimuovi".__

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Nota: Non puoi rimuovere te stesso e non puoi rimuovere un utente __"Proprietario".__

### Disconnettersi

La disconnexion di un utente deve essere effettuata nel proprio **Profilo**, in alto a destra dello schermo, poi **Disconnetter**.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Una disconnession automatica viene eseguita durante l'esaurimento del token di sessione (JWT Token).

### Modifica la lingua di un utente

Il cambio della lingua di un utente deve essere effettuato nel **Profilo** dell'utente, situato in alto a destra dello schermo, all'interno delle **Impostazioni utente**.

<img src={shivaProfil_006} />

La configurazione è valida per ogni tenant [Tenant](#tenant).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti consente di ricevere gli email relativi ai temi attivi che verranno inviati automaticamente in caso di eventi corrispondenti.

È accessibile nel profilo utente, nella scheda "Mie abbonamenti":

<img src={shivaProfil_007} />

Ad esempio, in caso di incidente, saranno generate notifiche email specifiche per questo tema.

La lista dei temi disponibili può evolversi e arricchirsi progressivamente per adattarsi ai bisogni e ai cambiamenti nel nostro ambiente operativo.

## Permessi

La console Shiva offre una gestione estratificata dei diritti degli utenti all'interno di un'organizzazione, con una segregazione per tenuta.
Inizialmente, è il conto principale del committente che consente la configurazione iniziale dei conti e delle relative autorizzazioni.
Successivamente, il diritto `__'iam_write'__ permette a un conto amministratore di gestire le autorizzazioni degli altri utenti.

### Permessi disponibili per gli utenti della tua organizzazione

Quando viene creato un utente, non dispone di alcuna permesso predefinito. Ogni permesso è assegnato individualmente e funziona in modo esclusivo, senza sovrapposizioni con altre permessi. Appaiono insieme, il che significa che un utente deve possedere tutte le permessi necessarie per eseguire una azione specifica.

I seguenti permessi possono essere configurati per ciascun utente e ogni tenant della tua organizzazione:

- Permessi di tipo "read": consentono la consultazione delle risorse senza possibilità di modifica.
- Permessi di tipo "write": autorizzano la modifica delle configurazioni.
- Permessi di tipo "management": permettono una gestione avanzata delle risorse.
- Permessi di tipo "console_access": consentono le connessioni PMAD su risorse.
- Permessi di tipo "virtual_machine_power": autorizzano la gestione dell'alimentazione di una macchina virtuale.

**Nota**: Queste non sono ruoli, ma semplicemente permessi. Per modificare una configurazione, è necessario avere sia il permesso READ che WRITE.

Ultima modifica: 16/07/2025

| Nome della permesso                          | Descrizione del permesso                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consultazione dei registri log e attività                                                                                    |
| activity_write                                | Gestione dei registri log e attività                                                                                         |
| backup_iaas_opensource_read                   | Gestione delle risorse di tipo backup - Offerta OpenIaaS - consultazione                                                          |
| backup_iaas_opensource_write                  | Gestione delle risorse di tipo backup - Offerta OpenIaaS - modifica                                                          |
| backup_iaas_spp_read                          | Gestione delle risorse di tipo backup - Offerta Vmware - consultazione                                                            |
| backup_iaas_spp_write                         | Gestione delle risorse di tipo backup - Offerta Vmware - modifica                                                            |
| bastion_read                                  | Consultazione delle risorse di tipo bastion                                                                                    |
| bastion_write                                 | Gestione delle risorse (apparecchiature, sessioni, ecc.) di tipo Bastion                                                             |
| bastion_console_access                        | Autorizzazione all'accesso alla console (ssh/rdp) di una risorsa protetta da un'apparecchiatura Bastion                                 |
| compute_iaas_opensource_console_access        | Offerta OpenIaaS -Apertura della console di una macchina virtuale                                                                |
| compute_iaas_opensource_infrastructure_read   | Offerta OpenIaaS -Consultazione di dati avanzati delle risorse Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Offerta OpenIaaS -Gestione avanzata delle risorse Xen Orchestra                                                                          |
| compute_iaas_opensource_read                  | Offerta OpenIaaS -Consultazione delle risorse di tipo Machines Virtuelles                                                        |
| compute_iaas_opensource_management            | Offerta OpenIaaS -Gestione delle risorse di tipo Machines Virtuelles                                                             |
| compute_iaas_opensource_virtual_machine_power | Offerta OpenIaaS -Gestione dell'alimentazione di una macchina virtuale                                                              |
| compute_iaas_opensource_replication_recover   | Offerta OpenIaaS -Gestione della riproduzione                                                              |
| compute_iaas_vmware_console_access            | Offerta Vmware -Apertura della console di una macchina virtuale                                                                 |
| compute_iaas_vmware_infrastructure_read       | Offerta Vmware -Consultazione di dati avanzati delle risorse VMware (regole di affinità/antaffinità, configurazione DRS, ecc)  |
| compute_iaas_vmware_infrastructure_write      | Offerta Vmware -Gestione avanzata delle risorse VMware                                                                           |
| compute_iaas_vmware_read                      | Offerta Vmware -Consultazione delle risorse di tipo Machines Virtuelles                                                         |
| compute_iaas_vmware_management                | Offerta Vmware -Gestione delle risorse di tipo Machines Virtuelles (permette il cifratura di una macchina virtuale)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Offerta Vmware -Gestione dell'alimentazione di una macchina virtuale                                                               |
| baremetal_management                          | Offerta Bare Metal - Gestione delle risorse di tipo Bare Metal                                                               |
| baremetal_read                                | Offerta Bare Metal -Consultazione delle risorse di tipo Bare Metal                                                               |
| baremetal_console_access                      | Offerta Bare Metal -Apertura della console di un Bare Metal                                                                  |
| console_public_access_read                    | Consultazione degli IP autorizzati a accedere alla console                                                                         |
| console_public_access_write                   | Aggiunta di IP autorizzati a accedere alla console                                                                                  |
| documentation_read                            | Consultazione delle risorse documentazione di confluence                                                                        |
| housing_read                                  | Consultazione delle risorse di tipo colocation                                                                                 |
| iam_offline_access                            | Creazione e rimozione degli Access Token Personali (PAT)                                                                        |
| iam_read                                      | Consultazione dei diritti utente                                                                                           |
| iam_write                                     | Gestione dei diritti utente                                                                                                |
| intervention_read                             | Consultazione di cambiamenti e mise in produzione previste sulla piattaforma                                                  |
| inventory_read                                | Consultazione delle risorse di tipo Inventario                                                                                 |
| inventory_write                               | Gestione delle risorse di tipo Inventario                                                                                      |
| monitoring_read                               | Consultazione del monitoraggio                                                                                                     |
| monitoring_write                              | Gestione del monitoraggio                                                                                                          |
| metric_read                                   | Consultazione dei dati di salute sulle macchine virtuali e host                                                         |
| network_read                                  | Consultazione delle risorse di rete                                                                                             |
| network_write                                 | Gestione delle risorse di rete                                                                                                  |
| order_read                                    | Consultazione delle comandi infrastruttura                                                                                     |
| order_write                                   | Creazione di un comando infrastruttura                                                                                            |
| object-storage_iam_management                 | Permette la gestione dei conti di archiviazione sul prodotto S3                                                                       |
| object-storage_read                           | Permette di vedere i bucket e le configurazioni dei bucket                                                                   |
| object-storage_write                          | Permette di modificare i bucket e le configurazioni dei bucket                                                                  |
| openshift_management                          | Permette di connettersi alle piattaforme OpenShift (scopato al tenant)                                                          |
| support_management                            | consultazione dell'intero elenco dei ticket di supporto del tenant                                                                       |
| support_read                                  | Consultazione dei ticket di supporto del tenant                                                                                  |
| support_write                                 | Creazione di un ticket di supporto sul tenant                                                                                     |
| tag_read                                      | Consultazione delle etichette, escluso le etichette RTMS                                                                   |
| tag_write                                     | Gestione delle etichette, escluso le etichette RTMS                                                                                        |
| ticket_comment_read                           | Consultazione dei commenti                                                                                                  |
| ticket_comment_write                          | Gestione dei commenti                                                                                                       |
| ticket_read                                   | Consultazione dei ticket                                                                                                       |
| ticket_write                                  | Gestione dei ticket                                                                                                            |
| incident_management                           | Gestione degli incidenti                                                                                                       |
| incident_read                                 | Consultazione degli incidenti                                                                                                            |

## Organizzazioni

L'organizzazione è legata al tuo **conto comandato** e al contratto Cloud Temple associato. Rappresenta l'entità (azienda, dipartimento, squadra, ecc.) che porta la relazione contrattuale tra Cloud Temple e te.

### Principio di un'organizzazione

L'organizzazione ha quattro ruoli principali:

- Rappresenta __l'entità contratta__ per gli aspetti di tracciamento e fatturazione,
- Definisce __la configurazione globale del meccanismo di autenticazione__: l'autenticazione può essere locale sulla console Shiva o distante tramite un servizio di federazione dell'identità,
- Porta gli __account utenti__ in generale,
- _Federà i tenanti_ (Production, Préproduction, Dev, Application 1, Application 2, ecc.) che hai definito per le esigenze della tua architettura Cloud.

I ruoli (diritti/permessi) degli utenti sono configurabili a livello di ogni tenente definito nell'organizzazione. Ad esempio, un account può essere autorizzato ad ordinare risorse in un tenente, ma non in un altro.

### Mechanismi di autenticazione

La console Shiva consente all'organizzazione di personalizzare il meccanismo di autenticazione a livello organizzativo. Puoi utilizzare il repository di autenticazione locale della console Shiva o collegare la tua organizzazione a uno dei nostri repository di autenticazione esterni.

I seguenti repository esterni sono supportati:

- Repository compatibili __OpenID Connect__
- Repository compatibili __SAML__
- Microsoft ADFS
- Microsoft EntraID (Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Tenant

The tenant is a **grouping of resources within an organization**. An organization has at least one tenant (referred to as the default tenant, which can be renamed). Generally, multiple tenants are used to segment responsibilities or technical perimeters.

For example:

- A Production tenant
- A Preproduction tenant
- A Receipt tenant
- A Qualification tenant

It's also possible to organize things with a **application view** or by **criticality**:

- An Application 1 tenant or Criticality 1 tenant
- An Application 2 tenant or Criticality 2 tenant
- ...

Technical resources ordered are assigned to a specific tenant and are not shared with other tenants. For instance, a Hypervisor cluster and associated L2 networks are available only within one tenant. Regarding networks, it's possible to request 'cross tenant' networks for ensuring network continuity between tenants.

User permissions are defined within each tenant. Thus, an organization must carefully consider the desired tenants. This point is typically addressed during the initial setup workshop, at the time of organization creation.

It's possible to evolve the architecture by adding or removing tenants.

A tenant cannot be empty; it must be initialized with a minimum of resources:

- A availability zone (AZ, i.e., a physical data center),
- A compute cluster,
- An storage space,
- A VLAN network.

| Command Reference                                         | Unité    | SKU                     |
|-----------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activation of a tenant               | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activation of an availability zone   | 1 tenant | csp:(region):iaas:az:v1 |

### Gestione dei proprietari su un tenente

Ogni tenente possiede almeno un proprietario, garantendo così una responsabilità chiara e una gestione efficiente delle risorse associate. Inoltre, è possibile dichiarare più proprietari per lo stesso tenente, consentendo collaborazione e decisioni condivise. Di seguito troverete informazioni importanti da considerare nella gestione di questi proprietari.

### Informazioni importanti sulla gestione degli amministratori

1. **Identità e Responsabilità**: Gli amministratori hanno un ruolo cruciale nella gestione dei sistemi cloud, responsabile della sicurezza, dell'accesso e del funzionamento efficiente delle infrastrutture IT. Sono incaricati di garantire che i dati siano protetti, le politiche di sicurezza siano rispettate e che il sistema operi senza interruzioni.

2. **Accesso e Autenticazione**: Gli amministratori gestiscono gli account utente, definendo i ruoli e le autorizzazioni, implementando meccanismi di autenticazione robusti (come MFA) per proteggere l'accesso alle risorse cloud.

3. **Monitoraggio e Gestione delle Risorse**: Monitorano continuamente le prestazioni del sistema, identificano potenziali problemi prima che diventino critici, ottimizzano l'uso delle risorse e gestiscono la scalabilità in tempo reale.

4. **Gestione della Sicurezza**: Implementano misure di sicurezza avanzate, come firewall, sistemi antivirus/antimalware, e protocolli di crittografia per proteggere i dati contro accessi non autorizzati o violazioni.

5. **Backup e Ripristino**: Sviluppano e gestiscono strategie di backup e ripristino dei dati, garantendo che le informazioni possano essere recuperate rapidamente in caso di perdita o corruzione.

6. **Gestione delle Politiche e Compliance**: Assicurano che il sistema sia conforme alle normative locali ed internazionali (come GDPR, HIPAA) e ai requisiti aziendali specifici.

7. **Supporto e Risoluzione dei Problemi**: Forniscono supporto tecnico agli utenti finali, risolvono i problemi di sistema e gestiscono le richieste di assistenza.

8. **Gestione delle Versioni e Update**: Gestiscono l'implementazione di nuove versioni software, aggiornamenti e patch per mantenere il sistema sicuro ed efficiente.

9. **Collaborazione con Team IT**: Collaborano strettamente con altri team IT (sviluppo, supporto clienti, security) per garantire un'integrazione fluida dei sistemi cloud all'interno dell'ambiente aziendale complessivo.

10. **Analisi e Reporting**: Utilizzano strumenti di analisi per monitorare le prestazioni del sistema, identificare tendenze e fornire report ai responsabili decisionali per supportare la pianificazione strategica.

Gli amministratori cloud devono possedere una profonda comprensione dei sistemi IT, delle tecnologie emergenti (come l'IA/ML) e delle migliori pratiche di sicurezza per svolgere efficacemente questi ruoli critici.

### Numero di proprietari

* Non esiste una limitazione tecnica sul numero massimo di proprietari che possono essere definiti nel tenant.
* La interfaccia di gestione (IHM) emet un avviso quando il numero supera i 3, per incoraggiare a limitare il numero di proprietari per ragioni di sicurezza e ottimizzazione dei controlli d'accesso.

### 2. Aggiunta di un nuovo proprietario

* Durante l'aggiunta di un nuovo proprietario, la modifica delle sue autorizzazioni può richiedere fino a 60 minuti per la propagazione.
- Questo tempo di attesa è normale e serve a garantire che i diritti d'accesso siano applicati correttamente su tutti i servizi e le risorse associate.

### 2. Permessi di un proprietario

* Un proprietario riceverà automaticamente tutte le autorizzazioni relative ai prodotti attivi sul suo tenente.
- Non è possibile modificare i permessi di un proprietario.

#### 3. Rimuovi di un proprietario

Per rimuovere un proprietario da un inquilino, l'utente deve inviare una richiesta al supporto.
- Questa procedura garantisce che le modifiche dei diritti di accesso vengano effettuate in modo sicuro e conforme alle migliori pratiche per la gestione degli accessi.

### Accesso all'ambiente: IP autorizzate

L'accesso alla console di gestione cloud è strettamente limitato alle indirizzi IP precedentement autorizzate, in conformità con le requisiti di qualifica SecNumCloud. Questa restrizione garantisce un livello di sicurezza rafforzato consentendo l'accesso solo agli utenti provenienti da fasce di indirizzi IP specifiche, minimizzando così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo gli standard di sicurezza più elevati.

Nota: *La rimozione di un'IP autorizzata richiede una richiesta di supporto nella console Cloud Temple.*

### Consumptione di risorse all'interno di un tenant

È possibile visualizzare le consumi di risorse cloud all'interno di un tenant, offrendo una visione dettagliata dell'utilizzo dei vari servizi forniti. Questa funzionalità consente agli utenti di monitorare in tempo reale il consumo delle loro risorse, identificare i servizi più utilizzati e ottimizzare l'uso in base alle esigenze.

Nella schermata del menu della console, fai clic su "Rapporte di consumo" e seleziona la periodo temporale desiderato. Potrai quindi visualizzare in dettaglio il consumo delle risorse cloud nel periodo specificato, consentendoti di analizzare l'utilizzo dei servizi e ottimizzare la gestione di conseguenza:

<img src={shivaTenantRessources_01} />