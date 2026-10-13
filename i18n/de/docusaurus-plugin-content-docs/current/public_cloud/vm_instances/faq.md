---
title: Häufig gestellte Fragen
sidebar_position: 4
---

# FAQ VM-Instanzen

## Was wird weiter abgerechnet, wenn die VM ausgeschaltet ist?

Das Abschalten der VM **setzt die Abrechnung der vCPU und des RAM aus**. Es
werden weder die VM noch ihre persistenten Volumes gelöscht: Das
Betriebssystem, die Software und die auf diesen Volumes gespeicherten Daten
bleiben erhalten.

Die anderen beibehaltenen Ressourcen und Abonnements werden gemäß ihren
jeweiligen Regeln weiter abgerechnet: insbesondere die Systemdisk, die
zusätzlichen Volumes, der gespeicherte Backup-Speicher, die abonnierten
Netzwerkdienste, der Tenant und der Support.
Die Aussetzung der Abrechnung des Compute beschreibt nicht den technischen
Mechanismus der Freigabe oder Reservierung physischer Ressourcen.

## Ist die Kapazität beim Neustart oder bei der Erstellung garantiert?

Für eine **nicht reservierte** Instanz unterliegen der Neustart nach einem Stopp und die Erstellung einer neuen VM der verfügbaren Kapazität. Es besteht keine Garantie, eine bestimmte Größe wieder zu erhalten, selbst wenn diese Größe in einer früheren Kampagne verwendet wurde. Das Löschen und erneute Erstellen der VM stellt keine Kapazitätsreservierung dar.

Um eine Kapazitätszusage zu erhalten, muss eine **reservierte Instanz** im Rahmen und gemäß den Bedingungen der Reservierung abgeschlossen werden. Die stündliche Abrechnung und der dedizierte Charakter der vCPU Performance stellen für sich allein keine Reservierung dar.

## Ist eine Aktivierung einer Verfügbarkeitszone für VMI erforderlich ?

Nein. Das Abonnement einer kostenpflichtigen AZ-Aktivierung betrifft das Angebot **IaaS** ;
es ist nicht erforderlich, um **VM Instances** zu nutzen. Sie wählen
jedoch die Hosting-AZ beim Deployment der VM aus.

Der Tenant ist ein laufendes Abonnement. Die AZ-Aktivierung des IaaS-Angebots ist
ebenfalls laufend; die Auswahl einer AZ für eine VMI löst dieses
IaaS-Abonnement nicht aus.

## Welchen Support benötigt ein Direktkunde oder ein durch einen Partner betreuter Kunde?

Ein **Direktkunde** muss mindestens den **Standard-Support** abschließen,
selbst wenn er das Betriebssystem und die Anwendungen selbst verwaltet.

Der **Basic-Support** ist für Kunden bestimmt, die von einem **geschulten
Partner** betreut werden. Er stellt keine Alternative zum Standard-Support für
einen Direktkunden dar. Der Umfang des Partners und die Supportbedingungen sind
bei der Vertragsabschluss zu definieren.

## Kann eine Instanz per SSH ohne Bastion verwaltet werden?

Ja. Eine Instanz, die über eine **öffentliche IP** erreichbar ist, kann per SSH
verbunden werden, wenn der SSH-Dienst im Betriebssystem konfiguriert ist und
die Netzwerkregeln den Datenfluss erlauben. Der Client ist für die Filterung
verantwortlich, insbesondere für die Einschränkung auf erlaubte Quell-IPs.

