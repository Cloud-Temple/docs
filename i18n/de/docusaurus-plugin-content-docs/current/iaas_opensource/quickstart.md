---
title: Schnellstartanleitung
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'

## Berechnung

### Verwaltung virtueller Maschinen

Die Verwaltungsoberfläche für Ihre virtuellen Maschinen ist in der Shiva-Konsole im Menü __'OpenIaaS'__ verfügbar, das sich in der grünen Seitenleiste auf der linken Seite des Bildschirms befindet.

### Liste der virtuellen Maschinen

Im Bereich __'Virtuelle Maschinen'__ haben Sie Zugriff auf die Liste Ihrer virtuellen Maschinen, die auf Ihrer vertrauenswürdigen Cloud gehostet werden.

<img src={openIaasVirtualMachinesList} />

Sie haben Zugriff auf die folgenden Informationen für jede virtuelle Maschine:

- Ihren Namen.
- Ihren Status (ausgeschaltet, eingeschaltet).
- Ihre Verfügbarkeitszone (AZ).
- Ihr Betriebssystem.
- Die Anzahl der virtuellen CPUs (vCPU).
- Die Menge an virtuellem Speicher (vRAM).

### Aktionen für virtuelle Maschinen

Die folgenden Aktionen sind über diese Oberfläche möglich:

- Aktualisieren der Liste der virtuellen Maschinen.
- Filtern der Liste.
- Suchen einer virtuellen Maschine nach Namen.
- Erstellen einer neuen virtuellen Maschine.

<img src={openIaasVirtualMachinesListActions} />

Wenn Sie auf den grünen Dropdown-Pfeil auf der rechten Seite der Liste für eine virtuelle Maschine klicken, erhalten Sie Zugriff auf alle Informationen darüber.

<img src={openIaasVirtualMachineOverview} />

Eine Schnellzugriffsleiste ermöglicht es Ihnen, die folgenden Aktionen durchzuführen:

<img src={openIaasVirtualMachineActions} />

- Einschalten der virtuellen Maschine.
- Ausschalten der virtuellen Maschine.
- Neustarten der virtuellen Maschine.
- Öffnen der Konsole.
- Mounten einer ISO-Datei.
- Unmounten einer ISO-Datei.
- Konvertieren der virtuellen Maschine in eine Vorlage.
- Verschieben der virtuellen Maschine.
- Umbenennen der virtuellen Maschine.
- Löschen der virtuellen Maschine.

Im Reiter '__Allgemein__' finden Sie detaillierte Informationen zu Ihrer virtuellen Maschine, wie ihren physischen Standort (AZ, Pool, Host), RAM, CPU, IP-Adressen und mehr.

<img src={openIaasVirtualMachineOverviewInformations} />

Ein Reiter '__Erweitert__' ermöglicht es Ihnen, spezifischere Informationen anzuzeigen:

- UUID der virtuellen Maschine
- Gast-Tools
- Gast-Betriebssystem
- DVD-Laufwerk

Sowie bestimmte Optionen zu ändern, wie:

- Startreihenfolge
- Secure Boot
- Automatischer Start (nicht möglich, wenn keine Sicherungsrichtlinie mit der VM verknüpft ist)

<img src={openIaasVirtualMachineAdvancedOverview} />
