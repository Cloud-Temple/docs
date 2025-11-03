---
title: Suivre les coûts avec Kubecost
---
import kubecostsallocations from './images/kubecostsallocations.png'

## Objectifs

Ce tutoriel vous présente **Kubecost**, l'outil de monitoring et d'optimisation des coûts intégré à votre cluster **Managed Kubernetes**. À la fin de ce guide, vous serez capable de :

- **Accéder** à l'interface de Kubecost.
- **Analyser** la répartition des coûts de vos applications.
- **Identifier** les pistes d'optimisation pour réduire votre facturation.

## Qu'est-ce que Kubecost ?

Kubecost est une solution open-source qui fournit une visibilité en temps réel sur les coûts de vos environnements Kubernetes. Il vous aide à comprendre précisément ce qui consomme des ressources dans votre cluster et comment cela se traduit en termes de coûts.

Dans l'offre Managed Kubernetes, Kubecost est pré-installé et configuré pour vous donner une vision claire de vos dépenses. Il est directement paramétré avec les coûts réels de l'infrastructure Cloud Temple, ce qui signifie que les estimations affichées sont fidèles à votre facturation.

## Accéder à l'interface Kubecost

L'interface de Kubecost est exposée sur une URL sécurisée, propre à votre cluster. Pour y accéder, utilisez l'URL suivante en remplaçant `identifiant` par celui de votre cluster (par exemple, `ctodev`) :

`https://kubecost.external-secured.identifiant.mk.ms-cloud-temple.com`

:::info
L'accès à cette URL est restreint aux adresses IP que vous avez déclarées au support Cloud Temple. Si vous ne parvenez pas à y accéder, veuillez contacter le support pour vérifier les règles de firewall.
:::

## Explorer la répartition des coûts (Allocations)

La page principale de Kubecost est le tableau de bord **Allocations**. C'est ici que vous pouvez visualiser la consommation de vos ressources.

Par défaut, les coûts sont agrégés par **Namespace**. Vous pouvez utiliser le menu déroulant "Aggregate by" pour changer la vue et analyser les coûts par :
- `Deployment`, `StatefulSet`, etc.
- `Controller`
- `Label` (très utile si vous utilisez des labels pour identifier vos équipes ou projets. Vous pouvez par exemple utiliser le label du tenant capsule.)

Vous pouvez également ajuster la période d'analyse (par défaut, "Last 7 days") pour visualiser les coûts sur une autre période.

<img src={kubecostsallocations} />

## Analyser le coût des infrastructures (Assets)

La section **Assets** vous donne une vue détaillée des coûts liés à l'infrastructure sous-jacente de votre cluster :
- Les nœuds (VMs)
- Les disques persistants
- Les coûts réseau

Cela vous permet de comprendre la répartition des coûts entre les ressources de calcul, de stockage et de réseau.

## Identifier les pistes d'optimisation (Savings)

Kubecost ne se contente pas de montrer les coûts, il vous aide aussi à les réduire. La section **Savings** analyse en continu votre cluster et vous fournit des recommandations concrètes pour optimiser vos dépenses.

Les recommandations courantes incluent :
- **Right-sizing container requests :** Ajuster les requêtes de CPU et de mémoire de vos conteneurs pour qu'elles correspondent à leur consommation réelle.
- **Manage abandoned workloads :** Identifier les déploiements qui ne sont plus utilisés mais qui consomment toujours des ressources.
- **Manage unclaimed volumes :** Trouver les disques persistants qui ne sont plus attachés à aucun pod.

Chaque recommandation est accompagnée d'une estimation des économies mensuelles que vous pourriez réaliser.

## Conclusion

Kubecost est un outil puissant pour maîtriser les coûts de votre cluster Kubernetes. En explorant régulièrement les tableaux de bord "Allocations", "Assets" et "Savings", vous pouvez non seulement comprendre où va votre argent, mais aussi prendre des mesures éclairées pour optimiser l'efficacité de vos applications et réduire votre facture.
