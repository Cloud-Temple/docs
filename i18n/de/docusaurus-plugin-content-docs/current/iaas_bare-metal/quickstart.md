---
title: Guide de démarrage
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'


# QuickStart für das Bare Metal Angebot

Diese Seite führt Sie durch die ersten Schritte zur Nutzung des **Bare Metal** Angebots über die Cloud Temple-Konsole. Folgen Sie diesen Anweisungen, um die verfügbaren Menüs und Funktionen zu entdecken.

---

## Voraussetzungen
Bevor Sie beginnen, stellen Sie sicher, dass:
1. **Aktiviertes Abonnement**: Ihre Organisation muss das Bare Metal-Angebot abonniert haben.
2. **Benutzerberechtigungen**: Ihr Benutzerkonto muss über die erforderlichen Rechte zum Zugriff und zur Verwaltung der Bare Metal-Ressourcen verfügen.

---

## Zugriff auf die Bare Metal-Oberfläche

Sobald das Abonnement aktiviert und die Berechtigungen konfiguriert sind, erscheint ein neues Menü mit dem Titel **Bare Metal** in der Cloud Temple-Konsole. Dieses Menü enthält zwei Hauptuntermenüs: **Bare Metal** und **Volumes**.

<img src={shivaBareMetalMenu} />

---

### 1. Untermenü **Bare Metal**

Das Untermenü **Bare Metal** zeigt Ihnen eine Tabelle mit allen verfügbaren Bare Metal-Instanzen. Diese Tabelle enthält die wichtigsten Informationen zu jeder Instanz:
- **Name des Bare Metal**
- **Status**
- **Hardware-Konfiguration**
- **IP-Adresse**

<img src={shivaBareMetalList} />

#### Hauptfunktionen
- **Aktionsbutton**: Ermöglicht den direkten Zugriff auf die Verwaltungs-Konsole des Bare Metal.
- **Klickbarer Name**: Durch Klicken auf den Namen einer Bare Metal-Instanz wird eine neue Seite mit den **vollständigen Details** der Instanz angezeigt:
  - Hardware-Informationen (RAM, CPU, GPU, etc.).
  - Netzwerkkonfiguration (zugeordnete IP-Adressen).
  - Konnektivitätsinformationen für die Verwaltung.

<img src={shivaBareMetalDetails} />

---

### 2. Untermenü **Volumes**

Das Untermenü **Volumes** zeigt eine Tabelle mit allen Speicher-Volumes, die mit Ihrem Bare Metal-Abonnement verknüpft sind. Für jedes Volume stehen die folgenden Informationen zur Verfügung:
- **Name des Volumes**
- **Kapazität**
- **Leistungsklasse** (IOPS pro TB)
- **Status** (Verfügbar, In Bereitstellung, etc.)

<img src={shivaBareMetalStoragelist} />

#### Hauptfunktionen
- Volume-Verwaltung: Aus dieser Tabelle können Sie die Volumes Ihren Bare Metal-Instanzen zuordnen.

---