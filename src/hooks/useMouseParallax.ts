import { useEffect, useState } from "react";

export const useMouseParallax = (intensity = 0.02) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animFrame: number;
    const handleMouseMove = (e: MouseEvent) => {
      animFrame = requestAnimationFrame(() => {
        const x = (e.clientX - window.innerWidth / 2) * intensity;
        const y = (e.clientY - window.innerHeight / 2) * intensity;
        setPosition({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, [intensity]);

  return position;
};
