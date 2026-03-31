import { Linkedin, Mail, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-muted-foreground/20 pb-8 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Hemanth K</h2>
            <p className="text-muted-foreground/80 text-sm max-w-sm">
              IT Infrastructure | Automation | Systems Administration
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary text-background flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:hemanth@larshatechnologies.com" 
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary text-background flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary text-background flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/60">
          <p>© {currentYear} Hemanth K. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-background transition-colors">Home</a>
            <a href="#about" className="hover:text-background transition-colors">About</a>
            <a href="#projects" className="hover:text-background transition-colors">Projects</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
