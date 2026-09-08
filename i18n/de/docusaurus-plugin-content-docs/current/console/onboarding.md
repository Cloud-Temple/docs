---
title: Onboarding
description: "Erstellen Sie Ihre Organisation, richten Sie Ihre Umgebungen ein und aktivieren Sie Ihre Produkte. Die Einrichtung auf der Cloud Temple-Plattform, von der Registrierung bis zur ersten Bereitstellung."
tags: [onboarding]
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import tenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import orgAccess from '@site/docs/console/images/shiva_org_access.png'
import supportSelectProduct from '@site/docs/console/images/console_support_new_ticket_select_product.png'
import tenantProductsEdit from '@site/docs/console/images/shiva_org_tenant_products_edit.png'

# Onboarding

Bei Cloud Temple warten Sie nicht auf Ihre Cloud: Sie erstellen sie.

Sie erstellen Ihre Organisation über ein Online-Formular in wenigen Minuten. Ihre Umgebungen werden anschließend mit einem Klick über die Konsole bereitgestellt. Sie können Produkte vollständig autonom aktivieren und deaktivieren, die nutzungsbasiert abgerechnet werden. All dies auf einer souveränen Infrastruktur, die in Frankreich betrieben wird. Die Konsole kennzeichnet Tenant für Tenant und Produkt für Produkt, was unter die **SecNumCloud**-Qualifizierung fällt.

<div class="cert-row cert-row--doc">
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">SecNumCloud 3.2</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISO 27001</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">HDS</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISAE 3402</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">C5</a>
</div>

## Was Sie bei der Registrierung erhalten

- **Ohne Wartezeit** : Ein Formular genügt. Ihre Organisation wird automatisch in wenigen Minuten erstellt, ohne dass unsere Teams eingreifen müssen.
- **Ohne Volumenverpflichtung** : Die Self-Service-Produkte werden nach Verbrauch abgerechnet.
- **Ohne Vertragsänderung** : Richten Sie neue Umgebungen unter Ihrem bestehenden Vertrag ein, gemäß den darin festgelegten Bedingungen.
- **Souverän durch Design** : Infrastruktur, die in Frankreich betrieben wird, und ein in der Konsole ausgewiesener **SecNumCloud**-Qualifizierungsumfang.

## Die drei Pfade

Diese Seite beschreibt diese Einrichtung von Anfang bis Ende.

<div class="card-grid">
  <div class="card">
    <h3>Ihre Organisation erstellen</h3>
    <p>Das Online-Registrierungsformular und die dahinterliegenden Prozesse.</p>
    <a href="#pfad-1-ihre-organisation-erstellen" class="card-link">Starten &rarr;</a>
  </div>
  <div class="card">
    <h3>Eine Umgebung hinzufügen</h3>
    <p>Ein neuer Tenant über die Konsole, in wenigen Minuten und eigenständig.</p>
    <a href="#pfad-2-eine-umgebung-hinzufügen" class="card-link">Anleitung ansehen &rarr;</a>
  </div>
  <div class="card">
    <h3>Eine Umgebung weiterentwickeln</h3>
    <p>Ein Produkt aktivieren, Zugriffsrechte gewähren, die Verwaltung an einen Drittanbieter delegieren.</p>
    <a href="#pfad-3-eine-umgebung-weiterentwickeln" class="card-link">Erkunden &rarr;</a>
  </div>
</div>

## Die Terminologie, auf zwei Begriffe

Die gesamte Plattform basiert auf zwei Ebenen.

**Ihre Organisation**, das sind Sie: Ihr Unternehmen. Sie ist Vertrags- und Abrechnungsträger.

**Ein Tenant** ist eine Arbeitsumgebung innerhalb Ihrer Organisation. Sie können mehrere davon betreiben, die voneinander isoliert sind.

```
Ihre Organisation
├── Tenant „production“
├── Tenant „recette“
└── Tenant „lab“
```

Konkret: Sie schließen **einen** Vertrag und richten Ihre Umgebungen unter den darin festgelegten Bedingungen ein, ohne Ihre Daten dabei jemals zu vermischen. Das Abgrenzen einer Testumgebung, das Isolieren einer Tochtergesellschaft oder das Einrichten eines Labs erfordert keine Vertragsänderung.

Zwei Rollen erhalten Zugriffsrechte:

