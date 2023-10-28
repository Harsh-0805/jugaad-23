import React, { useState } from "react";
import "./hero.css";
import Jugaad from "../assets/jugaadnew.png";
import { motion } from "framer-motion";
import Rules from "../assets/RULES.pdf";

const Hero = () => {
  return (
    <>
      <div id="Sponser" className="text-black herobg ">
        <div>
          <h1 className="font-bold text-xl">
            <span>Paisa kamaya nhi, </span>
            <span>banaya jata hai</span>
          </h1>
        </div>
        <motion.div
          initial={{ y: "-2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
        >
          <img src={Jugaad} alt="" className="" />
        </motion.div>

        <div>
          <h1 className="font-extrabold text-sm sm:scale-125 md:text-2xl flex justify-center text-center items-center">
            How much you can make from
            <span className="text-[yellow]">&nbsp;100&nbsp;</span>
            bucks ??
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 justify-evenly items-center">
          <motion.a
            initial={{ x: "-2rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            href="#register"
            className="relative inline-flex text-center items-center px-12 py-3 m-4 overflow-hidden text-lg font-medium text-[yellow] border-2 border-[yellow] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

            <span className="relative text-center">Register Here</span>
          </motion.a>

          <motion.a
            initial={{ x: "2rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            href={Rules}
            download="RULES.pdf"
            className="relative inline-flex text-center justify-center items-center px-12 py-3 m-4 overflow-hidden text-lg font-medium text-[yellow] border-2 border-[yellow] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="relative text-center">Rules</span>
          </motion.a>
        </div>
      </div>
    </>
  );
};
export default Hero;
