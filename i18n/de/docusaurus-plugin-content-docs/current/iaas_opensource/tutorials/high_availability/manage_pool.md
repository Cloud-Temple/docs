---
title: Pool-Verwaltung
---
import open_iaas_pool_ha_how_to_find from '../images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '../images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '../images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '../images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '../images/open_iaas_pool_ha_error.png'
import open_iaas_pool_ha_vm_errors from '../images/open_iaas_pool_ha_vm_errors.png'

Um die Hochverfügbarkeit eines Pools zu verwalten, gehen Sie einfach zur Pool-Seite. Der Hochverfügbarkeitsstatus wird direkt angezeigt:
<img src={open_iaas_pool_ha_how_to_find} />

Um die Hochverfügbarkeit in einem Pool zu aktivieren, müssen Sie einen Block Storage als Heartbeat auswählen:
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Nach der Aktivierung können Sie die Anzahl der [virtuellen Maschinen sehen, die keine Hochverfügbarkeitskonfiguration haben](manage_vm.md):
<img src={open_iaas_pool_ha_enabled} />

Wenn die [Anzahl der verfügbaren Hosts](../../concepts.md#hochverfügbarkeit) nicht ausreicht, damit die Hochverfügbarkeit funktioniert, wird eine Warnmeldung angezeigt:
<img src={open_iaas_pool_ha_error} />

Um die Hochverfügbarkeit in einem Pool aktivieren zu können, darf keine virtuelle Maschine gleichzeitig eingeschaltet sein, eine ISO aus lokalem Speicher (nicht geteilt) verwenden und die Hochverfügbarkeit im "restart"-Modus konfiguriert haben. Wenn diese Situation auftritt, können Sie die Liste der problematischen virtuellen Maschinen einsehen:
<img src={open_iaas_pool_ha_vm_errors} />
