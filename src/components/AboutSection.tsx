import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "@/assets/profile.png";
import capcutLogo from "@/assets/capcut_logo.jpg";
import aeLogo from "@/assets/after_effect_logo.jpg";
import prLogo from "@/assets/premiere_pro_logo.png";
import psLogo from "@/assets/photoshop_logo.jpg";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Premiere Pro", icon: prLogo },
  { name: "After Effects", icon: aeLogo },
  { name: "Photoshop", icon: psLogo },
  { name: "CapCut", icon: capcutLogo },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-img", {
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-img", start: "top 80%" },
      });
      gsap.from(".about-text", {
        opacity: 0,
        x: 60,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-text", start: "top 80%" },
      });
      gsap.from(".skill-icon", {
        opacity: 0,
        y: 30,
        scale: 0.8,
        stagger: 0.15,
        duration: 0.5,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".skill-icons-row", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="about-img flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden glow-border">
              <img
                src={profileImg}
                alt="Rishabh Saraswat"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="about-text">
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
          {skills.map((s) => (
            <div
              key={s.name}
              className="skill-icon glass-card glow-border rounded-2xl p-4 flex flex-col items-center gap-3 w-28 transition-all duration-300 hover:scale-105"
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
