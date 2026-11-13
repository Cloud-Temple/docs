import React, {type ReactElement} from 'react';
import Copyright from '@theme-original/Footer/Copyright';
import type CopyrightType from '@theme/Footer/Copyright';
import type {WrapperProps} from '@docusaurus/types';
import SiteVersion from '@site/src/components/SiteVersion';

type Props = WrapperProps<typeof CopyrightType>;

// Enveloppe du composant d'origine : le texte traduit (i18n/*/footer.json)
// reste inchangé, la ligne de version est ajoutée dessous dans toutes les langues.
export default function CopyrightWrapper(props: Props): ReactElement {
  return (
    <>
      <Copyright {...props} />
      <SiteVersion />
    </>
  );
}
