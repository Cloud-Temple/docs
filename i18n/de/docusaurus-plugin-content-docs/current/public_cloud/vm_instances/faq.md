---
title: Häufig gestellte Fragen
sidebar_position: 4
---

# FAQ VM-Instanzen

## Was wird weiterhin berechnet, wenn die VM ausgeschaltet ist?

Das Herunterfahren der VM **setzt die Abrechnung von vCPU und RAM aus**. Weder die VM noch ihre persistenten Volumes werden gelöscht: Das Betriebssystem, die Software und die auf diesen Volumes gespeicherten Daten bleiben erhalten.

Die anderen verbleibenden Ressourcen und Abonnements werden gemäß ihren jeweiligen Regeln weiter berechnet: insbesondere die Systemfestplatte, zusätzliche Volumes, der beibehaltene Sicherungsspeicher, die bezogenen Netzwerkdienste, der Tenant und der Support. Die Aussetzung der Compute-Abrechnung beschreibt nicht den technischen Mechanismus zur Freigabe oder Reservierung der physischen Ressourcen.

## Ist die Kapazität beim Neustart oder bei der Erstellung garantiert?

Für eine **nicht reservierte** Instanz unterliegen der Neustart nach dem Herunterfahren und die Erstellung einer neuen VM der verfügbaren Kapazität. Es gibt keine Zusage, eine bestimmte Größe wiederzufinden, selbst wenn diese Größe in einer früheren Kampagne genutzt wurde. Das Zerstören und Neuerstellen der VM stellt keine Kapazitätsreservierung dar.

Um eine Kapazitätszusage zu erhalten, muss eine **reservierte Instanz** im Rahmen und unter den Bedingungen der Reservierung bezogen werden. Die stundenweise Abrechnung und der dedizierte Charakter der vCPU Performance stellen für sich allein keine Reservierung dar.

## Muss für VMI eine Verfügbarkeitszonen-Aktivierung bezogen werden?

Nein. Der Bezug einer aktivierten AZ (Verfügbarkeitszone) mit Abrechnung betrifft das **IaaS**-Angebot; er ist für die Nutzung von **VM-Instanzen** nicht erforderlich. Sie wählen jedoch die Hosting-AZ bei der Bereitstellung der VM.

Der Tenant ist ein wiederkehrendes Abonnement. Die AZ-Aktivierung des IaaS-Angebots ist ebenfalls wiederkehrend; die Wahl einer AZ für eine VMI löst nicht diesen IaaS-Bezug aus.

## Welchen Support benötigt ein direkter Kunde oder einer, der von einem Partner begleitet wird?

Ein **direkter Kunde** muss mindestens den **Standard-Support** beziehen, selbst wenn er das Betriebssystem und die Anwendungen selbst verwaltet.

Der **Basic-Support** ist für Kunden gedacht, die von einem **geschulten Partner** begleitet werden. Er stellt keine Alternative zum Standard-Support für einen direkten Kunden dar. Der Umfang des Partners und die Supportbedingungen sind im Bezug festzulegen.

## Kann eine Instanz per SSH ohne Bastion verwaltet werden?

Ja. Eine Instanz, die auf einer **öffentlichen IP** verfügbar ist, kann per SSH erreicht werden, wenn der SSH-Dienst im Betriebssystem konfiguriert ist und die Netzwerkregeln den Datenfluss erlauben. Der Kunde ist für die Filterung verantwortlich, insbesondere für die Beschränkung auf autorisierte Quell-IPs, sowie für die Konfiguration des SSH-Zugriffs.

