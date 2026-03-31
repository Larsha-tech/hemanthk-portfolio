import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Workflow, Database, Shield, Layout, Package, MessageSquare } from "lucide-react";

const projects = [
  {
    title: "Unreal Engine Distributed Render Farm",
    description: "Built a distributed render farm system with a master node and multiple render nodes. Features a job distribution system, node status monitoring, and a job cancel system per node. Significantly improved rendering workflow and reduced render time.",
    tags: ["Distributed Computing", "Node Management", "Job Scheduling", "Rendering"],
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "IT Automation System",
    description: "Automated ticket alerts to Slack, daily IT reports, and notifications using n8n and GLPI integration. Dramatically reduced manual IT work and improved response times.",
    tags: ["n8n", "GLPI", "Slack", "Automation"],
    icon: <Workflow className="w-6 h-6" />
  },
  {
    title: "TrueNAS Central Storage System",
    description: "Centralized file server with user permissions, automated backup system, and shared storage for the entire team. Ensures data reliability and team collaboration.",
    tags: ["TrueNAS", "NAS", "Backup", "Storage"],
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Remote Access VPN System",
    description: "Secure remote access infrastructure for 100+ freelancers using Tailscale and WireGuard. Enables secure file access and remote work support from anywhere.",
    tags: ["VPN", "Tailscale", "WireGuard", "Remote Access"],
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Healthcare Portal",
    description: "PHP and MySQL-based web portal with user authentication, data management, and administrative interfaces.",
    tags: ["PHP", "MySQL", "Web Development"],
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "IT Asset & License Management",
    description: "Comprehensive tracking system for software licenses, hardware assets, and user assignments. Built using GLPI with custom automation.",
    tags: ["GLPI", "Asset Management", "License Tracking"],
    icon: <Package className="w-6 h-6" />
  },
  {
    title: "Office LAN Messaging Tool",
    description: "Python-based internal messaging system enabling broadcast messages to multiple computers on the local network.",
    tags: ["Python", "LAN", "Internal Tools", "Networking"],
    icon: <MessageSquare className="w-6 h-6" />
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcasing robust systems, automated workflows, and internal tools built to solve real operational challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col border-border/60 hover:border-primary/30 hover:shadow-md transition-all">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl leading-tight text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <Badge 
                        key={tIdx} 
                        variant="outline" 
                        className="font-medium text-xs text-muted-foreground/80 border-border/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
