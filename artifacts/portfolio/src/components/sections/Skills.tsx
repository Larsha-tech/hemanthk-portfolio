import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "IT Infrastructure",
    skills: ["IT Infrastructure Management", "IT Operations Management", "System Administration", "Technical Support", "IT Asset Management", "Backup Management", "Access Control Management"]
  },
  {
    title: "Networking",
    skills: ["Switch Management", "VLAN Configuration", "Firewall Management (Sophos)", "VPN Setup", "Remote Access Setup", "Network Troubleshooting"]
  },
  {
    title: "Servers & Virtualization",
    skills: ["TrueNAS", "Proxmox", "VMware ESXi", "Windows Server", "Linux Servers (Debian/Ubuntu)", "Storage Servers", "Virtual Machines", "Docker (Basic)"]
  },
  {
    title: "Automation & Scripting",
    skills: ["n8n Automation", "GLPI Automation", "Slack Automation", "PowerShell Scripting", "Bash Scripting", "Task Automation", "Process Automation"]
  },
  {
    title: "Monitoring Tools",
    skills: ["Zabbix", "GLPI", "System Monitoring", "Network Monitoring", "Backup Monitoring"]
  },
  {
    title: "Software & Licensing",
    skills: ["Autodesk License Management", "Adobe License Management", "Software Deployment", "Patch Management"]
  },
  {
    title: "Development",
    skills: ["Basic Python", "PHP", "MySQL", "HTML", "CSS", "JavaScript (Basic)", "Building Internal Tools", "Web Portals"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Technical Skills</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive toolkit for managing, securing, and automating modern IT environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col gap-4"
              >
                <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <Badge 
                      key={sIdx} 
                      variant="secondary" 
                      className="px-3 py-1.5 font-medium text-sm bg-muted hover:bg-muted/80 text-muted-foreground border-transparent"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
