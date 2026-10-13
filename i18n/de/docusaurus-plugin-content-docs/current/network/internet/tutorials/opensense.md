---
sidebar_position: 1
---

# Deployen eines Open-Source-Firewalls OPNsense

## Voraussetzungen

Bevor Sie beginnen, benötigen Sie ein aktives Cloud Temple-Konto und die entsprechenden Berechtigungen:

- ein Cloud Temple-Angebot abonniert haben;
- Berechtigungen für das Modul Compute besitzen.

Sobald diese Voraussetzungen erfüllt sind, dauert der Deployment nur wenige Minuten.

## Was ist OPNsense

OPNsense ist eine Open-Source-Firewall und ein Router, der auf FreeBSD basiert. Es handelt sich um einen Fork von pfSense, der 2014 entstanden ist. Seine Stärken:

- eine klare und moderne Web-Oberfläche;
- Updates zweimal pro Woche;
- eine modulare Architektur mit einem Plugin-System;
- nativer Support für OpenVPN, WireGuard und IPsec.

Die gesamte Administration erfolgt über einen Browser. Sobald das Netzwerk eingerichtet ist, ist ein Konsolenzugriff daher nie wieder erforderlich.

## Das Prinzip der Bereitstellung

Es werden zwei virtuelle Maschinen eingerichtet:

- **der Firewall** selbst, bereitgestellt aus dem OPNsense-Template;
- **eine Management-VM** mit grafischer Oberfläche, im selben Netzwerk wie die LAN-Schnittstelle der Firewall platziert. Von dieser VM aus wird die anfängliche Konfiguration der Firewall durchgeführt.

Die Firewall verfügt über zwei Schnittstellen: **LAN** (Seite des internen Netzwerks) und **WAN** (Seite des Internets).  
Wir werden die LAN-Schnittstelle konfigurieren, um auf die Web-Oberfläche der Firewall zuzugreifen, um anschließend die Konfiguration des Internetzugangs durchzuführen.

# Schritt 1 — Netzwerkparameter in Shiva abrufen

In der Shiva-Oberfläche von Cloud Temple müssen Sie die folgenden Elemente abrufen, um die BGP-Session zu konfigurieren, die den Internetzugang bereitstellt

