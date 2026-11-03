import React, { JSX } from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

type Kind = 'quickstart' | 'tutorials' | 'faq';

const TITLES: Record<Kind, JSX.Element> = {
  quickstart: (
    <Translate id="emptySection.quickstart.title" description="Titre de la carte d'un guide de démarrage vide">
      Guide de démarrage
    </Translate>
  ),
  tutorials: (
    <Translate id="emptySection.tutorials.title" description="Titre de la carte d'une rubrique Tutoriels vide">
      Tutoriels
    </Translate>
  ),
  faq: (
    <Translate id="emptySection.faq.title" description="Titre de la carte d'une rubrique Questions fréquentes vide">
      Questions fréquentes
    </Translate>
  ),
};

const MESSAGES: Record<Kind, JSX.Element> = {
  quickstart: (
    <Translate id="emptySection.quickstart.message" description="Message d'un guide de démarrage vide">
      Aucun guide de démarrage n'est disponible pour le moment, mais nous y travaillons activement. Revenez bientôt pour en savoir plus !
    </Translate>
  ),
  tutorials: (
    <Translate id="emptySection.tutorials.message" description="Message d'une rubrique Tutoriels vide">
      Aucun tutoriel n'est disponible pour le moment, mais nous y travaillons activement. Revenez bientôt pour en savoir plus !
    </Translate>
  ),
  faq: (
    <Translate id="emptySection.faq.message" description="Message d'une rubrique Questions fréquentes vide">
      Aucune question fréquente n'est disponible pour le moment, mais nous y travaillons activement. Revenez bientôt pour en savoir plus !
    </Translate>
  ),
};

// Carte affichée dans une rubrique standard d'un produit qui n'a pas encore de contenu.
export function EmptySection({ kind }: { kind: Kind }) {
  return (
    <div className="card">
      <h3>{TITLES[kind]}</h3>
      <p>{MESSAGES[kind]}</p>
      <Link to="/home" className="card-link">
        <Translate id="emptySection.homeLink" description="Lien vers la page d'accueil depuis une rubrique vide">
          Accéder à la page d'accueil →
        </Translate>
      </Link>
    </div>
  );
}
