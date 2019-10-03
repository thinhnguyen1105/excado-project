import NextI18Next from 'next-i18next';
import { config } from '@client/config';

const i18n = new NextI18Next({
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  defaultLanguage: 'vn',
  otherLanguages: ['en'],
  localePath: `${process.env.NODE_ENV !== 'production' ? 'src' : 'dist'}/client/static/locales`,
  detection: {
    cookieDomain: config.cookies.domain,
  },
});

const appWithTranslation = i18n.appWithTranslation;

const changeLanguage = (lang: string) => {
  i18n.i18n.changeLanguage(lang);
};

const withNamespaces = i18n.withNamespaces;

const clientTranslate = (key: string) => {
  return i18n.i18n.t(key);
};

export {
  clientTranslate,
  i18n,
  appWithTranslation,
  changeLanguage,
  withNamespaces,
};
