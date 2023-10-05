import ecellLogoWhite from "../assets/ecell-white-img.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>JUGAAD 2023 | E-Cell, VNIT</title>
      <link rel="stylesheet" href="navstyle.css" />
      <header>
        <div className="nav" id="mynav">
          <div className="upper">
            <span>
              <img src="../assets/ecell-white-img.png" alt="logo" />
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
              <a href="#about">About</a>
            </li>
            <li className="navitem" id="item-3">
              <a href="#myprojects">Projects</a>
            </li>
            <li className="navitem" id="item-4">
              <a href="#form">Contact</a>
            </li>
          </ul>
        </div>
        <div className="extra">{/* <img src="../gym/gym.jpg" alt=""> */}</div>
      </header>
    </>

  );
};
export default Navbar;
