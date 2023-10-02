import { BrowserRouter } from "react-router-dom";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <Timeline />
      </div>
    </BrowserRouter>
  );
};

export default App;
