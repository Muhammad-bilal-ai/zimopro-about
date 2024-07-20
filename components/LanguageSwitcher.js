import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
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

export default LanguageSwitcher;
