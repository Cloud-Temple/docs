---
title: Deployare un'immagine su VM Instance
---

import marketplaceVmInstanceDeployment from '@site/docs/marketplace/images/marketplace_vminstance_deploy.jpg'
import marketplaceVmInstanceConfig from '@site/docs/marketplace/images/marketplace_vminstance_config.jpg'

Questo tutorial vi guida nel deployment di un'immagine di macchina virtuale dalla Marketplace Cloud Temple al servizio VM Instances.

## Prerequisiti

- Disporre di un tenant con il servizio **VM Instances** attivato e i permessi di creazione di macchine virtuali.
- Scegliere un'immagine che abbia **VM Instance** tra le destinazioni compatibili, disponibile per la famiglia di istanze e la zona di disponibilità desiderate.
- Disporre di quote sufficienti in CPU, RAM e storage, nonché di una rete accessibile nella zona scelta.

## Fasi di deployment

### 1. Selezione e deployment

Dalla pagina di dettaglio dell'immagine, selezionate **VM Instance** nelle **Opzioni di deployment**, quindi cliccate su **Deploy**. L'assistente di creazione si apre con l'immagine preselezionata.

<img src={marketplaceVmInstanceDeployment} alt="Sélection de la cible VM Instance dans les options de déploiement Marketplace" />

### 2. Configurazione della macchina virtuale

Compilate le fasi dell'assistente:

- **Famiglia di istanze** e **zona di disponibilità**: scegliete tra le opzioni compatibili con l'immagine.
- **Template**: selezionate le risorse CPU e RAM adatte al vostro bisogno e ai prerequisiti dell'immagine.
- **Configurazione dell'istanza**: indicate il nome della VM e la sua politica di backup.
- **Cloud Init**: se necessario, compilate **Cloud Config** per la configurazione al primo avvio e **Network Config** per la configurazione di rete del sistema guest. Verificate i valori eventualmente precompilati e il formato accettato dall'immagine nella sua scheda Marketplace.
- **Dischi**: verificate i dischi derivati dall'immagine, la loro capacità e il loro tipo di storage; aggiungete dischi di dati se necessario.
- **Adattatori di rete**: collegate le interfacce alle reti del vostro ambiente.

<img src={marketplaceVmInstanceConfig} alt="Configuration de la machine virtuelle dans l'assistant VM Instances" />

Nella fase **Riepilogo**, verificate la configurazione e il costo stimato, quindi cliccate su **Crea**.

Il [tutorial di creazione di una VM Instance](../../public_cloud/vm_instances/tutorials/create_vm.md) dettagli i parametri di ogni fase.

## Accesso alternativo

È inoltre possibile selezionare un'immagine Marketplace dal servizio VM Instances:

1. Nella Console Cloud Temple, aprite **VM Instances** > **Instances**.
2. Cliccate su **Nuova macchina virtuale**.
3. Selezionate una famiglia di istanze e una zona di disponibilità.
4. Nella fase **Scegliere un'immagine**, selezionate l'immagine nel catalogo integrato.
5. Completate le fasi di configurazione, quindi validate il **Riepilogo**.

## Monitoraggio del deployment

Una volta avviata la creazione:

- Consultate l'elenco **VM Instances** > **Instances** per monitorare lo stato della VM.
- Aprite la sua scheda per verificare le informazioni, i dischi e gli adattatori di rete.
- Una volta avviata, utilizzate la **Console** o la modalità di connessione indicata nella scheda Marketplace dell'immagine.

Se l'immagine fornisce credenziali predefinite, sostituite la password al primo accesso.
