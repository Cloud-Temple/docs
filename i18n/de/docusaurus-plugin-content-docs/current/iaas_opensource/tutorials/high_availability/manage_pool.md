---
title: Pool-Verwaltung
---
import open_iaas_pool_ha_how_to_find from '../images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '../images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '../images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '../images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '../images/open_iaas_pool_ha_error.png'
import open_iaas_pool_ha_vm_errors from '../images/open_iaas_pool_ha_vm_errors.png'

Um die Hochverfügbarkeit eines Pools zu verwalten, navigieren Sie einfach zur Pool-Seite. Der Zustand der Hochverfügbarkeit wird direkt angezeigt:
<img src={open_iaas_pool_ha_how_to_find} />

Um die Hochverfügbarkeit für einen Pool zu aktivieren, müssen Sie einen Block Storage als Heartbeat auswählen:
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Sobald sie aktiviert ist, können Sie die Anzahl der [virtuellen Maschinen, die keine Konfiguration](manage_vm.md) für Hochverfügbarkeit haben, einsehen:
<img src={open_iaas_pool_ha_enabled} />

Wenn die [Anzahl der verfügbaren Hosts](../../concepts.md#hohe-verfügbarkeit) nicht ausreicht, um die Hochverfügbarkeit zu gewährleisten, wird ein Warnhinweis angezeigt:
<img src={open_iaas_pool_ha_error} />

Um die Hochverfügbarkeit für einen Pool zu aktivieren, darf keine virtuelle Maschine gleichzeitig eingeschaltet sein, ein ISO aus einem lokalen Speicher verwenden oder den Hochverfügbarkeitsmodus auf "Neustart" eingestellt haben. Falls dies der Fall ist, können Sie die Liste der problematischen virtuellen Maschinen aufrufen:
<img src={open_iaas_pool_ha_vm_errors} />
