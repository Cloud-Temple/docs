---
title: Tutorials
---

Diese Tutorials helfen Ihnen, ein Bastion Cloud Temple vom Shiva-Portal aus einzurichten und zu verwalten.

## Voraussetzungen

1. Ein Abonnement für das Cloud Temple-Angebot (Bastion Appliance-Abonnement) abgeschlossen haben.
2. Die zu verwaltenden Geräte müssen aus dem Netzwerk, in dem die Appliance Bastion bereitgestellt ist, zugänglich sein.
3. Berechtigungen für das Bastion-Modul haben.
4. Im Fall einer Bereitstellung der Appliance On-Premises müssen die entsprechenden Verbindungen geöffnet sein.

## Schnittstelle

Nach dem Einloggen in das Shiva-Webportal gehen Sie zum Tab "Bastion" im linken Menü.

![](images/sessions.png)

Der Tab „Equipements“ ermöglicht es Ihnen, die Liste Ihrer Geräte anzusehen. Ein Gerät entspricht einer Verbindungskonfiguration über eine Appliance Bastion. Für jedes Gerät werden Name, Tags, Beschreibung, die damit verbundene Appliance, der Verbindungstyp (SSH oder RDP), die IP des Hosts und die Tastaturkonfiguration angegeben.

Sie können die Geräte nach den ihnen zugewiesenen Tags filtern und eine Suchmaschine ermöglicht es, eine Sitzung nach ihrem Namen zu durchsuchen.

![](images/sessions2.png)

Der Tab „Appliances“ gibt Ihnen die Liste Ihrer Appliances Bastion. Für jede Appliance sind der Name der Appliance und ihre Beschreibung angegeben.

Eine Suchmaschine steht zur Verfügung, um eine Appliance nach ihrem Namen zu suchen.

![](images/appliances.png)

## Appliance bereitstellen
Bevor Sie eine Appliance bereitstellen können, müssen Sie einen Abonnementantrag für eine Appliance über eine Anfrage an den Support stellen.

## Einen Fluss zu einem Gerät öffnen
Im Tab „Appliances“ klicken Sie auf die Aktionsleiste der Appliance, die Sie öffnen möchten. Klicken Sie dann auf die Schaltfläche „Ouvrir“.

![](images/ouvrir_appliance.png)

Geben Sie dann die für die Verbindung erforderlichen Informationen ein:

    - Protokollwahl (SSH oder RDP);
    - IP-Adresse des zu verwaltenden Hosts;
    - Anmeldeinformationen;
    - Tastaturkonfiguration.

Klicken Sie dann auf „Connecter“, um die Appliance zu öffnen. Die Konsole der zu verwaltenden virtuellen Maschine öffnet sich dann.

## Ein Gerät registrieren

Um regelmäßig auf ein zu verwaltendes Gerät zuzugreifen, ist es besser, eine Gerätkonfiguration zu erstellen, die bei jeder Verbindung nur Ihren Benutzernamen und Ihr Passwort erfordert.

Gehen Sie dazu in den Tab „Equipements“ im Menü „Bastion“ und klicken Sie auf die Schaltfläche „Nouveau équipement“.

![](images/creer_session.png)

Geben Sie dann die für die Erstellung Ihres Geräts erforderlichen Informationen ein:

    - Name des Geräts;
    - Beschreibung;
    - Zugehörige Appliance;
    - Protokollart (SSH oder RDP);
    - IP-Adresse des Hosts;
    - Tastatursprache.

![](images/creer_session2.png)

Eine Benachrichtigung, die die Erstellung Ihrer Gerätkonfiguration bestätigt, sollte oben rechts auf der Seite erscheinen. Die Konfiguration wird dann der Liste Ihrer Geräte hinzugefügt.

Um eine neue Verbindung zu erstellen, können Sie auch den Tab „Appliances“ verwenden, indem Sie auf die Aktionsleiste der Appliance klicken, der Sie eine Gerätkonfiguration zuordnen möchten.

![](images/creer_session3.png)

## Verbindung zu einem Gerät herstellen

Gehen Sie in den Tab „Equipements“ im Tab „Bastion“. Klicken Sie auf die Aktionsleiste des Geräts, das Sie öffnen möchten, und klicken Sie auf die Schaltfläche „Ouvrir“.

![](images/ouvrir_session.png)

Bei jeder Verbindung zu dem Gerät müssen Sie nur Ihre Anmeldeinformationen eingeben.

![](images/ouvrir_session2.png)

Nachdem Sie Ihre Anmeldedaten eingegeben haben, erscheint eine Benachrichtigung, die den Beginn der Sitzung bestätigt, und die Konsole für Ihre virtuelle Maschine öffnet sich.

## Eine Gerätkonfiguration ändern

Gehen Sie in den Tab „Equipements“ im Bereich „Bastion“, klicken Sie auf die Aktionsleiste des Geräts, das Sie ändern möchten, und klicken Sie auf die Schaltfläche „Modifier“.

![](images/modifier_session.png)

Sie können dann den Namen des Geräts, die Beschreibung, die zugehörige Appliance, das Protokoll (SSH oder RDP), die IP-Adresse des Hosts oder die Tastatursprache ändern.

![](images/modifier_session2.png)

## Eine Gerätkonfiguration löschen

Gehen Sie in den Tab „Equipements“ im Bereich „Bastion“, klicken Sie auf die Aktionsleiste des Geräts, das Sie löschen möchten, und klicken Sie auf die Schaltfläche „Supprimer“.

![](images/supprimer_session.png)