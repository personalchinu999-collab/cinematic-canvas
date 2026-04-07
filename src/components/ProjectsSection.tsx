import { useEffect, useRef, useState, useCallback } from "react";
import { ExternalLink } from "lucide-react";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Video Editing",
    desc: "A compilation of cinematic edits showcasing premium visual storytelling.",
    img: project1,
    link: "https://drive.google.com/drive/folders/130dfvk7Fr294rvxyJG1GxVhVEuXBzGiS?usp=drive_link",
  },
  {
    title: "After Effects Compositing",
    desc: "Complex VFX compositing and motion tracking projects in After Effects.",
    img: project2,
    link: "https://drive.google.com/drive/folders/1W1yjN3TrpRJkmLr1dlvhlZqXAnH6o91d?usp=drive_link",
  },
  {
    title: "Motion Graphics Reel",
    desc: "Dynamic motion graphics, transitions, and animated visual designs.",
    img: project3,
    link: "https://drive.google.com/drive/folders/1yHANLysb_yKWDdXN9eh1BvtTU4uFqFrL?usp=drive_link",
  },
  {
    title: "Professional Editing Suite",
    desc: "Multi-monitor professional editing workflows and color grading.",
    img: project4,
    link: "https://drive.google.com/drive/folders/1LXBP2zKrRz1T3kacsGcLm88N6KEnazIK?usp=drive_link",
  },
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

const ProjectsSection = () => {
  const { ref: sectionRef, inView } = useInView(0.05);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-gradient">Projects</span>
        </h2>

        {/* Desktop grid */}
        <div className="projects-grid hidden md:grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="transition-all duration-700 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(50px)",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <ProjectCard {...p} />
            </div>
          ))}
        </div>

        {/* Mobile swipeable */}
        <div
          ref={scrollContainerRef}
          className="projects-grid md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="snap-center shrink-0 w-[85vw] transition-all duration-700 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(50px)",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, desc, img, link }: typeof projects[0]) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${y * -6}deg) translateY(-8px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)";
  }, []);

  const handleClick = useCallback(() => {
    window.open(link, "_blank", "noopener,noreferrer");
  }, [link]);

  return (
    <div
      ref={cardRef}
      className="project-card glass-card rounded-2xl overflow-hidden group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        border: "1px solid hsla(220, 80%, 60%, 0.2)",
        willChange: "transform",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "hsla(220, 80%, 60%, 0.5)";
        e.currentTarget.style.boxShadow = "0 20px 60px hsla(220, 80%, 60%, 0.15), 0 0 30px hsla(260, 60%, 55%, 0.1)";
      }}
      onMouseLeaveCapture={(e) => {
        e.currentTarget.style.borderColor = "hsla(220, 80%, 60%, 0.2)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{desc}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="inline-flex items-center gap-2 btn-glow px-5 py-2.5 rounded-xl text-primary-foreground text-sm font-medium transition-all duration-300 hover:scale-105"
        >
          View Project <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
