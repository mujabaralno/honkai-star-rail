"use client";

import About from "@/components/shared/About";
import Hero from "@/components/shared/Hero";
import { Events, scroller } from "react-scroll";
import React, { useEffect, useRef } from "react";
import Header from "@/components/shared/Header";
import SideNav from "@/components/shared/SideNav";
import Character from "@/components/shared/Character";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      // Menggulir dari "about" ke "hero"
      if (event.deltaY < 0 && window.scrollY < aboutRef.current.offsetTop) {
        event.preventDefault();
        scroller.scrollTo("hero", {
          duration: 200,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }
      // Menggulir dari "hero" ke "about"
      else if (
        event.deltaY > 0 &&
        window.scrollY <
          aboutRef.current.offsetTop +
            aboutRef.current.clientHeight -
            window.innerHeight
      ) {
        event.preventDefault();
        scroller.scrollTo("about", {
          duration: 200,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }
    };

    const heroElement = heroRef.current;
    const aboutElement = aboutRef.current;

    if (heroElement) {
      heroElement.addEventListener("wheel", handleScroll);
    }
    if (aboutElement) {
      aboutElement.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("wheel", handleScroll);
      }
      if (aboutElement) {
        aboutElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <main className="">
      
      <div ref={heroRef} id="hero" className="h-screen">
        <Hero />
      </div>
      <div className="bg-hsr bg-cover object-cover min-h-screen background">
        <div
          ref={aboutRef}
          id="about"
          
        >
          <About />
        </div>
        <Character />
      </div>
    </main>
  );
}
