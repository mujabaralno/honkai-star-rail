'use client'

import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import Header from "./Header";
import Image from "next/image";
import SideNav from "./SideNav";
import { downloadGames } from "@/constants";

const playImg = "/assets/buttonplay.png";
const pauseImg = "/assets/buttonpause.png";
const audio = "/audio/audio.mp3";

const Hero = () => {
  const audioRef = useRef();
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handlePlayPause = () => {
    if (isPlayingMusic) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlayingMusic(!isPlayingMusic);
  };

  return (
    <section
      id="hero"
      className="w-full flex hero z-30 flex-col relative min-h-screen scrollbar-hide"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div className="absolute inset-0 flex items-center justify-center object-cover transform md:-translate-y-16   ">
        <video
          autoPlay
          muted
          loop
          style={{ objectPosition: "center" }}
          className="w-full md:min-h-[115vh] min-h-[90vh]  max-w-none md:object-cover "
        >
          <source src="/video/hsr.mp4" />
        </video>
      </div>
      <div className="relative z-30 flex flex-col justify-between w-full min-h-screen bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center hero">
        <div></div>
        <div className="wrapper relative flex-grow bottom-0">
          <div className="absolute bottom-32 left-4 z-40 flex flex-col gap-3 max-w-5xl">
            <a className="bg-none">
              <img
                src={!isPlayingMusic ? playImg : pauseImg}
                alt={!isPlayingMusic ? "play" : "pause"}
                onClick={handlePlayPause}
                width={100}
                height={30}
              />
            </a>

            <div className="flex flex-col max-w-xl gap-3">
              <div className="grid grid-cols-3 gap-5">
                {downloadGames.slice(0, 2).map((item) => (
                  <div key={item.id}>
                    <Image
                      src={item.imgUrl}
                      alt="store"
                      width={170}
                      height={200}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-5">
                {downloadGames.slice(2).map((item) => (
                  <div key={item.id}>
                    <Image
                      src={item.imgUrl}
                      alt="store"
                      width={170}
                      height={200}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={audio} volume={0.1} />
    </section>
  );
};

export default Hero;
