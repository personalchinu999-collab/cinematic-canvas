import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import profileImg from "@/assets/profile.png";
import capcutLogo from "@/assets/capcut_logo.jpg";
import aeLogo from "@/assets/after_effect_logo.jpg";
import prLogo from "@/assets/premiere_pro_logo.png";
import psLogo from "@/assets/photoshop_logo.jpg";
import canvaLogo from "@/assets/canva_logo.jpg";

const skills = [
  { name: "Premiere Pro", icon: prLogo },
  { name: "After Effects", icon: aeLogo },
  { name: "Photoshop", icon: psLogo },
  { name: "CapCut", icon: capcutLogo },
  { name: "Canva", icon: canvaLogo },
];

const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
};

const AboutSection = () => {
  const { ref: sectionRef, inView } = useInView(0.05);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView || !skillsRef.current) return;
    const icons = skillsRef.current.querySelectorAll(".skill-icon-img");
    icons.forEach((icon, i) => {
      gsap.to(icon, {
        y: -8,
        duration: 2 + Math.random() * 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  }, [inView]);

  return (
    <section ref={sectionRef} id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto relative z-10">

        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
  <span className="text-gradient">
    About Me
  </span>
</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          <div
            className="about-img flex justify-center transition-all duration-[800ms] ease-out"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-60px)",
            }}
          >
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                style={{
                  boxShadow:
                    "0 0 40px hsla(220, 80%, 60%, 0.2), 0 0 80px hsla(260, 60%, 55%, 0.1)",
                }}
              >
                <img
                  src={profileImg}
                  alt="Rishabh Saraswat"
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: "inset 0 0 40px 20px hsl(220 20% 4%)",
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className="about-text transition-all duration-[800ms] ease-out"
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
              storytelling.
            </p>
          </div>
        </div>

        <div ref={skillsRef} className="skill-icons-row flex flex-wrap justify-center gap-8">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="skill-icon rounded-2xl p-5 flex flex-col items-center gap-3 w-32 transition-all duration-500 cursor-pointer group"
              style={{
                backdropFilter: "blur(16px)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(30px) scale(0.8)",
                transitionDelay: `${400 + i * 150}ms`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow = "0 0 30px rgba(255,255,255,0.25)";
                el.style.transform = "scale(1.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow = "none";
                el.style.transform = "scale(1)";
              }}
            >
              <img
                src={s.icon}
                alt={s.name}
                className="skill-icon-img w-14 h-14 rounded-xl object-cover"
              />
              <span className="text-xs text-muted-foreground font-medium text-center group-hover:text-white transition-colors">
                {s.name}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Shine Animation */}
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
