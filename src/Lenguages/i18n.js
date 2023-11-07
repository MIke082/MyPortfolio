import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) 
    .init({
        resources: {
            he: {
                translation: require('./locales/he/translation.json')
            },
            ru: {
                translation: require('./locales/ru/translation.json')

            },
            en: {
                translation: require('./locales/en/translation.json')

            },
            ua: {
                translation: require('./locales/ua/translation.json')

            }

        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });