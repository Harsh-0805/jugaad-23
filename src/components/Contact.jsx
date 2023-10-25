import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div id="bigcontact" className="p-6 about">
        <h1 className="flex justify-center items-center text-center text-5xl font-bold text-black p-8">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-evenly items-center">
          <div className="justify-center items-center flex flex-col">
            <div className="memberbox">
              <div
                className="memberphoto col-md-12"
                style={{
                  backgroundImage:
                    "url('http://www.hbo.com/assets/images/series/game-of-thrones/downloads/stark/wallpaper-stark-sigil-1600.jpg')",
                }}
              >
                <a href="" className="mphotohover">
                  <img src="http://cybersky.in/view.png" alt="" />
                </a>
              </div>
              <div className="membername col-md-12">Aquib Sheikh</div>
              <div className="membersubtitle col-md-12">8581930601</div>
            </div>
          </div>

          <div className="justify-center items-center flex flex-col">
            <div className="memberbox">
              <div
                className="memberphoto col-md-12"
                style={{
                  backgroundImage:
                    "url('http://www.hbo.com/assets/images/series/game-of-thrones/downloads/stark/wallpaper-stark-sigil-1600.jpg')",
                }}
              >
                <a href="" className="mphotohover">
                  <img src="http://cybersky.in/view.png" alt="" />
                </a>
              </div>
              <div className="membername col-md-12">Anurag Tiwari</div>
              <div className="membersubtitle col-md-12">7572041766</div>
            </div>
          </div>

          <div className="justify-center items-center flex flex-col">
            <div className="memberbox">
              <div
                className="memberphoto col-md-12"
                style={{
                  backgroundImage:
                    "url('http://www.hbo.com/assets/images/series/game-of-thrones/downloads/stark/wallpaper-stark-sigil-1600.jpg')",
                }}
              >
                <a href="" className="mphotohover">
                  <img src="http://cybersky.in/view.png" alt="" />
                </a>
              </div>
              <div className="membername col-md-12">Rishabh Shikhare</div>
              <div className="membersubtitle col-md-12">9890641465</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
