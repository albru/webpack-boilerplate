import React, { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import Routing from '../pages';

import { withProviders } from './providers';

import '@mozaic-ds/react/lib/index.css';

const App = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t('description.part3')}</div>
      <Routing />
    </>
  );
};

export default withProviders(App);