Der Bastion ist keine zwingende Voraussetzung für VM-Instanzen. Er bietet einen alternativen Verwaltungsweg über die Konsole, ohne dass die VM direkt ins Internet exponiert wird. Siehe [Netzwerkkonzepte](./concepts#netzwerk) und [Bastion-Konzepte](../../bastion/concepts).

## Wie kann vor der Wahl der Konfiguration ein Test durchgeführt werden?

Sie können eine VM-Instanz-Konfiguration im **Selbstbedienungsmodus** mit Ihrer eigenen Software und Ihren Datensätzen testen, bevor Sie Ihre Dimensionierung wählen.

**Compute wird stundenweise abgerechnet, ohne monatliche Verpflichtung.** Diese Flexibilität erleichtert kurze Tests: Für einen Test von einigen Stunden wird der Compute-Anteil für diese Stunden zum üblichen Tarif des Dienstes berechnet. Jede begonnene Compute-Stunde ist zu bezahlen. Bei gleicher Konfiguration passen Sie so das Compute-Budget an die Dauer Ihres Tests an, von einigen Stunden bis zu mehreren Tagen.

Die anderen für den Test erforderlichen Ressourcen und Abonnements, insbesondere Speicher, Netzwerk, Tenant und Support, unterliegen weiterhin ihren eigenen Preisbedingungen. Die Gesamtkosten des Tests beschränken sich daher nicht auf das Compute.

Vergleichen Sie die Rechenzeit und den RAM-Spitzenwert auf Ihren Datensätzen und fahren Sie die VM am Ende des Tests herunter, um die CPU-/RAM-Abrechnung auszusetzen. Die persistenten Volumes ermöglichen es, Ihre Umgebung für die Fortsetzung zu behalten.

## Ist eine monatlich bezogene PERF3-Lizenz eine VMI?

Nein. Eine dedizierte PERF3-Lizenz des **IaaS Open Source**-Angebots unterliegt einem vom VM-Instanzen-Bezug getrennten IaaS-Bezug. Die monatliche Verpflichtung für diese Referenz darf nicht mit dem stundenweisen Verbrauch von VMI verwechselt werden. Konsultieren Sie die [IaaS Open Source-Konzepte](../../iaas_opensource/concepts) und den geltenden Preisverzeichnis, bevor Sie die Angebote vergleichen.

## Was ist ein Custom Flavor?

Ein **Custom Flavor** ist eine benutzerdefinierte Ressourcenvorlage für eine VM. Er ermöglicht die Definition der Anzahl der **vCPU** und der **RAM**-Menge entsprechend den Anforderungen der Arbeitslast.

Die tatsächlich verfügbaren Grenzen und Kombinationen sind diejenigen, die in der Cloud Temple-Konsole angezeigt werden.

Weitere Details finden Sie auf der Seite [Konzepte](./concepts).

## Was ist der Unterschied zwischen einer Vorlage (Template) und einem Flavor?

Das **Template** entspricht dem Image, das zur Bereitstellung des Betriebssystems oder der Appliance verwendet wird. Der **Flavor** entspricht den der VM zugewiesenen Ressourcen, insbesondere der Anzahl der vCPU und der RAM-Menge.

Bei der Bereitstellung werden Template und Flavor separat ausgewählt.

## Können die Ressourcen einer bestehenden VM geändert werden?

Die Dokumentation bestätigt, dass die Parameter **CPU** und **RAM** geändert werden können, wenn die VM ausgeschaltet ist.

Die genauen Bedingungen für den Übergang von einem vordefinierten Flavor zu einem Custom Flavor sowie für den Wechsel der Instanzfamilie sind vor jeder Verpflichtung in der Cloud Temple-Konsole zu überprüfen.

Siehe [Schnellstartanleitung](./quickstart).

## Kann eine VM mit einem Betriebssystem migriert werden, das nicht im Marketplace verfügbar ist?

Ja, eine Migration kann durch Wiederherstellung im **Veeam Bare-Metal-Recovery-Modus** untersucht werden. Dieses Verfahren ermöglicht insbesondere die Behandlung eines Betriebssystems, das nicht im Standardkatalog angeboten wird.

Für eine VM, die aus einer Kundenumgebung wiederhergestellt wurde, erstreckt sich der Support auf die VM-Infrastruktur. Das einwandfreie Funktionieren des Gast-Betriebssystems, der Anwendungen und der erforderlichen Agenten ist nicht garantiert, wenn diese nicht korrekt installiert oder konfiguriert sind. Der Support für das Gast-Betriebssystem ist dann eingeschränkt.

Eine zweite Methode, basierend auf dem Import von **VHD/VMDK**-Festplatten, befindet sich in der Entwicklung und ist für das **vierte Quartal 2026** geplant. Sie wird es ermöglichen, eine VM aus einem vorhandenen Image zu erstellen, ist jedoch noch nicht verfügbar.

## Ist die Systemfestplatte kostenlos enthalten?

Nein. Eine Systemfestplatte wird automatisch mit jeder VM erstellt, um das Betriebssystem zu hosten, handelt es sich jedoch um eine Speicherressource, die nach **GB** gemäß dem [offiziellen Cloud Temple-Preisverzeichnis](https://www.cloud-temple.com/nos-tarifs-publics/) berechnet wird. Die Ressourcen vCPU, RAM und Speicher werden separat abgerechnet. Zusätzliche Volumes und aktivierte Sicherungen werden ebenfalls gemäß dem geltenden Preisverzeichnis berechnet.

## Sind Stormshield und FortiVM mit VM-Instanzen kompatibel?

Ja, die virtuellen Appliances Stormshield und FortiVM sind mit der **Enterprise-Familie** kompatibel, vorbehaltlich der Einhaltung der technischen Voraussetzungen und des geltenden Supportumfangs.

## Ist die automatische Replikation einer VM zwischen Verfügbarkeitszonen enthalten?

Nein. Die VM-Replikation ist in VM-Instanzen nicht standardmäßig enthalten. Ihre Untersuchung ist für das zweite Halbjahr 2026 geplant.

Die Wahl einer Verfügbarkeitszone bei der Bereitstellung stellt daher keine automatische Replikation der VM dar.
