---
title: Schnellstartanleitung
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'

# QuickStart für das Bare-Metal-Angebot

Diese Seite führt Sie durch die ersten Schritte zur Nutzung des **Bare-Metal**-Angebots über die Cloud Temple-Konsole. Befolgen Sie diese Anleitung, um die verfügbaren Menüs und Funktionen kennenzulernen.

## Voraussetzungen

Stellen Sie sicher, dass die folgenden Punkte erfüllt sind, bevor Sie beginnen:

1. **Aktivierte Abonnement**: Ihre Organisation muss ein Abonnement für das Angebot Bare Metal abgeschlossen haben.
2. **Benutzerberechtigungen**: Ihr Benutzerkonto muss über die erforderlichen Berechtigungen verfügen, um auf Bare-Metal-Ressourcen zuzugreifen und diese zu verwalten.

## Access to the Bare Metal Interface

Once the subscription is activated and permissions are configured, a new menu titled **Bare Metal** appears in the Cloud Temple console. This menu contains two main submenus: **Bare Metal** and **Volumes**.

<img src={shivaBareMetalMenu} />

### 1. Submenu **Bare Metal**

Der Submenu **Bare Metal** zeigt Ihnen eine Tabelle mit allen verfügbaren Bare-Metal-Instanzen. Diese Tabelle enthält die wichtigsten Informationen für jede Instanz:

- **Name des Bare Metal**
- **Status**
- **Hardware-Konfiguration**
- **IP-Adresse**

<img src={shivaBareMetalList} />

#### Hauptfunktionen

- **Aktionsschaltfläche**: Ermöglicht direkten Zugriff auf die Verwaltungskonsole des Bare Metal-Systems.
- **Klickbarer Name**: Durch Klicken auf den Namen einer Bare Metal-Instanz wird eine neue Seite mit den **umfassenden Details** der Instanz angezeigt:
  - Hardwareinformationen (RAM, CPU, GPU usw.).
  - Netzwerkkonfiguration (zugeordnete IP-Adressen).
  - Verbindungsinformationen für die Verwaltung.

<img src={shivaBareMetalDetails} />

### 2. Submenu **Volumes**

Der Submenü **Volumes** zeigt eine Tabelle mit allen Speichervolumes, die Ihrer Bare-Metal-Unterzeichnung zugeordnet sind. Für jedes Volume sind folgende Informationen verfügbar:

- **Volume-Name**
- **Kapazität**
- **Leistungsklasse** (IOPS pro To)
- **Status** (Verfügbar, Im Einsatz, usw.)

<img src={shivaBareMetalStoragelist} />

:::info Volume BFS (Boot from SAN)
Der **Volume 1** ist das **BFS-Volume (Boot from SAN)** und muss zum Installieren des Betriebssystems verwendet werden.

**Wichtig:** Dieses Volume kann nicht mit anderen Bare-Metal-Instanzen in derselben Verfügbarkeitszone (AZ) geteilt werden.
:::

:::tip Best Practice
Bevorzugen Sie die Installation des Betriebssystems auf dem **BFS-Volume** und speichern Sie Ihre Daten auf einem zusätzlichen **LUN-Volume**. Diese Trennung erleichtert Wartung, Sicherungen und die Neinstallation des Systems bei Bedarf.
:::

#### Hauptfunktionen

- **Volumenverwaltung**: Von diesem Dashboard aus können Sie Volumes Ihren Bare-Metal-Instanzen zuordnen.