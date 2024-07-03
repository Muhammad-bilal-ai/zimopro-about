import Image from "next/image";
import { Inter } from "next/font/google";
import { about } from "./about";
import Hero from "@/components/Hero";
import Header from "@/components/header";
import AboutUs from "@/components/AboutUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutUs />
    </div>
  );
}
