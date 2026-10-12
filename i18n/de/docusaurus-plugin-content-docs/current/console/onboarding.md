---
title: Onboarding
description: "Erstellen Sie Ihre Organisation, öffnen Sie Ihre Umgebungen und aktivieren Sie Ihre Produkte. Die Einrichtung auf der Cloud Temple-Plattform, von der Registrierung bis zur ersten Bereitstellung."
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

Sie erstellen Ihre Organisation über ein Online-Formular in wenigen Minuten. Ihre Umgebungen werden anschließend mit einem Klick aus der Konsole erstellt. Sie können Produkte vollständig autonom aktivieren und deaktivieren, abgerechnet nach Nutzung. Das alles auf einer souveränen Infrastruktur, betrieben in Frankreich. Die Konsole zeigt Tenant für Tenant und Produkt für Produkt an, was unter die Qualifikation **SecNumCloud** fällt.

<div class="cert-row cert-row--doc">
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">SecNumCloud 3.2</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISO 27001</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">HDS</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISAE 3402</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">C5</a>
</div>

## Was Sie bei der Registrierung erhalten

- **Ohne Wartezeit** : Ein Formular genügt. Ihre Organisation wird automatisch in wenigen Minuten erstellt, ohne Eingriff unserer Teams.
- **Ohne Mengenverpflichtung** : Self-Service-Produkte werden nach Nutzung abgerechnet.
- **Ohne Nachtrag** : Eröffnen Sie neue Umgebungen unter Ihrem bestehenden Vertrag, zu den darin vorgesehenen Bedingungen.
- **Souverän by Design** : In Frankreich betriebene Infrastruktur und ein in der Console identifizierter **SecNumCloud**-Qualifizierungsbereich.

## Die drei Pfade

Diese Seite beschreibt diese Einrichtung von Anfang bis Ende.

<div class="card-grid">
  <div class="card">
    <h3>Ihre Organisation erstellen</h3>
    <p>Das Online-Anmeldeformular und was dahinter abläuft.</p>
    <a href="#parcours-1-créer-votre-organisation" class="card-link">Starten &rarr;</a>
  </div>
  <div class="card">
    <h3>Eine Umgebung hinzufügen</h3>
    <p>Ein neuer Tenant über die Konsole, in wenigen Minuten und eigenständig.</p>
    <a href="#parcours-2-ajouter-un-environnement" class="card-link">So geht's &rarr;</a>
  </div>
  <div class="card">
    <h3>Eine Umgebung weiterentwickeln</h3>
    <p>Ein Produkt aktivieren, einen Zugriff eröffnen, die Verwaltung an Dritte delegieren.</p>
    <a href="#parcours-3-faire-évoluer-un-environnement" class="card-link">Entdecken &rarr;</a>
  </div>
</div>

## Die Vokabeln, in zwei Wörtern

Die gesamte Plattform basiert auf zwei Ebenen.

**Ihre Organisation**, das sind Sie: Ihr Unternehmen. Sie trägt Ihren Vertrag und Ihre Abrechnung.

**Ein Tenant** ist eine Arbeitsumgebung innerhalb Ihrer Organisation. Sie können mehrere haben, die voneinander isoliert sind.

```
Votre organisation
├── Tenant « production »
├── Tenant « recette »
└── Tenant « lab »
```

Konkret: Sie schließen **einen** Vertrag und eröffnen Ihre Umgebungen unter den darin vorgesehenen Bedingungen, ohne Ihre Daten jemals untereinander zu vermischen. Eine Testumgebung abzugrenzen, eine Tochtergesellschaft zu isolieren oder ein Lab einzurichten erfordert keinen Vertragszusatz.

Zwei Rollen erhalten Zugriffe:

- der **Organisationsbesitzer** hat Zugriff auf alles und lädt andere Benutzer ein
- der **Tenant-Besitzer** hat Zugriff auf diese Umgebung

Das kann dieselbe Person sein.

---

## Pfad 1. Erstellen Sie Ihre Organisation

Dies ist Ihr Einstiegspunkt auf der Plattform. Es erfolgt nur einmal und wird online durchgeführt.

### Das Registrierungsformular

