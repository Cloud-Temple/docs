---
title: Häufig gestellte Fragen zur Sicherung
tags:
  - iaas_vmware
  - tutorials
  - iaas_backup
---
import backupCloneIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_001.png'
import backupCloneIaas_002 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_002.png'
import backupRestoIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_resto_iaas_001.png'
import backupCloneIaas_004 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_004.png'
import backupPolicyIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_001.png'
import backupPolicyIaas_002 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_002.png'
import backupPolicyIaas_003 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_003.png'
import backupPolicyIaas_006 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_006.png'
import backupPolicyIaas_005 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_005.png'
import backupPolicyIaas_004 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_004.png'
import backupCloneIaas_003 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_003.png'
import backupPolicyIaas_007 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_007.png'
import backupRestoreIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_restore_iaas_001.png'
import backupRestoreIaas_003 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_restore_iaas_003.png'
import backupRestoreIaas_002 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_restore_iaas_002.png'
import backupInvIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_inv_iaas_001.png'

#### Wie klonen Sie eine virtuelle Maschine?

Es gibt 2 Möglichkeiten, eine virtuelle Maschine zu klonen:

- Die erste Option ermöglicht es, eine virtuelle Maschine direkt über das Symbol __'Klonen'__ Ihrer virtuellen Maschine zu klonen:

<img src={backupCloneIaas_001} />
<img src={backupCloneIaas_002} />

- Die zweite Möglichkeit besteht darin, die virtuelle Maschine zu klonen, indem Sie eine __Sicherung__ der virtuellen Maschine verwenden und anschließend die __Klonwiederherstellung__ einer Sicherung durchführen.
Gehen Sie zum Bereich __'Sicherung'__ Ihrer virtuellen Maschine und wählen Sie die Aktion __'Wiederherstellen'__ :

<img src={backupRestoIaas_001} />

Wählen Sie anschließend die Wiederherstellungsoption __'Klonen'__ :

<img src={backupCloneIaas_004} />

#### Warum sehe ich auf der Seite "Sicherungsrichtlinien" nach Auswahl einer Richtlinie nicht die gleichen virtuellen Maschinen wie auf der Seite "Sicherungsberichte" nach Auswahl derselben Richtlinie?

Dies bedeutet, dass den fehlenden virtuellen Maschinen die betreffende Richtlinie vorübergehend zugewiesen war
(was ihre Anzeige in den Sicherungsberichten erklärt), dies jedoch __derzeit nicht mehr der Fall ist__.

#### Wie Sie einer virtuellen Maschine eine Sicherungsrichtlinie hinzufügen?

Navigieren Sie zur Seite __'Virtuelle Maschinen'__ im Bereich __'IaaS'__ der grünen Menüleiste auf der linken Seite des Bildschirms.

Wählen Sie eine virtuelle Maschine und anschließend die Registerkarte __'Sicherungsrichtlinien'__ dieser Maschine aus:

<img src={backupPolicyIaas_001} />

Fügen Sie die gewünschte Sicherungsrichtlinie hinzu:

<img src={backupPolicyIaas_002} />

### So löschen Sie eine Sicherungsrichtlinie von einer virtuellen Maschine?

Gehen Sie zur Seite __'Virtuelle Maschinen'__, wählen Sie eine virtuelle Maschine aus und öffnen Sie dann die Registerkarte __'Sicherungsrichtlinien'__ dieser Maschine.

Löschen Sie die gewünschte Sicherungsrichtlinie und bestätigen Sie die Löschung:

<img src={backupPolicyIaas_003} />

__*Hinweis:*__ *Achtung! __Secnumcloud schreibt vor, dass für jede virtuelle Maschine mindestens eine Sicherungsrichtlinie vorhanden sein muss.__*

### Wie lässt sich prüfen, ob eine Sicherung erfolgreich ausgeführt wurde?

Es gibt 2 mögliche Lösungen:

1. Gehen Sie zur Seite __'Jobs'__ im Menü __'Sicherung'__ in der grünen Leiste links auf Ihrem Bildschirm. Wählen Sie den der Sicherung entsprechenden Job aus und markieren Sie ihn.
Suchen Sie anschließend die *Jobsitzung*, die Ihrer Sicherung entspricht, und wählen Sie sie über das Menü __'Aktionen'__ aus.

