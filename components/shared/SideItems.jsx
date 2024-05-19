import React from "react";
import { sosialMedia } from "@/constants";
import Image from "next/image";

const SideItems = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <p class="transform rotate-90 origin-left-top  text-white">Follow</p>
      <Image src="/assets/line.svg" alt="ps5" height={20} width={23} />
      <ul className="flex flex-col gap-5">
        {sosialMedia.map((item) => {
          return (
            <li key={item.imgUrl}>
              <Image
                src={item.imgUrl}
                alt="social media"
                width={15}
                height={30}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideItems;