Ihre Einrichtung beginnt mit einem **Online-Registrierungsformular**, dessen Zugang Ihnen Ihr Ansprechpartner bei Cloud Temple mitteilt.

Es ist kurz und wird auf einmal ausgefüllt. Es fragt Sie nach vier Dingen.

**Wer Sie sind.** Der Name Ihrer Organisation, ihre Rechtsform, ihr Sitzland und ihre SIREN-Nummer.

**Wer die Plattform steuern wird.** Der Name, der Vorname und die berufliche E-Mail-Adresse der Person, die **Eigentümer der Organisation** sein wird. Diese Person erhält die Zugänge und lädt anschließend ihre Kollegen ein.

**Was Sie darauf ablegen werden.** Ihr Tätigkeitsbereich und die Art der Daten, die Ihr Projekt verarbeitet: Gesundheitsdaten, personenbezogene Daten, Finanzdaten, sensible Daten.

**Von wo Sie sich verbinden werden.** Die öffentlichen IP-Adressen, die zum Zugriff auf Ihre Konsole berechtigt sind.

:::caution[IP-Adressen sind nicht optional]
Nur die von Ihnen deklarierten Adressen können auf die Konsole zugreifen.

Denken Sie daran, **alle** Ihre Standorte und VPN-Ausgänge einzubeziehen. Ein Versehen ist nicht endgültig: Die Liste kann anschließend eigenständig über die Konsole ergänzt werden.
:::

