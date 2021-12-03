import React from 'react';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import ReactDOM from 'react-dom';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';

import { i18nInitOptions } from '@/app/config/i18n';
import store from '@/app/config/store';

import App from './app';

i18n.use(LanguageDetector).use(Backend).use(initReactI18next).init(i18nInitOptions);

const rootElement = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);
