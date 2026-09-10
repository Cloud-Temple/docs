---
title: Eine virtuelle Maschine verschlüsseln
tags:
  - iaas_vmware
  - tutorials
---
import shivaHsmKms_000 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_000.png'
import shivaHsmKms_001 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_001.png'
import shivaHsmKms_002 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_002.png'
import shivaHsmKms_003 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_003.png'
import shivaHsmKms_004 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_004.png'

Dieses Tutorial unterstützt Sie bei der Verschlüsselung einer IaaS-VMware-VM über das Console-Portal.

### Voraussetzungen

1. **Schlüsselanbieter (HSM/KMS)** :
   - Ein Schlüsselanbieter muss auf der vStack konfiguriert sein. (Wenn kein Schlüsselanbieter konfiguriert ist, wenden Sie sich bitte über ein Ticket an den Support.)
   - Stellen Sie sicher, dass der Schlüsselanbieter korrekt aktiviert ist.

2. **Status der virtuellen Maschine** :
   - Die virtuelle Maschine muss heruntergefahren sein.
   - Die virtuelle Maschine darf sich nicht im spp mode 'test' befinden.
   - Die virtuelle Maschine darf nicht bereits verschlüsselt sein.
   - Die virtuelle Maschine darf keine Snapshots haben.
   - Die virtuelle Maschine darf nicht repliziert sein.

### Benutzeroberfläche

Nach der Anmeldung im Web-Portal Console finden Sie im Menü **'IaaS'**, Untermenü **'Konfiguration'** und auf der Registerkarte **'vCenters'** die Information, ob die Verschlüsselung für die betreffende vstack aktiviert ist.

<img src={shivaHsmKms_000} />

Wechseln Sie anschließend ins Untermenü **'Virtuelle Maschinen'** und wählen Sie die Maschine aus, die Sie verschlüsseln möchten.

In den allgemeinen Informationen der virtuellen Maschine finden Sie den Hinweis, ob die Maschine bereits verschlüsselt ist oder nicht.

<img src={shivaHsmKms_001} />

Wenn die virtuelle Maschine die Voraussetzungen erfüllt, können Sie den Vorgang fortsetzen, indem Sie auf die Schaltfläche mit dem Schloss-Symbol in der Symbolleiste klicken, die **'Virtuelle Maschine verschlüsseln'** lautet.

<img src={shivaHsmKms_002} />

Es erscheint ein Bestätigungsfenster. Wählen Sie **Verschlüsseln**.

<img src={shivaHsmKms_003} />

Nach Abschluss der Aktion sollten Sie die geänderte Information sehen, die anzeigt, dass Ihre Maschine verschlüsselt ist.

<img src={shivaHsmKms_004} />