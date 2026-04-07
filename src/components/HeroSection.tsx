import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.2 });
      tl.from(".hero-tag", { opacity: 0, y: 30, duration: 0.6, ease: "power3.out" })
        .from(".hero-title", { opacity: 0, y: 40, duration: 0.7, ease: "power3.out" }, "-=0.3")
        .from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .from(".hero-btn", { opacity: 0, y: 20, scale: 0.95, duration: 0.5, ease: "back.out(1.4)" }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Floating lights */}
      <div className="floating-light w-[500px] h-[500px] bg-primary/20 -top-40 left-1/4 animate-float" />
      <div className="floating-light w-[400px] h-[400px] bg-secondary/15 bottom-20 right-10 animate-float" style={{ animationDelay: "3s" }} />
      <div className="floating-light w-[200px] h-[200px] bg-primary/10 top-1/2 left-10 animate-pulse-glow" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <span className="hero-tag inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Video Editor & Motion Designer
        </span>
        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Hi, I'm{" "}
          <span className="text-gradient">Rishabh Saraswat</span>
          <br />
          <span className="text-foreground/90">– Video Editor</span>
        </h1>
        <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Cinematic Edits &nbsp;|&nbsp; Reels &nbsp;|&nbsp; Ads &nbsp;|&nbsp; Motion Graphics
        </p>
        <a
          href="#contact"
          className="hero-btn inline-block btn-glow px-8 py-3.5 rounded-lg text-primary-foreground font-semibold text-sm tracking-wide"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
