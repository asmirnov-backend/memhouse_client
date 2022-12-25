// import the original type declarations
// import all namespaces (for the default language, only)
import 'i18next';

import translation from '../../public/locales/ru/translation.json';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom resources type
    resources: {
      translation: typeof translation;
    };
  }
}
