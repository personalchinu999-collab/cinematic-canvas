import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate progress
    tl.to({}, {
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: function () {
        const p = Math.round(this.progress() * 100);
        setProgress(p);
      },
    });

    // Fade out
    tl.to([percentRef.current, progressRef.current?.parentElement], {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    });

    tl.to(textRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power2.in",
    }, "-=0.2");

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete,
    });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div className="floating-light w-[400px] h-[400px] bg-primary/20 top-1/4 left-1/4 animate-pulse-glow" />
      <div className="floating-light w-[300px] h-[300px] bg-secondary/20 bottom-1/4 right-1/4 animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <h1
        ref={textRef}
        className="text-3xl md:text-5xl font-bold text-gradient mb-12 tracking-tight"
      >
        Rishabh Saraswat
      </h1>

      <div className="w-64 md:w-80">
        <div className="h-[2px] w-full bg-muted rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full btn-glow rounded-full transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span
          ref={percentRef}
          className="block text-center mt-4 text-sm text-muted-foreground font-medium tracking-widest"
        >
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default Preloader;
