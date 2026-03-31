import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Complete IT infrastructure management for the entire organization — servers, networks, and endpoints",
  "Server management: TrueNAS, Proxmox, VMware ESXi, Windows Server, Linux (Debian/Ubuntu)",
  "Network management: managed switches, VLANs, access points, and Sophos firewall monitoring",
  "IT automation: n8n workflows, GLPI ticketing automation, and Slack alert integrations",
  "User support: managing and maintaining 200+ desktop systems and laptops",
  "Remote user management: secure VPN access for 100+ freelancers using Tailscale and WireGuard",
  "Backup systems: NAS backup configuration, automated monitoring, and disaster recovery planning",
  "Security and access control: user permissions, domain management, firewall policies, and VPN security",
  "Software license management: Autodesk, Adobe, V-Ray, and other enterprise software licenses",
  "IT asset management: hardware tracking, lifecycle management, and inventory using GLPI",
  "Monitoring: Zabbix-based infrastructure monitoring with proactive alerting and dashboards",
  "PowerShell and Bash scripting for automation, system tasks, and custom internal tools",
  "Web server management: Apache, PHP, MySQL for internal portals and company website",
  "IT documentation: maintaining knowledge base, procedures, and runbooks",
  "Vendor coordination: hardware and software procurement and support management",
  "System uptime improvement: proactive maintenance, patch management, and performance tuning",
  "Server room management: cable organization, temperature monitoring, and UPS management",
  "Troubleshooting and escalation handling for hardware, software, and network issues",
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
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
            Work Experience
          </h2>
          <div className="w-14 h-1 rounded-full mx-auto" style={{ backgroundColor: "#1f3a5f" }}></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Experience Card */}
            <div className="rounded-xl border border-border bg-white shadow-sm overflow-hidden">
              {/* Header bar */}
              <div
                className="px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                style={{ backgroundColor: "#1f3a5f" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-white leading-tight"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      IT Manager / IT Infrastructure Administrator
                    </h3>
                    <p
                      className="text-white/70 text-sm mt-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Full-stack IT management — infrastructure, automation, security & support
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:items-end shrink-0">
                  <div className="flex items-center gap-2 text-white/80 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <Building2 className="w-4 h-4" />
                    <span>Larsha Technologies</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <MapPin className="w-4 h-4" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#93c5fd", fontFamily: "'Inter', sans-serif" }}>
                    <Calendar className="w-4 h-4" />
                    <span>Current Position</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="px-6 py-6">
                <h4
                  className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Key Responsibilities
                </h4>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {responsibilities.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: "#1f3a5f" }}
                      />
                      <span
                        className="text-sm text-muted-foreground leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
