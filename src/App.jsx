import { BrowserRouter } from "react-router-dom";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative z-0 bg-black">
        <Timeline />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
