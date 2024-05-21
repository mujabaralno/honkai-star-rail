"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Card from "./Card";
import SideNav from "./SideNav";
import Character from "./Character";

const About = ({ imgUrl, label, date, route }) => {
  return (
    <section
      id="about"
      className="relative w-full bg-primary-50 mt-[4rem] background"
    >
      <div className="wrapper-carousel justify-center items-center top-[5rem] relative">
        <div className="bg-black w-[15rem]  border-l-2 border-y border-white/50 gradient-color flex relative p-[2px] ">
          <p className="p-medium-18 text-white ml-3">Suara Galaksi</p>
        </div>
        <Carousel>
          <CarouselContent className="p-5">
            <CarouselItem className="md:p-5 p-2  md:basis-1/2 lg:basis-1/3">
              <Card
                imgUrl="/assets/about/banner1.png "
                label="Event Live Streaming Discord Quest Honkai: Star Rail versi 2.2"
                date="9-5-2024"
                route="https://hsr.hoyoverse.com/id-id/news/123652?utm_source=hsrofficialweb&utm_medium=fab&utm_campaign=button"
              />
            </CarouselItem>
            <CarouselItem className="md:p-5 p-2  md:basis-1/2 lg:basis-1/3">
              <Card
                imgUrl="/assets/about/banner2.png "
                label="Event Live Streaming Discord Quest Honkai: Star Rail versi 2.2"
                date="9-5-2024"
                route="https://hsr.hoyoverse.com/id-id/news/123652?utm_source=hsrofficialweb&utm_medium=fab&utm_campaign=button"
              />
            </CarouselItem>
            <CarouselItem className="md:p-5 p-2  md:basis-1/2 lg:basis-1/3">
              <Card
                imgUrl="/assets/about/banner3.jpg "
                label="Event Live Streaming Discord Quest Honkai: Star Rail versi 2.2"
                date="9-5-2024"
                route="https://hsr.hoyoverse.com/id-id/news/123652?utm_source=hsrofficialweb&utm_medium=fab&utm_campaign=button"
              />
            </CarouselItem>
            <CarouselItem className="md:p-5 p-2  md:basis-1/2 lg:basis-1/3">
              <Card
                imgUrl="/assets/about/banner4.jpg "
                label="Event Live Streaming Discord Quest Honkai: Star Rail versi 2.2"
                date="9-5-2024"
                route="https://hsr.hoyoverse.com/id-id/news/123652?utm_source=hsrofficialweb&utm_medium=fab&utm_campaign=button"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </section>
  );
};

export default About;
