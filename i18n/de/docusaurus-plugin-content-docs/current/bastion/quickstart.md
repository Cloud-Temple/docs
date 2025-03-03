---
title: Leitfaden für den Start
---


Diese Starthilfe erklärt, wie Sie eine Appliance anfordern und wie Sie eine neue Sitzung speichern und sich mit ihr verbinden.

## Voraussetzungen

1. Ein Cloud Temple Angebot (Appliance Bastion Abonnement) abgeschlossen haben.
2. Die zu verwaltenden Geräte müssen von dem Netzwerk aus zugänglich sein, in dem die Bastion Appliance bereitgestellt ist.
3. Rechte auf das Bastion Modul haben.
4. Im Rahmen einer On-Premise Appliance Bereitstellung müssen die entsprechenden Netzströme geöffnet sein.


## Erforderliche Ströme für den Betrieb des Bastion-Produkts

Mehrere Ströme sind für den ordnungsgemäßen Betrieb der Bastion Appliance unerlässlich.

### Die Bastion-Gateway
| Quelle                   | Ziel                                       | Protokoll |
|--------------------------|---------------------------------------------|-----------|
| Bastion Appliance Client | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### RDP-Verwaltungsströme

| Quelle                   | Ziel                         | Protokoll |
|--------------------------|-----------------------------|-----------|
| Bastion Appliance Client | Die zu verwaltenden Instanzen | TCP/3389  |

### SSH-Verwaltungsströme

| Quelle                   | Ziel                         | Protokoll |
|--------------------------|-----------------------------|-----------|
| Bastion Appliance Client | Die zu verwaltenden Instanzen | TCP/22    |


## Anforderung zur Erstellung einer Appliance
Bevor Sie eine Appliance bereitstellen können, müssen Sie eine Abonnementanforderung für eine Appliance über eine Supportanfrage stellen.
Der Support ist in der Shiva-Konsole über das Rettungsring-Symbol in der Leiste oben rechts im Fenster zugänglich.

![](images/shiva_support.png)


## Ein Gerät registrieren

Um regelmäßig auf ein zu verwaltendes Gerät zuzugreifen, ist es besser, eine Sitzung zu erstellen, die bei jeder Verbindung nur Ihren Benutzernamen und Ihr Passwort erfordert.

Dazu gehen Sie auf die Registerkarte „Geräte" im Menü „Bastion" und klicken auf die Schaltfläche „Neues Gerät".

![](images/creer_session.png)


Geben Sie dann die erforderlichen Informationen zur Erstellung Ihres Geräts an:

    - Name des Geräts;
    - Beschreibung;
    - Zugehörige Appliance;
    - Protokolltyp (SSH oder RDP);
    - IP-Adresse des Hosts;
    - Tastaturkonfiguration.

![](images/creer_session2.png)


Eine Benachrichtigung, die die Erstellung des Geräts bestätigt, sollte oben rechts auf der Seite erscheinen. Die Sitzung wird dann in die Liste Ihrer Geräte aufgenommen.

Um ein neues Gerät zu erstellen, können Sie auch über die Registerkarte „Appliances" auf die Aktionsleiste der Appliance klicken, mit der Sie ein Gerät verbinden möchten.

![](images/creer_session3.png)

## Verbindung zu einem Gerät herstellen

Gehen Sie auf die Registerkarte „Geräte" der Registerkarte „Bastion". Klicken Sie auf die Aktionsleiste des Geräts, das Sie öffnen möchten, und klicken Sie auf die Schaltfläche „Öffnen".

![](images/ouvrir_session.png)

Bei jeder Verbindung zu dem Gerät müssen Sie nur Ihre Authentifizierungsinformationen angeben.

![](images/ouvrir_session2.png)

Nach Eingabe Ihrer Anmeldedaten erscheint eine Benachrichtigung, die den Beginn der Verbindung zu Ihrem Gerät bestätigt, und die Konsole zu Ihrer virtuellen Maschine wird geöffnet.