- der **Organisationsinhaber** hat Zugriff auf alles und lädt andere Benutzer ein
- der **Tenant-Inhaber** hat Zugriff auf diese Umgebung

Dies kann dieselbe Person sein.

---

## Pfad 1. Ihre Organisation erstellen

Dies ist Ihr Einstiegspunkt in die Plattform. Dieser Vorgang findet nur einmal statt und erfolgt online.

### Das Registrierungsformular

Ihr Setup beginnt mit einem **Online-Registrierungsformular**, dessen Zugangsdaten Ihnen Ihr Ansprechpartner bei Cloud Temple übermittelt.

Es ist kurz und wird in einem Schritt ausgefüllt. Es erfordert vier Angaben.

**Wer Sie sind.** Der Name Ihrer Organisation, ihre Rechtsform, das Sitzland und Ihre SIREN-Nummer.

**Wer die Plattform verwalten wird.** Der Name, Vorname und die geschäftliche E-Mail-Adresse der Person, die **Organisationsinhaber** sein wird. Diese Person erhält die Zugangsdaten und lädt anschließend die Mitarbeiter ein.

**Was Sie dort speichern werden.** Ihr Wirtschaftszweig und die Art der Daten, mit denen Ihr Projekt arbeitet: Gesundheitsdaten, personenbezogene Daten, Finanzdaten, sensible Daten.

**Von wo aus Sie sich verbinden werden.** Die öffentlichen IP-Adressen, die zum Zugriff auf Ihre Konsole berechtigt sind.

:::caution[IP-Adressen sind nicht optional]
Nur die von Ihnen angegebenen Adressen können auf die Konsole zugreifen.

Achten Sie darauf, **alle** Ihre Standorte und VPN-Ausgänge einzuschließen. Ein Versehen ist nicht endgültig: Die Liste kann anschließend eigenständig über die Konsole erweitert werden.
:::

Abschließend bestätigen Sie, dass Sie bevollmächtigt sind, Ihre Organisation rechtlich zu binden, und akzeptieren die **[conditions générales](/contracts)**.

### Was als Nächstes passiert

Alles läuft automatisch ab. Ihre Organisation wird basierend auf den von Ihnen eingegebenen Informationen erstellt, und Ihr Workspace wird in den folgenden Minuten aufgebaut: Ihr Identitätsverzeichnis, Ihre erste Umgebung, Ihre Zugänge.

Währenddessen müssen Sie keine weiteren Schritte unternehmen.

:::tip[Diese erste Umgebung wird zunächst leer bereitgestellt]
Die durch Ihre Registrierung erstellte Umgebung hat **keine aktivierten Produkte**: Sie wird von unserem Automatisierungssystem ohne Formular bereitgestellt, sodass keine Auswahl möglich ist. Dies ist beabsichtigt: es fallen keine Kosten an, solange Sie kein Produkt selbst aktivieren.

