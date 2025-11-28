---
title: Verschlüsselung einer VMware-Virtuellen Maschine
tags:
  - iaas_vmware
  - tutorials
---
import shivaHsmKms_000 from './images/shiva_hsm_kms_000.png'
import shivaHsmKms_001 from './images/shiva_hsm_kms_001.png'
import shivaHsmKms_002 from './images/shiva_hsm_kms_002.png'
import shivaHsmKms_003 from './images/shiva_hsm_kms_003.png'
import shivaHsmKms_004 from './images/shiva_hsm_kms_004.png'

Dieses Tutorial hilft Ihnen, eine IaaS VMWare virtuelle Maschine über das Konsole-Portal zu verschlüsseln.

### Voraussetzungen

1. **Schlüsselanbieter (HSM/KMS)** :
   - Ein Schlüsselanbieter muss auf dem vStack konfiguriert sein. (Wenn kein Schlüsselanbieter konfiguriert ist, wenden Sie sich bitte über ein Ticket an den Support-Service.)
   - Stellen Sie sicher, dass der Schlüsselanbieter ordnungsgemäß aktiviert ist.

2. **Status der virtuellen Maschine** :
   - Die virtuelle Maschine muss ausgeschaltet sein.
   - Die virtuelle Maschine darf sich nicht im 'Test'-SPP-Modus befinden.
   - Die virtuelle Maschine darf nicht bereits verschlüsselt sein.
   - Die virtuelle Maschine darf keine Snapshots haben.
   - Die virtuelle Maschine darf nicht repliziert sein.

### Benutzeroberfläche

Sobald Sie mit dem Konsole-Webportal verbunden sind, finden Sie im Menü **'IaaS'**, Untermenü **'Konfiguration'** und dann auf der Registerkarte **'vCenters'** Informationen darüber, ob die Verschlüsselung auf dem betreffenden vStack aktiviert ist.

<img src={shivaHsmKms_000} />

Gehen Sie dann zum Untermenü **'Virtuelle Maschinen'** und wählen Sie die Maschine aus, die Sie verschlüsseln möchten.

In den allgemeinen Informationen der virtuellen Maschine finden Sie Informationen darüber, ob die Maschine bereits verschlüsselt ist oder nicht.

<img src={shivaHsmKms_001} />

Wenn die virtuelle Maschine die Voraussetzungen erfüllt, können Sie mit dem Verfahren fortfahren, indem Sie auf die Schaltfläche mit dem Vorhängeschloss-Logo in der Symbolleiste klicken, die **'Virtuelle Maschine verschlüsseln'** anzeigt.

<img src={shivaHsmKms_002} />

Ein Bestätigungsfenster wird angezeigt, wählen Sie Verschlüsseln.

<img src={shivaHsmKms_003} />

Sobald die Aktion abgeschlossen ist, sollten Sie sehen, dass sich die Information geändert hat und anzeigt, dass Ihre Maschine verschlüsselt ist.

<img src={shivaHsmKms_004} />
