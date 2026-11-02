---
title: Schnellstart
---
import newTabNetwork from '@site/docs/network/vpc/images/new_tab_network.png'
import vpcCreateButton from '@site/docs/network/vpc/images/vpc_create_button.png'
import vpcCreateModal from '@site/docs/network/vpc/images/vpc_create_modale.png'
import vpcOverview from '@site/docs/network/vpc/images/vpc.png'
import vpcDetailsView from '@site/docs/network/vpc/images/vpc_details_view.png'
import vpcNewPrivateNetwork from '@site/docs/network/vpc/images/vpc_new_private_network.png'
import vpcActivateGatewayButton from '@site/docs/network/vpc/images/vpc_activate_gateway_button.png'
import vpcActivateGatewayModal from '@site/docs/network/vpc/images/vpc_activate_gatewat_modale.png'
import vpcOrders from '@site/docs/network/vpc/images/vpc_orders.png'
import vpcStaticIps from '@site/docs/network/vpc/images/vpc_static_ips.png'
import vpcNewStaticIps from '@site/docs/network/vpc/images/vpc_new_static_ips.png'
import vpcNewStaticIpsModale from '@site/docs/network/vpc/images/vpc_new_static_ips_modale.png'
import vpcStaticIpsAssociate from '@site/docs/network/vpc/images/vpc_static_ips_associate_png.png'

# VPC-Schnellstart

Dieser Guide begleitet Sie bei der Erstellung Ihres ersten Virtual Private Cloud (VPC) und dem Deployment Ihrer ersten privaten Netzwerke.

## Voraussetzungen

Derzeit erfordert die Aktivierung des VPC-Dienstes den Abschluss eines **IaaS Open Source**-Produkts. (Diese Bedingung wird in Zukunft aufgehoben).

## Schritt 1: Zugriff auf die Konsole

1. Melden Sie sich in der Cloud Temple Konsole an.
2. Wählen Sie im Navigationsmenü **Network** und dann **VPC**.

<img src={newTabNetwork} />

## Schritt 2: VPC bestellen

1. Klicken Sie auf die Schaltfläche **Neues VPC**.
<img src={vpcCreateButton} />

2. Füllen Sie das geführte Formular aus:
    * **Name des VPC** : Wählen Sie einen eindeutigen Namen zur Identifizierung Ihrer Umgebung.
    * **Beschreibung** : (Optional) Fügen Sie eine Beschreibung hinzu.
<img src={vpcCreateModal} />

3. Bestätigen Sie die Erstellung.

> **Hinweis** : Die Bereitstellung des VPC ist vollständig automatisiert und dauert in der Regel weniger als eine Stunde.

### Alternative: Über das Menü Bestellungen

Sie können die Bestellung von VPC-Ressourcen auch direkt über das Menü **Marketplace** > **Bestellungen** initiieren.

<img src={vpcOrders} />

<img src={vpcOverview} />

## Schritt 3: Private Netzwerke erstellen (Private Networks)

Sobald Ihr VPC aktiv ist:

1. Greifen Sie auf die Details Ihres VPC zu, indem Sie auf dessen Namen klicken.
<img src={vpcDetailsView} />

2. Gehen Sie zum Tab **Private Netzwerke**.
3. Klicken Sie auf **Netzwerk hinzufügen**.
4. Konfigurieren Sie Ihr Netzwerk:
    * **Name** : Name des Netzsegments (z. B. `backend`, `frontend`).
    * **CIDR** : IP-Adressbereich (z. B. `192.168.1.0/24`).

<img src={vpcNewPrivateNetwork} />

## Schritt 4: Gateway aktivieren und öffentliche IPs bestellen

Um den Internetzugang und die Veröffentlichung von Diensten zu ermöglichen:

1. Prüfen Sie, ob das Gateway aktiviert ist. Falls nicht, klicken Sie auf die Aktivierungsschaltfläche.
<img src={vpcActivateGatewayButton} />

<img src={vpcActivateGatewayModal} />

1. Sobald das Gateway aktiv ist, gehen Sie zum Tab **Öffentliche IPs**.
<img src={vpcStaticIps} />

> **Hinweis** : Die Liste **Öffentliche IPs** an der Wurzel des VPC-Menüs zeigt alle öffentlichen IPs an (mit oder ohne Zuordnung). Der Tab **Öffentliche IPs** in den Details eines VPC dient zur Verwaltung der diesem VPC zugeordneten IPs (erfordert ein aktives Gateway).

1. Klicken Sie auf die Schaltfläche, um neue IPs zu bestellen, oder klicken Sie auf die Aktion "Zuordnen", um eine der Adressen aus der Liste zuzuordnen, die noch nicht zugeordnet ist.
<img src={vpcNewStaticIps} />

<img src={vpcStaticIpsAssociate} />
<img src={vpcNewStaticIpsModale} />

1. Wählen Sie die Anzahl der IPs aus, die Sie bestellen möchten, und bestätigen Sie Ihre Bestellung.

## Schritt 5: Ihre Ressourcen verbinden

Ihre privaten Netzwerke sind nun in allen Verfügbarkeitszonen (AZ) der Region verfügbar. Sie können dort Ihre IaaS Open Source virtuellen Maschinen oder Ihre Server direkt über deren jeweilige Konfigurationsoberflächen verbinden.

Um zu lernen, wie Sie ein VPC-Netzwerk auf einer virtuellen Maschine konfigurieren, lesen Sie unseren Tutorial: [Statische IP und VM konfigurieren](./tutorials/vm_configuration).
