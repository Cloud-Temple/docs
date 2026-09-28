---
title: Eine Stormshield SNS EVA Firewall deployen
sidebar_label: Eine Stormshield SNS EVA Firewall deployen
sidebar_position: 6
---

# Eine Firewall Stormshield SNS EVA deployen

## Voraussetzungen

Bevor Sie beginnen, benötigen Sie ein aktives Cloud Temple-Konto und die entsprechenden Berechtigungen:

- ein Cloud Temple-Angebot abonniert haben;
- Berechtigungen für das Modul Compute besitzen.

Sobald diese Voraussetzungen erfüllt sind, dauert der Deployment nur wenige Minuten.

## Was ist Stormshield SNS

Stormshield Network Security (SNS) ist eine französische Firewall / UTM-Lösung, die von Stormshield entwickelt wird. Die virtuelle Variante heißt SNS EVA (Elastic Virtual Appliance). Ihre Stärken:

- eine vollständige Web-Verwaltungsoberfläche ;
- ein Filter- und NAT-Engine mit geordneten Regeln ;
- das integrierte dynamische Routing-Engine BIRD (BGP, OSPF, RIP) ;
- nativer IPsec- und SSL-VPN-Support.

Die gesamte Verwaltung erfolgt über einen Browser. Sobald das Netzwerk eingerichtet ist, ist kein Konsolenzugriff mehr erforderlich, außer für einige erweiterte Prüfungen wie den Status der BGP-Sitzungen.

## Das Bereitstellungsprinzip

Es werden zwei virtuelle Maschinen eingerichtet :

- das Firewall selbst, bereitgestellt aus dem SNS-EVA-Image ;
- eine Management-VM mit grafischer Oberfläche, im selben Netzwerk wie die LAN-Schnittstelle des Firewalls platziert. Von dieser VM aus wird die initiale Konfiguration des Firewalls durchgeführt.

Das Firewall verfügt über zwei Schnittstellen : LAN **(auf der internen Netzseite, auf SNS als `in` bezeichnet)** und WAN **(auf der Internetseite, auf SNS als `out` bezeichnet).**
Wir werden die LAN-Schnittstelle konfigurieren, um auf die Web-Oberfläche des Firewalls zuzugreifen und anschließend die Konfiguration des Internetzugangs durchzuführen.

# Schritt 1 — Netzwerkparameter in Shiva abrufen

In der Shiva-Oberfläche von Cloud Temple müssen Sie die folgenden Elemente abrufen, um die BGP-Session zu konfigurieren, die den Internetzugang bereitstellt:

