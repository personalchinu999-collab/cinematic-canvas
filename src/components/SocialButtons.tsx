import { Instagram, Linkedin, FileText } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/rishedits.x/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rishabh-saraswat-003509401",
  },
  {
    icon: FileText,
    label: "Resume",
    href: "https://drive.google.com/drive/folders/1naxU1Y2j1PVsg9yD-pZC24iWbnHnrHro?usp=sharing",
  },
];

const SocialButtons = () => (
  <div className="flex justify-center gap-5 py-12">
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className="glass-card glow-border rounded-xl p-4 transition-all duration-300 hover:scale-110 hover:border-primary/60 hover:shadow-[0_0_30px_hsla(220,80%,60%,0.3)] group"
      >
        <s.icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
      </a>
    ))}
  </div>
);

export default SocialButtons;
