---
title: Häufig gestellte Fragen
sidebar_position: 4
---

# FAQ VM-Instanzen

## Was ist ein benutzerdefinierter Flavor ?

Ein **benutzerdefinierter Flavor** ist eine individuelle Ressourcen-Vorlage für eine VM. Er
ermöglicht es, die Anzahl der **vCPU** und die Menge an **RAM** entsprechend den
Anforderungen des Workloads zu definieren.

Die tatsächlich verfügbaren Grenzen und Kombinationen sind diejenigen, die in der
Cloud Temple-Konsole angezeigt werden.

Für weitere Details, siehe die Seite [Concepts](./concepts).

## Was ist der Unterschied zwischen einem Template und einem Flavor ?

Das **Template** entspricht dem Image, das zum Bereitstellen des Betriebssystems
oder der Appliance verwendet wird. Das **Flavor** entspricht den der VM zugewiesenen
Ressourcen, insbesondere der Anzahl der vCPUs und der RAM-Menge.

Bei der Bereitstellung werden das Template und das Flavor separat ausgewählt.

## Kann man die Ressourcen einer bestehenden VM ändern?

Die Dokumentation bestätigt, dass die Parameter **CPU** und **RAM** geändert
werden können, wenn die VM ausgeschaltet ist.

Die genauen Bedingungen für den Wechsel von einem vordefinierten Flavor zu einem
benutzerdefinierten Flavor sowie für die Änderung der Instanzfamilie müssen
in der Cloud Temple-Konsole vor jeder Verpflichtung überprüft werden.

Siehe [guide de démarrage](./quickstart).

## Ist die automatische Replikation einer VM zwischen Verfügbarkeitszonen enthalten?

Nein. Die VM-Replikation ist standardmäßig nicht in VM-Instanzen enthalten. Ihre
Evaluierung ist für das zweite Halbjahr 2026 geplant.

Die Auswahl einer Verfügbarkeitszone bei der Bereitstellung stellt daher keine
automatische Replikation der VM dar.