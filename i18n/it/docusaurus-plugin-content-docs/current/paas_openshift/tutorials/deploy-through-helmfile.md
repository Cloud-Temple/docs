---
title : Deployare tramite HelmFile
---

# Deployare utilizzando Helmfile

---

## Obiettivi

L'obiettivo principale di questo tutorial è mostrare come deployare applicazioni sulla nostra PaaS OpenShift utilizzando **Helmfile** orchestrando più chart Helm insieme.

Esporre il servizio front-end tramite HTTP/HTTPS.

## Limitazioni note

Il contesto di questa dimostrazione è il seguente:

- Rispetta i vincoli OpenShift **(SCC restricted-V2)**.
- Deploy esclusivamente di **contenitori non privilegiati** (UID > 30000).
- Nessun ricorso a **CRD personalizzati**.
- Nessun accesso al ruolo di piattaforma in quanto **cluster-admin**.
- Nessun deploy a livello di cluster (**installazione cluster-wide**).
- Nessuna **creazione di namespace** tramite Helmfile (per evitare conflitti di permessi).

## Punti di forza

- Dimostrazione del deploy di un front-end (Nginx) e di un back-end (PostgreSQL) utilizzando Helmfile.

## Versioni dei software

- OpenShift CLI : 4.17.6
- Helm : v3.16.3
- Helmfile : v0.169.2
- OpenShift : v4.15
- PostgreSQL : v17.2.0-debian-12-r5
- Nginx : v1.27.3

---

## Prerequisiti

Prima di iniziare questa dimostrazione, assicuratevi di avere i seguenti strumenti e risorse:

