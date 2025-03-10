---
title: Häufig gestellte Fragen zur Sicherung
tags:
  - iaas_vmware
  - tutorials
  - iaas_backup
---
import backupCloneIaas_001 from './images/backup_clone_iaas_001.png'
import backupCloneIaas_002 from './images/backup_clone_iaas_002.png'
import backupRestoIaas_001 from './images/backup_resto_iaas_001.png'
import backupCloneIaas_004 from './images/backup_clone_iaas_004.png'
import backupPolicyIaas_001 from './images/backup_policy_iaas_001.png'
import backupPolicyIaas_002 from './images/backup_policy_iaas_002.png'
import backupPolicyIaas_003 from './images/backup_policy_iaas_003.png'
import backupPolicyIaas_006 from './images/backup_policy_iaas_006.png'
import backupPolicyIaas_005 from './images/backup_policy_iaas_005.png'
import backupPolicyIaas_004 from './images/backup_policy_iaas_004.png'
import backupCloneIaas_003 from './images/backup_clone_iaas_003.png'
import backupPolicyIaas_007 from './images/backup_policy_iaas_007.png'
import backupRestoreIaas_001 from './images/backup_restore_iaas_001.png'
import backupRestoreIaas_003 from './images/backup_restore_iaas_003.png'
import backupRestoreIaas_002 from './images/backup_restore_iaas_002.png'
import backupInvIaas_001 from './images/backup_inv_iaas_001.png'

#### Wie klont man eine virtuelle Maschine?

Es gibt 2 Möglichkeiten, eine virtuelle Maschine zu klonen:

- Die erste Option ermöglicht das Klonen einer virtuellen Maschine direkt über das __'Clone'__-Symbol Ihrer virtuellen Maschine:

<img src={backupCloneIaas_001} />
<img src={backupCloneIaas_002} />

- Die zweite Lösung besteht darin, die virtuelle Maschine durch __ein Backup__ der virtuellen Maschine zu klonen und anschließend die __Klone-Wiederherstellung__ eines Backups zu verwenden.
Gehen Sie zum Abschnitt __'Backup'__ Ihrer virtuellen Maschine und wählen Sie die Aktion __'Restore'__:

<img src={backupRestoIaas_001} />

Wählen Sie dann die Option __'Clone'__ zur Wiederherstellung:

<img src={backupCloneIaas_004} />

#### Warum sehe ich auf der Seite "Backup-Richtlinien" bei Auswahl einer Richtlinie nicht dieselben virtuellen Maschinen wie auf der Seite "Backup-Berichte" bei Auswahl derselben Richtlinie?

Das bedeutet, dass die fehlenden virtuellen Maschinen die betreffende Richtlinie eine Zeit lang zugewiesen hatten (was ihre Präsenz in den Backup-Berichten erklärt), aber __derzeit nicht mehr haben__.

#### Wie füge ich einer virtuellen Maschine eine Backup-Richtlinie hinzu?

Gehen Sie auf die Seite __'Virtuelle Maschinen'__ im Abschnitt __'IaaS'__ im grünen Menüband auf der linken Seite des Bildschirms.

Wählen Sie eine virtuelle Maschine und dann den Tab __'Backup-Richtlinien'__ dieser Maschine:

<img src={backupPolicyIaas_001} />

Fügen Sie die gewünschte Backup-Richtlinie hinzu:

<img src={backupPolicyIaas_002} />

### Wie entferne ich eine Backup-Richtlinie von einer virtuellen Maschine?

Gehen Sie auf die Seite __'Virtuelle Maschinen'__, wählen Sie eine virtuelle Maschine und dann den Tab __'Backup-Richtlinien'__ dieser Maschine.

Entfernen Sie die gewünschte Backup-Richtlinie und bestätigen Sie die Entfernung:

<img src={backupPolicyIaas_003} />

__*Hinweis:*__ *Achtung! __Secnumcloud verlangt mindestens eine Backup-Richtlinie__ für jede virtuelle Maschine.*

### Wie erfahre ich, ob ein Backup erfolgreich durchgeführt wurde?

Es gibt 2 mögliche Lösungen:

