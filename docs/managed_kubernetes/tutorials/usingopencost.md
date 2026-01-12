---
title: Suivre les coûts avec OpenCost
---
import opencostui from './images/opencost.png'
import opencostmcp from './images/opencostmcp.png'
import opencostmcp2 from './images/opencostmcp2.png'
import opencostmcp3 from './images/opencostmcp3.png'

## Objectifs

Ce tutoriel vous présente **OpenCost**, l'outil de monitoring et d'optimisation des coûts intégré à votre cluster **Managed Kubernetes**. À la fin de ce guide, vous serez capable de :

- **Accéder** à l'interface d'OpenCost.
- **Comprendre** la structure de l'interface et les vues disponibles.
- **Analyser** la répartition des coûts de vos applications et de votre infrastructure.

## Qu'est-ce qu'OpenCost ?

OpenCost est une solution open-source, standard de la CNCF (Cloud Native Computing Foundation), qui fournit une visibilité en temps réel sur les coûts de vos environnements Kubernetes. Il vous aide à comprendre précisément ce qui consomme des ressources dans votre cluster et comment cela se traduit en termes de coûts.

Dans l'offre Managed Kubernetes, OpenCost est pré-installé et configuré pour vous donner une vision claire de vos dépenses. Il est directement paramétré avec les coûts réels de l'infrastructure Cloud Temple.

## Accéder à l'interface OpenCost

L'interface d'OpenCost est exposée sur une URL sécurisée, propre à votre cluster. Pour y accéder, utilisez l'URL suivante en remplaçant `identifiant` par celui de votre cluster (par exemple, `ctodev`) :

`https://opencost.external-secured.identifiant.mk.ms-cloud-temple.com`

:::info
L'accès à cette URL est restreint aux adresses IP que vous avez déclarées au support Cloud Temple. Si vous ne parvenez pas à y accéder, veuillez contacter le support pour vérifier les règles de firewall.
:::

<img src={opencostui} alt="OpenCost UI"/>

## Explorer la répartition des coûts (Allocations)

La vue principale et la plus détaillée d'OpenCost est le tableau de bord **Allocations**. C'est ici que vous pouvez visualiser la consommation de vos ressources en temps réel.

Cette vue vous permet de décomposer les coûts par concepts natifs Kubernetes. Le menu déroulant "Aggregate by" est l'outil principal pour votre analyse, il vous permet de regrouper les coûts par :

- **Namespace** : Pour avoir une vue par environnement ou par équipe.
- **Deployment**, **StatefulSet**, etc. : Pour analyser le coût d'une application spécifique.
- **Controller** : Pour une vue plus technique.

### Agrégation par Labels

Pour une analyse financière encore plus fine, OpenCost peut agréger les coûts en se basant sur les **labels Kubernetes**. Il n'y a pas une option "Label" directe dans le menu, mais OpenCost ingère vos labels et vous permet de créer des agrégations personnalisées. Pour cela, une stratégie de labeling cohérente est essentielle. Par exemple, en utilisant des labels comme `team: backend` ou `product: api-gateway`, vous pourrez analyser les coûts qui correspondent précisément à votre organisation.
Pour ce type d'analyse, vous devez passer par l'intégration IA d'opencost.

## Utilisation Avancée : Intégration avec une IA (Serveur MCP)

Pour les utilisateurs avancés, OpenCost peut être directement interrogé depuis l'assistant conversationnel Cline (ou autre) grâce au système de **MCP (Multi-purpose Co-processor) servers**. Cela vous permet de scripter des requêtes et d'obtenir des données de coût directement dans vos conversations.

### 1. Configuration du MCP OpenCost dans Cline

Pour connecter Cline à votre instance OpenCost, vous devez ajouter la configuration suivante à votre fichier `cline_mcp_settings.json`. Ce fichier se trouve généralement dans le répertoire de configuration de Cline.

Nous conseillons de créer un serveur MCP "opencost-xxxxx" où xxxxx est le nom de votre cluster Kubernetes managé.
L'url du serveur MCP est de type `https://opencost-mcp.external-secured.identifiant.mk.ms-cloud-temple.com`
Par exemple, pour le cluster "bestie" :

```json
{
  "mcpServers": {
    "opencost-bestie": {
      "disabled": false,
      "timeout": 60,
      "type": "streamableHttp",
      "url": "https://opencost-mcp.external-secured.bestie.mk.ms-cloud-temple.com",
      "headers": {
        "Authorization": "Basic <TOKEN>"
      }
    }
  }
}
```

Pour générer la valeur `<TOKEN>` à partir de vos identifiants, utilisez une des commandes suivantes :

**Pour Linux/macOS :**
```bash
echo -n 'finopsadm:VOTRE_MOT_DE_PASSE' | base64
```

**Pour Windows (PowerShell) :**
```powershell
$credentials = [System.Text.Encoding]::UTF8.GetBytes("finopsadm:VOTRE_MOT_DE_PASSE")
[System.Convert]::ToBase64String($credentials)
```

Une fois ce fichier sauvegardé, Cline chargera automatiquement le MCP `opencost-xxxxx` au démarrage.

### 2. Interroger OpenCost avec le MCP

:::tip Prérequis
Pour interagir avec le MCP en langage naturel, l'IA sous-jacente doit avoir accès à des modèles de langage (LLMs), soit localement (LMStudio, etc), soit via une connexion à des services publics comme GPT-5 ou Gemini, soit en utilisant notre offre **[LLM-as-a-Service](/docs/llmaas/llmaas)** souveraine.
:::

Après configuration, vous pouvez utiliser les outils LLM pour effectuer des requetes en langage natuel sur ce serveur MCP.

#### Exemple:

"utilise le MCP "opencost-bestie", et dis moi quelle pourcentage des couts du cluster ne sont pas alloués à des ressources"
Vous obtiendrez ceci:
<img src={opencostmcp} alt="réponse IA opencost"/>

#### Exemple 2:

"utilise le MCP "opencost-bestie",  et liste moi les couts associés aux volumes persistents sur la journée d'hier"

<img src={opencostmcp2} alt="réponse IA opencost 2"/>


#### Exemple 3:

"utilise le MCP opencost-bestie, et dis moi quelle pourcentage des couts du cluster alloués à l'application avec le label "nginx" . (filtre de la forme filter: "label:app:frontend" )"

<img src={opencostmcp3} alt="réponse IA opencost 3"/>


## Conclusion

OpenCost vous fournit des outils puissants pour une analyse fine et en temps réel des coûts de votre cluster Kubernetes. En utilisant principalement la vue **Allocations** et en la combinant avec une bonne stratégie de labeling, vous pouvez obtenir une vision claire de vos dépenses, alignée à la fois sur vos déploiements techniques et votre organisation interne. L'utilisation des LLM et du serveur MCP opencost permet d'aller plus loin dans l'exploitation des données.
