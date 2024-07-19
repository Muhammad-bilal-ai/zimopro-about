import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Categories from "@/components/Categories";
import Global_Section from "@/components/Global_Section";
import Partners from "@/components/Partners";
import Personalized from "@/components/Personalized";
import Entry_Ticket from "@/components/Entry_Ticket";
import Yacht_Section from "@/components/Yacht_Section";
import Car_Section from "@/components/Car_Section";
import { useRef } from "react";

export async function getStaticProps({ locale }) {
  const { i18n } = await import("../next-i18next.config.mjs");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], i18n)),
    },
  };
}

export default function Home() {
  const { t } = useTranslation("common");
  const aboutUsRef = useRef(null);
  const categoriesRef = useRef(null);
  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCategories = () => {
    categoriesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Hero scrollToAboutUs={scrollToAboutUs} />
      <AboutUs ref={aboutUsRef} scrollToCategories={scrollToCategories} />
      <Categories ref={categoriesRef} />
      <Entry_Ticket />
      <Personalized />
      <Global_Section />
      <Partners />
      <Yacht_Section />
      <Car_Section />
    </div>
  );
}
