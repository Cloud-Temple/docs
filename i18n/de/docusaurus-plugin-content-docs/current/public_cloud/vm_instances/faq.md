---
title: Häufig gestellte Fragen
sidebar_position: 4
---

# FAQ VM-Instanzen

## Was ist ein Custom Flavor ?

Ein **Custom Flavor** ist eine benutzerdefinierte Ressourcenvorlage für eine VM. Er
ermöglicht die Definition der Anzahl von **vCPU** und der Menge an **RAM** gemäß
den Anforderungen der Arbeitslast.

Die tatsächlich verfügbaren Grenzen und Kombinationen sind diejenigen, die in
der Cloud Temple Console angezeigt werden.

Für weitere Details siehe die Seite [Concepts](./concepts).

## Was ist der Unterschied zwischen einem Template und einem Flavor ?

Das **Template** entspricht dem Image, das zum Bereitstellen des Betriebssystems oder der Appliance verwendet wird. Der **Flavor** entspricht den der VM zugewiesenen Ressourcen, insbesondere der Anzahl der vCPU und der RAM-Menge.

Während der Bereitstellung werden das Template und der Flavor separat ausgewählt.

## Können die Ressourcen einer bestehenden VM geändert werden?

Die Dokumentation bestätigt, dass die Parameter **CPU** und **RAM** geändert
werden können, wenn die VM ausgeschaltet ist.

Die genauen Bedingungen, die beim Wechsel von einem vordefinierten Flavor zu einem
Custom-Flavor sowie beim Wechsel der Instanzfamilie gelten, müssen in der
Cloud Temple Console vor jeder Verpflichtung überprüft werden.

Siehe [guide de démarrage](./quickstart).

## Kann eine VM mit einem OS migriert werden, das in der Marketplace nicht verfügbar ist?

Ja, eine Migration kann über eine Wiederherstellung mit **Veeam im Bare-Metal-Recovery-Modus** geprüft werden. Dieses Verfahren ermöglicht insbesondere die Behandlung eines OS, das im Standardkatalog nicht angeboten wird.

Für eine aus einer Kundenumgebung wiederhergestellte VM beschränkt sich der Support auf die VM-Infrastruktur. Die ordnungsgemäße Funktion des Gast-OS, der Anwendungen und der erforderlichen Agenten ist nicht gewährleistet, wenn diese nicht korrekt installiert oder konfiguriert sind. Der Support für das Gast-OS ist in diesem Fall eingeschränkt.

Eine zweite Methode, über den Import von **VHD/VMDK**-Disks, befindet sich in Entwicklung und ist für das **vierte Quartal 2026** geplant. Sie wird es ermöglichen, eine VM aus einem vorhandenen Image zu erstellen, ist aber noch nicht verfügbar.

## Ist die Systemfestplatte kostenlos enthalten ?

Nein. Eine Systemfestplatte wird automatisch mit jeder VM erstellt, um das Betriebssystem zu hosten, es handelt sich jedoch um eine Speicherressource, die gemäß dem Tarifikatalog VM Instances pro **Go** abgerechnet wird. Die Ressourcen vCPU, RAM und Speicher werden separat abgerechnet. Zusätzliche Volumes und aktivierte Backups werden ebenfalls gemäß dem zugehörigen Katalog abgerechnet.

## Sind Stormshield und FortiVM mit VM-Instanzen kompatibel?

Ja, die virtuellen Appliances von Stormshield und FortiVM sind mit der **Enterprise-Familie** kompatibel, vorausgesetzt, die technischen Voraussetzungen und der anwendbare Supportumfang werden eingehalten.

## Ist die automatische Replikation einer VM zwischen Verfügbarkeitszonen enthalten?

Nein. Die VM-Replikation ist in VM Instances nicht standardmäßig enthalten. Die Prüfung ist für das zweite Halbjahr 2026 geplant.

Die Auswahl einer Verfügbarkeitszone bei der Bereitstellung stellt daher keine automatische Replikation der VM dar.