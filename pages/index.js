import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Categories from "@/components/Categories";
import Forth_section from "@/components/Forth_Section";
import Fifth_Section from "@/components/Fifth_Section";
import Global_Section from "@/components/Global_Section";
import Partners from "@/components/Partners";
import Final_Section from "@/components/Final_Section";
import Final_Section_2 from "@/components/Final_Section_2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutUs />
      <Categories />
      <Forth_section />
      <Fifth_Section />
      <Global_Section />
      <Partners />
      <Final_Section />
      <Final_Section_2 />
    </div>
  );
}