Die vier Self-Service-Produkte sind in Ihrer Konsole **verfügbar**, sobald Sie diese öffnen. Verfügbar bedeutet nicht aktiviert: Sie aktivieren sie, wenn Sie es wünschen. Siehe [Les produits](#die-produkte).
:::

### Was Sie erhalten

Eine E-Mail zur **Kontoerstellung**, die an den angegebenen Besitzer gesendet wird. Dort legen Sie Ihr Passwort fest und aktivieren Ihren zweiten Authentifizierungsfaktor.

Details: [Die E-Mails, die Sie erhalten](#die-e-mails-die-sie-erhalten).

### Sie sind angemeldet

Sie gelangen zur Konsole unter der Adresse [shiva.cloud-temple.com](https://shiva.cloud-temple.com). Sie können nun Ihre Mitarbeiter einladen und ihnen Rechte zuweisen: siehe [Identités et accès](/console/iam).

<img src={shivaLogin} />

<img src={shivaHome} />

:::tip[Und der vertragliche Teil?]
Dies hält Sie nicht auf. Die administrativen und Abrechnungsinformationen: Abrechnungsadresse, Zahlungsart, Bestellnummer werden parallel mit Ihrem Ansprechpartner bei Cloud Temple ergänzt. Sie müssen nicht warten, bis diese abgeschlossen sind, um die Plattform zu nutzen.
:::

---

## Pfad 2. Eine Umgebung hinzufügen

Sie verfügen bereits über eine Organisation und möchten eine neue Umgebung erstellen, etwa für eine Testumgebung, ein neues Projekt oder eine Niederlassung.

**Sie erledigen alles über die Konsole, im Rahmen Ihres Vertrags. Es sind keine weiteren Schritte oder Kontaktaufnahmen mit uns erforderlich.**

### Die Schritte

1. Erstellen Sie in der Konsole einen **neuen Tenant** über den Tab **Tenants**.
2. Geben Sie ihm einen aussagekräftigen **Namen**: *Produktion*, *Abnahme*, den Namen eines Projekts.
3. Der Ersteller des Tenants wird standardmäßig zum Eigentümer. Er kann anschließend weitere Verantwortliche über den Tab **Benutzer** hinzufügen, sobald er im Tenant angemeldet ist.
4. Wählen Sie die **Produkte** aus, die dort aktiviert werden sollen.

<img src={tenantNew} />

### Was als Nächstes passiert

Ihre Umgebung wird automatisch in wenigen Minuten bereitgestellt. Sie müssen nichts tun.

Wenn der Tenant-Inhaber noch kein Konto besitzt, erhält er eine E-Mail zur Kontoregistrierung. Falls er bereits eines hat, kann er auf die neue Umgebung zugreifen, ohne eine neue Einladung zu benötigen.

:::tip[Nichts wird standardmäßig aktiviert]
Sie wählen die Tenant-Produkte **bereits im Erstellungsformular** (Schritt 4 oben) und können diesen Umfang jederzeit anpassen. Kein Produkt wird aktiviert, ohne dass Sie es explizit ausgewählt haben: Sie zahlen nur für das, was Sie tatsächlich nutzen.
:::

---

## Pfad 3. Eine Umgebung weiterentwickeln

Ihre Anforderungen ändern sich. Hier erfahren Sie, wie Sie eine bestehende Umgebung weiterentwickeln.

### Ein Produkt aktivieren

Wenn das Produkt Teil Ihres Katalogs ist, wird es in der Konsole angezeigt: **aktivieren Sie es vollständig eigenständig** im betreffenden Tenant. Rechnen Sie mit einigen Minuten, bis es nutzbar ist.

Über die Liste Ihrer Tenants öffnet die Aktion **« Produkte bearbeiten »** den Katalog. Setzen Sie ein Häkchen bei den Produkten, die Sie aktivieren möchten, entfernen Sie das Häkchen bei den Produkten, die Sie stoppen möchten, und klicken Sie anschließend auf **Speichern**.

Falls es nicht angezeigt wird, ist es noch nicht in Ihrem Katalog enthalten: siehe [Demander un produit supplémentaire](#ein-zusätzliches-produkt-anfordern).

<img src={tenantProductsEdit} />

### Ein Produkt stoppen

Sie können ein Produkt deaktivieren, das Sie nicht mehr verwenden, und die Abrechnung endet gleichzeitig.

Zuvor wird eine Überprüfung durchgeführt: Wenn noch Ressourcen verbraucht werden, wird die Deaktivierung abgelehnt und die Konsole zeigt Ihnen an, was den Vorgang blockiert. Löschen Sie diese Ressourcen und wiederholen Sie den Vorgang.

Dies dient als Schutz: Er verhindert, dass ein noch genutzter Dienst gestoppt und die zugehörigen Daten verloren gehen.

### Eine IP-Adresse hinzufügen

Das **Hinzufügen** erfolgt über die Konsole unter **Administration > Zugriff**. Die Seite listet die zugelassenen öffentlichen Adressen auf; mit der Schaltfläche **« IP-Adresse hinzufügen »** wird eine neue Adresse in CIDR-Notation mit einer Beschreibung hinzugefügt.

Sie benötigen die Berechtigung `console_public_access_read`, um die Liste einzusehen, und `console_public_access_write`, um sie zu ergänzen.

Rechnen Sie mit einer **Wartezeit von etwa zehn Minuten**, bis die neue Adresse wirksam wird.

:::caution[Diese Liste gilt für Ihre gesamte Organisation]
Es gibt nur eine einzige Liste für die gesamte Organisation. Die Seite ist von einem Tenant aus erreichbar, aber **eine dort hinzugefügte Adresse gewährt den Zugriff auf die Konsole für die gesamte Organisation**, nicht nur für diesen Tenant.
:::

Das **Löschen** einer Adresse erfolgt hingegen über eine **Supportanfrage** in der Konsole. Dies ist beabsichtigt: Das Entfernen eines Zugriffs ist für die dahinter verbundenen Nutzer ein irreversibler Vorgang.

<img src={orgAccess} />

### Einen Verantwortlichen ändern

Der Organisationsinhaber verwaltet die Benutzer und deren Berechtigungen direkt über die Konsole: siehe [Identités et accès](/console/iam).

Er kann seine Rechte auch an einen externen Partner oder einen Cloud Temple-Projektleiter **delegieren**: nützlich, wenn Sie den Betrieb an ein Drittanbieterunternehmen übergeben.

---

## Die E-Mails, die Sie erhalten

Nur eine E-Mail erfordert eine Aktion von Ihrer Seite.

### Die E-Mail zur Kontenerstellung

| | |
| --- | --- |
| **Absender** | `shiva.support@cloud-temple.com` |
| **Empfänger** | Der Organisationsinhaber, anschließend jeder Tenant-Inhaber, der noch kein Konto besitzt |
| **Inhalt** | Ein Link zum Festlegen Ihres Passworts und zur Aktivierung des zweiten Faktors (OTP) |
| **Wann** | Einige Minuten nach der Erstellung |
| **Gültigkeit** | **96 Stunden** |

:::warning[Link abgelaufen?]
Nach Ablauf von 96 Stunden funktioniert der Link nicht mehr. Dies ist eine Sicherheitsmaßnahme und kein Ausfall.

Schreiben Sie an **`shiva.support@cloud-temple.com`** : wir senden Ihnen einen neuen zu.

Dies ist der einzige zu diesem Zeitpunkt nutzbare Kanal: Ohne Zugriff auf die Konsole können Sie dort noch keinen Supportantrag stellen.
:::

:::note[Nichts erhalten?]
Überprüfen Sie Ihren Spam-Ordner: Die Nachricht wird manchmal gefiltert. Sie wird von **`shiva.support@cloud-temple.com`** gesendet : erlauben Sie diese Adresse in Ihrem E-Mail-Programm. Wenn Sie innerhalb der folgenden Stunde nichts erhalten haben, kontaktieren Sie uns unter derselben Adresse.
:::

---

## Die Produkte

### Was Sie selbst aktivieren

Kein Produkt wird standardmäßig aktiviert, weder bei der Erstellung Ihrer Organisation noch bei der eines Tenants. Vier Produkte sind jedoch **verfügbar** in Ihrer Konsole direkt nach der Anmeldung: Sie aktivieren sie selbst auf dem Tenant Ihrer Wahl. Sie werden **nutzungsabhängig abgerechnet**, ohne Mindestmengenverpflichtung und ohne zu verhandelnde Preisstufen: Sie zahlen nur das, was Sie tatsächlich verbrauchen.

| Produkt | Verwendungszweck | Mehr erfahren |
| --- | --- | --- |
| **VM Instances** | Virtuelle Maschinen nach Bedarf | [Documentation](/public_cloud/vm_instances) |
| **VPC** | Ein privates virtuelles Netzwerk | [Documentation](/network/vpc) |
| **LLMaaS** | Souveräne KI-Modelle | [Documentation](/llmaas) |
| **Object Storage** | S3-kompatibler Speicher | [Documentation](/storage/oss) |

### Der Rest des Katalogs

Diese Produkte werden im Rahmen Ihres Vertrags mit Ihrem Vertriebskontakt freigeschaltet:

- [IaaS VMware](/iaas_vmware) und [IaaS OpenSource](/iaas_opensource)
- [Bare metal](/iaas_bare-metal)
- [PaaS OpenShift](/paas_openshift) und [Kubernetes managé](/managed_kubernetes)
- Managed Datenbanken : [PostgreSQL](/managed_postgresql), [MariaDB](/managed_mariadb)
- [Bastion](/bastion)
- [Housing](/housing)
- [Backbone privé](/network/private_backbone) und [Internet](/network/internet)
- [Marketplace](/marketplace)

Übersicht : [nos produits](/managedproducts_overview).

---

## Ein zusätzliches Produkt anfordern

Das gewünschte Produkt wird nicht in Ihrer Konsole angezeigt? Es ist noch nicht in Ihrem Katalog enthalten.

1. Erstellen Sie in der Konsole eine **Supportanfrage**
2. Geben Sie das betroffene **Produkt** sowie das voraussichtliche Volumen an, falls bekannt
3. Wir melden uns bei Ihnen bezüglich der Konditionen
4. Nach der Freigabe wird das Produkt in Ihrer Konsole angezeigt
5. Sie können es für einen oder mehrere Tenants aktivieren

<img src={supportSelectProduct} />

### Support-Level wechseln

Es gibt drei Stufen, die auf [unserer Website](https://www.cloud-temple.com/produits/niveaux-de-support) dargestellt werden.

Sie können das Support-Level herauf- oder herabstufen: Stellen Sie dazu eine Anfrage über den Support in der Konsole oder wenden Sie sich an Ihren Vertriebsansprechpartner.

---

## Häufig gestellte Fragen

**Wie lange dauert die Erstellung einer Umgebung?**
Einige Minuten, in allen drei Fällen. Die Erstellung erfolgt automatisch, sowohl bei Ihrer ersten Anmeldung als auch für eine neue Umgebung.

**Wie viele Tenants kann ich erstellen?**
So viele wie erforderlich, innerhalb der Rahmenbedingungen Ihres Vertrags.

**Mein Projekt enthält Gesundheitsdaten oder sensible Daten. Kann ich mich online registrieren?**
Ja. Geben Sie dies im Formular an: Ihre Organisation wird wie gewohnt erstellt, und unsere Teams unterstützen Sie bei der Aktivierung der betreffenden Dienste.

**Kann ich die Verwaltung an einen Dienstleister übergeben?**
Ja. Der Inhaber der Organisation kann seine Rechte an einen externen Partner oder einen Cloud Temple-Projektleiter delegieren.

**Ich habe eine IP-Adresse vergessen und kann mich nicht mehr anmelden.**
Wenn ein Kollege in Ihrer Organisation noch Zugriff auf die Konsole hat, kann er die Adresse unter **Administration > Zugriff** hinzufügen. Wenn niemand mehr darauf zugreifen kann, schreiben Sie an **`shiva.support@cloud-temple.com`**: Dies ist der Notfallkanal, wenn die Konsole nicht mehr erreichbar ist.

**Ich habe gerade ein Produkt aktiviert, sehe es aber noch nicht.**
Bitte warten Sie einige Minuten. Sollte es weiterhin nicht angezeigt werden, kontaktieren Sie den Support.

---

## Weiterführende Informationen

<div class="card-grid">
  <div class="card">
    <h3>Konsole kennenlernen</h3>
    <p>Umfassender Überblick über die Oberfläche: Tenants, Benutzer, Zugriffsrechte, Kosten.</p>
    <a href="./console_quickstart" class="card-link">Quickstart starten &rarr;</a>
  </div>
  <div class="card">
    <h3>Identitäten und Zugriffsverwaltung</h3>
    <p>Laden Sie Ihre Mitarbeiter ein und weisen Sie ihnen Tenant-spezifische Berechtigungen zu.</p>
    <a href="./iam" class="card-link">IAM erkunden &rarr;</a>
  </div>
  <div class="card">
    <h3>Ressourcen bestellen</h3>
    <p>Stellen Sie Ihre ersten Ressourcen bereit und verfolgen Sie deren Verfügbarkeit.</p>
    <a href="./orders" class="card-link">Bestellungen anzeigen &rarr;</a>
  </div>
  <div class="card">
    <h3>Abrechnung</h3>
    <p>Verfolgen Sie Ihren Verbrauch nach Tenant und Produkt im Laufe des Monats.</p>
    <a href="./billing/concepts" class="card-link">Zum Modul wechseln &rarr;</a>
  </div>
  <div class="card">
    <h3>Gemeinsame Verantwortung</h3>
    <p>Was Cloud Temple betreibt und was in Ihrer Verantwortung liegt.</p>
    <a href="../shared-responsibility" class="card-link">Modell lesen &rarr;</a>
  </div>
  <div class="card">
    <h3>Verpflichtungen und SLA</h3>
    <p>Servicelevels, Verfügbarkeit und vertragliche Bedingungen.</p>
    <a href="../contracts" class="card-link">Verpflichtungen einsehen &rarr;</a>
  </div>
</div>