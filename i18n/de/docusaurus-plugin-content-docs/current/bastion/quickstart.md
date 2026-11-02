---
title: Schnellstartanleitung
---
import creerSession from '@site/docs/bastion/images/creer_session.png'
import creerSession2 from '@site/docs/bastion/images/creer_session2.png'
import creerSession3 from '@site/docs/bastion/images/creer_session3.png'
import ouvrirSession from '@site/docs/bastion/images/ouvrir_session.png'
import ouvrirSession2 from '@site/docs/bastion/images/ouvrir_session2.png'

Diese Schnellstartanleitung zeigt, wie Sie das Produkt Bastion aktivieren, ein Gerät registrieren und sich damit verbinden.

## Voraussetzungen

1. Das Produkt Bastion muss für Ihre Organisation aktiviert sein.
2. Die zu verwaltenden Geräte müssen aus dem Netzwerk erreichbar sein, in dem die Appliance Bastion bereitgestellt ist.
3. Es müssen Berechtigungen für das Bastion-Modul vorliegen.
4. Bei einer On-Premise-Bereitstellung der Appliance müssen die entsprechenden Netzwerkflüsse freigeschaltet sein.

## Erforderliche Datenflüsse für den Betrieb des Bastion-Produkts

Mehrere Datenflüsse sind für den ordnungsgemäßen Betrieb der Bastion-Appliance erforderlich.

### Das Bastion-Gateway

| Quelle                   | Ziel                                 | Protokoll |
|--------------------------|---------------------------------------------|-----------|
| Client-Bastion-Appliance | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### RDP-Verwaltungsfluss

| Quelle                   | Ziel                        | Protokoll |
|--------------------------|-----------------------------|-----------|
| Client-Bastion-Appliance | Die zu verwaltenden Instanzen | TCP/3389  |

### SSH-Verwaltungsfluss

| Quelle                   | Ziel                         | Protokoll |
|--------------------------|------------------------------|-----------|
| Client-Bastion-Appliance | Die zu verwaltenden Instanzen | TCP/22    |

<a id="demander-la-création-dune-appliance"></a>

## Das Produkt Bastion aktivieren

Das Produkt Bastion wird im Self-Service über die Ansicht Organisation der Cloud Temple-Konsole aktiviert. Sie können sich auch an Ihren gewohnten Vertriebsansprechpartner wenden.

## Gerät registrieren

Um regelmäßig auf ein zu verwaltendes Gerät zugreifen zu können, empfiehlt es sich, es zu registrieren: Bei jeder Anmeldung werden dann nur Ihr Benutzername und Ihr Passwort abgefragt.

Navigieren Sie dazu zum Reiter « Geräte » im Menü « Bastion » und klicken Sie auf die Schaltfläche « Neues Gerät ».

<img src={creerSession} />

Geben Sie anschließend die für die Erstellung Ihres Geräts erforderlichen Informationen ein:

    - Gerätename ;
    - Beschreibung ;
    - Zugehörige Appliance ;
    - Protokolltyp (SSH oder RDP) ;
    - IP-Adresse des Hosts ;
    - Tastaturlayout.

<img src={creerSession2} />

Eine Benachrichtigung über die erfolgreiche Geräteerstellung sollte oben rechts auf der Seite erscheinen. Das Gerät wird anschließend zur Liste Ihrer Geräte hinzugefügt.

Um ein neues Gerät zu erstellen, können Sie alternativ den Reiter « Appliances » aufrufen und auf die Aktionsleiste der Appliance klicken, der Sie das Gerät zuordnen möchten.

<img src={creerSession3} />

## Verbindung zu einem Gerät herstellen

Navigieren Sie zur Registerkarte „Geräte“ in der Registerkarte „Bastion“. Klicken Sie auf die Aktionsleiste des Geräts, das Sie öffnen möchten, und klicken Sie auf die Schaltfläche „Öffnen“.

<img src={ouvrirSession} />

Bei jeder Verbindung zu einem Gerät müssen Sie lediglich Ihre Anmeldeinformationen eingeben.

<img src={ouvrirSession2} />

Nachdem Sie Ihre Zugangsdaten eingegeben haben, erscheint eine Benachrichtigung, die den Beginn der Verbindung zu Ihrem Gerät bestätigt, und die Konsole zu Ihrer virtuellen Maschine wird geöffnet.