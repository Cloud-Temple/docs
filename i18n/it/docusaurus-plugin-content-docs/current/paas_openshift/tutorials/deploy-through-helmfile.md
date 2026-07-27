---
title : Distribuire tramite HelmFile
---

# Distribuire con Helmfile

---

## Obiettivi

L'obiettivo principale di questo tutorial è mostrare come distribuire applicazioni sulla nostra PaaS OpenShift utilizzando **Helmfile** orchestrando più Helm charts insieme.

Esporre il servizio front-end tramite HTTP/HTTPS.

## Limitazioni note

Il contesto di questa dimostrazione è il seguente:

- Rispetta i vincoli OpenShift **(SCC restricted-V2)**.
- Distribuzione esclusivamente di **contenitori non privilegiati** (UID > 30000).
- Nessun utilizzo di **CRD personalizzati**.
- Nessun accesso al ruolo della piattaforma come **cluster-admin**.
- Nessun deployment a livello di cluster (**installazione cluster-wide**).
- Nessuna **creazione di namespace** tramite Helmfile (per evitare conflitti di permessi).

## Punti di forza

- Dimostrazione del deployment di un front-end (Nginx) e di un back-end (PostgreSQL) utilizzando Helmfile.

## Versioni del software

- OpenShift CLI : 4.17.6  
- Helm : v3.16.3  
- Helmfile : v0.169.2  
- OpenShift : v4.15  
- PostgreSQL : v17.2.0-debian-12-r5  
- Nginx : v1.27.3  

---

## Prerequisiti

Prima di iniziare questa dimostrazione, assicurati di avere i seguenti strumenti e risorse:

