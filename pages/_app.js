import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import i18n from "@/i18n";

function App({ Component, pageProps }) {
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage && storedLanguage !== i18n.language) {
      i18n.changeLanguage(storedLanguage);
    }
  }, []);
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
