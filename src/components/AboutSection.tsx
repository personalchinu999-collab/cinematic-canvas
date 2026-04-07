import { useEffect, useRef, useState } from "react";
import profileImg from "@/assets/profile.png";
import capcutLogo from "@/assets/capcut_logo.jpg";
import aeLogo from "@/assets/after_effect_logo.jpg";
import prLogo from "@/assets/premiere_pro_logo.png";
import psLogo from "@/assets/photoshop_logo.jpg";

const skills = [
  { name: "Premiere Pro", icon: prLogo },
  { name: "After Effects", icon: aeLogo },
  { name: "Photoshop", icon: psLogo },
  { name: "CapCut", icon: capcutLogo },
];

const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
};

const AboutSection = () => {
  const { ref: sectionRef, inView } = useInView(0.05);

  return (
    <section ref={sectionRef} id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div
            className="about-img flex justify-center transition-all duration-800 ease-out"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-60px)",
            }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden glow-border">
              <img
                src={profileImg}
                alt="Rishabh Saraswat"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div
            className="about-text transition-all duration-800 ease-out"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(60px)",
              transitionDelay: "200ms",
            }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a passionate video editor specializing in cinematic edits, reels,
              advertisements, and motion graphics. With expertise in industry-standard
              tools, I bring creative visions to life through compelling visual
              storytelling. Every frame is crafted to captivate and communicate your
              brand's unique story.
            </p>
          </div>
        </div>

        <div className="skill-icons-row flex flex-wrap justify-center gap-8">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="skill-icon glass-card glow-border rounded-2xl p-4 flex flex-col items-center gap-3 w-28 transition-all duration-500 hover:scale-105"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(30px) scale(0.8)",
                transitionDelay: `${400 + i * 150}ms`,
              }}
            >
              <img
                src={s.icon}
                alt={s.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <span className="text-xs text-muted-foreground font-medium text-center">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
