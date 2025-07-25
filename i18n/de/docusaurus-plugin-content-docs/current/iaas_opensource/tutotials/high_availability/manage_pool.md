---
title: Pool-Verwaltung
---
import open_iaas_pool_ha_how_to_find from '../images/open_iaas_pool_ha_how_to_find.png'
import open_iaas_pool_enable_ha from '../images/open_iaas_pool_enable_ha.png'
import open_iaas_pool_ha_enabled from '../images/open_iaas_pool_ha_enabled.png'
import open_iaas_pool_ha_how_to_modify from '../images/open_iaas_pool_ha_how_to_modify.png'
import open_iaas_pool_ha_error from '../images/open_iaas_pool_ha_error.png'

Um die Hochverfügbarkeit eines Pools zu verwalten, gehen Sie einfach zur Pool-Seite. Der HA-Status wird direkt angezeigt:
<img src={open_iaas_pool_ha_how_to_find} />

Um HA auf einem Pool zu aktivieren, müssen Sie einen Block Storage als Heartbeat auswählen:
<img src={open_iaas_pool_ha_how_to_modify} />
<img src={open_iaas_pool_enable_ha} />

Nach der Aktivierung können Sie die Anzahl der virtuellen Maschinen sehen, die keine HA-Konfiguration haben:
<img src={open_iaas_pool_ha_enabled} />

Wenn die Anzahl der verfügbaren Hosts nicht ausreicht, damit HA funktioniert, wird eine Warnmeldung angezeigt:
<img src={open_iaas_pool_ha_error} />
