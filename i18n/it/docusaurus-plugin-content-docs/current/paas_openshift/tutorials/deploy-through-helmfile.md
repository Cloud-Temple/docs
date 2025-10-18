---
title: Distribuire tramite HelmFile
---

# Distribuire tramite Helmfile

---

## Obiettivi

L’obiettivo principale di questo tutorial è mostrare come distribuire applicazioni sul nostro PaaS OpenShift utilizzando **Helmfile** orchestrando più chart Helm insieme.

Esporre il servizio front-end via HTTP/HTTPS.

## Limitazioni conosciute

Il contesto di questa dimostrazione è il seguente:

- Rispetta i vincoli OpenShift **(SCC restricted-V2)**.
- Distribuzione solo di **contenitori senza privilegi** (UID > 30000).
- Nessun ricorso ai **CRD personalizzati**.
- Nessun accesso al ruolo della piattaforma come **cluster-admin**.
- Nessuna distribuzione a livello del cluster (**installazione cluster-wide**).
- Nessuna **creazione di namespace** tramite Helmfile (per evitare conflitti di permessi).

## Punti di forza

- Dimostrazione della distribuzione di un front-end (Nginx) e di un back-end (PostgreSQL) utilizzando Helmfile.

## Versioni dei software

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

3. **Accesso e permessi**  
   - Ruolo client admin per creare progetti e distribuire risorse.
  
---

## Piano della dimostrazione

### Panoramica dei passaggi

1. Preparare l'ambiente e gli strumenti.  
2. Distribuire applicazioni utilizzando Helmfile:  
   - **nginx** : Un semplice server web.  
   - **PostgreSQL** : Un server di database.  
3. Verificare la distribuzione:  
   - Confermare che le configurazioni rootless siano applicate.  
   - Testare la funzionalità delle applicazioni.  
4. Esplorare casi d'uso avanzati ed estensioni.  

---

## File necessari

Per iniziare, avrai bisogno del nostro **Repository di dimostrazione**

