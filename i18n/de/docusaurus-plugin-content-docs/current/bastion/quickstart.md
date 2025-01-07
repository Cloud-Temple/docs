---
title: Quickstart
---

Dieser Schnellstart-Leitfaden zeigt Ihnen, wie Sie die Erstellung einer Appliance anfordern und wie Sie eine neue Sitzung registrieren und sich damit verbinden.

## Voraussetzungen

1. Ein Abonnement bei Cloud Temple (Appliance Bastion Abonnement) haben.
2. Die zu verwaltenden Geräte müssen vom Netzwerk erreichbar sein, in dem die Bastion-Appliance bereitgestellt ist.
3. Berechtigungen für das Bastion-Modul haben.
4. Im Fall einer lokalen Appliance-Bereitstellung müssen die entsprechenden Datenströme geöffnet sein.

## Die für den Betrieb des Bastion-Produkts erforderlichen Datenströme

Mehrere Datenströme sind für den ordnungsgemäßen Betrieb der Bastion-Appliance erforderlich.

### Die Bastion-Gateway
| Quelle                   | Ziel                                         | Protokoll |
|--------------------------|----------------------------------------------|-----------|
| Bastion-Appliance-Client | 91.223.207.71 (botg.shiva.cloud-temple.com)  | UDP/4242  |

### RDP-Administrationsströme

| Quelle                   | Ziel                            | Protokoll |
|--------------------------|---------------------------------|-----------|
| Bastion-Appliance-Client | Die zu verwaltenden Instanzen   | TCP/3389  |

### SSH-Administrationsströme

| Quelle                   | Ziel                            | Protokoll |
|--------------------------|---------------------------------|-----------|
| Bastion-Appliance-Client | Die zu verwaltenden Instanzen   | TCP/22    |

## Anfordern der Erstellung einer Appliance
Bevor Sie eine Appliance bereitstellen können, müssen Sie ein Appliance-Abonnement über eine Anfrage beim Support anfordern.
Der Support ist über die Shiva-Konsole über das Rettungsring-Symbol in der oberen rechten Ecke des Fensters zugänglich.

![](images/shiva_support.png)

## Ein Gerät registrieren

Um regelmäßig auf ein zu verwaltendes Gerät zuzugreifen, ist es sinnvoller, eine Sitzung zu erstellen, bei der Sie bei jeder Verbindung nur Ihren Benutzernamen und Ihr Passwort eingeben müssen.

Gehen Sie dazu auf die Registerkarte „Geräte“ im „Bastion“-Menü und klicken Sie auf die Schaltfläche „Neues Gerät“.

![](images/creer_session.png)

Geben Sie dann die erforderlichen Informationen für die Erstellung Ihres Geräts ein:

    - Name des Geräts;
    - Beschreibung;
    - Zugehörige Appliance;
    - Protokolltyp (SSH oder RDP);
    - IP-Adresse des Hosts;
    - Tastaturkonfiguration.

![](images/creer_session2.png)

Eine Benachrichtigung, die die Erstellung des Geräts bestätigt, sollte oben rechts auf der Seite erscheinen. Die Sitzung wird dann zu Ihrer Geräteliste hinzugefügt.

Um ein neues Gerät zu erstellen, können Sie auch über die Registerkarte „Appliances“ gehen, indem Sie auf die Aktionsleiste der Appliance klicken, mit der Sie ein Gerät verknüpfen möchten.

![](images/creer_session3.png)

## Verbindung zu einem Gerät herstellen

Gehen Sie auf die Registerkarte „Geräte“ im „Bastion“-Menü. Klicken Sie auf die Aktionsleiste des Geräts, das Sie öffnen möchten, und klicken Sie auf die Schaltfläche „Öffnen“.

![](images/ouvrir_session.png)

Bei jeder Verbindung zum Gerät müssen Sie nur Ihre Authentifizierungsdaten eingeben.

![](images/ouvrir_session2.png)

Nach Eingabe Ihrer Anmeldeinformationen erscheint eine Benachrichtigung, die den Beginn der Verbindung zu Ihrem Gerät bestätigt und die Konsole auf Ihre virtuelle Maschine öffnet.