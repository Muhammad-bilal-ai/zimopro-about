import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage && storedLanguage !== i18n.language) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}
    >
      <option value="en">English</option>
      <option value="zh">中文</option>
      <option value="ur">اردو</option>
      <option value="ru">Русский</option>
    </select>
  );
};

import dynamic from "next/dynamic";
import { useEffect } from "react";

export default dynamic(() => Promise.resolve(LanguageSwitcher), { ssr: false });
