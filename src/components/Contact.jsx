import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div id="bigcontact" className="p-6 about">
        <motion.h1
          initial={{ y: "-2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
          className="flex justify-center items-center text-center text-5xl font-bold text-black p-8"
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-evenly items-center">
          <div className="justify-center items-center flex flex-col">
            <motion.div
              className="memberbox"
              initial={{ x: "-2rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              <a href="https://wa.me/9479402002" target="_blank">
                <div className="membername col-md-12">Anshul Mukati</div>
                <div className="membersubtitle col-md-12">9479402002</div>
              </a>
            </motion.div>
          </div>

          <div className="justify-center items-center flex flex-col">
            <motion.div
              className="memberbox"
              initial={{ x: "2rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              <a href="https://wa.me/918830958579" target="_blank">
                <div className="membername col-md-12">Radha Rahangdale</div>
                <div className="membersubtitle col-md-12">8830958579</div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
