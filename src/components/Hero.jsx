import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 800.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xffe13f,
          backgroundColor: 0x18141f,
          maxDistance: 18.00,
          spacing: 16.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef}>
    </div>
  );
};
export default Hero