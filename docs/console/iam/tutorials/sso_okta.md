---
title: Exemple de fédération d'identité avec Okta
tags:
  - iam
  - tutorials
  - onboarding
---

Ce tutoriel vous guide dans la configuration de la fédération d'identité avec Okta pour votre organisation Cloud Temple.

## Prérequis

- Accès administrateur à votre instance Okta
- Droits de propriétaire sur votre organisation Cloud Temple
- Accès à la console Cloud Temple

## Configuration

La configuration de la fédération d'identité avec Okta permet d'intégrer votre annuaire Okta avec la console Cloud Temple pour une authentification centralisée.

### Étape 1 : Configuration côté Okta

1. Connectez-vous à votre console d'administration Okta
2. Naviguez vers **Applications** > **Applications**
3. Cliquez sur **Create App Integration**
4. Sélectionnez **SAML 2.0** comme méthode d'authentification
5. Configurez les paramètres SAML pour Cloud Temple

### Étape 2 : Configuration des paramètres SAML

Configurez les paramètres suivants dans Okta :

- **Single sign on URL** : Fourni par l'équipe Cloud Temple
- **Audience URI (SP Entity ID)** : Fourni par l'équipe Cloud Temple
- **Attribute Statements** : Configurez les attributs utilisateur nécessaires

### Étape 3 : Demande de configuration Cloud Temple

Pour configurer la fédération avec Okta, veuillez créer une demande de support dans la console Cloud Temple en précisant :

- Le nom de votre Organisation
- Le nom d'un contact avec son email et numéro de téléphone
- L'URL de métadonnées SAML de votre application Okta
- Le certificat de signature SAML
- Les attributs utilisateur configurés

### Étape 4 : Test et validation

Une fois la configuration terminée :

1. Testez l'authentification avec un utilisateur de test
2. Vérifiez que les attributs utilisateur sont correctement mappés
3. Validez l'accès aux ressources Cloud Temple

## Bonnes pratiques

- Configurez des groupes Okta pour gérer les permissions par tenant
- Activez l'authentification multifacteur (MFA) dans Okta
- Surveillez les logs d'authentification pour détecter les anomalies

## Support

Pour toute assistance avec la configuration d'Okta, contactez le support Cloud Temple via la console.
