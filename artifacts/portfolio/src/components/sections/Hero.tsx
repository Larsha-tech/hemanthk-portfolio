import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

export function Hero() {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    alert("Downloading resume... (Placeholder)");
  };

  const stats = [
    { value: "200+", label: "Systems Managed" },
    { value: "100+", label: "Remote Users Supported" },
    { value: "Multiple", label: "Servers & NAS Managed" },
    { value: "Various", label: "Automation Systems Built" },
    { value: "1", label: "Render Farm Built" },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl md:text-4xl font-bold mx-auto mb-6 shadow-lg shadow-primary/20">
              HK
            </div>
            <h2 className="text-sm md:text-base font-semibold text-primary uppercase tracking-wider mb-2">
              Hi, I'm Hemanth K
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              IT Infrastructure Specialist <span className="text-muted-foreground">|</span> IT Manager
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Designing Reliable IT Systems, Automating Operations, and Managing Infrastructure at Scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[160px] gap-2"
              onClick={() => handleScrollTo("#projects")}
              data-testid="button-view-projects"
            >
              View Projects
              <ArrowDown size={18} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[160px] gap-2"
              onClick={handleDownloadResume}
              data-testid="button-download-resume"
            >
              <Download size={18} />
              Download Resume
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[160px] gap-2"
              onClick={() => handleScrollTo("#contact")}
              data-testid="button-contact-me"
            >
              <Mail size={18} />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 w-full border-t border-border pt-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center">
                <span className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
