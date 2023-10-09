import { BrowserRouter } from "react-router-dom";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <Hero/>
        <Timeline />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
