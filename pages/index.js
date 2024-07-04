import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Categories from "@/components/Categories";
import Forth_section from "@/components/Forth_Section";
import Fifth_Section from "@/components/Fifth_Section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutUs />
      <Categories />
      <Forth_section />
      <Fifth_Section />
    </div>
  );
}
