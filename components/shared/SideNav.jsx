import Image from "next/image";
import React from "react";
import SideItems from "./SideItems";

const SideNav = () => {
  return (
    <aside className="right-0 md:absolute lg:absolute w-[3.5rem] z-[35]  fixed   min-h-screen border-l">
      <div className="max-h-[50vh] justify-between items-center gap-8 relative ">
        <div className="md:min-h-[15vh] min-h-[25vh]"></div>
        <div className="lg:mx-auto p-2 md:px-8 xl:px-0 flex justify-center items-center gap-[5rem] flex-col">
          <Image src="/assets/share.svg" alt="ps5" height={20} width={20} />
          <div className="h-full">
            <SideItems />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
