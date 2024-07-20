// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ru", "ur", "zh"],
    fallbackLng: "en",
    lng: "en", // default language
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: "/locales/{{lng}}/common.json", // path to load translation files
    },
  });

export default i18n;
