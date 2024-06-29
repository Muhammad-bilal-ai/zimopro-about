import Image from "next/image";
import { Inter } from "next/font/google";
import { about } from "./about";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <h1>ZIMAbout</h1>
      </div>
    </main>
  );
}
