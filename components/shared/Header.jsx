import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";

const Header = () => {
  
  return (
    <>

      <header className="w-full bg-black border-b border-white/50 fixed top-0 z-40">
          <div className="lg:mx-auto p-3 md:px-8 xl:px-4 w-full flex justify-between items-center">
            <div className="flex flex-row gap-[5rem] justify-center items-center">
              <Image src="/hsrlogo.png" width={100} height={80} className="bg-cover" alt="logo"/>
            </div>
            <nav className="md:flex-between hidden w-full max-w-xs">
              <NavItems />
            </nav>
    
            <div className="w-32 flex flex-row justify-end gap-5">
              <Button className="bg-black border" size="lg">
                Login
              </Button>
            </div>
          </div>
      </header>
    </>
    
  );
};

export default Header;
