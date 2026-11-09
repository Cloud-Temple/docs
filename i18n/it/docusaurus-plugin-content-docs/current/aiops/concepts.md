---
title: Concetti
---

:::info[Servizio gestito, fuori dalla Console]

AIOps si sottoscrive tramite gli esperti di Cloud Temple, che studiano con voi la sua integrazione nel vostro ambiente e la modalità di distribuzione adatta. Non si ordina dalla Console Cloud Temple e non vi dispone né di una vista né di un'API.

:::

## Presentazione

Il servizio **AIOps** di Cloud Temple è una piattaforma di intelligenza operativa che applica l'intelligenza artificiale alle operazioni IT: monitoraggio, analisi degli incidenti e automazione delle attività operative. Si basa su una CMDB ibrida per collocare ogni evento nel suo contesto (servizi, dipendenze, criticità). Agisce come copilota dei vostri team: non li sostituisce.

Si rivolge ai team operativi, agli ingegneri di produzione, agli SRE (*Site Reliability Engineers*) e alle direzioni IT che vogliono migliorare la qualità del servizio e ridurre le attività ripetitive. Casi d'uso tipici:

- ridurre il rumore durante una tempesta di allarmi, raggruppando gli eventi legati a una stessa causa in un unico incidente;
- rilevare le anomalie nei report di backup e nelle elaborazioni batch;
- anticipare gli incidenti grazie all'analisi del comportamento delle metriche.

## Vantaggi

| Vantaggio | Descrizione |
|---|---|
| Reattività | A seconda della modalità di distribuzione, AIOps propone (Stackless) o applica (Stackfull) le correzioni note. |
| Meno rumore | La correlazione degli allarmi concentra i vostri team sugli incidenti reali. |
| Approccio proattivo | Il rilevamento delle anomalie segnala le derive prima che provochino un incidente. |
| Trasmissione delle competenze | I suggerimenti di risoluzione e i runbook collaudati diffondono l'esperienza degli ingegneri esperti. |

## Funzionalità

| Funzionalità | Descrizione |
|---|---|
| Correlazione contestuale | Aggregazione degli allarmi in base alla topologia, per contenere le tempeste di allarmi. |
| Analisi delle cause radice | Identificazione del componente guasto nella catena di dipendenze. |
| Analisi semantica dei log | Comprensione degli errori nei log di backup e di elaborazione, oltre i codici di ritorno. |
| Rilevamento delle anomalie | Apprendimento del funzionamento nominale e allarme in caso di scostamento. |
| Auto-rimedio | In modalità Stackfull, esecuzione di scenari di riparazione inquadrati da salvaguardie; in modalità Stackless, l'esecuzione resta ai vostri team. |
| Smistamento e instradamento | Categorizzazione dell'incidente e instradamento verso il team giusto. |
| Suggerimenti di risoluzione | Confronto con la base di conoscenza e lo storico dei ticket, per proporre runbook e cause probabili. |

## Architettura

AIOps funziona come una torre di controllo collegata ai vostri strumenti operativi:

- il **monitoraggio** la alimenta in continuo (eventi, allarmi, metriche e log a seconda del perimetro);
- lo **strumento ITSM** fornisce il contesto operativo: incidenti, modifiche, storico;
- la **CMDB** fornisce il repository dei servizi e delle loro dipendenze.

La torre di controllo correla questi segnali, arricchisce i ticket (categorizzazione, raggruppamento, prioritizzazione, suggerimenti di runbook) e traccia le sue azioni nello strumento ITSM.

### Modalità di distribuzione

- **Stackless** (predefinita): nessun componente invasivo aggiunto al vostro sistema informativo. AIOps si basa sulla raccolta esistente e fornisce analisi, raccomandazioni e suggerimenti; l'esecuzione delle azioni resta ai vostri team.
- **Stackfull**: agenti di IA distribuiti nel vostro sistema informativo eseguono scenari di rimedio predefiniti, sotto la governance dei vostri processi ITSM.

### Integrazioni

- **Monitoraggio**: Nagios, Centreon, Prometheus, Zabbix.
- **ITSM**: ServiceNow, Jira.
- **Ambienti**: Azure, AWS, VMware.

## Regioni e zone di disponibilità

I dati sono ospitati in Francia, nei datacenter di Cloud Temple, e isolati per cliente. L'inferenza dei modelli di IA avviene in Francia.

## Specifiche tecniche

| Parametro | Valore |
|---|---|
| Conservazione dei dati | 12 mesi di serie |
| Frequenza di analisi | Tempo reale (flusso) |
| Modelli di IA | Supervisionati, non supervisionati e grandi modelli linguistici (LLM) |

### Limiti

- AIOps non si ordina dalla Console Cloud Temple e non vi dispone né di una vista né di un'API.
- Il perimetro coperto e la modalità di distribuzione si definiscono con gli esperti di Cloud Temple.

## Sicurezza e conformità

- **Isolamento**: i dati di ogni cliente sono isolati.
- **Localizzazione**: dati ospitati e modelli di IA eseguiti in Francia, sull'infrastruttura di Cloud Temple.
- **Governance delle azioni**: in modalità Stackfull, gli scenari di rimedio sono predefiniti, inquadrati da salvaguardie e governati dai vostri processi ITSM; in modalità Stackless, AIOps non esegue alcuna azione.

## Reversibilità

Per conoscere le modalità di esportazione e di cancellazione dei vostri dati, consultate gli esperti di Cloud Temple.

## Prezzi

AIOps si sottoscrive previo studio con gli esperti di Cloud Temple: [contattateci](https://www.cloud-temple.com/contactez-nous/). Vedi anche la [pagina AIOps del sito Cloud Temple](https://www.cloud-temple.com/produits/ai-ops/).
