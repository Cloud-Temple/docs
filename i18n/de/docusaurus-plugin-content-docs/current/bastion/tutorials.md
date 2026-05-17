---
title: Tutorials
---
import sessions from '@site/docs/bastion/images/sessions.png'
import sessions2 from '@site/docs/bastion/images/sessions2.png'
import appliances from '@site/docs/bastion/images/appliances.png'
import ouvrirAppliance from '@site/docs/bastion/images/ouvrir_appliance.png'
import creerSession from '@site/docs/bastion/images/creer_session.png'
import creerSession2 from '@site/docs/bastion/images/creer_session2.png'
import creerSession3 from '@site/docs/bastion/images/creer_session3.png'
import ouvrirSession from '@site/docs/bastion/images/ouvrir_session.png'
import ouvrirSession2 from '@site/docs/bastion/images/ouvrir_session2.png'
import modifierSession from '@site/docs/bastion/images/modifier_session.png'
import modifierSession2 from '@site/docs/bastion/images/modifier_session2.png'
import supprimerSession from '@site/docs/bastion/images/supprimer_session.png'

Diese Tutorials helfen Ihnen, einen Bastion Cloud Temple über die Konsole bereitzustellen und zu verwalten.

## Voraussetzungen

1. Das Cloud Temple-Produkt (Appliance Bastion-Abonnement) muss abonniert sein.
2. Die zu verwaltenden Geräte müssen vom Netzwerk aus erreichbar sein, in dem die Appliance Bastion bereitgestellt ist.
3. Es müssen die Berechtigungen für das Bastion-Modul vorhanden sein.
4. Bei einer On-Premise-Bereitstellung der Appliance müssen die entsprechenden Netzwerkflüsse freigegeben sein.

## Interface

Nach der Anmeldung im Web-Konsolenportal wechseln Sie zum Register „Bastion“ im linken Menü.

<img src={sessions} />

Über das Register „Geräte“ können Sie die Liste Ihrer Geräte einsehen. Ein Gerät entspricht einer Konfiguration für die
Verbindung über eine Bastion-Appliance. Für jedes Gerät werden der Name, die Tags, die
Beschreibung, die zugehörige Appliance, der Verbindungstyp (SSH oder RDP), die Host-IP und schließlich das Tastaturlayout angezeigt.

Sie können die Liste Ihrer Geräte nach zugewiesenen Tags filtern, und über ein Suchfeld können Sie eine Sitzung nach deren Namen suchen.

<img src={sessions2} />

Über das Register „Appliances“ erhalten Sie die Liste Ihrer Bastion-Appliances. Für jede Appliance werden der Name und die Beschreibung angegeben.

Ein Suchfeld steht zur Verfügung, um eine Appliance nach deren Namen zu suchen.

<img src={appliances} />

## Eine Appliance bereitstellen

Bevor eine Appliance bereitgestellt werden kann, muss ein Abonnement für eine Appliance über eine Anfrage an den Support beantragt werden.

## Eine Verbindung zu einem Gerät öffnen

Im Register „Appliances“ klicken Sie auf die Aktionsleiste der Appliance, die Sie öffnen möchten. Klicken Sie anschließend auf die Schaltfläche „Öffnen“.

<img src={ouvrirAppliance} />

Geben Sie anschließend die für die Verbindung erforderlichen Informationen ein:

    - Auswahl des Protokolls (SSH oder RDP);
    - IP-Adresse des zu verwaltenden Hosts;
    - Anmeldeinformationen;
    - Tastaturlayout.

Klicken Sie anschließend auf „Verbinden“, um die Appliance zu öffnen. Die Konsole der zu verwaltenden virtuellen Maschine öffnet sich daraufhin.

## Gerät speichern

Um regelmäßig auf ein zu verwaltendes Gerät zugreifen zu können, ist es empfehlenswert, eine Gerätekonfiguration anzulegen, die bei jeder Verbindung nur Ihren Benutzernamen und Ihr Passwort abfragt.

Für diesen Zweck navigieren Sie zum Reiter « Geräte » im Menü « Bastion » und klicken Sie auf die Schaltfläche « Neues Gerät ».

<img src={creerSession} />

Geben Sie anschließend die für die Erstellung Ihres Geräts erforderlichen Informationen ein:

    - Gerätename ;
    - Beschreibung ;
    - Zugehörige Appliance ;
    - Protokolltyp (SSH oder RDP) ;
    - IP-Adresse des Hosts ;
    - Tastatursprache.

<img src={creerSession2} />

Eine Benachrichtigung über die erfolgreiche Erstellung Ihrer Gerätekonfiguration sollte oben rechts auf der Seite erscheinen. Die Konfiguration wird anschließend zur Liste Ihrer Geräte hinzugefügt.

Um eine neue Verbindung zu erstellen, können Sie alternativ den Reiter « Appliances » aufrufen und auf die Aktionsleiste der Appliance klicken, der Sie eine Gerätekonfiguration zuordnen möchten.

<img src={creerSession3} />

## Verbindung zu einem Gerät herstellen

Navigieren Sie zur Registerkarte „Geräte“ in der Registerkarte „Bastion“. Klicken Sie auf die Aktionsleiste des Geräts, das Sie öffnen möchten, und klicken Sie auf die Schaltfläche „Öffnen“.

<img src={ouvrirSession} />

Bei jeder Verbindung zum Gerät müssen Sie lediglich Ihre Anmeldeinformationen eingeben.

<img src={ouvrirSession2} />

Nach der Eingabe Ihrer Zugangsdaten erscheint eine Benachrichtigung, die den Beginn der Sitzung bestätigt, und die Konsole zu Ihrer virtuellen Maschine wird geöffnet.

## Eine Gerätekonfiguration bearbeiten

Navigieren Sie zum Tab „Geräte“ im Bereich „Bastion“, klicken Sie auf die Aktionsleiste des Geräts, das Sie bearbeiten möchten, und klicken Sie auf die Schaltfläche „Bearbeiten“.

<img src={modifierSession} />

Anschließend können Sie den Gerätenamen, die Beschreibung, die zugehörige Appliance, das Protokoll (SSH oder RDP), die Host-IP-Adresse oder die Tastatursprache ändern.

<img src={modifierSession2} />

## Eine Gerätekonfiguration löschen

Navigieren Sie zum Tab „Geräte“ im Abschnitt „Bastion“, klicken Sie auf die Aktionsleiste des Geräts, das Sie löschen möchten, und klicken Sie auf die Schaltfläche „Löschen“.

<img src={supprimerSession} />