"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Fredoka } from "next/font/google";
const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "700"] });
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [step, setStep] = useState("name");
  const [roomId, setRoomId] = useState("0210");
  const handleCreateRoom = () => {
    setStep("create");
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center bg-[url('/images/room.png')] overflow-hidden flex flex-col">
      <div className="h-[20%] w-full flex items-center justify-between p-6">
        <Image src="/images/logo.png" alt="logo" width={150} height={150} />

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center px-8 py-5 bg-[#DB99C7]/70 rounded-full p-2">
            <h1
              className={`text-5xl text-[#44263A] font-extrabold glow-yellow ${fredoka.className}`}
            >
              WE COOKED THAT
            </h1>
          </div>
        </div>

        <Image src="/images/logo.pn g" alt="logo" width={150} height={150} />
      </div>

      {/* ENTER NAME */}

      {step === "name" && (
        <div className="h-[80%] min-w-full flex items-center justify-center gap-8 flex-col">
          <div>
            <div className="flex item-center justify-center px-4 bg-[#FFFFFF]/70 rounded-full p-2">
              <input
                type="text"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`text-3xl text-[#D52A78] font-extrabold glow-pink ${fredoka.className} px-4 py-2 rounded-md outline-none placeholder-pink-[#D52A78] bg-transparent`}
              />
            </div>
          </div>

          <div className="flex flex-row gap-8">
            <Button
              className={`relative w-[280px] h-[118px] rounded-2xl font-extrabold text-[#fff7e4] text-3xl transition-all duration-300 hover:scale-105 hover:cursor-pointer ${fredoka.className}`}
              onClick={handleCreateRoom}
            >
              <Image
                src="/images/custombutton.png"
                alt="Create Room"
                layout="fill"
                objectFit="contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white -translate-y-1 text-4xl font-bold">
                  Create Room
                </p>
              </div>
            </Button>
            <Button
              className={`relative w-[280px] h-[118px] rounded-2xl font-extrabold text-[#fff7e4] text-3xl transition-all duration-300 hover:scale-105 hover:cursor-pointer ${fredoka.className}`}
              onClick={() => console.log("Join Room")}
            >
              <Image
                src="/images/custombutton.png"
                alt="Join Room"
                layout="fill"
                objectFit="contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white -translate-y-1 text-4xl font-bold">
                  Join Room
                </p>
              </div>
            </Button>
          </div>
        </div>
      )}

      {step === "create" && (
        <div className="h-full w-full flex flex-col">
          {/* Middle Bar - Room ID */}
          <div className="h-[20%] flex items-center justify-center">
            <div
              className={`relative w-[300px] h-[118px] rounded-2xl font-extrabold text-[#fff7e4] text-3xl ${fredoka.className}`}
              onClick={handleCreateRoom}
            >
              <Image
                src="/images/custombutton.png"
                alt="Create Room"
                layout="fill"
                objectFit="contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white -translate-y-1 text-4xl font-bold">
                  Room ID: {roomId}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="h-[60%] w-full relative">
            <div className="pl-40 mt-20">
              <Image
                src="/images/pinkcat.png"
                alt="Chef Cat"
                width={280}
                height={280}
              />
            </div>
            <div className="absolute bottom-[15%] right-8">
              <div className="bg-white/70 rounded-full px-10 py-3 mr-30 mb-15">
                <h1
                  className={`text-3xl text-[#4B2C61] font-extrabold drop-shadow-[0_3px_2px_rgba(0,0,0,0.3)] ${fredoka.className}`}
                >
                  waiting for Player 2
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
