import { motion } from "framer-motion";
import { Server, Shield, Activity, Users, Cloud, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const highlights = [
    {
      icon: <Server className="w-5 h-5" />,
      title: "Infrastructure Management",
      desc: "Managing 200+ desktop systems, laptops, and various servers including TrueNAS, Proxmox, and VMware ESXi.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Remote Support",
      desc: "Supporting 100+ remote freelancers with secure access via Tailscale, WireGuard, and VPNs.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Network Security",
      desc: "Configuring switches, VLANs, access points, and monitoring firewalls (Sophos).",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "IT Automation",
      desc: "Streamlining operations using n8n, GLPI, Slack integrations, and custom PowerShell/Bash scripts.",
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "System Monitoring",
      desc: "Ensuring high uptime with proactive monitoring using Zabbix and automated alerts.",
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Asset & License Management",
      desc: "Tracking software licenses (Autodesk, Adobe) and hardware assets efficiently.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
            <p>
              I manage complete IT infrastructure for a company including desktop systems, servers,
              network devices, software licenses, backups, automation, and user support. My work
              focuses on reducing downtime, automating repetitive IT tasks, improving system
              performance, and building reliable infrastructure.
            </p>
            <p>
              With extensive experience across hardware, software, networking, and server management,
              I take pride in creating environments where technology acts as an invisible enabler
              rather than a friction point. From setting up complex rendering workflows to securing
              remote access for hundreds of freelancers, I approach every challenge with precision
              and a mindset geared toward long-term stability.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-6">Key Responsibilities</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 bg-card hover:border-primary/20 transition-colors">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
