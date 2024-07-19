// components/LanguageSwitcher.js

import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, locales } = router;

  const changeLanguage = (e) => {
    const selectedLocale = e.target.value;
    router.push(router.pathname, router.asPath, { locale: selectedLocale });
  };

  return (
    <select value={locale} onChange={changeLanguage}>
      {locales.map((lng) => (
        <option key={lng} value={lng}>
          {lng.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
