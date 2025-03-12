---
title: Schnellstartanleitung
---
import shivaSupport from './images/shiva_support.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'

Diese Schnellstartanleitung zeigt Ihnen, wie Sie die Erstellung einer Appliance beantragen und wie Sie eine neue Sitzung registrieren und sich damit verbinden können.

## Voraussetzungen

1. Sie haben das Cloud Temple-Angebot abonniert (Bastion Appliance-Abonnement).
2. Die zu verwaltenden Geräte müssen über das Netzwerk erreichbar sein, in dem die Bastion Appliance bereitgestellt wird.
3. Sie haben die Rechte für das Bastion-Modul.
4. Bei der Bereitstellung der On-Premise-Appliance müssen die entsprechenden Datenflüsse geöffnet sein.

## Für den Betrieb des Bastion-Produkts erforderliche Datenflüsse

Für den ordnungsgemäßen Betrieb der Bastion Appliance sind mehrere Datenflüsse erforderlich.

### Das Bastion-Gateway
| Quelle                   | Ziel                                        | Protokoll |
|--------------------------|---------------------------------------------|-----------|
| Bastion-Client-Appliance | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### RDP-Verwaltungsdatenflüsse

| Quelle                   | Ziel                        | Protokoll |
|--------------------------|----------------------------|-----------|
| Bastion-Client-Appliance | Zu verwaltende Instanzen   | TCP/3389  |

### SSH-Verwaltungsdatenflüsse

| Quelle                   | Ziel                        | Protokoll |
|--------------------------|----------------------------|-----------|
| Bastion-Client-Appliance | Zu verwaltende Instanzen   | TCP/22    |

## Beantragung der Erstellung einer Appliance
Bevor Sie eine Appliance bereitstellen können, müssen Sie ein Appliance-Abonnement über eine Support-Anfrage beantragen.
Der Support ist in der Shiva-Konsole über das Rettungsring-Symbol in der Leiste oben rechts im Fenster zugänglich.

<img src={shivaSupport} />

## Gerät registrieren

Um regelmäßig auf ein zu verwaltendes Gerät zuzugreifen, ist es sinnvoller, eine Sitzung zu erstellen, die bei jeder Verbindung nur Ihren Benutzernamen und Ihr Passwort erfordert.

Gehen Sie dazu auf die Registerkarte "Geräte" im Menü "Bastion" und klicken Sie dann auf die Schaltfläche "Neues Gerät".

<img src={creerSession} />

Füllen Sie dann die notwendigen Informationen für die Erstellung Ihres Geräts aus:

    - Gerätename;
    - Beschreibung;
    - Zugehörige Appliance;
    - Protokolltyp (SSH oder RDP);
    - Host-IP-Adresse;
    - Tastaturkonfiguration.

<img src={creerSession2} />

Eine Benachrichtigung, die die Erstellung des Geräts anzeigt, sollte oben rechts auf der Seite erscheinen. Die Sitzung wird dann zur Liste Ihrer Geräte hinzugefügt.

Um ein neues Gerät zu erstellen, können Sie auch über die Registerkarte "Appliances" gehen, indem Sie auf die Aktionsleiste der Appliance klicken, mit der Sie ein Gerät verknüpfen möchten.

<img src={creerSession3} />

## Verbindung zu einem Gerät herstellen

Gehen Sie zur Registerkarte "Geräte" der Registerkarte "Bastion". Klicken Sie auf die Aktionsleiste des Geräts, das Sie öffnen möchten, und klicken Sie auf die Schaltfläche "Öffnen".

<img src={ouvrirSession} />

Bei jeder Verbindung zum Gerät müssen Sie nur Ihre Authentifizierungsinformationen eingeben.

<img src={ouvrirSession2} />

Nach der Eingabe Ihrer Anmeldedaten erscheint eine Benachrichtigung, die den Beginn der Verbindung mit Ihrem Gerät bestätigt, und die Konsole zu Ihrer virtuellen Maschine wird geöffnet.
