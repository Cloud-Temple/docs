---
title: Personalizzare un'immagine VMware
---
import marketplaceVMwareExportTemplate from '@site/docs/marketplace/images/marketplace_vmware_export_template.png'
import marketplaceVMwareExportTemplateButton from '@site/docs/marketplace/images/marketplace_vmware_export_template_button.png'
import marketplaceVMwareDeployFromTemplate from '@site/docs/marketplace/images/marketplace_vmware_deploy_from_template.png'

Questo tutorial spiega come personalizzare un'immagine di macchina virtuale (VMI) VMware fornita dal Marketplace per creare i propri modelli riutilizzabili.

### Principio generale

Il Marketplace fornisce sistemi operativi (OS) generici. La distribuzione tramite marketplace vi offre una base solida, rapidamente e facilmente distribuibile, evitando upload manuali e accelerando le vostre distribuzioni.

Una volta distribuita l'immagine, questa diventa una macchina virtuale che è possibile configurare. Potete quindi esportarla come modello riutilizzabile da tutti gli utenti del vostro tenant.

---

## Passaggi di personalizzazione

1. **Distribuire l'immagine** di base dal Marketplace.
2. **Configurare la macchina virtuale** in base alle proprie esigenze.
3. **Creare un modello** dalla macchina virtuale configurata.
4. **Distribuire una nuova macchina virtuale** dal modello personalizzato.

---

### Fase 1: Distribuire l'immagine di base

Segui la guida [Distribuire un'immagine su VMware](./deploy_vmware.md) per iniziare.

---

### Passaggio 2: Configurare la macchina virtuale

Una volta distribuita la macchina virtuale, configuratela in base alle vostre esigenze (installazione di software, configurazione della sicurezza, ecc.).

---

### Fase 3: Creare un modello dalla macchina virtuale

1. Dall'elenco delle tue macchine virtuali, seleziona la macchina virtuale configurata.
2. Seleziona **"Esporta"** dalla barra delle azioni.
3. Segui i passaggi della Console per esportare il modello.

<img src={marketplaceVMwareExportTemplateButton} />
<img src={marketplaceVMwareExportTemplate} />

---

### Passaggio 4 : Distribuire dal nuovo modello

È possibile distribuire dalla pagina "Catalogo" o dalla pagina "Macchine Virtuali".

Per distribuire dalla pagina **Macchine Virtuali** :

1. Fare clic su **"Crea una macchina virtuale"**.
2. Seleziona **"Distribuisci da un modello"**.
3. Seleziona il nuovo modello dall'elenco.

<img src={marketplaceVMwareDeployFromTemplate} />