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
        <motion.div className={textVariant()}>
          <img src={Jugaad} alt="" className="-mt-[250px]" />
        </motion.div>
      </div>
    </>
  );
};
export default Hero;
