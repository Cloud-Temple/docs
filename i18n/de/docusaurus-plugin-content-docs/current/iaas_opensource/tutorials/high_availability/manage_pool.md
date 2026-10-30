---
title: Pool-Verwaltung
---
import open_iaas_pool_ha_how_to_find from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_error.png'
import open_iaas_pool_ha_vm_errors from '@site/docs/iaas_opensource/tutorials/images/open_iaas_pool_ha_vm_errors.png'

Um die Hochverfügbarkeit eines Pools zu verwalten, müssen Sie lediglich die Pool-Seite aufrufen. Der Status der Hochverfügbarkeit wird direkt angezeigt:
<img src={open_iaas_pool_ha_how_to_find} />

Um die Hochverfügbarkeit auf einem Pool zu aktivieren, öffnen Sie das Aktionsmenü (⋮) und dann « Hochverfügbarkeit ändern », und wählen Sie einen Block Storage als Heartbeat aus:
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Sobald aktiviert, können Sie die Anzahl der [virtuellen Maschinen ohne Hochverfügbarkeitskonfiguration](manage_vm.md) einsehen:
<img src={open_iaas_pool_ha_enabled} />

Falls die [Anzahl verfügbarer Hosts](../../concepts.md#hohe-verfügbarkeit) nicht ausreicht, um die Hochverfügbarkeit zu betreiben, wird eine Warnung angezeigt:
<img src={open_iaas_pool_ha_error} />

Um die Hochverfügbarkeit auf einem Pool aktivieren zu können, darf keine virtuelle Maschine gleichzeitig eingeschaltet sein, ein ISO von einem lokalen (nicht geteilten) Speicher verwenden und die Hochverfügbarkeit im Modus "restart" konfiguriert haben. Falls dieser Zustand vorliegt, können Sie die Liste der problematischen virtuellen Maschinen einsehen:
<img src={open_iaas_pool_ha_vm_errors} />