<img src={backupPolicyIaas_006} />

Diese Aktionen ermöglichen den Zugriff auf detaillierte Protokolle der Sicherungsausführung. Sie können in den Sicherungsprotokollen suchen:

<img src={backupPolicyIaas_005} />

1. Gehen Sie zur Seite __'Sicherungsberichte'__ und wählen Sie die gewünschte Richtlinie aus:

<img src={backupPolicyIaas_004} />

Sie können dann nach einem Datum filtern, den Bericht im Format __PDF__ oder __CSV__ herunterladen, um ihn in externen Tools zu nutzen.

### Wie starten Sie eine Wiederherstellung?

Navigieren Sie zur Seite __'Virtuelle Maschinen'__, wählen Sie eine virtuelle Maschine aus und öffnen Sie dann die Registerkarte __'Backups'__ dieser Maschine. Um die Wiederherstellung zu starten, wählen Sie die wiederherzustellende Sicherung aus.

<img src={backupCloneIaas_003} />

### Was ist die Quiescing-Option?

__Quiescing__ ist ein Prozess, bei dem das System angewiesen wird, vor Beginn des Snapshots einen geeigneten Zustand einzunehmen.
Standardmäßig ist das __Quiescing aktiviert__. Es kann manuell deaktiviert werden, wenn das System den Snapshot nicht korrekt verarbeitet oder wenn der Hypervisor-Agent nicht auf der virtuellen Maschine installiert ist.

Gehen Sie dazu im Bereich __'Backups'__ Ihrer virtuellen Maschine auf __'Optionen ändern'__ und deaktivieren Sie das __Quiescing__ :

<img src={backupPolicyIaas_007} />

### Welche Wiederherstellungsoptionen gibt es für eine virtuelle Maschine?

3 Hauptoptionen zum Wiederherstellen einer VM, entweder auf dem ursprünglichen Ziel oder auf einem anderen Ziel:

- __'CLONE'__ : Stellt die virtuelle Maschine wieder her, indem sie umbenannt wird, ohne die ursprüngliche virtuelle Maschine zu ersetzen.

<img src={backupRestoreIaas_001} />

- __'PRODUCTION'__ : Stellt die Produktions-VM wieder und __ersetzt__ sie (die aktuell in der Produktion befindliche virtuelle Maschine wird __zerstört__)

<img src={backupRestoreIaas_003} />

- __'TEST'__ : Stellt die Produktions-VM wieder, __ohne sie zu überschreiben__.

<img src={backupRestoreIaas_002} />

### Wie stellen Sie die Produktions-VM wieder her und ersetzen sie, ohne die aktuell in der Produktion befindliche VM zu behalten?

Wählen Sie den Wiederherstellungsmodus __'Produktion'__. Die Option 'VM überschreiben' ist standardmäßig ausgewählt.

<img src={backupRestoreIaas_003} />

### Warum unterscheidet sich die Anzahl der virtuellen Maschinen zwischen dem Backup- und dem Compute-Modul?

Die Differenz bei der Anzahl der virtuellen Maschinen kann darauf zurückzuführen sein, dass das Backup-Modul die zuletzt erstellten Maschinen nicht abgerufen hat.

Um das Backup-Modul zu aktualisieren, muss die Software-Schicht für Backups aufgefordert werden, die virtuellen Maschinen neu zu inventarisieren.
Navigieren Sie dazu im Menü __'Infrastructure'__ der grünen Leiste links auf dem Bildschirm zum Untermenü __'Spectrum Protect Plus'__ und verwenden Sie die Schaltfläche __'Action'__ des Inventars:

<img src={backupInvIaas_001} />

Beachten Sie, dass das Datum des letzten Inventars angegeben ist.

Sollte eine Abweichung bei der Anzahl der virtuellen Maschinen weiterhin bestehen, kann dies an den virtuellen Maschinen liegen, die das Backup-System hosten. Diese werden bei der Berechnung der Maschinenanzahl im Backup-Modul nämlich nicht mitgezählt.

