import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Categories from "@/components/Categories";
import Global_Section from "@/components/Global_Section";
import Partners from "@/components/Partners";
const inter = Inter({ subsets: ["latin"] });
import { useRef } from "react";
import Personalized from "@/components/Personalized";
import Entry_Ticket from "@/components/Entry_Ticket";
import Yacht_Section from "@/components/Yacht_Section";
import Car_Section from "@/components/Car_Section";

export default function Home() {
  const aboutUsRef = useRef(null);
  const categoriesRef = useRef(null);
  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCategories = () => {
    categoriesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="overflow-x-hidden">
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
