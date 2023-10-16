import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import Name from "./components/Name";
import Sponser from "./components/Sponser";
import Footer from "./components/Footer"
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    if (isModalOpen == true) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };
  return (
    <>
    <Nav/>
      <div className="absolute left-1/2 z-10 top-50">
        <Name/>
      </div>
      <Hero />
      <div className="absolute top-3/4 left-4">
        <a
          href="#_"
          className="relative inline-block text-lg group"
          onClick={toggleModal}
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-yellow-400"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Register Now</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
      {isModalOpen && <Modal/>}
    </>
  );
};

export default App;
