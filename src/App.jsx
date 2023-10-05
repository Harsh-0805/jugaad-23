import { BrowserRouter } from "react-router-dom";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <Timeline />
      </div>
      <About/>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
