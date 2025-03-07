---
title: Tutorials
---
import sessions from './images/sessions.png'
import sessions2 from './images/sessions2.png'
import appliances from './images/appliances.png'
import ouvrirAppliance from './images/ouvrir_appliance.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'
import modifierSession from './images/modifier_session.png'
import modifierSession2 from './images/modifier_session2.png'
import supprimerSession from './images/supprimer_session.png'

Diese Tutorials helfen Ihnen, ein Bastion Cloud Temple über das Shiva-Portal zu implementieren und zu verwalten.

## Voraussetzungen

1. Ein Cloud Temple-Abonnement abgeschlossen haben (Bastion Appliance-Abonnement).
2. Die zu verwaltenden Geräte müssen über das Netzwerk zugänglich sein, in dem die Bastion Appliance implementiert ist.
3. Berechtigungen für das Bastion-Modul besitzen.
4. Im Falle einer Onpremise-Implementierung der Appliance müssen die entsprechenden Flüsse geöffnet sein.

## Schnittstelle

Sobald Sie sich am Shiva-Webportal angemeldet haben, gehen Sie zum Reiter "Bastion" im linken Menü.

<img src={sessions} />

Im Reiter „Geräte“ können Sie die Liste Ihrer Geräte einsehen. Ein Gerät entspricht einer Konfigurationsverbindung über eine Bastion Appliance. Für jedes Gerät werden dessen Name, Tags, Beschreibung, die zugehörige Appliance, der Verbindungstyp (SSH oder RDP), die IP des Hosts und schließlich die Tastaturkonfiguration angegeben.

Sie können die Liste Ihrer Geräte nach den Tags filtern, die ihnen zugewiesen sind, und eine Suchmaschine ermöglicht es Ihnen, eine Sitzung nach ihrem Namen zu suchen.

<img src={sessions2} />

Der Reiter „Appliances“ zeigt Ihnen die Liste Ihrer Bastion Appliances. Für jede Appliance sind der Name und die Beschreibung der Appliance angegeben.

Eine Suchmaschine ist verfügbar, um Ihnen die Suche nach einer Appliance nach ihrem Namen zu erleichtern.

<img src={appliances} />

## Eine Appliance bereitstellen

Bevor Sie eine Appliance bereitstellen können, müssen Sie einen Abonnementantrag für eine Appliance über eine Anfrage beim Support stellen.

## Einen Fluss zu einem Gerät öffnen

Gehen Sie im Reiter „Appliances“ zur Aktionsleiste der Appliance, die Sie öffnen möchten. Klicken Sie dann auf die Schaltfläche „Öffnen“.

<img src={ouvrirAppliance} />

Geben Sie anschließend die für die Verbindung erforderlichen Informationen ein:

    - Wahl des Protokolls (SSH oder RDP);
    - IP-Adresse des zu verwaltenden Hosts;
    - Authentifizierungsinformationen;
    - Tastaturkonfiguration.

Klicken Sie dann auf „Verbinden“, um die Appliance zu öffnen. Die Konsole der zu verwaltenden virtuellen Maschine öffnet sich dann.

## Ein Gerät registrieren

Um regelmäßig auf ein zu verwaltendes Gerät zuzugreifen, ist es besser, eine Gerätekonfiguration zu erstellen, die bei jeder Verbindung nur Ihren Benutzernamen und Ihr Passwort erfordert.

Gehen Sie dazu im Menü „Bastion“ zum Reiter „Geräte“ und klicken Sie auf die Schaltfläche „Neues Gerät“.

<img src={creerSession} />


Geben Sie dann die für die Erstellung Ihres Geräts erforderlichen Informationen ein:

    - Name des Geräts;
    - Beschreibung;
    - Zugehörige Appliance;
    - Protokolltyp (SSH oder RDP);
    - IP-Adresse des Hosts;
    - Tastatursprache.

<img src={creerSession2} />


Eine Benachrichtigung, die die Erstellung Ihrer Gerätekonfiguration anzeigt, sollte oben rechts auf der Seite erscheinen. Die Konfiguration wird dann zur Liste Ihrer Geräte hinzugefügt.

Um eine neue Verbindung zu erstellen, können Sie auch über den Reiter „Appliances“ gehen, indem Sie auf die Aktionsleiste der Appliance klicken, der Sie eine Gerätekonfiguration zuweisen möchten.

<img src={creerSession3} />

## Verbindung zu einem Gerät herstellen

Gehen Sie zum Reiter „Geräte“ im Reiter „Bastion“. Klicken Sie auf die Aktionsleiste des Geräts, das Sie öffnen möchten, und klicken Sie auf die Schaltfläche „Öffnen“.

<img src={ouvrirSession} />

Bei jeder Verbindung zu dem Gerät müssen Sie nur Ihre Authentifizierungsinformationen eingeben.

<img src={ouvrirSession2} />

Nach Eingabe Ihrer Anmeldeinformationen erscheint eine Benachrichtigung, die den Beginn der Sitzung bestätigt, und die Konsole für Ihre virtuelle Maschine öffnet sich.

## Eine Gerätekonfiguration ändern

Gehen Sie zum Reiter „Geräte“ im Abschnitt „Bastion“, klicken Sie auf die Aktionsleiste des Geräts, das Sie ändern möchten, und klicken Sie auf die Schaltfläche „Ändern“.

<img src={modifierSession} />

Sie können dann den Namen des Geräts, dessen Beschreibung, die zugehörige Appliance, das Protokoll (SSH oder RDP), die IP-Adresse des Hosts oder die Tastatursprache ändern.

<img src={modifierSession2} />

## Eine Gerätekonfiguration löschen

Gehen Sie zum Reiter „Geräte“ im Abschnitt „Bastion“, klicken Sie auf die Aktionsleiste des Geräts, das Sie löschen möchten, und klicken Sie auf die Schaltfläche „Löschen“.

<img src={supprimerSession} />
