"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Palette, 
  ShoppingBag, 
  Zap, 
  Globe, 
  Database,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  icon: any;
  description: string;
  skills: { name: string; level: number; tags: string[] }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: Palette,
    description: "Creating responsive, fast, and interactive user interfaces with modern frameworks.",
    skills: [
      { name: "React.js & Next.js", level: 95, tags: ["App Router", "SSR", "SSG", "Hooks"] },
      { name: "JavaScript & TypeScript", level: 90, tags: ["ES6+", "Typed Architecture", "Async"] },
      { name: "Tailwind CSS & CSS3", level: 95, tags: ["Responsive UI", "Animations", "Flex/Grid"] },
      { name: "HTML5 & Web Semantics", level: 95, tags: ["Accessibility", "SEO HTML", "Core Web Vitals"] },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: Database,
    description: "Architecting secure server environments, database schemas, and RESTful APIs.",
    skills: [
      { name: "Node.js & Express", level: 85, tags: ["REST APIs", "Middleware", "Server Logic"] },
      { name: "Database Architecture", level: 85, tags: ["PostgreSQL", "Supabase", "MongoDB"] },
      { name: "Authentication & Security", level: 85, tags: ["JWT", "OAuth", "Role-Based Access"] },
      { name: "API Integration & Webhooks", level: 90, tags: ["Third-Party APIs", "Webhooks", "JSON"] },
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Shopify",
    icon: ShoppingBag,
    description: "Developing custom Shopify themes, liquid templates, and conversion-optimized stores.",
    skills: [
      { name: "Shopify Theme Development", level: 95, tags: ["Liquid", "Custom Sections", "Dawn Theme"] },
      { name: "Store Customization & Apps", level: 95, tags: ["App Integrations", "Custom Features"] },
      { name: "Conversion Rate Optimization", level: 90, tags: ["Speed Tuning", "Checkout UX", "Mobile First"] },
      { name: "E-Commerce Architecture", level: 90, tags: ["Inventory Sync", "Payment Gateways", "SEO"] },
    ],
  },
  {
    id: "nocode",
    name: "No-Code & SaaS (Bubble.io)",
    icon: Globe,
    description: "Building scalable SaaS applications, workflows, and dashboards with Bubble.io.",
    skills: [
      { name: "Bubble.io SaaS Development", level: 95, tags: ["Full-Stack No-Code", "SaaS Apps", "Dashboards"] },
      { name: "Workflow & Logic Automation", level: 95, tags: ["Complex Logic", "Backend Workflows", "Triggers"] },
      { name: "API Connector & Integrations", level: 90, tags: ["External APIs", "Stripe", "Webhooks"] },
      { name: "Database Tuning & Performance", level: 90, tags: ["Privacy Rules", "Data Structure", "Optimization"] },
    ],
  },
  {
    id: "programming",
    name: "Programming & Tools",
    icon: Cpu,
    description: "Writing clean, scalable code and using modern developer tooling and version control.",
    skills: [
      { name: "JavaScript & TypeScript Programming", level: 90, tags: ["Data Structures", "Algorithms", "OOP"] },
      { name: "Software Architecture & Scalability", level: 85, tags: ["Clean Code", "Design Patterns", "Modularity"] },
      { name: "Git, GitHub & CI/CD", level: 90, tags: ["Version Control", "Branches", "Automated Deployments"] },
      { name: "Problem Solving & Debugging", level: 95, tags: ["Bug Fixing", "Optimization", "Testing"] },
    ],
  },
];

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const displayedCategories = activeTab === "all" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of modern full-stack development, e-commerce engineering, and no-code SaaS capabilities.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "all"
                ? "bg-primary text-primary-foreground shadow-lg glow-primary"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg glow-primary"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              <cat.icon size={15} />
              <span>{cat.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group p-6 lg:p-8 rounded-2xl glass hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <category.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg">{category.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-1">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 my-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center text-sm mb-1.5">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className="h-full rounded-full bg-gradient-primary"
                          />
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/50 text-muted-foreground font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
