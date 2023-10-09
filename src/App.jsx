import { BrowserRouter } from "react-router-dom";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sponser from "./components/Sponser";
import About from "./components/About"


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <Timeline />
      </div>
      <Navbar />
      <About />
      <Sponser />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
