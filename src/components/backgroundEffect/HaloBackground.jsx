import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      const effect = HALO({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        baseColor: 0x2e5cff,
        backgroundColor: 0.0,
      });

      // 👇 Force scene background to null (transparent)
      if (effect && effect.scene) {
        effect.scene.background = null;
      }

      // 👇 Force WebGL clear color to transparent
      if (effect && effect.renderer) {
        effect.renderer.setClearColor(0x000000, 0);
      }

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 w-full h-full z-1"
      style={{ background: "transparent" }}
    />
  );
};

export default VantaBackground;