1. Gehen Sie auf die Seite __'Jobs'__ im Menü __'Backup'__ im grünen Menüband auf der linken Seite Ihres Bildschirms. Wählen Sie den Backup-Job und wählen Sie ihn aus.
Finden Sie anschließend die *jobsession*, die Ihrem Backup entspricht, und wählen Sie sie über das Menü __'Actions'__ aus.

<img src={backupPolicyIaas_006} />

Diese Aktionen ermöglichen das Abrufen der detaillierten Logs des Backup-Vorgangs. Sie können in den Backup-Logs suchen:

<img src={backupPolicyIaas_005} />

2. Gehen Sie auf die Seite __'Backup-Berichte'__ und wählen Sie die für Sie interessante Richtlinie aus:

<img src={backupPolicyIaas_004} />

Dann können Sie nach einem Datum filtern, den Bericht im __PDF__- oder __CSV__-Format herunterladen, um ihn in Drittwerkzeugen zu verwenden.

### Wie starte ich eine Wiederherstellung?

Gehen Sie auf die Seite __'Virtuelle Maschinen'__, wählen Sie eine virtuelle Maschine und dann den Tab __'Backups'__ dieser Maschine. Um die Wiederherstellung zu starten, wählen Sie das zu wiederherstellende Backup aus.

<img src={backupCloneIaas_003} />

### Was ist die Quiescing-Option?

Das __Quiescing__ ist ein Prozess, bei dem das System benachrichtigt wird, sich vor dem Start des Snapshots in einen geeigneten Zustand zu versetzen.
Standardmäßig ist das __Quiescing aktiviert__. Es kann manuell deaktiviert werden, wenn das System den Snapshot schlecht handhabt oder wenn der Hypervisor-Agent nicht auf der virtuellen Maschine installiert ist.

Um dies zu tun, gehen Sie zum Abschnitt __'Backups'__ Ihrer virtuellen Maschine, klicken Sie auf __'Optionen ändern'__ und deaktivieren Sie das __Quiescing__:

<img src={backupPolicyIaas_007} />

### Welche Wiederherstellungsoptionen gibt es für eine virtuelle Maschine?

3 Hauptoptionen für die Wiederherstellung einer VM auf ihrem ursprünglichen Ziel oder auf einem anderen Ziel:

- __'CLONE'__: Stellt die virtuelle Maschine umbenannt wieder her, ohne die Originalmaschine zu ersetzen.

<img src={backupRestoreIaas_001} />

- __'PRODUCTION'__: Stellt die Produktionsmaschine wieder her und __ersetzt__ sie (die derzeit in Produktion befindliche virtuelle Maschine wird __zerstört__).

<img src={backupRestoreIaas_003} />

- __'TEST'__: Stellt die Produktionsmaschine wieder her, ohne sie __zu überschreiben__.

<img src={backupRestoreIaas_002} />

### Wie stelle ich die Produktionsmaschine wieder her und ersetze sie, ohne die aktuelle Produktionsmaschine beizubehalten?

Wählen Sie den Wiederherstellungsmodus __'Production'__. Die Option 'virtuelle Maschine überschreiben' ist standardmäßig aktiviert.

<img src={backupRestoreIaas_003} />

### Warum unterscheidet sich die Anzahl der virtuellen Maschinen zwischen den Backup- und Compute-Modulen?

Der Unterschied in den virtuellen Maschinen kann darauf zurückzuführen sein, dass das Backup-Modul die neuesten erstellten Maschinen nicht abgerufen hat.

Um das Backup-Modul zu aktualisieren, müssen Sie die Backup-Softwareschicht anweisen, die virtuellen Maschinen neu zu inventarisieren.
Gehen Sie dazu im Menü __'Infrastruktur'__ im grünen Menüband auf der linken Seite des Bildschirms zum Untermenü __'Spectrum Protect Plus'__ und verwenden Sie den __'Action'__-Button des Inventars:

<img src={backupInvIaas_001} />

Beachten Sie, dass das Datum der letzten Inventur angegeben ist.