- **Öffentliches Präfix** : Ihr Block öffentlicher IP-Adressen (Registerkarte „Öffentliche IPs")
- **Interconnect-Präfix** : das Punkt-zu-Punkt-Unternetz, das die BGP-Verbindung trägt (Registerkarte „Interconnect-IPs")
- **Gemeinsame Gateway-Adresse** (Registerkarte „Interconnect-IPs")
- **Lokales AS** : die AS-Nummer Ihrer Organisation
- **Partner-AS** : die AS-Nummer von Cloud Temple
- **Keepalive-Timer** : das Intervall, das die BGP-Session am Leben hält
- **Hold-Time-Timer** : die Verzögerung, bevor die Session als abgestürzt gilt
- **Adressen der Route Server** : die Server, mit denen die Routen ausgetauscht werden

Halten Sie diese Liste im Blick, wir werden in der WAN-Schritt darauf zurückkommen.

![BGP-Parameter in Shiva](/img/screenshots/shiva.png)
![Öffentliche IPs](/img/screenshots/ip-publiques.png)
![Interconnect-IPs](/img/screenshots/ip-dintercos.png)

# Schritt 2 — Die beiden VMs bereitstellen

Von **Shiva** aus:

1. stellen Sie das Firewall aus dem OPNsense-Template bereit;
2. stellen Sie die Management-VM mit grafischer Oberfläche bereit, hier verwenden wir das auf der Marketplace verfügbare Ubuntu 26.04 LTS-Image.

Die WAN-Schnittstelle Ihres Firewalls muss in Ihrem Internet-VLAN mit einer IP aus dem von Shiva bereitgestellten Interconnect-Präfix konfiguriert werden.

# Schritt 3 — LAN konfigurieren und die Web-Oberfläche aufrufen


Geben Sie auf der **LAN**-Schnittstelle des Firewalls eine IP-Adresse aus Ihrem internen Netzwerk ein, zusammen mit der Subnetzmaske und dem Gateway.

![Paramètres LAN](/img/screenshots/lan.png)

Platzieren Sie anschließend die Management-VM in diesemselben Netzwerk.  
Für die Demonstration verwenden wir Ubuntu 22.04, mit einer IP-Adresse aus demselben Subnetz, die über Netplan zugewiesen wird.

Öffnen Sie einen Browser auf der Management-VM und geben Sie die LAN-IP-Adresse des Firewalls ein.  
  
Sie sollten nun auf die Verwaltungsoberfläche von OPNsense zugreifen können.

![Login firewall](/img/screenshots/login-fw.png)

<div align="center">

**Standard-Anmeldedaten**
Benutzername: **root**
Passwort: **opnsense**

</div>

:::warning[Changez le mot de passe tout de suite]
Bevor Sie weitermachen, ersetzen Sie das Standard-Passwort `root`.
:::

# Schritt 4 — Konfiguration der WAN-Schnittstelle  

Alles findet nun in der Web-Oberfläche statt.

## 4.1 — Das Gateway

Geben Sie zuerst das **Gateway** WAN mit der in Schritt 1 notierten gemeinsamen Gateway-Adresse ein.

![Gateway WAN](/img/screenshots/wan-gw.png)

## 4.2 — Die WAN-Schnittstelle

Konfigurieren Sie auf der WAN-Schnittstelle eine IP aus dem Interconnect-Präfix und ordnen Sie die Schnittstelle dem gerade erstellten Gateway zu.

![Interface WAN](/img/screenshots/ip-wan.png)

# Schritt 5 — BGP-Session aufbauen

## 5.1 — Routing aktivieren

Gehen Sie in **Routing > General** und aktivieren Sie **Enable**.

![Routing General](/img/screenshots/routing-general.png)
![Routing BGP](/img/screenshots/routing-bgp.png)

Geben Sie anschließend die Verbindungsdaten zu den Route Servern ein:

- die IPs der Route Servern;
- die AS-Nummer des Partners.

:::info[Warum Multi-Hop?]
Aktivieren Sie das Feld **multi-hop**. Die Route Servern befinden sich auf mehr als einem Hop, während eine eBGP-Session standardmäßig eine TTL von 1 hat: ohne Multi-Hop würden die Pakete die Server nie erreichen.
:::

![PEER1](/img/screenshots/peer1.png)
![PEER2](/img/screenshots/peer2.png)

## 5.2 — Statische Routen zu den Route Servern

Fügen Sie unter **Routing > Static** die Routen hinzu, um diese Server zu erreichen (jeweils als `/32`).

![Activer les routes statiques](/img/screenshots/routing-static-enable.png)
![Route RS1](/img/screenshots/routes-peer1.png)
![Route RS2](/img/screenshots/routes-peer2.png)

## 5.3 — Umverteilung der Routen

Erlauben Sie die **Umverteilung der statischen und direkt verbundenen Routen**, um Ihr öffentliches Präfix anzukündigen.

![Redistribution des routes statiques](/img/screenshots/redistribute-static.png)
![Redistribution des routes connectées](/img/screenshots/redistribute-connected.png)

## 5.4 — Session überprüfen

Richtung **Routing > Diagnostic > BGP**.  
Wenn die Parameter korrekt sind, zeigt der **BGP State** `established` an.

![Peer 1 established](/img/screenshots/peer1-established.png)
![Peer 2 established](/img/screenshots/peer2-established.png)

# Schritt 6 — Öffentliches Präfix ankündigen

Immer noch in **Routing > Static**, erstellen Sie eine Route, die auf die **Loopback** des Firewalls zeigt. Dies erstellt eine „Blackhole"-Route.

Diese Route ermöglicht es, Ihr öffentliches Präfix den Route-Servern anzukündigen.

![Préfixe public / route blackhole](/img/screenshots/prefix-pub.png)

# Schritt 7 — NAT konfigurieren

Zum Abschluss müssen einige NAT-Regeln manuell eingegeben werden.  
**Die Reihenfolge ist entscheidend** : Die Regeln „kein NAT" müssen vor den Internet-Zugangsregeln stehen, andernfalls wird NAT auf den BGP-Verkehr angewendet und die Session bricht ab.

**Kein NAT mit BGP-Peers** (diese Regel ganz oben) :

**Internetzugang für das LAN-Netzwerk ermöglichen** :

**Internetzugang für die Firewall selbst**, für deren Updates :


![NAT Rules](/img/screenshots/NAT-rules.png)

Es bleibt nur noch, die Internetverbindung von der Management-Maschine aus zu testen :

![ping](/img/screenshots/pingvm.png)

# Fazit

Das OPNsense-Firewall ist bereitgestellt, die BGP-Sitzungen sind aufgebaut und Ihr öffentlicher Präfix wird angekündigt.  


**Bei Bedarf die offizielle OPNsense-Dokumentation.**


https://docs.opnsense.org/index.html