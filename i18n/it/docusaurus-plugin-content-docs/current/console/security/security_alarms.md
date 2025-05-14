---
title: Avvisi di Sicurezza
---

Qui troverete i nostri avvisi e raccomandazioni di sicurezza relativi ai servizi Cloud Temple.

## Vulnerabilità di Sicurezza

### Tabella delle Vulnerabilità

| Data di pubblicazione | Servizio interessato | Identificativo | Punteggio CVSSv3 | Dettagli | Gravità CT | Raccomandazione | Descrizione |
|---------------------|-----------------|-------------|--------------|---------|-------------|----------------|-------------|
| 12/05/2025 | IaaS By VMware | CVE-2025-22247 | 6.1 | **Vulnerabilità VMware Tools: CVE-2025-25234** [Bollettino del produttore](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25683) | 🟡 Moderata | Aggiornare VMware Tools alla versione 12.5.2 sulle VM per correggere la vulnerabilità. | Una vulnerabilità nella gestione non sicura dei file in VMware Tools è stata segnalata privatamente a VMware. Sono disponibili aggiornamenti per correggere questa vulnerabilità nei prodotti VMware interessati. |
| 25/03/2025 | IaaS By VMware | CVE-2025-22230 | 7.8 | **Vulnerabilità VMware Tools: CVE-2025-22230** [Bollettino del produttore](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25518) | 🟠 Alta | Aggiornare VMware Tools alla versione 15.5.1 per Windows sulle VM per correggere questa vulnerabilità. | Una vulnerabilità di bypass dell'autenticazione in VMware Tools per Windows è stata segnalata privatamente a VMware. Sono disponibili aggiornamenti per correggere questa vulnerabilità nei prodotti VMware interessati. |
| 04/03/2025 | IaaS By VMware | Multiple CVE | da 7.1 a 9.3 | **Vulnerabilità in VMware ESXI (CVE-2025-22224, CVE-2025-22225, CVE-2025-22226)** [Bollettino del produttore](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25390) | 🟠 Alta | Implementare il prima possibile le patch disponibili corrispondenti al proprio ramo. Le nuove versioni corrette sono disponibili in Console. Come promemoria, Console indica quali versioni dei vostri ESXi non sono aggiornate. | Diverse vulnerabilità in VMware ESXi sono state segnalate privatamente a VMware (CVE-2025-22224; CVE-2025-22225; CVE-2025-22226). Sono disponibili aggiornamenti per correggere queste vulnerabilità nei prodotti VMware interessati. |

## Scale di Gravità

| Livello | Descrizione |
|--------|-------------|
| 🔴 **Critica** | Vulnerabilità CVSS 7+ con un rischio significativo di sfruttamento (esposizione, facilità di sfruttamento) |
| 🟠 **Alta** | Vulnerabilità CVSS 7+ senza un rischio significativo di sfruttamento (esposizione limitata o vincoli di sfruttamento) |
| 🟡 **Moderata** | Vulnerabilità CVSS 4+ |
| 🔵 **Bassa** | Vulnerabilità CVSS inferiore a 4, o non sfruttabile. |

*I criteri di sfruttamento sono considerati nel contesto tecnico delle nostre infrastrutture e servizi Cloud.*
