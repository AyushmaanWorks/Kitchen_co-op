"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Fredoka } from "next/font/google";
const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <div className="h-screen w-screen bg-cover bg-center bg-[url('/images/homebg.png')] overflow-hidden flex flex-col">
      {/* Top 20% Section */}
      <div className="h-[20%] w-full flex items-center justify-between p-6">
        <Image src="/images/logo.png" alt="logo" width={150} height={150} />

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex item-center justify-center px-8 py-5 bg-[#DB99C7]/70 rounded-full p-2">
            <h1
              className={`text-5xl text-[#44263A] font-extrabold glow-yellow ${fredoka.className}`}
            >
              WE COOKED THAT
            </h1>
          </div>
          <div className="flex item-center justify-center px-4 bg-[#FFFFFF]/70 rounded-full p-2">
            <h1
              className={`text-3xl text-[#D52A78] font-extrabold glow-pink ${fredoka.className}`}
            >
              Cook and chill together!!
            </h1>
          </div>
        </div>

        <Image src="/images/logo.png" alt="logo" width={150} height={150} />
      </div>

      {/* Bottom 60% Section */}
      <div className="h-[60%] w-[30%] flex items-center justify-center">
        <Button
          className={`rounded-2xl font-extrabold min-w-[20vw] text-[#FFF7E4] text-4xl hover:cursor-pointer hover:text-5xl transition-all duration-300 ${fredoka.className}`}
        >
          <Image
            src="/images/playbutton.png"
            alt="logo"
            width={80}
            height={80}
          />
          Start Cooking...
        </Button>
      </div>

      {/* Bottom 20% Section */}
       <div className="h-[20%] min- w-full flex items-center justify-end">
        <Button
          className={`flex items-center gap-4 rounded-2xl font-extrabold min-w-[18vw] text-[#fff7e4] text-3xl hover:text-4xl transition-all duration-300 ${fredoka.className}`}
        >
          <Image
            src="/images/rules.png"
            alt="logo"
            width={70}
            height={70}
          />
        </Button>
      </div>
    </div>
  );
}
