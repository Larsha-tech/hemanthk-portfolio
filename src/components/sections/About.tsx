import { motion } from "framer-motion";
import {
  Server, Shield, Activity, Users, Zap, HardDrive
} from "lucide-react";

const highlights = [
  {
    icon: <Server className="w-5 h-5" />,
    title: "Infrastructure at Scale",
    desc: "200+ endpoints, multi-server environment, and the full network — kept running reliably around the clock.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Remote Workforce Access",
    desc: "Always-on, zero-downtime VPN connectivity for 100+ distributed freelancers.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "IT Automation",
    desc: "Ticket alerts, daily reports, and workflows fully automated — manual effort reduced to near zero.",
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Proactive Monitoring",
    desc: "Real-time alerts across servers, network, and server room environment. Issues resolved before users notice.",
  },
  {
    icon: <HardDrive className="w-5 h-5" />,
    title: "Data Protection",
    desc: "Centralized shared storage, automated backup schedules, and tested disaster recovery procedures.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Software Compliance",
    desc: "License tracking for Autodesk, Adobe & V-Ray with renewal alerts and complete audit trails.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: "var(--portfolio-section-alt)" }}>
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
            <div className="w-14 h-1 rounded-full mx-auto" style={{ backgroundColor: "var(--portfolio-accent)" }}></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            {/* Left: Summary text */}
            <div className="lg:col-span-3 space-y-5">
              <p
                className="text-base text-foreground/80 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                I manage the complete IT operations of House of Blue Beans (HOBB) — 200+ endpoints, multi-server infrastructure, network security, and automation pipelines that keep the organization running efficiently at all times.
              </p>
              <p
                className="text-base text-foreground/80 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                My approach is systems-first: build once, automate everything, monitor proactively. From centralized storage and VPN access for 100+ remote freelancers to zero-manual ticketing and real-time infrastructure alerts, every solution is designed to reduce operational overhead and prevent downtime.
              </p>
            </div>

            {/* Right: Quick facts */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-white dark:bg-card p-6 shadow-sm space-y-4">
                <h3
                  className="text-base font-semibold text-foreground mb-5 pb-3 border-b border-border"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Quick Facts
                </h3>
                {[
                  { label: "Role", value: "Manager - IT, Production Automation & Infrastructure" },
                  { label: "Company", value: "House of Blue Beans (HOBB)" },
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
                      style={{ color: "var(--portfolio-accent)", fontFamily: "'Inter', sans-serif" }}
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

          {/* Competencies grid */}
          <div>
            <h3
              className="text-xl font-semibold text-foreground mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Core Competencies
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-white dark:bg-card hover:border-primary/25 hover:shadow-sm transition-all"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--portfolio-icon-bg)", color: "var(--portfolio-accent)" }}
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
