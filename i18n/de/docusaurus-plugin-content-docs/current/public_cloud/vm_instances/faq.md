---
title: Häufig gestellte Fragen
sidebar_position: 4
---

# FAQ VM-Instanzen

## Was sind VM-Instanz-Quotas?

**Quotas** definieren die maximale Menge an Ressourcen, die Ihr Tenant
für seine VM-Instanzen nutzen kann. Drei Obergrenzen sind festgelegt:

| Quota | Abgerechnete Ressource |
|---|---|
| **vCPU** | Gesamtzahl der den Instanzen des Tenants zugewiesenen virtuellen Prozessoren. |
| **RAM** | Gesamtmenge des den Instanzen des Tenants zugewiesenen Speichers. |
| **Speicher** | Gesamtkapazität, die für Systemdatenträger und zusätzliche Datenträger provisioniert wurde. |

Diese Obergrenzen werden zwischen den Instanzen des Tenants geteilt. Sie
betreffen die konfigurierten Ressourcen: Eine VM mit **4 vCPU** zählt als
4 vCPU in der Abrechnung, selbst wenn ihre Anwendungen nur wenig Prozessor
nutzen. Der Speicher wird anhand der provisionierten Kapazität der
Datenträger abgerechnet, unabhängig vom tatsächlich von den Dateien
belegten Speicherplatz.

Jedes Quota ist unabhängig: Die Verfügbarkeit von vCPU ermöglicht es nicht,
die Obergrenze für RAM oder Speicher zu überschreiten.

Beispielsweise: Bei einem Quota von **20 vCPU**, wenn Ihre Instanzen bereits
**16** aufweisen, können Sie **4 zusätzliche vCPU** anfordern, vorbehaltlich
der Speicher- und Storage-Quotas sowie der verfügbaren Kapazität.

Wenn eine Operation die Überschreitung eines Quotas zur Folge hätte, wird sie
abgelehnt. Dies gilt insbesondere bei der Erstellung einer VM, der Erhöhung
ihrer Ressourcen oder der Hinzufügung von Speicher.

Sie können Ihre Obergrenzen und deren Auslastung in der **Cloud Temple
Konsole** einsehen. Ein Quota erlaubt einen maximalen Verbrauch; es
stellt keine Reservierung physischer Kapazität dar. Für eine nicht
reservierte Instanz unterliegt die Erstellung oder der Neustart der
verfügbaren Kapazität.

## Wie kann man seine Quotas erhöhen?

Um Ihre VM-Instanz-Quotas zu erhöhen, öffnen Sie eine **Support-Anfrage
bei Cloud Temple** und geben Sie den betroffenen Tenant, die gewünschten
neuen Obergrenzen in vCPU, RAM und Speicher sowie Ihren Bedarf an.

## Was ist der Zusammenhang zwischen Quotas und Abrechnung?

Quotas definieren Ihre **erlaubten Obergrenzen**. Die Abrechnung hängt von
den genutzten Ressourcen und den abonnierten Diensten ab: Die Quota-Obergrenze
entspricht nicht der Menge der abgerechneten Ressourcen.

Für eine VM nach Nutzung werden die **konfigurierten vCPU und RAM abgerechnet,
während die VM eingeschaltet ist**, unabhängig von der tatsächlichen Last
ihrer Anwendungen. Die Compute-Abrechnung erfolgt stundenweise, **jede
begonnene Stunde ist geschuldet**.

| Ressource | VM eingeschaltet | VM ausgeschaltet |
|---|---|---|
| **Konfigurierte vCPU und RAM** | Stundenweise abgerechnet. | Abrechnung ausgesetzt. |
| **Systemdatenträger und zusätzliche Datenträger** | Pro zugewiesenem GB abgerechnet. | Solange sie aufbewahrt werden, weiterhin abgerechnet. |
| **Backup-Speicher** | Nach dem verbrauchten Speicher abgerechnet. | Solange die Backups aufbewahrt werden, weiterhin abgerechnet. |
| **Netzwerk, Tenant und Support** | Je nach abonnierten Diensten und Abonnements. | Je nach abonnierten Diensten und Abonnements. |

**Reservierte Instanzen** unterliegen den Bedingungen ihrer Reservierung.

## Was wird weiterhin abgerechnet, wenn die VM ausgeschaltet ist?

Das Ausschalten der VM **setzt die Abrechnung der vCPU und des RAM aus**. Es
löscht weder die VM noch ihre persistenten Volumes: Das Betriebssystem, die
Software und die auf diesen Volumes gespeicherten Daten werden beibehalten.

