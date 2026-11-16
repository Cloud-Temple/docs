// Textes affichés avant le chargement des données ou en cas d'échec. Les autres
// libellés de la roadmap arrivent avec les données publiées (roadmap-data/).
export type ShellKey = 'page.title' | 'page.description' | 'remote.loading' | 'remote.error' | 'remote.retry';

const shellLabels: Readonly<Record<string, Readonly<Record<ShellKey, string>>>> = {
  fr: {
    'page.title': 'Roadmap produit',
    'page.description': 'Découvrez les évolutions de nos produits et suivez leur avancement.',
    'remote.loading': 'Chargement de la roadmap…',
    'remote.error': 'La roadmap est momentanément indisponible. Veuillez réessayer.',
    'remote.retry': 'Réessayer',
  },
  en: {
    'page.title': 'Product Roadmap',
    'page.description': 'Discover the evolution of our products and track their progress.',
    'remote.loading': 'Loading roadmap…',
    'remote.error': 'The roadmap is temporarily unavailable. Please try again.',
    'remote.retry': 'Retry',
  },
  de: {
    'page.title': 'Produkt-Roadmap',
    'page.description': 'Entdecken Sie die Weiterentwicklungen unserer Produkte und verfolgen Sie deren Fortschritt.',
    'remote.loading': 'Roadmap wird geladen…',
    'remote.error': 'Die Roadmap ist vorübergehend nicht verfügbar. Bitte versuchen Sie es erneut.',
    'remote.retry': 'Erneut versuchen',
  },
  es: {
    'page.title': 'Roadmap de producto',
    'page.description': 'Descubra las evoluciones de nuestros productos y siga su avance.',
    'remote.loading': 'Cargando la roadmap…',
    'remote.error': 'La roadmap no está disponible temporalmente. Por favor, intente de nuevo.',
    'remote.retry': 'Reintentar',
  },
  it: {
    'page.title': 'Roadmap prodotto',
    'page.description': 'Scopri le evoluzioni dei nostri prodotti e segui il loro avanzamento.',
    'remote.loading': 'Caricamento della roadmap…',
    'remote.error': 'La roadmap è momentaneamente non disponibile. Si prega di riprovare.',
    'remote.retry': 'Riprova',
  },
};

export function shellLabel(locale: string, key: ShellKey): string {
  return (shellLabels[locale] ?? shellLabels.fr)[key];
}