- Recuperalo [qui](https://github.com/Cloud-Temple/product-openshift-how-to/tree/main) nella directory `/examples/deploy-through-helmfile/`.

Troverai tre file:

- `Helmfile.yaml` : Manifesto di distribuzione che consente a Helmfile di definire e orchestrare la distribuzione dei chart Helm.  
- `nginx-values.yaml` : Specifica la configurazione e il comportamento di Nginx.  
- `postgres-values.yaml` : Specifica la configurazione e il comportamento di PostgreSQL.  

---

### `Helmfile.yaml`

Il file principale di configurazione Helmfile.  
Definisce i repository, i chart Helm e i valori personalizzati per ciascuna applicazione.

#### Analisi linea per linea

---

#### `helmDefaults`

```yaml
helmDefaults:
  createNamespace: false
```

- **Descrizione** : Definisce il comportamento predefinito dei comandi Helm eseguiti tramite Helmfile.
- **Dettaglio**:
  - `createNamespace: false` : Evita che Helm tenti di creare namespace durante la distribuzione.  
- **Impatto**:
  - Assicura che il namespace debba esistere prima di avviare la distribuzione dei chart.  
  - Riduce gli errori in ambienti con permessi limitati.  

---

#### `repositories`

```yaml
repositories:
  - name: bitnami
    url: https://charts.bitnami.com/bitnami
```

- **Descrizione** : Definisce i repository Helm contenenti i chart necessari.  
- **Dettaglio**:  
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

- **Descrizione** : Definisce un'applicazione Helm chiamata **nginx**.  
- **Dettaglio**:  
  - `name` : Nome della release Helm.  
  - `namespace` : Namespace Kubernetes in cui questa applicazione sarà distribuita.  
  - `chart` : Chart Helm utilizzato, qui `bitnami/nginx`, recuperato dal repository Bitnami.  
  - `values` : File YAML contenente configurazioni specifiche per la distribuzione, qui `nginx-values.yaml`.  

---

### `nginx-values.yaml`

File di configurazione per la distribuzione di **Nginx**.  

---

### `postgres-values.yaml`

Fornisce la configurazione per la distribuzione di **PostgreSQL**.

---

## Svolgimento della distribuzione

### 1. Installare i prerequisiti

Assicurati che tutti gli strumenti menzionati nella sezione sui software siano installati.  
Segui le guide seguenti se necessario:  

- [OCP CLI Guide](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
- [Helmfile Guide](https://helmfile.readthedocs.io/en/latest/)

---

### 2. Connessione al cluster OpenShift

Autenticati al tuo cluster OpenShift con il comando seguente:

```bash
oc login --server=https://api.openshift.example.com:6443 --web
```

> **Attenzione** :  
> Modifica `--server=url` con l'url della tua istanza Cloud Temple PaaS.

---

### 3. Creare un namespace dedicato

Questo namespace isolerà le risorse di dimostrazione:

```bash
oc new-project poc-helmfile
```

---

### 4. Distribuire le applicazioni con Helmfile

Utilizza il comando seguente:

```bash
helmfile sync
```

---

### 5. Verifica della distribuzione

- **Verifica i pod** :  

```bash
oc get pods -n poc-helmfile
```

---

### 6. Testare i servizi

Esporre i servizi distribuiti per testare la loro accessibilità e il loro corretto funzionamento.

#### 1. Creazione di rotte

Esporre il servizio Nginx configurando rotte HTTP o HTTPS:

- **Per HTTPS**:

```bash
oc create route edge nginx-tls --service=nginx -n poc-helmfile --port=8080
```

- **Per HTTP**:

```bash
oc create route edge nginx --service=nginx -n poc-helmfile --port=8080
```

#### 2. Aggiungere un'etichetta per un'esposizione pubblica

Aggiungi un'etichetta specifica al router in modo che il tuo servizio sia accessibile pubblicamente:

- Per la rotta HTTPS:

```bash
oc label route nginx-tls ct-router-type=public -n poc-helmfile
```

- Per la rotta HTTP:

```bash
oc label route nginx ct-router-type=public -n poc-helmfile
```

Questi passaggi garantiscono che le tue rotte siano esposte correttamente.

---

### 7. Verificare le rotte e accedere alle applicazioni

#### 1. Elenco delle rotte disponibili

Verifica che le rotte siano state correttamente create:

```bash
oc get routes -n poc-helmfile
```

Esempio di output:

| Nome         | Host/Port                                                                        | Servizio  | Port  | Risoluzione TLS | Etichetta                                  |
|-------------|----------------------------------------------------------------------------------|----------|-------|----------------|-------------------------------------------|
| nginx       | nginx-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com             | nginx    | 8080  | Nessuno        | `ct-router-type=public`                   |
| nginx-tls   | nginx-tls-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com         | nginx    | 8080  | Edge (TLS)     | `ct-router-type=public`                   |

#### 2. Accedere alle applicazioni

Utilizza le URL elencate nella colonna «Host/Port» per accedere alle applicazioni. Ecco un esempio:

- Per HTTP : `http://nginx-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`
- Per HTTPS : `https://nginx-tls-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`

> Dovresti vedere una risposta di tipo server web a partire dal **front-end Nginx** distribuito.

---

## Criteri di validazione

Per garantire il successo di questa dimostrazione, verifica i seguenti elementi:

1. **Le due applicazioni sono in esecuzione senza errori**.  
2. I pod utilizzano UID > 30000, conformemente ai vincoli dei contenitori rootless.  
3. Nessun CRD personalizzato è stato distribuito.  
4. I servizi distribuiti sono accessibili tramite le loro rotte definite (verifica Nginx su HTTP e HTTPS).  

---

## Conclusione

Ora hai un esempio completo di distribuzione di applicazioni front-end e back-end su OpenShift con Helmfile. Questo metodo offre una gestione modulare e robusta degli ambienti complessi.

Ora padroneggi il processo di distribuzione tramite **Helmfile** su OpenShift in un ambiente gestito da Cloud Temple. 🚀