Die anderen beibehaltenen Ressourcen und Abonnements werden weiterhin nach
ihren jeweiligen Regeln abgerechnet: insbesondere der Systemdatenträger, die
zusätzlichen Volumes, der aufbewahrte Backup-Speicher, die abonnierten
Netzwerkdienste, der Tenant und der Support. Die Aussetzung der
Compute-Abrechnung beschreibt nicht den technischen Mechanismus der
Freigabe oder Reservierung physischer Ressourcen.

## Ist die Kapazität beim Neustart oder bei der Erstellung garantiert?

Für eine **nicht reservierte** Instanz unterliegen der Neustart nach einem
Ausschalten und die Erstellung einer neuen VM der verfügbaren Kapazität.
Es gibt keine Zusage, eine bestimmte Größe wiederzuerlangen, selbst wenn
diese Größe bei einer früheren Kampagne genutzt wurde. Das Löschen und
Erneut-Erstellen der VM stellt keine Kapazitätsreservierung dar.

Um eine Kapazitätszusage zu erhalten, muss eine **reservierte Instanz**
abonniert werden, im Rahmen und nach den Bedingungen der Reservierung.
Die stundenweise Abrechnung und der dedizierte Charakter der vCPU Performance
stellen für sich allein keine Reservierung dar.

## Muss eine Aktivierung einer Verfügbarkeitszone für VMI abonniert werden?

Nein. Die Abonnement einer abgerechneten AZ-Aktivierung betrifft das Angebot
**IaaS**; sie ist nicht erforderlich, um **VM-Instanzen** zu nutzen. Sie
wählen jedoch die Hosting-AZ beim Deployment der VM.

Der Tenant ist ein wiederkehrendes Abonnement. Die AZ-Aktivierung des
IaaS-Angebots ist ebenfalls wiederkehrend; die Wahl einer AZ für eine VMI
löst dieses IaaS-Abonnement nicht aus.

## Welcher Support ist für einen Direktkunden oder einen durch einen Partner begleiteten Kunden erforderlich?

Ein **Direktkunde** muss mindestens den **Standard-Support** abonnieren,
selbst wenn er das Betriebssystem und die Anwendungen selbst verwaltet.

Der **Basic-Support** ist für Kunden bestimmt, die durch einen
**geschulten Partner** begleitet werden. Er stellt keine Alternative zum
Standard-Support für einen Direktkunden dar. Der Umfang des Partners und die
Support-Bedingungen sind im Abonnement festzulegen.

## Kann man eine Instanz per SSH ohne Bastion verwalten?

Ja. Eine Instanz, die auf einer **öffentlichen IP** ausgesetzt ist, kann per
SSH erreicht werden, wenn der SSH-Dienst im Betriebssystem konfiguriert ist
und die Netzwerkregeln den Datenfluss erlauben. Der Kunde ist für das
Filtering verantwortlich, insbesondere für die Einschränkung auf
erlaubte Quell-IPs, sowie für die Konfiguration des SSH-Zugriffs.

