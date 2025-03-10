---
title: Sichere eine VMware-VM
tags:
  - iaas_vmware
  - tutorials
---
import shivaHsmKms_000 from './images/shiva_hsm_kms_000.png'
import shivaHsmKms_001 from './images/shiva_hsm_kms_001.png'
import shivaHsmKms_002 from './images/shiva_hsm_kms_002.png'
import shivaHsmKms_003 from './images/shiva_hsm_kms_003.png'
import shivaHsmKms_004 from './images/shiva_hsm_kms_004.png'


Dieses Tutorial hilft Ihnen, eine IaaS VMware-VM über das Shiva-Portal zu verschlüsseln.

### Voraussetzungen

1. **Schlüsselanbieter (HSM/KMS)** :
   - Ein Schlüsselanbieter muss auf dem vStack konfiguriert sein. (Wenn kein Schlüsselanbieter konfiguriert ist, wenden Sie sich bitte über ein Ticket an den Support.)
   - Stellen Sie sicher, dass der Schlüsselanbieter ordnungsgemäß aktiviert ist.

2. **Status der virtuellen Maschine** :
   - Die virtuelle Maschine muss ausgeschaltet sein.
   - Die virtuelle Maschine darf nicht im 'Test'-Modus sein.
   - Die virtuelle Maschine darf nicht bereits verschlüsselt sein.
   - Die virtuelle Maschine darf keine Snapshot haben.
   - Die virtuelle Maschine darf nicht repliziert sein.

### Schnittstelle

Nachdem Sie sich beim Shiva-Webportal angemeldet haben, finden Sie im Menü __'IaaS'__, Untermenü __'Konfiguration'__, und dann im Tab __'vCenters'__ die Information, ob die Verschlüsselung auf dem betreffenden vstack aktiviert ist.

<img src={shivaHsmKms_000} />

Gehen Sie anschließend ins Untermenü __'Virtuelle Maschinen'__ und wählen Sie die Maschine aus, die Sie verschlüsseln möchten.

In den allgemeinen Informationen der virtuellen Maschine finden Sie die Information, ob die Maschine bereits verschlüsselt ist oder nicht.

<img src={shivaHsmKms_001} />

Wenn die virtuelle Maschine die Voraussetzungen erfüllt, können Sie den Vorgang fortsetzen, indem Sie auf die Schaltfläche mit dem Schloss-Symbol in der Symbolleiste klicken, die __'Virtuelle Maschine verschlüsseln'__ anzeigt.

<img src={shivaHsmKms_002} />

Ein Bestätigungsfenster erscheint, wählen Sie Verschlüsseln.

<img src={shivaHsmKms_003} />

Nach Abschluss der Aktion sollten Sie sehen, dass sich die Information geändert hat und dass Ihre Maschine jetzt verschlüsselt ist.

<img src={shivaHsmKms_004} />