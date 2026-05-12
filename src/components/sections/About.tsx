import { motion } from "framer-motion";
import {
  Server, Shield, Activity, Users, Cloud, Zap, HardDrive, FileText, Network, Thermometer
} from "lucide-react";

const highlights = [
  {
    icon: <Server className="w-5 h-5" />,
    title: "Infrastructure Management",
    desc: "Managing 200+ desktop systems, laptops, and multiple servers including TrueNAS, Proxmox, VMware ESXi, and Windows Server.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Remote User Support",
    desc: "Supporting 100+ remote freelancers with secure access via Tailscale and WireGuard VPN solutions.",
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "Network Management",
    desc: "Configuring and managing switches, VLANs, access points, and monitoring firewalls (Sophos) for secure network operations.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "IT Automation",
    desc: "Streamlining IT operations using n8n, GLPI, and Slack integrations. Writing PowerShell and Bash scripts to automate repetitive tasks.",
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Monitoring & Alerting",
    desc: "Proactive infrastructure monitoring with Zabbix, temperature monitoring for the server room, and UPS power management.",
  },
  {
    icon: <HardDrive className="w-5 h-5" />,
    title: "Storage & Backup",
    desc: "Managing NAS shared storage, automated backup systems, data recovery planning, and backup monitoring.",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "License & Asset Management",
    desc: "Tracking software licenses (Autodesk, Adobe, V-Ray) and hardware assets through a centralized GLPI system.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Security & Access Control",
    desc: "Managing user permissions, domain accounts, VPN access, and firewall policies to maintain a secure IT environment.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Documentation & Vendor Coordination",
    desc: "Maintaining IT knowledge base, procedure documentation, and coordinating with hardware/software vendors.",
  },
  {
    icon: <Thermometer className="w-5 h-5" />,
    title: "Server Room Management",
    desc: "Cable management, server room setup, temperature monitoring, and UPS power management to ensure hardware longevity.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: "#f5f7fa" }}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-14">
            <h2
              className="text-3xl font-bold tracking-tight text-foreground mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              About Me
            </h2>
            <div className="w-14 h-1 rounded-full mx-auto" style={{ backgroundColor: "#1f3a5f" }}></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            {/* Left: Summary text */}
            <div className="lg:col-span-3 space-y-5">
              <p
                className="text-base text-foreground/80 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                I am an experienced IT Infrastructure Specialist and IT Manager responsible for the complete IT operations of Larsha Technologies. My role encompasses managing 200+ desktop systems and laptops, maintaining multiple servers including TrueNAS, Proxmox, VMware ESXi, and Windows Server, and ensuring the entire organization's technology runs reliably and efficiently.
              </p>
              <p
                className="text-base text-foreground/80 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                I architect and maintain the network infrastructure — including managed switches, VLANs, access points, and Sophos firewall — and provide secure remote access for 100+ freelancers through Tailscale and WireGuard VPN. My expertise in automation (n8n, GLPI, Slack, PowerShell, Bash) has significantly reduced manual workload across the IT department.
              </p>
              <p
                className="text-base text-foreground/80 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Beyond day-to-day operations, I have built specialized systems including a distributed Unreal Engine render farm, centralized NAS storage, healthcare web portals, and comprehensive monitoring infrastructure. I manage software license compliance for Autodesk, Adobe, and V-Ray tools, maintain server room infrastructure with temperature monitoring and UPS management, and document all IT procedures to build a solid knowledge base for the organization.
              </p>
            </div>

            {/* Right: Quick facts */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm space-y-4">
                <h3
                  className="text-base font-semibold text-foreground mb-5 pb-3 border-b border-border"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Quick Facts
                </h3>
                {[
                  { label: "Role", value: "IT Manager / IT Infrastructure Admin" },
                  { label: "Company", value: "Larsha Technologies" },
                  { label: "Location", value: "Hennur, Bangalore, Karnataka" },
                  { label: "Email", value: "Hemanth2608@hotmail.com" },
                  { label: "Phone", value: "+91 80884 61724" },
                  { label: "Experience", value: "6+ Years" },
                  { label: "Systems", value: "200+ Managed" },
                  { label: "Languages", value: "English, Tamil, Kannada, Hindi, Telugu" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span
                      className="font-medium shrink-0 w-28"
                      style={{ color: "#1f3a5f", fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.label}
                    </span>
                    <span className="text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Responsibilities grid */}
          <div>
            <h3
              className="text-xl font-semibold text-foreground mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Key Responsibilities
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-white hover:border-primary/25 hover:shadow-sm transition-all"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(31,58,95,0.09)", color: "#1f3a5f" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-foreground text-sm mb-1.5"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-xs text-muted-foreground leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