1. **Strumenti CLI**
   - **OpenShift CLI (`oc`)** : [Documentazione](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)
   - **Helm** : [Documentazione](https://helm.sh/docs/)
   - **Helmfile** : [Documentazione](https://helmfile.readthedocs.io/en/latest/)

2. **Ambiente OpenShift**

   - Un cluster OpenShift funzionante gestito da Cloud Temple.

3. **Accessi e permessi**
   - Ruolo di client admin per creare progetti e deployare risorse.

---

## Piano di dimostrazione

### Panoramica delle fasi

1. Preparare l'ambiente e gli strumenti.
2. Deployare applicazioni utilizzando Helmfile:
   - **nginx** : Un semplice server web.
   - **PostgreSQL** : Un server di database.
3. Verificare il deploy:
   - Confermare che le configurazioni rootless siano applicate.
   - Testare la funzionalità delle applicazioni.
4. Esplorare i casi d'uso avanzati e le estensioni.

---

## File necessari

Per iniziare, avrete bisogno del nostro **Repository di dimostrazione**

- Recuperatelo [qui](https://github.com/Cloud-Temple/product-openshift-how-to/tree/main) nella directory `/examples/deploy-through-helmfile/`.

Trovarete tre file:

- `Helmfile.yaml` : Manifesto di deploy che consente a Helmfile di definire e orchestrare il deploy dei chart Helm.
- `nginx-values.yaml` : Specifica la configurazione e il comportamento di Nginx.
- `postgres-values.yaml` : Specifica la configurazione e il comportamento di PostgreSQL.

---

### `Helmfile.yaml`

Il file principale di configurazione Helmfile.
Definisce i repository, i chart Helm e i valori personalizzati per ogni applicazione.

#### Analisi riga per riga

---

#### `helmDefaults`

```yaml
helmDefaults:
  createNamespace: false
```

- **Descrizione** : Definisce il comportamento predefinito dei comandi Helm eseguiti tramite Helmfile.
- **Dettaglio** :
  - `createNamespace: false` : Evita che Helm tenti di creare namespace durante il deploy.
- **Impatto** :
  - Garantisce che il namespace debba esistere prima di avviare il deploy dei chart.
  - Riduce gli errori negli ambienti con permessi limitati.

---

#### `repositories`

```yaml
repositories:
  - name: bitnami
    url: https://charts.bitnami.com/bitnami
```

- **Descrizione** : Definisce i repository Helm contenenti i chart necessari.
- **Dettaglio** :
  - `name` : Alias del repository Helm.
  - `url` : URL del repository Bitnami, che contiene chart comunemente utilizzati, compatibili con OpenShift.

---

#### `releases`

```yaml
  - name: nginx
    namespace: poc-helmfile
    chart: bitnami/nginx
    values:
      - nginx-values.yaml
```

- **Descrizione** : Definisce un'applicazione Helm denominata **nginx**.
- **Dettaglio** :
  - `name` : Nome della release Helm.
  - `namespace` : Namespace Kubernetes in cui questa applicazione verrà deployata.
  - `chart` : Chart Helm utilizzato, in questo caso `bitnami/nginx`, recuperato dal repository Bitnami.
  - `values` : File YAML contenente configurazioni specifiche per il deploy, in questo caso `nginx-values.yaml`.

---

### `nginx-values.yaml`

File di configurazione per il deploy di **Nginx**.

---

### `postgres-values.yaml`

Fornisce la configurazione per il deploy di **PostgreSQL**.

---

## Svolgimento del deploy

### 1. Installare i prerequisiti

Assicuratevi che tutti gli strumenti menzionati nella sezione sui software siano installati.
Seguite le seguenti guide se necessario:

- [Guida OCP CLI](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)
- [Guida Helmfile](https://helmfile.readthedocs.io/en/latest/)

---

### 2. Connessione al cluster OpenShift

Autenticatevi al vostro cluster OpenShift con il seguente comando:

```bash
oc login --server=https://api.openshift.example.com:6443 --web
```

> **Attenzione** :
> Modificate `--server=url` con l'URL della vostra istanza Cloud Temple PaaS.

---

### 3. Creare un namespace dedicato

Questo namespace isolerà le risorse di dimostrazione:

```bash
oc new-project poc-helmfile
```

---

### 4. Deployare le applicazioni con Helmfile

Utilizzate il seguente comando:

```bash
helmfile sync
```

---

### 5. Verifica del deploy

- **Verificate i pod** :

```bash
oc get pods -n poc-helmfile
```

---

### 6. Testare i servizi

Esporre i servizi deployati per testarne l'accessibilità e il corretto funzionamento.

#### 1. Creazione di route

Esporre il servizio Nginx configurando route HTTP o HTTPS:

- **Per HTTPS** :

```bash
oc create route edge nginx-tls --service=nginx -n poc-helmfile --port=8080
```

- **Per HTTP** :

```bash
oc create route edge nginx --service=nginx -n poc-helmfile --port=8080
```

#### 2. Aggiungere un'etichetta per un'esposizione pubblica

Aggiungete un label specifico al router affinché il vostro servizio sia accessibile pubblicamente:

- Per la route HTTPS:

```bash
oc label route nginx-tls ct-router-type=public -n poc-helmfile
```

- Per la route HTTP:

```bash
oc label route nginx ct-router-type=public -n poc-helmfile
```

Queste fasi garantiscono che le vostre route siano esposte correttamente.

---

### 7. Verificare le route e accedere alle applicazioni

#### 1. Elenco delle route disponibili

Verificate che le route siano state create correttamente:

```bash
oc get routes -n poc-helmfile
```

Esempio di output:

| Nome         | Host/Porta                                                                        | Servizio  | Porta  | Risoluzione TLS | Etichetta                                  |
|-------------|----------------------------------------------------------------------------------|----------|-------|----------------|-------------------------------------------|
| nginx       | nginx-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com             | nginx    | 8080  | Nessuna        | `ct-router-type=public`                   |
| nginx-tls   | nginx-tls-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com         | nginx    | 8080  | Edge (TLS)     | `ct-router-type=public`                   |

#### 2. Accedere alle applicazioni

Utilizzate gli URL elencati nella colonna « Host/Porta » per accedere alle applicazioni. Ecco un esempio:

- Per HTTP: `http://nginx-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`
- Per HTTPS: `https://nginx-tls-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`

> Dovreste vedere una risposta di tipo server web dal **front-end Nginx** deployato.

---

## Criteri di validazione

Per garantire il successo di questa dimostrazione, verificate i seguenti elementi:

1. **Entrambe le applicazioni si eseguono senza errori**.
2. I pod utilizzano UID > 30000, in conformità con i vincoli dei contenitori rootless.
3. Nessun CRD personalizzato è stato deployato.
4. I servizi deployati sono accessibili tramite le loro route definite (verificate Nginx su HTTP e HTTPS).

---

## Conclusione

Avete ora un esempio completo di deploy di applicazioni front-end e back-end su OpenShift con Helmfile. Questo metodo offre una gestione modulare e robusta di ambienti complessi.

Padroneggiate ora il deploy tramite **Helmfile** su OpenShift in un ambiente gestito da Cloud Temple. 🚀
