import React, { useEffect } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import "./name.css";

const Hero = () => {
  // const [vantaEffect, setVantaEffect] = useState(0);
  // const vantaRef = useRef(null);

  useEffect(() => {
    NET({
      el: "#hero",
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xd6d219,
      backgroundColor: 0x121015,
    });
  }, []);
  return (
    <div id="hero" className="h-screen w-screen">
      <div className="justify-center text-center">
        <h1 className="animate-charcter">Juggad</h1>
      </div>
    </div>
  );
};

export default Hero;
