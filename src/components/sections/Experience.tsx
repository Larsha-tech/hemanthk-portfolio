import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2, GraduationCap, BookOpen } from "lucide-react";

const currentResponsibilities = [
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
  "Server room management: cable organization, temperature monitoring, and UPS management",
];

const previousRoles = [
  {
    title: "IT Administrator",
    company: "Coequal Services",
    period: "Jan 2023 – Sep 2023",
    location: "Bangalore, India",
    points: [
      "Directed budgeting studies on current and proposed IT spending plans, determining impactful business enhancements",
      "Oversaw on-site IT engineer dispatch plans, creating predefined response scenarios for common malfunctions",
      "Interfaced with high-level client personnel, collecting performance feedback and integrating into IT policies",
      "Led technical upgrade projects for clients, coordinating with consultants and developers",
      "Diagnosed and resolved hardware and software issues across client environments",
      "Designed and evaluated WAN and LAN connectivity technologies",
      "Analyzed network traffic and performance metrics to optimize system performance",
      "Planned and implemented upgrades to system hardware and software",
    ],
  },
  {
    title: "Office Administrator",
    company: "Mipl Global",
    period: "2021 – 2022",
    location: "Bangalore, India",
    points: [
      "Assisted executive secretary in managing and coordinating schedules, meetings, and travel arrangements",
      "Coordinated client sample preparation and courier & documents pickup",
    ],
  },
  {
    title: "Office Administrator",
    company: "Olympus Medical Systems India Pvt Ltd",
    period: "2019 – 2021",
    location: "Bangalore, India",
    points: [
      "Answered multi-line phone system, routing calls, delivering messages and greeting visitors",
      "Applied advanced administrative and analytical skills in overseeing day-to-day operational activities",
      "Coordinated communications, financial processing, registration, and recordkeeping functions",
      "Maintained electronic and paper filing systems for easy retrieval of information",
      "Assisted in preparation and processing of payroll to facilitate prompt staff payments",
      "Oversaw maintenance of office facilities and equipment by collaborating with repair contractors",
    ],
  },
  {
    title: "Field Representative",
    company: "Hbs (Halcyon Business Solutions)",
    period: "2018 – 2019",
    location: "Bangalore, India",
    points: [
      "Traveled daily to visit customer locations and provide on-site support",
      "Strengthened merchandising and promotional strategies to drive customer engagement",
      "Connected with customers to assess satisfaction and resolve service issues",
      "Submitted reports to senior management to aid in business decision-making",
    ],
  },
];

const education = [
  {
    degree: "ITI Diploma in Electronics",
    institution: "ITI",
    period: "2016 – 2017",
  },
  {
    degree: "High School Diploma",
    institution: "St Patrick's Boys High School",
    period: "2015 – 2016",
  },
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

        <div className="max-w-5xl mx-auto space-y-8">

          {/* Current Role — Larsha Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl border border-border bg-white shadow-sm overflow-hidden">
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
                    <p className="text-white/70 text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
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
                    <span>Bangalore, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#93c5fd", fontFamily: "'Inter', sans-serif" }}>
                    <Calendar className="w-4 h-4" />
                    <span>Current Position</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-6">
                <h4
                  className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Key Responsibilities
                </h4>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {currentResponsibilities.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#1f3a5f" }} />
                      <span className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Previous Roles */}
          <div>
            <h3
              className="text-lg font-semibold text-foreground mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Previous Experience
            </h3>
            <div className="space-y-4">
              {previousRoles.map((role, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-xl border border-border bg-white shadow-sm overflow-hidden"
                >
                  <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-border bg-secondary/40">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgba(31,58,95,0.09)", color: "#1f3a5f" }}
                      >
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {role.title}
                        </p>
                        <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {role.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground shrink-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {role.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <ul className="space-y-2">
                      {role.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex gap-2 items-start text-sm text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "#1f3a5f" }} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3
              className="text-lg font-semibold text-foreground mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Education
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 rounded-xl border border-border bg-white shadow-sm hover:border-primary/25 hover:shadow-md transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(31,58,95,0.09)", color: "#1f3a5f" }}
                  >
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {edu.degree}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {edu.institution}
                    </p>
                    <p className="text-xs mt-1 flex items-center gap-1" style={{ color: "#1f3a5f", fontFamily: "'Inter', sans-serif" }}>
                      <BookOpen className="w-3 h-3" />
                      {edu.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
