import ecellLogoWhite from "../assets/ecell-white-img.png";
import React from "react";
import "./hero.css";
import Jugaad from "../assets/jugaadnew.png";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <>
      <div id="Sponser" className="text-black herobg ">
        <div>
          <img src={Jugaad} alt="" className="" />
        </div>
        <div>
          <h1 className="font-extrabold text-2xl flex justify-center text-center items-center">
            How much you can make from
            <span className="text-[yellow]">&nbsp;100&nbsp;</span>
            bucks ??
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 justify-evenly items-center">
          <a
            href="#_"
            class="relative inline-flex text-center items-center px-12 py-3 m-4 overflow-hidden text-lg font-medium text-[yellow] border-2 border-[yellow] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

            <span class="relative">Register Here</span>
          </a>

          <a
            href="#_"
            class="relative inline-flex text-center justify-center items-center px-12 py-3 m-4 overflow-hidden text-lg font-medium text-[yellow] border-2 border-[yellow] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="relative text-center">Brochure</span>
          </a>
        </div>
      </div>
    </>
  );
};
export default Hero;
