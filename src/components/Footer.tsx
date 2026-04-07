import { Instagram, Linkedin, FileText } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border/30 py-12 px-6">
    {/* Subtle glow particles */}
    <div className="floating-light w-[200px] h-[200px] bg-primary/5 bottom-0 left-1/4 animate-pulse-glow" />
    <div className="floating-light w-[150px] h-[150px] bg-secondary/5 bottom-0 right-1/3 animate-pulse-glow" style={{ animationDelay: "2s" }} />

    <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-sm text-muted-foreground">
        © 2026 Rishabh Saraswat. All rights reserved.
      </p>

      <div className="flex gap-6">
        {[
          { label: "Home", href: "#hero" },
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ].map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex gap-4">
        <a href="https://www.instagram.com/rishedits.x/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
          <Instagram size={18} />
        </a>
        <a href="https://www.linkedin.com/in/rishabh-saraswat-003509401" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="https://drive.google.com/drive/folders/1naxU1Y2j1PVsg9yD-pZC24iWbnHnrHro?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="text-muted-foreground hover:text-primary transition-colors">
          <FileText size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
