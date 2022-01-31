import React from 'react';

import { useTranslation } from 'react-i18next';

import NavBar from './components/layout/NavBar/NavBar';
import { I18nProvider } from './translations/I18nProvider';

function App() {
  const { t } = useTranslation();

  return (
    <I18nProvider>
      <div className="App">
        {t('learnReact')}
        <NavBar />
      </div>
    </I18nProvider>
  );
}

export default App;
