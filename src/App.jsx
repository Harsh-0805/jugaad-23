import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Sponser from "./components/Sponsor";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Register from "./components/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Sponser />
      <Register />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
