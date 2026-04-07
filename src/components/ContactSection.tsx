import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-content", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rishabhsarswat00952@gmail.com?subject=Portfolio Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
    window.open(mailtoLink);
  };

  return (
    <section ref={sectionRef} id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto contact-content">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="glass-card glow-border rounded-lg px-5 py-3.5 bg-transparent text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="glass-card glow-border rounded-lg px-5 py-3.5 bg-transparent text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="glass-card glow-border rounded-lg px-5 py-3.5 bg-transparent text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
            />
            <button
              type="submit"
              className="btn-glow inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-primary-foreground font-semibold text-sm"
            >
              Send Message <Send size={16} />
            </button>
          </form>

          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-center gap-4">
              <div className="glass-card glow-border rounded-xl p-3">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <a href="tel:8955142568" className="text-foreground font-medium">8955142568</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="glass-card glow-border rounded-xl p-3">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a href="mailto:rishabhsarswat00952@gmail.com" className="text-foreground font-medium text-sm">
                  rishabhsarswat00952@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