Wenn ein Unterschied bei den virtuellen Maschinen weiterhin besteht, könnte dies daran liegen, dass die virtuellen Maschinen das System hosten, das die Backups ermöglicht.
Diese Maschinen werden nicht in die Berechnung der Anzahl der Maschinen im Backup-Modul einbezogen.

### Wie inventarisiere ich die virtuellen Maschinen im Backup-Modul?

Um eine Inventur der virtuellen Maschinen im Backup-Modul durchzuführen, gehen Sie im Menü __'Infrastruktur'__ im grünen Menüband auf der linken Seite des Bildschirms zum Untermenü __'Spectrum Protect Plus'__ und verwenden Sie den __'Action'__-Button des Inventars:

<img src={backupInvIaas_001} />

Beachten Sie, dass das Datum der letzten Inventur angegeben ist.

### Warum schlägt das Backup meiner virtuellen Maschine mit einem Snapshot-Problem fehl?

Dieser Fehler bedeutet, dass Ihre Maschine zum ersten Mal versucht, gesichert zu werden.

__Bei der ersten Sicherung einer virtuellen Maschine darf kein Snapshot auf der Maschine vorhanden sein.__

### Wie stelle ich die Produktionsmaschine wieder her und ersetze sie, während die aktuelle Produktionsmaschine beibehalten und umbenannt wird?

So gehen Sie vor:

- Wählen Sie den Modus __'CLONE'__ (der Klonmodus führt zu einer Änderung der MAC-Adresse und der UUID der virtuellen Maschine),
- Benennen Sie die wiederhergestellte virtuelle Maschine mit dem endgültigen Namen (der Produktions-VM),
- Benennen Sie die alte Produktionsmaschine (in _OLD) um.

### Wie stelle ich eine virtuelle Maschine wieder her, ohne die Originalmaschine zu ersetzen?

So gehen Sie vor:

- Wählen Sie den Modus __'CLONE'__ (der Klonmodus führt zu einer Änderung der MAC-Adresse und der UUID der virtuellen Maschine)
- Legen Sie den Namen des Klons fest (_REST oder andere)

### Warum kann ich eine Festplatte im Instant Access-Modus auf meiner virtuellen Maschine nicht löschen?

Führen Sie die Inventur des Backups durch: Im Menü __'Infrastruktur'__ im grünen Menüband auf der linken Seite des Bildschirms, gehen Sie zum Untermenü __'Spectrum Protect Plus'__ und verwenden Sie den __'Action'__-Button des Inventars:

<img src={backupInvIaas_001} />

Führen Sie die Entfernung der Festplatte durch, sobald die Inventur abgeschlossen ist. Aktualisieren Sie die virtuelle Maschine, um zu überprüfen, ob die Festplatte entfernt wurde.

### Warum kann ich eine virtuelle Maschine mit einer Richtlinie im Held-Status (ausgesetzte Richtlinie) nicht starten?

Eine Richtlinie im "Held"-Status ist eine Funktion, die vorübergehend die Aufbewahrungs- und Löschaktionen für Daten aussetzt, um sicherzustellen, dass die Daten aus spezifischen Gründen wie der Einhaltung von Vorschriften oder rechtlichen Anforderungen über den Standardaufbewahrungszeitraum hinaus intakt und verfügbar bleiben.

Angenommen, ein Unternehmen hat eine Backup-Aufbewahrungsrichtlinie von 30 Tagen für bestimmte Produktionsdaten. Aufgrund einer rechtlichen Untersuchung erhalten sie die Anfrage, alle relevanten Backups für eine unbestimmte Zeit zu speichern. Sie haben die Möglichkeit, die zugehörige Backup-Richtlinie über den Held-Status auszusetzen, um das automatische Löschen dieser Backups nach 30 Tagen zu verhindern, und sicherzustellen, dass die Daten für die gesamte Dauer der Untersuchung verfügbar bleiben.
Eine angehaltene Sicherungspolitik (im Status Gehalten) wird die dem zugewiesenen Zeitplan entsprechenden Sicherungen nicht ausführen, sodass die virtuelle Maschine nicht als geschützt angesehen werden kann, was den SecNumCloud-Normen nicht entspricht.

Zögern Sie nicht, unser Support-Team zu diesem Thema um Rat zu fragen.