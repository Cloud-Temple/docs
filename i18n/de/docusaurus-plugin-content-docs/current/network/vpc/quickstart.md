---
title: Schnellstart
---
import newTabNetwork from './images/new_tab_network.png'
import vpcCreateButton from './images/vpc_create_button.png'
import vpcCreateModal from './images/vpc_create_modale.png'
import vpcOverview from './images/vpc.png'
import vpcDetailsView from './images/vpc_details_view.png'
import vpcNewPrivateNetwork from './images/vpc_new_private_network.png'
import vpcActivateGatewayButton from './images/vpc_activate_gateway_button.png'
import vpcActivateGatewayModal from './images/vpc_activate_gatewat_modale.png'
import vpcOrders from './images/vpc_orders.png'
import vpcStaticIps from './images/vpc_static_ips.png'
import vpcNewStaticIps from './images/vpc_new_static_ips.png'
import vpcNewStaticIpsModale from './images/vpc_new_static_ips_modale.png'
import vpcStaticIpsAssociate from './images/vpc_static_ips_associate_png.png'

# VPC-Schnellstart

Dieser Leitfaden führt Sie durch die Erstellung Ihrer ersten Virtual Private Cloud (VPC) und die Bereitstellung Ihrer ersten privaten Netzwerke.

## Voraussetzungen

Derzeit erfordert die Aktivierung des VPC-Dienstes ein Abonnement für ein **IaaS Open Source**-Angebot. (Diese Bedingung wird später aufgehoben).

## Schritt 1: Zugriff auf die Konsole

1.  Melden Sie sich an der Cloud Temple-Konsole an.
2.  Wählen Sie im Navigationsmenü **Network** und dann **VPC**.

<img src={newTabNetwork} />

## Schritt 2: Eine VPC bestellen

1.  Klicken Sie auf die Schaltfläche **Neue VPC**.
<img src={vpcCreateButton} />

2.  Füllen Sie das geführte Formular aus:
    *   **VPC-Name**: Wählen Sie einen eindeutigen Namen zur Identifizierung Ihrer Umgebung.
    *   **Beschreibung**: (Optional) Fügen Sie eine Beschreibung hinzu.
<img src={vpcCreateModal} />

3.  Bestätigen Sie die Erstellung.

> **Hinweis**: Die VPC-Bereitstellung ist vollautomatisch und dauert in der Regel weniger als eine Stunde.

### Alternative: Über den Reiter Bestellungen

Sie können die Bestellung von VPC-Ressourcen auch direkt über das Menü **Bestellungen** initiieren.

<img src={vpcOrders} />

<img src={vpcOverview} />

## Schritt 3: Erstellen privater Netzwerke

Sobald Ihre VPC aktiv ist:

1.  Greifen Sie auf die Details Ihrer VPC zu, indem Sie auf deren Namen klicken.
<img src={vpcDetailsView} />

2.  Gehen Sie zum Reiter **Private Netzwerke**.
3.  Klicken Sie auf **Netzwerk hinzufügen**.
4.  Konfigurieren Sie Ihr Netzwerk:
    *   **Name**: Name des Netzwerksegments (z. B. `backend`, `frontend`).
    *   **CIDR**: IP-Adressbereich (z. B. `192.168.1.0/24`).

<img src={vpcNewPrivateNetwork} />

## Schritt 4: Gateway aktivieren und öffentliche IPs bestellen

Um den Internetzugang und die Bereitstellung von Diensten zu ermöglichen:

1.  Prüfen Sie, ob das Gateway aktiviert ist. Wenn nicht, klicken Sie auf die Schaltfläche zur Aktivierung.
<img src={vpcActivateGatewayButton} />
<img src={vpcActivateGatewayModal} />

2.  Sobald das Gateway aktiv ist, können Sie öffentliche IP-Adressen (Floating IPs) über den Reiter **Öffentliche IPs** bestellen.
<img src={vpcStaticIps} />

> **Hinweis**: Die Liste "Öffentliche IPs" zeigt alle verfügbaren öffentlichen IPs an, unabhängig davon, ob sie bereits einer VPC zugeordnet sind oder nicht. Der Reiter "Öffentliche IPs" in der VPC-Detailansicht ermöglicht die Verwaltung der diesem VPC zugeordneten IPs (erfordert aktives Gateway).

3.  Klicken Sie auf die Schaltfläche, um neue IPs zu bestellen, oder klicken Sie auf die Aktion "Zuordnen", um eine der IP-Adressen in der Liste zuzuordnen, die noch nicht zugeordnet ist.
<img src={vpcNewStaticIps} />
<img src={vpcStaticIpsAssociate} />
<img src={vpcNewStaticIpsModale} />

4.  Wählen Sie die Anzahl der IPs, die Sie bestellen möchten, und bestätigen Sie Ihre Bestellung.

## Schritt 5: Verbinden Ihrer Ressourcen

Ihre privaten Netzwerke sind jetzt in allen Verfügbarkeitszonen (AZ) der Region verfügbar. Sie können Ihre IaaS Open Source-VMs oder Server direkt über deren jeweilige Konfigurationsschnittstellen verbinden.

Um zu erfahren, wie Sie ein VPC-Netzwerk auf einer virtuellen Maschine konfigurieren, lesen Sie unser Tutorial: [Statische IP und VM konfigurieren](./tutorials/vm_configuration).
