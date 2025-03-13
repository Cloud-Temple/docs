---
title: Schnellstartanleitung
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'

# Schnellstart für das Bare Metal-Angebot

Diese Seite führt Sie durch die ersten Schritte zur Nutzung des **Bare Metal**-Angebots über die Cloud Temple-Konsole. Folgen Sie diesen Anweisungen, um die verfügbaren Menüs und Funktionen kennenzulernen.

---

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass folgende Punkte erfüllt sind:

1. **Aktives Abonnement**: Ihre Organisation muss das Bare Metal-Angebot abonniert haben.
2. **Benutzerberechtigungen**: Ihr Benutzerkonto muss über die notwendigen Rechte verfügen, um auf Bare Metal-Ressourcen zuzugreifen und diese zu verwalten.

---

## Zugriff auf die Bare Metal-Oberfläche

Sobald das Abonnement aktiviert und die Berechtigungen konfiguriert sind, erscheint ein neues Menü mit dem Titel **Bare Metal** in der Cloud Temple-Konsole. Dieses Menü enthält zwei Hauptuntermenüs: **Bare Metal** und **Volumes**.

<img src={shivaBareMetalMenu} />

---

### 1. Untermenü **Bare Metal**

Das Untermenü **Bare Metal** zeigt eine Tabelle mit allen verfügbaren Bare Metal-Instanzen. Diese Tabelle enthält die wichtigsten Informationen für jede Instanz:

- **Name des Bare Metal**
- **Status**
- **Hardware-Konfiguration**
- **IP-Adresse**

<img src={shivaBareMetalList} />

#### Hauptfunktionen

- **Aktionsschaltfläche**: Ermöglicht direkten Zugriff auf die Bare Metal-Administrationskonsole.
- **Anklickbarer Name**: Durch Klicken auf den Namen einer Bare Metal-Instanz wird eine neue Seite mit den **vollständigen Details** der Instanz angezeigt:
  - Hardware-Informationen (RAM, CPU, GPU usw.).
  - Netzwerkkonfiguration (zugeordnete IP-Adressen).
  - Konnektivitätsinformationen für die Verwaltung.

<img src={shivaBareMetalDetails} />

---

### 2. Untermenü **Volumes**

Das Untermenü **Volumes** zeigt eine Tabelle mit allen Speichervolumes, die mit Ihrem Bare Metal-Abonnement verknüpft sind. Für jedes Volume sind folgende Informationen verfügbar:

- **Name des Volumes**
- **Kapazität**
- **Leistungsklasse** (IOPS pro TB)
- **Status** (Verfügbar, Wird bereitgestellt usw.)

<img src={shivaBareMetalStoragelist} />

#### Hauptfunktionen

- Volume-Verwaltung: Von dieser Tabelle aus können Sie Volumes Ihren Bare Metal-Instanzen zuordnen.

---
