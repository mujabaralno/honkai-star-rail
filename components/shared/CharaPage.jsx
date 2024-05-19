"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Button } from "../ui/button";

const audio = "/audio/kafka.mp3";
const playImg = "/mic.svg";
const pauseImg = "/wave.svg";

const CharaPage = () => {
  const audioRef = useRef();
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleEnd = () => {
      setIsPlayingMusic(false);
      audioElement.currentTime = 0;
    };
    audioElement.addEventListener("ended", handleEnd);

    return () => {
      audioElement.removeEventListener('ended', handleEnd)
    }

  }, []);

  const handlePlayPause = () => {
    if (isPlayingMusic) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlayingMusic(!isPlayingMusic);
  };
  return (
    <section className="w-full flex flex-col hero relative min-h-screen bg-hsr bg-cover bg-center">
      <div className="relative w-full max-w-7xl  mx-auto mt-[4rem] text-white justify-center items-center flex min-h-[90vh] p-[5rem]   rounded-lg overflow-hidden">
        {/* Wrapper to center the background image */}
        <div className="absolute inset-0 justify-center items-center z-0 hidden md:flex">
          <div className="bg-cover bg-center ">
            <Image src="/assets/bgchara.png" width={850} height={10000} />
          </div>
        </div>

        <div className="relative z-10 flex flex-col md:max-w-[53rem] max-w-7xl md:flex-row items-center bg-opacity-80  bg-gray-900 md:bg-transparent rounded-lg p-3 md:p-5">
          {/* Section for text and details */}
          <div className="flex-1 p-1">
            <div className="flex flex-row gap-3 items-center mb-4 -translate-y-4 -translate-x-5 ">
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src="/assets/lightning.png"
                  width={60}
                  height={70}
                  alt="symbol"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[20px] font-normal leading-[24px] tracking-[2%]">
                  Kafka
                </h4>
                <div className="flex items-center space-x-2">
                  <a className="bg-white rounded-full w-7 h-7 flex items-center justify-cente p-1">
                    <Image
                      src={!isPlayingMusic ? playImg : pauseImg}
                      alt={!isPlayingMusic ? "play" : "pause"}
                      width={20}
                      height={20}
                      className="object-cover"
                      onClick={handlePlayPause}
                    />
                  </a>
                  <span className="text-[12px] font-normal leading-[18px] tracking-[2%]">
                    VA: Cheryl Texeria
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center mb-20 transform z-40 relative -translate-y-6">
              <h3 className="text-2xl font-bold mb-4 p-2 md:p-0">Story</h3>
              <div className="md:bg-black p-2 md:bg-opacity-60 md:p-5 z-40 relative rounded-lg w-[18rem] md:w-[24rem]">
                <p className="text-[12px] font-normal leading-[18px] tracking-[2%]">
                  Dalam Berkas buronan interastral Peace Corporation, kafka hanya meninggalkan nama dan "hobi mengoleksi jas" di catatan. Tidak banyak yang bisa
                  diketahui dari Stellaron Hunter, selain soal dia adalah salah satu anggota terpercaya "Destiny's Slave" milik elio. Kafka mulai
                  beraksi untuk mewujudkan "masa depan" yang diramalkan elio.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative z-20">
            <Image
              src="/assets/kafka.png"
              alt="Kafka"
              width={1000} 
              height={1000} 
              className="object-cover"
              style={{
                position: "relative",
                zIndex: 10,
                transform: "scale(1.84)", 
              }}
            />
            <div className="absolute z-40 md:top-[14rem] top-[10rem] flex justify-center items-center left-0 right-0  rounded-lg transform  max-w-[25rem] mx-auto">
              <p className="text-[12px] font-normal leading-[18px] tracking-[2%]  bg-gray-800 bg-opacity-70 p-2">
                "Kamu tidak akan mengingat apapun Kecuali aku"
              </p>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={audio} />
    </section>
  );
};

export default CharaPage;
