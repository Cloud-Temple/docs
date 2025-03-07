---
title: Guide de démarrage
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'


## Berechnung

### Verwaltung von virtuellen Maschinen

Die Verwaltungsoberfläche Ihrer virtuellen Maschinen ist in der Shiva-Konsole im Menü __'OpenIaaS'__ verfügbar, das sich auf dem grünen Balken links auf dem Bildschirm befindet.

### Liste der virtuellen Maschinen

Im Abschnitt __'Virtuelle Maschinen'__ haben Sie Zugriff auf die Liste Ihrer auf Ihrem vertrauenswürdigen Cloud gehosteten virtuellen Maschinen.

<img src={openIaasVirtualMachinesList} />

Sie haben Zugriff auf die folgenden Informationen für jede virtuelle Maschine:

- Ihren Namen.
- Ihren Status (ausgeschaltet, eingeschaltet).
- Ihre Verfügbarkeitszone (AZ).
- Ihr Betriebssystem.
- Die Anzahl der virtuellen CPUs (vCPU).
- Die Menge an virtuellem Speicher (vRAM).

### Aktionen auf virtuellen Maschinen

Die folgenden Aktionen sind über diese Oberfläche möglich:

- Aktualisieren der Liste der virtuellen Maschinen.
- Filtern der Liste.
- Suchen einer virtuellen Maschine nach ihrem Namen.
- Erstellen einer neuen virtuellen Maschine.

<img src={openIaasVirtualMachinesListActions} />

Wenn Sie in der Liste für eine virtuelle Maschine auf den grünen Dropdown-Pfeil rechts klicken, erhalten Sie Zugriff auf alle Informationen zu dieser Maschine.

<img src={openIaasVirtualMachineOverview} />

Ein Schnellzugriffsmenü ermöglicht die folgenden Aktionen:

<img src={openIaasVirtualMachineActions} />

- Die virtuelle Maschine einschalten.
- Sie ausschalten.
- Sie neu starten.
- Die Konsole öffnen.
- Eine ISO einbinden.
- Eine ISO ausbinden.
- Die virtuelle Maschine in eine Vorlage umwandeln.
- Sie verschieben.
- Sie umbenennen.
- Sie löschen.

Im Informationsregister '**Allgemein**' finden Sie detaillierte Informationen zu Ihrer virtuellen Maschine, wie ihren physischen Standort (AZ, Pool, Host), den Arbeitsspeicher, die CPU, die IP-Adressen und andere.

<img src={openIaasVirtualMachineOverviewInformations} />

Ein Register '**Erweitert**' ermöglicht das Abrufen spezifischerer Informationen:

- UUID der virtuellen Maschine
- Gast-Tools
- Gastbetriebssystem
- DVD-Laufwerk

sowie das Ändern bestimmter Optionen wie:
- Die Startreihenfolge
- Secure Boot
- Automatisches Starten (nicht möglich, wenn der VM keine Backup-Policy zugeordnet ist)

<img src={openIaasVirtualMachineAdvancedOverview} />