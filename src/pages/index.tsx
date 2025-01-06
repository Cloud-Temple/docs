import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.push('/docs-content/docs/home'); // Redirige vers la documentation
  }, [history]);

  return null; // Rien n'est rendu sur la page d'accueil
}