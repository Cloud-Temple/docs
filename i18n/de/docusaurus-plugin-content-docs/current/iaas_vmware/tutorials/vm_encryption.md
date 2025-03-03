---
title: Verschlüsselung einer VMware-Virtuellen Maschine
tags:
  - iaas_vmware
  - tutorials
---

Dieses Tutorial hilft Ihnen, eine IaaS VMware-virtuelle Maschine über das Shiva-Portal zu verschlüsseln.

### Voraussetzungen

1. **Schlüsselanbieter (HSM/KMS)**:
   - Ein Schlüsselanbieter muss auf dem vStack konfiguriert sein. (Wenn kein Schlüsselanbieter konfiguriert ist, wenden Sie sich bitte über ein Ticket an den Support-Service.)
   - Stellen Sie sicher, dass der Schlüsselanbieter ordnungsgemäß aktiviert ist.

2. **Status der virtuellen Maschine**:
   - Die virtuelle Maschine muss ausgeschaltet sein.
   - Die virtuelle Maschine darf sich nicht im spp 'Test'-Modus befinden.
   - Die virtuelle Maschine darf nicht bereits verschlüsselt sein.
   - Die virtuelle Maschine darf keine Snapshots haben.
   - Die virtuelle Maschine darf nicht repliziert sein.

### Benutzeroberfläche

Nach der Anmeldung am Shiva-Webportal finden Sie im Menü __'IaaS'__, Untermenü __'Konfiguration'__ und dann im Tab __'vCenters'__ Informationen darüber, ob die Verschlüsselung auf dem betreffenden vStack aktiviert ist.

![](images/shiva_hsm_kms_000.png)

Gehen Sie dann zum Untermenü __'Virtuelle Maschinen'__ und wählen Sie die Maschine aus, die Sie verschlüsseln möchten.

In den allgemeinen Informationen der virtuellen Maschine finden Sie Angaben darüber, ob die Maschine bereits verschlüsselt ist oder nicht.

![](images/shiva_hsm_kms_001.png)

Wenn die virtuelle Maschine die Voraussetzungen erfüllt, können Sie mit dem Verfahren fortfahren, indem Sie auf die Schaltfläche mit dem Vorhängeschloss-Symbol in der Symbolleiste klicken, die __'Virtuelle Maschine verschlüsseln'__ anzeigt.

![](images/shiva_hsm_kms_002.png)

Ein Bestätigungsfenster wird angezeigt, wählen Sie Verschlüsseln.

![](images/shiva_hsm_kms_003.png)

Sobald die Aktion abgeschlossen ist, sollten Sie die geänderten Informationen sehen, die darauf hinweisen, dass Ihre Maschine verschlüsselt ist.

![](images/shiva_hsm_kms_004.png)
