import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Cinematic Showreel",
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

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      if (cards.length === 0) return;
      
      gsap.set(cards, { opacity: 0, y: 50 });
      
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.7,
            ease: "power3.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-gradient">Projects</span>
        </h2>

        {/* Desktop grid */}
        <div className="projects-grid hidden md:grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        {/* Mobile swipeable */}
        <div
          ref={scrollContainerRef}
          className="projects-grid md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((p) => (
            <div key={p.title} className="snap-center shrink-0 w-[85vw]">
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, desc, img, link }: typeof projects[0]) => (
  <div className="project-card glass-card glow-border rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-2">
    <div className="relative h-48 md:h-56 overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{desc}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 btn-glow px-5 py-2 rounded-lg text-primary-foreground text-sm font-medium"
      >
        View Project <ExternalLink size={14} />
      </a>
    </div>
  </div>
);

export default ProjectsSection;
