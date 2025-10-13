---
title: Personalizzare un'immagine OpenIaaS
---
import marketplaceOpenIaasExportTemplate from '@site/docs/marketplace/images/marketplace_openiaas_export_template.png'
import marketplaceOpenIaasExportTemplateButton from '@site/docs/marketplace/images/marketplace_openiaas_export_template_button.png'
import marketplaceOpeniaasDeployFromTemplate from '@site/docs/marketplace/images/marketplace_openiaas_deploy_from_template.png'

Questo tutorial spiega come personalizzare un'immagine di macchina virtuale (VMI) OpenIaaS fornita dal Marketplace per creare i propri modelli riutilizzabili.

### Principio generale

Il Marketplace fornisce sistemi operativi (OS) generici. La distribuzione dal marketplace ti offre una base pulita, rapida e facile da distribuire, risparmiandoti caricamenti manuali e accelerando le tue distribuzioni.

Una volta distribuita l'immagine, diventa una macchina virtuale che puoi configurare. Puoi quindi esportarla come modello riutilizzabile da tutti gli utenti nel tuo tenant.

---

## Passaggi di personalizzazione

1.  **Distribuire l'immagine di base** dal Marketplace.
2.  **Configurare la macchina virtuale** in base alle proprie esigenze.
3.  **Creare un modello** dalla macchina virtuale configurata.
4.  **Distribuire una nuova macchina virtuale** dal tuo modello personalizzato.

---

### Passaggio 1: Distribuire l'immagine di base

Segui il tutorial [Distribuire un'immagine su OpenIaaS](./deploy_openiaas.md) per iniziare.

---

### Passaggio 2: Configurare la macchina virtuale

Una volta distribuita la macchina virtuale, configurala in base alle tue esigenze (installazione di software, impostazioni di sicurezza, ecc.).

---

### Passaggio 3: Creare un modello dalla macchina virtuale

1.  Dalla tua lista di macchine virtuali, seleziona la macchina virtuale configurata.
2.  Seleziona **"Esporta"** dalla barra delle azioni.
3.  Segui i passaggi nella Console per esportare il modello.

<img src={marketplaceOpenIaasExportTemplateButton} />
<img src={marketplaceOpenIaasExportTemplate} />

---

### Passaggio 4: Distribuire dal tuo nuovo modello

Puoi distribuire dalla pagina "Catalogo" o dalla pagina "Macchine virtuali".

Per distribuire dalla pagina **Macchine virtuali**:
1.  Fai clic su **"Crea una macchina virtuale"**.
2.  Scegli **"Distribuisci da un modello"**.
3.  Seleziona il tuo nuovo modello dall'elenco.

<img src={marketplaceOpeniaasDeployFromTemplate} />
