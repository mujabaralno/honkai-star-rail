import React from "react";
import Image from "next/image";
import { whatNews } from "@/constants";
import Link from "next/link";

const Card = ({ imgUrl, date, label,route }) => {
  return (
    <div className="wrapper flex flex-wrap justify-center">
      <div className="wrapper-hero">
        <Link
        href={route}
        >
          <div className="bg-gray-700 cursor-pointer rounded-tr-[3.3rem] shadow-blue-900/50 hover:shadow-2xl border-2 hover:border-red-600 shadow-lg">
            <div className="flex flex-col gap-3 relative">
              <Image
                src={imgUrl}
                width={1000}
                height={1000}
                className=" rounded-tr-[3.3rem] inset-0 opacity-90 transition-opacity  hover:opacity-100 "
                alt="banner"
              />
              <div className="p-3 text-white">
                <p className="text-[14px] font-normal leading-[20px] tracking-[3%]">
                  {date}
                </p>
                <p className="text-[14px] font-medium leading-[20px]">
                  {label}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
