'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Fredoka } from "next/font/google";
const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "700"] });


export default function Home() {
  return (
    <div className="bg-cover bg-center min-h-screen min-w-screen bg-[url('/images/homebg.png')]">
      <div className="bg-transparent min-h-screen max-w-[28vw] flex flex-col items-center justify-center">
        <Button className={` rounded-2xl font-extrabold min-w-[20vw] text-[#FFDBAF] text-4xl hover:text-5xl hover:cursor-pointer transition-all duration-300 ${fredoka.className}`}>
          Start Cooking...
        </Button>
      </div>
    </div>
  );
}
