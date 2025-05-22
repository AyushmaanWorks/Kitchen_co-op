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
          <div className="flex bg-[#DB99C7] opacity-[90%] rounded-full p-2">
            <h1
              className={`text-5xl text-[#44263A] font-extrabold ${fredoka.className}`}
            >
              WE COOKED THAT
            </h1>
          </div>
          <div className="flex bg-[#FFFFFF] opacity-[80%] rounded-full p-2">
            <h1
              className={`text-3xl text-[#D52A78] font-extrabold ${fredoka.className}`}
            >
              Cook and chill togethor!!
            </h1>
          </div>
        </div>

        <Image src="/images/logo.png" alt="logo" width={150} height={150} />
      </div>

      {/* Bottom 60% Section */}
      <div className="h-[60%] w-[30%] flex items-center justify-center">
        <Button
          className={`rounded-2xl font-extrabold min-w-[20vw] text-[#FFDBAF] text-4xl hover:cursor-pointer hover:text-5xl transition-all duration-300 ${fredoka.className}`}
        >
          <Image
            src="/images/playbutton.png"
            alt="logo"
            width={50}
            height={50}
          />
          Start Cooking...
        </Button>
      </div>

      {/* Bottom 20% Section */}
       <div className="h-[20%] min- w-full flex items-center justify-end">
        <Button
          className={`rounded-2xl font-extrabold min-w-[20vw] text-[#FFDBAF] text-4xl hover:cursor-pointer hover:text-5xl transition-all duration-300 ${fredoka.className}`}
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
