import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Server, Users, Monitor, Cpu, Briefcase } from "lucide-react";

export function Hero() {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    window.open(`${import.meta.env.BASE_URL}resume.html`, '_blank');
  };

  const stats = [
    { value: "200+", label: "Systems Managed", icon: <Monitor className="w-5 h-5" /> },
    { value: "100+", label: "Remote Users", icon: <Users className="w-5 h-5" /> },
    { value: "6+", label: "Years Experience", icon: <Briefcase className="w-5 h-5" /> },
    { value: "10", label: "Projects Delivered", icon: <Cpu className="w-5 h-5" /> },
    { value: "5+", label: "Servers Maintained", icon: <Server className="w-5 h-5" /> },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #1f3a5f 0%, transparent 70%)", transform: "translate(20%, -30%)" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 px-3 py-1 bg-primary/8 rounded-full border border-primary/15">
              IT & Automation Manager · HOBB
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold text-foreground mb-4 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Hemanth K
            </h1>

            <p
              className="text-base md:text-lg font-medium text-primary mb-5 leading-snug"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Manager - IT, Production Automation & Infrastructure | House of Blue Beans (HOBB)
            </p>

            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              Designing Reliable IT Systems, Automating Operations, and Managing Infrastructure at Scale. 
              With hands-on expertise across servers, networks, automation, and enterprise IT operations.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-0">
              <Button
                size="lg"
                className="gap-2 font-medium"
                style={{ backgroundColor: "#1f3a5f", color: "#fff" }}
                onClick={() => handleScrollTo("#projects")}
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowDown size={17} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 font-medium border-primary/40 text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors"
                onClick={handleDownloadResume}
                data-testid="button-download-resume"
              >
                <Download size={17} />
                Download Resume
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="gap-2 font-medium"
                onClick={() => handleScrollTo("#contact")}
                data-testid="button-contact-me"
              >
                <Mail size={17} />
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl"
                style={{ border: "4px solid #1f3a5f" }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Hemanth K"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badge: top-right */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-md px-3 py-2 border border-border text-xs font-semibold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                200+ Systems
              </div>
              {/* Floating badge: bottom-left */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-md px-3 py-2 border border-border text-xs font-semibold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                HOBB
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center py-5 px-4 rounded-xl border border-border bg-secondary/60 shadow-sm hover:shadow-md hover:border-primary/25 transition-all"
              >
                <span className="text-primary/60 mb-2">{stat.icon}</span>
                <span
                  className="text-2xl font-bold text-foreground mb-0.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground font-medium leading-tight text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
