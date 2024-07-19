import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { i18n } from "./next-i18next.config.mjs";

i18next.use(initReactI18next).init({
  fallbackLng: i18n.defaultLocale,
  lng: i18n.defaultLocale,
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
});

export default i18next;
