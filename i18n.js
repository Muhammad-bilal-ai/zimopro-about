// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

const storedLanguage =
  typeof window !== "undefined" ? localStorage.getItem("language") : "en";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ru", "ur", "zh"],
    fallbackLng: "en",
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // path to load translation files
    },
  });

export default i18n;
