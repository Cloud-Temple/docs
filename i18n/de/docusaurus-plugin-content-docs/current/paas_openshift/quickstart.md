---
Leitfaden zum Einstieg
---
Importieren von `oshiftRights` aus `'./images/oshift_rights.png'`
Importieren von `oshiftMenu_001` aus `'./images/oshift_menu_001.png'`
Importieren von `oshiftMenu_002` aus `'./images/oshift_menu_002.png'`
Importieren von `oshiftMenu_003` aus `'./images/oshift_menu_003.png'`

## Deployment of a Red Hat OpenShift Environment within Your Tenant

---

### Schritt 1: Préparation du Conteneur OpenShift

1. **Création d'un Conteneur OpenShift** :
   - Utilisez l'interface de ligne de commande (CLI) `oc` pour créer un nouveau conteneur OpenShift.
   ```bash
   oc create -f <your-openshift-config-file>.yaml
   ```

2. **Configuration des Ressources** :
   - Définissez les ressources nécessaires telles que le CPU, la mémoire, etc., dans le fichier de configuration YAML.
   ```yaml
   resources:
     requests:
       memory: "512Mi"
       cpu: "500m"
     limits:
       memory: "1Gi"
       cpu: "1"
   ```

### Schritt 2: Déploiement des Applications

1. **Création d'un Image Docker** :
   - Construisez un image Docker pour votre application en utilisant un fichier Dockerfile.
   ```Dockerfile
   FROM node:14
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   EXPOSE 8080
   CMD ["npm", "start"]
   ```

2. **Déploiement de l'Image** :
   - Utilisez `oc` pour déployer votre image sur le conteneur OpenShift.
   ```bash
   oc new-app <your-docker-image> --name=<your-application-name>
   ```

### Schritt 3: Configuration des Services et Routes

1. **Services** :
   - Créez un service pour exposer votre application à l'extérieur du conteneur OpenShift.
   ```yaml
   services:
     - name: <your-service-name>
       port: 8080
       targetPort: 8080
   ```

2. **Routes** :
   - Configurez les routes pour accéder à votre application via le service.
   ```yaml
   routes:
     - host: your-domain.com
       route: <your-route-name>
   ```

### Schritt 4: Sauvegarde et Récupération

1. **Sauvegardes** :
   - Utilisez les outils de sauvegarde fournis par OpenShift pour protéger vos données.
   ```bash
   oc adm backup create <backup-name> --namespace=<your-namespace>
   ```

2. **Récupération** :
   - Récupérez des instances ou des applications en utilisant les commandes de récupération fournies par OpenShift.
   ```bash
   oc restore <backup-name> --namespace=<your-namespace>
   ```

### Schritt 5: Surveillance et Gestion

1. **Surveillance** :
   - Intégrez des outils de surveillance comme Prometheus pour surveiller les performances de votre application.
   ```yaml
   spec:
     serviceMonitor:
       enabled: true
   ```

2. **Gestion** :
   - Utilisez les interfaces de gestion fournies par OpenShift pour gérer vos applications, ressources et configurations.

---

### Zugriffsrechtezuweisung

Es ist unbedingt notwendig, dass der Tenant-Administrator ([Tenant](../console/iam/concepts.md#tenant)) den Zugriff auf die Plattform Openshift für das Administrativen Benutzer Openshift genehmigt, damit dieser diese zugreifen kann:

<img src={oshiftRights} />

### Zugriff auf das Openshift-Umgebung innerhalb eines Tenants

Nach der Zuweisung der Berechtigungen erscheint das Modul `__Openshift__` in der Menüleiste der Cloud Temple Console:

<img src={oshiftMenu_001} />

Sie sehen dann die Openshift-Clusters, die innerhalb Ihres Tenants bereitgestellt wurden.

Klicken Sie auf das Cluster, das Sie verwalten möchten. Dadurch gelangen Sie in die Administrationsumgebung des Clusters:

<img src={oshiftMenu_002} />

Nach der Authentifizierung können Sie Ihr Cluster verwalten:

<img src={oshiftMenu_003} />

### Ressourcen Ihres Umgebungs

Hier sind die Informationen zur Verbindung und Konfiguration Ihrer OpenShift-Umgebung.

#### Anmeldeinformationen

Um auf die verschiedenen OpenShift-Komponenten zuzugreifen, stellen Sie sicher, dass Ihr Mieter in der Weißliste der Konsole (siehe Dokumentation: [Cloud Temple Documentation](https://docs.cloud-temple.com/)) aufgeführt ist.

- __URL des Shiva-Tenants__ :
  [https://__votre-id-mieter__.shiva.cloud-temple.com/](https://**votre-id-mieter**.shiva.cloud-temple.com/)

- __OpenShift UI__ :
  [https://ui-ocp01-__votre-id__.paas.cloud-temple.com/](https://ui-ocp01-**votre-id**.paas.cloud-temple.com/)

- __API externe__ :
  [https://api-ocp01-__votre-id__.paas.cloud-temple.com](https://api-ocp01-**votre-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__ :
  [https://gitops-ocp01-__votre-id__.paas.cloud-temple.com/anwendungen](https://gitops-ocp01-**votre-id**.paas.cloud-temple.com/anwendungen)

#### Verbindung zum Cluster über CLI

Um sich über die Kommandozeile (CLI) anzuschließen, verwenden Sie bitte die folgende Befehlszeile:

```bash
oc login https://api-ocp01-{votre-id}.paas.cloud-temple.com/ --web
```

#### Zugriff auf das Logbuch

Um auf das Logbuch zuzugreifen, melden Sie sich mit den folgenden Befehlen an:

```bash
oc login https://api-ocp01-{Ihre-ID}.paas.cloud-temple.com --web
docker login -u {Ihr-Benutzer} -p $(oc whoami -t) registry-ocp01-{Ihre-ID}.paas.cloud-temple.com
```

Nachdem Sie sich angemeldet haben, testen Sie die Bildung und das Herunterladen einer Docker-Image-Datei:

```bash
docker build -t <Namespace>/temp:latest .
docker tag <Namespace>/temp:latest registry-ocp01-{Ihre-ID}.paas.cloud-temple.com/<Namespace>/temp:latest
docker push registry-ocp01-{Ihre-ID}.paas.cloud-temple.com/<Namespace>/temp:latest
```

#### Konfiguration von Routern und Load Balancer

Die Plattform bietet flexible Optionen für den __Flow Routing__ und den __Load Balancing__:

- Standardmäßig werden privat gelöste Load Balancer für Routen und Ingress verwendet.
- Domains:
  - `*.apps-priv-ocp01-{your_id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{your_id}.paas.cloud-temple.com`

Stellen Sie sicher, dass Ihre Routen oder Ingress so konfiguriert sind, dass sie die entsprechenden Etiketten oder Ingress-Klassen verwenden, um einen korrekten Routing zu gewährleisten.

Beispiel:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### Verbindung IaaS

Die Netzwerkkonfigurationen spielen eine entscheidende Rolle für die Sicherung der Kommunikation mit OpenShift.

- __Verbindungsnetzwerk__ : 100.67.0.0/28
- __VIP des privaten Load Balancer__ : 100.67.0.3

Überprüfen Sie, ob Ihr Firewall eine eigene Schnittstelle hat und den Verkehr zwischen den angegebenen Netzwerken erlaubt.