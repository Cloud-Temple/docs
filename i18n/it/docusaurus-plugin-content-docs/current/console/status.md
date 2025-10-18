---
title: Operazioni pianificate e gestione degli incidenti
---
import shivaInterventionMenu01 from './images/shiva_intervention_menu01.png'
import shivaInterventionMenu03 from './images/shiva_intervention_menu03.png'
import shivaInterventionMenu04 from './images/shiva_intervention_menu04.png'
import shivaInterventionMenu05 from './images/shiva_intervention_menu05.png'
import shivaIncident_001 from './images/shiva_incident_001.png'
import shivaIncident_002 from './images/shiva_incident_002.png'
import shivaIncident_003 from './images/shiva_incident_003.png'
import shivaIncident_004 from './images/shiva_incident_004.png'
import shivaIncident_005 from './images/shiva_incident_005.png'
import shivaIncident_006 from './images/shiva_incident_006.png'

Come ogni piattaforma di infrastruttura Cloud, la piattaforma Cloud Temple è soggetta a lavori e manutenzioni hardware e software regolari.

## Accesso alle operazioni e agli incidenti in corso

L'icona di monitoraggio delle operazioni consente di visualizzare le operazioni pianificate sull'infrastruttura Cloud Temple, nonché gli incidenti aperti sul tenant. Questa icona è accessibile nella barra delle icone in alto a sinistra dello schermo e ha l'aspetto di un'icona __'Strumenti'__.

<img src={shivaInterventionMenu01} />

L'obiettivo di questa icona è fornire una visibilità sulle interventi pianificati, in corso e completati, nonché sugli incidenti relativi al tenant.

Quando sono in corso interventi e/o incidenti, un numero viene visualizzato sull'icona.

Facendo clic su "Visualizzazione rapida", verranno mostrati gli interventi in corso. È inoltre possibile fare clic su __'Tutti gli interventi'__ o __'Tutti gli incidenti e i rapporti del tenant'__ per visualizzare ulteriori dettagli.

<img src={shivaInterventionMenu03} />

## Pianificazione interventi

La pagina Interventi è composta da due schede. La prima scheda consente di visualizzare gli interventi previsti nei prossimi 60 giorni e gli interventi in corso.

<img src={shivaInterventionMenu04} />

Gli interventi completati sono invece visibili nella seconda scheda 'Completato'. Gli interventi completati vengono conservati e accessibili per un periodo di 60 giorni nel passato, garantendo un tracciamento completo dell'intero storico delle operazioni di manutenzione.

<img src={shivaInterventionMenu05} />

L'accesso a queste informazioni richiede, per il profilo utente, il permesso '__intervention_read__'.

## Gestione degli incidenti

Sono da distinguere due tipi di incidenti: gli incidenti globali, che interessano l'intero sistema, e gli incidenti specifici per un ambito cliente, che influenzano esclusivamente le risorse o i servizi associati a un cliente particolare.

### Incidenti globali

Il recupero delle informazioni sugli incidenti globali non richiede autorizzazioni particolari. Un banner rosso viene visualizzato immediatamente dopo la connessione alla console per avvisare della presenza di un incidente globale in corso di risoluzione. L'utente ha la possibilità di nascondere temporaneamente questo banner durante la sessione, ma esso riapparirà ad ogni nuova connessione o aggiornamento della pagina, fintanto che l'incidente non sarà risolto.

<img src={shivaIncident_001} />

Un pulsante __'Maggiori informazioni'__ reindirizza alla pagina pubblica di monitoraggio degli incidenti, che consente di accedere a ulteriori informazioni sull'incidente in corso:

<img src={shivaIncident_002} />

È possibile ottenere i report relativi agli incidenti globali. L'accesso a questi report richiede l'autorizzazione specifica '__incident_management__'. I report degli incidenti globali vengono archiviati e rimangono accessibili per 60 giorni dopo la risoluzione, garantendo una tracciabilità completa degli eventi di sistema.

Di seguito un esempio dell'interfaccia che visualizza tali report:

<img src={shivaIncident_003} />

### Incidents within a customer scope

Visibility of incidents specific to a customer scope requires the __incident_read__ permission. These incidents are represented by a dedicated icon, accompanied by a red badge indicating the number of ongoing incidents.

The icon is clickable, allowing you to list the tickets associated with the incidents. Each ticket includes a link to the incident details, enabling you to track the progress of their resolution. Resolved incidents and their reports (CRs) remain accessible for 60 days, allowing for retrospective analysis and monitoring of corrective actions implemented.

<img src={shivaIncident_004} />

To view the details of an incident, you must either be the author of the incident ticket or have the __support_management__ permission.

### Gestione delle notifiche

Al fine di informare rapidamente gli utenti in caso di nuovo incidente, è stato implementato un sistema di notifiche via e-mail. Attraverso il proprio profilo utente, un'opzione denominata "*I miei abbonamenti*" permette agli utenti di iscriversi alle notifiche per entrambi i tipi di incidenti. Di conseguenza, riceveranno un'e-mail in un lasso di tempo molto breve in caso di segnalazione o risoluzione di un incidente.

<img src={shivaIncident_005} />

L'oggetto dell'e-mail indicherà il tipo di incidente e, nel caso di un incidente relativo a un perimetro, il nome del perimetro interessato. La notifica conterrà inoltre un collegamento che permette di accedere direttamente ai dettagli dell'incidente:

<img src={shivaIncident_006} />