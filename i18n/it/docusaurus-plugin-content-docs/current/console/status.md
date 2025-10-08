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

Come ogni piattaforma di infrastruttura Cloud, la piattaforma Cloud Temple è soggetta a lavori e manutenzione hardware e software regolarmente.

## Accesso alle operazioni e agli incidenti in corso

L'icona di monitoraggio delle operazioni permette di visualizzare le operazioni pianificate sull'infrastruttura Cloud Temple così come gli incidenti aperti sul tenant. Questa icona è accessibile nella barra delle icone in alto a sinistra dello schermo e ha la forma di un'icona __'Strumenti'__.

<img src={shivaInterventionMenu01} />

Questa icona mira a fornire visibilità sugli interventi pianificati, in corso e terminati e/o gli incidenti sul tenant.

Quando ci sono interventi e/o incidenti in corso, un numero appare sull'icona.

Cliccando su visualizzazione rapida, troverete gli interventi in corso. È anche possibile cliccare su __'Tutti gli interventi'__ o __'Tutti gli incidenti e i rapporti del tenant'__ per visualizzare più dettagli.

<img src={shivaInterventionMenu03} />

## Monitoraggio degli interventi pianificati

La pagina Interventi è composta da due schede. La prima scheda permette di visualizzare gli interventi previsti per i prossimi 60 giorni e gli interventi in corso.

<img src={shivaInterventionMenu04} />

Gli interventi terminati, invece, sono visibili nella seconda scheda 'Terminato'. Gli interventi terminati sono conservati e accessibili per 60 giorni nel passato, permettendo un monitoraggio completo della cronologia delle operazioni di manutenzione.

<img src={shivaInterventionMenu05} />

L'accesso a queste informazioni richiede per il profilo dell'utente il permesso '__intervention_read__'.

## Gestione degli incidenti

Si distinguono due tipi di incidenti: gli incidenti globali, che colpiscono l'intero sistema, e gli incidenti specifici a un perimetro cliente, che impattano solo le risorse o i servizi associati a un cliente particolare.

### Incidenti globali

Il recupero delle informazioni riguardanti gli incidenti globali non richiede alcun permesso particolare. Un banner rosso viene visualizzato fin dalla connessione alla console per avvertire della presenza di un incidente globale in corso di risoluzione. L'utente ha la possibilità di nascondere questo banner temporaneamente durante la sua sessione, ma questo riapparirà ad ogni nuova connessione o durante un aggiornamento della pagina, finché l'incidente non sarà risolto.

<img src={shivaIncident_001} />

Un pulsante __'Saperne di più'__ reindirizza verso la pagina pubblica di monitoraggio degli incidenti, permettendo di accedere a informazioni supplementari sull'incidente in corso:

<img src={shivaIncident_002} />

È possibile ottenere i rapporti degli incidenti globali. L'accesso a questi rapporti richiede il permesso specifico '__incident_management__'. I rapporti degli incidenti globali sono archiviati e accessibili per 60 giorni dopo la loro risoluzione, garantendo una tracciabilità completa degli eventi di sistema.

Ecco un esempio della scheda che mostra questi rapporti:

<img src={shivaIncident_003} />

### Incidenti su un perimetro cliente

La visibilità degli incidenti specifici a un perimetro cliente richiede il permesso __incident_read__. Questi incidenti sono rappresentati da un'icona dedicata, accompagnata da un badge rosso che indica il numero di incidenti in corso.

L'icona è cliccabile, permettendo di elencare i ticket associati agli incidenti. Ogni ticket include un link ai dettagli dell'incidente, offrendo la possibilità di seguire l'avanzamento della loro risoluzione. Gli incidenti risolti e i loro verbali (CR) rimangono accessibili per 60 giorni, permettendo un'analisi retrospettiva e il monitoraggio delle azioni correttive implementate.

<img src={shivaIncident_004} />

Per consultare i dettagli di un incidente, è necessario essere l'autore del ticket di incidente o disporre del permesso __support_management__.

### Gestione delle notifiche

Al fine di informare rapidamente gli utenti in caso di nuovo incidente, è stato messo in atto un sistema di notifiche via e-mail. Dal loro profilo utente, una scheda intitolata '*I miei abbonamenti*' permette agli utenti di abbonarsi alle notifiche per i due tipi di incidenti. Così, riceveranno un'e-mail in un tempo molto breve durante la dichiarazione o la risoluzione di un incidente.

<img src={shivaIncident_005} />

L'oggetto dell'e-mail indicherà il tipo di incidente e, nel caso di un incidente legato a un perimetro, il nome del perimetro impattato. La notifica conterrà anche un link che permette di accedere direttamente ai dettagli dell'incidente:

<img src={shivaIncident_006} />
