import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

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

const ContactSection = () => {
  const { ref: sectionRef, inView } = useInView(0.05);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rishabhsarswat00952@gmail.com?subject=Portfolio Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
    window.open(mailtoLink);
  };

  return (
    <section ref={sectionRef} id="contact" className="section-padding relative">
      <div
        className="max-w-4xl mx-auto contact-content relative z-10 transition-all duration-700 ease-out"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
        }}
      >
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
              className="glass-card rounded-xl px-5 py-3.5 bg-transparent text-foreground text-sm placeholder:text-muted-foreground focus:outline-none transition-all duration-300"
              style={{ border: "1px solid hsla(220, 80%, 60%, 0.2)" }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "hsla(220, 80%, 60%, 0.5)";
                e.currentTarget.style.boxShadow = "0 0 20px hsla(220, 80%, 60%, 0.15)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "hsla(220, 80%, 60%, 0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="glass-card rounded-xl px-5 py-3.5 bg-transparent text-foreground text-sm placeholder:text-muted-foreground focus:outline-none transition-all duration-300"
              style={{ border: "1px solid hsla(220, 80%, 60%, 0.2)" }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "hsla(220, 80%, 60%, 0.5)";
                e.currentTarget.style.boxShadow = "0 0 20px hsla(220, 80%, 60%, 0.15)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "hsla(220, 80%, 60%, 0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="glass-card rounded-xl px-5 py-3.5 bg-transparent text-foreground text-sm placeholder:text-muted-foreground focus:outline-none transition-all duration-300 resize-none"
              style={{ border: "1px solid hsla(220, 80%, 60%, 0.2)" }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "hsla(220, 80%, 60%, 0.5)";
                e.currentTarget.style.boxShadow = "0 0 20px hsla(220, 80%, 60%, 0.15)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "hsla(220, 80%, 60%, 0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <button
              type="submit"
              className="btn-glow inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-primary-foreground font-semibold text-sm transition-all duration-300 hover:scale-105"
            >
              Send Message <Send size={16} />
            </button>
          </form>

          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-center gap-4">
              <div className="glass-card rounded-xl p-3" style={{ border: "1px solid hsla(220, 80%, 60%, 0.2)" }}>
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <a href="tel:8955142568" className="text-foreground font-medium">8955142568</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="glass-card rounded-xl p-3" style={{ border: "1px solid hsla(220, 80%, 60%, 0.2)" }}>
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
