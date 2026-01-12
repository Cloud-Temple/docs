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

# VPC-Schnellstart

Dieser Leitfaden führt Sie durch die Erstellung Ihrer ersten Virtual Private Cloud (VPC) und die Bereitstellung Ihrer ersten privaten Netzwerke.

## Voraussetzungen

Derzeit erfordert die Aktivierung des VPC-Dienstes ein Abonnement für ein **IaaS Open Source**-Angebot. (Diese Bedingung wird später aufgehoben).

## Schritt 1: Zugriff auf die Konsole

1.  Melden Sie sich an der Cloud Temple-Konsole an.
2.  Wählen Sie im Navigationsmenü **Network** und dann **VPC**.

<img src={newTabNetwork} />

## Schritt 2: Erstellen einer VPC

1.  Klicken Sie auf die Schaltfläche **VPC erstellen**.
<img src={vpcCreateButton} />

2.  Füllen Sie das geführte Formular aus:
    *   **VPC-Name**: Wählen Sie einen eindeutigen Namen zur Identifizierung Ihrer Umgebung.
    *   **Beschreibung**: (Optional) Fügen Sie eine Beschreibung hinzu.
<img src={vpcCreateModal} />

3.  Bestätigen Sie die Erstellung.

> **Hinweis**: Die VPC-Bereitstellung ist vollautomatisch und dauert in der Regel weniger als eine Stunde.

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

## Schritt 4: Gateway aktivieren (Optional)

Um Ihren privaten Netzwerken über ein sicheres Gateway Internetzugang zu gewähren:

1. Klicken Sie auf die Schaltfläche zur Gateway-Aktivierung.
<img src={vpcActivateGatewayButton} />

2. Bestätigen Sie die Aktivierung im modalen Fenster.
<img src={vpcActivateGatewayModal} />

## Schritt 5: Verbinden Ihrer Ressourcen

Ihre privaten Netzwerke sind jetzt in allen Verfügbarkeitszonen (AZ) der Region verfügbar. Sie können Ihre IaaS Open Source-VMs oder Server direkt über deren jeweilige Konfigurationsschnittstellen verbinden.
