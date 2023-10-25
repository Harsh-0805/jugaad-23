import React, { useState } from "react";
import "./hero.css";
import Jugaad from "../assets/jugaadnew.png";

const Hero = () => {
  const [login, setlogin] = useState(false);
  const [login1, setlogin1] = useState(false);
  const [box, setbox] = useState(false);
  const openlogin = () => {
    if (login === false) {
      setlogin(true);
    }
  };
  const closelogin = () => {
    if (login === true) {
      setlogin(false);
    }
  };
  const openlogin1 = () => {
    if (login1 === false) {
      setlogin1(true);
    }
  };
  const closelogin1 = () => {
    if (login1 === true) {
      setlogin1(false);
    }
  };
  const openbox = () => {
    if (box === false) {
      setbox(true);
    }
  };
  return (
    <>
      <div id="Sponser" className="text-black herobg ">
        <div>
          <img src={Jugaad} alt="" className="" />
        </div>
        <div>
          <h1 className="font-extrabold text-xs md:text-2xl flex justify-center text-center items-center">
            How much you can make from
            <span className="text-[yellow]">&nbsp;100&nbsp;</span>
            bucks ??
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 justify-evenly items-center">
          <a
            href="#_"
            class="relative inline-flex text-center items-center px-12 py-3 m-4 overflow-hidden text-lg font-medium text-[yellow] border-2 border-[yellow] rounded-full hover:text-white group hover:bg-gray-50"
            onClick={openbox}
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

            <span class="relative">Register Here</span>
          </a>

          <a
            href="_"
            class="relative inline-flex text-center justify-center items-center px-12 py-3 m-4 overflow-hidden text-lg font-medium text-[yellow] border-2 border-[yellow] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="relative text-center">Brochure</span>
          </a>
        </div>
        {box && (
          <a
            href="#_"
            onClick={openlogin}
            class="absolute top-[60px] left-3 inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[yellow] border-2 border-[yellow] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
            <span class="relative">Team Registration</span>
          </a>
        )}
        {box && (
          <a
            href="#_"
            onClick={openlogin1}
            class="absolute top-[60px] right-3 inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[yellow] border-2 border-[yellow] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
            <span class="relative">Individual Registration</span>
          </a>
        )}
        {login && (
          <div className="max-w-md mx-auto bg-[yellow] p-6 rounded-lg shadow-lg absolute top-[50px] left-[40%]">
            <div className="flex justify-around gap-1">
              <h4 className="text-2xl font-semibold mb-4">Registration Form</h4>
              <span
                className="ml-2 mt-1 hover:cursor-pointer"
                onClick={closelogin}
              >
                &#x274C;
              </span>
            </div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="teamName"
                  className="block text-black text-sm font-bold"
                >
                  Team Name:
                </label>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  required=""
                  className="border rounded w-full py-2 px-3 text-white focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="teamLeaderName"
                  className="block text-black text-sm font-bold"
                >
                  Team Leader Name:
                </label>
                <input
                  type="text"
                  id="teamLeaderName"
                  name="teamLeaderName"
                  required=""
                  className="border rounded w-full py-2 px-3 text-white focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="whatsappNo"
                  className="block text-black text-sm font-bold"
                >
                  WhatsApp Number:
                </label>
                <input
                  type="tel"
                  id="whatsappNo"
                  name="whatsappNo"
                  required=""
                  className="border rounded w-full py-2 px-3 text-white focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-black text-sm font-bold"
                >
                  Email ID:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required=""
                  className="border rounded w-full py-2 px-3 text-white focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-700 hover:bg-gray-700 text-[yellow] font-semibold py-2 px-4 rounded focus:outline-none focus:ring"
              >
                Submit
              </button>
            </form>
          </div>
        )}
        {login1 && (
          <div className="max-w-md mx-auto bg-[yellow] p-6 rounded-lg shadow-lg absolute top-[50px] left-[40%]">
            <div className="flex justify-around gap-1">
              <h4 className="text-2xl font-semibold mb-4">Registration Form</h4>
              <span
                className="ml-2 mt-1 hover:cursor-pointer"
                onClick={closelogin1}
              >
                &#x274C;
              </span>
            </div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="teamName"
                  className="block text-black text-sm font-bold"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  required=""
                  className="border rounded w-full py-2 px-3 text-white focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="whatsappNo"
                  className="block text-black text-sm font-bold"
                >
                  WhatsApp Number:
                </label>
                <input
                  type="tel"
                  id="whatsappNo"
                  name="whatsappNo"
                  required=""
                  className="border rounded w-full py-2 px-3 text-white focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-black text-sm font-bold"
                >
                  Email ID:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required=""
                  className="border rounded w-full py-2 px-3 text-white focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-700 hover:bg-gray-700 text-[yellow] font-semibold py-2 px-4 rounded focus:outline-none focus:ring"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
export default Hero;
