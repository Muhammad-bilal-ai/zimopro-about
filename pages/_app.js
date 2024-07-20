import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import i18n from "@/i18n";

function App({ Component, pageProps }) {
  useEffect(() => {
    // This is to ensure i18n is loaded
    i18n.changeLanguage(i18n.language);
  }, []);
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
