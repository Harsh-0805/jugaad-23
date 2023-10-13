import React from 'react';
import './style.css';
import about from"../assets/about.png"
import notes from"../assets/about.gif"
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <>
    <div id="bigabout">
    <center>
        <h2>About Jugaad</h2>
      </center>
        <div id="aboutsec">
          <p id="parabout">
          Jugaad by The Entrepreneurship Cell, VNIT Nagpur is an annual event which aims mainly at the
          development of skills like money multiplication, management, creative ideation, bargaining
          and what not. 100 Rupees will be provided to each team and they have to maximize profits by
          using their creativity. It is an event that will thoroughly challenge even the best
          entrepreneurial minds out there and force everyone to think out of the box. Jugaad is a must for
          those who wish to expand their horizon of knowledge into the real world and get a glimpse of what
          it's like to be an entrepreneur in you.
          </p>

          <img id="about" src={notes} alt="about" />
        </div>
    </div>
     
    </>
  );
};

export default AboutSection;