1. **Strumenti CLI**  
   - **OpenShift CLI (`oc`)** : [Documentazione](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
   - **Helm** : [Documentazione](https://helm.sh/docs/)  
   - **Helmfile** : [Documentazione](https://helmfile.readthedocs.io/en/latest/)

2. **Ambiente OpenShift**

   - Un cluster OpenShift funzionante gestito da Cloud Temple.  

3. **Accesso e autorizzazioni**  
   - Ruolo di amministratore client per creare progetti e distribuire risorse.
  
---

## Piano di dimostrazione

### Panoramica delle fasi

1. Preparare l'ambiente e gli strumenti.  
2. Distribuire applicazioni utilizzando Helmfile:  
   - **nginx**: un semplice server web.  
   - **PostgreSQL**: un server di database.  
3. Verificare il deployment:  
   - Confermare che le configurazioni rootless siano applicate.  
   - Testare la funzionalità delle applicazioni.  
4. Esplorare casi d'uso avanzati ed estensioni.  

---

## File necessari

Per iniziare, avrete bisogno del nostro **Repository dimostrativo**

- Scaricatelo [qui](https://github.com/Cloud-Temple/product-openshift-how-to/tree/main) nella directory `/examples/deploy-through-helmfile/`.

Troverete tre file:

- `Helmfile.yaml` : Manifesto di deployment che consente a Helmfile di definire e orchestrare il deployment dei chart Helm.  
- `nginx-values.yaml` : Specifica la configurazione e il comportamento di Nginx.  
- `postgres-values.yaml` : Specifica la configurazione e il comportamento di PostgreSQL.  

---

### `Helmfile.yaml`

Il file di configurazione principale di Helmfile.  
Definisce i repository, i chart Helm e i valori personalizzati per ciascuna applicazione.

#### Analisi riga per riga

---

#### `helmDefaults`

```yaml
helmDefaults:
  createNamespace: false
```

- **Description** : Definisce il comportamento predefinito dei comandi Helm eseguiti tramite Helmfile.
- **Dettaglio** :
  - `createNamespace: false` : Evita che Helm tenti di creare namespace durante il deployment.  
- **Impatto** :
  - Garantisce che il namespace esista prima di avviare il deployment dei chart.  
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

- **Description** : Definisce un'applicazione Helm denominata **nginx**.  
- **Dettagli** :  
  - `name` : Nome della release Helm.  
  - `namespace` : Namespace Kubernetes in cui verrà distribuita questa applicazione.  
  - `chart` : Chart Helm utilizzato, in questo caso `bitnami/nginx`, recuperato dal repository Bitnami.  
  - `values` : File YAML contenente configurazioni specifiche per il deployment, in questo caso `nginx-values.yaml`.  

---

### `nginx-values.yaml`

File di configurazione per il deployment di **Nginx**.  

---

### `postgres-values.yaml`

Fornisce la configurazione per il deployment di **PostgreSQL**.

---

## Processo di deployment

### 1. Installare i prerequisiti

Assicurarsi che tutti gli strumenti menzionati nella sezione sui software siano installati.  
Seguire le seguenti guide se necessario:  

- [OCP CLI Guide](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
- [Helmfile Guide](https://helmfile.readthedocs.io/en/latest/)

---

### 2. Connessione al cluster OpenShift

Autenticati sul tuo cluster OpenShift con il seguente comando :

```bash
oc login --server=https://api.openshift.example.com:6443 --web
```

> **Attenzione** :  
> Modifica `--server=url` con l'URL della tua istanza Cloud Temple PaaS.

---

### 3. Creare un namespace dedicato

Questo namespace isolerà le risorse di dimostrazione :

```bash
oc new-project poc-helmfile
```

---

### 4. Distribuire le applicazioni con Helmfile

Utilizzare il comando seguente :

```bash
helmfile sync
```

---

### 5. Verifica del deployment

- **Verificare i pod** :  

```bash
oc get pods -n poc-helmfile
```

---

### 6. Testare i servizi

Esporre i servizi distribuiti per verificarne l'accessibilità e il corretto funzionamento.

#### 1. Creazione di route

Espone il servizio Nginx configurando route HTTP o HTTPS:

- **Per HTTPS** :

```bash
oc create route edge nginx-tls --service=nginx -n poc-helmfile --port=8080
```

- **Per HTTP** :

```bash
oc create route edge nginx --service=nginx -n poc-helmfile --port=8080
```

#### 2. Aggiungere un'etichetta per l'esposizione pubblica

Aggiungi un'etichetta specifica al router affinché il servizio sia accessibile pubblicamente:

- Per la route HTTPS:

```bash
oc label route nginx-tls ct-router-type=public -n poc-helmfile
```

- Per la route HTTP:

```bash
oc label route nginx ct-router-type=public -n poc-helmfile
```

Questi passaggi garantiscono che le route siano esposte correttamente.

---

### 7. Verificare le route e accedere alle applicazioni

#### 1. Elenco delle route disponibili

Verificare che le route siano state create correttamente:

```bash
oc get routes -n poc-helmfile
```

Esempio di output:

| Nome         | Host/Porta                                                                        | Servizio  | Porta  | Risoluzione TLS | Etichetta                                  |
|-------------|----------------------------------------------------------------------------------|----------|-------|----------------|-------------------------------------------|
| nginx       | nginx-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com             | nginx    | 8080  | Nessuno          | `ct-router-type=public`                   |
| nginx-tls   | nginx-tls-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com         | nginx    | 8080  | Edge (TLS)     | `ct-router-type=public`                   |

#### 2. Accedi alle applicazioni

Utilizza gli URL elencati nella colonna « Host/Porta » per accedere alle applicazioni. Ecco un esempio :

- Per HTTP : `http://nginx-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`
- Per HTTPS : `https://nginx-tls-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`

> Dovresti visualizzare una risposta di tipo server web dal **front-end Nginx** distribuito.

---

## Criteri di validazione

Per garantire il successo di questa dimostrazione, verificare i seguenti elementi :

1. **Le due applicazioni si eseguono senza errori**.  
2. I pod utilizzano UID > 30000, in conformità con i vincoli dei container rootless.  
3. Nessun CRD personalizzato è stato distribuito.  
4. I servizi distribuiti sono accessibili tramite le loro route definite (vérifiez Nginx sur HTTP et HTTPS).  

---

## Conclusione

Avete ora un esempio completo di deployment di applicazioni front-end e back-end su OpenShift con Helmfile. Questo metodo offre una gestione modulare e robusta di ambienti complessi.

Ora padroneggiate il deployment tramite **Helmfile** su OpenShift in un ambiente gestito da Cloud Temple. 🚀