import { useEffect, useRef } from "react";
import gsap from "gsap";

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const particles = containerRef.current.querySelectorAll(".particle");

    particles.forEach((p, i) => {
      gsap.set(p, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(p, {
        y: `+=${30 + Math.random() * 40}`,
        x: `+=${-20 + Math.random() * 40}`,
        duration: 4 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });

      gsap.to(p, {
        opacity: 0.15 + Math.random() * 0.3,
        duration: 2 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: i % 2 === 0
              ? `hsla(220, 80%, 60%, ${0.15 + Math.random() * 0.2})`
              : `hsla(260, 60%, 55%, ${0.15 + Math.random() * 0.2})`,
            filter: `blur(${Math.random() * 1}px)`,
            opacity: 0.1,
          }}
        />
      ))}

      {/* Gradient blobs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, hsl(220 80% 60%), transparent 70%)",
          top: "10%",
          left: "20%",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, hsl(260 60% 55%), transparent 70%)",
          bottom: "20%",
          right: "15%",
          filter: "blur(60px)",
          animation: "float 10s ease-in-out infinite 2s",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, hsl(220 80% 60%), transparent 70%)",
          top: "50%",
          right: "40%",
          filter: "blur(50px)",
          animation: "float 7s ease-in-out infinite 4s",
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