Sie schließen ab, indem Sie bestätigen, dass Sie befugt sind, Ihre Organisation zu verpflichten, und die **[Allgemeinen Geschäftsbedingungen](https://www.cloud-temple.com/contracts)** akzeptieren.

### Was als Nächstes passiert

Alles ist automatisch. Ihre Organisation wird auf Basis der von Ihnen eingegebenen Informationen erstellt, und Ihr Arbeitsbereich wird in den folgenden Minuten aufgebaut: Ihr Identitätsverzeichnis, Ihre erste Umgebung, Ihre Zugänge.

Sie müssen in dieser Zeit keine Maßnahmen ergreifen.

:::tip[Diese erste Umgebung wird leer bereitgestellt]
Die Umgebung, die durch Ihre Registrierung erstellt wird, hat **kein aktiviertes Produkt**: Sie wird von unserem Automatisierungssystem eingerichtet, ohne Formular, daher ohne Auswahlmöglichkeit. Das ist beabsichtigt: Es wird nichts abgerechnet, solange Sie kein Produkt selbst aktiviert haben.

Die vier Self-Service-Produkte sind **verfügbar** in Ihrer Konsole ab dem ersten Öffnen. Verfügbar bedeutet nicht aktiviert: Sie aktivieren sie, wenn Sie es entscheiden, siehe [Les produits](#les-produits).
:::

### Was Sie erhalten

Eine E-Mail zur **Kontoerstellung**, adressiert an den benannten Inhaber. Dort definieren Sie Ihr Passwort und aktivieren Ihren zweiten Authentifizierungsfaktor.

Details: [Die E-Mails, die Sie erhalten](#les-courriels-que-vous-recevez).

### Sie sind angemeldet

Sie gelangen zur Konsole unter der Adresse [shiva.cloud-temple.com](https://shiva.cloud-temple.com). Sie können ab jetzt Ihre Mitarbeiter einladen und ihnen Berechtigungen zuweisen: siehe [Identitäten und Zugriffe](/console/iam).

<img src={shivaLogin} />

<img src={shivaHome} />

:::tip[Und der vertragliche Teil?]
Er blockiert Sie nicht. Die administrativen und Abrechnungsdaten: Rechnungsadresse, Zahlungsart, Bestellreferenz werden parallel mit Ihrem Ansprechpartner bei Cloud Temple ergänzt. Sie warten nicht darauf, dass diese finalisiert sind, um die Plattform in Betrieb zu nehmen.
:::

---

## Pfad 2. Eine Umgebung hinzufügen

Sie haben bereits eine Organisation und möchten eine neue Umgebung, für eine Testumgebung, ein neues Projekt oder eine Tochtergesellschaft.

**Sie erledigen alles über die Konsole, unter den Bedingungen Ihres Vertrags. Kein Kontakt mit uns ist erforderlich.**

### Die Schritte

1. Erstellen Sie über die Konsole einen **neuen Tenant** über den Tab **Tenants**.
2. Vergeben Sie einen aussagekräftigen **Namen**: *production*, *recette*, der Name eines Projekts.
3. Der Ersteller des Tenants wird standardmäßig dessen Eigentümer. Er kann anschließend weitere Verantwortliche über den Tab **Benutzer** hinzufügen, nachdem er sich im Tenant angemeldet hat.
4. Wählen Sie die **Produkte** aus, die darin aktiviert werden sollen.

<img src={tenantNew} />

### Was als Nächstes passiert

Ihre Umgebung wird automatisch in wenigen Minuten aufgebaut. Sie müssen nichts tun.

Falls der Tenant-Besitzer noch kein Konto hat, erhält er seine E-Mail zur Kontonerstellung. Falls er bereits eines hat, erhält er Zugriff auf die neue Umgebung ohne neue Einladung.

:::tip[Nichts wird standardmäßig aktiviert]
Sie wählen die Produkte des Tenants bereits im Erstellungsformular (Schritt 4 oben) aus und können diesen Umfang jederzeit anpassen. Kein Produkt wird geöffnet, ohne dass Sie es ausgewählt haben: Sie zahlen nur, was Sie verbrauchen.
:::

---

## Pfad 3. Eine Umgebung weiterentwickeln

Ihre Anforderungen ändern sich. Hier erfahren Sie, wie Sie eine bestehende Umgebung weiterentwickeln.

### Ein Produkt aktivieren

Wenn das Produkt Teil Ihres Katalogs ist, wird es in der Konsole angezeigt: **aktivieren Sie es vollständig autonom** auf dem betreffenden Tenant. Rechnen Sie mit einigen Minuten, bis es verfügbar ist.

In der Liste Ihrer Tenant öffnet die Aktion **„Produkte bearbeiten"** den Katalog. Aktivieren Sie die Produkte, die Sie öffnen möchten, und deaktivieren Sie die, die Sie stoppen möchten, und klicken Sie dann auf **Speichern**.

Wenn es nicht angezeigt wird, ist es noch nicht in Ihrem Katalog: siehe [Demander un produit supplémentaire](#demander-un-produit-supplémentaire).

<img src={tenantProductsEdit} />

### Ein Produkt stoppen

Sie können ein Produkt deaktivieren, das Sie nicht mehr verwenden, und die Abrechnung wird damit gestoppt.

Vorher wird eine Überprüfung durchgeführt: Wenn noch Ressourcen verbraucht werden, wird die Deaktivierung abgelehnt und die Konsole zeigt an, was blockiert. Löschen Sie diese Ressourcen und wiederholen Sie den Vorgang.

Dies ist ein Schutzmechanismus: Er verhindert, dass ein noch genutzter Service unterbrochen wird und Daten verloren gehen.

### Eine IP-Adresse hinzufügen

Das **Hinzufügen** erfolgt über die Konsole, unter **Administration > Zugriff**. Die Seite listet die autorisierten öffentlichen Adressen auf; der Button **„IP-Adresse hinzufügen"** deklariert eine neue in CIDR-Notation, mit einer Beschreibung.

Sie benötigen das Recht `console_public_access_read`, um die Liste einzusehen, und `console_public_access_write`, um sie zu ergänzen.

Rechnen Sie mit etwa **zehn Minuten**, bis die neue Adresse wirksam ist.

:::caution[Diese Liste gehört zu Ihrer Organisation]
Es gibt nur eine Liste für die gesamte Organisation. Die Seite ist über einen Tenant erreichbar, aber **eine dort hinzugefügte Adresse autorisiert den Zugriff auf die Konsole für die gesamte Organisation**, nicht nur für diesen Tenant.
:::

Die **Löschung** einer Adresse erfolgt über eine **Support-Anfrage** aus der Konsole. Dies ist bewusst so gestaltet: Der Entzug eines Zugriffs ist für diejenigen, die sich dahinter anmelden, eine irreversible Operation.

<img src={orgAccess} />

### Einen Verantwortlichen ändern

Der Eigentümer der Organisation verwaltet die Benutzer und deren Berechtigungen direkt über die Konsole: siehe [Identités et accès](/console/iam).

Er kann seine Berechtigungen auch an einen externen Partner oder einen Cloud-Temple-Projektleiter **delegieren**: nützlich, wenn Sie den Betrieb an einen Dritten auslagern.

---

## Die E-Mails, die Sie erhalten {/* #les-courriels-que-vous-recevez */}

Nur eine E-Mail erfordert eine Aktion von Ihnen.

### Die E-Mail zur Kontenerstellung

| | |
| --- | --- |
| **Absender** | `shiva.support@cloud-temple.com` |
| **Empfänger** | Der Eigentümer der Organisation, dann jeder Tenant-Eigentümer, der noch kein Konto hat |
| **Inhalt** | Ein Link zum Festlegen Ihres Passworts und zur Aktivierung Ihres zweiten Faktors (OTP) |
| **Wann** | Wenige Minuten nach der Erstellung |
| **Gültigkeit** | **96 Stunden** |

:::warning[Link abgelaufen?]
Nach 96 Stunden funktioniert der Link nicht mehr. Dies ist eine Sicherheitsmaßnahme, kein Fehler.

Schreiben Sie an **`shiva.support@cloud-temple.com`**: Wir senden Ihnen einen neuen zu.

Dies ist der einzige verfügbare Kanal zu diesem Zeitpunkt: Ohne Zugriff auf die Konsole können Sie dort noch keine Anfrage stellen.
:::

:::note[Nichts erhalten?]
Prüfen Sie Ihren Spam-Ordner: Die Nachricht wird manchmal gefiltert. Sie wird von **`shiva.support@cloud-temple.com`** gesendet: Erlauben Sie diese Adresse in Ihrem E-Mail-Programm. Falls Sie innerhalb der folgenden Stunde nichts erhalten haben, kontaktieren Sie uns unter derselben Adresse.
:::

---

## Die Produkte {/* #les-produits */}

### Was Sie selbst aktivieren

Kein Produkt wird standardmäßig aktiviert, weder bei der Erstellung Ihrer Organisation noch bei der eines Tenants. Vier Produkte sind hingegen in Ihrer Console bereits ab der Eröffnung **verfügbar**: Sie aktivieren sie selbst auf dem Tenant Ihrer Wahl. Sie werden **nach Nutzung abgerechnet**, ohne Volumenverpflichtung oder zu verhandelnde Stufen: Sie zahlen nur, was Sie verbrauchen.

| Produkt | Wofür es dient | Weitere Informationen |
| --- | --- | --- |
| **VM Instances** | Virtuelle Maschinen auf Abruf | [Documentation](/public_cloud/vm_instances) |
| **VPC** | Ein virtuelles privates Netzwerk | [Documentation](/network/vpc) |
| **LLMaaS** | Souveräne KI-Modelle | [Documentation](/llmaas) |
| **Object Storage** | S3-kompatibler Speicher | [Documentation](/storage/oss) |

### Der restliche Katalog

Diese Produkte werden im Rahmen Ihres Vertrags mit Ihrem Vertriebspartner geöffnet:

- [IaaS VMware](/iaas_vmware) und [IaaS OpenSource](/iaas_opensource)
- [Bare metal](/iaas_bare-metal)
- [PaaS OpenShift](/paas_openshift) und [Kubernetes managé](/managed_kubernetes)
- Verwaltete Datenbanken: [PostgreSQL](/managed_postgresql), [MariaDB](/managed_mariadb)
- [Bastion](/bastion)
- [Housing](/housing)
- [Backbone privé](/network/private_backbone) und [Internet](/network/internet)
- [Marketplace](/marketplace)

Übersicht: [nos produits](/managedproducts_overview).

---

## Ein zusätzliches Produkt anfordern {/* #demander-un-produit-supplémentaire */}

Das Produkt, das Sie wünschen, erscheint nicht in Ihrer Konsole? Es befindet sich noch nicht in Ihrem Katalog.

1. Erstellen Sie aus der Konsole heraus eine **Support-Anfrage**
2. Geben Sie das betreffende **Produkt** und das geplante Volumen an, sofern Sie es kennen
3. Wir melden uns bei Ihnen mit den Bedingungen
4. Sobald es genehmigt wurde, erscheint das Produkt in Ihrer Konsole
5. Sie können es auf einem oder mehreren Tenants aktivieren

<img src={supportSelectProduct} />

### Supportstufe ändern

Es gibt drei Stufen, vorgestellt auf [unserer Website](https://www.cloud-temple.com/produits/niveaux-de-support).

Sie können die Stufe erhöhen oder senken: Stellen Sie die Anfrage über den Support aus der Konsole heraus oder an Ihren zuständigen Vertriebsmitarbeiter.

---

## Häufig gestellte Fragen

**Wie lange dauert die Erstellung einer Umgebung?**
Einige Minuten, in allen drei Fällen. Die Erstellung erfolgt automatisch, sowohl bei Ihrem ersten Zugang als auch bei einer neuen Umgebung.

**Wie viele Tenants kann ich erstellen?**
So viele wie nötig, innerhalb der Bedingungen Ihres Vertrags.

**Mein Projekt enthält Gesundheitsdaten oder sensible Daten. Kann ich mich online registrieren?**
Ja. Geben Sie dies im Formular an: Ihre Organisation wird normal erstellt, und unsere Teams begleiten Sie bei der Aktivierung der betreffenden Dienste.

**Kann ich die Verwaltung an einen Dienstleister delegieren?**
Ja. Der Eigentümer der Organisation kann seine Rechte an einen externen Partner oder an einen Cloud-Temple-Projektleiter delegieren.

**Ich habe eine IP-Adresse vergessen, ich kann mich nicht mehr anmelden.**
Wenn ein Kollege Ihrer Organisation noch Zugriff auf die Konsole hat, fügt er die Adresse über **Administration > Zugriff** hinzu. Wenn niemand mehr darauf zugreifen kann, schreiben Sie an **`shiva.support@cloud-temple.com`**: Das ist der Notkanal, wenn die Konsole nicht erreichbar ist.

**Ich habe gerade ein Produkt aktiviert, ich sehe es noch nicht.**
Bitte warten Sie einige Minuten. Wenn es immer noch nicht erscheint, kontaktieren Sie den Support.

---

## Mehr erfahren

<div class="card-grid">
  <div class="card">
    <h3>Einführung in die Konsole</h3>
    <p>Ein vollständiger Überblick über die Oberfläche: Tenants, Benutzer, Zugriffe, Kosten.</p>
    <a href="./console_quickstart" class="card-link">Quickstart starten &rarr;</a>
  </div>
  <div class="card">
    <h3>Identitäten und Zugriffe</h3>
    <p>Laden Sie Ihre Mitarbeiter ein und weisen Sie ihnen Berechtigungen zu, Tenant für Tenant.</p>
    <a href="./iam" class="card-link">IAM erkunden &rarr;</a>
  </div>
  <div class="card">
    <h3>Ressourcen bestellen</h3>
    <p>Bereitstellen Sie Ihre ersten Ressourcen und verfolgen Sie deren Verfügbarkeit.</p>
    <a href="./orders" class="card-link">Bestellungen ansehen &rarr;</a>
  </div>
  <div class="card">
    <h3>Abrechnung</h3>
    <p>Verfolgen Sie Ihren Verbrauch nach Tenant und Produkt im Laufe des Monats.</p>
    <a href="./billing/concepts" class="card-link">Zum Modul wechseln &rarr;</a>
  </div>
  <div class="card">
    <h3>Geteilte Verantwortung</h3>
    <p>Was Cloud Temple betreibt und was in Ihrer Verantwortung liegt.</p>
    <a href="../shared-responsibility" class="card-link">Modell lesen &rarr;</a>
  </div>
  <div class="card">
    <h3>Verpflichtungen und SLA</h3>
    <p>Service-Level, Verfügbarkeit und vertragliche Bedingungen.</p>
    <a href="https://www.cloud-temple.com/contracts" class="card-link">Verpflichtungen einsehen &rarr;</a>
  </div>
</div>