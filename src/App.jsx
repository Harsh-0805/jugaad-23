import { BrowserRouter } from "react-router-dom";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Sponser from "./components/Sponser";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
       <div className="relative z-0 bg-black">
         <Timeline />
       </div>
       <Navbar/>
       <Hero/>
       <About/>
       <Sponser/>
       <Footer/>
    </BrowserRouter>
  );
};

export default App;
