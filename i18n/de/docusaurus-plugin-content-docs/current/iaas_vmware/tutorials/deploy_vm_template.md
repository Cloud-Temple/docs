---
title: Bereitstellung aus einer Vorlage
tags:
  - iaas_vmware
  - tutorials
---
import shivaCatalogsCharger from './images/shiva_catalogs_charger.png';
import shivaCatalogsAjout from './images/shiva_catalogs_ajout.png';
import shivaCatalogsDeployer from './images/shiva_catalogs_deployer.png';

Dieser Leitfaden ermöglicht es Ihnen, innerhalb von 5 Minuten Ihre ersten Instanzen in der Trusted Cloud bereitzustellen.

## __Voraussetzungen__

1. Ein Abonnement für das Cloud Temple-Angebot (IaaS-Abonnement).
2. Aktivierte Berechtigungen für den Objektziel __'IaaS'__

## Eine virtuelle Maschine aus einer Vorlage bereitstellen

Dieser Leitfaden zeigt Schritt für Schritt, wie Sie eine virtuelle Maschine aus einer Vorlage in der Konsole bereitstellen.

Gehen Sie im Konsole-Portal zum Reiter "Trusted Cloud" und dann zu "Kataloge". Bevor Sie eine Vorlage bereitstellen können, muss diese in Ihrem privaten Katalog im Reiter "Mein Katalog" geladen sein.

Dafür haben Sie zwei Möglichkeiten: Entweder importieren Sie Ihre eigene Vorlage direkt in Ihren privaten Katalog oder Sie importieren ein Modell aus dem öffentlichen Katalog von Cloud Temple.

### Eine persönliche Vorlage in den privaten Katalog importieren

Klicken Sie im Reiter "Mein Katalog" auf "Dateien veröffentlichen".

<img src={shivaCatalogsCharger} />

Folgen Sie dann den Schritten zur Veröffentlichung der Vorlage, indem Sie ihren Namen und eine Beschreibung eingeben und den Speicherort in einer Bibliothek auswählen.

Die Vorlage muss dann in Ihrem privaten Katalog erscheinen.

### Eine Vorlage aus dem öffentlichen Katalog importieren

Klicken Sie im Reiter "Öffentlicher Katalog" auf die Schaltfläche "Zu meinem Katalog hinzufügen" der Vorlage Ihrer Wahl, um sie in Ihren privaten Katalog zu importieren. Diese muss dann in Ihrem privaten Katalog erscheinen.
<img src={shivaCatalogsAjout} />

### Die Vorlage bereitstellen

Sobald die Vorlage in Ihrem privaten Katalog importiert ist, können Sie sie bereitstellen, indem Sie auf "Bereitstellen" klicken.

<img src={shivaCatalogsDeployer} />

Folgen Sie dann den verschiedenen Schritten zur Bereitstellung der Ressource, indem Sie ihren physischen Standort (Rechenzentrum, Cluster, Datenspeicher) und andere optionale Konfigurationsparameter auswählen.
