---
title: Schnellstart
---
import shivaBareMetalMenu from '@site/docs/iaas_bare-metal/images/shiva_bare-metal_menu.png'
import shivaBareMetalList from '@site/docs/iaas_bare-metal/images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from '@site/docs/iaas_bare-metal/images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from '@site/docs/iaas_bare-metal/images/shiva_bare-metal_storagelist.png'

# Schnellstart für das Bare-Metal-Angebot

Diese Seite führt Sie durch die ersten Schritte zur Nutzung des **Bare-Metal**-Angebots über die Cloud Temple-Konsole. Befolgen Sie diese Anleitung, um die verfügbaren Menüs und Funktionen kennenzulernen.

---

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass folgende Punkte erfüllt sind:

1. **Abonnement aktiviert**: Ihre Organisation muss das Bare-Metal-Angebot abonniert haben.
2. **Benutzerberechtigungen**: Ihr Benutzerkonto muss über die erforderlichen Rechte verfügen, um auf die Bare-Metal-Ressourcen zugreifen und sie verwalten zu können.

---

## Zugriff auf die Bare-Metal-Oberfläche

Sobald das Abonnement aktiviert und die Berechtigungen konfiguriert sind, erscheint in der Cloud Temple-Konsole ein neues Menü mit der Bezeichnung **Bare Metal**. Dieses Menü enthält zwei Hauptuntermenüs: **Bare Metal** und **Volumes**.

<img src={shivaBareMetalMenu} />

---

### 1. Untermenü **Bare Metal**

Das Untermenü **Bare Metal** zeigt eine Tabelle mit allen verfügbaren Bare-Metal-Instanzen. Diese Tabelle enthält die wichtigsten Informationen für jede Instanz:

- **Name der Bare-Metal-Instanz**
- **Status**
- **Hardwarekonfiguration**
- **IP-Adresse**

<img src={shivaBareMetalList} />

#### Hauptfunktionen

- **Aktionsschaltfläche** : Ermöglicht den direkten Zugriff auf die Bare-Metal-Verwaltungskonsole.
- **Klickbarer Name** : Beim Klicken auf den Namen einer Bare-Metal-Instanz wird eine neue Seite mit den **vollständigen Details** der Instanz angezeigt:
  - Hardwareinformationen (RAM, CPU, GPU, usw.).
  - Netzwerkkonfiguration (zugeordnete IP-Adressen).
  - Konnektivitätsinformationen für das Management.

<img src={shivaBareMetalDetails} />

---

### 2. Untermenü **Volumes**

Das Untermenü **Volumes** zeigt eine Tabelle mit allen Speichervolumes, die Ihrem Bare-Metal-Abonnement zugeordnet sind. Für jedes Volume stehen die folgenden Informationen zur Verfügung:

- **Name des Volumes**
- **Kapazität**
- **Leistungsklasse** (IOPS par To)
- **Status** (Verfügbar, In Bereitstellung, usw.)

<img src={shivaBareMetalStoragelist} />

:::info[Volume BFS (Boot from SAN)]
**Volume 1** ist das **BFS (Boot from SAN)** und muss zur Installation des Betriebssystems verwendet werden.

**Wichtig:** Dieses Volume kann nicht mit anderen Bare-Metal-Instanzen in derselben Verfügbarkeitszone (AZ) geteilt werden.
:::

:::tip[Bonne pratique]
Installieren Sie das Betriebssystem vorzugsweise auf dem **BFS**-Volume und speichern Sie Ihre Daten auf einem zusätzlichen **LUN**-Volume. Diese Trennung erleichtert die Wartung, Sicherungen und die Neuinstallation des Systems, falls erforderlich.
:::

#### Hauptfunktionen

- **Volumenverwaltung** : Über dieses Dashboard können Sie die Volumes Ihren Bare-Metal-Instanzen zuordnen.

---