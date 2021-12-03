import { InitOptions } from 'i18next';

export const i18nInitOptions: InitOptions = {
  fallbackLng: 'ru',
  defaultNS: 'ru',
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
    caches: ['cookie'],
  },
  react: {
    useSuspense: false,
  },
  backend: {
    loadPath: 'assets/locales/{{lng}}/translation.json',
  },
};
