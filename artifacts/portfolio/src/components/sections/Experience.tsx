import { motion } from "framer-motion";
import { Briefcase, Building, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Experience() {
  const responsibilities = [
    "Complete IT infrastructure management for the entire organization",
    "Server management: TrueNAS, Proxmox, VMware ESXi, Windows Server",
    "Network management: Switches, VLANs, Access Points, Firewall (Sophos)",
    "Automation: n8n workflows, GLPI ticketing, Slack integrations",
    "User support: 200+ desktop systems, 100+ remote freelancers",
    "Backup systems: automated backup monitoring and maintenance",
    "Security: firewall monitoring, VPN setup, access control management",
    "Software license management: Autodesk, Adobe, V-Ray, and more",
    "Remote user management with Tailscale and WireGuard VPN",
    "IT documentation and knowledge base creation",
    "Vendor coordination for hardware and software",
    "System uptime and reliability improvement initiatives",
    "Temperature monitoring for server room, UPS and power management"
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Work Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
            
            {/* Experience Item */}
            <div className="md:grid md:grid-cols-2 md:gap-12 relative">
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 top-8 w-8 h-8 rounded-full bg-background border-4 border-primary -translate-x-1/2 items-center justify-center z-10 shadow-sm">
                <Briefcase className="w-3 h-3 text-primary" />
              </div>

              {/* Mobile Timeline dot */}
              <div className="md:hidden absolute left-0 top-8 w-6 h-6 rounded-full bg-background border-4 border-primary -translate-x-1/2 items-center justify-center z-10 shadow-sm"></div>
              
              {/* Mobile Timeline line */}
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>

              {/* Left Side: Meta Info */}
              <div className="md:text-right pt-6 md:pt-6 pb-4 md:pb-0">
                <h3 className="text-2xl font-bold text-foreground mb-2">IT Manager</h3>
                <h4 className="text-lg font-medium text-primary mb-4">IT Infrastructure Administrator</h4>
                
                <div className="flex flex-col md:items-end gap-3 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span>Larsha Technologies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Current</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="pb-12 md:pb-0 md:pt-6">
                <Card className="border-border shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    <ul className="space-y-3">
                      {responsibilities.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span className="text-sm md:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
