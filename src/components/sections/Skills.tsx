import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Server, Network, Cpu, Zap, Activity, Package, Code2, HardDrive, ShieldCheck
} from "lucide-react";

const skillCategories = [
  {
    title: "IT Infrastructure",
    icon: <Server className="w-5 h-5" />,
    skills: ["IT Infrastructure Management", "IT Operations Management", "System Administration", "Technical Support", "IT Asset Management", "Backup Management", "Access Control Management"]
  },
  {
    title: "Networking",
    icon: <Network className="w-5 h-5" />,
    skills: ["Switch Management", "VLAN Configuration", "Firewall Management (Sophos)", "VPN Setup", "Remote Access Setup", "Network Troubleshooting", "Access Point Management"]
  },
  {
    title: "Servers & Virtualization",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["TrueNAS", "Proxmox", "VMware ESXi", "Windows Server", "Linux Servers (Debian/Ubuntu)", "Storage Servers", "Virtual Machines", "Docker (Basic)"]
  },
  {
    title: "Automation & Scripting",
    icon: <Zap className="w-5 h-5" />,
    skills: ["n8n Automation", "GLPI Automation", "Slack Automation", "PowerShell Scripting", "Bash Scripting", "Task Automation", "Process Automation"]
  },
  {
    title: "Monitoring Tools",
    icon: <Activity className="w-5 h-5" />,
    skills: ["Zabbix", "GLPI", "System Monitoring", "Network Monitoring", "Backup Monitoring", "Temperature Monitoring", "UPS Monitoring"]
  },
  {
    title: "Software & Licensing",
    icon: <Package className="w-5 h-5" />,
    skills: ["Autodesk License Management", "Adobe License Management", "V-Ray License Management", "Software Deployment", "Patch Management", "License Tracking"]
  },
  {
    title: "Development",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Basic Python", "PHP", "MySQL", "HTML", "CSS", "JavaScript (Basic)", "Building Internal Tools", "Web Portals", "Apache Web Server"]
  },
  {
    title: "Storage & Backup",
    icon: <HardDrive className="w-5 h-5" />,
    skills: ["NAS Storage Management", "TrueNAS Administration", "Backup Planning", "Backup Monitoring", "Data Recovery", "Shared Storage", "RAID Management"]
  },
  {
    title: "Security",
    icon: <ShieldCheck className="w-5 h-5" />,
    skills: ["Firewall Monitoring", "VPN Management", "Tailscale", "WireGuard", "Access Control", "User Permission Management", "Remote Access Security"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2
              className="text-3xl font-bold tracking-tight text-foreground mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Technical Skills
            </h2>
            <div className="w-14 h-1 rounded-full mx-auto mb-5" style={{ backgroundColor: "#1f3a5f" }}></div>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              A comprehensive toolkit for managing, securing, and automating modern IT environments at scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-secondary/40 hover:border-primary/25 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(31,58,95,0.10)", color: "#1f3a5f" }}
                  >
                    {category.icon}
                  </div>
                  <h3
                    className="text-base font-semibold text-foreground"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <Badge
                      key={sIdx}
                      variant="secondary"
                      className="px-2.5 py-1 text-xs font-medium bg-white border border-border/70 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
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
