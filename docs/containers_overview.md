---
title: Vue d'ensemble des offres de conteneurisation
sidebar_position: 10 # Position juste avant IaaS
---

# La conteneurisation, accélérateur de votre transformation numérique

Dans un contexte de transformation numérique accélérée, la capacité à développer, déployer et faire évoluer rapidement les applications est devenue un avantage concurrentiel décisif. La conteneurisation, orchestrée par des plateformes comme Kubernetes et OpenShift, répond à cet enjeu en offrant une agilité, une portabilité et une efficacité opérationnelle inégalées.

Cependant, la complexité inhérente à ces technologies peut représenter un frein. C'est pourquoi Cloud Temple a développé une gamme de solutions managées et "as a Service" qui vous permettent de bénéficier de toute la puissance des conteneurs, tout en vous déchargeant de la complexité de leur gestion. Nos offres sont conçues pour vous permettre de vous concentrer sur votre cœur de métier : l'innovation applicative, sur un socle souverain et de confiance.

## Notre portefeuille de solutions : quelle trajectoire pour votre projet ?

Ce tableau met en évidence les points forts et le positionnement de chaque solution pour une prise de décision rapide.

| Critère                      | PaaS OpenShift                                                                                                                | Managed Kubernetes                                                                                                   |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Positionnement clé**       | **La confiance sans compromis**<br/>_Plateforme "as a Service", la voie la plus rapide pour moderniser sur un socle certifié._ | **La flexibilité open source**<br/>_Un Kubernetes pur, portable et sans surcouche sur une infrastructure souveraine._ |
| **Niveau de service**        | as a Service                                                                                                                  | Managé                                                                                                               |
| **Conformité & sécurité**    | **100% SecNumCloud**                                                                                                          | Hébergé sur infrastructure SNC                                                                                       |
| **Public cible idéal**       | Équipes de développement, DevOps                                                                                              | Équipes DevOps, Experts Kubernetes                                                                                   |
| **Point de différenciation** | Simplicité et rapidité de déploiement                                                                                         | Open-source, portable et sans surcouche                                                                              |

### Comparaison des composants techniques

Au-delà du positionnement, chaque offre s'appuie sur des choix technologiques distincts qui répondent à des besoins spécifiques. Le tableau suivant détaille les briques logicielles fondamentales qui composent chaque solution.

| Brique Technique             | PaaS OpenShift                     | Managed Kubernetes          |
| :--------------------------- | :--------------------------------- | :-------------------------- |
| **Socle OS**                 | Red Hat CoreOS (RHCOS)             | Talos OS (immuable)         |
| **Orchestrateur**            | Red Hat OpenShift                  | Kubernetes (CNCF)           |
| **Stockage persistant**      | OpenShift Data Foundation          | Rook-Ceph                   |
| **Réseau (CNI)**             | OVN-Kubernetes                     | Cilium                      |
| **Ingress / Load Balancing** | HAProxy / MetalLB                  | NGINX Ingress / MetalLB     |
| **Sécurité (Policy Engine)** | Security Context Constraints (SCC) | PSA + Kyverno + Capsule     |
| **Sauvegarde**               | Veeam Kasten K10 (option)          | Veeam Kasten K10 (inclus)   |
| **Automatisation (GitOps)**  | OpenShift Pipelines                | ArgoCD                      |
| **Observabilité**            | Prometheus / Grafana               | Prometheus / Grafana / Loki |

---

## Quelle solution pour votre projet ?

Le choix de la plateforme de conteneurisation est une décision structurante. Voici quelques clés pour vous orienter vers l'offre la plus pertinente pour votre contexte.

*   **Si la conformité réglementaire est votre priorité absolue...**
    ...et que vous devez opérer dans un secteur hautement régulé (public, santé, OIV) ou qualifier votre propre solution, l'**Offre PaaS OpenShift** est la solution de référence qui vous apporte le plus haut niveau de garantie du marché.

*   **Si vous privilégiez l'open source, la modernité et la sécurité "zero-trust"...**
    et que votre culture d'entreprise est fortement orientée vers l'open source, l'absence de dépendance éditeur et les approches de sécurité de nouvelle génération (systèmes immuables, gestion par API), l'**Offre Managed Kubernetes** est la plus alignée avec votre vision.

Notre rôle de conseil est de vous accompagner dans cette décision. Nos architectes sont à votre disposition pour analyser votre contexte et définir avec vous la meilleure trajectoire.

---

## Explorer nos solutions

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>PaaS OpenShift</h3>
      </div>
      <div className="card__body">
        <p>
          Découvrez notre plateforme "as a Service" pour moderniser vos applications sur un socle certifié SecNumCloud.
        </p>
      </div>
      <div className="card__footer">
        <a href="./paas_openshift" className="button button--primary button--block">En savoir plus</a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>Managed Kubernetes</h3>
      </div>
      <div className="card__body">
        <p>
          Explorez notre offre Kubernetes pure, portable et sans surcouche, hébergée sur une infrastructure souveraine.
        </p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">En savoir plus</a>
      </div>
    </div>
  </div>
</div>
