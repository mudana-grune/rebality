import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '../public/locales/en/common.json';
import idTranslation from '../public/locales/id/common.json';

const resources = {
    en: {
        translation: enTranslation
    },
    id: {
        translation: idTranslation
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['cookie', 'navigator'],
            caches: ['cookie'],
            lookupCookie: 'i18next',
        },
    });


export default i18n;
