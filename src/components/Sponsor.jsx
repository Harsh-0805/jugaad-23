import ecellLogoWhite from "../assets/ecell-white-img.png";
import React from "react";
import "./sponsor.css";

const Sponser = () => {
  return (
    <>
      <div id="Sponsors" className="text-black sponsers ">
        <h1>OUR SPONSERS</h1>
        <div className="sponsercontainer">
          <div className="row">
            <div
              data-aos="fade-right"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="sponseritem"
            >
              <div className="sponserimage sponsercards">
                <img src={ecellLogoWhite} alt="" />
              </div>
              <div className="sponsertext sponsercards">
                1 Lorem ipsum dolor sit amet.
                <br />
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="sponseritem"
            >
              <div className="sponserimage sponsercards">
                <img src={ecellLogoWhite} alt="" />
              </div>
              <div className="sponsertext sponsercards">
                2 Lorem ipsum dolor sit amet.
                <br />
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="sponseritem"
            >
              <div className="sponserimage sponsercards">
                <img src={ecellLogoWhite} alt="" />
              </div>
              <div className="sponsertext sponsercards">
                3 Lorem ipsum dolor sit amet.
                <br />
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </div>
          <div className="row">
            <div
              data-aos="fade-right"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="sponseritem"
            >
              <div className="sponserimage sponsercards">
                <img src={ecellLogoWhite} alt="" />
              </div>
              <div className="sponsertext sponsercards">
                4 Lorem ipsum dolor sit amet.
                <br />
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="sponseritem"
            >
              <div className="sponserimage sponsercards">
                <img src={ecellLogoWhite} alt="" />
              </div>
              <div className="sponsertext sponsercards">
                5 Lorem ipsum dolor sit amet.
                <br />
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset={300}
              data-aos-easing="ease-in-sine"
              className="sponseritem"
            >
              <div className="sponserimage sponsercards">
                <img src={ecellLogoWhite} alt="" />
              </div>
              <div className="sponsertext sponsercards">
                6 Lorem ipsum dolor sit amet.
                <br />
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sponser;
