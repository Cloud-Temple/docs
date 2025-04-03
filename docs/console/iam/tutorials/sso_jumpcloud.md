---
title: Exemple de fédération d'identité avec JumpCloud
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoJumpcloud001 from './images/sso_jumpcloud_001.jpg';
import ssoJumpcloud002 from './images/sso_jumpcloud_002.jpg';

Ce tutoriel vous guide à travers la configuration de l'authentification unique (SSO) entre JumpCloud et la console Cloud Temple en utilisant le protocole OpenID Connect (OIDC).

Pour plus d'informations détaillées directement depuis JumpCloud, consultez leur documentation officielle sur le SSO OIDC : [SSO with OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Prérequis

Avant de commencer, assurez-vous d'avoir obtenu les informations nécessaires de la part de Cloud Temple, notamment l'URI de redirection spécifique à votre instance Keycloak.

## Configuration dans JumpCloud

Suivez ces étapes pour configurer une nouvelle application OIDC dans votre console d'administration JumpCloud :

1.  **Créer une nouvelle application :**
    *   Naviguez vers la section des applications dans JumpCloud.
    *   Cliquez sur "Ajouter" ou "Créer une nouvelle application".
    *   Choisissez l'option pour une intégration d'application personnalisée ("Custom Application Integration").

2.  **Configurer le SSO OIDC :**
    *   Sélectionnez "Manage Single Sign-On (SSO)".
    *   Choisissez "Configure SSO with OIDC".

    <img src={ssoJumpcloud001} alt="Configuration SSO OIDC JumpCloud" />

3.  **Entrer les URIs de redirection :**
    *   Dans le champ approprié (souvent appelé "Redirect URIs" ou "Callback URLs"), entrez l'URI fournie par Cloud Temple. Elle suivra généralement ce format :
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<company specific>/broker/<company specific>/endpoint
        ```
        *Remplacez `<company specific>` par les identifiants spécifiques à votre entreprise fournis par Cloud Temple.*

4.  **Choisir le type d'authentification client :**
    *   Sélectionnez `Client Secret Post` comme "Client Authentication Type".

5.  **Entrer l'URL de connexion :**
    *   Dans le champ "Login URL", entrez l'URL que vous utilisez pour accéder à votre console Cloud Temple. Par exemple :
        ```
        https://<unique-identifier>.shiva.cloud-temple.com
        ```
        *Remplacez `<unique-identifier>` par l'identifiant unique de votre instance Cloud Temple.*

6.  **Configurer le mappage d'attributs :**
    *   Dans la section "Attribute Mapping" (ou équivalent), assurez-vous que les attributs suivants sont sélectionnés pour être envoyés à Cloud Temple :
        *   `Email`
        *   `Profile` (peut inclure le nom, prénom, etc.)

    <img src={ssoJumpcloud002} alt="Mappage Attributs JumpCloud" />

7.  **Assigner des groupes :**
    *   Assignez les groupes d'utilisateurs JumpCloud qui doivent avoir accès à la console Cloud Temple via cette application SSO.

8.  **Activer l'application :**
    *   Cliquez sur "Activate" ou "Save" pour finaliser la configuration de l'application.

9.  **Fournir les identifiants à Cloud Temple :**
    *   Après l'activation, JumpCloud vous fournira un **Client ID** et un **Client Secret**.
    *   Communiquez ces deux informations de manière sécurisée à votre contact Cloud Temple pour finaliser la configuration de la fédération côté Keycloak.

Une fois que Cloud Temple aura configuré la fédération avec les identifiants fournis, vos utilisateurs assignés pourront se connecter à la console Cloud Temple en utilisant leurs identifiants JumpCloud.
