// import the original type declarations
// import all namespaces (for the default language, only)
import 'i18next';

import en from '../../public/locales/en/translation.json';
import ru from '../../public/locales/ru/translation.json';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'ru';
    // custom resources type
    resources: {
      ru: typeof ru;
      en: typeof en;
    };
    // other
  }
}
