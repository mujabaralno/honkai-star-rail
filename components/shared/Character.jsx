import Image from "next/image";
import React from "react";
import { characterHsr } from "@/constants";
import { Button } from "../ui/button";
import SideNav from "./SideNav";
import Link from "next/link";

const Character = () => {
  return (
    <div className="relative wrapper-carousel w-full  mt-[12rem] ">
      <div className="bg-black w-[15rem] m-9  border-l-2 border-y border-white/50 gradient-color flex relative p-[2px] ">
        <p className="p-medium-18 text-white ml-3">Suara Galaksi</p>
      </div>
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-4 sm:grid-cols-2 2xl:gap-0">
        {characterHsr.map((item) => {
          return (
            <Link
            href={item.route}
            key={item.id}
            >
              <div
                className="block relative p-0.5 bg-no-repeat  bg-[length:100%_100%] md:max-w-[24rem] cursor-pointer opacity-70 hover:opacity-100 object-cover bg-center"
                style={{
                  backgroundImage: `url(${item.backgroundImg})`,
                  width: 200,
                  height: 450,
                }}
              >
                <div className="relative z-2 flex flex-col bottom-0 top-[20rem] p-[2.4rem] pointer-events-none opacity-100">
                  <h5 className="p-medium-16 text-white text-center">
                    {item.title}
                  </h5>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center m-10">
        <Button
          className="gradient-color border-l border-t border-b  border-red-600 w-32 h-7 rounded-none"
          size="lg"
        >
          More
        </Button>
      </div>
    </div>
  );
};

export default Character;
