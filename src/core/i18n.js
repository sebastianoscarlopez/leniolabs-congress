import i18next from 'i18next';
import { initReactI18next } from "react-i18next";

const i18nInit = () => i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: 'en',
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    'congress': 'congress'
                }
            },
            es: {
                translation: {
                    'congress': 'Congreso'
                }
            }
        }
    }, (err, t) => {
    // initialized and ready to go!
        //document.getElementById('output').innerHTML = i18next.t('key');
    }
);

export default i18nInit;