Der Bastion ist kein systematisches Vorbedingung von VM-Instanzen. Er
bietet einen anderen Verwaltungsweg über die Konsole, ohne direkte
Aussetzung der VM an das Internet. Siehe die [Netzwerk-Konzepte](./concepts#netzwerk)
und die [Bastion-Konzepte](../../bastion/concepts).

## Wie kann man einen Test durchführen, bevor die Konfiguration gewählt wird?

Sie können eine VM-Instanz-Konfiguration im **Self-Service** testen, mit
eigenen Software und Datensätzen, bevor Sie Ihre Dimensionierung wählen.

**Compute wird stundenweise abgerechnet, ohne monatliche Bindung.** Diese
Flexibilität erleichtert kurze Tests: Für einen Test von wenigen Stunden wird
der Compute-Anteil auf diese Stunden berechnet, zum üblichen Tarif des
Dienstes. Jede begonnene Compute-Stunde ist geschuldet. Bei identischer
Konfiguration passen Sie so das Rechenbudget an die Dauer Ihres Tests an,
von wenigen Stunden bis zu mehreren Tagen.

Die anderen Ressourcen und Abonnements, die für den Test erforderlich sind,
insbesondere Speicher, Netzwerk, Tenant und Support, unterliegen ihren
eigenen Tarifbedingungen. Die Gesamtkosten des Tests beschränken sich
daher nicht auf Compute.

Vergleichen Sie die Rechenzeit und den RAM-Spitzenwert auf Ihrem Datensatz,
dann schalten Sie die VM am Ende des Tests aus, um die CPU/RAM-Abrechnung
auszusetzen. Die persistenten Volumes ermöglichen es, Ihre Umgebung für die
weitere Nutzung zu bewahren.

## Ist eine monatlich abonnierte PERF3-Blade eine VMI?

Nein. Eine dedizierte PERF3-Blade des Angebots **IaaS Open Source** unterliegt
einem separaten IaaS-Abonnement von VM-Instanzen. Die Monatsbindung dieser
Referenz darf nicht mit der stundenweisen VMI-Nutzung verwechselt werden.
Konsultieren Sie die [IaaS Open Source-Konzepte](../../iaas_opensource/concepts)
und den anwendbaren Tarifkatalog, bevor Sie die Angebote vergleichen.

## Was ist ein Custom-Flavor?

Ein **Custom-Flavor** ist eine personalisierte Ressourcenvorlage für eine VM.
Er ermöglicht es, die Anzahl der **vCPU** und die Menge an **RAM** gemäß den
Anforderungen der Arbeitslast zu definieren.

Die tatsächlich verfügbaren Grenzen und Kombinationen sind diejenigen, die in
der Cloud Temple Konsole angezeigt werden.

Für weitere Details konsultieren Sie die Seite [Konzepte](./concepts).

## Was ist der Unterschied zwischen einem Template und einem Flavor?

Das **Template** entspricht dem Image, das zum Deployment des Betriebssystems
oder der Appliance verwendet wird. Der **Flavor** entspricht den der VM
zugewiesenen Ressourcen, insbesondere der Anzahl der vCPU und der Menge an RAM.

Beim Deployment werden Template und Flavor separat ausgewählt.

## Kann man die Ressourcen einer bestehenden VM ändern?

Die Dokumentation bestätigt, dass die Parameter **CPU** und **RAM** geändert
werden können, wenn die VM ausgeschaltet ist.

Die genauen Bedingungen, die auf den Wechsel von einem vordefinierten Flavor
zu einem Custom-Flavor sowie auf den Wechsel der Instanzfamilie anwendbar
sind, müssen in der Cloud Temple Konsole vor jeder Bindung überprüft werden.

Siehe den [Schnellstartguide](./quickstart).

## Kann man eine VM mit einem Betriebssystem migrieren, das in der Marketplace nicht verfügbar ist?

Ja, eine Migration kann durch Wiederherstellung mit **Veeam im Bare Metal Recovery-Modus** untersucht werden. Dieses Verfahren ermöglicht insbesondere die Behandlung eines Betriebssystems, das im Standardkatalog nicht angeboten wird.

Für eine aus einer Kundenumgebung wiederhergestellte VM bezieht sich der Support auf die VM-Infrastruktur. Die ordnungsgemäße Funktion des Gast-Betriebssystems, der Anwendungen und der erforderlichen Agenten ist nicht garantiert, wenn diese nicht korrekt installiert oder konfiguriert sind. Der Support für das Gast-Betriebssystem ist dann eingeschränkt.

Eine zweite Methode, durch Import von **VHD/VMDK**-Datenträgern, ist in Entwicklung und für das **vierte Quartal 2026** vorgesehen. Sie wird es ermöglichen, eine VM aus einem bestehenden Image zu erstellen, ist aber noch nicht verfügbar.

## Ist der Systemdatenträger kostenlos enthalten?

Nein. Ein Systemdatenträger wird automatisch mit jeder VM erstellt, um das Betriebssystem zu hosten, aber es handelt sich um eine nach **GB** abgerechnete Speicherressource gemäß dem [offiziellen Tarifkatalog von Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/). Die Ressourcen vCPU, RAM und Speicher werden separat abgerechnet. Zusätzliche Volumes und aktivierte Backups werden ebenfalls gemäß dem anwendbaren Katalog abgerechnet.

## Sind Stormshield und FortiVM mit VM-Instanzen kompatibel?

Ja, die virtuellen Appliances Stormshield und FortiVM sind mit der **Enterprise-Familie** kompatibel, vorbehaltlich der Einhaltung der technischen Voraussetzungen und des anwendbaren Support-Umfangs.

## Ist die automatische Replikation einer VM zwischen Verfügbarkeitszonen enthalten?

Nein. Die VM-Replikation ist nicht standardmäßig in VM-Instanzen enthalten. Ihre
Untersuchung ist für das zweite Halbjahr 2026 vorgesehen.

Die Wahl einer Verfügbarkeitszone beim Deployment stellt daher keine
automatische Replikation der VM dar.
