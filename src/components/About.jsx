import React from "react";
import "./style.css";
import notes from "../assets/about.gif";
import "./About.css";

const About = () => {
  return (
    <>
      <section
        id="bigabout"
        className="about pt-12 px-12 sm:pt-10 sm:px-10 lg:pt-[120px] pb-12 lg:pb-[90px] text-black overflow-hidden "
      >
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center justify-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className=" py-3 sm:py-4">
                    <img src={notes} alt="" className="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 mr-8 lg:mt-0">
                <span className="block mb-2 mr-4 text-[50px] font-semibold text-black">
                  About Jugaad
                </span>
                <p className="mb-8 text-justify text-lg text-body-color">
                  Jugaad by The Entrepreneurship Cell, VNIT Nagpur is an annual
                  event which aims mainly at the development of skills like
                  money multiplication, management, creative ideation,
                  bargaining and what not. 100 Rupees will be provided to each
                  team and they have to maximize profits by using their
                  creativity. It is an event that will thoroughly challenge even
                  the best entrepreneurial minds out there and force everyone to
                  think out of the box. Jugaad is a must for those who wish to
                  expand their horizon of knowledge into the real world and get
                  a glimpse of what it's like to be an entrepreneur in you.
                </p>
                {/* <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-[blue] hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Register Now
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
