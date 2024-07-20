import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import i18n from "@/i18n";
function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