### Wie führt man eine Inventarisierung virtueller Maschinen im Backup-Modul durch?

Um eine Inventarisierung virtueller Maschinen im Backup-Modul zu starten, navigieren Sie im Menü __'Infrastruktur'__ der grünen Leiste links auf dem Bildschirm zum Untermenü __'Spectrum Protect Plus'__ und verwenden Sie die __'Aktion'__-Schaltfläche der Inventarisierung:

<img src={backupInvIaas_001} />

Beachten Sie, dass das Datum der letzten Inventarisierung angezeigt wird.

### Warum schlägt die Sicherung meiner virtuellen Maschine mit der Meldung eines Snapshot-Problems fehl?

Dieser Fehler bedeutet, dass Ihre Maschine zum ersten Mal gesichert werden soll.

__Bei der ersten Sicherung einer virtuellen Maschine darf sich kein Snapshot auf der Maschine befinden.__

### Wie stellt man die Produktions-VM wieder her und ersetzt sie, wobei die Produktions-VM beibehalten und umbenannt wird?

Gehen Sie wie folgt vor:

- Wählen Sie den Modus __'KLON'__ (der Klon-Modus führt zu einer Änderung der MAC-Adresse und der UUID der virtuellen Maschine),
- Benennen Sie die wiederhergestellte virtuelle Maschine mit dem endgültigen Namen (der Produktions-VM) um,
- Benennen Sie die alte Produktions-VM um (in _OLD).

### Wie stellt man eine virtuelle Maschine wieder her, ohne die ursprüngliche virtuelle Maschine zu ersetzen?

So gehen Sie vor:

- Wählen Sie den Modus __'CLONE'__ (der Klonmodus führt zu einer Änderung der MAC-Adresse und der UUID der virtuellen Maschine)
- Definieren Sie den Namen des Clons (_REST oder andere)

### Warum kann ich eine Festplatte im Schnellzugriffsmodus auf meiner virtuellen Maschine nicht löschen?

Führen Sie die Inventarisierung der Sicherung aus: Navigieren Sie im Menü __'Infrastructure'__ des grünen Banners links auf dem Bildschirm
zum Untermenü __'Spectrum Protect Plus'__ und verwenden Sie die Schaltfläche __'Aktion'__ des Inventars:

<img src={backupInvIaas_001} />

Führen Sie die Löschung der Festplatte durch, sobald die Inventarisierung abgeschlossen ist. Aktualisieren Sie die virtuelle Maschine, um zu überprüfen, ob die Festplatte erfolgreich gelöscht wurde.

### Warum kann ich eine virtuelle Maschine nicht mit einer Policy im Status "Held" (politique suspendue) starten?

Eine Policy im Status "Held"  ist eine Funktion, die es ermöglicht, Aufbewahrungs- und Löschvorgänge für Daten vorübergehend auszusetzen, wodurch sichergestellt wird, dass die Daten über die standardmäßige Aufbewahrungsfrist hinaus intakt und verfügbar bleiben, beispielsweise aus Compliance-Gründen oder aufgrund rechtlicher Erfordernisse.

Nehmen wir an, ein Unternehmen hat eine Backup-Aufbewahrungsrichtlinie von 30 Tagen für bestimmte Produktionsdaten. Aufgrund einer rechtlichen Untersuchung besteht die Anforderung, alle relevanten Backups für einen unbestimmten Zeitraum aufzubewahren. Sie können die zugehörige Backup-Policy über den Status "Held" aussetzen, um die automatische Löschung dieser Backups nach 30 Tagen zu verhindern und so sicherzustellen, dass die Daten während der gesamten Dauer der Untersuchung verfügbar bleiben.

Eine ausgesetzte Backup-Policy (en statut Held) führt keine Backups gemäß dem zugewiesenen Zeitplan aus. Die virtuelle Maschine kann daher nicht als geschützt betrachtet werden, was nicht den SecNumCloud-Standards entspricht.

Zögern Sie nicht, sich bei Fragen zu diesem Thema an unser Support-Team zu wenden.