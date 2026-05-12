import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: "#1f3a5f" }} className="text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Hemanth K
            </h2>
            <p
              className="text-white/60 text-sm leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Manager - IT, Production Automation & Infrastructure | House of Blue Beans (HOBB)
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/20"
                style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
                aria-label="LinkedIn"
              >
                <Linkedin size={17} className="text-white" />
              </a>
              <a
                href="mailto:Hemanth2608@hotmail.com"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/20"
                style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
                aria-label="Email"
              >
                <Mail size={17} className="text-white" />
              </a>
              <a
                href="tel:+918088461724"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/20"
                style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
                aria-label="Phone"
              >
                <Phone size={17} className="text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors text-left"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                <Mail size={15} className="text-white/40 shrink-0" />
                Hemanth2608@hotmail.com
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                <Phone size={15} className="text-white/40 shrink-0" />
                +91 80884 61724
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                <MapPin size={15} className="text-white/40 shrink-0" />
                House of Blue Beans (HOBB), Bangalore
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                <Linkedin size={15} className="text-white/40 shrink-0" />
                linkedin.com/in/hemanthk
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p
            className="text-sm text-white/40"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            &copy; 2026 Hemanth K – IT Infrastructure | Automation | Systems Administration
          </p>
          <p
            className="text-xs text-white/30"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Larsha Technologies, India
          </p>
        </div>
      </div>
    </footer>
  );
}