- **Öffentliches Präfix** : Ihr Block öffentlicher IP-Adressen (Registerkarte „Öffentliche IPs")
- **Interconnect-Präfix** : das Punkt-zu-Punkt-Unternetz, das die BGP-Verbindung trägt (Registerkarte „Interconnect-IPs")
- **Geteilte Gateway-Adresse** (Registerkarte „Interconnect-IPs")
- **Lokales AS** : die AS-Nummer Ihrer Organisation
- **Partner-AS** : die AS-Nummer von Cloud Temple
- **Keepalive-Timer** : das Intervall, das die BGP-Session am Leben hält
- **Hold-Time-Timer** : die Verzögerung, bevor die Session als abgestürzt gilt
- **Adressen der Route Server** : die Server, mit denen die Routen ausgetauscht werden

Halten Sie diese Liste im Blick, wir werden darauf im WAN-Schritt und in der BIRD-Konfiguration zurückkommen.

![Paramètres BGP dans Shiva](/img/screenshots/shiva.png)

# Schritt 2 — Die beiden VMs bereitstellen

Von **Shiva** aus :

1. Stellen Sie die Firewall aus dem Bild SNS EVA aus der Marketplace bereit;
2. Stellen Sie die Management-VM mit grafischer Oberfläche (z. B. Ubuntu) bereit.

Die WAN-Schnittstelle Ihrer Firewall muss in Ihrem vLAN Internet mit einer IP aus dem von Shiva bereitgestellten Interconnect-Präfix konfiguriert werden.

# Schritt 3 — LAN konfigurieren und Web-Interface beitreten

Auf der LAN-Schnittstelle des Firewalls weisen Sie eine IP-Adresse Ihres internen Netzwerks mit der entsprechenden Subnetzmaske zu.
:::info
Bei SNS erfolgt dies beim ersten Start über die Konsole.
:::

![Interface LAN](/img/screenshots/storm-in.png)

Platzieren Sie anschließend die Management-VM in diesemselben Netzwerk.  
Für die Demonstration verwenden wir ein Ubuntu 26.04 LTS-Image, das in der Marketplace verfügbar ist, mit einer IP-Adresse desselben Subnetzes, die über Netplan zugewiesen wird.  
:::info
Das Standard-Gateway dieser VM muss die LAN-Adresse des Firewalls sein.
:::

Öffnen Sie einen Browser auf der Management-VM und geben Sie die Adresse `https://IP-LAN-du-firewall/admin` ein.

Sie sollten nun auf das Verwaltungs-Interface von SNS zugreifen können.

![Login firewall](/img/screenshots/storm-login.png)

<div align="center">

**Standard-Anmeldedaten**
Benutzername: **admin**
Passwort: **admin**

</div>

:::warning[Ändern Sie sofort das Passwort]
Bevor Sie weitermachen, ersetzen Sie das Standard-Passwort `admin`.
:::

# Schritt 4 — Konfiguration der WAN-Schnittstelle

Alles findet nun in der Web-Oberfläche unter **Konfiguration > Netzwerk** statt.

:::info[IP-Adressen sind Objekte]
Bei SNS gibt man keine IP-Adresse direkt in die Felder für Routen, Filterregeln oder NAT ein: Zuerst muss sie als Netzwerkobjekt unter Konfiguration > Objekte > Netzwerkobjekte deklariert werden, und anschließend ausgewählt werden.  
  
 Erstellen Sie daher nach und nach die Objekte, die Sie benötigen (Gateway, Route Server, öffentliches Präfix, LAN- und WAN-Netzwerke).
:::

## 4.1 — Die WAN-Schnittstelle

In **Netzwerk > Schnittstellen**, konfigurieren Sie auf der WAN-Schnittstelle (`out`) eine IP aus dem Interconnect-Präfix.

![Interface WAN](/img/screenshots/storm-out.png)

## 4.2 — Das Gateway

In **Netzwerk > Routing**, definieren Sie das Standard-Gateway mit der in Schritt 1 notierten gemeinsamen Gateway-Adresse.

![Passerelle WAN](/img/screenshots/storm-gw.png)

# Schritt 5 — Loopback für das öffentliche Präfix erstellen

Das öffentliche Präfix muss über eine Loopback-Schnittstelle am Firewall getragen werden.

Unter **Netzwerk > Virtuelle Schnittstellen**, Registerkarte **Loopback**, fügen Sie eine Loopback mit Ihrer öffentlichen IP-Adresse als `/32` hinzu.

![Loopback](/img/screenshots/storm-loopback.png)

# Schritt 6 — BGP-Session aufbauen

Auf SNS wird BGP im BIRD-Engine konfiguriert, über **Konfiguration > Netzwerk > Dynamische Routung**.

## 6.1 — Statische Routen zu den Route Servern

In **Netzwerk > Routing > Statische Routen**, fügen Sie eine `/32`-Route zu jedem Route Server hinzu, die auf das gemeinsame Gateway verweist.  

:::info
Diese Routen müssen hier und nicht in BIRD deklariert werden, um zu verhindern, dass der BGP-Verkehr durch IP-Spoofing-Alarme blockiert wird.
:::

![Statische Routen zu den Route Servern](/img/screenshots/storm-routes.png)

## 6.2 — Dynamisches Routing aktivieren

Aktivieren Sie unter **Dynamisches Routing** das dynamische BIRD-Routing und wählen Sie die Version **BIRD v2** aus.

## 6.3 — BIRD-Konfiguration schreiben

Im Tab **BIRD V2** geben Sie die Konfiguration ein und ersetzen die Werte durch Ihre eigenen (notiert in Schritt 1). Pro Route Server wird ein Block `protocol bgp` deklariert.

![Configuration BIRD](/img/screenshots/storm-bird-bgp.png)


```
router id <ip-wan-firewall>;

# Nur das öffentliche Präfix wird angekündigt
filter export_public {
    if net = <prefixe-public> then accept;
    else reject;
}

# Blackhole-Route zum Ankündigen des öffentlichen Präfixes
protocol static StaticRoutes {
    ipv4;
    route <prefixe-public> blackhole;
}

protocol kernel {
    persist;
    scan time 20;
    ipv4 {
        export all;
        preference 254;
    };
    learn;
}

protocol device {
    scan time 10;
}

# Sitzung zum Route Server 1
protocol bgp RS1 {
    description "Route server 1";
    local as <local-as>;
    neighbor <ip-route-server-1> as <as-partenaire>;
    multihop 5;
    hold time <hold-time>;
    keepalive time <keepalive>;
    source address <ip-wan-firewall>;
    ipv4 {
        import all;
        export filter export_public;
    };
}

# Sitzung zum Route Server 2
protocol bgp RS2 {
    description "Route server 2";
    local as <local-as>;
    neighbor <ip-route-server-2> as <as-partenaire>;
    multihop 5;
    hold time <hold-time>;
    keepalive time <keepalive>;
    source address <ip-wan-firewall>;
    ipv4 {
        import all;
        export filter export_public;
    };
}
```

Klicken Sie auf **Konfiguration überprüfen** und dann auf **Anwenden**.

:::info[Warum Multi-Hop?]
Die Route Server liegen mehr als einen Hop entfernt, während eine eBGP-Sitzung standardmäßig ein TTL von 1 hat: ohne `multihop` würden die Pakete die Server nie erreichen.
:::

## 6.4 — Sitzung überprüfen

Öffnen Sie über die Web-Oberfläche **Monitoring > Verbindungen**. Die beiden Sitzungen zu den Route Servern erscheinen dort mit dem Protokoll `tcp`, dem Dienst `bgp`, mit in beide Richtungen ausgetauschtem Verkehr und einer zunehmenden Dauer: Die Sitzungen sind aufgebaut.

![BGP-Sitzungen in Monitoring > Verbindungen](/img/screenshots/storm-gui-bgp.png)

Die Überprüfung kann auch über die Konsole erfolgen: `birdc` und dann `show protocols`. Der Status muss für RS1 und RS2 `Established` anzeigen.

![birdc show protocols](/img/screenshots/storm-birdc.png)

# Schritt 7 — Filterung konfigurieren

Die Filterung erfolgt unter Konfiguration > Sicherheitsrichtlinie > Filterung und NAT, Registerkarte Filterung.

Erstellen Sie die Sicherheitsregeln gemäß dem Screenshot unten.  
Die Richtlinie wird von oben nach unten ausgewertet: Die Regeln, die die Firewall-Verwaltung und die BGP-Sitzungen erlauben, müssen vor den Internet-Zugangsregeln platziert werden.  
  
Schließlich muss die Regel Block all unbedingt an letzter Position bleiben, um den gesamten nicht ausdrücklich erlaubten Traffic zu blockieren.

:::info
Die Regeln, die die BGP-Sitzungen zu den beiden Route Servern erlauben, sind für die erfolgreiche Einrichtung des Peerings unerlässlich.
:::
  

![Show flow rules](/img/screenshots/storm-rules.png)

Die Regel `Block all` muss an letzter Position bleiben. Die Regeln 3 und 4 sind erforderlich, damit sich die BGP-Sitzungen aufbauen können.

# Schritt 8 — NAT konfigurieren

Öffnen Sie im selben Menü den Tab NAT.

Konfigurieren Sie die Regeln wie auf dem folgenden Screenshot angezeigt.  
:::info
 Die Reihenfolge ist entscheidend: Die ersten beiden Regeln schließen den BGP-Verkehr von jeder Adressübersetzung aus, während die beiden folgenden die Übersetzung der Internet-Ströme aus dem LAN und dem Firewall durchführen.
:::
  
Verwenden Sie für die Internet-Zugriffsregeln das Objekt **Internet** als Zielstelle anstelle von Any.  

:::info
Dieses Objekt schließt automatisch die direkt am Firewall angeschlossenen Netzwerke aus, wodurch NAT für Verwaltungs-Kommunikationen oder BGP-Sitzungen vermieden wird.
:::
Die BGP-Ausschlussregeln verwenden dieselbe Quelladresse vor und nach der Übersetzung. Diese Konfiguration erfüllt die Einschränkung von SNS, die keine NAT-Regel ohne Translation zulässt, und lässt den BGP-Verkehr unverändert.

Sobald die Regeln erstellt sind, aktivieren Sie die Richtlinie **(Éditer > Activer cette politique).**

![Show NAT](/img/screenshots/storm-nat.png)


Als Ziel der Internet-Zugriffsregeln (3 und 4) verwenden Sie das Objekt **Internet** und nicht **Any**: Das Objekt Internet schließt die direkt am Firewall angeschlossenen Netzwerke aus, wodurch NAT für den Verwaltungs- und BGP-Verkehr vermieden wird.

Für die Regeln 1 und 2 ist die übersetzte Quelle identisch mit der ursprünglichen Quelle: SNS akzeptiert keine NAT-Regel ohne Translation, dieser Trick führt also dazu, den BGP-Verkehr unverändert zu lassen und gleichzeitig diese Einschränkung zu erfüllen.

Nachdem Sie die Regeln eingegeben haben, aktivieren Sie die Richtlinie, um sie wirksam zu machen (**Éditer > Activer cette politique**).

# Schritt 9 — Konnektivität testen

**Von der Firewall-Konsole aus:**

```
birdc show protocols     # les sessions aux route serveurs doivent être Established
ping 1.1.1.1             # le firewall accède à Internet
```

**Von der Management-Maschine aus:**

![ping](/img/screenshots/pingvm.png)

# Fazit

Das Stormshield SNS EVA-Firewall ist bereitgestellt, die BGP-Sitzungen sind über BIRD eingerichtet und Ihr öffentlicher Präfix wird angekündigt.

**Bei Bedarf die offizielle Dokumentation von Stormshield.**

https://documentation.stormshield.eu/SNS/v4/fr/Content/Home.htm