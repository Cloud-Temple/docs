---
title: Alert di sicurezza
---

Trova qui le alert di sicurezza relative ai nostri servizi cloud.
Questa pagina viene aggiornata quotidianamente per tenere conto delle vulnerabilità recentemente identificate.

## Vulnerabilità

| Data | Riferimento(i) | CVSS | Titolo | Descrizione | Servizio(i) | Severità | Trattamento |
|---------------------|-----------------|-------------|--------------|---------|-------------|----------------|-------------|
| 01/07/2025 | [XSA-470](https://xenbits.xen.org/xsa/advisory-470.html) | N/A | **Vulnerabilità XCP-NG dovuta a una gestione errata delle eccezioni** <br/> [Bollettino dell'editore](https://xcp-ng.org/blog/2025/07/03/july-2025-security-and-maintenance-update-for-xcp-ng-8-2-lts/) | È stata scoperta una vulnerabilità in XCP-NG che consente a codice privilegiato, eseguito da una macchina virtuale, di causare un crash dell'hypervisor, provocando un'interruzione di servizio (DoS) dell'intero host. | IaaS OpenSource | 🟡 Moderata | ✅ L'aggiornamento delle vostre istanze XCP-ng è pianificato non appena le patch saranno convalidate da Cloud Temple. Nessuna azione da parte vostra è necessaria.|
| 23/05/2025 | [XSA-468](https://xenbits.xen.org/xsa/advisory-468.html) | 8.8-9.0 | **Vulnerabilità XCP-NG nei driver PV Windows (XSA-468)** <br/> [Bollettino dell'editore](https://xcp-ng.org/blog/2025/05/27/xsa-468-windows-pv-driver-vulnerabilities/) | Diverse vulnerabilità (CVE-2025-27462, CVE-2025-27463, CVE-2025-27464) nei driver PV Windows consentono a utenti non privilegiati di ottenere privilegi di sistema all'interno delle VM Windows. | IaaS OpenSource | 🟠 Importante | ⚠️ Si consiglia di aggiornare i driver PV Windows delle proprie macchine virtuali alle versioni corrette indicate nel bollettino di sicurezza. ✅ L'aggiornamento delle proprie istanze XCP-ng è pianificato non appena le correzioni saranno validate da Cloud Temple. |
| 22/05/2025 | [XSA-469, INTEL-SA](https://xcp-ng.org/blog/2025/05/14/may-2025-security-update-for-xcp-ng-8-2-8-3/) | 4.9-6.5 | **Vulnerabilità XCP-NG nel microcodice Intel e Xen (XSA-469, INTEL-SA)** <br/> [Bollettino dell'editore](https://xcp-ng.org/blog/2025/05/14/may-2025-security-update-for-xcp-ng-8-2-8-3/) | Sono state pubblicate correzioni di sicurezza per XCP-ng, che risolvono diverse vulnerabilità nel microcodice Intel e Xen. | IaaS OpenSource | 🟡 Moderata | ✅ L'aggiornamento delle proprie istanze XCP-ng è pianificato non appena le correzioni saranno validate da Cloud Temple. Nessuna azione è richiesta da parte vostra.|
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-6.8 | **VMSA-2025-0010: Molteplici vulnerabilità in VMware ESXi (CVE-2025-41226, CVE-2025-41227, CVE-2025-41228)** | Sono state segnalate diverse vulnerabilità in VMware ESXi: vulnerabilità di tipo denial-of-service delle operazioni guest (CVE-2025-41226), vulnerabilità di tipo denial-of-service (CVE-2025-41227), vulnerabilità di tipo Cross Site Scripting (XSS) (CVE-2025-41228). Patch correttive sono fornite dal fornitore. | IaaS By VMware | 🟡 Moderata | ⚠️ Si consiglia di aggiornare i vostri hypervisor. Le versioni corrette di ESXi sono disponibili al momento della validazione da parte di Cloud Temple. La Console indica gli ESXi che necessitano di aggiornamento. |
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-8.8 | **VMSA-2025-0010: Molteplici vulnerabilità in vCenter (CVE-2025-41225, CVE-2025-41228)** | Sono state segnalate diverse vulnerabilità in VMware vCenter: vulnerabilità di esecuzione di comandi autenticati in VMware vCenter Server (CVE-2025-41225), vulnerabilità di tipo Cross Site Scripting (XSS) (CVE-2025-41228). Patch correttive sono fornite dal fornitore. | IaaS By VMware | 🟠 Importante | ✅ L’aggiornamento delle vostre istanze vCenter è pianificato non appena le patch sono validate da Cloud Temple. Nessuna azione richiesta da parte vostra. |
| 14/05/2025 | [VMSA-2025-0007](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25683) | 6.1 | **VMSA-2025-0007: Vulnerabilità di gestione non sicura dei file in VMware Tools (CVE-2025-22247)** | È stata segnalata una vulnerabilità di gestione non sicura dei file in VMware Tools. Patch correttive sono fornite dal fornitore. | IaaS By VMware | 🟡 Moderata | ⚠️ Si consiglia di aggiornare VMware Tools sulle vostre macchine virtuali. |
| 25/03/2025 | [VMSA-2025-0005](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25518) | 7.8 | **VMSA-2025-0005: Vulnerabilità di bypass dell’autenticazione in VMware Tools per Windows (CVE-2025-22230)** | È stata segnalata una vulnerabilità di bypass dell’autenticazione in VMware Tools per Windows. Patch correttive sono fornite dal fornitore. | IaaS By VMware | 🟠 Importante | ⚠️ Si consiglia di aggiornare VMware Tools sulle vostre macchine virtuali. |
| 04/03/2025 | [VMSA-2025-0004](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25390) | 7.1-9.3 | **VMSA-2025-0004: Molteplici vulnerabilità in VMware ESXi (CVE-2025-22224, CVE-2025-22225, CVE-2025-22226)** | Sono state segnalate diverse vulnerabilità in VMware ESXi: vulnerabilità di overflow dell’heap VMCI (CVE-2025-22224) valutata come Critica da VMware, vulnerabilità di scrittura arbitraria in VMware ESXi (CVE-2025-22225), vulnerabilità di divulgazione di informazioni HGFS (CVE-2025-22226). Patch correttive sono fornite dal fornitore. | IaaS By VMware | 🟠 Importante | ⚠️ Si consiglia di aggiornare i vostri hypervisor. Le versioni corrette di ESXi sono disponibili al momento della validazione da parte di Cloud Temple. La Console indica gli ESXi che necessitano di aggiornamento. |

## Informazioni

- **Data**: Data di pubblicazione iniziale dell’alert di sicurezza Cloud Temple.
- **Riferimento(i)**: ID CVE, se disponibile.
- **CVSS**: Punteggio CVSS v3 base come riportato dal fornitore o dal CVE, non contestualizzato. La contestualizzazione è espressa dalla severità CT. Se l’alert riguarda più vulnerabilità, vengono indicati i punteggi CVSS minimo e massimo.
- **Titolo**: Titolo dell’alert, con riferimento al fornitore se disponibile.
- **Descrizione**: Descrizione sintetica, con link a informazioni dettagliate.
- **Servizio(i)**: Servizi Cloud Temple eventualmente interessati.
- **Severità**: Livello di severità nel contesto dei servizi Cloud Temple (per la vulnerabilità più critica in caso di vulnerabilità multiple). I criteri di sfruttamento sono considerati nel contesto tecnico delle nostre infrastrutture e servizi Cloud.

| Livello | Descrizione |
|--------|-------------|
| 🔴 **Critica** | Vulnerabilità CVSS 7+ che presenta un rischio elevato di sfruttamento (ampia esposizione, facilità di sfruttamento). È fortemente raccomandata una correzione o mitigazione il prima possibile. |
| 🟠 **Importante** | Vulnerabilità CVSS 7+ che non presenta un rischio elevato di sfruttamento (esposizione limitata o difficoltà di sfruttamento) |
| 🟡 **Moderata** | Vulnerabilità CVSS 4+ |
| 🔵 **Bassa** | Vulnerabilità CVSS inferiore a 4, o non sfruttabile. |

- **Trattamento**: Informazioni e raccomandazioni nel contesto dei servizi Cloud Temple. ⚠️ indica che è necessaria un’azione da parte degli utenti per mitigare la vulnerabilità. ✅ indica che la vulnerabilità è gestita da Cloud Temple.
