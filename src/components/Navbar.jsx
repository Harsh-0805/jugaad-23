import ecellLogoWhite from "../assets/ecell-white-img.png";
import { Link } from "react-router-dom";
import React from 'react'
import "./navstyle.css"
import "./navscript.js"

const Navbar = () => {
  return (
    <>
      <header>
        <div className="nav" id="mynav">
          <div className="upper">
            <span>
              <img src={ecellLogoWhite} alt="logo" />
            </span>
            <div className="hamburger" id="hamburger" onclick="hide()">
              <ul>
                <li className="burgeritem" id="burgeritem1" />
                <li className="burgeritem" id="burgeritem2" />
                <li className="burgeritem" id="burgeritem3" />
              </ul>
            </div>
          </div>
          <ul id="navlist" className="hidden">
            <li className="navitem" id="item-1">
              <a href="#home">Home</a>
            </li>
            <li className="navitem" id="item-2">
              <a href="#About">About</a>
            </li>
            <li className="navitem" id="item-3">
              <a href="#Sponser">Sponsers</a>
            </li>
            <li className="navitem" id="item-4">
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>

  );
};
export default Navbar;