Ein Bastion ist kein systematisches Voraussetzungsmerkmal von VM-Instanzen.
Er bietet einen alternativen Verwaltungsweg über die Konsole, ohne die VM
direkt dem Internet auszusetzen. Siehe [concepts réseau](./concepts#netzwerk) und
[concepts Bastion](../../bastion/concepts).

## Wie führt man einen Test durch, bevor die Konfiguration gewählt wird?

Sie können eine VM-Instances-Konfiguration im **Self-Service**-Modus mit Ihren eigenen Softwareanwendungen und Datensätzen testen, bevor Sie Ihre Dimensionierung festlegen.

Die **Compute-Leistung wird stündlich abgerechnet, ohne monatliche Bindung**. Diese
Flexibilität erleichtert kurze Tests: Bei einem Test von wenigen Stunden wird der
Compute-Anteil auf diese Stunden berechnet, zum üblichen Tarif des Dienstes. Jede
begonnene Compute-Stunde wird berechnet. Bei
identischer Konfiguration passen Sie so das Rechenbudget an die Dauer Ihres Tests an, von wenigen Stunden bis zu mehreren Tagen.

Die anderen für den Test erforderlichen Ressourcen und Abonnements, insbesondere Speicher,
Netzwerk, Tenant und Support, unterliegen weiterhin ihren eigenen Tarifbedingungen. Die
Gesamtkosten des Tests beschränken sich daher nicht nur auf die Compute-Leistung.

Vergleichen Sie die Rechenzeit und den RAM-Spitzenwert auf Ihrem Datensatz und
stoppen Sie die VM am Ende des Tests, um die Abrechnung von CPU/RAM zu unterbrechen. Die
persistenten Volumes ermöglichen es, Ihre Umgebung für die weitere Nutzung zu bewahren.

## Ist ein monatlich abonniertes PERF3-Blade eine VMI ?

Nein. Ein dediziertes PERF3-Blade des Angebots **IaaS Open Source** unterliegt einem separaten IaaS-Abonnement von VM-Instanzen. Die Monatsverpflichtung dieser Referenz darf nicht mit dem stündlichen Verbrauch von VMI verwechselt werden.
Konsultieren Sie die [concepts IaaS Open Source](../../iaas_opensource/concepts)
und den anwendbaren Tarifkatalog, bevor Sie die Angebote vergleichen.

## Was ist ein Custom Flavor ?

Ein **Custom Flavor** ist eine benutzerdefinierte Ressourcenvorlage für eine VM. Er
ermöglicht die Definition der Anzahl der **vCPU** und der **RAM**-Menge gemäß den
Anforderungen der Arbeitslast.

Die tatsächlich verfügbaren Grenzen und Kombinationen sind diejenigen, die in der
Cloud Temple Console aufgeführt sind.

Für weitere Details siehe die Seite [Concepts](./concepts).

## Was ist der Unterschied zwischen einem Template und einem Flavor?

Das **Template** entspricht dem Image, das zum Bereitstellen des Betriebssystems oder der Appliance verwendet wird. Der **Flavor** entspricht den der VM zugewiesenen Ressourcen, insbesondere der Anzahl der vCPU und der RAM-Menge.

Während der Bereitstellung werden das Template und der Flavor separat ausgewählt.

## Können die Ressourcen einer bestehenden VM geändert werden?

Die Dokumentation bestätigt, dass die Parameter **CPU** und **RAM** geändert werden können, wenn die VM ausgeschaltet ist.

Die genauen Bedingungen, die für den Wechsel von einem vordefinierten Flavor zu einem Custom-Flavor sowie für die Änderung der Instanzfamilie gelten, müssen vor jeder Verpflichtung in der Cloud Temple Console überprüft werden.

Siehe [guide de démarrage](./quickstart).

## Kann eine VM mit einem OS migriert werden, das in der Marketplace nicht verfügbar ist?

Ja, eine Migration kann über eine **Veeam-Restaurierung im Bare-Metal-Recovery-Modus** in Betracht gezogen werden. Dieses Verfahren ermöglicht insbesondere die Behandlung eines OS, das im Standardkatalog nicht angeboten wird.

Für eine aus einer Kundenumgebung wiederhergestellte VM beschränkt sich der Support auf die VM-Infrastruktur. Die ordnungsgemäße Funktion des Gast-OS, der Anwendungen und der erforderlichen Agenten ist nicht gewährleistet, wenn diese nicht korrekt installiert oder konfiguriert sind. Der Support für das Gast-OS ist in diesem Fall eingeschränkt.

Eine zweite Methode, über den Import von **VHD/VMDK**-Disks, befindet sich in Entwicklung und ist für das **vierte Quartal 2026** geplant. Sie wird es ermöglichen, eine VM aus einem vorhandenen Image zu erstellen, ist aber noch nicht verfügbar.

## Ist die Systemfestplatte kostenlos enthalten ?

Nein. Eine Systemfestplatte wird automatisch mit jeder VM erstellt, um das Betriebssystem zu hosten, es handelt sich jedoch um eine Speicherressource, die gemäß dem Tarifikatalog VM Instances pro **Go** abgerechnet wird. Die Ressourcen vCPU, RAM und Speicher werden separat abgerechnet. Zusätzliche Volumes und aktivierte Backups werden ebenfalls gemäß dem zugehörigen Katalog abgerechnet.

## Sind Stormshield und FortiVM mit VM Instances kompatibel?

Ja, die virtuellen Appliances von Stormshield und FortiVM sind mit der **Enterprise-Familie** kompatibel, vorausgesetzt, die technischen Voraussetzungen und der anwendbare Supportumfang werden eingehalten.

## Ist die automatische Replikation einer VM zwischen Verfügbarkeitszonen enthalten?

Nein. Die VM-Replikation ist in VM Instances standardmäßig nicht enthalten. Die Prüfung ist für das zweite Halbjahr 2026 geplant.

Die Auswahl einer Verfügbarkeitszone bei der Bereitstellung stellt daher keine automatische Replikation der VM dar.